---
title: "Outage-Constrained Transceiver Power Loading: A Deep Learning Approach to Robust Massive MIMO Downlink"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Yundi Li
  - Guanxing Lu
  - Huapeng Zhou
  - admin
  - Wenjin Wang

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2022-06-06

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Conference Paper']

# Publication name and optional abbreviated publication name.
publication: "*2022 IEEE International Black Sea Conference on Communications and Networking (BlackSeaCom)*"
publication_short: "*2022 IEEE International Black Sea Conference on Communications and Networking (BlackSeaCom)*"

abstract: |-
  In this research, we consider massive multiple-input multiple-output (MIMO) communication systems, where the base station (BS) equipped with a uniform planar array (UPA) serves several multi-antennas users based on imperfect channel state information (CSI). By utilizing the statistical properties of channel estimation error, our purpose is to design beamformers to minimize the total transmitted power, subject to certain quality of service (QoS) outage probability. Inspired by the Chebyshev Inequality, we relax the probabilistic QoS constraints by constructing a function on the channel estimation error, whose mean value is a significant multiple of its standard deviation, where the multiple is determined by the error distribution assumption and required outage probability. Then we develop an iterative algorithm correspondingly, which is able to properly allocate the transmitted power. The standard deviation plays a crucial role in power allocation, yet is time-consuming to be solved by the iterative manner. For this reason, we construct a deep learning (DL)-based framework to obtain the standard deviation directly. Experimental results prove the proposed robust transceiver can improve the outage probability remarkably, while the DL-based framework can distinctly reduce the computational complexity.

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
    doi: https://doi.org/10.1109/BlackSeaCom54372.2022.9858205

# Custom links
links:
  - type: pdf
    url: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9858205
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
