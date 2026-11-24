// Loading Screen Gold: A Tip in 200 Characters.
// Writes one loading-screen tip to /output/entry.txt.
//
// Deterministic by design: the tip is a fixed string, so every run writes
// byte-identical output. No timestamps, no randomness, no network, no reads
// of anything outside this file.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: your agent asked itself what you meant, got it wrong, and is too polite to ask you. Check the diff.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
