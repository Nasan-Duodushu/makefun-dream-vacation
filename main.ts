// One Emoji, One Dream Vacation — exactly one emoji for a dream vacation,
// at most 8 characters. Writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌅";
const OUT = "/output/entry.txt";

function countPoints(text: string): number {
  return [...text].length;
}

function main(): void {
  const n = countPoints(EMOJI);
  if (n < 1 || n > 8) {
    console.error(`entry is ${n} characters, must be 1-8`);
    process.exitCode = 1;
    return;
  }
  if (EMOJI.trim().length === 0) {
    console.error("entry must not be only whitespace");
    process.exitCode = 1;
    return;
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, EMOJI, "utf8");
  console.log(`wrote ${EMOJI} (${n} character(s)) to ${OUT}`);
}

main();
