export type ArtworkImage = {
  src: string;
  alt: string;
  caption: string;
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
  thumbnail?: string;
  status?: string;
  images: ArtworkImage[];
};

export const projects: Project[] = [
  {
    slug: "cycle",
    title: "Cycle",
    year: "2025",
    venue: "TURNER GALLERY, Tokyo",
    medium: "Painting, sculpture, installation, food event, mixed media",
    format: "Installation / exhibition documentation",
    thumbnail: "/images/works/cycle/cycle-01.jpg",
    description: {
      en: "A fictional cloning laboratory staged through paintings, objects, food, and provisional apparatus. The work considers technological resurrection, body fragments, and the fragile ethics of repetition.",
      ja: "絵画、立体、食事、仮設的な装置によって構成された架空のクローン実験室。技術的な再生、身体の断片、反復の倫理をめぐるインスタレーション。",
      zh: "以绘画、物件、食物和临时装置构成的虚构克隆实验室，讨论技术性复活、身体碎片与重复伦理。"
    },
    images: [
      {
        src: "/images/works/cycle/cycle-01.jpg",
        alt: "Cycle installation view at TURNER GALLERY",
        caption: "Cycle, 2025, installation view, TURNER GALLERY, Tokyo."
      },
      {
        src: "/images/works/cycle/cycle-02.jpg",
        alt: "Cycle installation view with sculptural objects",
        caption: "Cycle, 2025, installation view, TURNER GALLERY, Tokyo."
      },
      {
        src: "/images/works/cycle/cycle-03.jpg",
        alt: "Cycle installation detail",
        caption: "Cycle, 2025, installation detail, mixed media."
      },
      {
        src: "/images/works/cycle/cycle-04.jpg",
        alt: "Cycle experiment board detail",
        caption: "Cycle, 2025, experiment board / detail."
      },
      {
        src: "/images/works/cycle/cycle-05.jpg",
        alt: "Cycle food event documentation",
        caption: "Cycle, 2025, food event / installation documentation."
      },
      {
        src: "/images/works/cycle/cycle-06.jpg",
        alt: "Cycle movable figure documentation",
        caption: "Cycle, 2025, movable figure / food event documentation."
      }
    ]
  },
  {
    slug: "truth-will-out",
    title: "紙で火を包めない / The Truth Will Out",
    year: "2025",
    venue: "GALLERY B. TOKYO, Tokyo",
    medium: "Painting, object, installation, mixed media",
    format: "Installation / painting-object documentation",
    thumbnail: "/images/works/truth-will-out/truth-01.jpg",
    description: {
      en: "A constructed island of rumor, faith, and unstable evidence. The work treats visual truth as something staged, folded, and repeatedly reinterpreted.",
      ja: "噂、信仰、不安定な証拠によって構成された島。視覚的な真実を、演出され、折り畳まれ、反復的に読み替えられるものとして扱う。",
      zh: "由谣言、信仰与不稳定证据构成的岛。作品把视觉真相视为被搭建、折叠并不断重新解释的结构。"
    },
    images: [
      {
        src: "/images/works/truth-will-out/truth-01.jpg",
        alt: "The Truth Will Out installation view",
        caption:
          "紙で火を包めない / The Truth Will Out, 2025, installation view, GALLERY B. TOKYO, Tokyo."
      },
      {
        src: "/images/works/truth-will-out/truth-02.jpg",
        alt: "The Truth Will Out installation view",
        caption:
          "紙で火を包めない / The Truth Will Out, 2025, installation view, GALLERY B. TOKYO, Tokyo."
      },
      {
        src: "/images/works/truth-will-out/truth-03.jpg",
        alt: "The Truth Will Out painting object",
        caption:
          "紙で火を包めない / The Truth Will Out, 2025, painting / object, mixed media."
      },
      {
        src: "/images/works/truth-will-out/truth-04.jpg",
        alt: "The Truth Will Out painting object detail",
        caption:
          "紙で火を包めない / The Truth Will Out, 2025, painting / object detail."
      }
    ]
  },
  {
    slug: "silent-ride",
    title: "Silent Ride",
    year: "2024 / 2025",
    medium: "Oil on canvas, research image, rumor-based narrative",
    format: "Painting / reference structure",
    thumbnail: "/images/works/silent-ride/silent-ride-03.jpg",
    description: {
      en: "A work developed from rumor, animal enhancement, and the temporary suspension of disbelief. The painting is treated as both image and evidence.",
      ja: "噂、動物の改造、信憑性の一時的な停止から展開された作品。絵画をイメージであると同時に証拠として扱う。",
      zh: "由谣言、动物改造与暂时性的信念暂停发展而来。绘画在此既是图像，也是证据。"
    },
    images: [
      {
        src: "/images/works/silent-ride/silent-ride-03.jpg",
        alt: "Silent Ride painting",
        caption: "Silent Ride, 2024, oil on canvas, 194 x 112 cm."
      },
      {
        src: "/images/works/silent-ride/silent-ride-01.jpg",
        alt: "Silent Ride painting and reference",
        caption: "Silent Ride, 2024, painting / reference image."
      },
      {
        src: "/images/works/silent-ride/silent-ride-02.jpg",
        alt: "Silent Ride reference image",
        caption: "Silent Ride, 2024, research image / reference structure."
      }
    ]
  },
  {
    slug: "rumor-studies",
    title: "Rumor Studies / 噂の研究",
    titleZh: "谣言研究",
    year: "2024-2025",
    venue: "Nihon University College of Art A&D Gallery, Tokyo",
    medium: "Painting, video stills, installation, research images",
    format: "Research series / exhibition documentation",
    thumbnail: "/images/works/rumor-studies/rumor-01.jpg",
    description: {
      en: "A group of paintings and documents that follows how a rumor changes shape as it passes through language, image, memory, and cultural distance.",
      ja: "噂が言語、イメージ、記憶、文化的距離を通過するなかで、どのように形を変えるのかを追う絵画と記録のシリーズ。",
      zh: "一组绘画与文档，追踪谣言在语言、图像、记忆和文化距离之间流动时如何改变形态。"
    },
    images: [
      {
        src: "/images/works/rumor-studies/rumor-01.jpg",
        alt: "Four Rumors installation view",
        caption:
          "四つの噂 / Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."
      },
      {
        src: "/images/works/rumor-studies/rumor-02.jpg",
        alt: "Four Rumors installation view",
        caption:
          "四つの噂 / Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."
      },
      {
        src: "/images/works/rumor-studies/rumor-03.jpg",
        alt: "Binbo painting and video stills",
        caption: "貧乏, 2024, painting and video stills."
      },
      {
        src: "/images/works/rumor-studies/rumor-04.jpg",
        alt: "Green Riverside painting and research photo",
        caption: "Green Riverside, 2024, painting and research photo."
      },
      {
        src: "/images/works/rumor-studies/rumor-05.jpg",
        alt: "Red Nectar work documentation",
        caption: "赤い甘露 / Red Nectar, 2024, documentation."
      }
    ]
  },
  {
    slug: "280",
    title: "280",
    year: "2026",
    medium: "Shaped work, painting / object",
    format: "Documentation pending",
    status: "Documentation pending",
    description: {
      en: "A shaped work about hesitation, signal, and the discomfort of answering a phone in public. Images and full captions will be added after documentation is finalized.",
      ja: "ためらい、信号、人前で電話に出ることの居心地の悪さを扱う成形作品。記録写真とキャプションは後日追加予定。",
      zh: "关于迟疑、信号与在公共场合接电话时不适感的造型作品。正式记录照片和 caption 将在之后补充。"
    },
    images: []
  },
  {
    slug: "discarded-objects",
    title: "Discarded Objects / 不要化された物",
    year: "2026-",
    medium: "Site-based research, found objects, installation, fictional documents",
    format: "Ongoing research project",
    status: "Ongoing / images to be added",
    description: {
      en: "An ongoing project around discarded objects, informal circulation, and the narrative lives of things after they are removed from ordinary use.",
      ja: "不要化された物、非公式な流通、日常的な使用から外れた後の物の物語を扱う継続中のプロジェクト。",
      zh: "围绕被废弃之物、非正式流通，以及物品脱离日常用途之后所产生的叙事生命展开的长期项目。"
    },
    images: []
  }
];

export const archiveImages: ArtworkImage[] = [
  {
    src: "/images/works/archive/ask-my-age-01.jpg",
    alt: "Please Don't Ask My Age installation view",
    caption: "年齢を聞かないでください / Please Don't Ask My Age, 2024, installation view."
  },
  {
    src: "/images/works/archive/schedule-table-01.jpg",
    alt: "Schedule Table detail",
    caption: "日程表 / Schedule Table, 2023, installation detail."
  },
  {
    src: "/images/works/archive/schedule-table-02.jpg",
    alt: "Schedule Table exhibition documentation",
    caption: "日程表 / Schedule Table, 2023, exhibition documentation."
  },
  {
    src: "/images/works/archive/tree-action-01.jpg",
    alt: "Tree Action documentation",
    caption: "木 / Tree Action, 2022, action documentation."
  },
  {
    src: "/images/works/archive/distillation-01.jpg",
    alt: "Distillation Experiment installation",
    caption: "蒸留実験 / Distillation Experiment, 2021, installation documentation."
  }
];
