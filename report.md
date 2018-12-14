---
# include the following to use numbered sections that end with a dot:
# subparagraph: yes # see https://bit.ly/2rzAIgv
# header-includes:
#	- \usepackage{titlesec}
#	- \titlelabel{\thetitle.\quad}

title: "Title of this Paper"
author: "Your Name; \\today"
geometry: margin=2.54cm
papersize: A4
fontsize: 9pt
documentclass: scrartcl
# Comma-separated class-options; e.g. leave out "twocolumn" to produce a 1-column article
classoption: "twocolumn,egregdoesnotlikesansseriftitles"
numbersections: true

colorlinks: true # Set to true and change the 3 colors below if you like
linkcolor: "Maroon" # Default is "Maroon"
citecolor: "Blue" # Default is "Blue"
urlcolor: "Blue" # Default is "Blue"
linestretch: 1.25 # For better readability
biblio-title: "References" # Set title of the References/Bibliography
biblatexoptions: "backend=biber,style=numeric,natbib=true"

abstract: "\\noindent \\MakeUppercase{\\textbf{Abstract}} Pizza [@pizza2000identification] is an understudied yet widely utilized implement for delivering in-vivo *Solanum lycopersicum* based liquid mediums in a variety of next-generation mastications studies."
---

# Abstract
Pizza [@pizza2000identification] is an understudied yet widely utilized implement for delivering in-vivo *Solanum lycopersicum* based liquid mediums in a variety of next-generation mastications studies. Here\footnote{In-text foot note} we describe a de novo approach for large scale *T. aestivum* assemblies based on protein folding that drastically reduces the generation time of the mutation rate.

Sentence blah.\footnote{I'm a footnote: https://github.com/MrShoenel/md-2-pdf-pandoc-report-bib}


# Algorithm

$$f(x)=pizza^2$$

\pagebreak
# References
