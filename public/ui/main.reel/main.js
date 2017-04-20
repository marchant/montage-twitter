/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component,
    DataService = require("montage-data/logic/service/data-service").DataService;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();

            DataService.authorizationManager.delegate = this;
        }
    },
    
    // Holds the Authenticate object after a succesfull authrorization
    isAuthenticated: {
        value: false
    },

    isAuthenticationLoading: {
        value: null
    },

    authorizationManagerWillInstantiateAuthorizationPanelForService: {
        value: function(authorizationManager, authorizationPanel, authorizationService) {

        	// We put it in a slot
            this.auth.content = this.authorizationPanel = new authorizationPanel;
            this.isAuthenticationLoading = true;
            return this.authorizationPanel;
        }
    },

    authorizationManagerDidAuthorizeService: {
        value: function(authorizationManager, dataService) {
            debugger;
            this.isAuthenticated = true;
            this.isAuthenticationLoading = false;
        }
    }
});