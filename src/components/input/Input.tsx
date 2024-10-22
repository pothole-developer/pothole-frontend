import { forwardRef } from 'react';
import { ImportanceInputWrapper, PersentSymbol, RoadNameInputWrapper, StyledImportanceInput, StyledRoadNameInput } from './Input.style';

export const ImportanceInput = forwardRef(({ ...register }, ref: React.Ref<HTMLInputElement>) => {
  return (
    <ImportanceInputWrapper>
      <StyledImportanceInput maxLength={3} {...register} ref={ref} />
      <PersentSymbol>%</PersentSymbol>
    </ImportanceInputWrapper>
  );
});

export const RoadNameInput = forwardRef(({ ...register }, ref: React.Ref<HTMLInputElement>) => {
  return (
    <RoadNameInputWrapper>
      <StyledRoadNameInput {...register} ref={ref} />
    </RoadNameInputWrapper>
  );
});
