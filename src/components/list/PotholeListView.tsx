import { Pothole } from 'components/listview/Pothole';
import React from 'react';
import { ListViewOl } from './style';
import { IPotholeInfo } from 'services/potholes';

interface ListViewProps {
  items: IPotholeInfo[];
}

export const PotholeListView: React.FC<ListViewProps> = ({ items }) => {
  return (
    <ListViewOl>
      {items.map((item) => (
        <Pothole pothole={item} key={item.potholeId} />
      ))}
    </ListViewOl>
  );
};
