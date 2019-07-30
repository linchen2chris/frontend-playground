import { useState, useCallback } from "react";

const useCounter = () => {
	const [count, setCount] = useState(0);

	const increase = useCallback(() => setCount(x => x + 1), []);

	return { count, increase };
};
export default useCounter;
