import fs from 'fs';
import path from 'path';

const EN_DIR = './src/content/blog/en';
const ZH_DIR = './src/content/blog/zh';

const articles = [
  {
    slug: 'chrome-extensions-work',
    en: {
      fm: { title: 'Top 10 Chrome Extensions to Supercharge Your Work in 2025', excerpt: 'These essential Chrome extensions will help you save time, stay organized, and work more efficiently.', date: '2025-05-10', category: 'Software Tips', tags: ['Chrome Extensions', 'Productivity', 'Browser'], author: 'Sarah Lin' },
      body: `Google Chrome is the most popular web browser in the world, and its extension ecosystem offers thousands of tools to enhance your productivity. Here are the ten Chrome extensions that every professional should consider installing.

## 1. uBlock Origin

This open-source ad blocker is lightweight and highly effective. Beyond blocking advertisements, it protects your privacy by preventing tracking scripts from loading. It uses minimal system resources compared to other ad blockers.

## 2. Grammarly

The Grammarly extension provides real-time writing assistance across all websites. Whether you are composing emails, writing documents in Google Docs, or posting on social media, Grammarly catches grammar errors, suggests improvements, and checks your tone.

## 3. LastPass

Password management is essential for security. LastPass stores all your passwords securely and autofills them when needed. It generates strong, unique passwords for each site and syncs across all your devices.

## 4. Todoist

The Todoist Chrome extension lets you capture tasks without leaving your current tab. Add tasks from any webpage, set due dates using natural language, and manage your task list from a convenient dropdown menu.

## 5. Loom

Loom makes screen recording incredibly easy. Record your screen, webcam, or both simultaneously to create quick video messages. This is perfect for explaining complex topics, providing feedback, or creating tutorials without scheduling a meeting.

## 6. Notion Web Clipper

Save web pages, articles, and bookmarks directly to your Notion workspace. The Web Clipper preserves page formatting and allows you to organize saved content into specific databases and pages.

## 7. Clockify

This free time tracking extension helps you understand where your time goes. Start and stop timers directly from the browser toolbar, and generate detailed reports of your time usage across projects and clients.

## 8. Momentum

Transform your new tab page into a personal productivity dashboard. Momentum displays your daily focus, to-do list, inspirational quotes, and weather information, helping you start each browsing session with intention.

## 9. StayFocusd

StayFocusd limits the time you spend on time-wasting websites. Set daily time allowances for distracting sites, and once your time is up, they become inaccessible for the rest of the day.

## 10. OneTab

When you have too many tabs open, OneTab converts them into a single list. This frees up memory, reduces clutter, and makes it easy to restore individual tabs or groups of tabs later.

## Installing and Managing Extensions

To get the most from your extensions, periodically review what you have installed and remove any you no longer use. Too many extensions can slow down your browser and create security risks. Pin your most-used extensions to the toolbar for quick access.`
    },
    zh: {
      fm: { title: '2025年提升工作效率的10大Chrome扩展', excerpt: '这些必备的Chrome扩展将帮助你节省时间、保持有序并更高效地工作。', date: '2025-05-10', category: '软件技巧', tags: ['Chrome扩展', '生产力', '浏览器'], author: 'Sarah Lin' },
      body: `Google Chrome 是世界上最受欢迎的网络浏览器，其扩展生态系统提供了数千种工具来提升你的生产力。以下是每位专业人士都应该考虑安装的十个 Chrome 扩展。

## 1. uBlock Origin

这款开源广告拦截器轻量且高效。除了拦截广告外，它还通过阻止跟踪脚本加载来保护你的隐私。与其他广告拦截器相比，它使用最少的系统资源。

## 2. Grammarly

Grammarly 扩展在所有网站上提供实时写作辅助。无论你是在撰写邮件、在 Google Docs 中编写文档还是在社交媒体上发帖，Grammarly 都能捕获语法错误、提出改进建议并检查你的语气。

## 3. LastPass

密码管理对于安全至关重要。LastPass 安全地存储你所有的密码，并在需要时自动填充。它为每个网站生成强大的唯一密码，并在所有设备之间同步。

## 4. Todoist

Todoist Chrome 扩展让你无需离开当前标签页即可捕获任务。从任何网页添加任务，使用自然语言设置到期日期，并从便捷的下拉菜单管理你的任务列表。

## 5. Loom

Loom 使屏幕录制变得极其简单。录制你的屏幕、网络摄像头或同时录制两者，创建快速视频消息。这非常适合解释复杂主题、提供反馈或创建教程，而无需安排会议。

## 6. Notion Web Clipper

将网页、文章和书签直接保存到你的 Notion 工作空间。Web Clipper 保留页面格式，并允许你将保存的内容组织到特定数据库和页面中。

## 7. Clockify

这个免费的时间跟踪扩展帮助你了解你的时间花在了哪里。直接从浏览器工具栏启动和停止计时器，并生成你在项目和客户之间的时间使用详细报告。

## 8. Momentum

将你的新标签页转变为个人生产力仪表板。Momentum 显示你的每日焦点、待办事项列表、励志名言和天气信息，帮助你以目标开始每次浏览。

## 9. StayFocusd

StayFocusd 限制你在浪费时间网站上的时间。为分散注意力的网站设置每日时间限额，一旦时间用完，这些网站在当天剩余时间将不可访问。

## 10. OneTab

当你打开了太多标签页时，OneTab 将它们转换为单个列表。这释放了内存，减少了混乱，并使以后恢复单个或一组标签页变得容易。

## 安装和管理扩展

为了充分利用你的扩展，定期审查已安装的扩展并删除不再使用的扩展。太多扩展会减慢浏览器速度并产生安全风险。将最常用的扩展固定到工具栏以便快速访问。`
    }
  },
  {
    slug: 'remote-work-productivity',
    en: {
      fm: { title: 'Remote Work Productivity: Building an Effective Home Office', excerpt: 'Practical tips and strategies for creating a productive home office environment and maintaining work-life balance.', date: '2025-05-07', category: 'Remote Work', tags: ['Remote Work', 'Home Office', 'Work-Life Balance'], author: 'Emily Zhang' },
      body: `Working from home offers tremendous flexibility, but it also presents unique challenges to productivity and well-being. Building an effective home office goes beyond just having a desk and chair; it involves creating an environment and routine that supports sustained productivity.

## Designing Your Physical Space

The foundation of a productive home office is a dedicated workspace. Ideally, this should be a separate room with a door you can close. If that is not possible, designate a specific area that you use exclusively for work. This physical boundary helps your brain switch between work mode and personal mode.

Invest in an ergonomic chair and a desk at the proper height. Your monitor should be at eye level to prevent neck strain. Consider a standing desk converter to alternate between sitting and standing throughout the day. Good lighting is essential; position your desk near natural light if possible, and supplement with a quality desk lamp.

## Technology Setup

Reliable technology is non-negotiable for remote work. Invest in a high-speed internet connection, a quality webcam for video calls, noise-canceling headphones, and a comfortable keyboard and mouse. A second monitor can significantly boost productivity by allowing you to reference materials while working.

## Establishing Routines

Structure is the key to remote work success. Start your day at a consistent time, get dressed as if you were going to the office, and create a morning routine that signals the start of your workday. Set specific work hours and communicate them to your team and household members.

## Managing Distractions

Home is full of potential distractions. Use techniques like the Pomodoro method (25 minutes of focused work followed by a 5-minute break) to maintain concentration. Use website blockers during work hours, and communicate boundaries to family members or roommates.

## Staying Connected

Remote work can feel isolating. Schedule regular video calls with colleagues, participate in virtual team activities, and consider working from a coworking space occasionally. Building social connections is essential for long-term satisfaction and mental health.

## Physical and Mental Health

Take regular breaks to stretch, walk, or exercise. Set an alarm to remind yourself to step away from the screen. Maintain a lunch break routine away from your desk. Exercise before or after work to replace the physical activity you would get from commuting.

## End-of-Day Ritual

Create a clear transition from work to personal time. This might include reviewing tomorrow's priorities, tidying your workspace, and physically leaving your office area. This ritual helps prevent work from bleeding into your personal life.`
    },
    zh: {
      fm: { title: '远程办公生产力：打造高效家庭办公室', excerpt: '创建高效家庭办公环境并维持工作与生活平衡的实用技巧和策略。', date: '2025-05-07', category: '远程办公', tags: ['远程办公', '家庭办公室', '工作生活平衡'], author: 'Emily Zhang' },
      body: `在家工作提供了极大的灵活性，但也给生产力和健康带来了独特的挑战。打造高效的家庭办公室不仅仅是有一张桌子和椅子；它涉及创建一个支持持续生产力的环境和日常习惯。

## 设计你的物理空间

高效家庭办公室的基础是专用的工作空间。理想情况下，这应该是一个可以关上门的独立房间。如果不可能，指定一个你专门用于工作的特定区域。这个物理边界帮助你的大脑在工作模式和个人模式之间切换。

投资一把人体工程学椅子和适当高度的桌子。你的显示器应该在眼睛水平线上以防止颈部疲劳。考虑使用升降台以便在一天中交替坐着和站着。良好的照明至关重要；如果可能的话，将桌子放在自然光附近，并辅以优质的台灯。

## 技术设置

可靠的技术对于远程工作来说是不可妥协的。投资高速互联网连接、用于视频通话的优质网络摄像头、降噪耳机以及舒适的键盘和鼠标。第二台显示器可以通过让你在工作时参考材料来显著提高生产力。

## 建立日常习惯

结构是远程工作成功的关键。每天在固定的时间开始工作，像去办公室一样穿好衣服，创建一个标志着工作日开始的早晨例行程序。设定具体的工作时间，并将其传达给你的团队成员和家庭成员。

## 管理干扰

家里充满了潜在的干扰。使用番茄工作法（25分钟专注工作后休息5分钟）来保持注意力。在工作时间使用网站拦截器，并向家人或室友传达边界。

## 保持连接

远程工作可能会让人感到孤立。定期安排与同事的视频通话，参加虚拟团队活动，并考虑偶尔在联合办公空间工作。建立社交联系对于长期满意度和心理健康至关重要。

## 身心健康

定期休息来伸展、散步或锻炼。设置闹钟提醒自己离开屏幕。保持远离办公桌的午餐休息习惯。在上班前或下班后锻炼，以取代通勤时你会获得的体力活动。

## 一天结束的仪式

创建一个从工作到个人时间的明确过渡。这可能包括审查明天的优先事项、整理工作空间，以及物理上离开办公区域。这个仪式有助于防止工作渗透到你的个人生活中。`
    }
  },
  {
    slug: 'google-workspace-vs-microsoft-365',
    en: {
      fm: { title: 'Google Workspace vs Microsoft 365: Which Suite Is Right for You?', excerpt: 'An honest comparison of the two dominant productivity suites to help individuals and businesses make the right choice.', date: '2025-05-04', category: 'Productivity Tools', tags: ['Google Workspace', 'Microsoft 365', 'Cloud Computing'], author: 'Alex Chen' },
      body: `Choosing between Google Workspace and Microsoft 365 is one of the most consequential technology decisions for individuals and businesses. Both suites offer email, document editing, file storage, and collaboration tools, but they approach these tasks with fundamentally different philosophies.

## Core Philosophy

Google Workspace (formerly G Suite) was born in the cloud. Every application is web-first, designed for real-time collaboration, and accessible from any device with a browser. Microsoft 365 evolved from desktop software, offering powerful native applications with cloud features layered on top.

## Document Editing

Google Docs, Sheets, and Slides excel at real-time collaboration. Multiple people can edit simultaneously with minimal lag, and the commenting system is intuitive. However, the editing features are less comprehensive than Microsoft Office, particularly for complex documents and advanced spreadsheet formulas.

Microsoft Word, Excel, and PowerPoint remain the gold standard for document creation. They offer more formatting options, advanced features, and superior handling of large, complex documents. The web versions provide lighter collaboration capabilities similar to Google's offerings.

## Email and Communication

Gmail provides a clean, searchable interface with excellent spam filtering and integration with other Google services. Google Chat and Meet handle messaging and video conferencing respectively. Microsoft Outlook offers a more traditional email experience with powerful organizational features, while Teams provides comprehensive communication including chat, calls, and video meetings.

## File Storage and Sharing

Google Drive offers simple, intuitive file sharing with generous free storage. Microsoft OneDrive integrates deeply with Windows and Office applications, providing a more seamless experience for users who work primarily with Office file formats.

## Pricing

Google Workspace starts at $7 per user per month for the Business Starter plan. Microsoft 365 Business Basic starts at $6 per user per month. Both offer various tiers with additional features and storage.

## Which Should You Choose?

Choose Google Workspace if real-time collaboration is your top priority, your team works primarily in browsers, and you value simplicity. Choose Microsoft 365 if you need the full power of desktop Office applications, your workflows depend on advanced Excel or Word features, or you are already invested in the Microsoft ecosystem.`
    },
    zh: {
      fm: { title: 'Google Workspace vs Microsoft 365：哪个套件适合你？', excerpt: '对两大主流生产力套件的诚实对比，帮助个人和企业做出正确选择。', date: '2025-05-04', category: '生产力工具', tags: ['Google Workspace', 'Microsoft 365', '云计算'], author: 'Alex Chen' },
      body: `在 Google Workspace 和 Microsoft 365 之间做出选择是个人和企业最具影响力的技术决策之一。这两个套件都提供电子邮件、文档编辑、文件存储和协作工具，但它们以根本不同的理念来处理这些任务。

## 核心理念

Google Workspace（前身为 G Suite）诞生于云端。每个应用都是网络优先的，为实时协作而设计，可从任何带浏览器的设备访问。Microsoft 365 从桌面软件发展而来，提供强大的原生应用并在其上叠加云功能。

## 文档编辑

Google Docs、Sheets 和 Slides 在实时协作方面表现出色。多人可以同时编辑且延迟最小，评论系统直观易用。然而，编辑功能不如 Microsoft Office 全面，特别是对于复杂文档和高级电子表格公式。

Microsoft Word、Excel 和 PowerPoint 仍然是文档创建的金标准。它们提供更多格式化选项、高级功能，以及对大型复杂文档的卓越处理能力。网页版提供类似于 Google 产品的轻量级协作功能。

## 电子邮件和通信

Gmail 提供干净、可搜索的界面，具有出色的垃圾邮件过滤和与其他 Google 服务的集成。Google Chat 和 Meet 分别处理消息传递和视频会议。Microsoft Outlook 提供更传统的电子邮件体验和强大的组织功能，而 Teams 提供包括聊天、通话和视频会议在内的全面通信。

## 文件存储和共享

Google Drive 提供简单直观的文件共享和慷慨的免费存储空间。Microsoft OneDrive 与 Windows 和 Office 应用深度集成，为主要使用 Office 文件格式的用户提供更无缝的体验。

## 定价

Google Workspace 商业入门版起价为每用户每月 7 美元。Microsoft 365 商业基础版起价为每用户每月 6 美元。两者都提供各种级别，具有额外的功能和存储空间。

## 你应该选哪个？

如果实时协作是你的首要任务、你的团队主要在浏览器中工作，并且你重视简洁性，选择 Google Workspace。如果你需要桌面 Office 应用的全部功能、你的工作流依赖于高级 Excel 或 Word 功能，或者你已经投入了 Microsoft 生态系统，选择 Microsoft 365。`
    }
  },
  {
    slug: 'project-management-tools-2025',
    en: {
      fm: { title: 'Best Project Management Tools for Small Teams in 2025', excerpt: 'Compare the top project management platforms designed for small teams that need agility without complexity.', date: '2025-05-01', category: 'Productivity Tools', tags: ['Project Management', 'Team Tools', 'Agile'], author: 'Mike Johnson' },
      body: `Small teams have unique project management needs. They need tools that provide structure without bureaucracy, visibility without overhead, and collaboration without complexity. Here is a comparison of the best project management tools designed with small teams in mind.

## Trello

Trello's kanban board approach is intuitive and visual. Cards represent tasks that move through columns representing workflow stages. For small teams with straightforward processes, Trello's simplicity is its greatest strength. The free tier supports up to 10 boards per workspace, and the Butler automation feature allows you to automate repetitive actions.

## Asana

Asana strikes an excellent balance between simplicity and power. It offers multiple views including lists, boards, timelines, and calendars. The workload feature helps prevent team burnout by visualizing capacity. Asana's templates library provides pre-built workflows for common use cases, saving setup time.

## Linear

Linear has gained significant popularity among software development teams. It is fast, keyboard-driven, and designed specifically for agile software development. The interface is clean and distraction-free, with excellent GitHub and GitLab integration. Linear feels like a tool built by developers for developers.

## ClickUp

ClickUp positions itself as the "one app to replace them all," combining project management, docs, chat, and goals in a single platform. For small teams that want to consolidate their tools, ClickUp offers remarkable value. The learning curve is steeper, but the feature set is comprehensive.

## Monday.com

Monday.com offers a colorful, highly customizable platform that works well for diverse project types. Its automation capabilities are robust, and the dashboard views provide clear project visibility. Monday.com is particularly strong for marketing, operations, and creative teams.

## Basecamp

Basecamp takes an opinionated approach with a fixed set of tools: message boards, to-do lists, file storage, schedules, and group chat. This simplicity means less time configuring tools and more time doing actual work. Basecamp offers a single flat price regardless of team size, making it economical for growing teams.

## Choosing the Right Tool

Consider your team's workflow complexity, preferred project methodology, integration needs, and budget. Many of these tools offer free trials, so test two or three options with your team before committing. The best tool is the one your team will actually use consistently.`
    },
    zh: {
      fm: { title: '2025年小团队最佳项目管理工具', excerpt: '对比专为需要敏捷而不复杂的小团队设计的顶级项目管理平台。', date: '2025-05-01', category: '生产力工具', tags: ['项目管理', '团队工具', '敏捷'], author: 'Mike Johnson' },
      body: `小团队有独特的项目管理需求。他们需要能够提供结构而不官僚、可见性而不过度开销、协作而不复杂的工具。以下是专为小团队设计的最佳项目管理工具的对比。

## Trello

Trello 的看板方法直观且可视化。卡片代表任务，在代表工作流阶段的列之间移动。对于流程直接的小团队，Trello 的简洁性是其最大的优势。免费套餐支持每个工作空间最多 10 个看板，Butler 自动化功能允许你自动化重复操作。

## Asana

Asana 在简洁性和功能之间取得了出色的平衡。它提供多种视图，包括列表、看板、时间线和日历。工作量功能通过可视化容量来帮助防止团队倦怠。Asana 的模板库为常见用例提供预构建的工作流，节省设置时间。

## Linear

Linear 在软件开发团队中获得了显著的普及。它快速、以键盘驱动，专为敏捷软件开发而设计。界面干净无干扰，具有出色的 GitHub 和 GitLab 集成。Linear 感觉像是由开发者为开发者构建的工具。

## ClickUp

ClickUp 将自己定位为"替代所有工具的一个应用"，在单个平台中结合了项目管理、文档、聊天和目标。对于想要整合工具的小团队，ClickUp 提供了非凡的价值。学习曲线更陡峭，但功能集非常全面。

## Monday.com

Monday.com 提供了一个色彩丰富、高度可定制的平台，适用于各种项目类型。其自动化功能强大，仪表板视图提供清晰的项目可见性。Monday.com 在营销、运营和创意团队方面特别强大。

## Basecamp

Basecamp 采用固定工具集的独断方法：消息板、待办事项列表、文件存储、日程表和群组聊天。这种简洁性意味着更少的时间配置工具，更多的时间做实际工作。Basecamp 无论团队规模如何都提供单一固定价格，使其对成长中的团队来说很经济。

## 选择合适的工具

考虑你团队的工作流复杂性、首选项目管理方法、集成需求和预算。这些工具中的大多数都提供免费试用，所以在做出承诺之前与你的团队一起测试两三个选项。最好的工具是你的团队会真正持续使用的工具。`
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
