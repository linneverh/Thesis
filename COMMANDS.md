# Thesis — quick command reference

Run these in the VS Code terminal (Terminal → New Terminal, or `` Ctrl+` ``).
Make sure you're in the thesis folder first — check with `pwd`; if not there:
```
cd ~/projects/thesis
```

## 1. Push your changes to GitHub

```
git status                          # see what changed
git add -A                          # stage everything
git commit -m "describe your change"
git push
```

## 2. Build the PDF

```
latexmk -pdf main.tex
```

Compiles `main.tex` → `main.pdf`. If you added new cross-references or labels
and a reference shows up blank, just run it a second time — LaTeX sometimes
needs two passes to resolve everything.

Open the result:
```
open main.pdf
```

If a build seems stuck or broken, do a clean rebuild:
```
latexmk -C
latexmk -pdf main.tex
```

Check the log for the actual error if something fails:
```
grep -i "! " main.log
```

## 3. Pull changes made on GitHub.com

If you upload a file directly on the GitHub website (like we did with
`tool.jpg`), your local copy won't have it until you pull:
```
git pull
```

If you ever see a "diverging branches" message — **stop and ask for help**
rather than force-pushing or merging blind. It's very fixable, but doing it
wrong can overwrite work.

## 4. Other basics

- See what's changed but not yet committed: `git diff`
- See recent commit history: `git log --oneline -10`
- Discard uncommitted changes to one file (destructive, be careful):
  `git checkout -- filename`
- Re-run the Phase 1 notebook end-to-end (regenerates all figures/tables):
  open `phase1/Phase1_cohort_analysis.ipynb` in VS Code and click **Run All**,
  or from the terminal:
  ```
  jupyter nbconvert --to notebook --execute --inplace phase1/Phase1_cohort_analysis.ipynb
  ```

## If Claude is unavailable

Nothing Claude does is hidden — every edit lands in the real files in this
project. At any point you can just run the build and push commands above
yourself:
```
latexmk -pdf main.tex && open main.pdf
git add -A && git commit -m "manual edit" && git push
```
