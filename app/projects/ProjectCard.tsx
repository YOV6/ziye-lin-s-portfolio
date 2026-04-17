import styles from "./ProjectCard.module.css";

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: "completed" | "in-progress" | "coming-soon";
  link?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const statusLabels = {
  completed: "已完成",
  "in-progress": "进行中",
  "coming-soon": "即将推出",
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`${styles.card} ${featured ? styles.featured : ""} ${
        project.status === "coming-soon" ? styles.placeholder : ""
      }`}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderText}>
            {project.title.charAt(0)}
          </span>
        </div>
        <span
          className={`${styles.statusBadge} ${styles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {project.link && project.status !== "coming-soon" && (
          <a href={project.link} className={styles.link}>
            <span>查看详情</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
