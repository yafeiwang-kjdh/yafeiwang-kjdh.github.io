---
layout: page
title: "Toward Unified AI Models for MU-MIMO Communications: A Tensor Equivariance
  Framework"
permalink: /publications/2025-12-01-toward-unified-ai-models-for-mu-mimo-communications-a-tensor-equivariance-framework/
nav: false
---

{% bibliography --query @*[key=wang028] %}

## Abstract

In this paper, we propose a unified framework based on equivariance for the design of artificial intelligence (AI)-assisted technologies in multi-user multiple-input-multiple-output (MU-MIMO) systems. We first provide definitions of multidimensional equivariance, high-order equivariance, and multidimensional invariance (referred to collectively as tensor equivariance). On this basis, by investigating the design of precoding and user scheduling, which are key techniques in MU-MIMO systems, we delve deeper into revealing tensor equivariance of the mappings from channel information to optimal precoding tensors, precoding auxiliary tensors, and scheduling indicators, respectively. To model mappings with tensor equivariance, we propose a series of plug-and-play tensor equivariant neural network (TENN) modules, where the computation involving intricate parameter sharing patterns is transformed into concise tensor operations. Building upon TENN modules, we propose the unified tensor equivariance framework that can be applicable to various communication tasks, based on which we easily accomplish the design of corresponding AI-assisted precoding and user scheduling schemes. Simulation results show that the proposed methods achieve near-optimal performance with significantly lower complexity and strong generalization across multiple dimensions. For instance, the NN trained for precoding with 8 users provides satisfactory performance in a 10-user scenario. This validates the superiority of TENN modules and the unified framework.
