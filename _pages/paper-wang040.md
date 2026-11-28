---
layout: page
title: "Semantic Communication for Multi-Satellite Massive MIMO Transmission: A Mixture
  of Cooperative Modes Framework"
permalink: /publications/2026-05-09-arxiv-2605.09013/
nav: false
---

{% bibliography --query @*[key=wang040] %}

## Abstract

This paper investigates semantic communications (SemComs) for multi-satellite cooperative massive multiple-input multiple-output (MIMO) transmission, where multiple massive-MIMO satellites jointly serve a common set of multi-antenna user terminals. For the first time, SemComs with image transmission task are integrated into satellite massive MIMO and multi-satellite cooperative transmission. For the two representative cooperative modes, namely coherent transmission (CT) and non-coherent transmission (NCT), we develop multi-satellite CT (MSCT) and multi-satellite NCT (MSNCT) SemCom frameworks, respectively. MSCT adopts a symmetric architecture, whereas MSNCT introduces transmitter-side stream allocation and a two-stage receiver design that combines per-stream semantic extraction with cross-stream semantic-interference exploitation. To instantiate MSCT, we further design a symmetric encoder and decoder network based on hybrid Swin-Transformer and lightweight bottleneck convolutional neural network (CNN) blocks, termed HSTC, where Swin Transformer provides scalable computation and the CNN branch improves performance and convergence. For MSNCT, a Transformer-based backbone is employed to support cross-stream interference exploitation through global attention. Building on these two frameworks, we propose a mixture of cooperative modes (MoCM) framework, in which a permutation-invariant network dynamically switches between MSCT and MSNCT using multi-satellite statistical channel state information, thereby balancing semantic performance and complexity. Simulation results under practical configurations demonstrate the performance gains of the proposed frameworks.
