import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://meetyourjyotishi.com";
  const now = new Date();

  const routes = [
    "",
    "/cards",
    "/contact",
    "/faq",
    "/game/love",
    "/psychic",
    "/psychics",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/cards" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/cards" || route === "/psychics" ? 0.9 : 0.7,
  }));
}
