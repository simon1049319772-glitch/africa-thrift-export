# 部署指南

## 第一步：推送到 GitHub

1. 安装 Git: https://git-scm.com/download/win

2. 在 GitHub 创建仓库:
   - 访问 https://github.com 并登录
   - 点击右上角 **+** → **New repository**
   - 仓库名: `africa-thrift-export`
   - 不要勾选 "Initialize with README"
   - 点击 **Create repository**

3. 本地初始化并推送:
```bash
cd D:\projects\africa-thrift-export
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/您的用户名/africa-thrift-export.git
git push -u origin main
```

## 第二步：创建 Turso 数据库（免费）

1. 注册 Turso: https://turso.tech

2. 创建数据库:
   - 安装 Turso CLI: `brew install tursodatabase/tap/turso` (Mac) 或 `scoop install tursodb` (Windows)
   - 或使用网页版创建

3. 获取连接信息:
   - DATABASE_URL: `libsql://your-db-name.turso.io`
   - AUTH_TOKEN: 在 Turso 控制台获取

## 第三步：部署到 Vercel

1. 访问 https://vercel.com 并登录（推荐用 GitHub 登录）

2. 添加新项目:
   - 点击 "Add New" → "Project"
   - 选择刚创建的 GitHub 仓库
   - 点击 "Import"

3. 配置环境变量:
   - 点击 "Environment Variables"
   - 添加:
     - `DATABASE_URL`: Turso 数据库 URL
     - `TURSO_AUTH_TOKEN`: Turso 认证令牌

4. 点击 "Deploy"

## 第四步：迁移数据库

部署完成后，需要迁移数据库：

1. 在 Vercel 项目中，点击 "Deployments"
2. 选择最新部署
3. 点击 "Visit" 旁边的菜单 → "Git Refs"
4. 或者使用 Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel env add DATABASE_URL
vercel env add TURSO_AUTH_TOKEN
vercel run prisma db push
```

## 第五步：填充种子数据

```bash
vercel run npx prisma db seed
```

或者在 Vercel 项目设置中添加 Post-build 命令:
```bash
npx prisma db push && npx prisma db seed
```

## 自定义域名（可选）

1. 在 Vercel 项目 Settings → Domains
2. 添加您的域名（如 afrithrift.com）
3. 按提示配置 DNS 记录

## 常见问题

Q: 部署后网站打不开？
A: 检查 Vercel 部署日志是否有错误，确保环境变量配置正确。

Q: 数据库连接失败？
A: 确保 Turso 数据库已创建，且 AUTH_TOKEN 正确。

Q: 如何更新网站？
A: 只需 push 到 GitHub，Vercel 会自动重新部署。
