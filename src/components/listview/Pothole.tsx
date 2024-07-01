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
} from './style';

export const Pothole = ({ pothole }: { pothole: IPotholeInfo }) => {
  return (
    <PotholeContainer>
      <PotholeComponent>
        <ImageContainer>
          <PotholeImage src={pothole.thumbnail} />
        </ImageContainer>
        <PotholeContentComponent>
          <text>Address</text>
          <text>{' - ' + pothole.roadName}</text>
          <ImportanceText>
            <text>Importance</text>
            <text>: {pothole.importance}%</text>
          </ImportanceText>
          <DetailButtonContainer>
            <DetailButton>detail</DetailButton>
          </DetailButtonContainer>
        </PotholeContentComponent>
      </PotholeComponent>
    </PotholeContainer>
  );
};
