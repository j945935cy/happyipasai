# 快樂學習 iPAS 一次就過！

靜態網站重建版，使用純 HTML / CSS / JavaScript，無需後端伺服器。

## 目錄結構

```
├── index.html          # 主頁面（SPA 入口）
├── css/
│   └── style.css       # 全站樣式
├── js/
│   ├── posts.js        # 所有文章資料（JSON-like JS 物件陣列）
│   └── app.js          # SPA 邏輯（搜尋、分類、路由）
└── README.md
```

## 功能

- ✅ 響應式設計（桌機 / 手機）
- ✅ 全文關鍵字搜尋
- ✅ 標籤分類篩選
- ✅ 貼文時間存檔
- ✅ 分頁顯示
- ✅ URL Hash 路由（支援分享單篇文章連結）
- ✅ 瀏覽器上一頁/下一頁支援

## 部署到 GitHub Pages

1. 在 GitHub 建立新 repository（例如 `happyipasai-site`）
2. 將本目錄所有檔案推送至 `main` branch：
   ```bash
   git init
   git add .
   git commit -m "Initial: rebuild happyipasai blog with HTML/CSS/JS"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/happyipasai-site.git
   git push -u origin main
   ```
3. 進入 GitHub repository → **Settings** → **Pages**
4. Source 選擇 `Deploy from a branch` → Branch: `main` / `/ (root)`
5. 儲存後約 1 分鐘，網站即可在以下網址訪問：
   ```
   https://<YOUR_USERNAME>.github.io/happyipasai-site/
   ```

## 新增文章

在 `js/posts.js` 的 `POSTS` 陣列中加入新物件：

```js
{
  id: "unique-post-id",           // 唯一 ID（英數字和連字號）
  title: "文章標題",
  date: "2026-04",                // 格式：YYYY-MM
  labels: ["標籤1", "標籤2"],
  excerpt: "文章摘要（顯示於列表）",
  content: `<h2>...</h2><p>...</p>` // HTML 格式內容
}
```

## 授權

內容版權歸原 Blog 作者所有。本靜態重建版僅供學習與個人使用。
