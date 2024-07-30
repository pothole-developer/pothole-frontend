import { ImportanceInput } from 'components/input/Input';
import { Dash, Divider, FilterItemWrapper, FilterWrapper, ImportanceInputBox, Text } from './Filter.style';
import { Dropdown } from 'components/dropdown/Dropdown';
import { Button } from 'components/button/Button';
import { colors } from 'styles/theme';
import Refresh from 'assets/images/refresh.svg?react';
import { Controller, useForm } from 'react-hook-form';
import { usePotholesStore } from 'hooks/usePotholesStore';
import { convertDisplayToValue, convertValueToDisplay } from 'utils/converter';

const potholeProgressStatusList = [
  { display: '최초발견', value: 'REGISTER' },
  { display: '응급보수 중', value: 'EMERGENCY_ONGOING' },
  { display: '응급보수 완료', value: 'EMERGENCY_COMPLETE' },
  { display: '정식보수 중', value: 'ONGOING' },
  { display: '정식보수 완료', value: 'COMPLETE' },
  { display: '보수중단', value: 'STOP' },
] as const;

const sortStatusList = ['중요도순', '위험도순'];

type IPotholeProgressStatusDisplay = (typeof potholeProgressStatusList)[number]['display'];

interface FormValues {
  minImportance: number;
  maxImportance: number;
  potholeProgressStatus?: IPotholeProgressStatusDisplay;
  sort: '중요도순' | '위험도순';
}

export const Filter = () => {
  const currentFilterValue = usePotholesStore((state) => state.filter);
  const setFilter = usePotholesStore((state) => state.setFilter);
  const { register, handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      minImportance: currentFilterValue.minImportance,
      maxImportance: currentFilterValue.maxImportance,
      potholeProgressStatus: convertValueToDisplay(currentFilterValue.potholeProgressStatus),
      sort: currentFilterValue.sort,
    },
  });

  const onSubmit = (data: FormValues) => {
    const { minImportance, maxImportance, potholeProgressStatus, sort } = data;
    if (maxImportance < minImportance) {
      alert('올바르지 않는 범위입니다');
      return;
    }

    const potholeProgressStatusValue = convertDisplayToValue(potholeProgressStatus);
    setFilter({ minImportance, maxImportance, potholeProgressStatus: potholeProgressStatusValue, sort });
  };

  const handleResetClick = () => {
    reset({ minImportance: 0, maxImportance: 100 });
    setFilter({ minImportance: 0, maxImportance: 100 });
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
          name="potholeProgressStatus"
          control={control}
          render={({ field }) => (
            <Dropdown
              dropdownList={potholeProgressStatusList.map((item) => item.display)}
              value={field.value || ''}
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
          render={({ field }) => (
            <Dropdown dropdownList={sortStatusList} value={field.value} onChange={field.onChange} />
          )}
        />
      </FilterItemWrapper>

      <Divider />

      <FilterItemWrapper>
        <Button
          type="button"
          onClick={handleResetClick}
          background="none"
          color={colors.mainBlack}
          width="140px"
          border="none"
        >
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
