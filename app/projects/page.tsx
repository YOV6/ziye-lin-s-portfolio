import Projects from "./Projects";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.contactTitle}>开始你的项目</h2>
        <p className={styles.contactText}>
          有想法？让我们一起把它变成现实。
        </p>
        <a href="mailto:hello@example.com" className={styles.contactBtn}>
          联系我
        </a>
      </div>
    </section>
  );
}
