import fs from 'fs';
import path from 'path';

const EN_DIR = './src/content/blog/en';
const ZH_DIR = './src/content/blog/zh';

const articles = [
  {
    slug: 'keyboard-shortcuts-guide',
    en: {
      fm: { title: 'The Ultimate Guide to Keyboard Shortcuts for Power Users', excerpt: 'Master essential keyboard shortcuts across Windows, macOS, and popular applications to work faster than ever.', date: '2025-04-10', category: 'Software Tips', tags: ['Keyboard Shortcuts', 'Productivity', 'Windows', 'macOS'], author: 'Alex Chen' },
      body: `Keyboard shortcuts are one of the simplest ways to boost your productivity. Research shows that proficient shortcut users can save up to eight days of work per year. Here is a comprehensive guide to the most valuable shortcuts across operating systems and applications.

## Universal Shortcuts

These shortcuts work across almost all applications on both Windows and macOS. On Mac, substitute Ctrl with Cmd. Ctrl+C copies, Ctrl+V pastes, Ctrl+X cuts, Ctrl+Z undoes, Ctrl+Y redoes, Ctrl+A selects all, Ctrl+S saves, and Ctrl+F finds text.

## Windows Essential Shortcuts

Windows Key+D shows the desktop. Windows Key+L locks your computer. Windows Key+E opens File Explorer. Windows Key+I opens Settings. Alt+Tab switches between open applications. Ctrl+Shift+Esc opens Task Manager directly. Windows Key+V opens the clipboard history, letting you paste items you copied earlier.

Windows Key+Arrow keys snap windows to different positions. Windows Key+Shift+Left/Right moves windows between monitors. These shortcuts are essential for multitasking and managing multiple windows efficiently.

## macOS Essential Shortcuts

Cmd+Space opens Spotlight search. Cmd+Tab switches between applications. Cmd+Q quits an application. Cmd+W closes the current window. Cmd+Shift+3 captures the entire screen. Cmd+Shift+4 captures a selected area. Cmd+Option+Esc force-quits applications.

The Mac also supports text navigation shortcuts: Option+Left/Right moves the cursor by word, Cmd+Left/Right moves to the beginning/end of line, and Option+Delete deletes the previous word.

## Browser Shortcuts

Ctrl+T opens a new tab. Ctrl+W closes the current tab. Ctrl+Shift+T reopens the last closed tab. Ctrl+L focuses the address bar. Ctrl+Shift+N opens an incognito window. Ctrl+Tab cycles through tabs. Ctrl+Shift+Delete opens the clear browsing data dialog.

## Application-Specific Shortcuts

In VS Code, Ctrl+P opens files by name, Ctrl+Shift+P opens the command palette, and Ctrl+Backtick toggles the terminal. In Google Docs, Ctrl+/ shows all shortcuts. In Excel, Ctrl+Shift+L toggles filters and Alt+= auto-sums selected cells.

## Creating Custom Shortcuts

Both Windows and macOS allow you to create custom shortcuts for frequently used actions. On Windows, use PowerToys Keyboard Manager. On macOS, use System Settings > Keyboard > Keyboard Shortcuts. For advanced automation, consider tools like AutoHotkey on Windows or Keyboard Maestro on macOS.

## Building the Habit

Start by learning three to five new shortcuts per week. Practice them deliberately until they become muscle memory. Print a cheat sheet for your most-used applications and keep it near your monitor. Within a few months, you will work significantly faster without even thinking about it.`
    },
    zh: {
      fm: { title: '高级用户键盘快捷键终极指南', excerpt: '掌握Windows、macOS和流行应用的基本快捷键，以前所未有的速度工作。', date: '2025-04-10', category: '软件技巧', tags: ['键盘快捷键', '生产力', 'Windows', 'macOS'], author: 'Alex Chen' },
      body: `键盘快捷键是提高生产力的最简单方法之一。研究表明，熟练使用快捷键的用户每年最多可以节省八天的工作时间。以下是跨操作系统和应用程序的最有价值的快捷键全面指南。

## 通用快捷键

这些快捷键几乎适用于 Windows 和 macOS 上的所有应用程序。在 Mac 上，将 Ctrl 替换为 Cmd。Ctrl+C 复制，Ctrl+V 粘贴，Ctrl+X 剪切，Ctrl+Z 撤销，Ctrl+Y 重做，Ctrl+A 全选，Ctrl+S 保存，Ctrl+F 查找文本。

## Windows 基本快捷键

Windows 键+D 显示桌面。Windows 键+L 锁定电脑。Windows 键+E 打开文件资源管理器。Windows 键+I 打开设置。Alt+Tab 在打开的应用程序之间切换。Ctrl+Shift+Esc 直接打开任务管理器。Windows 键+V 打开剪贴板历史，让你粘贴之前复制的项目。

Windows 键+方向键将窗口吸附到不同位置。Windows 键+Shift+左/右在显示器之间移动窗口。这些快捷键对于多任务处理和高效管理多个窗口至关重要。

## macOS 基本快捷键

Cmd+空格 打开 Spotlight 搜索。Cmd+Tab 在应用程序之间切换。Cmd+Q 退出应用程序。Cmd+W 关闭当前窗口。Cmd+Shift+3 捕获整个屏幕。Cmd+Shift+4 捕获选定区域。Cmd+Option+Esc 强制退出应用程序。

Mac 还支持文本导航快捷键：Option+左/右按词移动光标，Cmd+左/右移动到行首/行尾，Option+Delete 删除前一个词。

## 浏览器快捷键

Ctrl+T 打开新标签页。Ctrl+W 关闭当前标签页。Ctrl+Shift+T 重新打开最后关闭的标签页。Ctrl+L 聚焦地址栏。Ctrl+Shift+N 打开隐身窗口。Ctrl+Tab 循环切换标签页。Ctrl+Shift+Delete 打开清除浏览数据对话框。

## 应用程序特定快捷键

在 VS Code 中，Ctrl+P 按名称打开文件，Ctrl+Shift+P 打开命令面板，Ctrl+反引号切换终端。在 Google Docs 中，Ctrl+/ 显示所有快捷键。在 Excel 中，Ctrl+Shift+L 切换筛选器，Alt+= 自动求和选定的单元格。

## 创建自定义快捷键

Windows 和 macOS 都允许你为常用操作创建自定义快捷键。在 Windows 上，使用 PowerToys 键盘管理器。在 macOS 上，使用系统设置 > 键盘 > 键盘快捷键。对于高级自动化，考虑使用 Windows 上的 AutoHotkey 或 macOS 上的 Keyboard Maestro 等工具。

## 养成习惯

从每周学习三到五个新快捷键开始。刻意练习直到它们成为肌肉记忆。为你最常用的应用程序打印一份速查表，放在显示器旁边。几个月内，你将在不假思索的情况下工作得明显更快。`
    }
  },
  {
    slug: 'best-budget-laptops-2025',
    en: {
      fm: { title: 'Best Budget Laptops for Students and Professionals in 2025', excerpt: 'Our picks for the best affordable laptops that deliver great performance without breaking the bank.', date: '2025-04-07', category: 'Technology Trends', tags: ['Laptops', 'Hardware', 'Budget Tech'], author: 'Sarah Lin' },
      body: `Finding a great laptop on a budget is more achievable than ever. Modern budget laptops offer performance that would have been considered premium just a few years ago. Here are our top picks across different price ranges and use cases.

## Best Overall Budget: Acer Aspire 5

The Acer Aspire 5 continues to dominate the budget category with its excellent balance of performance, display quality, and build. The latest model features an AMD Ryzen 5 processor, 8GB of RAM, and a 512GB SSD. The 15.6-inch Full HD IPS display is bright and color-accurate, making it suitable for both work and entertainment.

At around $500, the Aspire 5 handles everyday tasks, web browsing, office applications, and light photo editing with ease. Battery life reaches approximately 8 hours, and the keyboard is comfortable for extended typing sessions.

## Best for Students: Lenovo IdeaPad 3

Lenovo's IdeaPad 3 offers exceptional value for students. Starting at under $400, it includes an Intel Core i3 or AMD Ryzen 3 processor, 8GB RAM, and a 256GB SSD. The 14-inch display is compact enough for carrying around campus, and the lightweight design makes it easy to transport.

The IdeaPad 3 includes a physical webcam shutter for privacy, a fingerprint reader on select models, and Lenovo's reliable build quality. For students who primarily use web applications and document editing, this laptop provides more than enough performance.

## Best Chromebook: Acer Chromebook Plus 515

For users who live in the browser, Chromebooks offer excellent value. The Chromebook Plus 515 features a 15.6-inch display, Intel Core i3 processor, and 8GB of RAM. Chrome OS is lightweight and secure, with automatic updates and built-in virus protection.

At around $350, this Chromebook is perfect for web browsing, document editing in Google Workspace, video streaming, and video calls. The long battery life and fast boot times make it an excellent choice for students and casual users.

## Best Premium Budget: MacBook Air M1

While not the cheapest option, the MacBook Air M1 remains the best value in computing. Starting around $750 refurbished, it offers performance that rivals laptops twice its price. The M1 chip delivers exceptional speed for everyday tasks, photo editing, and even video editing.

The MacBook Air M1 features a stunning Retina display, all-day battery life (up to 18 hours), a best-in-class trackpad, and macOS with its rich ecosystem of applications. For creative professionals and students who need reliable performance, this is the best long-term investment.

## What to Look For

When shopping for a budget laptop, prioritize these specs: at least 8GB of RAM, an SSD (not HDD) for storage, a modern processor (Intel 12th gen or newer, AMD Ryzen 5000 or newer), and a Full HD display. Avoid laptops with less than 4GB of RAM or processors older than two generations.`
    },
    zh: {
      fm: { title: '2025年适合学生和职场人的最佳预算笔记本', excerpt: '我们精选的最佳性价比笔记本电脑，在不花大价钱的情况下提供出色性能。', date: '2025-04-07', category: '科技趋势', tags: ['笔记本电脑', '硬件', '预算科技'], author: 'Sarah Lin' },
      body: `在预算内找到一台出色的笔记本电脑比以往任何时候都更容易实现。现代预算笔记本电脑提供的性能在几年前还会被认为是高端的。以下是我们在不同价格范围和用例中的首选。

## 最佳总体预算：Acer Aspire 5

Acer Aspire 5 凭借其出色的性能、显示质量和做工平衡，继续主导预算类别。最新型号配备 AMD Ryzen 5 处理器、8GB 内存和 512GB SSD。15.6 英寸全高清 IPS 显示屏明亮且色彩准确，适合工作和娱乐。

在约 500 美元的价位，Aspire 5 可以轻松处理日常任务、网页浏览、办公应用和轻度照片编辑。电池续航时间约 8 小时，键盘适合长时间打字。

## 最适合学生：Lenovo IdeaPad 3

Lenovo 的 IdeaPad 3 为学生提供了卓越的价值。起价不到 400 美元，包括 Intel Core i3 或 AMD Ryzen 3 处理器、8GB 内存和 256GB SSD。14 英寸显示屏足够紧凑，便于在校园内携带，轻便的设计使其易于运输。

IdeaPad 3 包括物理网络摄像头遮挡板以保护隐私，部分型号配备指纹识别器，以及 Lenovo 可靠的做工质量。对于主要使用网络应用和文档编辑的学生来说，这款笔记本提供了绰绰有余的性能。

## 最佳 Chromebook：Acer Chromebook Plus 515

对于生活在浏览器中的用户，Chromebook 提供了出色的价值。Chromebook Plus 515 配备 15.6 英寸显示屏、Intel Core i3 处理器和 8GB 内存。Chrome OS 轻量且安全，具有自动更新和内置病毒防护。

在约 350 美元的价位，这款 Chromebook 非常适合网页浏览、Google Workspace 中的文档编辑、视频流和视频通话。长电池续航时间和快速启动时间使其成为学生和休闲用户的出色选择。

## 最佳高端预算：MacBook Air M1

虽然不是最便宜的选择，但 MacBook Air M1 仍然是计算领域的最佳价值。翻新起价约 750 美元，它提供的性能可与价格翻倍笔记本电脑匹敌。M1 芯片为日常任务、照片编辑甚至视频编辑提供卓越的速度。

MacBook Air M1 拥有令人惊叹的 Retina 显示屏、全天候电池续航（最长 18 小时）、同类最佳的触控板，以及拥有丰富应用生态系统的 macOS。对于需要可靠性能的创意专业人士和学生来说，这是最好的长期投资。

## 选购建议

购买预算笔记本时，优先考虑这些规格：至少 8GB 内存、SSD（而非 HDD）存储、现代处理器（Intel 第 12 代或更新、AMD Ryzen 5000 或更新），以及全高清显示屏。避免购买内存少于 4GB 或使用两代以上旧处理器的笔记本。`
    }
  },
  {
    slug: 'beginner-guide-automation',
    en: {
      fm: { title: 'A Beginner Guide to Workflow Automation: Save Hours Every Week', excerpt: 'Learn the fundamentals of workflow automation and discover how to automate repetitive tasks without coding.', date: '2025-04-04', category: 'Software Tips', tags: ['Automation', 'Zapier', 'No-Code'], author: 'Mike Johnson' },
      body: `Workflow automation is the practice of using software to perform repetitive tasks automatically, freeing your time for more meaningful work. With modern no-code tools, anyone can build powerful automations without any programming knowledge.

## Why Automate?

The average knowledge worker spends over two hours per day on repetitive tasks like data entry, sending follow-up emails, updating spreadsheets, and organizing files. Automation eliminates these time-consuming tasks, reduces errors, and ensures consistency across your processes.

## Getting Started with Zapier

Zapier is the most popular no-code automation platform, connecting over 6,000 applications. A Zap consists of a trigger (the event that starts the automation) and one or more actions (what happens when the trigger fires). For example, you could create a Zap that automatically saves email attachments to Google Drive when you receive emails with attachments.

Start with simple two-step Zaps and gradually build more complex workflows as you become comfortable. Zapier offers templates for common automations, making it easy to get started quickly.

## Common Automation Ideas

Here are some practical automations to consider: automatically create tasks in your project management tool when you receive specific emails, save social media mentions to a spreadsheet, send welcome emails when someone fills out a form, back up files across multiple cloud services, and create calendar events from task due dates.

## Make (Integromat)

Make offers a more visual approach to automation with its drag-and-drop workflow builder. It excels at complex, multi-step automations with branching logic and data transformation. While slightly more complex than Zapier, Make provides greater flexibility and is often more affordable for high-volume automations.

## IFTTT

IFTTT (If This Then That) is the simplest automation platform, ideal for personal use and smart home integration. It uses simple if-then statements to connect services and devices. While less powerful than Zapier or Make, IFTTT is perfect for straightforward automations like syncing your calendar with your smart lights.

## Best Practices

Start small and iterate. Begin with one automation, test it thoroughly, and then expand. Document your automations so you can troubleshoot issues later. Set up error notifications so you know when an automation fails. Review your automations periodically to ensure they still serve their purpose.

## The ROI of Automation

Even a simple automation that saves you 15 minutes per day adds up to over 90 hours per year. The time you invest in setting up automations pays dividends continuously. Start today with one repetitive task you do daily, and build from there.`
    },
    zh: {
      fm: { title: '工作流自动化入门指南：每周节省数小时', excerpt: '学习工作流自动化的基础知识，了解如何在无需编码的情况下自动化重复性任务。', date: '2025-04-04', category: '软件技巧', tags: ['自动化', 'Zapier', '无代码'], author: 'Mike Johnson' },
      body: `工作流自动化是使用软件自动执行重复性任务的实践，从而释放你的时间用于更有意义的工作。借助现代无代码工具，任何人都可以在没有任何编程知识的情况下构建强大的自动化。

## 为什么要自动化？

普通知识工作者每天花费超过两个小时在重复性任务上，如数据输入、发送后续邮件、更新电子表格和整理文件。自动化消除了这些耗时的任务，减少了错误，并确保了流程的一致性。

## 开始使用 Zapier

Zapier 是最受欢迎的无代码自动化平台，连接超过 6,000 个应用程序。一个 Zap 由触发器（启动自动化的事件）和一个或多个操作（触发器触发时发生的事情）组成。例如，你可以创建一个 Zap，在收到带有附件的邮件时自动将邮件附件保存到 Google Drive。

从简单的两步 Zap 开始，随着你变得熟练，逐渐构建更复杂的工作流。Zapier 为常见自动化提供模板，使你能够快速上手。

## 常见自动化想法

以下是一些值得考虑的实用自动化：在收到特定邮件时自动在项目管理工具中创建任务，将社交媒体提及保存到电子表格，在有人填写表单时发送欢迎邮件，跨多个云服务备份文件，以及从任务到期日期创建日历事件。

## Make（Integromat）

Make 通过其拖放式工作流构建器提供了更直观的自动化方法。它擅长具有分支逻辑和数据转换的复杂多步骤自动化。虽然比 Zapier 稍微复杂一些，但 Make 提供了更大的灵活性，对于大批量自动化通常更实惠。

## IFTTT

IFTTT（If This Then That）是最简单的自动化平台，非常适合个人使用和智能家居集成。它使用简单的 if-then 语句来连接服务和设备。虽然不如 Zapier 或 Make 强大，但 IFTTT 非常适合简单的自动化，如同步日历和智能灯。

## 最佳实践

从小处着手，逐步迭代。从一个自动化开始，彻底测试它，然后扩展。记录你的自动化，以便以后排除问题。设置错误通知，以便在自动化失败时知道。定期审查你的自动化，确保它们仍然服务于其目的。

## 自动化的投资回报

即使是一个每天为你节省 15 分钟的简单自动化，一年也能累计节省超过 90 小时。你在设置自动化上投入的时间会持续产生回报。今天就从你每天做的一个重复性任务开始，然后从那里构建。`
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
