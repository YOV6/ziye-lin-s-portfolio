import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "基于蜡烛图技术的 AI 原油市场分析 | Ziye Lin",
  description:
    "一个基于《日本蜡烛图技术》分析框架的 AI 原油市场分析项目，面向 WTI 与上海原油 SC，整合 K 线解读、期限结构、事件风险监测和三情景推演，生成结构化短期市场分析。",
};

const tags = [
  "AI 分析",
  "原油市场",
  "数据产品",
  "Python",
  "React",
  "LLM",
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

const targetAudiences = [
  {
    title: "原油与大宗商品研究者",
    description:
      "为需要快速跟踪油市状态的研究型用户提供一屏式信息整合：同时查看 WTI、上海原油 SC、SC 期限结构、事件风险和三情景推演，减少在行情图表、新闻页面和研究笔记之间反复切换的成本。",
  },
  {
    title: "需要油价风险参考的业务用户",
    description:
      "为受油价波动影响的业务场景提供结构化观察，例如能源采购、供应链、物流、制造业成本监测等。用户可以通过市场简报、期限结构和事件风险模块，快速理解当前油价风险来自价格行为、结构变化还是外部事件。",
  },
  {
    title: "投资与交易辅助研究用户",
    description:
      "为关注短期价格行为的研究型用户提供基于蜡烛图技术的辅助分析：系统不会把单一形态直接翻译成买卖建议，而是结合前序趋势、区间位置、支撑阻力、确认条件和失效信号，帮助用户形成更清晰的观察框架。",
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
    title: "蜡烛图初筛层",
    description:
      "蜡烛图分析不依赖 LLM 从零开始读图，而是先根据《日本蜡烛图技术》的分析思路，围绕候选形态、价格区间、支撑阻力和趋势上下文构建结构化 handoff，再交给 LLM 进行解释和归纳。",
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
  "设计基于蜡烛图技术的 AI 原油市场分析产品结构；",
  "搭建 WTI、上海原油 SC 和 SC 期限结构的分析链路；",
  "将《日本蜡烛图技术》中的形态阅读思路转化为可被程序和 LLM 使用的结构化流程；",
  "设计 Market Facts → LLM Analysis → Frontend Payload 的中间层；",
  "为 LLM 输出设置数据边界，降低幻觉和未验证信息进入页面的风险；",
  "构建市场简报、事件风险监测和三情景推演等用户可见模块；",
  "完成 React 前端展示、静态快照导出和 Vercel 部署。",
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
              <span className={styles.eyebrow}>PROJECT</span>
              
              <h2>基于蜡烛图技术的</h2>
              <h1>AI 原油市场分析</h1>

              <p className={styles.heroText}>
                把一套原本依赖人工阅读和市场经验的图表分析过程，拆解成产品链路。
                处理金融数据，展示行情图表，利用AI进行蜡烛图形态分析，以提供原油期货市场的深度洞察。
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
                  查看 Demo
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
                Demo 版本为静态研究演示，保留真实仪表盘界面和一次完整市场分析快照。
              </p>
            </div>
          </div>
        </section>

        <Section eyebrow="项目背景" title="为什么做这个项目">
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
              我想用AI把原本依赖人工阅读的蜡烛图分析过程实现自动化，把原油市场数据组织成一个能够被用户直接读懂的市场分析界面，省去繁琐的人工分析。
            </p>
          </div>
        </Section>

        <Section eyebrow="产品能力" title="产品解决什么问题">
          <div className={styles.cardGrid}>
            {productCapabilities.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="适用场景" title="产品为谁提供价值">
          <div className={styles.audienceGrid}>
            {targetAudiences.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </Section>

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
            市场分析快照，用于展示数据产品的信息组织、分析链路和 AI 输出形式。建议在桌面端打开完整
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
              title="AI 原油市场分析演示"
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

        <Section eyebrow="功能介绍" title="五个核心分析模块">
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

        <Section eyebrow="系统设计" title="把人工图表阅读拆成可运行的工程链路">
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

        <Section eyebrow="我的工作" title="从方法拆解到产品实现">
          <div className={styles.roleGrid}>
            <div className={styles.roleIntro}>
              <p>
                该项目由我借助Claude Code开发，横跨从产品定位、信息架构、数据链路、LLM 分析约束、
                前端展示到最终部署的完整流程。
              </p>
              <p>
                这个项目的重点不是单纯做一个好看的页面，而是验证一条更完整的产品链路：如何把蜡烛图技术分析、
                原油市场数据、事件风险信息和 LLM 解释能力组织在一起，同时保证页面中的结论来自可追溯的数据
                和明确的分析边界。
              </p>
            </div>

            <ul className={styles.contributionList}>
              {contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="methodology" eyebrow="方法说明与边界" title="基于《日本蜡烛图技术》的分析框架">
          <div className={styles.methodologyBox}>
            <div>
              <h3>蜡烛图方法</h3>
              <p>
                蜡烛图部分借鉴《日本蜡烛图技术》中的经典分析框架。项目并不把单一形态视为直接买卖信号，
                而是将形态放回前序趋势、区间位置、支撑阻力和后续确认条件中理解，综合观察实体长度、
                上下影线、前序趋势后再生成解释性结论。
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

        <Section eyebrow="下一步" title="即将正式上线">
          <div>
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