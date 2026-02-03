---
title: "Time-Continuous Frequency Allocation for Feeder Links of Mega Constellations with Multi-Antenna Gateway Stations"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Zijun Liu
  - admin
  - Tianhao Fang
  - Wenjin Wang
  - Zhili Sun

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2025-05-20

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*arXiv*"
publication_short: "*arXiv*"

abstract: |-
  With the recent rapid advancement of mega low earth orbit (LEO) satellite constellations, multi-antenna gateway station (MAGS) has emerged as a key enabler to support extremely high system capacity via massive feeder links. However, the densification of both space and ground segment leads to reduced spatial separation between links, posing unprecedented challenges of interference exacerbation. This paper investigates graph coloring-based frequency allocation methods for interference mitigation (IM) of mega LEO systems. We first reveal the characteristics of MAGS interference pattern and formulate the IM problem into a K-coloring problem using an adaptive threshold method. Then we propose two tailored graph coloring algorithms, namely Generalized Global (GG) and Clique-Based Tabu Search (CTS), to solve this problem. GG employs a low-complexity greedy conflict avoidance strategy, while CTS leverages the unique clique structure brought by MAGSs to enhance IM performance. Subsequently, we innovatively modify them to achieve time-continuous frequency allocation, which is crucial to ensure the stability of feeder links. Moreover, we further devise two mega constellation decomposition methods to alleviate the complexity burden of satellite operators. Finally, we propose a list coloring-based vacant subchannel utilization method to further improve spectrum efficiency and system capacity. Simulation results on Starlink constellation of the first and second generations with 34396 satellites demonstrate the effectiveness and superiority of the proposed methodology.

# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

# tags:
#  - LWMMSE
#  - Symbol-Level Precoding
#  - Constructive Interference Region
#  - Low Complexity

# Display this page in the Featured widget?
featured: false

# Standard identifiers for auto-linking
hugoblox:
  ids:
    doi: ""

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/pdf/2505.12429.pdf
  # - type: code
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: dataset
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: slides
  #   url: https://www.slideshare.net/
  # - type: source
  #   url: https://github.com/HugoBlox/hugo-blox-builder
  # - type: video
  #   url: https://youtube.com

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

> [!NOTE]
> Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the _Slides_ button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
