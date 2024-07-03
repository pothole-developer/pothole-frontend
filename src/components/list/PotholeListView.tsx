import { Pothole } from 'components/listview/Pothole';
import React from 'react';
import { IPotholeInfo } from 'services/potholes';
import { Virtuoso } from 'react-virtuoso';

interface ListViewProps {
  items: IPotholeInfo[];
}

export const PotholeListView = ({ items }: ListViewProps) => {
  const InnerItem = React.memo(({ item }: { item: IPotholeInfo }) => {
    return <Pothole pothole={item} key={item.potholeId} />;
  });

  return (
    <Virtuoso data={items} itemContent={(_, item) => <InnerItem item={item} />} style={{ height: '100vh' }}></Virtuoso>
  );
};
