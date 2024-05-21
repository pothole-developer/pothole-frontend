import { useState } from 'react';
import { ListItem } from './style';
import { CSSTransition } from 'react-transition-group';

interface ListItem {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

const initialData: ListItem[] = [
  {
    id: '1',
    title: 'Item 1',
    content: 'This is the content of Item 1.',
    isOpen: false,
  },
  {
    id: '2',
    title: 'Item 2',
    content: 'This is the content of Item 2.',
    isOpen: false,
  },
  {
    id: '3',
    title: 'Item 3',
    content: 'This is the content of Item 3.',
    isOpen: false,
  },
];

export const ToggleList: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>(initialData);

  const toggleItem = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  // 리스트 아이템 렌더링

      {/*<div>
    {items.map((item) => (
      <ListItem key={item.id} isOpen={item.isOpen} onClick={() => toggleItem(item.id)}>
        <h3>{item.title}</h3>
        <div className="content">{item.content}</div>
      </ListItem>
    ))}
  </div>*/}
  return (

  <div>
  {items.map((item) => (
    <ListItem key={item.id} onClick={() => toggleItem(item.id)}>
      <h3>{item.title}</h3>
      <CSSTransition
        in={item.isOpen}
        timeout={300}
        classNames="content"
        unmountOnExit
      >
        <div className="content">{item.content}</div>
      </CSSTransition>
    </ListItem>
  ))}
</div>
  );
}
