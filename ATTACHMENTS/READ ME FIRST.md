# Chapter 5 analysis — supporting files

Companion files to *Build Once, Answer Many: Where Disclosure Demand Converges for European Seafood-Processing SMEs* (EPFL, 2026).
The cohort chapter is now **Chapter 5**, beginning on **page 28** of the PDF.

Everything in Chapter 5 comes from these three files. They chain together in one direction:

```
ESRS_KPI_Mapping_V9.xlsx      →   ESRS_Coverage_Analytics_v7.ipynb   →   ESRS_Coverage_Results.xlsx
(raw coding, per company)         (builds the coverage matrix)           (the results in the chapter)
```

---

## 1. `ESRS_KPI_Mapping_V9.xlsx` — the raw coding

Each of the six firms' published sustainability reports, coded disclosure-requirement by disclosure-requirement against the ESRS.

| Sheet | What it is |
|---|---|
| `INSTRUCTIONS` | Workbook purpose and the methodological caveat |
| `ESRS_MASTER` | The 70-DR ESRS universe used as the denominator (header row 3) |
| `Mapping_ALLStacked_TU_N25` | **The live input.** All six firms stacked; Nomad and Profand at FY2025 |
| `<Company>_Mapping` | Per-firm working sheets the stacked sheet is assembled from |
| `Mapping_ALLStacked`, `Mapping_ALLStacked_TU`, `MAPPING`, `DP_Mapping` | Earlier scenario variants, retained for audit trail — **not** used for the published figures |

Only `Mapping_ALLStacked_TU_N25` and `ESRS_MASTER` feed the results. The other sheets are kept so the coding history is inspectable, not because they are live.

## 2. `ESRS_Coverage_Analytics_v7.ipynb` — the analysis

Reads the workbook above and builds the coverage matrix, the per-standard heatmap, the DR frequency ranking and the ESG split.

- Written for Google Colab. Cell 4 prompts you to upload `ESRS_KPI_Mapping_V9.xlsx`; the scenario is set in the CONFIG block of Cell 1 (`STACKED_SHEET = 'Mapping_ALLStacked_TU_N25'`).
- **All outputs are saved in the file**, so every chart and table can be read without running anything.

## 3. `ESRS_Coverage_Results.xlsx` — the results

Opens on a `README` sheet describing all 11 tabs. This is the file the thesis text and Appendix G cite.

Headline coverage rates, as they appear in Table 1 of Chapter 5:

| Company | DRs reported (of 70) | Coverage |
|---|---|---|
| Thai Union | 53 | 75.7% |
| Bolton | 45 | 64.3% |
| Nomad Foods | 42 | 60.0% |
| Profand | 39 | 55.7% |
| Espersen | 34 | 48.6% |
| Mowi | 33 | 47.1% |

Universal core = the **13** disclosure requirements reported by all six firms.

---

## What this analysis does and does not claim

- It measures **ESRS-aligned coverage in practice**, coded from public reports. It is **not** an assessment of legal ESRS compliance.
- Coverage is **binary presence at requirement level** — breadth, not depth, quality or assurance. A topic covered in one sentence and one covered exhaustively both score 1.
- The six firms were chosen **purposively as the sector's most advanced reporters**, not as a representative sample. Nothing here describes typical practice.
- A lower coverage figure may reflect a different production system, reporting framework or reporting year — **not** weaker sustainability performance. No ranking of the six is intended.
- Three firms report under the ESRS and three under the GRI; the GRI disclosures were bridged onto the ESRS structure using the GRI–EFRAG interoperability mapping. That bridge rests on analyst judgement, which is why your review is valuable.

Questions, or want the Phase 1 and Phase 3 workbooks as well: linne.verhoeven@gmail.com
