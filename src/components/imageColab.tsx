"use client";

import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";


export default function ImageColab() {

    const items = [
        {
            title: "Tyler Durden",
            image:
                "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "absolute top-10 left-[20%] rotate-[-5deg]",
        },
        {
            title: "The Narrator",
            image:
                "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "absolute top-40 left-[25%] rotate-[-7deg]",
        },
        {
            title: "Iceland",
            image:
                "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "absolute top-5 left-[40%] rotate-[8deg]",
        },
        {
            title: "Japan",
            image:
                "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "absolute top-32 left-[55%] rotate-[10deg]",
        },
        {
            title: "Norway",
            image:
                "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "absolute top-20 right-[35%] rotate-[2deg]",
        },
        {
            title: "New Zealand",
            image:
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "absolute top-24 left-[45%] rotate-[-7deg]",
        },
        {
            title: "Canada",
            image:
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "absolute top-8 left-[30%] rotate-[4deg]",
        },
    ];


    return (
        <section id="about" className="bg-white">
            <div className="content-section py-12 sm:py-16 md:py-18 lg:py-20 px-4 sm:px-6 lg:px-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            About Us
                        </h1>
                        <div className="w-24 h-1 bg-brand-600 mx-auto rounded"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-stretch">
                        {/* Image Section */}
                        <div className="relative overflow-hidden rounded-l-lg h-full">
                            <DraggableCardContainer className="relative flex h-full min-h-0 w-full items-center justify-center overflow-clip">
                                
                                {items.map((item) => (
                                    <DraggableCardBody
                                        key={item.title}
                                        className={`${item.className} w-64 min-h-72 p-4 md:w-72 md:min-h-80`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="pointer-events-none relative z-10 h-56 w-56 md:h-64 md:w-64 object-cover"
                                        />
                                        <h3 className="mt-4 text-center text-2xl font-bold text-gray-900">
                                            {item.title}
                                        </h3>
                                    </DraggableCardBody>
                                ))}
                            </DraggableCardContainer>
                        </div>

                        {/* Content Section */}
                        <div className="relative overflow-hidden rounded-l-lg bg-[#FFE0BE] w-full p-8 lg:p-16">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                Our Gallery
                            </h2>

                            <div className="space-y-4">
                                <p className="text-body text-justify leading-relaxed">
                                    Take a closer look at life inside PT Kevin Guna Pratama. Discover moments of teamwork, collaboration, and dedication behind our ATM maintenance and service operations. Every photo captures our commitment to delivering reliable solutions and exceptional service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
