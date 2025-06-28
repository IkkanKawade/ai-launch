# AIローンチくん

> ⚠️ **アルファ版**: 以前記載していたテスト用の共通ログイン情報（admin / user / demo アカウント）は削除しました。アプリを利用する際は、各自で Google OAuth など適切な認証設定を行ってください。


PLF（Product Launch Formula）式のローンチシーケンスとトークスクリプトを自動生成するWebアプリケーション

## 🌟 特徴

- **シンプル入力**: 商品名のみの入力で完全なローンチシーケンスを生成
- **5つのメールテンプレート**: iSara式の実績あるPLF手法を採用
- **面談用スクリプト**: 審査形式・仮クロージング手法を含む
- **開閉式UI**: 各メールセクションの個別表示・非表示機能
- **戦略解説**: 開いているセクションに対応した詳細な戦略ポイント
- **レスポンシブデザイン**: デスクトップ・モバイル対応

## 🚀 デプロイURL

**最新版**: https://ai-launch-2631faq30-ikkan-kawades-projects.vercel.app

## 📧 生成されるコンテンツ

### メールシーケンス
1. **【メール①】資料案内 & 事前質問フォーム**
   - 信頼関係の構築から開始
   - 資料で価値を先行提供
   - 参加フローの明確化

2. **【メール②】質問への回答**
   - アンケート結果を活用
   - Q&A形式で不安を解消
   - 次回募集への期待感醸成

3. **【メール③】募集当日の朝メール**
   - 募集開始の最終予告
   - 心理的準備を整える
   - よくある質問を事前回答

4. **【メール④】募集開始 & 面談希望日提出**
   - 明確な行動指示（申請URL）
   - 限定性の強調（先着制）
   - プログラム概要の再確認

5. **【メール⑤】面談実施**
   - 面談の目的と流れを明確化
   - 15分間の効率的な構成
   - リラックスした雰囲気作り

### 面談スクリプト
- 審査形式で価値を高める
- 仮クロージングを2回実施
- 不安要素を事前に全て解消
- 合格発表で特別感を演出

## 🛠️ 技術スタック

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

## 📱 UI/UX機能

### レイアウト
- **3カラムレイアウト**: 入力 | 出力 | 戦略解説
- **Sticky Positioning**: サイドバーの固定表示
- **Grid System**: レスポンシブ対応

### インタラクション
- **開閉式メールセクション**: ▲▼ボタンでの展開・折りたたみ
- **プルダウン戦略ポイント**: 入力フォーム下の詳細解説
- **動的右サイドバー**: 開いているセクションの戦略ポイント表示

### デザイン
- **虹色グラデーション**: AIローンチくんタイトル
- **カラーコード**: セクション別の色分け（青・緑・黄・赤・橙・紫）
- **ホバーエフェクト**: インタラクティブ要素

## 🎯 開発履歴

### v1.0 - 初期版
- 基本的な4メールシーケンス生成
- 複数入力フィールド対応
- 静的レイアウト

### v2.0 - iSara式対応
- 5メールシーケンス + 面談スクリプト
- iSaraローンチ手法の採用
- PLF理論に基づく構成

### v3.0 - UI改善
- 商品名のみの簡単入力
- 3カラムレイアウト実装
- 戦略ポイント解説追加

### v4.0 - インタラクション強化
- 開閉式メールセクション
- 動的戦略解説表示
- PLF戦略ポイントのプルダウン化

### v5.0 - ブランディング強化（最新）
- サービス名「AIローンチくん」に変更
- 虹色グラデーションタイトル
- 不要セクション削除によるUI簡素化

## 🔧 ローカル開発

```bash
# リポジトリクローン
git clone https://github.com/IkkanKawade/ai-launch.git
cd ai-launch

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番環境プレビュー
npm start
```

## 📦 デプロイ

```bash
# Vercelへのデプロイ
vercel --prod
```

## 🎨 カスタマイズ

### テンプレート編集
各メール生成関数（`generateEmail1` - `generateEmail5`）と`generateScript`関数を編集することで、テンプレート内容をカスタマイズできます。

### スタイリング
Tailwind CSSクラスを使用してスタイルを調整できます。主要なカラーパレット：
- 青（email1）: `blue-500`, `blue-700`
- 緑（email2）: `green-500`, `green-700`
- 黄（email3）: `yellow-500`, `yellow-700`
- 赤（email4）: `red-500`, `red-700`
- 橙（email5）: `orange-500`, `orange-700`
- 紫（script）: `purple-500`, `purple-700`

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

プルリクエストや課題報告を歓迎します。大きな変更を行う場合は、まず課題を作成して変更内容について議論してください。

---

## Getting Started (Development)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>