import styles from "./About.module.css";

const skills = [
  "Python",
  "SQL",
  "R",
  "Vibe Coding",
  "因果推断",
  "AB实验",,
  "Tableau",
];

const education = [
  {
    school: "武汉大学",
    faculty: "经济与管理学院",
    major: "管理科学",
    degree: "本科",
    period: "2021.09 — 2025.07",
  },
  {
    school: "南京大学",
    faculty: "商学院",
    major: "企业管理",
    degree: "学术硕士",
    period: "2025.09 — 2028.07",
  },
];

const research = {
  role: "研究助理",
  period: "2025.02 — 2025.05",
  affiliation: "武汉大学 管理科学与工程系",
  activities: [
    "用户行为分析",
    "A 股年报文本分析",
    "专利结构分析",
    "招聘需求文本分析",
  ],
  paper: {
    title:
      "Contingent organizational design for nascent innovation: A case-grounded simulation study",
    status: "在投",
    position: "第一作者",
    method: "Agent-based Modeling 仿真模拟",
    description:
      "通过 agent-based 模型建模案例研究所提炼的机制，研究新兴科技市场中的企业创新绩效。",
  },
};

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
            <p className={styles.intro}>
              关注数据驱动的产品设计、分析系统搭建与结构化问题求解。
              熟悉 Python、SQL、R，在用户行为分析、文本分析、自动化流程和分析型产品原型等方面有实践经验。
            </p>

            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>教育经历</h3>
              <div className={styles.timeline}>
                {education.map((edu, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineHeader}>
                      <span className={styles.schoolName}>{edu.school}</span>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <div className={styles.timelineMeta}>
                      {edu.faculty} · {edu.major}
                    </div>
                    <div className={styles.degree}>{edu.degree}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>研究经历</h3>
              <div className={styles.researchBlock}>
                <div className={styles.paperBlock}>
                  <div className={styles.paperHeader}>
                    <span className={styles.paperBadge}>
                      期刊论文{research.paper.status}
                    </span>
                    <span className={styles.paperMethod}>
                      {research.paper.method}
                    </span>
                  </div>
                  <div className={styles.paperTitle}>
                    {research.paper.title}
                  </div>
                  <div className={styles.paperDesc}>
                    {research.paper.description}
                  </div>
                  <div className={styles.paperPosition}>
                    {research.paper.position}
                  </div>
                </div>
                <div className={styles.researchHeader}>
                  <span className={styles.researchRole}>{research.role}</span>
                  <span className={styles.period}>{research.period}</span>
                </div>
                <div className={styles.researchAffiliation}>
                  {research.affiliation}
                </div>
                <ul className={styles.activityList}>
                  {research.activities.map((activity, index) => (
                    <li key={index} className={styles.activityItem}>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <div className={styles.sidebar}>
            <div className={styles.skillsCard}>
              <h3 className={styles.cardTitle}>技能</h3>
              <div className={styles.tagCloud}>
                {skills.map((skill, index) => (
                  <span key={index} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
