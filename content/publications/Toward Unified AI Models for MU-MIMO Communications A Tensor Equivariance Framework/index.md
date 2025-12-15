---
title: "Towards Unified AI Models for MU-MIMO Communications: A Tensor Equivariance Framework"
authors:
- admin
- Hongwei Hou
- Xinping Yi
- Wenjin Wang
- Shi Jin
# author_notes:
# - "Equal contribution"
# - "Equal contribution"
# date: "2025-09-01T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-12-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["Journal Paper"]

# Publication name and optional abbreviated publication name.
publication: IEEE Transactions on Wireless Communications
publication_short: "IEEE TWC"

abstract: In this paper, we propose a unified framework based on equivariance for the design of artificial intelligence (AI)-assisted technologies in multi-user multiple-input-multiple-output (MU-MIMO) systems. We first provide definitions of multidimensional equivariance, high-order equivariance, and multidimensional invariance (referred to collectively as tensor equivariance). On this basis, by investigating the design of precoding and user scheduling, which are key techniques in MU-MIMO systems, we delve deeper into revealing tensor equivariance of the mappings from channel information to optimal precoding tensors, precoding auxiliary tensors, and scheduling indicators, respectively. To model mappings with tensor equivariance, we propose a series of plug-and-play tensor equivariant neural network (TENN) modules, where the computation involving intricate parameter sharing patterns is transformed into concise tensor operations. Building upon TENN modules, we propose the unified tensor equivariance framework that can be applicable to various communication tasks, based on which we easily accomplish the design of corresponding AI-assisted precoding and user scheduling schemes. Simulation results show that the proposed methods achieve near-optimal performance with significantly lower complexity and strong generalization across multiple dimensions. For instance, the NN trained for precoding with 8 users provides satisfactory performance in a 10-user scenario. This validates the superiority of TENN modules and the unified framework.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Tensor Equivariance
- Artificial Intelligence
- MU-MIMO Transmission
- Unified Framework
featured: true

hugoblox:
  ids:
    doi: 10.1109/TWC.2025.3580321

links:
  - type: pdf
    url: https://arxiv.org/pdf/2406.09022
  - type: code
    url: https://github.com/ZJSXYZ/TENN
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
