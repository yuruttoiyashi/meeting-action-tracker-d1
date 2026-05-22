import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  Gem,
  GraduationCap,
  Heart,
  LayoutDashboard,
  Mail,
  MapPin,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";

import portfolioImg from "./assets/portfolio.png";
import aiKnowledgeNavigatorImg from "./assets/projects/ai-knowledge-navigator.png";
import bizInsightAiImg from "./assets/projects/biz-insight-ai.png";
import phyzOpsVisionImg from "./assets/projects/phyz-ops-vision.png";
import phyzCrewPlannerImg from "./assets/projects/phyz-crew-planner.png";
import mitsumoriFlowImg from "./assets/projects/mitsumori-flow.png";
import logiRouteAiImg from "./assets/projects/logi-route-ai.png";
import workBalanceVisionImg from "./assets/projects/work-balance-vision.png";
import kaizenInsightAiImg from "./assets/projects/kaizen-insight-ai.png";
import standardWorkNavigatorAiImg from "./assets/projects/standard-work-navigator-ai.png";
import keiriAssistAiImg from "./assets/projects/Keiri_Assist_AI.png";
import workSupportCompassImg from "./assets/projects/Work-Support-Compass.png";
import itAssetVisionImg from "./assets/projects/it-asset-vision.png";
import skillGrowthMapImg from "./assets/projects/skill-growth-map.png";
import brainLinkAiImg from "./assets/projects/brain-link-ai.png";

const email = "yutanpo.fm@gmail.com";
const githubUrl = "https://github.com/yuruttoiyashi";

