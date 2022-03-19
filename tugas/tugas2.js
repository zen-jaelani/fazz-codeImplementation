function reverseWord(input) {
	return typeof input == "string"
		? input.split(" ").reverse().join(" ")
		: "input harus string";
}

console.log(reverseWord("kalimat ini dibalik"));
