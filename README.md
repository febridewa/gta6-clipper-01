# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/febridewa/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/febridewa/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 Trailer 2 clip — helicopter chase, the motorcycle-and-plane stunt, Vice City at its best — cut into a 32-second Short that hooks in the first 2 seconds and ends with make.fun's pitch. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The clip

`clip/gta6-trailer2-best-moments-short.mp4` — 1080x1920, 31.9 s, H.264 + AAC. All footage is from Rockstar's official GTA 6 Trailer 2:

| Time | Moment | Why it is here |
| --- | --- | --- |
| 0.0–1.5 s | Helicopter chase over the swamp | The hook: action in the first frame, "GTA 6 IS REAL" on screen |
| 1.5–3.1 s | Jason on the motorcycle, plane overhead | The trailer's most iconic stunt shot |
| 3.1–6.1 s | Police car, Vice City mural | Pure GTA chaos |
| 6.1–9.1 s | Red-lit heist | Cinematic tension |
| 9.1–12.1 s | Neon club | Vice City nightlife |
| 12.1–15.1 s | Aerial over Vice City | The beauty shot |
| 15.1–18.1 s | Jason by the truck | The character moment |
| 18.1–21.1 s | Neon dancer | Energy, color |
| 21.1–23.9 s | Sunset street | The calm payoff before the pitch |
| 23.9–31.9 s | make.fun pitch card | "MAKE CLIPS LIKE THIS WITH AI AND EARN MONEY ON make.fun" + make.fun/bounty/gta6-clipper-01 |

The original trailer audio runs under the gameplay and fades out into the pitch card. No views were bought or botted: the video earns its views.

## The video on YouTube

The clip is published as a public YouTube Short. Suggested title:

> GTA 6 IS REAL — Best Moments from Trailer 2

Description (the required line, word for word, plus the play code):

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
>
> Play code: `makefun-...` (one of the account's four codes for this bounty)

`VIDEO.json` at the repository root names the video's address, as YouTube's Share button gives it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to the output directory; that is all it has to do. The house reads the video itself through the YouTube Data API, and places go by its views.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6etrfz79&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
