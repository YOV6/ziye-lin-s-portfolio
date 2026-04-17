import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={`${styles.label} animate-fade-in`}>Contact</span>
            <h1 className={`${styles.title} animate-fade-in delay-100`}>
              联系我
            </h1>
            <p className={`${styles.subtitle} animate-fade-in delay-200`}>
              对产品设计、数据分析或自动化感兴趣？欢迎联系我探讨合作机会。
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <div className={`${styles.card} animate-fade-in-up delay-300`}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>邮箱</h2>
              <a href="mailto:linzy@smail.nju.edu.cn" className={styles.email}>
                linzy@smail.nju.edu.cn
              </a>
              <p className={styles.cardHint}>
                工作邮箱，回复时间通常在 24 小时内
              </p>
            </div>

            <div className={`${styles.card} animate-fade-in-up delay-400`}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <h2 className={styles.cardTitle}>GitHub</h2>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                github.com
              </a>
              <p className={styles.cardHint}>
                查看开源项目和代码贡献
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
