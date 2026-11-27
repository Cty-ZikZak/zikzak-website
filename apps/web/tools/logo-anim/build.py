"""
Tách logo ZikZak thành các lớp cho logo chuyển động (components/AnimatedLogo.jsx).

Chạy lại khi logo thay đổi:
  pip install numpy scipy pillow
  python tools/logo-anim/build.py tools/logo-anim/zikzak-logo-2025.webp public/brand/logo-anim
Nếu kích thước/vị trí lớp đổi, cập nhật bảng P trong AnimatedLogo.jsx theo meta.json.
"""
import json, sys
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

SRC = sys.argv[1]
OUT = sys.argv[2]
SCALE = 1.0  # giữ nguyên độ phân giải gốc 2000px cho nét sắc trên màn hình lớn / retina

im = np.array(Image.open(SRC).convert('RGBA'))
R, G, B, A = [im[..., i].astype(int) for i in range(4)]
opaque = A > 127
indigo_m = opaque & (B > 140) & (R < 80) & (G < 50)
sil = ndi.binary_fill_holes(indigo_m)
lab, n = ndi.label(sil)
sizes = ndi.sum(sil, lab, range(1, n + 1))
order = np.argsort(sizes)[::-1]
word = lab == order[0] + 1
tag = lab == order[1] + 1

green = word & (G > 200) & (R < 80) & (B < 160)
cyan = word & (R < 60) & (G > 220) & (B > 220)
yellow = word & (R > 200) & (G > 200) & (B < 110)
white = word & (R > 215) & (G > 215) & (B > 215)
blue_rim = word & (R < 60) & (G > 60) & (G < 170) & (B > 200)

def comp_at(mask, y, x):
    l, _ = ndi.label(mask)
    return l == l[y, x]

# Hạt giống cho từng phần (toạ độ y, x lấy từ phân tích màu)
seeds = {
    'z1': comp_at(green, 600, 520),
    'i': comp_at(yellow, 550, 714) | comp_at(yellow, 660, 714),
    'k1': None, 'z2': None, 'a': comp_at(yellow, 640, 1300), 'k2': None,
    'eye1': comp_at(white, 425, 765), 'eye2': comp_at(white, 425, 1370),
    'mouth': comp_at(white, 600, 1015),
}
# chọn đúng thành phần theo bbox đã đo
def comp_in(mask, y0, y1, x0, x1):
    l, _ = ndi.label(mask)
    best, cnt = 0, 0
    for i, sl in enumerate(ndi.find_objects(l)):
        if sl[0].start >= y0 - 5 and sl[0].stop <= y1 + 5 and sl[1].start >= x0 - 5 and sl[1].stop <= x1 + 5:
            c = (l[sl] == i + 1).sum()
            if c > cnt: best, cnt = i + 1, c
    return l == best
seeds['z1'] = comp_in(green, 342, 843, 411, 729)
seeds['z2'] = comp_in(green, 390, 832, 1032, 1308)
seeds['k1'] = comp_in(cyan, 394, 835, 779, 999)
seeds['k2'] = comp_in(cyan, 388, 813, 1422, 1640)
seeds['eye1'] = comp_in(white, 349, 505, 717, 811)
seeds['eye2'] = comp_in(white, 346, 502, 1322, 1416)
seeds['mouth'] = comp_in(white, 520, 673, 940, 1092)
seeds['a'] = comp_in(yellow, 526, 757, 1229, 1392)
seeds['i'] = comp_in(yellow, 522, 585, 684, 744) | comp_in(yellow, 600, 729, 682, 747)

names = list(seeds)
seedlab = np.zeros(word.shape, np.int32)
for i, k in enumerate(names):
    assert seeds[k].sum() > 1000, k
    seedlab[seeds[k]] = i + 1
_, (iy, ix) = ndi.distance_transform_edt(seedlab == 0, return_indices=True)
part = np.where(word, seedlab[iy, ix], 0)

meta = {'width': im.shape[1], 'height': im.shape[0], 'scale': SCALE, 'pieces': {}}

def bbox(mask, pad=4):
    ys, xs = np.nonzero(mask)
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad + 1, im.shape[0])
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad + 1, im.shape[1])
    return y0, y1, x0, x1

def write(file, rgba, mask, box):
    y0, y1, x0, x1 = box
    crop = rgba[y0:y1, x0:x1].copy()
    crop[..., 3] = np.where(mask[y0:y1, x0:x1], crop[..., 3], 0)
    img = Image.fromarray(crop.astype(np.uint8), 'RGBA')
    img = img.resize((round((x1 - x0) * SCALE), round((y1 - y0) * SCALE)), Image.LANCZOS)
    img.save(f'{OUT}/{file}.webp', 'WEBP', quality=95, alpha_quality=100, method=6)

def record(name, box):
    y0, y1, x0, x1 = box
    meta['pieces'][name] = {'x': int(x0), 'y': int(y0), 'w': int(x1 - x0), 'h': int(y1 - y0)}

# 1) Nền xanh tím cố định: toàn bộ khối chữ (giữ mép mềm của logo gốc).
backdrop = im.copy()
backdrop[..., 0], backdrop[..., 1], backdrop[..., 2] = 0x19, 0x00, 0xC8
# Lớp nền: mép mềm, lùi vào ~3px để mép ngoài do chính viền chữ tạo ra (mịn như logo gốc)
_inside = ndi.distance_transform_edt(word)
backdrop_soft = backdrop.copy()
backdrop_soft[..., 3] = (np.clip((_inside - 1.5) / 3.0, 0, 1) * 255).astype(np.uint8)
# Khoét vùng mắt khỏi nền (trừ phần sát chữ), để khi mắt nhắm không lộ mảng xanh tím phía trên
eye_parts = np.isin(part, [names.index('eye1') + 1, names.index('eye2') + 1])
letter_fill = word & ~indigo_m & opaque & ~eye_parts & (part != names.index('mouth') + 1)
near_letter = ndi.distance_transform_edt(~letter_fill) <= 30
back_mask = word & ~(eye_parts & ~near_letter)
back_mask = ndi.binary_opening(back_mask, iterations=2) | (word & ~eye_parts)
box = bbox(word)
write('backdrop', backdrop_soft, word, box)  # nền đầy đủ (mắt không còn co lại nên không cần khoét)
record('backdrop', box)

# 2) Mỗi phần tách thành 2 lớp cùng khung:
#    -o: viền xanh tím của phần đó   -f: phần màu (ruột, viền xanh dương, điểm sáng trắng)
#    Trên web: vẽ tất cả lớp -o trước, rồi tất cả lớp -f, nên viền không bao giờ đè lên màu của phần khác.
indigo_core = ndi.binary_erosion(indigo_m, iterations=1)
for i, k in enumerate(names):
    region = ndi.binary_closing(part == i + 1, iterations=2) & word
    box = bbox(region)
    fill = region & ~indigo_core & opaque
    fill = ndi.binary_fill_holes(fill) & region & ~(indigo_core & ~ndi.binary_dilation(fill & ~indigo_m, iterations=2))
    outline = region
    write(f'{k}-o', backdrop, outline, box)
    write(f'{k}-f', im, fill, box)
    record(k, box)

box = bbox(tag)
write('tagline', im, tag, box)
record('tagline', box)
json.dump(meta, open(f'{OUT}/meta.json', 'w'), indent=1)
print(json.dumps(meta['pieces']))
