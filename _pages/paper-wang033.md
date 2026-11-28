---
layout: page
title: Statistical CSI-Based Distributed Precoding Design for OFDM-Cooperative Multi-Satellite
  Systems
permalink: /publications/2026-01-05-statistical-csi-based-distributed-precoding-design-for-ofdm-cooperative-multi-satellite-systems/
nav: false
---

{% bibliography --query @*[key=wang033] %}

## Abstract

This paper investigates the design of distributed precoding for multi-satellite massive MIMO transmissions. We first conduct a detailed analysis of the transceiver model, in which delay and Doppler precompensation is introduced to ensure coherent transmission. In this analysis, we examine the impact of precompensation errors on the transmission model, emphasize the near-independence of inter-satellite interference, and ultimately derive the received signal model. Based on such signal model, we formulate an approximate expected rate maximization problem that considers both statistical channel state information (sCSI) and compensation errors. Unlike conventional approaches that recast such problems as weighted minimum mean square error (WMMSE) minimization, we demonstrate that this transformation fails to maintain equivalence in the considered scenario. To address this, we introduce an equivalent covariance decomposition-based WMMSE (CDWMMSE) formulation derived based on channel covariance matrix decomposition. Taking advantage of the channel characteristics, we develop a low-complexity decomposition method and propose an optimization algorithm. To further reduce computational complexity, we introduce a model-driven scalable deep learning (DL) approach that leverages the equivariance of the mapping from sCSI to the unknown variables in the optimal closed-form solution, enhancing performance through novel dense Transformer network and scaling-invariant loss function design. Simulation results validate the effectiveness and robustness of the proposed method in some practical scenarios. We also demonstrate that the DL approach can adapt to dynamic settings with varying numbers of users and satellites.
