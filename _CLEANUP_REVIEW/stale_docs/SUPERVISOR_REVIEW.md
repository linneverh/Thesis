# Full pass — findings, fixes, and an honest assessment

87 pages, 0 errors, 0 undefined references, **0 placeholders, 0 `n.d.` citations** anywhere in the PDF.

---

## What I found that you'd have been embarrassed by

Checking your Chapter 7 sourcing claims against the actual reports you uploaded turned up **two factual errors about firms who are about to read this chapter.**

**1. Espersen — wrong number and wrong scheme.** The thesis said *"96% of sourced fish certified to a GSSI-recognised scheme."* Neither the 2024 nor the 2025 report says this. Both say **99% of fish and seafood sourced in accordance with third-party certification**. The only "96%" in the 2025 report is a GHG accounting figure for Category 10 emissions — unrelated. Corrected.

**2. Bolton — 79% is the wrong statistic entirely.** The thesis said *"99.7% responsibly-sourced tuna, 79% MSC-certified."* In Bolton's report, **79% is the skipjack share of their species mix**. Their actual MSC-certified share is around 30–36%, with 100% as a 2030 target. The 99.7% figure is correct but means "from responsible fishing practices," which Bolton defines as MSC-certified *or* in full MSC assessment *or* covered by a credible FIP. Corrected and the definition now spelled out.

**3. Thai Union — cited to the wrong year.** The 99% figure was cited as 2025. It comes from the **2024** report (98.9% = 71.4% MSC + 14.1% in-assessment + 13.4% FIP). Their 2025 report gives 99.9% on a different definition. Now cited as 2024 with the exact figure.

Nomad and Mowi checked out; Nomad's wording was tightened to match the report ("certified sustainable or responsibly sourced", not "MSC- or ASC-certified").

**I also turned that whole passage into a table** (Table 2, p.44). It was a 132-word parenthetical listing six firms — now each reviewer finds their own row.

## References — all six rebuilt from the PDFs you sent

| Firm | Now cites | Coded edition |
|---|---|---|
| Espersen | *Sustainability Report 2025* (2026) + 2024 for the YoY comparison | `Espersen 2025` |
| Nomad Foods | *Sustainability Report 2025* (2026) + 2024 | `Nomad 2025` |
| Profand | *ESG Annual Report 2025* (2026), Profand Fishing Holding S.L.U., with the URL | `Profand 2025` |
| Mowi | *Annual Report 2025* (2026) | verified: "100% of harvest volume in **2025**" |
| Bolton | *Sustainability Report 2024* (2025) | FY2024 |
| Thai Union | *Sustainability Report 2024* (2025) — the title was wrong, it was not "Sustainable Development Report" | FY2024 |

Also: **Tugliani, Guareschi & Arfini** is no longer `n.d.` — it's *Italian Review of Agricultural Economics* 81(1), 2026, 39–55. And I removed three orphaned corporate-webpage entries that nothing cited any more.

---

## Your four checks

**1. Unsourced claims — clean.** I scanned every external-world claim in the body against nearby citations. Seven flagged; five are your own findings (which need no citation), one is a synthesis of the literature just reviewed, one is the "increasingly attach" phrasing in §1.3 already softened. Nothing a reviewer can call unsupported.

**2. Over-descriptive sentences — improved and measured.**

| | Original | Now |
|---|---|---|
| Mean sentence | 34.0 words | **29.3** |
| Median | 31 | **26** |
| Over 40 words | 30.4% | **21.8%** |
| Over 60 words | 10.0% | **6.2%** |

The residual long sentences are mostly definitional triples (the direct/indirect/context locus definition, p.24) where the length is doing real work. I'd leave those.

**3. Repetition — not where you thought.** I measured term frequency across 20,000 body words. "Proactive" and "reactive" together appear 54 times, about 1.2 per 1,000 words. That is **not** overuse for a concept the thesis is built on. The genuinely high-frequency terms (demand 5.3/1k, disclosure 3.9/1k, topic 6.5/1k combined) are your technical vocabulary and are unavoidable.

The real repetition was mechanical. `\nameref` was expanding long section titles inline, so the phrase *"Robustness across sourcing models and reporting year"* appeared **five times** as running prose, and *"The shape of the frontier: volume, consistency and blind spots"* three times. I replaced all sixteen with section numbers.

**4. Clarity — one structural fix.** Chapter 6's subsections were **unnumbered** while Chapters 5 and 7 were numbered. Inconsistent, and it's why the namerefs were verbose. Chapter 6 is now 6.1–6.8, and every cross-reference points to a real number. I also fixed a text overflow in the List of Figures and wrapped 50 bibliography URLs so they stop running into the margin (17 overfull lines → 6, and the rest are cosmetic).

