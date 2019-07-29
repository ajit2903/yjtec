"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _path = require("path");

var _fs = require("fs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const debug = require("debug")("umi-plugin-pro-block");
/*
export interface ProBlockOption {
  moveMock?: boolean;
  moveService?: boolean;
  modifyRequest?: boolean;
  autoAddMenu?: boolean;
}
*/


function _default(api, opts) {
  const paths = api.paths,
        config = api.config;
  debug("options", opts);
  let hasUtil, hasService, newFileName;
  api.beforeBlockWriting(({
    sourcePath,
    blockPath
  }) => {
    const utilsPath = (0, _path.join)(paths.absSrcPath, `utils`);
    hasUtil = (0, _fs.existsSync)((0, _path.join)(utilsPath, "request.js")) || (0, _fs.existsSync)((0, _path.join)(utilsPath, "request.ts"));
    hasService = (0, _fs.existsSync)((0, _path.join)(sourcePath, "./src/service.js"));
    newFileName = blockPath.replace(/^\//, "").replace(/\//g, "");
    debug("beforeBlockWriting... hasUtil:", hasUtil, "hasService:", hasService, "newFileName:", newFileName);
  });

  api._modifyBlockTarget((target, {
    sourceName
  }) => {
    //console.log(target,sourceName,newFileName);
    ///Volumes/work/yj/yjtec/ant-design-yjtec/src/pages/User/d/service.js service.js
    if (sourceName === "_mock.js" && opts.moveMock !== false) {
      // src/pages/test/t/_mock.js -> mock/test-t.js
      return (0, _path.join)(paths.cwd, "mock", `${newFileName}.js`);
    }

    if (sourceName === "service.js" && hasService && opts.moveService !== false) {
      // src/pages/test/t/service.js -> services/test.t.js
      return (0, _path.join)(paths.absSrcPath, config.singular ? "service" : "services", `${newFileName}.js`);
    }

    return target;
  }); // umi-request -> @utils/request
  // src/pages/test/t/service.js -> services/test.t.js


  api._modifyBlockFile(content => {
    if (hasUtil && opts.modifyRequest !== false) {
      content = content.replace(/[\'\"]umi\-request[\'\"]/g, `'@/util${config.singular ? "" : "s"}/request'`);
    }

    if (hasService && opts.moveService !== false) {
      content = content.replace(/[\'\"][\.\/]+service[\'\"]/g, `'@/service${config.singular ? "" : "s"}/${newFileName}'`);
    } //替换components
    //import Login from 'ant-design-yjtec/lib/Login';


    content = content.replace(/[\'\"']+ant-design-yjtec\/lib/g, `'@/components`);
    return content;
  });

  api._modifyBlockNewRouteConfig(memo => {
    if (opts.autoAddMenu === false) {
      return memo;
    }

    return _objectSpread({
      name: memo.path.split("/").pop()
    }, memo);
  });
}