import { ImportanceInput } from 'components/input/Input';
import { Dash, Divider, FilterItemWrapper, FilterWrapper, ImportanceInputBox, Text } from './Filter.style';
import { Dropdown } from 'components/dropdown/Dropdown';
import { Button } from 'components/button/Button';
import { colors } from 'styles/theme';
import Refresh from 'assets/images/refresh.svg?react';
import { Controller, useForm } from 'react-hook-form';

interface FormValues {
  minImportance: number;
  maxImportance: number;
  processStauts: string;
  sort: string;
}

export const Filter = () => {
  const { register, handleSubmit, control, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (data.maxImportance < data.minImportance) {
      alert('올바르지 않는 범위입니다');
      return;
    }

    // TODO: 필터적용 API 연동
  };

  const handleResetClick = () => {
    reset();
  };

  return (
    <FilterWrapper onSubmit={handleSubmit(onSubmit)}>
      <FilterItemWrapper>
        <Text>중요도 범위</Text>
        <ImportanceInputBox>
          <ImportanceInput {...register('minImportance', { min: 0, valueAsNumber: true })} />
          <Dash />
          <ImportanceInput {...register('maxImportance', { max: 100, valueAsNumber: true })} />
        </ImportanceInputBox>
      </FilterItemWrapper>

      <Divider />

      <FilterItemWrapper>
        <Text>처리상태</Text>
        <Controller
          name="processStauts"
          control={control}
          defaultValue="선택"
          render={({ field }) => (
            <Dropdown
              dropdownList={['최초발견', '응급보수 중', '응급보수 완료', '정식보수 중', '정식보수 완료', '보수중단']}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FilterItemWrapper>

      <Divider />

      <FilterItemWrapper>
        <Text>정렬</Text>
        <Controller
          name="sort"
          control={control}
          defaultValue="선택"
          render={({ field }) => (
            <Dropdown dropdownList={['위험도순', '중요도순']} value={field.value} onChange={field.onChange} />
          )}
        />
      </FilterItemWrapper>

      <Divider />

      <FilterItemWrapper>
        <Button onClick={handleResetClick} background="none" color={colors.mainBlack} width="140px" border="none">
          <Refresh />
          초기화
        </Button>
        <Button
          type="submit"
          background={colors.mainBlue}
          color={colors.mainWhite}
          justifyContent="center"
          width="140px"
        >
          필터 적용
        </Button>
      </FilterItemWrapper>
    </FilterWrapper>
  );
};
