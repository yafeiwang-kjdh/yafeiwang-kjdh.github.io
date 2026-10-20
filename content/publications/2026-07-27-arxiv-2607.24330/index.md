---
title: 'Toward Alias-Free Channel Extrapolation in Upper Mid-Band Systems: A Spatial-Frequency-Temporal Tensor Learning Approach'
authors:
- Jiawei Zhuang
- Hongwei Hou
- admin
- Xinping Yi
- Wenjin Wang
- Jiangzhou Wang
- Björn Ottersten
date: '2026-07-27'
publishDate: '2026-07-27'
publication_types:
- Preprint Paper
publication: '*arXiv preprint arXiv:2607.24330*'
publication_short: '*arXiv*'
abstract: Upper mid-band massive multiple-input multiple-output (MIMO) offers a favorable capacity-coverage trade-off for next-generation wireless systems, but its large antenna arrays, wide bandwidths, and faster temporal variation substantially increase the pilot overhead required for accurate channel state information (CSI) acquisition. To reduce this overhead, this paper establishes a tensor-structured multi-domain channel extrapolation framework that exploits the limited-scattering nature of practical propagation environments to recover complete CSI across the spatial-frequency-temporal (SFT) domains from limited observations. Specifically, we develop a Tucker-based SFT-domain signal model to represent the complete CSI, where the factor matrices are parameterized by angle-delay-Doppler (ADD)-domain grids. Thanks to this representation, we reveal that limited SFT-domain observations imposed by uniform pilot patterns and antenna-port selection inherently induce ADD-domain aliasing, so
  that multiple physically distinct ADD-domain components become indistinguishable within structured ADD aliasing groups. To tackle this issue, we introduce a support-prior-assisted ADD-domain de-aliasing mechanism that leverages coarse-grained support information. Since exact closed-form characterization of this mechanism is difficult to derive, we propose a tensor-structure-aware axial-attention neural network (TANN), which integrates axis-wise attention with a lightweight multi-scale CNN-based gating module to incorporate support priors for ADD-domain de-aliasing. With tensor-structure modeling and mixed-configuration training over different pilot decimation factors, TANN yields a unified model that generalizes across pilot configurations without retraining. Numerical results demonstrate the effectiveness and strong generalization of the proposed framework over benchmark methods under diverse scenarios.
featured: false
hugoblox:
  ids:
    doi: 10.48550/arXiv.2607.24330
links:
- type: pdf
  url: https://arxiv.org/pdf/2607.24330
---
