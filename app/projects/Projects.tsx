import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    slug: "crypto-report",
    title: "基于蜡烛图技术的加密货币市场分析",
    description: "一个 AI 分析多周期 K 线的产品原型",
    tags: ["AI", "Python", "SQLite", "LLM", "React"],
    status: "completed" as const,
    link: "/projects/crypto-report",
  },
  {
    slug: "oil-dashboard",
    title: "AI 原油市场分析",
    description:
      "基于蜡烛图技术，整合 WTI、上海原油 SC、期限结构、事件风险和三情景推演的 AI 数据产品。",
    tags: ["AI 分析", "原油市场", "数据产品", "Python", "React", "LLM"],
    status: "completed" as const,
    link: "/projects/oil-dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Projects</span>
          <h2 className={styles.title}>项目作品</h2>
          <p className={styles.subtitle}>
            从概念到实现，探索产品设计与工程实践的结合
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <ProjectCard
                project={project}
                featured={index === 0}
              />
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.note}>
            更多项目正在开发中 ...
          </p>
        </div>
      </div>
    </section>
  );
}
