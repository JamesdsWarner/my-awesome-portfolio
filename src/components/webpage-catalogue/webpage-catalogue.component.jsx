import { useState } from 'react';

import * as Styled from './webpage-catalogue.styles';
import Typography from '../Typography/typography.component';
import WebpageImage from '../webpage-image/webpage-image.component';

const WebpageCatalogue = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linksObject = {
    0: 'https://musical-cobbler-48ef86.netlify.app/',
    1: 'https://ubiquitous-cascaron-232b69.netlify.app/',
    2: 'https://jameswarner.netlify.app/',
    3: 'https://my-todo-deploy.herokuapp.com/',
  };

  const linksText = {
    0: 'Blog using Netlify CMS, GraphQL, SASS and Gatsby',
    1: 'Pokedex app using Pokedex API',
    2: 'Portfolio using React and Styled Components',
    3: 'To-Do app with authenitcated login using MongoDB, an Express server backend and ReactJS client',
  };

  const webpageImageName = ['Blog', 'Pokedex', 'Portfolio', 'To-Do'];

  return (
    <Styled.WebpageCatalogueContainer>
      <Typography size="large" type="fancy">
        Web Development
      </Typography>
      {webpageImageName.map((filename, i) => {
        return (
          <a target="_blank" rel="noreferrer" href={linksObject[i]} key={i}>
            <WebpageImage
              source={`https://res.cloudinary.com/dbq4xtolf/image/upload/w_0.3,h_0.3,c_scale/portfolio/${filename}.webp`}
              setIsHovered={setIsHovered}
              isHovered={isHovered}
              text={linksText[i]}
              altText={filename}
            />
          </a>
        );
      })}
    </Styled.WebpageCatalogueContainer>
  );
};

export default WebpageCatalogue;
