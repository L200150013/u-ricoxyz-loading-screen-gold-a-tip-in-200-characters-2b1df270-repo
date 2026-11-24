import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const tip = "Tip: your AI agent fixed the bug, broke two features, and is very confident about all three.";
const outDir = resolve(process.argv[2] ?? "./output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), tip, "utf8");
// Single line, no trailing newline: the tip is the entry.
