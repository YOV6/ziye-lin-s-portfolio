"use client";

import Image from "next/image";
import styles from "./crypto-report-content.module.css";

// ============================================================
// Section Wrapper
// ============================================================
function Section({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}

// ============================================================
// Headings
// ============================================================
function H2({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className={styles.h2} data-section={index}>
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.h3}>{children}</h3>;
}

// ============================================================
// Paragraphs
// ============================================================
function P({ children }: { children: React.ReactNode }) {
  return <p className={styles.p}>{children}</p>;
}

// ============================================================
// File Tree (目录树)
// ============================================================
function FileTree({ children }: { children: string }) {
  return (
    <div className={styles.fileTreeWrapper}>
      <div className={styles.fileTreeLabel}>PROJECT STRUCTURE</div>
      <pre className={`${styles.pre} ${styles.fileTree}`}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

// ============================================================
// List
// ============================================================
function List({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.listItem}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// ============================================================
// Details (折叠面板)
// ============================================================
function Details({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{summary}</summary>
      <div className={styles.detailsContent}>{children}</div>
    </details>
  );
}

// ============================================================
// Report Preview Card
// ============================================================
function ReportPreviewCard({ children }: { children: React.ReactNode }) {
  return <div className={styles.reportPreviewCard}>{children}</div>;
}

// ============================================================
// Preview Item (图片 + 文字说明)
// ============================================================
function PreviewItem({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <div className={styles.previewItem}>
      <div className={styles.previewImageWrapper}>
        <Image
          src={image}
          alt=""
          width={800} height={492}
          className={styles.previewImage}
        />
      </div>
      <p className={styles.previewText}>{text}</p>
    </div>
  );
}

// ============================================================
// Detail Section (详情页内的子章节)
// ============================================================
function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.detailSection}>
      <H3>{title}</H3>
      {children}
    </div>
  );
}

// ============================================================
// Main Content Component
// ============================================================
export default function CryptoReportContent() {
  return (
    <div className={styles.content}>
      {/* 章节一 */}
      <Section>
        <H2 index="01">为什么开发这个项目</H2>
        <P>
          前几年，比特币一次次冲上新闻。价格一路往上冲的时候，所有人都在谈它。跌下来的时候，所有人也都在谈它。这个市场最特别的地方，不只是波动大，而是它天然带着一种很强的戏剧性。你一眼看过去，会觉得它和别的市场差不多，也有开盘、收盘、最高、最低，也有完整的 K 线和 OHLC 数据；可只要真的盯着它看一段时间，就会发现它比很多成熟市场更连续，也更躁动，情绪、叙事和价格经常缠在一起，根本分不开。
        </P>
        <P>
          这个项目的idea来自我对一位长期研究数字资产图表的人的采访。对于这样一个市场，他会先看月线、周线、三日线，判断大背景是不是成立；再回到日线，看结构有没有变化；最后再往更短的周期里收，确认局部位置。我觉得这件事真正有意思的地方，不在某一个形态本身，而在于它背后其实藏着一套非常稳定的阅读顺序。不同周期并不是各看各的，而是在同一套判断里承担不同的功能。
        </P>
        <P>
          但这次采访也让我发现了一个痛点：越是看上去成熟的方法，越难直接搬进程序。很多蜡烛图知识天然依赖经验，依赖上下文，依赖人对图形细节的整体感觉。同样一组 K 线，不同的人会读出不同的东西。另一层麻烦在于，这套流程又特别重复。切换周期、筛选候选、确认形态、排除干扰，很多步骤并不复杂，真正消耗精力的是它必须被一遍一遍地执行。
        </P>
        <P>
          这是个痛点。这个过程可以被自动化吗？这个过程应该被自动化才对。
          我想到《日本蜡烛图技术》。这本书让我越来越清楚地意识到，图表里的信息并不只是价格本身，很多判断其实已经被压缩在形态结构里。问题在于，这套知识原本就是写给人读的，不是写给程序跑的。书里的很多判断默认读者已经知道什么地方该结合趋势看，什么地方不能只看单根 K 线，什么地方要把前后文一起带进来。人读起来会觉得自然，程序读起来却会立刻撞上边界。
        </P>
        <P>
          基于此，我想做的不是一个直接给出结论的页面，而是尝试把一套原本依赖人工阅读的过程拆开，重新组织成一条可以运行的工程链路。前面接公开行情数据和本地数据库，中间用规则系统做第一轮初筛，把候选范围压下来，后面再接入大语言模型处理解释层，最后把多周期图表、候选形态、说明文本和页面状态组织成一份真正能读下去的报告。
        </P>
      </Section>

      {/* 章节二 */}
      <Section>
        <H2 index="02">我的工作和实现路径</H2>
        <P>
          项目由我本人独立开发。这个项目不是一个静态报告，我在最初设计的时构思了一套完整的链路。
        </P>
        <P>
          最早先解决数据获取和本地落库，再做规则初筛，把原始图表压缩成更可处理的候选结果。
          然后接入大语言模型，专门处理解释层和候选比较，最后再把这些结果组织成长页报告和前端界面。
        </P>
        <P>
          项目最终把一套依赖人工经验的图表分析流程，整理成了一条可以运行、可以解释、也可以展示的工程链路。
        </P>
      </Section>

      {/* 章节三 */}
      <Section>
        <H2 index="03">项目结构</H2>
        <P>
        该项目包含从后端数据接入、本地落库、规则初筛、LLM 解释到前端报告输出的完整链路：
        </P>
        <H3>后端</H3>
        <P>
          Python：113 个 Python 文件，约 1.95 万行 Python 代码。其中包含 18 个配置化蜡烛图形态定义，19 个形态识别初筛模块，4 个行情适配器，30 个测试文件。
        </P>
        <P>
          SQLite：1 个本地SQLite数据库，存储代码抓取的实时数据。
        </P>
        <P>
          AI LLM：3 个大模型接口，2 个 prompt 模板。
        </P>
        <H3>前端</H3>
        <P>
          前端：10 个前端 React 组件。
        </P>
        <P>
          详细目录树和各模块功能见页底的展开内容，简化的目录树如下。
        </P>
        <FileTree>{`project1-crypto/
├── main.py
├── candlestick/
├── data/
├── src/
│   ├── adapters/
│   ├── services/
│   │   ├── candles/
│   │   └── llm/
│   ├── spa/
│   ├── templates/
│   ├── static/
│   ├── database.py
│   └── web_server.py
└── tests/`}</FileTree>
        <List
          items={[
            "",
          ]}
        />
      </Section>

      {/* 章节四 */}
      <Section>
        <H2 index="04">重要提示</H2>
        <P>
          本页面仅展示历史原型的静态截图与系统设计思路，不提供实时数据、实际交易对象、投资建议或交易服务。公开展示的重点是工程实现、信息组织和界面结构，而非任何现实使用场景。
        </P>
      </Section>

      {/* 章节五 */}
      <Section>
        <H2 index="05">报告预览</H2>
        <P>
          前端渲染的报告，可以直接在网页中查看。但根据相关法律法规，我在这里以网页截图的形式展示报告的主要功能，对敏感信息做了遮挡处理，包括币种、价格、时间轴以及 AI 的具体分析结果。
        </P>
        <ReportPreviewCard>
          <p className={styles.reportPreviewIntro}>
            报告的顶层结构包括标题区、说明区、统计区和主报告区域。整体分为&ldquo;特别关注&rdquo;和&ldquo;信号发现&rdquo;两部分。特别关注区展示的是由用户主动选定的条目；信号发现区则展示用户未主动关注、但在当前分析中出现了值得注意形态的条目。
          </p>
          <PreviewItem
            image="/images/crypto/hero1.png"
            text="报告的首页展示了整体结构，包括标题区、说明区、统计区和主报告区域。"
          />
          <PreviewItem
            image="/images/crypto/hero2.png"
            text="用户可以通过交互按钮自行选择需要关注的条目。被选定的项目会始终置于报告顶部，无论当前 K 线是否识别出明确形态。"
          />
          <p className={styles.reportPreviewText}>
            每一个被展示的币种，都对应一张独立的展示卡片。下图是单张卡片的内容示例。
          </p>
          <PreviewItem
            image="/images/crypto/hero3.png"
            text="卡片下方的候选形态模块用于展示当前 K 线可能对应的蜡烛图形态，并给出该形态的判断依据、确认条件和失效条件。"
          />
          <p className={styles.reportPreviewText}>
            在示例的这张信号卡片里，蜡烛图形态初筛出了两种可能的形态，十字孕线和十字线家族（可能是家族中的晨星线），并按AI LLM分析的可能性优先级排序。
            根据《日本蜡烛图技术》的指导，LLM给出的形态判断依据是“第二根不是普通小实体，而是十字线，被第一根实体包住。”，并提示用户可通过第三根K线方向确认该疑似形态。
            LLM还分析了疑似形态的失效条件，当“K线回到十字线附近持续横盘，未形成突破”时，该形态失效，需重新判断。
          </p>
          <p className={styles.reportPreviewText}>
            LLM会根据上述信息提供综合分析。在示例中，LLM判断1日线在某区间形成十字孕线形态，但环境配合度不足。十字孕线被大阳线包裹，后续走势存在分歧，环境确认度不足。
          </p>
          <p className={styles.reportPreviewText}>
            此外，信号卡片还提供在交互按钮（红框处）中切换不同周期的 K 线的功能。
          </p>
          <p className={`${styles.reportPreviewText} ${styles.reportPreviewGap}`}>
            下图展示的是信号发现区。用户未主动关注的币种，在经过形态初筛和进一步分析后，如果出现值得注意的结构，就会被展示在这一部分。
          </p>
          <PreviewItem
            image="/images/crypto/hero4.png"
            text=""
          />
          <PreviewItem
            image="/images/crypto/hero5.png"
            text="报告还会抓取当前时段内可能相关的风险事件，作为页面中的补充信息，为分析提供背景。"
          />
          <PreviewItem
            image="/images/crypto/hero6.png"
            text="风险事件展示在页面底部。"
          />
        </ReportPreviewCard>
      </Section>

      <Section>
        <H2 index="06">下一步</H2>
        <P>
          这条链路不只适用于当前原型，也可以迁移到其他 OHLC 数据驱动的金融场景。
          对我来说，这个项目最大的价值，是验证了从数据、规则、解释到页面展示的一体化方法。  
        </P>  
        <P>因此，在本次项目开发经验的基础上，我正在开发另一项期货相关的分析流程。</P>      
      </Section>

      {/* 章节六 */}
      <Section>
        <H2 index="07">更多细节</H2>
        <Details summary="查看更详细的实现说明">
          <H3>更完整的目录树</H3>
          <FileTree>{`project1-crypto/
├── main.py
├── requirements.txt
├── candlestick/
│   ├── candlestick_patterns.yaml
│   ├── candlestick_params.yaml
│   ├── candlestick_global_rules.yaml
│   └── pattern_result_schema.yaml
├── data/
│   ├── cpia.db
│   ├── scan_symbols.txt
│   ├── always_include.txt
│   └── report_cache.json
├── scripts/
│   └── preprocess_playbooks.py
├── src/
│   ├── adapters/
│   ├── patterns/
│   ├── services/
│   │   ├── candles/
│   │   └── llm/
│   ├── spa/
│   ├── templates/
│   ├── static/
│   ├── database.py
│   ├── models.py
│   ├── config.py
│   └── web_server.py
└── tests/`}</FileTree>

          <DetailSection title="1. 数据获取层 src/adapters/">
            <P>
              这一层负责和外部行情源通信，包括 REST 接口拉取历史 K 线、WebSocket 订阅实时 K 线、区分不同市场类型、做重试限速与代理处理。对应文件包括 `binance_spot.py`、`binance_futures.py`、`binance_ws_spot.py`、`binance_ws_futures.py`。
            </P>
          </DetailSection>

          <DetailSection title="2. 本地存储层 data/">
            <P>
              为了避免每次都直接依赖外部接口，我把数据先落到本地 SQLite。这层主要负责交易对元数据表、现货/合约 K 线表、实时 K 线表、流式订阅检查点，以及插入、查询和历史迁移。
            </P>
          </DetailSection>

          <DetailSection title="3. 蜡烛图形态初筛层 src/services/candles/">
            <P>
              随着项目推进，我把形态识别从&ldquo;单条规则直接出最终结论&rdquo;改造成了&ldquo;两阶段架构&rdquo;。第一阶段由参数化引擎做候选初筛与上下文提取，第二阶段再把结构化结果交给 LLM 做解释与裁决。
            </P>
          </DetailSection>

          <DetailSection title="4. 配置驱动层 candlestick/">
            <P>
              `candlestick/` 目录把形态知识从 Python 代码中抽离出来，变成了可维护的配置合同，包括 `candlestick_patterns.yaml`、`candlestick_params.yaml`、`candlestick_global_rules.yaml`、`pattern_result_schema.yaml`。
            </P>
          </DetailSection>

          <DetailSection title="5. LLM 层 src/services/llm/">
            <P>
              LLM 接收已经被压缩过的结构化 handoff，分析形态。这样既减少 token 成本，也让整条链路更可控。
            </P>
          </DetailSection>

          <DetailSection title="6. 报告与 API 层">
            <P>
              `scan_service.py` 批量调度扫描流程，`report_service.py` 生成 HTML 报告，`display_payload_builder.py` 把扫描结果、LLM enrichment、多周期 candles 等组装成统一 API payload。
            </P>
          </DetailSection>

          <DetailSection title="7. 前端展示层">
            <P>
              项目有一套前端渲染逻辑，并引入了一套独立的 React + Vite SPA。包括 `pages/ReportPage.tsx`、`components/SignalCard.tsx`、`components/CandlestickChart.tsx` 等。
            </P>
          </DetailSection>

          <DetailSection title="8. 测试层 tests/">
            <P>
              测试覆盖了数据抓取与适配器、数据库、扫描与回填、Candlestick Engine、LLM integration 以及前后端 payload 兼容。
            </P>
          </DetailSection>

          <DetailSection title="附 旧规则链路 src/patterns/">
            <P>
              项目的早期版本主要依赖一套规则类做形态识别，包括 `src/patterns/` 下的若干规则类、`feature_service.py` 加载 K 线提取特征执行规则检测、`signal_service.py` 对检测结果做评分生成信号对象。
            </P>
          </DetailSection>
        </Details>

        <Details summary="声明">
          <P>
            本页面展示的是一个历史阶段的原型案例，用于说明我如何组织数据链路、分析链路和报告型前端界面。
          </P>
          <P>
            为避免将该原型误解为现实服务，本页面仅保留经过处理的静态截图与项目说明，不提供任何在线分析、实时数据、交互式扫描、下载接口或推荐功能。
          </P>
          <P>
            需要特别说明的是：页面中的截图仅用于展示界面结构与信息层级，截图内容不对应任何面向公众提供的实际在线服务，本页不提供实时行情、不提供账户能力、不提供信号推送、不提供交易入口，本页不构成任何投资分析、投资建议、收益承诺或营销宣传。
          </P>
          <P>
            我公开这一项目的目的，是展示我如何把一个复杂原型从数据、规则、解释到页面组织成完整链路，而不是对外提供任何金融、投资或交易相关服务。
          </P>
        </Details>
      </Section>
    </div>
  );
}
