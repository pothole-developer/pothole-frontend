import { IPotholeInfo } from 'services/potholes';
import { create } from 'zustand';

interface IFilter {
  minImportance: number;
  maxImportance: number;
  processStatus: 'REGISTER' | 'EMERGENCY_ONGOING' | 'ONGOING' | 'COMPLETE' | 'STOP';
}

interface PotholesStoreState {
  visiblePotholes: IPotholeInfo[];
  filter: IFilter | null;
  setVisiblePotholes: (visiblePotholes: IPotholeInfo[]) => void;
  setFilter: (filter: IFilter) => void;
}

export const usePotholesStore = create<PotholesStoreState>((set) => ({
  visiblePotholes: [],
  filter: null,
  setVisiblePotholes: (visiblePotholes) => set({ visiblePotholes }),
  setFilter: (filter) => set({ filter }),
}));
