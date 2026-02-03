---
title: "Dynamic Channel Prediction for Massive MIMO Systems with Temporal Non-Stationarity"
authors:
  - Hongwei Hou
  - admin
  - Yiming Zhu
  - Wenjin Wang
  - Dirk T. M. Slock
date: "2025-07-07T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-07-07T00:00:00Z"

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
publication_types: ["Conference Paper"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE International Mediterranean Conference on Communications and Networking (MeditCom 2025)*"
publication_short: "*IEEE International Mediterranean Conference on Communications and Networking (MeditCom 2025)*"

abstract: >-
  This paper investigates dynamic channel prediction for massive MIMO under temporal non-stationarity by leveraging dual-timescale and cluster correlations. We propose the sliding frame structure including pilot OFDM symbols to exploit dual-timescale correlations, i.e., intra-frame and interframe correlations, through Doppler-domain modeling and AR processes, respectively. This formulation leads to the spatialfrequency-temporal domain channel model and the correlated angle-delay-Doppler (ADD) domain representation, facilitating the joint exploitation of inter-antenna, inter-subcarrier, and inter-symbol correlations. In AR processes for long-timescale correlation modeling, the pattern-coupled variance is introduced to capture the energy leakage effects resulting from finite ADD domain resolutions. Building upon this structured prior model, we develop the dynamic channel prediction algorithm based on the simplified dynamic approximate message passing framework, with hyperparameters optimized via the expectationmaximization algorithm. Numerical simulations demonstrate the superiority of the proposed algorithm in terms of channel prediction performance.

tags:
  - Massive MIMO
  - channel prediction
  - temporal non-stationarity
  - approximate message passing

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
  # - name: Custom Link
  #   url: http://example.org
  - type: pdf
    url: https://www.eurecom.org/publication/8306/download/comsys-publi-8306.pdf
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
hugoblox:
  ids:
    doi: https://doi.org/10.1109/MeditCom64437.2025.11104310
---

{{< figure src="featured.png" caption="" >}}
