const potholeProgressStatusList = [
  { display: '최초발견', value: 'REGISTER' },
  { display: '응급보수 중', value: 'EMERGENCY_ONGOING' },
  { display: '응급보수 완료', value: 'EMERGENCY_COMPLETE' },
  { display: '정식보수 중', value: 'ONGOING' },
  { display: '정식보수 완료', value: 'COMPLETE' },
  { display: '보수중단', value: 'STOP' },
] as const;

export const convertDisplayToValue = (display?: string) => {
  return potholeProgressStatusList.find((item) => item.display === display)?.value;
};

export const convertValueToDisplay = (value?: string) => {
  return potholeProgressStatusList.find((item) => item.value === value)?.display;
};
