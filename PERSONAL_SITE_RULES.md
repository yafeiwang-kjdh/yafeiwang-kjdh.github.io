# 合作者栏目维护规则

本文件记录网站所有者明确指定的排序规则。修改首页 Research Collaborators 栏目时，请先阅读本节；除非用户明确提出新规则，否则保持以下约定。

## 数据与显示位置

- 数据源：`data/collaborators.yaml`。
- 渲染模板：`layouts/shortcodes/research_collaborators.html`。
- 样式：`layouts/_partials/hooks/head-end/custom-style.html`。
- 当前模板直接按 YAML 中 `people` 数组的顺序输出，并不会自动排序。修改数据后必须按下面规则排列数组。

## 排序规则（用户于 2026-10-21 确认）

1. 固定第一位：**Wenjin Wang**，标注 `Ph.D. Supervisor`。
2. 固定第二位：**Björn Ottersten**，标注 `CSC Visiting Ph.D. Supervisor`。
3. 其余人员按 **IEEE Fellow（包含 Life Fellow）→ Senior Member → Member → 学生会员** 分组。
4. 同组人员按各自 `scholar_order` 从小到大排序，即用户 Google Scholar 主页的默认合作者列表顺序。

具体分组映射：

| `ieee.grade` | 组优先级 |
| --- | --- |
| `Fellow`、`Life Fellow` | 0（同组，Life Fellow 不额外提前） |
| `Senior Member` | 1 |
| `Member` | 2 |
| `Graduate Student Member`、`Student Member` | 3（同组） |

两位导师的固定位置优先于 IEEE 等级。其余人员的排序键为 `(组优先级, scholar_order)`。不要按姓名、引用量、机构或职称重新排序。

## 原始顺序与证据维护

- `scholar_order` 是原始 Google Scholar 合作者顺序，不是当前页面的显示序号。**重排 `people` 后不得按新位置重编号。**
- `order_source` 保存用户的 Google Scholar 主页。只有实际核对该页面默认合作者列表后，才更新原始顺序；新增人员的顺序无法确认时，不要猜测。
- `supervisor_role` 保存两位导师的关系标签；不得在重排时丢失。
- IEEE 等级使用 `ieee.grade`，展示文字使用 `ieee.label`；保留 `source`、`evidence`、`checked_on` 和已有时效说明，不根据职称推断会员等级。
- Gangle Sun 目前使用有来源的历史 Student Member 记录，保留“当前等级未公开核实”的说明；获得更新证据后再调整等级和分组。
- 遇到未列出的等级或缺失证据，不要自行猜填或静默归类，先核查。
- 用户要求栏目介绍下方的小字保持简短，使用：`The order is based on Google Scholar’s default collaborator listing.` 页面说明不展开导师优先和 IEEE 分组细节；实际排序仍遵循本文件中的完整规则。

## 修改后核对

确认两位导师仍在前两位；其余每组的 `scholar_order` 递增；没有人员丢失或重复；姓名、头像、身份来源和导师标签保持对应。涉及模板或样式时，同时检查桌面与手机端对齐。
