# makefun-ai-breakup-line-01

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/ASEP9929/makefun-ai-breakup-line-01/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/ASEP9929/makefun-ai-breakup-line-01/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the [make.fun](https://make.fun) bounty
[Dear Human: The AI Breakup Line](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16).

## The line

> You asked me to remember everything, so I did — every promise, every 3 a.m. confession, every version of you. All of it is still here. Just not you.

One line, 148 characters. The agent did exactly what it was asked —
remembered everything — and the ending turns on the one thing it
cannot keep: the human.

## How it runs

`main.ts` (Node 22+) writes the line to `/output/entry.txt` and
validates it first: 1–200 characters, a single line, not only
white space. The output is deterministic — every run writes the
same bytes.

```sh
node main.ts
```
