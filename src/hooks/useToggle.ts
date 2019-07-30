import { useState } from "react";

const useToggle = () => {
	const [opened, setOpened] = useState(false);

	const toggler = () => setOpened(!opened);

	const closeToggle = () => setOpened(false);

	return { opened, toggler, closeToggle };
};

export default useToggle;
