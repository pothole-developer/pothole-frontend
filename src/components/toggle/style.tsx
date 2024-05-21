import styled from 'styled-components';

// Toggle List

export const ListItem = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  cursor: pointer;

  .content {
    overflow: hidden;
  }

  .content-enter {
    max-height: 0;
  }

  .content-enter-active {
    max-height: 1000px;
    transition: max-height 0.3s ease-in-out;
  }

  .content-exit {
    max-height: 1000px;
  }

  .content-exit-active {
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
  }
`;

export const ToggleItemWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  cursor: pointer;
  border-radius: 5px;
`;

// Dropdown Toggle

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  padding: 8px 16px;
  background-color: #f1f1f1;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 100px;
`;

export const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 120px;
  background-color: #f1f1f1;
  list-style-type: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow-y: auto;
  transition: max-height 0.3s ease-in-out;
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export const ButtonContentContainer = styled.div`
  display: flex;
  width: -webkit-fill-available;
  justify-content: space-between;
`;