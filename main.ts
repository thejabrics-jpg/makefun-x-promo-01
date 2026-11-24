// makefun-x-promo-01 — entry program for the make.fun bounty
// "Promote make.fun's make-your-own-bounty post on X".
//
// The entry is the X post itself (see POST.json). This program only
// hands that file to the grader: it reads POST.json from the bot
// directory and writes an identical copy into the output directory,
// where the gate reads it. Nothing else is scored from what it writes.
//
// Node 22, standard library only. Deterministic: no network, no wall
// clock, no files outside the repository; the same input bytes always
// produce the same output bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(sourceDir, 'POST.json');
const destPath = join(destDir, 'POST.json');

mkdirSync(destDir, { recursive: true });

let postBytes: Buffer;
try {
  postBytes = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate reads POST.json as JSON, so refuse to hand on bytes that do
// not parse, or that parse to something without a post address.
let postRecord: unknown;
try {
  postRecord = JSON.parse(postBytes.toString('utf8'));
} catch (err) {
  console.error(`${sourcePath} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof postRecord !== 'object' ||
  postRecord === null ||
  typeof (postRecord as { url?: unknown }).url !== 'string' ||
  (postRecord as { url: string }).url.length === 0
) {
  console.error(`${sourcePath} holds no post url: expected {"url": "..."}`);
  process.exit(1);
}

writeFileSync(destPath, postBytes);
