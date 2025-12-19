// src/data/webgis.ts
import buskitaHome from "/assets/img/webgis/buskita-home.png";
import buskitaMap from "/assets/img/webgis/buskita-map.png";
import buskitaAbout from "/assets/img/webgis/buskita-about.png";
import buskitaContact from "/assets/img/webgis/buskita-contact.png";
import buskitaLogin from "/assets/img/webgis/buskita-login.png";

import geeDashboardMain from "/assets/img/webgis/gee-dashboard-main.png";
import geeDashboardChart from "/assets/img/webgis/gee-dashboard-chart.png";



export type WebgisSlide = {
  src: string;
  alt: string;
};

export type WebgisProject = {
  id: string;
  title: string;
  subtitle?: string;
  ctaLabel: string;
  href: string;
  slides: WebgisSlide[];
};

export type WebgisSectionData = {
  heading: {
    title: string;
    description: string;
  };
  projects: WebgisProject[];
};

export const webgisData: WebgisSectionData = {
  heading: {
    title: "WebGIS",
    description: `These are webgis that I made, Click to Explore!`,
  },
  projects: [
    {
      id: "buskita",
      title: "Buskita WebGIS",
      ctaLabel: "Explore Buskita WebGIS",
      href: "https://rifqi22-buskita.netlify.app/",
      slides: [
        { src: buskitaHome, alt: "Buskita Home" },
        { src: buskitaMap, alt: "Buskita Map" },
        { src: buskitaAbout, alt: "Buskita About" },
        { src: buskitaContact, alt: "Buskita Contact" },
        { src: buskitaLogin, alt: "Buskita Login" },
      ],
    },
    {
      id: "gee-dashboard",
      title: "GEE Dashboard",
      ctaLabel: "Explore GEE Dashboard",
      href: "https://gee-dashboard-ten.vercel.app/",
      slides: [
        { src: geeDashboardMain, alt: "GEE Dashboard Main" },
        { src: geeDashboardChart, alt: "GEE Dashboard Chart" },
      ],
    },
  ],
};
