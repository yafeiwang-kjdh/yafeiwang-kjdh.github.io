---
title: "Tensor-Structured Bayesian Channel Prediction for Upper Mid-Band XL-MIMO Systems"
authors:
  - Hongwei Hou
  - admin
  - Xinping Yi
  - Wenjin Wang
  - Dirk T. M. Slock
  - Shi Jin
date: "2026-01-18T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-01-18T00:00:00Z"

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
publication_types: ["Journal article"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Communications (TCOM)*"
publication_short: "*IEEE Transactions on Communications (TCOM)*"

abstract: >-
  The upper mid-band balances coverage and capacity for future cellular systems and also embraces XL-MIMO systems, offering enhanced spectral and energy efficiency. However, these benefits are significantly degraded under mobility due to channel aging, and further exacerbated by the unique near-field and spatial non-stationarity propagation in such systems. To address this challenge, we propose a novel channel prediction approach that incorporates dedicated channel modeling, probabilistic representations, and Bayesian inference algorithms for this emerging scenario. Specifically, we develop tensor-structured channel models in both the spatial-frequency-temporal and beam-delay-Doppler domains, which leverage temporal correlations among multiple pilot symbols for channel prediction. The factor matrices of multi-linear transformations are parameterized by beam-delay-Doppler domain grids and spatial non-stationarity factors, where beam domain grids are jointly determined by angles and slopes under spatial-chirp based near-field representations. To enable tractable inference, we replace environment-dependent beam-delay-Doppler domain grids with uniformly sampled ones, and introduce perturbation parameters in each domain to mitigate grid mismatch. We further propose a hybrid beam domain strategy that integrates angle-only sampling with slope hyperparameterization to avoid the computational burden of explicit slope sampling. Based on the probabilistic models, we develop a tensor-structured bi-layer inference algorithm under the expectation-maximization framework, which reduces computational complexity via tensor operations by leveraging the bi-layer factor graph for approximate E-step inference and an alternating strategy with closed-form updates in the M-step. Numerical simulations based on the near-practical channel simulator demonstrate the superior channel prediction performance of the proposed algorithm.

# tags:
#  - example

# Display this page in the Featured widget?
featured: false

# hugoblox:
#   ids:
#     doi: https://doi.org/10.1109/TCOMM.2026.3658933

# Custom links (uncomment lines below)
links:
  - type: pdf
    url: https://arxiv.org/pdf/2508.08491
# - name: Custom Link
#   url: http://example.org
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
    doi: https://doi.org/10.1109/TCOMM.2026.3658933
---

{{< figure src="featured.png" caption="" >}}
