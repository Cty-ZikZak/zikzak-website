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
SCALE = 0.6  # 2000px -> 1200px, đủ nét cho hiển thị tới ~600px @2x

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

def save(name, mask, pad=4):
    ys, xs = np.nonzero(mask)
    y0, y1 = max(ys.min() - pad, 0), min(ys.max() + pad + 1, im.shape[0])
    x0, x1 = max(xs.min() - pad, 0), min(xs.max() + pad + 1, im.shape[1])
    crop = im[y0:y1, x0:x1].copy()
    m = mask[y0:y1, x0:x1]
    crop[..., 3] = np.where(m, crop[..., 3], 0)
    img = Image.fromarray(crop, 'RGBA')
    w, h = round((x1 - x0) * SCALE), round((y1 - y0) * SCALE)
    img = img.resize((w, h), Image.LANCZOS)
    img.save(f'{OUT}/{name}.webp', 'WEBP', quality=92, method=6)
    meta['pieces'][name] = {'x': int(x0), 'y': int(y0), 'w': int(x1 - x0), 'h': int(y1 - y0)}

# Viền xanh tím là đường viền riêng của từng chữ / mắt / miệng:
# mỗi phần = vùng gần nó nhất + toàn bộ viền xanh tím trong bán kính OUTLINE quanh phần ruột của nó.
# Các phần chồng lên nhau ở viền (cùng màu), nên khi chuyển động không lộ khe hở.
OUTLINE = 48
# Mắt là phần "nổi" phía trên chữ: giữ trọn vùng của mắt, viền chữ không lấn sang vùng mắt
# (tránh lộ những sợi viền lạc khi mắt chớp / liếc).
eye_zone = np.isin(part, [names.index('eye1') + 1, names.index('eye2') + 1])
for i, k in enumerate(names):
    region = part == i + 1
    if k.startswith('eye'):
        save(k, region)
        continue
    inner = region & ~indigo_m & opaque
    near = ndi.distance_transform_edt(~inner) <= OUTLINE
    ext = ndi.binary_opening(near & indigo_m & word, iterations=3)
    # chỉ giữ phần viền dính liền với chính phần đó (bỏ sợi viền lạc của phần bên cạnh)
    lab_ext, _ = ndi.label(ext | region)
    keep = np.unique(lab_ext[region])
    own = np.isin(lab_ext, keep[keep > 0]) & ext
    # lấn vào vùng mắt tối đa 28px: đủ lấp khe khi chữ và mắt lệch nhịp, không tạo "sừng"
    near_eye = ndi.distance_transform_edt(~inner) <= 28
    # bỏ những nét mảnh nhọn (hiện thành "gai" khi mắt nhắm), chỉ giữ phần đặc để lấp khe
    into_eye = ndi.binary_opening(own & eye_zone & near_eye, iterations=7)
    mask = region | (own & ~eye_zone) | into_eye
    save(k, mask)

# Lớp lấp khe: viền xanh tím nằm sâu bên trong khối chữ (cách mép ngoài > 18px),
# không phủ vùng mắt. Bị các chữ che kín khi đứng yên, chỉ lộ ra ở khe giữa hai chữ khi chúng nhún lệch nhịp.
inside = ndi.distance_transform_edt(word) > 18
eyes_inner = eye_zone & ~indigo_m & opaque
clear_of_eyes = ndi.distance_transform_edt(~eyes_inner) > 34
filler = word & indigo_m & inside & clear_of_eyes
filler = ndi.binary_opening(filler, iterations=3)
save('filler', filler)

save('tagline', tag)
json.dump(meta, open(f'{OUT}/meta.json', 'w'), indent=1)
print(json.dumps(meta['pieces']))
