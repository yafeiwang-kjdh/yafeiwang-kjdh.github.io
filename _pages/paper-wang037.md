---
layout: page
title: "Deep Learning-Based Multi-Satellite Massive MIMO Transmission: Centralized
  or Decentralized?"
permalink: /publications/2026-03-21-deep-learning-based-multi-satellite-massive-mimo-transmission/
nav: false
---

{% bibliography --query @*[key=wang037] %}

## Abstract

This paper investigates new efficient transmission architectures for multi-satellite massive multiple-input multiple-output (MIMO). We study the weighted sum-rate maximization problem in a multi-satellite system where multiple satellites transmit independent data streams to multi-antenna user terminals, thereby achieving higher throughput. We first adopt a multi-satellite weighted minimum mean square error (WMMSE) formulation under statistical channel state information (CSI), which yields closed-form updates for the precoding and receive vectors. To overcome the high complexity of optimization, we propose a learning-based WMMSE design that integrates tensor equivariance with closed-form recovery, enabling inference with near-optimal performance without iterative updates. Moreover, to reduce inter-satellite signaling overhead incurred by exchanging CSI and precoding vectors in centralized coordination, we develop a decentralized multi-satellite transmission scheme in which each satellite locally infers its precoders rather than receiving from the central satellite. The proposed decentralized scheme leverages periodically available satellite state information, such as orbital positions and satellite attitude, which is inherently accessible in satellite networks, and employs a dual-branch tensor-equivariant network to predict the precoders at each satellite locally. Numerical results demonstrate that the proposed multi-satellite transmission significantly outperforms single-satellite systems in sum rate; the decentralized scheme achieves sum-rate performance close to the centralized schemes while substantially reducing computational complexity and inter-satellite overhead; and the learning-based schemes exhibit strong robustness and scalability across different scenarios.
