import { Pothole } from 'components/listview/Pothole';
import React from 'react';
import { IPotholeInfo } from 'services/potholes';
import { Virtuoso } from 'react-virtuoso';
import { usePotholesStore } from 'hooks/usePotholesStore';

export const PotholeListView = () => {
  const sortStatus = usePotholesStore((state) => state.filter.sort);
  let visiblePotholes = usePotholesStore((state) => state.visiblePotholes);

  if (sortStatus === '중요도순') {
    visiblePotholes.sort((a, b) => a.importance - b.importance);
  }

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
