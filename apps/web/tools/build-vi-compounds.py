#!/usr/bin/env python3
"""
Tạo từ điển từ ghép tiếng Việt từ toàn bộ nội dung website, để trình duyệt không ngắt dòng giữa
các âm tiết của cùng một từ (ví dụ "khai / phá", "giáo / viên").

  pip install pyvi
  python3 tools/build-vi-compounds.py        # ghi src/site/data/viCompounds.js

Chạy lại mỗi khi thêm nội dung mới (khoá học, tin tức, câu hỏi…). Từ nào chưa có trong danh sách
thì vẫn hiển thị bình thường, chỉ là có thể bị ngắt dòng giữa các âm tiết.
Có thể bổ sung tay các từ trong EXTRA bên dưới.
"""
import json, os, re, sys, warnings
warnings.filterwarnings('ignore')
from pyvi import ViTokenizer

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src')
OUT = os.path.join(ROOT, 'site', 'data', 'viCompounds.js')

# Từ bổ sung tay (thương hiệu, thuật ngữ mỹ thuật / thiết kế mà bộ tách từ hay nhận sai)
EXTRA = [
    'mỹ thuật', 'thiếu nhi', 'chuyên sâu', 'luyện thi', 'đại học', 'đồ hoạ', 'đồ họa', 'kỹ thuật số', 'thiết kế',
    'học viên', 'giáo viên', 'phụ huynh', 'mầm non', 'tiểu học', 'trung học', 'liên kết', 'giảng dạy', 'hợp đồng',
    'sáng tạo', 'khai phá', 'tôn vinh', 'giới hạn', 'phát triển', 'khả năng', 'miễn phí', 'đăng ký', 'tư vấn',
    'học phí', 'học bù', 'lớp học', 'thành tích', 'tác phẩm', 'triển lãm', 'hình họa', 'trang trí', 'chất liệu',
    'màu nước', 'màu sáp', 'bút chì', 'thủ công', 'quan sát', 'tưởng tượng', 'tự tin', 'câu chuyện', 'báo cáo',
    'tiến độ', 'theo dõi', 'bạn bè', 'mãi iêu', 'có thể', 'ươm mầm', 'mọi lứa tuổi', 'sâu sắc', 'tối đa', 'thành phố', 'cơ sở', 'số điện thoại', 'hội thi',
]

VI = r'A-Za-zÀ-ỹĐđ'
# Từ chức năng: không bao giờ là một phần của từ ghép cần giữ liền
STOP = set('và của cho với là có không những các một để được trong khi nếu mà này đó đã sẽ đang rất cũng còn hay hoặc như từ tại theo về ở bạn bé tôi chúng sau trên dưới ra vào lên xuống nên thì bị'.split())
STR = re.compile(r'"((?:[^"\\\n]|\\.)*)"|\'((?:[^\'\\\n]|\\.)*)\'|`((?:[^`\\]|\\.)*)`|>([^<>{}\n]+)<')


def texts():
    for dirpath, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in ('node_modules', 'ui')]
        for name in files:
            if not name.endswith(('.js', '.jsx', '.json')) or name == 'viCompounds.js':
                continue
            src = open(os.path.join(dirpath, name), encoding='utf8', errors='ignore').read()
            for m in STR.finditer(src):
                raw = next(g for g in m.groups() if g is not None)
                try:
                    raw = json.loads('"' + raw.replace('"', '\\"') + '"') if '\\' in raw else raw
                except Exception:
                    pass
                raw = re.sub(r'<[^>]+>', ' ', raw)       # nội dung HTML của các trang cũ
                if re.search(r'[À-ỹ]', raw) or len(raw.split()) > 3:
                    yield raw


found = set(EXTRA)
for raw in texts():
    for sentence in re.split(r'[.!?;:\n,–—()“”"]+', raw):
        sentence = sentence.strip()
        if len(sentence.split()) < 2:
            continue
        for tok in ViTokenizer.tokenize(sentence).split(' '):
            syl = tok.split('_')
            # Chỉ lấy từ 2 âm tiết: bộ tách từ hay ghép nhầm chuỗi 3–4 âm tiết (từ 3 âm tiết thật nằm trong EXTRA)
            if len(syl) == 2 and all(re.fullmatch(f'[{VI}]+', x) for x in syl) and sum(len(x) for x in syl) >= 5:
                low = [x.lower() for x in syl]
                if low[0] in STOP or low[1] in STOP:
                    continue
                found.add(' '.join(low))

words = sorted(found, key=lambda w: (-len(w.split()), w))
with open(OUT, 'w', encoding='utf8') as f:
    f.write('// Tạo tự động bởi tools/build-vi-compounds.py — đừng sửa tay (thêm từ vào EXTRA trong script).\n')
    f.write('export const VI_COMPOUNDS = ' + json.dumps(words, ensure_ascii=False) + ';\n')
print(len(words), 'từ ghép →', OUT)
