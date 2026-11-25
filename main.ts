// The Tired Dark Lord — a ~100-word villain monologue.
// Writes one text to /output/entry.txt. Pure stdlib, no network, deterministic.
// The gate needs 1–600 UTF-8 chars and the judge wants ~100 words, so the
// text is validated here before it is written: a wrong count fails loudly
// instead of shipping silently.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE = [
  "Right. The eclipse. Yes — the ritual that blots the sun,",
  "the one I've been... polishing. Three centuries of polishing.",
  "Brunt, the candles. No — the black ones. The ones that smell",
  "of... never mind, the tall ones will do fine. The hero comes",
  "at dawn, probably. Sword, speech, destiny, the whole... parade.",
  "Let him climb the stairs. Slowly. They're very long. I had",
  "them made longer. On purpose. Mostly. When he arrives, I'll",
  "be standing. Probably. Behind the throne there's a cushion,",
  "and the eclipse can wait one more— no. No. It cannot. It can.",
  "It can wait until next Tuesday.",
].join(" ");

const words = MONOLOGUE.trim()
  .split(/\s+/)
  .filter((token) => /\p{L}/u.test(token)).length;
if (words !== 100) throw new Error(`expected 100 words, got ${words}`);
if (MONOLOGUE.length > 600 || MONOLOGUE.length < 1) {
  throw new Error(`expected 1-600 chars, got ${MONOLOGUE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
