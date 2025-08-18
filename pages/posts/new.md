---
title: 如何建立个人网站：从零开始的完整指南
date: 2025-08-18
updated: 2025-08-18
categories: 网站 笔记 测试
tags:
  - 测试
  - 笔记
top: 1
---

# 如何建立个人网站：从零开始的完整指南

> 本文既是建站教程，也是 **Markdown 语法**的实用示例。通过阅读源码可学习各种 Markdown 元素的使用方法。

---

## 一、为什么要建立个人网站？
- 🚀 **展示自我**：程序员的作品集/设计师的视觉库/写作者的个人专栏
- 💼 **职业发展**：提升个人品牌影响力（75% HR会优先查看候选人个人网站）
- 🌐 **完全掌控**：摆脱社交平台的内容限制

---

## 二、建站基础步骤（有序列表示例）

1. **选择技术方案**
   - 静态网站生成器（推荐新手）：
     - [Hugo](https://gohugo.io) - Go语言开发，生成速度最快
     - [Jekyll](https://jekyllrb.com) - GitHub Pages原生支持
     - [Hexo](https://hexo.io) - Node.js生态丰富
   
   ```bash
   # 安装Hexo示例
   npm install hexo-cli -g
   hexo init myblog
   cd myblog && hexo server