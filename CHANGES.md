# Pakswell 网站图片升级 — 改动说明

## 总体方向
工业风 · 真实场景 · 强化"工艺 / 认证 / 规模"叙事。

## 新增图片（12 张，已优化压缩，images/ 目录）

| 文件名 | 来源（Selected） | 用途 |
|---|---|---|
| `hero-warehouse.jpg` | 5月6日.jpg | Hero 背景 / og:image / Twitter Card |
| `cta-team-handling.jpg` | 11月20日(4).jpg | CTA 区背景 |
| `epal-pallet-detail.jpg` | 11月20日.jpg | 产品卡 1（EPAL Euro Pallets） |
| `collar-3tier-warehouse.jpg` | 10月30日 (1)(4).png | 产品卡 2（Pallet Collars） |
| `production-line.jpg` | 微信图片_产线.jpg | 画廊 #1 |
| `team-assembly.jpg` | 10月30日 (1)(1).jpg | 画廊 #2 |
| `epal-quality-detail.jpg` | 11月20日(1).jpg | 画廊 #3 |
| `packaging-application.jpg` | 11月20日(5).jpg | 画廊 #4 |
| `structure-stackable.jpg` | 展开.91.png | 新增「How It Works」#1 |
| `structure-folded.jpg` | 折叠111.13.jpg | 新增「How It Works」#2 |
| `structure-strapped.jpg` | sss.8.png | 新增「How It Works」#3 |
| `structure-bulk.jpg` | sss121.11.jpg | 新增「How It Works」#4 |

所有图片：
- 最大宽度 1200–1920px（按用途）
- JPG 质量 85–88，progressive，optimize 开启
- 单张体积 120–450 KB
- images/ 总体积 2.6 MB（旧版的几十张原图压缩前合计 50 MB+）

## 旧图片（已不再使用，可从仓库删除）

- images/epal-pallet-stack.jpg
- images/collar-box-with-lid.jpg
- images/heat-treatment-kiln.jpg
- images/container-loading-pallets.jpg
- images/container-loading-collars.jpg
- images/container-loaded-collars.jpg

> 提交 PR 前可在 Git 里删除这 6 张老图，让仓库更干净。

## index.html 的改动

1. **Meta og:image / twitter:image** → 指向 `hero-warehouse.jpg`
2. **Hero `<section class="hero">`** → 背景图替换 + 渐变透明度从 0.92/0.95 略微调亮到 0.88/0.92（让仓库纵深更可见）
3. **产品卡 1 / 2 `<img>`** → 替换 src 与 alt
4. **画廊 4 张 `<img>` + caption** → 替换 src、alt、文案：
   - 画廊 #1 文案：`ISPM 15 heat treatment kiln` → `Automated production line`
   - 画廊 #2 文案：`Container loading — EPAL pallets` → `Skilled craftsmanship — collar assembly`
   - 画廊 #3 文案：`Container loading — pallet collars` → `EPAL-certified quality detail`
   - 画廊 #4 文案：`Fully loaded container ready for shipment` → `Real packaging application`
5. **新增 `<section id="structure">`「How It Works」** — 4 图小卡片区，介绍可堆叠 / 可折叠 / 已捆扎 / 量产能力
6. **CTA `<section class="cta">`** → 背景图替换 + 渐变略微调亮

## translations.json 的改动

- 更新现有键：`gallery_cap_ht / cl1 / cl2 / cl3`
- 新增键（en / zh-CN / zh-TW 全译，其余语言以英文 fallback）：
  - `structure_label / structure_title / structure_desc`
  - `structure_1_title / structure_1_desc` ... `structure_4_title / structure_4_desc`

## 提交建议

```bash
cd /path/to/pakswell-website
# 把这个文件夹的内容覆盖到本地仓库
# 然后：
git add -A
git rm images/epal-pallet-stack.jpg images/collar-box-with-lid.jpg \
       images/heat-treatment-kiln.jpg images/container-loading-pallets.jpg \
       images/container-loading-collars.jpg images/container-loaded-collars.jpg
git commit -m "Refresh visuals: industrial-style photography + new product structure section"
git push
```

如果 GitHub Pages 自动部署，几分钟后线上就生效。
