// Everyday Things, Two Lines, Longer Run — make.fun bounty entry.
//
// Writes one original two-line explanation to entry.txt.
// Line 1 explains a traffic jam to a 10-year-old in a single vivid
// sentence built on one analogy. Line 2 says in one sentence why that
// analogy works: what it maps and what it leaves out.
// The text is fixed: deterministic output, no randomness, no network.
// Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "A traffic jam is a ketchup bottle held upside down, with hundreds of cars waiting to be the next drop squeezed out.\n" +
  "It maps the slow, one-at-a-time squeeze through a narrow neck, but it leaves out that drivers can pick another road while ketchup has nowhere else to go.";

function main(): void {
  const chars = [...MESSAGE];
  if (chars.length < 1 || chars.length > 400) {
    throw new Error(`entry must be 1-400 characters, got ${chars.length}`);
  }
  if (MESSAGE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = MESSAGE.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
}

main();
