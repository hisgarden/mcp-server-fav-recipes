# MCP 服务器 - 最爱食谱 (TypeScript)

一个高性能的 MCP (模型上下文协议) 服务器，使用 TypeScript 构建，提供基于菜系的食谱和智能膳食规划功能。

## 🚀 功能特性

- **多菜系食谱数据库**: 包含法国、泰国、意大利、墨西哥、中国和越南的传统食谱
- **智能膳食规划**: 生成周度膳食计划，包含优化的购物清单
- **成分重叠分析**: 通过识别共同成分来减少食物浪费
- **资源模板**: 通过 `file://recipes/{cuisine}` URI 动态访问食谱
- **高性能**: 基于 Node.js 构建，具有出色的性能和内存安全
- **类型安全**: TypeScript 编译时类型检查
- **全面安全**: 预提交钩子、漏洞扫描、SBOM 生成
- **跨平台**: 可在任何支持 Node.js 的平台上运行

## 🏗️ 架构

### TypeScript 实现优势

- **快速开发**: 热重载和快速迭代
- **丰富生态**: 庞大的 npm 包生态系统
- **类型安全**: TypeScript 编译时类型检查
- **异步处理**: Node.js 事件循环和异步 I/O
- **易于调试**: 优秀的开发工具支持

### 项目结构

```
src/
├── index.ts          # MCP 服务器实现，包含工具和提示
├── recipes.ts        # 食谱数据结构和数据库
scripts/
├── generate-sbom.sh  # SBOM 生成脚本
package.json          # 依赖项和项目配置
tsconfig.json         # TypeScript 配置
```

## 🛠️ 安装设置

### 先决条件

