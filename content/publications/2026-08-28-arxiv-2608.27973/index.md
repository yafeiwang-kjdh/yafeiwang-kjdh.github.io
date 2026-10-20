---
title: 'Toward Secure Communications for a UAV Swarm with Movable Antennas in SAGIN: CKM-Enabled Multi-Agent Reinforcement Learning Framework'
authors:
- Jiayang Wan
- admin
- Jiawei Zhuang
- Wenjin Wang
- Tony Q.S. Quek
date: '2026-08-28'
publishDate: '2026-08-28'
publication_types:
- Preprint Paper
publication: '*arXiv preprint arXiv:2608.27973*'
publication_short: '*arXiv*'
abstract: Space-air-ground integrated networks (SAGINs) can provide ubiquitous and reliable connectivity for unmanned aerial vehicles (UAVs). However, air-to-ground links, which are typically dominated by line-of-sight (LoS) propagation, are vulnerable to passive eavesdropping due to the broadcast nature of wireless channels. To enhance physical-layer security, we investigate a SAGIN-enabled secure downlink communication system in which UAVs select service links among satellite, aerial, and terrestrial networks while adjusting the positions of the movable antenna (MA) array to fully exploit connectivity and spatial degrees of freedom for improved secrecy communication performance. Specifically, we maximize the secrecy energy efficiency (SEE) of a UAV swarm by jointly optimizing the MA positions, UAV trajectories, and link selections, subject to UAV mobility, MA movement, and link connectivity constraints. To reduce the real-time channel state information (CSI) acquisition overhead, we propose
  a channel knowledge map (CKM)-assisted multi-agent reinforcement learning framework. Specifically, the CKM is first constructed from sparse channel measurements via Kriging interpolation and is then leveraged together with satellite ephemeris information to enable efficient storage and retrieval of CSI. To reduce the action-space dimensionality and computational complexity, we model the MA array using rigid-body kinematics and adjust its position through global rigid-body translation, thereby constructing a low-dimensional hybrid action space for the joint optimization decisions. To align local decisions with system-wide performance under system constraints, we design an individual-team collaborative reward mechanism and introduce action masks to enforce constraints on UAV mobility, collision avoidance, MA regions, and connectivity capacity.
featured: false
hugoblox:
  ids:
    doi: 10.48550/arXiv.2608.27973
links:
- type: pdf
  url: https://arxiv.org/pdf/2608.27973
---
