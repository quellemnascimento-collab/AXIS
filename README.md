# AXIS Gestão e Processos — Site Oficial

> **Método G.O.F. · Gestão. Organização. Finanças.**  
> Consultoria de estruturação empresarial para PMEs.

---

## Estrutura do Repositório

```
AXIS/
├── index.html              ← Página inicial
├── pages/
│   ├── metodo.html         ← Método G.O.F. (3 pilares)
│   ├── servicos.html       ← Planos e investimento
│   ├── sobre.html          ← Propósito e princípios
│   └── contato.html        ← Diagnóstico + formulário WhatsApp
├── css/
│   └── style.css           ← Identidade visual completa (variáveis, nav, footer)
├── js/
│   └── main.js             ← Nav scroll, reveal, mobile menu, formulário WhatsApp
├── assets/                 ← Logos, imagens (adicionar aqui)
└── partials/
    └── _nav.html           ← Referência do nav (já incluído em cada página)
```

---

## Identidade Visual

| Token | Valor | Uso |
|-------|-------|-----|
| `--v`  | `#6D0714` | Vinho escuro (primária) |
| `--v2` | `#A32431` | Vinho médio |
| `--d`  | `#C5A065` | Dourado (acentos) |
| `--cr` | `#F3E5DC` | Creme (textos em fundo escuro) |
| `--bg` | `#FAF4ED` | Background claro |
| `--gr` | `#25201E` | Grafite (texto principal) |
| `--pr` | `#3B0710` | Preto profundo (seções escuras) |

**Tipografia:** Playfair Display (títulos/itálicos) + DM Sans (corpo)

---

## Hospedagem Rápida

### Netlify (recomendado)
1. Acesse [netlify.com/drop](https://netlify.com/drop)
2. Arraste a pasta `AXIS/` inteira
3. Configure domínio: `axisge.com.br` ou `axisgestao.com.br`

### GitHub Pages
1. Repositório: `quellemnascimento-collab/AXIS`
2. Settings → Pages → Branch: `main` → Folder: `/root`
3. URL: `https://quellemnascimento-collab.github.io/AXIS/`

---

## Atualização de Conteúdo

**WhatsApp:** Alterar número em `pages/contato.html` e `js/main.js`  
→ Buscar `5527998845482` e substituir

**E-mail:** Buscar `contato@axisge.com.br` em todos os arquivos

**Instagram:** Buscar `axisgestaoeprocessos` em todos os arquivos

**Logo:** Adicionar arquivo em `assets/` e referenciar nos `<nav>` de cada página

---

## Páginas

| Página | Arquivo | Seções |
|--------|---------|--------|
| Início | `index.html` | Hero + Dores + Método G.O.F. + Como funciona + Garantia |
| Método | `pages/metodo.html` | Pilares G, O e F detalhados + frase âncora |
| Serviços | `pages/servicos.html` | 3 planos (R$1.500 / R$2.200 / R$3.000) + condições comerciais |
| Sobre | `pages/sobre.html` | Propósito + 4 princípios + tom de voz |
| Contato | `pages/contato.html` | Formulário WhatsApp + canais diretos |

---

## Dados Institucionais

```
Razão Social: MADU GESTÃO EMPRESARIAL LTDA
CNPJ:         65.723.134/0001-86
Marca:        AXIS Gestão e Processos
Instagram:    @axisgestaoeprocessos
Site:         www.axisge.com.br
E-mail:       contato@axisge.com.br
WhatsApp:     (27) 9 9884-5482
```

---

© 2026 AXIS Gestão e Processos · Todos os direitos reservados
