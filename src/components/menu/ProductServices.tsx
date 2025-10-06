import { HoverEffect } from "../ui/card-hover-effect";

export function ProductServicesMenu() {
  return (
    <section className="pt-32 pb-32">
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </section>
  );
}
export const projects = [
  {
    title: "⚡ Mechanical Electrical",
    description:
      "We provide design, installation, and maintenance of M&E systems to ensure reliable, long-term building operations.",
    link: "/mechanical-electrical",
  },
  {
    title: "🚚 Logistic & Warehouse",
    description:
      "End-to-end logistics: inventory management, distribution, and fulfillment to optimize your supply chain.",
    link: "/logistic-warehouse",
  },
  {
    title: "🔋 UPS Rework",
    description:
      "UPS repair to restore performance, extend lifespan, and keep systems stable during power outages or fluctuations.",
    link: "/UPS-Rework",
  },
  {
    title: "🛠 Customer Support Engineer",
    description:
      "Our engineers deliver on-site & remote ATM/IT support, ensuring uptime, preventive maintenance, and fast issue resolution.",
    link: "/CustomerSupportEngineer",
  },
  {
    title: "📞 Call Center",
    description:
      "24/7 call center for quick response, ticketing, and issue escalation to keep operations running smoothly.",
    link: "/CallCenter",
  },
  {
    title: "👀 Monitoring",
    description:
      "Real-time monitoring of ATM & IT systems for early issue detection, fast coordination, and reliable recovery.",
    link: "/Monitoring",
  },
  {
    title: "❄️ AC Ducting System",
    description:
      "Supply & installation of central AC systems for large buildings to ensure optimal cool air distribution.",
    link: "/DuctingSystem",
  },
  {
    title: "🖥 Workshop Maintenance LCD",
    description:
      "Repair and refurbish ATM LCD screens for better reliability and longer service life.",
    link: "/WorkshopMaintenanceLCD",
  },
  {
    title: "💵 Cassette Rework",
    description:
      "Professional rework of ATM cash cassettes to restore function, extend use, and cut replacement costs.",
    link: "/CassetteRework",
  },
  {
    title: "🏧 ATM Module Rework",
    description:
      "Quick, high-quality repairs to keep ATM modules reliable and extend their lifespan.",
    link: "/ATMModuleRework",
  },
  {
    title: "🚰 Plumbing",
    description:
      "Efficient, durable plumbing system design and installation for modern building infrastructure since 2020.",
    link: "/Plumbing",
  }
];
