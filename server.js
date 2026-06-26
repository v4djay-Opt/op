const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const hostname = "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

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
};

const fs = require("fs");

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      const ext = path.extname(pathname).toLowerCase();

      if (MIME_TYPES[ext]) {
        res.setHeader("Content-Type", MIME_TYPES[ext]);
      }

      // If a _next/static chunk is requested but doesn't exist on disk,
      // return a proper 404 with the correct MIME type so the browser
      // doesn't get an HTML error page served as JS (which causes the
      // "MIME type not executable" console error).
      if (pathname.startsWith("/_next/static/") && (ext === ".js" || ext === ".css")) {
        const filePath = path.join(__dirname, ".next", pathname.replace("/_next/", ""));
        if (!fs.existsSync(filePath)) {
          res.statusCode = 404;
          res.setHeader("Content-Type", MIME_TYPES[ext]);
          res.end("");
          return;
        }
      }

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
