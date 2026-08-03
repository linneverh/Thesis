const {Document, Packer, Paragraph, TextRun, HeadingLevel,
       Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle} = require('docx');
const fs = require('fs');

const NAVY = "1F4E79", LINE = "DCE1E8", ZEB = "F6F8FA";
const W = 9360;

function P(t, opts={}){ return new Paragraph({ children:[new TextRun({text:t, size:opts.size||21, italics:opts.i, bold:opts.b, color:opts.color})], spacing:{after:opts.after||130} }); }
function H1(t){ return new Paragraph({ text:t, heading:HeadingLevel.HEADING_1 }); }
function Bullet(t){ return new Paragraph({ children:[new TextRun({text:t, size:21})], bullet:{level:0}, spacing:{after:90} }); }

function titleBlock(title, subtitle, meta){
  return [
    new Paragraph({ children:[new TextRun({text:title, bold:true, size:36, color:NAVY})], spacing:{after:100} }),
    new Paragraph({ children:[new TextRun({text:subtitle, italics:true, size:22, color:"44454A"})], spacing:{after:100} }),
    new Paragraph({ children:[new TextRun({text:meta, size:19, color:"6B7280"})],
      spacing:{after:320}, border:{bottom:{color:NAVY, style:BorderStyle.SINGLE, size:10, space:8}} }),
  ];
}

function table(headers, rows, widths){
  const hdr = new TableRow({ tableHeader:true, children: headers.map((h,i)=> new TableCell({
    width:{size:widths[i], type:WidthType.DXA},
    shading:{type:ShadingType.CLEAR, fill:NAVY},
    margins:{top:80,bottom:80,left:110,right:110},
    children:[new Paragraph({children:[new TextRun({text:h, bold:true, color:"FFFFFF", size:20})]})]
  })) });
  const body = rows.map((r,ri)=> new TableRow({ children: r.map((c,i)=> new TableCell({
    width:{size:widths[i], type:WidthType.DXA},
    shading: ri%2 ? {type:ShadingType.CLEAR, fill:ZEB} : undefined,
    margins:{top:70,bottom:70,left:110,right:110},
    children:[new Paragraph({children:[new TextRun({text:c, size:19})]})]
  })) }));
  return new Table({ columnWidths:widths, width:{size:W, type:WidthType.DXA}, rows:[hdr,...body],
    borders:{ top:{style:BorderStyle.SINGLE,size:4,color:LINE}, bottom:{style:BorderStyle.SINGLE,size:4,color:LINE},
              left:{style:BorderStyle.SINGLE,size:4,color:LINE}, right:{style:BorderStyle.SINGLE,size:4,color:LINE},
              insideHorizontal:{style:BorderStyle.SINGLE,size:4,color:LINE},
              insideVertical:{style:BorderStyle.SINGLE,size:4,color:LINE} } });
}

const styles = { default:{ document:{ run:{ font:"Calibri", size:21 }, paragraph:{ spacing:{line:276} } } },
  paragraphStyles:[
    { id:"Heading1", name:"Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true,
      run:{ font:"Calibri", size:26, bold:true, color:NAVY }, paragraph:{ spacing:{before:360, after:150} } } ] };

const page = { properties:{ page:{ margin:{top:1440,bottom:1440,left:1440,right:1440} } } };

