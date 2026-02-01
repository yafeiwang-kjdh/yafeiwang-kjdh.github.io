---
title: "Statistical CSI-Based Distributed Precoding Design for OFDM-Cooperative Multi-Satellite Systems"
authors:
- admin
- Vu Nguyen Ha
- Konstantinos Ntontin
- Hong Yan
- Wenjin Wang
- Symeon Chatzinotas
- Björn Ottersten
# author_notes:
# - "Equal contribution"
# - "Equal contribution"
# date: "2025-05-13T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2026-01-05T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["Journal Paper"]

# Publication name and optional abbreviated publication name.
publication: IEEE Journal on Selected Areas in Communications
publication_short: "IEEE JSAC"

abstract: This paper investigates the design of distributed precoding for multi-satellite massive MIMO transmissions. We first conduct a detailed analysis of the transceiver model, in which delay and Doppler precompensation is introduced to ensure coherent transmission. In this analysis, we examine the impact of precompensation errors on the transmission model, emphasize the near-independence of inter-satellite interference, and ultimately derive the received signal model. Based on such signal model, we formulate an approximate expected rate maximization problem that considers both statistical channel state information (sCSI) and compensation errors. Unlike conventional approaches that recast such problems as weighted minimum mean square error (WMMSE) minimization, we demonstrate that this transformation fails to maintain equivalence in the considered scenario. To address this, we introduce an equivalent covariance decomposition-based WMMSE (CDWMMSE) formulation derived based on channel covariance matrix decomposition. Taking advantage of the channel characteristics, we develop a low-complexity decomposition method and propose an optimization algorithm. To further reduce computational complexity, we introduce a model-driven scalable deep learning (DL) approach that leverages the equivariance of the mapping from sCSI to the unknown variables in the optimal closed-form solution, enhancing performance through novel dense Transformer network and scaling-invariant loss function design. Simulation results validate the effectiveness and robustness of the proposed method in some practical scenarios. We also demonstrate that the DL approach can adapt to dynamic settings with varying numbers of users and satellites.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Satellite Communication
- Cooperative Transmission
- Distributed Precoding
- Massive MIMO

featured: true

hugoblox:
  ids:
    doi: https://doi.org/10.1109/JSAC.2026.3650895

links:
  - type: pdf
    url: https://arxiv.org/pdf/2505.08038
  # - type: code
  #   url: https://github.com/ZJSXYZ/TENN
  # - type: dataset
  #   url: ""
  # - type: poster
  #   url: ""
  # - type: project
  #   url: ""
  # - type: slides
  #   url: https://www.slideshare.net/
  # - type: source
  #   url: ""
  # - type: video
  #   url: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
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
