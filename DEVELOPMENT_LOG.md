# AIローンチくん 開発ログ

## プロジェクト概要
PLF（Product Launch Formula）式のローンチシーケンスとトークスクリプトを自動生成するWebアプリケーション

## 開発経緯

### 2024年6月26日 - 開発開始

#### フェーズ1: 初期版開発
**要求**: プロダクトローンチ自動生成ツールの作成
- 基本的な4メールシーケンス（資料案内、質問回答、朝リマインド、募集開始）
- 面談用トークスクリプト
- 複数入力フィールド対応
- Next.js + TypeScript + Tailwind CSS構成

#### フェーズ2: iSara式PLF対応
**要求**: 独自ローンチ資料に基づく5メール構成への変更
- iSaraローンチ手法の採用（600名応募→10名選抜の高倍率手法）
- 5メールシーケンス + 面談スクリプト構成
- 審査形式・仮クロージング手法の組み込み
- PLF理論9つのトリガー適用

**生成されるメール構成**:
1. 資料案内 & 事前質問フォーム（6/6）
2. 質問への回答（6/7）  
3. 募集当日の朝メール（6/8）
4. 募集開始 & 面談希望日提出（6/8）
5. 面談の実施（6/10〜12）

#### フェーズ3: UI/UX改善
**要求**: 3カラムレイアウトの実装
- 左：入力フォーム
- 中央：メール出力
- 右：戦略ポイント解説
- レスポンシブ対応

**要求**: 入力フィールドの簡素化
- 複数フィールドから商品名のみの入力に変更
- 汎用的なテンプレート生成

#### フェーズ4: GitHub & Vercel デプロイ
- GitHubリポジトリ作成: https://github.com/IkkanKawade/ai-launch
- Vercel自動デプロイ設定
- 静的サイト生成対応

#### フェーズ5: インタラクション強化
**要求**: 開閉式メールセクション & 動的戦略解説
- 各メールセクションの個別開閉機能（▲▼ボタン）
- 右サイドバーの動的戦略ポイント表示
- 開いているセクションに対応した解説のみ表示
- PLF戦略ポイントの入力フォーム下移動

#### フェーズ6: ブランディング強化
**要求**: サービス名変更 & プルダウン戦略ポイント
- 「プロダクトローンチ自動生成ツール」→「AIローンチくん」
- プルダウン形式の戦略ポイント実装
- 虹色グラデーションタイトル
- 不要セクション削除（iSara実績データ、PLF成功トリガー）

## 技術スタック

### Frontend
- **Next.js 15**: React フレームワーク
- **TypeScript**: 型安全性
- **Tailwind CSS**: ユーティリティファーストCSS

### インフラ
- **Vercel**: ホスティング & 自動デプロイ
- **GitHub**: バージョン管理

### 状態管理
- **React useState**: ローカル状態管理
- **フォーム状態**: 商品名入力
- **UI状態**: セクション開閉、プルダウン表示

## アーキテクチャ

### コンポーネント構成
```
page.tsx (メインコンポーネント)
├── Header (タイトル & 説明)
├── 3カラムGrid Layout
│   ├── 左カラム: 入力フォーム + 戦略ポイントプルダウン
│   ├── 中央カラム: メール出力（開閉式）
│   └── 右カラム: 動的戦略解説
```

### データフロー
1. ユーザー入力（商品名）
2. 生成ボタンクリック
3. テンプレート関数実行（generateEmail1-5, generateScript）
4. 状態更新（generatedContent）
5. UI再レンダリング

### 状態管理
```typescript
interface FormData {
  productName: string;
}

interface CollapsedSections {
  email1: boolean;
  email2: boolean;
  email3: boolean;
  email4: boolean;
  email5: boolean;
  script: boolean;
}
```

## デザインシステム

### カラーパレット
- **Email1**: Blue (blue-500, blue-700)
- **Email2**: Green (green-500, green-700)  
- **Email3**: Yellow (yellow-500, yellow-700)
- **Email4**: Red (red-500, red-700)
- **Email5**: Orange (orange-500, orange-700)
- **Script**: Purple (purple-500, purple-700)
- **Title**: Rainbow Gradient

### レイアウト
- **Grid**: `grid-cols-1 lg:grid-cols-3`
- **Spacing**: Tailwind spacing scale
- **Typography**: 段階的フォントサイズ
- **Border**: セクション別カラーボーダー

## デプロイ履歴

### v1.0 - 初期版
- URL: 初期デプロイ
- 機能: 基本メール生成

### v2.0 - iSara対応
- URL: https://ai-launch-xxxxx.vercel.app
- 機能: 5メール + スクリプト

### v3.0 - UI改善
- URL: https://ai-launch-yyyyy.vercel.app
- 機能: 3カラムレイアウト

### v4.0 - インタラクション
- URL: https://ai-launch-zzzzz.vercel.app
- 機能: 開閉式セクション

### v5.0 - 最新版
- URL: https://ai-launch-2631faq30-ikkan-kawades-projects.vercel.app
- 機能: AIローンチくん + 虹色タイトル

## パフォーマンス

### ビルドサイズ
- **メインページ**: ~8KB
- **First Load JS**: ~109KB
- **静的生成**: ○ (SSG対応)

### 最適化
- Next.js 15の自動最適化
- Tailwind CSS purging
- TypeScript型チェック
- ESLint静的解析

## 今後の改善予定

### 機能追加候補
- [ ] テンプレートカスタマイズ機能
- [ ] 生成コンテンツのエクスポート
- [ ] プレビューモード
- [ ] 多言語対応

### UI/UX改善
- [ ] アニメーション効果
- [ ] ダークモード
- [ ] アクセシビリティ向上
- [ ] モバイル最適化

### 技術的改善
- [ ] API化（Backend分離）
- [ ] テストカバレッジ
- [ ] パフォーマンス監視
- [ ] SEO最適化

---

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>