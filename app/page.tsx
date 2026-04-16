import Image from "next/image";

export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: 16 }}>Ziye Lin</h1>
      <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: 32 }}>
        个人作品集网站。这里展示我的项目、产品设计思路、工程实现和案例页面。
      </p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "28px", marginBottom: 12 }}>About</h2>
        <p style={{ lineHeight: 1.8 }}>
          我关注产品设计、数据分析、自动化工作流和研究型项目展示。
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "28px", marginBottom: 12 }}>Projects</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>
            <a href="/projects">查看全部项目</a>
          </li>
          <li>
            <a href="/projects/crypto-report">Crypto 项目展示页</a>
          </li>
        </ul>
      </section>
    </main>
  );
}