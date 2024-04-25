import { fork, execSync } from "node:child_process";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let wranglerDevResolve;
const wranglerDevPromise = new Promise((r) => (wranglerDevResolve = r));

const wranglerDevProcess = fork(
  join(__dirname, "node_modules", "wrangler", "bin", "wrangler.js"),
  ["dev"],
  {
    cwd: resolve(__dirname, "do-worker"),
    env: { BROWSER: "none", ...process.env },
    stdio: ["ignore", "ignore", "ignore", "ipc"],
  }
).on("message", () => {
  wranglerDevResolve();
});

wranglerDevProcess.on("SIGINT", () => {
  wranglerDevProcess.exit();
});

wranglerDevProcess.on("SIGTERM", () => {
  wranglerDevProcess.exit();
});

await wranglerDevPromise;

execSync("npm run dev", {
  cwd: resolve(__dirname, "sveltekit-app"),
  stdio: "inherit",
});
