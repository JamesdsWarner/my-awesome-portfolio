import * as Styled from "./skills.styles";
import Typography from "../Typography/typography.component";

const Skills = () => {
  const skillsArray = ["React", "JavaScript", "After-Effects", "Premiere-Pro"];

  return (
    <>
      <Typography size="large" type="fancy">
        My Skills
      </Typography>
      <Styled.SkillsContainer>
        {skillsArray.map((skill, i) => {
          return (
            <Styled.SkillsLogoWrapper key={i}>
              <Styled.SkillsLogo
                alt={`${skill} image`}
                src={`https://res.cloudinary.com/dbq4xtolf/image/upload/w_0.25,h_0.25,c_scale/portfolio/${skill}.webp`}
              />
            </Styled.SkillsLogoWrapper>
          );
        })}
      </Styled.SkillsContainer>
    </>
  );
};

export default Skills;
