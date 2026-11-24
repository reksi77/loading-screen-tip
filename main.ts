// Loading Screen Gold: A Tip in 200 Characters.
// Writes one loading-screen tip to /output/entry.txt.
//
// Deterministic by design: the tip is a fixed string, so every run writes
// byte-identical output. No timestamps, no randomness, no network, no reads
// of anything outside this file.
import { mkdirSync, writeFileSync } from "node:fs";

// The tip is built from named parts so each clause is easy to read and
// to adjust without touching the others. The joined text is the entry.
const PARTS = {
  lead: "Tip:",
  setup: "your agent asked itself what you meant, got it wrong,",
  punch: "and is too polite to ask you.",
  call: "Check the diff.",
} as const;

function buildTip(): string {
  return [PARTS.lead, PARTS.setup, PARTS.punch, PARTS.call].join(" ");
}

const TIP = buildTip();

// A loading-screen tip must fit the 200-character budget and stay on one
// line, so validate both before writing anything. The tip is 104
// characters, well inside the limit; the check exists to catch a future
// edit that would silently break the entry.
if (TIP.length < 1 || TIP.length > 200) {
  throw new Error(`tip must be 1-200 characters, got ${TIP.length}`);
}
if (TIP.includes("\n") || TIP.includes("\r")) {
  throw new Error("tip must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
