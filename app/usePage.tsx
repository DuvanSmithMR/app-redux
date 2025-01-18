'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement } from '../store/exampleSlice';

export const usePage = () => {
    const { value } = useSelector((state: RootState) => state.example);
    const dispatch = useDispatch();

    const incremenetB = () => {
        dispatch(increment());
    }

    const decrementB = () => {
        dispatch(decrement());
    }

    return {
        value,
        incremenetB,
        decrementB,
    }
}