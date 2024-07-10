import { useState } from 'react';
import { DropdownItem, DropdownList, DropdownWrapper } from './Dropdown.style';
import { Button } from 'components/button/Button';
import { colors } from 'styles/theme';
import ArrowDown from 'assets/images/arrowdown.svg?react';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [processStatus, setProcessStatus] = useState<ProcessStatusKey | null>(null);

  type ProcessStatusKey = keyof typeof processStatusList;
  const processStatusList = {
    '최초발견': 'REGISTER',
    '응급보수 중': 'EMERGENCY_ONGOING',
    '응급보수 완료': 'EMERGENCY_COMPLETE',
    '정식보수 중': 'ONGOING',
    '정식보수 완료': 'COMPLETE',
    '보수중단': 'STOP',
  } as const;

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!(e.currentTarget.innerText in processStatusList)) return;

    setProcessStatus(e.currentTarget.innerText as ProcessStatusKey);
    handleButtonClick();
  };

  return (
    <DropdownWrapper>
      <Button
        onClick={handleButtonClick}
        background={colors.mainWhite}
        color={colors.mainBlack}
        border={`1.8px solid ${colors.mainGrey}`}
        width="120px"
      >
        {processStatus || '선택'}
        <ArrowDown />
      </Button>
      {isOpen ? (
        <DropdownList>
          {Object.keys(processStatusList).map((item) => (
            <DropdownItem key={item} onClick={handleItemClick}>
              {item}
            </DropdownItem>
          ))}
        </DropdownList>
      ) : null}
    </DropdownWrapper>
  );
};
