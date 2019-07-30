import { act, renderHook } from "@testing-library/react-hooks";
import useToggle from "./useToggle";

describe("useToggle.spec", () => {
	it("should reverse toggler", () => {
		const { result } = renderHook(() => useToggle());

		expect(result.current.opened).toBeFalsy();
		act(() => {
			result.current.toggler();
		});
		expect(result.current.opened).toBeTruthy();
	});

	it("should close toggler", () => {
		const { result } = renderHook(() => useToggle());
		expect(result.current.opened).toBeFalsy();
		act(() => {
			result.current.toggler();
		});
		expect(result.current.opened).toBeTruthy();
		act(() => {
			result.current.closeToggle();
		});
		expect(result.current.opened).toBeFalsy();
	});
});
