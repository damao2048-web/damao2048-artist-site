export type ArtworkImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ArchiveImage = ArtworkImage & {
  slug: string;
  title: string;
  year: string;
  medium: string;
};

export type Project = {
  slug: string;
  title: string;
  titleJa?: string;
  titleZh?: string;
  year: string;
  venue?: string;
  medium: string;
  format: string;
  description: {
    en: string;
    ja: string;
    zh: string;
  };
  thumbnail: string;
  images: ArtworkImage[];
};

const file = (name: string) => `/images/portfolio/full/${name}.jpg`;

const image = (name: string, alt: string, caption: string): ArtworkImage => ({
  src: file(name),
  alt,
  caption
});

export const projects: Project[] = [
  {
    slug: "cycle",
    title: "Cycle",
    year: "2025",
    venue: "TURNER GALLERY, Tokyo",
    medium: "Painting, sculpture, installation, video, food event, mixed media",
    format: "Two-person exhibition / installation record",
    thumbnail: file("p03-01"),
    description: {
      en: "An installation staged as the remains of a failed research site. Drawing from field research on an abandoned greenhouse, olive cultivation, cloning, health myths, and fictional institutional records, the project places viewers in the position of investigators.",
      ja: "放置された温室のリサーチを出発点に、オリーブ、クローン技術、健康神話、架空の研究記録を接続し、失敗した研究現場として展示空間を構成したインスタレーション。",
      zh: "以废弃温室的现场调查为起点，连接橄榄、克隆技术、健康神话与虚构研究档案，把展场组织成一个已经停止运转的研究现场。"
    },
    images: [
      image("p03-01", "Cycle installation view", "Cycle, 2025, installation view, TURNER GALLERY, Tokyo."),
      image("p03-02", "Cycle installation view", "Cycle, 2025, installation view, TURNER GALLERY, Tokyo."),
      image("p04-01", "Olive Pedestal video object", "オリーブの台座 / Olive Pedestal, 2025, video object, mixed media."),
      image("p05-01", "Cycle installation detail", "Cycle, 2025, installation detail, TURNER GALLERY, Tokyo."),
      image("p05-02", "Cycle printed record detail", "Cycle, 2025, printed record / detail."),
      image("p05-03", "Cycle olive object detail", "Cycle, 2025, object detail."),
      image("p07-01", "Cycle laboratory board", "Cycle, 2025, laboratory board and recording stick."),
      image("p07-02", "Cycle board detail", "Cycle, 2025, laboratory board detail."),
      image("p07-03", "Cycle object detail", "Cycle, 2025, object detail."),
      image("p09-01", "Cycle performance documentation", "Cycle, 2025, performance documentation, TURNER GALLERY, Tokyo."),
      image("p09-02", "Cycle performance documentation", "Cycle, 2025, performance documentation, TURNER GALLERY, Tokyo."),
      image("p10-01", "ISOR food event documentation", "ISOR research progress presentation and olive specimen tasting, 2025, food event documentation."),
      image("p10-02", "Olive specimen tasting table", "ISOR research progress presentation and olive specimen tasting, 2025, food event detail."),
      image("p11-01", "Vice Director Murata movable figure", "副所長・村田 / Vice Director Murata, 2025, movable figure, mixed media."),
      image("p11-02", "Vice Director Murata performance documentation", "副所長・村田 / Vice Director Murata, 2025, performance documentation.")
    ]
  },
  {
    slug: "plant-theft-case-file",
    title: "植物盗難事件ファイル / Plant Theft Case File",
    year: "2025",
    venue: "Setouchi Art School, Kagawa",
    medium: "Project plan, site research, installation proposal, fictional archive",
    format: "Research project / plan sheet",
    thumbnail: file("p13-02"),
    description: {
      en: "A proposal for a site-based installation set in an old glass house on Seijima. The work reconstructs a fictional interrupted laboratory for a rare plant and uses files, observation logs, video, and performance to test how institutional evidence is believed.",
      ja: "瀬居島の古いガラス小屋を舞台に、架空の希少植物研究が中断された実験室を再構成するサイトスペシフィック・インスタレーション案。",
      zh: "以瀬居岛旧玻璃小屋为现场，构想一个关于稀有植物克隆研究中断事件的虚构实验室，通过档案、录像和表演制造可信证据。"
    },
    images: [
      image("p13-02", "Rare plant research sheet", "植物盗難事件ファイル / Plant Theft Case File, 2025, research sheet."),
      image("p13-03", "Plant Theft Case File sketch", "植物盗難事件ファイル / Plant Theft Case File, 2025, sketch."),
      image("p14-01", "Installation plan sketch", "植物盗難事件ファイル / Plant Theft Case File, 2025, installation plan sketch."),
      image("p14-02", "Performance plan sketch", "植物盗難事件ファイル / Plant Theft Case File, 2025, performance plan sketch."),
      image("p14-03", "File table plan sketch", "植物盗難事件ファイル / Plant Theft Case File, 2025, archive table sketch."),
      image("p15-01", "Experiment record file sketch", "植物盗難事件ファイル / Plant Theft Case File, 2025, experiment file sketch."),
      image("p15-02", "Zine and record table sketch", "植物盗難事件ファイル / Plant Theft Case File, 2025, zine / record table sketch."),
      image("p15-03", "Setouchi route research sketch", "植物盗難事件ファイル / Plant Theft Case File, 2025, research route sketch.")
    ]
  },
  {
    slug: "truth-will-out",
    title: "紙で火を包めない / The Truth Will Out",
    year: "2025",
    venue: "Gallery B.Tokyo, Tokyo",
    medium: "Painting, sculpture, installation, mixed media",
    format: "Solo exhibition / installation record",
    thumbnail: file("p17-01"),
    description: {
      en: "A solo exhibition built from concealment, myth, stage scenery, and the cost of seeing. The installation treats truth not as simple exposure, but as a structure that burns through the materials used to cover it.",
      ja: "隠蔽、神話、書割、そして「見る」ことの代償から構成された個展。真相を単なる露見ではなく、覆いそのものを焼き破る構造として扱う。",
      zh: "围绕隐藏、神话、布景和“看见”的代价展开的个展。作品把真相视为会烧穿遮蔽物的结构，而不只是简单的揭露。"
    },
    images: [
      image("p17-01", "The Truth Will Out installation view", "紙で火を包めない / The Truth Will Out, 2025, installation view, Gallery B.Tokyo, Tokyo."),
      image("p17-02", "The Truth Will Out installation view", "紙で火を包めない / The Truth Will Out, 2025, installation view, Gallery B.Tokyo, Tokyo."),
      image("p18-01", "The Truth Will Out installation view", "紙で火を包めない / The Truth Will Out, 2025, installation view, Gallery B.Tokyo, Tokyo."),
      image("p19-01", "The Truth Will Out painting view", "紙で火を包めない / The Truth Will Out, 2025, painting / installation view."),
      image("p19-02", "The Truth Will Out painting detail", "紙で火を包めない / The Truth Will Out, 2025, painting detail.")
    ]
  },
  {
    slug: "four-rumors",
    title: "四つの噂 / Four Rumors",
    titleZh: "四个谣言",
    year: "2024-2025",
    venue: "Nihon University College of Art A&D Gallery, Tokyo",
    medium: "Painting, video, installation, research images, fictional texts",
    format: "Graduation exhibition / rumor research series",
    thumbnail: file("p21-01"),
    description: {
      en: "A group of four works that examine rumor as a narrative device. Silent Ride belongs to this project and is shown here together with Binbo, Green Riverside, and Red Nectar rather than as a separate project.",
      ja: "噂を物語装置として扱う四点のシリーズ。Silent Ride は本プロジェクトに含まれるため、貧乏、Green Riverside、赤い甘露とともに記録する。",
      zh: "以四件作品研究谣言作为叙事装置的系列。Silent Ride 属于这个项目，将与《貧乏》、Green Riverside、《赤い甘露》一起归档。"
    },
    images: [
      image("p20-01", "Four Rumors installation view", "四つの噂 / Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."),
      image("p21-01", "Four Rumors installation view", "四つの噂 / Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."),
      image("p21-02", "Four Rumors installation view", "四つの噂 / Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."),
      image("p23-01", "Binbo painting", "貧乏 / Binbo, 2024, oil on canvas, 130 x 160 cm."),
      image("p23-02", "Binbo video still", "貧乏 / Binbo, 2024, video still, 00:00."),
      image("p23-03", "Binbo video still", "貧乏 / Binbo, 2024, video still, 00:30."),
      image("p23-04", "Binbo video still", "貧乏 / Binbo, 2024, video still, 01:00."),
      image("p23-05", "Binbo video still", "貧乏 / Binbo, 2024, video still, 01:30."),
      image("p25-01", "Green Riverside painting", "Green Riverside, 2024, oil on canvas, 160 x 260 cm."),
      image("p27-01", "Silent Ride painting", "Silent Ride, 2024, oil on canvas, 112 x 194 cm."),
      image("p28-01", "Red Nectar installation detail", "赤い甘露 / Red Nectar, 2024, installation detail."),
      image("p29-01", "Red Nectar exhibition documentation", "赤い甘露 / Red Nectar, 2024, acrylic, clay, 18 x 194 cm."),
      image("p29-02", "Red Nectar object photograph", "赤い甘露 / Red Nectar, 2024, object photograph.")
    ]
  },
  {
    slug: "please-dont-ask-my-age",
    title: "年齢を聞かないでください / Please Don't Ask My Age",
    year: "2024",
    venue: "ChangTing Gallery, Tokyo",
    medium: "Installation, handmade toys, readymade objects, painting, mixed media",
    format: "Two-person exhibition / installation record",
    thumbnail: file("p31-01"),
    description: {
      en: "An exhibition environment built around the question of age, play, and the social framing of toys. The project gathers handmade objects, found materials, and interactive structures into a temporary play archive.",
      ja: "年齢、遊び、おもちゃをめぐる社会的な枠組みを問い、手製の物件、拾得物、遊べる構造を一時的な遊びのアーカイブとして構成した展示。",
      zh: "围绕年龄、玩具和游戏被社会规训的方式展开的展览，把自制物、拾得材料和可互动结构整理成一个临时的游戏档案。"
    },
    images: [
      image("p30-01", "Please Don't Ask My Age installation view", "年齢を聞かないでください / Please Don't Ask My Age, 2024, installation view, ChangTing Gallery, Tokyo."),
      image("p31-01", "Please Don't Ask My Age installation view", "年齢を聞かないでください / Please Don't Ask My Age, 2024, installation view, ChangTing Gallery, Tokyo."),
      image("p31-02", "Please Don't Ask My Age installation view", "年齢を聞かないでください / Please Don't Ask My Age, 2024, installation view, ChangTing Gallery, Tokyo."),
      image("p32-01", "Yamanote Line installation", "山手線 / Yamanote Line, 2024, installation / board-game structure."),
      image("p33-01", "Yamanote Line detail", "山手線 / Yamanote Line, 2024, installation detail."),
      image("p33-02", "Yamanote Line detail", "山手線 / Yamanote Line, 2024, installation detail."),
      image("p34-01", "Toy shelf installation", "Please Don't Ask My Age, 2024, toy shelf / installation detail."),
      image("p34-02", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-01", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-02", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-03", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-04", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-05", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-06", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-07", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p35-08", "Handmade toy object", "Please Don't Ask My Age, 2024, handmade toy object."),
      image("p36-01", "Ojigi installation", "お辞儀 / Ojigi, 2024, acrylic, music stands."),
      image("p37-01", "Ojigi installation view", "お辞儀 / Ojigi, 2024, installation view."),
      image("p37-02", "Ojigi installation view", "お辞儀 / Ojigi, 2024, installation view.")
    ]
  },
  {
    slug: "schedule-table",
    title: "日程表 / Schedule Table",
    year: "2023",
    medium: "Found materials, cardboard, used paper, paper clay, board-game structure",
    format: "Installation / board-game proposal",
    thumbnail: file("p38-01"),
    description: {
      en: "A board-game-like installation that compresses one month of life into routes, objects, and time rules. The project asks how schedules judge action and distribute what counts as appropriate.",
      ja: "一か月の生活をルート、道具、時間ルールへ圧縮したボードゲーム状のインスタレーション。日程が行動を判定し、制限する仕組みを扱う。",
      zh: "把一个月的生活压缩成路线、道具和时间规则的桌游式装置，讨论日程如何判断、分配并限制行动。"
    },
    images: [
      image("p38-01", "Schedule Table installation documentation", "日程表 / Schedule Table, 2023, installation documentation."),
      image("p39-01", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p39-02", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p39-03", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p39-04", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p39-05", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p39-06", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p39-07", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p39-08", "Schedule Table installation detail", "日程表 / Schedule Table, 2023, installation detail."),
      image("p40-01", "Schedule Table board-game sketch", "日程表 / Schedule Table, 2023, board-game sketch."),
      image("p41-01", "Schedule Table plan sketch", "日程表 / Schedule Table, 2023, plan sketch.")
    ]
  },
  {
    slug: "tree-action",
    title: "木 / Tree Action",
    year: "2022",
    venue: "Yantai Seaside Park and Bohai University, China",
    medium: "Action, painting, outdoor installation, documentation",
    format: "Action documentation / outdoor exhibition record",
    thumbnail: file("p43-01"),
    description: {
      en: "An action work in which a portable tree-like object was carried through public space. The project later connects to an outdoor campus exhibition, testing how objects change their status when placed in ordinary public paths.",
      ja: "持ち運べる木のような物体を公共空間に持ち込み、場所によって見え方が変化する条件を記録したアクション。校内野外展の経験とも接続される。",
      zh: "将一个可搬运的“树”带入公共空间并记录其被观看方式变化的行动作品，也延伸到校内野外展示中关于作品和公共路径关系的实验。"
    },
    images: [
      image("p43-01", "Tree Action documentation", "木 / Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p43-02", "Tree Action documentation", "木 / Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p44-01", "Tree Action documentation", "木 / Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p44-02", "Tree Action documentation", "木 / Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p45-01", "Tree Action documentation", "木 / Tree Action, 2022, action documentation, Yantai, China."),
      image("p45-02", "Tree Action documentation", "木 / Tree Action, 2022, action documentation, Yantai, China."),
      image("p46-01", "Outdoor graduation exhibition documentation", "卒制・校内野外展 / Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p47-01", "Outdoor graduation exhibition documentation", "卒制・校内野外展 / Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p47-02", "Outdoor graduation exhibition documentation", "卒制・校内野外展 / Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p48-01", "Outdoor graduation exhibition documentation", "卒制・校内野外展 / Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p48-02", "Outdoor graduation exhibition documentation", "卒制・校内野外展 / Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p49-01", "Outdoor graduation exhibition documentation", "卒制・校内野外展 / Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p49-02", "Outdoor graduation exhibition documentation", "卒制・校内野外展 / Outdoor Graduation Exhibition, 2022, Bohai University, China.")
    ]
  },
  {
    slug: "distillation-experiment",
    title: "蒸留実験 / Distillation Experiment",
    year: "2021",
    medium: "Site-specific installation, ceramic clay, water tank, television, wooden table, plants, distillation apparatus",
    format: "Site-specific installation record",
    thumbnail: file("p50-01"),
    description: {
      en: "A site-specific installation made in an attic study space. The distillation apparatus turns bodily repetition, pressure, water, and study time into a calm experimental structure.",
      ja: "校舎の屋根裏にある自習スペースで制作・展示したサイトスペシフィック・インスタレーション。身体の反復、水、緊張、滞在時間を蒸留装置の形式に置き換える。",
      zh: "在校舍阁楼自习空间中制作和展示的场地特定装置，把身体的反复、水、压力和学习时间转化为蒸馏实验般的结构。"
    },
    images: [
      image("p50-01", "Distillation Experiment installation view", "蒸留実験 / Distillation Experiment, 2021, site-specific installation view."),
      image("p51-01", "Distillation Experiment installation view", "蒸留実験 / Distillation Experiment, 2021, site-specific installation view."),
      image("p51-02", "Distillation Experiment installation view", "蒸留実験 / Distillation Experiment, 2021, site-specific installation view."),
      image("p52-01", "Distillation Experiment installation view", "蒸留実験 / Distillation Experiment, 2021, site-specific installation view."),
      image("p52-02", "Distillation Experiment installation view", "蒸留実験 / Distillation Experiment, 2021, site-specific installation view."),
      image("p53-01", "Distillation Experiment detail", "蒸留実験 / Distillation Experiment, 2021, installation detail."),
      image("p53-02", "Distillation Experiment sketch", "蒸留実験 / Distillation Experiment, 2021, sketch."),
      image("p53-03", "Distillation Experiment sketch", "蒸留実験 / Distillation Experiment, 2021, sketch.")
    ]
  }
];

export const archiveImages: ArchiveImage[] = projects
  .slice(4)
  .flatMap((project) =>
    project.images.slice(0, 2).map((artwork, index) => ({
      ...artwork,
      slug: `${project.slug}-${index + 1}`,
      title: project.title,
      year: project.year,
      medium: project.medium
    }))
  );
