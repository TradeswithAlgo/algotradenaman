export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/about",
        "/algo",
        "/algo-services",
        "/api-bridge",
        "/auto",
        "/contact",
        "/disclaimer",
        "/it-services",
        "/payment",
        "/pricing",
        "/privacy",
        "/refund",
        "/strategy",
        "/terms",
        "/thankyou",
        "/it-services/digital-marketing",
        "/it-services/game-development",
        "/it-services/graphic-video-design",
        "/it-services/mobile-app-development",
        "/it-services/software-development",
        "/it-services/web-development",
      ],
      // disallow: "/private/",
    },
    sitemap: "https://brainautotech.com/sitemap.xml",
  };
}
