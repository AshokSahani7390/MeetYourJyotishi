import React from "react";

export function SoundIcon({ active = false, className = "size-5" }: { active?: boolean; className?: string }) {
  if (active) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function StarIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function OrnamentalBorderLeft({ id = "_r_3_", className = "h-full w-auto" }: { id?: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 93 145" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path
        d="M91.6723 11.6693H81.908C38.2061 11.6693 25.9566 37.1745 21.6013 58.8713C20.5951 63.8834 20.1888 72.4291 1.07227 72.4291C20.1888 72.4291 19.7931 80.7544 20.1888 84.5597C25.3799 121.633 63.2786 132.475 81.908 132.475H91.6723M75.1168 1.07227C41.5666 1.07227 13.8002 31.0421 13.8002 58.8713M75.1168 143.072C41.5666 143.072 13.8002 120.238 13.8002 92.409"
        stroke={`url(#${id})`}
        strokeWidth="2.14537"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id={id} x1="1.07227" y1="74.9266" x2="91.0723" y2="74.9266" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4F2B0A" />
          <stop offset="1" stopColor="#715232" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function OrnamentalBorderCenter({ id = "paint0_linear", className = "h-full flex-1" }: { id?: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 145" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <line x1="0" y1="11.6693" x2="100" y2="11.6693" stroke={`url(#${id})`} strokeWidth="2.14537" strokeLinecap="round" />
      <line x1="0" y1="132.475" x2="100" y2="132.475" stroke={`url(#${id})`} strokeWidth="2.14537" strokeLinecap="round" />
      <defs>
        <linearGradient id={id} x1="100" y1="74.9266" x2="0" y2="74.9266" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4A76B" stopOpacity="1" />
          <stop offset="1" stopColor="#715232" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function OrnamentalBorderRight({ id = "_r_4_", className = "h-full w-auto" }: { id?: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 93 145" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <path
        d="M1.07227 11.6693H17.321C39.7794 11.669 67.4407 26.2299 73.5276 58.8713C74.3219 63.1309 74.1472 72.4291 91.674 73.3851C74.1472 73.3851 74.541 80.7532 74.1472 84.5597C69.4258 117.356 37.9658 132.475 17.321 132.475H1.07227M17.321 1.07227C52.3813 1.07227 81.3974 31.0421 81.3974 58.8713M17.9253 143.072C52.9856 143.072 82.0017 120.238 82.0017 92.409"
        stroke={`url(#${id})`}
        strokeWidth="2.14537"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id={id} x1="-7.92773" y1="74.9266" x2="91.6747" y2="74.9266" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#C4A76B" />
          <stop offset="0.856881" stopColor="#8C6743" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FacebookIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.75-.14-2.8 0-4.75 1.71-4.75 4.88V9.5H7v4h3v10h4v-10z"/>
    </svg>
  );
}

export function PinterestIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.4 9.3-.09-.78-.17-1.98.04-2.83.19-.77 1.25-5.28 1.25-5.28s-.32-.64-.32-1.58c0-1.48.86-2.59 1.93-2.59.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.93 1.57 1.93 1.89 0 3.34-1.99 3.34-4.86 0-2.54-1.83-4.32-4.43-4.32-3.02 0-4.79 2.26-4.79 4.6 0 .91.35 1.89.79 2.42.09.11.1.2.07.31-.08.31-.25 1.01-.28 1.15-.05.18-.16.22-.36.13-1.34-.62-2.18-2.58-2.18-4.16 0-3.39 2.46-6.5 7.1-6.5 3.73 0 6.63 2.66 6.63 6.21 0 3.71-2.34 6.69-5.58 6.69-1.09 0-2.11-.57-2.46-1.24l-.67 2.56c-.24.94-.9 2.11-1.34 2.83 1.01.31 2.08.48 3.19.48 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  );
}

export function InstagramIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export function TwitterIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

export function YouTubeIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function TikTokIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

export function LinkedInIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export function TumblrIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.563 24c-5.093 0-7.031-2.756-7.031-6.415V10.66H4.764V7.472c3.093-1.082 4.417-3.666 4.67-5.918H12.9v5.127h4.088v3.979H12.87v6.643c0 2.128 1.134 2.802 2.784 2.802 1.047 0 2.122-.38 2.723-.746l1.246 3.498c-1.378 1.144-3.411 1.745-5.06 1.745z"/>
    </svg>
  );
}

export function GithubIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
