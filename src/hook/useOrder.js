import { useContext } from 'react';
import { Authorder } from '../context/order';

export const useOrder = () => {
	const { order, setorder } = useContext(Authorder);

	return { order, setorder };
};
