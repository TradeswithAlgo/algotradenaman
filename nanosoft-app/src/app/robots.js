export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about"],
    },
    sitemap: "https://brainautotech.com/sitemap.xml",
  };
}
