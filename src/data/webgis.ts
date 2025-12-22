// src/data/webgis.ts
import buskitaHome from "/assets/img/webgis/buskita-home.png";
import buskitaMap from "/assets/img/webgis/buskita-map.png";
import buskitaAbout from "/assets/img/webgis/buskita-about.png";
import buskitaContact from "/assets/img/webgis/buskita-contact.png";
import buskitaLogin from "/assets/img/webgis/buskita-login.png";

import geeDashboardMain from "/assets/img/webgis/gee-dashboard-main.png";
import geeDashboardChart from "/assets/img/webgis/gee-dashboard-chart.png";

import bappedaJakartaLanding from "/assets/img/webgis/bappeda-jakarta-landing.png";
import bappedaJakartaRW from "/assets/img/webgis/bappeda-jakarta-rw.png";
import bappedaJakartaAsmas from "/assets/img/webgis/bappeda-jakarta-asmas.png";
import bappedaJakartaKawasan from "/assets/img/webgis/bappeda-jakarta-kawasan.png";

import simolekJabarLanding from "/assets/img/webgis/simolek-jabar-home.png";
import simolekJabarDashboard from "/assets/img/webgis/simolek-jabar-dashboard.png";
import simolekJabarKeuangan from "/assets/img/webgis/simolek-jabar-keuangan.png";
import simolekJabarEvent from "/assets/img/webgis/simolek-jabar-event.png";

import grocksSinarmasMap from "/assets/img/webgis/grocks-map.png";
import grocksSinarmasMapBuffer from "/assets/img/webgis/grocks-map-buffer.png";
import grocksSinarmasDashboard from "/assets/img/webgis/grocks-dashboard.png";
import grocksSinarmasBroadcast from "/assets/img/webgis/grocks-broadcast.png";

import ginaBGNDashboard from "/assets/img/webgis/gina-bgn-dashboard.png";
import ginaBGNMap from "/assets/img/webgis/gina-bgn-map.png";
import ginaBGNSppg from "/assets/img/webgis/gina-bgn-map-asppg.png";
import ginaBGNRouting from "/assets/img/webgis/gina-bgn-map-routing.png";

import simpelKLHKLanding from "/assets/img/webgis/klhk-simpel-landing.png";
import simpelKLHKMap from "/assets/img/webgis/klhk-simpel-map.png";
import simpelKLHKPerusahaan from "/assets/img/webgis/klhk-simpel-map-perusahaan.png";
// import simpelKLHKPerusahaanDetail from "/assets/img/webgis/klhk-simpel-detail-perusahaan.png";
import simpelKLHKDAS from "/assets/img/webgis/klhk-simpel-das.png";
import simpelKLHKDASDetail from "/assets/img/webgis/klhk-simpel-detail-das.png";
import simpelKLHKCatalogue from "/assets/img/webgis/klhk-simpel-map-catalogue.png";



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
    {
      id: "bappeda-jakarta",
      title: "Spasial Bappeda Jakarta",
      ctaLabel: "Explore Spasial Bappeda Jakarta",
      href: "https://spasialbappeda.jakarta.go.id/",
      slides: [
        { src: bappedaJakartaLanding, alt: "Bappeda Jakarta Landing" },
        { src: bappedaJakartaRW, alt: "Bappeda Jakarta RW" },
        { src: bappedaJakartaAsmas, alt: "Bappeda Jakarta Asmas" },
        { src: bappedaJakartaKawasan, alt: "Bappeda Jakarta Kawasan" },
      ],
    },
    {
      id: "simolek-jabar",
      title: "Simolek Jabar",
      ctaLabel: "Explore Simolek Jabar",
      href: "https://simolek.braga.co.id/",
      slides: [
        { src: simolekJabarLanding, alt: "Simolek Jabar Landing" },
        { src: simolekJabarDashboard, alt: "Simolek Jabar Dashboard" },
        { src: simolekJabarKeuangan, alt: "Simolek Jabar Keuangan" },
        { src: simolekJabarEvent, alt: "Simolek Jabar Event" },
      ],
    },
    {
      id: "grocks-sinarmas",
      title: "GROCKS Sinarmas",
      ctaLabel: "Explore GROCKS Sinarmas",
      href: "https://grocks.ugems.id/",
      slides: [
        { src: grocksSinarmasMap, alt: "GROCKS Sinarmas Map" },
        { src: grocksSinarmasMapBuffer, alt: "GROCKS Sinarmas Map Buffer" },
        { src: grocksSinarmasDashboard, alt: "GROCKS Sinarmas Dashboard" },
        { src: grocksSinarmasBroadcast, alt: "GROCKS Sinarmas Broadcast" },
      ],
    },
    {
      id: "gina-bgn",
      title: "GINA BGN",
      ctaLabel: "Explore GINA BGN",
      href: "https://simbg2.geodashboard.io/",
      slides: [
        { src: ginaBGNMap, alt: "GINA BGN Map" },
        { src: ginaBGNDashboard, alt: "GINA BGN Dashboard" },
        { src: ginaBGNSppg, alt: "GINA BGN SPPG" },
        { src: ginaBGNRouting, alt: "GINA BGN Routing" },
      ],
    },
    {
      id: "klhk-simpel",
      title: "KLHK Simpel",
      ctaLabel: "Explore KLHK Simpel",
      href: "https://klh-simpel.geodashboard.io/",
      slides: [
        { src: simpelKLHKLanding, alt: "KLHK Simpel Landing" },
        { src: simpelKLHKMap, alt: "KLHK Simpel Map" },
        { src: simpelKLHKPerusahaan, alt: "KLHK Simpel Perusahaan" },
        { src: simpelKLHKDAS, alt: "KLHK Simpel DAS" },
        { src: simpelKLHKDASDetail, alt: "KLHK Simpel DAS Detail" },
        { src: simpelKLHKCatalogue, alt: "KLHK Simpel Catalogue" },
      ],
    },
  ],
};
