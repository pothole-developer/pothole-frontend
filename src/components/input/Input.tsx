import { forwardRef } from 'react';
import { ImportanceInputWrapper, PersentSymbol, StyledImportanceInput } from './Input.style';

export const ImportanceInput = forwardRef(({ ...register }, ref: React.Ref<HTMLInputElement>) => {
  return (
    <ImportanceInputWrapper>
      <StyledImportanceInput maxLength={3} {...register} ref={ref} />
      <PersentSymbol>%</PersentSymbol>
    </ImportanceInputWrapper>
  );
});
