export type PortfolioCategory = "college" | "professional";

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  subtitle: string;
  image: string; // public url resolved by BASE_URL
};

const BASE = import.meta.env.BASE_URL; 

export const portfolioItems: PortfolioItem[] = [
  // College (32)
  {
    id: "c1",
    category: "college",
    title: "College Project 1",
    subtitle: "Tsunami Danger in Pangandaran",
    image: `${BASE}assets/img/portfolio/2022 Pangandaran Region Map of.png`,
  },
  {
    id: "c2",
    category: "college",
    title: "College Project 2",
    subtitle: "Elevation in Tidore Island",
    image: `${BASE}assets/img/portfolio/2022 Tidore Island Map of.png`,
  },
  {
    id: "c3",
    category: "college",
    title: "College Project 3",
    subtitle: "Population Density in Bandung City",
    image: `${BASE}assets/img/portfolio/Choloropeth Population.png`,
  },
  {
    id: "c4",
    category: "college",
    title: "College Project 4",
    subtitle: "Dot Density Population in Bandung City",
    image: `${BASE}assets/img/portfolio/Dot Density Population v.2.png`,
  },
  {
    id: "c5",
    category: "college",
    title: "College Project 5",
    subtitle: "Fertility in Malang",
    image: `${BASE}assets/img/portfolio/Fertility Malang.png`,
  },
  {
    id: "c6",
    category: "college",
    title: "College Project 6",
    subtitle: "Morbidity in Malang",
    image: `${BASE}assets/img/portfolio/Morbidity Malang.png`,
  },
  {
    id: "c7",
    category: "college",
    title: "College Project 7",
    subtitle: "Land Value in Bojongsoang",
    image: `${BASE}assets/img/portfolio/Land Value.jpg`,
  },
  {
    id: "c8",
    category: "college",
    title: "College Project 8",
    subtitle: "Minimarket Location Suitability in Depok",
    image: `${BASE}assets/img/portfolio/New Minimarket Location Suitability.png`,
  },
  {
    id: "c9",
    category: "college",
    title: "College Project 9",
    subtitle: "Drought Resistance in Bogor",
    image: `${BASE}assets/img/portfolio/PETA KERENTANAN KEKERINGAN.png`,
  },
  {
    id: "c10",
    category: "college",
    title: "College Project 10",
    subtitle: "Land Surface Temperature in West Java",
    image: `${BASE}assets/img/portfolio/Peta Rata-Rata Suhu Permukaan Jawa Barat.png`,
  },
  {
    id: "c11",
    category: "college",
    title: "College Project 11",
    subtitle: "ZPPI in NTT",
    image: `${BASE}assets/img/portfolio/Peta Zona Perairan NTT.png`,
  },
  {
    id: "c12",
    category: "college",
    title: "College Project 12",
    subtitle: "Precipitation Map in Tasikmalaya",
    image: `${BASE}assets/img/portfolio/Peta Curah Hujan Kabupaten Tasikmalaya.png`,
  },
  {
    id: "c13",
    category: "college",
    title: "College Project 13",
    subtitle: "Rice Field in West Java",
    image: `${BASE}assets/img/portfolio/Peta GKG Jabar 2018.png`,
  },
  {
    id: "c14",
    category: "college",
    title: "College Project 14",
    subtitle: "Health Facility in West Java",
    image: `${BASE}assets/img/portfolio/Peta Jumlah Fasilitas Kesehatan.png`,
  },
  {
    id: "c15",
    category: "college",
    title: "College Project 15",
    subtitle: "Total Population in West Java",
    image: `${BASE}assets/img/portfolio/Peta Jumlah Penduduk.png`,
  },
  {
    id: "c16",
    category: "college",
    title: "College Project 16",
    subtitle: "Health Officer in West Java",
    image: `${BASE}assets/img/portfolio/Peta Jumlah Tenaga Kesehatan.png`,
  },
  {
    id: "c17",
    category: "college",
    title: "College Project 17",
    subtitle: "Population Density in West Java",
    image: `${BASE}assets/img/portfolio/Peta Kepadatan Penduduk.png`,
  },
  {
    id: "c18",
    category: "college",
    title: "College Project 18",
    subtitle: "Critical Land in West Java",
    image: `${BASE}assets/img/portfolio/Peta Lahan Kritis.png`,
  },
  {
    id: "c19",
    category: "college",
    title: "College Project 19",
    subtitle: "Landform in Babakanmadang",
    image: `${BASE}assets/img/portfolio/Peta Bentuk Lahan [rev].png`,
  },
  {
    id: "c20",
    category: "college",
    title: "College Project 20",
    subtitle: "Geological in Babakanmadang",
    image: `${BASE}assets/img/portfolio/Peta Geologi [rev].png`,
  },
  {
    id: "c21",
    category: "college",
    title: "College Project 21",
    subtitle: "Groundwater Potential in Babakanmadang",
    image: `${BASE}assets/img/portfolio/Peta Potensi Air Tanah [rev].png`,
  },
  {
    id: "c22",
    category: "college",
    title: "College Project 22",
    subtitle: "Criminality Type in Bandung City",
    image: `${BASE}assets/img/portfolio/Peta Jenis Kriminalitas di Kota Bandung.png`,
  },
  {
    id: "c23",
    category: "college",
    title: "College Project 23",
    subtitle: "Criminality Resistance in Bandung City",
    image: `${BASE}assets/img/portfolio/Peta Tingkat Kerawanan Kriminalitas di Kota Bandung.png`,
  },
  {
    id: "c24",
    category: "college",
    title: "College Project 24",
    subtitle: "Total Criminality in Bandung City",
    image: `${BASE}assets/img/portfolio/Peta Jumlah Kriminalitas di Kota Bandung.png`,
  },
  {
    id: "c25",
    category: "college",
    title: "College Project 25",
    subtitle: "Land Surface Temperature in Manggarai",
    image: `${BASE}assets/img/portfolio/Peta Suhu Permukaan Darat Kabupaten Manggarai Barat 2022.png`,
  },
  {
    id: "c26",
    category: "college",
    title: "College Project 26",
    subtitle: "Vegetation Health Change in Cisarua",
    image: `${BASE}assets/img/portfolio/Peta Perubahan Tingkat Kehijauan Vegetasi Kecamatan Cisarua Tahun 2017 dan 2022.png`,
  },
  {
    id: "c27",
    category: "college",
    title: "College Project 27",
    subtitle: "City structure of Pontianak",
    image: `${BASE}assets/img/portfolio/Peta Struktur Ruang Kota Pontianak 2022.png`,
  },
  {
    id: "c28",
    category: "college",
    title: "College Project 28",
    subtitle: "Coffee Land Suitability in Cisarua",
    image: `${BASE}assets/img/portfolio/Peta Kesesuaian Lahan Perkebunan Kopi Robusta di Kecamatan Cisarua.png`,
  },
  {
    id: "c29",
    category: "college",
    title: "College Project 29",
    subtitle: "Ortophoto in UPI",
    image: `${BASE}assets/img/portfolio/Peta Ortophoto Rev1.jpg`,
  },
  {
    id: "c30",
    category: "college",
    title: "College Project 30",
    subtitle: "Detail Situation in UPI",
    image: `${BASE}assets/img/portfolio/Peta Detail Situasi [rev].png`,
  },
  {
    id: "c31",
    category: "college",
    title: "College Project 31",
    subtitle: "Mangrove Change Detection in Sinjai",
    image: `${BASE}assets/img/portfolio/Peta Perubahan Kehijauan Mangrove (NDVI)  Kabupaten Sinjai Tahun 2016 dan 2020.png`,
  },
  {
    id: "c32",
    category: "college",
    title: "College Project 32",
    subtitle: "Land Use in Bandung City",
    image: `${BASE}assets/img/portfolio/Peta Penggunaan Lahan Kota Bandung.png`,
  },

  // Professional (7)
  {
    id: "p1",
    category: "professional",
    title: "Professional Experience 1",
    subtitle: "Intern as RDTR Drafter",
    image: `${BASE}assets/img/portfolio/portfolio-inspiring.png`,
  },
  {
    id: "p2",
    category: "professional",
    title: "Professional Experience 2",
    subtitle: "GIS Basic Training Tutor (Educational Administration)",
    image: `${BASE}assets/img/portfolio/portfolio-gis-instructor-education-administration.png`,
  },
  {
    id: "p3",
    category: "professional",
    title: "Professional Experience 3",
    subtitle: "GIS Instructor SKKNI Level 4 Training",
    image: `${BASE}assets/img/portfolio/portfolio-gis-instructor-school.png`,
  },
  {
    id: "p4",
    category: "professional",
    title: "Professional Experience 4",
    subtitle: "Tasikmalaya No Poverty Project",
    image: `${BASE}assets/img/portfolio/portfolio-no-poverty.png`,
  },
  {
    id: "p5",
    category: "professional",
    title: "Professional Experience 5",
    subtitle: "Web Development Training (HTML/CSS)",
    image: `${BASE}assets/img/portfolio/portfolio-web-instructor-html.png`,
  },
  {
    id: "p6",
    category: "professional",
    title: "Professional Experience 6",
    subtitle: "Making Buskita WebGIS at Bogor City",
    image: `${BASE}assets/img/portfolio/portfolio-buskita-webgis.png`,
  },
  {
    id: "p7",
    category: "professional",
    title: "Professional Experience 7",
    subtitle: "Making IMAGIS WebGIS",
    image: `${BASE}assets/img/portfolio/portfolio-imagis-webgis.png`,
  },
];

export const typedRoles = ["GIS Developer", "GIS Analyst", "Web Developer", "Cartographer"];
