import HiddenMessage from "../HiddenMessage";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";

describe("HiddenMsg.spec", () => {
	it("should hidden message", () => {
		const testMessage = "Test Message";
		const { queryByText, getByLabelText } = render(<HiddenMessage>{testMessage}</HiddenMessage>);
		expect(queryByText(testMessage)).toBeNull();

		fireEvent.click(getByLabelText(/show/i));

		expect(queryByText(testMessage)).toBeInTheDocument();
	});
});
