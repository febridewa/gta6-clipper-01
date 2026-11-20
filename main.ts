// gta6-clipper-01 — the entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video: this program's only job is to hand
// VIDEO.json (the video's address) to the grader by copying it into the
// output directory. The house reads the video through the YouTube Data API;
// nothing this program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// After it runs, out/VIDEO.json is byte for byte this directory's VIDEO.json.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; outside it the two
// MAKEFUN_* variables stand in for them.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoJson = readFileSync(join(BOT_DIR, 'VIDEO.json'));
// Fail fast on a malformed VIDEO.json instead of copying garbage to /output:
// the gate refuses an entry whose VIDEO.json does not read, so a clear error
// here beats a silent bad copy there.
JSON.parse(videoJson.toString('utf8'));
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), videoJson);
