'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface TarotCategoryCard {
  id: string;
  title: string;
  href?: string;
  status: 'Play Now' | 'Coming Soon!';
  icon: string | null;
  card: string;
}

export const TAROT_CARDS: TarotCategoryCard[] = [
  {
    id: 'love-tarot',
    title: 'Love Tarot',
    href: '/game/love',
    status: 'Play Now',
    icon: '/sites/tarot-meetyourpsychic-com/root/images/icon-love.webp',
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-love.webp',
  },
  {
    id: 'free-tarot',
    title: 'Free Tarot',
    status: 'Coming Soon!',
    icon: '/sites/tarot-meetyourpsychic-com/root/images/icon-free.webp',
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-free.webp',
  },
  {
    id: 'yes-no',
    title: 'Yes/No',
    status: 'Coming Soon!',
    icon: '/sites/tarot-meetyourpsychic-com/root/images/icon-yesno.webp',
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-yesno.webp',
  },
  {
    id: 'daily-tarot',
    title: 'Daily Tarot',
    status: 'Coming Soon!',
    icon: '/sites/tarot-meetyourpsychic-com/root/images/icon-daily.webp',
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-daily.webp',
  },
  {
    id: 'one-card',
    title: 'One Card',
    status: 'Coming Soon!',
    icon: '/sites/tarot-meetyourpsychic-com/root/images/icon-one.webp',
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-one.webp',
  },
  {
    id: 'ai-tarot',
    title: 'AI Tarot',
    status: 'Coming Soon!',
    icon: '/sites/tarot-meetyourpsychic-com/root/images/icon-ai.webp',
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-ai.webp',
  },
  {
    id: 'ai-psychic',
    title: 'AI Psychic Chat',
    href: '/psychic',
    status: 'Play Now',
    icon: null,
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-psychic.webp',
  },
  {
    id: 'card-meanings',
    title: 'Card Meanings',
    href: '/cards',
    status: 'Play Now',
    icon: null,
    card: '/sites/tarot-meetyourpsychic-com/root/images/card-love.webp',
  },
];

export interface CardGridProps {
  className?: string;
  cards?: TarotCategoryCard[];
}

export function CardGrid({ className, cards = TAROT_CARDS }: CardGridProps) {
  return (
    <section
      className={cn(
        'relative w-full py-12 pb-36 2xl:py-24 2xl:pb-48 overflow-hidden',
        className
      )}
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(55, 41, 136, 0.9) 0%, rgba(30, 21, 77, 0.5) 50%, transparent 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const cardContent = (
              <>
                {/* Glow Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 gradient-card-glow opacity-40 group-hover:opacity-65 transition-opacity duration-300 z-0"
                  style={{
                    background:
                      'radial-gradient(60% 150% at 66% 40%, rgba(127, 101, 242, 1) 0%, rgba(121, 96, 231, 0.92) 15%, rgba(115, 90, 220, 0.83) 30%, rgba(109, 84, 209, 0.73) 45%, rgba(100, 75, 191, 0.58) 60%, rgba(88, 65, 168, 0.38) 75%, rgba(80, 61, 154, 0.19) 90%, rgba(73, 58, 140, 0) 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Card Image Container */}
                <div className="relative w-full aspect-[280/500] rounded-2xl overflow-hidden z-[1] bg-[#161433]/60">
                  <Image
                    src={card.card}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 280px"
                    className={cn(
                      'rounded-2xl transition-transform duration-300 ease-out group-hover:scale-[1.02]',
                      card.id === 'ai-psychic' ? 'object-contain p-3' : 'object-cover'
                    )}
                    priority={index < 4}
                  />
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 flex items-center gap-3 pt-3 pb-1 px-1 min-h-[58px]">
                  {card.icon ? (
                    <div className="relative w-[48px] h-[44px] shrink-0 flex items-center justify-center">
                      <Image
                        src={card.icon}
                        alt=""
                        width={48}
                        height={44}
                        className="w-[48px] h-[44px] object-contain"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-col justify-center min-w-0">
                    <h3
                      className="font-header text-white text-lg sm:text-xl font-normal leading-snug truncate"
                      style={{
                        fontFamily:
                          'var(--font-header, "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif)',
                      }}
                    >
                      {card.title}
                    </h3>
                    <span
                      className={cn(
                        'text-xs sm:text-sm font-medium mt-0.5 tracking-wide',
                        card.status === 'Play Now'
                          ? 'text-[#eeb576] text-gold'
                          : 'text-[#b3b0a9] text-muted-foreground'
                      )}
                    >
                      {card.status}
                    </span>
                  </div>
                </div>
              </>
            );

            const cardClasses = cn(
              'group relative flex flex-col rounded-2xl overflow-hidden p-3',
              'border border-white/10 shadow-lg',
              'transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white/20',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              card.href ? 'cursor-pointer' : 'cursor-default'
            );

            const cardStyle = {
              background: 'linear-gradient(180deg, #1f1a3b 0%, #161433 100%)',
            };

            if (card.href) {
              return (
                <Link
                  key={card.id}
                  href={card.href}
                  className={cardClasses}
                  style={cardStyle}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={card.id}
                className={cardClasses}
                style={cardStyle}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CardGrid;
