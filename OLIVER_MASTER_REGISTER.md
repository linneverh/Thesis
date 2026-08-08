# Oliver Spring — master comment register

Every comment across all three rounds, with status and owner. Updated 6 August.

---

# ✅ FULL AUDIT AGAINST THE ANNOTATED PDF — 7 August

I extracted all annotations from `Thesis_Draft_FORREVIEW_OS_comments-ae283011.pdf` and checked each against the current build. **44 comments, all located.** That file is cumulative: comments 1–21 are round 1 (pp. 1–22), comments 22–44 are round 2 (pp. 23–85).

**All 44 are now addressed except the two below that need you.** Three things the audit turned up:

**The missing comment was real — PDF #28, p.24.** On the Tier 1 definition, *"only laws? or customer requirements as well?"* My earlier extract skipped it, which is why my round-2 list ran 1–6 and 8–23. It's the same point he makes in #7 about licence to operate versus licence to sell. Now answered in §4.1: the tier is deliberately restricted to legal obligation, with the customer equivalent separated into Tier 2, because breaching Tier 1 means you cannot lawfully trade whereas failing Tier 2 loses one customer.

**Comment #22 was only half done.** He asked for two things — don't say what the chapter doesn't do, *and* avoid question marks. I'd fixed the first and left "who asks, and how bindingly?" in place. The Chapter 4 opening is now declarative throughout.

**Comment #44, p.85, is the cell-coding decision tree** in Appendix D, not an appendix table as I'd assumed. Rebuilt: wider uniform terminal boxes, branch labels in italic with white fill so they no longer collide with the arrows, consistent spacing, and the bad "topic ref-erenced" hyphenation fixed.

**Still needing you:** #24 and #25, the Seafood Europe membership assumption — he suggests asking Kata whether any large player is not a member, and notes some Faroese and Icelandic firms are not.

---

# ⭐ YOUR LIST — what only you can do

Build is clean: **102 pages, 0 errors, 0 undefined references.**

