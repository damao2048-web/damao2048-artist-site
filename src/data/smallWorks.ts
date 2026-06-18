import type { ArtworkImage, Project } from "./projects";

const file = (name: string) => `/images/works/small-works/${name}.jpg`;

const image = (name: string, index: number): ArtworkImage => ({
  src: file(name),
  alt: `Small Works documentation ${index + 1}`,
  caption: "Small Works, 2024-2026, object documentation."
});

const imageNames = [
  "small-works-01",
  "small-works-02",
  "small-works-03",
  "small-works-04",
  "small-works-05",
  "small-works-06",
  "small-works-07",
  "small-works-09",
  "small-works-11",
  "small-works-12",
  "small-works-13",
  "small-works-14",
  "small-works-15",
  "small-works-16",
  "small-works-17",
  "small-works-18",
  "small-works-19",
  "small-works-20",
  "small-works-21",
  "small-works-22",
  "small-works-23",
  "small-works-24",
  "small-works-25",
  "small-works-26",
  "small-works-27",
  "small-works-28",
  "small-works-29",
  "small-works-30",
  "small-works-31",
  "small-works-32",
  "small-works-33",
  "small-works-34",
  "small-works-35",
  "small-works-36",
  "small-works-37",
  "small-works-38",
  "small-works-39",
  "small-works-40",
  "small-works-41",
  "small-works-42",
  "small-works-43",
  "small-works-44",
  "small-works-45",
  "small-works-46",
  "small-works-47",
  "small-works-48",
  "small-works-49",
  "small-works-50",
  "small-works-51",
  "small-works-52"
];

export const smallWorksProject: Project = {
  slug: "small-works",
  title: "Small Works",
  year: "2024-2026",
  medium: "Small-scale sculpture, painting, handmade objects, and mixed media",
  format: "Small works archive / object documentation",
  thumbnail: file("small-works-32"),
  description:
    "An archive of small-scale works made between 2024 and 2026, gathering handmade objects, paintings, sculptural studies, and related installation details.",
  images: imageNames.map(image)
};
