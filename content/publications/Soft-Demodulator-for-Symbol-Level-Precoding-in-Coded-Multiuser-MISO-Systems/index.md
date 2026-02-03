---
title: "Soft Demodulator for Symbol-Level Precoding in Coded Multiuser MISO Systems"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Hongwei Hou
  - Wenjin Wang
  - Xinping Yi
  - Shi Jin

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

# date: '2013-07-01T00:00:00Z'

# Schedule page publish date (NOT publication's date).
publishDate: 2024-07-03

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['Journal Paper']

# Publication name and optional abbreviated publication name.
publication: "*IEEE Transactions on Wireless Communications (TWC)*"
publication_short: "*IEEE Transactions on Wireless Communications (TWC)*"

abstract: |-
  In this paper, we consider symbol-level precoding (SLP) in channel-coded multiuser multi-input single-output (MISO) systems. It is observed that the received SLP signals do not always follow Gaussian distribution, rendering the conventional soft demodulation with the Gaussian assumption unsuitable for the coded SLP systems. It, therefore, calls for novel soft demodulator designs for non-Gaussian distributed SLP signals with accurate log-likelihood ratio (LLR) calculation. To this end, we first investigate the non-Gaussian characteristics of both phase-shift keying (PSK) and quadrature amplitude modulation (QAM) received signals with existing SLP schemes and categorize the signals into two distinct types. The first type exhibits an approximate-Gaussian distribution with the outliers extending along the constructive interference region (CIR). In contrast, the second type follows some distribution that significantly deviates from the Gaussian distribution. To obtain accurate LLR, we propose the modified Gaussian soft demodulator and Gaussian mixture model (GMM)-expectation-maximization (EM) soft demodulators to deal with two types of signals respectively. Subsequently, to further reduce the computational complexity and pilot overhead, we put forward a novel neural network named pilot feature extraction network (PFEN) to replace the EM algorithm, leveraging the transformer mechanism in deep learning. Simulation results show that the proposed soft demodulators dramatically improve the throughput of existing SLPs for both PSK and QAM transmission in coded systems.

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
    doi: https://doi.org/10.1109/TWC.2024.3419258

# Custom links
links:
  - type: pdf
    url: https://arxiv.org/pdf/2310.10296.pdf
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