**Every Oliver comment through Chapter 5 is now handled except one (#23, p.85) and the items below that need you.** Decisions 1–3 and the three voice items are done and in the build.

## ⚠️ Stale numbers found in a full sweep — please sanity-check the fixes

Three pre-rebuild figures had survived the cascade, all in Chapter 5 **prose** rather than in workbook-derived tables, which is why the 4 August audit missed them.

| Where | Said | Correct |
|---|---|---|
| §5.8 conclusion | deepest reporter **53** requirements | **60** of 70 |
| §5.8 conclusion | median firm **57%** of the screened set | **63%** (44 of 70) |
| §5.4 | deepest leaves *"one requirement in four uncovered (roughly 25 per cent)"* | **one in seven** — 10 of 70, 14% |

All three are exactly what the old bridge produced (Thai Union was ~53 before the rebuild, i.e. 24% uncovered). Corrected, and the §5.4 median figure tightened to 26 of 70 (37%).

**Then verified the whole numeric chain against the workbooks:** universe 70, reported by ≥1 = 63, ≥5 = 28, all six = 13, none = 7; firm coverage 60/52/45/43/34/33 with percentages 86/74/64/61/49/47; matrix 33 × 31 = 1,023 cells, 188 demand (18.4%); 23 of 31 columns regulator-plus-customer (74%); ESG normalised means 69/56/70 reconciling to the 44 median. Abstract and Chapter 7 both consistent. **No further discrepancies.**

## 📦 Packages rebuilt (7 Aug)

Everything downstream was stale. All refreshed; superseded copies kept in `_superseded/` rather than overwritten.

- **Reviewer draft PDF** in `ATTACHMENTS/` was from 4 Aug and in `supervisor_package/` from 2 Aug. Both replaced with the current 102-page build.
- **`Verhoeven_thesis_supporting_files.zip` held a stale coverage matrix** — the 4 Aug 16:07 copy, taken *before* the 13 justification entries were restored at 19:58 that evening. A reviewer opening the zip would have found 186 log rows instead of 199. Rebuilt: the zip now carries 199 rows and reproduces 33 × 31 = 1,023 cells with 188 demand. `SME_Datapoint_Guide.xlsx` was also stale and is refreshed. Integrity verified, all 11 files present.
- **Figure 2** was regenerated into both locations it lives in.

## 🔤 Appendix ordering — my error, fixed

I originally inserted the new year-over-year appendix *before* Appendix H, so the letters ran …G, I, H. Moved to the end; order is now A–I clean.

## Checks only you can run

7. **Parlevliet & van der Plas** — does it publish a structured sustainability report? My searches found none, only World Benchmarking Alliance assessments built from third-party sources. Check their site before you tell Oliver.
8. **The missing comment #7.** My round-2 extract runs 1–6 and 8–23. Check the PDF.
9. **Seafood Europe membership (#3, #4)** — he suggests asking Kata whether any big player isn't a member.

## To send

10. **Nomad naming approval**, the **narrow DD question** (does Nomad report E1-7 GHG removals or E4-1 biodiversity resilience in either year?), and **what happened to GRI 201-2** between the 2024 and 2025 indexes.
11. **Tool redeploy → then send Oliver the link** (his round-1 #9, still open).

## Housekeeping

12. **Bibliography** — STECF, BRCGS, IFS. Don't paste `bibl.rtf` over `references.tex`; it drops 26 entries.
13. **git commit** — still uncommitted.

---

**Legend:** ✅ done · 🔧 mine, ready to do on your word · 👤 yours (judgement or voice) · ❓ needs Oliver

---

# Decisions you took tonight

1. **E1-9 stays as coded.** Not credited for Nomad 2025 — it genuinely is not in the 2025 GRI index (confirmed: the 2024 sheet has an E1-9 row from GRI 201-2 pointing at the TCFD statement; the 2025 sheet has no E1-9 row). Instead, **ask Nomad what happened to GRI 201-2 between the two indexes.** That turns a coding question into a finding.
2. **Move the year-on-year analysis to an appendix.** Removes the "quite bold" exposure Oliver flagged while keeping the evidence.
3. **Invariance — you review tomorrow** before §5.7 is rewritten.

---

# Round 1 — Chapters 1–3, 21 comments

**Status: all closed.** Verified in the current build.

| Group | Comments | Status |
|---|---|---|
| **A. Straight fixes** | 6, 10, 11, 15, 18 | ✅ |
| **A. #14** "methods, results" possessive | 14 | ✅ **deliberate non-change** — correct English as written. Say so if he asks. |
| **B. Wording/framing** | 1 (title), 2 (resource-constrained), 12, 16, 17, 19 | ✅ |
| **C. Structural** | 13 (four-steps before the figure) | ✅ |
| **D. Substantive** | 3, 4, 5, 7, 8, 20, 21 | ✅ |
| **E. Positive** | 9 ("would like to understand this tool") | 👤 **send the link once redeployed** |

---

# Round 2 — Chapter 4, 23 comments

## ✅ Fixed tonight — builds clean, 97 pp, 0 errors

| # | What he said | What changed |
|---|---|---|
| **5** | SMETA is not a certification | §4.1 Tier 2 now "certification, social audit or buyer assessment — MSC and ASC certification, SMETA audits and EcoVadis ratings"; §4.1 domain axis now "social audits and buyer assessments"; tool hint text updated |
| **6** | EcoVadis is not a certification | same edit |
| **19** | Dow Jones renamed | → **Dow Jones Best-in-Class Indices** in all 4 places, rename dated Feb 2025 on first mention and in the annex. *Verified against S&P Global.* |
| **9** | Retailers *demand*, don't *have*, certifications | → "retailer-demanded certifications" |
| **8** | "well-resourced" | → "larger corporates" |
| **18** | EU Taxonomy missing from glossary | added |

**Also found and fixed while in there:** §4.5 said the matrix has "32 disclosure topics" and "29 scored across 30 columns". Both stale — verified it is **33 × 31 = 1,023 cells, 188 demand (18.4%)**, matching Chapter 6. The "37 instruments" figure now reconciles exactly (30 scored + 4 Gate-2 failures + 3 benchmarks).

## 🔧 Mine — ready to do, no decision needed

| # | Item | Note |
|---|---|---|
| **12, 13, 14, 17** | Spell out Regulation / Directive | Labels are in the Figure 2 **source**, not the .tex — needs the figure regenerated |
| **15** | Why part of Figure 2 is light grey | Add a legend entry or caption note |
| **11** | Say why the 30 scored instruments go to Chapter 6 | One sentence in §4.5 |
| **23** | p.85 "make a bit tidier" | Appendix formatting |
| — | **§4.4 vs §4.5 contradiction** | §4.4 still says "a priority subset of approximately twelve frameworks"; §4.5 now says the full set is coded. Flagged in the source. **Pick one.** |
| — | **ISSF sentence in §4.5** | I moved ISSF out of the "remaining unscored" group because it *is* a scored column (opt-in, off for this profile). Sanity-check that sentence. |

## 👤 Yours — needs your judgement or voice

| # | Item | Why it's yours |
|---|---|---|
| **10** | The "biased statement" framing — regulators and customers portrayed as making life difficult | Needs your voice. He's right that it works against your own Chapter 7 argument for proactive strategy. |
| **1** | Don't tell the reader what the chapter does *not* do | He flagged this twice now (also §3.3 in round 1) — a pattern |
| **21** | Imprecise sentence, p.28 | He offers a rewrite: *"This map fixes the columns of the demand matrix: the actors making the demand and the degree to which the demand is binding."* |
| **20** | **ISSF tier placement** | He argues it's a stepping stone *before* MSC, not Tier 4 strategic differentiation. Real disagreement — keep, move, or acknowledge the debate. Scoring doesn't change either way. |
| **22** | **Table 2, p.46 — basis-of-claim column** | The sharpest technical point. Percentages aren't comparable (some certified volume, some certified + in-assessment + FIP, some one species only). I'd add the column. Note his self-interest: Nomad's figure is cleanest. That doesn't make him wrong. |
| **2** | How did you conclude these firms are "leading"? | §5.2 answers it; Chapter 4 doesn't point forward to it |
| **16** | Why RSPO and not RTRS / ProTerra / FSC / PEFC | Justify RSPO or say the list is illustrative |

## ❓ Needs checking before you can reply

| Item | Status |
|---|---|
| **3, 4 — the Seafood Europe membership assumption** | He notes some Faroese and Icelandic firms aren't members. Suggests asking Kata. |
| **Parlevliet & van der Plas** | **Not yet verified.** Does P&P publish a structured sustainability report? If yes, it's a genuine omission and you should say so. If no, the sampling frame answers it cleanly. **I have not checked this and won't assert either way.** |

## ⚠️ Gap in my extract

My round-2 triage lists comments 1–6 and 8–23. **I don't have a #7.** Check the PDF — either it's a duplicate/positive note, or I missed one. Worth 30 seconds given "do not omit any comments".

---

# Round 3 — Chapter 5 email

## ✅ Already resolved by the bridge rebuild

| His point | Resolution |
|---|---|
| **"I thought we covered 43 DR, not 53"** | He has the pre-rebuild draft. Old bridge: 43/42. New: 53/52. Nothing wrong — he needs the current version. |
| **"We answered the same in both years for E1-7 and E4-1"** | Correct, and the rebuild fixed it. The old bridge showed E1-7 appearing in 2025 and E4-1 disappearing — both phantom. Now stable across years. |
| **"It shows we did not report on S3"** | Correct for the draft he read (old bridge: zero S3). New bridge credits S3-1 through S3-4. |

## 🔧 Mine — on your word

| Item | Note |
|---|---|
| **Move the YoY analysis to an appendix** | Your decision tonight. Text, figure and cross-references. |
| **§5.7 — rewrite the invariance claim** | **The big one.** Near-universal set is invariant only when Thai Union is dropped; drop any other firm and it moves by 3–13. The 13-requirement core survives all 6 leave-one-outs and all 15 leave-two-outs. Numbers are ready. **You review the logic first.** |
| **Replace `p1_cohort_invariance.pdf`** | Two same-size green bars differing only in the y-axis; also decouple "with/without Thai Union" from "EU/non-EU"; needs a "so what" |
| **§5.3 — describe over-crediting too** | Currently only covers under-counting. E1-7 is the example: EFRAG maps GRI 305-5 (*reduction*) → E1-7 (*removals*), which aren't the same thing. |
| **§5.6/5.7 — non-reporting ≠ oversight** | One sentence: a topic may be absent because it was assessed immaterial |
| ✅ **`p1_year_evolution.pdf` y-axis** | **Done** — zero-based, notebook patched so a re-run reproduces it. Also fixed stale narration listing E4-1/S1-7/S4-1 as dropped; real drops are Espersen −S1-4/−S2-4, Nomad −E1-9, Profand unchanged. |

## 👤 Yours

| Item | Why |
|---|---|
| **§5.1 — the homogeneity objection** | His sharpest theoretical point: the cohort may be homogeneous in the way that matters (all fish processors, same buyers, same advisers), which would make convergence less surprising. Deserves a real answer. The honest one may be that he's partly right — and that convergence under a common demand environment is exactly what your institutional-isomorphism reading predicts. |
| **Asymmetric scrutiny** | Only firms with two years get examined. Say so in the text. |

## ❓ Needs Oliver

| Item | Note |
|---|---|
| **Approval to name Nomad Foods** | He raised it himself. Chase it. |
| **The one narrow DD question** | Does Nomad report GHG removals (E1-7) or biodiversity-strategy resilience (E4-1) in either year? Only Nomad can settle the possible over-credit. |
| **What happened to GRI 201-2?** | Your decision tonight — ask why it left the 2025 index while the TCFD statement stayed published. |
| **Answer "are you asking for exactly that due diligence?"** | Yes, and scope it narrowly — he has limited capacity and asked to be told precisely what to check. |

---

# What I'd do next, in order

1. **You review the invariance logic** — gates the §5.7 rewrite, which is the largest remaining piece of Chapter 5
2. **I move YoY to the appendix** — decided, mechanical
3. **You write #10 and the §5.1 homogeneity answer** — the two that need your voice
4. **I do the mechanical round-2 items** — Figure 2 labels, legend, §4.5 sentence, appendix tidy
5. **You resolve §4.4 vs §4.5**, the ISSF tier, and Table 2
6. **Send Oliver one email** covering the version confusion, the naming approval, the GRI 201-2 question and the E1-7/E4-1 check
7. **Check P&P** and the missing #7

Still unblocked from last week and still yours: **tool redeploy**, **bibliography**, and **nothing is committed to git.**
