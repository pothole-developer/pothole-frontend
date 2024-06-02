import { DetailButton, DetailButtonContainer, ImageContainer, ImportanceText, PortholeComponent, PortholeContainer, PortholeContentComponent, PortholeImage } from "./style";

interface Porthole {
  id:number;
  road:string;
  importance:number;
  status:string;
  image_url:string;
}

export const Porthole = ({porthole}: {porthole:Porthole}) => {

  return (
    <PortholeContainer>
      <PortholeComponent>
        <ImageContainer>
          <PortholeImage src={porthole.image_url}/>
        </ImageContainer>
        <PortholeContentComponent>
          <text>Address</text>
          <text>{" - " + porthole.road}</text>
          <ImportanceText>
            <text>Importance</text>
            <text>: {porthole.importance}%</text>
          </ImportanceText>
          <DetailButtonContainer>
            <DetailButton>detail</DetailButton>
          </DetailButtonContainer>
        </PortholeContentComponent>
      </PortholeComponent>
    </PortholeContainer>
  );
}