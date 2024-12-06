"use client";
import { useCurrentUserQuery } from '@/redux/slices/authApi';
import { clearUser, setUser } from '@/redux/slices/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const useSyncUser = () => {
    const dispatch = useDispatch();
    const { data, error } = useCurrentUserQuery(undefined);
    console.log(data)
    useEffect(() => {
        if (data) {
            dispatch(setUser(data)); // ইউজার সেট করা
        }
        if (error) {
            dispatch(clearUser()); // লগআউট করা
        }
    }, [data, error, dispatch]);
};
export default useSyncUser;