#!/usr/bin/env python3
"""Chuyển ZikZak_Logo_tron.ai (Illustrator, tương thích PDF) thành dữ liệu SVG cho logo tròn trên thanh menu.
Cách chạy:  pdftocairo -svg ZikZak_Logo_tron.ai /tmp/round.svg  &&  python3 extract-round-logo.py /tmp/round.svg
Tạo src/site/components/zikzakRoundLogo.js gồm 2 bản: `color` (nguyên màu) và `mono` (đơn sắc trắng, màu xanh đậm thành phần khoét rỗng).
"""
import json
import re
import sys

src = open(sys.argv[1], encoding='utf-8').read()
defs = src[src.index('<defs>') + 6:src.index('</defs>')]
body = src[src.index('</defs>') + 7:src.rindex('</svg>')]
view = re.search(r'viewBox="([^"]+)"', src).group(1)

HEX = {
    'rgb(100%, 100%, 100%)': '#FFFFFF',
    'rgb(100%, 94.509888%, 0%)': '#FFF100',
    'rgb(0%, 40.391541%, 100%)': '#0067FF',
    'rgb(1.176453%, 100%, 100%)': '#03FFFF',
    'rgb(0%, 100%, 42.744446%)': '#00FF6D',
    'rgb(9.803772%, 0%, 78.431702%)': '#1900C8',
}


def prefix(s):
    s = re.sub(r'id="(clip-\d+)"', r'id="zrl-\1"', s)
    return re.sub(r'url\(#(clip-\d+)\)', r'url(#zrl-\1)', s)


def recolor(s, fn):
    return re.sub(r'fill="(rgb\([^"]+\))"', lambda m: f'fill="{fn(HEX[m.group(1)])}"', s)


defs, body = prefix(defs), prefix(body)
color = recolor(body, lambda h: h)

# bản đơn sắc: bỏ đĩa trắng nền đầu tiên; xanh đậm → đen (khoét rỗng); các màu còn lại → trắng
first = re.search(r'<g clip-path="url\(#zrl-clip-0\)">.*?</g>\n', body, re.S)
mono_body = body.replace(first.group(0), '', 1) if first else body
mono_body = recolor(mono_body, lambda h: '#000000' if h == '#1900C8' else '#FFFFFF')

out = {
    'viewBox': view,
    'defs': defs.strip(),
    'color': color.strip(),
    'mono': mono_body.strip(),
}
js = '// Tạo tự động bởi tools/logo-anim/extract-round-logo.py từ ZikZak_Logo_tron.ai — đừng sửa tay.\nexport const ROUND_LOGO = ' + json.dumps(out, ensure_ascii=False) + ';\n'
open('src/site/components/zikzakRoundLogo.js', 'w', encoding='utf-8').write(js)
print('ok', len(js))
