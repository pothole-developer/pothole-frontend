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

export const Pothole = ({ pothole }: { pothole: IPotholeInfo }) => {
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
            <DetailButton>detail</DetailButton>
          </DetailButtonContainer>
        </PotholeContentComponent>
      </PotholeComponent>
    </PotholeContainer>
  );
};
