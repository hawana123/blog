import fs from 'fs';
import path from 'path';

const EN_DIR = './src/content/blog/en';
const ZH_DIR = './src/content/blog/zh';

const articles = [
  {
    slug: 'notion-vs-obsidian',
    en: {
      fm: { title: 'Notion vs Obsidian: Which Note-Taking App Should You Choose in 2025?', excerpt: 'A comprehensive comparison of Notion and Obsidian to help you decide which note-taking app fits your workflow best.', date: '2025-06-01', category: 'Productivity Tools', tags: ['Notion', 'Obsidian', 'Note-Taking'], author: 'Alex Chen' },
      body: `Choosing the right note-taking application can significantly impact your productivity and knowledge management. In this detailed comparison, we examine two of the most popular options: **Notion** and **Obsidian**.

## Overview

Notion is an all-in-one workspace that combines notes, databases, project management, and collaboration features. It runs entirely in the cloud, making it accessible from any device with an internet connection. Obsidian, on the other hand, is a local-first, markdown-based knowledge management tool that stores all your notes as plain text files on your device.

## User Interface and Experience

Notion offers a polished, modern interface with a block-based editor that feels intuitive for most users. You can create pages with rich media embeds, databases, and various content blocks. The learning curve is moderate, as the feature set is extensive.

Obsidian takes a different approach with a more developer-friendly interface. The editor supports markdown natively, and the graph view provides a visual representation of how your notes connect. For users who prefer keyboard shortcuts and plain text, Obsidian feels like a natural extension of their workflow.

## Organization and Structure

Notion uses a hierarchical page structure with nested pages and databases. You can create complex information architectures with linked databases, kanban boards, calendars, and timelines. This makes it particularly powerful for team collaboration and project management.

Obsidian relies on bidirectional linking and tags for organization. The graph view helps you discover connections between ideas that you might not have noticed otherwise. This approach aligns well with the Zettelkasten method and other knowledge management frameworks.

## Performance and Offline Access

Obsidian excels in performance since all notes are stored locally. There is no loading time for switching between notes, and everything works offline. Notion requires an internet connection for full functionality, though it does offer limited offline access.

## Pricing

Notion offers a generous free tier with some limitations on file uploads and block history. The paid plans start at around $8 per month for personal use. Obsidian is completely free for personal use, with optional paid add-ons for sync and publish features.

## Which Should You Choose?

Choose **Notion** if you need team collaboration, databases, and project management features in one tool. Choose **Obsidian** if you value privacy, offline access, speed, and a plain-text-based knowledge management system.

Both applications are excellent choices, and the best option depends entirely on your specific workflow and priorities.`
    },
    zh: {
      fm: { title: 'Notion vs Obsidian：2025年你该选哪个笔记应用？', excerpt: '全面对比 Notion 和 Obsidian，帮助你选择最适合工作流的笔记应用。', date: '2025-06-01', category: '生产力工具', tags: ['Notion', 'Obsidian', '笔记应用'], author: 'Alex Chen' },
      body: `选择正确的笔记应用可以显著提升你的生产力和知识管理能力。在这篇详细的对比中，我们来看看两款最受欢迎的笔记应用：**Notion** 和 **Obsidian**。

## 概述

Notion 是一个一体化工作空间，集笔记、数据库、项目管理和协作功能于一体。它完全运行在云端，只要有互联网连接就可以从任何设备访问。Obsidian 则是一个本地优先的、基于 Markdown 的知识管理工具，将所有笔记以纯文本文件存储在你的设备上。

## 用户界面和体验

Notion 提供了精致的现代界面，采用基于块的编辑器，对大多数用户来说都很直观。你可以创建包含丰富媒体嵌入、数据库和各种内容块的页面。学习曲线适中，因为功能集非常广泛。

Obsidian 采用了更偏向开发者的界面方式。编辑器原生支持 Markdown，图谱视图提供了笔记之间连接的可视化表示。对于喜欢键盘快捷键和纯文本的用户来说，Obsidian 感觉像是工作流的自然延伸。

## 组织和结构

Notion 使用分层页面结构，支持嵌套页面和数据库。你可以创建复杂的信息架构，包括关联数据库、看板、日历和时间线。这使其在团队协作和项目管理方面特别强大。

Obsidian 依靠双向链接和标签来组织内容。图谱视图帮助你发现想法之间的连接，这些连接可能是你之前没有注意到的。这种方式与 Zettelkasten 方法和其他知识管理框架非常契合。

## 性能和离线访问

Obsidian 在性能方面表现出色，因为所有笔记都存储在本地。切换笔记之间没有加载时间，一切都可以离线工作。Notion 需要互联网连接才能使用完整功能，尽管它确实提供有限的离线访问。

## 价格

Notion 提供慷慨的免费套餐，但在文件上传和历史记录方面有一些限制。付费计划从每月约 8 美元起。Obsidian 对个人使用完全免费，同步和发布功能为可选付费附加服务。

## 你应该选哪个？

如果你需要在一个工具中实现团队协作、数据库和项目管理功能，选择 **Notion**。如果你重视隐私、离线访问、速度和基于纯文本的知识管理系统，选择 **Obsidian**。

两款应用都是优秀的选择，最佳选项完全取决于你的具体工作流和优先级。`
    }
  },
  {
    slug: 'best-ai-coding-assistants',
    en: {
      fm: { title: 'The Best AI Coding Assistants in 2025: A Developer Guide', excerpt: 'Explore the top AI coding assistants that can boost your development workflow, from GitHub Copilot to emerging alternatives.', date: '2025-05-28', category: 'Technology Trends', tags: ['AI', 'Coding', 'Developer Tools'], author: 'Sarah Lin' },
      body: `Artificial intelligence has transformed the software development landscape. AI coding assistants can now write code, suggest improvements, debug issues, and even explain complex algorithms. Here is a comprehensive guide to the best AI coding assistants available in 2025.

## GitHub Copilot

GitHub Copilot remains one of the most widely used AI coding assistants. Integrated directly into popular IDEs like VS Code and JetBrains, it provides real-time code suggestions as you type. Copilot supports dozens of programming languages and can generate entire functions, classes, and even tests based on natural language comments.

The latest version introduces multi-file context awareness, allowing it to understand your entire codebase rather than just the current file. This results in more accurate and contextually relevant suggestions.

## Cursor

Cursor has emerged as a powerful AI-first code editor. Built as a fork of VS Code, it provides deep AI integration throughout the editing experience. Key features include the ability to chat with your codebase, apply AI edits across multiple files simultaneously, and generate code from natural language descriptions.

Cursor's Composer feature allows you to describe complex changes in plain English, and the AI will implement them across your project. This is particularly useful for refactoring and implementing new features.

## Claude and GPT-Based Assistants

General-purpose AI models like Claude and GPT-4 serve as excellent coding companions. While not IDE-integrated in the same way as Copilot, they excel at explaining complex concepts, reviewing code architecture, and helping with algorithm design. Many developers use these tools alongside their primary coding assistant.

## Amazon CodeWhisperer

Amazon's CodeWhisperer offers AI-powered code suggestions with a focus on security. It includes built-in security scanning that can detect vulnerabilities in your code as you write. CodeWhisperer is particularly strong for AWS-related development, offering suggestions optimized for Amazon's cloud services.

## Tabnine

Tabnine distinguishes itself by offering both cloud-based and local AI models. For developers working on sensitive codebases, the local model option ensures that code never leaves your machine. Tabnine supports all major IDEs and offers competitive pricing.

## How to Choose

Consider these factors when selecting an AI coding assistant: language support for your stack, IDE integration, privacy and data handling policies, pricing, and the quality of suggestions for your specific domain. Many developers find that combining multiple tools yields the best results.`
    },
    zh: {
      fm: { title: '2025年最佳AI编程助手：开发者指南', excerpt: '探索能提升你开发工作流的顶级AI编程助手，从GitHub Copilot到新兴替代方案。', date: '2025-05-28', category: '科技趋势', tags: ['AI', '编程', '开发工具'], author: 'Sarah Lin' },
      body: `人工智能已经彻底改变了软件开发领域。AI 编程助手现在可以编写代码、提出改进建议、调试问题，甚至解释复杂的算法。以下是 2025 年最佳 AI 编程助手的全面指南。

## GitHub Copilot

GitHub Copilot 仍然是使用最广泛的 AI 编程助手之一。它直接集成在 VS Code 和 JetBrains 等流行 IDE 中，在你输入时提供实时代码建议。Copilot 支持数十种编程语言，可以根据自然语言注释生成完整的函数、类甚至测试。

最新版本引入了多文件上下文感知功能，使其能够理解你的整个代码库而不仅仅是当前文件。这带来了更准确和上下文相关的建议。

## Cursor

Cursor 已经成为一个强大的 AI 优先代码编辑器。作为 VS Code 的分支构建，它在整个编辑体验中提供深度 AI 集成。主要功能包括与代码库对话、同时跨多个文件应用 AI 编辑，以及从自然语言描述生成代码。

Cursor 的 Composer 功能允许你用简单的语言描述复杂的更改，AI 将在你的项目中实现它们。这对于重构和实现新功能特别有用。

## Claude 和基于 GPT 的助手

Claude 和 GPT-4 等通用 AI 模型是出色的编程伙伴。虽然它们不像 Copilot 那样与 IDE 深度集成，但在解释复杂概念、审查代码架构和帮助算法设计方面表现出色。许多开发者将这些工具与主要编程助手结合使用。

## Amazon CodeWhisperer

Amazon 的 CodeWhisperer 提供以安全为重点的 AI 驱动代码建议。它包含内置安全扫描功能，可以在你编写代码时检测漏洞。CodeWhisperer 在 AWS 相关开发方面特别强大，提供针对 Amazon 云服务优化的建议。

## Tabnine

Tabnine 的独特之处在于同时提供基于云的和本地的 AI 模型。对于处理敏感代码库的开发者，本地模型选项确保代码永远不会离开你的机器。Tabnine 支持所有主流 IDE，并提供有竞争力的价格。

## 如何选择

选择 AI 编程助手时需要考虑以下因素：对你的技术栈的语言支持、IDE 集成、隐私和数据处理策略、定价，以及针对你特定领域的建议质量。许多开发者发现结合使用多个工具可以获得最佳效果。`
    }
  },
  {
    slug: 'todoist-complete-guide',
    en: {
      fm: { title: 'Todoist Complete Guide: Master Your Task Management in 2025', excerpt: 'Learn how to use Todoist effectively to organize your work, manage projects, and boost your personal productivity.', date: '2025-05-25', category: 'Productivity Tools', tags: ['Todoist', 'Task Management', 'Productivity'], author: 'Alex Chen' },
      body: `Todoist has established itself as one of the most powerful and user-friendly task management applications available. Whether you are managing personal errands or coordinating team projects, Todoist offers the tools you need to stay organized and productive.

## Getting Started with Todoist

The beauty of Todoist lies in its simplicity. At its core, it is a task list application, but beneath the surface lies a sophisticated system of projects, labels, filters, and natural language processing that makes task management effortless.

When you first open Todoist, you will see the Inbox, which serves as a quick capture zone for all your tasks. The key principle is to capture everything quickly and organize later. Todoist's natural language input allows you to type "Buy groceries every Saturday at 10am" and it will automatically set the due date and recurrence.

## Projects and Organization

Todoist organizes tasks into projects, which can be nested for hierarchical organization. For example, you might have a "Work" project containing sub-projects for each client or department. Each project can have its own set of tasks, sections, and custom views.

Sections within projects allow you to group related tasks together. This is particularly useful for project phases or categories. You can drag and drop tasks between sections to reorganize your workflow.

## Labels and Filters

Labels are one of Todoist's most powerful features. You can tag tasks with labels like @urgent, @email, @phone, or @waiting. Combined with filters, you can create custom views that show exactly what you need to see. For example, a filter like "@urgent & today" shows only urgent tasks due today.

## Productivity Features

Todoist includes several features designed to boost productivity. Karma tracks your productivity trends over time, showing you when you are most productive. The activity log provides a complete history of your task completions. Recurring tasks allow you to set up habits and regular responsibilities.

## Integrations

Todoist integrates with over 80 other applications, including Slack, Google Calendar, Zapier, and GitHub. These integrations allow you to create tasks from emails, calendar events, and messages without leaving your current workflow.

## Tips for Maximum Productivity

Start each day by reviewing your Today view. Use the two-minute rule: if a task takes less than two minutes, do it immediately rather than adding it to your list. Break large projects into small, actionable tasks. Review and clean up your task list weekly.`
    },
    zh: {
      fm: { title: 'Todoist 完全指南：2025年掌握任务管理', excerpt: '学习如何有效使用 Todoist 来组织工作、管理项目并提升个人生产力。', date: '2025-05-25', category: '生产力工具', tags: ['Todoist', '任务管理', '生产力'], author: 'Alex Chen' },
      body: `Todoist 已经确立了其作为最强大、最用户友好的任务管理应用之一的地位。无论你是管理个人事务还是协调团队项目，Todoist 都提供了让你保持有序和高效所需的工具。

## Todoist 入门

Todoist 的美在于其简洁性。从本质上讲，它是一个任务列表应用，但在表面之下是一个由项目、标签、过滤器和自然语言处理组成的复杂系统，使任务管理变得毫不费力。

当你第一次打开 Todoist 时，你会看到收件箱，它是所有任务的快速收集区。关键原则是快速捕获所有内容，稍后再整理。Todoist 的自然语言输入允许你输入"每周六上午10点买菜"，它会自动设置到期日期和重复周期。

## 项目和组织

Todoist 将任务组织到项目中，项目可以嵌套以实现分层组织。例如，你可能有一个"工作"项目，其中包含每个客户或部门的子项目。每个项目可以有自己的任务、分区和自定义视图。

项目内的分区允许你将相关任务分组在一起。这对于项目阶段或类别特别有用。你可以在分区之间拖放任务来重新组织工作流。

## 标签和过滤器

标签是 Todoist 最强大的功能之一。你可以用 @紧急、@邮件、@电话 或 @等待 等标签来标记任务。结合过滤器，你可以创建自定义视图，准确显示你需要看到的内容。例如，"@紧急 & 今天" 过滤器只显示今天到期的紧急任务。

## 生产力功能

Todoist 包含多个旨在提升生产力的功能。Karma 追踪你一段时间内的生产力趋势，显示你什么时候最有效率。活动日志提供你任务完成情况的完整历史记录。重复任务允许你设置习惯和定期责任。

## 集成

Todoist 与 80 多个其他应用集成，包括 Slack、Google Calendar、Zapier 和 GitHub。这些集成允许你从电子邮件、日历事件和消息创建任务，而无需离开当前工作流。

## 最大化生产力的技巧

每天开始时审查你的"今天"视图。使用两分钟规则：如果一个任务花费不到两分钟，立即完成它而不是添加到列表中。将大型项目分解为小的、可操作的任务。每周审查和清理你的任务列表。`
    }
  },
];

function writeFM(fm) {
  let s = '---\n';
  s += `title: "${fm.title.replace(/"/g, '\\"')}"\n`;
  s += `excerpt: "${fm.excerpt.replace(/"/g, '\\"')}"\n`;
  s += `date: "${fm.date}"\n`;
  s += `category: "${fm.category}"\n`;
  s += `tags: [${fm.tags.map(t => `"${t}"`).join(', ')}]\n`;
  s += `author: "${fm.author}"\n`;
  s += '---\n\n';
  return s;
}

for (const article of articles) {
  const enContent = writeFM(article.en.fm) + article.en.body;
  const zhContent = writeFM(article.zh.fm) + article.zh.body;
  fs.writeFileSync(path.join(EN_DIR, `${article.slug}.mdx`), enContent);
  fs.writeFileSync(path.join(ZH_DIR, `${article.slug}.mdx`), zhContent);
  console.log(`Created: ${article.slug}`);
}
console.log(`Done! Created ${articles.length} articles in EN and ZH.`);
