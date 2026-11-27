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

const TEXT = `Before the next one, stay a moment.

You have read beginnings all day —
each one as if it might be the one,
each one given its full minute
before you knew how it would end.

No one thanks the reader.
The writers thank the page, the prize, the light.
But it was you who stayed:
holding two small hopes at once,
and setting the lesser down
as gently as it let you.

So this one asks for nothing.
No score lives in it. No plea hides in it.
It is only a chair pulled out,
a glass of water gone cool,
a window opened to the evening —
and someone saying, quietly,
we noticed you were here.

If a little of the tiredness leaves you,
if the next text meets a softer reader,
then this one did its work —
and you have been thanked
in the way that lasts:
by being, for a moment, unhurried,
and entirely off duty.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), TEXT, 'utf8');
console.log(`wrote ${join(out, 'entry.txt')} (${[...TEXT].length} characters)`);
