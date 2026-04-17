import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import styles from "./mdx-components.module.css";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
    h2: ({ children, ...props }) => (
      <h2 className={styles.h2} {...props}>{children}</h2>
    ),
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,

    // Paragraphs
    p: ({ children }) => <p className={styles.p}>{children}</p>,

    // Lists
    ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
    ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
    li: ({ children }) => <li className={styles.li}>{children}</li>,

    // Code blocks - check children for fileTree className
    pre: (props) => {
      const { children, ...rest } = props;
      // Try to detect fileTree from child code className
      let isFileTree = false;
      try {
        const child = Array.isArray(children) ? children[0] : children;
        const childClass =
          typeof child === "object" && child !== null && "props" in child
            ? (child as { props: { className?: string } }).props.className || ""
            : "";
        isFileTree = childClass.includes("fileTree");
      } catch { /* ignore */ }
      return (
        <pre
          className={`${styles.pre}${isFileTree ? ` ${styles.fileTree}` : ""}`}
          {...rest}
        >
          {children}
        </pre>
      );
    },
    code: ({ children, className }) => {
      if (!className) {
        return <code className={styles.inlineCode}>{children}</code>;
      }
      return <code className={`${styles.code} ${className}`}>{children}</code>;
    },

    // Images
    img: ({ src, alt }) => {
      if (!src) return null;
      return (
        <figure className={styles.figure}>
          <div className={styles.imageWrapper}>
            <Image
              src={src}
              alt={alt || ""}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {alt && <figcaption className={styles.figcaption}>{alt}</figcaption>}
        </figure>
      );
    },

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className={styles.blockquote}>{children}</blockquote>
    ),

    // Links
    a: ({ href, children }) => (
      <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),

    // Horizontal rule
    hr: () => <hr className={styles.hr} />,

    // Details / Summary (Collapsible)
    details: ({ children }) => <details className={styles.details}>{children}</details>,
    summary: ({ children }) => <summary className={styles.summary}>{children}</summary>,

    // Tables
    table: ({ children }) => (
      <div className={styles.tableWrapper}>
        <table className={styles.table}>{children}</table>
      </div>
    ),
    th: ({ children }) => <th className={styles.th}>{children}</th>,
    td: ({ children }) => <td className={styles.td}>{children}</td>,

    // Section Card (报告预览整体包裹)
    div: ({ children, className, ...props }) => {
      if (className === "section-card") {
        return (
          <div className={styles.sectionCard} {...props}>
            {children}
          </div>
        );
      }
      return <div {...props}>{children}</div>;
    },

    // Override with custom components
    ...components,
  };
}
