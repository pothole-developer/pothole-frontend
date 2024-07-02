import { useState } from 'react';
import { ButtonContentContainer, DropdownButton, DropdownItem, DropdownMenu, DropdownWrapper } from './style';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownState {
  isOpen: boolean;
  selectedOption: DropdownOption;
}

const initialOptions: DropdownOption[] = [
  { label: '없음', value: 'none' },
  { label: '중요도순', value: 'importance' },
  { label: '위험도순', value: 'risk' },
  { label: '거리순', value: 'distance' },
];

export const DropdownToggle: React.FC = () => {
  const [state, setState] = useState<DropdownState>({
    isOpen: false,
    selectedOption: { label: '없음', value: 'none' },
  });

  const toggleDropdown = () => {
    setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }));
  };

  const selectOption = (option: DropdownOption) => {
    setState((prevState) => ({
      ...prevState,
      isOpen: false,
      selectedOption: option,
    }));
  };

  const { isOpen, selectedOption } = state;

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        <ButtonContentContainer>
          <label>{selectedOption?.label}</label>
          <label>{' ▼'}</label>
        </ButtonContentContainer>
      </DropdownButton>
      <DropdownMenu $isOpen={isOpen}>
        {initialOptions.map((option) => (
          <DropdownItem key={option.value} onClick={() => selectOption(option)}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  );

  // 드롭다운 UI 렌더링
};
