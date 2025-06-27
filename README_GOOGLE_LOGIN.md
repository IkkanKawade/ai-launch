# Google Login Setup Instructions

## Google OAuth設定手順

1. **Google Cloud Consoleでプロジェクトを作成**
   - https://console.cloud.google.com/ にアクセス
   - 新しいプロジェクトを作成または既存のプロジェクトを選択

2. **OAuth 2.0 クライアントIDを作成**
   - 左メニューから「APIとサービス」→「認証情報」を選択
   - 「認証情報を作成」→「OAuth クライアント ID」を選択
   - アプリケーションの種類：「ウェブアプリケーション」を選択
   - 名前を入力（例：AIローンチくん）

3. **承認済みの JavaScript 生成元を設定**
   開発環境：
   - http://localhost:3000
   
   本番環境（デプロイ時）：
   - https://your-domain.com

4. **承認済みのリダイレクト URIを設定**
   開発環境：
   - http://localhost:3000
   
   本番環境（デプロイ時）：
   - https://your-domain.com

5. **クライアントIDを取得**
   - 作成後、クライアントIDが表示されます
   - このIDを`.env.local`ファイルに設定します

## アプリケーション設定

1. `.env.local`ファイルを編集：
   ```
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-client-id-here
   ```

2. 開発サーバーを再起動：
   ```bash
   npm run dev
   ```

## 注意事項

- Google OAuth クライアントIDは公開されても問題ありませんが、クライアントシークレットは絶対に公開しないでください
- 本番環境では必ず適切なドメインを設定してください
- ユーザー情報（名前、メール、プロフィール画像）のみを取得し、他のスコープは要求していません