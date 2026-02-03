---
title: "A tensor-structured approach to dynamic channel prediction for massive MIMO systems with temporal non-stationarity"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Hongwei Hou
  - admin
  - Yiming Zhu
  - Xinping Yi
  - Wenjin Wang
  - Dirk T. M. Slock
  - Shi Jin

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2025-11-07

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Wireless Communication (TWC)*"
publication_short: "*IEEE Transactions on Wireless Communication (TWC)*"

abstract: |-
  In moderate- to high-mobility scenarios, CSI varies rapidly and becomes temporally non-stationary, leading to severe performance degradation in the massive MIMO transmissions. To address this issue, we propose a tensor-structured approach to dynamic channel prediction (TS-DCP) for massive MIMO systems with temporal non-stationarity, exploiting both dual-timescale and cross-domain correlations. Specifically, due to inherent spatial consistency, non-stationary channels over long-timescales can be approximated as stationary on short-timescales, decoupling complicated temporal correlations into more tractable dual-timescale ones. To exploit such property, we propose the sliding frame structure composed of multiple pilot OFDM symbols, which capture short-timescale correlations within frames by Doppler domain modeling and long-timescale correlations across frames by Markov/autoregressive processes. Building on this, we develop the Tucker-based spatial-frequency-temporal domain channel model, incorporating angle-delay-Doppler (ADD) domain channels and factor matrices parameterized by ADD domain grids. Furthermore, we model cross-domain correlations of ADD domain channels within each frame, induced by clustered scattering, through the Markov random field and tensor-coupled Gaussian distribution that incorporates high-order neighboring structures. Following these probabilistic models, we formulate the TS-DCP problem as variational free energy (VFE) minimization, and unify different inference rules through the structure design of trial beliefs. This formulation results in the dual-layer VFE optimization process and yields the online TS-DCP algorithm, where the computational complexity is reduced by exploiting tensor-structured operations. Numerical simulations demonstrate the significant superiority of the proposed algorithm over benchmarks in terms of channel prediction performance.

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
    doi: "https://doi.org/10.1109/TWC.2025.3627432"

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/pdf/2412.06713.pdf
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
