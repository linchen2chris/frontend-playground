import * as jestPG from "../jestPG";
import lolex from "lolex";

describe("jestPG", () => {
	it("should return correctly", () => {
		expect(jestPG.sqrt(3, 4)).toBe(5);
	});
	describe("jest.fn", () => {
		it("basic spy", () => {
			const spy = jest.fn();
			expect(spy(1, 2, 3)).toBeUndefined();
			expect(spy).toBeCalled();
			expect(spy).toBeCalledTimes(1);
			expect(spy).toBeCalledWith(1, 2, 3);
		});
		it("spy return result", () => {
			const spy = jest.fn().mockReturnValue(1);
			expect(spy(1, 2, 3)).toBe(1);
		});
		it("spy fn implements", () => {
			const spy = jest.fn((a, b) => a * b);
			expect(spy(1, 2)).toBe(2);
		});
		it("spy return promise", async () => {
			const spy = jest.fn().mockResolvedValue(2);
			expect(await spy()).toBe(2);
			await expect(spy()).resolves.toBe(2);
			const spy2 = jest.fn().mockRejectedValue(3);
			await expect(spy2()).rejects.toBe(3);
		});

		it("should spy module function 1", () => {
			const mockMath = Object.create(global.Math);
			mockMath.sqrt = jest.fn();
			global.Math = mockMath;
			jestPG.sqrt(1, 2);
			expect(mockMath.sqrt).toHaveBeenCalled();
			expect(mockMath.sqrt.mock.calls.length).toBe(1);
			mockMath.sqrt.mockRestore();
		});

		it("should spy module function 2", () => {
			Math.sqrt = jest.fn();
			jestPG.sqrt(1, 2);
			expect(Math.sqrt).toHaveBeenCalled();
			expect(Math.sqrt.mock.calls.length).toBe(1);
		});
	});
	describe("jest.mock", () => {
		//jest.mock("../jestPG");
		//const jestPG = require("../jestPG");
		//jestPG.add.mockImplementation((a, b) => 25);
		//expect(jestPG.add(1,1)).toBe(25);
		it("should mock add", () => {
			jestPG.add = jest.fn((a, b) => 25);
			expect(jestPG.add(1, 2)).toBe(25);
			expect(jestPG.sqrt(1, 2)).toBe(5);
		});
	});
	describe("jest mock date/time", () => {
		it("should mock fack time", () => {
			jest.useFakeTimers();
			setTimeout(() => {
				setTimeout(() => {
					console.log("200s");
				}, 200);
				console.log("100s");
			}, 100);
			// jest.runAllTimers();
			jest.runOnlyPendingTimers();
			jest.runOnlyPendingTimers();
			jest.clearAllTimers();
		});

		it("should mock fake date", () => {
			const clock = lolex.install({
				now: 1,
			});
			console.log(12, new Date());
			clock.uninstall();
			console.log(13, new Date());
		});
	});
});
