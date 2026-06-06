// Cover image generator - creates unique SVG illustrations per category
// Returns a data URI string usable as <img src={...}>

const CATEGORY_THEMES: Record<string, { colors: string[][]; icon: string; label: string }> = {
  'Productivity Tools': {
    colors: [
      ['#4f46e5', '#818cf8', '#312e81'],
      ['#7c3aed', '#a78bfa', '#4c1d95'],
      ['#2563eb', '#60a5fa', '#1e3a5f'],
      ['#0891b2', '#67e8f9', '#164e63'],
    ],
    icon: 'clipboard',
    label: 'Productivity',
  },
  '生产力工具': {
    colors: [
      ['#4f46e5', '#818cf8', '#312e81'],
      ['#7c3aed', '#a78bfa', '#4c1d95'],
      ['#2563eb', '#60a5fa', '#1e3a5f'],
      ['#0891b2', '#67e8f9', '#164e63'],
    ],
    icon: 'clipboard',
    label: '效率',
  },
  'Technology Trends': {
    colors: [
      ['#059669', '#6ee7b7', '#064e3b'],
      ['#0d9488', '#5eead4', '#134e4a'],
      ['#16a34a', '#86efac', '#14532d'],
      ['#65a30d', '#bef264', '#365314'],
    ],
    icon: 'circuit',
    label: 'Tech',
  },
  '科技趋势': {
    colors: [
      ['#059669', '#6ee7b7', '#064e3b'],
      ['#0d9488', '#5eead4', '#134e4a'],
      ['#16a34a', '#86efac', '#14532d'],
      ['#65a30d', '#bef264', '#365314'],
    ],
    icon: 'circuit',
    label: '科技',
  },
  'Software Tips': {
    colors: [
      ['#ea580c', '#fdba74', '#7c2d12'],
      ['#dc2626', '#fca5a5', '#7f1d1d'],
      ['#d97706', '#fcd34d', '#78350f'],
      ['#e11d48', '#fda4af', '#881337'],
    ],
    icon: 'code',
    label: 'Tips',
  },
  '软件技巧': {
    colors: [
      ['#ea580c', '#fdba74', '#7c2d12'],
      ['#dc2626', '#fca5a5', '#7f1d1d'],
      ['#d97706', '#fcd34d', '#78350f'],
      ['#e11d48', '#fda4af', '#881337'],
    ],
    icon: 'code',
    label: '技巧',
  },
  'Remote Work': {
    colors: [
      ['#9333ea', '#d8b4fe', '#581c87'],
      ['#c026d3', '#f0abfc', '#701a75'],
      ['#7c3aed', '#c4b5fd', '#4c1d95'],
      ['#db2777', '#f9a8d4', '#831843'],
    ],
    icon: 'globe',
    label: 'Remote',
  },
  '远程办公': {
    colors: [
      ['#9333ea', '#d8b4fe', '#581c87'],
      ['#c026d3', '#f0abfc', '#701a75'],
      ['#7c3aed', '#c4b5fd', '#4c1d95'],
      ['#db2777', '#f9a8d4', '#831843'],
    ],
    icon: 'globe',
    label: '远程',
  },
};

