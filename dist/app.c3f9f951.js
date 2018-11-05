// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/view/removeChildren.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeChildren;

function removeChildren(element) {
  while (element.hasChildNodes()) {
    element.removeChild(element.firstChild);
  }
}
},{}],"js/model/data.js":[function(require,module,exports) {
var coins = [{
  "name": "Bitcoin",
  "short": "BTC"
}, {
  "name": "Litecoin",
  "short": "LTC"
}, {
  "name": "Ethereum",
  "short": "ETH"
}, {
  "name": "IOTA",
  "short": "IOT"
}];
var exchanges = [{
  "name": "Exchange 1",
  "coin": "Bitcoin",
  "price": "10,889.00"
}, {
  "name": "Exchange 1",
  "coin": "IOTA",
  "price": "80.00"
}, {
  "name": "Exchange 2",
  "coin": "Bitcoin",
  "price": "5,655.00"
}, {
  "name": "Exchange 2",
  "coin": "IOTA",
  "price": "80.00"
}, {
  "name": "Exchange 3",
  "coin": "Bitcoin",
  "price": "9,000.00"
}];
module.exports.coins = coins;
module.exports.exchanges = exchanges;
},{}],"js/view/exchangesComp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderExhanges;

var _removeChildren = _interopRequireDefault(require("./removeChildren"));

var _data = require("../model/data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderExhanges(coinName) {
  var bottomDiv = document.getElementById("section-bottom");

  var filteredExchanges = _data.exchanges.filter(function (exchange) {
    return exchange.coin.toLowerCase() === coinName.toLowerCase();
  });

  (0, _removeChildren.default)(bottomDiv);

  if (filteredExchanges.length > 0) {
    filteredExchanges.map(function (exchange) {
      var newDiv = document.createElement("div");
      newDiv.classList.add("all-border");
      newDiv.classList.add("child-container");
      var newH1 = document.createElement("h1");
      var newContentH1 = document.createTextNode(exchange.name);
      newH1.appendChild(newContentH1);
      var newP = document.createElement("p");
      var newContentP = document.createTextNode(exchange.price);
      newP.appendChild(newContentP);
      newDiv.appendChild(newH1);
      newDiv.appendChild(newP);
      bottomDiv.appendChild(newDiv);
    });
  }
}
},{"./removeChildren":"js/view/removeChildren.js","../model/data":"js/model/data.js"}],"js/view/fillSearchInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fillSearchInput;

var _removeChildren = _interopRequireDefault(require("./removeChildren"));

var _exchangesComp = _interopRequireDefault(require("./exchangesComp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fillSearchInput(event) {
  var clickedCoin = event.target.innerText;
  var coinName = clickedCoin.split('-')[0].trim();
  var searchInputHTML = document.getElementById("search-input");
  var dropDownDiv = document.getElementById("myDropdown");
  searchInputHTML.value = coinName;
  (0, _removeChildren.default)(dropDownDiv);
  dropDownDiv.classList.add("dropdown-content-hide");
  (0, _exchangesComp.default)(coinName);
}
},{"./removeChildren":"js/view/removeChildren.js","./exchangesComp":"js/view/exchangesComp.js"}],"js/view/dropDownComp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderDropDownComp;

var _removeChildren = _interopRequireDefault(require("./removeChildren"));

var _fillSearchInput = _interopRequireDefault(require("./fillSearchInput"));

var _data = require("../model/data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderDropDownComp(event) {
  var inputValue = event.target.value;
  var filteredCoins = [];
  var inputIsempty = inputValue === "";
  var dropDownDiv = document.getElementById("myDropdown");
  filteredCoins = _data.coins.filter(function (coin) {
    return coin.name.toLowerCase().includes(inputValue.toLowerCase()) || coin.short.toLowerCase().includes(inputValue.toLowerCase());
  });

  if (filteredCoins.length > 0 && !inputIsempty) {
    (0, _removeChildren.default)(dropDownDiv);
    filteredCoins.map(function (coin) {
      var newAnchor = document.createElement('a');
      var newContent = document.createTextNode("".concat(coin.name, " - ").concat(coin.short));
      newAnchor.appendChild(newContent);
      newAnchor.onclick = _fillSearchInput.default;
      dropDownDiv.appendChild(newAnchor);
    });
    dropDownDiv.classList.remove("dropdown-content-hide");
  } else {
    (0, _removeChildren.default)(dropDownDiv);
    dropDownDiv.classList.add("dropdown-content-hide");
  }
}
},{"./removeChildren":"js/view/removeChildren.js","./fillSearchInput":"js/view/fillSearchInput.js","../model/data":"js/model/data.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _dropDownComp = _interopRequireDefault(require("./view/dropDownComp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Event Listeners */
document.addEventListener('DOMContentLoaded', function () {
  var inputCoin = document.getElementById("search-input");
  inputCoin.oninput = _dropDownComp.default;
}, false);
},{"./view/dropDownComp":"js/view/dropDownComp.js"}],"C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51116" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/user/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.map