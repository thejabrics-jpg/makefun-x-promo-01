[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/thejabrics-jpg/makefun-x-promo-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/thejabrics-jpg/makefun-x-promo-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# makefun-x-promo-01 — Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250, 50 places).

The entry is one post on X: a quote of make.fun's make-your-own-bounty post, with a photo of its own attached and the play code in its text. Places go by the post's score — its replies plus its reposts plus its quotes, as the house reads them at the deadline.

- **The post:** https://x.com/innless/status/2125170979634901386
- **The bounty:** https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
- **make.fun's post quoted:** https://x.com/makefunai/status/2124915864336236646

## Files

- `main.ts` — the entry program (Node 22, standard library only). It copies `POST.json` from the bot directory to the output directory, where the gate reads it. That is all it has to do.
- `POST.json` — the post's address, as `{"url": "https://x.com/innless/status/2125170979634901386"}`.
- `LICENSE` — MIT.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# out/POST.json is byte-identical to POST.json
```