// Decorative dot patterns
function dotPattern(color: string, seed: number): string {
  const dots: string[] = [];
  const positions = [
    [40, 30], [320, 25], [60, 160], [340, 170],
    [200, 20], [100, 180], [280, 165], [180, 175],
    [50, 90], [350, 85], [130, 25], [260, 170],
  ];
  for (let i = 0; i < 6; i++) {
    const idx = (i + seed) % positions.length;
    const [cx, cy] = positions[idx];
    const r = 2 + (i % 3);
    dots.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="0.15"/>`);
  }
  return dots.join('');
}

function getIcon(type: string, color: string): string {
  switch (type) {
    case 'clipboard':
      return `<g transform="translate(150, 50)">
        <rect x="0" y="0" width="100" height="120" rx="10" fill="none" stroke="${color}" stroke-width="3" opacity="0.4"/>
        <rect x="25" y="-8" width="50" height="16" rx="8" fill="${color}" opacity="0.3"/>
        <line x1="20" y1="35" x2="80" y2="35" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <line x1="20" y1="55" x2="70" y2="55" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <line x1="20" y1="75" x2="75" y2="75" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <line x1="20" y1="95" x2="55" y2="95" stroke="${color}" stroke-width="2" opacity="0.3"/>
      </g>`;
    case 'circuit':
      return `<g transform="translate(130, 40)">
        <circle cx="70" cy="70" r="35" fill="none" stroke="${color}" stroke-width="3" opacity="0.35"/>
        <circle cx="70" cy="70" r="12" fill="${color}" opacity="0.2"/>
        <line x1="0" y1="70" x2="35" y2="70" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <line x1="105" y1="70" x2="140" y2="70" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <line x1="70" y1="0" x2="70" y2="35" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <line x1="70" y1="105" x2="70" y2="140" stroke="${color}" stroke-width="2" opacity="0.3"/>
        <circle cx="0" cy="70" r="5" fill="${color}" opacity="0.3"/>
        <circle cx="140" cy="70" r="5" fill="${color}" opacity="0.3"/>
        <circle cx="70" cy="0" r="5" fill="${color}" opacity="0.3"/>
        <circle cx="70" cy="140" r="5" fill="${color}" opacity="0.3"/>
        <line x1="25" y1="25" x2="45" y2="45" stroke="${color}" stroke-width="2" opacity="0.2"/>
        <line x1="95" y1="95" x2="115" y2="115" stroke="${color}" stroke-width="2" opacity="0.2"/>
      </g>`;
    case 'code':
      return `<g transform="translate(120, 45)">
        <rect x="0" y="0" width="160" height="120" rx="12" fill="none" stroke="${color}" stroke-width="3" opacity="0.35"/>
        <line x1="0" y1="25" x2="160" y2="25" stroke="${color}" stroke-width="1.5" opacity="0.2"/>
        <circle cx="15" cy="12" r="4" fill="#ef4444" opacity="0.5"/>
        <circle cx="30" cy="12" r="4" fill="#eab308" opacity="0.5"/>
        <circle cx="45" cy="12" r="4" fill="#22c55e" opacity="0.5"/>
        <text x="25" y="60" font-family="monospace" font-size="18" fill="${color}" opacity="0.35">&lt;/&gt;</text>
        <line x1="25" y1="75" x2="90" y2="75" stroke="${color}" stroke-width="2" opacity="0.2"/>
        <line x1="25" y1="90" x2="70" y2="90" stroke="${color}" stroke-width="2" opacity="0.2"/>
        <line x1="25" y1="105" x2="100" y2="105" stroke="${color}" stroke-width="2" opacity="0.2"/>
      </g>`;
    case 'globe':
      return `<g transform="translate(140, 35)">
        <circle cx="60" cy="75" r="50" fill="none" stroke="${color}" stroke-width="3" opacity="0.35"/>
        <ellipse cx="60" cy="75" rx="25" ry="50" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.2"/>
        <line x1="10" y1="55" x2="110" y2="55" stroke="${color}" stroke-width="1.5" opacity="0.2"/>
        <line x1="10" y1="95" x2="110" y2="95" stroke="${color}" stroke-width="1.5" opacity="0.2"/>
        <line x1="60" y1="25" x2="60" y2="125" stroke="${color}" stroke-width="1.5" opacity="0.15"/>
        <circle cx="60" cy="75" r="8" fill="${color}" opacity="0.15"/>
      </g>`;
    default:
      return '';
  }
}

export function getCoverImage(category: string, articleIndex: number): string {
  const theme = CATEGORY_THEMES[category] || CATEGORY_THEMES['Technology Trends'];
  const colorIdx = articleIndex % theme.colors.length;
  const [primary, secondary, dark] = theme.colors[colorIdx];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${primary}"/>
        <stop offset="50%" stop-color="${dark}"/>
        <stop offset="100%" stop-color="${primary}" stop-opacity="0.8"/>
      </linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#bg)"/>
    ${dotPattern(secondary, articleIndex)}
    ${getIcon(theme.icon, secondary)}
    <text x="200" y="185" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="white" opacity="0.5" font-weight="600">${theme.label.toUpperCase()}</text>
  </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
