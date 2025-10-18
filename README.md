# Ministry of Science UI

A React component library inspired by the Helldivers 2 Ministry of Science aesthetic. Features military-style UI components with angular designs, amber/yellow accents, and tactical visual effects.

## Installation

### From Source

```bash
npm install
```

### As a Package (after building)

```bash
npm install ministry-of-science-ui
```

## Usage

### Import Components

```tsx
import { Button, Panel, Card, Heading, Text } from 'ministry-of-science-ui';
import 'ministry-of-science-ui/styles';
```

### Basic Example

```tsx
import { Button, Panel, Heading } from 'ministry-of-science-ui';
import 'ministry-of-science-ui/styles';

function App() {
  return (
    <Panel title="TACTICAL INTERFACE" subtitle="Mission Control">
      <Heading level={2}>OPERATION BRIEFING</Heading>
      <Button variant="primary" onClick={() => console.log('Deployed!')}>
        Deploy Mission
      </Button>
    </Panel>
  );
}
```

## Components

### Button

Tactical-style buttons with corner cuts and hover effects.

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'ghost' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `fullWidth`: boolean (default: false)

```tsx
<Button variant="primary" size="large">Deploy Mission</Button>
<Button variant="danger">Abort</Button>
<Button variant="ghost">Cancel</Button>
```

### Panel

Container component with header and styled borders.

**Props:**
- `title`: string (optional)
- `subtitle`: string (optional)
- `variant`: 'default' | 'warning' | 'danger' | 'success' (default: 'default')
- `headerRight`: ReactNode (optional)

```tsx
<Panel
  title="MISSION STATUS"
  subtitle="Active Operations"
  variant="warning"
>
  <p>Content goes here</p>
</Panel>
```

### Card

Hoverable card component for displaying content blocks.

**Props:**
- `hoverable`: boolean (default: false)
- `glowOnHover`: boolean (default: false)

```tsx
<Card hoverable glowOnHover>
  <h3>Stratagem Alpha</h3>
  <p>Orbital Strike Platform</p>
</Card>
```

### Typography

#### Heading

**Props:**
- `level`: 1 | 2 | 3 | 4 | 5 | 6 (default: 1)
- `stencil`: boolean - hollow stencil effect (default: false)
- `glow`: boolean - glowing text shadow (default: true)

```tsx
<Heading level={1} stencil>MINISTRY OF SCIENCE</Heading>
<Heading level={2}>Mission Briefing</Heading>
```

#### Text

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'mono' (default: 'primary')
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `uppercase`: boolean (default: false)
- `bold`: boolean (default: false)

```tsx
<Text variant="accent" bold uppercase>ALERT</Text>
<Text variant="secondary" size="sm">Secondary information</Text>
```

#### Label & Code

```tsx
<Label htmlFor="input">Field Label</Label>
<Code inline>execute-protocol-alpha</Code>
```

### Visual Effects

#### WarningStripe

Animated hazard stripes.

**Props:**
- `variant`: 'danger' | 'caution' | 'hazard' (default: 'caution')
- `height`: number (default: 8)
- `animated`: boolean (default: false)

```tsx
<WarningStripe variant="danger" height={16} animated />
```

#### ScanLine

CRT-style scan line overlay effect.

**Props:**
- `speed`: 'slow' | 'normal' | 'fast' (default: 'normal')
- `opacity`: number (default: 0.3)
- `enabled`: boolean (default: true)

```tsx
<ScanLine speed="normal" opacity={0.3} />
```

## Theme

The library uses CSS custom properties that you can override:

```css
:root {
  --color-primary: #FFC107;
  --color-bg-darkest: #0A0A0A;
  --color-text-primary: #FFFFFF;
  --font-primary: 'Share Tech Mono', monospace;
  --font-secondary: 'Orbitron', sans-serif;
}
```

## Development

### Run Development Server

```bash
npm run dev
```

### Build Library

```bash
npm run build:lib
```

### Build Demo

```bash
npm run build
```

## Design Principles

- **Military Aesthetic**: Angular cuts, industrial styling
- **Color Palette**: Amber/yellow accents (#FFC107) on dark backgrounds
- **Typography**: Monospace and stencil-style fonts
- **Effects**: Scan lines, glowing elements, warning stripes
- **Modularity**: All components are self-contained and reusable

## License

MIT

---

**For Democracy. For Super Earth.**
