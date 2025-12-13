import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import AnimateIn from "../components/AnimateIn";

export default function Projects() {
  return (
    <div className="p-8 grid md:grid-cols-2 gap-6">
      {projects.map((p, index) => (
        <AnimateIn key={p.id} delay={index * 0.08}>
          <Link
            to={`/projects/${p.id}`}
            className="shadow rounded overflow-hidden"
          >
            <img
              src={p.images?.[0]}
              className="h-44 sm:h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold">{p.title}</h2>
              <p>{p.location}</p>
            </div>
          </Link>
        </AnimateIn>
      ))}
    </div>
  );
}
