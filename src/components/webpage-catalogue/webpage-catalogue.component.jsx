import { useState } from "react";

import * as Styled from "./webpage-catalogue.styles";
import Typography from "../Typography/typography.component";
import WebpageImage from "../webpage-image/webpage-image.component";

const WebpageCatalogue = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linksObject = {
    0: "https://musical-cobbler-48ef86.netlify.app/",
    1: "https://jameswarner.netlify.app/",
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
          <a href={linksObject[i]}>
            <WebpageImage
              key={i}
              filename={filename}
              setIsHovered={setIsHovered}
              isHovered={isHovered}
            />
          </a>
        );
      })}
    </Styled.WebpageCatalogueContainer>
  );
};

export default WebpageCatalogue;
