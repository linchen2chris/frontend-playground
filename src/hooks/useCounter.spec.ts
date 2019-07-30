import { act, renderHook } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

describe("useCounter.spec", () => {
	it("should increase", () => {
		const { result } = renderHook(() => useCounter());

		act(() => {
			result.current.increase();
		});
		expect(result.current.count).toBe(1);
	});
});
