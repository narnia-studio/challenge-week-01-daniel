/**
 * @param {Array<{name: String, num: Number}>} peopleArray
 * @param {Number} slicesPerPie Number of slices each pie must have
 * @returns {Number}  Number of pies that must be bought
 */
function mmmPie(peopleArray, slicesPerPie) {
	let sliceCount = 0;
	
	peopleArray.forEach((person) => {
		sliceCount += person.num;
	})

	// uses Math.ceil to prevent decimal number of pies
	return Math.ceil(sliceCount / slicesPerPie);
}

// Tests
const arr = [{ name: 'Joe', num: 9 }, { name: 'Cami', num: 3 }, { name: 'Cassidy', num: 4 }]
console.log(mmmPie(arr, 8)) // 2