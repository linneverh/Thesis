# Oliver — round 3: Chapter 5, the YoY question, and the invariance challenge

His second email plus the reporting-manager input. Nothing omitted.

**Headline: he is largely right, and the bridge rebuild has already resolved most of it. His invariance challenge is correct and I have now tested it — the result requires a change to §5.7.**

---

## 1. "I thought we covered 43 DR, not 53" — he is right about the draft he read

| | old bridge (the draft he has) | new bridge |
|---|---|---|
| Nomad 2024 | **43** | **53** |
| Nomad 2025 | **42** | **52** |

He read the pre-rebuild draft. The +10 is the bridge correction — the same one Antonio's review triggered. **Nothing is wrong; he simply has an outdated version.** Say so plainly.

---

## 2. His reporting manager: "same answers in both years for E1-7, E1-9, E4-1"

She is right, and the old bridge was creating phantom year-on-year changes:

| DR | old bridge 2024 → 2025 | new bridge 2024 → 2025 | her statement |
|---|---|---|---|
| **E1-7** | no → **yes** (phantom addition) | yes → yes | consistent |
| **E4-1** | yes → **no** (phantom drop) | yes → yes | consistent |
| **E1-9** | yes → no | yes → no | *she says consistent* |

**Two of her three concerns are already fixed by the rebuild.** The old bridge showed E1-7 appearing and E4-1 disappearing; both are now stable across years, exactly as she describes.

---

## 3. E1-9 — he has supplied primary evidence, and it changes the result

He gives both TCFD statements:

- 2024: `nomad-foods-tcfd-statement.pdf`, linked from the 2024 report
- 2025: `nomad-foods-2025-tcfd-disclosure-final.pdf`, "TCFD Statement → Download", page 35

So the disclosure exists in both years. My coding missed 2025 only because the 2025 GRI index dropped GRI 201-2.

**If E1-9 is credited for 2025 on his evidence, Nomad goes to 53 in both years — no year-on-year change at all.** That removes the finding he objects to, and it does so on primary evidence rather than as a concession.

**Decision needed:** credit it (consistent with the E1-1 body-screening rule already applied to the seven unlinked DRs) or hold the index-only line. **I would credit it** — the rule exists, he has supplied the source, and it makes the coding more accurate.

---

## 4. E1-7 and E4-1 — he has found over-crediting, the mirror of the Profand problem

> *"E1-7 — is it about GHG removal / carbon credits? We did not report in neither year."*
> *"E4-1 — is it about biodiversity + transition? We did not report on both in neither year."*

He is right on both, and the bridge credits them anyway:

- **E1-7** (GHG removals and storage) is credited from GRI 305 3-3 and GRI 305-5 (*reduction* of GHG emissions). EFRAG does map 305-5 → E1-7 §56(b), so the mapping is theirs, not yours — but reduction is not removal.
- **E4-1** (resilience of business model to biodiversity) is credited from GRI 304 3-3, the biodiversity management approach.

**This is the opposite error from Profand.** There the bridge under-credited; here it over-credits. Same root cause: a management-approach disclosure maps to several requirements, some of which the firm does not actually address.

**It does not affect the year-on-year comparison** — both are consistent across years. But it is a real limitation and §5.3 currently only describes under-counting. **It should describe both directions.**

---

## 5. S3 — right about the draft, already fixed

> *"it shows we did not report on S3, correct? … in our materiality assessment this came up as non-material."*

Old bridge: Nomad had **zero** S3 requirements. New bridge: **S3-1, S3-2, S3-3, S3-4**. His observation was accurate for the draft he read.

His general point is worth taking: **non-reporting can mean the topic was assessed immaterial**, not that it was overlooked. The chapter treats absence as absence throughout. One sentence acknowledging materiality as a reason would be fair and costs nothing.

---

## 6. The year-on-year presentation — he is right to be uncomfortable

> *"These two graphs indicate a change in reporting and we think there is no change… A reader — maybe not your professor — however, stakeholders, investors may read this and start asking why did we stop on E1-9 and E4-1… So I would be careful here, especially as the other 3 reporters did not undergo this question."*

Three separate points:

**a. The substance.** After the rebuild plus his E1-9 evidence, Nomad is flat at 53. The concern largely dissolves.

**b. The chart design.** He is right: the y-axis runs 34–43, which exaggerates small changes. *"If Espersen moved from 41 to 40 the curve becomes quite steep, for a 2.5% decrease."* **Fix: start the axis at zero, or plot percentage change.** This is a legitimate criticism of a chart I regenerated today.

**c. Asymmetric scrutiny.** He notes only firms with two years get examined. True and unavoidable, but the text should say so.