const projects = [
  {
    title: "Brain Link AI",
    type: "AI駆動型・パーソナルナレッジベースアプリ",
    summary:
      "日々の気づき、技術メモ、Web記事、アイデアを保存すると、Gemini APIが自動で要約・カテゴリ分類・タグ生成・キーワード抽出・次のアクション提案を行う「第二の脳」アプリです。Firebase Authenticationでユーザーごとにメモを管理し、Cloud Firestoreに保存。Gemini APIキーはフロントエンドに置かず、Firebase Functions 2nd GenとSecret Managerを通して安全に呼び出す構成にしています。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Functions",
      "Secret Manager",
      "Gemini API",
      "Callable Functions",
      "Vercel",
    ],
    liveUrl: "https://brain-link-ai.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/brain-link-ai",
    hasLive: true,
    image: brainLinkAiImg,
    imageAlt: "Brain Link AI の画面スクリーンショット",
    points: [
      "日々のメモや技術メモをFirestoreに保存し、ユーザーごとのナレッジベースとして管理",
      "Firebase Functions 2nd Gen経由でGemini APIを呼び出し、APIキーをフロントエンドに置かない安全な設計",
      "AIによる要約・カテゴリ分類・タグ生成・キーワード抽出・次アクション提案を実装",
      "タグ・キーワード・カテゴリをもとに関連メモを自動提案し、情報同士のつながりを可視化",
      "AI解析に失敗した場合でもローカル仮解析に切り替えるなど、実運用を意識したエラーハンドリングを実装",
    ],
  },
  {
    title: "AI Knowledge Navigator",
    type: "社内ナレッジ検索・根拠付きAI回答アプリ",
    summary:
      "社内マニュアル・FAQ・作業手順をCloud Firestoreに保存し、Firebase Functions経由でGemini APIを呼び出して、根拠付きAI回答とリスク分析を行うAI業務支援アプリです。単純なAIチャットではなく、登録済みナレッジを参照した回答、参照元の表示、構造化JSONによるリスク分析、評価ログ保存まで実装し、実務利用を想定したAIアプリとして制作しました。Gemini APIキーはフロントエンドに置かず、Secret Managerで安全に管理しています。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Functions",
      "Secret Manager",
      "Gemini API",
      "Callable Functions",
      "Vercel",
    ],
    liveUrl: "https://ai-knowledge-navigator-blush.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/ai-knowledge-navigator",
    hasLive: true,
    image: aiKnowledgeNavigatorImg,
    imageAlt: "AI Knowledge Navigator の画面スクリーンショット",
    points: [
      "社内マニュアル・FAQ・作業手順をFirestoreに保存し、AI回答の根拠として参照する構成を実装",
      "Firebase Functions 2nd Gen経由でGemini APIを呼び出し、APIキーをフロントエンドに置かない安全な設計",
      "AI回答に参照したナレッジタイトルを表示し、ハルシネーション対策を意識した根拠付き回答UIを制作",
      "作業メモからリスクレベル・カテゴリ・理由・推奨対応をGemini APIで構造化JSONとして生成",
      "CORS、Cloud Run Invoker、Secret Manager、Firestore権限、Geminiモデル更新など、実運用に近いデプロイ課題にも対応",
    ],
  },
  {
    title: "Skill Growth Map",
    type: "スキル成長・制作物・成長ログ可視化アプリ",
    summary:
      "学習中の技術、制作物、成長ログを一元管理し、自身のスキル形成過程を可視化するキャリア支援アプリです。スキルをカテゴリ別に整理し、到達度をスコア化してレーダーチャート風に表示できます。また、制作物と使用スキルを紐づけることで、どの作品がどのスキルを証明しているかを整理できます。ポートフォリオ提出や面接前の自己分析に活用できるよう、Markdown出力にも対応しています。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "localStorage",
      "SVG",
      "Markdown出力",
      "Vercel",
    ],
    liveUrl: "https://skill-growth-map.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/skill-growth-map",
    hasLive: true,
    image: skillGrowthMapImg,
    imageAlt: "Skill Growth Map の画面スクリーンショット",
    points: [
      "スキル・制作物・成長ログを一元管理し、転職活動向けの自己分析に活用できる構成を実装",
      "スキル到達度をスコア化し、SVGでレーダーチャート風に可視化",
      "制作物と使用スキルを紐づけ、面接時に説明しやすいポートフォリオ管理UIを制作",
      "登録内容からポートフォリオ用Markdownを自動生成し、コピー・mdファイル保存に対応",
      "localStorage保存により、ログインなしで採用担当者がデモ操作しやすい構成にした",
    ],
  },
  {
    title: "IT Asset Vision",
    type: "社内IT資産・備品管理アプリ",
    summary:
      "社内のPC・スマートフォン・モニター・周辺機器・ソフトウェアライセンスなどのIT資産を一元管理する業務支援アプリです。資産登録、貸出状況、故障状況、保証期限、棚卸確認状況をダッシュボードで可視化し、社内SEや総務部門で発生しやすい備品管理の属人化・管理漏れを防ぐことを目的に制作しました。Firebase AuthenticationによるGoogleログインと、Cloud Firestoreによるユーザー別データ保存に対応しています。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "Vercel",
      "CSV出力",
    ],
    liveUrl: "https://it-asset-vision.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/it-asset-vision",
    hasLive: true,
    image: itAssetVisionImg,
    imageAlt: "IT Asset Vision の画面スクリーンショット",
    points: [
      "社内SE・総務部門でのIT資産管理を想定した業務アプリとして制作",
      "PC・スマートフォン・モニター・ライセンスなどをカテゴリ別に登録・管理",
      "貸出中・故障中・保証期限30日以内・棚卸確認が必要な資産をダッシュボードで可視化",
      "Firebase AuthenticationによるGoogleログインと、Firestoreによるユーザー別クラウド保存に対応",
      "検索・ステータス絞り込み・カテゴリ絞り込み・CSV出力に対応し、管理台帳として使いやすい構成にした",
    ],
  },
  {
    title: "Work Support Compass",
    type: "合理的配慮・就労定着支援管理アプリ",
    summary:
      "障害者雇用・復職支援・就労定着支援の現場を想定し、面談記録、合理的配慮、支援プラン、リスクアラートを一元管理できる業務支援アプリです。本人の困りごとを、業務上の影響・必要な配慮・次回アクションとして整理し、支援担当者や管理者が対応状況を把握しやすくすることを目的に制作しました。Firebase AuthenticationによるGoogleログインと、Cloud Firestoreによるユーザー別データ保存に対応しています。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "Vercel",
    ],
    liveUrl: "https://work-support-compass.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/work-support-compass",
    hasLive: true,
    image: workSupportCompassImg,
    imageAlt: "Work Support Compass の画面スクリーンショット",
    points: [
      "障害者雇用・復職支援・就労定着支援を想定した企業向け管理画面を制作",
      "面談記録、合理的配慮、支援プラン、リスクアラートを一元管理",
      "入力された面談内容からリスクレベルを簡易判定し、ダッシュボードへ反映",
      "Firebase AuthenticationによるGoogleログインと、Firestoreによるユーザー別クラウド保存に対応",
      "個別支援状況レポートをA4印刷できるようにし、面談資料・社内共有資料として使える構成にした",
    ],
  },
  {
    title: "Standard Work Navigator AI",
    type: "標準作業手順・新人教育支援AIアプリ",
    summary:
      "現場作業や事務作業の手順を標準化し、新人教育・引き継ぎ・属人化防止を支援する業務改善アプリです。作業手順、注意点、よくあるミス、チェック項目を登録すると、Firebase Functions経由でGemini APIを呼び出し、新人向けの作業概要、教育ポイント、リスク、標準チェックリスト、引き継ぎメモを自動生成します。A4印刷にも対応し、職場提出用の標準作業手順書として活用できる構成にしました。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Firebase",
      "Firebase Functions",
      "Secret Manager",
      "Gemini API",
      "Vercel",
    ],
    liveUrl: "https://standard-work-navigator-ai.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/standard-work-navigator-ai",
    hasLive: true,
    image: standardWorkNavigatorAiImg,
    imageAlt: "Standard Work Navigator AI の画面スクリーンショット",
    points: [
      "作業手順・注意点・チェック項目を一元管理し、標準作業化を支援",
      "Firebase Functions経由でGemini APIを呼び出し、APIキーをフロントに置かない安全な構成",
      "新人教育向けの要点、リスク、引き継ぎメモ、標準チェックリストをAI生成",
      "A4印刷に対応し、職場提出・掲示・教育資料として使えるUIを実装",
      "Cloud Functions / Cloud Run / Secret Manager の設定まで含めて実装",
    ],
  },
  {
    title: "Keiri Assist AI",
    type: "経理向け勘定科目アシストAIアプリ",
    summary:
      "経理担当者や申請者が入力した取引内容をもとに、Gemini API が勘定科目・借方科目・貸方科目・税区分・判断理由を提案する経理支援アプリです。経理判断の確認負荷を減らし、申請内容の確認や仕訳候補の整理をスムーズにすることを目的に制作しました。Firebase Functions経由でGemini APIを呼び出し、APIキーをフロントエンドに置かない構成にしています。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Firebase",
      "Firebase Functions",
      "Gemini API",
      "Secret Manager",
      "Vercel",
    ],
    liveUrl: "https://keiri-assist-ai.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/keiri-assist-ai",
    hasLive: true,
    image: keiriAssistAiImg,
    imageAlt: "Keiri Assist AI の画面スクリーンショット",
    points: [
      "取引内容から勘定科目・借方科目・貸方科目・税区分の候補をAI生成",
      "Firebase Functions経由でGemini APIを呼び出し、APIキーを安全に管理",
      "経理確認の流れを意識した入力フォームとダッシュボードUIを実装",
      "申請内容の確認・仕訳候補の整理・判断理由の表示に対応",
      "経理事務経験とAI活用を組み合わせた業務支援アプリとして制作",
    ],
  },
  {
    title: "Work Balance Vision",
    type: "就労コンディション・業務支援ダッシュボード",
    summary:
      "従業員の日々の体調・気分・集中度・業務進捗を見える化し、管理者が早期フォローにつなげるための就労コンディション管理ダッシュボードです。体調不良・進捗遅れ・支援依頼を自動でアラート表示し、CSV取込・CSV出力、入力履歴の編集・削除にも対応しています。公開デモ版では、採用担当者がログインなしで自由に操作できるよう、データは各ブラウザのlocalStorageに保存されます。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "localStorage",
      "CSV処理",
      "Vercel",
    ],
    liveUrl: "https://work-balance-vision.vercel.app",
    githubUrl: "https://github.com/yuruttoiyashi/work-balance-vision",
    hasLive: true,
    image: workBalanceVisionImg,
    imageAlt: "Work Balance Vision の画面スクリーンショット",
    points: [
      "採用担当者がログインなしで自由に操作できる公開デモ仕様",
      "体調不良・進捗遅れ・支援依頼を自動でアラート表示",
      "CSV取込・CSV出力・編集・削除に対応した実務向けダッシュボード",
      "実運用ではFirebase AuthenticationとFirestore連携を想定した設計",
    ],
  },
  {
    title: "Kaizen Insight AI",
    type: "現場改善・ヒヤリハット管理AIアプリ",
    summary:
      "物流・倉庫・事務現場で発生するヒヤリハットや改善提案を一元管理し、AIによる要約・改善アクション提案まで行える業務改善支援アプリです。Cloud Firestoreによるデータ保存、Firebase Functions経由のGemini API連携、カテゴリ別・優先度別のダッシュボード表示に対応しています。",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Cloud Firestore",
      "Firebase Functions",
      "Gemini API",
      "Vercel",
    ],
    liveUrl: "https://kaizen-insight-ai.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/kaizen-insight-ai",
    hasLive: true,
    image: kaizenInsightAiImg,
    imageAlt: "Kaizen Insight AI の画面スクリーンショット",
    points: [
      "現場のヒヤリハット・改善提案をFirestoreに保存し、再読み込み後もデータが残る構成",
      "Firebase Functions経由でGemini APIを呼び出し、AI要約と改善アクション案を生成",
      "カテゴリ別・優先度別・担当者別に改善状況を可視化するダッシュボードを実装",
      "物流・倉庫現場での業務改善活動を想定した実務向けUI設計",
    ],
  },
  {
    title: "LogiRoute AI",
    type: "配送管理・遅延リスク分析アプリ",
    summary:
      "配送データ管理、地図表示、ルート可視化、AIによる遅延リスク分析を組み合わせた物流向けアプリです。現場向けダッシュボードと、業務改善視点の可視化を意識して設計しました。",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Google Maps API",
      "Gemini API",
    ],
    liveUrl: "https://logi-route-ai.vercel.app",
    githubUrl: "https://github.com/yuruttoiyashi/Logi-Route-Ai.git",
    hasLive: true,
    image: logiRouteAiImg,
    imageAlt: "LogiRoute AI の画面スクリーンショット",
    points: [
      "AI × 地図 × 配送管理を組み合わせた構成",
      "配送状況を見やすく整理したマップUI",
      "実務テーマを意識したデータ設計と画面構成",
    ],
  },
  {
    title: "Biz Insight AI",
    type: "CSV分析・AIインサイト可視化アプリ",
    summary:
      "CSVデータを取り込み、AIによる要約・分析結果を画面上で確認できる業務改善向けアプリです。数値や傾向を見やすく整理し、データから気づきを得やすいUIを意識して制作しました。",
    tech: ["React", "Vite", "TypeScript", "Firebase", "Gemini API", "Vercel"],
    liveUrl: "https://biz-insight-ai.vercel.app",
    githubUrl: "https://github.com/yuruttoiyashi/Biz-Insight-AI",
    hasLive: true,
    image: bizInsightAiImg,
    imageAlt: "Biz Insight AI の画面スクリーンショット",
    points: [
      "CSVデータの取り込みと一覧表示に対応",
      "AIによる要約・分析結果を確認できる構成",
      "ポートフォリオとして見せやすい業務向けダッシュボードUIを意識",
    ],
  },
  {
    title: "Phyz Ops Vision",
    type: "庫内オペレーション可視化・進捗管理アプリ",
    summary:
      "庫内業務の進捗状況やアラートを可視化する業務改善アプリです。進捗一覧、割り当て、アラート管理などを通じて、現場状況を把握しやすい構成を意識して制作しました。",
    tech: ["React", "Vite", "TypeScript", "Supabase"],
    liveUrl: "https://phyz-ops-vision-fczl.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/PHYZ-OPS-VISION",
    hasLive: true,
    image: phyzOpsVisionImg,
    imageAlt: "Phyz Ops Vision の画面スクリーンショット",
    points: [
      "進捗状況を見やすく整理したダッシュボード構成",
      "実データ連携を意識したテーブル設計と画面構成",
      "アラートや割り当てなど現場運用を想定した機能を実装",
    ],
  },
  {
    title: "Phyz Crew Planner",
    type: "物流現場向け人員配置・不足可視化アプリ",
    summary:
      "スタッフごとのスキル登録、当日の必要人数設定、配置確定、不足・未配置スタッフの可視化を行うWebアプリです。必要人数と実配置人数の比較表示、ドラッグ＆ドロップによる当日配置、保存後のダッシュボード反映まで実装しています。",
    tech: ["React", "Vite", "TypeScript", "Firebase", "Cloud Firestore"],
    liveUrl: "https://phyz-crew-planner.web.app",
    githubUrl: "https://github.com/yuruttoiyashi/phyz-crew-planner",
    hasLive: true,
    image: phyzCrewPlannerImg,
    imageAlt: "Phyz Crew Planner の画面スクリーンショット",
    points: [
      "物流現場の当日配置判断を意識したUI設計",
      "不足・充足・余剰を色分けで可視化",
      "ドラッグ操作の課題に対して自動スクロールとクイックドロップUIを追加",
    ],
  },
  {
    title: "Mitsumori Flow",
    type: "見積・案件管理アプリ",
    summary:
      "見積作成や明細管理を効率化する業務改善アプリです。入力しやすさ、一覧性、編集しやすさを重視し、業務フローに沿った画面構成で制作しました。",
    tech: ["React", "Vite", "TypeScript", "Firebase"],
    liveUrl: "https://mitsumori-flow.vercel.app/",
    githubUrl: "https://github.com/yuruttoiyashi/Mitsumori-Flow",
    hasLive: true,
    image: mitsumoriFlowImg,
    imageAlt: "Mitsumori Flow の画面スクリーンショット",
    points: [
      "業務改善を意識した入力体験",
      "実務で迷いにくい画面整理",
      "見積作成フローを意識した設計",
    ],
  },
];

