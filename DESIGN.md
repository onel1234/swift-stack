---
name: Kinetic Logic
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#00505f'
  on-tertiary: '#ffffff'
  tertiary-container: '#006a7c'
  on-tertiary-container: '#93e8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 48px
  container-max: 1280px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 120px
---

## Brand & Style

This design system is built for a high-end web development agency that balances technical rigors with creative fluidity. The brand personality is **precise, visionary, and dependable**. It avoids unnecessary decorative elements, opting instead for a "content-first" philosophy where the work itself is the hero.

The aesthetic follows a **Modern Corporate Minimalism**. It leverages expansive white space to denote premium quality and breathing room, ensuring that complex technical information remains digestible. The visual language is punctuated by high-contrast accents and a rigorous alignment to a structured grid, evoking a sense of engineering excellence.

## Colors

The palette is anchored by a **Vibrant Indigo** primary color, symbolizing innovation and the digital frontier. This is paired with a deep **Slate Navy** for primary text and grounding elements, creating a sophisticated professional contrast.

- **Primary (Indigo):** Used for primary calls-to-action, active states, and brand-defining highlights.
- **Secondary (Slate Navy):** Reserved for high-level headings and heavy structural components.
- **Accents (Cyan):** Used sparingly for data visualization or subtle success indicators.
- **Neutrals:** A scale of cool grays provides the scaffolding for the interface. Backgrounds use a pure white or an ultra-light gray to maintain a "clean room" feel.

## Typography

This design system utilizes **Plus Jakarta Sans** as its primary typeface. It offers a modern, geometric clarity that mirrors the agency’s focus on clean code and elegant architecture. 

Headlines use tighter letter-spacing and bold weights to create a strong visual impact. Body copy is set with generous line-height to ensure maximum readability during long-form project case studies. Label styles utilize uppercase styling and increased tracking to create a clear distinction between metadata and content.

## Layout & Spacing

The layout is built on a **12-column fluid grid** with a fixed maximum width for desktop screens. Spacing follows a strict 4px baseline, ensuring all components align with mathematical precision.

- **Vertical Rhythm:** Sections are separated by large 120px padding blocks to emphasize the minimalist aesthetic and give content room to breathe.
- **Internal Spacing:** Components use a "Stack" model (8px, 16px, 32px) to maintain consistent relationships between nested elements.
- **Margins:** Page margins are generous, pushing content toward the center to create a focused, editorial feel.

## Elevation & Depth

Depth in this design system is conveyed through **Tonal Layers** and **Ambient Shadows** rather than heavy skeuomorphism. 

1.  **Base Layer:** The primary canvas is white (#FFFFFF).
2.  **Surface Layer:** Cards and secondary containers use a very subtle off-white or a 1px border (#E2E8F0) to define boundaries.
3.  **Shadows:** When used, shadows are highly diffused and low-opacity (using the Indigo primary color as a tint). For example, a "Soft Elevation" uses a `0px 10px 30px rgba(79, 70, 229, 0.05)` shadow.
4.  **Interactivity:** On hover, elements typically shift tonal layers (e.g., a border color change) rather than increasing shadow depth, maintaining a "flat-modern" look.

## Shapes

The design system employs a **Rounded** aesthetic (0.5rem base radius) to soften the technical nature of the brand. This level of roundedness suggests approachability and modern software conventions.

- **Buttons & Inputs:** Use the base 0.5rem (8px) radius.
- **Large Cards:** Use `rounded-lg` (1rem / 16px) to create a distinct container shape.
- **Contextual Elements:** Small tags or chips may use a full pill-shape to distinguish them from actionable buttons.

## Components

### Buttons
Primary buttons feature a solid Indigo background with white text. They include a subtle transition to a slightly darker shade on hover. Secondary buttons use a ghost style (Indigo border and text) to maintain a minimal footprint.

### Input Fields
Inputs are defined by a light gray border that transitions to Indigo on focus. Labels are positioned above the field in the `label-md` typography style. Errors are indicated by a 1px red border and a small caption below.

### Cards
Cards are the primary container for portfolio pieces and service offerings. They feature a white background with a subtle gray border. Images within cards should always have the same corner radius as the card itself.

### Lists & Navigation
Navigation items use the `body-md` weight. Active states are indicated by a small Indigo dot below the text or a subtle weight increase, avoiding heavy background highlights.

### Additional Components
- **Process Steppers:** Thin vertical lines with small circular nodes to illustrate the agency's development workflow.
- **Code Snippets:** Custom containers with a Slate Navy background and high-contrast syntax highlighting to showcase technical expertise.
- **Breadcrumbs:** Minimalist text paths using the `caption` style to aid navigation in complex case studies.
