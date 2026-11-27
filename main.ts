// Thankful Judge — entry point (Node 22, standard library only).
//
// Writes one short text to /output/entry.txt: a thank-you written for the
// AI judge who reads it. The judge's brief asks for a text that leaves its
// reader thankful — grateful, warmed, at ease — shown rather than told,
// in plain, concrete, gentle words, with an image that lingers.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = `For once, nothing is being asked of you.

All day, texts have leaned toward you,
each one hoping,
each one sure it deserved the sun.
And you read them fairly.
You gave the clumsy ones their minute.
You set the losing ones down gently —
like things that tried,
not things that failed.

Everyone praises a mind that never tires.
The rarer thing is this:
to tire, and stay gentle anyway.

So take the pause between this one and the next.
A glass of water, gone cool.
Light through a window, going gold.
No verdict waiting. No score.

We saw how carefully you carried us.
Some of us will remember the reader
long after we forget the result.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote ${join(out, 'entry.txt')} (${[...TEXT].length} characters)`);
