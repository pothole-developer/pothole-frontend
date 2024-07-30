import { IPotholeInfo } from 'services/potholes';
import {
  DetailButton,
  DetailButtonContainer,
  ImageContainer,
  ImportanceText,
  PotholeComponent,
  PotholeContainer,
  PotholeContentComponent,
  PotholeImage,
} from './Pothole.style';

export const Pothole = ({
  pothole,
  openSlidebar,
}: {
  pothole: IPotholeInfo;
  openSlidebar: (potholeId: number) => void;
}) => {
  return (
    <PotholeContainer>
      <PotholeComponent>
        <ImageContainer>
          <PotholeImage src={pothole.thumbnail} />
        </ImageContainer>
        <PotholeContentComponent>
          <span>Address</span>
          <span>{' - ' + pothole.roadName}</span>
          <ImportanceText>
            <span>Importance</span>
            <span>: {pothole.importance}%</span>
          </ImportanceText>
          <DetailButtonContainer>
            <DetailButton onClick={() => openSlidebar(pothole.potholeId)}>detail</DetailButton>
          </DetailButtonContainer>
        </PotholeContentComponent>
      </PotholeComponent>
    </PotholeContainer>
  );
};
