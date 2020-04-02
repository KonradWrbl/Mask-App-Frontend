import React from 'react';
import { AboutContainer, ProjectImg, Info, H2, InfoArea } from './style';




const About = () => {
    return (
        <AboutContainer id='info'>
            <ProjectImg />
            <Info>
                <H2>
                    Info
                </H2>
                <InfoArea>
                    Drukujemy dla medyków to projekt, który powstał aby wspierać szpitale i jednostki najbardziej narażone na zarażenie wydrukowanymi przyłbicami.
                    To podkarpacka inicjatywa charytatywna skupiająca firmy i indywidualnych wolontariuszy mająca na celu produkcję przyłbic ochronnych dla służb medycznych.
                </InfoArea>
            </Info>
        </AboutContainer>
    )
}

export default About;