---

## 7. The invariance claim — his challenge is correct, and it does not survive testing

> *"What if you remove another reporter, let's say Nomad, is the cohort size still invariant? … There will be a minimum sample size needed."*

**I tested it. He is right.**

Leave-one-out on the near-universal set (≥5 of 6 → ≥4 of 5):

| dropped | resulting set | identical to the 28? |
|---|---|---|
| **Thai Union** | 28 | **yes** |
| Nomad | 31 | no — differs by 3 |
| Bolton | 35 | no — differs by 7 |
| Profand | 37 | no — differs by 9 |
| Espersen | 38 | no — differs by 10 |
| Mowi | 41 | no — differs by 13 |

**The invariance holds only for Thai Union**, because Thai Union is the deepest reporter — removing it takes away a "yes" vote. Removing a shallow reporter removes "no" votes and the set expands sharply.

So §5.7's claim, which reads as general stability, is really a single favourable case. **This must be corrected.**

**But there is a much stronger result available.** The 13-requirement universal core is retained under **every** leave-one-out *and* **all fifteen** leave-two-out combinations:

| dropped | core retained |
|---|---|
| any one firm | all 13, always |
| any two firms | all 13, always |

The core only ever grows when shallow reporters are removed — it never loses a member. **That is the robustness claim worth making**, and it is stronger than what the chapter currently asserts.

**Recommended fix:** replace the near-universal invariance claim with the leave-one-out and leave-two-out table for the core, and state plainly that the near-universal set is *not* invariant to cohort composition.

---

## 8. The invariance figure — four separate criticisms, all fair

1. **Decouple** "with/without Thai Union" from "EU/non-EU" — currently conflated
2. **Two green bars of the same size** carry the message visually rather than through data
3. **The difference is only in the y-axis**
4. **Missing the "so what"** — *"we need the message as to why this is important"*; he suggests the heading should be "cohort size is invariant / stable"

If §5.7 is rebuilt around the leave-one-out table, this figure is probably replaced rather than fixed.

---

## 9. The homogeneity argument — his sharpest theoretical point

> *"You defined heterogeneity by wild, aquaculture, multi-species, vertical integration… but actually they are super homogenous as the main denominator is fish processing, and with that as a basis all players face the same stakeholder community and listen to the same advice on what to report on."*

This goes at the heart of your convergence finding. §5.1 argues the universal core is meaningful *because* the firms differ. If they are in fact homogeneous in the way that matters — same buyers, same regulators, same advisers — then convergence is much less surprising.

**This deserves a real answer rather than a deflection.** Two available:

- The cohort spans two regulatory regimes (EU and non-EU) and two reporting frameworks, so "same stakeholder community" is not quite right
- More honestly: he is partly correct, and the chapter could say so. Convergence among firms facing a common demand environment is exactly what the institutional-isomorphism reading in §5.1 predicts — so his objection supports the mechanism rather than undermining the finding

---

## 10. What he is actually asking you

> *"So maybe you help me in what you still need from me and what I really need to check → are you asking for exactly that due diligence?"*
> *"Please let me know whether you have received enough feedback on Chapter 5. If not sufficient, please ask specific questions."*

**He is offering a due-diligence check and asking you to scope it.** He has limited capacity and wants to be told precisely what to verify.

Given what his reporting manager already found, the highest-value ask is narrow: **confirm whether Nomad reports GHG removals (E1-7) and biodiversity-strategy resilience (E4-1) in either year.** Those are the two the bridge may be over-crediting, and only Nomad can settle them.

**He also needs approval to be named.** Chase that — he raised it himself.

---

## Actions

**Thesis**
- [ ] Credit E1-9 for Nomad 2025 on his TCFD evidence → Nomad flat at 53
- [ ] §5.3: describe over-crediting as well as under-crediting, using E1-7 as the example
- [ ] §5.6 or §5.7: note that non-reporting may reflect an immateriality assessment
- [ ] §5.7: replace the invariance claim with the leave-one-out / leave-two-out result for the core, and state that the near-universal set is not invariant
- [ ] Regenerate `p1_year_evolution.pdf` with a zero-based axis or percentage change
- [ ] Replace or rebuild `p1_cohort_invariance.pdf`
- [ ] §5.1: address the homogeneity objection

**To Oliver**
- [ ] Explain 43 → 53 (he has the old draft)
- [ ] Confirm E1-9 credited, Nomad now flat year on year
- [ ] Ask the narrow DD question: E1-7 and E4-1, either year
- [ ] Chase the naming approval
- [ ] Answer his "is Chapter 5 feedback sufficient" question — it is, and then some
