import Image from "next/image";

const IMG = "/sites/tarot-meetyourpsychic-com/root/images";

const categories = [
  { name: "Love Tarot", icon: `${IMG}/icon-love.webp`, href: "/game/love", active: true },
  { name: "Free Tarot", icon: `${IMG}/icon-free.webp`, href: "#", active: false },
  { name: "Yes/No", icon: `${IMG}/icon-yesno.webp`, href: "#", active: false },
  { name: "Daily Tarot", icon: `${IMG}/icon-daily.webp`, href: "#", active: false },
  { name: "AI Tarot", icon: `${IMG}/icon-ai.webp`, href: "#", active: false },
  { name: "One Card", icon: `${IMG}/icon-one.webp`, href: "#", active: false },
];

const cards = [
  { alt: "Love Tarot", src: `${IMG}/card-love.webp`, href: "/game/love" },
  { alt: "Free Tarot", src: `${IMG}/card-free.webp`, href: "#" },
  { alt: "Yes/No Tarot", src: `${IMG}/card-yesno.webp`, href: "#" },
  { alt: "Daily Tarot", src: `${IMG}/card-daily.webp`, href: "#" },
  { alt: "AI Tarot", src: `${IMG}/card-ai.webp`, href: "#" },
  { alt: "One Card", src: `${IMG}/card-one.webp`, href: "#" },
];

export function HeroSection() {
  return (
    <div className="grid *:[grid-area:1/1]">
      <div className="relative grid min-h-[860px] overflow-hidden *:[grid-area:1/1]">
        {/* Starfield background placeholder — deep purple with subtle radial gradient */}
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #251d57 0%, #1a1539 70%, #110e2a 100%)",
          }}
        />

        {/* Top radial glow overlay */}
        <div
          className="absolute -top-4 h-1/3 max-h-[544px] w-full"
          style={{
            background:
              "radial-gradient(40% 75% at 50% 10%, #251d57 0%, transparent 85%)",
          }}
        />

        {/* Main hero content */}
        <section className="z-10 flex flex-col items-center justify-center px-4">
          {/* Title */}
          <header className="max-w-[12ch] text-center font-[var(--font-header)] text-5xl sm:text-6xl leading-none text-white">
            <div>Unlock the Secrets</div>
            <div>of Your Destiny!</div>
          </header>

          {/* Category icons grid */}
          <ul className="my-8 grid grid-cols-3 gap-4 lg:grid-cols-6">
            {categories.map((cat) => (
              <li key={cat.name}>
                <a
                  href={cat.active ? cat.href : undefined}
                  aria-disabled={!cat.active}
                  className="group flex flex-col items-center text-center aria-disabled:pointer-events-none"
                >
                  <div className="relative mb-2 size-14 overflow-hidden rounded-full">
                    <Image
                      src={cat.icon}
                      alt={`${cat.name} icon`}
                      width={138}
                      height={126}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-white">
                    {cat.name}
                  </span>
                  {!cat.active && (
                    <span className="text-[10px] text-white/50">
                      Coming Soon!
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="/psychic"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              AI Psychic Chat
            </a>
            <a
              href="https://meetyourpsychic.com/all-psychics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-[#1a1539] transition-all hover:opacity-90 lg:hidden"
              style={{
                background: "linear-gradient(to right, #e29e67, #c9944f)",
              }}
            >
              Talk to a Psychic
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="size-4"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Card fan at bottom */}
        <div className="pointer-events-none z-20 flex max-w-full -translate-y-12 justify-center gap-0 self-end perspective-[1200px]">
          {cards.map((card, i) => (
            <div
              key={card.alt}
              className="pointer-events-auto grid select-none *:[grid-area:1/1]"
              style={{ width: "calc((100vw / 6) - 2rem)", maxWidth: "240px", minWidth: "120px" }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={360}
                height={642}
                className="h-fit w-full rounded-2xl"
                style={{
                  filter: i === 0 ? "none" : "brightness(0.7)",
                }}
              />
              <div
                className="-z-10 h-full w-full rounded-2xl"
                style={{
                  background:
                    "radial-gradient(60% 150% at 66% 40%, rgba(127,101,242,0.4) 0%, transparent 100%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Decorative disc image */}
        <div className="pointer-events-none absolute bottom-24 z-10 h-auto w-full scale-110">
          <Image
            src={`${IMG}/hero-fg-disc.webp`}
            alt="Disc of life"
            width={1442}
            height={418}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Decorative candles — left side */}
        <div className="pointer-events-none absolute bottom-24 z-10 w-full">
          <div className="absolute left-[11%] top-[-32%] w-[7.5%]">
            <Image
              src={`${IMG}/hero-candle-l-1.png`}
              alt=""
              width={369}
              height={784}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute left-[23%] top-[-10%] w-[6.4%]">
            <Image
              src={`${IMG}/hero-candle-l-2.png`}
              alt=""
              width={212}
              height={642}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute left-[29.5%] top-[28%] w-[11.7%]">
            <Image
              src={`${IMG}/hero-candle-l-3.png`}
              alt=""
              width={325}
              height={404}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Decorative candles — right side */}
        <div className="pointer-events-none absolute bottom-24 z-10 w-full">
          <div className="absolute left-[55.5%] top-[23%] w-[17.8%]">
            <Image
              src={`${IMG}/hero-candle-r-3.png`}
              alt=""
              width={432}
              height={484}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute left-[70.7%] top-[-9%] w-[6.4%]">
            <Image
              src={`${IMG}/hero-candle-r-2.png`}
              alt=""
              width={187}
              height={642}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="absolute left-[76.5%] top-[-27.5%] w-[13%]">
            <Image
              src={`${IMG}/hero-candle-r-1.png`}
              alt=""
              width={379}
              height={717}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="h-24 -translate-y-full self-end"
          style={{
            background:
              "linear-gradient(to top, #1a1539 0%, rgba(26,21,57,0.9) 50%, transparent 100%)",
          }}
        />
      </div>
    </div>
  );
}
