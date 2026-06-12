# Thesis project context

## What this is
Master's thesis at EPFL on seafood sustainability. Currently a single-file project — everything lives in `main.tex`. Will likely be split into chapters as it grows.
Build with: `latexmk -pdf main.tex`

## Structure (current)
- `main.tex` — main and only source file
- `main.pdf` — built output

## Writing conventions
- Language: <British / American English — fill in>
- Citation style: <natbib / biblatex — fill in based on what main.tex uses>
- Section labels follow pattern `\label{section-name}` (kebab-case)

## What Claude should do
- Catch typos and grammar issues — flag them inline, don't silently rewrite
- Suggest restructurings as comments first, not direct edits
- For new content, draft in a clearly-marked block so I can review before accepting
- Run `latexmk -pdf main.tex` and report warnings/errors when asked

## What Claude should NOT do
- Don't change my prose voice
- Don't auto-run `git commit` or `git push` — I do that manually
- Don't reformat existing .tex (line breaks, spacing) unless asked
- Don't restructure existing sections without proposing the change first

## Workflow
- Local edits → `git push` to GitHub
- Overleaf ↔ GitHub sync is manual: in Overleaf, Menu → GitHub → Pull/Push
