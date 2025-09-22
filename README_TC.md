# MCP 伺服器 - 最愛食譜 (TypeScript)

[English](README.md) | [简体中文](README_CN.md) | [繁體中文](README_TC.md)

一個高效能的 MCP (模型上下文協議) 伺服器，使用 TypeScript 構建，提供基於菜系的食譜和智能膳食規劃功能。

## 🚀 功能特性

- **多菜系食譜資料庫**: 包含法國、泰國、義大利、墨西哥、中國、越南和日本的傳統食譜
- **智能膳食規劃**: 生成週度膳食計劃，包含優化的購物清單
- **成分重疊分析**: 通過識別共同成分來減少食物浪費
- **資源模板**: 通過 `file://recipes/{cuisine}` URI 動態存取食譜
- **高安全性**: 整合 OWASP 安全標準和 SBOM 生成
- **跨平台支援**: 支援 Windows、macOS 和 Linux

## 🍽️ 支援的菜系

### 法國菜 (French)
- 🍷 紅酒燉雞 (Coq au Vin)
- 🧅 法式洋蔥湯 (French Onion Soup)
- 🍮 焦糖布丁 (Crème Brûlée)

### 泰國菜 (Thai)
- 🍝 泰式炒河粉 (Pad Thai)
- 🦐 冬陰功湯 (Tom Yum Goong)
- 🥭 芒果糯米飯 (Mango Sticky Rice)

### 義大利菜 (Italian)
- 🍝 卡邦尼義大利麵 (Spaghetti Carbonara)
- 🍕 瑪格麗特披薩 (Margherita Pizza)
- ☕ 提拉米蘇 (Tiramisu)

### 墨西哥菜 (Mexican)
- 🌮 牧師塔可 (Tacos al Pastor)
- 🥑 酪梨醬 (Guacamole)
- 🍩 吉拿棒 (Churros)

### 中國菜 (Chinese)
- 🥢 宮保雞丁 (Kung Pao Chicken)
- 🥩 叉燒 (Char Siu - Chinese BBQ Pork)
- 🥧 蛋挞 (Egg Tarts)
- 🍜 台灣牛肉麵 (Beef Noodle Soup)
- 🧋 珍珠奶茶 (Bubble Tea)
- 🦪 蚵仔煎 (Oyster Omelette)

### 越南菜 (Vietnamese)
- 🍲 越南牛肉河粉 (Pho Bo)
- 🥖 越南三明治 (Banh Mi)
- 🍧 三色冰 (Che Ba Mau)

### 日本菜 (Japanese)
- 🍱 鰻魚丼 (Unagi Donburi)
- 🍲 味噌湯 (Miso Soup)
- 🍵 抹茶冰淇淋 (Matcha Ice Cream)

## 🛠️ 安裝與設定

### 系統需求
- Node.js 18.0.0 或更高版本
- npm 9.0.0 或更高版本

### 安裝步驟

```bash
# 克隆儲存庫
git clone https://github.com/hisgarden/mcp-server-fav-recipes.git
cd mcp-server-fav-recipes

# 安裝依賴
npm install

# 建置專案
npm run build

# 執行伺服器
npm start
```

### 開發模式

```bash
# 監聽模式開發
npm run dev

# 執行測試
npm test

# 程式碼檢查
npm run lint

# 格式化程式碼
npm run format
```

## 🔧 配置

### Cursor 整合

在 Cursor 的 MCP 設定中新增以下配置：

```json
{
  "mcpServers": {
    "fav-recipes": {
      "command": "node",
      "args": ["/path/to/mcp-server-fav-recipes/dist/index.js"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

### 環境變數

```bash
# 伺服器設定
PORT=3000
NODE_ENV=production

# 日誌等級
LOG_LEVEL=info
```

## 📚 API 參考

### 資源存取

#### 食譜資源
- `file://recipes/French` - 法國食譜
- `file://recipes/Thai` - 泰國食譜
- `file://recipes/Italian` - 義大利食譜
- `file://recipes/Mexican` - 墨西哥食譜
- `file://recipes/Chinese` - 中國食譜
- `file://recipes/Vietnamese` - 越南食譜
- `file://recipes/Japanese` - 日本食譜

#### 工具功能
- `get_recipes` - 取得指定菜系的食譜
- `get_available_cuisines` - 取得所有可用菜系
- `generate_meal_plan` - 生成膳食計劃
- `get_shopping_list` - 生成購物清單

### 使用範例

```typescript
// 取得中國食譜
const chineseRecipes = await getRecipes("Chinese");

// 生成週度膳食計劃
const mealPlan = await generateMealPlan("Chinese", 7, 4);

// 取得購物清單
const shoppingList = await getShoppingList("Chinese", 7);
```

## 🔒 安全特性

### OWASP 整合
- **依賴掃描**: 使用 `audit-ci` 進行漏洞檢測
- **程式碼分析**: 整合 `eslint` 和 `prettier`
- **SBOM 生成**: 自動生成軟體物料清單
- **Git 鉤子**: 預提交安全檢查

### 安全檢查命令

```bash
# 執行安全審計
npm run audit

# 修復安全問題
npm run audit:fix

# 生成 SBOM
npm run sbom

# 完整安全檢查
npm run security:full
```

## 🧪 測試

### 測試類型
- **單元測試**: 使用 Jest 進行函數測試
- **整合測試**: 測試 MCP 協議整合
- **安全測試**: 驗證安全配置
- **效能測試**: 基準測試和負載測試

### 執行測試

```bash
# 執行所有測試
npm test

# 執行安全測試
npm run test:security

# 生成測試覆蓋率報告
npm run test:coverage
```

## 📊 效能指標

### 基準測試結果
- **啟動時間**: < 500ms
- **記憶體使用**: < 50MB
- **回應時間**: < 100ms
- **並發處理**: 支援 100+ 同時連線

### 監控
- **日誌記錄**: 結構化日誌輸出
- **效能指標**: 內建效能監控
- **健康檢查**: 自動健康狀態檢查

## 🤝 貢獻指南

### 開發流程
1. Fork 儲存庫
2. 建立功能分支
3. 實作功能並添加測試
4. 執行安全檢查
5. 提交 Pull Request

### 程式碼標準
- 使用 TypeScript 嚴格模式
- 遵循 ESLint 規則
- 添加適當的註釋
- 保持測試覆蓋率 > 95%

### 提交訊息格式
```
類型(範圍): 簡短描述

詳細描述變更內容

相關問題: #123
```

## 📄 授權

本專案採用 MIT 授權條款。詳見 [LICENSE](LICENSE) 檔案。

## 🆘 支援

### 常見問題
- 查看 [FAQ](docs/FAQ.md) 文件
- 檢查 [故障排除指南](docs/TROUBLESHOOTING.md)

### 聯絡方式
- **問題回報**: [GitHub Issues](https://github.com/hisgarden/mcp-server-fav-recipes/issues)
- **功能請求**: [GitHub Discussions](https://github.com/hisgarden/mcp-server-fav-recipes/discussions)
- **安全問題**: 請透過私訊聯絡維護者

## 🔄 更新日誌

### v1.0.0 (2024-09-22)
- ✨ 初始版本發布
- 🍽️ 支援 7 種菜系食譜
- 🛒 智能購物清單生成
- 🔒 整合 OWASP 安全標準
- 📚 完整的 API 文件
- 🌐 多語言支援 (英文、簡體中文、繁體中文)

---

**享受您的烹飪之旅！** 🍳✨

*本專案由 [Jin Wen](https://github.com/hisgarden) 開發和維護*
