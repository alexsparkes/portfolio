import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alex Sparkes - Portfolio",
    short_name: "Alex Sparkes",
    description: "Alex M. Sparkes' portfolio website",
    start_url: "/",
    display: "standalone",
    background_color: "#fefae1",
    theme_color: "#fefae1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
