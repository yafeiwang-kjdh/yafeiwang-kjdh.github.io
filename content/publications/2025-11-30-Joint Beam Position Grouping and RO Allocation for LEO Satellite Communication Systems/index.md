---
title: "Joint Beam Position Grouping and RO Allocation for LEO Satellite Communication Systems"
authors:
  - Bojun Guo
  - Yiming Zhu
  - Yi Zheng
  - admin
  - Mengyao Cao
  - Wenjin Wang
  - Li Chai
# date: "2025-07-07T00:00:00Z"
# doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-11-30"

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
publication: "*Electronics*"
publication_short: "*Electronics*"

abstract: >-
  International organizations such as the 3rd Generation Partnership Project (3GPP) and the International Telecommunication Union (ITU) regard non-terrestrial networks (NTNs) as an essential component of the sixth-generation (6G) mobile communication technology and have advanced relevant standardization efforts. Low Earth orbit (LEO) satellite communication (SatCom) constitutes a key part of NTNs, and efficient uplink random access (RA) is crucial for establishing initial connections in LEO SatCom systems. However, the long propagation delay and wide coverage of LEO satellites substantially increase access latency and collision probability due to the limited number of beams and their constrained coverage areas. In addition, the highly non-uniform spatial distribution of user equipment (UE) further aggravates access inefficiency. To this end, this paper investigates joint beam position grouping and RA channel (RACH) occasions (ROs) allocation (JBPGRA) for LEO SatCom systems. Specifically, we develop a system model for RA under beam hopping and identify the key factors that influence RA performance. Furthermore, we derive expressions for both the instantaneous signal-to-interference-plus-noise ratio (SINR) and the average SINR under a given non-uniform UE spatial distribution. Building on this analysis, the JBPGRA problem is formulated as an integer linear programming problem that seeks to maximize RA success while conserving RO resources under non-uniform UE distribution. To achieve a practical solution, we propose an efficient JBPGRA algorithm composed of beam position classification, sparse beam position grouping, and RO allocation modules. Simulation results demonstrate that, under the same UE density, the proposed JBPGRA scheme achieves over 29% higher access success rate in dense beam positions compared with the uniform baseline adopted in existing SatCom systems, while reducing RO consumption by more than 49% and decreasing the number of beam position groups by over 57%.

tags:
  - satellite communication
  - random access
  - beam hopping
  - non-uniform user distribution

# Display this page in the Featured widget?
featured: false

hugoblox:
  ids:
    doi: https://doi.org/10.3390/electronics14234731

# Custom links (uncomment lines below)
links:
  # - name: Custom Link
  #   url: http://example.org
  - type: pdf
    url: https://www.mdpi.com/2079-9292/14/23/4731/pdf?version=1764668952
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
