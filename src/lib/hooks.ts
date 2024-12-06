import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState } from '@/redux/store';

// Use these hooks throughout the app for proper typing
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) => useSelector(selector);
export const useAppStore = () => useStore<AppDispatch>();