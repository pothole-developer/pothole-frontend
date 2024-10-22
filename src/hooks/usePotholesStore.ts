import { IPotholeInfo } from 'services/potholes';
import { create } from 'zustand';

export interface IFilter {
  minImportance: number;
  maxImportance: number;
  potholeProgressStatus?: 'REGISTER' | 'EMERGENCY_ONGOING' | 'EMERGENCY_COMPLETE' | 'ONGOING' | 'COMPLETE' | 'STOP';
  roadName: string;
  sort?: '중요도순' | '위험도순';
}

interface PotholesStoreState {
  visiblePotholes: IPotholeInfo[];
  filter: IFilter;
  setVisiblePotholes: (visiblePotholes: IPotholeInfo[]) => void;
  setFilter: (filter: IFilter) => void;
}

export const usePotholesStore = create<PotholesStoreState>((set) => ({
  visiblePotholes: [],
  filter: {
    minImportance: 0, 
    maxImportance: 100,
    roadName: ''
  },
  setVisiblePotholes: (visiblePotholes) => set({ visiblePotholes }),
  setFilter: (filter) => set({ filter }),
}));
