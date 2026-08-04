# Bridge fix — clean roadmap

Status as of 4 August. Two separate problems, deliberately kept apart.

- **Problem A — the bridge was under-populated.** My error. `Interop_Index` carried only part of the EFRAG GRI–ESRS interoperability index. **Fixed and verified.**
- **Problem B — Profand's index carries no GRI 3-3 rows.** Antonio's point. Seven of his eight requirements route only through 3-3, so they are unreachable for Profand. One (E1-1) has no GRI route at all. **Open.**

---

## Part 1 — DONE and verified

| File | Change | Verification |
|---|---|---|
| `Phase2_cohort/GRI_ESRS_v8.xlsx` | `Interop_Index` rebuilt from the EFRAG PDF (158 rows: 150 EFRAG-derived + 8 GRI 13 sector rows flagged as author extension). Old bridge kept as `Interop_Index_v6_ARCHIVE`. Four contested rows dropped under the MDR rule. | Five rows read against the PDF by Ruben |
| same | All five `*_Topical_Mapping` and `*_Mapping` sheets regenerated | `GRI_ESRS_Mapping_v4.ipynb` run **unmodified** |
| `Phase2_cohort/ESRS_KPI_Mapping_V10.xlsx` | Five GRI firm sheets replaced **and** `Mapping_ALLStacked_TU_N25` rebuilt | zip-level surgery: 56 parts in / 56 out, 381 formulas intact, 6 drawings preserved, table ranges refitted |
| `main.tex`, `angle2_cohort.tex` | Table 1; funnel counts in §5.4, §5.5, §5.7; §5.3 bridge-gap passage; Appendix G Tier-1 count | 3 pdflatex passes, 0 errors, 94 pages, strings confirmed in the PDF |

**Resulting numbers**

| | old | new |
|---|---|---|
| Thai Union | 53 (76%) | **59 (84%)** |
| Nomad Foods | 42 (60%) | **51 (73%)** |
| Bolton | 45 (64%) | 45 (64%) |
| Profand | 39 (56%) | **42 (60%)** |
| Espersen / Mowi | 34 / 33 | unchanged |
| Reported by ≥1 | 62 | 63 |
| Near-universal (≥5/6) = Tier 1 | 26 | **27** |
| Universal core (6/6) | 13 | **13 — identical set** |
| Reported by no firm | 8 | 7 |
| Chapter 6 matrix | 32 rows / 992 cells | **32 rows / 992 cells** |

Tier 1 gains S4-1 and S4-3, loses G1-5. The matrix row count holds because S4-1 and S4-3 replace the Tier-2 S4 aggregate row.

---

## Part 2 — PENDING, in dependency order

### Step 1. Regenerate Chapter 5 figures — *blocking, do first*
The text now says 63/27/13 while the charts still show 62/26/13. The document contradicts itself on the page.

- `phase1/p1_frequency.pdf` — frequency distribution
- `phase1/p1_esg_split.pdf` — three panels (absolute, share, normalised by pillar)
- `phase1/p1_depth.pdf` — screened vs covered per standard
- consistency chart — mean firms reporting per standard

Source: `ESRS_Coverage_Analytics_v7.ipynb` against `ESRS_KPI_Mapping_V10.xlsx`, `STACKED_SHEET = 'Mapping_ALLStacked_TU_N25'`.

### Step 2. Rewrite §5.6 — *needs Ruben, it is an interpretive claim not a number*
The consistency ranking genuinely moved.

| Standard | old text | new |
|---|---|---|
| S2 value-chain workers | 4.4 | **5.00 — now highest** |
| E3 water | 5.75 (highest) | 4.60 |
| S4 consumers | 3.0 (low) | 4.20 |
| S3 communities | 2.6 (low) | 3.60 |
| G1 governance | 5.2 | 4.17 |
| E5 resource use | 4.6 | 3.83 |
| E4 biodiversity | — | **2.83 — now among lowest** |
| E2 pollution | 2.0 (lowest) | 1.67 (still lowest) |

Also: ESG split of the reported set becomes 32 Social / **26** Environmental / 5 Governance (was 25 Environmental); S1 alone still 17.

