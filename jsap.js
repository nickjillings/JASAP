var JSAP =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/module.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/LinkedStore.js":
/*!****************************!*\
  !*** ./src/LinkedStore.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*globals document */
/*eslint-env browser */

var LinkedStore = function (storeName) {
    // Store for the semantic terms, each store holds its own data tree
    // Terms are added as key/value paris to a root node
    var root = {};

    function objectToXML(obj, root, doc) {
        // Used if an object was passed as a term value
        var term;
        for (term in obj) {
            if (obj.hasOwnProperty(term)) {
                if (typeof obj[term] === "object") {
                    var docNode;
                    if (obj[term].toXML) {
                        docNode = obj[term].toXML(doc);
                    } else {
                        docNode = doc.createElement(term);
                        root.appendChild(docNode);
                        if (obj[term].length) {
                            arrayToXML(obj[term], docNode, doc);
                        } else {
                            objectToXML(obj[term], docNode, doc);
                        }
                    }
                    root.appendChild(docNode);
                } else {
                    root.setAttribute(term, obj[term]);
                }
            }
        }
    }

    function arrayToXML(arr, root, doc) {
        // Used to convert an array to a list of XML entries
        var all_numbers = true,
            all_strings = true,
            i, l = arr.length;
        all_numbers = arr.every(function (a) {
            return typeof a === "number";
        });
        all_strings = arr.every(function (a) {
            return typeof a === "string";
        });
        if (all_numbers || all_strings) {
            // An array of numbers or strings
            arr.forEach(function (a, i) {
                root.setAttribute("index-" + i, a);
            });
        } else {
            // An array of objects
            arr.forEach(function (a, i) {
                var node = document.createElement("value");
                node.setAttribute("index", i);
                objectToXML(a, node, doc);
                root.appendChild(node);
            });
        }
    }

    Object.defineProperties(this, {
        'name': {
            'get': function () {
                return storeName;
            },
            'set': function (name) {
                if (storeName === undefined) {
                    name = storeName;
                } else {
                    throw ("Name is already set");
                }
            }
        },
        'addTerm': {
            'value': function (term, value) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                root[term] = value;
            }
        },
        'addTerms': {
            'value': function (termsObject) {
                if (typeof termsObject !== "object") {
                    throw ("addTerms takes an object of term/value pairs");
                }
                var term;
                for (term in termsObject) {
                    if (termsObject.hasOwnProperty(term)) {
                        this.addTerm(term, termsObject[term]);
                    }
                }
            }
        },
        'deleteTerm': {
            'value': function (term) {
                this.addTerm(term, undefined);
            }
        },
        'getTerm': {
            'value': function (term) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                return root[term];
            }
        },
        'hasTerm': {
            'value': function (term) {
                if (typeof term !== "string" && term.length === 0) {
                    throw ("term must be a string");
                }
                return root.hasOwnProperty(term);
            }
        },
        'toJSON': {
            'value': function () {
                return JSON.parse(JSON.stringify(root));
            }
        },
        'toXML': {
            'value': function (doc) {
                var node;
                if (!doc) {
                    doc = document.implementation.createDocument(null, storeName, null);
                    node = doc.firstElementChild;
                } else {
                    node = doc.createElement(storeName);
                }
                objectToXML(root, node, doc);
                return node;
            }
        }
    });
};

/* harmony default export */ __webpack_exports__["default"] = ({LinkedStore});


/***/ }),

/***/ "./src/base_plugin.js":
/*!****************************!*\
  !*** ./src/base_plugin.js ***!
  \****************************/
/*! exports provided: BasePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return BasePlugin; });
/* harmony import */ var _parameterManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameterManager.js */ "./src/parameterManager.js");
// Add getInputs to all AudioNodes to ease deployment
/*globals AudioNode, Worker, console, window, document, Promise, XMLHttpRequest */
/*eslint-env browser */
/*jshint esversion: 6 */


if (typeof AudioNode === "function" && window.importScripts === undefined) {
    AudioNode.prototype.getInputs = function () {
        return [this];
    };
}

// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function(factory, owner) {
    var inputList = [],
        outputList = [],
        pOwner = owner,
        delaySamples = 0,
        eventTarget = new EventTarget(),
        externalInterface = new PluginInterfaceMessageHub(this);
    if (this.context === undefined) {
        this.context = factory.context;
    }
    if (this.factory === undefined) {
        this.factory = factory;
    }
    this.featureMap = new PluginFeatureInterface(this);
    this.parameters = new _parameterManager_js__WEBPACK_IMPORTED_MODULE_0__["ParameterManager"](this, externalInterface);
    this.parameters.addEventListener("parameterset", function(e) {
        eventTarget.dispatchEvent(new CustomEvent("parameterset", {detail: e.detail}));
    });

    function deleteIO(node, list) {
        var i = list.findIndex(function (e) {
            return e === this;
        }, node);
        if (i === -1) {
            return false;
        }
        list.splice(i, 1);
        return true;
    }

    this.addInput = function (node) {
        inputList.push(node);
        return inputList;
    };
    this.deleteInput = function (node) {
        return deleteIO(node, inputList);
    };
    this.addOutput = function (node) {
        outputList.push(node);
        return this.outputs;
    };
    this.deleteOutput = function (node) {
        return deleteIO(node, outputList);
    };

    this.setProcessingDelayAsSeconds = function(seconds) {
        var fs = factory.context.sampleRate;
        if (typeof seconds == "number" && isFinite(seconds) && seconds >= 0) {
            return this.setProcessingDelayAsSamples(seconds*fs)/fs;
        }
        throw("setProcessingDelayAsSeconds Invalid argument");
    };

    this.setProcessingDelayAsSamples = function(samples) {
        if (typeof samples == "number" && isFinite(samples) && samples >= 0) {
            delaySamples = samples;
            var e = new Event("alterdelay");
            eventTarget.dispatchEvent(e);
            return delaySamples;
        } else {
            throw("setProcessingDelayAsSamples Invalid argument");
        }

    };

    this.start = this.stop = this.onloaded = this.onunloaded = this.deconstruct = function () {};

    Object.defineProperties(this, {
        "externalInterface": {
            "value": externalInterface
        },
        "numInputs": {
            get: function () {
                return inputList.length;
            },
            set: function () {
                throw ("Cannot set the number of inputs of BasePlugin");
            }
        },
        "numOutputs": {
            get: function () {
                return outputList.length;
            },
            set: function () {
                throw ("Cannot set the number of outputs of BasePlugin");
            }
        },
        "numParameters": {
            get: function () {
                return this.parameters.parameters.length;
            },
            set: function () {
                throw ("Cannot set the number of parameters of BasePlugin");
            }
        },
        "owner": {
            get: function () {
                return pOwner;
            },
            set: function (owner) {
                if (typeof owner === "object") {
                    pOwner = owner;
                }
                return pOwner;
            }
        },
        "inputs": {
            get: function (index) {
                return inputList;
            },
            set: function () {
                throw ("Illegal attempt to modify BasePlugin");
            }
        },
        "outputs": {
            get: function (index) {
                return outputList;
            },
            set: function () {
                throw ("Illegal attempt to modify BasePlugin");
            }
        },
        "processingDelayAsSamples": {
            "get": function() {
                return delaySamples;
            },
            "set": this.setProcessingDelayAsSamples
        },
        "processingDelayAsSeconds": {
            "get": function() {
                return delaySamples/factory.context.sampleRate;
            },
            "set": this.setProcessingDelayAsSeconds
        },
        "connect": {
            "value": function (dest) {
                this.outputs[0].connect(dest.inpt ? dest.input : dest);
            }
        },
        "disconnect": {
            "value": function (dest) {
                if (dest === undefined) {
                    this.outputs[0].disconnect();
                } else {
                    this.outputs[0].disconnect(dest.input ? dest.input : dest);
                }
            }
        },
        "getInputs": {
            "value": function () {
                return this.inputs;
            }
        },
        "getOutputs": {
            "value": function () {
                return this.outputs;
            }
        },
        "getParameterNames": {
            "value": function () {
                return this.parameters.getParameterNames();
            }
        },
        "getParameterByName": {
            "value": function (name) {
                return this.parameters.getParameterByName(name);
            }
        },
        "getParameterObject": {
            "value": function () {
                return this.parameters.getParameterObject();
            }
        },
        "setParameterByName": {
            "value": function (name, value) {
                return this.parameters.setParameterByName(name, value);
            }
        },
        "setParametersByObject": {
            "value": function (object) {
                return this.parameters.setParametersByObject(object);
            }
        },
        "addEventListener": {
            "value": function(key, value) {
                return eventTarget.addEventListener(key, value);
            }
        },
        "removeEventListener": {
            "value": function(key, value) {
                return eventTarget.addEventListener(key, value);
            }
        }
    });
};

var PluginFeatureInterface = function (BasePluginInstance) {
    this.plugin = BasePluginInstance;
    this.Receiver = new PluginFeatureInterfaceReceiver(this, BasePluginInstance.factory.FeatureMap);
    this.Sender = new PluginFeatureInterfaceSender(this, BasePluginInstance.factory.FeatureMap);

    Object.defineProperty(this, "onfeatures", {
        'get': function () {
            return this.Receiver.onfeatures;
        },
        'set': function (func) {
            this.Receiver.onfeatures = func;
            return func;
        }
    });
};
var PluginFeatureInterfaceReceiver = function (FeatureInterfaceInstance, FactoryFeatureMap) {
    function checkFeatureArgs(source, featureObject) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        if (featureObject === undefined) {
            throw ("FeatureObject must be defined");
        }
        if (typeof featureObject.outputIndex !== "number" || typeof featureObject.frameSize !== "number" || typeof featureObject.features !== "object") {
            throw ("Malformed featureObject");
        }
        return true;
    }
    var c_features = function () {};
    this.requestFeatures = function (featureList) {
        var i;
        for (i = 0; i < featureList.length; i++) {
            this.requestFeaturesFromPlugin(featureList[i].plugin, {
                'outputIndex': featureList[i].outputIndex,
                'frameSize': featureList[i].frameSize,
                'features': featureList[i].features
            });
        }
    };
    this.requestFeaturesFromPlugin = function (source, featureObject) {
        checkFeatureArgs(source, featureObject);
        FactoryFeatureMap.requestFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    };
    this.cancelFeaturesFromPlugin = function (source, featureObject) {
        checkFeatureArgs(source, featureObject);
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source, featureObject);
    };
    this.cancelAllFeaturesFromPlugin = function (source) {
        if (source === undefined) {
            throw ("Source plugin must be defined");
        }
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin, source);
    };
    this.cancelAllFeatures = function () {
        FactoryFeatureMap.deleteFeatures(FeatureInterfaceInstance.plugin);
    };

    this.postFeatures = function (Message) {
        /*
            Called by the Plugin Factory with the feature message
            message = {
                'plugin': sourcePluginInstance,
                'outputIndex': outputIndex,
                'frameSize': frameSize,
                'features': {} JS-Xtract feature results object
            }
        */
        if (typeof c_features === "function") {
            c_features(Message);
        }
    };

    Object.defineProperty(this, "onfeatures", {
        'get': function () {
            return c_features;
        },
        'set': function (func) {
            if (typeof func === "function") {
                c_features = func;
                return true;
            }
            return false;
        }
    });

};
var PluginFeatureInterfaceSender = function (FeatureInterfaceInstance, FactoryFeatureMap) {
    var OutputNode = function (parent, output, index) {
        var extractors = [];
        var Extractor = function (output, frameSize) {
            this.extractor = FeatureInterfaceInstance.plugin.factory.context.createAnalyser();
            this.extractor.fftSize = frameSize;
            output.connect(this.extractor);
            this.features = [];
            Object.defineProperty(this, "frameSize", {
                'value': frameSize
            });
            /*
            function recursiveProcessing(base, list) {
                var l = list.length,
                    i, entry;
                for (i = 0; i < l; i++) {
                    entry = list[i];
                    base[entry.name].apply(base, entry.parameters);
                    if (entry.features && entry.features.length > 0) {
                        recursiveProcessing(base.result[entry.name], entry.features);
                    }
                }
            }
            */
            var recursiveProcessing = this.factory.recursiveProcessing;

            function onaudiocallback(data) {
                //this === Extractor
                var message = {
                    'numberOfChannels': 1,
                    'results': []
                };
                recursiveProcessing(data, this.features);
                message.results[0] = {
                    'channel': 0,
                    'results': JSON.parse(data.toJSON())
                };
                this.postFeatures(data.length, message);
            }

            this.setFeatures = function (featureList) {
                this.features = featureList;
                if (this.features.length === 0) {
                    this.extractor.clearCallback();
                } else {
                    this.extractor.frameCallback(onaudiocallback, this);
                }
            };
        };
        var WorkerExtractor = function (output, frameSize) {
            function onaudiocallback(e) {
                var c, frames = [];
                for (c = 0; c < e.inputBuffer.numberOfChannels; c++) {
                    frames[c] = e.inputBuffer.getChannelData(c);
                }
                worker.postMessage({
                    'state': 2,
                    'frames': frames
                });
            }

            function response(msg) {
                this.postFeatures(frameSize, msg.data.response);
            }

            var worker = new Worker("jsap/feature-worker.js");
            worker.onerror = function (e) {
                console.error(e);
            };

            this.setFeatures = function (featureList) {
                var self = this;
                var configMessage = {
                    'state': 1,
                    'sampleRate': FeatureInterfaceInstance.plugin.factory.context.sampleRate,
                    'featureList': featureList,
                    'numChannels': output.numberOfOutputs,
                    'frameSize': this.frameSize
                };
                this.features = featureList;
                if (featureList && featureList.length > 0) {
                    worker.onmessage = function (e) {
                        if (e.data.state === 1) {
                            worker.onmessage = response.bind(self);
                            self.extractor.onaudioprocess = onaudiocallback.bind(self);
                        } else {
                            worker.postMessage(configMessage);
                        }
                    };
                    worker.postMessage({
                        'state': 0
                    });
                } else {
                    this.extractor.onaudioprocess = undefined;
                }

            };

            this.extractor = FeatureInterfaceInstance.plugin.factory.context.createScriptProcessor(frameSize, output.numberOfOutputs, 1);
            output.connect(this.extractor);
            this.extractor.connect(FeatureInterfaceInstance.plugin.factory.context.destination);

            Object.defineProperty(this, "frameSize", {
                'value': frameSize
            });
        };
        this.addExtractor = function (frameSize) {
            var obj;
            if (window.Worker) {
                obj = new WorkerExtractor(output, frameSize);
            } else {
                obj = new Extractor(output, frameSize);
            }
            extractors.push(obj);
            Object.defineProperty(obj, "postFeatures", {
                'value': function (frameSize, resultsJSON) {
                    var obj = {
                        'outputIndex': index,
                        'frameSize': frameSize,
                        'results': resultsJSON
                    };
                    this.postFeatures(obj);
                }.bind(this)
            });
            return obj;
        };
        this.findExtractor = function (frameSize) {
            var check = frameSize;
            return extractors.find(function (e) {
                // This MUST be === NOT ===
                return e.frameSize === check;
            });
        };
        this.deleteExtractor = function (frameSize) {};
    };
    var outputNodes = [];
    this.updateFeatures = function (featureObject) {
        // [] Output -> {} 'framesize' -> {} 'features'
        var o;
        for (o = 0; o < featureObject.length; o++) {
            if (outputNodes[o] === undefined) {
                if (o > FeatureInterfaceInstance.plugin.numOutputs) {
                    throw ("Requested an output that does not exist");
                }
                outputNodes[o] = new OutputNode(FeatureInterfaceInstance.plugin, FeatureInterfaceInstance.plugin.outputs[o], o);
                Object.defineProperty(outputNodes[o], "postFeatures", {
                    'value': function (resultObject) {
                        this.postFeatures(resultObject);
                    }.bind(this)
                });
            }
            var si;
            for (si = 0; si < featureObject[o].length; si++) {
                var extractor = outputNodes[o].findExtractor(featureObject[o][si].frameSize);
                if (!extractor) {
                    extractor = outputNodes[o].addExtractor(featureObject[o][si].frameSize);
                }
                extractor.setFeatures(featureObject[o][si].featureList);
            }
        }
    };

    this.postFeatures = function (featureObject) {
        /*
            Called by the individual extractor instances:
            featureObject = {'frameSize': frameSize,
            'outputIndex': outputIndex,
            'results':[]}
        */
        FeatureInterfaceInstance.plugin.factory.FeatureMap.postFeatures({
            'plugin': FeatureInterfaceInstance.plugin.pluginInstance,
            'outputIndex': featureObject.outputIndex,
            'frameSize': featureObject.frameSize,
            'results': featureObject.results
        });
    };

    // Send to Factory
    FactoryFeatureMap.createSourceMap(this, FeatureInterfaceInstance.plugin.pluginInstance);
};

/*
    This is an optional module which will attempt to create a graphical implementation.
    As with other audio plugins for DAWs, the GUI is an optional element which can be accepted or rejected by the host.

    The actual GUI is launched as an <iframe> element in the browser to keep each plugin isolated from the rest
*/

var PluginUserInterface = function (BasePluginInstance, width, height) {
    console.log("DEPRECATED!!");
    console.log("The class PluginUserInterface has been deprecated");
    console.log("Please look at the documents for the new methods for building plugins");
    this.processor = BasePluginInstance;
    this.root = document.createElement("div");
    if (width > 0) {
        this.root.style.width = width + "px";
    }
    if (height > 0) {
        this.root.style.height = height + "px";
    }
    this.dim = {
        width: width,
        height: height
    };
    this.intervalFunction = null;
    this.updateInterval = null;
    this.PluginParameterInterfaces = [];

    var PluginParameterInterfaceNode = function (DOM, PluginParameterInstance, processor, gui) {
        this.input = DOM;
        this.processor = processor;
        this.GUI = gui;
        this.AudioParam = PluginParameterInstance;
        this.handleEvent = function (event) {
            this.AudioParam.value = this.input.value;
        };
        this.input.addEventListener("change", this);
        this.input.addEventListener("mousemove", this);
        this.input.addEventListener("click", this);
    };

    this.createPluginParameterInterfaceNode = function (DOM, PluginParameterInstance) {
        var node = new PluginParameterInterfaceNode(DOM, PluginParameterInstance, this.processor, this);
        this.PluginParameterInterfaces.push(node);
        return node;
    };

    this.update = function () {};

};

PluginUserInterface.prototype.getRoot = function () {
    return this.root;
};
PluginUserInterface.prototype.getDimensions = function () {
    return this.dim;
};
PluginUserInterface.prototype.getWidth = function () {
    return this.dim.width;
};
PluginUserInterface.prototype.getHeight = function () {
    return this.dim.height;
};
PluginUserInterface.prototype.beginCallbacks = function (ms) {
    // Any registered callbacks are started by the host
    if (ms === undefined) {
        ms = 250;
    } //Default of 250ms update period
    if (this.intervalFunction === null) {
        this.updateInterval = ms;
        this.intervalFunction = window.setInterval(function () {
            this.update();
        }.bind(this), 250);
    }
};
PluginUserInterface.prototype.stopCallbacks = function () {
    // Any registered callbacks are stopped by the host
    if (this.intervalFunction !== null) {
        window.clearInterval(this.intervalFunction);
        this.updateInterval = null;
        this.intervalFunction = null;
    }
};
PluginUserInterface.prototype.loadResource = function (url) {
    var p = new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        req.send();
    });
    return p;
};
PluginUserInterface.prototype.clearGUI = function () {
    this.stopCallbacks();
    this.root.innerHTML = "";
};

var PluginInterfaceMessageHub = function(owner) {
    function buildPluginParameterJSON(plugin, sources) {
        var names = owner.parameters.getParameterNames();
        var O = {};
        if (sources === undefined || sources.length == undefined) {
            sources = names;
        }
        names.filter(function(name) {
            return this.includes(name);
        }, sources).forEach(function(name) {
            var param = owner.parameters.getParameterByName(name);
            O[name] = {
                value: param.value,
                maximum: param.maximum,
                minimum: param.minimum,
                defaultValue: param.defaultValue,
                type: param.constructor.name,
                name: name
            };
            if (param.automation) {
                O[name].automated = param.automation.enabled;
            }
        });
        return O;
    }

    function buildParameterUpdatePayload(sender_id, sources) {
        var msg = {
            message: "updateParameters",
            parameters: buildPluginParameterJSON(owner, sources)
        };
        if (sender_id) {
            msg.sender_id = sender_id;
        }
        return msg;
    }

    function sendParameterUpdates(channel, sources) {
        channel.postMessage(buildParameterUpdatePayload(undefined, sources), location.origin);
    }

    function broadcastParameterUpdates(sender_id, sources) {
        var msg = buildParameterUpdatePayload(sender_id, sources);
        windowMessageList.forEach(function(w) {
            w.postMessage(msg, location.origin);
        });
    }

    function setParameterMessage(e) {
        var updateObjects = [];
        var parameters = JSON.parse(e.message.parameters);
        Object.keys(parameters).forEach(function(name) {
            var parameterObject = owner.parameters.getParameterByName(name);
            if (parameterObject) {
                parameterObject.setValue(parameters[name].value, false);
                updateObjects.push(name);
            }
        });
        return updateObjects;
    }

    var windowMessageList = [];
    var listener;
    var state = 0;
    window.addEventListener("message",function(e) {
        if (!windowMessageList.includes(e.source)) {
            return;
        }
        switch(e.data.message) {
            case "setParameterByName":
            var parameterObject;
                if (e.data.parameter.name) {
                    parameterObject = owner.parameters.getParameterByName(e.data.parameter.name);
                    if (parameterObject) {
                        parameterObject.setValue(e.data.parameter.value, false);
                        broadcastParameterUpdates(e.data.sender_id, [parameterObject.name]);
                    }
                }
                break;
            case "setParametersByObject":
                if (e.data.parameter) {
                    var updateObjects = setParameterMessage(e);
                    broadcastParameterUpdates(e.data.sender_id, updateObjects);
                }
                break;
            case "requestParameters":
                if (typeof e.data.name == "string") {
                    sendParameterUpdates(e.source, e.data.name);
                } else {
                    sendParameterUpdates(e.source);
                }
                break;
            default:
                throw("Unknown message type \""+e.data.message+"\"");
        }
    });

    Object.defineProperties(this, {
        "updateInterfaces": {
            "value": function(automationOnly) {
                if (automationOnly === undefined) {
                    automationOnly = false;
                }
                var sources;
                if (automationOnly) {
                    var parameterNames = owner.parameters.getParameterNames();
                    sources = parameterNames.filter(function(name) {
                        var param = owner.parameters.getParameterByName(name);
                        return (param.automatable && param.enabled === true);
                    });
                    if (sources.length > 0)
                    {
                        broadcastParameterUpdates(undefined, sources);
                    }
                } else {
                    broadcastParameterUpdates();
                }

            }
        },
        "closeWindows": {
            value: function() {
                if (state === 0) {
                    while(windowMessageList.length > 0) {
                        var w = windowMessageList.pop();
                        w.close();
                    }
                } else {
                    throw("Cannel already closed");
                }
            }
        },
        "registerWindow": {
            "value": function(w) {
                if (windowMessageList.includes(w)) {
                    windowMessageList.splice(windowMessageList.indexOf(w), 1);
                }
                windowMessageList.push(w);
                sendParameterUpdates(w);
                return true;
            }
        },
        "removeWindow": {
            "value": function(w) {
                if (windowMessageList.includes(w)) {
                    windowMessageList.splice(windowMessageList.indexOf(w), 1);
                }
            }
        }
    });
};




/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _plugin_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin-factory */ "./src/plugin-factory.js");


(function(root, factory) {
    console.log("Load JSAP...");
    if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
        console.log("define");
        define("JSAP", [], factory);
    } else if ( true && module.exports) {
        console.log("module");
        module.exports = factory();
    } else {
        console.log("direct");
        if (root === undefined) {
            root = window;
        }
        root.JSAP = factory();
    }
})(undefined, function() {
    console.log("factory");
    return {
        PluginFactory: _plugin_factory__WEBPACK_IMPORTED_MODULE_0__["PluginFactory"],
        BasePlugin: _plugin_factory__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"],
        SynthesiserBasePlugin: _plugin_factory__WEBPACK_IMPORTED_MODULE_0__["SynthesiserBasePlugin"]
    };
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/parameterManager.js":
/*!*********************************!*\
  !*** ./src/parameterManager.js ***!
  \*********************************/
/*! exports provided: ParameterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterManager", function() { return ParameterManager; });
/* harmony import */ var _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters/NumberParameter.js */ "./src/parameters/NumberParameter.js");
/* harmony import */ var _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters/StringParameter.js */ "./src/parameters/StringParameter.js");
/* harmony import */ var _parameters_ButtonParameter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters/ButtonParameter.js */ "./src/parameters/ButtonParameter.js");
/* harmony import */ var _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/SwitchParameter.js */ "./src/parameters/SwitchParameter.js");
/* harmony import */ var _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters/ListParameter.js */ "./src/parameters/ListParameter.js");
/* jshint esversion: 6 */






