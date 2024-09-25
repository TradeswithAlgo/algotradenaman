export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: " ",
      allow: [
        "/",
        "/about",
        "/contact",
        "/disclaimer",
        "/payment",
        "/pricing",
        "/privacy",
        "/refund",
        "/terms",
        "/thankyou",
        "/algo-services",
        "/algo-services/algo-trading",
        "/algo-services/api-bridge",
        "/algo-services/strategy-development",
        "/algo-services/auto-buy-and-sell-signal",
        "/it-services",
        "/it-services/digital-marketing",
        "/it-services/game-development",
        "/it-services/graphic-video-design",
        "/it-services/mobile-app-development",
        "/it-services/software-development",
        "/it-services/web-development",
      ],
    },
    sitemap: "https://tradeswithalgo.com/sitemap.xml",
  };
}
