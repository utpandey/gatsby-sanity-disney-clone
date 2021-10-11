import React from 'react';
import { Button } from '../atoms/button/Button';
import { CTABanner } from '../atoms/cta/CTABanner';
import { Section } from './Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
          <a>
            <Button>Get Started</Button>
          </a>
      }
    />
  </Section>
);

export { Banner };