const featuredProjects = [
  {
    title: "Brain Link AI",
    text: "第二の脳 × Gemini API × Firebase Functions",
    href: "#projects",
  },
  {
    title: "AI Knowledge Navigator",
    text: "RAG風ナレッジ検索 × Gemini API × Firebase Functions",
    href: "#projects",
  },
  {
    title: "Skill Growth Map",
    text: "スキル可視化 × 成長ログ × Markdown出力",
    href: "#projects",
  },
  {
    title: "IT Asset Vision",
    text: "IT資産管理 × Firebase × 社内SE向け管理画面",
    href: "#projects",
  },
  {
    title: "Work Support Compass",
    text: "合理的配慮 × 就労定着支援 × Firebase",
    href: "#projects",
  },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: [
      "React",
      "Vite",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SVG",
    ],
  },
  {
    icon: Database,
    title: "Backend / DB",
    items: [
      "Firebase",
      "Cloud Firestore",
      "Firebase Functions",
      "Callable Functions",
      "Secret Manager",
      "Supabase",
      "Google Apps Script",
      "Gemini API連携",
    ],
  },
  {
    icon: Wrench,
    title: "Automation / Business Tools",
    items: [
      "Python",
      "VBA",
      "openpyxl",
      "CSV自動化",
      "localStorage",
      "Markdown出力",
      "業務改善ツール開発",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Strengths",
    items: [
      "物流業務視点",
      "経理事務経験",
      "現場向けUI設計",
      "業務フロー整理",
      "AI活用設計",
      "可視化ダッシュボード",
      "運用を意識した設計",
    ],
  },
];

