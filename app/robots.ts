import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alexspark.es/sitemap.xml",
    host: "https://alexspark.es",
  };
}
