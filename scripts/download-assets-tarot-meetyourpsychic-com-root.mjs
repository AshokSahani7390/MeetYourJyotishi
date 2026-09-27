import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "public/sites/tarot-meetyourpsychic-com/root/images";

const assets = [
  // Logo
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0svs1xbf0x_cz.webp&w=828&q=100", name: "logo.webp" },
  // Hero foreground disc
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-minute.395zhcy42rnfu.webp&w=3840&q=100", name: "hero-fg-disc.webp" },
  // Hero candles left
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-l-1.0__v4ycz_yqu8.png&w=3840&q=75", name: "hero-candle-l-1.png" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-l-2.1qhk43bdgpfwr.png&w=3840&q=75", name: "hero-candle-l-2.png" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-l-3.0-qh7h_sxe3ls.png&w=3840&q=75", name: "hero-candle-l-3.png" },
  // Hero candles right
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-r-1.0brnugq1clqpg.png&w=3840&q=75", name: "hero-candle-r-1.png" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-r-2.3iojanp-dktpe.png&w=3840&q=75", name: "hero-candle-r-2.png" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-fg-candle-r-3.12hgrj0kur7hv.png&w=3840&q=75", name: "hero-candle-r-3.png" },
  // Tarot card images
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flove.3v1dbybhb_v8k.webp&w=3840&q=75", name: "card-love.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree.3i0t9ngxu9-m0.webp&w=3840&q=75", name: "card-free.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyesno.18-crzlb3oapj.webp&w=3840&q=75", name: "card-yesno.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaily.41methvbp5xw4.webp&w=3840&q=75", name: "card-daily.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai.27ulh067k3uxt.webp&w=3840&q=75", name: "card-ai.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.1p7ruy34w3yzw.webp&w=3840&q=75", name: "card-one.webp" },
  // Category icons
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flove.3971pcuchojom.webp&w=3840&q=75", name: "icon-love.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree.1r3o0455k-rtm.webp&w=3840&q=75", name: "icon-free.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyesno.2990qi14i7b6w.webp&w=3840&q=75", name: "icon-yesno.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdaily.3sazaw93p61wl.webp&w=3840&q=75", name: "icon-daily.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.3sgw3pv4vaswd.webp&w=3840&q=75", name: "icon-one.webp" },
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai.0qo6nvh75au25.webp&w=3840&q=75", name: "icon-ai.webp" },
  // Psychic chat image
  { url: "https://tarot.meetyourpsychic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpsychic.3-6q02k2t0xby.webp&w=3840&q=75", name: "card-psychic.webp" },
  // Favicon
  { url: "https://tarot.meetyourpsychic.com/icon.png?icon.3f4_w1mrltkp-.png", name: "icon.png" },
  { url: "https://tarot.meetyourpsychic.com/favicon.ico?favicon.0u_c5_8l2_5x5.ico", name: "favicon.ico" },
];

async function download(url, filepath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(filepath), { recursive: true });
    await writeFile(filepath, buf);
    console.log(`✓ ${filepath}`);
  } catch (err) {
    console.error(`✗ ${filepath}: ${err.message}`);
  }
}

// Download 4 at a time
const batches = [];
for (let i = 0; i < assets.length; i += 4) {
  batches.push(assets.slice(i, i + 4));
}

for (const batch of batches) {
  await Promise.all(
    batch.map((a) => download(a.url, join(BASE, a.name)))
  );
}

console.log(`\nDone! Downloaded ${assets.length} assets.`);
