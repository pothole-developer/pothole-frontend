import { Pothole } from 'components/listview/Pothole';
import React, { useState } from 'react';
import { IPotholeInfo } from 'services/potholes';
import { Virtuoso } from 'react-virtuoso';
import { usePotholesStore } from 'hooks/usePotholesStore';
import { PotholeDetail } from 'components/listview/PotholeDetail';

export const PotholeListView = () => {
  const sortStatus = usePotholesStore((state) => state.filter.sort);
  let visiblePotholes = usePotholesStore((state) => state.visiblePotholes);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPotholeId, setSelectedPotholeId] = useState<number | null>(null);

  const openSlidebar = (potholeId: number) => {
    setSelectedPotholeId(potholeId);
    setIsSidebarOpen(true);
  };

  const closeSlidebar = () => {
    setIsSidebarOpen(false);
  };

  if (sortStatus === '중요도순') {
    visiblePotholes.sort((a, b) => a.importance - b.importance);
  }

  const InnerItem = React.memo(({ item }: { item: IPotholeInfo }) => {
    return <Pothole pothole={item} key={item.potholeId} openSlidebar={openSlidebar} />;
  });

  return (
    <>
      <Virtuoso
        data={visiblePotholes}
        itemContent={(_, item) => <InnerItem item={item} />}
        style={{ display: 'flex' }}
      ></Virtuoso>
      {isSidebarOpen && selectedPotholeId && (
        <PotholeDetail potholeId={selectedPotholeId} closeSlidebar={closeSlidebar} />
      )}
    </>
  );
};