var ParameterManager = function (owner, pluginExternalInterface) {
    var parameterList = [];
    var eventTarget = new EventTarget();

    function findParameter(name) {
        return parameterList.find(function (e) {
            return e.name.toLowerCase() === name.toLowerCase();
        });
    }

    function findParameterIndex(name) {
        return parameterList.findIndex(function (e) {
            return e.name.toLowerCase() === name.toLowerCase();
        });
    }

    function buildParameterObject() {
        var obj = {};
        parameterList.forEach(function (e) {
            obj[e.name] = e;
        });
        return obj;
    }

    function addParameter(param, self) {
        var exists = parameterList.findIndex(function (e) {
            return e === param;
        }, param);
        if (exists === -1) {
            param.addEventListener("parameterset", self);
            parameterList.push(param);
        }
        return param;
    }

    Object.defineProperties(this, {
        "addEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.addEventListener(type, listener, options);
            }
        },
        "removeEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.removeEventListener(type, listener, options);
            }
        },
        "handleEvent": {
            "value": function(e) {
                var detail = e.detail;
                if (detail.updateInterfaces !== false) {
                    pluginExternalInterface.updateInterfaces();
                }
                if (e.type == "parameterset") {
                    eventTarget.dispatchEvent(new CustomEvent("parameterset", {detail: detail.parameter}));
                }
            }
        },
        'createNumberParameter': {
            "value": function (name, defaultValue, minimum, maximum, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_NumberParameter_js__WEBPACK_IMPORTED_MODULE_0__["NumberParameter"](owner, name, defaultValue, minimum, maximum, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createStringParameter': {
            "value": function (name, defaultValue, maxLength, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_StringParameter_js__WEBPACK_IMPORTED_MODULE_1__["StringParameter"](owner, name, defaultValue, maxLength, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createButtonParameter': {
            "value": function (name) {
                if (typeof name !== "string") {
                    throw ("Invalid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_ButtonParameter_js__WEBPACK_IMPORTED_MODULE_2__["ButtonParameter"](owner, name);
                addParameter(param, this);
                return param;
            }
        },
        'createSwitchParameter': {
            "value": function (name, defaultValue, minState, maxState, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_SwitchParameter_js__WEBPACK_IMPORTED_MODULE_3__["SwitchParameter"](owner, name, defaultValue, minState, maxState, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createListParameter': {
            "value": function (name, defaultValue, listOfValues, toStringFunc) {
                if (typeof name !== "string" || typeof defaultValue === "undefined" || !Array.isArray(listOfValues)) {
                    throw ("Invlid constructor");
                }
                if (typeof toStringFunc != "function" && toStringFunc !== undefined) {
                    throw ("toStringFunc must be a function or undefined");
                }
                if (listOfValues.includes(defaultValue) === false) {
                    throw ("Invlid constructor - default value missing");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new _parameters_ListParameter_js__WEBPACK_IMPORTED_MODULE_4__["ListParameter"](owner, name, defaultValue, listOfValues, toStringFunc);
                addParameter(param, this);
                return param;
            }
        },
        'createParameter': {
            'value': function () {
                throw ("This function is now deprecated");
            }
        },
        'getParameterName': {
            'value': function () {
                var names = [],
                    i;
                for (i = 0; i < parameterList.length; i++) {
                    names.push(parameterList[i].name);
                }
                return names;
            }
        },
        'getParameterByName': {
            'value': function (name) {
                return findParameter(name);
            }
        },
        'getParameterObject': {
            'value': function () {
                return buildParameterObject();
            }
        },
        'getParameterNames': {
            'value': function () {
                var l = [];
                parameterList.forEach(function (a) {
                    l.push(a.name);
                });
                return l;
            }
        },
        'setParameterByName': {
            'value': function (n, v, updateInterfaces) {
                var parameter = findParameter(n);
                if (!parameter) {
                    return;
                }
                parameter.setValue(v, updateInterfaces);
            }
        },
        'deleteParameter': {
            'value': function (o) {
                var index = parameterList.findIndex(function (e) {
                    return e === o;
                }, o);
                if (index >= 0) {
                    // Does exist
                    parameterList.splice(index, 1);
                    o.destroy();
                    return true;
                }
                return false;
            }
        },
        'deleteAllParameters': {
            'value': function (o) {
                parameterList.forEach(function (e) {
                    e.destroy();
                });
                parameterList = [];
                return true;
            }
        },
        'setParametersByObject': {
            'value': function (object, updateInterfaces) {
                var key;
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (typeof object[key] == "object") {

                            this.setParameterByName(key, object[key].value, updateInterfaces);
                        } else if (typeof object[key] == "number" || typeof object[key] == "string") {
                            this.setParameterByName(key, object[key], updateInterfaces);
                        } else {
                            throw ("Cannot set " + key + ": Not a valid object");
                        }
                    }
                }
            }
        },
        'parameters': {
            'get': function () {
                return buildParameterObject();
            },
            'set': function () {
                throw ("Cannot set, use .setParameterBy...()");
            }
        }
    });
};




/***/ }),

/***/ "./src/parameters/ButtonParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/ButtonParameter.js ***!
  \*******************************************/
/*! exports provided: ButtonParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonParameter", function() { return ButtonParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* jshint esversion: 6 */


function ButtonParameter(owner, name) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button");
    var onclick = function () {};

    Object.defineProperties(this, {
        "type": {
            "value": "Button"
        },
        "destroy": {
            "value": function () {
                owner = name = undefined;
            }
        },
        "onclick": {
            "get": function () {
                return onclick;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("onclick must be a function");
                }
                onclick = f;
            }
        }
    });
}
ButtonParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
ButtonParameter.prototype.constructor = ButtonParameter;




/***/ }),

/***/ "./src/parameters/ListParameter.js":
/*!*****************************************!*\
  !*** ./src/parameters/ListParameter.js ***!
  \*****************************************/
/*! exports provided: ListParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListParameter", function() { return ListParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/parameters/ParameterAutomation.js");
/* jshint esversion: 6 */



function ListParameter(owner, name, defaultValue, listOfValues, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button");
    var audioParameter, automation;
    var onclick = function () {};
    var _index = listOfValues.indexOf(defaultValue);

    function setV(v, updateInterfaces) {
        var i = listOfValues.indexOf(v);
        if (i === undefined || i < 0) {
            throw("Not in list range");
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (_index !== i) {
            _index = i;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return listOfValues[_index];
    }

    Object.defineProperties(this, {
        "type": {
            "value": "List"
        },
        "destroy": {
            "value": function () {
                owner = name = undefined;
            }
        },
        "defaultValue": {
            "value": defaultValue
        },
        "listValues": {
            "get": function() {
                return listOfValues.map(function(v) {
                    return v;
                });
            }
        },
        "value": {
            "get": function () {
                if (audioParameter) {
                    return this.translate(audioParameter.value);
                }
                return listOfValues[_index];
            },
            "set": function (v) {
                return setV.call(this, v, true);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setV.call(this, v, updateInterfaces);
            }
        },
        "increment": {
            "value": function () {
                var v = _index + 1;
                if (v >= listOfValues.length) {
                    v = 0;
                }
                return setV.call(this, v);
            }
        },
        "decrement": {
            "value": function () {
                var v = _index - 1;
                if (v < 0) {
                    v = listOfValues.length-1;
                }
                return setV.call(this, v);
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                    if (ap.setValueAtTime) {
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterStepAutomation"](this, audioParameter, 0, listValues.length, toStringFunc);
                        Object.defineProperties(this, {
                            "getValueAtTimePoint": {
                                "value": function(time) {
                                    return this.automationPoints.getValueAtTimePoint(time);
                                }
                            },
                            "automationPoints": {
                                "value": automation
                            },
                            "start": {
                                "value": function(time, contextTime) {
                                    return automation.start(time, contextTime);
                                }
                            },
                            "stop": {
                                "value": function(contextTime) {
                                    automation.stop(contextTime);
                                }
                            },
                            "enabled": {
                                "get": function() {
                                    return automation.enabled;
                                },
                                "set": function(t) {
                                    return (automation.enabled = t);
                                }
                            }
                        });
                    } else {
                        console.warn("Cannot bind automation as AudioParameter is not automatable");
                    }
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "automatable": {
            "get": function () {
                return typeof automation == "object";
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
ListParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
ListParameter.prototype.constructor = ListParameter;




/***/ }),

/***/ "./src/parameters/NumberParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/NumberParameter.js ***!
  \*******************************************/
/*! exports provided: NumberParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberParameter", function() { return NumberParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/parameters/ParameterAutomation.js");
/* jshint esversion: 6 */



function NumberParameter(owner, name, defaultValue, minimum, maximum, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Number");
    var audioParameter, automation;
    var _value = defaultValue,
        _stepSize;

    function setValue(v, updateInterfaces)
    {
        if (automation && automation.enabled) {
            throw("Automation is enabled, cannot set the value!");
        }
        if (this.minimum) {
            v = Math.max(v, this.minimum);
        }
        if (this.maximum) {
            v = Math.min(v, this.maximum);
        }
        if (_stepSize) {
            v = Math.round(v / _stepSize);
            v = v * _stepSize;
        }
        v = this.update(v);
        if (audioParameter) {
            if (automation) {
                audioParameter.setValueAtTime(v, owner.factory.context.currentTime);
            } else {
                audioParameter.value = v;
            }
        }
        if (_value !== v) {
            _value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
    }

    Object.defineProperties(this, {
        "type": {
            "value": "Number"
        },
        "destroy": {
            "value": function () {
                owner = name = defaultValue = minimum = maximum = _value = _stepSize = undefined;
            }
        },
        "minimum": {
            "value": minimum
        },
        "maximum": {
            "value": maximum
        },
        "defaultValue": {
            "value": defaultValue
        },
        "value": {
            "get": function () {
                if (audioParameter) {
                    if (automation && automation.length > 0) {
                        var t = owner.factory.getCurrentProgramTime();
                        return automation.getCurrentTimeValue(t);
                    }
                    return this.translate(_value);
                }
                return _value;
            },
            "set": function (v) {
                return setValue.call(this, v, true);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "stepSize": {
            "get": function () {
                return _stepSize;
            },
            "set": function (n) {
                if (!isFinite(n) || n < 0) {
                    throw ("Invalid step size");
                }
                _stepSize = n;
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                    if (ap.setValueAtTime) {
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterLinearAutomation"](this, audioParameter, minimum, maximum, toStringFunc);
                        Object.defineProperties(this, {
                            "getValueAtTimePoint": {
                                "value": function(time) {
                                    return this.automationPoints.getValueAtTimePoint(time);
                                }
                            },
                            "automationPoints": {
                                "value": automation
                            },
                            "start": {
                                "value": function(time, contextTime) {
                                    return automation.start(time, contextTime);
                                }
                            },
                            "stop": {
                                "value": function(contextTime) {
                                    automation.stop(contextTime);
                                }
                            },
                            "enabled": {
                                "get": function() {
                                    return automation.enabled;
                                },
                                "set": function(t) {
                                    return (automation.enabled = t);
                                }
                            }
                        });
                    } else {
                        console.warn("Cannot bind automation as AudioParameter is not automatable");
                    }
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "automatable": {
            "get": function () {
                return typeof automation == "object";
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
NumberParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
NumberParameter.prototype.constructor = NumberParameter;




/***/ }),

/***/ "./src/parameters/ParameterAutomation.js":
/*!***********************************************!*\
  !*** ./src/parameters/ParameterAutomation.js ***!
  \***********************************************/
/*! exports provided: ParameterLinearAutomation, ParameterStepAutomation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterLinearAutomation", function() { return ParameterLinearAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterStepAutomation", function() { return ParameterStepAutomation; });
/* jshint esversion: 6 */
var TimePoint = function(owner, time, value, toStringFunc) {
    if (typeof time != "number" || !isFinite(time) || time < 0) {
        throw("Invalid Constructor: Time must be a positive number");
    }
    if (typeof value != "number" || !isFinite(value)) {
        throw("Invalid Constructor: Value must be a number");
    }
    Object.defineProperties(this, {
        "time": {
            "get": function() {
                return time;
            },
            "set": function(t) {
                return this.setTime(t);
            }
        },
        "value": {
            "get": function() {
                return value;
            },
            "set": function(v) {
                return this.setValue(v);
            }
        },
        "setValue": {
            "value": function(v) {
                if (typeof v != "number" || !isFinite(v)) {
                    throw("Value must be a number");
                }
                value = Math.min(Math.max(v, owner.minimum), owner.maximum);
                return value;
            }
        },
        "setTime": {
            "value": function(t) {
                if (typeof t == "number" && isFinite(t) && t >= 0) {
                    time = t;
                }
                return time;
            }
        },
        "toString": {
            "value": function() {
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, value);
                }
                return String(value);
            }
        },
        "owner": {
            "value": owner
        }
    });
};

var TimePointList = function(min_value, max_value, toStringFunc) {
    function getPointAtTime(automationPoints, time) {
        return automationPoints.find(function(p) {
            return p.time == time;
        });
    }
    function hasPointAtTime(automationPoints, time) {
        return getPointAtTime(automationPoints, time) !== undefined;
    }
    function sortPoints(automationPoints) {
        return automationPoints.sort(function(a,b) {
            if (a.time > b.time) {
                return 1;
            } else {
                return -1;
            }
        });
    }
    if (typeof min_value != "number" || !isFinite(min_value)) {
        throw("Invalid Constructor: min_value be a number");
    }
    if (typeof max_value != "number" || !isFinite(max_value)) {
        throw("Invalid Constructor: max_value be a number");
    }
    if (min_value == max_value) {
        throw("Invalid Constructor: max_value cannot equal to min_value");
    }
    if (max_value < min_value) {
        throw("Invalid Constructor: min_value cannot be greater than max_value");
    }
    var automationPoints = [];
    Object.defineProperties(this, {
        "insertPoint": {
            "value": function(time, value) {
                if (typeof time != "number" || !isFinite(time) || time < 0) {
                    throw("Time must be a positive number");
                }
                if (typeof value != "number" || !isFinite(value)) {
                    throw("Value must be a number");
                }
                if (hasPointAtTime(automationPoints, time)) {
                    throw("Already a value entry at time "+time);
                }
                value = Math.min(Math.max(value, min_value), max_value);
                var point = new TimePoint(this, time, value, toStringFunc);
                automationPoints.push(point);
                automationPoints = sortPoints(automationPoints);
                return point;
            }
        },
        "getPoints": {
            "value": function(start_time, end_time) {
                if (start_time === undefined) {
                    start_time = 0;
                }
                if (end_time === undefined) {
                    end_time = Infinity;
                }
                return automationPoints.filter(function(point) {
                    return point.time >= start_time && point.time < end_time;
                });
            }
        },
        "deletePoint": {
            "value": function(time) {
                var index = automationPoints.findIndex(function(point) {
                    return point.time == time;
                });
                if (index >= 0) {
                    automationPoints.splice(index, 1, 0);
                }
                return automationPoints.length;
            }
        },
        "getStaticValueAsString": {
            "writable": true,
            "value": function (value) {
                return String(value);
            }
        },
        "getValueAtTimePoint": {
            "value": function (time) {
                return getPointAtTime(automationPoints, time);
            }
        },
        "length": {
            "get": function() {
                return automationPoints.length;
            }
        },
        "minimum": {
            "value": min_value
        },
        "maximum": {
            "value": max_value
        },
        "updatePoint": {
            "value": function(time, options) {
                var point = automationPoints.find(function(point) {
                    return point.time == time;
                });
                if (point) {
                    if (typeof options.time == "number" && options.time != point.time) {
                        if (getPointAtTime(automationPoints, time)) {
                            throw("A time-point already exists at \""+String(options.time)+"\" seconds");
                        } else {
                            point.time = options.time;
                            automationPoints = sortPoints(automationPoints);
                        }
                    }
                    point.value = options.value;
                }
                return point;
            }
        }
    });
};

var ParameterAutomation = function(parameter, min_value, max_value, toStringFunc) {
    TimePointList.call(this, min_value, max_value, toStringFunc);
    var enabled = false;
    Object.defineProperties(this, {
        "enabled": {
            "get": function() {
                return enabled;
            },
            "set": function(t) {
                if (this.length > 0) {
                    enabled = (t === true);
                }
                return enabled;
            }
        }
    });
};

var ParameterLinearAutomation = function (owner, parameter, min_value, max_value, toStringFunc) {
    ParameterAutomation.call(this, parameter, min_value, max_value, toStringFunc);
    function linearInterpolation(time, pointA, pointB) {
        var t1 = pointA.time;
        var t2 = pointB.time;
        time -= t1;
        t2 -= t1;
        t1 = 0;

        var p = time/t2;
        return pointA.value * (1-p) + pointB.value * p;
    }
    function getCurrentTimeValue(automationPoints, time) {
        if (automationPoints.length == 0) {
            throw("No automation points available");
        }
        if (automationPoints.length == 1) {
            return automationPoints[0].value;
        }

        var firstPoint = automationPoints.reduce(function(point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            } else {
                return point;
            }
        }, automationPoints[0]);
        var secondPoint = automationPoints.find(function(point) {
            return point.time > firstPoint.time;
        });
        if (secondPoint === undefined || firstPoint.time > time) {
            return firstPoint.value;
        }
        return linearInterpolation(time, firstPoint, secondPoint);
    }

    function start(automationPoints, time, contextTime) {
        var startPosition = owner.update(getCurrentTimeValue(automationPoints, time));
        parameter.setValueAtTime(startPosition, contextTime);
        automationPoints.forEach(function(p) {
            if (p.time > time) {
                var t = p.time - time;
                var v = owner.update(p.value);
                parameter.linearRampToValueAtTime(v, t+contextTime);
            }
        });
    }

    function stop(contextTime) {
        if (contextTime === undefined) {
            contextTime = 0;
        }
        parameter.cancelScheduledValues(contextTime);
    }

    Object.defineProperties(this, {
        "getCurrentTimeValue": {
            "value": function(time) {
                return getCurrentTimeValue(this.getPoints(), time);
            }
        },
        "start": {
            "value": function(time, contextTime) {
                if (this.enabled) {
                    start(this.getPoints(), time, contextTime);
                }
            }
        },
        "stop": {
            "value": function(contextTime) {
                stop(contextTime);
            }
        }
    });

};
ParameterLinearAutomation.prototype = Object.create(ParameterAutomation.prototype);
ParameterLinearAutomation.prototype.constructor = ParameterLinearAutomation;

var ParameterStepAutomation = function (owner, parameter, min_value, max_value, toStringFunc) {
    ParameterAutomation.call(this, parameter, min_value, max_value, toStringFunc);
    function getCurrentTimeValue(automationPoints, time) {
        if (automationPoints.length == 0) {
            throw("No automation points available");
        }
        if (automationPoints.length == 1) {
            return automationPoints[0].value;
        }

        var nearestPoint = automationPoints.reduce(function(point, nextPoint) {
            if (nextPoint.time <= time) {
                return nextPoint;
            } else {
                return point;
            }
        }, automationPoints[0]);
        return nearestPoint.value;
    }

    function start(automationPoints, time, contextTime) {
        var startPosition = owner.update(getCurrentTimeValue(automationPoints, time));
        parameter.setValueAtTime(startPosition, contextTime);
        automationPoints.forEach(function(p) {
            if (p.time > time) {
                var t = p.time - time;
                var v = owner.update(p.value);
                parameter.setValueAtTime(v, t+contextTime);
            }
        });
    }

    function stop(contextTime) {
        parameter.cancelScheduledValues(contextTime);
    }

    Object.defineProperties(this, {
        "getCurrentTimeValue": {
            "value": function(time) {
                return getCurrentTimeValue(this.getPoints(), time);
            }
        },
        "start": {
            "value": function(time, contextTime) {
                if (this.enabled) {
                    start(this.getPoints(), time, contextTime);
                }
            }
        },
        "stop": {
            "value": function(contextTime) {
                stop(contextTime);
            }
        }
    });
};
ParameterStepAutomation.prototype = Object.create(ParameterAutomation.prototype);
ParameterStepAutomation.prototype.constructor = ParameterStepAutomation;




/***/ }),

/***/ "./src/parameters/PluginParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/PluginParameter.js ***!
  \*******************************************/
/*! exports provided: PluginParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginParameter", function() { return PluginParameter; });
/* jshint esversion: 6 */
function PluginParameter(owner, name, dataType) {
    var update, translate, trigger;
    var eventTarget = new EventTarget();
    update = translate = function (v) {
        return v;
    };
    trigger = function () {};
    Object.defineProperties(this, {
        "addEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.addEventListener(type, listener, options);
            }
        },
        "removeEventListener": {
            "value": function(type, listener, options) {
                return eventTarget.removeEventListener(type, listener, options);
            }
        },
        "triggerParameterSet": {
            "value": function(updateInterfaces) {
                var opts = {detail: {
                    parameter: this,
                    updateInterfaces: updateInterfaces
                }};
                eventTarget.dispatchEvent(new CustomEvent("parameterset", opts));
            }
        },
        "name": {
            "value": name
        },
        "owner": {
            "value": owner
        },
        "update": {
            "get": function () {
                return update;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("Must be a callback function");
                }
                if (f(0) === undefined) {
                    throw ("Function must return a value");
                }
                update = f;
            }
        },
        "translate": {
            "get": function () {
                return translate;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("Must be a callback function");
                }
                if (f(0) === undefined) {
                    throw ("Function must return a value");
                }
                translate = f;
            }
        },
        "trigger": {
            "get": function () {
                return trigger;
            },
            "set": function (f) {
                if (typeof f !== "function") {
                    throw ("Must be a callback function");
                }
                trigger = f;
            }
        },
        "bindToAudioParam": {
            "configurable": true,
            "value": function (ap) {
                throw("Cannot bind this parameter type to an audio parameter");
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return undefined;
            }
        }
    });
}




/***/ }),

/***/ "./src/parameters/StringParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/StringParameter.js ***!
  \*******************************************/
/*! exports provided: StringParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringParameter", function() { return StringParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* jshint esversion: 6 */


function StringParameter(owner, name, defaultValue, maxLength, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "String");
    var _value = defaultValue;
    var audioParameter;

    function setValue(v, updateInterfaces) {
        if (maxLength) {
            if (v.length > maxLength) {
                throw ("String longer than " + maxLength + " characters");
            }
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (_value !== v) {
            _value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
    }

    Object.defineProperties(this, {
        "type": {
            "value": "String"
        },
        "destroy": {
            "value": function () {
                owner = name = defaultValue = maxLength = _value = undefined;
            }
        },
        "maxLength": {
            "value": maxLength
        },
        "defaultValue": {
            "value": defaultValue
        },
        "value": {
            "get": function () {
                if (this.boundAudioParam) {
                    return this.translate(this.boundAudioParam.value);
                }
                return _value;
            },
            "set": function (v) {
                return setValue.call(this, v, true);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
StringParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
StringParameter.prototype.constructor = StringParameter;




/***/ }),

/***/ "./src/parameters/SwitchParameter.js":
/*!*******************************************!*\
  !*** ./src/parameters/SwitchParameter.js ***!
  \*******************************************/
/*! exports provided: SwitchParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchParameter", function() { return SwitchParameter; });
/* harmony import */ var _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PluginParameter.js */ "./src/parameters/PluginParameter.js");
/* harmony import */ var _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParameterAutomation.js */ "./src/parameters/ParameterAutomation.js");
/* jshint esversion: 6 */



function SwitchParameter(owner, name, defaultValue, minState, maxState, toStringFunc) {
    _PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].call(this, owner, name, "Button");
    var onclick = function () {};
    var _value = defaultValue;
    var audioParameter, automation;

    function setValue(v, updateInterfaces) {
        if (v < minState) {
            throw ("Set value is less than " + minState);
        }
        if (v > maxState) {
            throw ("Set value is greater than " + maxState);
        }
        if (this.boundAudioParam) {
            this.boundAudioParam.value = this.update(v);
        }
        if (_value !== v) {
            _value = v;
            this.triggerParameterSet(updateInterfaces);
        }
        this.trigger();
        return v;
    }

    Object.defineProperties(this, {
        "type": {
            "value": "Switch"
        },
        "destroy": {
            "value": function () {
                owner = name = undefined;
            }
        },
        "defaultValue": {
            "value": defaultValue
        },
        "minState": {
            "value": minState
        },
        "maxState": {
            "value": maxState
        },
        "value": {
            "get": function () {
                if (this.boundAudioParam) {
                    return this.translate(this.boundAudioParam.value);
                }
                return _value;
            },
            "set": function (v) {
                return setValue.call(this, v);
            }
        },
        "setValue": {
            "value": function(v, updateInterfaces) {
                return setValue.call(this, v, updateInterfaces);
            }
        },
        "increment": {
            "value": function () {
                var v = _value + 1;
                if (v > maxState) {
                    v = minState;
                }
                return setValue.call(this, v);
            }
        },
        "decrement": {
            "value": function () {
                var v = _value - 1;
                if (v < minState) {
                    v = maxState;
                }
                return setValue.call(this, v);
            }
        },
        "bindToAudioParam": {
            "value": function (ap) {
                if (typeof ap == "object" && ap.value != undefined) {
                    audioParameter = ap;
                    audioParameter.value = this.update(_value);
                    if (ap.setValueAtTime) {
                        automation = new _ParameterAutomation_js__WEBPACK_IMPORTED_MODULE_1__["ParameterStepAutomation"](this, audioParameter, minState, maxState, toStringFunc);
                        Object.defineProperties(this, {
                            "getValueAtTimePoint": {
                                "value": function(time) {
                                    return this.automationPoints.getValueAtTimePoint(time);
                                }
                            },
                            "automationPoints": {
                                "value": automation
                            },
                            "start": {
                                "value": function(time, contextTime) {
                                    return automation.start(time, contextTime);
                                }
                            },
                            "stop": {
                                "value": function(contextTime) {
                                    automation.stop(contextTime);
                                }
                            },
                            "enabled": {
                                "get": function() {
                                    return automation.enabled;
                                },
                                "set": function(t) {
                                    return (automation.enabled = t);
                                }
                            }
                        });
                    } else {
                        console.warn("Cannot bind automation as AudioParameter is not automatable");
                    }
                } else {
                    throw("Argument 1 is not a valid AudioParameter object");
                }
            }
        },
        "boundAudioParam": {
            "configurable": true,
            "get": function () {
                return audioParameter;
            }
        },
        "automatable": {
            "get": function () {
                return typeof automation == "object";
            }
        },
        "toString": {
            "value": function(v) {
                if (v == undefined) {
                    v = this.value;
                }
                if (typeof toStringFunc == "function") {
                    return toStringFunc.call(this, v);
                } else {
                    return String(v);
                }
            }
        }
    });
}
SwitchParameter.prototype = Object.create(_PluginParameter_js__WEBPACK_IMPORTED_MODULE_0__["PluginParameter"].prototype);
SwitchParameter.prototype.constructor = SwitchParameter;




/***/ }),

/***/ "./src/plugin-factory.js":
/*!*******************************!*\
  !*** ./src/plugin-factory.js ***!
  \*******************************/
/*! exports provided: BasePlugin, SynthesiserBasePlugin, PluginFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginFactory", function() { return PluginFactory; });
/* harmony import */ var _LinkedStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkedStore */ "./src/LinkedStore.js");
/* harmony import */ var _base_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base_plugin */ "./src/base_plugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePlugin", function() { return _base_plugin__WEBPACK_IMPORTED_MODULE_1__["BasePlugin"]; });

/* harmony import */ var _synth_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./synth_base */ "./src/synth_base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SynthesiserBasePlugin", function() { return _synth_base__WEBPACK_IMPORTED_MODULE_2__["SynthesiserBasePlugin"]; });

// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */
/* jshint esversion:6 */

// Load jsXtract
(function() {
    if (window.jsXtract === undefined) {
        var s = document.createElement("script");
        s.src = "https://gitcdn.xyz/repo/nickjillings/js-xtract/master/jsXtract.js";
        document.getElementsByTagName("head")[0].appendChild(s);
    }
})();





