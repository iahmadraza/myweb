(function (window) {
	function myLib() {
		let myLib = {
			name: "Ahmad"
		}

		return myLib
	}

	if (typeof window.GlobalLibraryName === 'undefined') {
		window.GlobalLibraryName = myLib();
	}
})(window);

export default GlobalLibraryName;
