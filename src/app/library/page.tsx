"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import LoginPage from "@/components/LoginPage";

export default function LibraryPage() {
  const { isAuthenticated, user } = useAuth();
  const [activeTab, setActiveTab] = useState('course');

  // 認証されていない場合はログインページを表示
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                📚 ローンチライブラリー
              </h1>
              <p className="text-gray-600 mt-1">
                PLF式ローンチの学習リソースと成功事例集
              </p>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                生成ツール
              </Link>
              <span className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium bg-blue-50">
                ライブラリー
              </span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              こんにちは、{user}さん
            </span>
            <Link 
              href="/"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm"
            >
              戻る
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* タブナビゲーション */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('course')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'course' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📖 PLF学習コース
              </button>
              <button
                onClick={() => setActiveTab('cases')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'cases' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                🏆 成功事例集
              </button>
              <button
                onClick={() => setActiveTab('practices')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'practices' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                ⭐ ベストプラクティス
              </button>
              <button
                onClick={() => setActiveTab('tutorials')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'tutorials' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                🎥 動画チュートリアル
              </button>
            </nav>
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'course' && <PLFCourseContent />}
          {activeTab === 'cases' && <SuccessCasesContent />}
          {activeTab === 'practices' && <BestPracticesContent />}
          {activeTab === 'tutorials' && <TutorialsContent />}
        </div>
      </div>
    </div>
  );
}

// PLF学習コースコンポーネント
function PLFCourseContent() {
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: 'foundation',
      title: 'PLFの基礎理論',
      duration: '30分',
      level: '初級',
      description: 'Product Launch Formulaの基本概念と歴史を学びます',
      content: `
【学習目標】
・PLFとは何かを理解する
・従来の販売手法との違いを知る
・PLFがなぜ効果的なのかを学ぶ

【レッスン内容】
1. PLFの誕生背景
   - ジェフ・ウォーカーのストーリー
   - インターネットマーケティングの進化
   - 従来手法の限界

2. PLFの核心理念
   - 価値先行の原則
   - 関係性構築の重要性
   - コミュニティの力

3. 成功の3要素
   - コンテンツ（価値提供）
   - コミュニティ（関係性）
   - 商品/サービス（解決策）

【実践ワーク】
・あなたの商品/サービスでPLFが適用できる理由を考える
・現在の販売方法との違いを分析する
      `
    },
    {
      id: 'structure',
      title: 'PLFの3段階構造',
      duration: '45分',
      level: '初級',
      description: 'Pre-Launch、Launch、Post-Launchの詳細を理解します',
      content: `
【学習目標】
・PLFの3段階構造を理解する
・各段階の目的と役割を把握する
・タイムラインの設計方法を学ぶ

【レッスン内容】
1. Pre-Launch段階（プレローンチ）
   - 期間：2-4週間
   - 目的：信頼関係構築と欲求喚起
   - 主要活動：価値あるコンテンツ提供

2. Launch段階（ローンチ）
   - 期間：3-7日間
   - 目的：実際の販売とクロージング
   - 主要活動：オファー提示と限定性演出

3. Post-Launch段階（ポストローンチ）
   - 期間：継続的
   - 目的：顧客満足度向上と次回準備
   - 主要活動：フォローアップとコミュニティ育成

【実践ワーク】
・あなたの商品に適したタイムラインを設計する
・各段階で提供する価値を明確にする
      `
    },
    {
      id: 'psychology',
      title: '購買心理学の活用',
      duration: '60分',
      level: '中級',
      description: 'PLFで使われる心理学的テクニックを深く学びます',
      content: `
【学習目標】
・購買に影響する心理的要因を理解する
・PLFで活用される心理学テクニックを学ぶ
・倫理的な活用方法を身につける

【レッスン内容】
1. 基本的な購買心理
   - 感情と論理の役割
   - 恐怖と欲求の使い分け
   - 社会的証明の力

2. PLF特有のテクニック
   - 段階的コミット
   - 権威性の演出
   - 希少性と緊急性

3. 倫理的考慮事項
   - 操作と説得の違い
   - 顧客の真の利益を考える
   - 長期的関係性の重要性

【実践ワーク】
・あなたの顧客の購買心理を分析する
・適切な心理学テクニックを選択する
      `
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📖 PLF学習コース</h2>
        <p className="text-gray-600">
          Product Launch Formulaの基礎から応用まで、体系的に学習できるコースです。
        </p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="border border-gray-200 rounded-lg">
            <div 
              className="p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{lesson.description}</p>
                  <div className="flex space-x-4 text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">⏱️ {lesson.duration}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">📊 {lesson.level}</span>
                  </div>
                </div>
                <div className="text-gray-400 text-xl ml-4">
                  {expandedLesson === lesson.id ? '▲' : '▼'}
                </div>
              </div>
            </div>
            
            {expandedLesson === lesson.id && (
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                    {lesson.content}
                  </pre>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
                    📝 学習を開始
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// 成功事例集コンポーネント
function SuccessCasesContent() {
  const cases = [
    {
      title: 'オンライン英会話スクール「FluentSpeak」',
      industry: '教育・語学',
      revenue: '月収500万円達成',
      period: '3ヶ月',
      description: '初心者向け英会話コースのローンチで驚異的な成果を達成',
      highlights: [
        '事前登録者数: 12,000人',
        'コンバージョン率: 18%',
        '平均顧客単価: 98,000円',
        '解約率: 3%以下'
      ],
      strategy: `
【成功のポイント】
1. Pre-Launch戦略
   - 無料英語診断テストで価値提供
   - 毎日の英語学習Tips配信
   - 受講生の成功ストーリー共有

2. Launch戦略
   - 限定100名の希少性演出
   - 3日間限定の早期割引
   - オンライン説明会での直接対話

3. 特徴的な施策
   - インフルエンサーとのコラボ
   - 既存受講生の推薦動画
   - 30日間返金保証で不安解消
      `,
      lessons: [
        '業界特有の不安（英語が話せない恥ずかしさ）に対する共感',
        '小さな成功体験の積み重ね設計',
        'コミュニティの力を活用した継続率向上'
      ]
    },
    {
      title: 'デジタルマーケティング講座「Growth Hacker Pro」',
      industry: 'ビジネス・マーケティング',
      revenue: '初回ローンチで3,000万円',
      period: '6週間',
      description: '中小企業経営者向けデジタルマーケティング講座の大成功事例',
      highlights: [
        '事前登録者数: 8,500人',
        'コンバージョン率: 22%',
        '平均顧客単価: 180,000円',
        '受講満足度: 96%'
      ],
      strategy: `
【成功のポイント】
1. ターゲット設定の明確化
   - 年商1億円未満の中小企業経営者
   - デジタル化に課題を感じている層
   - 具体的な売上向上を求める層

2. 価値提供の戦略
   - 無料診断ツールで現状分析
   - 業界別成功事例の詳細共有
   - 実際に使えるテンプレート提供

3. 信頼構築の仕組み
   - 講師の実績と資格の明示
   - 既存受講生の売上向上事例
   - 業界団体からの推薦状
      `,
      lessons: [
        'B2Bでの信頼構築には実績と権威性が重要',
        '具体的なROIを示すことで投資判断を促進',
        'アフターサポートの充実が口コミを生む'
      ]
    }
  ];

  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🏆 成功事例集</h2>
        <p className="text-gray-600">
          実際にPLFを活用して大きな成果を上げた事例を業界別に紹介します。
        </p>
      </div>

      <div className="space-y-6">
        {cases.map((caseStudy, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                  <div className="flex space-x-4 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{caseStudy.industry}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{caseStudy.revenue}</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">期間: {caseStudy.period}</span>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedCase(expandedCase === caseStudy.title ? null : caseStudy.title)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {expandedCase === caseStudy.title ? '▲' : '▼'}
                </button>
              </div>
              
              <p className="text-gray-700 mb-4">{caseStudy.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseStudy.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">{highlight.split(':')[0]}</div>
                    <div className="text-sm font-semibold text-gray-900">{highlight.split(':')[1]}</div>
                  </div>
                ))}
              </div>
            </div>

            {expandedCase === caseStudy.title && (
              <div className="p-6 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">🎯 戦略詳細</h4>
                    <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed bg-gray-50 p-4 rounded-lg">
                      {caseStudy.strategy}
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 学べるポイント</h4>
                    <ul className="space-y-2">
                      {caseStudy.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-sm text-gray-700">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ベストプラクティスコンポーネント
function BestPracticesContent() {
  const practices = [
    {
      category: 'オンライン教育・コーチング',
      icon: '🎓',
      recommendations: [
        {
          title: '無料コンテンツの戦略的提供',
          description: '有料コンテンツの10-15%相当の価値を無料で提供し、信頼を構築',
          examples: ['無料ミニコース', '診断ツール', 'チェックリスト']
        },
        {
          title: 'コミュニティ活用',
          description: '受講生同士の交流を促進し、継続率とLTVを向上',
          examples: ['Facebookグループ', 'オンラインサロン', '勉強会']
        },
        {
          title: '段階的価格設定',
          description: '複数の価格帯を用意し、幅広い顧客層にアプローチ',
          examples: ['ベーシック', 'スタンダード', 'プレミアム']
        }
      ]
    },
    {
      category: 'SaaS・ソフトウェア',
      icon: '💻',
      recommendations: [
        {
          title: 'フリートライアルの最適化',
          description: '14-30日間の無料体験で価値を実感してもらう',
          examples: ['機能制限なし', 'オンボーディング強化', '使用状況分析']
        },
        {
          title: '段階的機能開放',
          description: 'ローンチ期間中に新機能を順次発表し、注目度を維持',
          examples: ['β機能先行公開', 'アップデート予告', '限定アクセス']
        }
      ]
    },
    {
      category: '物販・EC',
      icon: '🛍️',
      recommendations: [
        {
          title: '限定コラボレーション',
          description: 'インフルエンサーや他ブランドとのコラボで話題性創出',
          examples: ['限定カラー', 'コラボデザイン', '特別パッケージ']
        },
        {
          title: '先行予約システム',
          description: '正式発売前の予約販売で初期売上を確保',
          examples: ['早期割引', '限定特典', '予約ランキング']
        }
      ]
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">⭐ ベストプラクティス</h2>
        <p className="text-gray-600">
          業界別の推奨手法とノウハウを集約しました。あなたの業界に最適な戦略を見つけてください。
        </p>
      </div>

      <div className="space-y-8">
        {practices.map((category, index) => (
          <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {category.recommendations.map((rec, idx) => (
                <div key={idx} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{rec.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{rec.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-600">実装例:</h5>
                    <ul className="space-y-1">
                      {rec.examples.map((example, exIdx) => (
                        <li key={exIdx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// チュートリアルコンポーネント
function TutorialsContent() {
  const tutorials = [
    {
      title: 'AIローンチくんの基本的な使い方',
      duration: '10分',
      description: '商品情報の入力からメール生成まで、基本操作を解説',
      thumbnail: '🎬',
      steps: [
        'ログイン・会員登録の方法',
        '商品名・トーンの設定',
        'メールシーケンスの生成',
        '個別・一括ダウンロード機能',
        'HTMLファイルの活用方法'
      ]
    },
    {
      title: '効果的なローンチタイムラインの設計',
      duration: '15分',
      description: '成功するローンチのタイムライン設計方法を実例で学習',
      thumbnail: '📅',
      steps: [
        'Pre-Launch期間の設定',
        'メール配信スケジュール',
        'Launch期間の最適化',
        'Post-Launchフォローアップ',
        'KPI設定と効果測定'
      ]
    },
    {
      title: 'メール内容のカスタマイズテクニック',
      duration: '20分',
      description: '生成されたメールを業界・商品に合わせてカスタマイズする方法',
      thumbnail: '✏️',
      steps: [
        '業界特有の表現への変更',
        'ターゲット顧客に合わせた調整',
        'ブランドトーンの統一',
        'CTA（行動喚起）の最適化',
        'A/Bテストの実施方法'
      ]
    },
    {
      title: 'セールスファネルとの連携',
      duration: '25分',
      description: 'PLFローンチをセールスファネル全体に組み込む方法',
      thumbnail: '🔄',
      steps: [
        'リードマグネットとの連携',
        'CRMシステムとの統合',
        'アップセル・クロスセルの設計',
        'リテンションマーケティング',
        'LTV最大化の戦略'
      ]
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🎥 動画チュートリアル</h2>
        <p className="text-gray-600">
          AIローンチくんの使い方から高度なローンチ戦略まで、動画で分かりやすく解説します。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center">
              <div className="text-6xl mb-4">{tutorial.thumbnail}</div>
              <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                ⏱️ {tutorial.duration}
              </span>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">学習内容:</h4>
                <ul className="space-y-1">
                  {tutorial.steps.map((step, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                🎬 動画を見る
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <span className="text-yellow-500 text-xl mr-3">💡</span>
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">動画チュートリアルを最大限活用するために</h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• 実際にAIローンチくんを操作しながら視聴することをお勧めします</li>
              <li>• 各チュートリアル後に、学んだ内容を自分の商品・サービスに適用してみてください</li>
              <li>• 不明な点があれば、コメント機能でお気軽にご質問ください</li>
              <li>• 新しい機能が追加される度に、チュートリアルも更新されます</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}