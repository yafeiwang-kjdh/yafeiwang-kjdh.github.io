---
title: "Statistical CSI-Based Beamspace Transmission for Massive MIMO LEO Satellite Communications"
authors:
  - Qian Dong
  - admin
  - Nan Hu
  - Yiming Zhu
  - Wenjin Wang
  - Li Chai
# date: "2025-07-07T00:00:00Z"
# doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-11-28"

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Preprint / Working paper
# 4 = Report
# 5 = Book
# 6 = Book section
# 7 = Thesis
# 8 = Patent
publication_types: ["Journal Paper"]

# Publication name and optional abbreviated publication name.
publication: "*Entropy*"
publication_short: "*Entropy*"

abstract: >-
  In multibeam low-Earth-orbit (LEO) satellite systems, precoding has emerged as a key technology for mitigating co-channel interference (CCI) and for improving spectral efficiency (SE). However, its practical implementation is challenged by the difficulty of acquiring reliable instantaneous channel state information (iCSI) and by the high computational complexity induced by large-scale antenna arrays, making it incompatible with fixed codebook-based beamforming schemes commonly adopted in operational systems. In this analysis, we propose a beamspace transmission framework leveraging statistical CSI (sCSI) and achieves reduced computational complexity compared with antenna-domain precoding designs. Specifically, we first propose a low-complexity beam selection algorithm that selects a small subset of beams for each user terminal (UT) from a fixed beamforming codebook, using only the UTs’ two-dimensional (2D) angular information. To suppress CCI among beams, we then derive a beamspace weighted minimum mean square error (WMMSE) precoding scheme based on the equivalent beamspace channel matrix. The derivation employs an sCSI-based WMMSE (sWMMSE) formulation derived from an upper bound approximation of the ergodic sum rate, which provides a tighter estimate than the expected mean square error (MSE)-based lower bound approximation. Simulation results demonstrate that the proposed sCSI-based beamspace transmission scheme achieves a favorable trade-off between performance and computational complexity.

tags:
  - LEO satellite
  - precoding
  - statistical CSI
  - massive MIMO
  - beam selection

# Display this page in the Featured widget?
featured: false

hugoblox:
  ids:
    doi: https://doi.org/10.3390/e27121214

# Custom links (uncomment lines below)
links:
  # - name: Custom Link
  #   url: http://example.org
  - type: pdf
    url: https://www.mdpi.com/1099-4300/27/12/1214/pdf?version=1764346128
#  - type: code
#    url: https://github.com/HugoBlox/hugo-blox-builder

url_pdf: ""
url_code: ""
url_dataset: ""
url_poster: ""
url_project: ""
url_slides: ""
url_source: ""
url_video: ""

# Featured image
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional)
projects: []

# Slides (optional).
slides: ""

# Hugoblox identifiers
# https://docs.hugoblox.com/reference/front-matter/#hugoblox
---

{{< figure src="featured.png" caption="" >}}
