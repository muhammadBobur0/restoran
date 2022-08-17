import { createContext } from 'react';
import { useState } from 'react';

export const Authorder = createContext();

export const OrderProvider = ({ children }) => {
	const [order, setorder] = useState([]);
	console.log(order);

	return (
		<Authorder.Provider value={{ order, setorder }}>
			{children}
		</Authorder.Provider>
	);
};
