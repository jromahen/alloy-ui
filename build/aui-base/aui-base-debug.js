;(function() {
	YUI.AUI_config = {
		filter: 'raw',

		io: {
			method: 'GET'
		},

        combine: false,

		groups: {
            alloy: {
				combine: false,
                modules: {
						'aui-aria': {skinnable:false, requires:['aui-base','plugin']},
						'aui-autocomplete': {requires:['aui-base','aui-overlay-base','datasource','dataschema','aui-form-combobox'], skinnable:true},
						'aui-base': {skinnable:false, requires:['aui-node','aui-component','aui-debounce','aui-delayed-task','aui-selector','aui-event-base','oop','yui-throttle']},
						'aui-button-item': {requires:['aui-base','aui-state-interaction','widget-child'], skinnable:true},
						'aui-calendar': {requires:['aui-base','aui-datatype','widget-stdmod','datatype-date','widget-locale'], skinnable:true},
						'aui-carousel': {requires:['aui-base','anim'], skinnable:true},
						'aui-char-counter': {requires:['aui-base','aui-event-input'], skinnable:false},
						'aui-chart': {requires:['datasource','aui-swf','json'], skinnable:false},
						'aui-classnamemanager': {skinnable:false, requires:['classnamemanager'], condition: {trigger: 'classnamemanager', test: function(){return true;}}},
						'aui-color-picker': {submodules: {'aui-color-picker-grid-plugin': {requires:['aui-color-picker','plugin'], skinnable:true}, 'aui-color-picker-base': {requires:['aui-overlay-context','dd-drag','slider','substitute','aui-button-item','aui-color-util','aui-form-base','aui-panel'], skinnable:true} }, skinnable:true, use:['aui-color-picker-base','aui-color-picker-grid-plugin']},
						'aui-color-util': {skinnable:false},
						'aui-component': {requires:['widget','aui-classnamemanager'], skinnable:false},
						'aui-data-browser': {requires:['aui-base','aui-datasource-control-base','aui-input-text-control','aui-tree','aui-panel'], skinnable:true},
						'aui-data-set': {requires:['oop','collection','base'], skinnable:false},
						'aui-datasource-control': {submodules: {'aui-input-text-control': {requires:['aui-base','aui-datasource-control-base','aui-form-combobox']}, 'aui-datasource-control-base': {requires:['aui-base','datasource','dataschema']} }, skinnable:true, use:['aui-datasource-control-base','aui-input-text-control']},
						'aui-datatable': {submodules: {'aui-datatable-selection': {requires:['aui-datatable-base'], skinnable:true}, 'aui-datatable-edit': {requires:['aui-calendar','aui-datatable-events','aui-toolbar','aui-form-validator','overlay','sortable'], skinnable:true}, 'aui-datatable-events': {requires:['aui-datatable-base']}, 'aui-datatable-base': {requires:['aui-base','datatable','plugin']} }, skinnable:false, use:['aui-datatable-base','aui-datatable-events','aui-datatable-edit','aui-datatable-selection']},
						'aui-datatype': {requires:['aui-base'], skinnable:false},
						'aui-datepicker': {submodules: {'aui-datepicker-select': {requires:['aui-datepicker-base','aui-button-item'], skinnable:true}, 'aui-datepicker-base': {requires:['aui-calendar','aui-overlay-context'], skinnable:true} }, skinnable:true, use:['aui-datepicker-base','aui-datepicker-select']},
						'aui-debounce': {skinnable:false},
						'aui-delayed-task': {skinnable:false},
						'aui-diagram-builder': {submodules: {'aui-diagram-builder-impl': {requires:['aui-diagram-builder-base','overlay'], skinnable:true}, 'aui-diagram-builder-base': {requires:['aui-tabs','aui-property-list','collection','dd'], skinnable:true} }, skinnable:true, use:['aui-diagram-builder-base','aui-diagram-builder-impl']},
						'aui-dialog-iframe': {requires:['aui-base','aui-loading-mask','aui-resize-iframe','plugin'], skinnable:true},
						'aui-dialog': {requires:['aui-panel','dd-constrain','aui-button-item','aui-overlay-manager','aui-overlay-mask','aui-io-plugin','aui-resize'], skinnable:true},
						'aui-drawing': {submodules: {'aui-drawing-fonts': {requires:['aui-drawing-base']}, 'aui-drawing-drag': {requires:['aui-drawing-base','event-gestures']}, 'aui-drawing-animate': {requires:['aui-drawing-base']}, 'aui-drawing-base': {requires:['aui-base','aui-color-util','substitute']} }, plugins:{'aui-drawing-vml': {condition: {trigger: 'aui-drawing-base',test: function(A){return A.UA.vml;}}},'aui-drawing-svg': {condition: {trigger: 'aui-drawing-base',test: function(A){return A.UA.svg;}}}, 'aui-drawing-safari': {condition: {trigger: 'aui-drawing-base',test: function(A){var UA = A.UA; return UA.safari && (UA.version.major < 4 || (UA.iphone || UA.ipad));}}}}, skinnable:false, use:['aui-drawing-base', 'aui-drawing-animate', 'aui-drawing-drag', 'aui-drawing-fonts']},
						'aui-editable': {requires:['aui-base','aui-form-combobox'], skinnable:true},
						'aui-editor': {submodules: {'aui-editor-creole-plugin': {requires:['aui-base','editor-base','aui-editor-html-creole','aui-editor-creole-parser']}, 'aui-editor-creole-parser': {requires:['aui-base']}, 'aui-editor-bbcode-plugin': {requires:['aui-base','editor-base']}, 'aui-editor-toolbar-plugin': {requires:['aui-base','aui-button-item','aui-color-picker','aui-editor-menu-plugin','aui-editor-tools-plugin','aui-form-select','aui-overlay-context-panel','aui-panel','aui-toolbar','createlink-base','editor-lists','editor-base','plugin']}, 'aui-editor-menu-plugin': {requires:['aui-base','editor-base','aui-overlay-context','aui-panel','aui-editor-tools-plugin']}, 'aui-editor-tools-plugin': {requires:['aui-base','editor-base']}, 'aui-editor-base': {requires:['aui-base','editor-base','aui-editor-toolbar-plugin']} }, skinnable:true, use:['aui-editor-base','aui-editor-tools-plugin','aui-editor-menu-plugin','aui-editor-toolbar-plugin','aui-editor-bbcode-plugin','aui-editor-creole-parser','aui-editor-creole-plugin']},
						'aui-event': {submodules: {'aui-event-input': {requires:['aui-base']}, 'aui-event-base': {requires:['event']} }, skinnable:false, use:['aui-event-base','aui-event-input']},
						'aui-form-builder': {submodules: {'aui-form-builder-field': {requires:['aui-datatype','aui-form','aui-panel','aui-tooltip','io','substitute'], skinnable:true}, 'aui-form-builder-base': {requires:['aui-base','aui-button-item','aui-data-set','aui-nested-list','aui-tabs','substitute'], skinnable:true} }, skinnable:true, use:['aui-form-builder-base','aui-form-builder-field']},
						'aui-form': {submodules: {'aui-form-validator': {requires:['aui-base','aui-event-input','selector-css3','substitute']}, 'aui-form-textfield': {requires:['aui-form-field']}, 'aui-form-textarea': {requires:['aui-form-textfield'], skinnable:true}, 'aui-form-select': {requires:['aui-form-field']}, 'aui-form-field': {requires:['aui-base','aui-component','substitute']}, 'aui-form-combobox': {requires:['aui-form-textarea','aui-toolbar'], skinnable:true}, 'aui-form-base': {requires:['aui-base','aui-data-set','aui-form-field','querystring-parse']} }, skinnable:false, use:['aui-form-base','aui-form-combobox','aui-form-field','aui-form-select','aui-form-textarea','aui-form-textfield','aui-form-validator']},
						'aui-image-viewer': {submodules: {'aui-image-viewer-gallery': {requires:['aui-image-viewer-base','aui-paginator','aui-toolbar'], skinnable:true}, 'aui-image-viewer-base': {requires:['anim','aui-overlay-mask','substitute'], skinnable:true} }, skinnable:true, use:['aui-image-viewer-base','aui-image-viewer-gallery']},
						'aui-io': {submodules: {'aui-io-plugin': {requires:['aui-overlay-base','aui-parse-content','aui-io-request','aui-loading-mask']}, 'aui-io-request': {requires:['aui-base','io-base','json','plugin','querystring-stringify']} }, skinnable:false, use:['aui-io-request','aui-io-plugin']},
						'aui-live-search': {requires:['aui-base'], skinnable:false},
						'aui-loading-mask': {requires:['aui-overlay-mask','plugin','substitute'], skinnable:true},
						'aui-messaging': {requires:['aui-base','aui-task-manager','querystring'], skinnable:false},
						'aui-nested-list': {requires:['aui-base','dd-drag','dd-drop','dd-proxy'], skinnable:false},
						'aui-node': {submodules: {'aui-node-html5-print': {requires:['aui-node-html5']}, 'aui-node-html5': {requires:['collection','aui-base']}, 'aui-node-base': {requires:['node','aui-classnamemanager']} }, skinnable:false, use:['aui-node-base','aui-node-html5','aui-node-html5-print']},
						'aui-overlay': {submodules: {'aui-overlay-mask': {requires:['aui-base','aui-overlay-base','event-resize'], skinnable:true}, 'aui-overlay-manager': {requires:['aui-base','aui-overlay-base','overlay','plugin']}, 'aui-overlay-context-panel': {requires:['aui-overlay-context','anim'], skinnable:true}, 'aui-overlay-context': {requires:['aui-overlay-manager','aui-delayed-task','aui-aria']}, 'aui-overlay-base': {requires:['aui-component','widget-position','widget-stack','widget-position-align','widget-position-constrain','widget-stdmod']} }, skinnable:true, use:['aui-overlay-base','aui-overlay-context','aui-overlay-context-panel','aui-overlay-manager','aui-overlay-mask']},
						'aui-paginator': {requires:['aui-base','substitute'], skinnable:true},
						'aui-panel': {requires:['aui-component','widget-stdmod','aui-toolbar','aui-aria'], skinnable:true},
						'aui-parse-content': {requires:['async-queue','aui-base','plugin'], skinnable:false},
						'aui-portal-layout': {requires:['aui-base','dd-drag','dd-delegate','dd-drop','dd-proxy'], skinnable:true},
						'aui-progressbar': {requires:['aui-base','aui-aria'], skinnable:true},
						'aui-property-list': {requires:['aui-datatable'], skinnable:true},
						'aui-rating': {requires:['aui-base'], skinnable:true},
						'aui-resize-iframe': {requires:['aui-base','aui-task-manager','plugin'], skinnable:true},
						'aui-resize': {submodules: {'aui-resize-constrain': {requires:['aui-resize-base','dd-constrain','plugin'], skinnable:false}, 'aui-resize-base': {requires:['aui-base','dd-drag','dd-delegate','dd-drop','substitute'], skinnable:true} }, skinnable:true, use:['aui-resize-base','aui-resize-constrain']},
						'aui-scheduler': {submodules: {'aui-scheduler-calendar': {requires:['aui-scheduler-event'], skinnable:true}, 'aui-scheduler-event': {requires:['aui-base','aui-color-util','aui-datatype','aui-overlay-context-panel','substitute'], skinnable:true}, 'aui-scheduler-view': {requires:['aui-scheduler-event','aui-calendar','aui-button-item','substitute','dd-drag','dd-delegate','dd-drop','dd-constrain'], skinnable:true}, 'aui-scheduler-base': {requires:['aui-scheduler-view','datasource'], skinnable:true} }, skinnable:true, use:['aui-scheduler-base','aui-scheduler-view','aui-scheduler-event','aui-scheduler-calendar']},
						'aui-scroller': {requires:['aui-base','aui-simple-anim'], skinnable:true},
						'aui-selector': {requires:['selector-css3'], skinnable:false},
						'aui-simple-anim': {requires:['aui-base'], skinnable:false},
						'aui-skin-base': {path: 'aui-skin-base/css/aui-skin-base.css', type: 'css'},
						'aui-skin-classic-all': {path: 'aui-skin-classic/css/aui-skin-classic-all.css', type: 'css'},
						'aui-skin-classic': {path: 'aui-skin-classic/css/aui-skin-classic.css', requires:['aui-skin-base'], type: 'css'},
						'aui-sortable': {requires:['aui-base','dd-constrain','dd-drag','dd-drop','dd-proxy'], skinnable:true},
						'aui-state-interaction': {requires:['aui-base','plugin'], skinnable:false},
						'aui-swf': {requires:['aui-base','querystring-stringify-simple'], skinnable:false},
						'aui-tabs': {submodules: {'aui-tabs-menu-plugin': {requires:['aui-component','aui-state-interaction','aui-tabs-base','aui-overlay-context','plugin']}, 'aui-tabs-base': {requires:['aui-component','aui-state-interaction'], skinnable:true} }, skinnable:true, use:['aui-tabs-base','aui-tabs-menu-plugin']},
						'aui-task-manager': {requires:['aui-base'], skinnable:false},
						'aui-text': {submodules: {'aui-text-unicode': {requires:['aui-text-data-unicode'], skinnable:false}, 'aui-text-data-unicode': {requires:['text'], skinnable:false} }, skinnable:false, use:['aui-text-data-unicode', 'aui-text-unicode']},
						'aui-textboxlist': {requires:['anim-node-plugin','aui-autocomplete','node-focusmanager'], skinnable:true},
						'aui-toolbar': {requires:['aui-base','aui-button-item','aui-data-set','widget-parent'], skinnable:true},
						'aui-tooltip': {requires:['aui-overlay-context-panel'], skinnable:true},
						'aui-tree': {submodules: {'aui-tree-view': {requires:['aui-tree-node','dd-drag','dd-drop','dd-proxy'], skinnable:true}, 'aui-tree-node': {requires:['aui-tree-data','aui-io','json','querystring-stringify'], skinnable:false}, 'aui-tree-data': {requires:['aui-base'], skinnable:false} }, skinnable:true, use:['aui-tree-data', 'aui-tree-node', 'aui-tree-view']},
						'aui-video': {requires:['aui-base','querystring-stringify-simple'], skinnable:true},
						'aui-viewport': {requires:['aui-base'], skinnable:false}
				}
		    }
		}
	}
})();
;(function() {
	/*
	 * Alloy JavaScript Library v@VERSION@
	 * http://alloy.liferay.com/
	 *
	 * Copyright (c) 2010 Liferay Inc.
	 * http://alloy.liferay.com/LICENSE.txt
	 *
	 * Nate Cavanaugh (nathan.cavanaugh@liferay.com)
	 * Eduardo Lundgren (eduardo.lundgren@liferay.com)
	 *
	 * Attribution/Third-party licenses
	 * http://alloy.liferay.com/ATTRIBUTION.txt
	 *
	 * Date: @DATE@
	 * Revision: @REVISION@
	 */

	YUI.AUI_config = YUI.AUI_config || {};

	var defaults = YUI.AUI_config;

	YUI.prototype.ready = function() {
		var instance = this;

		var slice = Array.prototype.slice;
		var args = slice.call(arguments, 0), index = args.length - 1;

		var fn = args[index];

		var modules = slice.call(arguments, 0, index);

		modules.push('event');

		modules.push(
			function(instance) {
				var args = arguments;

				instance.on(
					'domready',
					function() {
						fn.apply(this, args);
					}
				);
			}
		);

		instance.use.apply(instance, modules);
	};

	var ALLOY;

	if (typeof A != 'undefined') {
		ALLOY = A;
	}
	else {
		ALLOY = YUI(defaults);
	}

	var guidExtensions = function(A) {
		A.Env._guidp = ['aui', A.version, A.Env._yidx].join('_').replace(/\./g, '_');
	};

	guidExtensions(ALLOY);

	var originalConfig = ALLOY.config;

	ALLOY.config = ALLOY.merge(originalConfig, YUI.AUI_config);

	YUI.AUI = function(o) {
		var instance = this;

		if (o || instance instanceof AUI) {
			var args = ALLOY.Array(arguments);

			args.unshift(ALLOY.config);

			var newInstance = YUI.apply(ALLOY.config.win, args);

			AUI._uaExtensions(newInstance);
			AUI._guidExtensions(newInstance);

			return newInstance;
		}

		return ALLOY;
	};

	var AUI = YUI.AUI;

	AUI._guidExtensions = guidExtensions;

	window.AUI = AUI;

	var UA = ALLOY.UA;

	ALLOY.mix(AUI, YUI, true, null, 2);

	ALLOY.mix(
		AUI,
		{
			__version: '@VERSION',

			defaults: defaults,

			html5shiv: function(frag) {
				var instance = this;
				var doc = frag || document;

				if (UA.ie && doc && doc.createElement) {
					var elements = AUI.HTML5_ELEMENTS, length = elements.length;

					while (length--) {
						doc.createElement(elements[length]);
					}
				}

				return frag;
			},

			setDefaults: function(defaults) {
				var instance = this;

				ALLOY.mix(AUI.defaults, defaults, true, null, 0, true);
				ALLOY.mix(ALLOY.config, defaults, true, null, 0, true);
			},

			HTML5_ELEMENTS: 'abbr,article,aside,audio,canvas,command,datalist,details,figure,figcaption,footer,header,hgroup,keygen,mark,meter,nav,output,progress,section,source,summary,time,video'.split(',')
		},
		true
	);

	/*
	* HTML5 Compatability for IE
	*/

	AUI.html5shiv();

	/*
		UA extensions
	*/

	(function() {
		var REGEX_VERSION_DOT = /\./g;

		var parseVersionNumber = function(str) {
			var count = 0;

			return parseFloat(
				str.replace(
					REGEX_VERSION_DOT,
					function() {
						return (count++ == 1) ? '' : '.';
					}
				)
			);
		};

		var DEFAULTS_VERSION = ['0','0'];

		var getVersion = function(regex, userAgent) {
			var version = (userAgent.match(regex) || DEFAULTS_VERSION)[1];

			return parseVersionNumber(version);
		};

		var MAP_OS_SELECTORS = {
			windows: 'win',
			macintosh: 'mac'
		};

		var BROWSERS = [
			'ie',
			'opera',
			'chrome',
			'aol',
			'camino',
			'firefox',
			'flock',
			'mozilla',
			'netscape',
			'icab',
			'konqueror',
			'safari'
		];

		AUI._uaExtensions = function(A) {
			var nav = navigator;

			var userAgent = nav.userAgent;

			var UA = A.UA;
			var OS = UA.os;

			var UAX = {
				aol: 0,

				camino: 0,
				firefox: 0,
				flock: 0,
				mozilla: 0,
				netscape: 0,

				icab: 0,
				konqueror: 0,

				safari: 0,

				browser: 0,

				win: OS == 'windows',
				mac: OS == 'macintosh',
				rhino: OS == 'rhino',

				agent: userAgent
			};

			if (UA.ie) {
				UAX.aol = getVersion(/America Online Browser ([^\s]*);/, userAgent);
			}
			else if (UA.gecko) {
				UAX.netscape = getVersion(/(Netscape|Navigator)\/([^\s]*)/, userAgent);
				UAX.flock = getVersion(/Flock\/([^\s]*)/, userAgent);
				UAX.camino = getVersion(/Camino\/([^\s]*)/, userAgent);
				UAX.firefox = getVersion(/Firefox\/([^\s]*)/, userAgent);
			}
			else if (UA.webkit) {
				UAX.safari = getVersion(/Version\/([^\s]*) Safari/, userAgent);
			}
			else {
				UAX.icab = getVersion(/iCab(?:\/|\s)?([^\s]*)/, userAgent);
				UAX.konqueror = getVersion(/Konqueror\/([^\s]*)/, userAgent);
			}

			if (!UAX.win && !UAX.mac) {
				var linux = /Linux/.test(userAgent);
				var sun = /Solaris|SunOS/.test(userAgent);

				if (linux) {
					UA.os = 'linux';
					UAX.linux = linux;
				}
				else if (sun) {
					UA.os = 'sun';
					UAX.sun = sun;
				}
			}

			var CONFIG = A.config,
				DOC = CONFIG.doc;

			UAX.touch = ('ontouchstart' in DOC);

			A.mix(UA, UAX);

			var browserList = [];
			var versionMajor = 0;

			var browser;
			var version;
			var uaVersionMajor;
			var uaVersionMinor;

			var versionObj = {
				string: '',
				major: versionMajor
			};

			var i = BROWSERS.length;

			while (i--) {
				browser = BROWSERS[i];
				version = UA[browser];

				if (version > 0) {
					versionMajor = parseInt(version, 10);
					uaVersionMajor = browser + versionMajor;

					uaVersionMinor = (browser + version);

					if (String(version).indexOf('.') > -1) {
						uaVersionMinor = uaVersionMinor.replace(/\.(\d).*/, '-$1');
					}
					else {
						uaVersionMinor += '-0';
					}

					browserList.push(browser, uaVersionMajor, uaVersionMinor);

					versionObj.string = browser + '';
					versionObj.major = versionMajor;
				}
			}

			UA.version = versionObj;

			UA.renderer = '';

			var documentElement = DOC.documentElement;

			UA.dir = documentElement.getAttribute('dir') || 'ltr';

			if (UA.ie) {
				UA.renderer = 'trident';
			}
			else if (UA.gecko) {
				UA.renderer = 'gecko';
			}
			else if (UA.webkit) {
				UA.renderer = 'webkit';
			}
			else if (UA.opera) {
				UA.renderer = 'presto';
			}

			A.UA = UA;

			/*
			* Browser selectors
			*/

			var selectors = [
				UA.renderer,
				UA.dir,
				'js'
			].concat(browserList);

			var osSelector = MAP_OS_SELECTORS[UA.os] || UA.os;

			selectors.push(osSelector);

			if (UA.mobile) {
				selectors.push('mobile');
			}

			if (UA.secure) {
				selectors.push('secure');
			}

			if (UA.touch) {
				selectors.push('touch');
			}

			UA.selectors = selectors.join(' ');

			// The methods in this if block only run once across all instances
			if (!documentElement._yuid) {
				documentElement.className += ' ' + UA.selectors;

				var vml,
					svg;

				vml = !(svg = !!(CONFIG.win.SVGAngle || DOC.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1')));

				if (vml) {
					var div = DOC.createElement('div');
					var behaviorObj;

					div.innerHTML = '<v:shape adj="1"/>';

					behaviorObj = div.firstChild;

					behaviorObj.style.behavior = 'url(#default#VML)';

					if (!(behaviorObj && typeof behaviorObj.adj == 'object')) {
						vml = false;
					}

					div = null;
				}

				AUI._VML = vml;
				AUI._SVG = svg;

				A.stamp(documentElement);
			}

			UA.vml = AUI._VML;
			UA.svg = AUI._SVG;
		};
	})();

	AUI._uaExtensions(ALLOY);

	/*
	* Disable background image flickering in IE6
	*/

	if (UA.ie && UA.version.major <= 6) {
		try {
			document.execCommand('BackgroundImageCache', false, true);
		}
		catch (e) {
		}
	}
})();
AUI.add('aui-base', function(A) {
var Lang = A.Lang,
	isArray = Lang.isArray,
	isFunction = Lang.isFunction,
	isString = Lang.isString,

	AArray = A.Array,
	LString = A.namespace('Lang.String'),
	arrayIndexOf = AArray.indexOf,

	EMPTY_STR = '',

	DOC = A.config.doc,
	FIRST_CHILD = 'firstChild',
	INNER_HTML = 'innerHTML',
	NODE_VALUE = 'nodeValue',
	NORMALIZE = 'normalize';

A.mix(
	LString,
	{
		contains: function(s, ss) {
		  return s.indexOf(ss) != -1;
		},

		endsWith: function(str, suffix) {
			var length = (str.length - suffix.length);

			return ((length >= 0) && (str.indexOf(suffix, length) == length));
		},

		// Courtesy of: http://simonwillison.net/2006/Jan/20/escape/
		escapeRegEx: function(str) {
			return str.replace(/([.*+?^$(){}|[\]\/\\])/g, '\\$1');
		},

		repeat: function(string, length) {
			return new Array(length + 1).join(string);
		},

		padNumber: function(num, length, precision) {
			var str = precision ? Number(num).toFixed(precision) : String(num);
			var index = str.indexOf('.');

			if (index == -1) {
				index = str.length;
			}

			return LString.repeat('0', Math.max(0, length - index)) + str;
		},

		remove: function(s, substitute, all) {
			var re = new RegExp(LString.escapeRegEx(substitute), all ? 'g' : '');

			return s.replace(re, '');
		},

		removeAll: function(s, substitute) {
			return LString.remove(s, substitute, true);
		},

		startsWith: function(str, prefix) {
			return (str.lastIndexOf(prefix, 0) == 0);
		},

		trim: Lang.trim,

		// inspired from Google unescape entities
		unescapeEntities: function(str) {
			if (LString.contains(str, '&')) {
				if (DOC && !LString.contains(str, '<')) {
					str = LString._unescapeEntitiesUsingDom(str);
				}
				else {
					// Fall back on pure XML entities
					str = LString._unescapeXmlEntities(str);
				}
			}

			return str;
		},

		_unescapeEntitiesUsingDom: function(str) {
			var el = LString._unescapeNode;

			el[INNER_HTML] = str;

			if (el[NORMALIZE]) {
				el[NORMALIZE]();
			}

			str = el.firstChild.nodeValue;

			el[INNER_HTML] = EMPTY_STR;

			return str;
		},

		_unescapeXmlEntities: function(str) {
			return str.replace(/&([^;]+);/g, function(s, entity) {
				switch (entity) {
					case 'amp':
						return '&';
					case 'lt':
						return '<';
					case 'gt':
						return '>';
					case 'quot':
						return '"';
					default:
						if (entity.charAt(0) == '#') {
							var n = Number('0' + entity.substr(1));

							if (!isNaN(n)) {
								return String.fromCharCode(n);
							}
						}

					return s;
				}
			});
		},

		_unescapeNode: DOC.createElement('a')
	}
);

A.mix(
	AArray,
	{
		remove: function(a, from, to) {
		  var rest = a.slice((to || from) + 1 || a.length);
		  a.length = (from < 0) ? (a.length + from) : from;

		  return a.push.apply(a, rest);
		},

		removeItem: function(a, item) {
			var index = arrayIndexOf(a, item);

			return AArray.remove(a, index);
		}
	}
);

A.mix(
	Lang,
	{
		emptyFn: function() {},

		emptyFnFalse: function() {
			return false;
		},

		emptyFnTrue: function() {
			return true;
		},

		isGuid: function(id) {
			var instance = this;

			return String(id).indexOf(A.Env._guidp) === 0;
		}
	}
);

}, '@VERSION@' ,{skinnable:false, requires:['aui-node','aui-component','aui-debounce','aui-delayed-task','aui-selector','aui-event-base','oop','yui-throttle']});
