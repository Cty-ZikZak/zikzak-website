#!/usr/bin/env python3
"""
Tách logo ZikZak từ file Illustrator EPS thành dữ liệu vector cho logo chuyển động.

  apt-get install ghostscript poppler-utils     # hoặc brew install ghostscript poppler
  python3 tools/logo-anim/extract-eps.py tools/logo-anim/ZikZak_Logo.eps src/site/components/zikzakLogoPaths.js

File EPS gồm 2 phiên bản logo (trái: nền xanh, phải: nền trắng). Script lấy bản bên phải (x > 300).
Cấu trúc nét trong EPS (theo thứ tự): hình tròn → nền xanh tím nguyên khối → viền xanh dương từng chữ →
ruột màu từng chữ → các chi tiết trắng (mắt, miệng) → khẩu hiệu.
Nếu thiết kế mới thay đổi số lượng nét, chạy lại script và đối chiếu bảng ROLES bên dưới.
"""
import json, re, subprocess, sys, tempfile, os

src, out = sys.argv[1], sys.argv[2]
tmp = tempfile.mkdtemp()
pdf, svg = os.path.join(tmp, 'logo.pdf'), os.path.join(tmp, 'logo.svg')
subprocess.run(['gs', '-q', '-dNOPAUSE', '-dBATCH', '-dEPSCrop', '-sDEVICE=pdfwrite', f'-sOutputFile={pdf}', src], check=True)
subprocess.run(['pdftocairo', '-svg', pdf, svg], check=True)

text = open(svg).read()
paths = []
for m in re.finditer(r'<path ([^>]*)/>', text):
    attrs = m.group(1)
    d = re.search(r' d="([^"]*)"', attrs)
    fill = re.search(r'fill="([^"]*)"', attrs)
    if not d or not fill:
        continue
    nums = [float(x) for x in re.findall(r'-?\d+\.?\d*', d.group(1))]
    paths.append({'d': d.group(1), 'x0': min(nums[0::2]), 'x1': max(nums[0::2]), 'y0': min(nums[1::2]), 'y1': max(nums[1::2])})


def compact(d):
    """Làm tròn 2 chữ số thập phân và bỏ khoảng trắng thừa để file nhẹ."""
    d = re.sub(r'-?\d+\.\d+', lambda m: ('%.2f' % float(m.group())).rstrip('0').rstrip('.'), d)
    d = re.sub(r'\s*([MLCZ])\s*', r'\1', d.strip())
    return re.sub(r'\s+', ' ', d)


right = [p for p in paths if p['x0'] > 300]


def pick(x0, y0, x1, y1, tol=1.2):
    for p in right:
        if abs(p['x0'] - x0) < tol and abs(p['y0'] - y0) < tol and abs(p['x1'] - x1) < tol and abs(p['y1'] - y1) < tol:
            return compact(p['d'])
    raise SystemExit(f'không tìm thấy nét ở {(x0, y0, x1, y1)}')


# Vai trò từng nét (toạ độ khung bao trong EPS, bản bên phải)
ROLES = {
    'circles': {
        'yellow': pick(310.1, 27.4, 381.5, 102.1),
        'blue': pick(455.2, 11.2, 492.9, 48.8),
        'cyan': pick(403.4, 60.8, 488.3, 145.6),
    },
    'backdrop': pick(336.2, 35.3, 477.6, 96.2),
    'pieces': {
        'z1': {'rim': pick(339.1, 35.6, 377.4, 94.0), 'fill': [pick(339.7, 36.2, 374.5, 90.8)]},
        'i': {'rim': [pick(368.5, 63.7, 379.8, 79.7), pick(368.2, 55.2, 379.6, 65.1)], 'fill': [pick(369.2, 64.3, 376.4, 78.6), pick(368.9, 55.8, 376.4, 63.0)]},
        'k1': {'rim': pick(379.1, 41.3, 406.5, 91.3), 'fill': [pick(379.8, 41.9, 403.9, 90.0)]},
        'z2': {'rim': pick(406.5, 40.9, 439.5, 91.6), 'fill': [pick(407.1, 41.5, 437.4, 89.7)]},
        'a': {'rim': pick(427.8, 55.6, 448.2, 84.4), 'fill': [pick(428.5, 56.3, 446.4, 81.5)]},
        'k2': {'rim': pick(449.0, 40.7, 478.3, 89.6), 'fill': [pick(449.6, 41.3, 473.4, 87.7)]},
        'mouth': {'rim': pick(396.6, 54.9, 415.3, 73.9), 'fill': [pick(397.2, 55.5, 415.7, 72.3)]},
        'eye1': {'rim': pick(372.4, 36.7, 384.8, 55.7), 'fill': [pick(373.0, 37.0, 383.4, 54.1)]},
        'eye2': {'rim': pick(438.1, 36.4, 450.4, 55.4), 'fill': [pick(438.7, 36.6, 449.0, 53.8)]},
    },
    'tagline': {
        'back': pick(352.7, 97.2, 461.5, 106.9),
        # mọi chữ trắng của khẩu hiệu gộp thành một nét
        'white': ' '.join(compact(p['d']) for p in right if p['y0'] > 98 and p['y1'] < 106 and p['x0'] > 352 and p['x1'] < 460 and p['x1'] - p['x0'] < 9),
    },
}
for k in ROLES['pieces']:
    for part in ('rim', 'fill'):
        if isinstance(ROLES['pieces'][k][part], str):
            ROLES['pieces'][k][part] = [ROLES['pieces'][k][part]]

def bbox_of(ds):
    nums = [float(x) for d in ds for x in re.findall(r'-?\d+\.?\d*', d)]
    xs, ys = nums[0::2], nums[1::2]
    return [round(min(xs), 2), round(min(ys), 2), round(max(xs), 2), round(max(ys), 2)]


# Khung bao của từng phần (dùng làm điểm tựa chuyển động) và của cả khối chữ
for k, piece in ROLES['pieces'].items():
    piece['bbox'] = bbox_of(piece['rim'])
ROLES['wordmarkBox'] = bbox_of([ROLES['backdrop']])
ROLES['taglineBox'] = bbox_of([ROLES['tagline']['back']])
ROLES['circleBox'] = {k: bbox_of([d]) for k, d in ROLES['circles'].items()}

# Khung nhìn quanh logo (đơn vị EPS)
ROLES['viewBox'] = [300, 4, 198, 146]

with open(out, 'w') as f:
    f.write('// Tạo tự động bởi tools/logo-anim/extract-eps.py từ ZikZak_Logo.eps — đừng sửa tay.\n')
    f.write('export const LOGO = ' + json.dumps(ROLES, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('ghi', out, os.path.getsize(out), 'byte')
