import styles from "./About.module.css";

const skills = [
  "Product Design",
  "UI/UX Design",
  "Data Analysis",
  "Trading Systems",
  "Automation",
  "React / Next.js",
  "TypeScript",
  "Python",
];

const interests = [
  { icon: "◆", text: "交互设计与用户体验" },
  { icon: "◆", text: "量化交易与数据分析" },
  { icon: "◆", text: "自动化工作流构建" },
  { icon: "◆", text: "加密货币生态研究" },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>About</span>
          <h2 className={styles.title}>关于我</h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.main}>
            <p className={styles.paragraph}>
              我是一名关注产品设计与技术实现的产品设计师。在数据分析和自动化领域有实践经验，
              擅长将复杂的技术概念转化为直观的用户界面和流畅的产品体验。
            </p>
            <p className={styles.paragraph}>
              相信技术与设计的交叉地带蕴含着最有趣的挑战。致力于构建既有技术深度、
              又能触动人心的数字产品。在加密货币交易系统、数据可视化平台、
              以及无代码自动化工具等领域有项目经验。
            </p>

            <div className={styles.interests}>
              <h3 className={styles.subtitle}>专注领域</h3>
              <ul className={styles.interestList}>
                {interests.map((item, index) => (
                  <li key={index} className={styles.interestItem}>
                    <span className={styles.interestIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.skillsCard}>
              <h3 className={styles.cardTitle}>技能标签</h3>
              <div className={styles.tagCloud}>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`tag ${skill === "Product Design" ? "accent" : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.statsCard}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>年设计经验</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>完成项目</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
