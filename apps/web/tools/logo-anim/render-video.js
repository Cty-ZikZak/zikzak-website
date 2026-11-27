/*
  Xuất logo động thành video 4K (ProRes 4444 có kênh alpha), lặp liền mạch 13 giây.
  1. Chạy web:   npm run dev --prefix apps/web   (cổng 3000)
  2. Chạy:       node apps/web/tools/logo-anim/render-video.js <thư-mục-ra> -
     (thay "-" bằng một số N để chỉ xuất N khung PNG thử)
  Cần: playwright, ffmpeg. Đồng hồ ảo → 30 khung/giây chính xác, không phụ thuộc tốc độ máy.
*/
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
(async () => {
  const [out, mode, fpsArg] = process.argv.slice(2);
  const FPS = +(fpsArg || 30), LOOP = 13, W = 3840, H = 2160, LOGO_W = 2520;
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await pg.clock.install({ time: 0 });
  for (let i = 0; i < 5; i++) { try { await pg.goto('http://127.0.0.1:3000/logo-dong', { waitUntil: 'load', timeout: 60000 }); break; } catch (e) { await new Promise(r => setTimeout(r, 2000)); } }
  // để module JS tải xong
  for (let i = 0; i < 60; i++) { const ok = await pg.evaluate(() => !!document.querySelector('.zzl img')); if (ok) break; await new Promise(r => setTimeout(r, 500)); await pg.clock.runFor(16); }
  await pg.evaluate(({ W, H, LOGO_W }) => {
    const logo = document.querySelector('.zzl');
    document.documentElement.style.background = 'transparent';
    document.body.style.cssText = 'margin:0;background:transparent;overflow:hidden';
    const holder = document.createElement('div');
    holder.style.cssText = `position:fixed;inset:0;z-index:999999;display:grid;place-items:center;background:transparent`;
    logo.style.width = LOGO_W + 'px';
    holder.appendChild(logo);
    document.body.appendChild(holder);
    document.getElementById('root').style.display = 'none';
    const st = document.createElement('style');
    st.textContent = 'html,body{background:transparent!important}body::before,body::after,html::before,html::after{display:none!important;content:none!important}';
    document.head.appendChild(st);
  }, { W, H, LOGO_W });
  // chờ ảnh tải đủ
  for (let i = 0; i < 120; i++) { const ok = await pg.evaluate(() => [...document.querySelectorAll('.zzl img')].every(i => i.complete && i.naturalWidth)); if (ok) break; await new Promise(r => setTimeout(r, 250)); }
  // chạy trước 1 vòng để mọi lò xo vào trạng thái ổn định
  for (let t = 0; t < LOOP * 1000; t += 16) await pg.clock.runFor(16);
  const total = mode === '-' ? LOOP * FPS : +mode;
  let ff;
  if (mode === '-') {
    ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
      '-c:v', 'prores_ks', '-profile:v', '4444', '-pix_fmt', 'yuva444p10le', '-alpha_bits', '16', '-vendor', 'apl0', '-qscale:v', '9',
      `${out}/ZikZak-logo-4K-alpha.mov`], { stdio: ['pipe', 'inherit', 'inherit'] });
  }
  const frameMs = 1000 / FPS;
  let acc = 0;
  for (let f = 0; f < total; f++) {
    const buf = await pg.screenshot({ omitBackground: true, type: 'png' });
    if (ff) { if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); }
    else fs.writeFileSync(`${out}/f${String(f).padStart(4, '0')}.png`, buf);
    // tiến đồng hồ đúng 1 khung hình, chia nhỏ để rAF chạy đều
    acc += frameMs; const steps = Math.round(acc / 16.6667) || 1;
    for (let s = 0; s < steps; s++) await pg.clock.runFor(16.6667);
    acc -= steps * 16.6667;
    if (f % 30 === 0) console.log('frame', f, '/', total);
  }
  if (ff) { ff.stdin.end(); await new Promise(r => ff.on('close', r)); }
  await b.close();
})();
