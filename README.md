# Meeting Action Tracker D1

会議後に発生するアクションを、担当者・期限・優先度・ステータスごとに管理するタスク管理ダッシュボードです。

本アプリでは、React + TypeScript でフロントエンドを実装し、Cloudflare Workers を API サーバーとして利用しています。  
データ保存には Cloudflare D1 を使用し、Worker 経由で SQL を実行する構成にしました。

Firebase SDK から直接DBに保存する構成ではなく、フロントエンド・API・データベースの役割を分離し、実務に近い API 設計と SQL データ操作を意識して制作しています。

## 公開URL

https://meeting-action-tracker-d1.yuruttoiyashi-apps.workers.dev/

## GitHub

https://github.com/yuruttoiyashi/meeting-action-tracker-d1

## 主な機能

- 会議アクションの登録
- 担当者・期限・優先度・ステータスの管理
- ステータス変更
- アクション削除
- 期限切れアラート表示
- Cloudflare D1 への永続保存
- Cloudflare Workers API 経由の CRUD 処理

## 使用技術

- React
- TypeScript
- Vite
- Cloudflare Workers
- Cloudflare D1
- SQL
- Wrangler
- CSS

## アーキテクチャ

```txt
React + Vite
  ↓ fetch
Cloudflare Worker API
  ↓ SQL
Cloudflare D1
