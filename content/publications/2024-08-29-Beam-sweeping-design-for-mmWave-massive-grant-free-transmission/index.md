---
title: "Beam-sweeping design for mmWave massive grant-free transmission"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Gangle Sun
  - Hongwei Hou
  - admin
  - Wenjin Wang
  - Wei Xu
  - Shi Jin

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2024-08-29

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*IEEE Journal of Selected Topics in Signal Processing (JSTSP)*"
publication_short: "*IEEE Journal of Selected Topics in Signal Processing (JSTSP)*"

abstract: |-
  To address the escalating demand for spectrum resources in emerging massive machine-type communication applications, it is promising to integrate massive grant-free transmission into millimeter-wave (mmWave) systems. As beam-sweeping schemes under hybrid beamforming architectures are commonly used to enhance signal power and extend coverage, this paper investigates an efficient beam-sweeping scheme for mmWave massive grant-free transmission under hybrid beamforming architectures. In this scheme, we propose a beam-sweeping design algorithm to optimize beamforming matrices, aiming to maximize spectral efficiency while ensuring quality of service (QoS) based on statistical information on uplink angles of arrival (AoAs). To address the intricate interdependence of beamforming matrices across different beam-sweeping slots, our solution begins with a two-stage genetic algorithm that pre-assigns users' access slots based on their uplink AoAs, decomposing the beamforming design problem into independent subproblems for each slot. Subsequently, a dual-layer beamforming design algorithm is proposed to solve these subproblems, optimizing beamforming matrices that enhance spectral efficiency and meet the QoS constraint. Numerous simulation results verify the effectiveness of the proposed beam-sweeping design algorithm in improving spectral efficiency and the capability to satisfy the required QoS.

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
    doi: https://doi.org/10.1109/JSTSP.2024.3451706

# Custom links
links:
  - type: pdf
    url: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10645348
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
