'use client'
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function OurService() {
    return (
        <section id="OurServices">
                <div className="pt-10 max-w-2xl mx-auto text-center mb-5 lg:mb-10 ">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">Our Services</h2>
                    <p className="mt-1 text-gray-600 px-2 ">End-to-end M&E solutions to meet technical building requirements with international standards.</p>
                </div>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-10 lg:py-5 lg:pb-20 mx-auto">
                    {/* Desktop Layout - DirectionAwareHover Cards (hidden on mobile/tablet) */}
                    <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                        {projects.map((project, index) => (
                            <DirectionAwareHover key={index} imageUrl={project.imageUrl}>
                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                                </div>
                            </DirectionAwareHover>
                        ))}
                    </div>

                    {/* Mobile/Tablet Layout - Static Cards (hidden on desktop) */}
                    <div className="lg:hidden grid grid-cols-1 gap-6">
                        {projects.map((project, index) => (
                            <a key={index} className="group relative block rounded-xl focus:outline-hidden" href="#">
                                <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-64 md:h-80 before:absolute before:inset-x-0 before:z-1 before:size-full before:bg-gradient-to-t before:from-gray-900/70">
                                    <img className="size-full absolute top-0 start-0 object-cover" src={project.imageUrl} alt="Service Image" />
                                </div>

                                <div className="absolute top-0 inset-x-0 z-10">
                                    <div className="p-4 flex flex-col h-full sm:p-6">
                                    </div>
                                </div>

                                <div className="absolute bottom-0 inset-x-0 z-10">
                                    <div className="flex flex-col h-full p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-2xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-white/80 text-sm sm:text-base">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    const projects = [
        {
            title: "HVAC Systems",
            imageUrl: "/images/logistic-service1.jpg",
            description:
                "Design and installation of Heating, Ventilation, and Air Conditioning systems for optimal comfort, energy efficiency, and environmental compliance.",

        },
        {
            title: "Electrical Systems",
            imageUrl: "/images/logistic-service2.jpg",
            description:
                "Reliable power distribution, lighting, and backup systems installation to ensure safety and operational continuity for all facilities.",
        },
        {
            title: "Plumbing Integration",
            imageUrl: "/images/logistic-service3.jpg",
            description:
                "Supporting plumbing works within M&E projects to provide complete infrastructure solutions in line with project specifications.",
        },
    ];