- Node.js 18+ (从 [nodejs.org](https://nodejs.org/) 安装)
- npm (随 Node.js 一起安装)
- Git (用于版本控制)

### 安装

```sh
# 克隆或导航到项目目录
cd mcp-server-fav-recipes

# 安装依赖项
npm install

# 构建项目
npm run build

# 运行服务器
npm start
```

### 开发

```sh
# 开发模式运行
npm run dev

# 运行测试
npm test

# 代码格式化
npm run lint:fix

# 安全检查
npm run security:check

# 生成 SBOM
npm run sbom
```

## 🎯 可用功能

### 工具

1. **`get_cuisines`**: 列出所有可用的菜系
2. **`get_recipes`**: 获取特定菜系的食谱
3. **`generate_meal_plan`**: 创建包含购物清单的膳食计划
4. **`analyze_ingredient_overlap`**: 查找食谱间的共同成分
5. **`weekly_meal_planner`**: 综合周度膳食规划，支持菜系选择

### 提示

- **`weekly_meal_planner`**: 综合周度膳食规划，支持菜系选择

### 资源

- **`file://recipes/{cuisine}`**: 按菜系访问食谱 (法国、泰国、意大利、墨西哥、中国、越南)

## 📋 使用示例

### MCP 客户端配置

添加到您的 MCP 客户端配置中：

```json
{
  "mcpServers": {
    "fav-recipes": {
      "command": "node",
      "args": ["/path/to/mcp-server-fav-recipes/dist/index.js"],
      "env": {}
    }
  }
}
```

### 工具调用示例

```json
// 获取可用菜系
{
  "method": "tools/call",
  "params": {
    "name": "get_cuisines",
    "arguments": {}
  }
}

// 获取法国食谱
{
  "method": "tools/call",
  "params": {
    "name": "get_recipes",
    "arguments": {
      "cuisine": "French"
    }
  }
}

// 为意大利菜系生成 7 天膳食计划
{
  "method": "tools/call",
  "params": {
    "name": "generate_meal_plan",
    "arguments": {
      "cuisine": "Italian",
      "days": 7,
      "servings": 4
    }
  }
}
```

### 提示使用示例

```json
// 越南菜系周度膳食规划
{
  "method": "prompts/get",
  "params": {
    "name": "weekly_meal_planner",
    "arguments": {
      "cuisine": "Vietnamese"
    }
  }
}
```

## 🍳 支持的菜系

### 法国菜
- **红酒鸡**: 经典法式红酒炖鸡
- **法式洋葱汤**: 传统洋葱汤配格鲁耶尔奶酪
- **焦糖布丁**: 香草蛋奶配焦糖

### 泰国菜
- **泰式炒河粉**: 炒河粉配虾和蔬菜
- **冬阴功汤**: 酸辣虾汤
- **芒果糯米饭**: 椰奶甜点配芒果

### 意大利菜
- **卡波纳拉意面**: 鸡蛋、奶酪和培根意面
- **玛格丽特披萨**: 经典番茄、马苏里拉和罗勒披萨
- **提拉米苏**: 咖啡味马斯卡彭甜点

### 墨西哥菜
- **牧师塔可**: 香料猪肉塔可配菠萝
- **鳄梨酱**: 鳄梨蘸酱配青柠和香菜
- **油条**: 肉桂糖炸面团

### 中国菜
- **宫保鸡丁**: 辣炒鸡丁配花生和蔬菜
- **叉烧**: 甜咸烤猪肉
- **蛋挞**: 奶油蛋奶挞配酥皮

### 越南菜
- **牛肉河粉**: 传统越南牛肉汤面
- **越南三明治**: 越南三明治配腌菜
- **三色甜汤**: 分层甜点配豆类和椰子

## 🧪 测试

```sh
# 运行所有测试
npm test

# 运行带输出的测试
npm test -- --verbose

# 运行特定测试
npm test -- --grep "French"
```

## 📊 性能特征

- **启动时间**: 0.110s (Node.js 初始化)
- **内存使用**: ~50-100MB (Node.js 运行时)
- **包大小**: 4.0K (JavaScript 包)
- **构建时间**: 1.15s (TypeScript 编译)
- **吞吐量**: 优秀的 I/O 密集型操作
- **延迟**: 食谱访问的最小开销

## 🔧 开发

### 添加新菜系

1. 编辑 `src/recipes.ts`
2. 在 `RECIPES` 对象中添加新食谱
3. 重新构建: `npm run build`
4. 重启 MCP 客户端

### 添加新工具

1. 在 `MealPrepServer` 实现中添加工具函数
2. 使用 `@tool` 装饰器
3. 实现错误处理
4. 为新功能添加测试

### 添加新提示

1. 在 `MealPrepServer` 实现中添加提示函数
2. 使用 `@prompt` 装饰器
3. 返回 `GetPromptResult` 和消息
4. 添加参数验证

## 🚀 部署

### 生产构建

```sh
# 构建优化版本
npm run build

# 包将位于:
# dist/index.js
```

### Docker 部署

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist/ ./dist/
CMD ["node", "dist/index.js"]
```

## 🔍 故障排除

### 常见问题

1. **构建错误**: 确保安装了 Node.js 18+
2. **运行时错误**: 检查所有依赖项是否可用
3. **MCP 连接**: 验证客户端配置中的二进制路径
4. **权限问题**: 确保二进制文件可执行

### 调试模式

```sh
# 使用调试日志运行
DEBUG=mcp:* npm run dev
```

## 📈 性能对比 (TypeScript vs Rust)

| 指标 | TypeScript | Rust | 胜者 |
|------|------------|------|------|
| **启动时间** | 0.110s | 0.020s | 🏆 Rust |
| **内存使用** | ~50-100MB | ~10-20MB | 🏆 Rust |
| **包大小** | 4.0K | 1.6M | 🏆 TypeScript |
| **构建时间** | 1.15s | 1.97s | 🏆 TypeScript |
| **依赖项** | 78M (node_modules) | 3.9G (target) | 🏆 TypeScript |
| **类型安全** | 编译时 | 编译 + 运行时 | 🏆 Rust |
| **并发性** | 良好 (Node.js) | 优秀 (Tokio) | 🏆 Rust |
| **可移植性** | 需要 Node.js | 通用二进制 | 🏆 Rust |

## 🔒 安全功能

此 MCP 服务器实现了全面的安全最佳实践：

### 安全工具
- **npm audit**: 依赖项漏洞扫描
- **audit-ci**: CI/CD 漏洞检查
- **husky**: 预提交钩子
- **lint-staged**: 暂存文件检查
- **SBOM 生成**: 供应链安全

### 安全加固
- **依赖项审计**: 自动漏洞扫描
- **许可证合规**: 许可证检查
- **代码质量**: ESLint 和 Prettier
- **预提交验证**: 自动化安全检查

### 安全文档
- **SECURITY.md**: 漏洞报告流程
- **audit-ci.json**: 审计配置
- **.prettierrc.json**: 代码格式化

## 🤝 贡献

1. Fork 仓库
2. 创建功能分支: `git checkout -b feature/new-cuisine`
3. 添加您的更改和测试
4. 运行 `npm test` 和 `npm run lint`
5. 运行安全检查: `npm run security:check`
6. 提交拉取请求

## 📄 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- 使用 [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk) TypeScript SDK 构建
- 受 Rust MCP 服务器示例启发
- 食谱数据来自传统烹饪资源
- 安全实践基于 OWASP 指南
- 作者: Jin Wen <jin.wen@hisgarden.org>

---

**准备用 TypeScript 烹饪！📦🍳** 您的高性能 MCP 服务器已准备好进行膳食规划和食谱访问。