The narrative "highest for water, governance, resource use and value-chain workers; lowest for pollution, communities and consumers" no longer holds. Communities and consumers have risen; biodiversity has fallen.

Also in §5.6: the seven never-reported DRs are now E1-8, E2-5, E2-6, E3-5, E4-6, E5-6, G1-6. E2-1 has left the set, so the "four financial-effects plus four others" structure becomes four plus three.

### Step 3. Regenerate `ESRS_Coverage_Results.xlsx`
Rerun the analytics notebook, export, replace. This is the file sent to reviewers.

### Step 4. Chapter 6 — swap two matrix rows
In `Phase3_crossmapping/Phase3_Coverage_Matrix_v17.xlsx`:

- **remove** row `G1-5` (political influence and lobbying) — no longer Tier 1
- **remove** the Tier-2 aggregate row `Consumers & end-users (S4)`
- **add** `S4-1` (policies related to consumers and end-users) and `S4-3` (processes to remediate; channels for consumers)
- score both against all 31 instruments, with a justification per non-zero cell — **62 cells**

Row count returns to 32 and the cell count to 992. The 181 demand cells and the 18 per cent figure **will move** and must be recomputed. If they move, the abstract, Chapter 6 figures and the tool data all follow.

### Step 5. Tool
Regenerate the data file behind `Seafood_SME_Priority_Navigator_v2.html` from the updated matrix, redeploy, and re-shoot Figure 14.

### Step 6. Appendices and file index
- **Appendix G** — Tier-1 count now 27 (done); admission-rule text mentioning the bridge (done)
- **Appendix H** — file index still names `GRI_ESRS_v6.xlsx` and `ESRS_KPI_Mapping_V9.xlsx`; update to v8 and V10
- **Appendix (new or within G)** — the bridge provenance statement (draft below)
- `Supporting_files_overview.docx` in the reviewer zip — same filename updates

### Step 7. Problem B — Antonio, as a sensitivity analysis
Pre-specified rule, stated before looking at outcomes: *every cell where a GRI-indexed firm scores zero on a requirement that at least two ESRS-native firms report.* That yields **17 cells**; Antonio has already evidenced 8.

Remaining 9 lookups: Profand E4-1, G1-2, S1-5, S2-5 · Nomad E1-1, G1-5, S1-7, S1-8 · Thai Union E1-1.

Report as a sensitivity analysis, **not** folded into the primary measure. Primary stays index-based and uniform; the sensitivity result shows the direction and size of the bias. This keeps Chapter 6 built on the primary numbers.

### Step 8. Reviewers
- Rewrite the Antonio reply: Profand is now 42, and seven of his eight are index gaps rather than bridge gaps — provable from his own workbook
- Nomad moved most (42 → 51); if Oliver has read Chapter 5, send corrected figures
- Anyone holding the current PDF has superseded numbers

---

## Draft method statement — §5.3

> The crosswalk is the GRI–EFRAG interoperability index (GRI & EFRAG, 2024) applied in full. Every GRI disclosure listed in that index was carried into the bridge with the complete set of ESRS disclosure requirements EFRAG assigns to it, including cases where a single management-approach disclosure maps onto requirements in more than one topical standard. Where the index states that a GRI disclosure is addressed through the cross-cutting minimum disclosure requirements (MDR-P, MDR-A, MDR-T) or as an entity-specific metric rather than through a named topical requirement, no topical coverage was recorded. Sector-specific disclosures drawn from GRI 13, for which no EFRAG correspondence exists, were mapped by the author and are identified as such in the workbook.

---

## Decisions still needed from Ruben

1. **§5.6 narrative** — how to characterise the new consistency ranking (Step 2)
2. **Sensitivity vs primary** — confirm the verification stays a sensitivity analysis (Step 7)
3. **Run the 9 lookups?** — yes/no

## Not at risk

24 August submission. Steps 1, 3, 4, 5, 6 are mechanical once started. Step 2 needs an hour of Ruben's judgement. Step 7 is optional but strongly advised.
