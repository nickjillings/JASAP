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
                    if (automation && automation.enabled) {
                        var t = owner.factory.getCurrentProgramTime();
                        return automation.getCurrentTimeValue(t);
                    }
                    return this.translate(audioParameter.value);
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
                "value": function(msg, t) {
                    if (midiSynthSlot) {
                        midiSynthSlot.node.cancelAllEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU0FQL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0pTQVAvKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vSlNBUC8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL0xpbmtlZFN0b3JlLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvYmFzZV9wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJNYW5hZ2VyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9CdXR0b25QYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL0xpc3RQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL051bWJlclBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGFyYW1ldGVyQXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BhcmFtZXRlcnMvUGx1Z2luUGFyYW1ldGVyLmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanMiLCJ3ZWJwYWNrOi8vSlNBUC8uL3NyYy9wYXJhbWV0ZXJzL1N3aXRjaFBhcmFtZXRlci5qcyIsIndlYnBhY2s6Ly9KU0FQLy4vc3JjL3BsdWdpbi1mYWN0b3J5LmpzIiwid2VicGFjazovL0pTQVAvLi9zcmMvc3ludGhfYmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFNEQ7Ozs7Ozs7Ozs7Ozs7QUMxVTVEO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUNBQXFDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHNDQUFzQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25F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QUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUUwRDs7Ozs7Ozs7Ozs7Ozs7QUM1ekQxRDtBQUFBO0FBQUE7QUFBQTtBQUN5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0RBQWdELHVEQUFVO0FBQzFEOztBQUUrQiIsImZpbGUiOiJKU0FQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbW9kdWxlLmpzXCIpO1xuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKmdsb2JhbHMgZG9jdW1lbnQgKi9cbi8qZXNsaW50LWVudiBicm93c2VyICovXG5cbnZhciBMaW5rZWRTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcbiAgICAvLyBTdG9yZSBmb3IgdGhlIHNlbWFudGljIHRlcm1zLCBlYWNoIHN0b3JlIGhvbGRzIGl0cyBvd24gZGF0YSB0cmVlXG4gICAgLy8gVGVybXMgYXJlIGFkZGVkIGFzIGtleS92YWx1ZSBwYXJpcyB0byBhIHJvb3Qgbm9kZVxuICAgIHZhciByb290ID0ge307XG5cbiAgICBmdW5jdGlvbiBvYmplY3RUb1hNTChvYmosIHJvb3QsIGRvYykge1xuICAgICAgICAvLyBVc2VkIGlmIGFuIG9iamVjdCB3YXMgcGFzc2VkIGFzIGEgdGVybSB2YWx1ZVxuICAgICAgICB2YXIgdGVybTtcbiAgICAgICAgZm9yICh0ZXJtIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Rlcm1dID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2NOb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3Rlcm1dLnRvWE1MKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NOb2RlID0gb2JqW3Rlcm1dLnRvWE1MKGRvYyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NOb2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGVybSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmFwcGVuZENoaWxkKGRvY05vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ialt0ZXJtXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVRvWE1MKG9ialt0ZXJtXSwgZG9jTm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwob2JqW3Rlcm1dLCBkb2NOb2RlLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9jTm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUodGVybSwgb2JqW3Rlcm1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheVRvWE1MKGFyciwgcm9vdCwgZG9jKSB7XG4gICAgICAgIC8vIFVzZWQgdG8gY29udmVydCBhbiBhcnJheSB0byBhIGxpc3Qgb2YgWE1MIGVudHJpZXNcbiAgICAgICAgdmFyIGFsbF9udW1iZXJzID0gdHJ1ZSxcbiAgICAgICAgICAgIGFsbF9zdHJpbmdzID0gdHJ1ZSxcbiAgICAgICAgICAgIGksIGwgPSBhcnIubGVuZ3RoO1xuICAgICAgICBhbGxfbnVtYmVycyA9IGFyci5ldmVyeShmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSBcIm51bWJlclwiO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxsX3N0cmluZ3MgPSBhcnIuZXZlcnkoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhbGxfbnVtYmVycyB8fCBhbGxfc3RyaW5ncykge1xuICAgICAgICAgICAgLy8gQW4gYXJyYXkgb2YgbnVtYmVycyBvciBzdHJpbmdzXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoYSwgaSkge1xuICAgICAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKFwiaW5kZXgtXCIgKyBpLCBhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgICAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGkpO1xuICAgICAgICAgICAgICAgIG9iamVjdFRvWE1MKGEsIG5vZGUsIGRvYyk7XG4gICAgICAgICAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlTmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc2V0JzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmVOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHN0b3JlTmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJOYW1lIGlzIGFscmVhZHkgc2V0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2FkZFRlcm0nOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRlcm0gIT09IFwic3RyaW5nXCIgJiYgdGVybS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidGVybSBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByb290W3Rlcm1dID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdhZGRUZXJtcyc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtc09iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybXNPYmplY3QgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiYWRkVGVybXMgdGFrZXMgYW4gb2JqZWN0IG9mIHRlcm0vdmFsdWUgcGFpcnNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0ZXJtO1xuICAgICAgICAgICAgICAgIGZvciAodGVybSBpbiB0ZXJtc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVybXNPYmplY3QuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVGVybSh0ZXJtLCB0ZXJtc09iamVjdFt0ZXJtXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdkZWxldGVUZXJtJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRlcm0odGVybSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2dldFRlcm0nOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAodGVybSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGVybSAhPT0gXCJzdHJpbmdcIiAmJiB0ZXJtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0ZXJtIG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByb290W3Rlcm1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnaGFzVGVybSc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXJtICE9PSBcInN0cmluZ1wiICYmIHRlcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRlcm0gbXVzdCBiZSBhIHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3QuaGFzT3duUHJvcGVydHkodGVybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICd0b0pTT04nOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocm9vdCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndG9YTUwnOiB7XG4gICAgICAgICAgICAndmFsdWUnOiBmdW5jdGlvbiAoZG9jKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2MpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQobnVsbCwgc3RvcmVOYW1lLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGRvYy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0VG9YTUwocm9vdCwgbm9kZSwgZG9jKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge0xpbmtlZFN0b3JlfTtcbiIsIi8vIEFkZCBnZXRJbnB1dHMgdG8gYWxsIEF1ZGlvTm9kZXMgdG8gZWFzZSBkZXBsb3ltZW50XG4vKmdsb2JhbHMgQXVkaW9Ob2RlLCBXb3JrZXIsIGNvbnNvbGUsIHdpbmRvdywgZG9jdW1lbnQsIFByb21pc2UsIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLypqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BhcmFtZXRlck1hbmFnZXJ9IGZyb20gXCIuL3BhcmFtZXRlck1hbmFnZXIuanNcIjtcblxuaWYgKHR5cGVvZiBBdWRpb05vZGUgPT09IFwiZnVuY3Rpb25cIiAmJiB3aW5kb3cuaW1wb3J0U2NyaXB0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgQXVkaW9Ob2RlLnByb3RvdHlwZS5nZXRJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbdGhpc107XG4gICAgfTtcbn1cblxuLy8gVGhpcyBzaG91bGQgc2ltcGx5IGRlZmluZSB0aGUgQmFzZVBsdWdpbiBmcm9tIHdoaWNoIGN1c3RvbSBwbHVnaW5zIGNhbiBiZSBidWlsdCBmcm9tXG52YXIgQmFzZVBsdWdpbiA9IGZ1bmN0aW9uKGZhY3RvcnksIG93bmVyKSB7XG4gICAgdmFyIGlucHV0TGlzdCA9IFtdLFxuICAgICAgICBvdXRwdXRMaXN0ID0gW10sXG4gICAgICAgIHBPd25lciA9IG93bmVyLFxuICAgICAgICBkZWxheVNhbXBsZXMgPSAwLFxuICAgICAgICBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpLFxuICAgICAgICBleHRlcm5hbEludGVyZmFjZSA9IG5ldyBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViKHRoaXMpO1xuICAgIGlmICh0aGlzLmNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBmYWN0b3J5LmNvbnRleHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cbiAgICB0aGlzLmZlYXR1cmVNYXAgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZSh0aGlzKTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVyTWFuYWdlcih0aGlzLCBleHRlcm5hbEludGVyZmFjZSk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXJhbWV0ZXJzZXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCB7ZGV0YWlsOiBlLmRldGFpbH0pKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUlPKG5vZGUsIGxpc3QpIHtcbiAgICAgICAgdmFyIGkgPSBsaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgPT09IHRoaXM7XG4gICAgICAgIH0sIG5vZGUpO1xuICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlucHV0TGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gaW5wdXRMaXN0O1xuICAgIH07XG4gICAgdGhpcy5kZWxldGVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBkZWxldGVJTyhub2RlLCBpbnB1dExpc3QpO1xuICAgIH07XG4gICAgdGhpcy5hZGRPdXRwdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBvdXRwdXRMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dHM7XG4gICAgfTtcbiAgICB0aGlzLmRlbGV0ZU91dHB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBkZWxldGVJTyhub2RlLCBvdXRwdXRMaXN0KTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgPSBmdW5jdGlvbihzZWNvbmRzKSB7XG4gICAgICAgIHZhciBmcyA9IGZhY3RvcnkuY29udGV4dC5zYW1wbGVSYXRlO1xuICAgICAgICBpZiAodHlwZW9mIHNlY29uZHMgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShzZWNvbmRzKSAmJiBzZWNvbmRzID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyhzZWNvbmRzKmZzKS9mcztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyhcInNldFByb2Nlc3NpbmdEZWxheUFzU2Vjb25kcyBJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyA9IGZ1bmN0aW9uKHNhbXBsZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzYW1wbGVzID09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUoc2FtcGxlcykgJiYgc2FtcGxlcyA+PSAwKSB7XG4gICAgICAgICAgICBkZWxheVNhbXBsZXMgPSBzYW1wbGVzO1xuICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXZlbnQoXCJhbHRlcmRlbGF5XCIpO1xuICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcInNldFByb2Nlc3NpbmdEZWxheUFzU2FtcGxlcyBJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RvcCA9IHRoaXMub25sb2FkZWQgPSB0aGlzLm9udW5sb2FkZWQgPSB0aGlzLmRlY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge307XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiZXh0ZXJuYWxJbnRlcmZhY2VcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBleHRlcm5hbEludGVyZmFjZVxuICAgICAgICB9LFxuICAgICAgICBcIm51bUlucHV0c1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRMaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0IHRoZSBudW1iZXIgb2YgaW5wdXRzIG9mIEJhc2VQbHVnaW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibnVtT3V0cHV0c1wiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0TGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIG91dHB1dHMgb2YgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJudW1QYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMucGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCB0aGUgbnVtYmVyIG9mIHBhcmFtZXRlcnMgb2YgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvd25lclwiOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcE93bmVyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKG93bmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvd25lciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBwT3duZXIgPSBvd25lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBPd25lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnB1dHNcIjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRMaXN0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIklsbGVnYWwgYXR0ZW1wdCB0byBtb2RpZnkgQmFzZVBsdWdpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJvdXRwdXRzXCI6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dExpc3Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiSWxsZWdhbCBhdHRlbXB0IHRvIG1vZGlmeSBCYXNlUGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2FtcGxlc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHRoaXMuc2V0UHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzXG4gICAgICAgIH0sXG4gICAgICAgIFwicHJvY2Vzc2luZ0RlbGF5QXNTZWNvbmRzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheVNhbXBsZXMvZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogdGhpcy5zZXRQcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb25uZWN0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGRlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uY29ubmVjdChkZXN0LmlucHQgPyBkZXN0LmlucHV0IDogZGVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY29ubmVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChkZXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHNbMF0uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0c1swXS5kaXNjb25uZWN0KGRlc3QuaW5wdXQgPyBkZXN0LmlucHV0IDogZGVzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldElucHV0c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0T3V0cHV0c1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck5hbWVzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQYXJhbWV0ZXJCeU5hbWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBhcmFtZXRlck9iamVjdFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBhcmFtZXRlckJ5TmFtZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuc2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQYXJhbWV0ZXJzQnlPYmplY3RcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5zZXRQYXJhbWV0ZXJzQnlPYmplY3Qob2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhZGRFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciBQbHVnaW5GZWF0dXJlSW50ZXJmYWNlID0gZnVuY3Rpb24gKEJhc2VQbHVnaW5JbnN0YW5jZSkge1xuICAgIHRoaXMucGx1Z2luID0gQmFzZVBsdWdpbkluc3RhbmNlO1xuICAgIHRoaXMuUmVjZWl2ZXIgPSBuZXcgUGx1Z2luRmVhdHVyZUludGVyZmFjZVJlY2VpdmVyKHRoaXMsIEJhc2VQbHVnaW5JbnN0YW5jZS5mYWN0b3J5LkZlYXR1cmVNYXApO1xuICAgIHRoaXMuU2VuZGVyID0gbmV3IFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXIodGhpcywgQmFzZVBsdWdpbkluc3RhbmNlLmZhY3RvcnkuRmVhdHVyZU1hcCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJvbmZlYXR1cmVzXCIsIHtcbiAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLlJlY2VpdmVyLm9uZmVhdHVyZXM7XG4gICAgICAgIH0sXG4gICAgICAgICdzZXQnOiBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICAgICAgdGhpcy5SZWNlaXZlci5vbmZlYXR1cmVzID0gZnVuYztcbiAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VSZWNlaXZlciA9IGZ1bmN0aW9uIChGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UsIEZhY3RvcnlGZWF0dXJlTWFwKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJTb3VyY2UgcGx1Z2luIG11c3QgYmUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJGZWF0dXJlT2JqZWN0IG11c3QgYmUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXggIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGZlYXR1cmVPYmplY3QuZnJhbWVTaXplICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBmZWF0dXJlT2JqZWN0LmZlYXR1cmVzICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJNYWxmb3JtZWQgZmVhdHVyZU9iamVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGNfZmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLnJlcXVlc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGZlYXR1cmVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RGZWF0dXJlc0Zyb21QbHVnaW4oZmVhdHVyZUxpc3RbaV0ucGx1Z2luLCB7XG4gICAgICAgICAgICAgICAgJ291dHB1dEluZGV4JzogZmVhdHVyZUxpc3RbaV0ub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVMaXN0W2ldLmZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAnZmVhdHVyZXMnOiBmZWF0dXJlTGlzdFtpXS5mZWF0dXJlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgY2hlY2tGZWF0dXJlQXJncyhzb3VyY2UsIGZlYXR1cmVPYmplY3QpO1xuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5yZXF1ZXN0RmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbiwgc291cmNlLCBmZWF0dXJlT2JqZWN0KTtcbiAgICB9O1xuICAgIHRoaXMuY2FuY2VsRmVhdHVyZXNGcm9tUGx1Z2luID0gZnVuY3Rpb24gKHNvdXJjZSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICBjaGVja0ZlYXR1cmVBcmdzKHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgICAgIEZhY3RvcnlGZWF0dXJlTWFwLmRlbGV0ZUZlYXR1cmVzKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIHNvdXJjZSwgZmVhdHVyZU9iamVjdCk7XG4gICAgfTtcbiAgICB0aGlzLmNhbmNlbEFsbEZlYXR1cmVzRnJvbVBsdWdpbiA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJTb3VyY2UgcGx1Z2luIG11c3QgYmUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5kZWxldGVGZWF0dXJlcyhGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLCBzb3VyY2UpO1xuICAgIH07XG4gICAgdGhpcy5jYW5jZWxBbGxGZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuZGVsZXRlRmVhdHVyZXMoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbik7XG4gICAgfTtcblxuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKE1lc3NhZ2UpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGxlZCBieSB0aGUgUGx1Z2luIEZhY3Rvcnkgd2l0aCB0aGUgZmVhdHVyZSBtZXNzYWdlXG4gICAgICAgICAgICBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICdwbHVnaW4nOiBzb3VyY2VQbHVnaW5JbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBvdXRwdXRJbmRleCxcbiAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6IHt9IEpTLVh0cmFjdCBmZWF0dXJlIHJlc3VsdHMgb2JqZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgY19mZWF0dXJlcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjX2ZlYXR1cmVzKE1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uZmVhdHVyZXNcIiwge1xuICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNfZmVhdHVyZXM7XG4gICAgICAgIH0sXG4gICAgICAgICdzZXQnOiBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjX2ZlYXR1cmVzID0gZnVuYztcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59O1xudmFyIFBsdWdpbkZlYXR1cmVJbnRlcmZhY2VTZW5kZXIgPSBmdW5jdGlvbiAoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgIHZhciBPdXRwdXROb2RlID0gZnVuY3Rpb24gKHBhcmVudCwgb3V0cHV0LCBpbmRleCkge1xuICAgICAgICB2YXIgZXh0cmFjdG9ycyA9IFtdO1xuICAgICAgICB2YXIgRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgICAgICB0aGlzLmV4dHJhY3Rvci5mZnRTaXplID0gZnJhbWVTaXplO1xuICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZnJhbWVTaXplXCIsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoYmFzZSwgbGlzdCkge1xuICAgICAgICAgICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGksIGVudHJ5O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICBiYXNlW2VudHJ5Lm5hbWVdLmFwcGx5KGJhc2UsIGVudHJ5LnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuZmVhdHVyZXMgJiYgZW50cnkuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLnJlc3VsdFtlbnRyeS5uYW1lXSwgZW50cnkuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciByZWN1cnNpdmVQcm9jZXNzaW5nID0gdGhpcy5mYWN0b3J5LnJlY3Vyc2l2ZVByb2Nlc3Npbmc7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzID09PSBFeHRyYWN0b3JcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ251bWJlck9mQ2hhbm5lbHMnOiAxLFxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVQcm9jZXNzaW5nKGRhdGEsIHRoaXMuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVzdWx0c1swXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5uZWwnOiAwLFxuICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IEpTT04ucGFyc2UoZGF0YS50b0pTT04oKSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKGRhdGEubGVuZ3RoLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY2xlYXJDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmZyYW1lQ2FsbGJhY2sob25hdWRpb2NhbGxiYWNrLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgV29ya2VyRXh0cmFjdG9yID0gZnVuY3Rpb24gKG91dHB1dCwgZnJhbWVTaXplKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBvbmF1ZGlvY2FsbGJhY2soZSkge1xuICAgICAgICAgICAgICAgIHZhciBjLCBmcmFtZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgZS5pbnB1dEJ1ZmZlci5udW1iZXJPZkNoYW5uZWxzOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVzW2NdID0gZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YShjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMixcbiAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lcyc6IGZyYW1lc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNwb25zZShtc2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhmcmFtZVNpemUsIG1zZy5kYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXCJqc2FwL2ZlYXR1cmUtd29ya2VyLmpzXCIpO1xuICAgICAgICAgICAgd29ya2VyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBjb25maWdNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAxLFxuICAgICAgICAgICAgICAgICAgICAnc2FtcGxlUmF0ZSc6IEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGUsXG4gICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IGZlYXR1cmVMaXN0LFxuICAgICAgICAgICAgICAgICAgICAnbnVtQ2hhbm5lbHMnOiBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLFxuICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogdGhpcy5mcmFtZVNpemVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlTGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxpc3QgJiYgZmVhdHVyZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuc3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gcmVzcG9uc2UuYmluZChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IG9uYXVkaW9jYWxsYmFjay5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoY29uZmlnTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IgPSBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLmZhY3RvcnkuY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZnJhbWVTaXplLCBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLCAxKTtcbiAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLmNvbm5lY3QoRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5mYWN0b3J5LmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgdmFyIG9iajtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gbmV3IFdvcmtlckV4dHJhY3RvcihvdXRwdXQsIGZyYW1lU2l6ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXh0cmFjdG9ycy5wdXNoKG9iaik7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInBvc3RGZWF0dXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKGZyYW1lU2l6ZSwgcmVzdWx0c0pTT04pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogcmVzdWx0c0pTT05cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMob2JqKTtcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5maW5kRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgdmFyIGNoZWNrID0gZnJhbWVTaXplO1xuICAgICAgICAgICAgcmV0dXJuIGV4dHJhY3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgTVVTVCBiZSA9PT0gTk9UID09PVxuICAgICAgICAgICAgICAgIHJldHVybiBlLmZyYW1lU2l6ZSA9PT0gY2hlY2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZWxldGVFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7fTtcbiAgICB9O1xuICAgIHZhciBvdXRwdXROb2RlcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAvLyBbXSBPdXRwdXQgLT4ge30gJ2ZyYW1lc2l6ZScgLT4ge30gJ2ZlYXR1cmVzJ1xuICAgICAgICB2YXIgbztcbiAgICAgICAgZm9yIChvID0gMDsgbyA8IGZlYXR1cmVPYmplY3QubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgICAgIGlmIChvdXRwdXROb2Rlc1tvXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8gPiBGZWF0dXJlSW50ZXJmYWNlSW5zdGFuY2UucGx1Z2luLm51bU91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUmVxdWVzdGVkIGFuIG91dHB1dCB0aGF0IGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvdXRwdXROb2Rlc1tvXSA9IG5ldyBPdXRwdXROb2RlKEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4sIEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ub3V0cHV0c1tvXSwgbyk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG91dHB1dE5vZGVzW29dLCBcInBvc3RGZWF0dXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChyZXN1bHRPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKHJlc3VsdE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNpO1xuICAgICAgICAgICAgZm9yIChzaSA9IDA7IHNpIDwgZmVhdHVyZU9iamVjdFtvXS5sZW5ndGg7IHNpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXNbb10uZmluZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIGlmICghZXh0cmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhY3RvciA9IG91dHB1dE5vZGVzW29dLmFkZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBleHRyYWN0b3Iuc2V0RmVhdHVyZXMoZmVhdHVyZU9iamVjdFtvXVtzaV0uZmVhdHVyZUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGxlZCBieSB0aGUgaW5kaXZpZHVhbCBleHRyYWN0b3IgaW5zdGFuY2VzOlxuICAgICAgICAgICAgZmVhdHVyZU9iamVjdCA9IHsnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgJ291dHB1dEluZGV4Jzogb3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAncmVzdWx0cyc6W119XG4gICAgICAgICovXG4gICAgICAgIEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4uZmFjdG9yeS5GZWF0dXJlTWFwLnBvc3RGZWF0dXJlcyh7XG4gICAgICAgICAgICAncGx1Z2luJzogRmVhdHVyZUludGVyZmFjZUluc3RhbmNlLnBsdWdpbi5wbHVnaW5JbnN0YW5jZSxcbiAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAncmVzdWx0cyc6IGZlYXR1cmVPYmplY3QucmVzdWx0c1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gU2VuZCB0byBGYWN0b3J5XG4gICAgRmFjdG9yeUZlYXR1cmVNYXAuY3JlYXRlU291cmNlTWFwKHRoaXMsIEZlYXR1cmVJbnRlcmZhY2VJbnN0YW5jZS5wbHVnaW4ucGx1Z2luSW5zdGFuY2UpO1xufTtcblxuLypcbiAgICBUaGlzIGlzIGFuIG9wdGlvbmFsIG1vZHVsZSB3aGljaCB3aWxsIGF0dGVtcHQgdG8gY3JlYXRlIGEgZ3JhcGhpY2FsIGltcGxlbWVudGF0aW9uLlxuICAgIEFzIHdpdGggb3RoZXIgYXVkaW8gcGx1Z2lucyBmb3IgREFXcywgdGhlIEdVSSBpcyBhbiBvcHRpb25hbCBlbGVtZW50IHdoaWNoIGNhbiBiZSBhY2NlcHRlZCBvciByZWplY3RlZCBieSB0aGUgaG9zdC5cblxuICAgIFRoZSBhY3R1YWwgR1VJIGlzIGxhdW5jaGVkIGFzIGFuIDxpZnJhbWU+IGVsZW1lbnQgaW4gdGhlIGJyb3dzZXIgdG8ga2VlcCBlYWNoIHBsdWdpbiBpc29sYXRlZCBmcm9tIHRoZSByZXN0XG4qL1xuXG52YXIgUGx1Z2luVXNlckludGVyZmFjZSA9IGZ1bmN0aW9uIChCYXNlUGx1Z2luSW5zdGFuY2UsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRFUFJFQ0FURUQhIVwiKTtcbiAgICBjb25zb2xlLmxvZyhcIlRoZSBjbGFzcyBQbHVnaW5Vc2VySW50ZXJmYWNlIGhhcyBiZWVuIGRlcHJlY2F0ZWRcIik7XG4gICAgY29uc29sZS5sb2coXCJQbGVhc2UgbG9vayBhdCB0aGUgZG9jdW1lbnRzIGZvciB0aGUgbmV3IG1ldGhvZHMgZm9yIGJ1aWxkaW5nIHBsdWdpbnNcIik7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBCYXNlUGx1Z2luSW5zdGFuY2U7XG4gICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpZiAod2lkdGggPiAwKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIH1cbiAgICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgIH1cbiAgICB0aGlzLmRpbSA9IHtcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gbnVsbDtcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLlBsdWdpblBhcmFtZXRlckludGVyZmFjZXMgPSBbXTtcblxuICAgIHZhciBQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlID0gZnVuY3Rpb24gKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UsIHByb2Nlc3NvciwgZ3VpKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBET007XG4gICAgICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgICAgICB0aGlzLkdVSSA9IGd1aTtcbiAgICAgICAgdGhpcy5BdWRpb1BhcmFtID0gUGx1Z2luUGFyYW1ldGVySW5zdGFuY2U7XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVQbHVnaW5QYXJhbWV0ZXJJbnRlcmZhY2VOb2RlID0gZnVuY3Rpb24gKERPTSwgUGx1Z2luUGFyYW1ldGVySW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlTm9kZShET00sIFBsdWdpblBhcmFtZXRlckluc3RhbmNlLCB0aGlzLnByb2Nlc3NvciwgdGhpcyk7XG4gICAgICAgIHRoaXMuUGx1Z2luUGFyYW1ldGVySW50ZXJmYWNlcy5wdXNoKG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7fTtcblxufTtcblxuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290O1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltO1xufTtcblBsdWdpblVzZXJJbnRlcmZhY2UucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpbS53aWR0aDtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGltLmhlaWdodDtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5iZWdpbkNhbGxiYWNrcyA9IGZ1bmN0aW9uIChtcykge1xuICAgIC8vIEFueSByZWdpc3RlcmVkIGNhbGxiYWNrcyBhcmUgc3RhcnRlZCBieSB0aGUgaG9zdFxuICAgIGlmIChtcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1zID0gMjUwO1xuICAgIH0gLy9EZWZhdWx0IG9mIDI1MG1zIHVwZGF0ZSBwZXJpb2RcbiAgICBpZiAodGhpcy5pbnRlcnZhbEZ1bmN0aW9uID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBtcztcbiAgICAgICAgdGhpcy5pbnRlcnZhbEZ1bmN0aW9uID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMjUwKTtcbiAgICB9XG59O1xuUGx1Z2luVXNlckludGVyZmFjZS5wcm90b3R5cGUuc3RvcENhbGxiYWNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBBbnkgcmVnaXN0ZXJlZCBjYWxsYmFja3MgYXJlIHN0b3BwZWQgYnkgdGhlIGhvc3RcbiAgICBpZiAodGhpcy5pbnRlcnZhbEZ1bmN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxGdW5jdGlvbik7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmludGVydmFsRnVuY3Rpb24gPSBudWxsO1xuICAgIH1cbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5sb2FkUmVzb3VyY2UgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgdmFyIHAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxLnNlbmQoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcDtcbn07XG5QbHVnaW5Vc2VySW50ZXJmYWNlLnByb3RvdHlwZS5jbGVhckdVSSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0b3BDYWxsYmFja3MoKTtcbiAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbnZhciBQbHVnaW5JbnRlcmZhY2VNZXNzYWdlSHViID0gZnVuY3Rpb24ob3duZXIpIHtcbiAgICBmdW5jdGlvbiBidWlsZFBsdWdpblBhcmFtZXRlckpTT04ocGx1Z2luLCBzb3VyY2VzKSB7XG4gICAgICAgIHZhciBuYW1lcyA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKTtcbiAgICAgICAgdmFyIE8gPSB7fTtcbiAgICAgICAgaWYgKHNvdXJjZXMgPT09IHVuZGVmaW5lZCB8fCBzb3VyY2VzLmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNvdXJjZXMgPSBuYW1lcztcbiAgICAgICAgfVxuICAgICAgICBuYW1lcy5maWx0ZXIoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIH0sIHNvdXJjZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIHBhcmFtID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBPW25hbWVdID0ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBtYXhpbXVtOiBwYXJhbS5tYXhpbXVtLFxuICAgICAgICAgICAgICAgIG1pbmltdW06IHBhcmFtLm1pbmltdW0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBwYXJhbS5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgdHlwZTogcGFyYW0uY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHBhcmFtLmF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgICAgICBPW25hbWVdLmF1dG9tYXRlZCA9IHBhcmFtLmF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZChzZW5kZXJfaWQsIHNvdXJjZXMpIHtcbiAgICAgICAgdmFyIG1zZyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwidXBkYXRlUGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogYnVpbGRQbHVnaW5QYXJhbWV0ZXJKU09OKG93bmVyLCBzb3VyY2VzKVxuICAgICAgICB9O1xuICAgICAgICBpZiAoc2VuZGVyX2lkKSB7XG4gICAgICAgICAgICBtc2cuc2VuZGVyX2lkID0gc2VuZGVyX2lkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtc2c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFBhcmFtZXRlclVwZGF0ZXMoY2hhbm5lbCwgc291cmNlcykge1xuICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKGJ1aWxkUGFyYW1ldGVyVXBkYXRlUGF5bG9hZCh1bmRlZmluZWQsIHNvdXJjZXMpLCBsb2NhdGlvbi5vcmlnaW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoc2VuZGVyX2lkLCBzb3VyY2VzKSB7XG4gICAgICAgIHZhciBtc2cgPSBidWlsZFBhcmFtZXRlclVwZGF0ZVBheWxvYWQoc2VuZGVyX2lkLCBzb3VyY2VzKTtcbiAgICAgICAgd2luZG93TWVzc2FnZUxpc3QuZm9yRWFjaChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICB3LnBvc3RNZXNzYWdlKG1zZywgbG9jYXRpb24ub3JpZ2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UGFyYW1ldGVyTWVzc2FnZShlKSB7XG4gICAgICAgIHZhciB1cGRhdGVPYmplY3RzID0gW107XG4gICAgICAgIHZhciBwYXJhbWV0ZXJzID0gSlNPTi5wYXJzZShlLm1lc3NhZ2UucGFyYW1ldGVycyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdmFyIHBhcmFtZXRlck9iamVjdCA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgaWYgKHBhcmFtZXRlck9iamVjdCkge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlck9iamVjdC5zZXRWYWx1ZShwYXJhbWV0ZXJzW25hbWVdLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT2JqZWN0cy5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU9iamVjdHM7XG4gICAgfVxuXG4gICAgdmFyIHdpbmRvd01lc3NhZ2VMaXN0ID0gW107XG4gICAgdmFyIGxpc3RlbmVyO1xuICAgIHZhciBzdGF0ZSA9IDA7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIXdpbmRvd01lc3NhZ2VMaXN0LmluY2x1ZGVzKGUuc291cmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaChlLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgY2FzZSBcInNldFBhcmFtZXRlckJ5TmFtZVwiOlxuICAgICAgICAgICAgdmFyIHBhcmFtZXRlck9iamVjdDtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnBhcmFtZXRlci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlck9iamVjdCA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKGUuZGF0YS5wYXJhbWV0ZXIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlck9iamVjdC5zZXRWYWx1ZShlLmRhdGEucGFyYW1ldGVyLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RQYXJhbWV0ZXJVcGRhdGVzKGUuZGF0YS5zZW5kZXJfaWQsIFtwYXJhbWV0ZXJPYmplY3QubmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNldFBhcmFtZXRlcnNCeU9iamVjdFwiOlxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEucGFyYW1ldGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVPYmplY3RzID0gc2V0UGFyYW1ldGVyTWVzc2FnZShlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0UGFyYW1ldGVyVXBkYXRlcyhlLmRhdGEuc2VuZGVyX2lkLCB1cGRhdGVPYmplY3RzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVxdWVzdFBhcmFtZXRlcnNcIjpcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUuZGF0YS5uYW1lID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXMoZS5zb3VyY2UsIGUuZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUGFyYW1ldGVyVXBkYXRlcyhlLnNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlVua25vd24gbWVzc2FnZSB0eXBlIFxcXCJcIitlLmRhdGEubWVzc2FnZStcIlxcXCJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ1cGRhdGVJbnRlcmZhY2VzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYXV0b21hdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc291cmNlcztcbiAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbk9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlck5hbWVzID0gb3duZXIucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJOYW1lcygpO1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VzID0gcGFyYW1ldGVyTmFtZXMuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG93bmVyLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJhbS5hdXRvbWF0YWJsZSAmJiBwYXJhbS5lbmFibGVkID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXModW5kZWZpbmVkLCBzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFBhcmFtZXRlclVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjbG9zZVdpbmRvd3NcIjoge1xuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSh3aW5kb3dNZXNzYWdlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IHdpbmRvd01lc3NhZ2VMaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJDYW5uZWwgYWxyZWFkeSBjbG9zZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlZ2lzdGVyV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odykge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dNZXNzYWdlTGlzdC5pbmNsdWRlcyh3KSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dNZXNzYWdlTGlzdC5zcGxpY2Uod2luZG93TWVzc2FnZUxpc3QuaW5kZXhPZih3KSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvd01lc3NhZ2VMaXN0LnB1c2godyk7XG4gICAgICAgICAgICAgICAgc2VuZFBhcmFtZXRlclVwZGF0ZXModyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7QmFzZVBsdWdpbn07XG4iLCJpbXBvcnQge0Jhc2VQbHVnaW4sIFN5bnRoZXNpc2VyQmFzZVBsdWdpbiwgUGx1Z2luRmFjdG9yeX0gZnJvbSBcIi4vcGx1Z2luLWZhY3RvcnlcIjtcblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvYWQgSlNBUC4uLlwiKTtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkZWZpbmVcIik7XG4gICAgICAgIGRlZmluZShcIkpTQVBcIiwgW10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9kdWxlXCIpO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdFwiKTtcbiAgICAgICAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcm9vdCA9IHdpbmRvdztcbiAgICAgICAgfVxuICAgICAgICByb290LkpTQVAgPSBmYWN0b3J5KCk7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJmYWN0b3J5XCIpO1xuICAgIHJldHVybiB7XG4gICAgICAgIFBsdWdpbkZhY3Rvcnk6IFBsdWdpbkZhY3RvcnksXG4gICAgICAgIEJhc2VQbHVnaW46IEJhc2VQbHVnaW4sXG4gICAgICAgIFN5bnRoZXNpc2VyQmFzZVBsdWdpbjogU3ludGhlc2lzZXJCYXNlUGx1Z2luXG4gICAgfTtcbn0pO1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtOdW1iZXJQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvTnVtYmVyUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge1N0cmluZ1BhcmFtZXRlcn0gZnJvbSBcIi4vcGFyYW1ldGVycy9TdHJpbmdQYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7QnV0dG9uUGFyYW1ldGVyfSBmcm9tIFwiLi9wYXJhbWV0ZXJzL0J1dHRvblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtTd2l0Y2hQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvU3dpdGNoUGFyYW1ldGVyLmpzXCI7XG5pbXBvcnQge0xpc3RQYXJhbWV0ZXJ9IGZyb20gXCIuL3BhcmFtZXRlcnMvTGlzdFBhcmFtZXRlci5qc1wiO1xuXG52YXIgUGFyYW1ldGVyTWFuYWdlciA9IGZ1bmN0aW9uIChvd25lciwgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UpIHtcbiAgICB2YXIgcGFyYW1ldGVyTGlzdCA9IFtdO1xuICAgIHZhciBldmVudFRhcmdldCA9IG5ldyBFdmVudFRhcmdldCgpO1xuXG4gICAgZnVuY3Rpb24gZmluZFBhcmFtZXRlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJMaXN0LmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkge1xuICAgICAgICByZXR1cm4gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZFBhcmFtZXRlck9iamVjdCgpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICBwYXJhbWV0ZXJMaXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG9ialtlLm5hbWVdID0gZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGFyYW1ldGVyKHBhcmFtLCBzZWxmKSB7XG4gICAgICAgIHZhciBleGlzdHMgPSBwYXJhbWV0ZXJMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUgPT09IHBhcmFtO1xuICAgICAgICB9LCBwYXJhbSk7XG4gICAgICAgIGlmIChleGlzdHMgPT09IC0xKSB7XG4gICAgICAgICAgICBwYXJhbS5hZGRFdmVudExpc3RlbmVyKFwicGFyYW1ldGVyc2V0XCIsIHNlbGYpO1xuICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5wdXNoKHBhcmFtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVFdmVudExpc3RlbmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGFuZGxlRXZlbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbCA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgICAgIGlmIChkZXRhaWwudXBkYXRlSW50ZXJmYWNlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luRXh0ZXJuYWxJbnRlcmZhY2UudXBkYXRlSW50ZXJmYWNlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwicGFyYW1ldGVyc2V0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwYXJhbWV0ZXJzZXRcIiwge2RldGFpbDogZGV0YWlsLnBhcmFtZXRlcn0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVOdW1iZXJQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1pbmltdW0sIG1heGltdW0sIHRvU3RyaW5nRnVuYykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGVmYXVsdFZhbHVlICE9PSBcIm51bWJlclwiIHx8IChtaW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1pbmltdW0gIT09IFwibnVtYmVyXCIpIHx8IChtYXhpbXVtICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heGltdW0gIT09IFwibnVtYmVyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmxpZCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgIT0gXCJmdW5jdGlvblwiICYmIHRvU3RyaW5nRnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcInRvU3RyaW5nRnVuYyBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmluZFBhcmFtZXRlckluZGV4KG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJQYXJhbWV0ZXIgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXJhbSA9IG5ldyBOdW1iZXJQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2NyZWF0ZVN0cmluZ1BhcmFtZXRlcic6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWF4TGVuZ3RoLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRlZmF1bHRWYWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCAobWF4TGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1heExlbmd0aCAhPT0gXCJudW1iZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52bGlkIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyAhPSBcImZ1bmN0aW9uXCIgJiYgdG9TdHJpbmdGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwidG9TdHJpbmdGdW5jIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IFN0cmluZ1BhcmFtZXRlcihvd25lciwgbmFtZSwgZGVmYXVsdFZhbHVlLCBtYXhMZW5ndGgsIHRvU3RyaW5nRnVuYyk7XG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVCdXR0b25QYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkludmFsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IEJ1dHRvblBhcmFtZXRlcihvd25lciwgbmFtZSk7XG4gICAgICAgICAgICAgICAgYWRkUGFyYW1ldGVyKHBhcmFtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjcmVhdGVTd2l0Y2hQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG1pblN0YXRlICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBtYXhTdGF0ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpbmRQYXJhbWV0ZXJJbmRleChuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGFyYW1ldGVyIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBuZXcgU3dpdGNoUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgICAgICBhZGRQYXJhbWV0ZXIocGFyYW0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2NyZWF0ZUxpc3RQYXJhbWV0ZXInOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIGxpc3RPZlZhbHVlcywgdG9TdHJpbmdGdW5jKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgIUFycmF5LmlzQXJyYXkobGlzdE9mVmFsdWVzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jICE9IFwiZnVuY3Rpb25cIiAmJiB0b1N0cmluZ0Z1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJ0b1N0cmluZ0Z1bmMgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RPZlZhbHVlcy5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZsaWQgY29uc3RydWN0b3IgLSBkZWZhdWx0IHZhbHVlIG1pc3NpbmdcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaW5kUGFyYW1ldGVySW5kZXgobmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIlBhcmFtZXRlciB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gbmV3IExpc3RQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbGlzdE9mVmFsdWVzLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgIGFkZFBhcmFtZXRlcihwYXJhbSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY3JlYXRlUGFyYW1ldGVyJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIlRoaXMgZnVuY3Rpb24gaXMgbm93IGRlcHJlY2F0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdnZXRQYXJhbWV0ZXJOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lcyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBpO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJhbWV0ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2gocGFyYW1ldGVyTGlzdFtpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZ2V0UGFyYW1ldGVyQnlOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluZFBhcmFtZXRlcihuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2dldFBhcmFtZXRlck9iamVjdCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVpbGRQYXJhbWV0ZXJPYmplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2dldFBhcmFtZXRlck5hbWVzJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBsID0gW107XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgICAgIGwucHVzaChhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnc2V0UGFyYW1ldGVyQnlOYW1lJzoge1xuICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKG4sIHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyID0gZmluZFBhcmFtZXRlcihuKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2RlbGV0ZVBhcmFtZXRlcic6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyYW1ldGVyTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPT09IG87XG4gICAgICAgICAgICAgICAgfSwgbyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBleGlzdFxuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnZGVsZXRlQWxsUGFyYW1ldGVycyc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlckxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ3NldFBhcmFtZXRlcnNCeU9iamVjdCc6IHtcbiAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChvYmplY3QsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5O1xuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W2tleV0gPT0gXCJvYmplY3RcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XS52YWx1ZSwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBvYmplY3Rba2V5XSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJCeU5hbWUoa2V5LCBvYmplY3Rba2V5XSwgdXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNhbm5vdCBzZXQgXCIgKyBrZXkgKyBcIjogTm90IGEgdmFsaWQgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAncGFyYW1ldGVycyc6IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkUGFyYW1ldGVyT2JqZWN0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3NldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJDYW5ub3Qgc2V0LCB1c2UgLnNldFBhcmFtZXRlckJ5Li4uKClcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7UGFyYW1ldGVyTWFuYWdlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge1BsdWdpblBhcmFtZXRlcn0gZnJvbSBcIi4vUGx1Z2luUGFyYW1ldGVyLmpzXCI7XG5cbmZ1bmN0aW9uIEJ1dHRvblBhcmFtZXRlcihvd25lciwgbmFtZSkge1xuICAgIFBsdWdpblBhcmFtZXRlci5jYWxsKHRoaXMsIG93bmVyLCBuYW1lLCBcIkJ1dHRvblwiKTtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkJ1dHRvblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwib25jbGlja1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uY2xpY2s7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJvbmNsaWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25jbGljayA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbkJ1dHRvblBhcmFtZXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBsdWdpblBhcmFtZXRlci5wcm90b3R5cGUpO1xuQnV0dG9uUGFyYW1ldGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJ1dHRvblBhcmFtZXRlcjtcblxuZXhwb3J0IHtCdXR0b25QYXJhbWV0ZXJ9O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuaW1wb3J0IHtQbHVnaW5QYXJhbWV0ZXJ9IGZyb20gXCIuL1BsdWdpblBhcmFtZXRlci5qc1wiO1xuaW1wb3J0IHtQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbn0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBMaXN0UGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIGxpc3RPZlZhbHVlcywgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIpO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcbiAgICB2YXIgb25jbGljayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHZhciBfaW5kZXggPSBsaXN0T2ZWYWx1ZXMuaW5kZXhPZihkZWZhdWx0VmFsdWUpO1xuXG4gICAgZnVuY3Rpb24gc2V0Vih2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgIHZhciBpID0gbGlzdE9mVmFsdWVzLmluZGV4T2Yodik7XG4gICAgICAgIGlmIChpID09PSB1bmRlZmluZWQgfHwgaSA8IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm90IGluIGxpc3QgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfaW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIF9pbmRleCA9IGk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgICAgIHJldHVybiBsaXN0T2ZWYWx1ZXNbX2luZGV4XTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiTGlzdFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibGlzdFZhbHVlc1wiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdE9mVmFsdWVzLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RPZlZhbHVlc1tfaW5kZXhdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImluY3JlbWVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IF9pbmRleCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHYgPj0gbGlzdE9mVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFYuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfaW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gbGlzdE9mVmFsdWVzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0Vi5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwLnNldFZhbHVlQXRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uID0gbmV3IFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCAwLCBsaXN0VmFsdWVzLmxlbmd0aCwgdG9TdHJpbmdGdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFZhbHVlQXRUaW1lUG9pbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dG9tYXRpb25Qb2ludHMuZ2V0VmFsdWVBdFRpbWVQb2ludCh0aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRvbWF0aW9uUG9pbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBhdXRvbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uc3RhcnQodGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3BcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLnN0b3AoY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVuYWJsZWRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmVuYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXV0b21hdGlvbi5lbmFibGVkID0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCBiaW5kIGF1dG9tYXRpb24gYXMgQXVkaW9QYXJhbWV0ZXIgaXMgbm90IGF1dG9tYXRhYmxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBcmd1bWVudCAxIGlzIG5vdCBhIHZhbGlkIEF1ZGlvUGFyYW1ldGVyIG9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm91bmRBdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF1ZGlvUGFyYW1ldGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImF1dG9tYXRhYmxlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGF1dG9tYXRpb24gPT0gXCJvYmplY3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b1N0cmluZ1wiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9TdHJpbmdGdW5jID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJpbmdGdW5jLmNhbGwodGhpcywgdik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbkxpc3RQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcbkxpc3RQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTGlzdFBhcmFtZXRlcjtcblxuZXhwb3J0IHtMaXN0UGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7UGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbn0gZnJvbSBcIi4vUGFyYW1ldGVyQXV0b21hdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBOdW1iZXJQYXJhbWV0ZXIob3duZXIsIG5hbWUsIGRlZmF1bHRWYWx1ZSwgbWluaW11bSwgbWF4aW11bSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiTnVtYmVyXCIpO1xuICAgIHZhciBhdWRpb1BhcmFtZXRlciwgYXV0b21hdGlvbjtcbiAgICB2YXIgX3ZhbHVlID0gZGVmYXVsdFZhbHVlLFxuICAgICAgICBfc3RlcFNpemU7XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKVxuICAgIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb24gJiYgYXV0b21hdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgICB0aHJvdyhcIkF1dG9tYXRpb24gaXMgZW5hYmxlZCwgY2Fubm90IHNldCB0aGUgdmFsdWUhXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pbmltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1heCh2LCB0aGlzLm1pbmltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heGltdW0pIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLm1pbih2LCB0aGlzLm1heGltdW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfc3RlcFNpemUpIHtcbiAgICAgICAgICAgIHYgPSBNYXRoLnJvdW5kKHYgLyBfc3RlcFNpemUpO1xuICAgICAgICAgICAgdiA9IHYgKiBfc3RlcFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgdiA9IHRoaXMudXBkYXRlKHYpO1xuICAgICAgICBpZiAoYXVkaW9QYXJhbWV0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgb3duZXIuZmFjdG9yeS5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXVkaW9QYXJhbWV0ZXIudmFsdWUgPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChfdmFsdWUgIT09IHYpIHtcbiAgICAgICAgICAgIF92YWx1ZSA9IHY7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJQYXJhbWV0ZXJTZXQodXBkYXRlSW50ZXJmYWNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIk51bWJlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSBkZWZhdWx0VmFsdWUgPSBtaW5pbXVtID0gbWF4aW11bSA9IF92YWx1ZSA9IF9zdGVwU2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbXVtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWluaW11bVxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhpbXVtXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChhdWRpb1BhcmFtZXRlcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b21hdGlvbiAmJiBhdXRvbWF0aW9uLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gb3duZXIuZmFjdG9yeS5nZXRDdXJyZW50UHJvZ3JhbVRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uLmdldEN1cnJlbnRUaW1lVmFsdWUodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKGF1ZGlvUGFyYW1ldGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0ZXBTaXplXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N0ZXBTaXplO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0Zpbml0ZShuKSB8fCBuIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJJbnZhbGlkIHN0ZXAgc2l6ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3N0ZXBTaXplID0gbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJMaW5lYXJBdXRvbWF0aW9uKHRoaXMsIGF1ZGlvUGFyYW1ldGVyLCBtaW5pbXVtLCBtYXhpbXVtLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuTnVtYmVyUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5OdW1iZXJQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyUGFyYW1ldGVyO1xuXG5leHBvcnQge051bWJlclBhcmFtZXRlcn07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG52YXIgVGltZVBvaW50ID0gZnVuY3Rpb24ob3duZXIsIHRpbWUsIHZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICBpZiAodHlwZW9mIHRpbWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodGltZSkgfHwgdGltZSA8IDApIHtcbiAgICAgICAgdGhyb3coXCJJbnZhbGlkIENvbnN0cnVjdG9yOiBUaW1lIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogVmFsdWUgbXVzdCBiZSBhIG51bWJlclwiKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInRpbWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFRpbWUodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHYgIT0gXCJudW1iZXJcIiB8fCAhaXNGaW5pdGUodikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJWYWx1ZSBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHYsIG93bmVyLm1pbmltdW0pLCBvd25lci5tYXhpbXVtKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGltZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHQgPT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh0KSAmJiB0ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm93bmVyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogb3duZXJcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxudmFyIFRpbWVQb2ludExpc3QgPSBmdW5jdGlvbihtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgZnVuY3Rpb24gZ2V0UG9pbnRBdFRpbWUoYXV0b21hdGlvblBvaW50cywgdGltZSkge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5maW5kKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIHJldHVybiBwLnRpbWUgPT0gdGltZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc1BvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNvcnRQb2ludHMoYXV0b21hdGlvblBvaW50cykge1xuICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgICAgICAgaWYgKGEudGltZSA+IGIudGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1pbl92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtaW5fdmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1heF92YWx1ZSAhPSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShtYXhfdmFsdWUpKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWF4X3ZhbHVlIGJlIGEgbnVtYmVyXCIpO1xuICAgIH1cbiAgICBpZiAobWluX3ZhbHVlID09IG1heF92YWx1ZSkge1xuICAgICAgICB0aHJvdyhcIkludmFsaWQgQ29uc3RydWN0b3I6IG1heF92YWx1ZSBjYW5ub3QgZXF1YWwgdG8gbWluX3ZhbHVlXCIpO1xuICAgIH1cbiAgICBpZiAobWF4X3ZhbHVlIDwgbWluX3ZhbHVlKSB7XG4gICAgICAgIHRocm93KFwiSW52YWxpZCBDb25zdHJ1Y3RvcjogbWluX3ZhbHVlIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gbWF4X3ZhbHVlXCIpO1xuICAgIH1cbiAgICB2YXIgYXV0b21hdGlvblBvaW50cyA9IFtdO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJpbnNlcnRQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHRpbWUpIHx8IHRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwiVGltZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwibnVtYmVyXCIgfHwgIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIlZhbHVlIG11c3QgYmUgYSBudW1iZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChoYXNQb2ludEF0VGltZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFscmVhZHkgYSB2YWx1ZSBlbnRyeSBhdCB0aW1lIFwiK3RpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW5fdmFsdWUpLCBtYXhfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IG5ldyBUaW1lUG9pbnQodGhpcywgdGltZSwgdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgICAgICAgICAgICAgYXV0b21hdGlvblBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzID0gc29ydFBvaW50cyhhdXRvbWF0aW9uUG9pbnRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UG9pbnRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oc3RhcnRfdGltZSwgZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRfdGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW5kX3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBlbmRfdGltZSA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5maWx0ZXIoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPj0gc3RhcnRfdGltZSAmJiBwb2ludC50aW1lIDwgZW5kX3RpbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUG9pbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYXV0b21hdGlvblBvaW50cy5maW5kSW5kZXgoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLnNwbGljZShpbmRleCwgMSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdGF0aWNWYWx1ZUFzU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImxlbmd0aFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW11bVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1pbl92YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1heGltdW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtYXhfdmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVQb2ludFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50LnRpbWUgPT0gdGltZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWUgPT0gXCJudW1iZXJcIiAmJiBvcHRpb25zLnRpbWUgIT0gcG9pbnQudGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFBvaW50QXRUaW1lKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJBIHRpbWUtcG9pbnQgYWxyZWFkeSBleGlzdHMgYXQgXFxcIlwiK1N0cmluZyhvcHRpb25zLnRpbWUpK1wiXFxcIiBzZWNvbmRzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC50aW1lID0gb3B0aW9ucy50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25Qb2ludHMgPSBzb3J0UG9pbnRzKGF1dG9tYXRpb25Qb2ludHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBvaW50LnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgUGFyYW1ldGVyQXV0b21hdGlvbiA9IGZ1bmN0aW9uKHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYykge1xuICAgIFRpbWVQb2ludExpc3QuY2FsbCh0aGlzLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJlbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSAodCA9PT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiA9IGZ1bmN0aW9uIChvd25lciwgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGFyYW1ldGVyQXV0b21hdGlvbi5jYWxsKHRoaXMsIHBhcmFtZXRlciwgbWluX3ZhbHVlLCBtYXhfdmFsdWUsIHRvU3RyaW5nRnVuYyk7XG4gICAgZnVuY3Rpb24gbGluZWFySW50ZXJwb2xhdGlvbih0aW1lLCBwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgdDEgPSBwb2ludEEudGltZTtcbiAgICAgICAgdmFyIHQyID0gcG9pbnRCLnRpbWU7XG4gICAgICAgIHRpbWUgLT0gdDE7XG4gICAgICAgIHQyIC09IHQxO1xuICAgICAgICB0MSA9IDA7XG5cbiAgICAgICAgdmFyIHAgPSB0aW1lL3QyO1xuICAgICAgICByZXR1cm4gcG9pbnRBLnZhbHVlICogKDEtcCkgKyBwb2ludEIudmFsdWUgKiBwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaXJzdFBvaW50ID0gYXV0b21hdGlvblBvaW50cy5yZWR1Y2UoZnVuY3Rpb24ocG9pbnQsIG5leHRQb2ludCkge1xuICAgICAgICAgICAgaWYgKG5leHRQb2ludC50aW1lIDw9IHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFBvaW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGF1dG9tYXRpb25Qb2ludHNbMF0pO1xuICAgICAgICB2YXIgc2Vjb25kUG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLmZpbmQoZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwb2ludC50aW1lID4gZmlyc3RQb2ludC50aW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNlY29uZFBvaW50ID09PSB1bmRlZmluZWQgfHwgZmlyc3RQb2ludC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0UG9pbnQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVhckludGVycG9sYXRpb24odGltZSwgZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0KGF1dG9tYXRpb25Qb2ludHMsIHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gb3duZXIudXBkYXRlKGdldEN1cnJlbnRUaW1lVmFsdWUoYXV0b21hdGlvblBvaW50cywgdGltZSkpO1xuICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUoc3RhcnRQb3NpdGlvbiwgY29udGV4dFRpbWUpO1xuICAgICAgICBhdXRvbWF0aW9uUG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAudGltZSA+IHRpbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHAudGltZSAtIHRpbWU7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBvd25lci51cGRhdGUocC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKHYsIHQrY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKGNvbnRleHRUaW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0VGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250ZXh0VGltZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lVmFsdWUodGhpcy5nZXRQb2ludHMoKSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQodGhpcy5nZXRQb2ludHMoKSwgdGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9wXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG59O1xuUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFBhcmFtZXRlckF1dG9tYXRpb24ucHJvdG90eXBlKTtcblBhcmFtZXRlckxpbmVhckF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbjtcblxudmFyIFBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uID0gZnVuY3Rpb24gKG93bmVyLCBwYXJhbWV0ZXIsIG1pbl92YWx1ZSwgbWF4X3ZhbHVlLCB0b1N0cmluZ0Z1bmMpIHtcbiAgICBQYXJhbWV0ZXJBdXRvbWF0aW9uLmNhbGwodGhpcywgcGFyYW1ldGVyLCBtaW5fdmFsdWUsIG1heF92YWx1ZSwgdG9TdHJpbmdGdW5jKTtcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50VGltZVZhbHVlKGF1dG9tYXRpb25Qb2ludHMsIHRpbWUpIHtcbiAgICAgICAgaWYgKGF1dG9tYXRpb25Qb2ludHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiTm8gYXV0b21hdGlvbiBwb2ludHMgYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdXRvbWF0aW9uUG9pbnRzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvblBvaW50c1swXS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZWFyZXN0UG9pbnQgPSBhdXRvbWF0aW9uUG9pbnRzLnJlZHVjZShmdW5jdGlvbihwb2ludCwgbmV4dFBvaW50KSB7XG4gICAgICAgICAgICBpZiAobmV4dFBvaW50LnRpbWUgPD0gdGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0UG9pbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgYXV0b21hdGlvblBvaW50c1swXSk7XG4gICAgICAgIHJldHVybiBuZWFyZXN0UG9pbnQudmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnQoYXV0b21hdGlvblBvaW50cywgdGltZSwgY29udGV4dFRpbWUpIHtcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBvd25lci51cGRhdGUoZ2V0Q3VycmVudFRpbWVWYWx1ZShhdXRvbWF0aW9uUG9pbnRzLCB0aW1lKSk7XG4gICAgICAgIHBhcmFtZXRlci5zZXRWYWx1ZUF0VGltZShzdGFydFBvc2l0aW9uLCBjb250ZXh0VGltZSk7XG4gICAgICAgIGF1dG9tYXRpb25Qb2ludHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICBpZiAocC50aW1lID4gdGltZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gcC50aW1lIC0gdGltZTtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG93bmVyLnVwZGF0ZShwLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXIuc2V0VmFsdWVBdFRpbWUodiwgdCtjb250ZXh0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoY29udGV4dFRpbWUpIHtcbiAgICAgICAgcGFyYW1ldGVyLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyhjb250ZXh0VGltZSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcImdldEN1cnJlbnRUaW1lVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEN1cnJlbnRUaW1lVmFsdWUodGhpcy5nZXRQb2ludHMoKSwgdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0aW1lLCBjb250ZXh0VGltZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQodGhpcy5nZXRQb2ludHMoKSwgdGltZSwgY29udGV4dFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9wXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICBzdG9wKGNvbnRleHRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblBhcmFtZXRlclN0ZXBBdXRvbWF0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGFyYW1ldGVyQXV0b21hdGlvbi5wcm90b3R5cGUpO1xuUGFyYW1ldGVyU3RlcEF1dG9tYXRpb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1ldGVyU3RlcEF1dG9tYXRpb247XG5cbmV4cG9ydCB7UGFyYW1ldGVyTGluZWFyQXV0b21hdGlvbiwgUGFyYW1ldGVyU3RlcEF1dG9tYXRpb259O1xuIiwiLyoganNoaW50IGVzdmVyc2lvbjogNiAqL1xuZnVuY3Rpb24gUGx1Z2luUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkYXRhVHlwZSkge1xuICAgIHZhciB1cGRhdGUsIHRyYW5zbGF0ZSwgdHJpZ2dlcjtcbiAgICB2YXIgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbiAgICB1cGRhdGUgPSB0cmFuc2xhdGUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xuICAgIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0cmlnZ2VyUGFyYW1ldGVyU2V0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHZhciBvcHRzID0ge2RldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUludGVyZmFjZXM6IHVwZGF0ZUludGVyZmFjZXNcbiAgICAgICAgICAgICAgICB9fTtcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInBhcmFtZXRlcnNldFwiLCBvcHRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibmFtZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJvd25lclwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG93bmVyXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZigwKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgdmFsdWVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZSA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidHJhbnNsYXRlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiTXVzdCBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZigwKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgdmFsdWVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSA9IGY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidHJpZ2dlclwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGJlIGEgY2FsbGJhY2sgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyaWdnZXIgPSBmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3QgYmluZCB0aGlzIHBhcmFtZXRlciB0eXBlIHRvIGFuIGF1ZGlvIHBhcmFtZXRlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7UGx1Z2luUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcblxuZnVuY3Rpb24gU3RyaW5nUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1heExlbmd0aCwgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiU3RyaW5nXCIpO1xuICAgIHZhciBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgdmFyIGF1ZGlvUGFyYW1ldGVyO1xuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUodiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAoXCJTdHJpbmcgbG9uZ2VyIHRoYW4gXCIgKyBtYXhMZW5ndGggKyBcIiBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJvdW5kQXVkaW9QYXJhbSkge1xuICAgICAgICAgICAgdGhpcy5ib3VuZEF1ZGlvUGFyYW0udmFsdWUgPSB0aGlzLnVwZGF0ZSh2KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3ZhbHVlICE9PSB2KSB7XG4gICAgICAgICAgICBfdmFsdWUgPSB2O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUGFyYW1ldGVyU2V0KHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJTdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImRlc3Ryb3lcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3duZXIgPSBuYW1lID0gZGVmYXVsdFZhbHVlID0gbWF4TGVuZ3RoID0gX3ZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1heExlbmd0aFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IG1heExlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBcImRlZmF1bHRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGRlZmF1bHRWYWx1ZVxuICAgICAgICB9LFxuICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlKHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNldFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odiwgdXBkYXRlSW50ZXJmYWNlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXRWYWx1ZS5jYWxsKHRoaXMsIHYsIHVwZGF0ZUludGVyZmFjZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJpbmRUb0F1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFwID09IFwib2JqZWN0XCIgJiYgYXAudmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyID0gYXA7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvUGFyYW1ldGVyLnZhbHVlID0gdGhpcy51cGRhdGUoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9TdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU3RyaW5nRnVuYyA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvU3RyaW5nRnVuYy5jYWxsKHRoaXMsIHYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5TdHJpbmdQYXJhbWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShQbHVnaW5QYXJhbWV0ZXIucHJvdG90eXBlKTtcblN0cmluZ1BhcmFtZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdQYXJhbWV0ZXI7XG5cbmV4cG9ydCB7U3RyaW5nUGFyYW1ldGVyfTtcbiIsIi8qIGpzaGludCBlc3ZlcnNpb246IDYgKi9cbmltcG9ydCB7UGx1Z2luUGFyYW1ldGVyfSBmcm9tIFwiLi9QbHVnaW5QYXJhbWV0ZXIuanNcIjtcbmltcG9ydCB7UGFyYW1ldGVyU3RlcEF1dG9tYXRpb259IGZyb20gXCIuL1BhcmFtZXRlckF1dG9tYXRpb24uanNcIjtcblxuZnVuY3Rpb24gU3dpdGNoUGFyYW1ldGVyKG93bmVyLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG1pblN0YXRlLCBtYXhTdGF0ZSwgdG9TdHJpbmdGdW5jKSB7XG4gICAgUGx1Z2luUGFyYW1ldGVyLmNhbGwodGhpcywgb3duZXIsIG5hbWUsIFwiQnV0dG9uXCIpO1xuICAgIHZhciBvbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgdmFyIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB2YXIgYXVkaW9QYXJhbWV0ZXIsIGF1dG9tYXRpb247XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZSh2LCB1cGRhdGVJbnRlcmZhY2VzKSB7XG4gICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgIHRocm93IChcIlNldCB2YWx1ZSBpcyBsZXNzIHRoYW4gXCIgKyBtaW5TdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPiBtYXhTdGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiU2V0IHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiBcIiArIG1heFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ib3VuZEF1ZGlvUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmRBdWRpb1BhcmFtLnZhbHVlID0gdGhpcy51cGRhdGUodik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF92YWx1ZSAhPT0gdikge1xuICAgICAgICAgICAgX3ZhbHVlID0gdjtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclBhcmFtZXRlclNldCh1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyaWdnZXIoKTtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlN3aXRjaFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVzdHJveVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvd25lciA9IG5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVmYXVsdFZhbHVlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZGVmYXVsdFZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluU3RhdGVcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBtaW5TdGF0ZVxuICAgICAgICB9LFxuICAgICAgICBcIm1heFN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogbWF4U3RhdGVcbiAgICAgICAgfSxcbiAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm91bmRBdWRpb1BhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZSh0aGlzLmJvdW5kQXVkaW9QYXJhbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRWYWx1ZVwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHYsIHVwZGF0ZUludGVyZmFjZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2LCB1cGRhdGVJbnRlcmZhY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpbmNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh2ID4gbWF4U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1pblN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWNyZW1lbnRcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBfdmFsdWUgLSAxO1xuICAgICAgICAgICAgICAgIGlmICh2IDwgbWluU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG1heFN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJiaW5kVG9BdWRpb1BhcmFtXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcCA9PSBcIm9iamVjdFwiICYmIGFwLnZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlciA9IGFwO1xuICAgICAgICAgICAgICAgICAgICBhdWRpb1BhcmFtZXRlci52YWx1ZSA9IHRoaXMudXBkYXRlKF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcC5zZXRWYWx1ZUF0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbiA9IG5ldyBQYXJhbWV0ZXJTdGVwQXV0b21hdGlvbih0aGlzLCBhdWRpb1BhcmFtZXRlciwgbWluU3RhdGUsIG1heFN0YXRlLCB0b1N0cmluZ0Z1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0VmFsdWVBdFRpbWVQb2ludFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0b21hdGlvblBvaW50cy5nZXRWYWx1ZUF0VGltZVBvaW50KHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF1dG9tYXRpb25Qb2ludHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKHRpbWUsIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXV0b21hdGlvbi5zdGFydCh0aW1lLCBjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oY29udGV4dFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uc3RvcChjb250ZXh0VGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF1dG9tYXRpb24uZW5hYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhdXRvbWF0aW9uLmVuYWJsZWQgPSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IGJpbmQgYXV0b21hdGlvbiBhcyBBdWRpb1BhcmFtZXRlciBpcyBub3QgYXV0b21hdGFibGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkFyZ3VtZW50IDEgaXMgbm90IGEgdmFsaWQgQXVkaW9QYXJhbWV0ZXIgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib3VuZEF1ZGlvUGFyYW1cIjoge1xuICAgICAgICAgICAgXCJjb25maWd1cmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9QYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXV0b21hdGFibGVcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXV0b21hdGlvbiA9PSBcIm9iamVjdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvU3RyaW5nXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgIGlmICh2ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b1N0cmluZ0Z1bmMgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b1N0cmluZ0Z1bmMuY2FsbCh0aGlzLCB2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuU3dpdGNoUGFyYW1ldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUGx1Z2luUGFyYW1ldGVyLnByb3RvdHlwZSk7XG5Td2l0Y2hQYXJhbWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3dpdGNoUGFyYW1ldGVyO1xuXG5leHBvcnQge1N3aXRjaFBhcmFtZXRlcn07XG4iLCIvLyBUaGlzIGRlZmluZXMgYSBtYXN0ZXIgb2JqZWN0IGZvciBob2xkaW5nIGFsbCB0aGUgcGx1Z2lucyBhbmQgY29tbXVuaWNhdGluZ1xuLy8gVGhpcyBvYmplY3Qgd2lsbCBhbHNvIGhhbmRsZSBjcmVhdGlvbiBhbmQgZGVzdHJ1Y3Rpb24gb2YgcGx1Z2luc1xuLypnbG9iYWxzIFByb21pc2UsIGRvY3VtZW50LCBjb25zb2xlLCBMaW5rZWRTdG9yZSwgV29ya2VyLCB3aW5kb3csIFhNTEh0dHBSZXF1ZXN0ICovXG4vKmVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbi8vIExvYWQganNYdHJhY3RcbihmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93LmpzWHRyYWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzLnNyYyA9IFwiaHR0cHM6Ly9naXRjZG4ueHl6L3JlcG8vbmlja2ppbGxpbmdzL2pzLXh0cmFjdC9tYXN0ZXIvanNYdHJhY3QuanNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHMpO1xuICAgIH1cbn0pKCk7XG5cbmltcG9ydCBMaW5rZWRTdG9yZSBmcm9tICcuL0xpbmtlZFN0b3JlJztcbmltcG9ydCB7QmFzZVBsdWdpbn0gZnJvbSAnLi9iYXNlX3BsdWdpbic7XG5pbXBvcnQge1N5bnRoZXNpc2VyQmFzZVBsdWdpbn0gZnJvbSAnLi9zeW50aF9iYXNlJztcblxuZnVuY3Rpb24gUGx1Z2luRmFjdG9yeShhdWRpb19jb250ZXh0LCByb290VVJMKSB7XG4gICAgdmFyIHN1YkZhY3RvcmllcyA9IFtdLFxuICAgIHN5bnRoZXNpc2VySG9zdHMgPSBbXSxcbiAgICBwbHVnaW5fcHJvdG90eXBlcyA9IFtdLFxuICAgIHBsdWdpbnNMaXN0ID0gW10sXG4gICAgY3VycmVudFBsdWdpbklkID0gMCxcbiAgICBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWUsXG4gICAgYXVkaW9TdGFydENvbnRleHRUaW1lLFxuICAgIGF1ZGlvU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgLypcbiAgICAgICAgdGhpcy5sb2FkUmVzb3VyY2UuIExvYWQgYSByZXNvdXJjZSBpbnRvIHRoZSBnbG9iYWwgbmFtZXNwYWNlXG5cbiAgICAgICAgQHBhcmFtIHJlc291cmNlT2JqZWN0OiBhIEpTIG9iamVjdCBob2xkaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAgICAgICAgICAgIC51cmw6IFVSTCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgICAgICAgIC50ZXN0OiBmdW5jdGlvbiB0byBjYWxsLCByZXR1cm5zIHRydWUgaWYgcmVzb3VyY2UgYWxyZWFkeSBsb2FkZWQsIGZhbHNlIGlmIG5vdFxuICAgICovXG4gICAgdGhpcy5sb2FkUHJvdG90eXBlTW9kdWxlID0gZnVuY3Rpb24ocmVzb3VyY2VPYmplY3QsIG11c3RNb2R1bGUpIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGdsb2JhbC5kZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBnbG9iYWwuZGVmaW5lLmFtZCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5yZXF1aXJlKFtyZXNvdXJjZU9iamVjdC51cmxdLCBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwubW9kdWxlID09IFwib2JqZWN0XCIgJiYgZ2xvYmFsLm1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShnbG9iYWwucmVxdWlyZShyZXNvdXJjZU9iamVjdC51cmwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiQ2Fubm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGV4ZWN1dGFibGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXhlY3V0YWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkuYWRkUHJvdG90eXBlKGV4ZWN1dGFibGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJJcyBub3QgYSBtb2R1bGUgcGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChtdXN0TW9kdWxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiQ2Fubm90IGxvYWQgdXNpbmcgbW9kdWxhciBzeXN0ZW1zXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgbG9hZCB1c2luZyBtb2R1bGFyIHN5c3RlbXNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkubG9hZFBsdWdpblNjcmlwdChyZXNvdXJjZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5sb2FkUmVzb3VyY2UgPSBmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIkVycm9yXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJlamVjdChcInJlc291cmNlT2JqZWN0LnVybCBtdXN0IGJlIGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnRlc3QgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlamVjdChcInJlc291cmNlT2JqZWN0LnRlc3QgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXNvdXJjZU9iamVjdCl7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSByZXNvdXJjZU9iamVjdC50ZXN0KCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgIT09IGZhbHNlICYmIHJlc3BvbnNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwicmVzb3VyY2VPYmplY3QudGVzdCBtdXN0IHJldHVybiB0cnVlIG9yIGZhbHNlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNvdXJjZU9iamVjdC50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudHlwZSA9IFwiamF2YXNjcmlwdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudHlwZSA9IHJlc291cmNlT2JqZWN0LnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHN3aXRjaCAocmVzb3VyY2VPYmplY3QudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJqYXZhc2NyaXB0XCI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpLnRoZW4oZnVuY3Rpb24gKHJlc291cmNlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybk9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eShyZXNvdXJjZU9iamVjdC5yZXR1cm5PYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93W3Jlc291cmNlT2JqZWN0LnJldHVybk9iamVjdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KHJlc291cmNlT2JqZWN0LnJldHVybk9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUod2luZG93W3Jlc291cmNlT2JqZWN0LnJldHVybk9iamVjdF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiSW52YWxpZCB0eXBlIFwiICsgU3RyaW5nKHJlc291cmNlT2JqZWN0LnR5cGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMubG9hZFBsdWdpblNjcmlwdCA9IGZ1bmN0aW9uIChyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwicmVzb3VyY2VPYmplY3QucmV0dXJuT2JqZWN0IG11c3QgYmUgdGhlIG5hbWUgb2YgdGhlIHByb3RvdHlwZSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCkudGhlbihmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkUHJvdG90eXBlKHBsdWdpbik7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZShyZXNvdXJjZU9iamVjdCkge1xuICAgICAgICBpZiAocmVzb3VyY2VPYmplY3QudXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpID09PSBmYWxzZSAmJiByb290VVJMICE9PSB1bmRlZmluZWQgJiYgcm9vdFVSTC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgICAgICAgcmVzb3VyY2VPYmplY3QudXJsID0gcm9vdFVSTCArIHJlc291cmNlT2JqZWN0LnVybDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcmVzb3VyY2VPYmplY3QudXJsKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC50ZXh0Q29udGVudCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc291cmNlT2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb3B5RmFjdG9yeShuZXdjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmIChuZXdjb250ZXh0LnNhbXBsZVJhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vTWF5YmUgbm90IGEgcmVhbCBBdWRpb0NvbnRleHRcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpbyBjb250ZXh0IHByb3ZpZGVkXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihuZXdjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgQkZhY3RvcnkgPSBuZXcgUGx1Z2luRmFjdG9yeShuZXdjb250ZXh0KTtcbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgcGx1Z2luX3Byb3RvdHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvdG8pIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKEJGYWN0b3J5LmFkZFByb3RvdHlwZShwcm90by5wcm90bykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJGYWN0b3J5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obmV3RmFjdG9yeSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld0ZhY3Rvcnk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBQbHVnaW5JbnN0YW5jZSA9IGZ1bmN0aW9uIChpZCwgcGx1Z2luX25vZGUpIHtcbiAgICAgICAgdGhpcy5uZXh0X25vZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBfYnlwYXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGV2ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG4gICAgICAgIHZhciBfaW4gPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgICAgICAgIF9vdXQgPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgICAgICBfaW4uY29ubmVjdChwbHVnaW5fbm9kZS5nZXRJbnB1dHMoKVswXSk7XG4gICAgICAgIHBsdWdpbl9ub2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xuICAgICAgICBwbHVnaW5fbm9kZS5hZGRFdmVudExpc3RlbmVyKHRoaXMpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGJ5cGFzc0VuYWJsZSgpIHtcbiAgICAgICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBfaW4uY29ubmVjdChfb3V0KTtcbiAgICAgICAgICAgIF9ieXBhc3NlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGx1Z2luX25vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzICE9IDApIHtcbiAgICAgICAgICAgICAgICBldi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImFsdGVyZGVsYXlcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYnlwYXNzRGlzYWJsZSgpIHtcbiAgICAgICAgICAgIF9pbi5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBfaW4uY29ubmVjdChwbHVnaW5fbm9kZS5nZXRJbnB1dHMoKVswXSk7XG4gICAgICAgICAgICBfYnlwYXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbm9kZS5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMgIT0gMCkge1xuICAgICAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ5cGFzcyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUgPSAoc3RhdGUgPT09IHRydWUpO1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBfYnlwYXNzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2J5cGFzc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgYnlwYXNzRW5hYmxlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ5cGFzc0Rpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfYnlwYXNzZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pc0J5cGFzc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlY29ubmVjdCA9IGZ1bmN0aW9uIChuZXdfbmV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KG5ld19uZXh0KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAobmV3X25leHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHRfbm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3X25leHQgIT09IHVuZGVmaW5lZCAmJiBuZXdfbmV4dC5pbnB1dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X25vZGUgPSBuZXdfbmV4dDtcbiAgICAgICAgICAgICAgICBfb3V0LmNvbm5lY3QodGhpcy5uZXh0X25vZGUuaW5wdXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHRfbm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgX291dC5kaXNjb25uZWN0KHRoaXMubmV4dF9ub2RlLmlucHV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfbm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwbHVnaW5fbm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgXCJoYW5kbGVFdmVudFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGUudHlwZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImFkZEV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2LmFkZEV2ZW50TGlzdGVuZXIoYSxiLGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oYSxiLGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxiLGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnaWQnOiB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbm9kZSc6IHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBwbHVnaW5fbm9kZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdpbnB1dCc6IHtcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2luO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnb3V0cHV0Jzoge1xuICAgICAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnYnlwYXNzZWQnOiB7XG4gICAgICAgICAgICAgICAgJ2dldCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9ieXBhc3NlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUGx1Z2luSW5zdGFuY2UucHJvdG90eXBlLmZhY3RvcnkgPSB0aGlzO1xuXG4gICAgdmFyIE1pZGlTeW50aGVzaXNJbnN0YW5jZSA9IGZ1bmN0aW9uKGlkLCBzeW50aE5vZGUpIHtcbiAgICAgICAgdmFyIF9vdXQgPSBhdWRpb19jb250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICAgICAgc3ludGhOb2RlLmdldE91dHB1dHMoKVswXS5jb25uZWN0KF9vdXQpO1xuXG4gICAgICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN5bnRoTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgJ2lkJzoge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ25vZGUnOiB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogc3ludGhOb2RlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ291dHB1dCc6IHtcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX291dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIFBsdWdpblByb3RvdHlwZSA9IGZ1bmN0aW9uIChwcm90bywgZmFjdG9yeSkge1xuXHQgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLm5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncHJvdG8nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3ZlcnNpb24nOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS52ZXJzaW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3VuaXF1ZUlEJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudW5pcXVlSURcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnaGFzTWlkaUlucHV0Jzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUuaGFzTWlkaUlucHV0IHx8IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2hhc01pZGlPdXRwdXQnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3RvLnByb3RvdHlwZS5oYXNNaWRpT3V0cHV0IHx8IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUGx1Z2luSW5zdGFuY2UgPSBhc3luYyBmdW5jdGlvbihvd25lciwgYXN5bmMpIHtcbiAgICAgICAgICAgIHZhciBwID0gY3JlYXRlUGx1Z2luSW5zdGFuY2Uob3duZXIpO1xuICAgICAgICAgICAgaWYgKGFzeW5jID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUGx1Z2luSW5zdGFuY2Uob3duZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB3YWl0VW50aWxSZWFkeSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrSXNSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiUGx1Z2luIG5vdCByZWFkeVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBwcm90byhmYWN0b3J5LCBvd25lcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW4uaW5pdGlhbGlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbi5pbml0aWFsaXNlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGx1Z2luKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZTtcbiAgICAgICAgICAgICAgICBpZiAocGx1Z2luLmhhc01pZGlJbnB1dCAhPT0gdHJ1ZSAmJiBwbHVnaW4uaGFzTWlkaU91dHB1dCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbmV3IFBsdWdpbkluc3RhbmNlKGN1cnJlbnRQbHVnaW5JZCsrLCBwbHVnaW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luLmhhc01pZGlJbnB1dCA9PT0gdHJ1ZSAmJiBwbHVnaW4uaGFzTWlkaU91dHB1dCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gbmV3IE1pZGlTeW50aGVzaXNJbnN0YW5jZShjdXJyZW50UGx1Z2luSWQrKywgcGx1Z2luKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk5vIEluc3RhbmNlIEhvbGRlciBBdmFpbGFibGUhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhwbHVnaW4sIHtcbiAgICAgICAgICAgICAgICAgICAgJ3BsdWdpbkluc3RhbmNlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbm9kZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAncHJvdG90eXBlT2JqZWN0Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUubmFtZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndmVyc2lvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm90by5wcm90b3R5cGUudmVyc2lvblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAndW5pcXVlSUQnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlEXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdTZXNpb25EYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhY3RvcnkuU2Vzc2lvbkRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhY3RvcnkuVXNlckRhdGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgXCJwcm90b3R5cGVPYmplY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc2VsZlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImV4dGVybmFsSW50ZXJmYWNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IHBsdWdpbi5leHRlcm5hbEludGVyZmFjZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZmFjdG9yeS5yZWdpc3RlclBsdWdpbkluc3RhbmNlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkUmVzb3VyY2VDaGFpbihyZXNvdXJjZU9iamVjdCwgcCkge1xuICAgICAgICAgICAgaWYgKCFwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBsb2FkUmVzb3VyY2UocmVzb3VyY2VPYmplY3QpO1xuICAgICAgICAgICAgICAgIGsudGhlbihmdW5jdGlvbiAocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlT2JqZWN0LnJlc291cmNlcyAhPT0gdW5kZWZpbmVkICYmIHJlc291cmNlT2JqZWN0LnJlc291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlT2JqZWN0LnJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBsb2FkUmVzb3VyY2VDaGFpbihyZXNvdXJjZU9iamVjdC5yZXNvdXJjZXNbaV0sIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLnRoZW4obG9hZFJlc291cmNlKHJlc291cmNlT2JqZWN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkU3R5bGVzaGVldCh1cmwpIHtcbiAgICAgICAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICAgICAgICAgICAgY3NzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2Nzc1wiKTtcbiAgICAgICAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoY3NzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2VPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZU9iamVjdC5oYXNPd25Qcm9wZXJ0eShcImxlbmd0aFwiKSAmJiByZXNvdXJjZU9iamVjdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2VPYmplY3RbcmVzb3VyY2VPYmplY3QubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNvdXJjZU9iamVjdC5oYXNPd25Qcm9wZXJ0eShcInJlc291cmNlc1wiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVHZXRUZXN0KHJlc291cmNlT2JqZWN0LnJlc291cmNlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZU9iamVjdC50ZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc291cmNlUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgaWYgKHByb3RvLnByb3RvdHlwZS5yZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvdG8ucHJvdG90eXBlLnJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciByZXNvdXJjZSA9IHByb3RvLnByb3RvdHlwZS5yZXNvdXJjZXNbaV07XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UudHlwZSA9IHJlc291cmNlLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc291cmNlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNzc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFN0eWxlc2hlZXQocmVzb3VyY2UudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiamF2YXNjcmlwdFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvbWlzZSc6IGxvYWRSZXNvdXJjZUNoYWluKHJlc291cmNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb21wbGV0ZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVzdCc6IHJlY3Vyc2l2ZUdldFRlc3QocmVzb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnByb21pc2UudGhlbihvYmplY3QuY29tcGxldGUuYmluZChvYmplY3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlUHJvbWlzZXMucHVzaChvYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJDb3VsZCBub3QgbG9hZCBcIiArIHJlc291cmNlLnVybCArIFwiLCBpbnZhbGlkIHJlc291cmNlLnR5cGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRSZXNvdXJjZVByb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlUHJvbWlzZXM7XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrSXNSZWFkeSgpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc291cmNlUHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2VQcm9taXNlc1tpXS5zdGF0ZSAhPT0gMSB8fCAhcmVzb3VyY2VQcm9taXNlc1tpXS50ZXN0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiB3YWl0VW50aWxSZWFkeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXNvdXJjZVByb21pc2VzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmFkZFByb3RvdHlwZSA9IGZ1bmN0aW9uIChwbHVnaW5fcHJvdG8pIHtcbiAgICAgICAgdmFyIGZhY3RvcnkgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbl9wcm90byAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiVGhlIFByb3RvdHlwZSBtdXN0IGJlIGEgZnVuY3Rpb24hXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBsdWdpbl9wcm90by5wcm90b3R5cGUubmFtZSAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTWFsZm9ybWVkIHBsdWdpbi4gTmFtZSBub3QgZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24gIT09IFwic3RyaW5nXCIgfHwgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS52ZXJzaW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIFZlcnNpb24gbm90IGRlZmluZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRCAhPT0gXCJzdHJpbmdcIiB8fCBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnVuaXF1ZUlELmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChcIk1hbGZvcm1lZCBwbHVnaW4uIHVuaXF1ZUlEIG5vdCBkZWZpbmVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBsdWdpbl9wcm90byk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocGx1Z2luX3Byb3RvKSB7XG4gICAgICAgICAgICB2YXIgdGVzdE9iaiA9IHtcbiAgICAgICAgICAgICAgICAncHJvdG8nOiBwbHVnaW5fcHJvdG8sXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLm5hbWUsXG4gICAgICAgICAgICAgICAgJ3ZlcnNpb24nOiBwbHVnaW5fcHJvdG8ucHJvdG90eXBlLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgJ3VuaXF1ZUlEJzogcGx1Z2luX3Byb3RvLnByb3RvdHlwZS51bmlxdWVJRFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvYmogPSBwbHVnaW5fcHJvdG90eXBlcy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtO1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChwYXJhbSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlW3BhcmFtXSA9PT0gdGhpc1twYXJhbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID09PSA0O1xuICAgICAgICAgICAgfSwgdGVzdE9iaik7XG4gICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiVGhlIHBsdWdpbiBtdXN0IGJlIHVuaXF1ZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmogPSBuZXcgUGx1Z2luUHJvdG90eXBlKHBsdWdpbl9wcm90bywgZmFjdG9yeSk7XG4gICAgICAgICAgICBwbHVnaW5fcHJvdG90eXBlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHtcbiAgICAgICAgICAgICAgICAnZmFjdG9yeSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZmFjdG9yeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0UHJvdG90eXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEF1ZGlvUGx1Z2luUHJvdG90eXBlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGx1Z2luX3Byb3RvdHlwZXMuZmlsdGVyKGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uaGFzTWlkaUlucHV0ID09IGZhbHNlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldE1pZGlTeW50aFByb3RvdHlwZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBsdWdpbl9wcm90b3R5cGVzLmZpbHRlcihmdW5jdGlvbihwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmhhc01pZGlJbnB1dCA9PSB0cnVlICYmIHByb3RvLmhhc01pZGlPdXRwdXQgPT0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldE1pZGlQbHVnaW5Qcm90b3R5cGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5fcHJvdG90eXBlcy5maWx0ZXIoZnVuY3Rpb24ocHJvdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5oYXNNaWRpSW5wdXQgPT0gdHJ1ZSAmJiBwcm90by5oYXNNaWRpT3V0cHV0ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEFsbFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwbHVnaW5zTGlzdDtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRBbGxQbHVnaW5zT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICdmYWN0b3J5JzogdGhpcyxcbiAgICAgICAgICAgICAgICAnc3ViRmFjdG9yaWVzJzogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3ViRmFjdG9yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvYmouc3ViRmFjdG9yaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICdzdWJGYWN0b3J5Jzogc3ViRmFjdG9yaWVzW2ldLFxuICAgICAgICAgICAgICAgICdwbHVnaW5zJzogc3ViRmFjdG9yaWVzW2ldLmdldFBsdWdpbnMoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVTdWJGYWN0b3J5ID0gZnVuY3Rpb24oY2hhaW5TdGFydCwgY2hhaW5TdG9wKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FURUQgLSBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmYXZvdXIgb2YgXFxcImNyZWF0ZUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyXFxcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICB9O1xuXG4gICAgdGhpcy5kZXN0cm95U3ViRmFjdG9yeSA9IGZ1bmN0aW9uKGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJERVBSRUNBVEVEIC0gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3VyIG9mIFxcXCJkZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXJcXFwiXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0cm95QXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIodGhpcywgY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJGYWN0b3JpZXMucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHRoaXMuZHVwbGljYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIgPSBmdW5jdGlvbihzb3VyY2VDaGFpbk1hbmFnZXIsIGNoYWluU3RhcnQsIGNoYWluU3RvcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuY3JlYXRlQXVkaW9QbHVnaW5DaGFpbk1hbmFnZXIoY2hhaW5TdGFydCwgY2hhaW5TdG9wKTtcbiAgICAgICAgdmFyIHByb21pc2VDaGFpbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBzb3VyY2VDaGFpbk1hbmFnZXIuZ2V0UGx1Z2lucygpLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luX29iamVjdCkge1xuICAgICAgICAgICAgcHJvbWlzZUNoYWluID0gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuY3JlYXRlUGx1Z2luKHBsdWdpbl9vYmplY3QucHJvdG90eXBlT2JqZWN0KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5ld1BsdWdpbikge1xuICAgICAgICAgICAgICAgICAgICBuZXdQbHVnaW4ubm9kZS5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChwbHVnaW5fb2JqZWN0Lm5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVzdHJveUF1ZGlvUGx1Z2luQ2hhaW5NYW5hZ2VyID0gZnVuY3Rpb24gKFN1YkZhY3RvcnkpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3ViRmFjdG9yaWVzLmZpbmRJbmRleChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgU3ViRmFjdG9yeSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBzdWJGYWN0b3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIFN1YkZhY3RvcnkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlTWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAgICAgdmFyIGhvc3QgPSBuZXcgTWlkaVN5bnRoZXNpc2VySG9zdChmYWN0b3J5KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoaG9zdCwge1xuICAgICAgICAgICAgJ1Nlc3Npb25EYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlNlc3Npb25EYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1VzZXJEYXRhJzoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLlVzZXJEYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzeW50aGVzaXNlckhvc3RzLnB1c2goaG9zdCk7XG4gICAgICAgIHJldHVybiBob3N0O1xuICAgIH07XG5cbiAgICB0aGlzLmRlc3Ryb3lNaWRpU3ludGhlc2lzZXJIb3N0ID0gZnVuY3Rpb24gKGhvc3QpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gc3ludGhlc2lzZXJIb3N0cy5maW5kSW5kZXgoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIGhvc3QpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgc3ludGhlc2lzZXJIb3N0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaG9zdC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5yZWdpc3RlclBsdWdpbkluc3RhbmNlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGlmIChwbHVnaW5zTGlzdC5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAgPT09IHRoaXM7XG4gICAgICAgICAgICB9LCBpbnN0YW5jZSkpIHtcbiAgICAgICAgICAgIHRocm93IChcIlBsdWdpbiBJbnN0YW5jZSBub3QgdW5pcXVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHBsdWdpbnNMaXN0LnB1c2goaW5zdGFuY2UpO1xuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dF90aW1lID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgICAgIHZhciBwcm9ncmFtX3RpbWUgPSB0aGlzLmdldEN1cnJlbnRQcm9ncmFtVGltZSgpO1xuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdGFydChpbnN0YW5jZS5ub2RlLCBwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlUGx1Z2luID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHBsdWdpbnNMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIHAuaWQgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciBwID0gcGx1Z2luc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHBbMF0ubm9kZS5leHRlcm5hbEludGVyZmFjZS5jbG9zZVdpbmRvd3MoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmdldEN1cnJlbnRQcm9ncmFtVGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoYXVkaW9TdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZSAtIGF1ZGlvU3RhcnRDb250ZXh0VGltZSArIGF1ZGlvU3RhcnRQcm9ncmFtVGltZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhdWRpb1N0YXJ0UHJvZ3JhbVRpbWVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNldEN1cnJlbnRQcm9ncmFtVGltZSA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhyb3coXCJNdXN0IHN0b3AgcGxheWJhY2sgdG8gc2V0IHRoZSBjdXJyZW50IHByb2dyYW0gdGltZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRpbWUgPT0gXCJudW1iZXJcIiAmJiB0aW1lID49IDApIHtcbiAgICAgICAgICAgIGF1ZGlvU3RhcnRQcm9ncmFtVGltZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLlBsdWdpbkdVSS5wb2xsQWxsUGx1Z2lucygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsdWdpbkF1ZGlvU3RhcnQobm9kZSwgcHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpIHtcbiAgICAgICAgbm9kZS5zdGFydC5jYWxsKG5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlck5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICB2YXIgcCA9IG5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJCeU5hbWUobik7XG4gICAgICAgICAgICBpZiAocC5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgcC5zdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsdWdpbkF1ZGlvU3RvcChub2RlKSB7XG4gICAgICAgIG5vZGUuc3RvcC5jYWxsKG5vZGUpO1xuICAgICAgICBub2RlLnBhcmFtZXRlcnMuZ2V0UGFyYW1ldGVyTmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgIHZhciBwID0gbm9kZS5wYXJhbWV0ZXJzLmdldFBhcmFtZXRlckJ5TmFtZShuKTtcbiAgICAgICAgICAgIGlmIChwLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBwLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlckF1ZGlvU3RhcnQocHJvZ3JhbV90aW1lLCBjb250ZXh0X3RpbWUpIHtcbiAgICAgICAgcGx1Z2luc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcGx1Z2luQXVkaW9TdGFydChuLm5vZGUsIHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQXVkaW9TdG9wKCkge1xuICAgICAgICBwbHVnaW5zTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICBwbHVnaW5BdWRpb1N0b3Aobi5ub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5hdWRpb1N0YXJ0ID0gZnVuY3Rpb24gKHByb2dyYW1fdGltZSwgY29udGV4dF90aW1lKSB7XG4gICAgICAgIGlmIChjb250ZXh0X3RpbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGV4dF90aW1lID0gYXVkaW9fY29udGV4dC5jdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZ3JhbV90aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2dyYW1fdGltZSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBc3N1bWluZyBzdGFydCB0aW1lIGF0IDBcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdWRpb1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFByb2dyYW1UaW1lKHByb2dyYW1fdGltZSk7XG4gICAgICAgICAgICBhdWRpb1N0YXJ0Q29udGV4dFRpbWUgPSBjb250ZXh0X3RpbWU7XG4gICAgICAgICAgICB0cmlnZ2VyQXVkaW9TdGFydChwcm9ncmFtX3RpbWUsIGNvbnRleHRfdGltZSk7XG4gICAgICAgICAgICBhdWRpb1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmF1ZGlvU3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGF1ZGlvU3RhcnRlZCkge1xuICAgICAgICAgICAgdHJpZ2dlckF1ZGlvU3RvcCgpO1xuICAgICAgICAgICAgYXVkaW9TdGFydGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIEZlYXR1cmVNYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBNYXBwaW5ncyA9IFtdO1xuXG4gICAgICAgIHZhciBGZWF0dXJlTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSB0aGlzLnBhcmFtZXRlcnM7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gW107XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RmVhdHVyZU5vZGUobGlzdCwgY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5uYW1lID09PSB0aGlzLm5hbWU7XG4gICAgICAgICAgICB9LCBjaGVjayk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRGZWF0dXJlTm9kZShmZWF0dXJlTm9kZSwgbGlzdCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgRmVhdHVyZU5vZGUoZmVhdHVyZU5vZGUpO1xuICAgICAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgU291cmNlTWFwID0gZnVuY3Rpb24gKFNlbmRlciwgcGx1Z2luSW5zdGFjZSkge1xuICAgICAgICAgICAgdmFyIE1hcHBpbmdzID0gW107XG4gICAgICAgICAgICB0aGlzLmdldFNvdXJjZUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW5JbnN0YWNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTZW5kZXI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBmaW5kRmVhdHVyZU9iamVjdChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlLm91dHB1dEluZGV4ID09PSB0aGlzLm91dHB1dEluZGV4ICYmIGUuZnJhbWVTaXplID09PSB0aGlzLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNlbmRlcigpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGaW5kKGZlYXR1cmVMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmLCBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoZiA9IDA7IGYgPCBmZWF0dXJlTGlzdC5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmVOb2RlID0gZ2V0RmVhdHVyZU5vZGUobGlzdCwgZmVhdHVyZUxpc3RbZl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmZWF0dXJlTm9kZSB8fCAoZmVhdHVyZUxpc3QucGFyYW1ldGVycyAmJiBmZWF0dXJlTGlzdFtmXS5wYXJhbWV0ZXJzLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTm9kZSA9IGFkZEZlYXR1cmVOb2RlKGZlYXR1cmVMaXN0W2ZdLCBsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGlzdFtmXS5mZWF0dXJlcyAmJiBmZWF0dXJlTGlzdFtmXS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUuZmVhdHVyZXMgPSByZWN1cnNpdmVGaW5kKGZlYXR1cmVMaXN0W2ZdLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGksIG91dHB1dExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgTWFwcGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyYW1lTGlzdCA9IG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmZyYW1lU2l6ZSA9PT0gdGhpcy5mcmFtZVNpemU7XG4gICAgICAgICAgICAgICAgICAgIH0sIE1hcHBpbmdzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmcmFtZUxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogTWFwcGluZ3NbaV0uZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dExpc3RbTWFwcGluZ3NbaV0ub3V0cHV0SW5kZXhdLnB1c2goZnJhbWVMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmcmFtZUxpc3QuZmVhdHVyZUxpc3QgPSByZWN1cnNpdmVGaW5kKE1hcHBpbmdzW2ldLmdldEZlYXR1cmVMaXN0KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTZW5kZXIudXBkYXRlRmVhdHVyZXMob3V0cHV0TGlzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvckluc3RhbmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcCA9IGZpbmRGZWF0dXJlT2JqZWN0KGZlYXR1cmVPYmplY3QpO1xuICAgICAgICAgICAgICAgIGlmICghbWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZnJhbWVTaXplJzogZmVhdHVyZU9iamVjdC5mcmFtZVNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVxdWVzdG9ycyc6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dldEZlYXR1cmVMaXN0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBGID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucmVxdWVzdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGID0gRi5jb25jYXQodGhpcy5yZXF1ZXN0b3JzW2ldLmdldEZlYXR1cmVMaXN0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgTWFwcGluZ3MucHVzaChtYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdG9yID0gbWFwLnJlcXVlc3RvcnMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSB0aGlzO1xuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3Rvckluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3Rvcikge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0b3IgPSBuZXcgUmVxdWVzdG9yTWFwKHJlcXVlc3Rvckluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnJlcXVlc3RvcnMucHVzaChyZXF1ZXN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXF1ZXN0b3IuYWRkRmVhdHVyZXMoZmVhdHVyZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlU2VuZGVyKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmZpbmRGcmFtZU1hcCA9IGZ1bmN0aW9uIChvdXRwdXRJbmRleCwgZnJhbWVTaXplKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcHBpbmdzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlLm91dHB1dEluZGV4ID09PSBvdXRwdXRJbmRleCAmJiBlLmZyYW1lU2l6ZSA9PT0gZnJhbWVTaXplKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRmVhdHVyZXMgPSBmdW5jdGlvbiAocmVxdWVzdG9ySW5zdGFuY2UsIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIE1hcHBpbmdzLmZvckVhY2goZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RvckluZGV4ID0gbWFwLnJlcXVlc3RvcnMuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuZ2V0UmVxdWVzdG9ySW5zdGFuY2UoKSA9PT0gcmVxdWVzdG9ySW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0b3JJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwLnJlcXVlc3RvcnMuc3BsaWNlKHJlcXVlc3RvckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hcCA9IGZpbmRGZWF0dXJlT2JqZWN0KGZlYXR1cmVPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0b3IgPSBtYXAucmVxdWVzdG9ycy5maW5kKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRSZXF1ZXN0b3JJbnN0YW5jZSgpID09PSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9LCByZXF1ZXN0b3JJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdG9yLmRlbGV0ZUZlYXR1cmVzKGZlYXR1cmVPYmplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVTZW5kZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBSZXF1ZXN0b3JNYXAgPSBmdW5jdGlvbiAocGx1Z2luSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHZhciBGZWF0dXJlcyA9IFtdO1xuICAgICAgICAgICAgdmFyIFJlY2VpdmVyID0gcGx1Z2luSW5zdGFuY2Uubm9kZS5mZWF0dXJlTWFwLlJlY2VpdmVyO1xuICAgICAgICAgICAgdGhpcy5nZXRSZXF1ZXN0b3JJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1Z2luSW5zdGFuY2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVseUFkZEZlYXR1cmVzKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdlIGhhdmUgbm90IGFscmVhZHkgbGlzdGVkIHRoZSBmZWF0dXJlXG4gICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlTm9kZSA9IGdldEZlYXR1cmVOb2RlKHJvb3RBcnJheSwgZmVhdHVyZU9iamVjdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmVhdHVyZU5vZGUgfHwgKGZlYXR1cmVPYmplY3RbaV0ucGFyYW1ldGVycyAmJiBmZWF0dXJlT2JqZWN0W2ldLnBhcmFtZXRlcnMubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZU5vZGUgPSBhZGRGZWF0dXJlTm9kZShmZWF0dXJlT2JqZWN0W2ldLCByb290QXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzICE9PSB1bmRlZmluZWQgJiYgZmVhdHVyZU9iamVjdFtpXS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseUFkZEZlYXR1cmVzKGZlYXR1cmVOb2RlLmZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0W2ldLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlbHlEZWxldGVGZWF0dXJlcyhyb290QXJyYXksIGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGZlYXR1cmVPYmplY3QubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBpO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgZmVhdHVyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRGZWF0dXJlTm9kZShyb290QXJyYXksIGZlYXR1cmVPYmplY3RbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzICYmIGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVseURlbGV0ZUZlYXR1cmVzKHJvb3RBcnJheVtpbmRleF0uZmVhdHVyZXMsIGZlYXR1cmVPYmplY3RbaW5kZXhdLmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXMuc3BsaWNlKGluZGV4LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFkZEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZWN1cnNpdmVseUFkZEZlYXR1cmVzKEZlYXR1cmVzLCBmZWF0dXJlT2JqZWN0LmZlYXR1cmVzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZU9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5RGVsZXRlRmVhdHVyZXMoRmVhdHVyZXMsIGZlYXR1cmVPYmplY3QuZmVhdHVyZXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRmVhdHVyZXM7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAncGx1Z2luJzogZmVhdHVyZU9iamVjdC5wbHVnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAnb3V0cHV0SW5kZXgnOiBmZWF0dXJlT2JqZWN0Lm91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZlYXR1cmVzJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdudW1iZXJPZkNoYW5uZWxzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzLm51bWJlck9mQ2hhbm5lbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3VsdHMnOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUG9zdEZlYXR1cmVzKHJvb3ROb2RlLCByZXN1bHRzTGlzdCwgRmVhdHVyZUxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSByZXN1bHRzIHRyZWUgd2hlcmUgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBwYXJhbTtcblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhbyhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5uYW1lID09PSBwYXJhbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHBhcmFtIGluIHJlc3VsdHNMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3QuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBGZWF0dXJlTGlzdC5maW5kKGFvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0c0xpc3RbcGFyYW1dLmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgbm9kZS5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290Tm9kZVtwYXJhbV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVBvc3RGZWF0dXJlcyhyb290Tm9kZVtwYXJhbV0sIHJlc3VsdHNMaXN0W3BhcmFtXSwgbm9kZS5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlW3BhcmFtXSA9IHJlc3VsdHNMaXN0W3BhcmFtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIHJlY3Vyc2l2ZSBtYXAgZm9yIGVhY2ggY2hhbm5lbFxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBmZWF0dXJlT2JqZWN0LnJlc3VsdHMubnVtYmVyT2ZDaGFubmVsczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZmVhdHVyZXMucmVzdWx0c1tpXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVQb3N0RmVhdHVyZXMobWVzc2FnZS5mZWF0dXJlcy5yZXN1bHRzW2ldLCBmZWF0dXJlT2JqZWN0LnJlc3VsdHMucmVzdWx0c1tpXS5yZXN1bHRzLCBGZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBsdWdpbkluc3RhbmNlLm5vZGUuZmVhdHVyZU1hcC5SZWNlaXZlci5wb3N0RmVhdHVyZXMobWVzc2FnZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTb3VyY2VJbmRleChTZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXBwaW5ncy5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5nZXRTZW5kZXIoKSA9PT0gdGhpcztcbiAgICAgICAgICAgIH0sIFNlbmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmaW5kU291cmNlTWFwKE1hcHBpbmdzLCBzb3VyY2UsIHBsdWdpblNlbmRlcikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZU1hcCA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleChzb3VyY2UpXTtcbiAgICAgICAgICAgIGlmICghc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgc291cmNlTWFwID0gTWFwcGluZ3NbZmluZFNvdXJjZUluZGV4KHBsdWdpblNlbmRlcildO1xuICAgICAgICAgICAgICAgIGlmICghc291cmNlTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBsb2NhdGUgc291cmNlIG1hcFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc291cmNlTWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR0VORVJBTCBJTlRFUkZBQ0VcbiAgICAgICAgdGhpcy5jcmVhdGVTb3VyY2VNYXAgPSBmdW5jdGlvbiAoU2VuZGVyLCBwbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgU291cmNlTWFwKFNlbmRlciwgcGx1Z2luSW5zdGFuY2UpO1xuICAgICAgICAgICAgTWFwcGluZ3MucHVzaChub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlbGV0ZVNvdXJjZU1hcCA9IGZ1bmN0aW9uIChTZW5kZXIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGZpbmRTb3VyY2VJbmRleChTZW5kZXIpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRocm93IChcIkNvdWxkIG5vdCBmaW5kIHRoZSBzb3VyY2UgbWFwIGZvciB0aGUgcGx1Z2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTWFwcGluZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldFBsdWdpblNlbmRlciA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4uY29uc3RydWN0b3IgPT09IFBsdWdpbkluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luID0gcGx1Z2luLm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGx1Z2luLmZlYXR1cmVNYXAuU2VuZGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVxdWVzdEZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdG9yLmNvbnN0cnVjdG9yICE9PSBQbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RvciA9IHJlcXVlc3Rvci5wbHVnaW5JbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEdldCB0aGUgc291cmNlIG1hcFxuICAgICAgICAgICAgdmFyIHBsdWdpblNlbmRlciA9IHRoaXMuZ2V0UGx1Z2luU2VuZGVyKHNvdXJjZSk7XG4gICAgICAgICAgICB2YXIgc291cmNlTWFwID0gZmluZFNvdXJjZU1hcChNYXBwaW5ncywgc291cmNlLCBwbHVnaW5TZW5kZXIpO1xuICAgICAgICAgICAgc291cmNlTWFwLnJlcXVlc3RGZWF0dXJlcyhyZXF1ZXN0b3IsIGZlYXR1cmVPYmplY3QpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRlbGV0ZUZlYXR1cmVzID0gZnVuY3Rpb24gKHJlcXVlc3Rvciwgc291cmNlLCBmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdG9yLmNvbnN0cnVjdG9yICE9PSBQbHVnaW5JbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RvciA9IHJlcXVlc3Rvci5wbHVnaW5JbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIE1hcHBpbmdzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBzb3VyY2UgbWFwXG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpblNlbmRlciA9IHRoaXMuZ2V0UGx1Z2luU2VuZGVyKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZU1hcCA9IGZpbmRTb3VyY2VNYXAoTWFwcGluZ3MsIHNvdXJjZSwgcGx1Z2luU2VuZGVyKTtcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXAuY2FuY2VsRmVhdHVyZXMocmVxdWVzdG9yLCBmZWF0dXJlT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRGZWF0dXJlTGlzdCA9IGZ1bmN0aW9uIChyZXF1ZXN0b3IsIHNvdXJjZSkge307XG4gICAgICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIFJlY2VpdmUgZnJvbSB0aGUgU2VuZGVyIG9iamVjdHNcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgZGlzdHJpYnV0ZWQgc2VhcmNoIGZvciByZXN1bHRzIHRyYW5zbWlzc2lvblxuXG4gICAgICAgICAgICAvLyBGaXJzdCBnZXQgdGhlIGluc3RhbmNlIG1hcHBpbmcgZm9yIG91dHB1dC9mcmFtZVxuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IE1hcHBpbmdzW2ZpbmRTb3VyY2VJbmRleChmZWF0dXJlT2JqZWN0LnBsdWdpbildO1xuICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBNYXBwaW5nc1tmaW5kU291cmNlSW5kZXgodGhpcy5nZXRQbHVnaW5TZW5kZXIoZmVhdHVyZU9iamVjdC5wbHVnaW4pKV07XG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiUGx1Z2luIEluc3RhbmNlIG5vdCBsb2FkZWQhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcmFtZU1hcCA9IHNvdXJjZS5maW5kRnJhbWVNYXAoZmVhdHVyZU9iamVjdC5vdXRwdXRJbmRleCwgZmVhdHVyZU9iamVjdC5mcmFtZVNpemUpO1xuXG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBmZWF0dXJlIG9iamVjdCB0byB0aGUgUmVxdWVzdG9yTWFwIG9iamVjdCB0byBoYW5kbGUgY29tbXNcbiAgICAgICAgICAgIGZyYW1lTWFwLnJlcXVlc3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucG9zdEZlYXR1cmVzKHRoaXMpO1xuICAgICAgICAgICAgfSwgZmVhdHVyZU9iamVjdCk7XG5cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdGhpcy5GZWF0dXJlTWFwID0gbmV3IEZlYXR1cmVNYXAoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5GZWF0dXJlTWFwLCBcImZhY3RvcnlcIiwge1xuICAgICAgICAndmFsdWUnOiB0aGlzXG4gICAgfSk7XG5cbiAgICB2YXIgc3RvcmVzID0gW107XG5cbiAgICB0aGlzLmNyZWF0ZVN0b3JlID0gZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICBzdG9yZXMucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0U3RvcmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc3RvcmVzO1xuICAgIH07XG5cbiAgICB0aGlzLmZpbmRTdG9yZSA9IGZ1bmN0aW9uIChzdG9yZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHN0b3Jlcy5maW5kKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5uYW1lID09PSBzdG9yZU5hbWU7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBCdWlsZCB0aGUgZGVmYXVsdCBTdG9yZXNcbiAgICB0aGlzLlNlc3Npb25EYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiU2Vzc2lvblwiKTtcbiAgICB0aGlzLlVzZXJEYXRhID0gbmV3IExpbmtlZFN0b3JlLkxpbmtlZFN0b3JlKFwiVXNlclwiKTtcblxuICAgIC8vIENyZWF0ZWQgZm9yIHRoZSBpbnB1dCBvZiBlYWNoIFN1YkZhY3RvcnkgcGx1Z2luIGNoYWluXG4gICAgdmFyIFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyID0gZnVuY3Rpb24gKG93bmVyLCBGYWN0b3J5RmVhdHVyZU1hcCkge1xuICAgICAgICB2YXIgT3V0cHV0Tm9kZSA9IGZ1bmN0aW9uIChwYXJlbnQsIG91dHB1dCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhY3RvcnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBFeHRyYWN0b3IgPSBmdW5jdGlvbiAob3V0cHV0LCBmcmFtZVNpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4dHJhY3RvciA9IG91dHB1dC5jb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZmZ0U2l6ZSA9IGZyYW1lU2l6ZTtcbiAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImZyYW1lU2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZyYW1lU2l6ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlY3Vyc2l2ZVByb2Nlc3NpbmcgPSBvd25lci5yZWN1cnNpdmVQcm9jZXNzaW5nO1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLCBsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBpLCBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVtlbnRyeS5uYW1lXS5hcHBseShiYXNlLCBlbnRyeS5wYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5mZWF0dXJlcyAmJiBlbnRyeS5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLnJlc3VsdFtlbnRyeS5uYW1lXSwgZW50cnkuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25hdWRpb2NhbGxiYWNrKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzID09PSBFeHRyYWN0b3JcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbnVtYmVyT2ZDaGFubmVscyc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVByb2Nlc3NpbmcoZGF0YSwgdGhpcy5mZWF0dXJlcyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UucmVzdWx0c1swXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGFubmVsJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZXN1bHRzJzogSlNPTi5wYXJzZShkYXRhLnRvSlNPTigpKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3RGZWF0dXJlcyhkYXRhLmxlbmd0aCwgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY2xlYXJDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuZnJhbWVDYWxsYmFjayhvbmF1ZGlvY2FsbGJhY2ssIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlam9pbkV4dHJhY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmNvbm5lY3QodGhpcy5leHRyYWN0b3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIFdvcmtlckV4dHJhY3RvciA9IGZ1bmN0aW9uIChvdXRwdXQsIGZyYW1lU2l6ZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uYXVkaW9jYWxsYmFjayhlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjLCBmcmFtZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IGUuaW5wdXRCdWZmZXIubnVtYmVyT2ZDaGFubmVsczsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZXNbY10gPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKGMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lcyc6IGZyYW1lc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXNwb25zZShtc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMoZnJhbWVTaXplLCBtc2cuZGF0YS5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXCJqc2FwL2ZlYXR1cmUtd29ya2VyLmpzXCIpO1xuICAgICAgICAgICAgICAgIHdvcmtlci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maWdNZXNzYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRlJzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzYW1wbGVSYXRlJzogb3V0cHV0LmNvbnRleHQuc2FtcGxlUmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmZWF0dXJlTGlzdCc6IGZlYXR1cmVMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ251bUNoYW5uZWxzJzogb3V0cHV0Lm51bWJlck9mT3V0cHV0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmcmFtZVNpemUnOiB0aGlzLmZyYW1lU2l6ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZmVhdHVyZUxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGlzdCAmJiBmZWF0dXJlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLnN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5vbm1lc3NhZ2UgPSByZXNwb25zZS5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmV4dHJhY3Rvci5vbmF1ZGlvcHJvY2VzcyA9IG9uYXVkaW9jYWxsYmFjay5iaW5kKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZShjb25maWdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3RhdGUnOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdG9yLm9uYXVkaW9wcm9jZXNzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWpvaW5FeHRyYWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5jb25uZWN0KHRoaXMuZXh0cmFjdG9yKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IgPSBvdXRwdXQuY29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoZnJhbWVTaXplLCBvdXRwdXQubnVtYmVyT2ZPdXRwdXRzLCAxKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQuY29ubmVjdCh0aGlzLmV4dHJhY3Rvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0b3IuY29ubmVjdChvdXRwdXQuY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmcmFtZVNpemVcIiwge1xuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmcmFtZVNpemVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkZEV4dHJhY3RvciA9IGZ1bmN0aW9uIChmcmFtZVNpemUpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBXb3JrZXJFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IG5ldyBFeHRyYWN0b3Iob3V0cHV0LCBmcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBleHRyYWN0b3JzLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBcInBvc3RGZWF0dXJlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZ1bmN0aW9uIChmcmFtZVNpemUsIHJlc3VsdHNKU09OKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZyYW1lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdWx0cyc6IHJlc3VsdHNKU09OXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0RmVhdHVyZXMob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZpbmRFeHRyYWN0b3IgPSBmdW5jdGlvbiAoZnJhbWVTaXplKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gZnJhbWVTaXplO1xuICAgICAgICAgICAgICAgIHJldHVybiBleHRyYWN0b3JzLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBNVVNUIGJlID09IE5PVCA9PT1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihlLmZyYW1lU2l6ZSkgPT09IE51bWJlcihjaGVjayk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5yZWpvaW5FeHRyYWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV4dHJhY3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnJlam9pbkV4dHJhY3RvcigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRXh0cmFjdG9yID0gZnVuY3Rpb24gKGZyYW1lU2l6ZSkge307XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvdXRwdXROb2RlcztcbiAgICAgICAgdGhpcy51cGRhdGVGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlT2JqZWN0KSB7XG4gICAgICAgICAgICB2YXIgbztcbiAgICAgICAgICAgIGZvciAobyA9IDA7IG8gPCBmZWF0dXJlT2JqZWN0Lmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJSZXF1ZXN0ZWQgYW4gb3V0cHV0IHRoYXQgZG9lcyBub3QgZXhpc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0Tm9kZXMgPSBuZXcgT3V0cHV0Tm9kZShvd25lciwgb3duZXIuY2hhaW5TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvdXRwdXROb2RlcywgXCJwb3N0RmVhdHVyZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZnVuY3Rpb24gKHJlc3VsdE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zdEZlYXR1cmVzKHJlc3VsdE9iamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzaTtcbiAgICAgICAgICAgICAgICBmb3IgKHNpID0gMDsgc2kgPCBmZWF0dXJlT2JqZWN0W29dLmxlbmd0aDsgc2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXMuZmluZEV4dHJhY3RvcihmZWF0dXJlT2JqZWN0W29dW3NpXS5mcmFtZVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4dHJhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yID0gb3V0cHV0Tm9kZXMuYWRkRXh0cmFjdG9yKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZyYW1lU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXh0cmFjdG9yLnNldEZlYXR1cmVzKGZlYXR1cmVPYmplY3Rbb11bc2ldLmZlYXR1cmVMaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZWpvaW5FeHRyYWN0b3JzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG91dHB1dE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0Tm9kZXMucmVqb2luRXh0cmFjdG9ycygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucG9zdEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVPYmplY3QpIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgQ2FsbGVkIGJ5IHRoZSBpbmRpdmlkdWFsIGV4dHJhY3RvciBpbnN0YW5jZXM6XG4gICAgICAgICAgICAgICAgZmVhdHVyZU9iamVjdCA9IHsnZnJhbWVTaXplJzogZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IG91dHB1dEluZGV4LFxuICAgICAgICAgICAgICAgICdyZXN1bHRzJzpbXX1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBGYWN0b3J5RmVhdHVyZU1hcC5wb3N0RmVhdHVyZXMoe1xuICAgICAgICAgICAgICAgICdwbHVnaW4nOiB0aGlzLFxuICAgICAgICAgICAgICAgICdvdXRwdXRJbmRleCc6IGZlYXR1cmVPYmplY3Qub3V0cHV0SW5kZXgsXG4gICAgICAgICAgICAgICAgJ2ZyYW1lU2l6ZSc6IGZlYXR1cmVPYmplY3QuZnJhbWVTaXplLFxuICAgICAgICAgICAgICAgICdyZXN1bHRzJzogZmVhdHVyZU9iamVjdC5yZXN1bHRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZW5kIHRvIEZhY3RvcnlcbiAgICAgICAgRmFjdG9yeUZlYXR1cmVNYXAuY3JlYXRlU291cmNlTWFwKHRoaXMsIHVuZGVmaW5lZCk7XG4gICAgfTtcblxuICAgIHZhciBBdWRpb1BsdWdpbkNoYWluTWFuYWdlciA9IGZ1bmN0aW9uIChQbHVnaW5GYWN0b3J5LCBjaGFpblN0YXJ0LCBjaGFpblN0b3ApIHtcblxuICAgICAgICB2YXIgcGx1Z2luX2xpc3QgPSBbXSxcbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQgPSBjaGFpblN0YXJ0LFxuICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdG9wID0gY2hhaW5TdG9wLFxuICAgICAgICAgICAgZmFjdG9yeU5hbWUgPSBcIlwiLFxuICAgICAgICAgICAgc3RhdGUgPSAxLFxuICAgICAgICAgICAgZGVsYXlTYW1wbGVzID0gMCxcbiAgICAgICAgICAgIGNoYWluU3RhcnRGZWF0dXJlID0gbmV3IFN1YkZhY3RvcnlGZWF0dXJlU2VuZGVyKHRoaXMsIFBsdWdpbkZhY3RvcnkuRmVhdHVyZU1hcCksXG4gICAgICAgICAgICBzZW1hbnRpY1N0b3JlcyA9IFtdLFxuICAgICAgICAgICAgZXZlbnRUYXJnZXQgPSBuZXcgRXZlbnRUYXJnZXQoKSxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnBhcmVudCA9IFBsdWdpbkZhY3Rvcnk7XG4gICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdCgpO1xuICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QoY2hhaW5TdG9wKTtcblxuICAgICAgICB0aGlzLlRyYWNrRGF0YSA9IG5ldyBMaW5rZWRTdG9yZS5MaW5rZWRTdG9yZShcIlRyYWNrXCIpO1xuICAgICAgICB0aGlzLlBsdWdpbkRhdGEgPSBuZXcgTGlua2VkU3RvcmUuTGlua2VkU3RvcmUoXCJQbHVnaW5cIik7XG5cbiAgICAgICAgdGhpcy5mZWF0dXJlU2VuZGVyID0gY2hhaW5TdGFydEZlYXR1cmU7XG5cbiAgICAgICAgdGhpcy5nZXRGZWF0dXJlQ2hhaW4gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZWJ1aWxkKCkge1xuICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgIGwgPSBwbHVnaW5fbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnROb2RlID0gcGx1Z2luX2xpc3RbaSsrXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dE5vZGUgPSBwbHVnaW5fbGlzdFtpXTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5yZWNvbm5lY3QobmV4dE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNvbGF0ZSgpIHtcbiAgICAgICAgICAgIHBsdWdpbl9saXN0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3V0Q2hhaW4oKSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luX2xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdChwbHVnaW5fbGlzdFswXS5pbnB1dCk7XG4gICAgICAgICAgICAgICAgcGx1Z2luX2xpc3RbcGx1Z2luX2xpc3QubGVuZ3RoIC0gMV0ub3V0cHV0LmRpc2Nvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5kaXNjb25uZWN0KHBsdWdpbkNoYWluU3RvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGpvaW5DaGFpbigpIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW5fbGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luQ2hhaW5TdGFydC5jb25uZWN0KHBsdWdpbl9saXN0WzBdLmlucHV0KTtcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdFtwbHVnaW5fbGlzdC5sZW5ndGggLSAxXS5vdXRwdXQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5DaGFpblN0YXJ0LmNvbm5lY3QocGx1Z2luQ2hhaW5TdG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYWluU3RhcnRGZWF0dXJlLnJlam9pbkV4dHJhY3RvcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnlwYXNzUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9pbnN0YW5jZSwgc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlzIGEgbWVtYmVyIG9mIHRoaXMgY2hhaW5cbiAgICAgICAgICAgIGlmIChwbHVnaW5fbGlzdC5pbmNsdWRlcyhwbHVnaW5faW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsdWdpbl9pbnN0YW5jZS5ieXBhc3Moc3RhdGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0UHJvdG90eXBlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRQcm90b3R5cGVzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5nZXRGYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uIChyZWNvbm5lY3QpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBsdWdpbl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95UGx1Z2luKHBsdWdpbl9saXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgaWYgKHJlY29ubmVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsdWdpbkNoYWluU3RhcnQuY29ubmVjdChwbHVnaW5DaGFpblN0b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFBsdWdpbiBjcmVhdGlvbiAvIGRlc3RydWN0aW9uXG5cbiAgICAgICAgZnVuY3Rpb24gYnVpbGROZXdQbHVnaW4ocHJvdG90eXBlT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCAoXCJTdWJGYWN0b3J5IGhhcyBiZWVuIGRlc3Ryb3llZCEgQ2Fubm90IGFkZCBuZXcgcGx1Z2luc1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHNlbGYsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1RyYWNrRGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5UcmFja0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyZWF0ZVBsdWdpbiA9IGZ1bmN0aW9uIChwcm90b3R5cGVPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBidWlsZE5ld1BsdWdpbihwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGRpZCBub3QgZ2V0IGNyZWF0ZWQhIEFib3J0aW5nXCIpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgY3V0Q2hhaW4oKTtcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdC5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgIGlzb2xhdGUoKTtcbiAgICAgICAgICAgICAgICByZWJ1aWxkKCk7XG4gICAgICAgICAgICAgICAgam9pbkNoYWluKCk7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiYWx0ZXJkZWxheVwiLCBzZWxmKTtcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUub25sb2FkZWQuY2FsbChub2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURlbGF5Q29tcGVuc2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFBsdWdpbkluZGV4KHBsdWdpbl9vYmplY3QpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICBjdXRDaGFpbigpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFsdGVyZGVsYXlcIiwgc2VsZik7XG4gICAgICAgICAgICAgICAgcGx1Z2luX29iamVjdC5ub2RlLnN0b3AuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUuZGVjb25zdHJ1Y3QuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgaXNvbGF0ZSgpO1xuICAgICAgICAgICAgICAgIHJlYnVpbGQoKTtcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRlc3Ryb3lQbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQbHVnaW4ocGx1Z2luX29iamVjdCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5kZWxldGVQbHVnaW4ocGx1Z2luX29iamVjdC5pZCk7XG4gICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0UGx1Z2lucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBwbHVnaW5fbGlzdDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmdldEFsbFBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0QWxsUGx1Z2luc09iamVjdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZ2V0UGx1Z2luSW5kZXggPSBmdW5jdGlvbiAocGx1Z2luX29iamVjdCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGx1Z2luX2xpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSwgcGx1Z2luX29iamVjdCk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb3ZlUGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbl9vYmplY3QsIG5ld19pbmRleCkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRQbHVnaW5JbmRleChwbHVnaW5fb2JqZWN0KSxcbiAgICAgICAgICAgICAgICBvYmosIGhvbGRMb3csIGhvbGRIaWdoLCBpO1xuICAgICAgICAgICAgaWYgKFBsdWdpbkZhY3RvcnkuZ2V0QWxsUGx1Z2lucygpLmluY2x1ZGVzKHBsdWdpbl9vYmplY3QpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGRvZXMgbm90IGV4aXN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3V0Q2hhaW4oKTtcbiAgICAgICAgICAgIGlzb2xhdGUoKTtcbiAgICAgICAgICAgIGlmIChwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbnQgc3ViLWZhY3RvcnlcbiAgICAgICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub3duZXIucmVtb3ZlUGx1Z2luKHBsdWdpbl9vYmplY3QpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vd25lciA9IHRoaXM7XG4gICAgICAgICAgICAgICAgb2JqID0gW3BsdWdpbl9vYmplY3RdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmogPSBwbHVnaW5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9vYmplY3Qubm9kZS5vbnVubG9hZGVkLmNhbGwocGx1Z2luX29iamVjdC5ub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdfaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5fbGlzdCA9IG9iai5jb25jYXQocGx1Z2luX2xpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdfaW5kZXggPj0gcGx1Z2luX2xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luX2xpc3QgPSBwbHVnaW5fbGlzdC5jb25jYXQob2JqKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9sZExvdyA9IHBsdWdpbl9saXN0LnNsaWNlKDAsIG5ld19pbmRleCk7XG4gICAgICAgICAgICAgICAgaG9sZEhpZ2ggPSBwbHVnaW5fbGlzdC5zbGljZShuZXdfaW5kZXgpO1xuICAgICAgICAgICAgICAgIHBsdWdpbl9saXN0ID0gaG9sZExvdy5jb25jYXQob2JqLmNvbmNhdChob2xkSGlnaCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVidWlsZCgpO1xuICAgICAgICAgICAgam9pbkNoYWluKCk7XG4gICAgICAgICAgICBwbHVnaW5fb2JqZWN0Lm5vZGUub25sb2FkZWQuY2FsbChwbHVnaW5fb2JqZWN0Lm5vZGUpO1xuICAgICAgICAgICAgdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvcHlQbHVnaW4gPSBmdW5jdGlvbihwbHVnaW5fb2JqZWN0LCBjb3B5X2luZGV4KSB7XG4gICAgICAgICAgICBpZiAoY29weV9pbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29weV9pbmRleCA9IHBsdWdpbl9saXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29weV9pbmRleCAhPSBcIm51bWJlclwiIHx8IGNvcHlfaW5kZXggPCAwIHx8IGNvcHlfaW5kZXggPiBwbHVnaW5fbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBjb3B5IGluZGV4IG91dHNpZGUgb2YgdGhlIGNoYWluIHNjb3BlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBidWlsZE5ld1BsdWdpbihwbHVnaW5fb2JqZWN0LnByb3RvdHlwZU9iamVjdClcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIlBsdWdpbiBkaWQgbm90IGdldCBjcmVhdGVkISBBYm9ydGluZ1wiKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUubm9kZS5wYXJhbWV0ZXJzLnNldFBhcmFtZXRlcnNCeU9iamVjdChwbHVnaW5fb2JqZWN0Lm5vZGUucGFyYW1ldGVycy5nZXRQYXJhbWV0ZXJPYmplY3QoKSk7XG4gICAgICAgICAgICAgICAgY3V0Q2hhaW4oKTtcbiAgICAgICAgICAgICAgICBpc29sYXRlKCk7XG4gICAgICAgICAgICAgICAgcGx1Z2luX2xpc3Quc3BsaWNlKGNvcHlfaW5kZXgsIDAsIG5vZGUpO1xuICAgICAgICAgICAgICAgIHJlYnVpbGQoKTtcbiAgICAgICAgICAgICAgICBqb2luQ2hhaW4oKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgICAgIG5vZGUubm9kZS5vbmxvYWRlZC5jYWxsKG5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVQcm9jZXNzaW5nKGJhc2UsIGxpc3QpIHtcbiAgICAgICAgICAgIHZhciBsID0gbGlzdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaSwgZW50cnk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZW50cnkgPSBsaXN0W2ldO1xuICAgICAgICAgICAgICAgIGJhc2VbZW50cnkubmFtZV0uYXBwbHkoYmFzZSwgZW50cnkucGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmZlYXR1cmVzICYmIGVudHJ5LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUHJvY2Vzc2luZyhiYXNlLnJlc3VsdFtlbnRyeS5uYW1lXSwgZW50cnkuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldERlbGF5Q29tcGVuc2F0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgICAgICBwbHVnaW5fbGlzdC5maWx0ZXIoZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFwbHVnaW4uaXNCeXBhc3NlZCgpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBzdW0gKz0gcGx1Z2luLm5vZGUucHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGVsYXlDb21wZW5zYXRpb24oKSB7XG4gICAgICAgICAgICB2YXIgc3VtID0gZ2V0RGVsYXlDb21wZW5zYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChkZWxheVNhbXBsZXMgIT0gc3VtKSB7XG4gICAgICAgICAgICAgICAgZGVsYXlTYW1wbGVzID0gc3VtO1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYWx0ZXJkZWxheVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVsYXlTYW1wbGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgICAgICAgJ2NoYWluU3RhcnQnOiB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdGFydFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjaGFpblN0b3AnOiB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogY2hhaW5TdG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ1cGRhdGVEZWxheUNvbXBlbnNhdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInByb2Nlc3NpbmdEZWxheUFzU2FtcGxlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93KFwicHJvY2Vzc2luZ0RlbGF5QXNTYW1wbGVzIGlzIHJlYWQtb25seVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHNcIjoge1xuICAgICAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzaW5nRGVsYXlBc1NhbXBsZXMvUGx1Z2luRmFjdG9yeS5jb250ZXh0LnNhbXBsZVJhdGU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInNldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJwcm9jZXNzaW5nRGVsYXlBc1NlY29uZHMgaXMgcmVhZC1vbmx5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnbmFtZSc6IHtcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeU5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnc2V0JzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5TmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnlOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAncmVjdXJzaXZlUHJvY2Vzc2luZyc6IHtcbiAgICAgICAgICAgICAgICAnZ2V0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlUHJvY2Vzc2luZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2hhbmRsZUV2ZW50Jzoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IFwiYWx0ZXJkZWxheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWxheUNvbXBlbnNhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiYWRkRXZlbnRMaXN0ZW5lclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgTWlkaVN5bnRoZXNpc2VySG9zdCA9IGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmdW5jdGlvbiBidWlsZE5ld1N5bnRoZXNpc2VyT2JqZWN0KHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGVPYmplY3QuaGFzTWlkaUlucHV0ID09IGZhbHNlIHx8IHByb3RvdHlwZU9iamVjdC5oYXNNaWRpT3V0cHV0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0IChcIlByb3RvdHlwZSBpcyBub3QgYSBNaWRpU3ludGhlc2lzIHR5cGUuIGhhc01pZGlJbnB1dCBtdXN0IGJlIHRydWUgYW5kIGhhc01pZGlPdXRwdXQgbXVzdCBiZSBmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb3RvdHlwZU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG90eXBlT2JqZWN0LmNyZWF0ZVBsdWdpbkluc3RhbmNlKHNlbGYsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobm9kZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1RyYWNrRGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZi5UcmFja0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWlkaVN5bnRoU2xvdDtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gW107XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgICAgIFwiY29ubmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihkZXN0aW5hdGlvbk5vZGUsIG91dHB1dCwgaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoXCJNdXN0IGRlZmluZSBhbiBBdWRpb05vZGUgb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdHMgPSBjb25uZWN0aW9ucy5maW5kKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25uLmRlc3RpbmF0aW9uTm9kZSA9PSBkZXN0aW5hdGlvbk5vZGUgJiYgY29ubi5vdXRwdXQgPT0gb3V0cHV0ICYmIGNvbm4uaW5wdXQgPT0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbk5vZGU6ZGVzdGluYXRpb25Ob2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDpvdXRwdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1JREkgU3ludGhlc2lzZXIgaXMgbm90IGxvYWRlZCwgY29ubmVjdGlvbnMgd2lsbCBiZSB2YWxpZGF0ZWQgb24gbG9hZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5jb25uZWN0KGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJkaXNjb25uZWN0XCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKGRlc3RpbmF0aW9uTm9kZSwgb3V0cHV0LCBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Ob2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJudW1iZXJcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGRlc3RpbmF0aW9uTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5vdXRwdXQgPT0gb3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWlkaVN5bnRoU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdC5ub2RlLmRpc2Nvbm5lY3QoY29ubi5kZXN0aW5hdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGVzdGluYXRpb25Ob2RlID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG91dHB1dCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zLmZpbHRlcihmdW5jdGlvbihjb25uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbm4uZGVzdGluYXRpb25Ob2RlID09IGRlc3RpbmF0aW9uTm9kZSAmJiBjb25uLm91dHB1dCA9PSBvdXRwdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1pZGlTeW50aFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGlTeW50aFNsb3Qubm9kZS5kaXNjb25uZWN0KGNvbm4uZGVzdGluYXRpb25Ob2RlLCBjb25uLm91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbk5vZGUgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3V0cHV0ID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGlucHV0ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ubi5kZXN0aW5hdGlvbk5vZGUgPT0gZGVzdGluYXRpb25Ob2RlICYmIGNvbm4ub3V0cHV0ID09IG91dHB1dCAmJiBjb25uLmlucHV0ID09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuZGlzY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQsIGNvbm4uaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNjaGVkdWxlRXZlbnRcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24obXNnLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuc2NoZWR1bGVFdmVudChtc2csIHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJNSURJIFN5bnRoZXNpc2VyIG5vdCBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJjYW5jZWxBbGxFdmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24obXNnLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaWRpU3ludGhTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY2FuY2VsQWxsRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIk1JREkgU3ludGhlc2lzZXIgbm90IGxvYWRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1pZGlTeW50aGVzaXNlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkNhbm5vdCBzZXQgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibG9hZE1pZGlTeW50aGVzaXNlck1vZHVsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbihwcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG90eXBlLmhhc01pZGlJbnB1dCA9PSBmYWxzZSB8fCBwcm90b3R5cGUuaGFzTWlkaU91dHB1dCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0IChcIlByb3RvdHlwZSBpcyBub3QgYSBNaWRpU3ludGhlc2lzIHR5cGUuIGhhc01pZGlJbnB1dCBtdXN0IGJlIHRydWUgYW5kIGhhc01pZGlPdXRwdXQgbXVzdCBiZSBmYWxzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm90b3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHByb3RvdHlwZU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkTmV3U3ludGhlc2lzZXJPYmplY3QuY2FsbChzZWxmLCBwcm90b3R5cGVPYmplY3QpLmNhdGNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiUGx1Z2luIGRpZCBub3QgZ2V0IGNyZWF0ZWQhIEFib3J0aW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlkaVN5bnRoU2xvdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNvbm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWRpU3ludGhTbG90Lm5vZGUuY29ubmVjdChjb25uLmRlc3RpbmF0aW9uTm9kZSwgY29ubi5vdXRwdXQsIGNvbm4uaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkaVN5bnRoU2xvdDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBQbHVnaW5Vc2VySW50ZXJmYWNlTWVzc2FnZUh1YiA9IChmdW5jdGlvbihmYWN0b3J5KXtcbiAgICAgICAgZnVuY3Rpb24gYnVpbGRQbHVnaW5JbnRlcmZhY2UocGx1Z2luX29iamVjdCwgaW50ZXJmYWNlX29iamVjdCkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgICAgICBpZnJhbWUuc3JjID0gaW50ZXJmYWNlX29iamVjdC5zcmM7XG4gICAgICAgICAgICBpZiAoaW50ZXJmYWNlX29iamVjdC53aWR0aCkge1xuICAgICAgICAgICAgICAgIGlmcmFtZS53aWR0aCA9IGludGVyZmFjZV9vYmplY3Qud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW50ZXJmYWNlX29iamVjdC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZnJhbWUuaGVpZ2h0ID0gaW50ZXJmYWNlX29iamVjdC5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gXCIwXCI7XG4gICAgICAgICAgICByZXR1cm4gaWZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldERlZmF1bHRJbnRlcmZhY2UodXJsLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICBkZWZhdWx0X2ludGVyZmFjZSA9IHtcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdF9pbnRlcmZhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcG9sbEFsbFBsdWdpbnMoKSB7XG4gICAgICAgICAgICBmYWN0b3J5LmdldEFsbFBsdWdpbnMoKS5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5ub2RlLmV4dGVybmFsSW50ZXJmYWNlLnVwZGF0ZUludGVyZmFjZXModHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IGZhbHNlO1xuICAgICAgICB2YXIgZGVmYXVsdF9pbnRlcmZhY2UgPSB7XG4gICAgICAgICAgICBzcmM6IFwianNhcF9kZWZhdWx0Lmh0bWxcIlxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHtcbiAgICAgICAgICAgIFwic2V0RGVmYXVsdEludGVyZmFjZVwiOiBzZXREZWZhdWx0SW50ZXJmYWNlLFxuICAgICAgICAgICAgXCJidWlsZFBsdWdpbkludGVyZmFjZVwiOmJ1aWxkUGx1Z2luSW50ZXJmYWNlLFxuICAgICAgICAgICAgXCJwb2xsQWxsUGx1Z2luc1wiOiBwb2xsQWxsUGx1Z2luc1xuICAgICAgICB9KTtcbiAgICB9KSh0aGlzKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogYXVkaW9fY29udGV4dFxuICAgICAgICB9LFxuICAgICAgICBcImhhc0F1ZGlvU3RhcnRlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXVkaW9TdGFydGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBsdWdpblJvb3RVUkxcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb290VVJMO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RVUkwgPSB0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdFVSTDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgKFwiQ2Fubm90IHNldCByb290IFVSTCB3aXRob3V0IGEgc3RyaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZUZhY3RvcnlDb3B5XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29weUZhY3RvcnkoY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3ViRmFjdG9yaWVzXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJGYWN0b3JpZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiUGx1Z2luR1VJXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogUGx1Z2luVXNlckludGVyZmFjZU1lc3NhZ2VIdWJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQge0Jhc2VQbHVnaW4sIFN5bnRoZXNpc2VyQmFzZVBsdWdpbiwgUGx1Z2luRmFjdG9yeX07XG4iLCIvKiBqc2hpbnQgZXN2ZXJzaW9uOiA2ICovXG5pbXBvcnQge0Jhc2VQbHVnaW59IGZyb20gXCIuL2Jhc2VfcGx1Z2luXCI7XG5cbnZhciBTeW50aGVzaXNlckJhc2VQbHVnaW4gPSBmdW5jdGlvbihmYWN0b3J5LCBvd25lcilcbntcbiAgICB2YXIgaGFzV2FybmVkU2NoZWR1bGVOb3RTZXQgPSBmYWxzZTtcbiAgICB2YXIgaGFzV2FybmVkQ2FuY2VsTm90U2V0ID0gZmFsc2U7XG4gICAgQmFzZVBsdWdpbi5jYWxsKHRoaXMsIGZhY3RvcnksIG93bmVyKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgICAgXCJhZGRJbnB1dFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93KFwiQ2Fubm90IGFkZCBpbnB1dCB0byB0eXBlIFxcXCJTeW50aGVzaXNlckJhc2VQbHVnaW5cXFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUlucHV0XCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJDYW5ub3QgZGVsZXRlIGlucHV0IHRvIHR5cGUgXFxcIlN5bnRoZXNpc2VyQmFzZVBsdWdpblxcXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2NoZWR1bGVFdmVudFwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uIChtc2csIGNvbnRleHRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRTY2hlZHVsZU5vdFNldCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm5pbmcoXCJXQVJOSU5HIC0gLnNjaGVkdWxlRXZlbnQgaXMgbm90IG92ZXJyaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZFNjaGVkdWxlTm90U2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ3cml0YWJsZVwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2FuY2VsQWxsRXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRDYW5jZWxOb3RTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuaW5nKFwiV0FSTklORyAtIC5jYW5jZWxBbGxFdmVudHMgaXMgbm90IG92ZXJyaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZENhbmNlbE5vdFNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwid3JpdGFibGVcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuU3ludGhlc2lzZXJCYXNlUGx1Z2luLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQmFzZVBsdWdpbi5wcm90b3R5cGUpO1xuU3ludGhlc2lzZXJCYXNlUGx1Z2luLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bnRoZXNpc2VyQmFzZVBsdWdpbjtcblxuZXhwb3J0IHtTeW50aGVzaXNlckJhc2VQbHVnaW59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==