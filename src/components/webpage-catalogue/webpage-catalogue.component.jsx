import { useState } from "react";

import * as Styled from "./webpage-catalogue.styles";
import Typography from "../Typography/typography.component";
import WebpageImage from "../webpage-image/webpage-image.component";

const WebpageCatalogue = () => {
  const [isHovered, setIsHovered] = useState(false);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  const filenames = importAll(
    require.context("../../assets/images/webpage-images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <Styled.WebpageCatalogueContainer>
      <Typography size="large" type="fancy">
        Web Development work
      </Typography>
      {filenames.map((filename, i) => {
        return (
          <WebpageImage
            key={i}
            filename={filename}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
          />
        );
      })}
    </Styled.WebpageCatalogueContainer>
  );
};

export default WebpageCatalogue;