const softTags = [
  "物流テーマ",
  "経理支援",
  "業務改善",
  "ダッシュボード",
  "入力業務効率化",
  "可視化UI",
  "AI活用",
  "ナレッジベース",
  "第二の脳",
  "AI要約",
  "タグ自動生成",
  "関連メモ提案",
  "Gemini API",
  "Firebase Functions",
  "標準作業",
  "新人教育",
  "就労支援",
  "合理的配慮",
  "IT資産管理",
  "社内SE向け管理画面",
  "備品管理",
  "スキル可視化",
  "成長ログ",
  "Markdown出力",
  "レーダーチャート",
];

function SectionTitle({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p
          className="text-lg text-rose-400"
          style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
        >
          {en}
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
          {ja}
        </h2>
      </div>
      <div className="hidden h-px flex-1 bg-gradient-to-r from-rose-200 via-sky-200 to-transparent md:block" />
    </div>
  );
}

function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/80 bg-white/85 shadow-xl shadow-rose-100/50 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function Pill({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "rose" | "slate";
}) {
  const toneClass =
    tone === "rose"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : tone === "slate"
        ? "border-slate-200 bg-white text-slate-700"
        : "border-sky-200 bg-sky-50 text-sky-700";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${toneClass}`}>
      {children}
    </span>
  );
}

function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const className =
    variant === "primary"
      ? "bg-slate-950 text-white shadow-lg shadow-slate-300/40 hover:-translate-y-0.5 hover:bg-slate-800"
      : "border border-slate-200 bg-white/80 text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-bold transition ${className}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      window.alert("メールアドレスをコピーしました");
    } catch {
      window.alert(`メールアドレス: ${email}`);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rose-200/60 blur-3xl" />
        <div className="absolute left-[-8rem] top-72 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-1/4 h-96 w-96 rounded-full bg-pink-100/70 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/80 bg-white/75 shadow-sm shadow-rose-100/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <a href="#top" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-rose-100 transition group-hover:-rotate-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p
                className="text-base text-rose-400"
                style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
              >
                Job Portfolio
              </p>
              <h1 className="text-base font-black tracking-wide text-slate-950">
                佐藤祐美 Portfolio
              </h1>
            </div>
          </a>

          <nav className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-rose-500">
              About
            </a>
            <a href="#strengths" className="transition hover:text-rose-500">
              Strengths
            </a>
            <a href="#skills" className="transition hover:text-rose-500">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-rose-500">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-rose-500">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.08fr_0.92fr] md:px-6 md:py-24">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm font-bold text-rose-600 shadow-sm">
              <Heart className="h-4 w-4" />
              転職活動用ポートフォリオ
            </span>

            <p
              className="mt-8 text-2xl text-rose-400 md:text-3xl"
              style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
            >
              Business Card Portfolio
            </p>

            <h2 className="mt-3 text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
              佐藤 祐美
            </h2>

            <p className="mt-5 text-xl font-bold leading-9 text-slate-800 md:text-2xl">
              AI活用型フロントエンド / 業務改善アプリ制作者
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              React / TypeScript / Firebase / Supabase / Gemini API を使い、物流・経理支援・AI活用・管理画面・ダッシュボードを中心に、実務を意識した業務アプリを制作しています。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="#projects">
                制作実績を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>

              <LinkButton href="#contact" variant="ghost">
                連絡先を見る
              </LinkButton>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProjects.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-[1.5rem] border border-white/80 bg-white/80 p-4 shadow-lg shadow-rose-100/40 transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-rose-50 to-sky-50 text-slate-700">
                    {index + 1}
                  </div>
                  <p className="text-sm font-black text-slate-950 group-hover:text-rose-600">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{item.text}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-rose-100" />
            <div className="absolute -left-8 bottom-10 h-24 w-24 rounded-full bg-sky-100" />

            <SoftCard className="relative overflow-hidden p-7 md:p-8">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-[6rem] bg-gradient-to-br from-rose-100 to-sky-100" />
              <div className="relative">
                <div className="ml-auto w-full max-w-[320px]">
                  <div className="overflow-hidden rounded-[2rem] border border-rose-100 bg-white/80 p-3 shadow-lg shadow-rose-100/50">
                    <img
                      src={portfolioImg}
                      alt="佐藤祐美のプロフィールイラスト"
                      className="w-full rounded-[1.5rem] object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-slate-100 bg-white/80 p-5">
                  <div className="mb-4 flex items-center gap-3 text-slate-950">
                    <UserRound className="h-5 w-5 text-sky-500" />
                    <p className="font-black">プロフィール</p>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    React / TypeScript / Firebase を中心に、物流・経理・社内管理・支援業務をテーマにしたWebアプリを制作。AI API連携、Firestore保存、ダッシュボード化、A4印刷対応など、実務で使われることを意識した設計が強みです。
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "業務改善", icon: LayoutDashboard },
                    { label: "AI連携", icon: Sparkles },
                    { label: "実務UI", icon: BadgeCheck },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-100 bg-white/70 p-4 text-center"
                      >
                        <Icon className="mx-auto h-5 w-5 text-rose-400" />
                        <p className="mt-2 text-xs font-bold text-slate-700">{item.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SoftCard>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-10 md:px-6 md:py-14">
          <SoftCard className="p-7 md:p-10">
            <SectionTitle en="About" ja="自己紹介" />

            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4 text-slate-600">
                <p className="leading-8">
                  物流・業務改善をテーマに、現場で使う人の流れを意識したWebアプリ制作に取り組んでいます。React・TypeScript・Firebase・Supabase・Gemini API を中心に、管理画面、ダッシュボード、入力業務を効率化するアプリを制作してきました。
                </p>

                <p className="leading-8">
                  Excel・VBA・Google Apps Script・Python での業務改善の学習と経験を土台に、現在はWebアプリ開発とAI活用アプリの制作まで広げています。業務の流れを整理し、必要な情報を見やすく伝え、使いやすい画面に落とし込むことを大切にしています。
                </p>

                <p className="leading-8">
                  単に画面を作るだけではなく、現場で役立つ業務改善につながる設計を意識している点が強みです。今後は Webアプリ開発・社内システム開発・AI活用支援の領域で、より実務経験を積んでいきたいと考えています。
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-rose-100 bg-rose-50/70 p-5">
                  <div className="flex items-center gap-3 text-rose-500">
                    <Briefcase className="h-5 w-5" />
                    <p className="font-black text-slate-950">目指している方向性</p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Webアプリ開発、業務改善システム、社内向けツール、現場向けの管理画面やダッシュボード、AI活用支援領域で力を伸ばしていきたいと考えています。
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50/80 p-5">
                  <div className="flex items-center gap-3 text-sky-500">
                    <GraduationCap className="h-5 w-5" />
                    <p className="font-black text-slate-950">保有スキルの土台</p>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    高校卒業後は半年間、経理事務として小口現金管理、振込業務、決算処理補助、伝票作成・管理などを担当しました。その後、Excel・VBA・業務自動化から学習を積み重ね、現在は React / TypeScript / Firebase / Supabase / Gemini API を使ったアプリ開発に取り組んでいます。
                  </p>
                </div>
              </div>
            </div>
          </SoftCard>
        </section>

        <section id="summary" className="mx-auto max-w-6xl px-5 py-10 md:px-6">
          <SectionTitle en="Career Summary" ja="職務要約" />

          <SoftCard className="p-7 md:p-10">
            <p className="leading-8 text-slate-600">
              高校卒業後は半年間、経理事務として小口現金管理、振込業務、決算処理補助、伝票作成・管理などを担当し、業務の正確さや事務フローへの理解を身につけました。その後、Excel・VBA を起点に業務自動化や業務改善に取り組み、Google Apps Script、Python、React / TypeScript / Firebase / Supabase を用いた Webアプリ開発へと学習と制作の幅を広げてきました。
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              ファイズオペレーションズ株式会社では、フォークリフト監査管理システムを VBA で開発した経験があり、現場運用を意識した仕組みづくりに関心を深めてきました。物流や現場業務をテーマに、管理画面、ダッシュボード、入力業務効率化アプリ、AI活用アプリなどを制作し、必要な情報を整理して見やすく伝えるUI設計を意識しています。
            </p>
          </SoftCard>
        </section>

        <section id="qualifications" className="mx-auto max-w-6xl px-5 py-10 md:px-6">
          <SectionTitle en="Qualifications" ja="保有資格" />

          <div className="grid gap-6 md:grid-cols-2">
            <SoftCard className="p-6">
              <div className="flex items-center gap-3 text-rose-500">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-lg font-black text-slate-950">日商簿記3級</h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                数字や業務の流れを理解する土台として活かしています。売上・原価・在庫など、業務改善アプリを考える際の視点にもつながっています。
              </p>
            </SoftCard>

            <SoftCard className="p-6">
              <div className="flex items-center gap-3 text-sky-500">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-lg font-black text-slate-950">MOS Excel（940点合格）</h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Excel を使った実務や自動化学習の基礎として活用してきました。表計算、データ整理、入力業務効率化の視点に強みがあります。
              </p>
            </SoftCard>
          </div>
        </section>

        <section id="target-role" className="mx-auto max-w-6xl px-5 py-10 md:px-6">
          <SectionTitle en="Target Role" ja="目指す職種" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Webアプリ開発",
                text: "React / TypeScript を活かして、管理画面や業務システムの開発に携わりたいと考えています。",
              },
              {
                title: "業務改善・社内システム開発",
                text: "現場での困りごとを整理し、使いやすい仕組みやアプリに落とし込む仕事に興味があります。",
              },
              {
                title: "AI活用・業務支援アプリ開発",
                text: "Gemini APIやFirebase Functionsを活用し、社内ナレッジ検索、リスク分析、業務判断支援などのAI活用領域にも取り組みたいです。",
              },
            ].map((item, index) => (
              <SoftCard key={item.title} className="p-6">
                <div className="flex items-center gap-3 text-slate-950">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                      index === 1 ? "bg-sky-50 text-sky-500" : "bg-rose-50 text-rose-500"
                    }`}
                  >
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </SoftCard>
            ))}
          </div>
        </section>

        <section id="strengths" className="mx-auto max-w-6xl px-5 py-10 md:px-6">
          <SectionTitle en="Strengths" ja="強み" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "実務テーマで考えられる",
                text: "物流・経理・就労支援・IT資産管理・AI活用・業務改善・キャリア支援など、実際の業務や利用場面を意識したテーマ設定でアプリを組み立てています。",
              },
              {
                icon: LayoutDashboard,
                title: "見やすいUIに落とし込める",
                text: "必要人数、不足状況、未対応項目、確認が必要な内容、スキル成長状況など、判断に必要な情報を整理して見せることを得意としています。",
              },
              {
                icon: Wrench,
                title: "改善まで踏み込める",
                text: "実装後の操作感を見ながら、自動スクロール、クイック操作、AI回答の根拠表示、API連携の安全性、Markdown出力などの改善を加える姿勢を大切にしています。",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <SoftCard key={item.title} className="p-6">
                  <div
                    className={`inline-flex rounded-2xl p-3 ${
                      index === 1 ? "bg-sky-50 text-sky-500" : "bg-rose-50 text-rose-500"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </SoftCard>
              );
            })}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-14 md:px-6">
          <SectionTitle en="Skills" ja="スキル" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill, skillIndex) => {
              const Icon = skill.icon;

              return (
                <SoftCard key={skill.title} className="p-6">
                  <div
                    className={`inline-flex rounded-2xl p-3 ${
                      skillIndex % 2 === 0 ? "bg-rose-50 text-rose-500" : "bg-sky-50 text-sky-500"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-950">{skill.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item, index) => (
                      <Pill
                        key={item}
                        tone={index % 3 === 0 ? "rose" : index % 3 === 1 ? "blue" : "slate"}
                      >
                        {item}
                      </Pill>
                    ))}
                  </div>
                </SoftCard>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-8 md:px-6">
          <SoftCard className="p-7 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Gem className="h-5 w-5 text-rose-400" />
              <h3 className="text-xl font-black text-slate-950">得意テーマ</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softTags.map((item, index) => (
                <Pill
                  key={item}
                  tone={index % 3 === 0 ? "rose" : index % 3 === 1 ? "blue" : "slate"}
                >
                  {item}
                </Pill>
              ))}
            </div>
          </SoftCard>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-14 pb-16 md:px-6">
          <SectionTitle en="Projects" ja="制作実績" />

          <div className="grid gap-7">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-xl shadow-rose-100/50 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-100"
              >
                <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="p-6 md:p-8">
                    <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-rose-50 to-sky-50 p-2">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="aspect-video w-full rounded-[1.1rem] object-cover shadow-sm"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Pill tone={index % 2 === 0 ? "rose" : "blue"}>{project.type}</Pill>
                    </div>

                    <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">{project.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item, techIndex) => (
                        <Pill
                          key={item}
                          tone={
                            techIndex % 3 === 0
                              ? "rose"
                              : techIndex % 3 === 1
                                ? "blue"
                                : "slate"
                          }
                        >
                          {item}
                        </Pill>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between border-t border-slate-100 bg-gradient-to-br from-rose-50/80 to-sky-50/80 p-6 md:p-8 lg:border-l lg:border-t-0">
                    <div>
                      <p
                        className="text-xl text-rose-400"
                        style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
                      >
                        Project Point
                      </p>

                      <div className="mt-4 rounded-[1.5rem] border border-white/80 bg-white/80 p-5">
                        <p className="text-sm font-black text-slate-950">工夫した点</p>

                        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                          {project.points.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 space-y-3">
                        {project.hasLive ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
                          >
                            公開ページを見る
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-500">
                            現在は公開停止中
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-white"
                        >
                          GitHubを見る
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <div className="mt-8 rounded-[1.5rem] border border-white/80 bg-white/70 p-4 text-sm leading-7 text-slate-600">
                      実務を意識したテーマ設定、可視化、操作性改善までを一貫して考えて制作しています。
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="mx-auto max-w-6xl px-5 py-10 md:px-6">
          <SectionTitle en="Tools / Environment" ja="使用ツール / 開発環境" />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "業務・事務系",
                items: ["Excel", "VBA", "Notes", "Google スプレッドシート"],
              },
              {
                title: "開発・データ",
                items: [
                  "React",
                  "TypeScript",
                  "Firebase",
                  "Cloud Firestore",
                  "Firebase Functions",
                  "Callable Functions",
                  "Secret Manager",
                  "Supabase",
                  "Python",
                  "Google Apps Script",
                  "localStorage",
                  "SVG",
                  "Markdown出力",
                ],
              },
              {
                title: "AI 活用",
                items: [
                  "ChatGPT",
                  "Gemini",
                  "Gemini API",
                  "Firebase Functions経由のAI連携",
                  "根拠付きAI回答",
                  "リスク分析の構造化出力",
                  "設計補助、実装補助、改善検討",
                ],
              },
            ].map((item, index) => (
              <SoftCard key={item.title} className="p-6">
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  {item.items.map((tool) => (
                    <li key={tool} className="flex gap-2">
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          index % 2 === 0 ? "bg-rose-400" : "bg-sky-400"
                        }`}
                      />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </SoftCard>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-24 pt-10 md:px-6">
          <SoftCard className="overflow-hidden p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
              <div>
                <SectionTitle en="Contact" ja="連絡先" />

                <p className="max-w-2xl leading-8 text-slate-600">
                  採用に関するご連絡や、ポートフォリオの詳細確認などがありましたら、下記よりご確認ください。ブラウザやPCの設定によっては、メールソフトが未設定だと「メールで連絡する」ボタンが反応しないように見える場合があります。
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-rose-100 bg-rose-50/70 p-4 text-slate-700">
                    <p className="text-sm font-bold text-rose-500">Email</p>
                    <p className="mt-2 break-all text-base font-black">{email}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-sky-100 bg-sky-50/80 p-4 text-slate-700">
                    <p className="text-sm font-bold text-sky-500">GitHub</p>
                    <p className="mt-2 break-all text-base font-black">
                      github.com/yuruttoiyashi
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    メールで連絡する
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/85 px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    メールアドレスをコピー
                  </button>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/85 px-6 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    GitHubプロフィール
                  </a>
                </div>
              </div>

              <div className="relative rounded-[2rem] border border-white/80 bg-gradient-to-br from-rose-100 via-white to-sky-100 p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-rose-400 shadow-lg shadow-rose-100">
                  <Heart className="h-9 w-9" />
                </div>
                <p className="mt-6 text-lg font-black leading-8 text-slate-950">
                  障害者雇用・社内SE・AI活用支援・業務改善ポジションを目指し、実務課題を想定したWebアプリを継続制作しています。
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  Kanagawa / Remote Work Available
                </div>
              </div>
            </div>
          </SoftCard>
        </section>
      </main>
    </div>
  );
}