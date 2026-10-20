---
title: Robust Decentralized Multi-Satellite Massive MIMO Transmission via Knowledge Distillation
authors:
- Wenjing Cao
- Zheng Lin
- admin
- Wenjin Wang
- Ye Wang
- Rui Ding
- Symeon Chatzinotas
- Björn Ottersten
date: '2026-08-30'
publishDate: '2026-08-30'
publication_types:
- Preprint Paper
publication: '*arXiv preprint arXiv:2608.29620*'
publication_short: '*arXiv*'
abstract: This paper investigates robust decentralized transmission for cooperative multi-satellite massive multiple-input multiple-output (MIMO) systems under imperfect statistical channel state information (sCSI). In the considered scenario, each satellite has complete access to its local information but receives partial information from other satellites due to limited inter-satellite links (ISLs), with only imperfect sCSI available. To address these challenges, we propose a knowledge distillation (KD) framework that transfers cooperative precoding knowledge from a centralized teacher neural network (NN) to lightweight decentralized student NNs. Specifically, a global-clean teacher, aggregating information from all satellites and accessing accurate sCSI during offline training, transfers its cooperative precoding knowledge to partial-noisy students, relying on complete local information, limited information exchanged by other satellites, and error-corrupted sCSI for local precoding. The
  teacher NN combines patch-wise self-attention with dual-axis attention to learn inter-user interference and inter-satellite coordination, whereas each student NN adopts a compact per-satellite architecture for efficient onboard inference. The teacher learns a high-quality weighted minimum mean square error precoding policy from global-clean inputs, which is then distilled into the students operating on partial-noisy inputs. To mitigate the resulting teacher-student performance gap, we develop a hybrid KD mechanism with explicit angle- and phase-error calibration. Simulation results demonstrate that the proposed framework significantly enhances the decentralized sum-rate performance and remains robust under diverse configurations.
featured: false
hugoblox:
  ids:
    doi: 10.48550/arXiv.2608.29620
links:
- type: pdf
  url: https://arxiv.org/pdf/2608.29620
---
