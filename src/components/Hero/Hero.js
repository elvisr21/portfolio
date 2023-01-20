import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {websiteURL} from "../../constants/constants"

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome To <br/>
              My Portfolio
          </SectionTitle>
          <SectionText>
            I'm a NJIT graduate with a dual bachelor's in Computer Science 
            and Information Technology with experience developing and deploying 
            full stack applications through aws.
          </SectionText>
          <Button onClick={()=> window.location = websiteURL}>
              Learn More
          </Button>
      </LeftSection>
  </Section>
);

export default Hero;