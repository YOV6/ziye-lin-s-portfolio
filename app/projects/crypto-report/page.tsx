"use client";

import { MDXProvider } from "@mdx-js/react";
import { getMDXComponents } from "@/components/mdx-components";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Content from "./content.mdx";
import styles from "./page.module.css";

const mdxComponents = getMDXComponents();

export default function CryptoReportPage() {
  return (
    <>
      <Navigation />
      <main className={styles.page}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContainer}>
            <span className={styles.heroLabel}>Project</span>
            <h1 className={styles.heroTitle}>
              基于蜡烛图技术的<br />加密货币市场分析
            </h1>
            <p className={styles.heroSubtitle}>
              一个把多周期 K 线、规则初筛、LLM 解释和长页报告组织起来的分析原型
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroTag}>Python</span>
              <span className={styles.heroTag}>SQLite</span>
              <span className={styles.heroTag}>AI</span>
              <span className={styles.heroTag}>大语言模型</span>
            </div>
          </div>
          <div className={styles.heroDecoration}>
            <div className={styles.heroCircle}></div>
          </div>
        </header>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <div className={styles.disclaimerContainer}>
            <span className={styles.disclaimerIcon}>⚠</span>
            <p>
              <strong>免责声明：</strong>本项目仅用于个人学习、技术研究和产品原型展示，不构成任何形式的投资建议、交易建议、收益承诺或营销宣传。页面内容以静态截图和历史样例为主，请勿据此作出交易决策。
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.container}>
          <article className={styles.article}>
            <MDXProvider components={mdxComponents}>
              <Content />
            </MDXProvider>
          </article>
        </div>

        {/* Footer Navigation */}
        <div className={styles.container}>
          <footer className={styles.footerNav}>
            <a href="/projects" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 8H3M7 4l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>返回项目列表</span>
            </a>
            <span className={styles.footerNote}>2026</span>
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