const sup = new Document({ styles, sections:[{ ...page, children:[
  ...titleBlock("Supporting files",
    "Build Once, Answer Many: Where Disclosure Demand Converges for European Seafood-Processing SMEs",
    "Linne Verhoeven   ·   supervised by Prof. Jean-Philippe Bonardi   ·   in collaboration with Seafood Europe   ·   August 2026"),

  P("This archive contains the ten analysis files underlying the thesis. They correspond to the index in Appendix H. Each workbook opens on a README, INSTRUCTIONS or Legend sheet describing its contents."),

  H1("Chapter 4 — The disclosure ecosystem"),
  P("Necessity_Domain_Matrix_v8.xlsx contains the catalogue of 49 instruments, each classified by necessity tier, domain, stakeholder source and obligation locus. The Classification sheet is the source of the counts reported in Chapter 4: 26 scored instruments plus 4 firm-profile opt-ins give the 30 that enter the demand matrix, alongside 7 context instruments, 11 exclusions and 1 baseline."),

  H1("Chapter 5 — The cohort frontier"),
  P("Three files form a single chain, in this order:"),
  table(["File","Role"],
    [["ESRS_KPI_Mapping_V9.xlsx","Raw coding of each firm's report at disclosure-requirement level"],
     ["ESRS_Coverage_Analytics_v7.ipynb","Builds the coverage matrix from that coding"],
     ["ESRS_Coverage_Results.xlsx","The results reported in Chapter 5"]],
    [3100, 6260]),
  P(" ", {after:140}),
  P("In ESRS_KPI_Mapping_V9.xlsx, only the ESRS_MASTER and Mapping_ALLStacked_TU_N25 sheets feed the published results. The per-firm sheets and earlier scenario variants are retained so that the coding history remains inspectable."),
  P("ESRS_Coverage_Analytics_v7.ipynb is written for Google Colab and runs in seventeen cells. All outputs are saved within the file, so every chart and table can be read without executing it."),
  P("GRI_ESRS_v6.xlsx and GRI_ESRS_Mapping_v4.ipynb implement the GRI-to-ESRS bridge. This is required because three cohort firms report under the GRI Standards rather than the ESRS, and to differing degrees: Thai Union reports in accordance with the standards, while Nomad Foods and Profand report with reference to them. Sheets are grouped by company."),

  H1("Chapter 6 — Cross-framework demand mapping"),
  table(["File","Contents"],
    [["Phase3_Coverage_Matrix_v17.xlsx","The scored matrix: 32 topic rows against 31 instrument columns, giving 992 cells of which 181 carry demand, with a per-cell justification log"],
     ["GRI_13_Topics_FINAL.xlsx","GRI 13's 26 material topics classified against the ESRS as Covered, Reporting gap or Structural gap; the source of the four sector-material rows"],
     ["VSME_Basic_and_Comprehensive.xlsx","VSME datapoints, used for the proportionate-subset crosswalk"],
     ["SME_Datapoint_Guide.xlsx","113 datapoints across 32 topics, each with a plain-language reading and a first collection step; the data layer beneath the diagnostic tool"]],
    [3100, 6260]),

  H1("Notes on the analysis"),
  P("The coding rests on a single analyst's documented judgement. Every non-zero cell carries a recorded rationale and a citation to the source clause, but the material has not been independently double-coded. The member-checking round with the six cohort firms has been initiated and remains outstanding at the time of writing; Sections 3.3 and 7.6 of the thesis state this explicitly."),
  P("This is the canonical set. Superseded versions, duplicate working copies and temporary files have been removed."),
]}]});

const coh = new Document({ styles, sections:[{ ...page, children:[
  ...titleBlock("Chapter 5 — supporting files",
    "Build Once, Answer Many: Where Disclosure Demand Converges for European Seafood-Processing SMEs",
    "Linne Verhoeven   ·   EPFL, August 2026"),

  P("Chapter 5 of the attached draft begins on page 28. Everything reported in that chapter derives from the two accompanying files, which form a single chain:"),
  table(["File","Role"],
    [["ESRS_Coverage_Analytics_v7.ipynb","Builds the coverage matrix from the coded reports"],
     ["ESRS_Coverage_Results.xlsx","The results as they appear in Chapter 5"]],
    [3400, 5960]),
  P(" ", {after:140}),
  P("The underlying per-firm coding workbook is available on request."),

  H1("The results file"),
  P("ESRS_Coverage_Results.xlsx opens on a README sheet describing all eleven tabs. The headline coverage rates, reproduced in Table 1 of Chapter 5, are as follows."),
  table(["Company","Disclosure requirements reported (of 70)","Coverage"],
    [["Thai Union","53","75.7%"],["Bolton","45","64.3%"],["Nomad Foods","42","60.0%"],
     ["Profand","39","55.7%"],["Espersen","34","48.6%"],["Mowi","33","47.1%"]],
    [3000, 4360, 2000]),
  P(" ", {after:140}),
  P("Thirteen disclosure requirements are reported by all six firms. This set forms the universal core discussed in the chapter."),

  H1("The notebook"),
  P("ESRS_Coverage_Analytics_v7.ipynb is written for Google Colab and runs in seventeen cells. All outputs are saved within the file, so every chart and table can be read without executing anything."),

  H1("What the analysis does and does not claim"),
  Bullet("It measures ESRS-aligned coverage in practice, coded from published reports. It is not an assessment of legal ESRS compliance."),
  Bullet("Coverage is recorded as binary presence at requirement level. It therefore measures breadth, not depth, quality or assurance: a topic addressed in a single sentence and one addressed exhaustively both score equally."),
  Bullet("The six firms were selected purposively as the sector's most advanced reporters, not as a representative sample. Nothing here describes typical practice."),
  Bullet("A lower coverage figure may reflect a different production system, reporting framework or reporting year rather than weaker sustainability performance. No ranking of the six firms is intended."),
  Bullet("Three firms report under the ESRS and three under the GRI Standards. The GRI disclosures were bridged onto the ESRS structure using the GRI-EFRAG interoperability mapping. That bridge rests on analyst judgement, which is the principal reason your review is valuable."),

  P(" ", {after:100}),
  P("Questions, or a request for the full set of underlying workbooks: linne.verhoeven@gmail.com", {size:19, color:"6B7280"}),
]}]});

Promise.all([
  Packer.toBuffer(sup).then(b=>fs.writeFileSync(__dirname+'/Supporting_files_overview.docx', b)),
  Packer.toBuffer(coh).then(b=>fs.writeFileSync(__dirname+'/Chapter5_supporting_files.docx', b)),
]).then(()=>console.log('both docx written'));
