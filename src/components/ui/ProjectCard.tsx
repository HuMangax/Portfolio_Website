import { motion } from "motion/react"
import { Calendar } from "lucide-react"
import type { Project } from "../../data/projects"

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export default function ProjectCard({ title, date, description, tags, image, link }: Project) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col"
    >
      {image && (
        <img
          src={image}
          alt={title}
          class="w-full h-44 object-cover"
        />
      )}
      <div className="p-8 flex flex-col gap-4 flex-1">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-serif text-xl leading-snug" style={{ color: "var(--pine-deep)" }}>
            {title}
          </h3>
          <span className="flex items-center gap-1 text-xs font-mono whitespace-nowrap mt-1" style={{ color: "var(--moss)" }}>
            <Calendar size={12} />
            {date}
          </span>
        </div>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--ink)" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full border"
              style={{ color: "var(--moss)", borderColor: "rgba(72,96,79,0.35)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono pt-4 border-t border-black/10 hover:underline"
            style={{ color: "var(--moss)" }}
          >
            <GithubIcon size={16} />
            View on GitHub
          </a>
        )}
      </div>
    </motion.article>
  )
}