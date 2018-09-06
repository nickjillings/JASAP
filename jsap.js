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

// Add getInputs to all AudioNodes to ease deployment
/*globals AudioNode, Worker, console, window, document, Promise, XMLHttpRequest */
/*eslint-env browser */
if (typeof AudioNode === "function" && window.importScripts === undefined) {
    AudioNode.prototype.getInputs = function () {
        return [this];
    };
}

// This should simply define the BasePlugin from which custom plugins can be built from
var BasePlugin = function (factory, owner) {
    var inputList = [],
        outputList = [],
        pOwner = owner;
    this.context = factory.context;
    this.factory = factory;
    this.featureMap = new PluginFeatureInterface(this);
    this.parameters = new ParameterManager(this);

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

    this.start = this.stop = this.onloaded = this.onunloaded = this.deconstruct = function () {};

    Object.defineProperties(this, {
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
        "getParameterName": {
            "value": function () {
                return this.parameters.getParameterNames();
            }
        },
        "getParameterByName": {
            "value": function () {
                return this.parameters.getParameterByName();
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
        }
    });
};

var ParameterManager = function (owner) {
    var parameterList = [];

    function findParameter(name) {
        return parameterList.find(function (e) {
            return e.name === name;
        });
    }

    function findParameterIndex(name) {
        return parameterList.findIndex(function (e) {
            return e.name === name;
        });
    }

    function buildParameterObject() {
        var obj = {};
        parameterList.forEach(function (e) {
            obj[e.name] = e;
        });
        return obj;
    }

    function addParameter(param) {
        var exists = parameterList.findIndex(function (e) {
            return e === param;
        }, param);
        if (exists === -1) {
            parameterList.push(param);
        }
        return param;
    }

    function PluginParameter(owner, name, dataType) {
        var update, translate, trigger, audioParam, _ActionList = [];
        update = translate = function (v) {
            return v;
        };
        trigger = function () {};
        Object.defineProperties(this, {
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
                "value": function (ap) {
                    if (typeof ap !== "object" || ap.value === undefined) {
                        throw ("Must be an AudioParam object from an AudioNode");
                    }
                    var v = this.update(this.value);
                    audioParam = ap;
                    audioParam.value = v;
                }
            },
            "boundAudioParam": {
                "get": function () {
                    return audioParam;
                }
            },
            "actionList": {
                "value": _ActionList
            }
        });
    }

    function NumberParameter(owner, name, defaultValue, minimum, maximum) {
        PluginParameter.call(this, owner, name, "Number");
        var _value = defaultValue,
            _stepSize;

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': v
            };
            this.actionList.push(entry);
        }

        Object.defineProperties(this, {
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
                    if (this.boundAudioParam) {
                        return this.translate(this.boundAudioParam.value);
                    }
                    return _value;
                },
                "set": function (v) {
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
                    if (this.boundAudioParam) {
                        this.boundAudioParam.value = this.update(v);
                    }
                    _value = v;
                    this.trigger();
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
            }
        });
    }
    NumberParameter.prototype = Object.create(PluginParameter.prototype);
    NumberParameter.prototype.constructor = NumberParameter;

    function StringParameter(owner, name, defaultValue, maxLength) {
        PluginParameter.call(this, owner, name, "String");
        var _value = defaultValue;

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': v
            };
            this.actionList.push(entry);
        }

        Object.defineProperties(this, {
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
                    if (maxLength) {
                        if (v.length > maxLength) {
                            throw ("String longer than " + maxLength + " characters");
                        }
                    }
                    if (this.boundAudioParam) {
                        this.boundAudioParam.value = this.update(v);
                    }
                    _value = v;
                    this.trigger();
                }
            }
        });
    }
    StringParameter.prototype = Object.create(PluginParameter.prototype);
    StringParameter.prototype.constructor = StringParameter;

    function ButtonParameter(owner, name) {
        PluginParameter.call(this, owner, name, "Button");
        var onclick = function () {};

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': "clicked"
            };
            this.actionList.push(entry);
        }

        Object.defineProperties(this, {
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
    ButtonParameter.prototype = Object.create(PluginParameter.prototype);
    ButtonParameter.prototype.constructor = ButtonParameter;

    function SwitchParameter(owner, name, defaultValue, minState, maxState) {
        PluginParameter.call(this, owner, name, "Button");
        var onclick = function () {};
        var _value = defaultValue;

        function addAction(v) {
            var entry = {
                'time': new Date(),
                'value': v
            };
            this.actionList.push(entry);
        }

        function setV(v) {
            if (this.boundAudioParam) {
                this.boundAudioParam.value = this.update(v);
            }
            addAction(v);
            this.trigger();
            _value = v;
            return v;
        }

        Object.defineProperties(this, {
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
                    if (v < minState) {
                        throw ("Set value is less than " + minState);
                    }
                    if (v > maxState) {
                        throw ("Set value is greater than " + maxState);
                    }
                    return setV(v);
                }
            },
            "increment": {
                "value": function () {
                    var v = _value++;
                    if (v > maxState) {
                        v = minState;
                    }
                    return setV(v);
                }
            },
            "deccrement": {
                "value": function () {
                    var v = _value--;
                    if (v < minState) {
                        v = maxState;
                    }
                    return setV(v);
                }
            }
        });
    }
    SwitchParameter.prototype = Object.create(PluginParameter.prototype);
    SwitchParameter.prototype.constructor = SwitchParameter;

    Object.defineProperties(this, {
        'createNumberParameter': {
            "value": function (name, defaultValue, minimum, maximum) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || (minimum !== undefined && typeof minimum !== "number") || (maximum !== undefined && typeof maximum !== "number")) {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new NumberParameter(owner, name, defaultValue, minimum, maximum);
                addParameter(param);
                return param;
            }
        },
        'createStringParameter': {
            "value": function (name, defaultValue, maxLength) {
                if (typeof name !== "string" || typeof defaultValue !== "string" || (maxLength !== undefined && typeof maxLength !== "number")) {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new StringParameter(owner, name, defaultValue, maxLength);
                addParameter(param);
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
                var param = new ButtonParameter(owner, name);
                addParameter(param);
                return param;
            }
        },
        'createSwitchParameter': {
            "value": function (name, defaultValue, minState, maxState) {
                if (typeof name !== "string" || typeof defaultValue !== "number" || typeof minState !== "number" || typeof maxState !== "number") {
                    throw ("Invlid constructor");
                }
                if (findParameterIndex(name) !== -1) {
                    throw ("Parameter with name '" + name + "' already exists");
                }
                var param = new SwitchParameter(owner, name, defaultValue, minState, maxState);
                addParameter(param);
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
            'value': function (n, v) {
                var parameter = findParameter(n);
                if (!parameter) {
                    return;
                }
                parameter.value = v;
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
            'value': function (object) {
                var key;
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (typeof object[key] == "object") {

                            this.setParameterByName(key, object[key].value);
                        } else if (typeof object[key] == "number") {
                            this.setParameterByName(key, object[key]);
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
    The same applies here as the underlying host will have to either accept or ignore the tools' GUI
*/

var PluginUserInterface = function (BasePluginInstance, width, height) {
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

// This defines a master object for holding all the plugins and communicating
// This object will also handle creation and destruction of plugins
/*globals Promise, document, console, LinkedStore, Worker, window, XMLHttpRequest */
/*eslint-env browser */

var PluginFactory = function (context, rootURL) {


    var audio_context = context,
        subFactories = [],
        plugin_prototypes = [],
        pluginsList = [],
        currentPluginId = 0,
        audioStarted = false;

    /*
        this.loadResource. Load a resource into the global namespace

        @param resourceObject: a JS object holding the following parameters:
            .url: URL of the resource
            .test: function to call, returns true if resource already loaded, false if not
    */
    this.loadResource = function (resourceObject) {
        (function (resourceObject) {
            if (typeof resourceObject !== "object") {
                throw ("Error");
            }
            if (typeof resourceObject.url !== "string") {
                throw ("resourceObject.url must be a string");
            }
            if (typeof resourceObject.test !== "function") {
                throw ("resourceObject.test must be a function");
            }
        })(resourceObject);
        var response = resourceObject.test();
        if (response !== false && response !== true) {
            throw ("resourceObject.test must return true or false");
        }
        if (!resourceObject.type) {
            resourceObject.type = "javascript";
        }
        resourceObject.type = resourceObject.type.toLowerCase();
        switch (resourceObject.type) {
            case "css":
                return new Promise(function (resolve, reject) {
                    var css = document.createElement("link");
                    css.setAttribute("rel", "stylesheet");
                    css.setAttribute("type", "text/css");
                    css.setAttribute("href", resourceObject.url);
                    document.getElementsByTagName("head")[0].appendChild(css);
                    resolve(resourceObject);
                });
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
            var url = resourceObject.url;
            if (resourceObject.test() === true) {
                resolve(resourceObject);
            }
            console.log(url);
            xhr.open("GET", url);
            xhr.onload = function () {
                var script = document.createElement("script");
                script.textContent = xhr.responseText;
                document.getElementsByTagName("head")[0].appendChild(script);
                resolve(resourceObject);
            };
            xhr.send();
        });
    }
    
    function copyFactory(newcontext) {
        var BFactory = new PluginFactory(newcontext);
        // Now copy in all of the plugin prototypes
        plugin_prototypes.forEach(function (proto) {
            BFactory.addPrototype(proto.proto);
        });
        return BFactory;
    }

    var PluginInstance = function (id, plugin_node) {
        this.next_node = undefined;
        var _bypassed = false;
        var _in = audio_context.createGain(),
            _out = audio_context.createGain();

        _in.connect(plugin_node.getInputs()[0]);
        plugin_node.getOutputs()[0].connect(_out);

        function bypassEnable() {
            _in.disconnect();
            _in.connect(_out);
            _bypassed = true;
        }

        function bypassDisable() {
            _in.disconnect();
            _in.connect(plugin_node.getInputs()[0]);
            _bypassed = false;
        }

        this.bypass = function (state) {
            state = (state === true);
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
            if (new_next !== undefined && typeof new_next.node.getInputs === "function") {
                this.next_node = new_next;
                _out.connect(this.next_node.node.getInputs()[0]);
                return true;
            }
            return false;
        };

        this.disconnect = function () {
            if (this.next_node !== undefined) {
                _out.disconnect(this.next_node.node.getInputs()[0]);
                this.next_node = undefined;
            }
        };

        this.destroy = function () {
            plugin_node.destroy();
        };

        Object.defineProperties(this, {
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

    var PluginPrototype = function (proto) {
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
            }
        });

        this.createPluginInstance = function (owner) {
            if (!this.ready) {
                throw ("Plugin Not Read");
            }
            var plugin = new proto(this.factory, owner);
            var node = new PluginInstance(currentPluginId++, plugin);
            var basePluginInstance = plugin;
            Object.defineProperties(plugin, {
                'pluginInstance': {
                    'value': node
                },
                'prototypeObject': {
                    'value': this
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
                    value: this.factory.SessionData
                },
                'UserData': {
                    value: this.factory.UserData
                }
            });
            Object.defineProperty(node, "prototypeObject", {
                'value': this
            });
            this.factory.registerPluginInstance(node);
            return node;
        };

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
        this.ready = function () {
            var state = true;
            for (var i = 0; i < resourcePromises.length; i++) {
                if (resourcePromises[i].state !== 1 || !resourcePromises[i].test()) {
                    state = false;
                    break;
                }
            }
            return state;
        };
    };

    this.addPrototype = function (plugin_proto) {
        (function (plugin_proto) {
            if (typeof plugin_proto !== "function") {
                throw ("The Prototype must be a function!");
            }
            if (typeof plugin_proto.prototype.name !== "string" || plugin_proto.prototype.name.length === 0) {
                throw ("Malformed plugin. Name not defined");
            }
            if (typeof plugin_proto.prototype.version !== "string" || plugin_proto.prototype.version.length === 0) {
                throw ("Malformed plugin. Version not defined");
            }
            if (typeof plugin_proto.prototype.uniqueID !== "string" || plugin_proto.prototype.uniqueID.length === 0) {
                throw ("Malformed plugin. uniqueID not defined");
            }
        })(plugin_proto);
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
        obj = new PluginPrototype(plugin_proto);
        plugin_prototypes.push(obj);
        Object.defineProperties(obj, {
            'factory': {
                'value': this
            }
        });
        return obj;
    };

    this.getPrototypes = function () {
        return plugin_prototypes;
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

    this.createSubFactory = function (chainStart, chainStop) {
        var node = new PluginSubFactory(this, chainStart, chainStop);
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

    this.destroySubFactory = function (SubFactory) {
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

    this.registerPluginInstance = function (instance) {
        if (pluginsList.find(function (p) {
                return p === this;
            }, instance)) {
            throw ("Plugin Instance not unique");
        }
        pluginsList.push(instance);
        if (audioStarted) {
            instance.node.start.call(instance.node);
        }
        return true;
    };

    this.createPluginInstance = function (PluginPrototype) {
        throw ("DEPRECATED - Use PluginPrototype.createPluginInstance(owner);");
    };

    this.deletePlugin = function (id) {
        var index = pluginsList.findIndex(function (p) {
            return p.id === id;
        });
        if (index >= 0) {
            pluginsList.splice(index, 1);
        }
    };

    function triggerAudioStart() {
        pluginsList.forEach(function (n) {
            n.node.start.call(n.node);
        });
    }

    function triggerAudioStop() {
        pluginsList.forEach(function (n) {
            n.node.stop.call(n.node);
        });
    }

    this.audioStart = function () {
        if (!audioStarted) {
            triggerAudioStart();
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
        var node = new LinkedStore(storeName);
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
    this.SessionData = new LinkedStore("Session");
    this.UserData = new LinkedStore("User");

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

    var PluginSubFactory = function (PluginFactory, chainStart, chainStop) {

        var plugin_list = [],
            pluginChainStart = chainStart,
            pluginChainStop = chainStop,
            factoryName = "",
            state = 1,
            chainStartFeature = new SubFactoryFeatureSender(this, PluginFactory.FeatureMap),
            semanticStores = [];
        this.parent = PluginFactory;
        pluginChainStart.disconnect();
        pluginChainStart.connect(chainStop);

        this.TrackData = new LinkedStore("Track");
        this.PluginData = new LinkedStore("Plugin");

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

        this.destroy = function () {
            var i;
            for (i = 0; i < plugin_list.length; i++) {
                this.destroyPlugin(plugin_list[i]);
            }
            pluginChainStart.disconnect();
            pluginChainStart.connect(pluginChainStop);
        };

        // Plugin creation / destruction

        this.createPlugin = function (prototypeObject) {
            var node, last_node;
            if (state === 0) {
                throw ("SubFactory has been destroyed! Cannot add new plugins");
            }
            cutChain();
            node = prototypeObject.createPluginInstance(this);
            Object.defineProperties(node, {
                'TrackData': {
                    value: this.TrackData
                }
            });
            plugin_list.push(node);
            isolate();
            rebuild();
            joinChain();
            node.node.onloaded.call(node.node);
            return node;
        };

        this.destroyPlugin = function (plugin_object) {
            if (state === 0) {
                return;
            }
            var index = this.getPluginIndex(plugin_object);
            if (index >= 0) {
                cutChain();
                plugin_object.node.stop.call(plugin_object.node);
                plugin_object.node.onloaded.call(plugin_object.node);
                plugin_object.node.deconstruct.call(plugin_object.node);
                plugin_list.splice(index, 1);
                this.parent.deletePlugin(plugin_object.id);
                isolate();
                rebuild();
                joinChain();
            }
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
            var obj, index = this.getPluginIndex(plugin_object),
                holdLow, holdHigh, i;
            if (index >= 0) {
                cutChain();
                isolate();
                obj = plugin_list.splice(index, 1);
                plugin_object.node.onunloaded.call(plugin_object.node);
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
            }
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

        Object.defineProperties(this, {
            'chainStart': {
                'value': chainStart
            },
            'chainStop': {
                'value': chainStop
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
            }
        });
    };
    Object.defineProperties(this, {
        "context": {
            "value": audio_context
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
        }
    });
};

function xtract_is_denormal(t){return Math.abs(t)<=2.2250738585072014e-308}function xtract_assert_array(t){return"object"==typeof t&&void 0!==t.length&&t.length>0}function xtract_assert_positive_integer(t){return"number"==typeof t&&t>=0&&t===Math.round(t)}function xtract_array_sum(t){return xtract_assert_array(t)?jsXtract.functions.array_sum(t):0}function xtract_array_copy(t){for(var r=t.length,e=new t.constructor(r),a=0;a<r;a++)e[a]=t[a];return e}function xtract_array_min(t){return xtract_assert_array(t)?jsXtract.functions.array_min(t):0}function xtract_array_max(t){return xtract_assert_array(t)?jsXtract.functions.array_max(t):0}function xtract_array_scale(t,r){return xtract_assert_array(t)?jsXtract.functions.array_scale(t,r):0}function xtract_array_normalise(t){return xtract_assert_array(t)?xtract_array_scale(t,1/xtract_array_max(t)):0}function xtract_array_bound(t,r,e){if(!xtract_assert_array(t))return 0;if("number"!=typeof r&&(r=xtract_array_min(t)),"number"!=typeof e&&(e=xtract_array_max(t)),r>=e)throw"Invalid boundaries! Minimum cannot be greater than maximum";for(var a=new t.constructor(t.length),n=0;n<t.length;n++)a[n]=Math.min(Math.max(t[n],r),e);return a}function xtract_array_interlace(t){if(!xtract_assert_array(t))return[];var r=t.length,e=t[0].length;if(!1===t.every(function(t){return t.length===e}))throw"All argument lengths must be the same";for(var a=new t[0].constructor(r*e),n=0;n<e;n++)for(var i=0;i<r;i++)a[n*r+i]=t[i][n];return a}function xtract_array_deinterlace(t,r){if(!xtract_assert_array(t))return[];var e,a;if(!xtract_assert_positive_integer(r))throw"num_arrays must be a positive integer";e=[],a=t.length/r;for(var n=0;n<r;n++)e[n]=new t.constructor(a);for(var i=0;i<a;i++)for(var s=0;s<r;s++)e[s][i]=t[i*r+s];return e}function xtract_get_number_of_frames(t,r){if(!xtract_assert_array(t))throw"Invalid data parameter. Must be item with iterable list";if("number"!=typeof r&&r<=0)throw"Invalid hop_size. Must be positive integer";return Math.floor(t.length/r)}function xtract_get_data_frames(t,r,e,a){void 0===e&&(e=r),function(r,e,a){if(!xtract_assert_array(t))throw"Invalid data parameter. Must be item with iterable list";if(!xtract_assert_positive_integer(e))throw"xtract_get_data_frames requires the frame_size to be a positive integer";if(!xtract_assert_positive_integer(a))throw"xtract_get_data_frames requires the hop_size to be a positive integer"}(0,r,e);for(var n,i=[],s=t.length,u=Math.ceil(s/e),o=0;o<u;o++){var c=o*e;if(a){n=new Float64Array(r);for(var f=0;f<r&&f+c<t.length;f++)n[f]=t[f+c]}else if((n=t.subarray(c,c+r)).length<r){for(var l=new Float64Array(r),_=0;_<n.length;_++)l[_]=n[_];n=l}i.push(n)}return i}function xtract_process_frame_data(t,r,e,a,n,i){for(var s,u,o=xtract_get_data_frames(t,a,n),c={num_frames:o.length,results:[]},f=0,l={frame_size:a,hop_size:n,sample_rate:e,TimeData:void 0,SpectrumData:void 0},_=0;_<o.length;_++){var m=o[_];l.TimeData=m,l.SpectrumData=xtract_spectrum(m,e,!0,!1);var h={time_start:f,result:u=r.call(i||this,l,s,u)};f+=a/e,s=l,l={frame_size:a,hop_size:n,sample_rate:e,TimeData:void 0,SpectrumData:void 0},c.results.push(h)}return c}function xtract_array_to_JSON(t){if(t.join)return"["+t.join(", ")+"]";for(var r="[",e=0;e<this.length;)r+=this[e],void 0!==this[e+1]&&(r+=","),e++;return r+"]"}function xtract_frame_from_array(t,r,e,a,n){void 0===n&&(n=a),function(t,r,a,n,i){if(!xtract_assert_positive_integer(e))throw"xtract_get_frame requires the index to be an integer value";if(!xtract_assert_positive_integer(r))throw"xtract_get_frame requires the frame_size to be a positive integer";if(!xtract_assert_array(a))throw"Invalid data parameter. Must be item with iterable list";if(!xtract_assert_array(n))throw"dst must be an Array-like object equal in length to frame_size";if(!xtract_assert_positive_integer(i))throw"xtract_get_frame requires the hop_size to be a positive integer"}(0,a,t,r,n);if(e>=xtract_get_number_of_frames(t,n))throw"index number "+e+" out of bounds";for(var i=0,s=e*n;i<r.length&&i<t.length&&i<a;)r[i]=t[i+s],i++;for(;i<r.length;)r[i]=0}function xtract_mean(t){return xtract_assert_array(t)?xtract_array_sum(t)/t.length:0}function xtract_temporal_centroid(t,r,e){if("number"==typeof r){"number"!=typeof e&&(console.log("xtract_temporal_centroid assuming window_ms = 100ms"),e=100),e<=0&&(e=100);for(var a=1/r,n=r*(e/1e3),i=xtract_array_sum(t),s=0,u=0;u<t.length;u++)s+=t[u]*(u*n*a);return s/i}console.error("xtract_temporal_centroid requires sample_rate to be a number")}function xtract_variance(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_mean(t)),jsXtract.functions.variance(t,r)):0}function xtract_standard_deviation(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_variance(t)),Math.sqrt(r)):0}function xtract_average_deviation(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_mean(t)),jsXtract.functions.average_deviation(t,r)):0}function xtract_skewness_kurtosis(t,r,e){if(!xtract_assert_array(t))return[0,0];if("number"!=typeof r&&(r=xtract_mean(t)),"number"!=typeof e&&(e=xtract_standard_deviation(t,xtract_variance(t,r))),0===e)return[0,0];for(var a=[0,0],n=0;n<t.length;n++)a[0]+=Math.pow((t[n]-r)/e,3),a[1]+=Math.pow((t[n]-r)/e,4);return a[0]/=t.length,a[1]/=t.length,a}function xtract_skewness(t,r,e){return xtract_skewness_kurtosis(t,r,e)[0]}function xtract_kurtosis(t,r,e){return xtract_skewness_kurtosis(t,r,e)[1]}function xtract_spectral_centroid(t){return xtract_assert_array(t)?jsXtract.functions.spectral_centroid(t):0}function xtract_spectral_mean(t){if(!xtract_assert_array(t))return 0;var r=t.length>>1;return xtract_array_sum(t.subarray(0,r))/r}function xtract_spectral_variance(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_spectral_centroid(t)),jsXtract.functions.spectral_variance(t,r)):0}function xtract_spectral_spread(t,r){return xtract_spectral_variance(t,r)}function xtract_spectral_standard_deviation(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_spectral_variance(t)),Math.sqrt(r)):0}function xtract_spectral_skewness(t,r,e){if(!xtract_assert_array(t))return 0;if("number"!=typeof spectral_mean&&(r=xtract_spectral_centroid(t)),"number"!=typeof e&&(e=xtract_spectral_standard_deviation(t,xtract_spectral_variance(t,r))),0===e)return 0;for(var a=0,n=t.length>>1,i=t.subarray(0,n),s=t.subarray(n),u=xtract_array_sum(i),o=0;o<n;o++)a+=Math.pow(s[o]-r,3)*(i[o]/u);return a/=Math.pow(e,3)}function xtract_spectral_kurtosis(t,r,e){if(!xtract_assert_array(t))return 0;if("number"!=typeof r&&(r=xtract_spectral_centroid(t)),"number"!=typeof e&&(e=xtract_spectral_standard_deviation(t,xtract_spectral_variance(t,r))),0===e)return 1/0;for(var a=0,n=t.length>>1,i=t.subarray(0,n),s=t.subarray(n),u=xtract_array_sum(i),o=0;o<n;o++)a+=Math.pow(s[o]-r,4)*(i[o]/u);return a/Math.pow(e,4)}function xtract_irregularity_k(t){if(!xtract_assert_array(t))return 0;for(var r=0,e=t.length>>1,a=t.subarray(0,e),n=1;n<e-1;n++)r+=Math.abs(Math.log10(a[n])-Math.log10(a[n-1]+a[n]+a[n+1])/3);return r}function xtract_irregularity_j(t){if(!xtract_assert_array(t))return 0;for(var r=0,e=0,a=t.length>>1,n=t.subarray(0,a),i=0;i<a-1;i++)r+=Math.pow(n[i]-n[i+1],2),e+=Math.pow(n[i],2);return r/e}function xtract_tristimulus(t,r){var e=[0,0,0];if(!xtract_assert_array(t))return e;if("number"!=typeof r)throw"xtract_tristimulus requires f0 to be defined and a number";for(var a=0,n=[0,0,0,0,0],i=0,s=t.length>>1,u=t.subarray(0,s),o=t.subarray(s),c=0;c<s;c++)0!==(i=u[c])&&(a+=i,n[Math.floor(o[c]/r+.5)-1]+=i);return 0!==a&&(e[0]=n[0]/a,e[1]=(n[1]+n[2]+n[3])/a,e[2]=n[4]/a),e}function xtract_tristimulus_1(t,r){return xtract_tristimulus(t,r)[0]}function xtract_tristimulus_2(t,r){return xtract_tristimulus(t,r)[1]}function xtract_tristimulus_3(t,r){return xtract_tristimulus(t,r)[2]}function xtract_smoothness(t){if(!xtract_assert_array(t))return 0;var r=0,e=0,a=0,n=0,i=t.length>>1;r=Math.max(1e-5,t[0]),e=Math.max(1e-5,t[1]);for(var s=1;s<i-1;s++)a=Math.max(1e-5,t[s+1]),n+=Math.abs(20*Math.log(e)-(20*Math.log(r)+20*Math.log(e)+20*Math.log(a))/3),r=e,e=a;return n}function xtract_zcr(t){if(!xtract_assert_array(t))return 0;for(var r=0,e=1;e<t.length;e++)t[e]*t[e-1]<0&&r++;return r/t.length}function xtract_rolloff(t,r,e){if(!xtract_assert_array(t))return 0;if("number"!=typeof r||"number"!=typeof e)return console.log("xtract_rolloff requires sampleRate and threshold to be defined"),null;var a=t.length>>1,n=t.subarray(0,a),i=0,s=0;i=xtract_array_sum(n),i*=e/100;for(var u=0;s<i;)s+=n[u],u++;return u*(r/t.length)}function xtract_loudness(t){if(!xtract_assert_array(t))return 0;var r=0;if(t.reduce)r=t.reduce(function(t,r){return t+Math.pow(r,.23)},0);else for(var e=0;e<t.length;e++)r+=Math.pow(t[e],.23);return r}function xtract_flatness(t){if(!xtract_assert_array(t))return 0;for(var r=0,e=1,a=0,n=0,i=t.length>>1,s=t.subarray(0,i),u=0;u<i;u++)e*=n=Math.max(1e-32,s[u]),a+=n,r++;return 0===r?0:(e=Math.pow(e,1/r),a/=r,e/a)}function xtract_flatness_db(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_flatness(t)),10*Math.log10(r)):0}function xtract_tonality(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_flatness_db(t)),Math.min(r/-60,1)):0}function xtract_crest(t,r,e){return xtract_assert_array(t)?("number"!=typeof r&&(r=xtract_array_max(t)),"number"!=typeof e&&(e=xtract_mean(t)),r/e):0}function xtract_noisiness(t,r){return"number"!=typeof t&&"number"!=typeof r?0:(r-t)/r}function xtract_rms_amplitude(t){if(!xtract_assert_array(t))return 0;return jsXtract.functions.rms_amplitude(t)}function xtract_spectral_inharmonicity(t,r){if(!xtract_assert_array(t))return 0;if("number"!=typeof r)return console.error("spectral_inharmonicity requires f0 to be defined."),null;for(var e=0,a=0,n=0,i=t.length>>1,s=t.subarray(0,o),u=t.subarray(o),o=0;o<i;o++)if(0!==s[o]){e=Math.floor(u[o]/r+.5);var c=Math.pow(s[o],2);a+=Math.abs(u[o]-e*r)*c,n+=c}return 2*a/(r*n)}function xtract_power(t){return null}function xtract_odd_even_ratio(t,r){if(!xtract_assert_array(t))return 0;!function(t){if("number"!=typeof r)throw"spectral_inharmonicity requires f0 to be defined."}();for(var e,a=0,n=0,i=t.length>>1,s=t.subarray(0,o),u=t.subarray(o),o=0;o<i;o++)0!==(e=s[o])&&(Math.floor(u[o]/r+.5)%2!=0?a+=e:n+=e);return 0===a||0===n?0:a/n}function xtract_sharpness(t){if(!xtract_assert_array(t))return 0;for(var r=t.length,e=0,a=0,n=0;n<r;n++)e=Math.pow(t[n],.23),a+=n*(n<15?1:.066*Math.exp(.171*n))*e;return a=.11*a/r}function xtract_spectral_slope(t){if(!xtract_assert_array(t))return 0;var r=0,e=0,a=0,n=0,i=t.length>>1,s=t.subarray(0,i),u=t.subarray(i);r=xtract_array_sum(u),a=xtract_array_sum(s);for(var o=0;o<i;o++)e+=u[o]*s[o],n+=u[o]*u[o];return 1/a*(i*e-r*a)/(i*n-r*r)}function xtract_lowhigh(t,r){for(var e={min:null,max:null},a=0;a<t.length;a++)t[a]>r&&(e.min=Math.min(e.min,t[a])),t[a]<r&&(e.max=Math.max(e.max,t[a]));return e}function xtract_lowest_value(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=-1/0),xtract_lowhigh(t,r).min):0}function xtract_highest_value(t,r){return xtract_assert_array(t)?("number"!=typeof r&&(r=1/0),xtract_lowhigh(t,r).max):0}function xtract_sum(t){return xtract_assert_array(t)?xtract_array_sum(t):0}function xtract_nonzero_count(t){if(!xtract_assert_array(t))return 0;var r=0;if(t.reduce)return t.reduce(function(t,r){return 0!==r&&t++,t});for(var e=0;e<t.length;e++)0!==t[e]&&r++;return r}function xtract_hps(t){if(!xtract_assert_array(t))return 0;var r,e=0,a=0,n=0,i=0,s=t.length>>1,u=t.subarray(0,s),o=t.subarray(s),c=Math.ceil(s/3);if(c<=1)throw"Input Data is too short for HPS";for(e=function(t,r){var e=0,a=0,n=new Float64Array(t);return n.forEach(function(t,e,a){a[e]=r[e]*r[2*e]*r[3*e]}),n.forEach(function(t,r){t>a&&(a=t,e=r)}),e}(c,u),r=0;r<s;r++)u[r]>n&&r!==e&&(n=u[r],a=r);return i=u[a]/u[e],a>.4*e&&a<.6*e&&i>.1&&(e=a),o[e]}function xtract_f0(t,r){function e(t,r,e){var a,n=0;for(a=1;a<r;a++)n+=Math.abs(t[a]-t[a+e]);return n}if(!xtract_assert_array(t))return 0;"number"!=typeof r&&(r=44100);var a=xtract_array_copy(t),n=a.length/2,i=.8,s=.3,u=0;u=xtract_array_max(a),s*=u,(a=xtract_array_bound(a,-(i*=u),i)).forEach(function(t,r,e){e[r]=Math.max(0,t-s)});for(var o=e(a,n,1),c=2;c<n;c++){var f=e(a,n,c);if(f<o)return r/(c+f/o)}return-0}function xtract_failsafe_f0(t,r){return xtract_f0(t,r)}function xtract_wavelet_f0(t,r,e){function a(t){return 0===t?1:2===t?1:1&t?0:a(t>>1)}function n(t){return 0===t?0:1===t?1:2===t?2:n(t>>1)+1}function i(t){if(a(t))return t;if(1===t)return 2;var r,e=n(t),i=1;for(r=0;r<e;r++)i<<=1;return i}function s(t){return t>=0?t:-t}function u(t){var r,e=1;for(r=0;r<t;r++)e<<=1;return e}function o(){if(v=Math.floor(44100/(3e3*u(A))),y<2)F=!1;else{var t,r=-1e3,e=0,a=0,n=-1e6,i=-1e6,o=0,m=0;if(function(){for(c=2;c<y;c++)l=d[c]-g,(_=d[c-1]-g)<=0&&l>0&&(o=1),_>=0&&l<0&&(m=1),t=l-_,r>-1e3&&(m&&r<0&&t>=0&&Math.abs(l)>=w&&c>n+v&&(b[e++]=c,n=c,m=0),o&&r>0&&t<=0&&Math.abs(l)>=w&&c>i+v&&(x[a++]=c,i=c,o=0)),r=t}(),0!==e||0!==a){var P,D=new Int32Array(h);!function(){for(c=0;c<e;c++)for(f=1;f<3;f++)c+f<e&&(P=s(b[c]-b[c+f]),D[P]=D[P]+1);for(c=0;c<a;c++)for(f=1;f<3;f++)c+f<a&&(P=s(x[c]-x[c+f]),D[P]=D[P]+1)}();var k=-1,C=-1;!function(){for(c=0;c<y;c++){var t=0;for(f=-v;f<=v;f++)c+f>=0&&c+f<y&&(t+=D[c+f]);t===C?c===2*k&&(k=c):t>C&&(C=t,k=c)}}();var S=0,j=0;if(function(){for(f=-v;f<=v;f++)if(k+f>=0&&k+f<h){var t=D[k+f];t>0&&(j+=t,S+=(k+f)*t)}}(),S/=j,M>-1){if(Math.abs(2*S-M)<=2*v)return p=44100/(u(A-1)*M),void(F=!1)}M=S,(A+=1)>=6?F=!1:y<2?F=!1:(!function(){for(c=0;c<y/2;c++)d[c]=(d[2*c]+d[2*c+1])/2}(),y/=2)}else F=!1}}if(!xtract_assert_array(t))return 0;if(void 0===e)throw"xtract_wavelet_f0 requires pitchtracker to be defined";if(0!==xtract_array_sum(t)){var c,f,l,_,m=t,h=t.length,p=0;h=function(t){return a(t)?t:i(t)/2}(h);var d=new Float64Array(h);for(c=0;c<h;c++)d[c]=m[c];for(var v,y=h,b=new Int32Array(h),x=new Int32Array(h),g=function(t,r){return xtract_mean(t.subarray(r))}(d,h),w=.75*function(t,r){var e,a,n=0,i=0;for(a=0;a<r;a++)(e=t[a])>i&&(i=e),e<n&&(n=e);return i-=g,n-=g,i>-n?i:-n}(d,h),A=0,M=-1,F=!0;F;)o();return function(t,r){if(0===r)return-1;var e=-1;return-1!==r?-1===t._prevPitch?(e=r,t._prevPitch=r,t._pitchConfidence=1):Math.abs(t._prevPitch-r)/r<.2?(t._prevPitch=r,e=r,t._pitchConfidence=Math.min(5,t._pitchConfidence+1)):t._pitchConfidence>=3&&Math.abs(t._pitchConfidence-2*r)/(2*r)<.2?(e=2*r,t._prevPitch=e):t._pitchConfidence>=3&&Math.abs(t._pitchConfidence-.5*r)/(.5*r)<.2?(e=.5*r,t._prevPitch=e):t._pitchConfidence>=1?(e=t._prevPitch,t._pitchConfidence=Math.max(0,t._pitchConfidence-1)):(e=r,t._prevPitch=r,t._pitchConfidence=1):-1!==t._prevPitch&&(t._pitchConfidence>=1?(e=t._prevPitch,t._pitchConfidence=Math.max(0,t._pitchConfidence-1)):(t._prevPitch=-1,e=-1,t._pitchConfidence=0)),-1===(r=t._pitchConfidence>=1?e:-1)&&(r=0),r}(e,p)}}function xtract_midicent(t){if("number"!=typeof t)return-1;var r=0;return r=69+17.31234*Math.log(t/440),r*=100,r=Math.round(.5+r)}function xtract_spectral_fundamental(t,r){if(!xtract_assert_array(t))return 0;var e,a=t.length>>1,n=t.subarray(0,a),i=(t.subarray(a),2*a),s=new Float64Array(i);for(e=0;e<a;e++)s[e]=Math.pow(n[e],2),s[i-1-e]=s[e];var u=new Float64Array(i);inverseTransform(s,u),u=void 0,u=s,s=void 0;var o=function(t,r){var e,a=[],n=t.length;for(void 0===r&&(r=5),e=r;e<n-r-1;e++){var i,s=1;for(i=-r;i<r-1;i++)if(t[e+i]>t[e]){s=0;break}1===s&&a.push(e)}return a}(u,5);return 0===o.length?0:(o=o[0],o/=r,o=1/o)}function xtract_energy(t,r,e){if(!xtract_assert_array(t))return 0;{if("number"==typeof r){"number"!=typeof e&&(e=100),e<=0&&(e=100);for(var a=t.length,n=Math.floor(r*(e/1e3)),i=Math.ceil(a/n),s=new Float64Array(i),u=0;u<i;u++){var o=xtract_rms_amplitude(t.subarray(u*n,u*n+n));s[u]=o}return s}console.error("xtract_energy requires sample_rate to be defined")}}function xtract_spectrum(t,r,e,a){if(function(t,e){if("number"!=typeof r)throw"Sample Rate must be defined"}(),!xtract_assert_array(t))return 0;e=!0===e,a=!0===a;var n,i,s,u=t.length,o=0;e?n=new Float64Array(u+2):(o=1,n=new Float64Array(u)),i=n.subarray(0,n.length/2),s=n.subarray(n.length/2);var c=new Float64Array(u),f=new Float64Array(u);t.forEach(function(t,r){c[r]=t}),transform(c,f);for(var l=o;l<=n.length/2;l++)i[l-o]=Math.sqrt(c[l]*c[l]+f[l]*f[l])/t.length,s[l-o]=2*l/u*(r/2);return a&&(i=xtract_array_normalise(i)),n}function xtract_complex_spectrum(t,r,e){if(!xtract_assert_array(t))return 0;if("number"!=typeof r)return console.error("Sample Rate must be defined"),null;void 0===e&&(e=!1);var a,n,i,s=t.length,u=0;e?a=new Float64Array(3*(s/2+1)):(u=1,a=new Float64Array(s/2*3)),n=a.subarray(0,a.length/3*2),i=a.subarray(a.length/3*2);for(var o=new Float64Array(s),c=new Float64Array(s),f=0;f<s;f++)o[f]=t[f];transform(o,c);for(var l=u;l<=o.length/2;l++)n[2*(l-u)]=o[l],n[2*(l-u)+1]=c[l],i[l-u]=2*l/s*(r/2);return a}function xtract_mfcc(t,r){if(!xtract_assert_array(t))return 0;var e=t.length>>1;!function(t){if("object"!=typeof t)throw"Invalid MFCC, must be MFCC object built using xtract_init_mfcc";if(0===t.n_filters)throw"Invalid MFCC, object must be built using xtract_init_mfcc";if(t.filters[0].length!==e)throw"Lengths do not match"}(r);var a=new Float64Array(r.n_filters);return a.forEach(function(e,a,n){n[a]=0;for(var i=r.filters[a],s=0;s<i.length;s++)n[a]+=t[s]*i[s];n[a]=Math.log(Math.max(n[a],2e-42))}),xtract_dct(a)}function xtract_dct(t){if(!xtract_assert_array(t))return 0;var r=t.length,e=new Float64Array(r);if(t.reduce)e.forEach(function(e,a,n){var i=a/r;n[a]=t.reduce(function(t,r,e){return t+r*Math.cos(Math.PI*i*(e+.5))})});else for(var a=0;a<r;a++)for(var n=a/r,i=0;i<r;i++)e[a]+=t[i]*Math.cos(Math.PI*n*(i+.5));return e}function xtract_dct_2(t,r){if(!xtract_assert_array(t))return 0;var e=t.length;void 0===r&&(r=xtract_init_dct(e));var a=new Float64Array(e);if(a[0]=xtract_array_sum(t),a.forEach&&t.reduce)a.forEach(function(e,a,n){n[a]=t.reduce(function(t,e,n){return t+e*r.wt[a][n]})});else for(var n=1;n<e;n++)for(var i=0;i<e;i++)a[n]+=t[i]*r.wt[n][i];return a}function xtract_autocorrelation(t){return xtract_assert_array(t)?jsXtract.functions.autocorrelation(t):0}function xtract_amdf(t){if(!xtract_assert_array(t))return 0;for(var r=t.length,e=new Float64Array(r);r--;){for(var a=0,n=0;n<t.length-r;n++)a+=Math.abs(t[n]-t[n+r]);e[r]=a/t.length}return e}function xtract_asdf(t){if(!xtract_assert_array(t))return 0;for(var r=t.length,e=new Float64Array(r);r--;){for(var a=0,n=0;n<t.length-r;n++)a+=Math.pow(t[n]-t[n+r],2);e[r]=a/t.length}return e}function xtract_bark_coefficients(t,r){if(!xtract_assert_array(t))return 0;if(void 0===r)throw"xtract_bark_coefficients requires compute limits from xtract_init_bark";t.length;for(var e=r.length,a=new Float64Array(e),n=0;n<e-1;n++){a[n]=0;for(var i=r[n];i<r[n+1];i++)a[n]+=t[i]}return a}function xtract_peak_spectrum(t,r,e){if(!xtract_assert_array(t))return 0;var a=t.length,n=a>>1,i=0,s=0,u=0,o=0;if("number"!=typeof r)throw"xtract_peak_spectrum requires second argument to be sample_rate/N";(e<0||e>100)&&(e=0);var c=new Float64Array(a),f=t.subarray(0,n),l=(t.subarray(n),c.subarray(0,n)),_=c.subarray(n);e*=.01*xtract_array_max(f);for(var m=1;m<a-1;m++)f[m]>=e&&f[m]>f[m-1]&&f[m]>f[m+1]?(i=f[m-1],s=f[m],o=.5*(i-(u=f[m+1]))/(f[m-1]-2*(s+f[m+1])),_[m]=r*(m+1+o),l[m]=s-.25*(i-u)*o):(l[m]=0,_[m]=0);return c}function xtract_harmonic_spectrum(t,r,e){if(!xtract_assert_array(t))return 0;var a=t.length,n=a>>1,i=new Float64Array(a),s=t.subarray(0,n),u=t.subarray(n),o=i.subarray(0,n),c=i.subarray(n),f=n;if(void 0===r||void 0===e)throw"harmonic_spectrum requires f0 and threshold to be numbers and defined";for(e>1&&(e/=100);f--;)if(0!==u[f]){var l=u[f]/r,_=Math.round(l);Math.abs(_-l)>e?(o[f]=0,c[f]=0):(o[f]=s[f],c[f]=u[f])}else i[f]=0,c[f]=0;return i}function xtract_lpc(t){if(!xtract_assert_array(t))return 0;var r,e,a,n=t[0],i=t.length-1,s=new Float64Array(i),u=new Float64Array(i);return 0===n?s:(function(){for(r=0;r<i;r++){for(a=-t[r+1],e=0;e<r;e++)a-=s[e]*t[r-e];for(a/=n,u[r]=a,s[r]=a,e=0;e<r>>1;e++){var o=s[e];s[e]+=a*s[r-1-e],s[r-1-e]+=a*o}r%2&&(s[e]+=s[e]*a),n*=1-a*a}}(),s)}function xtract_lpcc(t,r){if(!xtract_assert_array(t))return 0;var e,a,n,i,s=t.length,u=s-1;"number"!=typeof r&&(r=s-1),i=r;var o=new Float64Array(i);return function(){for(e=1;e<r&&e<i;e++){for(n=0,a=1;a<e;a++)n+=a*o[a-1]*t[e-a];o[e-1]=t[e]+n/e}}(),function(){for(e=u+1;e<=i;e++){for(n=0,a=e-(u-1);a<e;a++)n+=a*o[a-1]*t[e-a];o[e-1]=n/e}}(),o}function xtract_pcp(t,r,e){if(!xtract_assert_array(t))return 0;var a=t.length>>1;if("object"!=typeof r){if("number"!=typeof e||e<=0)throw"Cannot dynamically compute M if fs is undefined / not a valid sample rate";r=xtract_init_pcp(a,e)}for(var n=t.subarray(1,a),i=new Float64Array(12),s=0;s<n.length;s++){r[s];i[s]+=Math.pow(Math.abs(n[s]),2)}return i}function xtract_yin(t){if(!xtract_assert_array(t))return 0;for(var r=t.length,e=new Float64Array(t.length),a=new t.constructor(t.length),n=0,i=1;i<r;i++){for(var s=0,u=1;u<r-i;u++)s+=Math.pow(t[u]-t[u+i],2);e[i]=s,n+=s,a[i]=e[i]/(1/i*n)}return a}function xtract_onset(t,r){function e(t,r){return void 0===r&&2===t.length?Math.atan2(t[1],t[0]):Math.atan2(r,t)}function a(t,r){return void 0===r&&2===t.length?Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)):Math.sqrt(Math.pow(t,2)+Math.pow(r,2))}function n(t){return(t+Math.PI)%(-2*Math.PI)+Math.PI}function i(t,r){if(2!==t.length||2!==r.length)throw"Both arguments must be numeral arrays of length 2";var e=new t.constructor(2);return e[0]=t[0]*r[0]-t[1]*r[1],e[1]=t[0]*r[1]+t[1]*r[0],e}if(!xtract_assert_array(t))return 0;if(void 0===r)throw"All arguments for xtract_onset must be defined: xtract_onset(timeData, frameSize)";for(var s,u=xtract_get_data_frames(t,r,r,!1),o=u.length,c=r/2+1,f=function(t,r){for(var e,a=t.length,n=[],i=new Float64Array(r),s=new Float64Array(r),u=r/2+1,o=0;o<a;o++){for(e=0;e<r;e++)i[e]=t[o][e],s[e]=0;transform(i,s),n[o]=xtract_array_interlace([i.subarray(0,u),s.subarray(0,u)])}return n}(u,r),l=new t.constructor(o),_=0;_<c;_++){var m=e(f[0].subarray(2*_,2*_+2)),h=e(f[0].subarray(2*_,2*_+2));for(s=1;s<o;s++){var p=n(m+h),d=[Math.cos(p),Math.sin(p)],v=i(f[s].subarray(2*_,2*_+2),d);v[0]=f[s][2*_]-v[0],v[1]=f[s][2*_+1]-v[1],l[s]+=a(v);var y=e(f[s].subarray(2*_,2*_+2));h=y-m,m=y}}for(s=0;s<o;s++)l[s]/=r;return l}function xtract_resample(t,r,e,a){function n(t,r){var e,a,n;e=Math.floor(r*t),a=new Float64Array(t),n=new Float64Array(t);var i,s;for(i=0;i<e;i++)a[i]=1;for(i=t-e+1;i<t;i++)a[i]=1;for(inverseTransform(a,n),i=0;i<t;i++){s=(i+(t>>1))%t,n[i]=a[s]/t;var u=Math.PI*i/t;n[i]*=.35875-.48829*Math.cos(2*u)+.14128*Math.cos(4*u)-.01168*Math.cos(6*u)}return n}function i(t,r){var e,a=t.length,n=[0,t[0],t[1]],i=new Float64Array(r),s=1/(r/a),u=0,o=0;for(e=0;e<r;e++){if(o===u)i[e]=t[u];else{var c=(o-u-1)*(o-u)*n[0]-2*(o-u-1)*(o-u+1)*n[1]+(o-u)*(o-u+1)*n[2];i[e]=c/2}(o+=s)>=u+1&&(u=Math.floor(o),n[0]=t[u-1],n[1]=t[u],n[2]=u+1<a?t[u+1]:0)}return i}function s(t){var r=function(t){for(var r=new Float64Array(2*t.length),e=0;e<t.length;e++)r[e]=t[e];return r}(t),e=new Float64Array(r.length);return transform(r,e),{real:r,imag:e}}function u(t,r){var e,a,n=new Float64Array(t.length),i=r.length,u=2*i,o=s(r),c=xtract_get_data_frames(t,i,i,!1),f=xtract_get_data_frames(n,i,i,!1),l=new Float64Array(i),_=new Float64Array(i),m=function(t){var r,e=new Float64Array(t);for(r=0;r<t;r++){var a=Math.PI*r/t;e[r]=.35875-.48829*Math.cos(2*a)+.14128*Math.cos(4*a)-.01168*Math.cos(6*a)}return e}(u),h={real:new Float64Array(u),imag:new Float64Array(u)},p={real:new Float64Array(u),imag:new Float64Array(u)};for(a=0;a<c.length;a++){for(e=0;e<i;e++)h.real[e]=l[e]*m[e],h.real[e+i]=c[a][e]*m[e+i],l[e]=c[a][e],h.imag[e]=0,h.imag[e+i]=0;for(transform(h.real,h.imag),e=0;e<u;e++)p.real[e]=h.real[e]*o.real[e]-h.imag[e]*o.imag[e],p.imag[e]=h.imag[e]*o.real[e]+h.real[e]*o.imag[e];for(transform(p.imag,p.real),e=0;e<i;e++){var d=p.real[e+i]/i;p.real[e+i]=p.real[e]/i,p.real[e]=d}for(e=0;e<i;e++)f[a][e]=p.real[e]+_[e],_[e]=p.real[e+i]}return n}if(!xtract_assert_array(t))return 0;var o=t.length;if(("number"!=typeof a||a<=0)&&(a=512),r===e)return t;var c,f=r/e,l=Math.floor(o*f);if(r>e)c=i(t,l),u(t,n(a,1/f));else{c=i(u(t,n(a,f/2)),l)}return c}function xtract_init_dft(t){for(var r={N:t/2+1,real:[],imag:[]},e=-2*Math.PI/t,a=0;a<r.N;a++){var n=e*a;r.real[a]=new Float64Array(t),r.imag[a]=new Float64Array(t);for(var i=0;i<t;i++){var s=n*i;r.real[a][i]=Math.cos(s),r.imag[a][i]=Math.sin(s)}}return r}function xtract_init_dct(t){for(var r={N:t,wt:[]},e=0;e<t;e++){r.wt[e]=new Float64Array(t);for(var a=0;a<t;a++)r.wt[e][a]=Math.cos(Math.PI*e*(a+.5)/t)}return r}function xtract_init_mfcc(t,r,e,a,n,i){var s,u={n_filters:i,filters:[]};if(i<=1)return null;var o,c,f=0,l=function(r,e,a,n,i){var s,u,o,c=t/2,f=1127*Math.log(1+r/700),l=1127*Math.log(1+e/700),_=(f-l)/a,m=new Float64Array(a+2),h=new Float64Array(a+2),p=new Float64Array(a+2),d=new Float64Array(a);for(m[0]=l,h[0]=e,p[0]=Math.floor(h[0]/n*c),o=1;o<a+2;++o)m[o]=m[o-1]+_,h[o]=700*(Math.exp(m[o]/1127)-1),p[o]=Math.floor(h[o]/n*c);for(o=0;o<a;o++)"XTRACT_EQUAL_GAIN"===i?(s=1,u=1):(s=2/(h[o+2]-h[o]),u=1/(2/(h[2]-h[0]))),d[o]=s*u;return{f:p,h:d}}(n,a,i,r,e),_=l.f,m=l.h;for(s=0;s<i;s++){o=0===s?m[s]/_[s]:m[s]/(_[s]-_[s-1]);var h=0;for(u.filters[s]=new Float64Array(t);f<=_[s];f++)u.filters[s][f]=h,h+=o;for(o=m[s]/(_[s+1]-_[s]),h=0,c=_[s+1],f=Math.floor(c);f>_[s];f--)u.filters[s][f]=h,h+=o}return u}function xtract_init_wavelet(){return{_prevPitch:-1,_pitchConfidence:-1}}function xtract_init_pcp(t,r,e){!function(t,r){if("number"!=typeof r||"number"!=typeof t)throw"The Sample Rate and sample count have to be defined: xtract_init_pcp(N, fs, f_ref)";if(t<=0||t!==Math.floor(t))throw"The sample count, N, must be a positive integer: xtract_init_pcp(N, fs, f_ref)";if(r<=0)throw"The Sample Rate must be a positive number: xtract_init_pcp(N, fs, f_ref)"}(t,r),("number"!=typeof e||e<=0||e>=r/2)&&(e=48.9994294977);for(var a=new Float64Array(t-1),n=r/2,i=1;i<t;i++){var s=2*i/t*n;a[i-1]=Math.round(12*Math.log2(s/t*e))%12}return a}function xtract_init_bark(t,r,e){("number"!=typeof e||e<0||e>26)&&(e=26);for(var a=[0,100,200,300,400,510,630,770,920,1080,1270,1480,1720,2e3,2320,2700,3150,3700,4400,5300,6400,7700,9500,12e3,15500,20500,27e3],n=new Int32Array(e);e--;)n[e]=a[e]/r*t;return n}function xtract_init_chroma(t,r,e,a,n,i){("number"!=typeof e||e<=1)&&(e=12),("number"!=typeof a||a<=27.5)&&(a=440),"number"!=typeof n&&(n=1e3),"number"!=typeof i&&(i=1);var s,u,o=t,c=Math.log(n/27.5)/Math.LN2,f={wts:[],nfft:o,nbins:e},l=new Float64Array(o),_=new Float64Array(o),m=function(t){return Math.log(t/(a/16))/Math.LN2};for(s=1;s<o;s++)l[s]=e*m(s/t*r);for(l[0]=l[1]-1.5*e,s=0;s<o-1;s++){var h=l[s+1]-l[s];_[s]=h>=1?h:1}_[o-1]=1;var p=Math.round(e/2),d=[];for(s=0;s<e;s++)for(d[s]=[],u=0;u<o;u++){var v=l[u]-s,y=_[u],b=(v+p+10*e)%e-p;d[s][u]=Math.exp(-.5*Math.pow(2*b/y,2))}var x=xtract_array_sum,g=function(t){if(void 0===t)return[];var r,e,a=t.length,n=t[0].length,i=[];for(r=0;r<n;r++)i[r]=new Float64Array(a);for(r=0;r<a;r++)for(e=0;e<n;e++)i[e][r]=t[r][e];return i}(d).map(x);for(s=0;s<e;s++)for(u=0;u<o;u++)d[s][u]*=1/g[u];if(i>0)for(s=0;s<e;s++)for(u=0;u<o;u++)d[s][u]*=Math.exp(-.5*Math.pow((l[u]/e-c)/i,2));return f.wts=d,f}function xtract_apply_window(t,r){!function(t,r){if(!xtract_assert_array(t)||!xtract_assert_array(r))throw"Both X and W must be defined";if(t.length!==r.length)throw"Both X and W must be the same lengths"}(t,r);var e,a=t.length,n=new Float64Array(a);for(e=0;e<a;e++)n[e]=t[e]*r[e];return n}function xtract_create_window(t,r){switch(function(r,e){if(!xtract_assert_positive_integer(t))throw"N must be a defined, positive integer";if("string"!=typeof e||0===e.length)throw"Type must be defined"}(0,r),r=r.toLowerCase()){case"hamming":return function(t){var r,e=new Float64Array(t);for(r=0;r<t;r++)e[r]=25/46-21/46*Math.cos(2*Math.PI*r/(t-1));return e}(t);case"welch":return function(t){var r,e=new Float64Array(t),a=(t-1)/2;for(r=0;r<t;r++)e[r]=1-Math.pow((r-a)/a,2);return e}(t);case"sine":return function(t){var r,e=new Float64Array(t),a=Math.PI*r/(t-1);for(r=0;r<t;r++)e[r]=Math.sin(a);return e}(t);case"hann":return function(t){var r,e=new Float64Array(t);for(r=0;r<t;r++)e[r]=.5-(1-Math.cos(2*Math.PI*r/(t-1)));return e}(t);default:throw'Window function"'+r+'" not defined'}}function xtract_chroma(t,r){if(!xtract_assert_array(t))return 0;if(void 0===r.wts)throw"xtract_chroma requires chroma filters from xtract_init_chroma";if(r.nfft!==t.length/2)throw"the FFT lengths of the spectrum ("+t.length/2+") and chroma filterbank ("+r.nfft+") do not match";for(var e=new Float64Array(r.nbins),a=0;a<r.nbins;a++){for(var n=0,i=0;i<r.nfft;i++)n+=r.wts[a][i]*t[i];e[a]=n}return e}function transform(t,r){if(t.length!==r.length)throw"Mismatched lengths";var e=t.length;0!==e&&(0==(e&e-1)?transformRadix2(t,r):transformBluestein(t,r))}function inverseTransform(t,r){transform(r,t)}function transformRadix2(t,r){function e(t,r){for(var e=0,a=0;a<r;a++)e=e<<1|1&t,t>>>=1;return e}if(t.length!==r.length)throw"Mismatched lengths";var a=t.length;if(1!==a){var n=function(t){var r;for(r=0;r<32;r++)if(1<<r===t)return r;return-1}(a);if(-1===n)throw"Length is not a power of 2";var i=new Float64Array(a/2),s=new Float64Array(a/2);!function(t,r){var e,a=t.length;for(e=0;e<a;e++)t[e]=Math.cos(Math.PI*e/a),r[e]=Math.sin(Math.PI*e/a)}(i,s),function(t,r){var i,s,u;for(i=0;i<a;i++)(s=e(i,n))>i&&(u=t[i],t[i]=t[s],t[s]=u,u=r[i],r[i]=r[s],r[s]=u)}(t,r);for(var u=2;u<=a;u*=2)!function(t,r,e,a,n){var i,s,u,o=t.length,c=n/2,f=o/n;for(i=0;i<o;i+=n)for(s=i,u=0;s<i+c;s++,u+=f){var l=t[s+c]*a[u]+r[s+c]*e[u],_=-t[s+c]*e[u]+r[s+c]*a[u];t[s+c]=t[s]-l,r[s+c]=r[s]-_,t[s]+=l,r[s]+=_}}(t,r,s,i,u)}}function transformBluestein(t,r){if(t.length!==r.length)throw"Mismatched lengths";for(var e,a,n=t.length,i=1;i<2*n+1;)i*=2;var s=new Float64Array(n),u=new Float64Array(n);!function(t,r){for(e=0;e<n;e++)a=e*e%(2*n),t[e]=Math.cos(Math.PI*a/n),r[e]=Math.sin(Math.PI*a/n)}(s,u);var o=new Float64Array(i),c=new Float64Array(i);for(e=0;e<n;e++)o[e]=t[e]*s[e]+r[e]*u[e],c[e]=-t[e]*u[e]+r[e]*s[e];var f=new Float64Array(i),l=new Float64Array(i);for(f[0]=s[0],l[0]=u[0],e=1;e<n;e++)f[e]=f[i-e]=s[e],l[e]=l[i-e]=u[e];var _=new Float64Array(i),m=new Float64Array(i);for(convolveComplex(o,c,f,l,_,m),e=0;e<n;e++)t[e]=_[e]*s[e]+m[e]*u[e],r[e]=-_[e]*u[e]+m[e]*s[e]}function convolveReal(t,r,e){if(t.length!==r.length||t.length!==e.length)throw"Mismatched lengths";for(var a=new Array(t.length),n=0;n<a.length;n++)a[n]=0;convolveComplex(t,a,r,a.slice(),e,a.slice())}function convolveComplex(t,r,e,a,n,i){!function(){if(t.length!==r.length||t.length!==e.length||e.length!==a.length||t.length!==n.length||n.length!==i.length)throw"Mismatched lengths"}();var s,u=t.length;for(t=t.slice(),r=r.slice(),e=e.slice(),a=a.slice(),transform(t,r),transform(e,a),s=0;s<u;s++){var o=t[s]*e[s]-r[s]*a[s];r[s]=r[s]*e[s]+t[s]*a[s],t[s]=o}for(inverseTransform(t,r),s=0;s<u;s++)n[s]=t[s]/u,i[s]=r[s]/u}var jsXtract=function(){function t(t,r){return t.find(function(t){for(var e in r)if(t[e]!==r[e])return!1;return!0})}function r(){(m=window.Module).xtract_array_sum={},m.xtract_array_sum.fp32=m.cwrap("xtract_array_sum_fp32","number",["array","number"]),m.xtract_array_sum.fp64=m.cwrap("xtract_array_sum_fp64","number",["array","number"]),m.xtract_array_sum.fp32_pinned=m.cwrap("xtract_array_sum_fp32","number",["number","number"]),m.xtract_array_sum.fp64_pinned=m.cwrap("xtract_array_sum_fp64","number",["number","number"]),m.xtract_array_max={},m.xtract_array_max.fp32=m.cwrap("xtract_array_max_fp32","number",["array","number"]),m.xtract_array_max.fp64=m.cwrap("xtract_array_max_fp64","number",["array","number"]),m.xtract_array_max.fp32_pinned=m.cwrap("xtract_array_max_fp32","number",["number","number"]),m.xtract_array_max.fp64_pinned=m.cwrap("xtract_array_max_fp64","number",["number","number"]),m.xtract_array_min={},m.xtract_array_min.fp32=m.cwrap("xtract_array_min_fp32","number",["array","number"]),m.xtract_array_min.fp64=m.cwrap("xtract_array_min_fp64","number",["array","number"]),m.xtract_array_min.fp32_pinned=m.cwrap("xtract_array_min_fp32","number",["number","number"]),m.xtract_array_min.fp64_pinned=m.cwrap("xtract_array_min_fp64","number",["number","number"]),m.xtract_array_scale={},m.xtract_array_scale.fp32=m.cwrap("xtract_array_scale_fp32","number",["number","number"]),m.xtract_array_scale.fp64=m.cwrap("xtract_array_scale_fp64","number",["number","number"]),m.xtract_variance={},m.xtract_variance.fp32=m.cwrap("xtract_variance_fp32","number",["array","number"]),m.xtract_variance.fp64=m.cwrap("xtract_variance_fp64","number",["array","number"]),m.xtract_variance.fp32_pinned=m.cwrap("xtract_variance_fp32","number",["number","number"]),m.xtract_variance.fp64_pinned=m.cwrap("xtract_variance_fp64","number",["number","number"]),m.xtract_average_deviation={},m.xtract_average_deviation.fp32=m.cwrap("xtract_average_deviation_fp32","number",["array","number"]),m.xtract_average_deviation.fp64=m.cwrap("xtract_average_deviation_fp64","number",["array","number"]),m.xtract_average_deviation.fp32_pinned=m.cwrap("xtract_average_deviation_fp32","number",["number","number"]),m.xtract_average_deviation.fp64_pinned=m.cwrap("xtract_average_deviation_fp64","number",["number","number"]),m.xtract_spectral_centroid={},m.xtract_spectral_centroid.fp32=m.cwrap("xtract_spectral_centroid_fp32","number",["array","number"]),m.xtract_spectral_centroid.fp64=m.cwrap("xtract_spectral_centroid_fp64","number",["array","number"]),m.xtract_spectral_centroid.fp32_pinned=m.cwrap("xtract_spectral_centroid_fp32","number",["number","number"]),m.xtract_spectral_centroid.fp64_pinned=m.cwrap("xtract_spectral_centroid_fp64","number",["number","number"]),m.xtract_spectral_variance={},m.xtract_spectral_variance.fp32=m.cwrap("xtract_spectral_variance_fp32","number",["array","number","number"]),m.xtract_spectral_variance.fp64=m.cwrap("xtract_spectral_variance_fp64","number",["array","number","number"]),m.xtract_spectral_variance.fp32_pinned=m.cwrap("xtract_spectral_variance_fp32","number",["number","number","number"]),m.xtract_spectral_variance.fp64_pinned=m.cwrap("xtract_spectral_variance_fp64","number",["number","number","number"]),m.xtract_rms_amplitude={},m.xtract_rms_amplitude.fp32=m.cwrap("xtract_rms_amplitude_fp32","number",["array","number"]),m.xtract_rms_amplitude.fp64=m.cwrap("xtract_rms_amplitude_fp64","number",["array","number"]),m.xtract_rms_amplitude.fp32_pinned=m.cwrap("xtract_rms_amplitude_fp32","number",["number","number"]),m.xtract_rms_amplitude.fp64_pinned=m.cwrap("xtract_rms_amplitude_fp64","number",["number","number"]),m.xtract_autocorrelation={},m.xtract_autocorrelation.fp32=m.cwrap("xtract_autocorrelation_fp32","number",["number","number","number"]),m.xtract_autocorrelation.fp64=m.cwrap("xtract_autocorrelation_fp64","number",["number","number","number"])}function e(t){window.Module={},window.Module.wasmBinary=t,window.Module.postRun=[r];var e=document.createElement("script");e.setAttribute("src","jsXtract-wasm.js"),document.querySelector("head").appendChild(e)}function a(t){if(!xtract_assert_array(t))return 0;if(t.reduce)return t.reduce(function(t,r){return t+r},0);for(var r=0,e=t.length,a=0;a<e;a++)r+=t[a];return r}function n(t){if(!xtract_assert_array(t))return-1/0;if(t.reduce)return t.reduce(function(t,r){return r>t?r:t},t[0]);for(var r=t[0],e=t.length,a=1;a<e;a++)t[a]>r&&(r=t[a]);return r}function i(t){if(!xtract_assert_array(t))return 1/0;if(t.reduce)return t.reduce(function(t,r){return r<t?r:t},t[0]);for(var r=1/0,e=t.length,a=0;a<e;a++)t[a]<r&&(r=t[a]);return r}function s(t,r){if(!xtract_assert_array(t))return 0;if("number"!=typeof r)return 0;var e=0,a=t.length,n=xtract_array_copy(t);for(e=0;e<a;e++)n[e]*=r;return n}function u(t,r){if(!xtract_assert_array(t))return 0;"number"!=typeof r&&(r=xtract_mean(t));var e=0;if(t.reduce)e=t.reduce(function(t,e){return t+=Math.pow(e-r,2)},0);else for(var a=0;a<t.length;a++)e+=Math.pow(t[a]-r,2);return e/=t.length-1}function o(t,r){if(!xtract_assert_array(t))return 0;"number"!=typeof r&&(r=xtract_mean(t));var e=0;if(t.reduce)e=t.reduce(function(t,e){return t+Math.abs(e-r)},0);else for(var a=0;a<t.length;a++)e+=Math.abs(t[a]-r);return e/t.length}function c(t){if(!xtract_assert_array(t))return 0;var r=t.length>>1,e=t.subarray(0,r),n=t.subarray(r),i=a(e);if(0===i)return 0;for(var s=0;r--;)s+=n[r]*(e[r]/i);return s}function f(t,r){if(!xtract_assert_array(t))return 0;"number"!=typeof r&&(r=c(t));for(var e=0,n=t.length,i=n>>1,s=t.subarray(0,i),u=t.subarray(i,n),o=a(s);i--;)e+=Math.pow(u[i]-r,2)*(s[i]/o);return e}function l(t){if(!xtract_assert_array(t))return 0;for(var r=t.length,e=new Float64Array(r);r--;){for(var a=0,n=0;n<t.length-r;n++)a+=t[n]*t[n+r];e[r]=a/t.length}return e}function _(t){if(!xtract_assert_array(t))return 0;var r=0;if(t.reduce)r=t.reduce(function(t,r){return t+r*r},0);else for(var e=0;e<t.length;e++)r+=t[e]*t[e];return Math.sqrt(r/t.length)}var m,h={parent:this,store:[],createCoefficients:function(r){var e=t(this.store,{N:r});return e||(e={N:r,data:xtract_init_dct(r)},this.store.push(e)),e.data}},p={parent:this,store:[],createCoefficients:function(r,e,a,n,i,s){var u={N:r,nyquist:e,style:a,freq_min:n,freq_max:i,freq_bands:s},o=t(this.store,u);return o||((o=u).data=xtract_init_mfcc(r,e,a,n,i,s),this.store.push(o)),o.data}},d={parent:this,store:[],createCoefficients:function(r,e,a){var n={N:r,sampleRate:e,numBands:a},i=t(this.store,n);return i||((i=n).data=xtract_init_bark(r,e,a),this.store.push(i)),i.data}},v={parent:this,store:[],createCoefficients:function(r,e,a,n,i,s){var u={N:r,sampleRate:e,nbins:a,A440:n,f_ctr:i,octwidth:s},o=t(this.store,u);return o||((o=u).data=xtract_init_chroma(r,e,a,n,i,s),this.store.push(o)),o.data}};if(void 0!==window.WebAssembly)if(void 0!==window.fetch)fetch("jsXtract-wasm.wasm").then(function(t){return t.arrayBuffer()}).then(e);else{var y=new XMLHttpRequest;y.open("GET","jsXtract-wasm.wasm"),y.responseType="ArrayBuffer",y.onload=function(t){var r=new Reader;r.onload=e,r.readAsArrayBuffer(t.response)}}var b=function(){function t(t){if("number"!=typeof t||t<=0||t!=Math.floor(t))throw"malloc size must be positive integer";return m?m._malloc(t):0}function r(t){var r;if(void 0===m)return!1;if(t.constructor==Float32Array)r=m.HEAPF32;else{if(t.constructor!=Float64Array)return!1;r=m.HEAPF64}return r.buffer==t.buffer}function e(t){if(t.constructor==Float32Array)m.HEAPF32;else{if(t.constructor!=Float64Array)return!1;m.HEAPF64}return index=a.findIndex(function(r){return r.array===t}),index}var a=[],n=function(t,r,e,a){Object.defineProperties(this,{array:{value:t},length:{value:e},stack:{value:a},ptr:{value:r}})},i={};return Object.defineProperties(i,{allocateFP32Array:{value:function(r){var e;if("number"!=typeof r||r<=0||r!=Math.floor(r))throw"Elemnt count must be positive integer";return e=t(4*r),function(t,r){var e,i=t>>2;return m&&i>0?(e=m.HEAPF32.subarray(i,i+r),a.push(new n(e,t,r,m.HEAPF32))):e=new Float32Array(r),e}(e,r)}},allocateFP64Array:{value:function(r){var e;if("number"!=typeof r||r<=0||r!=Math.floor(r))throw"Elemnt count must be positive integer";return e=t(8*r),function(t,r){var e,i=t>>4;return m&&i>0?(e=m.HEAPF64.subarray(i,i+r),a.push(new n(e,t,r,m.HEAPF64))):e=new Float64Array(r),e}(e,r)}},isPinned:{value:function(t){return r(t)}},getPinnedAddress:{value:function(t){var n;return 0!=r(t)&&("object"==typeof(n=function(t){var r=e(t);return r>=0&&a[r]}(t))&&n.ptr)}},free:{value:function(t){!function(t){var n,i;if(!1!==r(t)&&void 0!==m){if(-1===(n=e(t)))throw"MEMLEAK: Cannot locate memblock to free, but it is pinned.";i=a[n],m._free(i.ptr),a.splice(n,1)}}(t)}},copy:{value:function(t,r){var e;for(e=0;e<t.length;e++)r[e]=t[e];for(e=t.length;e<r.length;e++)r[e]=0}}}),i}(),x={},g={};return Object.defineProperties(x,{createDctCoefficients:{value:function(t){return h.createCoefficients(t)}},createMfccCoefficients:{value:function(t,r,e,a,n,i){return p.createCoefficients(t,r,e,a,n,i)}},createBarkCoefficients:{value:function(t,r,e){return("number"!=typeof e||e<0||e>26)&&(e=26),d.createCoefficients(t,r,e)}},createChromaCoefficients:{value:function(t,r,e,a,n,i){return v.createCoefficients(t,r,e,a,n,i)}},wasm:{get:function(){return m}},functions:{get:function(){return g}},memory:{get:function(){return b}}}),Object.defineProperties(g,{array_sum:{value:function(t){var r,e=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_array_sum.fp32_pinned(r,e)):m.xtract_array_sum.fp32(new Uint8Array(t.buffer),e):t.constructor==Float64Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_array_sum.fp64_pinned(r,e)):m.xtract_array_sum.fp64(new Uint8Array(t.buffer),e):a(t):a(t)}},array_max:{value:function(t){var r,e=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_array_max.fp32_pinned(r,e)):m.xtract_array_max.fp32(new Uint8Array(t.buffer),e):t.constructor==Float64Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_array_max.fp64_pinned(r,e)):m.xtract_array_max.fp64(new Uint8Array(t.buffer),e):n(t):n(t)}},array_min:{value:function(t){var r,e=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_array_min.fp32_pinned(r,e)):m.xtract_array_min.fp32(new Uint8Array(t.buffer),e):t.constructor==Float64Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_array_min.fp64_pinned(r,e)):m.xtract_array_min.fp64(new Uint8Array(t.buffer),e):i(t):i(t)}},array_scale:{value:function(t,r){var e,a=t.length;if(!m)return s(t,r);if(t.constructor==Float32Array){if(b.isPinned(t))return e=b.getPinnedAddress(t),m.xtract_array_scale.fp32(e,r,a);var n=b.allocateFP32Array(t.length);b.copy(t,n),e=b.getPinnedAddress(n);var i=m.xtract_array_scale.fp32(e,r,a);return b.copy(n,t),b.free(n),i}if(t.constructor==Float64Array){if(b.isPinned(t))return e=b.getPinnedAddress(t),m.xtract_array_scale.fp32(e,r,a);n=b.allocateFP64Array(t.length);b.copy(t,n),e=b.getPinnedAddress(n);i=m.xtract_array_scale.fp64(e,r,a);return b.copy(n,t),b.free(n),i}return s(t,r)}},variance:{value:function(t,r){var e,a=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(e=b.getPinnedAddress(t),m.xtract_variance.fp32_pinned(e,a)):m.xtract_variance.fp32(new Uint8Array(t.buffer),a):t.constructor==Float64Array?b.isPinned(t)?(e=b.getPinnedAddress(t),m.xtract_variance.fp64_pinned(e,a)):m.xtract_variance.fp64(new Uint8Array(t.buffer),a):u(t):u(t)}},average_deviation:{value:function(t,r){var e,a=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(e=b.getPinnedAddress(t),m.xtract_average_deviation.fp32_pinned(e,a)):m.xtract_average_deviation.fp32(new Uint8Array(t.buffer),a):t.constructor==Float64Array?b.isPinned(t)?(e=b.getPinnedAddress(t),m.xtract_average_deviation.fp64_pinned(e,a)):m.xtract_average_deviation.fp64(new Uint8Array(t.buffer),a):o(t):o(t)}},spectral_centroid:{value:function(t){var r,e=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_spectral_centroid.fp32_pinned(r,e)):m.xtract_spectral_centroid.fp32(new Uint8Array(t.buffer),e):t.constructor==Float64Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_spectral_centroid.fp64_pinned(r,e)):m.xtract_spectral_centroid.fp64(new Uint8Array(t.buffer),e):c(t):c(t)}},spectral_variance:{value:function(t,r){var e,a=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(e=b.getPinnedAddress(t),m.xtract_spectral_variance.fp32_pinned(e,a)):m.xtract_spectral_variance.fp32(new Uint8Array(t.buffer),r,a):t.constructor==Float64Array?b.isPinned(t)?(e=b.getPinnedAddress(t),m.xtract_spectral_variance.fp64_pinned(e,a)):m.xtract_spectral_variance.fp64(new Uint8Array(t.buffer),r,a):f(t,r):f(t,r)}},rms_amplitude:{value:function(t){var r,e=t.length;return m?t.constructor==Float32Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_rms_amplitude.fp32_pinned(r,e)):m.xtract_rms_amplitude.fp32(new Uint8Array(t.buffer),e):t.constructor==Float64Array?b.isPinned(t)?(r=b.getPinnedAddress(t),m.xtract_rms_amplitude.fp64_pinned(r,e)):m.xtract_rms_amplitude.fp64(new Uint8Array(t.buffer),e):_(t):_(t)}},autocorrelation:{value:function(t){var r,e,a=t.length;if(!m)return l(t);if(t.constructor==Float32Array){if(e=b.allocateFP32Array(t.length),b.isPinned(t))return r=b.getPinnedAddress(t),m.xtract_autocorrelation.fp32(r,b.getPinnedAddress(e),a),e;var n=b.allocateFP32Array(t.length);return b.copy(t,n),r=b.getPinnedAddress(n),m.xtract_autocorrelation.fp32(r,b.getPinnedAddress(e),a),b.free(n),e}if(t.constructor==Float64Array){if(e=b.allocateFP64Array(t.length),b.isPinned(t))return r=b.getPinnedAddress(t),m.xtract_autocorrelation.fp64(r,b.getPinnedAddress(e),a),e;n=b.allocateFP64Array(t.length);return b.copy(t,n),r=b.getPinnedAddress(n),m.xtract_autocorrelation.fp64(r,b.getPinnedAddress(e),a),b.free(n),e}return l(t)}}}),x}(),DataProto=function(t,r){function e(t,r){var a,n={};for(a in t)r[a]&&("number"==typeof t[a]?n[a]=t[a]-r[a]:n[a]=function(t,r,a){{if(t.result&&r.result)return e(t[a].result,r[a].result);if(t.length&&r.length)return function(t,r){var e;e=t.length===r.length?new Float64Array(t.length):[];var a=0;for(;a<t.length&&a<r.length;)e[a]=t[a]-r[a],a++;return e}(t[a],r[a])}return}(t,r,a));return n}var a={},n=new Float64Array(t);this.clearResult=function(){a={}},Object.defineProperties(this,{result:{get:function(){return a},set:function(){}},data:{value:n},getData:{value:function(){return n}}}),this.zeroDataRange=function(t,r){if(n.fill)n.fill(0,t,r);else for(var e=t;e<r;e++)n[e]=0;this.clearResult()},this.copyDataFrom=function(t,r,e){if("object"!=typeof t||void 0===t.length)throw"copyDataFrom requires src to be an Array or TypedArray";void 0===e&&(e=0),void 0===r&&(r=Math.min(t.length,n.length)),r=Math.min(r+e,n.length);for(var a=0;a<r;a++)n[a+e]=t[a];this.clearResult()},this.duplicate=function(){this.prototype.constructor(t,r).copyDataFrom(n)},this.toJSON=function(){function t(t){var r=t[t.length-1];return"{"!==r&&","!==r&&(t+=", "),t}function r(t,r){return"number"==typeof t&&isFinite(t)?'"'+r+'": '+t:"object"==typeof t?t.toJSON?'"'+r+'": '+t.toJSON(t):t.length?'"'+r+'": '+xtract_array_to_JSON(t):'"'+r+'": '+this.toJSON(t):'"'+r+'": "'+t.toString()+'"'}var e="{";for(var n in a)a.hasOwnProperty(n)&&(e=t(e),e+=r(a[n],n));return e+"}"},this.computeDelta=function(t){return this.result.delta=e(this.result,t.result),this.result.delta},this.computeDeltaDelta=function(t){if(!t.result.delta||!this.result.delta)throw"Cannot compute delta-delta without both objects having deltas";return this.result.delta.delta=e(this.result.delta,t.result.delta),this.result.delta.delta}};DataProto.prototype.createDctCoefficients=function(t){return jsXtract.createDctCoefficients(Number(t))},DataProto.prototype.createMfccCoefficients=function(t,r,e,a,n,i){return t=Number(t),r=Number(r),a=Number(a),n=Number(n),i=Number(i),jsXtract.createMfccCoefficients(t,r,e,a,n,i)},DataProto.prototype.createBarkCoefficients=function(t,r,e){return t=Number(t),r=Number(r),e=Number(e),jsXtract.createBarkCoefficients(t,r,e)},DataProto.prototype.createChromaCoefficients=function(t,r,e,a,n,i){return t=Number(t),r=Number(r),e=Number(e),a=Number(a),n=Number(n),i=Number(i),jsXtract.createChromaCoefficients(t,r,e,a,n,i)};var TimeData=function(t,r,e){r<=0&&(r=void 0,console.log("Invalid parameter for 'sampleRate' for TimeData"));var a,n,i,s;if("object"==typeof t){var u;if(t.constructor===TimeData)u=u.getData(),a=u.length,DataProto.call(this,a),t=a,this.copyDataFrom(u,t,0);else{if(t.constructor!==Float32Array&&t.constructor!==Float64Array)throw"TimeData: Invalid object passed as first argument.";t=a=(u=t).length,DataProto.call(this,a),this.copyDataFrom(u,t,0)}}else{if("number"!=typeof t)throw"TimeData: Constructor has invalid operators!";if(t<=0||t!==Math.floor(t))throw"TimeData: Invalid number passed as first argument.";a=t,DataProto.call(this,t,r)}n=r,s=void 0,i=xtract_init_wavelet(),this.zeroData=function(){this.zeroDataRange(0,t)},Object.defineProperties(this,{features:{values:this.constructor.prototype.features},sampleRate:{get:function(){return n},set:function(t){if(void 0!==n)throw"Cannot set one-time variable";n=t}},length:{value:a,writable:!1,enumerable:!0},getFrames:{value:function(t,r){if("number"!=typeof t||t<=0||t!==Math.floor(t))throw"frameSize must be a defined, positive integer";"number"!=typeof r&&(r=t);for(var e=Math.ceil(a/t),i=[],s=0;s<e;s++){var u=new TimeData(r,n);u.copyDataFrom(this.data.subarray(t*s,t*s+r)),i.push(u)}return i}},minimum:{value:function(){return void 0===this.result.minimum&&(this.result.minimum=xtract_array_min(this.data)),this.result.minimum}},maximum:{value:function(){return void 0===this.result.maximum&&(this.result.maximum=xtract_array_max(this.data)),this.result.maximum}},sum:{value:function(){return void 0===this.result.sum&&(this.result.sum=xtract_array_sum(this.data)),this.result.sum}},mean:{value:function(){return void 0===this.result.mean&&(this.result.mean=xtract_mean(this.data)),this.result.mean}},temporal_centroid:{value:function(t){return void 0===this.result.temporal_centroid&&(this.energy(t),this.result.temporal_centroid=xtract_temporal_centroid(this.result.energy.data,n,t)),this.result.temporal_centroid}},variance:{value:function(){return void 0===this.result.variance&&(this.result.variance=xtract_variance(this.data,this.mean())),this.result.variance}},standard_deviation:{value:function(){return void 0===this.result.standard_deviation&&(this.result.standard_deviation=xtract_standard_deviation(this.data,this.variance())),this.result.standard_deviation}},average_deviation:{value:function(){return void 0===this.result.average_deviation&&(this.result.average_deviation=xtract_average_deviation(this.data,this.mean())),this.result.average_deviation}},skewness:{value:function(){return void 0===this.result.skewness&&(this.result.skewness=xtract_skewness(this.data,this.mean(),this.standard_deviation())),this.result.skewness}},kurtosis:{value:function(){return void 0===this.result.kurtosis&&(this.result.kurtosis=xtract_kurtosis(this.data,this.mean(),this.standard_deviation())),this.result.kurtosis}},zcr:{value:function(){return void 0===this.result.zcr&&(this.result.zcr=xtract_zcr(this.data)),this.result.zcr}},crest_factor:{value:function(){return void 0===this.result.crest_factor&&(this.result.crest_factor=xtract_crest(this.data,this.maximum(),this.mean())),this.result.crest_factor}},rms_amplitude:{value:function(){return void 0===this.result.rms_amplitude&&(this.result.rms_amplitude=xtract_rms_amplitude(this.data)),this.result.rms_amplitude}},lowest_value:{value:function(t){return void 0===this.result.lowest_value&&(this.result.lowest_value=xtract_lowest_value(this.data,t)),this.result.lowest_value}},highest_value:{value:function(t){return void 0===this.result.highest_value&&(this.result.highest_value=xtract_highest_value(this.data,t)),this.result.highest_value}},nonzero_count:{value:function(){return void 0===this.result.nonzero_count&&(this.result.nonzero_count=xtract_nonzero_count(this.data)),this.result.nonzero_count}},f0:{value:function(){return void 0===i&&(i=this.init_wavelet()),void 0===this.result.f0&&(this.result.f0=xtract_wavelet_f0(this.data,n,i)),this.result.f0}},energy:{value:function(t){return void 0!==this.result.energy&&this.result.energy.window_ms===t||(this.result.energy={data:xtract_energy(this.data,n,t),window_ms:t}),this.result.energy}},spectrum:{value:function(){if(void 0===this.result.spectrum){var t=xtract_spectrum(this.data,n,!0,!1);return this.result.spectrum=new SpectrumData(t.length/2,n),this.result.spectrum.copyDataFrom(t),this.result.spectrum}}},dct:{value:function(){return void 0===s&&(s=this.createDctCoefficients(a)),void 0===this.result.dct&&(this.result.dct=xtract_dct_2(this.data,s)),this.result.dct}},autocorrelation:{value:function(){return void 0===this.result.autocorrelation&&(this.result.autocorrelation=xtract_autocorrelation(this.data)),this.result.autocorrelation}},amdf:{value:function(){return void 0===this.result.amdf&&(this.result.amdf=xtract_amdf(this.data)),this.result.amdf}},asdf:{value:function(){return void 0===this.result.asdf&&(this.result.asdf=xtract_asdf(this.data)),this.result.asdf}},yin:{value:function(){return void 0===this.result.yin&&(this.result.yin=xtract_yin(this.data)),this.result.yin}},onset:{value:function(t){return void 0!==this.result.onset&&this.result.onset.frameSize===t||(this.result.onset={data:xtract_onset(this.data,t),frameSize:t}),this.result.onset}},resample:{value:function(t){if(void 0===n)throw"Source sampleRate must be defined";if("number"!=typeof t||t<=0)throw"Target sampleRate must be a positive number";var r=xtract_resample(this.data,t,n),e=new TimeData(r.length,t);return e.copyDataFrom(r),this.result.resample=e,e}}})};TimeData.prototype=Object.create(DataProto.prototype),TimeData.prototype.constructor=TimeData;var SpectrumData=function(t,r,e){function a(){for(var r=0;r<t;r++)f[r]=r/t*(_/2)}if(void 0===t||t<=0)throw"SpectrumData constructor requires N to be a defined, whole number";void 0===r&&(r=Math.PI),DataProto.call(this,2*t,r);var n,i,s,u,o,c=this.data.subarray(0,t),f=this.data.subarray(t,2*t),l=t,_=r;a(),this.zeroData=function(){this.zeroDataRange(0,t)},Object.defineProperties(this,{features:{get:function(){return this.constructor.prototype.features},set:function(){}},sampleRate:{get:function(){return _},set:function(r){if(_!==Math.PI)throw"Cannot set one-time variable";_=r,a(),s=xtract_init_bark(t,_)}},f0:{get:function(){return n},set:function(t){return"number"==typeof t&&(n=t),n}},init_mfcc:{value:function(t,r,e,a){return i=this.createMfccCoefficients(l,.5*_,a,r,e,t),this.result.mfcc=void 0,i}},init_bark:{value:function(t){return("number"!=typeof t||t<0||t>26)&&(t=26),s=this.createBarkCoefficients(l,_,t)}},init_chroma:{value:function(t,r,e,a){return("number"!=typeof t||t<=1)&&(t=12),("number"!=typeof r||r<=27.5)&&(r=440),"number"!=typeof e&&(e=1e3),"number"!=typeof a&&(a=1),o=this.createChromaCoefficients(l,_,t,r,e,a),this.result.chroma=void 0,o}},length:{value:l,writable:!1,enumerable:!0},minimum:{value:function(){return void 0===this.result.minimum&&(this.result.minimum=xtract_array_min(c)),this.result.minimum}},maximum:{value:function(){return void 0===this.result.maximum&&(this.result.maximum=xtract_array_max(c)),this.result.maximum}},sum:{value:function(){return void 0===this.result.sum&&(this.result.sum=xtract_array_sum(c)),this.result.sum}},spectral_centroid:{value:function(){return void 0===this.result.spectral_centroid&&(this.result.spectral_centroid=xtract_spectral_centroid(this.data)),this.result.spectral_centroid}},spectral_mean:{value:function(){return void 0===this.result.spectral_mean&&(this.result.spectral_mean=xtract_spectral_mean(this.data)),this.result.spectral_mean}},spectral_variance:{value:function(){return void 0===this.result.spectral_variance&&(this.result.spectral_variance=xtract_spectral_variance(this.data,this.spectral_centroid())),this.result.spectral_variance}},spectral_spread:{value:function(){return void 0===this.result.spectral_spread&&(this.result.spectral_spread=xtract_spectral_spread(this.data,this.spectral_centroid())),this.result.spectral_spread}},spectral_standard_deviation:{value:function(){return void 0===this.result.spectral_standard_deviation&&(this.result.spectral_standard_deviation=xtract_spectral_standard_deviation(this.data,this.spectral_variance())),this.result.spectral_standard_deviation}},spectral_skewness:{value:function(){return void 0===this.result.spectral_skewness&&(this.result.spectral_skewness=xtract_spectral_skewness(this.data,this.spectral_centroid(),this.spectral_standard_deviation())),this.result.spectral_skewness}},spectral_kurtosis:{value:function(){return void 0===this.result.spectral_kurtosis&&(this.result.spectral_kurtosis=xtract_spectral_kurtosis(this.data,this.spectral_centroid(),this.spectral_standard_deviation())),this.result.spectral_kurtosis}},irregularity_k:{value:function(){return void 0===this.result.irregularity_k&&(this.result.irregularity_k=xtract_irregularity_k(this.data)),this.result.irregularity_k}},irregularity_j:{value:function(){return void 0===this.result.irregularity_j&&(this.result.irregularity_j=xtract_irregularity_j(this.data)),this.result.irregularity_j}},tristimulus_1:{value:function(){return void 0===n&&this.spectral_fundamental(),void 0===this.result.tristimulus_1&&(this.result.tristimulus_1=xtract_tristimulus_1(this.data,n)),this.result.tristimulus_1}},tristimulus_2:{value:function(){return void 0===n&&this.spectral_fundamental(),void 0===this.result.tristimulus_2&&(this.result.tristimulus_2=xtract_tristimulus_2(this.data,n)),this.result.tristimulus_2}},tristimulus_3:{value:function(){return void 0===n&&this.spectral_fundamental(),void 0===this.result.tristimulus_3&&(this.result.tristimulus_3=xtract_tristimulus_3(this.data,n)),this.result.tristimulus_3}},smoothness:{value:function(){return void 0===this.result.smoothness&&(this.result.smoothness=xtract_smoothness(this.data)),this.result.smoothness}},rolloff:{value:function(t){return void 0===this.result.rolloff&&(this.result.rolloff=xtract_rolloff(this.data,_,t)),this.result.rolloff}},loudness:{value:function(){return void 0===this.result.loudness&&(this.result.loudness=xtract_loudness(this.bark_coefficients())),this.result.loudness}},sharpness:{value:function(){return void 0===this.result.sharpness&&(this.result.sharpness=xtract_sharpness(this.bark_coefficients())),this.result.sharpness}},flatness:{value:function(){return void 0===this.result.flatness&&(this.result.flatness=xtract_flatness(this.data)),this.result.flatness}},flatness_db:{value:function(){return void 0===this.result.flatness_db&&(this.result.flatness_db=xtract_flatness_db(this.data,this.flatness())),this.result.flatness_db}},tonality:{value:function(){return void 0===this.result.tonality&&(this.result.tonality=xtract_tonality(this.data,this.flatness_db())),this.result.tonality}},spectral_crest_factor:{value:function(){return void 0===this.result.spectral_crest_factor&&(this.result.spectral_crest_factor=xtract_crest(c,this.maximum(),this.spectral_mean())),this.result.spectral_crest_factor}},spectral_slope:{value:function(){return void 0===this.result.spectral_slope&&(this.result.spectral_slope=xtract_spectral_slope(this.data)),this.result.spectral_slope}},spectral_fundamental:{value:function(){return void 0===this.result.spectral_fundamental&&(this.result.spectral_fundamental=xtract_spectral_fundamental(this.data,_),this.f0=this.result.spectral_fundamental),this.result.spectral_fundamental}},nonzero_count:{value:function(){return void 0===this.result.nonzero_count&&(this.result.nonzero_count=xtract_nonzero_count(c)),this.result.nonzero_count}},hps:{value:function(){return void 0===this.result.hps&&(this.result.hps=xtract_hps(this.data)),this.result.hps}},mfcc:{value:function(t,r,e){if(void 0===i){if(void 0===r)throw"Run init_mfcc(num_bands, freq_min, freq_max, style) first";i=this.init_mfcc(t,r,e)}return void 0===this.result.mfcc&&(this.result.mfcc=xtract_mfcc(this.data,i)),this.result.mfcc}},dct:{value:function(){return void 0===u&&(u=this.createDctCoefficients(l)),void 0===this.result.dct&&(this.result.dct=xtract_dct_2(c,u)),this.result.dct}},bark_coefficients:{value:function(t){return void 0===this.result.bark_coefficients&&(void 0===s&&(s=this.init_bark(t)),this.result.bark_coefficients=xtract_bark_coefficients(this.data,s)),this.result.bark_coefficients}},chroma:{value:function(t,r,e,a){return void 0===this.result.chroma&&(void 0===o&&(o=this.init_chroma(t,r,e,a)),this.result.chroma=xtract_chroma(this.data,o)),this.result.chroma}},peak_spectrum:{value:function(t){if(void 0===this.result.peak_spectrum){this.result.peak_spectrum=new PeakSpectrumData(l,_,this);var r=xtract_peak_spectrum(this.data,_/l,t);this.result.peak_spectrum.copyDataFrom(r.subarray(0,l))}return this.result.peak_spectrum}}})};SpectrumData.prototype=Object.create(DataProto.prototype),SpectrumData.prototype.constructor=SpectrumData;var PeakSpectrumData=function(t,r,e){if(void 0===t||t<=0)throw"SpectrumData constructor requires N to be a defined, whole number";void 0===r&&(r=Math.PI),SpectrumData.call(this,t),Object.defineProperties(this,{spectral_inharmonicity:{value:function(){return void 0===this.result.spectral_inharmonicity&&(this.result.spectral_inharmonicity=xtract_spectral_inharmonicity(this.data,this.sampleRate)),this.result.spectral_inharmonicity}},harmonic_spectrum:{value:function(t){if(void 0===this.result.harmonic_spectrum){void 0===this.f0&&this.spectral_fundamental(this.data,this.sampleRate),this.result.harmonic_spectrum=new HarmonicSpectrumData(this.length,this.sampleRate,this);var r=xtract_harmonic_spectrum(this.data,this.f0,t);this.result.harmonic_spectrum.copyDataFrom(r.subarray(0,this.length))}return this.result.harmonic_spectrum}}})};PeakSpectrumData.prototype=Object.create(SpectrumData.prototype),PeakSpectrumData.prototype.constructor=PeakSpectrumData;var HarmonicSpectrumData=function(t,r,e){void 0===t||t<=0?console.error("SpectrumData constructor requires N to be a defined, whole number"):(void 0===r&&(r=Math.PI),PeakSpectrumData.call(this,t),Object.defineProperties(this,{odd_even_ratio:{value:function(){return void 0===this.result.odd_even_ratio&&(void 0===this.f0&&this.spectral_fundamental(this.data,this.sampleRate),this.result.odd_even_ratio=xtract_odd_even_ratio(this.data,this.f0)),this.result.odd_even_ratio}},noisiness:{value:function(){return e.constructor!==PeakSpectrumData?this.result.noisiness=null:this.result.noisiness=xtract_noisiness(this.nonzero_count(),e.nonzero_count()),this.result.noisiness}}}))};HarmonicSpectrumData.prototype=Object.create(PeakSpectrumData.prototype),HarmonicSpectrumData.prototype.constructor=HarmonicSpectrumData,TimeData.prototype.features=[{name:"Minimum",function:"minimum",sub_features:[],parameters:[],returns:"number"},{name:"Maximum",function:"maximum",sub_features:[],parameters:[],returns:"number"},{name:"Sum",function:"sum",sub_features:[],parameters:[],returns:"number"},{name:"Mean",function:"mean",sub_features:[],parameters:[],returns:"number"},{name:"Temporal Centroid",function:"temporal_centroid",sub_features:["energy"],parameters:[{name:"Window Time",unit:"ms",type:"number",minimum:1,maximum:void 0,default:100}],returns:"number"},{name:"Variance",function:"variance",sub_features:["mean"],parameters:[],returns:"number"},{name:"Standard Deviation",function:"standard_deviation",sub_features:["variance"],parameters:[],returns:"number"},{name:"Average Deviation",function:"average_deviation",sub_features:["mean"],parameters:[],returns:"number"},{name:"Skewness",function:"skewness",sub_features:["mean","standard_deviation"],parameters:[],returns:"number"},{name:"Kurtosis",function:"kurtosis",sub_features:["mean","standard_deviation"],parameters:[],returns:"number"},{name:"Zero Crossing Rate",function:"zcr",sub_features:[],parameters:[],returns:"number"},{name:"Crest Factor",function:"crest_factor",sub_features:["maximum","mean"],parameters:[],returns:"number"},{name:"RMS Amplitude",function:"rms_amplitude",sub_features:[],parameters:[],returns:"number"},{name:"Lowest Value",function:"lowest_value",sub_features:[],parameters:[{name:"Threshold",unit:"",type:"number",minimum:void 0,maximum:void 0,default:void 0}],returns:"number"},{name:"Highest Value",function:"highest_value",sub_features:[],parameters:[{name:"Threshold",unit:"",type:"number",minimum:void 0,maximum:void 0,default:void 0}],returns:"number"},{name:"Non-Zero Count",function:"nonzero_count",sub_features:[],parameters:[],returns:"number"},{name:"Fundamental Frequency",function:"f0",sub_features:[],parameters:[],returns:"number"},{name:"Energy",function:"energy",sub_features:[],parameters:[{name:"Window",unit:"ms",type:"number",minimum:1,maximum:void 0,default:100}],returns:"object"},{name:"Spectrum",function:"spectrum",sub_features:[],parameters:[],returns:"SpectrumData"},{name:"DCT",function:"dct",sub_features:[],parameters:[],returns:"array"},{name:"Autocorrelation",function:"autocorrelation",sub_features:[],parameters:[],returns:"array"},{name:"AMDF",function:"amdf",sub_features:[],parameters:[],returns:"array"},{name:"ASDF",function:"asdf",sub_features:[],parameters:[],returns:"array"},{name:"YIN Pitch",function:"yin",sub_features:[],parameters:[],returns:"array"},{name:"Onset Detection",function:"onset",sub_features:[],parameters:[{name:"Frame Size",unit:"samples",type:"number",minimum:1,maximum:void 0,default:1024}],returns:"array"},{name:"Resample",function:"resample",sub_features:[],parameters:[{name:"Target Sample Rate",unit:"Hz",type:"number",minimum:0,maximum:void 0,default:8e3}],returns:"TimeData"}],SpectrumData.prototype.features=[{name:"Minimum",function:"minimum",sub_features:[],parameters:[],returns:"number"},{name:"Maximum",function:"maximum",sub_features:[],parameters:[],returns:"number"},{name:"Sum",function:"sum",sub_features:[],parameters:[],returns:"number"},{name:"Spectral Centroid",function:"spectral_centroid",sub_features:[],parameters:[],returns:"number"},{name:"Spectral Mean",function:"spectral_mean",sub_features:[],parameters:[],returns:"number"},{name:"Spectral Variance",function:"spectral_variance",sub_features:["spectral_mean"],parameters:[],returns:"number"},{name:"Spectral Spread",function:"spectral_spread",sub_features:["spectral_centroid"],parameters:[],returns:"number"},{name:"Spectral Standard Deviation",function:"spectral_standard_deviation",sub_features:["spectral_variance"],parameters:[],returns:"number"},{name:"Spectral Skewness",function:"spectral_skewness",sub_features:["spectral_mean","spectral_standard_deviation"],parameters:[],returns:"number"},{name:"Spectral Kurtosis",function:"spectral_kurtosis",sub_features:["spectral_mean","spectral_standard_deviation"],parameters:[],returns:"number"},{name:"Irregularity K",function:"irregularity_k",sub_features:[],parameters:[],returns:"number"},{name:"Irregularity J",function:"irregularity_j",sub_features:[],parameters:[],returns:"number"},{name:"Tristimulus 1",function:"tristimulus_1",sub_features:["spectral_fundamental"],parameters:[],returns:"number"},{name:"Tristimulus 2",function:"tristimulus_2",sub_features:["spectral_fundamental"],parameters:[],returns:"number"},{name:"Tristimulus 3",function:"tristimulus_3",sub_features:["spectral_fundamental"],parameters:[],returns:"number"},{name:"Smoothness",function:"smoothness",sub_features:[],parameters:[],returns:"number"},{name:"Rolloff",function:"rolloff",sub_features:[],parameters:[{name:"Threshold",unit:"%",type:"number",minimum:0,maximum:100,default:90}],returns:"number"},{name:"Loudness",function:"loudness",sub_features:["bark_coefficients"],parameters:[],returns:"number"},{name:"Sharpness",function:"sharpness",sub_features:["bark_coefficients"],parameters:[],returns:"number"},{name:"Flatness",function:"flatness",sub_features:[],parameters:[],returns:"number"},{name:"Flatness DB",function:"flatness_db",sub_features:["flatness"],parameters:[],returns:"number"},{name:"Tonality",function:"tonality",sub_features:["flatness_db"],parameters:[],returns:"number"},{name:"Spectral Crest Factor",function:"spectral_crest_factor",sub_features:["maximum","spectral_mean"],parameters:[],returns:"number"},{name:"Spectral Slope",function:"spectral_slope",sub_features:[],parameters:[],returns:"number"},{name:"Fundamental Frequency",function:"spectral_fundamental",sub_features:[],parameters:[],returns:"number"},{name:"Non-Zero count",function:"nonzero_count",sub_features:[],parameters:[],returns:"number"},{name:"HPS",function:"hps",sub_features:[],parameters:[],returns:"number"},{name:"MFCC",function:"mfcc",sub_features:[],parameters:[{name:"Band Count",unit:"",type:"number",minimum:0,maximum:void 0,default:26},{name:"Minimum Frequency",unit:"Hz",type:"number",minimum:0,maximum:void 0,default:400},{name:"Maximum Frequency",unit:"Hz",minimum:0,maximum:void 0,default:2e4}],returns:"array"},{name:"Chroma",function:"chroma",sub_features:[],parameters:[{name:"nbins",unit:"",type:"number",minimum:2,maximum:void 0,default:12},{name:"A440",unit:"",type:"number",minimum:220,maximum:880,default:440},{name:"f_ctr",unit:"",type:"number",minimum:void 0,maximum:void 0,default:1e3},{name:"octwidth",unit:"",type:"number",minimum:void 0,maximum:void 0,default:1}],returns:"array"},{name:"DCT",function:"dct",sub_features:[],parameters:[],returns:"array"},{name:"Bark Coefficients",function:"bark_coefficients",sub_features:[],parameters:[{name:"Band Count",unit:"",type:"number",minimum:0,maximum:26,default:26}],returns:"array"},{name:"Peak Spectrum",function:"peak_spectrum",sub_features:[],parameters:[{name:"Threshold",unit:"",type:"number",minimum:0,maximum:100,default:30}],returns:"PeakSpectrumData"}],PeakSpectrumData.prototype.features=SpectrumData.prototype.features.concat([{name:"Spectral Inharmonicity",function:"spectral_inharmonicity",sub_features:["f0"],parameters:[],returns:"number"},{name:"Harmonic Spectrum",function:"harmonic_spectrum",sub_features:[],parameters:[{name:"Threshold",unit:"",type:"number",minimum:0,maximum:100,default:30}],returns:"HarmonicSpectrumData"}]),HarmonicSpectrumData.prototype.features=PeakSpectrumData.prototype.features.concat([{name:"Odd Even Ration",function:"odd_even_ratio",sub_features:[],parameters:[],returns:"number"}]),"undefined"!=typeof AnalyserNode&&(AnalyserNode.prototype.timeData=void 0,AnalyserNode.prototype.spectrumData=void 0,AnalyserNode.prototype.callbackObject=void 0,AnalyserNode.prototype.fooGain=void 0,AnalyserNode.prototype.getXtractData=function(){void 0!==this.timeData&&void 0!==this.scpectrumData||(this.timeData=new TimeData(this.fftSize,this.context.sampleRate),this.spectrumData=new SpectrumData(this.frequencyBinCount,this.context.sampleRate));var t,r=new Float32Array(this.fftSize);if(this.getFloatTimeDomainData)this.getFloatTimeDomainData(r);else{var e=new Uint8Array(this.fftSize);for(this.getByteTimeDomainData(e),t=0;t<this.fftSize;t++)r[t]=e[t],r[t]=r[t]/127.5-1}this.timeData.copyDataFrom(r),this.timeData.result.spectrum=this.spectrumData;var a=new Float32Array(this.frequencyBinCount);for(this.getFloatFrequencyData(a),t=0;t<this.frequencyBinCount;t++)a[t]=Math.pow(10,a[t]/20);return this.spectrumData.copyDataFrom(a),this.timeData},AnalyserNode.prototype.previousFrame=void 0,AnalyserNode.prototype.previousResult=void 0,AnalyserNode.prototype.frameCallback=function(t,r){void 0===this.callbackObject&&(this.callbackObject=this.context.createScriptProcessor(this.fftSize,1,1),this.connect(this.callbackObject));var e=t,a=r,n=this;this.callbackObject.onaudioprocess=function(t){var r=n.getXtractData();this.previousResult=e.call(a,r,this.previousFrame,this.previousResult),this.previousFrame=r;var i=t.outputBuffer.length,s=new Float32Array(i),u=this.previousResult;"number"!=typeof this.previousResult&&(u=0);for(var o=0;o<i;o++)s[o]=u;t.outputBuffer.copyToChannel(s,0,0)},this.fooGain||(this.fooGain=this.context.createGain(),this.fooGain.gain.value=0,this.callbackObject.connect(this.fooGain),this.fooGain.connect(this.context.destination))},AnalyserNode.prototype.clearCallback=function(){this.disconnect(this.callbackObject),this.callbackObject.onaudioprocess=void 0},AnalyserNode.prototype.xtractFrame=function(t,r){t.call(r,this.getXtractData())}),"undefined"!=typeof AudioBuffer&&(AudioBuffer.prototype.xtract_get_data_frames=function(t,r){void 0===r&&(r=t),function(){if(!xtract_assert_positive_integer(t))throw"xtract_get_data_frames requires the frame_size to be defined, positive integer";if(!xtract_assert_positive_integer(r))throw"xtract_get_data_frames requires the hop_size to be a positive integer"}(),this.frames=[];this.length;for(var e=this.xtract_get_number_of_frames(r),a=0;a<this.numberOfChannels;a++){var n=this.getChannelData(a);this.frames[a]=[];for(var i=0;i<e;i++){var s=new TimeData(t,this.sampleRate);s.copyDataFrom(n.subarray(r*i,r*i+t)),this.frames[a].push(s),s=void 0}n=void 0}return this.frames},AudioBuffer.prototype.xtract_get_number_of_frames=function(t){return xtract_get_number_of_frames(this,t)},AudioBuffer.prototype.xtract_get_frame=function(t,r,e,a){if(function(){if("object"!=typeof t||t.constructor!==Float32Array)throw"dst must be a Float32Array object equal in length to hop_size";if(!xtract_assert_positive_integer(r))throw"xtract_get_frame requires the channel to be an integer value";if(!xtract_assert_positive_integer(e))throw"xtract_get_frame requires the index to be an integer value";if(!xtract_assert_positive_integer(a))throw"xtract_get_frame requires the frame_size to be defined, positive integer"}(),r<0||r>this.numberOfChannels)throw"channel number "+r+" out of bounds";var n=this.xtract_get_number_of_frames(a);if(e<0||e>=n)throw"index number "+e+" out of bounds";return this.copyFromChannel(t,r,a*e)},AudioBuffer.prototype.xtract_process_frame_data=function(){throw"AudioBuffer::xtract_process_frame_data has been deprecated"});
