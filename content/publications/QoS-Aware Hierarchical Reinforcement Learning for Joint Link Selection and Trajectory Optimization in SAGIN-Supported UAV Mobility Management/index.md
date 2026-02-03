---
title: "QoS-Aware Hierarchical Reinforcement Learning for Joint Link Selection and Trajectory Optimization in SAGIN-Supported UAV Mobility Management"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Jiayang Wan
  - Ke He
  - admin
  - Fan Liu
  - Wenjin Wang
  - Shi Jin

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2025-12-17

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*arXiv*"
publication_short: "*arXiv*"

abstract: |-
  Due to the significant variations in unmanned aerial vehicle (UAV) altitude and horizontal mobility, it becomes difficult for any single network to ensure continuous and reliable threedimensional coverage. Towards that end, the space-air-ground integrated network (SAGIN) has emerged as an essential architecture for enabling ubiquitous UAV connectivity. To address the pronounced disparities in coverage and signal characteristics across heterogeneous networks, this paper formulates UAV mobility management in SAGIN as a constrained multi-objective joint optimization problem. The formulation couples discrete link selection with continuous trajectory optimization. Building on this, we propose a two-level multi-agent hierarchical deep reinforcement learning (HDRL) framework that decomposes the problem into two alternately solvable subproblems. To map complex link selection decisions into a compact discrete action space, we conceive a double deep Q-network (DDQN) algorithm in the top-level, which achieves stable and high-quality policy learning through double Q-value estimation. To handle the continuous trajectory action space while satisfying quality of service (QoS) constraints, we integrate the maximum-entropy mechanism of the soft actor-critic (SAC) and employ a Lagrangian-based constrained SAC (CSAC) algorithm in the lower-level that dynamically adjusts the Lagrange multipliers to balance constraint satisfaction and policy optimization. Moreover, the proposed algorithm can be extended to multi-UAV scenarios under the centralized training and decentralized execution (CTDE) paradigm, which enables more generalizable policies. Simulation results demonstrate that the proposed scheme substantially outperforms existing benchmarks in throughput, link switching frequency and QoS satisfaction.

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
    doi: https://doi.org/10.48550/arXiv.2512.15119

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/pdf/2512.15119
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
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

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

<!-- > [!NOTE]
> Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the _Slides_ button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
