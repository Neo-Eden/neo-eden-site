# Neo Eden — Brand Technical Guide
## Direção Criativa: Void Garden

> Documentação técnica para desenvolvimento do site oficial.  
> Versão 1.0 · Uso interno · Neo Eden Digital Studio

---

## Índice

1. [Visão Geral da Marca](#1-visão-geral-da-marca)
2. [Paleta de Cores](#2-paleta-de-cores)
3. [Tipografia](#3-tipografia)
4. [Logotipo](#4-logotipo)
5. [Elementos Visuais Complementares](#5-elementos-visuais-complementares)
6. [Tokens de Design (CSS)](#6-tokens-de-design-css)
7. [Componentes Base](#7-componentes-base)
8. [Regras de Layout e Espaçamento](#8-regras-de-layout-e-espaçamento)
9. [Aplicação em Redes Sociais](#9-aplicação-em-redes-sociais)
10. [DOs e DON'Ts](#10-dos-e-donts)

---

## 1. Visão Geral da Marca

### Conceito
**Void Garden** é a direção criativa oficial da Neo Eden. O conceito central é o de um **jardim do futuro** — escuridão sofisticada onde vida tecnológica emerge com precisão e intenção. A identidade comunica exclusividade, modernidade e confiança técnica sem exageros visuais.

### Posicionamento Visual
- Estética: **dark premium + acento orgânico**
- Tom: sério, elegante, direto
- Referências visuais: Vercel, Linear, Rauno — studios e ferramentas tech de alto padrão

### Palavras-chave da identidade
`exclusivo` · `preciso` · `tecnológico` · `vivo` · `transformador`

---

## 2. Paleta de Cores

### Cores Primárias

| Nome       | HEX       | RGB               | Uso principal                          |
|------------|-----------|-------------------|----------------------------------------|
| Abyssal    | `#070F0B` | rgb(7, 15, 11)    | Background principal, fundo de seções  |
| Eden Green | `#1CE07A` | rgb(28, 224, 122) | Cor de destaque, CTAs, links ativos    |
| Forest     | `#0A4F2E` | rgb(10, 79, 46)   | Bordas sutis, divisores, hover states  |

### Cores Secundárias

| Nome  | HEX       | RGB                 | Uso principal                              |
|-------|-----------|---------------------|--------------------------------------------|
| Sage  | `#A8BFB5` | rgb(168, 191, 181)  | Textos de apoio, subtítulos, placeholders  |
| Dew   | `#F2FFF9` | rgb(242, 255, 249)  | Textos principais, headings no dark mode   |

### Hierarquia de uso

```
Background principal  →  Abyssal (#070F0B)
Background secundário →  #0D1A13  (Abyssal + 6% branco)
Texto primário        →  Dew (#F2FFF9)
Texto secundário      →  Sage (#A8BFB5)
Ação / Destaque       →  Eden Green (#1CE07A)
Bordas / Divisores    →  Forest (#0A4F2E)
```

### Variações de opacidade aprovadas (Eden Green)

| Opacidade | HEX aprox.  | Uso                                 |
|-----------|-------------|-------------------------------------|
| 100%      | `#1CE07A`   | CTAs primários, ícones ativos       |
| 60%       | `#1CE07A99` | Hover states, glows                 |
| 20%       | `#1CE07A33` | Backgrounds de cards destacados     |
| 10%       | `#1CE07A1A` | Badges, tags, indicadores sutis     |

### Gradientes permitidos

```css
/* Apenas estes dois gradientes são aprovados para uso */

/* Glow de seção (hero/CTA) */
background: radial-gradient(ellipse at top, #0A4F2E 0%, #070F0B 60%);

/* Overlay de card premium */
background: linear-gradient(135deg, #0D1A13 0%, #070F0B 100%);
```

> **Regra:** Nenhum outro gradiente deve ser criado fora destes dois aprovados.

---

## 3. Tipografia

### Famílias tipográficas

| Função         | Família             | Peso(s)          | Importação                                                   |
|----------------|---------------------|------------------|--------------------------------------------------------------|
| Display/Títulos | Cormorant Garamond | 600, 700, 700i   | Google Fonts                                                 |
| Interface/Corpo | DM Mono             | 400, 500         | Google Fonts                                                 |

### Import (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Escala tipográfica

```
Display XL   →  Cormorant Garamond 700  ·  64px / 72px  ·  letter-spacing: -1.5px
Display LG   →  Cormorant Garamond 700  ·  48px / 56px  ·  letter-spacing: -1px
Heading H1   →  Cormorant Garamond 600  ·  36px / 44px  ·  letter-spacing: -0.5px
Heading H2   →  Cormorant Garamond 600  ·  28px / 36px  ·  letter-spacing: -0.25px
Heading H3   →  Cormorant Garamond 600  ·  22px / 30px
Subtítulo    →  DM Mono 500            ·  13px / 20px  ·  letter-spacing: 2px  ·  uppercase
Corpo        →  DM Mono 400            ·  15px / 26px
Corpo SM     →  DM Mono 400            ·  13px / 22px
Caption      →  DM Mono 400            ·  11px / 18px  ·  letter-spacing: 1.5px
Label/Tag    →  DM Mono 500            ·  10px / 16px  ·  letter-spacing: 3px  ·  uppercase
```

### Regras tipográficas

- Títulos de impacto (`Display XL`, `Display LG`) **podem** usar *itálico* para termos-chave
- Subtítulos em `DM Mono` uppercase funcionam como rótulos de seção — use sempre antes de headings importantes
- **Nunca** misture Cormorant com outra fonte serif de terceiros
- **Nunca** use peso abaixo de 400 em DM Mono — legibilidade no fundo escuro requer mínimo regular

---

## 4. Logotipo

### Descrição construtiva

O logotipo da Neo Eden é composto por dois elementos:

**Símbolo (N geométrico)**
- Forma base: letra `N` construída com polígonos geométricos retos — sem curvas
- Construção: dois pilares verticais conectados por diagonal descendente da esquerda para a direita
- No vértice superior-direito do primeiro pilar: nó circular (`◉`) em Eden Green com 40% de opacidade — representa crescimento emergindo da estrutura
- Cor do símbolo: Eden Green (`#1CE07A`) sobre Abyssal

**Wordmark**
- Texto: `Neo Eden` em Cormorant Garamond 700
- Separador visual: linha vertical de 1px em Forest (`#0A4F2E`) entre símbolo e wordmark
- Subtítulo: `DIGITAL STUDIO` em DM Mono 500, uppercase, letter-spacing: 3px, cor Sage

### Variações aprovadas

| Variação           | Descrição                                                  | Uso                            |
|--------------------|------------------------------------------------------------|--------------------------------|
| Completo horizontal| Símbolo + separador + wordmark + subtítulo (lado a lado)   | Header do site, email          |
| Compacto           | Símbolo + wordmark (sem subtítulo)                         | Nav mobile, assinaturas        |
| Ícone standalone   | Apenas o símbolo N                                         | Favicon, avatar de redes       |
| Monocromático Dew  | Logotipo completo em #F2FFF9                               | Fundos muito escuros/texturas  |
| Monocromático Dark | Logotipo completo em #070F0B                               | Uso eventual em fundos claros  |

### Área de proteção

A área de proteção mínima ao redor do logotipo é equivalente à **altura da letra `N` do símbolo** em todos os lados. Nenhum outro elemento visual deve invadir essa área.

### Tamanhos mínimos

| Variação     | Largura mínima digital | Largura mínima impressão |
|--------------|------------------------|--------------------------|
| Completo     | 160px                  | 40mm                     |
| Compacto     | 100px                  | 28mm                     |
| Ícone        | 24px                   | 8mm                      |

---

## 5. Elementos Visuais Complementares

### 5.1 Grid de pontos (Dot Grid)

Textura de fundo sutil para seções de destaque.

```css
.dot-grid-bg {
  background-image: radial-gradient(circle, #0A4F2E 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.4;
}
```

### 5.2 Linha de acento

Elemento horizontal fino usado abaixo de labels de seção.

```css
.accent-line {
  display: block;
  width: 32px;
  height: 1px;
  background: #1CE07A;
  margin: 8px 0 16px;
}
```

### 5.3 Nó de conexão (Node marker)

Pequeno círculo preenchido + linha — remete a redes e conexões digitais.

```css
/* Estrutura HTML: <span class="node-marker"></span> */
.node-marker {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.node-marker::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #1CE07A;
  box-shadow: 0 0 8px #1CE07A66;
}
.node-marker::after {
  content: '';
  display: inline-block;
  width: 20px;
  height: 1px;
  background: #0A4F2E;
}
```

### 5.4 Badge / Tag de seção

Rótulo de seção no estilo código-fonte.

```
Formato visual: // TEXTO DA SEÇÃO
Fonte: DM Mono 500
Tamanho: 10px
Cor: #1CE07A
Letter-spacing: 3px
Uso: sempre acima de Display/H1 em seções principais
```

### 5.5 Bordas de card

```css
.card-border {
  border: 0.5px solid #0A4F2E;
  border-radius: 12px;
}

/* Card com hover de destaque */
.card-border:hover {
  border-color: #1CE07A33;
  box-shadow: 0 0 0 1px #1CE07A1A;
}
```

---

## 6. Tokens de Design (CSS)

Cole este bloco no `:root` do projeto como fonte única de verdade para todos os valores visuais da marca.

```css
:root {
  /* === CORES === */
  --color-bg-primary:    #070F0B;
  --color-bg-secondary:  #0D1A13;
  --color-bg-card:       #0F1F17;

  --color-accent:        #1CE07A;
  --color-accent-60:     #1CE07A99;
  --color-accent-20:     #1CE07A33;
  --color-accent-10:     #1CE07A1A;

  --color-border:        #0A4F2E;
  --color-border-hover:  #1CE07A33;

  --color-text-primary:  #F2FFF9;
  --color-text-secondary:#A8BFB5;
  --color-text-muted:    #5A7A6E;

  /* === TIPOGRAFIA === */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Mono', 'Courier New', monospace;

  --text-display-xl: clamp(40px, 6vw, 64px);
  --text-display-lg: clamp(32px, 4.5vw, 48px);
  --text-h1:         clamp(26px, 3.5vw, 36px);
  --text-h2:         clamp(20px, 2.5vw, 28px);
  --text-h3:         22px;
  --text-body:       15px;
  --text-body-sm:    13px;
  --text-caption:    11px;
  --text-label:      10px;

  --leading-tight:   1.15;
  --leading-normal:  1.6;
  --leading-relaxed: 1.75;

  /* === ESPAÇAMENTO === */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32: 128px;

  /* === BORDAS === */
  --radius-sm:  6px;
  --radius-md:  10px;
  --radius-lg:  16px;
  --radius-xl:  24px;
  --radius-full: 9999px;

  /* === SOMBRAS === */
  --shadow-card:  0 1px 3px rgba(0,0,0,0.4), 0 0 0 0.5px #0A4F2E;
  --shadow-glow:  0 0 24px #1CE07A22;
  --shadow-glow-strong: 0 0 48px #1CE07A33;

  /* === TRANSIÇÕES === */
  --ease-default: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast:   150ms;
  --duration-normal: 250ms;
  --duration-slow:   400ms;

  /* === LAYOUT === */
  --container-max:  1200px;
  --container-pad:  clamp(20px, 5vw, 80px);
  --section-gap:    clamp(80px, 12vw, 160px);
  --grid-gap:       24px;
}
```

---

## 7. Componentes Base

### 7.1 Botão Primário (CTA principal)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 12px 24px;
  background: var(--color-accent);
  color: var(--color-bg-primary);
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: opacity var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);
}
.btn-primary:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0);
}
```

### 7.2 Botão Secundário (outline)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 11px 23px;
  background: transparent;
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  font-weight: 400;
  letter-spacing: 0.5px;
  border: 0.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-default),
              color var(--duration-fast) var(--ease-default);
}
.btn-secondary:hover {
  border-color: var(--color-accent-60);
  color: var(--color-accent);
}
```

### 7.3 Card de serviço

```css
.service-card {
  background: var(--color-bg-card);
  border: 0.5px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8) var(--space-6);
  transition: border-color var(--duration-normal) var(--ease-default),
              box-shadow var(--duration-normal) var(--ease-default);
}
.service-card:hover {
  border-color: var(--color-accent-20);
  box-shadow: var(--shadow-glow);
}
.service-card__icon {
  width: 40px;
  height: 40px;
  color: var(--color-accent);
  margin-bottom: var(--space-5);
}
.service-card__title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}
.service-card__description {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}
```

### 7.4 Label de seção (Section tag)

```html
<!-- Estrutura HTML padrão para abertura de seções -->
<span class="section-tag">// Nome da Seção</span>
<h2 class="section-heading">Título da seção</h2>
```

```css
.section-tag {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: 500;
  color: var(--color-accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}
.section-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: var(--leading-tight);
  letter-spacing: -0.5px;
}
```

### 7.5 Stat / Métrica

```css
.stat-item {}
.stat-item__value {
  font-family: var(--font-display);
  font-size: var(--text-display-lg);
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
}
.stat-item__label {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  color: var(--color-text-secondary);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: var(--space-2);
}
```

### 7.6 Input de formulário

```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  background: var(--color-bg-secondary);
  border: 0.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-default);
}
.form-input::placeholder {
  color: var(--color-text-muted);
}
.form-input:focus {
  border-color: var(--color-accent-60);
  box-shadow: 0 0 0 3px var(--color-accent-10);
}
```

---

## 8. Regras de Layout e Espaçamento

### Estrutura de Grid

```css
/* Container padrão */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

/* Grid de 12 colunas */
.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
}

/* Breakpoints */
/* Mobile:  < 768px  */
/* Tablet:  768–1024px */
/* Desktop: > 1024px */
```

### Estrutura de seções

```
Seção padrão:
  padding-top:    var(--section-gap)
  padding-bottom: var(--section-gap)

Seção hero (primeira):
  min-height:   100vh
  padding-top:  clamp(100px, 15vw, 160px)

Separador entre seções:
  border-top: 0.5px solid var(--color-border)
  opacity: 0.5
```

### Hierarquia de espaço interno

```
Espaço entre label de seção e heading:  var(--space-4)   → 16px
Espaço entre heading e subtítulo:       var(--space-5)   → 20px
Espaço entre subtítulo e CTA:           var(--space-8)   → 32px
Espaço entre cards em grid:             var(--grid-gap)  → 24px
Padding interno de card:                var(--space-8)   → 32px
```

### Responsividade — regras gerais

| Elemento          | Mobile           | Tablet          | Desktop          |
|-------------------|------------------|-----------------|------------------|
| Container padding | 20px             | 40px            | 80px             |
| Colunas de grid   | 1 coluna         | 2 colunas       | 3–4 colunas      |
| Display XL        | 36px             | 48px            | 64px             |
| Section gap       | 64px             | 96px            | 128px            |
| Nav               | Hamburger menu   | Hamburger menu  | Horizontal       |

---

## 9. Aplicação em Redes Sociais

### Especificações de formato

| Plataforma     | Formato         | Dimensão       | Notas                            |
|----------------|-----------------|----------------|----------------------------------|
| Instagram feed | Quadrado        | 1080×1080px    | Margem interna: 80px             |
| Instagram story| Vertical        | 1080×1920px    | Safe zone: 250px topo/base       |
| LinkedIn capa  | Horizontal      | 1584×396px     | Texto apenas na metade direita   |
| LinkedIn post  | Horizontal      | 1200×627px     | Margem interna: 64px             |
| Twitter/X      | Horizontal      | 1200×675px     | Margem interna: 64px             |
| Favicon        | Quadrado        | 32×32px + SVG  | Apenas símbolo N                 |

### Regras para posts

- **Fundo**: sempre `#070F0B` (Abyssal) — jamais branco ou cinza
- **Hierarquia**: logo no canto superior esquerdo · mensagem principal ao centro · CTA sutil no rodapé
- **Formato de headline**: Cormorant Garamond 700 · cor Dew (`#F2FFF9`)
- **Destaque de palavra-chave**: itálico + cor Eden Green (`#1CE07A`)
- **Rodapé de post**: `DM Mono · neo-eden.com.br · @neo.eden` em Sage (`#A8BFB5`)

---

## 10. DOs e DON'Ts

### ✅ DOs — sempre faça

- Manter o fundo escuro (Abyssal) como base em todas as aplicações digitais
- Usar Eden Green apenas como acento — nunca como cor dominante de fundo
- Aplicar `// LABEL` antes de headings de seção
- Usar Cormorant Garamond em itálico para destaque emocional em frases de impacto
- Respeitar a área de proteção do logotipo em todos os contextos
- Usar `0.5px` de espessura em bordas e divisores — nunca `1px` ou mais
- Manter espaçamento generoso — o silêncio visual é parte da identidade

### ❌ DON'Ts — nunca faça

- Não usar fundo branco ou claro no site (a identidade é dark-first)
- Não criar gradientes fora dos dois aprovados na seção 2
- Não trocar Cormorant por outras serifas (Times New Roman, Georgia standalone, etc.)
- Não usar Eden Green em grandes blocos de texto — prejudica legibilidade e dilui o impacto
- Não aplicar sombras pesadas (`box-shadow` dramático) — o visual é flat com sutileza de glow
- Não distorcer o logotipo (proporções são fixas — use apenas escala uniforme)
- Não usar mais de 2 pesos tipográficos por seção
- Não adicionar bordas com espessura maior que `1px`
- Não usar cores fora da paleta aprovada sem validação

---

## Referências e Recursos

### Google Fonts
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- [DM Mono](https://fonts.google.com/specimen/DM+Mono)

### Ferramentas recomendadas

| Ferramenta  | Uso                                      |
|-------------|------------------------------------------|
| Figma       | Design de componentes e protótipos       |
| VS Code     | Desenvolvimento front-end                |
| Coolors     | Verificação de contraste WCAG            |
| Squoosh     | Otimização de imagens para web           |

### Verificação de contraste (acessibilidade)

| Par de cores                    | Razão  | WCAG AA | WCAG AAA |
|---------------------------------|--------|---------|----------|
| Dew `#F2FFF9` / Abyssal `#070F0B`| ~18:1 | ✅      | ✅       |
| Eden Green `#1CE07A` / Abyssal  | ~9.5:1 | ✅      | ✅       |
| Sage `#A8BFB5` / Abyssal        | ~6.2:1 | ✅      | —        |

> Todos os pares principais atendem ao mínimo WCAG AA (4.5:1 para texto normal).

---

*Documento mantido por: Neo Eden Digital Studio*  
*Versão 1.0 — Para atualizações, contate os fundadores antes de qualquer alteração na identidade.*
