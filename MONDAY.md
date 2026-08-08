# Monday 10 August — the finish

Starting state: **102 pages, 0 errors, 0 undefined references, every numeric claim verified, 43 of Oliver's 44 comments closed.**

Sequencing matters in two places. Redeploy the tool *before* you email Oliver, so the link goes in that email and closes his round-1 #9 in the same message. Check Parlevliet & van der Plas *before* it too, so you can answer that in the same message rather than a third one.

---

## 1. Clear the blockers — 45 min, do this first

Everything here either unblocks another person or unblocks you. None of it can be done later in the day.

- [ ] **Redeploy the tool.** Local file is current and tested; the live site is behind. Confirm it loads.
- [ ] **Check Parlevliet & van der Plas.** Do they publish a structured sustainability report? I found none — only third-party benchmark entries — but confirm on their own site.
- [ ] **Email Oliver — one message, five things:**
  - the 43-vs-53 explanation (he has the pre-rebuild draft)
  - approval to name Nomad Foods
  - the narrow due-diligence question: does Nomad report GHG removals (E1-7) or biodiversity-strategy resilience (E4-1) in either year?
  - what happened to GRI 201-2 between the 2024 and 2025 indexes
  - the tool link, and thanks — he asked to see it in round 1
- [ ] **Email Kata** — is any large European player not a Seafood Europe member? This is Oliver's last open comment (#24/#25).

---

## 2. Bibliography — 45 min

Zotero is the source of truth, so fix it there and re-export rather than hand-editing.

- [ ] Fix **Battisti & Perry** author order — currently exports as "Perry, Martin" alone
- [ ] Remove three duplicate pairs: **Afolabi, STECF, Tugliani**
- [ ] Fix the **Cöster** umlaut encoding — comes through as "Cster"
- [ ] Add **BRCGS (2022)** and **IFS Management GmbH (2023)** — Zotero never picked them up
- [ ] **STECF** is filed under "European Commission" but cited in-text as "(STECF, 2025)" — match one to the other
- [ ] Re-export, then **send me the file** — I merge it into `references.tex` without touching the other entries

⚠️ **Do not paste `bibl.rtf` over `references.tex`.** It drops 26 entries including Barney, Teece, Mitchell and all six cohort reports.

---

## 3. The 13 demand scores — 45 min

`Phase3_Coverage_Matrix_v18.xlsx`, amber cells, justification log rows 187–199.

**This is the only piece of analysis in the whole rebuild nobody has personally checked**, and it sets Chapter 6's demand density, which drives the build-first output. If one thing on this list is load-bearing, it's this.

- [ ] Review each of the 13, confirm or correct
- [ ] Tell me any that change and I'll recompute downstream

---

## 4. Re-shoot Figure 14 — 15 min

From the live tool, once redeployed.

---

## 5. Read Chapters 1–3 and the conclusion — 2 hours

You have never read these since the rewrites. Fresh eyes, read for argument and voice.

---

## 6. Read Chapters 4–7 — 2.5 hours

All four changed substantially this week. Two things to hold in your head:

**Check my six insertions as you pass them.** §4.1 the ISSF paragraph and the Tier 1 clarification, §4.2 the rewritten comment-#10 passage, §5.1 the homogeneity answer, §5.7 the rewritten invariance claim, §6.3 the justification-log qualification.

**And four number fixes:** §5.4 (one in seven, not one in four), §5.8 (60 not 53, 63% not 57%), §6.3 and Appendix D (120 of 188).

**The failure mode to watch for** is not "is this table right" — the tables are verified. It's *"does this sentence still describe this table"*. Three of the four errors found this week were prose that was correct when written and went stale when the numbers moved. That's where any remaining risk lives.

---

## 7. Close out — 30 min

- [ ] Send me anything you found; I fix and rebuild
- [ ] I run the full verification sweep — build, stale numbers, references, figures
- [ ] **`git add -A && git commit && git push`**

---

## Not Monday

These have other people's lead time and only need the ask sent in step 1: Oliver's naming approval, Nomad's answer on E1-7/E4-1, Kata on Seafood Europe. Chase on Thursday if quiet — you set reviewers a 14 August deadline.

**Length is not a problem.** Body is 62 pages (Chapters 1–7, pp. 10–71). The rest is 9 pages of front matter, 4 of references and 27 of appendices. Check whether EPFL counts appendices before cutting anything; if there is a hard limit, Appendix A is 11 pages and is the obvious candidate to move into the supporting-files package.
