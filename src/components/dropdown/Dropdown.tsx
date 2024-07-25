import { useState } from 'react';
import { DropdownItem, DropdownList, DropDownPosition, DropdownWrapper } from './Dropdown.style';
import { Button } from 'components/button/Button';
import { colors } from 'styles/theme';
import ArrowDown from 'assets/images/arrowdown.svg?react';

interface DropdownProps {
  dropdownList: string[];
  value: string;
  onChange: (value: string) => void;
}

export const Dropdown = ({ dropdownList, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item: string) => {
    onChange(item);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <Button
        type="button"
        onClick={handleButtonClick}
        background={colors.mainWhite}
        color={colors.mainBlack}
        border={`1.8px solid ${colors.mainGrey}`}
        width="140px"
        justifyContent="space-between"
      >
        {value || '선택'}
        <ArrowDown />
      </Button>
      {isOpen ? (
        <DropDownPosition>
          <DropdownList $width={'140px'}>
            {dropdownList.map((item) => (
              <DropdownItem key={item} onClick={() => handleItemClick(item)}>
                {item}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropDownPosition>
      ) : null}
    </DropdownWrapper>
  );
};
