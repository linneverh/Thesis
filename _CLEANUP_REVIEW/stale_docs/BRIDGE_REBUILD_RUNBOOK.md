# Bridge rebuild — runbook

**Problem.** `Interop_Index` in `GRI_ESRS_v6.xlsx` under-populates the EFRAG GRI–ESRS interoperability index. 40 rows are missing DR links, GRI 101 has no rows, and 4 rows credit DRs EFRAG does not support. Everything for the three GRI-reporting firms is derived from this sheet, so the error propagates through Chapter 5 and into Chapter 6.

**Why it is tractable.** `GRI_ESRS_Mapping_v4.ipynb` is a pure function of the bridge. It reads `Interop_Index`, joins each firm's GRI index on `Lookup_Key`, and explodes to one row per DR. Nothing in the notebook needs changing. Fix the sheet, rerun, and every downstream table regenerates.

---

## The dependency chain

```
EFRAG interoperability index (PDF, Nov 2024)
        │
        ▼
Interop_Index          ← the only thing that is wrong
        │  GRI_ESRS_Mapping_v4.ipynb  (cell 8 reads it; cell 10 parses the DR column)
        ▼
X_Topical_Mapping / Mapping_X   in GRI_ESRS_v6.xlsx      (3 GRI firms only)
        │  copied across, row for row
        ▼
ThaiUnion_Mapping / Nomad2025_Mapping / Profand2025_Mapping   in ESRS_KPI_Mapping_V9.xlsx
        │  ESRS_Coverage_Analytics_v7.ipynb
        ▼
ESRS_Coverage_Results.xlsx  →  Table 1, the funnel, Chapter 5 figures
        │
        ▼
Tier 1 set (DRs reported by >=5 of 6)  →  Phase3_Coverage_Matrix_v17.xlsx  →  Chapter 6 figures + the diagnostic tool
        │
        ▼
Abstract, Chapter 7, Appendix G
```

Bolton, Espersen and Mowi are coded directly from their ESRS indexes. They never touch the bridge and do not move.

---

## Stage 0 — Verify the bridge  *(yours, ~45 min)*

Open `GRI_ESRS_v7_REBUILT.xlsx`, sheet `Bridge_CHANGES`, and filter on Status.

**40 rows "under-populated in v6"** — the substance of the fix. Spot-check eight against `Interop_Index_EFRAG`, which carries the verbatim EFRAG text and the PDF page for every row. Priority rows, because they drive the changes:

| Check | Expect to see |
|---|---|
| `GRI303|3-3` (p.15) | E2-1, E2-2, E2-3 **and** E3-1, E3-2, E3-3 — v6 kept only the E3 half |
| `GRI305|3-3` (p.16) | E1-2, E1-3, E1-4, E1-7, E2-1, E2-2, E2-3 |
| `GRI401|3-3` (p.18) | the S1 block **and** S2-1, S2-2, S2-4, S2-5 |
| `GRI416|3-3` (p.24) | S4-1, S4-2, S4-4, S4-5 |
| `GRI101|*` (p.8) | whole standard absent from v6 |

**8 rows "GRI 13 sector"** — your own extension, correctly not in EFRAG. Keep. The method must declare them as author-constructed.

**4 rows "not in EFRAG"** — Stage 1.

> **Gate.** Do not proceed until you have personally read at least those five rows against the PDF. If any disagree with what the sheet says, stop and tell me — my extraction would then be suspect and everything after this is void.

---

## Stage 1 — Four decisions  *(yours, ~15 min)*

Sheet `DECISIONS_FOR_YOU`. Only the first changes any number.

**Decision 1 — does "covered by MDR-P / MDR-A / MDR-T" count as reporting the topical DR?**

EFRAG uses that phrase to say a topic is picked up by the generic minimum disclosure requirements, not by the topical DR. v6 credits `GRI2|2-28 → G1-5` on that basis.

- **No** (stricter, recommended): G1-5 falls 5/6 → 4/6 and leaves the Tier-1 set. **27 Tier-1 DRs.**
- **Yes**: G1-5 stays. **28 Tier-1 DRs.**

Whichever you choose, the method must state the rule once and apply it everywhere.

Decisions 2–4 (`GRI415|3-3`, `GRI206|3-3`, `GRI412|412-2`) change no counts in testing. Recommend dropping them for consistency with decision 1, and recording that they were dropped.

---

## Stage 2 — Rebuild the workbook and rerun the notebook  *(mine, ~1 h)*

