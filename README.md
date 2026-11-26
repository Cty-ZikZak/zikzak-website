# ZikZak Art Website (React + Vite + PocketBase)

Dự án website **ZikZak | Mỹ Thuật Các Lứa Tuổi** được xuất từ Hostinger Horizons và đã được chuẩn hóa để chạy độc lập trên Windows / Linux cũng như triển khai qua GitHub.

---

## 1. Cách chạy dự án ở Local (Trên máy tính của bạn)

### Chạy đồng thời cả Website (Frontend) & Quản trị dữ liệu (Backend PocketBase)
Tại thư mục gốc của dự án, mở Terminal (PowerShell) và chạy:
```powershell
npm run dev
```
Hoặc chạy riêng từng phần:
- **Chỉ chạy giao diện Web**: `npm run dev:web`
- **Chỉ chạy Backend PocketBase**: `npm run dev:pb`

### Các đường dẫn truy cập trên máy Local:
1. **Trang chủ Website**: `http://localhost:3000`
2. **Trang cửa hàng ZikZak Shop**: `http://localhost:3000/zikzak-shop`
3. **Trang Đăng ký tư vấn**: `http://localhost:3000/djang-ky-ngay`
4. **Trang Quản trị Backend (PocketBase Admin UI)**: `http://127.0.0.1:8090/_/`
   - **Email đăng nhập mặc định ở Local**: `admin@zikzak.local`
   - **Mật khẩu mặc định ở Local**: `zikzak123456`
   *(Khi khách điền bất kỳ Form tư vấn nào trên web ở `localhost:3000`, dữ liệu sẽ lưu trực tiếp vào các bảng `contact_form_*` trong trang quản trị này).*

---

## 2. Đưa dự án lên GitHub

Dự án đã được khởi tạo sẵn Git và cấu hình `.gitignore` chuẩn. Để đẩy lên tài khoản GitHub của bạn:

1. Truy cập [GitHub Create New Repository](https://github.com/new) và tạo một repository mới (ví dụ: `zikzak-website`).
2. Chạy 2 lệnh sau trong Terminal tại thư mục dự án (thay bằng đường dẫn repo của bạn):
   ```powershell
   git remote add origin https://github.com/<TEN_TAI_KHOAN_CUA_BAN>/zikzak-website.git
   git push -u origin main
   ```

---

## 3. Triển khai (Deploy) & Trỏ tên miền trên Hostinger

### Bước 1: Deploy Website tự động từ GitHub (Khuyên dùng Vercel hoặc Cloudflare Pages - Miễn phí)
1. Đăng nhập vào [Vercel.com](https://vercel.com) bằng tài khoản GitHub của bạn.
2. Bấm **Add New Project** -> Chọn repo `zikzak-website`.
3. Thông số Build:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/apps/web`
4. Trong mục **Environment Variables** trên Vercel:
   - Nếu bạn dùng Google Sheets / Webhook để nhận dữ liệu Form đăng ký: Thêm biến `VITE_FORM_WEBHOOK_URL` = `<Link Webhook của bạn>`.
   - Nếu bạn chạy PocketBase trên server riêng: Thêm biến `VITE_POCKETBASE_URL` = `https://api.tenmiencuaban.com`.
5. Bấm **Deploy**.

### Bước 2: Trỏ tên miền từ Hostinger về Website
1. Đăng nhập vào **Hostinger hPanel** -> **Domains (Tên miền)** -> Chọn tên miền của bạn -> **DNS / Nameservers**.
2. Trên Vercel, vào mục **Settings -> Domains** của project, nhập tên miền của bạn vào. Vercel sẽ cung cấp 2 bản ghi DNS:
   - **Type `A`** | Name: `@` | Points to: `76.76.21.21`
   - **Type `CNAME`** | Name: `www` | Points to: `cname.vercel-dns.com`
3. Thêm 2 bản ghi này vào bảng DNS trên Hostinger (nhớ xóa bản ghi `A` hoặc `CNAME` cũ đang trỏ vào Hostinger Builder). Đợi khoảng 5-15 phút là tên miền của bạn sẽ hoạt động mượt mà với chứng chỉ bảo mật HTTPS tự động.
