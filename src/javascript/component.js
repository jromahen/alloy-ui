AUI().add(
	'component',
	function(A) {
		var Lang = A.Lang,

			getClassName = A.ClassNameManager.getClassName,

			NAME = 'component',

			CSS_COMPONENT = getClassName(NAME),

			CSS_HELPER_HIDDEN = getClassName('helper', 'hidden');

		var Component = function(config) {
			var instance = this;

			instance._originalConfig = config;

			Component.superclass.constructor.apply(this, arguments);

			var autoRender = instance.get('autoRender');

			if (autoRender) {
				if (autoRender === true) {
					autoRender = null;
				}

				instance.render(autoRender);
			}
		};

		Component.NAME = 'component';

		Component.ATTRS = {
			autoRender: {
				value: false
			},
			cssClass: {
				lazyAdd: false,
				value: null
			},
			hideClass: {
				value: CSS_HELPER_HIDDEN
			},
			owner: {
				validator: function(value) {
					var instance = this;

					return value instanceof A.Widget || value === null;
				}
			},
			relayEvents: {
				value: true
			}
		};

		A.extend(
			Component,
			A.Widget,
			{
				initializer: function(config) {
					var instance = this;

					instance._setOwnerComponent(instance.get('ownerComponent'));
					instance._setRelayEvents(instance.get('relayEvents'));

					instance.after('cssClassChange', instance._afterCssClassChange);
					instance.after('destroy', instance._afterComponentDestroy);
					instance.after('ownerChange', instance._afterComponentOwnerChange);
					instance.after('relayEventsChange', instance._afterComponentRelayEventsChange);
					instance.after('visibleChange', instance._afterComponentVisibleChange);
				},

				clone: function(config) {
					var instance = this;

					config.id = config.id || A.guid();

					config = config || {};

					A.mix(config, instance._originalConfig);

					return new instance.constructor(config);
				},

				toggle: function() {
					var instance = this;

					return instance.set('visible', !instance.get('visible'));
				},

				_afterComponentDestroy: function(event) {
					var instance = this;

					try {
						instance.get('boundingBox').remove();
					}
					catch (e) {}
				},

				_afterComponentOwnerChange: function(event) {
					var instance = this;

					instance._setOwnerComponent(event.newVal);
				},

				_afterComponentRelayEventsChange: function(event) {
					var instance = this;

					instance._setRelayEvents(event.newVal);
				},

				_afterComponentVisibleChange: function(event) {
					var instance = this;

					var hideClass = instance.get('hideClass');

					if (hideClass !== false) {
						var boundingBox = instance.get('boundingBox');

						var action = 'addClass';

						if (event.newVal) {
							action = 'removeClass';
						}

						boundingBox[action](hideClass || CSS_HELPER_HIDDEN);
					}
				},

				_afterCssClassChange: function(event) {
					var instance = this;

					var prevVal = event.prevVal;
					var prevValContent = prevVal + '-content';

					var newVal = event.newVal;
					var newValContent = newVal + '-content';

					var boundingBox = instance.get('boundingBox');
					var contentBox = instance.get('contentBox');

					boundingBox.replaceClass(prevVal, newVal);
					contentBox.replaceClass(prevValContent, newValContent);
				},

				_relayEvents: function() {
					var instance = this;

					Component.superclass.fire.apply(instance, arguments);

					var ownerComponent = instance._ownerComponent;

					if (ownerComponent) {
						ownerComponent.fire.apply(ownerComponent, arguments);
					}
				},

				_setRelayEvents: function(relayEvents) {
					var instance = this;

					if (relayEvents) {
						instance.fire = instance._relayEvents;
					}
					else {
						instance.fire = Component.superclass.fire;
					}
				},

				_setOwnerComponent: function(ownerComponent) {
					var instance = this;

					instance._ownerComponent = ownerComponent;
				}
			}
		);

		A.Component = Component;
	},
	'@VERSION',
	{
		requires: ['widget'],
		use: []
	}
);