(function (window) {
	function myLib() {
		let myLib = {
			name: 'Daily'
		}

		return myLib
	}

	if (typeof window.GlobalLibraryName === 'undefined') {
		window.GlobalLibraryName = myLib();
	}
})(window);

export default GlobalLibraryName;