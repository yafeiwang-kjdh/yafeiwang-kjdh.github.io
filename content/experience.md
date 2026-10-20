---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  spacing: '5rem'

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false
  - block: resume-skills
    content:
      title: Technical Skills
      username: admin
    design:
      show_skill_percentage: false
  - block: markdown
    content:
      title: Honors and Awards
      text: |-
        - **National Scholarship for Doctoral Students**, Ministry of Education of China, 2025.
        - **Huawei Scholarship for Doctoral Students**, Huawei Technologies and Southeast University, 2025–2026.
        - **Zhangjiang Hi-Tech Award Fund**, Southeast University, 2024–2025.
        - **Academic Innovation Advanced Individual**, Southeast University, 2023–2024 and 2024–2025.
        - **Innovation Capability Enhancement Plan for Doctoral Students**, Southeast University, 2025–2026; research grant of RMB 60,000.
        - **National Second Prize**, China Post-Graduate Mathematical Contest in Modeling, 2021.
        - **Wiley Open Science Excellent Author Program**, April–June 2023.
    design:
      columns: '1'
  - block: markdown
    content:
      title: Professional Service and Open Source
      text: |-
        - **Conference service:** Lead organizer of a special session at IEEE SPAWC 2026.
        - **Peer review:** IEEE TWC, TCOM, TMC, IEEE Wireless Communications, TVT, and WCL.
        - **Open source:** [TENN Toolbox](https://github.com/ZJSXYZ/TENN), a Python/PyTorch implementation of tensor-equivariant neural networks for MU-MIMO precoding and user scheduling.
    design:
      columns: '1'
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
