---
layout: page
title: "OLAMCF: Offline Large AI Models Enhanced CSI Feedback in FDD Massive MIMO
  Systems"
permalink: /publications/2025-12-08-olamcf-offline-large-ai-models-enhanced-csi-feedback/
nav: false
---

{% bibliography --query @*[key=wang030] %}

## Abstract

Large AI models (LAMs) have shown strong potential in wireless communication tasks, but their practical deployment remains hindered by latency and computational constraints. In this work, we focus on the challenge of integrating LAMs into channel state information (CSI) feedback for frequency-division duplex (FDD) massive multiple-intput multiple-output (MIMO) systems. To this end, we propose two offline frameworks, namely site-specific LAM-enhanced CSI feedback (SSLCF) and multi-scenario LAM-enhanced CSI feedback (MSLCF), that incorporate LAMs into the codebook-based CSI feedback paradigm without requiring real-time inference. Specifically, SSLCF generates a site-specific enhanced codebook through fine-tuning on locally collected CSI data, while MSLCF improves generalization by pre-generating a set of environment-aware codebooks. Both of these frameworks build upon the LAM with vision-based backbone, which is pre-trained on large-scale image datasets and fine-tuned with CSI data to generate customized codebooks. This resulting network named LVM4CF captures the structural similarity between CSI and image, allowing the LAM to refine codewords tailored to the specific environments. To optimize the codebook refinement capability of LVM4CF under both single- and dual-side deployment modes, we further propose corresponding training and inference algorithms. Simulation results show that our frameworks significantly outperform existing schemes in both reconstruction accuracy and system throughput, without introducing additional inference latency or computational overhead.
