sap.ui.define([
		"com/sap/training/worklist/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.training.worklist.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);