// src/data/about.ts
export type AboutItem = { label: string; value: string };

export const aboutData = {
  title: "About",
  intro: [
    "I am a graduate of Universitas Pendidikan Indonesia with a degree in Geographic Information Science.",
    "I am deeply passionate about Fullstack Development, Software Engineering, Geographic Information Systems (GIS), Remote Sensing, and Web Development.",
    "My professional experience spans across the geospatial and data domains, including instructional roles at PT. Tata Tuna Spectra (Logis Map), PT. Insight Spatial Solution, and PT. Geo Apps Indonesia (Geosoftware.id).",
    "Currently, I work as a GIS Software Engineer at Braga Technologies, while also freelancing as a GIS Software Instructor at PT. Tata Tuna Spectra.",
    "I actively pursue skill development in GIS, full-stack web development, and software engineering—driven by a personal principle of “endless learning.” I thrive on exploring new technologies, refining existing skills, and collaborating with others to create meaningful learning experiences.",
    ],
  profileImage: {
    src: "assets/img/rifqi-profile.jpg",
    alt: "Rifqi Profile",
  },
  left: [
    { label: "Birth", value: "2002" },
    { label: "Motto", value: "Be the BEST version of yourself!" },
    { label: "Hobby", value: "Playing music, Learn languange, coding" },
    { label: "Age", value: "23" },
  ] as AboutItem[],
  right: [
    { label: "Tel", value: "+6281911075017" },
    { label: "Email", value: "rifqinaufalfayyadh@gmail.com" },
    { label: "City", value: "South Jakarta , DKI Jakarta" },
    { label: "Freelance", value: "Available" },
  ] as AboutItem[],
};
