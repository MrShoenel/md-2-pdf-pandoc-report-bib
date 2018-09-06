# md-2-pdf-pandoc-report-bib
A markdown template that supports to-pdf conversion using pandoc and biblatex, using the IEEE citation styles. It comes with a Node.js-watcher script.

# How to use this
1. Clone this repository
   * [Optional] Run `node _watch.js` to watch for modifications on your report.
2. Add _biblatex_ references to `report.bib`
3. Write report in `report.md`
4. [Optional] If you haven't watched the report.md for changes, you may run
   * `pandoc --biblio=report.bib --csl=ieee.csl -s report.md -o report.pdf`
