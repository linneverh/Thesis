# Thesis status — 29 July 2026, end of day

Two deadlines on the table: **reviewer/sustainability-leads send by tomorrow evening**, **fully done in 3 weeks**. This doc is your pickup point tomorrow morning.

---

## 1. Five-minute decisions (do these first — everything else depends on them)

1. **Chapter consolidation (colleague point 1) — before or after tomorrow's send?**
   We agreed content-fixes-first, structure-later, but "structure-later" was written assuming you had more runway before *any* external send. If tomorrow's version goes to your supervisor/sustainability leads still at 8 chapters, decide now whether that's fine for this round (consolidate in the next 3 weeks, before the *final* version) or whether you want the merge done before it goes out at all. My take: sending 8-chapters-but-content-fixed tomorrow is reasonable — reviewers can comment on structure same as content — but it's your call, not mine.

2. **GRI bridge file** — still unresolved. You said you renamed `GRI_ESRS_v5.xlsx` to something with "v6" in it, but I still can't find it anywhere in the synced project folder. Appendix G in main.tex still names the old file. Needs your input on where it actually is before I can fix that reference.

3. **`ESRS_KPI_Mapping_V8.xlsx`** — still sitting in your root folder with the known blank Nomad/Profand sheets. Delete it, or keep it around?

4. **Point 5 sources** — verify the two links I found (US Foods seafood policy PDF, SeafoodSource/Blank 2025 article) actually say what I think they say before this goes to reviewers citing them.

5. **Point 2 repetition cuts** — I flagged 5 concrete sites with `%CL:` comments (see below) but didn't cut anything myself, per your "propose first" rule. Skim those and tell me yes/no/edit.

---

## 2. Done today, verified, PDF rebuilds clean (89 pages, 0 errors, 0 undefined refs)

- **Point 5** (Tier 2 ASC/MSC): rewrote `angle1_ecosystem.tex` Tier 2 passage to generalize away from naming only MSC/ASC, added two real citations to `references.tex` (US Foods Seafood Policy 2025; Blank/SeafoodSource 2025) — **needs your verification, see #4 above**.
- **Point 6** (capacity/size claim): added a caveat right after the cohort table in `angle2_cohort.tex` stating plainly that coverage doesn't track firm size (Mowi — largest by turnover — has the *lowest* coverage), reframing "capacity" as reporting maturity, not size.
- **Point 2** (repetition): flagged 5 genuine repetition sites with inline `%CL:` comments — main.tex ~358-364, ~369-370, ~428-431 (Ch3 makes the same "not intent, structural" point 3x in 40 lines, plus restates intro's "reactive pays full cost" sentence near-verbatim); introduction.tex ~206 (restates 1.3 a second time); angle2_cohort.tex ~41-46 (restates a claim it makes again near line 519). Also corrected two of your own `%LI` doubts — Baumgartner & Ebner (2010) and Cöster et al. (2020) ARE real, verified citations in references.tex, not fabricated.
- **Point 4** (unsourced claims): audited Ch1 (Introduction) and Ch3 (Lit review + conceptual framework, main.tex 3.2-3.4) and Ch4 (Research design) — findings below under "still open."
- **Point 3** (ESRS placement): checked — it's already in the Introduction, not the lit review. Effectively already solved, no action needed.

---

## 3. Colleague feedback (points 1-7) — status at a glance

| # | Issue | Status |
|---|---|---|
| 1 | Too many chapters, consolidate to Intro/Method/Results/Discussion | Agreed on the plan (see my earlier message), **not yet executed** — deferred per your "content first" call. Decision #1 above affects timing. |
| 2 | Repetitive/descriptive, cut reactive/proactive overuse | 5 sites flagged in-text, awaiting your yes/no. Full pass not done for angle3_crossmapping.tex (checked — mostly fine, not filler) or angle1. |
| 3 | ESRS explained in intro, not lit review | Already true, no action needed. |
| 4 | Unsourced claims — identify + source | Ch1, Ch3, Ch4 done (see below). **Ch5 (angle1), Ch6 (angle2), Ch7 (angle3), Ch8 (discussion) still to audit.** |
| 5 | Tier 2 ASC/MSC — no source, too narrow | Fixed, sourced, awaiting your link verification. |
| 6 | "Capacity drives reporting" in Ch6 — check if true | Checked — it wasn't quite true (Mowi contradicts it), caveat added, dropped the size angle per your call. |
| 7 | Discussion too short, should contextualize not summarize | Diagnosed (§8.1 is literally titled "Summary" and mostly restates) — **not yet fixed**, needs actual rewrite work. |

### Point 4 findings so far (Ch1 + Ch3 + Ch4)
- Ch4 (Research design): clean, no unsourced claims — it's pure methods description.
- Ch3: well-sourced overall. Two minor items: `Tugliani, Guareschi & Arfini, n.d.` has no date (possibly one of your two flagged bibliography loose ends); one uncited synthesis sentence ("this literature is overwhelmingly oriented toward large undertakings") — low priority, standard lit-review synthesis.
- Ch1: three real gaps — "the up-front investment...is rarely made" (1.3) stated as fact without direct citation; the regulatory list in 1.4 (CSRD, CSDDD, Packaging Reg, CFP, IUU/Control Regs, EU Deforestation Reg, MSC/ASC, GDST) names real instruments but cites none directly; "this structure...recurs across manufacturing and agri-food SME sectors" (1.4) is an unsourced generalization beyond seafood — the biggest one, since it's an external-validity claim with nothing behind it.

---

## 4. Longstanding open items still relevant to your two deadlines

From your running task list, the ones that actually matter for "reviewer-ready by tomorrow" or "done in 3 weeks":
- Full proofread pass (typos/grammar) — not done.
- End-to-end reviewer read of the full PDF — not done.
- Zotero: ~10-12 new sources (including today's 2) still need adding + references.tex re-export.
- Two bibliography loose ends (undated/incomplete entries) — not resolved.
- Cohort report year/edition consistency check — not done.
- Title decision — still flagged, not decided.
- Duplicate/trash Excel cleanup — not done (low priority, doesn't affect the PDF).

---

## 5. Suggested order for tomorrow morning

1. Knock out the 5 decisions in section 1 (15 min, unblocks everything else).
2. If cuts approved: I apply them, rebuild, confirm clean.
3. I continue the point 4 audit — Ch5, Ch6, Ch7, Ch8 — same method as today.
4. I draft the Discussion (point 7) fix as a marked review block for your voice-check, not a silent rewrite.
5. You do your own proofread/reviewer-read pass in parallel while I work through 3-4.
6. Zotero + references.tex re-export, once all new citations from today and tomorrow are finalized.
7. Chapter consolidation (point 1) — only if you decided in #1 to do it before tomorrow's send; otherwise this moves into the 3-week window.

Everything today is committed to disk but not pushed — pull/push is still yours to do manually, as always.
