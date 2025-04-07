export interface Artwork {
  id: string;
  title: {
    en: string;
    tc: string;
  };
  artist: {
    en: string;
    tc: string;
  };
  line: string;
  station: string;
  year: number;
  description: {
    en: string;
    tc: string;
  };
  images: string[];
  featured?: boolean;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface Station {
  id: string;
  name: {
    en: string;
    tc: string;
  };
  line: string;
}

export const mtrLines = [
  { id: 'island', name: { en: 'Island Line', tc: '港島線' }, color: '#0860A8' },
  { id: 'tsuenwan', name: { en: 'Tsuen Wan Line', tc: '荃灣線' }, color: '#FF0000' },
  { id: 'kwuntong', name: { en: 'Kwun Tong Line', tc: '觀塘線' }, color: '#00A040' },
  { id: 'tko', name: { en: 'Tseung Kwan O Line', tc: '將軍澳線' }, color: '#7D47BB' },
  { id: 'tungchung', name: { en: 'Tung Chung Line', tc: '東涌線' }, color: '#F4BD19' },
  { id: 'eastrail', name: { en: 'East Rail Line', tc: '東鐵線' }, color: '#5EB6E4' },
  { id: 'southisland', name: { en: 'South Island Line', tc: '南港島線' }, color: '#CBD300' }
];

export const stations: Station[] = [
  { id: 'central', name: { en: 'Central', tc: '中環' }, line: 'island' },
  { id: 'admiralty', name: { en: 'Admiralty', tc: '金鐘' }, line: 'island' },
  { id: 'wanchai', name: { en: 'Wan Chai', tc: '灣仔' }, line: 'island' },
  { id: 'causebay', name: { en: 'Causeway Bay', tc: '銅鑼灣' }, line: 'island' },
  { id: 'mongkok', name: { en: 'Mong Kok', tc: '旺角' }, line: 'kwuntong' },
  { id: 'princeedward', name: { en: 'Prince Edward', tc: '太子' }, line: 'kwuntong' },
  { id: 'tsuenwan', name: { en: 'Tsuen Wan', tc: '荃灣' }, line: 'tsuenwan' },
  { id: 'taikooshing', name: { en: 'Tai Koo Shing', tc: '太古城' }, line: 'island' },
  { id: 'northpoint', name: { en: 'North Point', tc: '北角' }, line: 'island' },
  { id: 'diamondhill', name: { en: 'Diamond Hill', tc: '鑽石山' }, line: 'kwuntong' },
  { id: 'hunghom', name: { en: 'Hung Hom', tc: '紅磡' }, line: 'eastrail' },
  { id: 'tkostation', name: { en: 'Tseung Kwan O', tc: '將軍澳' }, line: 'tko' }
];

export const artworks: Artwork[] = [
  {
    id: 'a1',
    title: {
      en: 'Urban Flow',
      tc: '城市流動'
    },
    artist: {
      en: 'Chen Wei',
      tc: '陳偉'
    },
    line: 'tko',
    station: 'tkostation',
    year: 2018,
    description: {
      en: 'A flowing abstract representation of urban movement and connectivity, reflecting the constant flow of people through Hong Kong\'s busy Central station.',
      tc: '流動的抽象表現，反映香港繁忙的中環站人流不息的特點。'
    },
    images: [
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1518952492547-cf67c011eab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: true,
    isVideo: true,
    videoUrl: 'https://videos.pexels.com/video-files/2314024/2314024-uhd_2560_1440_24fps.mp4'
  },
  {
    id: 'a2',
    title: {
      en: 'Heritage Echoes',
      tc: '傳統回響'
    },
    artist: {
      en: 'Wong Mei Ling',
      tc: '黃美玲'
    },
    line: 'eastrail',
    station: 'hunghom',
    year: 2015,
    description: {
      en: 'A tribute to Hong Kong\'s cultural heritage, featuring traditional patterns and motifs that echo the neighborhood\'s history.',
      tc: '向香港文化傳統致敬，展現了與社區歷史相呼應的傳統圖案和主題。'
    },
    images: [
      'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1598886221321-76431a0be58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1533470192478-9897d90d5461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1518952492547-cf67c011eab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: true
  },
  {
    id: 'a3',
    title: {
      en: 'Celestial Journey',
      tc: '天際旅程'
    },
    artist: {
      en: 'David Chan',
      tc: '陳大衛'
    },
    line: 'island',
    station: 'admiralty',
    year: 2019,
    description: {
      en: 'An immersive ceiling installation representing the journey through space and time, connecting the earthly experience with cosmic wonder.',
      tc: '一個身臨其境的天花板裝置，代表穿越時空的旅程，將世俗體驗與宇宙奇觀連接起來。'
    },
    images: [
      'https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1532978379173-523e16f371f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: true
  },
  {
    id: 'a4',
    title: {
      en: 'Urban Echoes',
      tc: '都市迴響'
    },
    artist: {
      en: 'Sarah Wang',
      tc: '王莎拉'
    },
    line: 'kwuntong',
    station: 'diamondhill',
    year: 2017,
    description: {
      en: 'A mosaic wall depicting the sounds and rhythms of city life, rendered in vibrant colors and patterns.',
      tc: '一面馬賽克牆，以鮮艷的色彩和圖案描繪城市生活的聲音和節奏。'
    },
    images: [
      'https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1542219550-261c312d8e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1542219550-7e465567b89f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1542219550-4da8f2c2d16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ]
  },
  {
    id: 'a5',
    title: {
      en: 'Harbor Reflections',
      tc: '海港倒影'
    },
    artist: {
      en: 'Michael Zhang',
      tc: '張明'
    },
    line: 'southisland',
    station: 'admiralty',
    year: 2020,
    description: {
      en: 'A series of reflective panels that capture and transform the movement of passengers, inspired by the waters of Victoria Harbor.',
      tc: '一系列反光板，捕捉並轉化乘客的動態，靈感來自維多利亞港的水域。'
    },
    images: [
      'https://images.unsplash.com/photo-1620642003457-05bfacf3657f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1518952492547-cf67c011eab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ]
  },
  {
    id: 'a6',
    title: {
      en: 'Urban Light Flow',
      tc: '城市光流'
    },
    artist: {
      en: 'Sarah Chen',
      tc: '陳曉華'
    },
    line: 'tungchung',
    station: 'tsuenwan',
    year: 2022,
    description: {
      en: 'A dynamic installation that captures the rhythm of urban life through flowing light patterns.',
      tc: '一個捕捉城市生活節奏的動態裝置，通過流動的光線圖案展現。'
    },
    images: [
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1534241905326-db1f9eddab1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: true
  },
  {
    id: 'a7',
    title: {
      en: 'Memory Fragments',
      tc: '記憶碎片'
    },
    artist: {
      en: 'Michael Wong',
      tc: '黃志明'
    },
    line: 'island',
    station: 'causebay',
    year: 2021,
    description: {
      en: 'A mosaic of historical photographs that tells the story of Hong Kong\'s railway heritage.',
      tc: '一系列歷史照片的拼貼，講述香港鐵路遺產的故事。'
    },
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: false
  },
  {
    id: 'a8',
    title: {
      en: 'Digital Rain',
      tc: '數字雨'
    },
    artist: {
      en: 'Lisa Zhang',
      tc: '張麗莎'
    },
    line: 'tsuenwan',
    station: 'mongkok',
    year: 2023,
    description: {
      en: 'An interactive digital installation that responds to passenger movement with cascading data patterns.',
      tc: '一個互動式數字裝置，通過瀑布式的數據圖案對乘客移動做出反應。'
    },
    images: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: true
  },
  {
    id: 'a9',
    title: {
      en: 'Nature\'s Echo',
      tc: '自然迴響'
    },
    artist: {
      en: 'David Lee',
      tc: '李志強'
    },
    line: 'kwuntong',
    station: 'princeedward',
    year: 2022,
    description: {
      en: 'A sound installation that brings the sounds of Hong Kong\'s natural landscapes into the urban environment.',
      tc: '一個聲音裝置，將香港自然景觀的聲音帶入城市環境。'
    },
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: false
  },
  {
    id: 'a10',
    title: {
      en: 'Future Visions',
      tc: '未來視野'
    },
    artist: {
      en: 'Emily Tan',
      tc: '譚曉明'
    },
    line: 'island',
    station: 'northpoint',
    year: 2023,
    description: {
      en: 'A series of holographic displays that imagine the future of Hong Kong\'s transportation system.',
      tc: '一系列全息顯示，想像香港交通系統的未來。'
    },
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1',
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80&v=1'
    ],
    featured: true
  }
]; 