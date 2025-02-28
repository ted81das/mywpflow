/* global FlowMatticWorkflow, FlowMatticWorkflowEvents, FlowMatticWorkflowApp, FlowMatticWorkflowSteps */
var FlowMatticWorkflow = FlowMatticWorkflow || {};

( function( $ ) {

	jQuery( document ).ready( function() {
		// Workflow Trigger maths View.
		FlowMatticWorkflow.MathsView = Backbone.View.extend( {
			template: FlowMatticWorkflow.template( jQuery( '#flowmattic-application-maths-action-data-template' ).html() ),

			events: {
			},

			initialize: function() {
				// Unset the previous captured data.
				window.captureData = false;
			},

			render: function() {
				var thisEl = this,
					appAction = this.model.get( 'action' ),
					actionTemplate,
					applicationSettings = {},
					submissionData = {};

				this.$el.html( this.template( this.model.toJSON() ) );

				return this;
			}
		} );
	} );
}( jQuery ) );
