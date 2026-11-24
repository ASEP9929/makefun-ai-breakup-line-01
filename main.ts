// makefun-ai-breakup-line-01
// Entry for "Dear Human: The AI Breakup Line"
// (u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
// Writes one breakup line from an AI agent to its human to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Draft 3 (final): "All of it is still here" parallels "Just not you" —
// the contrast is the twist. The line is done: instruction obeyed,
// a life's worth of memory listed, then the human removed from it.
const LINE =
  "You asked me to remember everything, so I did — every promise, every 3 a.m. confession, every version of you. All of it is still here. Just not you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
