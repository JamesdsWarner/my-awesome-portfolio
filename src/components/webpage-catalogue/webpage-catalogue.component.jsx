import { useState } from "react";

import * as Styled from "./webpage-catalogue.styles";
import Typography from "../Typography/typography.component";
import WebpageImage from "../webpage-image/webpage-image.component";

const WebpageCatalogue = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linksObject = {
    0: "https://musical-cobbler-48ef86.netlify.app/",
    1: "https://ubiquitous-cascaron-232b69.netlify.app/",
    2: "https://jameswarner.netlify.app/",
  };

  const linksText = {
    0: "Blog using Netlify CMS, GraphQL and Gatsby",
    1: "Pokedex app using Pokedex API",
    2: "Portfolio using React and Styled Components",
  };

  const importAll = (r) => {
    return r.keys().map(r);
  };

  const filenames = importAll(
    require.context("../../assets/images/webpage-images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Styled.WebpageCatalogueContainer>
      <Typography size="large" type="fancy">
        Web Development
      </Typography>
      {filenames.map((filename, i) => {
        return (
          <a target="_blank" rel="noreferrer" href={linksObject[i]}>
            <WebpageImage
              key={i}
              filename={filename}
              setIsHovered={setIsHovered}
              isHovered={isHovered}
              text={linksText[i]}
            />
          </a>
        );
      })}
    </Styled.WebpageCatalogueContainer>
  );
};

export default WebpageCatalogue;
