import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI 原油市场情报仪表盘 | Ziye Lin",
  description:
    "面向 WTI 与上海原油 SC 的 AI 油市情报产品，结合蜡烛图解读、期限结构分析、事件风险监测和三情景推演，生成结构化短期市场分析。",
};

const tags = [
  "AI Product",
  "Financial Dashboard",
  "Python",
  "React",
  "LLM Pipeline",
  "Data Analytics",
  "Oil Market",
];

const productCapabilities = [
  {
    title: "从行情到解释",
    description:
      "系统不只展示 K 线图，而是围绕近期价格行为、区间位置、支撑阻力和确认条件生成结构化解释，帮助用户理解当前价格处于什么位置，以及后续需要观察哪些信号。",
  },
  {
    title: "跨市场观察",
    description:
      "同时观察 WTI 与上海原油 SC，比较国际基准价格与国内原油价格的相对表现，避免只看单一市场得出片面判断。",
  },
  {
    title: "期限结构分析",
    description:
      "通过 SC 近月、次月和季度合约价差观察市场结构，识别近月升水、结构松紧和潜在供需预期变化。",
  },
  {
    title: "事件风险解释",
    description:
      "将公开来源事件整理为风险条目，并从供应、库存、运输、期限结构和市场情绪等路径解释其可能影响，而不是简单堆砌新闻标题。",
  },
];

const modules = [
  {
    index: "01",
    title: "今日市场简报",
    description: "生成当日油市摘要，概括 WTI、SC、期限结构和事件风险的综合判断。",
  },
  {
    index: "02",
    title: "WTI 与 SC 价格行为",
    description: "展示 WTI 和上海原油 SC 的日线 K 线、形态观察、价格位置、确认条件和风险提示。",
  },
  {
    index: "03",
    title: "SC 期限结构",
    description: "观察近月、次月和季度合约之间的价差，判断市场是否呈现近月升水或结构性紧张。",
  },
  {
    index: "04",
    title: "事件风险监测",
    description: "抓取并整理与原油市场相关的事件风险，进行来源标记、影响路径分析和风险等级表达。",
  },
  {
    index: "05",
    title: "三情景推演",
    description:
      "基于当前 Market Facts 生成上行确认、区间震荡和下行失效三种情景，明确成立条件、验证信号和失效信号。",
  },
];

const systemLayers = [
  {
    title: "数据层",
    description:
      "通过 Python 脚本获取并整理 WTI、SC 和 SC 期限结构相关数据，将原始行情处理成前端和 LLM 都可消费的结构化 Market Facts。",
  },
  {
    title: "分析层",
    description:
      "蜡烛图分析不依赖 LLM 从零开始读图，而是先由规则和事实构建候选形态、价格区间、支撑阻力和趋势上下文，再交给 LLM 进行解释和归纳。",
  },
  {
    title: "LLM 层",
    description:
      "LLM 只允许基于 payload 中已有的 Market Facts、候选形态、期限结构和事件风险摘要生成分析。系统明确禁止 LLM 自行补充未提供的成交量、库存、宏观、地缘政治或新闻信息。",
  },
  {
    title: "前端层",
    description:
      "前端将市场简报、K 线卡片、期限结构、事件风险和三情景推演组织成完整 dashboard，并通过静态 payload 保证作品集版本可以稳定部署到 Vercel。",
  },
];

