import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const projects = [
  {
    slug: "crypto-report",
    title: "Crypto Report",
    description:
      "基于蜡烛图技术的加密货币市场分析平台，集成实时行情数据与 LLM 智能信号生成，为交易决策提供数据支持。",
    tags: ["Next.js", "React", "Python", "LLM", "Binance API"],
    status: "completed" as const,
    link: "/projects/crypto-report",
  },
  {
    slug: "datapulse",
    title: "DataPulse Dashboard",
    description:
      "实时数据仪表板解决方案，支持多数据源接入、自定义可视化组件与告警规则配置。",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    status: "coming-soon" as const,
  },
  {
    slug: "autoflow",
    title: "AutoFlow",
    description:
      "无代码自动化工作流平台，让用户通过可视化拖拽构建复杂的业务流程与数据处理管道。",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "n8n"],
    status: "coming-soon" as const,
  },
  {
    slug: "designtokens",
    title: "DesignTokens",
    description:
      "组件化设计系统，支持多框架导出、CSS 变量驱动的主题切换与企业级设计规范文档。",
    tags: ["React", "Storybook", "CSS Variables", "Figma API"],
    status: "coming-soon" as const,
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
