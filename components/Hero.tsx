import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={`${styles.eyebrow} animate-fade-in`}>
            Product Designer & Developer
          </p>
          <h1 className={`${styles.name} animate-fade-in delay-100`}>
            Ziye Lin
          </h1>
          <p className={`${styles.tagline} animate-fade-in delay-200`}>
            探索产品设计、数据分析与自动化的交叉地带
          </p>
          <p className={`${styles.description} animate-fade-in delay-300`}>
            致力于用设计思维和工程技术，创造兼具美感与功能性的数字产品。
            相信好的用户体验源于对细节的极致追求。
          </p>
          <div className={`${styles.cta} animate-fade-in delay-400`}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>查看项目</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              联系我
            </a>
          </div>
        </div>
        <div className={`${styles.decoration} animate-scale-in delay-500`}>
          <div className={styles.circle}></div>
          <div className={styles.circleSmall}></div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>向下滚动</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path
            d="M8 4v16M4 16l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
