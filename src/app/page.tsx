"use client";

import { useState } from "react";

interface FormData {
  productName: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    productName: "",
  });

  const [generatedContent, setGeneratedContent] = useState<{
    email1: string;
    email2: string;
    email3: string;
    email4: string;
    email5: string;
    script: string;
  } | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateContent = async () => {
    setIsGenerating(true);
    
    const email1 = generateEmail1(formData);
    const email2 = generateEmail2(formData);
    const email3 = generateEmail3(formData);
    const email4 = generateEmail4(formData);
    const email5 = generateEmail5(formData);
    const script = generateScript(formData);

    setGeneratedContent({
      email1,
      email2,
      email3,
      email4,
      email5,
      script,
    });
    
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">
            プロダクトローンチ自動生成ツール
          </h1>
          <p className="text-gray-600 mt-1">
            商品情報を入力すると、メールシーケンスと面談スクリプトを自動生成します
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* 左カラム：入力フォーム */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4">商品情報入力</h2>
              
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    PLF式ローンチ自動生成
                  </h3>
                  <p className="text-gray-600 text-sm">
                    商品名を入力するだけで、実績あるローンチシーケンスを自動生成
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    商品・サービス名 *
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    placeholder="例: ノマドエンジニア育成講座"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">📊 生成される内容</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 5つのメールシーケンス</li>
                    <li>• 面談用トークスクリプト</li>
                    <li>• iSara式の実績あるテンプレート</li>
                    <li>• PLF理論に基づく構成</li>
                  </ul>
                </div>

                <button
                  onClick={generateContent}
                  disabled={isGenerating || !formData.productName}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
                >
                  {isGenerating ? "生成中..." : "コンテンツを生成"}
                </button>
              </div>
            </div>
          </div>

          {/* 中央カラム：メール出力 */}
          <div className="lg:col-span-1">
            {generatedContent ? (
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">
                    【メール①】資料案内 & 事前質問フォーム
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs text-gray-800">
                      {generatedContent.email1}
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-700">
                    【メール②】質問への回答
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs text-gray-800">
                      {generatedContent.email2}
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-700">
                    【メール③】募集当日の朝メール
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs text-gray-800">
                      {generatedContent.email3}
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-700">
                    【メール④】募集開始 & 面談希望日の提出
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs text-gray-800">
                      {generatedContent.email4}
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 text-orange-700">
                    【メール⑤】面談の実施
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs text-gray-800">
                      {generatedContent.email5}
                    </pre>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-700">
                    【スクリプト】面談用トークスクリプト
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs text-gray-800">
                      {generatedContent.script}
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  生成されたコンテンツがここに表示されます
                </h3>
                <p className="text-sm text-gray-500">
                  左側のフォームに商品情報を入力して、「コンテンツを生成」ボタンを押してください
                </p>
              </div>
            )}
          </div>

          {/* 右カラム：ポイント解説 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-4 text-orange-700">📝 PLF式ローンチ戦略のポイント</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-3 rounded-md">
                  <h3 className="font-semibold text-blue-700 mb-2">【メール①】資料案内 & 事前質問フォーム</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 信頼関係の構築から開始</li>
                    <li>• 資料で価値を先行提供</li>
                    <li>• 参加フローの明確化</li>
                    <li>• 迷惑メール対策も忘れずに</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded-md">
                  <h3 className="font-semibold text-green-700 mb-2">【メール②】質問への回答</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• アンケート結果を活用</li>
                    <li>• 講座内容への反映をアピール</li>
                    <li>• Q&A形式で不安を解消</li>
                    <li>• 次回募集への期待感醸成</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-3 rounded-md">
                  <h3 className="font-semibold text-yellow-700 mb-2">【メール③】募集当日の朝メール</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 募集開始の最終予告</li>
                    <li>• よくある質問を事前回答</li>
                    <li>• 申請フォームの詳細説明</li>
                    <li>• 心理的準備を整える</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-3 rounded-md">
                  <h3 className="font-semibold text-red-700 mb-2">【メール④】募集開始 & 面談希望日提出</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 明確な行動指示（申請URL）</li>
                    <li>• プログラム概要の再確認</li>
                    <li>• 限定性の強調（先着制）</li>
                    <li>• 配信停止オプションの提供</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-3 rounded-md">
                  <h3 className="font-semibold text-orange-700 mb-2">【メール⑤】面談実施</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 面談の目的と流れを明確化</li>
                    <li>• 15分間の効率的な構成</li>
                    <li>• リラックスした雰囲気作り</li>
                    <li>• 個別スケジュール調整</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-3 rounded-md">
                  <h3 className="font-semibold text-purple-700 mb-2">【面談スクリプト】実績あるクロージング手法</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 審査形式で価値を高める</li>
                    <li>• 仮クロージングを2回実施</li>
                    <li>• 不安要素を事前に全て解消</li>
                    <li>• 合格発表で特別感を演出</li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-4 rounded-md">
                  <h4 className="font-semibold text-gray-800 mb-2">🎯 iSara実績データ</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• 600名応募→10名限定の高倍率</li>
                    <li>• 面談実施率：ほぼ100%</li>
                    <li>• 面談から成約率：約80%</li>
                    <li>• 外貨獲得サロン：678名→10名</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-md">
                  <h4 className="font-semibold text-indigo-800 mb-2">💡 PLF成功の9つのトリガー</h4>
                  <ul className="text-xs text-indigo-700 space-y-1">
                    <li>• 権威性・返報性・信頼</li>
                    <li>• 期待・好感度・イベント</li>
                    <li>• コミュニティ・限定性・社会的証明</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function generateEmail1(formData: FormData): string {
  return `件名: 【資料請求完了】${formData.productName}の資料をお送りします

お忙しい中、お時間をいただきありがとうございます。

${formData.productName} 代表の○○と申します。
この度は、お問合わせ＆資料請求をいただき、ありがとうございます！
ご興味をもっていただき、大変うれしく思います。

本メールに講座のPDF資料を添付させていただきますので、ご確認ください。

【${formData.productName} 資料はこちら】
https://example.com/resource

※上記リンクからご覧になれます。
（スマホで読み込みエラーが発生する場合、PCからご覧ください）

${formData.productName}次回開催日程は、現在未定となっております。
開催日が決まり次第、本メールアドレスより告知いたします。

＝＝＝＝＝＝＝＝＝＝＝＝＝
最後に、スケジュールについてご案内いたします。

【今後の${formData.productName}開催スケジュール】
・第○期：2024年○月開催予定
・第○期：開催時期調整中

※日程が決まり次第ご連絡いたします。
そのタイミングで、「${formData.productName} 事前面談＆説明」の受付も開始いたします。
もしご興味があればご応募ください。

＜参加までの流れ＞
１資料請求　←現在はここです。
２事前面談＆説明（ここまで無料）
３事前学習期間＆サポート
４本講座実施
５受講後サポート期間

■もちろん、面談にて内容を確認してから、参加可否をご判断いただいても大丈夫です。
ただし、定員に限りがあるため、満員となる場合がございます。

通話面談内容ですが、${formData.productName}の詳細などを説明させていただきます。
また、どんなことを学びたいか、何か不安点がないかといったことについてお話を伺いたく思っています。

もちろん、面談後にご参加の可否をご判断いただいて大丈夫です。

何かご質問がある場合は、このメールにご返信という形でお願いいたします。

★重要★
本アドレスから多くの方にメールを一斉送信している関係で、お使いのメールソフトによっては、「開催告知などのメール」が、ごくまれに迷惑メールフォルダに入ってしまうことがあるようです。

${formData.productName}に特に興味をお持ちの方は、送信者アドレスをアドレス帳に登録をしていただくようにお願いいたします。

以上となります。
ご確認のほど、よろしくお願いいたします。

ーーー
${formData.productName}代表○○`;
}

function generateEmail2(formData: FormData): string {
  return `件名: 【アンケート回答】${formData.productName}についてお答えします

いつもお世話になっております。

先日の${formData.productName}に向けてのアンケートの際には、たくさんのご回答をいただきありがとうございました！

今回も100件以上のご回答をいただき、大変うれしく思います。
いただいたアンケートは、講座内容にも反映いたします。

＝＝＝＝＝＝＝＝＝＝＝＝＝
■アンケート内容とその回答について
＝＝＝＝＝＝＝＝＝＝＝＝＝

今回アンケートでいただいた意見のなかで、特に多かったものを一部ご紹介させていただきます。いただいたご意見は、講座内容に反映予定です。

【${formData.productName}で「特に学びたいこと」について】

■ 継続的に成果を出すための具体的な方法
■ 実践的なスキルアップ手法
■ 成功者のマインドセット

（回答）
講座内容に盛り込んでいます。
実践的なカリキュラムをご用意しています。

■ 継続案件を複数確保する方法
■ 安定した収益基盤の構築方法

（回答）
カリキュラムに盛り込んでいます。
講座内でも「実際に営業をかけてみよう」などのワークがあります。
もちろん、受注した収益は受講生に入ります。

■ 成功するためのメンタル・心構え
■ セルフマネジメントの方法

（回答）
カリキュラムに盛り込んでいます。まさに、「継続的に成果を出すために最も大事なこと」と言っても過言ではありませんので、スキル以上に重点的にお伝えします。

【その他のご質問への回答】

■ 料金について教えてください
（回答）
詳細については、面談時にご説明いたします。

■ 個別サポートはありますか？
（回答）
はい、個別サポートも充実しています。参加者一人ひとりの目標に合わせたサポートを行います。

＝＝＝＝＝＝＝＝＝＝＝＝＝

最後に、募集スケジュールについて再度ご案内いたします。

【募集開始日】
2024年○月○日午後20時～（日本時間）

※時間になりましたら、参加申込の受付を開始致します。

以上となります。ここまでご覧いただき、ありがとうございました。

何かご質問がありましたら、メールにてご連絡ください。

${formData.productName}代表○○`;
}

function generateEmail3(formData: FormData): string {
  return `件名: 【本日開始】${formData.productName}面談受付を開始します

いつもお世話になっております。

こんばんは。${formData.productName}代表の○○です。

本日の20時より、${formData.productName}の事前面談受付を開始します。

20時ごろに、申し込みページが記載されたメールをお送りしますので、そちらから申請をお願いいたします。

募集開始前に、多くいただいた質問について回答させていただきます。

＝＝＝＝＝

【質問と回答】

Q.入力フォームには、どのような項目がありますか？
A.下記の項目がございます。必須項目を入力いただければ、問題なくご応募いただけます。

（必須）お名前、メールアドレス、面談希望日程（第一希望～三希望まで）
（任意）その他・自由記述欄

Q.面談希望日程は、どの期間を申請できますか？
A.2024年○月○日以降の期間となります。時間帯は12時30分～23時の間です。

※調整の都合上、できるだけ広く日程を申請いただけると助かります。

＝＝＝＝＝

面談申請が完了しましたら、詳細についてご連絡いたします。

募集定員は限定となる予定ですが、事前の資料請求は多くの方にいただいております。

すぐに募集枠が埋まってしまう可能性もございますが、まずは慎重に、募集案内資料を読み進めていただくようお願いします。

資料はこちら
https://example.com/resource

それでは、面談でお会いできることを楽しみにしております！

以上となります。よろしくお願いします。
${formData.productName}代表○○`;
}

function generateEmail4(formData: FormData): string {
  return `件名: 【募集開始】${formData.productName}面談申請受付を開始いたします

いつもお世話になっております。

こんばんは。${formData.productName}代表の○○です。

20時になりましたので、今から正式に、${formData.productName}の応募受付を開始いたします。

ご参加を希望される場合は、下記ページより申請をお願いいたします。

※今後のご案内が不要な場合は、メールの一番下の解除リンクより配信停止をお願いします。

＝＝＝＝＝

【${formData.productName} 面談申請ページ】
https://example.com/application

＝＝＝＝＝

面談の受付日程は2024年○月○日以降となります。

面談申請が完了しましたら、詳細について個別にご連絡いたします。

参加をお考えの方は、まずは慎重に、募集案内資料を読み進めていただくようお願いします。

【資料はこちら】
https://example.com/resource

■プログラム概要■
▼サービス内容
実践的なカリキュラムとサポート体制

▼価格
詳細は面談時にご案内

▼主な特徴
少人数制による手厚いサポート

▼期待できる成果
継続的な成長とスキルアップ

充実した期間を、共に過ごせたら幸いです！

以上、よろしくお願いします。
${formData.productName}代表○○

今後の案内を希望しない場合は、こちらから解除できます。`;
}

function generateEmail5(formData: FormData): string {
  return `件名: 【面談調整】${formData.productName}面談日程のご案内

いつもお世話になっております。

この度は${formData.productName}へのご応募をいただき、ありがとうございます。

面談日程について個別にご連絡いたします。

＝＝＝＝＝＝＝＝＝＝＝＝＝
【面談実施概要】
＝＝＝＝＝＝＝＝＝＝＝＝＝

■面談方法：オンライン（Zoom）
■面談時間：15分程度
■面談内容：
・${formData.productName}の詳細説明
・ご質問への回答
・今後の目標や期待値の擦り合わせ
・参加可否の最終確認

■面談の目的：
1. 最適なメンバーを集め、充実した学習環境を作ること
2. お互いの相性や方向性を確認すること
3. ${formData.productName}があなたの目標達成に最適かを判断すること

＝＝＝＝＝＝＝＝＝＝＝＝＝
【面談の流れ】
＝＝＝＝＝＝＝＝＝＝＝＝＝

1. 簡単な自己紹介とご質問への回答（5分）
2. ${formData.productName}の詳細説明（5分）
3. 参加意思の確認と今後の流れ（5分）

■料金：詳細は面談時にご案内
■決済方法：銀行振込
■サポート内容：実践的なカリキュラムと個別サポート

面談では、肩の力を抜いてリラックスしてお話しください。
お互いの相性や今後の目標などを擦り合わせる機会として活用させていただきます。

もちろん、面談後に参加可否をご判断いただいて大丈夫です。

それでは、面談でお会いできることを楽しみにしております。

${formData.productName}代表○○

※面談日程については、別途個別にご連絡いたします。`;
}

function generateScript(formData: FormData): string {
  return `【面談用トークスクリプト】${formData.productName}

■オープニング（アイスブレイク）
こんにちは。本日面談します○○です。よろしくお願いします。

今日の面談の内容は2つあります。

枠が限定のところ多くの応募をいただいており、最適なメンバーを選ぶために大変恐縮ながら色々と質問をさせていただいております。

前半質問をさせていただき、その審査に通過したら、${formData.productName}の内容説明をします。（仮クロージング①）

まず、${formData.productName}は2つの目的があります。

それは、継続的に成果を出せる人を増やすこと、そして、そういった人材のみの強いチームや居心地のいい場所を作ることです。

そのため、恐縮ながら質問をさせていただき、状況確認をさせていただくことをご理解ください。

ただですね、2点の本題に入る前に、先に○○さんの不安点をすべて解消してから、本題に入りたいなと思っています。

些細な質問でも、全然問題ございませんので、なにかご質問はありますか？（疑問を消す）

※疑問点全部吐き出してなさそうなら、「どんな些細なことでも大丈夫です。疑問点や不明点は、今のところないということで大丈夫ですか？」と念入りに聞く。

■審査のための質問項目

それでは、1つめの本題として、質問項目を用意しましたので、質問のほうに入らせていただきますね。

1. 事前に資料と「よくある質問」をお送りしましたが、読まれましたか？

2. 作業をするためのPCはお持ちでしょうか？

3. ご意思の確認なんですが、もしも審査に通過して、内容説明に納得したら「${formData.productName}に参加したい！」というご意思はありますか？→（仮クロージング）

4. ご参加後にどうなっていたいかのイメージがもしあれば、教えてください。

■審査結果の発表

ありがとうございます。

今回想定を超える応募をいただいた関係で、このような審査という形をとらせていただきました。

お付き合い頂きまして、ありがとうございました。

○○さんが結果を出す意思があるということが確認できたので、結果としては「合格」とさせていただきます。

恐縮ながらこのような質問をさせていただき、ありがとうございました。

■サービス内容説明

それでは「${formData.productName}」の内容説明に入らせていただきます。

【主な特徴・サービス内容】
実践的なカリキュラムと充実したサポート体制

【独自の価値提案】
少人数制による手厚いサポートと継続的な成長支援

【期待できる成果】
継続的なスキルアップと目標達成

【他社との違い】
個別サポートと実践重視のアプローチ

何か質問などは、ございますでしょうか？（質問をすべて消す）

■価格提示とクロージング

では、改めて金額をご案内させていただきます。

詳細は事前にご案内させていただいておりますが、決済方法としては銀行振込です。

詳細はあとでお送りしますが、お振込み確認後に専用のコミュニティにご招待いたします。

ご参加は希望されますか？

■次のステップ

【参加希望の場合】
ありがとうございます！それでは詳細資料と振込先をお送りいたします。

【検討希望の場合】
承知いたしました。ご検討期間はいつまでを予定されていますか？
他に確認が必要な点はございますか？

【参加見送りの場合】
承知いたしました。今後また機会がございましたら、ぜひお声がけください。

■面談終了

本日はお時間をいただき、ありがとうございました。
詳細資料をメールでお送りしますので、ご確認ください。

よろしくお願いいたします。

送信者情報：${formData.productName}代表`;
}