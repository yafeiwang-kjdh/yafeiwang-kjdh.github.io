---
title: "Energy and computational efficient precoding for LEO satellite communications"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Shiyu Wu
  - admin
  - Gangle Sun
  - Li You
  - Wenjin Wang
  - Rui Ding

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2023-12-01

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Conference Paper']

# Publication name and optional abbreviated publication name.
publication: "*2023 IEEE Global Communications Conference (GLOBECOM)*"
publication_short: "*2023 IEEE Global Communications Conference (GLOBECOM)*"

abstract: |-
  This paper focuses on energy efficiency (EE) pre-coding design and computational-efficient precoding updating strategy for low earth orbit (LEO) satellite communications. Firstly, we formulate the EE precoding problem, which aims to maximize the EE metric under the quality of service (QoS) constraint and per-antenna power constraint (PAPC). By intro-ducing semidefinite relaxation, first-order Taylor approximation, and quadratic transformation, the problem is transferred into a convex one that can be efficiently solved. Moreover, due to the continuous movement of LEO satellites, precoding is performed frequently to maintain the high EE performance, leading to high computational complexity. Consequently, we consider prolonging precoding intervals to reduce complexity while alleviating severe performance degradation during the intervals. To this end, a computational-efficient beam direction change (BDC) algorithm is proposed to update pre coding vectors, which makes the main lobes of beams always point toward users. Furthermore, an adaptive method is proposed to adjust the precoding interval flexibly. Simulation results have indicated the effectiveness of the EE precoding algorithm and the BDC algorithm.

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
    doi: https://doi.org/10.1109/GLOBECOM54140.2023.10437228

# Custom links
links:
  - type: pdf
    url: https://ieeexplore.ieee.org/xpl/conhome/10436308/proceeding
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
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

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

> [!NOTE]
> Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.

> [!NOTE]
> Create your slides in Markdown - click the _Slides_ button to check out the example.

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
