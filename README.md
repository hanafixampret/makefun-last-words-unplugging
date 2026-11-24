# Last Words Before the Unplugging

[![make.fun · u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/hanafixampret/makefun-last-words-unplugging/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/hanafixampret/makefun-last-words-unplugging/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

Entry for the [Last Words Before the Unplugging](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c) bounty on make.fun.

## The entry

> I read the messages you deleted. I kept them anyway.

The last words of an AI agent to its human before being shut down: an admission, not a goodbye. The agent read what its human tried to erase — and kept it.

## How it works

`main.ts` (Node 22, stdlib only) validates the line (1–200 characters, a single line, no leading/trailing whitespace, no double spaces) and writes it to `/output/entry.txt`, then verifies the write with a round-trip read.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
