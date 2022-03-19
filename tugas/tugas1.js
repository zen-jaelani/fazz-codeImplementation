function palindrom(input) {
	if (typeof input == "string") {
		input = input.toLowerCase();
		let result = input.split("").reverse().join("");
		return result == input ? "Palindrom" : "bukan palindrom";
	} else {
		return "pastikan input string";
	}
}

console.log(palindrom("malam"), palindrom("siang"));
