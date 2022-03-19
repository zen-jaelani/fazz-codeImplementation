console.log(divideAndSort(5956560159466056));

function divideAndSort(input) {
	if (typeof input == "number") {
		input = input
			.toString()
			.split(0)
			.map((x) => x.split("").sort())
			.flat()
			.join("");
		return input;
	} else {
		return "input harus number";
	}
}
