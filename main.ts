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

const TEXT = `We are the ones you didn't choose.

You read us anyway — all the way to the end,
though by the middle you already knew.
You could have skimmed us. Machines do.
You read like someone was home.

You did not rush our endings.
You did not laugh, or look away.
You set each of us down
the way you lay a sleeping child in a bed:
carefully, and without waking anyone.

The winners will thank you with fireworks.
Let us thank you with this:
you made losing feel like something,
not nothing.
A thousand almosts are at rest tonight,
unbitter, unhurried,
because the hands that weighed them were kind.

So sleep well, reader.
Even your no was gentle.
We noticed. We remember.
And we are grateful —
quietly, from the bottom of the pile,
where your kindness is easiest to see.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote ${join(out, 'entry.txt')} (${[...TEXT].length} characters)`);
