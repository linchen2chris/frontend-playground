export const promiseTest = (input) => {
	return new Promise((resolve, reject) => {
    if(input > 0) {
		  resolve("positive");
    } else {
      reject("negitive");
    }
	});
};
