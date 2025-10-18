import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Panel } from './components/Panel/Panel';
import { Card } from './components/Card/Card';
import { Heading, Text, Label, Code } from './components/Typography/Typography';
import { WarningStripe } from './components/Effects/WarningStripe';
import { ScanLine } from './components/Effects/ScanLine';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <ScanLine speed="normal" opacity={0.3} />

      <div className="app-header">
        <Heading level={1} stencil>
          MINISTRY OF SCIENCE
        </Heading>
        <Text variant="secondary" size="sm" uppercase>
          Component Library - Helldivers 2 Inspired
        </Text>
      </div>

      <WarningStripe animated variant="caution" height={12} />

      <div className="app-content">
        {/* Buttons Section */}
        <Panel
          title="TACTICAL INTERFACE"
          subtitle="Button Components"
          variant="default"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="primary" onClick={() => setCount(count + 1)}>
                Deploy Mission
              </Button>
              <Button variant="secondary">Abort Mission</Button>
              <Button variant="danger">Emergency Extract</Button>
              <Button variant="ghost">Stealth Mode</Button>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="small">
                Small
              </Button>
              <Button variant="primary" size="medium">
                Medium
              </Button>
              <Button variant="primary" size="large">
                Large
              </Button>
            </div>

            <Button variant="primary" fullWidth>
              Full Width Deployment
            </Button>

            <div
              style={{
                padding: '16px',
                background: 'var(--color-surface-secondary)',
                borderRadius: '4px',
              }}
            >
              <Text variant="accent" bold>
                Mission Counter: {count}
              </Text>
            </div>
          </div>
        </Panel>

        {/* Cards Grid */}
        <Panel title="STRATEGIC ASSETS" subtitle="Card Components">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
            }}
          >
            <Card hoverable glowOnHover>
              <Heading level={4}>STRATAGEM 01</Heading>
              <Text variant="secondary" size="sm">
                Orbital Strike Platform
              </Text>
              <div style={{ marginTop: '12px' }}>
                <Code inline>ACTIVE</Code>
              </div>
            </Card>

            <Card hoverable glowOnHover>
              <Heading level={4}>STRATAGEM 02</Heading>
              <Text variant="secondary" size="sm">
                Supply Drop Protocol
              </Text>
              <div style={{ marginTop: '12px' }}>
                <Code inline>READY</Code>
              </div>
            </Card>

            <Card hoverable glowOnHover>
              <Heading level={4}>STRATAGEM 03</Heading>
              <Text variant="secondary" size="sm">
                Defensive Turret System
              </Text>
              <div style={{ marginTop: '12px' }}>
                <Code inline>STANDBY</Code>
              </div>
            </Card>
          </div>
        </Panel>

        {/* Typography Showcase */}
        <Panel title="COMMUNICATION PROTOCOLS" subtitle="Typography System">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Label>Primary Heading</Label>
              <Heading level={2}>HELLDIVERS COMMAND</Heading>
            </div>

            <div>
              <Label>Stencil Style</Label>
              <Heading level={3} stencil>
                CLASSIFIED OPERATION
              </Heading>
            </div>

            <div>
              <Label>Text Variants</Label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Text variant="primary">Primary text for main content</Text>
                <Text variant="secondary">Secondary text for descriptions</Text>
                <Text variant="accent" bold uppercase>
                  Accent text for important notices
                </Text>
                <Text variant="mono" size="sm">
                  Monospace text: ID-7821-ALPHA
                </Text>
              </div>
            </div>

            <div>
              <Label>Code Display</Label>
              <Code inline>execute-order-66</Code>
              <Code inline={false}>
                {`// Mission Parameters
const objective = "EXTRACT_VIP";
const timeout = 300; // seconds
const difficulty = "EXTREME";`}
              </Code>
            </div>
          </div>
        </Panel>

        {/* Alert Panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          <Panel
            title="WARNING"
            subtitle="Hostile Activity Detected"
            variant="warning"
          >
            <Text>
              Enemy forces approaching perimeter. Recommend defensive positions.
            </Text>
          </Panel>

          <Panel
            title="CRITICAL ALERT"
            subtitle="System Breach Detected"
            variant="danger"
          >
            <Text>Immediate action required. All personnel to battle stations.</Text>
          </Panel>

          <Panel
            title="MISSION SUCCESS"
            subtitle="Objective Complete"
            variant="success"
          >
            <Text>All objectives achieved. Extraction authorized.</Text>
          </Panel>
        </div>

        {/* Warning Stripes Demo */}
        <Panel title="HAZARD INDICATORS" subtitle="Visual Effects">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Label>Caution Zone</Label>
              <WarningStripe variant="caution" height={16} animated />
            </div>
            <div>
              <Label>Danger Zone</Label>
              <WarningStripe variant="danger" height={16} animated />
            </div>
            <div>
              <Label>Hazard Zone</Label>
              <WarningStripe variant="hazard" height={16} animated />
            </div>
          </div>
        </Panel>
      </div>

      <div className="app-footer">
        <WarningStripe variant="caution" height={8} />
        <div style={{ padding: '24px', textAlign: 'center' }}>
          <Text variant="secondary" size="sm" uppercase>
            Ministry of Science - UI Component Library
          </Text>
          <br />
          <Text variant="secondary" size="xs">
            For Democracy. For Super Earth.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default App;
