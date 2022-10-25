(function() {
	require.config({
		paths: {
			"NGBankProductSelection": Terrasoft.getFileContentUrl("ProductBankCustomerJourney", "src/js/ng-bank-product-selection/bank-product-selection.js")
		},
		shim: {
			"NGBankProductSelection": {
				deps: ["ng-core"]
			}
		}
	});
}());
