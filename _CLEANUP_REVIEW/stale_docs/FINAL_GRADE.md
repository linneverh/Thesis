# Final assessment — layout, figures, data referencing

**92 pages, 7 chapters, 0 errors, 0 broken references, 0 placeholders, 0 overfull boxes.**

Title page now carries **Professor Jean-Philippe Bonardi** and **In collaboration with Seafood Europe**.

---

## What this check found and fixed

### 1. One figure was genuinely unreadable

I rendered the figure pages as images and looked at them rather than just confirming the files existed. **Figure 2, the 49-instrument ecosystem map, was illegible** — set at text width, every instrument name was a grey smudge. That's the figure whose own caption invites the reader to read tiers, domains and dot colours.

Now a **full landscape page**. "Fisheries Control Reg", "Best Aquaculture Practices", "UN Global Compact" are all readable. Cost: one page, and a partly-empty page before it (unavoidable with a full-page landscape float).

Figure 10 (coverage-matrix screenshot) is also dense, but that one is defensible — its caption says it shows "the scale and shape of the raw scoring", not the values, and the full matrix is in the cited workbook. Left as is.

### 2. The restructure broke every `\nameref` in prose

Because I numbered Chapter 5's subsections, `\nameref` started printing the number as part of the title. Two visible casualties:

- *"the operational form the 6.4 Hotspot measures and stage assignment logic takes"*
- *"flagged for ASC's conversion-free criterion in 7.6 Limitations"*

Five instances fixed, all now plain section numbers. **Zero awkward numbered namerefs remain.**

### 3. Excel referencing — clean, verified both directions

**Appendix H lists exactly the 10 files in `thesis_supporting_files/`, 1:1, no gaps and no phantoms.**

| Named in thesis | On disk |
|---|---|
| ESRS_KPI_Mapping_V9.xlsx | ✅ |
| ESRS_Coverage_Analytics_v7.ipynb | ✅ |
| ESRS_Coverage_Results.xlsx | ✅ |
| GRI_ESRS_v6.xlsx | ✅ |
| GRI_ESRS_Mapping_v4.ipynb | ✅ |
| GRI_13_Topics_FINAL.xlsx | ✅ |
| Necessity_Domain_Matrix_v8.xlsx | ✅ |
| Phase3_Coverage_Matrix_v17.xlsx | ✅ |
| SME_Datapoint_Guide.xlsx | ✅ |
| VSME_Basic_and_Comprehensive.xlsx | ✅ |

I chased one apparent break — `GRI_ESRS_Topical_Mapping_AllCompanies.xlsx` is named but doesn't exist. It turns out the thesis already explains it was "merged directly into the bridge" and never shipped separately. Correct as written.

Also removed **four `~$` Office lock files** sitting in the supporting-files folder. Invisible junk that would have gone out with any zip.

### 4. All 15 figures and both tables are captioned and cited at least once. No orphans.

---

## Grade

**Layout: 5.5.** It was 5.0 before this pass. Zero overfull boxes across 92 pages, every figure legible, every reference resolving, consistent numbering, clean title page. The one blemish is the part-empty page before the landscape figure, which is a LaTeX float artifact rather than a mistake.

**Content: 5.25, up from 5.0–5.25.** The restructure and Chapter 7 rebuild both moved it. What changed since the first assessment:

- Discussion now engages the theory (4 citations → 7; Mitchell, DiMaggio, Barney and Teece all return)
- Seven balanced chapters instead of eight with two stubs
- The self-contained-chapter design is now declared and justified rather than left to inference
- Two factual errors about cohort firms corrected
- Reporting-basis precision (in accordance vs with reference) added

**Overall: 5.25–5.5.**

What still separates it from a clear 5.5+, unchanged from before and not fixable this week:

1. **No practitioner validation.** The claim that naming the right topics unblocks action is untested. The cohort round partly addresses this — which is why sending matters.
2. **The worked case is specified but not executed** (§6.9). An examiner will ask why.
3. **N=6, purposive, single analyst.** Handled honestly, but it caps the strength of any claim.
4. **The tool screenshot (Figure 14) is stale** — it shows the pre-revision interface, including the old `.txt` download and the panel we removed. Worth re-shooting before 24 August; it doesn't affect the argument but a sharp reader may notice it doesn't match the tool they visit.

---

## Before you send

- Chapter 5 is now **page 28**, Chapter 6 **page 40**. Emails and README updated.
- Paste the tool link into the three drafts.
- Confirm the title change is allowed by your programme.
