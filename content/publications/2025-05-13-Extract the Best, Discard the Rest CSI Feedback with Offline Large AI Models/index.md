---
lastmod: "2026-10-20"
publication_sort_basis: "DOI registration (ordering only; publication year verified)"
publication_sort_date: "2026-09-08"
publication_date_source: "https://api.crossref.org/works/10.1109/tcomm.2026.3731789"
# Publication date precision is recorded explicitly; sorting is separate.
publication_year: 2026
hide_date: false
publication_date_precision: "year"
date: "2026-01-01"
title: "Extract the Best, Discard the Rest: CSI Feedback with Offline Large AI Models"
authors:
- Jialin Zhuang
- admin
- Hongwei Hou
- Yu Han
- Wenjin Wang
- Shi Jin
- Jiangzhou Wang
- Björn Ottersten

publishDate: "2026-01-01"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types:
- Journal Paper

publication: '*IEEE Transactions on Communications*'

publication_short: '*IEEE Transactions on Communications*'

abstract: Large AI models (LAMs) have shown strong potential in wireless communication tasks, but their practical deployment remains hindered by latency and computational constraints. In this work, we focus on the challenge of integrating LAMs into channel state information (CSI) feedback for frequency-division duplex (FDD) massive multiple-intput multiple-output (MIMO) systems. To this end, we propose two offline frameworks, namely site-specific LAM-enhanced CSI feedback (SSLCF) and multi-scenario LAM-enhanced CSI feedback (MSLCF), that incorporate LAMs into the codebook-based CSI feedback paradigm without requiring real-time inference. Specifically, SSLCF generates a site-specific enhanced codebook through fine-tuning on locally collected CSI data, while MSLCF improves generalization by pre-generating a set of environment-aware codebooks. Both of these frameworks build upon the LAM with vision-based backbone, which is pre-trained on large-scale image datasets and fine-tuned with CSI data to generate customized codebooks. This resulting network named LVM4CF captures the structural similarity between CSI and image, allowing the LAM to refine codewords tailored to the specific environments. To optimize the codebook refinement capability of LVM4CF under both single- and dual-side deployment modes, we further propose corresponding training and inference algorithms. Simulation results show that our frameworks significantly outperform existing schemes in both reconstruction accuracy and system throughput, without introducing additional inference latency or computational overhead. These results also support the core design methodology of our proposed frameworks, extracting the best and discarding the rest, as a promising pathway for integrating LAMs into future wireless systems.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Large AI Model
- Offline Inference
- Large Vision Model
- CSI Feedback
featured: true

hugoblox:
  ids:
    doi: 10.1109/tcomm.2026.3731789

links:
- type: pdf
  url: https://arxiv.org/pdf/2505.08566

projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<!-- > [!NOTE]
> Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the *Slides* button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
