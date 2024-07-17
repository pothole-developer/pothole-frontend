import { Pothole } from 'components/listview/Pothole';
import React from 'react';
import { IPotholeInfo } from 'services/potholes';
import { Virtuoso } from 'react-virtuoso';
import { usePotholesStore } from 'hooks/usePotholesStore';

export const PotholeListView = () => {
  const visiblePotholes = usePotholesStore((state) => state.visiblePotholes);

  const InnerItem = React.memo(({ item }: { item: IPotholeInfo }) => {
    return <Pothole pothole={item} key={item.potholeId} />;
  });

  return (
    <Virtuoso
      data={visiblePotholes}
      itemContent={(_, item) => <InnerItem item={item} />}
      style={{ display: 'flex' }}
    ></Virtuoso>
  );
};