const contributions = [
  "设计 AI 原油市场情报仪表盘的产品结构；",
  "搭建 WTI、上海原油 SC 和 SC 期限结构的分析链路；",
  "将蜡烛图技术分析转化为可被程序和 LLM 使用的结构化流程；",
  "设计 Market Facts → LLM Analysis → Frontend Payload 的中间层；",
  "为 LLM 输出设置数据边界，降低幻觉和未验证信息进入页面的风险；",
  "构建市场简报、事件风险监测和三情景推演等用户可见模块；",
  "完成 React 前端展示和 Vercel 静态部署。",
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHeader}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function OilDashboardPage() {
  return (
    <>
      <Navigation />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>项目</span>
              <h1>AI 原油市场情报仪表盘</h1>
              <p className={styles.heroLead}>
                一个面向 WTI 与上海原油 SC 的 AI 油市情报产品，结合蜡烛图解读、期限结构分析、
                事件风险监测和三情景推演，生成结构化的短期市场分析。
              </p>

              <p className={styles.heroText}>
                这个项目尝试把分散的原油市场信息重新组织成一个可阅读、可解释、可展示的情报仪表盘。
                它不只是展示行情图表，而是将金融数据处理、蜡烛图技术分析、事件风险解释、LLM 输出约束
                和前端产品化整合到同一个界面中。
              </p>

              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.heroActions}>
                <Link href="/oil-dashboard/index.html" className={styles.primaryButton} target="_blank">
                  打开在线演示
                </Link>
                <Link href="#methodology" className={styles.secondaryButton}>
                  查看分析方法
                </Link>
              </div>
            </div>

            <div className={styles.heroPanel} aria-label="项目概览">
              <div className={styles.panelTop}>
                <span>静态快照演示</span>
                <span>WTI · SC · 期限结构</span>
              </div>
              <div className={styles.metricGrid}>
                <div>
                  <span className={styles.metricLabel}>核心市场</span>
                  <strong>WTI / SC</strong>
                </div>
                <div>
                  <span className={styles.metricLabel}>分析模式</span>
                  <strong>LLM + Facts</strong>
                </div>
                <div>
                  <span className={styles.metricLabel}>风险模块</span>
                  <strong>事件监测</strong>
                </div>
                <div>
                  <span className={styles.metricLabel}>部署方式</span>
                  <strong>静态 Demo</strong>
                </div>
              </div>
              <p>
                作品集版本为静态研究演示，保留真实 dashboard 界面和一次完整市场分析快照，
                无需后端服务或数据库部署即可运行。
              </p>
            </div>
          </div>
        </section>

        <section id="demo" className={styles.demoSection}>
          <div className={styles.demoHeader}>
            <div>
              <span className={styles.eyebrow}>交互式演示</span>
              <h2>嵌入在项目页中的实时仪表盘</h2>
            </div>
            <Link href="/oil-dashboard/index.html" className={styles.demoButton} target="_blank">
              打开完整仪表盘
            </Link>
          </div>

          <p className={styles.demoIntro}>
            下方嵌入的是 oil-dashboard 的静态演示版本。该版本保留完整前端结构、真实页面交互和一次完整
            市场分析快照，用于展示数据产品的信息组织、分析链路和 AI 输出形式。建议在浏览器点击右上方，打开完整
            仪表盘，以获得最佳浏览体验。
          </p>

          <div className={styles.iframeShell}>
            <div className={styles.browserBar}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.browserPath}>/oil-dashboard/index.html</span>
            </div>
            <iframe
              src="/oil-dashboard/index.html"
              title="AI 原油市场情报仪表盘演示"
              className={styles.dashboardFrame}
              loading="lazy"
            />
          </div>

          <div className={styles.mobileDemoFallback}>
            <p>嵌入的仪表盘针对桌面端优化，请在桌面端打开完整演示以获得最佳体验。</p>
            <Link href="/oil-dashboard/index.html" className={styles.primaryButton} target="_blank">
              打开完整仪表盘
            </Link>
          </div>
        </section>

        <Section eyebrow="项目背景" title="从分散市场信号到一体化油市情报界面">
          <div className={styles.textBlock}>
            <p>
              原油市场的短期判断往往不是由单一价格决定的。WTI 代表国际原油基准价格，上海原油 SC
              反映国内原油市场和人民币计价体系下的价格表现；期限结构提示市场对近月供应、库存压力
              和交割紧张程度的定价；事件风险又可能通过供应、运输、库存、地缘政治或市场情绪影响价格预期。
            </p>
            <p>
              问题在于，这些信息通常分散在不同页面和不同叙述中。行情图表、期限结构、新闻事件和分析结论
              彼此割裂，用户需要自己在多个信息源之间切换、判断和整合。
            </p>
            <p>
              这个项目的目标，是将这些分散信息组织成一个油市情报仪表盘：先由数据链路构建可验证的
              Market Facts，再让 LLM 基于已提供事实生成解释、摘要和情景推演，最后以产品化界面展示给用户。
            </p>
          </div>
        </Section>

        <Section eyebrow="产品能力" title="这个仪表盘解决什么问题">
          <div className={styles.cardGrid}>
            {productCapabilities.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="核心模块" title="五个核心分析模块">
          <div className={styles.moduleList}>
            {modules.map((item) => (
              <article key={item.index} className={styles.moduleItem}>
                <span>{item.index}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="系统设计" title="基于事实约束的 LLM 分析链路">
          <div className={styles.layerGrid}>
            {systemLayers.map((layer) => (
              <article key={layer.title} className={styles.layerCard}>
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.pipeline}>
            <span>市场数据</span>
            <span>Market Facts</span>
            <span>LLM 分析</span>
            <span>Payload 校验</span>
            <span>前端仪表盘</span>
          </div>
        </Section>

        <Section eyebrow="我的工作" title="我的工作">
          <div className={styles.roleGrid}>
            <div className={styles.roleIntro}>
              <p>
                该项目由我独立规划、开发和迭代。我负责从产品定位、信息架构、数据链路、LLM 分析约束、
                前端展示到最终部署的完整流程。
              </p>
              <p>
                重点不是单纯做一个好看的页面，而是让整个分析链路尽可能可信：不使用伪造数据，
                不让默认值伪装成真实市场信息，不让 LLM 基于未提供的数据生成结论。
              </p>
            </div>

            <ul className={styles.contributionList}>
              {contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="methodology" eyebrow="方法说明与边界" title="分析方法与项目边界">
          <div className={styles.methodologyBox}>
            <div>
              <h3>蜡烛图方法</h3>
              <p>
                蜡烛图部分借鉴《日本蜡烛图技术》中的经典分析框架，但不将单一形态视为直接买卖信号。
                系统会综合观察实体长度、上下影线、前序趋势、区间位置、支撑阻力以及后续确认条件，
                再生成解释性结论。
              </p>
            </div>

            <div>
              <h3>LLM 边界</h3>
              <p>
                LLM 并不直接从空白市场中预测油价，而是在结构化 Market Facts、候选形态、期限结构数据
                和事件风险摘要基础上进行解释、归纳和情景推演。未进入 payload 的信息不应进入最终结论。
              </p>
            </div>

            <div>
              <h3>项目边界</h3>
              <p>
                当前版本为作品集展示用静态 Demo，展示一次完整市场分析快照。项目重点在于数据链路设计、
                LLM 分析约束、金融信息架构和前端产品化表达，不提供实时行情服务、交易接口、投资建议、
                交易建议或收益承诺。
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="下一步" title="后续可扩展方向">
          <div className={styles.nextSteps}>
            <article>
              <span>01</span>
              <p>探索更稳定的期货 OHLCV 数据源，提高 WTI 与 Brent 数据完整性。</p>
            </article>
            <article>
              <span>02</span>
              <p>在可靠数据源成熟后，增加库存、OPEC/IEA、宏观指标等基本面模块。</p>
            </article>
            <article>
              <span>03</span>
              <p>将静态 Demo 升级为可定时更新的油市情报页面。</p>
            </article>
          </div>
        </Section>

        <section className={styles.finalCta}>
          <div>
            <span className={styles.eyebrow}>演示</span>
            <h2>打开完整原油市场仪表盘</h2>
            <p>
              查看包含市场简报、WTI 与 SC 价格行为、SC 期限结构、事件风险和三情景推演的完整静态演示版本。
            </p>
          </div>
          <Link href="/oil-dashboard/index.html" className={styles.primaryButton} target="_blank">
            打开仪表盘
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}