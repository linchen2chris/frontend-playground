import React, { useState } from "react";

const HiddenMessage = ({ children }) => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<label id="lable" htmlFor="toggle">Show Message</label>
			<input
				id="toggle"
				type="checkbox"
				onChange={(e) => setShow(e.target.checked)}
				checked={show}
			/>
			{show? children: null}
		</div>
	);
};

export default HiddenMessage;