function PluginFactory(audio_context, rootURL) {
    var subFactories = [],
    synthesiserHosts = [],
    plugin_prototypes = [],
    pluginsList = [],
    currentPluginId = 0,
    audioStartProgramTime,
    audioStartContextTime,
    audioStarted = false;

    /*
        this.loadResource. Load a resource into the global namespace

        @param resourceObject: a JS object holding the following parameters:
            .url: URL of the resource
            .test: function to call, returns true if resource already loaded, false if not
    */
    this.loadPrototypeModule = function(resourceObject, mustModule) {
        var factory = this;
        return new Promise(function(resolve, reject) {
            if (typeof global.define === "function" && global.define.amd) {
                global.require([resourceObject.url], function(f) {
                    resolve(f);
                });
            } else if (typeof global.module == "object" && global.module.exports) {
                resolve(global.require(resourceObject.url));
            } else {
                reject("Cannot load using modular systems");
            }
        }).then(function(executable) {
            if (typeof executable === "function") {
                return factory.addPrototype(executable);
            } else {
                reject("Is not a module plugin");
            }
        }).catch(function() {
            if (mustModule === true) {
                reject("Cannot load using modular systems");
            } else {
                console.warn("Could not load using modular systems");
                return factory.loadPluginScript(resourceObject);
            }
        });
    };
    this.loadResource = function (resourceObject) {
        return new Promise(function(resolve, reject) {
            if (typeof resourceObject !== "object") {
                reject("Error");
            }
            else if (typeof resourceObject.url !== "string") {
                reject("resourceObject.url must be a string");
            }
            else if (typeof resourceObject.test !== "function") {
                reject("resourceObject.test must be a function");
            } else {
                resolve(resourceObject);
            }
        }).then(function(resourceObject){
            var response = resourceObject.test();
            if (response !== false && response !== true) {
                throw ("resourceObject.test must return true or false");
            }
            if (!resourceObject.type) {
                resourceObject.type = "javascript";
            }
            resourceObject.type = resourceObject.type.toLowerCase();
            switch (resourceObject.type) {
                case "javascript":
                    if (!response) {
                        return loadResource(resourceObject).then(function (resourceObject) {
                            if (typeof resourceObject.returnObject === "string") {
                                var returnObject;
                                if (window.hasOwnProperty(resourceObject.returnObject)) {
                                    return window[resourceObject.returnObject];
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else {
                        return new Promise(function (resolve, reject) {
                            if (typeof resourceObject.returnObject === "string") {
                                if (window.hasOwnProperty(resourceObject.returnObject)) {
                                    resolve(window[resourceObject.returnObject]);
                                } else {
                                    reject(false);
                                }
                            } else {
                                resolve(true);
                            }
                        });
                    }
                    break;
                default:
                    throw ("Invalid type " + String(resourceObject.type));
            }
        });
    };

    this.loadPluginScript = function (resourceObject) {
        if (resourceObject) {
            if (typeof resourceObject.returnObject !== "string") {
                throw ("resourceObject.returnObject must be the name of the prototype function");
            }
            return this.loadResource(resourceObject).then(function (plugin) {
                return this.addPrototype(plugin);
            }.bind(this));
        }
    };

    function loadResource(resourceObject) {
        if (resourceObject.url.startsWith("http") === false && rootURL !== undefined && rootURL.startsWith("http")) {
            resourceObject.url = rootURL + resourceObject.url;
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", resourceObject.url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var script = document.createElement("script");
                    script.textContent = xhr.responseText;
                    document.getElementsByTagName("head")[0].appendChild(script);
                    resolve(resourceObject);
                }

            };
            xhr.send();
        });
    }

    function copyFactory(newcontext) {
        return new Promise(function(resolve, reject) {
            if (newcontext.sampleRate === undefined) {
                //Maybe not a real AudioContext
                reject(new Error("Invalid audio context provided"));
            } else {
                resolve(newcontext);
            }
        }).then(function(newcontext) {
            var BFactory = new PluginFactory(newcontext);
            var promises = [];
            plugin_prototypes.forEach(function (proto) {
                promises.push(BFactory.addPrototype(proto.proto));
            });
            return Promise.all(promises).then(function() {
                return BFactory;
            });
        }).then(function(newFactory) {
            return newFactory;
        });
    }

    var PluginInstance = function (id, plugin_node) {
        this.next_node = undefined;
        var _bypassed = false;
        var ev = new EventTarget();
        var _in = audio_context.createGain(),
            _out = audio_context.createGain();

        _in.connect(plugin_node.getInputs()[0]);
        plugin_node.getOutputs()[0].connect(_out);
        plugin_node.addEventListener(this);

        function bypassEnable() {
            _in.disconnect();
            _in.connect(_out);
            _bypassed = true;
            if (plugin_node.processingDelayAsSamples != 0) {
                ev.dispatchEvent(new Event("alterdelay"));
            }
        }

        function bypassDisable() {
            _in.disconnect();
            _in.connect(plugin_node.getInputs()[0]);
            _bypassed = false;
            if (plugin_node.processingDelayAsSamples != 0) {
                ev.dispatchEvent(new Event("alterdelay"));
            }
        }

        this.bypass = function (state) {
            state = (state === true);
            if (state === _bypassed) {
                return _bypassed;
            }
            if (state) {
                bypassEnable();
            } else {
                bypassDisable();
            }
            return _bypassed;
        };

        this.isBypassed = function () {
            return _bypassed;
        };

        this.reconnect = function (new_next) {
            this.connect(new_next);
        };

        this.connect = function (new_next) {
            if (this.next_node !== undefined) {
                this.disconnect();
            }
            if (new_next !== undefined && new_next.input !== undefined) {
                this.next_node = new_next;
                _out.connect(this.next_node.input);
                return true;
            }
            return false;
        };

        this.disconnect = function () {
            if (this.next_node !== undefined) {
                _out.disconnect(this.next_node.input);
                this.next_node = undefined;
            }
        };

        this.destroy = function () {
            plugin_node.destroy();
        };

        Object.defineProperties(this, {
            "handleEvent": {
                "value": function(e) {
                    ev.dispatchEvent(new Event(e.type));
                }
            },
            "addEventListener": {
                "value": function(a,b,c) {
                    return ev.addEventListener(a,b,c);
                }
            },
            "removeEventListener": {
                "value": function(a,b,c) {
                    return ev.removeEventListener(a,b,c);
                }
            },
            'id': {
                'value': id
            },
            'node': {
                'value': plugin_node
            },
            'input': {
                'get': function () {
                    return _in;
                }
            },
            'output': {
                'get': function () {
                    return _out;
                }
            },
            'bypassed': {
                'get': function () {
                    return _bypassed;
                }
            }
        });
    };
    PluginInstance.prototype.factory = this;

    var MidiSynthesisInstance = function(id, synthNode) {
        var _out = audio_context.createGain();
        synthNode.getOutputs()[0].connect(_out);

        this.destroy = function () {
            synthNode.destroy();
        };

        Object.defineProperties(this, {
            'id': {
                'value': id
            },
            'node': {
                'value': synthNode
            },
            'output': {
                'get': function () {
                    return _out;
                }
            },
        });
    };

    var PluginPrototype = function (proto, factory) {
	    var self = this;
        Object.defineProperties(this, {
            'name': {
                value: proto.prototype.name
            },
            'proto': {
                value: proto
            },
            'version': {
                value: proto.prototype.version
            },
            'uniqueID': {
                value: proto.prototype.uniqueID
            },
            'hasMidiInput': {
                value: proto.prototype.hasMidiInput || false
            },
            'hasMidiOutput': {
                value: proto.prototype.hasMidiOutput || false
            }
        });

        this.createPluginInstance = async function(owner, async) {
            var p = createPluginInstance(owner);
            if (async === true) {
                return p;
            } else {
                await p;
                return p;
            }
        };

        function createPluginInstance(owner) {
            return waitUntilReady().then(function() {
                return new Promise(function(resolve, reject) {
                    if (!checkIsReady()) {
                        reject(new Error("Plugin not ready"));
                    } else {
                        resolve(new proto(factory, owner));
                    }
                })
            }).then(function(plugin) {
                return new Promise(function(resolve, reject){
                    if (plugin.initialise) {
                        return plugin.initialise().then(function() {
                            resolve(plugin);
                        });
                    } else {
                        resolve(plugin);
                    }
                });
            }).then(function(plugin) {
                var node;
                if (plugin.hasMidiInput !== true && plugin.hasMidiOutput !== true) {
                    node = new PluginInstance(currentPluginId++, plugin);
                } else if (plugin.hasMidiInput === true && plugin.hasMidiOutput !== true) {
                    node = new MidiSynthesisInstance(currentPluginId++, plugin);
                } else {
                    throw("No Instance Holder Available!");
                }
                Object.defineProperties(plugin, {
                    'pluginInstance': {
                        'value': node
                    },
                    'prototypeObject': {
                        'value': self
                    },
                    'name': {
                        value: proto.prototype.name
                    },
                    'version': {
                        value: proto.prototype.version
                    },
                    'uniqueID': {
                        value: proto.prototype.uniqueID
                    },
                    'SesionData': {
                        value: factory.SessionData
                    },
                    'UserData': {
                        value: factory.UserData
                    }
                });
                Object.defineProperties(node, {
                    "prototypeObject": {
                        'value': self
                    },
                    "externalInterface": {
                        'value': plugin.externalInterface
                    }
                });
                factory.registerPluginInstance(node);
                return node;
            });
        }

        function loadResourceChain(resourceObject, p) {
            if (!p) {
                var k = loadResource(resourceObject);
                k.then(function (resourceObject) {
                    if (resourceObject.resources !== undefined && resourceObject.resources.length > 0) {
                        for (var i = 0; i < resourceObject.resources.length; i++) {
                            k = loadResourceChain(resourceObject.resources[i], k);
                        }
                    }
                });
                return k;
            } else {
                return p.then(loadResource(resourceObject));
            }
        }

        function loadStylesheet(url) {
            var css = document.createElement("link");
            css.setAttribute("rel", "stylesheet");
            css.setAttribute("type", "text/css");
            css.setAttribute("href", url);
            document.getElementsByTagName("head")[0].appendChild(css);
        }

        function recursiveGetTest(resourceObject) {
            if (resourceObject.hasOwnProperty("length") && resourceObject.length > 0) {
                return recursiveGetTest(resourceObject[resourceObject.length - 1]);
            } else if (resourceObject.hasOwnProperty("resources")) {
                return recursiveGetTest(resourceObject.resources);
            } else {
                return resourceObject.test;
            }
        }

        var resourcePromises = [];
        if (proto.prototype.resources) {
            for (var i = 0; i < proto.prototype.resources.length; i++) {
                var resource = proto.prototype.resources[i];
                resource.type = resource.type.toLowerCase();
                switch (resource.type) {
                    case "css":
                        loadStylesheet(resource.url);
                        break;
                    case "javascript":
                        var object = {
                            'promise': loadResourceChain(resource),
                            'state': 0,
                            'complete': function () {
                                this.state = 1;
                            },
                            'test': recursiveGetTest(resource)
                        };
                        object.promise.then(object.complete.bind(object));
                        resourcePromises.push(object);
                        break;
                    default:
                        throw ("Could not load " + resource.url + ", invalid resource.type");
                }
            }
        }

        this.getResourcePromises = function () {
            return resourcePromises;
        };
        function checkIsReady() {
            var state = true;
            for (var i = 0; i < resourcePromises.length; i++) {
                if (resourcePromises[i].state !== 1 || !resourcePromises[i].test()) {
                    state = false;
                    break;
                }
            }
            return state;
        };
        function waitUntilReady() {
            return Promise.all(resourcePromises);
        }
    };

    this.addPrototype = function (plugin_proto) {
        var factory = this;
        return new Promise(function(resolve, reject) {
            if (typeof plugin_proto !== "function") {
                reject("The Prototype must be a function!");
            }
            else if (typeof plugin_proto.prototype.name !== "string" || plugin_proto.prototype.name.length === 0) {
                reject("Malformed plugin. Name not defined");
            }
            else if (typeof plugin_proto.prototype.version !== "string" || plugin_proto.prototype.version.length === 0) {
                reject("Malformed plugin. Version not defined");
            }
            else if (typeof plugin_proto.prototype.uniqueID !== "string" || plugin_proto.prototype.uniqueID.length === 0) {
                reject("Malformed plugin. uniqueID not defined");
            } else {
                resolve(plugin_proto);
            }
        }).then(function(plugin_proto) {
            var testObj = {
                'proto': plugin_proto,
                'name': plugin_proto.prototype.name,
                'version': plugin_proto.prototype.version,
                'uniqueID': plugin_proto.prototype.uniqueID
            };
            var obj = plugin_prototypes.find(function (e) {
                var param;
                var match = 0;
                for (param in this) {
                    if (e[param] === this[param]) {
                        match++;
                    }
                }
                return match === 4;
            }, testObj);
            if (obj) {
                throw ("The plugin must be unique!");
            }
            obj = new PluginPrototype(plugin_proto, factory);
            plugin_prototypes.push(obj);
            Object.defineProperties(obj, {
                'factory': {
                    'value': factory
                }
            });
            return obj;
        });
    };

    this.getPrototypes = function () {
        return plugin_prototypes;
    };

    this.getAudioPluginPrototypes = function() {
        return plugin_prototypes.filter(function(proto) {
            return proto.hasMidiInput == false && proto.hasMidiOutput == false;
        });
    };

    this.getMidiSynthPrototypes = function() {
        return plugin_prototypes.filter(function(proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == false;
        });
    };

    this.getMidiPluginPrototypes = function() {
        return plugin_prototypes.filter(function(proto) {
            return proto.hasMidiInput == true && proto.hasMidiOutput == true;
        });
    };

    this.getAllPlugins = function () {
        return pluginsList;
    };

    this.getAllPluginsObject = function () {
        var obj = {
                'factory': this,
                'subFactories': []
            },
            i;
        for (i = 0; i < subFactories.length; i++) {
            obj.subFactories.push({
                'subFactory': subFactories[i],
                'plugins': subFactories[i].getPlugins()
            });
        }
        return obj;
    };

    this.createSubFactory = function(chainStart, chainStop) {
        console.warn("DEPRECATED - This function will be deprecated in favour of \"createAudioPluginChainManager\"");
        return this.createAudioPluginChainManager(chainStart, chainStop);
    };

    this.destroySubFactory = function(chainStart, chainStop) {
        console.warn("DEPRECATED - This function will be deprecated in favour of \"destroyAudioPluginChainManager\"");
        return this.destroyAudioPluginChainManager(chainStart, chainStop);
    };

    this.createAudioPluginChainManager = function (chainStart, chainStop) {
        var node = new AudioPluginChainManager(this, chainStart, chainStop);
        Object.defineProperties(node, {
            'SessionData': {
                value: this.SessionData
            },
            'UserData': {
                value: this.UserData
            }
        });
        subFactories.push(node);
        return node;
    };

    this.duplicateAudioPluginChainManager = function(sourceChainManager, chainStart, chainStop) {
        var node = this.createAudioPluginChainManager(chainStart, chainStop);
        var promiseChain = Promise.resolve();
        sourceChainManager.getPlugins().forEach(function(plugin_object) {
            promiseChain = promiseChain.then(function() {
                return node.createPlugin(plugin_object.prototypeObject)
                .then(function(newPlugin) {
                    newPlugin.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject);
                });
            });
        });
        return promiseChain.then(function() {
            return node;
        });
    };

    this.destroyAudioPluginChainManager = function (SubFactory) {
        var index = subFactories.findIndex(function (element) {
            if (element === this) {
                return true;
            }
            return false;
        }, SubFactory);
        if (index >= 0) {
            subFactories.splice(index, 1);
            SubFactory.destroy();
        }
    };

    this.createMidiSynthesiserHost = function(factory) {
        if (factory === undefined) {
            factory = this;
        }
        var host = new MidiSynthesiserHost(factory);
        Object.defineProperties(host, {
            'SessionData': {
                value: this.SessionData
            },
            'UserData': {
                value: this.UserData
            }
        });
        synthesiserHosts.push(host);
        return host;
    };

    this.destroyMidiSynthesiserHost = function (host) {
        var index = synthesiserHosts.findIndex(function (element) {
            if (element === this) {
                return true;
            }
            return false;
        }, host);
        if (index >= 0) {
            synthesiserHosts.splice(index, 1);
            host.destroy();
        }
    };

    this.registerPluginInstance = function (instance) {
        if (pluginsList.find(function (p) {
                return p === this;
            }, instance)) {
            throw ("Plugin Instance not unique");
        }
        pluginsList.push(instance);
        if (audioStarted) {
            var context_time = audio_context.currentTime;
            var program_time = this.getCurrentProgramTime();
            pluginAudioStart(instance.node, program_time, context_time);
        }
        return true;
    };

    this.deletePlugin = function (id) {
        var index = pluginsList.findIndex(function (p) {
            return p.id === id;
        });
        if (index >= 0) {
            var p = pluginsList.splice(index, 1);
            p[0].node.externalInterface.closeWindows();
        }
    };

    this.getCurrentProgramTime = function() {
        if (audioStarted) {
            return audio_context.currentTime - audioStartContextTime + audioStartProgramTime;
        } else {
            return audioStartProgramTime
        }
    };

    this.setCurrentProgramTime = function(time) {
        if (audioStarted) {
            throw("Must stop playback to set the current program time");
        }
        if (typeof time == "number" && time >= 0) {
            audioStartProgramTime = time;
            this.PluginGUI.pollAllPlugins();
        }
    };

    function pluginAudioStart(node, program_time, context_time) {
        node.start.call(node, program_time, context_time);
        node.parameters.getParameterNames().forEach(function(n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.start(program_time, context_time);
            }
        });
    }

    function pluginAudioStop(node) {
        node.stop.call(node);
        node.parameters.getParameterNames().forEach(function(n) {
            var p = node.parameters.getParameterByName(n);
            if (p.enabled) {
                p.stop();
            }
        });
    }

    function triggerAudioStart(program_time, context_time) {
        pluginsList.forEach(function (n) {
            pluginAudioStart(n.node, program_time, context_time);
        });

    }

    function triggerAudioStop() {
        pluginsList.forEach(function (n) {
            pluginAudioStop(n.node);
        });
    }

    this.audioStart = function (program_time, context_time) {
        if (context_time === undefined) {
            context_time = audio_context.currentTime;
        }
        if (program_time === undefined) {
            program_time = 0;
            console.warn("Assuming start time at 0");
        }
        if (!audioStarted) {
            this.setCurrentProgramTime(program_time);
            audioStartContextTime = context_time;
            triggerAudioStart(program_time, context_time);
            audioStarted = true;
        }
    };
    this.audioStop = function () {
        if (audioStarted) {
            triggerAudioStop();
            audioStarted = false;
        }
    };

    var FeatureMap = function () {
        var Mappings = [];

        var FeatureNode = function (node) {
            this.name = node.name;
            this.parameters = this.parameters;
            this.features = [];
        };

        function getFeatureNode(list, check) {
            return list.find(function (e) {
                return e.name === this.name;
            }, check);
        }

        function addFeatureNode(featureNode, list) {
            var node = new FeatureNode(featureNode);
            list.push(node);
            return node;
        }

        var SourceMap = function (Sender, pluginInstace) {
            var Mappings = [];
            this.getSourceInstance = function () {
                return pluginInstace;
            };
            this.getSender = function () {
                return Sender;
            };

            function findFeatureObject(featureObject) {
                return Mappings.find(function (e) {
                    return (e.outputIndex === this.outputIndex && e.frameSize === this.frameSize);
                }, featureObject);
            }

            function updateSender() {
                function recursiveFind(featureList) {
                    var f, list = [];
                    for (f = 0; f < featureList.length; f++) {
                        var featureNode = getFeatureNode(list, featureList[f]);
                        if (!featureNode || (featureList.parameters && featureList[f].parameters.length !== 0)) {
                            featureNode = addFeatureNode(featureList[f], list);
                        }
                        if (featureList[f].features && featureList[f].features.length > 0) {
                            featureNode.features = recursiveFind(featureList[f].features);
                        }
                    }
                    return list;
                }
                var i, outputList = [];
                for (i = 0; i < Mappings.length; i++) {
                    if (outputList[Mappings[i].outputIndex] === undefined) {
                        outputList[Mappings[i].outputIndex] = [];
                    }
                    var frameList = outputList[Mappings[i].outputIndex].find(function (e) {
                        return e.frameSize === this.frameSize;
                    }, Mappings[i]);
                    if (!frameList) {
                        frameList = {
                            'frameSize': Mappings[i].frameSize,
                            'featureList': undefined
                        };
                        outputList[Mappings[i].outputIndex].push(frameList);
                    }
                    frameList.featureList = recursiveFind(Mappings[i].getFeatureList());
                }
                Sender.updateFeatures(outputList);
            }

            this.requestFeatures = function (requestorInstance, featureObject) {
                var map = findFeatureObject(featureObject);
                if (!map) {
                    map = {
                        'outputIndex': featureObject.outputIndex,
                        'frameSize': featureObject.frameSize,
                        'requestors': [],
                        'getFeatureList': function () {
                            var F = [],
                                i;
                            for (i = 0; i < this.requestors.length; i++) {
                                F = F.concat(this.requestors[i].getFeatureList());
                            }
                            return F;
                        }
                    };
                    Mappings.push(map);
                }
                var requestor = map.requestors.find(function (e) {
                    return e.getRequestorInstance() === this;
                }, requestorInstance);
                if (!requestor) {
                    requestor = new RequestorMap(requestorInstance);
                    map.requestors.push(requestor);
                }
                requestor.addFeatures(featureObject);
                updateSender();
            };

            this.findFrameMap = function (outputIndex, frameSize) {
                return Mappings.find(function (e) {
                    return (e.outputIndex === outputIndex && e.frameSize === frameSize);
                });
            };

            this.cancelFeatures = function (requestorInstance, featureObject) {
                if (featureObject === undefined) {
                    Mappings.forEach(function (map) {
                        var requestorIndex = map.requestors.findIndex(function (e) {
                            return e.getRequestorInstance() === requestorInstance;
                        });
                        if (requestorIndex >= 0) {
                            map.requestors.splice(requestorIndex, 1);
                        }
                    });
                } else {
                    var map = findFeatureObject(featureObject);
                    if (!map) {
                        return;
                    }
                    var requestor = map.requestors.find(function (e) {
                        return e.getRequestorInstance() === this;
                    }, requestorInstance);
                    if (!requestor) {
                        return;
                    }
                    requestor.deleteFeatures(featureObject);
                }
                updateSender();
            };
        };
        var RequestorMap = function (pluginInstance) {
            var Features = [];
            var Receiver = pluginInstance.node.featureMap.Receiver;
            this.getRequestorInstance = function () {
                return pluginInstance;
            };

            function recursivelyAddFeatures(rootArray, featureObject) {
                var i;
                for (i = 0; i < featureObject.length; i++) {
                    // Check we have not already listed the feature
                    var featureNode = getFeatureNode(rootArray, featureObject[i]);
                    if (!featureNode || (featureObject[i].parameters && featureObject[i].parameters.length !== 0)) {
                        featureNode = addFeatureNode(featureObject[i], rootArray);
                    }
                    if (featureObject[i].features !== undefined && featureObject[i].features.length > 0) {
                        recursivelyAddFeatures(featureNode.features, featureObject[i].features);
                    }
                }
            }

            function recursivelyDeleteFeatures(rootArray, featureObject) {
                var l = featureObject.length,
                    i;
                for (i = 0; i < l; i++) {
                    // Find the feature
                    var index = getFeatureNode(rootArray, featureObject[i]);
                    if (index >= 0) {
                        if (featureObject[index].features && featureObject[index].features.length > 0) {
                            recursivelyDeleteFeatures(rootArray[index].features, featureObject[index].features);
                        } else {
                            Features.splice(index, 0);
                        }
                    }

                }
            }

            this.addFeatures = function (featureObject) {
                recursivelyAddFeatures(Features, featureObject.features);
            };

            this.deleteFeatures = function (featureObject) {
                recursivelyDeleteFeatures(Features, featureObject.features);
            };

            this.getFeatureList = function () {
                return Features;
            };

            this.postFeatures = function (featureObject) {
                var message = {
                        'plugin': featureObject.plugin,
                        'outputIndex': featureObject.outputIndex,
                        'frameSize': featureObject.frameSize,
                        'features': {
                            'numberOfChannels': featureObject.results.numberOfChannels,
                            'results': []
                        }
                    },
                    i;

                function recursivePostFeatures(rootNode, resultsList, FeatureList) {
                    // Add the results tree where necessary
                    var i, param;

                    function ao(e) {
                        return e.name === param;
                    }
                    for (param in resultsList) {
                        if (resultsList.hasOwnProperty(param)) {
                            var node = FeatureList.find(ao);
                            if (node) {
                                if (resultsList[param].constructor === Object && node.results) {
                                    rootNode[param] = {};
                                    recursivePostFeatures(rootNode[param], resultsList[param], node.results);
                                } else {
                                    rootNode[param] = resultsList[param];
                                }
                            }
                        }
                    }
                }
                // Perform recursive map for each channel
                for (i = 0; i < featureObject.results.numberOfChannels; i++) {
                    message.features.results[i] = {};
                    recursivePostFeatures(message.features.results[i], featureObject.results.results[i].results, Features);
                }
                pluginInstance.node.featureMap.Receiver.postFeatures(message);
            };
        };

        function findSourceIndex(Sender) {
            return Mappings.findIndex(function (e) {
                return e.getSender() === this;
            }, Sender);
        }

        function findSourceMap(Mappings, source, pluginSender) {
            var sourceMap = Mappings[findSourceIndex(source)];
            if (!sourceMap) {
                sourceMap = Mappings[findSourceIndex(pluginSender)];
                if (!sourceMap) {
                    throw ("Could not locate source map");
                }
            }
            return sourceMap;
        }

        // GENERAL INTERFACE
        this.createSourceMap = function (Sender, pluginInstance) {
            var node = new SourceMap(Sender, pluginInstance);
            Mappings.push(node);
            return node;
        };
        this.deleteSourceMap = function (Sender) {
            var index = findSourceIndex(Sender);
            if (index === -1) {
                throw ("Could not find the source map for the plugin");
            }
            Mappings.splice(index, 1);
        };

        this.getPluginSender = function (plugin) {
            if (plugin.constructor === PluginInstance) {
                plugin = plugin.node;
            }
            return plugin.featureMap.Sender;
        };

        this.requestFeatures = function (requestor, source, featureObject) {
            if (requestor.constructor !== PluginInstance) {
                requestor = requestor.pluginInstance;
            }
            // Get the source map
            var pluginSender = this.getPluginSender(source);
            var sourceMap = findSourceMap(Mappings, source, pluginSender);
            sourceMap.requestFeatures(requestor, featureObject);
        };
        this.deleteFeatures = function (requestor, source, featureObject) {
            if (requestor.constructor !== PluginInstance) {
                requestor = requestor.pluginInstance;
            }
            if (source === undefined) {
                Mappings.forEach(function (sourceMap) {
                    sourceMap.cancelFeatures(requestor);
                });
            } else {
                // Get the source map
                var pluginSender = this.getPluginSender(source);
                var sourceMap = findSourceMap(Mappings, source, pluginSender);
                sourceMap.cancelFeatures(requestor, featureObject);
            }
        };
        this.getFeatureList = function (requestor, source) {};
        this.postFeatures = function (featureObject) {
            // Receive from the Sender objects
            // Trigger distributed search for results transmission

            // First get the instance mapping for output/frame
            var source = Mappings[findSourceIndex(featureObject.plugin)];
            if (!source) {
                source = Mappings[findSourceIndex(this.getPluginSender(featureObject.plugin))];
                if (!source) {
                    throw ("Plugin Instance not loaded!");
                }
            }
            var frameMap = source.findFrameMap(featureObject.outputIndex, featureObject.frameSize);

            // Send the feature object to the RequestorMap object to handle comms
            frameMap.requestors.forEach(function (e) {
                e.postFeatures(this);
            }, featureObject);

        };
    };

    this.FeatureMap = new FeatureMap();
    Object.defineProperty(this.FeatureMap, "factory", {
        'value': this
    });

    var stores = [];

    this.createStore = function (storeName) {
        var node = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore(storeName);
        stores.push(node);
        return node;
    };

    this.getStores = function () {
        return stores;
    };

    this.findStore = function (storeName) {
        return stores.find(function (a) {
            return a.name === storeName;
        });
    };

    // Build the default Stores
    this.SessionData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("Session");
    this.UserData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("User");

    // Created for the input of each SubFactory plugin chain
    var SubFactoryFeatureSender = function (owner, FactoryFeatureMap) {
        var OutputNode = function (parent, output) {
            var extractors = [];
            var Extractor = function (output, frameSize) {
                this.extractor = output.context.createAnalyser();
                this.extractor.fftSize = frameSize;
                output.connect(this.extractor);
                this.features = [];
                Object.defineProperty(this, "frameSize", {
                    'value': frameSize
                });

                var recursiveProcessing = owner.recursiveProcessing;
                /*
                function recursiveProcessing(base, list) {
                    var l = list.length,
                        i, entry;
                    for (i = 0; i < l; i++) {
                        entry = list[i];
                        base[entry.name].apply(base, entry.parameters);
                        if (entry.features && entry.features.length > 0) {
                            recursiveProcessing(base.result[entry.name], entry.features);
                        }
                    }
                }
                */
                function onaudiocallback(data) {
                    //this === Extractor
                    var message = {
                        'numberOfChannels': 1,
                        'results': []
                    };
                    recursiveProcessing(data, this.features);
                    message.results[0] = {
                        'channel': 0,
                        'results': JSON.parse(data.toJSON())
                    };
                    this.postFeatures(data.length, message);
                }

                this.setFeatures = function (featureList) {
                    this.features = featureList;
                    if (this.features.length === 0) {
                        this.extractor.clearCallback();
                    } else {
                        this.extractor.frameCallback(onaudiocallback, this);
                    }
                };
                this.rejoinExtractor = function () {
                    output.connect(this.extractor);
                };
            };
            var WorkerExtractor = function (output, frameSize) {
                function onaudiocallback(e) {
                    var c, frames = [];
                    for (c = 0; c < e.inputBuffer.numberOfChannels; c++) {
                        frames[c] = e.inputBuffer.getChannelData(c);
                    }
                    worker.postMessage({
                        'state': 2,
                        'frames': frames
                    });
                }

                function response(msg) {
                    this.postFeatures(frameSize, msg.data.response);
                }

                var worker = new Worker("jsap/feature-worker.js");
                worker.onerror = function (e) {
                    console.error(e);
                };

                this.setFeatures = function (featureList) {
                    var self = this;
                    var configMessage = {
                        'state': 1,
                        'sampleRate': output.context.sampleRate,
                        'featureList': featureList,
                        'numChannels': output.numberOfOutputs,
                        'frameSize': this.frameSize
                    };
                    this.features = featureList;
                    if (featureList && featureList.length > 0) {
                        worker.onmessage = function (e) {
                            if (e.data.state === 1) {
                                worker.onmessage = response.bind(self);
                                self.extractor.onaudioprocess = onaudiocallback.bind(self);
                            } else {
                                worker.postMessage(configMessage);
                            }
                        };
                        worker.postMessage({
                            'state': 0
                        });
                    } else {
                        this.extractor.onaudioprocess = undefined;
                    }

                };

                this.rejoinExtractor = function () {
                    output.connect(this.extractor);
                };

                this.extractor = output.context.createScriptProcessor(frameSize, output.numberOfOutputs, 1);
                output.connect(this.extractor);
                this.extractor.connect(output.context.destination);

                Object.defineProperty(this, "frameSize", {
                    'value': frameSize
                });
            };
            this.addExtractor = function (frameSize) {
                var obj;
                if (window.Worker) {
                    obj = new WorkerExtractor(output, frameSize);
                } else {
                    obj = new Extractor(output, frameSize);
                }
                extractors.push(obj);
                Object.defineProperty(obj, "postFeatures", {
                    'value': function (frameSize, resultsJSON) {
                        var obj = {
                            'outputIndex': 0,
                            'frameSize': frameSize,
                            'results': resultsJSON
                        };
                        this.postFeatures(obj);
                    }.bind(this)
                });
                return obj;
            };
            this.findExtractor = function (frameSize) {
                var check = frameSize;
                return extractors.find(function (e) {
                    // This MUST be == NOT ===
                    return Number(e.frameSize) === Number(check);
                });
            };
            this.rejoinExtractors = function () {
                extractors.forEach(function (e) {
                    e.rejoinExtractor();
                });
            };
            this.deleteExtractor = function (frameSize) {};
        };
        var outputNodes;
        this.updateFeatures = function (featureObject) {
            var o;
            for (o = 0; o < featureObject.length; o++) {
                if (outputNodes === undefined) {
                    if (o > 1) {
                        throw ("Requested an output that does not exist");
                    }
                    outputNodes = new OutputNode(owner, owner.chainStart);
                    Object.defineProperty(outputNodes, "postFeatures", {
                        'value': function (resultObject) {
                            this.postFeatures(resultObject);
                        }.bind(this)
                    });
                }
                var si;
                for (si = 0; si < featureObject[o].length; si++) {
                    var extractor = outputNodes.findExtractor(featureObject[o][si].frameSize);
                    if (!extractor) {
                        extractor = outputNodes.addExtractor(featureObject[o][si].frameSize);
                    }
                    extractor.setFeatures(featureObject[o][si].featureList);
                }
            }
        };

        this.rejoinExtractors = function () {
            if (outputNodes) {
                outputNodes.rejoinExtractors();
            }
        };

        this.postFeatures = function (featureObject) {
            /*
                Called by the individual extractor instances:
                featureObject = {'frameSize': frameSize,
                'outputIndex': outputIndex,
                'results':[]}
            */
            FactoryFeatureMap.postFeatures({
                'plugin': this,
                'outputIndex': featureObject.outputIndex,
                'frameSize': featureObject.frameSize,
                'results': featureObject.results
            });
        };

        // Send to Factory
        FactoryFeatureMap.createSourceMap(this, undefined);
    };

    var AudioPluginChainManager = function (PluginFactory, chainStart, chainStop) {

        var plugin_list = [],
            pluginChainStart = chainStart,
            pluginChainStop = chainStop,
            factoryName = "",
            state = 1,
            delaySamples = 0,
            chainStartFeature = new SubFactoryFeatureSender(this, PluginFactory.FeatureMap),
            semanticStores = [],
            eventTarget = new EventTarget(),
            self = this;
        this.parent = PluginFactory;
        pluginChainStart.disconnect();
        pluginChainStart.connect(chainStop);

        this.TrackData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("Track");
        this.PluginData = new _LinkedStore__WEBPACK_IMPORTED_MODULE_0__["default"].LinkedStore("Plugin");

        this.featureSender = chainStartFeature;

        this.getFeatureChain = function () {

        };

        function rebuild() {
            var i = 0,
                l = plugin_list.length - 1;
            while (i < l) {
                var currentNode = plugin_list[i++];
                var nextNode = plugin_list[i];
                currentNode.reconnect(nextNode);
            }
        }

        function isolate() {
            plugin_list.forEach(function (e) {
                e.disconnect();
            });
        }

        function cutChain() {
            if (plugin_list.length > 0) {
                pluginChainStart.disconnect(plugin_list[0].input);
                plugin_list[plugin_list.length - 1].output.disconnect(pluginChainStop);
            } else {
                pluginChainStart.disconnect(pluginChainStop);
            }
            return true;
        }

        function joinChain() {
            if (plugin_list.length > 0) {
                pluginChainStart.connect(plugin_list[0].input);
                plugin_list[plugin_list.length - 1].output.connect(pluginChainStop);
            } else {
                pluginChainStart.connect(pluginChainStop);
            }
            chainStartFeature.rejoinExtractors();
        }

        this.bypassPlugin = function (plugin_instance, state) {
            // Check is a member of this chain
            if (plugin_list.includes(plugin_instance) === false) {
                return;
            }
            plugin_instance.bypass(state);
        };

        this.getPrototypes = function () {
            return this.parent.getPrototypes();
        };

        this.getFactory = function () {
            return this.parent;
        };

        this.destroy = function (reconnect) {
            var i;
            for (i = 0; i < plugin_list.length; i++) {
                this.destroyPlugin(plugin_list[i]);
            }
            pluginChainStart.disconnect();
            if (reconnect === true) {
                pluginChainStart.connect(pluginChainStop);
            }
        };

        // Plugin creation / destruction

        function buildNewPlugin(prototypeObject) {
            return new Promise(function(resolve, reject) {
                if (state === 0) {
                    reject ("SubFactory has been destroyed! Cannot add new plugins");
                } else {
                    resolve(prototypeObject);
                }
            }).then(function() {
                return prototypeObject.createPluginInstance(self, false)
                .then(function(node) {
                    Object.defineProperties(node, {
                        'TrackData': {
                            value: self.TrackData
                        }
                    });
                    return node;
                });
            });
        }

        this.createPlugin = function (prototypeObject) {
            return buildNewPlugin(prototypeObject).catch(function(e){
                throw("Plugin did not get created! Aborting");
            }).then(function(node) {
                cutChain();
                plugin_list.push(node);
                isolate();
                rebuild();
                joinChain();
                node.addEventListener("alterdelay", self);
                node.node.onloaded.call(node.node);
                updateDelayCompensation();
                eventTarget.dispatchEvent(new Event("change"));
                return node;
            });
        };

        this.removePlugin = function(plugin_object) {
            if (state === 0) {
                return;
            }
            var index = this.getPluginIndex(plugin_object);
            if (index >= 0) {
                cutChain();
                plugin_object.removeEventListener("alterdelay", self);
                plugin_object.node.stop.call(plugin_object.node);
                plugin_object.node.onunloaded.call(plugin_object.node);
                plugin_object.node.deconstruct.call(plugin_object.node);
                plugin_list.splice(index, 1);
                isolate();
                rebuild();
                joinChain();
                updateDelayCompensation();
                eventTarget.dispatchEvent(new Event("change"));
            }
        };

        this.destroyPlugin = function (plugin_object) {
            if (state === 0) {
                return;
            }
            this.removePlugin(plugin_object);
            this.parent.deletePlugin(plugin_object.id);
            updateDelayCompensation();
        };

        this.getPlugins = function () {
            return plugin_list;
        };

        this.getAllPlugins = function () {
            return this.parent.getAllPluginsObject();
        };

        this.getPluginIndex = function (plugin_object) {
            if (state === 0) {
                return;
            }
            var index = plugin_list.findIndex(function (element, index, array) {
                if (element === this) {
                    return true;
                }
                return false;
            }, plugin_object);
            return index;
        };

        this.movePlugin = function (plugin_object, new_index) {
            if (state === 0) {
                return;
            }
            var index = this.getPluginIndex(plugin_object),
                obj, holdLow, holdHigh, i;
            if (PluginFactory.getAllPlugins().includes(plugin_object) === false) {
                throw("Plugin does not exist");
            }
            cutChain();
            isolate();
            if (plugin_object.node.owner !== this) {
                // Different sub-factory
                plugin_object.node.owner.removePlugin(plugin_object);
                plugin_object.node.owner = this;
                obj = [plugin_object];
            } else {
                obj = plugin_list.splice(index, 1);
                plugin_object.node.onunloaded.call(plugin_object.node);
            }
            if (new_index === 0) {
                plugin_list = obj.concat(plugin_list);
            } else if (new_index >= plugin_list.length) {
                plugin_list = plugin_list.concat(obj);
            } else {
                holdLow = plugin_list.slice(0, new_index);
                holdHigh = plugin_list.slice(new_index);
                plugin_list = holdLow.concat(obj.concat(holdHigh));
            }
            rebuild();
            joinChain();
            plugin_object.node.onloaded.call(plugin_object.node);
            updateDelayCompensation();
            eventTarget.dispatchEvent(new Event("change"));
        };

        this.copyPlugin = function(plugin_object, copy_index) {
            if (copy_index === undefined) {
                copy_index = plugin_list.length;
            }
            if (typeof copy_index != "number" || copy_index < 0 || copy_index > plugin_list.length) {
                throw("Plugin copy index outside of the chain scope.");
            }
            return buildNewPlugin(plugin_object.prototypeObject)
            .catch(function(e){
                throw("Plugin did not get created! Aborting");
            }).then(function(node) {
                node.node.parameters.setParametersByObject(plugin_object.node.parameters.getParameterObject());
                cutChain();
                isolate();
                plugin_list.splice(copy_index, 0, node);
                rebuild();
                joinChain();
                updateDelayCompensation();
                node.node.onloaded.call(node.node);
                eventTarget.dispatchEvent(new Event("change"));
                return node;
            });

        };

        function recursiveProcessing(base, list) {
            var l = list.length,
                i, entry;
            for (i = 0; i < l; i++) {
                entry = list[i];
                base[entry.name].apply(base, entry.parameters);
                if (entry.features && entry.features.length > 0) {
                    recursiveProcessing(base.result[entry.name], entry.features);
                }
            }
        }

        function getDelayCompensation() {
            var sum = 0;
            plugin_list.filter(function(plugin) {
                return !plugin.isBypassed();
            }).forEach(function(plugin) {
                sum += plugin.node.processingDelayAsSamples;
            });
            return sum;
        }

        function updateDelayCompensation() {
            var sum = getDelayCompensation();
            if (delaySamples != sum) {
                delaySamples = sum;
                eventTarget.dispatchEvent(new Event("alterdelay"));
            }
            return delaySamples;
        }

        Object.defineProperties(this, {
            'chainStart': {
                'value': chainStart
            },
            'chainStop': {
                'value': chainStop
            },
            "updateDelayCompensation": {
                "value": function () {
                    return updateDelayCompensation();
                }
            },
            "processingDelayAsSamples": {
                "get": function() {
                    return updateDelayCompensation();
                },
                "set": function() {
                    throw("processingDelayAsSamples is read-only");
                }
            },
            "processingDelayAsSeconds": {
                "get": function() {
                    return this.processingDelayAsSamples/PluginFactory.context.sampleRate;
                },
                "set": function() {
                    throw("processingDelayAsSeconds is read-only");
                }
            },
            'name': {
                'get': function () {
                    return factoryName;
                },
                'set': function (name) {
                    if (typeof name === "string") {
                        factoryName = name;
                    }
                    return factoryName;
                }
            },
            'recursiveProcessing': {
                'get': function () {
                    return recursiveProcessing;
                }
            },
            'handleEvent': {
                "value": function(e) {
                    if (e.type == "alterdelay") {
                        updateDelayCompensation();
                    }
                }
            },
            "addEventListener": {
                "value": function(key, value) {
                    return eventTarget.addEventListener(key, value);
                }
            },
            "removeEventListener": {
                "value": function(key, value) {
                    return eventTarget.addEventListener(key, value);
                }
            }
        });
    };

    var MidiSynthesiserHost = function(factory) {
        var self = this;
        function buildNewSynthesiserObject(prototypeObject) {
            if (midiSynthSlot) {
                factory.deletePlugin(midiSynthSlot.id);
            }
            return new Promise(function(resolve, reject) {
                if (prototypeObject.hasMidiInput == false || prototypeObject.hasMidiOutput == true) {
                    reject ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
                } else {
                    resolve(prototypeObject);
                }
            }).then(function() {
                return prototypeObject.createPluginInstance(self, false)
                .then(function(node) {
                    Object.defineProperties(node, {
                        'TrackData': {
                            value: self.TrackData
                        }
                    });
                    return node;
                });
            });
        }

        var midiSynthSlot;
        var connections = [];
        Object.defineProperties(this, {
            "connect": {
                "value": function(destinationNode, output, input) {
                    if (destinationNode === undefined) {
                        throw ("Must define an AudioNode object");
                    }
                    var exists = connections.find(function(conn) {
                        return conn.destinationNode == destinationNode && conn.output == output && conn.input == input;
                    });
                    if (exists) {
                        return;
                    } else {
                        connections.push({
                            destinationNode:destinationNode,
                            output:output,
                            input:input
                        });
                    }
                    if (midiSynthSlot === undefined) {
                        console.warn("MIDI Synthesiser is not loaded, connections will be validated on load");
                    } else {
                        midiSynthSlot.node.connect(destinationNode, output, input);
                    }
                }
            },
            "disconnect": {
                "value": function(destinationNode, output, input) {
                    if (destinationNode === undefined) {
                        if (midiSynthSlot) {
                            midiSynthSlot.disconnect();
                        }
                        connections = [];
                    }
                    else if (typeof destinationNode == "number" && typeof output == "undefined") {
                        output = destinationNode;
                        destinationNode = undefined;
                        connections = connections.filter(function(conn) {
                            if (conn.output == output) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else if (typeof destinationNode == "object" && typeof output == "undefined") {
                        connections = connections.filter(function(conn) {
                            if (conn.destinationNode == destinationNode) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else if (typeof destinationNode == "object" && typeof output == "number") {
                        connections = connections.filter(function(conn) {
                            if (conn.destinationNode == destinationNode && conn.output == output) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode, conn.output);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    } else if (typeof destinationNode == "object" && typeof output == "number" && typeof input == "number") {
                        connections = connections.filter(function(conn) {
                            if (conn.destinationNode == destinationNode && conn.output == output && conn.input == input) {
                                if (midiSynthSlot) {
                                    midiSynthSlot.node.disconnect(conn.destinationNode, conn.output, conn.input);
                                }
                                return false;
                            } else {
                                return true;
                            }
                        });
                    }
                }
            },
            "scheduleEvent": {
                "value": function(msg, t) {
                    if (midiSynthSlot) {
                        midiSynthSlot.node.scheduleEvent(msg, t);
                    } else {
                        throw("MIDI Synthesiser not loaded");
                    }
                }
            },
            "cancelAllEvents": {
                "value": function(t) {
                    if (midiSynthSlot) {
                        midiSynthSlot.node.cancelAllEvents(t);
                    } else {
                        throw("MIDI Synthesiser not loaded");
                    }
                }
            },
            "midiSynthesiser": {
                "get": function () {
                    return midiSynthSlot;
                },
                "set": function() {
                    throw("Cannot set read-only attribute.");
                }
            },
            "loadMidiSynthesiserModule": {
                "value": function(prototype) {
                    var self = this;
                    return new Promise(function(resolve, reject) {
                        if (prototype.hasMidiInput == false || prototype.hasMidiOutput == true) {
                            reject ("Prototype is not a MidiSynthesis type. hasMidiInput must be true and hasMidiOutput must be false");
                        } else {
                            resolve(prototype);
                        }
                    }).then(function(prototypeObject) {
                        return buildNewSynthesiserObject.call(self, prototypeObject).catch(function(e){
                            throw("Plugin did not get created! Aborting");
                        });
                    }).then(function(node) {
                        node.node.onloaded.call(node.node);
                        midiSynthSlot = node;
                        connections.forEach(function(conn) {
                            midiSynthSlot.node.connect(conn.destinationNode, conn.output, conn.input);
                        });
                        return midiSynthSlot;
                    });
                }
            },
        });
    };

    var PluginUserInterfaceMessageHub = (function(factory){
        function buildPluginInterface(plugin_object, interface_object) {
            var iframe = document.createElement("iframe");
            iframe.src = interface_object.src;
            if (interface_object.width) {
                iframe.width = interface_object.width;
            }
            if (interface_object.height) {
                iframe.height = interface_object.height;
            }
            iframe.style.border = "0";
            return iframe;
        }
        function setDefaultInterface(url, width, height) {
            default_interface = {
                url: url,
                width: width,
                height: height
            };
            return default_interface;
        }
        function pollAllPlugins() {
            factory.getAllPlugins().forEach(function(plugin) {
                plugin.node.externalInterface.updateInterfaces(true);
            });
        }

        var listener = false;
        var default_interface = {
            src: "jsap_default.html"
        };

        return Object.create({
            "setDefaultInterface": setDefaultInterface,
            "buildPluginInterface":buildPluginInterface,
            "pollAllPlugins": pollAllPlugins
        });
    })(this);

    Object.defineProperties(this, {
        "context": {
            "value": audio_context
        },
        "hasAudioStarted": {
            "get": function() {
                return audioStarted;
            }
        },
        "pluginRootURL": {
            "get": function () {
                return rootURL;
            },
            "set": function (t) {
                if (typeof t === "string") {
                    rootURL = t;
                    return rootURL;
                }
                throw ("Cannot set root URL without a string");
            }
        },
        "createFactoryCopy": {
            "value": function (context) {
                return copyFactory(context);
            }
        },
        "subFactories": {
            "get": function() {
                return subFactories;
            }
        },
        "PluginGUI": {
            "value": PluginUserInterfaceMessageHub
        }
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/synth_base.js":
/*!***************************!*\
  !*** ./src/synth_base.js ***!
  \***************************/
/*! exports provided: SynthesiserBasePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynthesiserBasePlugin", function() { return SynthesiserBasePlugin; });
/* harmony import */ var _base_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_plugin */ "./src/base_plugin.js");
/* jshint esversion: 6 */


var SynthesiserBasePlugin = function(factory, owner)
{
    var hasWarnedScheduleNotSet = false;
    var hasWarnedCancelNotSet = false;
    _base_plugin__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"].call(this, factory, owner);

    Object.defineProperties(this, {
        "addInput": {
            "value": function() {
                throw("Cannot add input to type \"SynthesiserBasePlugin\"");
            }
        },
        "deleteInput": {
            "value": function() {
                throw("Cannot delete input to type \"SynthesiserBasePlugin\"");
            }
        },
        "scheduleEvent": {
            "value": function (msg, contextTime) {
                if (!hasWarnedScheduleNotSet) {
                    console.warning("WARNING - .scheduleEvent is not overridden");
                    hasWarnedScheduleNotSet = true;
                }
            },
            "writable": true
        },
        "cancelAllEvents": {
            "value": function() {
                if (!hasWarnedCancelNotSet) {
                    console.warning("WARNING - .cancelAllEvents is not overridden");
                    hasWarnedCancelNotSet = true;
                }
            },
            "writable": true
        }
    });
};
SynthesiserBasePlugin.prototype = Object.create(_base_plugin__WEBPACK_IMPORTED_MODULE_0__["BasePlugin"].prototype);
SynthesiserBasePlugin.prototype.constructor = SynthesiserBasePlugin;




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0xpbmtlZFN0b3JlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvYmFzZV9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJNYW5hZ2VyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGFyYW1ldGVyQXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGx1Z2luUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BsdWdpbi1mYWN0b3J5LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvc3ludGhfYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRTREOzs7Ozs7Ozs7Ozs7O0FDMVU1RDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxT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QUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFDQUFxQztBQUM1RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixzQ0FBc0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUUwRDs7Ozs7Ozs7Ozs7Ozs7QUNuMEQxRDtBQUFBO0FBQUE7QUFBQTtBQUN5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0RBQWdELHVEQUFVO0FBQzFEOztBQUUrQiIsImZpbGUiOiJKU0FQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbW9kdWxlLmpzXCIpO1xuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKmdsb2JhbHMgZG9jdW1lbnQgKi9cclxuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cclxuXHJcbnZhciBMaW5rZWRTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcclxuICAgIC8vIFN0b3JlIGZvciB0aGUgc2VtYW50aWMgdGVybXMsIGVhY2ggc3RvcmUgaG9sZHMgaXRzIG93biBkYXRhIHRyZWVcclxuICAgIC8vIFRlcm1zIGFyZSBhZGRlZCBhcyBrZXkvdmFsdWUgcGFyaXMgdG8gYSByb290IG5vZGVcclxuICAgIHZhciByb290ID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gb2JqZWN0VG9YTUwob2JqLCByb290LCBkb2MpIHtcclxuICAgICAgICAvLyBVc2VkIGlmIGFuIG9iamVjdCB3YXMgcGFzc2VkIGFzIGEgdGVybSB2YWx1ZVxyXG4gICAgICAgIHZhciB0ZXJtO1xyXG4gICAgICAgIGZvciAodGVybSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbdGVybV0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZG9jTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3Rlcm1dLnRvWE1MKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY05vZGUgPSBvYmpbdGVybV0udG9YTUwoZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NOb2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGVybSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9jTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmpbdGVybV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVRvWE1MKG9ialt0ZXJtXSwgZG9jTm9kZSwgZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFRvWE1MKG9ialt0ZXJtXSwgZG9jTm9kZSwgZG9jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKGRvY05vZGUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSh0ZXJtLCBvYmpbdGVybV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFycmF5VG9YTUwoYXJyLCByb290LCBkb2MpIHtcclxuICAgICAgICAvLyBVc2VkIHRvIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBsaXN0IG9mIFhNTCBlbnRyaWVzXHJcbiAgICAgICAgdmFyIGFsbF9udW1iZXJzID0gdHJ1ZSxcclxuICAgICAgICAgICAgYWxsX3N0cmluZ3MgPSB0cnVlLFxyXG4gICAgICAgICAgICBpLCBsID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBhbGxfbnVtYmVycyA9IGFyci5ldmVyeShmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09IFwibnVtYmVyXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxsX3N0cmluZ3MgPSBhcnIuZXZlcnkoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcInN0cmluZ1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChhbGxfbnVtYmVycyB8fCBhbGxfc3RyaW5ncykge1xyXG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBudW1iZXJzIG9yIHN0cmluZ3NcclxuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGEsIGkpIHtcclxuICAgICAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKFwiaW5kZXgtXCIgKyBpLCBhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQW4gYXJyYXkgb2Ygb2JqZWN0c1xyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGkpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwoYSwgbm9kZSwgZG9jKTtcclxuICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgJ25hbWUnOiB7XHJcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmVOYW1lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnc2V0JzogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yZU5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBzdG9yZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk5hbWUgaXMgYWxyZWFkeSBzZXRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdhZGRUZXJtJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvb3RbdGVybV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2FkZFRlcm1zJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybXNPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybXNPYmplY3QgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJhZGRUZXJtcyB0YWtlcyBhbiBvYmplY3Qgb2YgdGVybS92YWx1ZSBwYWlyc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0ZXJtO1xyXG4gICAgICAgICAgICAgICAgZm9yICh0ZXJtIGluIHRlcm1zT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm1zT2JqZWN0Lmhhc093blByb3BlcnR5KHRlcm0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVybSh0ZXJtLCB0ZXJtc09iamVjdFt0ZXJtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGVsZXRlVGVybSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVybSh0ZXJtLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZ2V0VGVybSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByb290W3Rlcm1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnaGFzVGVybSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByb290Lmhhc093blByb3BlcnR5KHRlcm0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAndG9KU09OJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyb290KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICd0b1hNTCc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvYykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KG51bGwsIHN0b3JlTmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGRvYy5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50KHN0b3JlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvYmplY3RUb1hNTChyb290LCBub2RlLCBkb2MpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtMaW5rZWRTdG9yZX07XHJcbiIsIi8vIEFkZCBnZXRJbnB1dHMgdG8gYWxsIEF1ZGlvTm9kZXMgdG8gZWFzZSBkZXBsb3ltZW50XHJcbi8qZ2xvYmFscyBBdWRpb05vZGUsIFdvcmtlciwgY29uc29sZSwgd2luZG93LCBkb2N1bWVudCwgUHJvbWlzZSwgWE1MSHR0cFJlcXVlc3QgKi9cclxuLyplc2xpbnQtZW52IGJyb3dzZXIgKi9cclxuLypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmltcG9ydCB7UGFyYW1ldGVyTWFuYWdlcn0gZnJvbSBcIi4vcGFyYW1ldGVyTWFuYWdlci5qc1wiO1xyXG5cclxuaWYgKHR5cGVvZiBBdWRpb05vZGUgPT09IFwiZnVuY3Rpb25cIiAmJiB3aW5kb3cuaW1wb3J0U2NyaXB0cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBBdWRpb05vZGUucHJvdG90eXBlLmdldElucHV0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gW3RoaXNdO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gVGhpcyBzaG91bGQgc2ltcGx5IGRlZmluZSB0aGUgQmFzZVBsdWdpbiBmcm9tIHdoaWNoIGN1c3RvbSBwbHVnaW5zIGNhbiBiZSBidWlsdCBmcm9tXHJcbnZhciBCYXNlUGx1Z2luID0gZnVuY3Rpb24oZmFjdG9yeSwgb3duZXIpIHtcclxuICAgIHZhciBpbnB1dExpc3QgPSBbXSxcclxuICAgICAgICBvdXRwdXRMaXN0ID0gW10sXHJcbiAgICAgICAgcE93bmVyID0gb3duZXIsXHJcbiAgICAgICAgZGVsYXlTYW1wbGVzID0gMCxcclxuICAgICAgICBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpLFxyXG4gICAgICAgIGV4dGVybmFsSW50ZXJmYWNlID0gbmV3IFBsdWdpbkludGVyZmFjZU1lc3NhZ2VIdWIodGhpcyk7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBmYWN0b3J5LmNvbnRleHQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mYWN0b3J5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5mZWF0dXJlTWFwID0gbmV3IFBsdWdpbkZlYXR1cmVJbnRlcmZhY2UodGhpcyk7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVyTWFuYWdlcih0aGlzLCBleHRlcm5hbEludGVyZmFjZSk7XHJcbiAgICB0aGlzLnBhcmFtZXRlcnMuYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwge2RldGFpbDogZS5kZXRhaWx9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVJTyhub2RlLCBsaXN0KSB7XHJcbiAgICAgICAgdmFyIGkgPSBsaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gdGhpcztcclxuICAgICAgICB9LCBub2RlKTtcclxuICAgICAgICBpZiAoaSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZElucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICBpbnB1dExpc3QucHVzaChub2RlKTtcclxuICAgICAgICByZXR1cm4gaW5wdXRMaXN0O1xyXG4gICAgfTtcclxuICAgIHRoaXMuZGVsZXRlSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGVJTyhub2RlLCBpbnB1dExpc3QpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWRkT3V0cHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICBvdXRwdXRMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0cztcclxuICAgIH07XHJcbiAgICB0aGlzLmRlbGV0ZU91dHB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZUlPKG5vZGUsIG91dHB1dExpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kcyA9IGZ1bmN0aW9uKHNlY29uZHMpIHtcclxuICAgICAgICB2YXIgZnMgPSBmYWN0b3J5LmNvbnRleHQuc2FtcGxlUmF0ZTtcclxuICAgICAgICBpZiAodHlwZW9mIHNlY29uZHMgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShzZWNvbmRzKSAmJiBzZWNvbmRzID49IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzKHNlY29uZHMqZnMpL2ZzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyhcInNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kcyBJbnZhbGlkIGFyZ3VtZW50XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyA9IGZ1bmN0aW9uKHNhbXBsZXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHNhbXBsZXMgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShzYW1wbGVzKSAmJiBzYW1wbGVzID49IDApIHtcclxuICAgICAgICAgICAgZGVsYXlTYW1wbGVzID0gc2FtcGxlcztcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpO1xyXG4gICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93KFwic2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzIEludmFsaWQgYXJndW1lbnRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RvcCA9IHRoaXMub25sb2FkZWQgPSB0aGlzLm9udW5sb2FkZWQgPSB0aGlzLmRlY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiZXh0ZXJuYWxJbnRlcmZhY2VcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGV4dGVybmFsSW50ZXJmYWNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm51bUlucHV0c1wiOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIGlucHV0cyBvZiBCYXNlUGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm51bU91dHB1dHNcIjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2Ygb3V0cHV0cyBvZiBCYXNlUGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm51bVBhcmFtZXRlcnNcIjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMucGFyYW1ldGVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgQmFzZVBsdWdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvd25lclwiOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBPd25lcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAob3duZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3duZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwT3duZXIgPSBvd25lcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwT3duZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaW5wdXRzXCI6IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dExpc3Q7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiSWxsZWdhbCBhdHRlbXB0IHRvIG1vZGlmeSBCYXNlUGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm91dHB1dHNcIjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dExpc3Q7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiSWxsZWdhbCBhdHRlbXB0IHRvIG1vZGlmeSBCYXNlUGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2FtcGxlc1wiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzL2ZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjb25uZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoZGVzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmNvbm5lY3QoZGVzdC5pbnB0ID8gZGVzdC5pbnB1dCA6IGRlc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRpc2Nvbm5lY3RcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChkZXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVzdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzWzBdLmRpc2Nvbm5lY3QoZGVzdC5pbnB1dCA/IGRlc3QuaW5wdXQgOiBkZXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRJbnB1dHNcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRPdXRwdXRzXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFBhcmFtZXRlck5hbWVzXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyQnlOYW1lXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ2V0UGFyYW1ldGVyT2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFBhcmFtZXRlckJ5TmFtZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlckJ5TmFtZShuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0UGFyYW1ldGVyc0J5T2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChvYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZSA9IGZ1bmN0aW9uIChCYXNlUGx1Z2luSW5zdGFuY2UpIHtcclxuICAgIHRoaXMucGx1Z2luID0gQmFzZVBsdWdpbkluc3RhbmNlO1xyXG4gICAgdGhpcy5SZWNlaXZlciA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIodGhpcywgQmFzZVBsdWdpbkluc3RhbmNlLmZhY3RvcnkuRmVhdHVyZU1hcCk7XHJcbiAgICB0aGlzLlNlbmRlciA9IG5ldyBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlU2VuZGVyKHRoaXMsIEJhc2VQbHVnaW5JbnN0YW5jZS5mYWN0b3J5LkZlYXR1cmVNYXApO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uZmVhdHVyZXNcIiwge1xyXG4gICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlJlY2VpdmVyLm9uZmVhdHVyZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc2V0JzogZnVuY3Rpb24gKGZ1bmMpIHtcclxuICAgICAgICAgICAgdGhpcy5SZWNlaXZlci5vbmZlYXR1cmVzID0gZnVuYztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbnZhciBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlUmVjZWl2ZXIgPSBmdW5jdGlvbiAoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xyXG4gICAgZnVuY3Rpb24gY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICBpZiAoc291cmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiU291cmNlIHBsdWdpbiBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmZWF0dXJlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiRmVhdHVyZU9iamVjdCBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgZmVhdHVyZU9iamVjdC5mcmFtZVNpemUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiTWFsZm9ybWVkIGZlYXR1cmVPYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdmFyIGNfZmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzRnJvbVBsdWdpbihmZWF0dXJlTGlzdFtpXS5wbHVnaW4sIHtcclxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVMaXN0W2ldLm91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVMaXN0W2ldLmZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IGZlYXR1cmVMaXN0W2ldLmZlYXR1cmVzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlc0Zyb21QbHVnaW4gPSBmdW5jdGlvbiAoc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLnJlcXVlc3RGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2FuY2VsRmVhdHVyZXNGcm9tUGx1Z2luID0gZnVuY3Rpb24gKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgIGNoZWNrRmVhdHVyZUFyZ3Moc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2FuY2VsQWxsRmVhdHVyZXNGcm9tUGx1Z2luID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJTb3VyY2UgcGx1Z2luIG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmNhbmNlbEFsbEZlYXR1cmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChNZXNzYWdlKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBQbHVnaW4gRmFjdG9yeSB3aXRoIHRoZSBmZWF0dXJlIG1lc3NhZ2VcclxuICAgICAgICAgICAgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICdwbHVnaW4nOiBzb3VyY2VQbHVnaW5JbnN0YW5jZSxcclxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IG91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHt9IEpTLVh0cmFjdCBmZWF0dXJlIHJlc3VsdHMgb2JqZWN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICh0eXBlb2YgY19mZWF0dXJlcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNfZmVhdHVyZXMoTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbmZlYXR1cmVzXCIsIHtcclxuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY19mZWF0dXJlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZXQnOiBmdW5jdGlvbiAoZnVuYykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY19mZWF0dXJlcyA9IGZ1bmM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59O1xyXG52YXIgUGx1Z2luRmVhdHVyZUludGVyZmFjZVNlbmRlciA9IGZ1bmN0aW9uIChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XHJcbiAgICB2YXIgT3V0cHV0Tm9kZSA9IGZ1bmN0aW9uIChwYXJlbnQsIG91dHB1dCwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgZXh0cmFjdG9ycyA9IFtdO1xyXG4gICAgICAgIHZhciBFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IgPSBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mZnRTaXplID0gZnJhbWVTaXplO1xyXG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBbXTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZnJhbWVTaXplXCIsIHtcclxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLCBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIGksIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5mZWF0dXJlcyAmJiBlbnRyeS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdmFyIHJlY3Vyc2l2ZVByb2Nlc3NpbmcgPSB0aGlzLmZhY3RvcnkucmVjdXJzaXZlUHJvY2Vzc2luZztcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMgPT09IEV4dHJhY3RvclxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGRhdGEsIHRoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5yZXN1bHRzWzBdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdjaGFubmVsJzogMCxcclxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IEpTT04ucGFyc2UoZGF0YS50b0pTT04oKSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhkYXRhLmxlbmd0aCwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNsZWFyQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZnJhbWVDYWxsYmFjayhvbmF1ZGlvY2FsbGJhY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIFdvcmtlckV4dHJhY3RvciA9IGZ1bmN0aW9uIChvdXRwdXQsIGZyYW1lU2l6ZSkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGMsIGZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IGUuaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVzW2NdID0gZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YShjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMixcclxuICAgICAgICAgICAgICAgICAgICAnZnJhbWVzJzogZnJhbWVzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzcG9uc2UobXNnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhmcmFtZVNpemUsIG1zZy5kYXRhLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXCJqc2FwL2ZlYXR1cmUtd29ya2VyLmpzXCIpO1xyXG4gICAgICAgICAgICB3b3JrZXIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZ01lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMSxcclxuICAgICAgICAgICAgICAgICAgICAnc2FtcGxlUmF0ZSc6IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogZmVhdHVyZUxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgJ251bUNoYW5uZWxzJzogb3V0cHV0Lm51bWJlck9mT3V0cHV0cyxcclxuICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogdGhpcy5mcmFtZVNpemVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxpc3QgJiYgZmVhdHVyZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gcmVzcG9uc2UuYmluZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gb25hdWRpb2NhbGxiYWNrLmJpbmQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0ZSc6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3Iub25hdWRpb3Byb2Nlc3MgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IgPSBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZnJhbWVTaXplLCBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLCAxKTtcclxuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jb25uZWN0KEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFkZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgdmFyIG9iajtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcclxuICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBXb3JrZXJFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXh0cmFjdG9ycy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcclxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChmcmFtZVNpemUsIHJlc3VsdHNKU09OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogcmVzdWx0c0pTT05cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKG9iaik7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZpbmRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGVjayA9IGZyYW1lU2l6ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGJlID09PSBOT1QgPT09XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5mcmFtZVNpemUgPT09IGNoZWNrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZGVsZXRlRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge307XHJcbiAgICB9O1xyXG4gICAgdmFyIG91dHB1dE5vZGVzID0gW107XHJcbiAgICB0aGlzLnVwZGF0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAvLyBbXSBPdXRwdXQgLT4ge30gJ2ZyYW1lc2l6ZScgLT4ge30gJ2ZlYXR1cmVzJ1xyXG4gICAgICAgIHZhciBvO1xyXG4gICAgICAgIGZvciAobyA9IDA7IG8gPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgIGlmIChvdXRwdXROb2Rlc1tvXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobyA+IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ubnVtT3V0cHV0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlJlcXVlc3RlZCBhbiBvdXRwdXQgdGhhdCBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG91dHB1dE5vZGVzW29dID0gbmV3IE91dHB1dE5vZGUoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5vdXRwdXRzW29dLCBvKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXRwdXROb2Rlc1tvXSwgXCJwb3N0RmVhdHVyZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChyZXN1bHRPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMocmVzdWx0T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzaTtcclxuICAgICAgICAgICAgZm9yIChzaSA9IDA7IHNpIDwgZmVhdHVyZU9iamVjdFtvXS5sZW5ndGg7IHNpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBleHRyYWN0b3IgPSBvdXRwdXROb2Rlc1tvXS5maW5kRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4dHJhY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzW29dLmFkZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXh0cmFjdG9yLnNldEZlYXR1cmVzKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZlYXR1cmVMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIENhbGxlZCBieSB0aGUgaW5kaXZpZHVhbCBleHRyYWN0b3IgaW5zdGFuY2VzOlxyXG4gICAgICAgICAgICBmZWF0dXJlT2JqZWN0ID0geydmcmFtZVNpemUnOiBmcmFtZVNpemUsXHJcbiAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IG91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAncmVzdWx0cyc6W119XHJcbiAgICAgICAgKi9cclxuICAgICAgICBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuRmVhdHVyZU1hcC5wb3N0RmVhdHVyZXMoe1xyXG4gICAgICAgICAgICAncGx1Z2luJzogRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5wbHVnaW5JbnN0YW5jZSxcclxuICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCxcclxuICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAncmVzdWx0cyc6IGZlYXR1cmVPYmplY3QucmVzdWx0c1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZW5kIHRvIEZhY3RvcnlcclxuICAgIEZhY3RvcnlGZWF0dXJlTWFwLmNyZWF0ZVNvdXJjZU1hcCh0aGlzLCBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLnBsdWdpbkluc3RhbmNlKTtcclxufTtcclxuXHJcbi8qXHJcbiAgICBUaGlzIGlzIGFuIG9wdGlvbmFsIG1vZHVsZSB3aGljaCB3aWxsIGF0dGVtcHQgdG8gY3JlYXRlIGEgZ3JhcGhpY2FsIGltcGxlbWVudGF0aW9uLlxyXG4gICAgQXMgd2l0aCBvdGhlciBhdWRpbyBwbHVnaW5zIGZvciBEQVdzLCB0aGUgR1VJIGlzIGFuIG9wdGlvbmFsIGVsZW1lbnQgd2hpY2ggY2FuIGJlIGFjY2VwdGVkIG9yIHJlamVjdGVkIGJ5IHRoZSBob3N0LlxyXG5cclxuICAgIFRoZSBhY3R1YWwgR1VJIGlzIGxhdW5jaGVkIGFzIGFuIDxpZnJhbWU+IGVsZW1lbnQgaW4gdGhlIGJyb3dzZXIgdG8ga2VlcCBlYWNoIHBsdWdpbiBpc29sYXRlZCBmcm9tIHRoZSByZXN0XHJcbiovXHJcblxyXG52YXIgUGx1Z2luVXNlckludGVyZmFjZSA9IGZ1bmN0aW9uIChCYXNlUGx1Z2luSW5zdGFuY2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiREVQUkVDQVRFRCEhXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJUaGUgY2xhc3MgUGx1Z2luVXNlckludGVyZmFjZSBoYXMgYmVlbiBkZXByZWNhdGVkXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJQbGVhc2UgbG9vayBhdCB0aGUgZG9jdW1lbnRzIGZvciB0aGUgbmV3IG1ldGhvZHMgZm9yIGJ1aWxkaW5nIHBsdWdpbnNcIik7XHJcbiAgICB0aGlzLnByb2Nlc3NvciA9IEJhc2VQbHVnaW5JbnN0YW5jZTtcclxuICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpZiAod2lkdGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICBpZiAoaGVpZ2h0ID4gMCkge1xyXG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpbSA9IHtcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgIH07XHJcbiAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG51bGw7XHJcbiAgICB0aGlzLlBsdWdpblBhcmFtZXRlckludGVyZmFjZXMgPSBbXTtcclxuXHJcbiAgICB2YXIgUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlTm9kZSA9IGZ1bmN0aW9uIChET00sIFBsdWdpblBhcmFtZXRlckluc3RhbmNlLCBwcm9jZXNzb3IsIGd1aSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBET007XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XHJcbiAgICAgICAgdGhpcy5HVUkgPSBndWk7XHJcbiAgICAgICAgdGhpcy5BdWRpb1BhcmFtID0gUGx1Z2luUGFyYW1ldGVySW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLkF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGVQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlID0gZnVuY3Rpb24gKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UsIHRoaXMucHJvY2Vzc29yLCB0aGlzKTtcclxuICAgICAgICB0aGlzLlBsdWdpblBhcmFtZXRlckludGVyZmFjZXMucHVzaChub2RlKTtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbn07XHJcblxyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucm9vdDtcclxufTtcclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmRpbTtcclxufTtcclxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaW0ud2lkdGg7XHJcbn07XHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmRpbS5oZWlnaHQ7XHJcbn07XHJcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmJlZ2luQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG1zKSB7XHJcbiAgICAvLyBBbnkgcmVnaXN0ZXJlZCBjYWxsYmFja3MgYXJlIHN0YXJ0ZWQgYnkgdGhlIGhvc3RcclxuICAgIGlmIChtcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbXMgPSAyNTA7XHJcbiAgICB9IC8vRGVmYXVsdCBvZiAyNTBtcyB1cGRhdGUgcGVyaW9kXHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbEZ1bmN0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IG1zO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxGdW5jdGlvbiA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAyNTApO1xyXG4gICAgfVxyXG59O1xyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQW55IHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGFyZSBzdG9wcGVkIGJ5IHRoZSBob3N0XHJcbiAgICBpZiAodGhpcy5pbnRlcnZhbEZ1bmN0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbEZ1bmN0aW9uKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5sb2FkUmVzb3VyY2UgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKHJlcS5zdGF0dXNUZXh0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcS5zZW5kKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwO1xyXG59O1xyXG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5jbGVhckdVSSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc3RvcENhbGxiYWNrcygpO1xyXG4gICAgdGhpcy5yb290LmlubmVySFRNTCA9IFwiXCI7XHJcbn07XHJcblxyXG52YXIgUGx1Z2luSW50ZXJmYWNlTWVzc2FnZUh1YiA9IGZ1bmN0aW9uKG93bmVyKSB7XHJcbiAgICBmdW5jdGlvbiBidWlsZFBsdWdpblBhcmFtZXRlckpTT04ocGx1Z2luLCBzb3VyY2VzKSB7XHJcbiAgICAgICAgdmFyIG5hbWVzID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xyXG4gICAgICAgIHZhciBPID0ge307XHJcbiAgICAgICAgaWYgKHNvdXJjZXMgPT09IHVuZGVmaW5lZCB8fCBzb3VyY2VzLmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc291cmNlcyA9IG5hbWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lcy5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbmNsdWRlcyhuYW1lKTtcclxuICAgICAgICB9LCBzb3VyY2VzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIE9bbmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiBwYXJhbS5tYXhpbXVtLFxyXG4gICAgICAgICAgICAgICAgbWluaW11bTogcGFyYW0ubWluaW11bSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogcGFyYW0uZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyYW0uY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtLmF1dG9tYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIE9bbmFtZV0uYXV0b21hdGVkID0gcGFyYW0uYXV0b21hdGlvbi5lbmFibGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIE87XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGRQYXJhbWV0ZXJVcGRhdGVQYXlsb2FkKHNlbmRlcl9pZCwgc291cmNlcykge1xyXG4gICAgICAgIHZhciBtc2cgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwidXBkYXRlUGFyYW1ldGVyc1wiLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBidWlsZFBsdWdpblBhcmFtZXRlckpTT04ob3duZXIsIHNvdXJjZXMpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoc2VuZGVyX2lkKSB7XHJcbiAgICAgICAgICAgIG1zZy5zZW5kZXJfaWQgPSBzZW5kZXJfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtc2c7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZFBhcmFtZXRlclVwZGF0ZXMoY2hhbm5lbCwgc291cmNlcykge1xyXG4gICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoYnVpbGRQYXJhbWV0ZXJVcGRhdGVQYXlsb2FkKHVuZGVmaW5lZCwgc291cmNlcyksIGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhzZW5kZXJfaWQsIHNvdXJjZXMpIHtcclxuICAgICAgICB2YXIgbXNnID0gYnVpbGRQYXJhbWV0ZXJVcGRhdGVQYXlsb2FkKHNlbmRlcl9pZCwgc291cmNlcyk7XHJcbiAgICAgICAgd2luZG93TWVzc2FnZUxpc3QuZm9yRWFjaChmdW5jdGlvbih3KSB7XHJcbiAgICAgICAgICAgIHcucG9zdE1lc3NhZ2UobXNnLCBsb2NhdGlvbi5vcmlnaW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFBhcmFtZXRlck1lc3NhZ2UoZSkge1xyXG4gICAgICAgIHZhciB1cGRhdGVPYmplY3RzID0gW107XHJcbiAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBKU09OLnBhcnNlKGUubWVzc2FnZS5wYXJhbWV0ZXJzKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtZXRlck9iamVjdCA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3Quc2V0VmFsdWUocGFyYW1ldGVyc1tuYW1lXS52YWx1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlT2JqZWN0cy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU9iamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdpbmRvd01lc3NhZ2VMaXN0ID0gW107XHJcbiAgICB2YXIgbGlzdGVuZXI7XHJcbiAgICB2YXIgc3RhdGUgPSAwO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICghd2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXMoZS5zb3VyY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGUuZGF0YS5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZXRQYXJhbWV0ZXJCeU5hbWVcIjpcclxuICAgICAgICAgICAgdmFyIHBhcmFtZXRlck9iamVjdDtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEucGFyYW1ldGVyLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJPYmplY3QgPSBvd25lci5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShlLmRhdGEucGFyYW1ldGVyLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyT2JqZWN0LnNldFZhbHVlKGUuZGF0YS5wYXJhbWV0ZXIudmFsdWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhlLmRhdGEuc2VuZGVyX2lkLCBbcGFyYW1ldGVyT2JqZWN0Lm5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNldFBhcmFtZXRlcnNCeU9iamVjdFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5wYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlT2JqZWN0cyA9IHNldFBhcmFtZXRlck1lc3NhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhlLmRhdGEuc2VuZGVyX2lkLCB1cGRhdGVPYmplY3RzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFBhcmFtZXRlcnNcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZS5kYXRhLm5hbWUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKGUuc291cmNlLCBlLmRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKGUuc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJVbmtub3duIG1lc3NhZ2UgdHlwZSBcXFwiXCIrZS5kYXRhLm1lc3NhZ2UrXCJcXFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcInVwZGF0ZUludGVyZmFjZXNcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGF1dG9tYXRpb25Pbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Pbmx5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlcztcclxuICAgICAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uT25seSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJOYW1lcyA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VzID0gcGFyYW1ldGVyTmFtZXMuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyYW0uYXV0b21hdGFibGUgJiYgcGFyYW0uZW5hYmxlZCA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXModW5kZWZpbmVkLCBzb3VyY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY2xvc2VXaW5kb3dzXCI6IHtcclxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUod2luZG93TWVzc2FnZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdpbmRvd01lc3NhZ2VMaXN0LnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5lbCBhbHJlYWR5IGNsb3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZWdpc3RlcldpbmRvd1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd01lc3NhZ2VMaXN0LmluY2x1ZGVzKHcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93TWVzc2FnZUxpc3Quc3BsaWNlKHdpbmRvd01lc3NhZ2VMaXN0LmluZGV4T2YodyksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2luZG93TWVzc2FnZUxpc3QucHVzaCh3KTtcclxuICAgICAgICAgICAgICAgIHNlbmRQYXJhbWV0ZXJVcGRhdGVzKHcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVtb3ZlV2luZG93XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih3KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93TWVzc2FnZUxpc3QuaW5jbHVkZXModykpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5zcGxpY2Uod2luZG93TWVzc2FnZUxpc3QuaW5kZXhPZih3KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7QmFzZVBsdWdpbn07XHJcbiIsImltcG9ydCB7QmFzZVBsdWdpbiwgU3ludGhlc2lzZXJCYXNlUGx1Z2luLCBQbHVnaW5GYWN0b3J5fSBmcm9tIFwiLi9wbHVnaW4tZmFjdG9yeVwiO1xyXG5cclxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9hZCBKU0FQLi4uXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWZpbmVcIik7XHJcbiAgICAgICAgZGVmaW5lKFwiSlNBUFwiLCBbXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9kdWxlXCIpO1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdFwiKTtcclxuICAgICAgICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJvb3QgPSB3aW5kb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvb3QuSlNBUCA9IGZhY3RvcnkoKTtcclxuICAgIH1cclxufSkodGhpcywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZhY3RvcnlcIik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFBsdWdpbkZhY3Rvcnk6IFBsdWdpbkZhY3RvcnksXHJcbiAgICAgICAgQmFzZVBsdWdpbjogQmFzZVBsdWdpbixcclxuICAgICAgICBTeW50aGVzaXNlckJhc2VQbHVnaW46IFN5bnRoZXNpc2VyQmFzZVBsdWdpblxyXG4gICAgfTtcclxufSk7XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtOdW1iZXJQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvTnVtYmVyUGFyYW1ldGVyLmpzXCI7XHJcbmltcG9ydCB7U3RyaW5nUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL1N0cmluZ1BhcmFtZXRlci5qc1wiO1xyXG5pbXBvcnQge0J1dHRvblBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtTd2l0Y2hQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvU3dpdGNoUGFyYW1ldGVyLmpzXCI7XHJcbmltcG9ydCB7TGlzdFBhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9MaXN0UGFyYW1ldGVyLmpzXCI7XHJcblxyXG52YXIgUGFyYW1ldGVyTWFuYWdlciA9IGZ1bmN0aW9uIChvd25lciwgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UpIHtcclxuICAgIHZhciBwYXJhbWV0ZXJMaXN0ID0gW107XHJcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kUGFyYW1ldGVyKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gcGFyYW1ldGVyTGlzdC5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkUGFyYW1ldGVyT2JqZWN0KCkge1xyXG4gICAgICAgIHZhciBvYmogPSB7fTtcclxuICAgICAgICBwYXJhbWV0ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb2JqW2UubmFtZV0gPSBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkUGFyYW1ldGVyKHBhcmFtLCBzZWxmKSB7XHJcbiAgICAgICAgdmFyIGV4aXN0cyA9IHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlID09PSBwYXJhbTtcclxuICAgICAgICB9LCBwYXJhbSk7XHJcbiAgICAgICAgaWYgKGV4aXN0cyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcGFyYW0uYWRkRXZlbnRMaXN0ZW5lcihcInBhcmFtZXRlcnNldFwiLCBzZWxmKTtcclxuICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5wdXNoKHBhcmFtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJoYW5kbGVFdmVudFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbCA9IGUuZGV0YWlsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRldGFpbC51cGRhdGVJbnRlcmZhY2VzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbkV4dGVybmFsSW50ZXJmYWNlLnVwZGF0ZUludGVyZmFjZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gXCJwYXJhbWV0ZXJzZXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicGFyYW1ldGVyc2V0XCIsIHtkZXRhaWw6IGRldGFpbC5wYXJhbWV0ZXJ9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdjcmVhdGVOdW1iZXJQYXJhbWV0ZXInOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJudW1iZXJcIiB8fCAobWluaW11bSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtaW5pbXVtICE9PSBcIm51bWJlclwiKSB8fCAobWF4aW11bSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtYXhpbXVtICE9PSBcIm51bWJlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgTnVtYmVyUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3JlYXRlU3RyaW5nUGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCAobWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heExlbmd0aCAhPT0gXCJudW1iZXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN0cmluZ1BhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3JlYXRlQnV0dG9uUGFyYW1ldGVyJzoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgQnV0dG9uUGFyYW1ldGVyKG93bmVyLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdjcmVhdGVTd2l0Y2hQYXJhbWV0ZXInOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtaW5TdGF0ZSAhPT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbWF4U3RhdGUgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN3aXRjaFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3JlYXRlTGlzdFBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgIUFycmF5LmlzQXJyYXkobGlzdE9mVmFsdWVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPZlZhbHVlcy5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvciAtIGRlZmF1bHQgdmFsdWUgbWlzc2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IExpc3RQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2NyZWF0ZVBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiVGhpcyBmdW5jdGlvbiBpcyBub3cgZGVwcmVjYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2dldFBhcmFtZXRlck5hbWUnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lcyA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyYW1ldGVyTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2gocGFyYW1ldGVyTGlzdFtpXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2dldFBhcmFtZXRlckJ5TmFtZSc6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kUGFyYW1ldGVyKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZ2V0UGFyYW1ldGVyT2JqZWN0Jzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2dldFBhcmFtZXRlck5hbWVzJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc2V0UGFyYW1ldGVyQnlOYW1lJzoge1xyXG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAobiwgdiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlciA9IGZpbmRQYXJhbWV0ZXIobik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RlbGV0ZVBhcmFtZXRlcic6IHtcclxuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmFtZXRlckxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPT09IG87XHJcbiAgICAgICAgICAgICAgICB9LCBvKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBleGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBvLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RlbGV0ZUFsbFBhcmFtZXRlcnMnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZXRQYXJhbWV0ZXJzQnlPYmplY3QnOiB7XHJcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvYmplY3QsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGtleSBpbiBvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcIm9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XS52YWx1ZSwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iamVjdFtrZXldID09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG9iamVjdFtrZXldID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyQnlOYW1lKGtleSwgb2JqZWN0W2tleV0sIHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCBcIiArIGtleSArIFwiOiBOb3QgYSB2YWxpZCBvYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICdwYXJhbWV0ZXJzJzoge1xyXG4gICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkUGFyYW1ldGVyT2JqZWN0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0LCB1c2UgLnNldFBhcmFtZXRlckJ5Li4uKClcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7UGFyYW1ldGVyTWFuYWdlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uUGFyYW1ldGVyKG93bmVyLCBuYW1lKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIik7XHJcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcInR5cGVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiQnV0dG9uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm9uY2xpY2tcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb25jbGljaztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwib25jbGljayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvbmNsaWNrID0gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbkJ1dHRvblBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xyXG5CdXR0b25QYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQnV0dG9uUGFyYW1ldGVyO1xyXG5cclxuZXhwb3J0IHtCdXR0b25QYXJhbWV0ZXJ9O1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvbi5qc1wiO1xyXG5cclxuZnVuY3Rpb24gTGlzdFBhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBsaXN0T2ZWYWx1ZXMsIHRvU3RyaW5nRnVuYykge1xyXG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIpO1xyXG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyLCBhdXRvbWF0aW9uO1xyXG4gICAgdmFyIG9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIHZhciBfaW5kZXggPSBsaXN0T2ZWYWx1ZXMuaW5kZXhPZihkZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFYodiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgIHZhciBpID0gbGlzdE9mVmFsdWVzLmluZGV4T2Yodik7XHJcbiAgICAgICAgaWYgKGkgPT09IHVuZGVmaW5lZCB8fCBpIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyhcIk5vdCBpbiBsaXN0IHJhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF9pbmRleCAhPT0gaSkge1xyXG4gICAgICAgICAgICBfaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4gICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkxpc3RcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGlzdFZhbHVlc1wiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RPZlZhbHVlcy5tYXAoZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUoYXVkaW9QYXJhbWV0ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RPZlZhbHVlc1tfaW5kZXhdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2ID0gX2luZGV4ICsgMTtcclxuICAgICAgICAgICAgICAgIGlmICh2ID49IGxpc3RPZlZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVjcmVtZW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IF9pbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gbGlzdE9mVmFsdWVzLmxlbmd0aC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgMCwgbGlzdFZhbHVlcy5sZW5ndGgsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLnN0YXJ0KHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgYmluZCBhdXRvbWF0aW9uIGFzIEF1ZGlvUGFyYW1ldGVyIGlzIG5vdCBhdXRvbWF0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQXJndW1lbnQgMSBpcyBub3QgYSB2YWxpZCBBdWRpb1BhcmFtZXRlciBvYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhdXRvbWF0aW9uID09IFwib2JqZWN0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuTGlzdFBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xyXG5MaXN0UGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExpc3RQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge0xpc3RQYXJhbWV0ZXJ9O1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9ufSBmcm9tIFwiLi9QYXJhbWV0ZXJBdXRvbWF0aW9uLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBOdW1iZXJQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJOdW1iZXJcIik7XHJcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XHJcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlLFxyXG4gICAgICAgIF9zdGVwU2l6ZTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChhdXRvbWF0aW9uICYmIGF1dG9tYXRpb24uZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyhcIkF1dG9tYXRpb24gaXMgZW5hYmxlZCwgY2Fubm90IHNldCB0aGUgdmFsdWUhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5taW5pbXVtKSB7XHJcbiAgICAgICAgICAgIHYgPSBNYXRoLm1heCh2LCB0aGlzLm1pbmltdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXhpbXVtKSB7XHJcbiAgICAgICAgICAgIHYgPSBNYXRoLm1pbih2LCB0aGlzLm1heGltdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3N0ZXBTaXplKSB7XHJcbiAgICAgICAgICAgIHYgPSBNYXRoLnJvdW5kKHYgLyBfc3RlcFNpemUpO1xyXG4gICAgICAgICAgICB2ID0gdiAqIF9zdGVwU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdiA9IHRoaXMudXBkYXRlKHYpO1xyXG4gICAgICAgIGlmIChhdWRpb1BhcmFtZXRlcikge1xyXG4gICAgICAgICAgICBpZiAoYXV0b21hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgb3duZXIuZmFjdG9yeS5jb250ZXh0LmN1cnJlbnRUaW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidHlwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJOdW1iZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtaW5pbXVtID0gbWF4aW11bSA9IF92YWx1ZSA9IF9zdGVwU2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtaW5pbXVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1heGltdW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heGltdW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbiAmJiBhdXRvbWF0aW9uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBvd25lci5mYWN0b3J5LmdldEN1cnJlbnRQcm9ncmFtVGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5nZXRDdXJyZW50VGltZVZhbHVlKHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RlcFNpemVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0ZXBTaXplO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAobikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShuKSB8fCBuIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgc3RlcCBzaXplXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3N0ZXBTaXplID0gbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXAgPT0gXCJvYmplY3RcIiAmJiBhcC52YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXAuc2V0VmFsdWVBdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aW9uUG9pbnRzLmdldFZhbHVlQXRUaW1lUG9pbnQodGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b21hdGlvblBvaW50c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihjb250ZXh0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5lbmFibGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGF1dG9tYXRpb24uZW5hYmxlZCA9IHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvdW5kQXVkaW9QYXJhbVwiOiB7XHJcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1BhcmFtZXRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhdXRvbWF0YWJsZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbk51bWJlclBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xyXG5OdW1iZXJQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyUGFyYW1ldGVyO1xyXG5cclxuZXhwb3J0IHtOdW1iZXJQYXJhbWV0ZXJ9O1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbnZhciBUaW1lUG9pbnQgPSBmdW5jdGlvbihvd25lciwgdGltZSwgdmFsdWUsIHRvU3RyaW5nRnVuYykge1xyXG4gICAgaWYgKHR5cGVvZiB0aW1lICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHRpbWUpIHx8IHRpbWUgPCAwKSB7XHJcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBUaW1lIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xyXG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcInRpbWVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRUaW1lKHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFZhbHVlKHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNldFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHYsIG93bmVyLm1pbmltdW0pLCBvd25lci5tYXhpbXVtKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRUaW1lXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh0KSAmJiB0ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lID0gdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJvd25lclwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBUaW1lUG9pbnRMaXN0ID0gZnVuY3Rpb24obWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xyXG4gICAgZnVuY3Rpb24gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xyXG4gICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcC50aW1lID09IHRpbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYXNQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpIHtcclxuICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5zb3J0KGZ1bmN0aW9uKGEsYikge1xyXG4gICAgICAgICAgICBpZiAoYS50aW1lID4gYi50aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBtaW5fdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUobWluX3ZhbHVlKSkge1xyXG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBtYXhfdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUobWF4X3ZhbHVlKSkge1xyXG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWF4X3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pbl92YWx1ZSA9PSBtYXhfdmFsdWUpIHtcclxuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1heF92YWx1ZSBjYW5ub3QgZXF1YWwgdG8gbWluX3ZhbHVlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heF92YWx1ZSA8IG1pbl92YWx1ZSkge1xyXG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gbWF4X3ZhbHVlXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIGF1dG9tYXRpb25Qb2ludHMgPSBbXTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImluc2VydFBvaW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHRpbWUpIHx8IHRpbWUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJUaW1lIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoYXNQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQWxyZWFkeSBhIHZhbHVlIGVudHJ5IGF0IHRpbWUgXCIrdGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW5fdmFsdWUpLCBtYXhfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gbmV3IFRpbWVQb2ludCh0aGlzLCB0aW1lLCB2YWx1ZSwgdG9TdHJpbmdGdW5jKTtcclxuICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMucHVzaChwb2ludCk7XHJcbiAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzID0gc29ydFBvaW50cyhhdXRvbWF0aW9uUG9pbnRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRQb2ludHNcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHN0YXJ0X3RpbWUsIGVuZF90aW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRfdGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kX3RpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZF90aW1lID0gSW5maW5pdHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5maWx0ZXIoZnVuY3Rpb24ocG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQudGltZSA+PSBzdGFydF90aW1lICYmIHBvaW50LnRpbWUgPCBlbmRfdGltZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlbGV0ZVBvaW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmRJbmRleChmdW5jdGlvbihwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID09IHRpbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cy5zcGxpY2UoaW5kZXgsIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdldFN0YXRpY1ZhbHVlQXNTdHJpbmdcIjoge1xyXG4gICAgICAgICAgICBcIndyaXRhYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJnZXRWYWx1ZUF0VGltZVBvaW50XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAodGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxlbmd0aFwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1pbmltdW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1pbl92YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtYXhpbXVtXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhfdmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidXBkYXRlUG9pbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IGF1dG9tYXRpb25Qb2ludHMuZmluZChmdW5jdGlvbihwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID09IHRpbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aW1lID09IFwibnVtYmVyXCIgJiYgb3B0aW9ucy50aW1lICE9IHBvaW50LnRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkEgdGltZS1wb2ludCBhbHJlYWR5IGV4aXN0cyBhdCBcXFwiXCIrU3RyaW5nKG9wdGlvbnMudGltZSkrXCJcXFwiIHNlY29uZHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC50aW1lID0gb3B0aW9ucy50aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cyA9IHNvcnRQb2ludHMoYXV0b21hdGlvblBvaW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQudmFsdWUgPSBvcHRpb25zLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgUGFyYW1ldGVyQXV0b21hdGlvbiA9IGZ1bmN0aW9uKHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xyXG4gICAgVGltZVBvaW50TGlzdC5jYWxsKHRoaXMsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpO1xyXG4gICAgdmFyIGVuYWJsZWQgPSBmYWxzZTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImVuYWJsZWRcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9ICh0ID09PSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiA9IGZ1bmN0aW9uIChvd25lciwgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBQYXJhbWV0ZXJBdXRvbWF0aW9uLmNhbGwodGhpcywgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcclxuICAgIGZ1bmN0aW9uIGxpbmVhckludGVycG9sYXRpb24odGltZSwgcG9pbnRBLCBwb2ludEIpIHtcclxuICAgICAgICB2YXIgdDEgPSBwb2ludEEudGltZTtcclxuICAgICAgICB2YXIgdDIgPSBwb2ludEIudGltZTtcclxuICAgICAgICB0aW1lIC09IHQxO1xyXG4gICAgICAgIHQyIC09IHQxO1xyXG4gICAgICAgIHQxID0gMDtcclxuXHJcbiAgICAgICAgdmFyIHAgPSB0aW1lL3QyO1xyXG4gICAgICAgIHJldHVybiBwb2ludEEudmFsdWUgKiAoMS1wKSArIHBvaW50Qi52YWx1ZSAqIHA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcclxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyhcIk5vIGF1dG9tYXRpb24gcG9pbnRzIGF2YWlsYWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHNbMF0udmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZmlyc3RQb2ludCA9IGF1dG9tYXRpb25Qb2ludHMucmVkdWNlKGZ1bmN0aW9uKHBvaW50LCBuZXh0UG9pbnQpIHtcclxuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0UG9pbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBhdXRvbWF0aW9uUG9pbnRzWzBdKTtcclxuICAgICAgICB2YXIgc2Vjb25kUG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPiBmaXJzdFBvaW50LnRpbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNlY29uZFBvaW50ID09PSB1bmRlZmluZWQgfHwgZmlyc3RQb2ludC50aW1lID4gdGltZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3RQb2ludC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpbmVhckludGVycG9sYXRpb24odGltZSwgZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KGF1dG9tYXRpb25Qb2ludHMsIHRpbWUsIGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBvd25lci51cGRhdGUoZ2V0Q3VycmVudFRpbWVWYWx1ZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSk7XHJcbiAgICAgICAgcGFyYW1ldGVyLnNldFZhbHVlQXRUaW1lKHN0YXJ0UG9zaXRpb24sIGNvbnRleHRUaW1lKTtcclxuICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xyXG4gICAgICAgICAgICBpZiAocC50aW1lID4gdGltZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBwLnRpbWUgLSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIHYgPSBvd25lci51cGRhdGUocC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodiwgdCtjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wKGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHRUaW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29udGV4dFRpbWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbWV0ZXIuY2FuY2VsU2NoZWR1bGVkVmFsdWVzKGNvbnRleHRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJnZXRDdXJyZW50VGltZVZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFRpbWVWYWx1ZSh0aGlzLmdldFBvaW50cygpLCB0aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdGFydFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCh0aGlzLmdldFBvaW50cygpLCB0aW1lLCBjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RvcFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHN0b3AoY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59O1xyXG5QYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGFyYW1ldGVyQXV0b21hdGlvbi5wcm90b3R5cGUpO1xyXG5QYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtZXRlckxpbmVhckF1dG9tYXRpb247XHJcblxyXG52YXIgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24gPSBmdW5jdGlvbiAob3duZXIsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xyXG4gICAgUGFyYW1ldGVyQXV0b21hdGlvbi5jYWxsKHRoaXMsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcclxuICAgICAgICBpZiAoYXV0b21hdGlvblBvaW50cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyhcIk5vIGF1dG9tYXRpb24gcG9pbnRzIGF2YWlsYWJsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25Qb2ludHNbMF0udmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmVhcmVzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xyXG4gICAgICAgICAgICBpZiAobmV4dFBvaW50LnRpbWUgPD0gdGltZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRQb2ludDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xyXG4gICAgICAgIHJldHVybiBuZWFyZXN0UG9pbnQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnQoYXV0b21hdGlvblBvaW50cywgdGltZSwgY29udGV4dFRpbWUpIHtcclxuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG93bmVyLnVwZGF0ZShnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKTtcclxuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xyXG4gICAgICAgIGF1dG9tYXRpb25Qb2ludHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIGlmIChwLnRpbWUgPiB0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG93bmVyLnVwZGF0ZShwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZUF0VGltZSh2LCB0K2NvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3AoY29udGV4dFRpbWUpIHtcclxuICAgICAgICBwYXJhbWV0ZXIuY2FuY2VsU2NoZWR1bGVkVmFsdWVzKGNvbnRleHRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJnZXRDdXJyZW50VGltZVZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0Q3VycmVudFRpbWVWYWx1ZSh0aGlzLmdldFBvaW50cygpLCB0aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdGFydFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSwgY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCh0aGlzLmdldFBvaW50cygpLCB0aW1lLCBjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RvcFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHN0b3AoY29udGV4dFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGFyYW1ldGVyQXV0b21hdGlvbi5wcm90b3R5cGUpO1xyXG5QYXJhbWV0ZXJTdGVwQXV0b21hdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbjtcclxuXHJcbmV4cG9ydCB7UGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiwgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb259O1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmZ1bmN0aW9uIFBsdWdpblBhcmFtZXRlcihvd25lciwgbmFtZSwgZGF0YVR5cGUpIHtcclxuICAgIHZhciB1cGRhdGUsIHRyYW5zbGF0ZSwgdHJpZ2dlcjtcclxuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xyXG4gICAgdXBkYXRlID0gdHJhbnNsYXRlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH07XHJcbiAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkge307XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidHJpZ2dlclBhcmFtZXRlclNldFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdHMgPSB7ZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUludGVyZmFjZXM6IHVwZGF0ZUludGVyZmFjZXNcclxuICAgICAgICAgICAgICAgIH19O1xyXG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwgb3B0cykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm5hbWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG5hbWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib3duZXJcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG93bmVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInVwZGF0ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIk11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmKDApID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJGdW5jdGlvbiBtdXN0IHJldHVybiBhIHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlID0gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0cmFuc2xhdGVcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZigwKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiRnVuY3Rpb24gbXVzdCByZXR1cm4gYSB2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IGY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidHJpZ2dlclwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyID0gZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGJpbmQgdGhpcyBwYXJhbWV0ZXIgdHlwZSB0byBhbiBhdWRpbyBwYXJhbWV0ZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1BsdWdpblBhcmFtZXRlcn07XHJcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cclxuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xyXG5cclxuZnVuY3Rpb24gU3RyaW5nUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJTdHJpbmdcIik7XHJcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA+IG1heExlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiU3RyaW5nIGxvbmdlciB0aGFuIFwiICsgbWF4TGVuZ3RoICsgXCIgY2hhcmFjdGVyc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xyXG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcInR5cGVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiU3RyaW5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gZGVmYXVsdFZhbHVlID0gbWF4TGVuZ3RoID0gX3ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1heExlbmd0aFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4TGVuZ3RoXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdiwgdXBkYXRlSW50ZXJmYWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmluZFRvQXVkaW9QYXJhbVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIgPSBhcDtcclxuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQXJndW1lbnQgMSBpcyBub3QgYSB2YWxpZCBBdWRpb1BhcmFtZXRlciBvYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblN0cmluZ1BhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xyXG5TdHJpbmdQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nUGFyYW1ldGVyO1xyXG5cclxuZXhwb3J0IHtTdHJpbmdQYXJhbWV0ZXJ9O1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcclxuaW1wb3J0IHtQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvbi5qc1wiO1xyXG5cclxuZnVuY3Rpb24gU3dpdGNoUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jKSB7XHJcbiAgICBQbHVnaW5QYXJhbWV0ZXIuY2FsbCh0aGlzLCBvd25lciwgbmFtZSwgXCJCdXR0b25cIik7XHJcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcclxuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XHJcbiAgICAgICAgaWYgKHYgPCBtaW5TdGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJTZXQgdmFsdWUgaXMgbGVzcyB0aGFuIFwiICsgbWluU3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodiA+IG1heFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIlNldCB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gXCIgKyBtYXhTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwidHlwZVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJTd2l0Y2hcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZXN0cm95XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBkZWZhdWx0VmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibWluU3RhdGVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IG1pblN0YXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1heFN0YXRlXCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhTdGF0ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2V0VmFsdWVcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImluY3JlbWVudFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPiBtYXhTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBtaW5TdGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlY3JlbWVudFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgLSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgPCBtaW5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBtYXhTdGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChhcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB0aGlzLnVwZGF0ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uID0gbmV3IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCBtaW5TdGF0ZSwgbWF4U3RhdGUsIHRvU3RyaW5nRnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLnN0YXJ0KHRpbWUsIGNvbnRleHRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9wXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgYmluZCBhdXRvbWF0aW9uIGFzIEF1ZGlvUGFyYW1ldGVyIGlzIG5vdCBhdXRvbWF0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiQXJndW1lbnQgMSBpcyBub3QgYSB2YWxpZCBBdWRpb1BhcmFtZXRlciBvYmplY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcclxuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhdXRvbWF0aW9uID09IFwib2JqZWN0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuU3dpdGNoUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XHJcblN3aXRjaFBhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTd2l0Y2hQYXJhbWV0ZXI7XHJcblxyXG5leHBvcnQge1N3aXRjaFBhcmFtZXRlcn07XHJcbiIsIi8vIFRoaXMgZGVmaW5lcyBhIG1hc3RlciBvYmplY3QgZm9yIGhvbGRpbmcgYWxsIHRoZSBwbHVnaW5zIGFuZCBjb21tdW5pY2F0aW5nXHJcbi8vIFRoaXMgb2JqZWN0IHdpbGwgYWxzbyBoYW5kbGUgY3JlYXRpb24gYW5kIGRlc3RydWN0aW9uIG9mIHBsdWdpbnNcclxuLypnbG9iYWxzIFByb21pc2UsIGRvY3VtZW50LCBjb25zb2xlLCBMaW5rZWRTdG9yZSwgV29ya2VyLCB3aW5kb3csIFhNTEh0dHBSZXF1ZXN0ICovXHJcbi8qZXNsaW50LWVudiBicm93c2VyICovXHJcbi8qIGpzaGludCBlc3ZlcnNpb246NiAqL1xyXG5cclxuLy8gTG9hZCBqc1h0cmFjdFxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAod2luZG93LmpzWHRyYWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgcy5zcmMgPSBcImh0dHBzOi8vZ2l0Y2RuLnh5ei9yZXBvL25pY2tqaWxsaW5ncy9qcy14dHJhY3QvbWFzdGVyL2pzWHRyYWN0LmpzXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHMpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuaW1wb3J0IExpbmtlZFN0b3JlIGZyb20gJy4vTGlua2VkU3RvcmUnO1xyXG5pbXBvcnQge0Jhc2VQbHVnaW59IGZyb20gJy4vYmFzZV9wbHVnaW4nO1xyXG5pbXBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn0gZnJvbSAnLi9zeW50aF9iYXNlJztcclxuXHJcbmZ1bmN0aW9uIFBsdWdpbkZhY3RvcnkoYXVkaW9fY29udGV4dCwgcm9vdFVSTCkge1xyXG4gICAgdmFyIHN1YkZhY3RvcmllcyA9IFtdLFxyXG4gICAgc3ludGhlc2lzZXJIb3N0cyA9IFtdLFxyXG4gICAgcGx1Z2luX3Byb3RvdHlwZXMgPSBbXSxcclxuICAgIHBsdWdpbnNMaXN0ID0gW10sXHJcbiAgICBjdXJyZW50UGx1Z2luSWQgPSAwLFxyXG4gICAgYXVkaW9TdGFydFByb2dyYW1UaW1lLFxyXG4gICAgYXVkaW9TdGFydENvbnRleHRUaW1lLFxyXG4gICAgYXVkaW9TdGFydGVkID0gZmFsc2U7XHJcblxyXG4gICAgLypcclxuICAgICAgICB0aGlzLmxvYWRSZXNvdXJjZS4gTG9hZCBhIHJlc291cmNlIGludG8gdGhlIGdsb2JhbCBuYW1lc3BhY2VcclxuXHJcbiAgICAgICAgQHBhcmFtIHJlc291cmNlT2JqZWN0OiBhIEpTIG9iamVjdCBob2xkaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuICAgICAgICAgICAgLnVybDogVVJMIG9mIHRoZSByZXNvdXJjZVxyXG4gICAgICAgICAgICAudGVzdDogZnVuY3Rpb24gdG8gY2FsbCwgcmV0dXJucyB0cnVlIGlmIHJlc291cmNlIGFscmVhZHkgbG9hZGVkLCBmYWxzZSBpZiBub3RcclxuICAgICovXHJcbiAgICB0aGlzLmxvYWRQcm90b3R5cGVNb2R1bGUgPSBmdW5jdGlvbihyZXNvdXJjZU9iamVjdCwgbXVzdE1vZHVsZSkge1xyXG4gICAgICAgIHZhciBmYWN0b3J5ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsLmRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGdsb2JhbC5kZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWwucmVxdWlyZShbcmVzb3VyY2VPYmplY3QudXJsXSwgZnVuY3Rpb24oZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsLm1vZHVsZSA9PSBcIm9iamVjdFwiICYmIGdsb2JhbC5tb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShnbG9iYWwucmVxdWlyZShyZXNvdXJjZU9iamVjdC51cmwpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIkNhbm5vdCBsb2FkIHVzaW5nIG1vZHVsYXIgc3lzdGVtc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZXhlY3V0YWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4ZWN1dGFibGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkuYWRkUHJvdG90eXBlKGV4ZWN1dGFibGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiSXMgbm90IGEgbW9kdWxlIHBsdWdpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAobXVzdE1vZHVsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiQ2Fubm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ291bGQgbm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkubG9hZFBsdWdpblNjcmlwdChyZXNvdXJjZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLmxvYWRSZXNvdXJjZSA9IGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdCAhPT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiRXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnVybCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwicmVzb3VyY2VPYmplY3QudXJsIG11c3QgYmUgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnRlc3QgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwicmVzb3VyY2VPYmplY3QudGVzdCBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc291cmNlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzb3VyY2VPYmplY3Qpe1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSByZXNvdXJjZU9iamVjdC50ZXN0KCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPT0gZmFsc2UgJiYgcmVzcG9uc2UgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcInJlc291cmNlT2JqZWN0LnRlc3QgbXVzdCByZXR1cm4gdHJ1ZSBvciBmYWxzZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc291cmNlT2JqZWN0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJlc291cmNlT2JqZWN0LnR5cGUgPSBcImphdmFzY3JpcHRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvdXJjZU9iamVjdC50eXBlID0gcmVzb3VyY2VPYmplY3QudHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlT2JqZWN0LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJqYXZhc2NyaXB0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KS50aGVuKGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuT2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkocmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93W3Jlc291cmNlT2JqZWN0LnJldHVybk9iamVjdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkocmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdpbmRvd1tyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3RdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIHR5cGUgXCIgKyBTdHJpbmcocmVzb3VyY2VPYmplY3QudHlwZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubG9hZFBsdWdpblNjcmlwdCA9IGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgIGlmIChyZXNvdXJjZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKFwicmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0IG11c3QgYmUgdGhlIG5hbWUgb2YgdGhlIHByb3RvdHlwZSBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHBsdWdpbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkUHJvdG90eXBlKHBsdWdpbik7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpIHtcclxuICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QudXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpID09PSBmYWxzZSAmJiByb290VVJMICE9PSB1bmRlZmluZWQgJiYgcm9vdFVSTC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAgICByZXNvdXJjZU9iamVjdC51cmwgPSByb290VVJMICsgcmVzb3VyY2VPYmplY3QudXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHJlc291cmNlT2JqZWN0LnVybCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC50ZXh0Q29udGVudCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvdXJjZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvcHlGYWN0b3J5KG5ld2NvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdjb250ZXh0LnNhbXBsZVJhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy9NYXliZSBub3QgYSByZWFsIEF1ZGlvQ29udGV4dFxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgYXVkaW8gY29udGV4dCBwcm92aWRlZFwiKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ld2NvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihuZXdjb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBCRmFjdG9yeSA9IG5ldyBQbHVnaW5GYWN0b3J5KG5ld2NvbnRleHQpO1xyXG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICAgICAgcGx1Z2luX3Byb3RvdHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvdG8pIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goQkZhY3RvcnkuYWRkUHJvdG90eXBlKHByb3RvLnByb3RvKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQkZhY3Rvcnk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obmV3RmFjdG9yeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3RmFjdG9yeTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgUGx1Z2luSW5zdGFuY2UgPSBmdW5jdGlvbiAoaWQsIHBsdWdpbl9ub2RlKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIF9ieXBhc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBldiA9IG5ldyBFdmVudFRhcmdldCgpO1xyXG4gICAgICAgIHZhciBfaW4gPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKSxcclxuICAgICAgICAgICAgX291dCA9IGF1ZGlvX2NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG5cclxuICAgICAgICBfaW4uY29ubmVjdChwbHVnaW5fbm9kZS5nZXRJbnB1dHMoKVswXSk7XHJcbiAgICAgICAgcGx1Z2luX25vZGUuZ2V0T3V0cHV0cygpWzBdLmNvbm5lY3QoX291dCk7XHJcbiAgICAgICAgcGx1Z2luX25vZGUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnlwYXNzRW5hYmxlKCkge1xyXG4gICAgICAgICAgICBfaW4uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBfaW4uY29ubmVjdChfb3V0KTtcclxuICAgICAgICAgICAgX2J5cGFzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbl9ub2RlLnByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBldi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImFsdGVyZGVsYXlcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBieXBhc3NEaXNhYmxlKCkge1xyXG4gICAgICAgICAgICBfaW4uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBfaW4uY29ubmVjdChwbHVnaW5fbm9kZS5nZXRJbnB1dHMoKVswXSk7XHJcbiAgICAgICAgICAgIF9ieXBhc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luX25vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcclxuICAgICAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnlwYXNzID0gZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gKHN0YXRlID09PSB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBfYnlwYXNzZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICBieXBhc3NFbmFibGUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ5cGFzc0Rpc2FibGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaXNCeXBhc3NlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlY29ubmVjdCA9IGZ1bmN0aW9uIChuZXdfbmV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QobmV3X25leHQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uIChuZXdfbmV4dCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZXh0X25vZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5ld19uZXh0ICE9PSB1bmRlZmluZWQgJiYgbmV3X25leHQuaW5wdXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSBuZXdfbmV4dDtcclxuICAgICAgICAgICAgICAgIF9vdXQuY29ubmVjdCh0aGlzLm5leHRfbm9kZS5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZXh0X25vZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgX291dC5kaXNjb25uZWN0KHRoaXMubmV4dF9ub2RlLmlucHV0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dF9ub2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwbHVnaW5fbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgICAgICBcImhhbmRsZUV2ZW50XCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGUudHlwZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihhLGIsYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldi5hZGRFdmVudExpc3RlbmVyKGEsYixjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdpZCc6IHtcclxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdub2RlJzoge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogcGx1Z2luX25vZGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2lucHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnb3V0cHV0Jzoge1xyXG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX291dDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2J5cGFzc2VkJzoge1xyXG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUGx1Z2luSW5zdGFuY2UucHJvdG90eXBlLmZhY3RvcnkgPSB0aGlzO1xyXG5cclxuICAgIHZhciBNaWRpU3ludGhlc2lzSW5zdGFuY2UgPSBmdW5jdGlvbihpZCwgc3ludGhOb2RlKSB7XHJcbiAgICAgICAgdmFyIF9vdXQgPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICBzeW50aE5vZGUuZ2V0T3V0cHV0cygpWzBdLmNvbm5lY3QoX291dCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3ludGhOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgICdpZCc6IHtcclxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdub2RlJzoge1xyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogc3ludGhOb2RlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdvdXRwdXQnOiB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfb3V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUGx1Z2luUHJvdG90eXBlID0gZnVuY3Rpb24gKHByb3RvLCBmYWN0b3J5KSB7XHJcblx0ICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgICduYW1lJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5uYW1lXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdwcm90byc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90b1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndmVyc2lvbic6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudmVyc2lvblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndW5pcXVlSUQnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdoYXNNaWRpSW5wdXQnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLmhhc01pZGlJbnB1dCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaGFzTWlkaU91dHB1dCc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUuaGFzTWlkaU91dHB1dCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGx1Z2luSW5zdGFuY2UgPSBhc3luYyBmdW5jdGlvbihvd25lciwgYXN5bmMpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBjcmVhdGVQbHVnaW5JbnN0YW5jZShvd25lcik7XHJcbiAgICAgICAgICAgIGlmIChhc3luYyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQbHVnaW5JbnN0YW5jZShvd25lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gd2FpdFVudGlsUmVhZHkoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hlY2tJc1JlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlBsdWdpbiBub3QgcmVhZHlcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IHByb3RvKGZhY3RvcnksIG93bmVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uaW5pdGlhbGlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luLmluaXRpYWxpc2UoKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbHVnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTtcclxuICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uaGFzTWlkaUlucHV0ICE9PSB0cnVlICYmIHBsdWdpbi5oYXNNaWRpT3V0cHV0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5ldyBQbHVnaW5JbnN0YW5jZShjdXJyZW50UGx1Z2luSWQrKywgcGx1Z2luKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luLmhhc01pZGlJbnB1dCA9PT0gdHJ1ZSAmJiBwbHVnaW4uaGFzTWlkaU91dHB1dCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBuZXcgTWlkaVN5bnRoZXNpc0luc3RhbmNlKGN1cnJlbnRQbHVnaW5JZCsrLCBwbHVnaW4pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk5vIEluc3RhbmNlIEhvbGRlciBBdmFpbGFibGUhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocGx1Z2luLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3BsdWdpbkluc3RhbmNlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAncHJvdG90eXBlT2JqZWN0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBzZWxmXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAndmVyc2lvbic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS52ZXJzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAndW5pcXVlSUQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudW5pcXVlSURcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdTZXNpb25EYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5TZXNzaW9uRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFjdG9yeS5Vc2VyRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvdG90eXBlT2JqZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJleHRlcm5hbEludGVyZmFjZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHBsdWdpbi5leHRlcm5hbEludGVyZmFjZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZmFjdG9yeS5yZWdpc3RlclBsdWdpbkluc3RhbmNlKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZFJlc291cmNlQ2hhaW4ocmVzb3VyY2VPYmplY3QsIHApIHtcclxuICAgICAgICAgICAgaWYgKCFwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgayA9IGxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBrLnRoZW4oZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0LnJlc291cmNlcyAhPT0gdW5kZWZpbmVkICYmIHJlc291cmNlT2JqZWN0LnJlc291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzb3VyY2VPYmplY3QucmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrID0gbG9hZFJlc291cmNlQ2hhaW4ocmVzb3VyY2VPYmplY3QucmVzb3VyY2VzW2ldLCBrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC50aGVuKGxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkU3R5bGVzaGVldCh1cmwpIHtcclxuICAgICAgICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgICAgICAgICBjc3Muc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcclxuICAgICAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcclxuICAgICAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGNzcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC5oYXNPd25Qcm9wZXJ0eShcImxlbmd0aFwiKSAmJiByZXNvdXJjZU9iamVjdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZU9iamVjdFtyZXNvdXJjZU9iamVjdC5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2VPYmplY3QuaGFzT3duUHJvcGVydHkoXCJyZXNvdXJjZXNcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0LnJlc291cmNlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VPYmplY3QudGVzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJlc291cmNlUHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBpZiAocHJvdG8ucHJvdG90eXBlLnJlc291cmNlcykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3RvLnByb3RvdHlwZS5yZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IHByb3RvLnByb3RvdHlwZS5yZXNvdXJjZXNbaV07XHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZS50eXBlID0gcmVzb3VyY2UudHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNvdXJjZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkU3R5bGVzaGVldChyZXNvdXJjZS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiamF2YXNjcmlwdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb21pc2UnOiBsb2FkUmVzb3VyY2VDaGFpbihyZXNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbXBsZXRlJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXN0JzogcmVjdXJzaXZlR2V0VGVzdChyZXNvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnByb21pc2UudGhlbihvYmplY3QuY29tcGxldGUuYmluZChvYmplY3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VQcm9taXNlcy5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBsb2FkIFwiICsgcmVzb3VyY2UudXJsICsgXCIsIGludmFsaWQgcmVzb3VyY2UudHlwZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRSZXNvdXJjZVByb21pc2VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VQcm9taXNlcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSXNSZWFkeSgpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNvdXJjZVByb21pc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VQcm9taXNlc1tpXS5zdGF0ZSAhPT0gMSB8fCAhcmVzb3VyY2VQcm9taXNlc1tpXS50ZXN0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZ1bmN0aW9uIHdhaXRVbnRpbFJlYWR5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVzb3VyY2VQcm9taXNlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmFkZFByb3RvdHlwZSA9IGZ1bmN0aW9uIChwbHVnaW5fcHJvdG8pIHtcclxuICAgICAgICB2YXIgZmFjdG9yeSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbl9wcm90byAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJUaGUgUHJvdG90eXBlIG11c3QgYmUgYSBmdW5jdGlvbiFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJNYWxmb3JtZWQgcGx1Z2luLiBOYW1lIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24gIT09IFwic3RyaW5nXCIgfHwgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS52ZXJzaW9uLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gVmVyc2lvbiBub3QgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRCAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlELmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gdW5pcXVlSUQgbm90IGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbl9wcm90byk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHBsdWdpbl9wcm90bykge1xyXG4gICAgICAgICAgICB2YXIgdGVzdE9iaiA9IHtcclxuICAgICAgICAgICAgICAgICdwcm90byc6IHBsdWdpbl9wcm90byxcclxuICAgICAgICAgICAgICAgICduYW1lJzogcGx1Z2luX3Byb3RvLnByb3RvdHlwZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgJ3ZlcnNpb24nOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24sXHJcbiAgICAgICAgICAgICAgICAndW5pcXVlSUQnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBwbHVnaW5fcHJvdG90eXBlcy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW07XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChwYXJhbSBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVbcGFyYW1dID09PSB0aGlzW3BhcmFtXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA9PT0gNDtcclxuICAgICAgICAgICAgfSwgdGVzdE9iaik7XHJcbiAgICAgICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIlRoZSBwbHVnaW4gbXVzdCBiZSB1bmlxdWUhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyBQbHVnaW5Qcm90b3R5cGUocGx1Z2luX3Byb3RvLCBmYWN0b3J5KTtcclxuICAgICAgICAgICAgcGx1Z2luX3Byb3RvdHlwZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHtcclxuICAgICAgICAgICAgICAgICdmYWN0b3J5Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZhY3RvcnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0UHJvdG90eXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0QXVkaW9QbHVnaW5Qcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IGZhbHNlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0TWlkaVN5bnRoUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0TWlkaVBsdWdpblByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gdHJ1ZSAmJiBwcm90by5oYXNNaWRpT3V0cHV0ID09IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGx1Z2luc0xpc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0QWxsUGx1Z2luc09iamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgJ2ZhY3RvcnknOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgJ3N1YkZhY3Rvcmllcyc6IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN1YkZhY3Rvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBvYmouc3ViRmFjdG9yaWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ3N1YkZhY3RvcnknOiBzdWJGYWN0b3JpZXNbaV0sXHJcbiAgICAgICAgICAgICAgICAncGx1Z2lucyc6IHN1YkZhY3Rvcmllc1tpXS5nZXRQbHVnaW5zKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlU3ViRmFjdG9yeSA9IGZ1bmN0aW9uKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FURUQgLSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgXFxcImNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyXFxcIlwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlcihjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3lTdWJGYWN0b3J5ID0gZnVuY3Rpb24oY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiREVQUkVDQVRFRCAtIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBcXFwiZGVzdHJveUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyXFxcIlwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcclxuICAgICAgICB2YXIgbm9kZSA9IG5ldyBBdWRpb1BsdWdpbkNoYWluTWFuYWdlcih0aGlzLCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcclxuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuU2Vzc2lvbkRhdGFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuVXNlckRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1YkZhY3Rvcmllcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmR1cGxpY2F0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24oc291cmNlQ2hhaW5NYW5hZ2VyLCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcclxuICAgICAgICB2YXIgcHJvbWlzZUNoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgc291cmNlQ2hhaW5NYW5hZ2VyLmdldFBsdWdpbnMoKS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbl9vYmplY3QpIHtcclxuICAgICAgICAgICAgcHJvbWlzZUNoYWluID0gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5jcmVhdGVQbHVnaW4ocGx1Z2luX29iamVjdC5wcm90b3R5cGVPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihuZXdQbHVnaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQbHVnaW4ubm9kZS5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChwbHVnaW5fb2JqZWN0Lm5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKFN1YkZhY3RvcnkpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBzdWJGYWN0b3JpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSwgU3ViRmFjdG9yeSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgc3ViRmFjdG9yaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIFN1YkZhY3RvcnkuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jcmVhdGVNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgICAgIGlmIChmYWN0b3J5ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZmFjdG9yeSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBob3N0ID0gbmV3IE1pZGlTeW50aGVzaXNlckhvc3QoZmFjdG9yeSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoaG9zdCwge1xyXG4gICAgICAgICAgICAnU2Vzc2lvbkRhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5TZXNzaW9uRGF0YVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnVXNlckRhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5Vc2VyRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3ludGhlc2lzZXJIb3N0cy5wdXNoKGhvc3QpO1xyXG4gICAgICAgIHJldHVybiBob3N0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3lNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24gKGhvc3QpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBzeW50aGVzaXNlckhvc3RzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sIGhvc3QpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHN5bnRoZXNpc2VySG9zdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgaG9zdC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyUGx1Z2luSW5zdGFuY2UgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAocGx1Z2luc0xpc3QuZmluZChmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHAgPT09IHRoaXM7XHJcbiAgICAgICAgICAgIH0sIGluc3RhbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJQbHVnaW4gSW5zdGFuY2Ugbm90IHVuaXF1ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGx1Z2luc0xpc3QucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dF90aW1lID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcclxuICAgICAgICAgICAgdmFyIHByb2dyYW1fdGltZSA9IHRoaXMuZ2V0Q3VycmVudFByb2dyYW1UaW1lKCk7XHJcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RhcnQoaW5zdGFuY2Uubm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kZWxldGVQbHVnaW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBwbHVnaW5zTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gcGx1Z2luc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgcFswXS5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLmNsb3NlV2luZG93cygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nZXRDdXJyZW50UHJvZ3JhbVRpbWUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lIC0gYXVkaW9TdGFydENvbnRleHRUaW1lICsgYXVkaW9TdGFydFByb2dyYW1UaW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0Q3VycmVudFByb2dyYW1UaW1lID0gZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgIGlmIChhdWRpb1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3coXCJNdXN0IHN0b3AgcGxheWJhY2sgdG8gc2V0IHRoZSBjdXJyZW50IHByb2dyYW0gdGltZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aW1lID09IFwibnVtYmVyXCIgJiYgdGltZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRQcm9ncmFtVGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuUGx1Z2luR1VJLnBvbGxBbGxQbHVnaW5zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwbHVnaW5BdWRpb1N0YXJ0KG5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKSB7XHJcbiAgICAgICAgbm9kZS5zdGFydC5jYWxsKG5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcclxuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG4pO1xyXG4gICAgICAgICAgICBpZiAocC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwLnN0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsdWdpbkF1ZGlvU3RvcChub2RlKSB7XHJcbiAgICAgICAgbm9kZS5zdG9wLmNhbGwobm9kZSk7XHJcbiAgICAgICAgbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcclxuICAgICAgICAgICAgaWYgKHAuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcC5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xyXG4gICAgICAgIHBsdWdpbnNMaXN0LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdGFydChuLm5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckF1ZGlvU3RvcCgpIHtcclxuICAgICAgICBwbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgIHBsdWdpbkF1ZGlvU3RvcChuLm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXVkaW9TdGFydCA9IGZ1bmN0aW9uIChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSkge1xyXG4gICAgICAgIGlmIChjb250ZXh0X3RpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb250ZXh0X3RpbWUgPSBhdWRpb19jb250ZXh0LmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvZ3JhbV90aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcHJvZ3JhbV90aW1lID0gMDtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQXNzdW1pbmcgc3RhcnQgdGltZSBhdCAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWF1ZGlvU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZShwcm9ncmFtX3RpbWUpO1xyXG4gICAgICAgICAgICBhdWRpb1N0YXJ0Q29udGV4dFRpbWUgPSBjb250ZXh0X3RpbWU7XHJcbiAgICAgICAgICAgIHRyaWdnZXJBdWRpb1N0YXJ0KHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcclxuICAgICAgICAgICAgYXVkaW9TdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hdWRpb1N0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQXVkaW9TdG9wKCk7XHJcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIEZlYXR1cmVNYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIE1hcHBpbmdzID0gW107XHJcblxyXG4gICAgICAgIHZhciBGZWF0dXJlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5vZGUubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gdGhpcy5wYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RmVhdHVyZU5vZGUobGlzdCwgY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3QuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUubmFtZSA9PT0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICB9LCBjaGVjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZGRGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSwgbGlzdCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgU291cmNlTWFwID0gZnVuY3Rpb24gKFNlbmRlciwgcGx1Z2luSW5zdGFjZSkge1xyXG4gICAgICAgICAgICB2YXIgTWFwcGluZ3MgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5nZXRTb3VyY2VJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW5JbnN0YWNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmdldFNlbmRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTZW5kZXI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZS5vdXRwdXRJbmRleCA9PT0gdGhpcy5vdXRwdXRJbmRleCAmJiBlLmZyYW1lU2l6ZSA9PT0gdGhpcy5mcmFtZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbmRlcigpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZpbmQoZmVhdHVyZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZiwgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGYrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZU5vZGUgPSBnZXRGZWF0dXJlTm9kZShsaXN0LCBmZWF0dXJlTGlzdFtmXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmVhdHVyZU5vZGUgfHwgKGZlYXR1cmVMaXN0LnBhcmFtZXRlcnMgJiYgZmVhdHVyZUxpc3RbZl0ucGFyYW1ldGVycy5sZW5ndGggIT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZSA9IGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVMaXN0W2ZdLCBsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMgJiYgZmVhdHVyZUxpc3RbZl0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUuZmVhdHVyZXMgPSByZWN1cnNpdmVGaW5kKGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpLCBvdXRwdXRMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgTWFwcGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRMaXN0W01hcHBpbmdzW2ldLm91dHB1dEluZGV4XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnJhbWVMaXN0ID0gb3V0cHV0TGlzdFtNYXBwaW5nc1tpXS5vdXRwdXRJbmRleF0uZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5mcmFtZVNpemUgPT09IHRoaXMuZnJhbWVTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIE1hcHBpbmdzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUxpc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogTWFwcGluZ3NbaV0uZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVMaXN0JzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdLnB1c2goZnJhbWVMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVMaXN0LmZlYXR1cmVMaXN0ID0gcmVjdXJzaXZlRmluZChNYXBwaW5nc1tpXS5nZXRGZWF0dXJlTGlzdCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNlbmRlci51cGRhdGVGZWF0dXJlcyhvdXRwdXRMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXAgPSBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGlmICghbWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1ZXN0b3JzJzogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdnZXRGZWF0dXJlTGlzdCc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBGID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnJlcXVlc3RvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGID0gRi5jb25jYXQodGhpcy5yZXF1ZXN0b3JzW2ldLmdldEZlYXR1cmVMaXN0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIE1hcHBpbmdzLnB1c2gobWFwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0UmVxdWVzdG9ySW5zdGFuY2UoKSA9PT0gdGhpcztcclxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3Rvckluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdG9yID0gbmV3IFJlcXVlc3Rvck1hcChyZXF1ZXN0b3JJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwLnJlcXVlc3RvcnMucHVzaChyZXF1ZXN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdG9yLmFkZEZlYXR1cmVzKGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VuZGVyKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpbmRGcmFtZU1hcCA9IGZ1bmN0aW9uIChvdXRwdXRJbmRleCwgZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZS5vdXRwdXRJbmRleCA9PT0gb3V0cHV0SW5kZXggJiYgZS5mcmFtZVNpemUgPT09IGZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBNYXBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChtYXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RvckluZGV4ID0gbWFwLnJlcXVlc3RvcnMuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSByZXF1ZXN0b3JJbnN0YW5jZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0b3JJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAucmVxdWVzdG9ycy5zcGxpY2UocmVxdWVzdG9ySW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXAgPSBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldFJlcXVlc3Rvckluc3RhbmNlKCkgPT09IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVxdWVzdG9ySW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdG9yLmRlbGV0ZUZlYXR1cmVzKGZlYXR1cmVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VuZGVyKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgUmVxdWVzdG9yTWFwID0gZnVuY3Rpb24gKHBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhciBGZWF0dXJlcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgUmVjZWl2ZXIgPSBwbHVnaW5JbnN0YW5jZS5ub2RlLmZlYXR1cmVNYXAuUmVjZWl2ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVxdWVzdG9ySW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVseUFkZEZlYXR1cmVzKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZU9iamVjdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdlIGhhdmUgbm90IGFscmVhZHkgbGlzdGVkIHRoZSBmZWF0dXJlXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVOb2RlID0gZ2V0RmVhdHVyZU5vZGUocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0W2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZlYXR1cmVOb2RlIHx8IChmZWF0dXJlT2JqZWN0W2ldLnBhcmFtZXRlcnMgJiYgZmVhdHVyZU9iamVjdFtpXS5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUgPSBhZGRGZWF0dXJlTm9kZShmZWF0dXJlT2JqZWN0W2ldLCByb290QXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZU9iamVjdFtpXS5mZWF0dXJlcyAhPT0gdW5kZWZpbmVkICYmIGZlYXR1cmVPYmplY3RbaV0uZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseUFkZEZlYXR1cmVzKGZlYXR1cmVOb2RlLmZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMocm9vdEFycmF5LCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGZlYXR1cmVPYmplY3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIGk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgZmVhdHVyZVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEZlYXR1cmVOb2RlKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzICYmIGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMocm9vdEFycmF5W2luZGV4XS5mZWF0dXJlcywgZmVhdHVyZU9iamVjdFtpbmRleF0uZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXMuc3BsaWNlKGluZGV4LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlbHlBZGRGZWF0dXJlcyhGZWF0dXJlcywgZmVhdHVyZU9iamVjdC5mZWF0dXJlcyk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMoRmVhdHVyZXMsIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGZWF0dXJlcztcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncGx1Z2luJzogZmVhdHVyZU9iamVjdC5wbHVnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHMubnVtYmVyT2ZDaGFubmVscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQb3N0RmVhdHVyZXMocm9vdE5vZGUsIHJlc3VsdHNMaXN0LCBGZWF0dXJlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgcmVzdWx0cyB0cmVlIHdoZXJlIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBwYXJhbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYW8oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5uYW1lID09PSBwYXJhbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwYXJhbSBpbiByZXN1bHRzTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3QuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IEZlYXR1cmVMaXN0LmZpbmQoYW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3RbcGFyYW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgbm9kZS5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlW3BhcmFtXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQb3N0RmVhdHVyZXMocm9vdE5vZGVbcGFyYW1dLCByZXN1bHRzTGlzdFtwYXJhbV0sIG5vZGUucmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGVbcGFyYW1dID0gcmVzdWx0c0xpc3RbcGFyYW1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gcmVjdXJzaXZlIG1hcCBmb3IgZWFjaCBjaGFubmVsXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmVhdHVyZU9iamVjdC5yZXN1bHRzLm51bWJlck9mQ2hhbm5lbHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZmVhdHVyZXMucmVzdWx0c1tpXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVBvc3RGZWF0dXJlcyhtZXNzYWdlLmZlYXR1cmVzLnJlc3VsdHNbaV0sIGZlYXR1cmVPYmplY3QucmVzdWx0cy5yZXN1bHRzW2ldLnJlc3VsdHMsIEZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBsdWdpbkluc3RhbmNlLm5vZGUuZmVhdHVyZU1hcC5SZWNlaXZlci5wb3N0RmVhdHVyZXMobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmluZFNvdXJjZUluZGV4KFNlbmRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTWFwcGluZ3MuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRTZW5kZXIoKSA9PT0gdGhpcztcclxuICAgICAgICAgICAgfSwgU2VuZGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzb3VyY2VNYXAgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgoc291cmNlKV07XHJcbiAgICAgICAgICAgIGlmICghc291cmNlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXAgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgocGx1Z2luU2VuZGVyKV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNvdXJjZU1hcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBsb2NhdGUgc291cmNlIG1hcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc291cmNlTWFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR0VORVJBTCBJTlRFUkZBQ0VcclxuICAgICAgICB0aGlzLmNyZWF0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIsIHBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IFNvdXJjZU1hcChTZW5kZXIsIHBsdWdpbkluc3RhbmNlKTtcclxuICAgICAgICAgICAgTWFwcGluZ3MucHVzaChub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZmluZFNvdXJjZUluZGV4KFNlbmRlcik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBmaW5kIHRoZSBzb3VyY2UgbWFwIGZvciB0aGUgcGx1Z2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE1hcHBpbmdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQbHVnaW5TZW5kZXIgPSBmdW5jdGlvbiAocGx1Z2luKSB7XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW4uY29uc3RydWN0b3IgPT09IFBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW4gPSBwbHVnaW4ubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGx1Z2luLmZlYXR1cmVNYXAuU2VuZGVyO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0b3IgPSByZXF1ZXN0b3IucGx1Z2luSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXHJcbiAgICAgICAgICAgIHZhciBwbHVnaW5TZW5kZXIgPSB0aGlzLmdldFBsdWdpblNlbmRlcihzb3VyY2UpO1xyXG4gICAgICAgICAgICB2YXIgc291cmNlTWFwID0gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpO1xyXG4gICAgICAgICAgICBzb3VyY2VNYXAucmVxdWVzdEZlYXR1cmVzKHJlcXVlc3RvciwgZmVhdHVyZU9iamVjdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0b3IuY29uc3RydWN0b3IgIT09IFBsdWdpbkluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0b3IgPSByZXF1ZXN0b3IucGx1Z2luSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBNYXBwaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXHJcbiAgICAgICAgICAgICAgICB2YXIgcGx1Z2luU2VuZGVyID0gdGhpcy5nZXRQbHVnaW5TZW5kZXIoc291cmNlKTtcclxuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VNYXAgPSBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcik7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yLCBmZWF0dXJlT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSkge307XHJcbiAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xyXG4gICAgICAgICAgICAvLyBSZWNlaXZlIGZyb20gdGhlIFNlbmRlciBvYmplY3RzXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZGlzdHJpYnV0ZWQgc2VhcmNoIGZvciByZXN1bHRzIHRyYW5zbWlzc2lvblxyXG5cclxuICAgICAgICAgICAgLy8gRmlyc3QgZ2V0IHRoZSBpbnN0YW5jZSBtYXBwaW5nIGZvciBvdXRwdXQvZnJhbWVcclxuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleChmZWF0dXJlT2JqZWN0LnBsdWdpbildO1xyXG4gICAgICAgICAgICBpZiAoIXNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgc291cmNlID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHRoaXMuZ2V0UGx1Z2luU2VuZGVyKGZlYXR1cmVPYmplY3QucGx1Z2luKSldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQbHVnaW4gSW5zdGFuY2Ugbm90IGxvYWRlZCFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGZyYW1lTWFwID0gc291cmNlLmZpbmRGcmFtZU1hcChmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LCBmZWF0dXJlT2JqZWN0LmZyYW1lU2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBmZWF0dXJlIG9iamVjdCB0byB0aGUgUmVxdWVzdG9yTWFwIG9iamVjdCB0byBoYW5kbGUgY29tbXNcclxuICAgICAgICAgICAgZnJhbWVNYXAucmVxdWVzdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnBvc3RGZWF0dXJlcyh0aGlzKTtcclxuICAgICAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuRmVhdHVyZU1hcCA9IG5ldyBGZWF0dXJlTWFwKCk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5GZWF0dXJlTWFwLCBcImZhY3RvcnlcIiwge1xyXG4gICAgICAgICd2YWx1ZSc6IHRoaXNcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzdG9yZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xyXG4gICAgICAgIHZhciBub2RlID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKHN0b3JlTmFtZSk7XHJcbiAgICAgICAgc3RvcmVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0U3RvcmVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdG9yZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZmluZFN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBzdG9yZXMuZmluZChmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5uYW1lID09PSBzdG9yZU5hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSBkZWZhdWx0IFN0b3Jlc1xyXG4gICAgdGhpcy5TZXNzaW9uRGF0YSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShcIlNlc3Npb25cIik7XHJcbiAgICB0aGlzLlVzZXJEYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiVXNlclwiKTtcclxuXHJcbiAgICAvLyBDcmVhdGVkIGZvciB0aGUgaW5wdXQgb2YgZWFjaCBTdWJGYWN0b3J5IHBsdWdpbiBjaGFpblxyXG4gICAgdmFyIFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyID0gZnVuY3Rpb24gKG93bmVyLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xyXG4gICAgICAgIHZhciBPdXRwdXROb2RlID0gZnVuY3Rpb24gKHBhcmVudCwgb3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBleHRyYWN0b3JzID0gW107XHJcbiAgICAgICAgICAgIHZhciBFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yID0gb3V0cHV0LmNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZmdFNpemUgPSBmcmFtZVNpemU7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlY3Vyc2l2ZVByb2Nlc3NpbmcgPSBvd25lci5yZWN1cnNpdmVQcm9jZXNzaW5nO1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGksIGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLnJlc3VsdFtlbnRyeS5uYW1lXSwgZW50cnkuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzID09PSBFeHRyYWN0b3JcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGRhdGEsIHRoaXMuZmVhdHVyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVzdWx0c1swXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5uZWwnOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IEpTT04ucGFyc2UoZGF0YS50b0pTT04oKSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGRhdGEubGVuZ3RoLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IGZlYXR1cmVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5jbGVhckNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZnJhbWVDYWxsYmFjayhvbmF1ZGlvY2FsbGJhY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgV29ya2VyRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjLCBmcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgZS5pbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzW2NdID0gZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YShjKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lcyc6IGZyYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNlKG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGZyYW1lU2l6ZSwgbXNnLmRhdGEucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKFwianNhcC9mZWF0dXJlLXdvcmtlci5qc1wiKTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2FtcGxlUmF0ZSc6IG91dHB1dC5jb250ZXh0LnNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IGZlYXR1cmVMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogdGhpcy5mcmFtZVNpemVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxpc3QgJiYgZmVhdHVyZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuc3RhdGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gcmVzcG9uc2UuYmluZChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IG9uYXVkaW9jYWxsYmFjay5iaW5kKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVqb2luRXh0cmFjdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IgPSBvdXRwdXQuY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZnJhbWVTaXplLCBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLCAxKTtcclxuICAgICAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNvbm5lY3Qob3V0cHV0LmNvbnRleHQuZGVzdGluYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnJhbWVTaXplXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBuZXcgV29ya2VyRXh0cmFjdG9yKG91dHB1dCwgZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gbmV3IEV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBleHRyYWN0b3JzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwicG9zdEZlYXR1cmVzXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZnJhbWVTaXplLCByZXN1bHRzSlNPTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiBmcmFtZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IHJlc3VsdHNKU09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuZmluZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGZyYW1lU2l6ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleHRyYWN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIE1VU1QgYmUgPT0gTk9UID09PVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoZS5mcmFtZVNpemUpID09PSBOdW1iZXIoY2hlY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucmVqb2luRXh0cmFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucmVqb2luRXh0cmFjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7fTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBvdXRwdXROb2RlcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIG87XHJcbiAgICAgICAgICAgIGZvciAobyA9IDA7IG8gPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3V0cHV0Tm9kZXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dE5vZGVzID0gbmV3IE91dHB1dE5vZGUob3duZXIsIG93bmVyLmNoYWluU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXRwdXROb2RlcywgXCJwb3N0RmVhdHVyZXNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAocmVzdWx0T2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhyZXN1bHRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzaTtcclxuICAgICAgICAgICAgICAgIGZvciAoc2kgPSAwOyBzaSA8IGZlYXR1cmVPYmplY3Rbb10ubGVuZ3RoOyBzaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzLmZpbmRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dHJhY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0b3IgPSBvdXRwdXROb2Rlcy5hZGRFeHRyYWN0b3IoZmVhdHVyZU9iamVjdFtvXVtzaV0uZnJhbWVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yLnNldEZlYXR1cmVzKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZlYXR1cmVMaXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVqb2luRXh0cmFjdG9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXROb2Rlcy5yZWpvaW5FeHRyYWN0b3JzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICBDYWxsZWQgYnkgdGhlIGluZGl2aWR1YWwgZXh0cmFjdG9yIGluc3RhbmNlczpcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVPYmplY3QgPSB7J2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcclxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IG91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOltdfVxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5wb3N0RmVhdHVyZXMoe1xyXG4gICAgICAgICAgICAgICAgJ3BsdWdpbic6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxyXG4gICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBmZWF0dXJlT2JqZWN0LnJlc3VsdHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gU2VuZCB0byBGYWN0b3J5XHJcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuY3JlYXRlU291cmNlTWFwKHRoaXMsIHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChQbHVnaW5GYWN0b3J5LCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcclxuXHJcbiAgICAgICAgdmFyIHBsdWdpbl9saXN0ID0gW10sXHJcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQgPSBjaGFpblN0YXJ0LFxyXG4gICAgICAgICAgICBwbHVnaW5DaGFpblN0b3AgPSBjaGFpblN0b3AsXHJcbiAgICAgICAgICAgIGZhY3RvcnlOYW1lID0gXCJcIixcclxuICAgICAgICAgICAgc3RhdGUgPSAxLFxyXG4gICAgICAgICAgICBkZWxheVNhbXBsZXMgPSAwLFxyXG4gICAgICAgICAgICBjaGFpblN0YXJ0RmVhdHVyZSA9IG5ldyBTdWJGYWN0b3J5RmVhdHVyZVNlbmRlcih0aGlzLCBQbHVnaW5GYWN0b3J5LkZlYXR1cmVNYXApLFxyXG4gICAgICAgICAgICBzZW1hbnRpY1N0b3JlcyA9IFtdLFxyXG4gICAgICAgICAgICBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpLFxyXG4gICAgICAgICAgICBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnBhcmVudCA9IFBsdWdpbkZhY3Rvcnk7XHJcbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KGNoYWluU3RvcCk7XHJcblxyXG4gICAgICAgIHRoaXMuVHJhY2tEYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiVHJhY2tcIik7XHJcbiAgICAgICAgdGhpcy5QbHVnaW5EYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiUGx1Z2luXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmZlYXR1cmVTZW5kZXIgPSBjaGFpblN0YXJ0RmVhdHVyZTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRGZWF0dXJlQ2hhaW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlYnVpbGQoKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gMCxcclxuICAgICAgICAgICAgICAgIGwgPSBwbHVnaW5fbGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHBsdWdpbl9saXN0W2krK107XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dE5vZGUgPSBwbHVnaW5fbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlLnJlY29ubmVjdChuZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGlzb2xhdGUoKSB7XHJcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGN1dENoYWluKCkge1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luX2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KHBsdWdpbl9saXN0WzBdLmlucHV0KTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0W3BsdWdpbl9saXN0Lmxlbmd0aCAtIDFdLm91dHB1dC5kaXNjb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmRpc2Nvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGpvaW5DaGFpbigpIHtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbl9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5fbGlzdFswXS5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hhaW5TdGFydEZlYXR1cmUucmVqb2luRXh0cmFjdG9ycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ieXBhc3NQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX2luc3RhbmNlLCBzdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpcyBhIG1lbWJlciBvZiB0aGlzIGNoYWluXHJcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbGlzdC5pbmNsdWRlcyhwbHVnaW5faW5zdGFuY2UpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsdWdpbl9pbnN0YW5jZS5ieXBhc3Moc3RhdGUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UHJvdG90eXBlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldFByb3RvdHlwZXMoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldEZhY3RvcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVjb25uZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGx1Z2luX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVBsdWdpbihwbHVnaW5fbGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGlmIChyZWNvbm5lY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUGx1Z2luIGNyZWF0aW9uIC8gZGVzdHJ1Y3Rpb25cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGROZXdQbHVnaW4ocHJvdG90eXBlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCAoXCJTdWJGYWN0b3J5IGhhcyBiZWVuIGRlc3Ryb3llZCEgQ2Fubm90IGFkZCBuZXcgcGx1Z2luc1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGVPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3RvdHlwZU9iamVjdC5jcmVhdGVQbHVnaW5JbnN0YW5jZShzZWxmLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhub2RlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUcmFja0RhdGEnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5UcmFja0RhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiAocHJvdG90eXBlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZGlkIG5vdCBnZXQgY3JlYXRlZCEgQWJvcnRpbmdcIik7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY3V0Q2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBpc29sYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgc2VsZik7XHJcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZVBsdWdpbiA9IGZ1bmN0aW9uKHBsdWdpbl9vYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRQbHVnaW5JbmRleChwbHVnaW5fb2JqZWN0KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGN1dENoYWluKCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbHRlcmRlbGF5XCIsIHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLnN0b3AuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLm9udW5sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLmRlY29uc3RydWN0LmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBpc29sYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XHJcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBsdWdpbihwbHVnaW5fb2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQuZGVsZXRlUGx1Z2luKHBsdWdpbl9vYmplY3QuaWQpO1xyXG4gICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsdWdpbl9saXN0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0QWxsUGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEFsbFBsdWdpbnNPYmplY3QoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmdldFBsdWdpbkluZGV4ID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGx1Z2luX2xpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIHBsdWdpbl9vYmplY3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QsIG5ld19pbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFBsdWdpbkluZGV4KHBsdWdpbl9vYmplY3QpLFxyXG4gICAgICAgICAgICAgICAgb2JqLCBob2xkTG93LCBob2xkSGlnaCwgaTtcclxuICAgICAgICAgICAgaWYgKFBsdWdpbkZhY3RvcnkuZ2V0QWxsUGx1Z2lucygpLmluY2x1ZGVzKHBsdWdpbl9vYmplY3QpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3V0Q2hhaW4oKTtcclxuICAgICAgICAgICAgaXNvbGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAocGx1Z2luX29iamVjdC5ub2RlLm93bmVyICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbnQgc3ViLWZhY3RvcnlcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vd25lci5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgb2JqID0gW3BsdWdpbl9vYmplY3RdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gcGx1Z2luX2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3X2luZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdCA9IG9iai5jb25jYXQocGx1Z2luX2xpc3QpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld19pbmRleCA+PSBwbHVnaW5fbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gcGx1Z2luX2xpc3QuY29uY2F0KG9iaik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBob2xkTG93ID0gcGx1Z2luX2xpc3Quc2xpY2UoMCwgbmV3X2luZGV4KTtcclxuICAgICAgICAgICAgICAgIGhvbGRIaWdoID0gcGx1Z2luX2xpc3Quc2xpY2UobmV3X2luZGV4KTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gaG9sZExvdy5jb25jYXQob2JqLmNvbmNhdChob2xkSGlnaCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYnVpbGQoKTtcclxuICAgICAgICAgICAgam9pbkNoYWluKCk7XHJcbiAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbmxvYWRlZC5jYWxsKHBsdWdpbl9vYmplY3Qubm9kZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvcHlQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0LCBjb3B5X2luZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChjb3B5X2luZGV4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvcHlfaW5kZXggPSBwbHVnaW5fbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb3B5X2luZGV4ICE9IFwibnVtYmVyXCIgfHwgY29weV9pbmRleCA8IDAgfHwgY29weV9pbmRleCA+IHBsdWdpbl9saXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3coXCJQbHVnaW4gY29weSBpbmRleCBvdXRzaWRlIG9mIHRoZSBjaGFpbiBzY29wZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkTmV3UGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3QocGx1Z2luX29iamVjdC5ub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyT2JqZWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgY3V0Q2hhaW4oKTtcclxuICAgICAgICAgICAgICAgIGlzb2xhdGUoKTtcclxuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShjb3B5X2luZGV4LCAwLCBub2RlKTtcclxuICAgICAgICAgICAgICAgIHJlYnVpbGQoKTtcclxuICAgICAgICAgICAgICAgIGpvaW5DaGFpbigpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xyXG4gICAgICAgICAgICB2YXIgbCA9IGxpc3QubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgaSwgZW50cnk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5ID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZS5yZXN1bHRbZW50cnkubmFtZV0sIGVudHJ5LmZlYXR1cmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVsYXlDb21wZW5zYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgICAgICBwbHVnaW5fbGlzdC5maWx0ZXIoZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXBsdWdpbi5pc0J5cGFzc2VkKCk7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz0gcGx1Z2luLm5vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN1bTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc3VtID0gZ2V0RGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKGRlbGF5U2FtcGxlcyAhPSBzdW0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5U2FtcGxlcyA9IHN1bTtcclxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlbGF5U2FtcGxlcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICAgICAgJ2NoYWluU3RhcnQnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBjaGFpblN0YXJ0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdjaGFpblN0b3AnOiB7XHJcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBjaGFpblN0b3BcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ1cGRhdGVEZWxheUNvbXBlbnNhdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJwcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgaXMgcmVhZC1vbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2Vjb25kc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMvUGx1Z2luRmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgaXMgcmVhZC1vbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnbmFtZSc6IHtcclxuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlOYW1lO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5TmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3JlY3Vyc2l2ZVByb2Nlc3NpbmcnOiB7XHJcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVQcm9jZXNzaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnaGFuZGxlRXZlbnQnOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwiYWx0ZXJkZWxheVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgTWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZnVuY3Rpb24gYnVpbGROZXdTeW50aGVzaXNlck9iamVjdChwcm90b3R5cGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGZhY3RvcnkuZGVsZXRlUGx1Z2luKG1pZGlTeW50aFNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGVPYmplY3QuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZU9iamVjdC5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QgKFwiUHJvdG90eXBlIGlzIG5vdCBhIE1pZGlTeW50aGVzaXMgdHlwZS4gaGFzTWlkaUlucHV0IG11c3QgYmUgdHJ1ZSBhbmQgaGFzTWlkaU91dHB1dCBtdXN0IGJlIGZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHNlbGYsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RyYWNrRGF0YSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzZWxmLlRyYWNrRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWlkaVN5bnRoU2xvdDtcclxuICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBbXTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgICAgICAgIFwiY29ubmVjdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbk5vZGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGRlZmluZSBhbiBBdWRpb05vZGUgb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RzID0gY29ubmVjdGlvbnMuZmluZChmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0ICYmIGNvbm4uaW5wdXQgPT0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk5vZGU6ZGVzdGluYXRpb25Ob2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0Om91dHB1dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OmlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1JREkgU3ludGhlc2lzZXIgaXMgbm90IGxvYWRlZCwgY29ubmVjdGlvbnMgd2lsbCBiZSB2YWxpZGF0ZWQgb24gbG9hZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkaXNjb25uZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZGVzdGluYXRpb25Ob2RlLCBvdXRwdXQsIGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uTm9kZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGRlc3RpbmF0aW9uTm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5vdXRwdXQgPT0gb3V0cHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRlc3RpbmF0aW9uTm9kZSA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvdXRwdXQgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgaW5wdXQgPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUsIGNvbm4ub3V0cHV0LCBjb25uLmlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNjaGVkdWxlRXZlbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihtc2csIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuc2NoZWR1bGVFdmVudChtc2csIHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiTUlESSBTeW50aGVzaXNlciBub3QgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJjYW5jZWxBbGxFdmVudHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmNhbmNlbEFsbEV2ZW50cyh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibWlkaVN5bnRoZXNpc2VyXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBzZXQgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibG9hZE1pZGlTeW50aGVzaXNlck1vZHVsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZS5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCAoXCJQcm90b3R5cGUgaXMgbm90IGEgTWlkaVN5bnRoZXNpcyB0eXBlLiBoYXNNaWRpSW5wdXQgbXVzdCBiZSB0cnVlIGFuZCBoYXNNaWRpT3V0cHV0IG11c3QgYmUgZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHByb3RvdHlwZU9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGROZXdTeW50aGVzaXNlck9iamVjdC5jYWxsKHNlbGYsIHByb3RvdHlwZU9iamVjdCkuY2F0Y2goZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3QgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbm4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCwgY29ubi5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFBsdWdpblVzZXJJbnRlcmZhY2VNZXNzYWdlSHViID0gKGZ1bmN0aW9uKGZhY3Rvcnkpe1xyXG4gICAgICAgIGZ1bmN0aW9uIGJ1aWxkUGx1Z2luSW50ZXJmYWNlKHBsdWdpbl9vYmplY3QsIGludGVyZmFjZV9vYmplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICAgICAgICAgIGlmcmFtZS5zcmMgPSBpbnRlcmZhY2Vfb2JqZWN0LnNyYztcclxuICAgICAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3Qud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IGludGVyZmFjZV9vYmplY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGludGVyZmFjZV9vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gaW50ZXJmYWNlX29iamVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gaWZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0SW50ZXJmYWNlKHVybCwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgICAgICBkZWZhdWx0X2ludGVyZmFjZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRfaW50ZXJmYWNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBwb2xsQWxsUGx1Z2lucygpIHtcclxuICAgICAgICAgICAgZmFjdG9yeS5nZXRBbGxQbHVnaW5zKCkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcclxuICAgICAgICAgICAgICAgIHBsdWdpbi5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLnVwZGF0ZUludGVyZmFjZXModHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGRlZmF1bHRfaW50ZXJmYWNlID0ge1xyXG4gICAgICAgICAgICBzcmM6IFwianNhcF9kZWZhdWx0Lmh0bWxcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHtcclxuICAgICAgICAgICAgXCJzZXREZWZhdWx0SW50ZXJmYWNlXCI6IHNldERlZmF1bHRJbnRlcmZhY2UsXHJcbiAgICAgICAgICAgIFwiYnVpbGRQbHVnaW5JbnRlcmZhY2VcIjpidWlsZFBsdWdpbkludGVyZmFjZSxcclxuICAgICAgICAgICAgXCJwb2xsQWxsUGx1Z2luc1wiOiBwb2xsQWxsUGx1Z2luc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkodGhpcyk7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIFwiY29udGV4dFwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogYXVkaW9fY29udGV4dFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJoYXNBdWRpb1N0YXJ0ZWRcIjoge1xyXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdWRpb1N0YXJ0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicGx1Z2luUm9vdFVSTFwiOiB7XHJcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdFVSTCA9IHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RVUkw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHJvb3QgVVJMIHdpdGhvdXQgYSBzdHJpbmdcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3JlYXRlRmFjdG9yeUNvcHlcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weUZhY3RvcnkoY29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3ViRmFjdG9yaWVzXCI6IHtcclxuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViRmFjdG9yaWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIlBsdWdpbkdVSVwiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogUGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtCYXNlUGx1Z2luLCBTeW50aGVzaXNlckJhc2VQbHVnaW4sIFBsdWdpbkZhY3Rvcnl9O1xyXG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXHJcbmltcG9ydCB7QmFzZVBsdWdpbn0gZnJvbSBcIi4vYmFzZV9wbHVnaW5cIjtcclxuXHJcbnZhciBTeW50aGVzaXNlckJhc2VQbHVnaW4gPSBmdW5jdGlvbihmYWN0b3J5LCBvd25lcilcclxue1xyXG4gICAgdmFyIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gZmFsc2U7XHJcbiAgICB2YXIgaGFzV2FybmVkQ2FuY2VsTm90U2V0ID0gZmFsc2U7XHJcbiAgICBCYXNlUGx1Z2luLmNhbGwodGhpcywgZmFjdG9yeSwgb3duZXIpO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcclxuICAgICAgICBcImFkZElucHV0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGFkZCBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlbGV0ZUlucHV0XCI6IHtcclxuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGRlbGV0ZSBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNjaGVkdWxlRXZlbnRcIjoge1xyXG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChtc2csIGNvbnRleHRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZFNjaGVkdWxlTm90U2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiV0FSTklORyAtIC5zY2hlZHVsZUV2ZW50IGlzIG5vdCBvdmVycmlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ3cml0YWJsZVwiOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNhbmNlbEFsbEV2ZW50c1wiOiB7XHJcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZENhbmNlbE5vdFNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybmluZyhcIldBUk5JTkcgLSAuY2FuY2VsQWxsRXZlbnRzIGlzIG5vdCBvdmVycmlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5TeW50aGVzaXNlckJhc2VQbHVnaW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlUGx1Z2luLnByb3RvdHlwZSk7XHJcblN5bnRoZXNpc2VyQmFzZVBsdWdpbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW50aGVzaXNlckJhc2VQbHVnaW47XHJcblxyXG5leHBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=