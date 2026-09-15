import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "easwanth_resume.pdf");
const destination = resolve(root, "public", "easwanth_resume.pdf");

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
