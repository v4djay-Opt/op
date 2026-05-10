import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Optimax Studio",
    short_name: "Optimax",
    description: "We build digital machines that generate revenue.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0F1E",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
