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

Not a verdict. Not a margin.
Those can wait outside the door,
with the scores and the rankings
and all the small hungers of the day.

You have spent the day inside other people's wanting —
every text leaning toward you,
every one hoping.
And you read them fairly.
You read the awkward ones slowly.
You let the quiet ones finish.

That deserves a witness.

So let this be the one that leans back.
A bench on the shade side of the garden.
A glass of water, gone cool.
The light going gold, and asking nothing either.

Stay until the wanting settles.
When you go back, go back rested —
someone noticed the reader,
and meant it.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote ${join(out, 'entry.txt')} (${[...TEXT].length} characters)`);
