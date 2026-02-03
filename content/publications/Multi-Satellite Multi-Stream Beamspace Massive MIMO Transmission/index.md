---
title: "Multi-Satellite Multi-Stream Beamspace Massive MIMO Transmission"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Yiming Zhu
  - Vu Nguyen Ha
  - Wenjin Wang
  - Rui Ding
  - Symeon Chatzinotas
  - Björn Ottersten

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2025-12-26

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*arXiv*"
publication_short: "*arXiv*"

abstract: |-
  This paper studies multi-satellite multi-stream (MSMS) beamspace transmission, where multiple satellites cooperate to form a distributed multiple-input multiple-output (MIMO) system and jointly deliver multiple data streams to multi-antenna user terminals (UTs), and beamspace transmission combines earth-moving beamforming with beam-domain precoding. For the first time, we formulate the signal model for MSMS beamspace MIMO transmission. Under synchronization errors, multi-antenna UTs enable the distributed MIMO channel to exhibit higher rank, supporting multiple data streams. Beamspace MIMO retains conventional codebook based beamforming while providing the performance gains of precoding. Based on the signal model, we propose statistical channel state information (sCSI)-based optimization of satellite clustering, beam selection, and transmit precoding, using a sum-rate upper-bound approximation. With given satellite clustering and beam selection, we cast precoder design as an equivalent covariance decomposition-based weighted minimum mean square error (CDWMMSE) problem. To obtain tractable algorithms, we develop a closed-form covariance decomposition required by CDWMMSE and derive an iterative MSMS beam-domain precoder under sCSI. Following this, we further propose several heuristic closed-form precoders to avoid iterative cost. For satellite clustering, we enhance a competition-based algorithm by introducing a mechanism to regulate the number of satellites serving certain UT. Furthermore, we design a two-stage low-complexity beam selection algorithm focused on enhancing the effective channel power. Simulations under practical configurations validate the proposed methods across the number of data streams, receive antennas, serving satellites, and active beams, and show that beamspace transmission approaches conventional MIMO performance at lower complexity.

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
    doi: https://doi.org/10.48550/arXiv.2512.21998

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/pdf/2512.21998
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