1. Produce `GRI_ESRS_v8.xlsx` where the sheet **named `Interop_Index`** is the rebuilt bridge, with the old one preserved as `Interop_Index_v6_ARCHIVE`. This means **cell 8 of the notebook runs unchanged** — no code edits, which is itself a defensibility point.
2. The `DR` column must keep the existing ` / ` separated format, because cell 10 splits on it and matches `^[ESG]\d-\d`.
3. Note for the record: cell 10 strips parentheticals, so `G1-5 (via MDR-P/MDR-A/MDR-T)` is currently read as a valid `G1-5`. Decision 1 is implemented by removing that entry from the data, not by changing the code.
4. Rerun the notebook over all five company sheets. Regenerates `X_Topical_Mapping` and `Mapping_X`.

> **Gate.** Row counts must rise, never fall, for every firm except where decision 1 removes a credit. I will report old vs new row counts per firm before anything is copied onward.

---

## Stage 3 — Refresh V9  *(mine, ~30 min)*

Replace `ThaiUnion_Mapping`, `Nomad2025_Mapping`, `Profand2025_Mapping` (and the 2024 variants) in `ESRS_KPI_Mapping_V9.xlsx` with the regenerated sheets. Leave Bolton, Espersen and Mowi untouched.

V9 currently holds 7 drawings and cell comments, so this must be done by zip-level surgery rather than an openpyxl round-trip, which would destroy them.

> **Gate.** Diff the sheet list and confirm 15 sheets in, 15 sheets out, drawings intact.

---

## Stage 4 — Rerun coverage analytics  *(mine, ~30 min)*

Rerun `ESRS_Coverage_Analytics_v7.ipynb` → new `ESRS_Coverage_Results.xlsx`.

Expected, on scenario B:

| | current | expected |
|---|---|---|
| Universal core (6/6) | 13 | **13, same DRs** |
| Near-universal (≥5/6) | 26 | 27 |
| Reported by no firm | 8 | 7 |
| Thai Union | 53 | 59 |
| Nomad Foods | 42 | 51 |
| Profand | 39 | 42 |

> **Gate.** If the universal core is not the same 13 DRs, something is wrong upstream — stop and diagnose rather than write it up.

---

## Stage 5 — Chapter 6  *(mine, ~1–2 h)*

Tier 1 changes: **S4-1 and S4-3 enter; G1-5 leaves** (under decision 1 = no).

The matrix currently holds 28 rows = 26 Tier-1 DRs + 2 Tier-2 topics (E4, S4). Because S4 is already present as a Tier-2 aggregate, S4-1 and S4-3 arriving at Tier 1 may **replace** that aggregate rather than add to it, and G1-5 leaving removes a row. So the matrix may come out at 32 rows and 992 cells again.

**This must be computed, not assumed.** Only if the row count moves do the 992 cells, the 18 per cent, the abstract, the Chapter 6 figures and the tool's data file need regenerating.

---

## Stage 6 — Thesis text  *(mine, ~1 h, after Stage 5 confirms)*

- Table 1: Thai Union, Nomad, Profand figures and percentages
- §5.3: the GRI 3-3 counts, the reachable-universe arithmetic, and a rewritten method paragraph (below)
- §5.6: eight gaps → seven; E2-1 leaves the set, so the "four financial-effects plus four others" structure needs restating
- §5.5 and §5.7: the funnel numbers
- §7.6: the limitation paragraph, now much shorter — the bridge is applied in full, so the residual gap is only the seven DRs with no GRI counterpart at all
- Appendix G: Tier 1 count and admission rule

---

## Stage 7 — Reviewers

- **Hold the Antonio reply.** Profand becomes 42, not 39, and the explanation changes: part of what he flagged was my bridge, not his index. That is a better letter but a different one.
- Nomad moves most of all, 42 → 51. If Oliver has already read Chapter 5, he will need the corrected figures.
- Anyone holding the current PDF has superseded numbers.

---

## Draft method statement for §5.3

> The bridge is the GRI–EFRAG interoperability index (GRI & EFRAG, 2024) applied in full. Every GRI disclosure listed in that index was carried into the crosswalk with the complete set of ESRS disclosure requirements EFRAG assigns to it, including cases where a single GRI management-approach disclosure maps onto requirements in more than one ESRS topical standard. Where the index states that a GRI disclosure is addressed through the cross-cutting minimum disclosure requirements (MDR-P, MDR-A, MDR-T) rather than through a topical requirement, no topical coverage was recorded. Sector-specific disclosures drawn from GRI 13, for which no EFRAG correspondence exists, were mapped by the author and are identified as such in the workbook.

That paragraph is the answer to Nomad: the bridge is not a reading of EFRAG's index, it is EFRAG's index.

---

## Timing

Stages 0–1 are yours and gate everything else. Stages 2–5 are about half a day of my work once you have cleared the gate; Stage 6 another hour. Submission on 24 August is not at risk. Your Friday "thesis ready" target slips by roughly a day.
