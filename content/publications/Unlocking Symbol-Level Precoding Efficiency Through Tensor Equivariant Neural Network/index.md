---
title: "Unlocking Symbol-Level Precoding Efficiency Through Tensor Equivariant Neural Network"
authors:
  - Jinshuo Zhang
  - admin
  - Xinping Yi
  - Wenjin Wang
  - Shi Jin
  - Symeon Chatzinotas
  - Björn Ottersten
# date: "2025-10-02T00:00:00Z"
# doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-10-02T00:00:00Z"

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
publication_types: ["Preprint Paper"]

# Publication name and optional abbreviated publication name.
publication: "*arXiv*"
publication_short: "*arXiv*"

abstract: >-
  Although symbol-level precoding (SLP) based on constructive interference exploitation offers performance gains, its high complexity remains a bottleneck. This paper addresses this challenge with an end-to-end deep learning framework with low inference complexity that leverages the structure of the optimal SLP solution in closed-form and its inherent tensor equivariance, where a permutation of the input induces the corresponding permutation of the output. Building upon computationally efficient model-based formulations and their known closed-form solutions, we analyze their relationship with linear precoding and investigate the corresponding optimality condition. We then construct a mapping from the problem formulation to the solution and prove its tensor equivariance, based on which the designed networks reveal a specific parameter-sharing pattern that delivers low computational complexity and strong generalization. Leveraging these, we propose the backbone of the framework with an attention-based tensor-equivariant module, achieving linear computational complexity. Furthermore, we demonstrate that such a framework is also applicable to imperfect CSI scenarios, where we design a tensor-equivariant network to map the CSI, statistics, and symbols to auxiliary variables. Simulation results show that the proposed framework captures substantial performance gains of optimal SLP, while achieving an approximately 80-times speedup over conventional methods and maintaining strong generalization across user numbers and symbol block lengths.

# tags:
#  - example

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
  # - name: Custom Link
  #   url: http://example.org
  - type: pdf
    url: https://arxiv.org/pdf/2510.02108
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
    doi: 10.48550/arXiv.2510.02108
---

{{< figure src="featured.png" caption="" >}}
