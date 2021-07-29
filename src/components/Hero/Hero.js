import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome To <br/>
              My Portfolio
          </SectionTitle>
          <SectionText>
            I'm a NJIT graduate with a dual bachelor's in Computer Science and Information Technology
          </SectionText>
          <Button onClick={()=> window.location = 'https://google.com'}>
              Learn More
          </Button>
      </LeftSection>
  </Section>
);

export default Hero;