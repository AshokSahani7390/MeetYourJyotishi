import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const baseDir = path.join(
  projectRoot,
  'public/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2'
);

const downloads = [
  // Images
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0svs1xbf0x_cz.webp&w=828&q=100',
    dest: 'images/logo.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flove.3v1dbybhb_v8k.webp&w=1920&q=75',
    dest: 'images/love.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree.3i0t9ngxu9-m0.webp&w=1920&q=75',
    dest: 'images/free.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyesno.18-crzlb3oapj.webp&w=1920&q=75',
    dest: 'images/yesno.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaily.41methvbp5xw4.webp&w=1920&q=75',
    dest: 'images/daily.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai.27ulh067k3uxt.webp&w=1920&q=75',
    dest: 'images/ai.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.1p7ruy34w3yzw.webp&w=1920&q=75',
    dest: 'images/one.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpsychic.3-6q02k2t0xby.webp&w=1920&q=75',
    dest: 'images/psychic.webp'
  },
  // Game card icons
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flove.3971pcuchojom.webp&w=384&q=75',
    dest: 'images/icon-love.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree.1r3o0455k-rtm.webp&w=384&q=75',
    dest: 'images/icon-free.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyesno.2990qi14i7b6w.webp&w=384&q=75',
    dest: 'images/icon-yesno.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaily.3sazaw93p61wl.webp&w=384&q=75',
    dest: 'images/icon-daily.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.3sgw3pv4vaswd.webp&w=384&q=75',
    dest: 'images/icon-one.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai.0qo6nvh75au25.webp&w=384&q=75',
    dest: 'images/icon-ai.webp'
  },
  // Hero disc foreground
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg.1i9o_ca7t6qbr.webp&w=1920&q=100',
    dest: 'images/hero-fg-desktop.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-minor.02nzdj7d9fbis.webp&w=1200&q=100',
    dest: 'images/hero-fg-tablet.webp'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-minute.395zhcy42rnfu.webp&w=828&q=100',
    dest: 'images/hero-fg-mobile.webp'
  },
  // Hero candles
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-l-1.0__v4ycz_yqu8.png&w=1080&q=75',
    dest: 'images/hero-fg-candle-l-1.png'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-l-2.1qhk43bdgpfwr.png&w=1080&q=75',
    dest: 'images/hero-fg-candle-l-2.png'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-l-3.0-qh7h_sxe3ls.png&w=1080&q=75',
    dest: 'images/hero-fg-candle-l-3.png'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-r-1.0brnugq1clqpg.png&w=1080&q=75',
    dest: 'images/hero-fg-candle-r-1.png'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-r-2.3iojanp-dktpe.png&w=1080&q=75',
    dest: 'images/hero-fg-candle-r-2.png'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-r-3.12hgrj0kur7hv.png&w=1080&q=75',
    dest: 'images/hero-fg-candle-r-3.png'
  },
  // Accessibility SVG
  {
    url: 'https://tarot.meetyourpsychic.com/buttons/accessibility.svg',
    dest: 'images/accessibility.svg'
  },
  // Favicons
  {
    url: 'https://tarot.meetyourpsychic.com/favicon.ico?favicon.0u_c5_8l2_5x5.ico',
    dest: 'seo/favicon.ico'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/icon.png?icon.3f4_w1mrltkp-.png',
    dest: 'seo/icon.png'
  },
  // Rive files
  {
    url: 'https://tarot.meetyourpsychic.com/rive/loading-animation.riv',
    dest: 'rive/loading-animation.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/tarot-icons.riv',
    dest: 'rive/tarot-icons.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/candle-flame.riv',
    dest: 'rive/candle-flame.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/easter.riv',
    dest: 'rive/easter.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/star-icon.riv',
    dest: 'rive/star-icon.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/sound-button.riv',
    dest: 'rive/sound-button.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/hero-cta-btn.riv',
    dest: 'rive/hero-cta-btn.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/about-feature-breaks.riv',
    dest: 'rive/about-feature-breaks.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/about-feature-ending.riv',
    dest: 'rive/about-feature-ending.riv'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/rive/all-seeing-eye.riv',
    dest: 'rive/all-seeing-eye.riv'
  },
  // Audio files
  {
    url: 'https://tarot.meetyourpsychic.com/audio/flame-start.mp3',
    dest: 'audio/flame-start.mp3'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/audio/flame-end.mp3',
    dest: 'audio/flame-end.mp3'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/audio/flame-all-start.mp3',
    dest: 'audio/flame-all-start.mp3'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/audio/easter-start.mp3',
    dest: 'audio/easter-start.mp3'
  },
  // Fonts
  {
    url: 'https://tarot.meetyourpsychic.com/_next/static/media/Ginger-s.p.2vqg5pp0vicp5.otf',
    dest: 'fonts/Ginger.otf'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/static/media/OPTISerlio-s.p.372nas932d5sl.otf',
    dest: 'fonts/OPTISerlio.otf'
  },
  {
    url: 'https://tarot.meetyourpsychic.com/_next/static/media/5c285b27cdda1fe8-s.p.2_mbdogr7ni8i.woff2',
    dest: 'fonts/DMSans.woff2'
  }
];

async function downloadOne({ url, dest }) {
  const fullPath = path.join(baseDir, dest);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) {
      console.error(`Failed ${url}: ${res.status}`);
      return false;
    }
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync(fullPath, Buffer.from(arrayBuffer));
    console.log(`Saved: ${dest} (${arrayBuffer.byteLength} bytes)`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function run() {
  console.log(`Starting asset downloads (${downloads.length} items)...`);
  const concurrency = 4;
  for (let i = 0; i < downloads.length; i += concurrency) {
    const batch = downloads.slice(i, i + concurrency);
    await Promise.all(batch.map(downloadOne));
  }
  console.log('Finished asset downloads!');
}

run();
