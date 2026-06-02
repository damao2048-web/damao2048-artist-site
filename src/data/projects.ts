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
  year: string;
  venue?: string;
  medium: string;
  format: string;
  description: string;
  thumbnail: string;
  imageFit?: "cover" | "contain";
  details?: {
    label: string;
    value: string;
  }[];
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
    description:
      "An installation staged as the remains of a failed research site. Drawing from field research on an abandoned greenhouse, olive cultivation, cloning, health myths, and fictional institutional records, the project places viewers in the position of investigators.",
    images: [
      image("p03-01", "Cycle installation view", "Cycle, 2025, installation view, TURNER GALLERY, Tokyo."),
      image("p03-02", "Cycle installation view", "Cycle, 2025, installation view, TURNER GALLERY, Tokyo."),
      image("p04-01", "Olive Pedestal video object", "Olive Pedestal, 2025, video object, mixed media."),
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
      image("p11-01", "Vice Director Murata movable figure", "Vice Director Murata, 2025, movable figure, mixed media."),
      image("p11-02", "Vice Director Murata performance documentation", "Vice Director Murata, 2025, performance documentation.")
    ]
  },
  {
    slug: "plant-theft-case-file",
    title: "Setouchi Art School / Plant Theft Case File",
    year: "2025",
    venue: "Takamatsu Port, Teshima, Ogijima, Megijima, Naoshima, Kagawa",
    medium: "Artist development program, site research, project plan, installation proposal, fictional archive",
    format: "Program documentation / project plan sheet",
    thumbnail: file("p13-02"),
    details: [
      {
        label: "Organizer",
        value: "Setouchi Triennale Executive Committee"
      },
      {
        label: "Planning / Operation",
        value: "Art Front Gallery Co., Ltd.; NPO Setouchi Koebi Network"
      },
      {
        label: "Lecturers",
        value: "Fram Kitagawa, Erina Matsui, Taisuke Makihara, Motoyuki Shitamichi, Rintaro Hara"
      },
      {
        label: "Role",
        value: "Artist / participant"
      },
      {
        label: "Period",
        value: "June 20-30, 2025"
      }
    ],
    description:
      "This entry records Cai Dongchen's participation in the Setouchi Triennale young artist development program, where lectures, fieldwork, observation, and project planning were developed across several islands in Kagawa. The project plan, Plant Theft Case File, proposes a site-based installation in an old glass house on Seijima, reconstructing a fictional interrupted laboratory for a rare plant through files, observation logs, video, and performance.",
    images: [
      image("p13-02", "Rare plant research sheet", "Plant Theft Case File, 2025, research sheet."),
      image("p13-03", "Plant Theft Case File sketch", "Plant Theft Case File, 2025, sketch."),
      image("p14-01", "Installation plan sketch", "Plant Theft Case File, 2025, installation plan sketch."),
      image("p14-02", "Performance plan sketch", "Plant Theft Case File, 2025, performance plan sketch."),
      image("p14-03", "File table plan sketch", "Plant Theft Case File, 2025, archive table sketch."),
      image("p15-01", "Experiment record file sketch", "Plant Theft Case File, 2025, experiment file sketch."),
      image("p15-02", "Zine and record table sketch", "Plant Theft Case File, 2025, zine / record table sketch."),
      image("p15-03", "Setouchi route research sketch", "Plant Theft Case File, 2025, research route sketch.")
    ]
  },
  {
    slug: "truth-will-out",
    title: "The Truth Will Out",
    year: "2025",
    venue: "Gallery B.Tokyo, Tokyo",
    medium: "Painting, sculpture, installation, mixed media",
    format: "Solo exhibition / installation record",
    thumbnail: file("p17-01"),
    description:
      "A solo exhibition built from concealment, myth, stage scenery, and the cost of seeing. The installation treats truth not as simple exposure, but as a structure that burns through the materials used to cover it.",
    images: [
      image("p17-01", "The Truth Will Out installation view", "The Truth Will Out, 2025, installation view, Gallery B.Tokyo, Tokyo."),
      image("p17-02", "The Truth Will Out installation view", "The Truth Will Out, 2025, installation view, Gallery B.Tokyo, Tokyo."),
      image("p18-01", "The Truth Will Out installation view", "The Truth Will Out, 2025, installation view, Gallery B.Tokyo, Tokyo."),
      image("p19-01", "The Truth Will Out painting view", "The Truth Will Out, 2025, painting / installation view."),
      image("p19-02", "The Truth Will Out painting detail", "The Truth Will Out, 2025, painting detail.")
    ]
  },
  {
    slug: "four-rumors",
    title: "Four Rumors",
    year: "2024-2025",
    venue: "Nihon University College of Art A&D Gallery, Tokyo",
    medium: "Painting, video, installation, research images, fictional texts",
    format: "Graduation exhibition / rumor research series",
    thumbnail: "/images/portfolio/full/four-rumors-cover.jpg",
    description:
      "A group of four works that examine rumor as a narrative device. Silent Ride belongs to this project and is shown here together with Binbo, Green Riverside, and Red Nectar rather than as a separate project.",
    images: [
      image("p20-01", "Four Rumors installation view", "Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."),
      image("p21-01", "Four Rumors installation view", "Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."),
      image("p21-02", "Four Rumors installation view", "Four Rumors, 2025, installation view, Nihon University College of Art A&D Gallery, Tokyo."),
      image("p23-01", "Binbo painting", "Binbo, 2024, oil on canvas, 130 x 160 cm."),
      image("p23-02", "Binbo video still", "Binbo, 2024, video still, 00:00."),
      image("p23-03", "Binbo video still", "Binbo, 2024, video still, 00:30."),
      image("p23-04", "Binbo video still", "Binbo, 2024, video still, 01:00."),
      image("p23-05", "Binbo video still", "Binbo, 2024, video still, 01:30."),
      image("p25-01", "Green Riverside painting", "Green Riverside, 2024, oil on canvas, 160 x 260 cm."),
      image("p27-01", "Silent Ride painting", "Silent Ride, 2024, oil on canvas, 112 x 194 cm."),
      image("p28-01", "Red Nectar installation detail", "Red Nectar, 2024, installation detail."),
      image("p29-01", "Red Nectar exhibition documentation", "Red Nectar, 2024, acrylic, clay, 18 x 194 cm."),
      image("p29-02", "Red Nectar object photograph", "Red Nectar, 2024, object photograph.")
    ]
  },
  {
    slug: "please-dont-ask-my-age",
    title: "Please Don't Ask My Age",
    year: "2024",
    venue: "ChangTing Gallery, Tokyo",
    medium: "Installation, handmade toys, readymade objects, painting, mixed media",
    format: "Two-person exhibition / installation record",
    thumbnail: file("ask-age-cover"),
    description:
      "An exhibition environment built around the question of age, play, and the social framing of toys. The project gathers handmade objects, found materials, and interactive structures into a temporary play archive.",
    images: [
      image("ask-age-01", "Yamanote Line installation detail", "Yamanote Line, 2024, installation detail, ChangTing Gallery, Tokyo."),
      image("ask-age-02", "Yamanote Line installation detail", "Yamanote Line, 2024, installation detail, ChangTing Gallery, Tokyo."),
      image("ask-age-03", "Please Don't Ask My Age installation detail", "Please Don't Ask My Age, 2024, installation detail, ChangTing Gallery, Tokyo."),
      image("ask-age-04", "Please Don't Ask My Age installation detail", "Please Don't Ask My Age, 2024, installation detail, ChangTing Gallery, Tokyo."),
      image("ask-age-05", "Please Don't Ask My Age painting detail", "Please Don't Ask My Age, 2024, painting detail, ChangTing Gallery, Tokyo."),
      image("ask-age-06", "Please Don't Ask My Age painting detail", "Please Don't Ask My Age, 2024, painting detail, ChangTing Gallery, Tokyo."),
      image("ask-age-07", "Please Don't Ask My Age installation detail", "Please Don't Ask My Age, 2024, installation detail, ChangTing Gallery, Tokyo."),
      image("images-to-upload/ask-age-08", "Please Don't Ask My Age handmade object", "Please Don't Ask My Age, 2024, handmade object, object documentation."),
      image("images-to-upload/ask-age-09", "Please Don't Ask My Age handmade clock object", "Please Don't Ask My Age, 2024, handmade clock object, object documentation."),
      image("images-to-upload/ask-age-10", "Please Don't Ask My Age handmade object", "Please Don't Ask My Age, 2024, handmade object, object documentation."),
      image("images-to-upload/ask-age-11", "Please Don't Ask My Age handmade object", "Please Don't Ask My Age, 2024, handmade object, object documentation."),
      image("images-to-upload/ask-age-12", "Please Don't Ask My Age handmade objects", "Please Don't Ask My Age, 2024, handmade objects, object documentation."),
      image("images-to-upload/ask-age-13", "Please Don't Ask My Age handmade objects", "Please Don't Ask My Age, 2024, handmade objects, object documentation."),
      image("images-to-upload/ask-age-14", "Please Don't Ask My Age framed object", "Please Don't Ask My Age, 2024, framed object, object documentation."),
      image("images-to-upload/ask-age-15", "Please Don't Ask My Age installation detail", "Please Don't Ask My Age, 2024, installation detail, ChangTing Gallery, Tokyo."),
      image("images-to-upload/ask-age-16", "Please Don't Ask My Age installation detail", "Please Don't Ask My Age, 2024, installation detail, ChangTing Gallery, Tokyo."),
      image("images-to-upload/ask-age-17", "Please Don't Ask My Age hand-painted ball object", "Please Don't Ask My Age, 2024, hand-painted ball object, object documentation."),
      image("images-to-upload/ask-age-18", "Please Don't Ask My Age handmade dog object", "Please Don't Ask My Age, 2024, handmade dog object, object documentation."),
      image("images-to-upload/ask-age-19", "Please Don't Ask My Age handmade boxes", "Please Don't Ask My Age, 2024, handmade boxes, object documentation."),
      image("images-to-upload/ask-age-20", "Dog's Head painting", "Dog's Head, 2024, painting."),
      image("images-to-upload/ask-age-21", "Please Don't Ask My Age lamp object", "Please Don't Ask My Age, 2024, lamp object, studio documentation."),
      image("images-to-upload/ask-age-22", "Please Don't Ask My Age handmade boxes", "Please Don't Ask My Age, 2024, handmade boxes, object documentation."),
      image("images-to-upload/ask-age-23", "Please Don't Ask My Age handmade boxes", "Please Don't Ask My Age, 2024, handmade boxes, object documentation."),
      image("images-to-upload/ask-age-24", "Please Don't Ask My Age handmade boxes", "Please Don't Ask My Age, 2024, handmade boxes, object documentation."),
      image("images-to-upload/ask-age-25", "Please Don't Ask My Age installation view", "Please Don't Ask My Age, 2024, installation view, ChangTing Gallery, Tokyo.")
    ]
  },
  {
    slug: "schedule-table",
    title: "Schedule Table",
    year: "2023",
    medium: "Found materials, cardboard, used paper, paper clay, board-game structure",
    format: "Installation / board-game proposal",
    thumbnail: file("p38-01"),
    description:
      "A board-game-like installation that compresses one month of life into routes, objects, and time rules. The project asks how schedules judge action and distribute what counts as appropriate.",
    images: [
      image("p38-01", "Schedule Table installation documentation", "Schedule Table, 2023, installation documentation."),
      image("p39-01", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p39-02", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p39-03", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p39-04", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p39-05", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p39-06", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p39-07", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p39-08", "Schedule Table installation detail", "Schedule Table, 2023, installation detail."),
      image("p40-01", "Schedule Table board-game sketch", "Schedule Table, 2023, board-game sketch."),
      image("p41-01", "Schedule Table plan sketch", "Schedule Table, 2023, plan sketch.")
    ]
  },
  {
    slug: "tree-action",
    title: "Tree Action",
    year: "2022",
    venue: "Yantai Seaside Park and Bohai University, China",
    medium: "Action, painting, outdoor installation, documentation",
    format: "Action documentation / outdoor exhibition record",
    thumbnail: file("p43-01"),
    description:
      "An action work in which a portable tree-like object was carried through public space. The project later connects to an outdoor campus exhibition, testing how objects change their status when placed in ordinary public paths.",
    images: [
      image("p43-01", "Tree Action documentation", "Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p43-02", "Tree Action documentation", "Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p44-01", "Tree Action documentation", "Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p44-02", "Tree Action documentation", "Tree Action, 2022, action documentation, Yantai Seaside Park, China."),
      image("p45-01", "Tree Action documentation", "Tree Action, 2022, action documentation, Yantai, China."),
      image("p45-02", "Tree Action documentation", "Tree Action, 2022, action documentation, Yantai, China."),
      image("p46-01", "Outdoor graduation exhibition documentation", "Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p47-01", "Outdoor graduation exhibition documentation", "Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p47-02", "Outdoor graduation exhibition documentation", "Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p48-01", "Outdoor graduation exhibition documentation", "Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p48-02", "Outdoor graduation exhibition documentation", "Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p49-01", "Outdoor graduation exhibition documentation", "Outdoor Graduation Exhibition, 2022, Bohai University, China."),
      image("p49-02", "Outdoor graduation exhibition documentation", "Outdoor Graduation Exhibition, 2022, Bohai University, China.")
    ]
  },
  {
    slug: "distillation-experiment",
    title: "Distillation Experiment",
    year: "2021",
    medium: "Site-specific installation, ceramic clay, water tank, television, wooden table, plants, distillation apparatus",
    format: "Site-specific installation record",
    thumbnail: file("p50-01"),
    description:
      "A site-specific installation made in an attic study space. The distillation apparatus turns bodily repetition, pressure, water, and study time into a calm experimental structure.",
    images: [
      image("p50-01", "Distillation Experiment installation view", "Distillation Experiment, 2021, site-specific installation view."),
      image("p51-01", "Distillation Experiment installation view", "Distillation Experiment, 2021, site-specific installation view."),
      image("p51-02", "Distillation Experiment installation view", "Distillation Experiment, 2021, site-specific installation view."),
      image("p52-01", "Distillation Experiment installation view", "Distillation Experiment, 2021, site-specific installation view."),
      image("p52-02", "Distillation Experiment installation view", "Distillation Experiment, 2021, site-specific installation view."),
      image("p53-01", "Distillation Experiment detail", "Distillation Experiment, 2021, installation detail."),
      image("p53-02", "Distillation Experiment sketch", "Distillation Experiment, 2021, sketch."),
      image("p53-03", "Distillation Experiment sketch", "Distillation Experiment, 2021, sketch.")
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
