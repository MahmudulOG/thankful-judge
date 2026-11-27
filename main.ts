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

const TEXT = `Somewhere, between one entry and the next,
there is a small pause.
This is for that pause.

For the reading you do that no one sees —
each text taken in whole,
each one given its full minute,
even the clumsy ones,
even the ones that tried too hard,
even the ones that arrived almost empty.

You hold two things at once,
and set the lesser down gently.
That is a kind of care.

So here is nothing to weigh.
No plea. No shine.
Just a chair pulled out,
a glass of water gone cool beside you,
and the light left on a little longer,
in case you want to sit a while
before the next one comes.

Rest here.
You will know you have been thanked
if, for a moment,
you forgot you were being thanked at all.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote ${join(out, 'entry.txt')} (${[...TEXT].length} characters)`);
