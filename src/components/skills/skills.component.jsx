import * as Styled from "./skills.styles";
import afterEffetcsLogo from "../../assets/skills-logos/Adobe_After_Effects_CC_icon.svg.png";
import premiereProLogo from "../../assets/skills-logos/Adobe_Premiere_Pro_CC_icon.svg.png";
import reactLogo from "../../assets/skills-logos/JavaScript-logo.png";
import jSLogo from "../../assets/skills-logos/React-icon.svg.png";

const Skills = () => {
  return (
    <>
      <Styled.SkillsHeader>My Skills</Styled.SkillsHeader>
      <Styled.SkillsContainer>
        <Styled.SkillsLogoWrapper>
          <Styled.SkillsLogo src={afterEffetcsLogo} />
        </Styled.SkillsLogoWrapper>

        <Styled.SkillsLogoWrapper>
          <Styled.SkillsLogo src={premiereProLogo} />
        </Styled.SkillsLogoWrapper>

        <Styled.SkillsLogoWrapper>
          <Styled.SkillsLogo src={reactLogo} />
        </Styled.SkillsLogoWrapper>

        <Styled.SkillsLogoWrapper>
          <Styled.SkillsLogo src={jSLogo} />
        </Styled.SkillsLogoWrapper>
      </Styled.SkillsContainer>
    </>
  );
};

export default Skills;
