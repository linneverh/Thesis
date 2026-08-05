# Plan to 24 August

State at end of 4 August. **97 pages, zero LaTeX errors, zero undefined references, zero broken citations, zero overfull boxes above 20pt, no placeholders, no stale numbers.**

---

## Verified consistent today

**Numbers** — every headline figure checked against the source workbooks, not against the text:

| | data | text |
|---|---|---|
| Thai Union / Nomad / Bolton / Profand / Espersen / Mowi | 60 / 52 / 45 / 43 / 34 / 33 | matches |
| Reported by ≥1 · ≥5 · all six · none | 63 · 28 · 13 · 7 | matches |
| Matrix | 33 rows × 31 instruments = 1,023 cells, 188 demand (18%) | matches |
| Build-first topics | 9 mixed · 8 aquaculture · 5 wild | matches |
| Frameworks answered | 26 of 30 active | matches |

**Figures** — all regenerated from the rebuilt data except two, both correctly so: `r_actor_tier.pdf` plots instrument composition (unchanged by the rebuild) and `necessity_domain_matrix.pdf` belongs to Chapter 4.

**Reviewer comments** — Antonio's three comments plus his eight-DR table all addressed; Oliver's 21 all addressed bar one deliberate non-change (#14, "results chapter", which is correct English as written).

---

## Two open items found in the final audit

1. **`STECF (2025)` is cited but missing from `references.tex`.** Introduction p.13 uses it for the 3,245-enterprise figure. Your source comment says it was verified against STECF 25-15, *Economic report on the fish processing industry*. It now also anchors §5.2. **Add on the next Zotero pull.**
2. **`BRCGS (2022)` and `IFS Management GmbH (2023)`** — in-text citation is wired into §6.7 and waiting for your export.

Both are reference-list only; the argument text is finished.

## Stale number found and fixed (5 August)

**§4.5 said the matrix has "32 disclosure topics" and "29 actively scored across 30
columns". Both were stale.** Verified directly against `Phase3_Coverage_Matrix_v18.xlsx`:

- **33 topic rows** = 29 numbered DRs + 4 GAP rows (G1–G4). My first parse missed the
  GAP rows because their tier cell reads `GAP` rather than `T1`/`T2` — worth knowing if
  you ever re-run that check.
- **31 scored columns** = 30 instruments, VSME split into Basic and Comprehensive
- CSRD/ESRS carried as the excluded baseline in column 36
- **33 × 31 = 1,023 cells, 188 demand (18.4%)** — matches Chapter 6 exactly

Corrected to 33 and 30/31. The "37 instruments" figure now reconciles cleanly:
30 scored + 4 Gate-2 failures + 3 switched-off benchmarks. **ISSF moved out of the
"remaining" group** because it is a scored column (opt-in, switched off for the
non-tuna firm) rather than an uncatalogued instrument — that sentence is flagged in
the source for you to sanity-check.

**Still open in §4.5:** Section 4.4 says "a priority subset of approximately twelve
frameworks", which contradicts this paragraph. Flagged in the source, not resolved.

## Workbook audit (evening of 4 August)

All eight workbooks open cleanly and the chain reproduces the thesis end to end:
V10 gives 60/52/45/43/34/33 and a 63 / 28 / 13 / 7 funnel; v8 and V10 agree on all
five firm sheets; v18 gives 33 x 31 = 1,023 cells with 188 demand and nine
build-first topics; and the tool matches the matrix exactly.

**Fixed during the audit.** The 13 justification entries for the new demand cells
(E1-1, S4-1, S4-3) had been lost when v18 was rebuilt from scratch. Restored --
the log now has 198 rows, 13 tagged `ADDED v18`.

**Still open.** `~$GRI_ESRS_v8.xlsx` is an Excel lock file, so v8 is open on your
machine. Close it before anything else writes to it.

---

# Tomorrow — Tuesday 5 August

### Yours

- [ ] **Redeploy the tool.** The local file is current and tested; the live site is not. Every reviewer email links to it.
- [ ] **Re-shoot Figure 14** (`phase3/tool.jpg`) from the live site once redeployed.
- [ ] **Send Oliver the tool link** — his comment 9 was "would like to understand this tool :-)".
- [ ] **Fix the bibliography.** The `bibl.rtf` export is not safe to paste over `references.tex` — it would drop 26 entries, including Barney, Teece, Mitchell, GRI & EFRAG, and all six cohort reports. Specifically:
  - Add **STECF** (it is in the export, filed under "European Commission" — but cited in-text as "(STECF, 2025)", so either match the in-text cite or add a cross-reference)
  - Add **BRCGS (2022)** and **IFS Management GmbH (2023)** by hand — Zotero did not pick them up
  - In Zotero: fix the **Battisti & Perry** author order (currently exports as "Perry, Martin" alone), remove three duplicate pairs (Afolabi, STECF, Tugliani), and check the umlaut encoding (Cöster comes through as "Cster")
  - I can merge the new entries into `references.tex` without touching the rest — one minute, just say when
- [ ] **Send the Antonio reply** (`reply_antonio.md`, ready).
- [ ] **Reply to Oliver** — explain 43 → 53 (he has the pre-rebuild draft), confirm E1-9 credited and Nomad now flat year on year, ask the one narrow due-diligence question (does Nomad report GHG removals E1-7, or biodiversity-strategy resilience E4-1, in either year?), and chase the approval to name Nomad. He asked directly what he should check — answer that.
- [ ] **Read Chapters 1–3 and the conclusion**, as you planned.
- [ ] **`git add -A && git commit && git push`** — nothing has been committed through any of today's work.

### Mine, when you give the word

- [ ] Whatever your Chapters 1–3 read turns up.
- [ ] Match in-text citations to however Zotero formats the three new entries.

---

# Wednesday 6 August

### Oliver round 2 — Chapter 4 (`oliver_round2_triage.md`, 23 comments)

- [x] **Factual corrections applied** *(done 5 Aug — builds clean, 97 pp, 0 errors)*
  - SMETA and EcoVadis no longer called certifications — §4.1 Tier 2 now reads "certification, social audit or buyer assessment (MSC and ASC certification, SMETA audits, EcoVadis ratings)"; §4.1 domain axis now "social audits and buyer assessments"; same fix in the tool's S2 hint text
  - Dow Jones Sustainability Index → **Dow Jones Best-in-Class Indices** in all four places (main.tex ×3, annex.tex ×1), with the February 2025 rename noted on first mention and in the annex. *Verified against S&P Global — renamed effective 10 Feb 2025, so Oliver is right.*
  - "retailer certifications" → "retailer-demanded certifications" (§4.1 caveat)
  - "well-resourced firms" → "larger corporates" (§4.1 caveat)
  - EU Taxonomy added to the glossary
- [ ] **Spell out Regulation and Directive in Figure 2** — not done; the labels live in the figure source, not the .tex
- [ ] **Table 2 (p.46)** — add a basis-of-claim column; the sourcing percentages are not comparable
- [ ] **#10 (p.25)** — the "biased statement" framing on regulators and customers
- [ ] **#8** "well-resourced" → "larger corporates"; **#1** don't tell the reader what the chapter omits; **#21** rewrite the imprecise sentence
- [ ] **Check Parlevliet & van der Plas** — does it publish a structured sustainability report? If yes, that is a genuine omission
- [ ] **ISSF tier placement (#20)** — his stepping-stone argument vs your Tier 4
- [ ] Small: Figure 2 light grey (#15), RSPO vs RTRS/ProTerra/FSC/PEFC (#16), EU Taxonomy glossary (#18), why 30 instruments (#11), tidy p.85 (#23)

### Oliver round 3 — Chapter 5 (`oliver_round3_triage.md`)

- [ ] **Credit E1-9 for Nomad 2025** on his TCFD evidence → Nomad flat at 53 both years, and the year-on-year finding he objects to dissolves
- [ ] **§5.7 — the invariance claim must change.** Leave-one-out testing shows the near-universal set is invariant only when Thai Union is dropped; removing any other firm changes it by 3–13 requirements. The 13-requirement core, by contrast, survives every leave-one-out *and* all fifteen leave-two-out combinations. Replace the claim with the core result.
- [ ] **§5.3** — describe over-crediting as well as under-crediting; E1-7 is the example
- [x] **`p1_year_evolution.pdf` regenerated with a zero-based y-axis** *(done 5 Aug)* — notebook cell 25 patched so a re-run reproduces it. Also fixed a stale narration line in that cell: it still listed E4-1, S1-7 and S4-1 as dropped, which the bridge rebuild had already resolved. Actual drops are now only Espersen −S1-4/−S2-4, Nomad −E1-9, Profand unchanged.
- [ ] **Replace `p1_cohort_invariance.pdf`** — two same-size bars differing only in axis
- [ ] **§5.1** — answer the homogeneity objection rather than deflect it
- [ ] **§5.6/5.7** — note that non-reporting may reflect an immateriality assessment

### Then

- [ ] **Review the 13 demand scores in matrix v18** — amber cells, justification log rows 187–199. This is the last piece of new analysis in the whole rebuild that you have not personally checked, and it sets Chapter 6's demand density.
- [ ] Read Chapters 4 and 5 end to end, now that both have changed substantially.
- [ ] Decide whether the §7.2 "strategic advantage" paragraph does the job against the new title, or whether the title should soften after all.

---

# Thursday 7 August

- [ ] Read Chapter 6 and Chapter 7.
- [ ] Check the appendices, especially G (admission rules) and H (file index) — both were edited today.
- [ ] **Decide what to do about the justification-log gap.** 68 of the 188 demand cells in v18 have no entry in the `Justifications log` (36%). This is *not* new: v17 had 73 unlogged of 181 (40%), so coverage actually improved. Most gaps are the Sedex/SMETA and EcoVadis columns. But §7.6 currently claims "every non-zero cell carries a recorded rationale", which is not accurate. Two options:
  - **Soften the claim** in §7.6 to say the log records the reasoning for the scored instruments, with the audit-trail gaps named — 10 minutes
  - **Fill the 68 gaps** — real work, roughly a full session, and only worth it if you want the claim to stand as written
  - I would soften it. The unlogged cells are concentrated in two instruments whose scoring logic is uniform, so the gap is a documentation gap rather than an analytical one.
- [ ] Refresh the reviewer package if anything moved: `ATTACHMENTS/` holds the zip, the results workbook, `Chapter5_supporting_files.docx` and the draft PDF.

---

# Friday 8 August

- [ ] Full read-through at one sitting.
- [ ] Final build, final stale-number sweep (I can rerun the whole audit in one pass).
- [ ] Chase any reviewer who has not replied — the 14 August deadline you set them is the following Thursday.

---

# 11–22 August

- [ ] Incorporate late reviewer feedback as it arrives.
- [ ] Second-coder check on a sample of the coding, if you want to close the inter-rater gap named in §7.6.
- [ ] Formatting pass against your programme's submission requirements.
- [ ] Title confirmation, if EPFL requires it fixed in advance.

---

## Things I would not leave to the last week

- **The tool redeploy** gates three emails and a figure.
- **The 13 demand scores** are mine, not yours, and they are load-bearing for Chapter 6.
- **The commit.** Nothing from today is in git. That is a day of work — the bridge rebuild, the matrix, all the figures, both reviewers' comments — sitting only on disk.
