export default function ProjectsPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: 24 }}>Projects</h1>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 16,
          padding: 24,
          marginBottom: 20,
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: 8 }}>
          <a href="/projects/crypto-report">Crypto Report Case Study</a>
        </h2>
        <p style={{ lineHeight: 1.8 }}>
          一个基于蜡烛图分析、报告生成和产品界面设计的展示型项目专题页。
        </p>
      </div>
    </main>
  );
}