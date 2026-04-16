import Image from "next/image";

export default function CryptoReportPage() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: 16 }}>
        基于蜡烛图技术的市场分析 —— 项目展示
      </h1>

      <div
        style={{
          background: "#fff7e6",
          border: "1px solid #f0d58c",
          borderRadius: 12,
          padding: 16,
          marginBottom: 32,
          lineHeight: 1.8,
        }}
      >
        免责声明：本项目仅用于个人学习、技术研究和产品原型展示，不构成任何形式的投资建议、交易建议、收益承诺或营销宣传。页面内容以静态截图和历史样例为主，请勿据此作出交易决策。
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "28px", marginBottom: 12 }}>项目缘起</h2>
        <p style={{ lineHeight: 1.9 }}>
          这个项目希望把多周期 K 线形态识别、报告生成和产品界面组织成一个可读、可展示、可复盘的页面，而不是简单地输出若干零散信号。
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "28px", marginBottom: 12 }}>项目目标</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>将不同周期的分析结果纳入统一报告结构</li>
          <li>把扫描、筛选、解释、展示串成完整链路</li>
          <li>用更克制的方式展示高风险题材产品原型</li>
        </ul>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "28px", marginBottom: 12 }}>页面预览</h2>
        <p style={{ lineHeight: 1.9, marginBottom: 16 }}>
          下图展示了项目报告页的整体结构，包括标题区、统计区、重点观察区和单币种卡片区。
        </p>

        <Image
          src="/images/crypto/hero.png"
          alt="Crypto report screenshot"
          width={1400}
          height={900}
          style={{ width: "100%", height: "auto", borderRadius: 12, border: "1px solid #ddd" }}
        />
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "28px", marginBottom: 12 }}>设计说明</h2>
        <p style={{ lineHeight: 1.9 }}>
          我最终没有直接把完整 SPA 作为对外公开主形态，而是选择用静态截图和专题页来展示项目能力。这样更适合作品集表达，也更利于控制页面的叙事方式和风险边界。
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "28px", marginBottom: 12 }}>后续计划</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>继续补充更多截图和图注</li>
          <li>补一张系统结构图</li>
          <li>把展示模板复用到其他项目</li>
        </ul>
      </section>
    </main>
  );
}