---
title: Generative Actor-Critic with Soft Bridge Policies
authors:
- Ke He
- Le He
- Shunpu Tang
- admin
- Lisheng Fan
date: '2026-05-09'
publishDate: '2026-05-09'
publication_types:
- Preprint Paper
publication: '*arXiv preprint arXiv:2605.08733*'
publication_short: '*arXiv*'
abstract: Expressive generative policies such as diffusion and flow models are appealing for maximum-entropy (MaxEnt) online reinforcement learning because of their ability to model multimodal and highly non-Gaussian action distributions. However, training effective soft generative policies faces two obstacles that often arise together. First, marginal action densities are often unavailable, so existing methods typically rely on entropy bounds, heuristic proxies or approximations. Second, iterative shared-parameter samplers raise inference cost and require backpropagation through time over repeated network evaluations, increasing memory cost and potentially destabilizing policy optimization. These obstacles motivate us to seek a generative actor-critic method that exposes a tractable soft objective while generating each action in just one network evaluation. To this end, we propose soft generative actor-critic (SoftGAC), whose actor is a single stochastic feedforward network with internal
  Gaussian bridge layers. This explicit bridge structure allows us to lift the soft objective to path space, yielding an analytical path-KL regularizer against a high-entropy reference process for both actor improvement and the soft Bellman bootstrap, without estimating the endpoint entropy. Crucially, the actor generates each action in only one network evaluation under a total parameter budget comparable to strong baselines, substantially reducing inference cost relative to the existing iterative diffusion and flow policies. It also avoids long unrolled backpropagation through time. Across challenging continuous-control benchmarks, our method achieves competitive or superior returns compared with strong diffusion and flow policies, demonstrating a clear advantage in the compute-return tradeoff.
featured: false
hugoblox:
  ids:
    doi: 10.48550/arXiv.2605.08733
links:
- type: pdf
  url: https://arxiv.org/pdf/2605.08733
---
