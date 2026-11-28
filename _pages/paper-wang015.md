---
layout: page
title: "Extract the Best, Discard the Rest: CSI Feedback with Offline Large AI Models"
permalink: /publications/2025-05-13-extract-the-best-discard-the-rest-csi-feedback-with-offline-large-ai-models/
nav: false
---

{% bibliography --query @*[key=wang015] %}

## Abstract

Large AI models (LAMs) have shown strong potential in wireless communication tasks, but their practical deployment remains hindered by latency and computational constraints. In this work, we focus on the challenge of integrating LAMs into channel state information (CSI) feedback for frequency-division duplex (FDD) massive multiple-intput multiple-output (MIMO) systems. To this end, we propose two offline frameworks, namely site-specific LAM-enhanced CSI feedback (SSLCF) and multi-scenario LAM-enhanced CSI feedback (MSLCF), that incorporate LAMs into the codebook-based CSI feedback paradigm without requiring real-time inference. Specifically, SSLCF generates a site-specific enhanced codebook through fine-tuning on locally collected CSI data, while MSLCF improves generalization by pre-generating a set of environment-aware codebooks. Both of these frameworks build upon the LAM with vision-based backbone, which is pre-trained on large-scale image datasets and fine-tuned with CSI data to generate customized codebooks. This resulting network named LVM4CF captures the structural similarity between CSI and image, allowing the LAM to refine codewords tailored to the specific environments. To optimize the codebook refinement capability of LVM4CF under both single- and dual-side deployment modes, we further propose corresponding training and inference algorithms. Simulation results show that our frameworks significantly outperform existing schemes in both reconstruction accuracy and system throughput, without introducing additional inference latency or computational overhead. These results also support the core design methodology of our proposed frameworks, extracting the best and discarding the rest, as a promising pathway for integrating LAMs into future wireless systems.
