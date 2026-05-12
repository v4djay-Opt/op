// Custom Next.js server for cPanel / Phusion Passenger hosting
// Ensures correct MIME types for all static assets (_next/static/*)
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// MIME type map for static assets
const MIME_TYPES = {
  ".css":   "text/css; charset=utf-8",
  ".js":    "application/javascript; charset=utf-8",
  ".mjs":   "application/javascript; charset=utf-8",
  ".json":  "application/json; charset=utf-8",
  ".woff2": "font/woff2",
  ".woff":  "font/woff",
  ".ttf":   "font/ttf",
  ".svg":   "image/svg+xml",
  ".png":   "image/png",
  ".jpg":   "image/jpeg",
  ".jpeg":  "image/jpeg",
  ".webp":  "image/webp",
  ".ico":   "image/x-icon",
  ".txt":   "text/plain; charset=utf-8",
  ".xml":   "application/xml; charset=utf-8",
};

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // Serve _next/static files directly with correct MIME types
      if (pathname.startsWith("/_next/static/")) {
        const ext = path.extname(pathname).toLowerCase();
        const mimeType = MIME_TYPES[ext];
        if (mimeType) {
          res.setHeader("Content-Type", mimeType);
        }
        // Let Next.js serve the actual file
        await handle(req, res, parsedUrl);
        return;
      }

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
