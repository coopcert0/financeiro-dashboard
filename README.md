# 💰 Financeiro Dashboard

Painel financeiro pessoal com dashboard, histórico e cadastro de lançamentos.
Dados salvos no **localStorage** do navegador — sem servidor, sem cadastro.

## Funcionalidades

- **Dashboard** — KPIs de receita, despesa, investimento e saldo; gráfico de barras mensal; gráfico de pizza por categoria
- **Novo lançamento** — cadastro de receitas, despesas e investimentos com categoria e forma de pagamento
- **Histórico** — listagem completa com busca, filtro por tipo e mês, edição e exclusão
- **Exportar / Importar** — backup em JSON para não perder os dados ao trocar de dispositivo ou navegador

---

## Como hospedar no GitHub Pages

### 1. Crie um repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New repository**
3. Dê um nome (ex: `financeiro-dashboard`)
4. Deixe como **Public**
5. Clique em **Create repository**

### 2. Suba os arquivos

Você pode fazer isso de duas formas:

**Pelo site (mais simples):**
1. Na página do repositório, clique em **uploading an existing file**
2. Arraste os três arquivos: `index.html`, `style.css`, `app.js`
3. Clique em **Commit changes**

**Pelo terminal (se tiver Git instalado):**
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/financeiro-dashboard.git
git push -u origin main
```

### 3. Ative o GitHub Pages

1. No repositório, clique em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione `Deploy from a branch`
4. Em **Branch**, escolha `main` e pasta `/ (root)`
5. Clique em **Save**

Após 1-2 minutos, seu painel estará disponível em:
```
https://SEU_USUARIO.github.io/financeiro-dashboard/
```

---

## Backup dos dados

Como os dados ficam no localStorage do navegador:
- **Ao trocar de computador:** use o botão **Exportar JSON** → copie o arquivo para o novo dispositivo → use **Importar JSON**
- **Ao limpar o cache do navegador:** faça um export antes
- **No celular:** acesse o mesmo link do GitHub Pages e importe o JSON

---

## Estrutura dos arquivos

```
financeiro-dashboard/
├── index.html   — estrutura da página
├── style.css    — visual e tema escuro
├── app.js       — toda a lógica, dados e gráficos
└── README.md    — este arquivo
```
