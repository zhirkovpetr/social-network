import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { TAppDispatch, TRootState } from '../interfaces/Interface';

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