---

## 5. The conclusion — you're right, and here's the evidence

Your instinct is correct, but the problem is more specific than "it's just a summary."

Chapter 8 is **~3,000 words across seven sections**, which is proportionally fine. It does contain real contextualisation: §8.4 (760 words) is the strongest section in the chapter and genuinely situates your findings against the July 2026 ESRS revision. §8.6 (future work) is rich and specific.

The problem is this: **Chapter 8 contains four citations in three thousand words.**

Of the theoretical anchors you build the whole thesis on in Chapter 3 — Barney and Teece (resource-based view), Mitchell, Agle & Wood (stakeholder salience), DiMaggio & Powell (institutional isomorphism), Suchman (legitimacy) — **not one reappears in the discussion.** Only Sharma & Vredenburg, Torugsa and Baumgartner survive, in a single bracket.

That is the classic examiner criticism: *the discussion doesn't discuss.* You set up four theoretical lenses, produce findings that speak directly to them, and then never close the loop. Concretely, you have unclaimed contributions sitting right there:

- Your **narrow-law/broad-cascade** finding is a stakeholder-salience result. Salience theory says firms triage by power, legitimacy and urgency — you show the *transmission structure* determines what actually reaches a small firm, which refines the theory rather than just applying it.
- Your **universal core** is an institutional-isomorphism result. You can say which of DiMaggio & Powell's three mechanisms your evidence supports — and you already gesture at this in Chapter 6 without ever cashing it out.
- Your **capability-sharing mechanism** is a resource-based-view argument you never bring back to Barney or Teece.

Second structural point: **§8.1 is 555 words of recap, and it's the first thing in the chapter.** The reader has just read all of it. §8.7 is then 136 words of recap again. So the chapter opens and closes in summary mode, and the actual thinking is sandwiched in the middle.

**What I'd do** (roughly two hours, and it's the highest-value edit left):

1. Cut §8.1 to about 150 words — three sentences, one per finding.
2. Add a new §8.2, "What these findings mean for the theory," 600–800 words taking each of the three lenses in turn. This is where the marks are.
3. Expand §8.7 to a real conclusion: what changed, what's now known that wasn't, what remains open.

That single change is worth more than everything else outstanding.

---

## 6. Is it thesis-style, and what would I give it?

**Style: yes, with one qualification.** The register is right — formal, hedged where it should be, no contractions, claims scoped carefully. Chapter 6's scope note ("this is a coverage analysis, not a judgement of reporting quality") is exactly the kind of self-limiting move examiners look for. The limitations section is unusually honest; most students overclaim, you don't.

The qualification: the prose is still **denser than it needs to be**, even after tonight. 22% of sentences over 40 words is defensible but not comfortable. It reads like someone who understands the material completely and hasn't yet decided what the reader can be spared.

**As a grade — and I'd rather be useful than kind:**

On the Swiss 1–6 scale, **as it stands now: 5.0 to 5.25.** With the discussion chapter rebuilt as above: **5.5, plausibly higher.**

What's carrying it:

- **The research design is genuinely good.** Four steps that build on each other, each answering one RQ, with the output of each becoming the input of the next. That's hard to do and most theses don't.
- **The empirical work is real and reproducible.** 49 instruments classified, 70 DRs coded across six firms, 992 matrix cells with a justification log. Every number in the thesis reconciles to source data — I checked.
- **The robustness checks are a cut above.** Threshold sensitivity, cohort-size invariance, EU/non-EU split. A Master's thesis usually asserts its finding; yours tries to break it.
- **It produces an artefact someone can use.** The tool is not decoration.

What's holding it back:

- **The discussion doesn't engage the literature** (above). This is the big one.
- **No practitioner validation.** You're honest about it, which mitigates, but the central claim — that naming the right topics helps — remains untested. The cohort review you're now requesting partly addresses this, which is a good reason to send.
- **The worked case is specified but not executed** (§7.9). An examiner may push on why.
- **N=6, purposive.** You handle this correctly, but it caps how strong any claim can be.

The gap between 5.0 and 5.5 is almost entirely the discussion chapter. The empirical work is already there; the interpretation isn't finished.

---

## What's left before sending

Nothing blocking. Placeholders gone, references correct, factual errors fixed.

The **8 pages** from the earlier list are still worth your eyes (p.11, 13, 22, 49, 53–54, 57), plus **p.44** for the new table — check your firms' figures read the way you'd want them to read.

If you have two hours tomorrow evening, spend them on §8.2 rather than on proofreading.
