---
layout: page
title: Unlocking Symbol-Level Precoding Efficiency Through Tensor Equivariant Neural
  Network
permalink: /publications/2025-10-02-unlocking-symbol-level-precoding-efficiency-through-tensor-equivariant-neural-network/
nav: false
---

{% bibliography --query @*[key=wang021] %}

## Abstract

Although symbol-level precoding (SLP) based on constructive interference exploitation offers performance gains, its high complexity remains a bottleneck. This paper addresses this challenge with an end-to-end deep learning framework with low inference complexity that leverages the structure of the optimal SLP solution in closed-form and its inherent tensor equivariance, where a permutation of the input induces the corresponding permutation of the output. Building upon computationally efficient model-based formulations and their known closed-form solutions, we analyze their relationship with linear precoding and investigate the corresponding optimality condition. We then construct a mapping from the problem formulation to the solution and prove its tensor equivariance, based on which the designed networks reveal a specific parameter-sharing pattern that delivers low computational complexity and strong generalization. Leveraging these, we propose the backbone of the framework with an attention-based tensor-equivariant module, achieving linear computational complexity. Furthermore, we demonstrate that such a framework is also applicable to imperfect CSI scenarios, where we design a tensor-equivariant network to map the CSI, statistics, and symbols to auxiliary variables. Simulation results show that the proposed framework captures substantial performance gains of optimal SLP, while achieving an approximately 80-times speedup over conventional methods and maintaining strong generalization across user numbers and symbol block lengths.
