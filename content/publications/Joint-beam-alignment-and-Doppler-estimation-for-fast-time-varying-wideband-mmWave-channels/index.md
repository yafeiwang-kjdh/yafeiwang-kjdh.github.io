---
title: "Joint beam alignment and Doppler estimation for fast time-varying wideband mmWave channels"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Hongwei Hou
  - admin
  - Xinping Yi
  - Wenjin Wang
  - Shi Jin

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2024-03-20

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Wireless Communications (TWC)*"
publication_short: "*IEEE Transactions on Wireless Communications (TWC)*"

abstract: |-
  This paper investigates the joint beam alignment and Doppler estimation (BADE) for fast time-varying wideband millimeter-wave channels, which is essential for subsequent data transmission. In such scenarios, the non-negligible Doppler frequencies significantly impact the beam alignment performance and reference signal overhead, calling for accurate time variation modeling and efficient transceiver design. Toward this end, we leverage the angle, Doppler frequency, and delay sparsity, thus formulating the joint BADE problem as a sparse signal recovery problem in the angle-Doppler-delay domain. The feasibility of the formulated problem strongly depends on the transmitter codebook and the receiver algorithm, which motivates our design. For the transmitter codebook, we characterize the design criterion aiming at maximal identifiable paths, which facilitates precise path parameter estimations and is not satisfied by existing deterministic codebooks. Following this, we provide a new deterministic codebook generation algorithm to meet the necessary conditions of the proposed criterion. For the receiver algorithm, we propose the greedy-based multi-path parameter extraction algorithm. In the proposed algorithm, the hierarchical refinement dictionaries with extended refinement range are employed, balancing the BADE performance and computational complexity. The numerical simulations demonstrate the superiority of the proposed transceiver over benchmarks on the joint BADE problem.

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
doi: https://doi.org/10.1109/TWC.2024.3376822

# Custom links
links:
  - type: pdf
    url: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10485946
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
