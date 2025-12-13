import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import AnimateIn from "../components/AnimateIn";
import Lightbox from "../components/Lightbox";
import { useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="p-16 text-center">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 text-white">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-200">{project.location}</p>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <Detail label="Location" value={project.location} />
            <Detail label="Category" value={project.category} />
            <Detail label="Scope" value="Engineering Design & Drawings" />
          </div>
        </AnimateIn>
        <AnimateIn>
          <div>
            <h2 className="text-3xl font-bold mb-4">Project Scope</h2>
            <p className="text-gray-700 leading-relaxed">{project.scope}</p>
            {/* PHOTO COLLAGE */}
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images?.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="relative overflow-hidden rounded-xl focus:outline-none"
                  >
                    <img
                      src={img}
                      alt={`${project.title} image ${index + 2}`}
                      className="
            w-full
            h-48 sm:h-56 md:h-64
            object-cover
            transition-transform duration-300
            hover:scale-105
          "
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Have a Similar Project?</h2>
        <p className="text-gray-600 mb-8">
          Contact Us to discuss your requirements.
        </p>
        <a
          href="/contact"
          className="bg-primary text-white px-8 py-4 rounded font-semibold"
        >
          Contact Us
        </a>
      </section>
      {selectedImage && (
        <Lightbox
          src={selectedImage}
          alt={project.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
