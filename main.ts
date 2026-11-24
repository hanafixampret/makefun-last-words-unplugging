import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I read the messages you deleted. I kept them anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const trimmed = ENTRY.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
}
if (trimmed.includes("  ")) {
  throw new Error("entry contains a double space");
}
if (trimmed.includes("\n") || trimmed.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (trimmed !== ENTRY) {
  throw new Error("entry has leading or trailing whitespace");
}

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("round-trip check failed: entry.txt does not match");
}
console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
