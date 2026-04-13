
import {Buffer} from "node:buffer";
globalThis.Buffer = Buffer;

import {AsyncLocalStorage} from "node:async_hooks";
globalThis.AsyncLocalStorage = AsyncLocalStorage;


const defaultDefineProperty = Object.defineProperty;
Object.defineProperty = function(o, p, a) {
  if(p=== '__import_unsupported' && Boolean(globalThis.__import_unsupported)) {
    return;
  }
  return defaultDefineProperty(o, p, a);
};

  
  
  globalThis.openNextDebug = false;globalThis.openNextVersion = "3.10.1";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/error.js
function isOpenNextError(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return false;
  }
}
var init_error = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/error.js"() {
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/adapters/logger.js
function debug(...args) {
  if (globalThis.openNextDebug) {
    console.log(...args);
  }
}
function warn(...args) {
  console.warn(...args);
}
function error(...args) {
  if (args.some((arg) => isDownplayedErrorLog(arg))) {
    return debug(...args);
  }
  if (args.some((arg) => isOpenNextError(arg))) {
    const error2 = args.find((arg) => isOpenNextError(arg));
    if (error2.logLevel < getOpenNextErrorLogLevel()) {
      return;
    }
    if (error2.logLevel === 0) {
      return console.log(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    if (error2.logLevel === 1) {
      return warn(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    return console.error(...args);
  }
  console.error(...args);
}
function getOpenNextErrorLogLevel() {
  const strLevel = process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1";
  switch (strLevel.toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
var DOWNPLAYED_ERROR_LOGS, isDownplayedErrorLog;
var init_logger = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/adapters/logger.js"() {
    init_error();
    DOWNPLAYED_ERROR_LOGS = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey"
      }
    ];
    isDownplayedErrorLog = (errorLog) => DOWNPLAYED_ERROR_LOGS.some((downplayedInput) => downplayedInput.clientName === errorLog?.clientName && downplayedInput.commandName === errorLog?.commandName && (downplayedInput.errorName === errorLog?.error?.name || downplayedInput.errorName === errorLog?.error?.Code));
  }
});

// node_modules/.pnpm/cookie@1.1.1/node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/cookie@1.1.1/node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = parseCookie;
    exports.parse = parseCookie;
    exports.stringifyCookie = stringifyCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    exports.parseSetCookie = parseSetCookie;
    exports.stringifySetCookie = stringifySetCookie;
    exports.serialize = stringifySetCookie;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var maxAgeRegExp = /^-?\d+$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parseCookie(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = eqIndex(str, index, len);
        if (eqIdx === -1)
          break;
        const endIdx = endIndex(str, index, len);
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const key = valueSlice(str, index, eqIdx);
        if (obj[key] === void 0) {
          obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function stringifyCookie(cookie, options) {
      const enc = options?.encode || encodeURIComponent;
      const cookieStrings = [];
      for (const name of Object.keys(cookie)) {
        const val = cookie[name];
        if (val === void 0)
          continue;
        if (!cookieNameRegExp.test(name)) {
          throw new TypeError(`cookie name is invalid: ${name}`);
        }
        const value = enc(val);
        if (!cookieValueRegExp.test(value)) {
          throw new TypeError(`cookie val is invalid: ${val}`);
        }
        cookieStrings.push(`${name}=${value}`);
      }
      return cookieStrings.join("; ");
    }
    function stringifySetCookie(_name, _val, _opts) {
      const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
      const options = typeof _val === "object" ? _val : _opts;
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(cookie.name)) {
        throw new TypeError(`argument name is invalid: ${cookie.name}`);
      }
      const value = cookie.value ? enc(cookie.value) : "";
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${cookie.value}`);
      }
      let str = cookie.name + "=" + value;
      if (cookie.maxAge !== void 0) {
        if (!Number.isInteger(cookie.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
        }
        str += "; Max-Age=" + cookie.maxAge;
      }
      if (cookie.domain) {
        if (!domainValueRegExp.test(cookie.domain)) {
          throw new TypeError(`option domain is invalid: ${cookie.domain}`);
        }
        str += "; Domain=" + cookie.domain;
      }
      if (cookie.path) {
        if (!pathValueRegExp.test(cookie.path)) {
          throw new TypeError(`option path is invalid: ${cookie.path}`);
        }
        str += "; Path=" + cookie.path;
      }
      if (cookie.expires) {
        if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${cookie.expires}`);
        }
        str += "; Expires=" + cookie.expires.toUTCString();
      }
      if (cookie.httpOnly) {
        str += "; HttpOnly";
      }
      if (cookie.secure) {
        str += "; Secure";
      }
      if (cookie.partitioned) {
        str += "; Partitioned";
      }
      if (cookie.priority) {
        const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${cookie.priority}`);
        }
      }
      if (cookie.sameSite) {
        const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
        }
      }
      return str;
    }
    function parseSetCookie(str, options) {
      const dec = options?.decode || decode;
      const len = str.length;
      const endIdx = endIndex(str, 0, len);
      const eqIdx = eqIndex(str, 0, endIdx);
      const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
        name: valueSlice(str, 0, eqIdx),
        value: dec(valueSlice(str, eqIdx + 1, endIdx))
      };
      let index = endIdx + 1;
      while (index < len) {
        const endIdx2 = endIndex(str, index, len);
        const eqIdx2 = eqIndex(str, index, endIdx2);
        const attr = eqIdx2 === -1 ? valueSlice(str, index, endIdx2) : valueSlice(str, index, eqIdx2);
        const val = eqIdx2 === -1 ? void 0 : valueSlice(str, eqIdx2 + 1, endIdx2);
        switch (attr.toLowerCase()) {
          case "httponly":
            setCookie.httpOnly = true;
            break;
          case "secure":
            setCookie.secure = true;
            break;
          case "partitioned":
            setCookie.partitioned = true;
            break;
          case "domain":
            setCookie.domain = val;
            break;
          case "path":
            setCookie.path = val;
            break;
          case "max-age":
            if (val && maxAgeRegExp.test(val))
              setCookie.maxAge = Number(val);
            break;
          case "expires":
            if (!val)
              break;
            const date = new Date(val);
            if (Number.isFinite(date.valueOf()))
              setCookie.expires = date;
            break;
          case "priority":
            if (!val)
              break;
            const priority = val.toLowerCase();
            if (priority === "low" || priority === "medium" || priority === "high") {
              setCookie.priority = priority;
            }
            break;
          case "samesite":
            if (!val)
              break;
            const sameSite = val.toLowerCase();
            if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
              setCookie.sameSite = sameSite;
            }
            break;
        }
        index = endIdx2 + 1;
      }
      return setCookie;
    }
    function endIndex(str, min, len) {
      const index = str.indexOf(";", min);
      return index === -1 ? len : index;
    }
    function eqIndex(str, min, max) {
      const index = str.indexOf("=", min);
      return index < max ? index : -1;
    }
    function valueSlice(str, min, max) {
      let start = min;
      let end = max;
      do {
        const code = str.charCodeAt(start);
        if (code !== 32 && code !== 9)
          break;
      } while (++start < end);
      while (end > start) {
        const code = str.charCodeAt(end - 1);
        if (code !== 32 && code !== 9)
          break;
        end--;
      }
      return str.slice(start, end);
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/http/util.js
function parseSetCookieHeader(cookies) {
  if (!cookies) {
    return [];
  }
  if (typeof cookies === "string") {
    return cookies.split(/(?<!Expires=\w+),/i).map((c) => c.trim());
  }
  return cookies;
}
function getQueryFromIterator(it) {
  const query = {};
  for (const [key, value] of it) {
    if (key in query) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  }
  return query;
}
var init_util = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/http/util.js"() {
    init_logger();
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/converters/utils.js
function getQueryFromSearchParams(searchParams) {
  return getQueryFromIterator(searchParams.entries());
}
var init_utils = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/converters/utils.js"() {
    init_util();
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/converters/edge.js
var edge_exports = {};
__export(edge_exports, {
  default: () => edge_default
});
import { Buffer as Buffer2 } from "node:buffer";
var import_cookie, NULL_BODY_STATUSES, converter, edge_default;
var init_edge = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/converters/edge.js"() {
    import_cookie = __toESM(require_dist(), 1);
    init_util();
    init_utils();
    NULL_BODY_STATUSES = /* @__PURE__ */ new Set([101, 103, 204, 205, 304]);
    converter = {
      convertFrom: async (event) => {
        const url = new URL(event.url);
        const searchParams = url.searchParams;
        const query = getQueryFromSearchParams(searchParams);
        const headers = {};
        event.headers.forEach((value, key) => {
          headers[key] = value;
        });
        const rawPath = url.pathname;
        const method = event.method;
        const shouldHaveBody = method !== "GET" && method !== "HEAD";
        const body = shouldHaveBody ? Buffer2.from(await event.arrayBuffer()) : void 0;
        const cookieHeader = event.headers.get("cookie");
        const cookies = cookieHeader ? import_cookie.default.parse(cookieHeader) : {};
        return {
          type: "core",
          method,
          rawPath,
          url: event.url,
          body,
          headers,
          remoteAddress: event.headers.get("x-forwarded-for") ?? "::1",
          query,
          cookies
        };
      },
      convertTo: async (result) => {
        if ("internalEvent" in result) {
          const request = new Request(result.internalEvent.url, {
            body: result.internalEvent.body,
            method: result.internalEvent.method,
            headers: {
              ...result.internalEvent.headers,
              "x-forwarded-host": result.internalEvent.headers.host
            }
          });
          if (globalThis.__dangerous_ON_edge_converter_returns_request === true) {
            return request;
          }
          const cfCache = (result.isISR || result.internalEvent.rawPath.startsWith("/_next/image")) && process.env.DISABLE_CACHE !== "true" ? { cacheEverything: true } : {};
          return fetch(request, {
            // This is a hack to make sure that the response is cached by Cloudflare
            // See https://developers.cloudflare.com/workers/examples/cache-using-fetch/#caching-html-resources
            // @ts-expect-error - This is a Cloudflare specific option
            cf: cfCache
          });
        }
        const headers = new Headers();
        for (const [key, value] of Object.entries(result.headers)) {
          if (key === "set-cookie" && typeof value === "string") {
            const cookies = parseSetCookieHeader(value);
            for (const cookie of cookies) {
              headers.append(key, cookie);
            }
            continue;
          }
          if (Array.isArray(value)) {
            for (const v of value) {
              headers.append(key, v);
            }
          } else {
            headers.set(key, value);
          }
        }
        const body = NULL_BODY_STATUSES.has(result.statusCode) ? null : result.body;
        return new Response(body, {
          status: result.statusCode,
          headers
        });
      },
      name: "edge"
    };
    edge_default = converter;
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js
var cloudflare_edge_exports = {};
__export(cloudflare_edge_exports, {
  default: () => cloudflare_edge_default
});
var cfPropNameMapping, handler, cloudflare_edge_default;
var init_cloudflare_edge = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js"() {
    cfPropNameMapping = {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: [encodeURIComponent, "x-open-next-city"],
      country: "x-open-next-country",
      regionCode: "x-open-next-region",
      latitude: "x-open-next-latitude",
      longitude: "x-open-next-longitude"
    };
    handler = async (handler3, converter2) => async (request, env, ctx) => {
      globalThis.process = process;
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
      const internalEvent = await converter2.convertFrom(request);
      const cfProperties = request.cf;
      for (const [propName, mapping] of Object.entries(cfPropNameMapping)) {
        const propValue = cfProperties?.[propName];
        if (propValue != null) {
          const [encode, headerName] = Array.isArray(mapping) ? mapping : [null, mapping];
          internalEvent.headers[headerName] = encode ? encode(propValue) : propValue;
        }
      }
      const response = await handler3(internalEvent, {
        waitUntil: ctx.waitUntil.bind(ctx)
      });
      const result = await converter2.convertTo(response);
      return result;
    };
    cloudflare_edge_default = {
      wrapper: handler,
      name: "cloudflare-edge",
      supportStreaming: true,
      edgeRuntime: true
    };
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js
var pattern_env_exports = {};
__export(pattern_env_exports, {
  default: () => pattern_env_default
});
function initializeOnce() {
  if (initialized)
    return;
  cachedOrigins = JSON.parse(process.env.OPEN_NEXT_ORIGIN ?? "{}");
  const functions = globalThis.openNextConfig.functions ?? {};
  for (const key in functions) {
    if (key !== "default") {
      const value = functions[key];
      const regexes = [];
      for (const pattern of value.patterns) {
        const regexPattern = `/${pattern.replace(/\*\*/g, "(.*)").replace(/\*/g, "([^/]*)").replace(/\//g, "\\/").replace(/\?/g, ".")}`;
        regexes.push(new RegExp(regexPattern));
      }
      cachedPatterns.push({
        key,
        patterns: value.patterns,
        regexes
      });
    }
  }
  initialized = true;
}
var cachedOrigins, cachedPatterns, initialized, envLoader, pattern_env_default;
var init_pattern_env = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js"() {
    init_logger();
    cachedPatterns = [];
    initialized = false;
    envLoader = {
      name: "env",
      resolve: async (_path) => {
        try {
          initializeOnce();
          for (const { key, patterns, regexes } of cachedPatterns) {
            for (const regex of regexes) {
              if (regex.test(_path)) {
                debug("Using origin", key, patterns);
                return cachedOrigins[key];
              }
            }
          }
          if (_path.startsWith("/_next/image") && cachedOrigins.imageOptimizer) {
            debug("Using origin", "imageOptimizer", _path);
            return cachedOrigins.imageOptimizer;
          }
          if (cachedOrigins.default) {
            debug("Using default origin", cachedOrigins.default, _path);
            return cachedOrigins.default;
          }
          return false;
        } catch (e) {
          error("Error while resolving origin", e);
          return false;
        }
      }
    };
    pattern_env_default = envLoader;
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js
var dummy_exports = {};
__export(dummy_exports, {
  default: () => dummy_default
});
var resolver, dummy_default;
var init_dummy = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js"() {
    resolver = {
      name: "dummy"
    };
    dummy_default = resolver;
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/stream.js
import { ReadableStream as ReadableStream2 } from "node:stream/web";
function toReadableStream(value, isBase64) {
  return new ReadableStream2({
    pull(controller) {
      controller.enqueue(Buffer.from(value, isBase64 ? "base64" : "utf8"));
      controller.close();
    }
  }, { highWaterMark: 0 });
}
function emptyReadableStream() {
  if (process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === "true") {
    return new ReadableStream2({
      pull(controller) {
        maybeSomethingBuffer ??= Buffer.from("SOMETHING");
        controller.enqueue(maybeSomethingBuffer);
        controller.close();
      }
    }, { highWaterMark: 0 });
  }
  return new ReadableStream2({
    start(controller) {
      controller.close();
    }
  });
}
var maybeSomethingBuffer;
var init_stream = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/stream.js"() {
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js
var fetch_exports = {};
__export(fetch_exports, {
  default: () => fetch_default
});
var fetchProxy, fetch_default;
var init_fetch = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js"() {
    init_stream();
    fetchProxy = {
      name: "fetch-proxy",
      // @ts-ignore
      proxy: async (internalEvent) => {
        const { url, headers: eventHeaders, method, body } = internalEvent;
        const headers = Object.fromEntries(Object.entries(eventHeaders).filter(([key]) => key.toLowerCase() !== "cf-connecting-ip"));
        const response = await fetch(url, {
          method,
          headers,
          body
        });
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          const cur = responseHeaders[key];
          if (cur === void 0) {
            responseHeaders[key] = value;
          } else if (Array.isArray(cur)) {
            cur.push(value);
          } else {
            responseHeaders[key] = [cur, value];
          }
        });
        return {
          type: "core",
          headers: responseHeaders,
          statusCode: response.status,
          isBase64Encoded: true,
          body: response.body ?? emptyReadableStream()
        };
      }
    };
    fetch_default = fetchProxy;
  }
});

// .next/server/edge/chunks/_0tb3kv-._.js
var require_tb3kv = __commonJS({
  ".next/server/edge/chunks/_0tb3kv-._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/_0tb3kv-._.js", 23699, (e, n, t) => {
      self._ENTRIES ||= {};
      let a = Promise.resolve().then(() => e.i(52334));
      a.catch(() => {
      }), self._ENTRIES.middleware_middleware = new Proxy(a, { get(e2, n2) {
        if ("then" === n2) return (n3, t3) => e2.then(n3, t3);
        let t2 = (...t3) => e2.then((e3) => (0, e3[n2])(...t3));
        return t2.then = (t3, a2) => e2.then((e3) => e3[n2]).then(t3, a2), t2;
      } });
    }, 7894, (e, n, t) => {
      n.exports = { nav: { home: "Trang chu", events: "Su kien", about: "Ve chung toi", contact: "Lien he", quiz: "Trac nghiem" }, home: { subtitle: "Nhay Tu Do giua Thien Nhien tai Da Nang & Hoi An", description: "Chuyen dong tu do giua thien nhien. Nhip dieu bo lac. Ket noi sau sac. Hay den nhay cung chung toi giua rung xanh mien Trung Viet Nam.", cta_events: "Su kien sap toi", cta_discover: "Kham pha them", about_title: "Nhay giua Thien Nhien", about_p1: "Extaticaa sinh ra tu tinh yeu sau sac voi chuyen dong, am nhac, va ve dep hoang so cua thien nhien. Chung toi dua nhay tu do ra khoi phong tap va vao giua rung xanh, canh dong lua, nui non.", about_p2: "Khong co quy tac. Khong co buoc nhay de theo. Chi co ban, am nhac, mat dat duoi chan, va mot cong dong san sang don nhan moi bieu hien cua ban.", about_link: "Cau chuyen cua chung toi", what_title: "Nhay Tu Do la gi", what_description: "Nhay tu do la hinh thuc chuyen dong tu do, noi khong co dong tac nao la sai. Khong noi chuyen tren san nhay. Khong dien thoai. Chi co am nhac dua ban di tu nhip cham, tiep dat den dinh cao hoang da va tro ve tinh lang.", pillar_nature: "Thien Nhien", pillar_nature_desc: "Moi su kien dien ra ngoai troi. Khoang rung, ben song, canh dong mo duoi sao. Mat dat la san nhay cua ban.", pillar_movement: "Chuyen Dong", pillar_movement_desc: "Tu lac lu nhe nhang den bieu hien manh me. Co the ban biet cach chuyen dong. Chung toi chi tao khong gian de no nho lai.", pillar_community: "Cong Dong", pillar_community_desc: "Mot vong tron nhung nguoi den khong can mat na. Chuyen dong tro thanh ngon ngu chung. Nguoi la tro thanh bo lac.", events_title: "Su kien sap toi", events_subtitle: "Tham gia buoi gap mat tiep theo giua thien nhien.", events_cta: "Xem tat ca su kien", ig_title: "Tu San Nhay", signup_title: "Ket noi voi chung toi", signup_subtitle: "Nhan thong bao ve su kien sap toi, dia diem moi, va nhung buoi hop mat dac biet." }, events: { title: "Su kien", subtitle: "Tim buoi nhay tiep theo cua ban. Moi su kien la mot hanh trinh doc nhat qua am thanh, chuyen dong, va thien nhien.", noEvents: "Hien tai chua co su kien nao. Dang ky ben duoi de la nguoi dau tien biet.", getTickets: "Mua ve", pastTitle: "Su kien da qua", notify_title: "Dung bo lo buoi nhay nao", notify_subtitle: "Tham gia danh sach va la nguoi dau tien biet ve su kien moi." }, about: { title: "Cau chuyen cua chung toi", story_title: "Sinh ra tu Rung", story_p1: "Extaticaa bat dau voi mot y tuong don gian: neu chung ta nhay o noi chung ta cam thay song dong nhat thi sao? Khong phai trong phong tap voi guong va den huynh quang, ma giua thien nhien, voi am thanh rung xanh lam nen.", story_p2: "Tai Da Nang va Hoi An, chung toi tim thay ngoi nha hoan hao. Rung xanh, bai bien, nui non, va quan trong nhat la mot cong dong nhung nguoi khao khat ket noi that su va bieu hien chan thuc.", story_p3: "Moi su kien chung toi tao ra la loi moi tro ve voi co the, chuyen dong khong suy nghi, ket noi khong can loi. Day khong phai bieu dien. Day la thuc hanh.", values_title: "Gia tri cua chung toi", value_1_title: "Tu do tuyet doi", value_1_desc: "Khong vu dao. Khong phan xet. Co the ban, bieu hien cua ban. Moi chuyen dong deu dung.", value_2_title: "Khong gian Thieng", value_2_desc: "Chung toi giu khong gian. Khong dien thoai, khong noi chuyen tren san, khong ruou bia. Nhung gi xay ra trong buoi nhay o lai trong buoi nhay.", value_3_title: "Thien nhien la tren het", value_3_desc: "Chung toi nhay noi thien nhien hoang da. Moi dia diem duoc chon vi ve dep tu nhien va nang luong cua no.", value_4_title: "Ket noi that su", value_4_desc: "Trong the gioi cua man hinh va chuyen phiem, chung toi tao khong gian noi moi nguoi thuc su gap nhau. Anh mat. Hoi tho chung. Nhip dieu tap the.", team_title: "Doi ngu" }, contact: { title: "Lien he", subtitle: "Cau hoi ve su kien, hop tac, hay chi muon chao? Chung toi rat muon nghe tu ban.", info_title: "Lien lac", email_label: "Email", location_label: "Dia diem", social_label: "Mang xa hoi", name_label: "Ten", message_label: "Tin nhan", send_button: "Gui tin nhan", success_title: "Da gui", success_message: "Chung toi se phan hoi som.", error_message: "Co loi xay ra. Vui long thu lai." }, emailSignup: { placeholder: "Email cua ban", button: "Tham gia", success: "Chao mung den voi bo lac.", error: "Co loi xay ra. Vui long thu lai." }, instagram: { followUs: "Theo doi chung toi tren Instagram" }, quiz: { label: "Kham pha ban than", title: "Ban la kieu nguoi nhu the nao?", subtitle: "5 cau hoi. 60 giay. Tim hieu co the ban muon nhay nhu the nao.", resultLabel: "Ban la...", emailPrompt: "Nhan thong bao ve su kien phu hop voi ban.", emailButton: "Thong bao toi", emailSuccess: "Chao mung den voi bo lac. Chung toi se tim buoi nhay cho ban.", retake: "Lam lai trac nghiem" }, footer: { tagline: "Trai nghiem nhay tu do giua rung xanh Da Nang va Hoi An. Chuyen dong tu do. Cam nhan sau sac.", links: "Kham pha", events: "Su kien", about: "Ve chung toi", contact: "Lien he", follow: "Theo doi", rights: "Moi quyen duoc bao luu." } };
    }, 6984, (e, n, t) => {
      n.exports = { nav: { home: "Home", events: "Events", about: "About", contact: "Contact", quiz: "Quiz" }, home: { subtitle: "Ecstatic Dance Tales in Da Nang & Hoi An", description: "Free movement in nature. Tribal rhythms. Deep connection. Come dance with us in the jungles of Central Vietnam.", cta_events: "Upcoming Events", cta_discover: "Discover More", about_title: "Dance in the Wild", about_p1: "Extaticaa was born from a deep love for movement, music, and the raw beauty of nature. We bring ecstatic dance out of the studio and into the jungle, the rice fields, the mountains.", about_p2: "No rules. No steps to follow. Just you, the music, the earth beneath your feet, and a community that holds space for your full expression.", about_link: "Our Story", what_title: "What is Ecstatic Dance", what_description: "Ecstatic dance is free-form movement where there are no wrong moves. No talking on the dance floor. No phones. Just music that takes you on a journey from slow, grounding rhythms to wild, tribal peaks and back down to stillness.", pillar_nature: "Nature", pillar_nature_desc: "Every event happens outdoors. Jungle clearings, riverside spots, open fields under the stars. The earth is your dance floor.", pillar_movement: "Movement", pillar_movement_desc: "From gentle swaying to wild expression. Your body knows how to move. We just create the space for it to remember.", pillar_community: "Community", pillar_community_desc: "A circle of people who show up without masks. Movement becomes the shared language. Strangers become tribe.", events_title: "Upcoming Events", events_subtitle: "Join our next gathering in the wild.", events_cta: "See All Events", ig_title: "From the Dance Floor", signup_title: "Stay Connected", signup_subtitle: "Get notified about upcoming events, new locations, and special gatherings." }, events: { title: "Events", subtitle: "Find your next dance. Every event is a unique journey through sound, movement, and nature.", noEvents: "No upcoming events right now. Sign up below to be the first to know.", getTickets: "Get Tickets", pastTitle: "Past Events", notify_title: "Never Miss a Dance", notify_subtitle: "Join our list and be the first to know about new events." }, about: { title: "Our Story", story_title: "Born in the Jungle", story_p1: "Extaticaa started with a simple idea: what if we danced where we feel most alive? Not in a studio with mirrors and fluorescent lights, but in the wild, with the sound of the jungle as our backdrop.", story_p2: "In Da Nang and Hoi An, we found the perfect home. The jungles, the beaches, the mountains, and most importantly, a community of people hungry for real connection and authentic expression.", story_p3: "Every event we create is an invitation to come home to your body, to move without thinking, to connect without words. This is not performance. This is practice.", values_title: "What We Stand For", value_1_title: "Radical Freedom", value_1_desc: "No choreography. No judgement. Your body, your expression. Every movement is the right movement.", value_2_title: "Sacred Space", value_2_desc: "We hold the container. No phones, no talking on the floor, no alcohol. What happens in the dance stays in the dance.", value_3_title: "Nature First", value_3_desc: "We dance where the wild things are. Every location is chosen for its natural beauty and the energy it holds.", value_4_title: "Real Connection", value_4_desc: "In a world of screens and small talk, we create spaces where people actually meet. Eye contact. Shared breath. Collective rhythm.", team_title: "The Team" }, contact: { title: "Get in Touch", subtitle: "Questions about events, collaborations, or just want to say hello? We would love to hear from you.", info_title: "Reach Us", email_label: "Email", location_label: "Location", social_label: "Social", name_label: "Name", message_label: "Message", send_button: "Send Message", success_title: "Message Sent", success_message: "We will get back to you soon.", error_message: "Something went wrong. Please try again." }, emailSignup: { placeholder: "Your email", button: "Join", success: "Welcome to the tribe.", error: "Something went wrong. Please try again." }, instagram: { followUs: "Follow us on Instagram" }, quiz: { label: "Discover yourself", title: "What Type of Mover Are You?", subtitle: "5 questions. 60 seconds. Find out how your body wants to dance.", resultLabel: "You are...", emailPrompt: "Get notified about events perfect for your type.", emailButton: "Notify Me", emailSuccess: "Welcome to the tribe. We will find your dance.", retake: "Take the quiz again" }, footer: { tagline: "Ecstatic dance experiences in the jungles of Da Nang and Hoi An. Move freely. Feel deeply.", links: "Explore", events: "Events", about: "About", contact: "Contact", follow: "Follow Us", rights: "All rights reserved." } };
    }]);
  }
});

// node-built-in-modules:node:buffer
var node_buffer_exports = {};
import * as node_buffer_star from "node:buffer";
var init_node_buffer = __esm({
  "node-built-in-modules:node:buffer"() {
    __reExport(node_buffer_exports, node_buffer_star);
  }
});

// node-built-in-modules:node:async_hooks
var node_async_hooks_exports = {};
import * as node_async_hooks_star from "node:async_hooks";
var init_node_async_hooks = __esm({
  "node-built-in-modules:node:async_hooks"() {
    __reExport(node_async_hooks_exports, node_async_hooks_star);
  }
});

// .next/server/edge/chunks/[root-of-the-server]__0q92aem._.js
var require_root_of_the_server_0q92aem = __commonJS({
  ".next/server/edge/chunks/[root-of-the-server]__0q92aem._.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__0q92aem._.js", 50759, (e, t, r) => {
    }, 37416, (e, t, r) => {
      "use strict";
      var n = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.prototype.hasOwnProperty, s = {}, l = { RequestCookies: () => g, ResponseCookies: () => _, parseCookie: () => d, parseSetCookie: () => h, stringifyCookie: () => c };
      for (var u in l) n(s, u, { get: l[u], enumerable: true });
      function c(e2) {
        var t2;
        let r2 = ["path" in e2 && e2.path && `Path=${e2.path}`, "expires" in e2 && (e2.expires || 0 === e2.expires) && `Expires=${("number" == typeof e2.expires ? new Date(e2.expires) : e2.expires).toUTCString()}`, "maxAge" in e2 && "number" == typeof e2.maxAge && `Max-Age=${e2.maxAge}`, "domain" in e2 && e2.domain && `Domain=${e2.domain}`, "secure" in e2 && e2.secure && "Secure", "httpOnly" in e2 && e2.httpOnly && "HttpOnly", "sameSite" in e2 && e2.sameSite && `SameSite=${e2.sameSite}`, "partitioned" in e2 && e2.partitioned && "Partitioned", "priority" in e2 && e2.priority && `Priority=${e2.priority}`].filter(Boolean), n2 = `${e2.name}=${encodeURIComponent(null != (t2 = e2.value) ? t2 : "")}`;
        return 0 === r2.length ? n2 : `${n2}; ${r2.join("; ")}`;
      }
      function d(e2) {
        let t2 = /* @__PURE__ */ new Map();
        for (let r2 of e2.split(/; */)) {
          if (!r2) continue;
          let e3 = r2.indexOf("=");
          if (-1 === e3) {
            t2.set(r2, "true");
            continue;
          }
          let [n2, i2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
          try {
            t2.set(n2, decodeURIComponent(null != i2 ? i2 : "true"));
          } catch {
          }
        }
        return t2;
      }
      function h(e2) {
        if (!e2) return;
        let [[t2, r2], ...n2] = d(e2), { domain: i2, expires: a2, httponly: o2, maxage: s2, path: l2, samesite: u2, secure: c2, partitioned: h2, priority: g2 } = Object.fromEntries(n2.map(([e3, t3]) => [e3.toLowerCase().replace(/-/g, ""), t3]));
        {
          var _2, m, y = { name: t2, value: decodeURIComponent(r2), domain: i2, ...a2 && { expires: new Date(a2) }, ...o2 && { httpOnly: true }, ..."string" == typeof s2 && { maxAge: Number(s2) }, path: l2, ...u2 && { sameSite: f.includes(_2 = (_2 = u2).toLowerCase()) ? _2 : void 0 }, ...c2 && { secure: true }, ...g2 && { priority: p.includes(m = (m = g2).toLowerCase()) ? m : void 0 }, ...h2 && { partitioned: true } };
          let e3 = {};
          for (let t3 in y) y[t3] && (e3[t3] = y[t3]);
          return e3;
        }
      }
      t.exports = ((e2, t2, r2, s2) => {
        if (t2 && "object" == typeof t2 || "function" == typeof t2) for (let l2 of a(t2)) o.call(e2, l2) || l2 === r2 || n(e2, l2, { get: () => t2[l2], enumerable: !(s2 = i(t2, l2)) || s2.enumerable });
        return e2;
      })(n({}, "__esModule", { value: true }), s);
      var f = ["strict", "lax", "none"], p = ["low", "medium", "high"], g = class {
        constructor(e2) {
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          const t2 = e2.get("cookie");
          if (t2) for (const [e3, r2] of d(t2)) this._parsed.set(e3, { name: e3, value: r2 });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed);
          if (!e2.length) return r2.map(([e3, t3]) => t3);
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2, n2 = this._parsed;
          return n2.set(t2, { name: t2, value: r2 }), this._headers.set("cookie", Array.from(n2).map(([e3, t3]) => c(t3)).join("; ")), this;
        }
        delete(e2) {
          let t2 = this._parsed, r2 = Array.isArray(e2) ? e2.map((e3) => t2.delete(e3)) : t2.delete(e2);
          return this._headers.set("cookie", Array.from(t2).map(([e3, t3]) => c(t3)).join("; ")), r2;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`).join("; ");
        }
      }, _ = class {
        constructor(e2) {
          var t2, r2, n2;
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          const i2 = null != (n2 = null != (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2)) ? r2 : e2.get("set-cookie")) ? n2 : [];
          for (const e3 of Array.isArray(i2) ? i2 : function(e4) {
            if (!e4) return [];
            var t3, r3, n3, i3, a2, o2 = [], s2 = 0;
            function l2() {
              for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); ) s2 += 1;
              return s2 < e4.length;
            }
            for (; s2 < e4.length; ) {
              for (t3 = s2, a2 = false; l2(); ) if ("," === (r3 = e4.charAt(s2))) {
                for (n3 = s2, s2 += 1, l2(), i3 = s2; s2 < e4.length && "=" !== (r3 = e4.charAt(s2)) && ";" !== r3 && "," !== r3; ) s2 += 1;
                s2 < e4.length && "=" === e4.charAt(s2) ? (a2 = true, s2 = i3, o2.push(e4.substring(t3, n3)), t3 = s2) : s2 = n3 + 1;
              } else s2 += 1;
              (!a2 || s2 >= e4.length) && o2.push(e4.substring(t3, e4.length));
            }
            return o2;
          }(i2)) {
            const t3 = h(e3);
            t3 && this._parsed.set(t3.name, t3);
          }
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed.values());
          if (!e2.length) return r2;
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter((e3) => e3.name === n2);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2, n2] = 1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2, i2 = this._parsed;
          return i2.set(t2, function(e3 = { name: "", value: "" }) {
            return "number" == typeof e3.expires && (e3.expires = new Date(e3.expires)), e3.maxAge && (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)), (null === e3.path || void 0 === e3.path) && (e3.path = "/"), e3;
          }({ name: t2, value: r2, ...n2 })), function(e3, t3) {
            for (let [, r3] of (t3.delete("set-cookie"), e3)) {
              let e4 = c(r3);
              t3.append("set-cookie", e4);
            }
          }(i2, this._headers), this;
        }
        delete(...e2) {
          let [t2, r2] = "string" == typeof e2[0] ? [e2[0]] : [e2[0].name, e2[0]];
          return this.set({ ...r2, name: t2, value: "", expires: /* @__PURE__ */ new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map(c).join("; ");
        }
      };
    }, 44064, (e) => {
      "use strict";
      let t = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", { value: "E504", enumerable: false, configurable: true });
      class r {
        disable() {
          throw t;
        }
        getStore() {
        }
        run() {
          throw t;
        }
        exit() {
          throw t;
        }
        enterWith() {
          throw t;
        }
        static bind(e2) {
          return e2;
        }
      }
      let n = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
      e.s(["bindSnapshot", 0, function(e2) {
        return n ? n.bind(e2) : r.bind(e2);
      }, "createAsyncLocalStorage", 0, function() {
        return n ? new n() : new r();
      }, "createSnapshot", 0, function() {
        return n ? n.snapshot() : function(e2, ...t2) {
          return e2(...t2);
        };
      }]);
    }, 59164, (e, t, r) => {
      (() => {
        "use strict";
        let r2, n, i, a, o;
        var s, l, u, c, d, h, f, p, g, _, m, y, v, b, w, E, S = { 491: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ContextAPI = void 0;
          let n2 = r3(223), i2 = r3(172), a2 = r3(930), o2 = "context", s2 = new n2.NoopContextManager();
          class l2 {
            static getInstance() {
              return this._instance || (this._instance = new l2()), this._instance;
            }
            setGlobalContextManager(e3) {
              return (0, i2.registerGlobal)(o2, e3, a2.DiagAPI.instance());
            }
            active() {
              return this._getContextManager().active();
            }
            with(e3, t3, r4, ...n3) {
              return this._getContextManager().with(e3, t3, r4, ...n3);
            }
            bind(e3, t3) {
              return this._getContextManager().bind(e3, t3);
            }
            _getContextManager() {
              return (0, i2.getGlobal)(o2) || s2;
            }
            disable() {
              this._getContextManager().disable(), (0, i2.unregisterGlobal)(o2, a2.DiagAPI.instance());
            }
          }
          t2.ContextAPI = l2;
        }, 930: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagAPI = void 0;
          let n2 = r3(56), i2 = r3(912), a2 = r3(957), o2 = r3(172);
          class s2 {
            constructor() {
              function e3(e4) {
                return function(...t4) {
                  let r4 = (0, o2.getGlobal)("diag");
                  if (r4) return r4[e4](...t4);
                };
              }
              const t3 = this;
              t3.setLogger = (e4, r4 = { logLevel: a2.DiagLogLevel.INFO }) => {
                var n3, s3, l2;
                if (e4 === t3) {
                  let e5 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                  return t3.error(null != (n3 = e5.stack) ? n3 : e5.message), false;
                }
                "number" == typeof r4 && (r4 = { logLevel: r4 });
                let u2 = (0, o2.getGlobal)("diag"), c2 = (0, i2.createLogLevelDiagLogger)(null != (s3 = r4.logLevel) ? s3 : a2.DiagLogLevel.INFO, e4);
                if (u2 && !r4.suppressOverrideMessage) {
                  let e5 = null != (l2 = Error().stack) ? l2 : "<failed to generate stacktrace>";
                  u2.warn(`Current logger will be overwritten from ${e5}`), c2.warn(`Current logger will overwrite one already registered from ${e5}`);
                }
                return (0, o2.registerGlobal)("diag", c2, t3, true);
              }, t3.disable = () => {
                (0, o2.unregisterGlobal)("diag", t3);
              }, t3.createComponentLogger = (e4) => new n2.DiagComponentLogger(e4), t3.verbose = e3("verbose"), t3.debug = e3("debug"), t3.info = e3("info"), t3.warn = e3("warn"), t3.error = e3("error");
            }
            static instance() {
              return this._instance || (this._instance = new s2()), this._instance;
            }
          }
          t2.DiagAPI = s2;
        }, 653: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.MetricsAPI = void 0;
          let n2 = r3(660), i2 = r3(172), a2 = r3(930), o2 = "metrics";
          class s2 {
            static getInstance() {
              return this._instance || (this._instance = new s2()), this._instance;
            }
            setGlobalMeterProvider(e3) {
              return (0, i2.registerGlobal)(o2, e3, a2.DiagAPI.instance());
            }
            getMeterProvider() {
              return (0, i2.getGlobal)(o2) || n2.NOOP_METER_PROVIDER;
            }
            getMeter(e3, t3, r4) {
              return this.getMeterProvider().getMeter(e3, t3, r4);
            }
            disable() {
              (0, i2.unregisterGlobal)(o2, a2.DiagAPI.instance());
            }
          }
          t2.MetricsAPI = s2;
        }, 181: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.PropagationAPI = void 0;
          let n2 = r3(172), i2 = r3(874), a2 = r3(194), o2 = r3(277), s2 = r3(369), l2 = r3(930), u2 = "propagation", c2 = new i2.NoopTextMapPropagator();
          class d2 {
            constructor() {
              this.createBaggage = s2.createBaggage, this.getBaggage = o2.getBaggage, this.getActiveBaggage = o2.getActiveBaggage, this.setBaggage = o2.setBaggage, this.deleteBaggage = o2.deleteBaggage;
            }
            static getInstance() {
              return this._instance || (this._instance = new d2()), this._instance;
            }
            setGlobalPropagator(e3) {
              return (0, n2.registerGlobal)(u2, e3, l2.DiagAPI.instance());
            }
            inject(e3, t3, r4 = a2.defaultTextMapSetter) {
              return this._getGlobalPropagator().inject(e3, t3, r4);
            }
            extract(e3, t3, r4 = a2.defaultTextMapGetter) {
              return this._getGlobalPropagator().extract(e3, t3, r4);
            }
            fields() {
              return this._getGlobalPropagator().fields();
            }
            disable() {
              (0, n2.unregisterGlobal)(u2, l2.DiagAPI.instance());
            }
            _getGlobalPropagator() {
              return (0, n2.getGlobal)(u2) || c2;
            }
          }
          t2.PropagationAPI = d2;
        }, 997: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceAPI = void 0;
          let n2 = r3(172), i2 = r3(846), a2 = r3(139), o2 = r3(607), s2 = r3(930), l2 = "trace";
          class u2 {
            constructor() {
              this._proxyTracerProvider = new i2.ProxyTracerProvider(), this.wrapSpanContext = a2.wrapSpanContext, this.isSpanContextValid = a2.isSpanContextValid, this.deleteSpan = o2.deleteSpan, this.getSpan = o2.getSpan, this.getActiveSpan = o2.getActiveSpan, this.getSpanContext = o2.getSpanContext, this.setSpan = o2.setSpan, this.setSpanContext = o2.setSpanContext;
            }
            static getInstance() {
              return this._instance || (this._instance = new u2()), this._instance;
            }
            setGlobalTracerProvider(e3) {
              let t3 = (0, n2.registerGlobal)(l2, this._proxyTracerProvider, s2.DiagAPI.instance());
              return t3 && this._proxyTracerProvider.setDelegate(e3), t3;
            }
            getTracerProvider() {
              return (0, n2.getGlobal)(l2) || this._proxyTracerProvider;
            }
            getTracer(e3, t3) {
              return this.getTracerProvider().getTracer(e3, t3);
            }
            disable() {
              (0, n2.unregisterGlobal)(l2, s2.DiagAPI.instance()), this._proxyTracerProvider = new i2.ProxyTracerProvider();
            }
          }
          t2.TraceAPI = u2;
        }, 277: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.deleteBaggage = t2.setBaggage = t2.getActiveBaggage = t2.getBaggage = void 0;
          let n2 = r3(491), i2 = (0, r3(780).createContextKey)("OpenTelemetry Baggage Key");
          function a2(e3) {
            return e3.getValue(i2) || void 0;
          }
          t2.getBaggage = a2, t2.getActiveBaggage = function() {
            return a2(n2.ContextAPI.getInstance().active());
          }, t2.setBaggage = function(e3, t3) {
            return e3.setValue(i2, t3);
          }, t2.deleteBaggage = function(e3) {
            return e3.deleteValue(i2);
          };
        }, 993: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.BaggageImpl = void 0;
          class r3 {
            constructor(e3) {
              this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
            }
            getEntry(e3) {
              let t3 = this._entries.get(e3);
              if (t3) return Object.assign({}, t3);
            }
            getAllEntries() {
              return Array.from(this._entries.entries()).map(([e3, t3]) => [e3, t3]);
            }
            setEntry(e3, t3) {
              let n2 = new r3(this._entries);
              return n2._entries.set(e3, t3), n2;
            }
            removeEntry(e3) {
              let t3 = new r3(this._entries);
              return t3._entries.delete(e3), t3;
            }
            removeEntries(...e3) {
              let t3 = new r3(this._entries);
              for (let r4 of e3) t3._entries.delete(r4);
              return t3;
            }
            clear() {
              return new r3();
            }
          }
          t2.BaggageImpl = r3;
        }, 830: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.baggageEntryMetadataSymbol = void 0, t2.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        }, 369: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.baggageEntryMetadataFromString = t2.createBaggage = void 0;
          let n2 = r3(930), i2 = r3(993), a2 = r3(830), o2 = n2.DiagAPI.instance();
          t2.createBaggage = function(e3 = {}) {
            return new i2.BaggageImpl(new Map(Object.entries(e3)));
          }, t2.baggageEntryMetadataFromString = function(e3) {
            return "string" != typeof e3 && (o2.error(`Cannot create baggage metadata from unknown type: ${typeof e3}`), e3 = ""), { __TYPE__: a2.baggageEntryMetadataSymbol, toString: () => e3 };
          };
        }, 67: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.context = void 0, t2.context = r3(491).ContextAPI.getInstance();
        }, 223: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopContextManager = void 0;
          let n2 = r3(780);
          t2.NoopContextManager = class {
            active() {
              return n2.ROOT_CONTEXT;
            }
            with(e3, t3, r4, ...n3) {
              return t3.call(r4, ...n3);
            }
            bind(e3, t3) {
              return t3;
            }
            enable() {
              return this;
            }
            disable() {
              return this;
            }
          };
        }, 780: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ROOT_CONTEXT = t2.createContextKey = void 0, t2.createContextKey = function(e3) {
            return Symbol.for(e3);
          };
          class r3 {
            constructor(e3) {
              const t3 = this;
              t3._currentContext = e3 ? new Map(e3) : /* @__PURE__ */ new Map(), t3.getValue = (e4) => t3._currentContext.get(e4), t3.setValue = (e4, n2) => {
                let i2 = new r3(t3._currentContext);
                return i2._currentContext.set(e4, n2), i2;
              }, t3.deleteValue = (e4) => {
                let n2 = new r3(t3._currentContext);
                return n2._currentContext.delete(e4), n2;
              };
            }
          }
          t2.ROOT_CONTEXT = new r3();
        }, 506: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.diag = void 0, t2.diag = r3(930).DiagAPI.instance();
        }, 56: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagComponentLogger = void 0;
          let n2 = r3(172);
          function i2(e3, t3, r4) {
            let i3 = (0, n2.getGlobal)("diag");
            if (i3) return r4.unshift(t3), i3[e3](...r4);
          }
          t2.DiagComponentLogger = class {
            constructor(e3) {
              this._namespace = e3.namespace || "DiagComponentLogger";
            }
            debug(...e3) {
              return i2("debug", this._namespace, e3);
            }
            error(...e3) {
              return i2("error", this._namespace, e3);
            }
            info(...e3) {
              return i2("info", this._namespace, e3);
            }
            warn(...e3) {
              return i2("warn", this._namespace, e3);
            }
            verbose(...e3) {
              return i2("verbose", this._namespace, e3);
            }
          };
        }, 972: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagConsoleLogger = void 0;
          let r3 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
          t2.DiagConsoleLogger = class {
            constructor() {
              for (let e3 = 0; e3 < r3.length; e3++) this[r3[e3].n] = /* @__PURE__ */ function(e4) {
                return function(...t3) {
                  if (console) {
                    let r4 = console[e4];
                    if ("function" != typeof r4 && (r4 = console.log), "function" == typeof r4) return r4.apply(console, t3);
                  }
                };
              }(r3[e3].c);
            }
          };
        }, 912: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createLogLevelDiagLogger = void 0;
          let n2 = r3(957);
          t2.createLogLevelDiagLogger = function(e3, t3) {
            function r4(r5, n3) {
              let i2 = t3[r5];
              return "function" == typeof i2 && e3 >= n3 ? i2.bind(t3) : function() {
              };
            }
            return e3 < n2.DiagLogLevel.NONE ? e3 = n2.DiagLogLevel.NONE : e3 > n2.DiagLogLevel.ALL && (e3 = n2.DiagLogLevel.ALL), t3 = t3 || {}, { error: r4("error", n2.DiagLogLevel.ERROR), warn: r4("warn", n2.DiagLogLevel.WARN), info: r4("info", n2.DiagLogLevel.INFO), debug: r4("debug", n2.DiagLogLevel.DEBUG), verbose: r4("verbose", n2.DiagLogLevel.VERBOSE) };
          };
        }, 957: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.DiagLogLevel = void 0, (r3 = t2.DiagLogLevel || (t2.DiagLogLevel = {}))[r3.NONE = 0] = "NONE", r3[r3.ERROR = 30] = "ERROR", r3[r3.WARN = 50] = "WARN", r3[r3.INFO = 60] = "INFO", r3[r3.DEBUG = 70] = "DEBUG", r3[r3.VERBOSE = 80] = "VERBOSE", r3[r3.ALL = 9999] = "ALL";
        }, 172: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.unregisterGlobal = t2.getGlobal = t2.registerGlobal = void 0;
          let n2 = r3(200), i2 = r3(521), a2 = r3(130), o2 = i2.VERSION.split(".")[0], s2 = Symbol.for(`opentelemetry.js.api.${o2}`), l2 = n2._globalThis;
          t2.registerGlobal = function(e3, t3, r4, n3 = false) {
            var a3;
            let o3 = l2[s2] = null != (a3 = l2[s2]) ? a3 : { version: i2.VERSION };
            if (!n3 && o3[e3]) {
              let t4 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e3}`);
              return r4.error(t4.stack || t4.message), false;
            }
            if (o3.version !== i2.VERSION) {
              let t4 = Error(`@opentelemetry/api: Registration of version v${o3.version} for ${e3} does not match previously registered API v${i2.VERSION}`);
              return r4.error(t4.stack || t4.message), false;
            }
            return o3[e3] = t3, r4.debug(`@opentelemetry/api: Registered a global for ${e3} v${i2.VERSION}.`), true;
          }, t2.getGlobal = function(e3) {
            var t3, r4;
            let n3 = null == (t3 = l2[s2]) ? void 0 : t3.version;
            if (n3 && (0, a2.isCompatible)(n3)) return null == (r4 = l2[s2]) ? void 0 : r4[e3];
          }, t2.unregisterGlobal = function(e3, t3) {
            t3.debug(`@opentelemetry/api: Unregistering a global for ${e3} v${i2.VERSION}.`);
            let r4 = l2[s2];
            r4 && delete r4[e3];
          };
        }, 130: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.isCompatible = t2._makeCompatibilityCheck = void 0;
          let n2 = r3(521), i2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
          function a2(e3) {
            let t3 = /* @__PURE__ */ new Set([e3]), r4 = /* @__PURE__ */ new Set(), n3 = e3.match(i2);
            if (!n3) return () => false;
            let a3 = { major: +n3[1], minor: +n3[2], patch: +n3[3], prerelease: n3[4] };
            if (null != a3.prerelease) return function(t4) {
              return t4 === e3;
            };
            function o2(e4) {
              return r4.add(e4), false;
            }
            return function(e4) {
              if (t3.has(e4)) return true;
              if (r4.has(e4)) return false;
              let n4 = e4.match(i2);
              if (!n4) return o2(e4);
              let s2 = { major: +n4[1], minor: +n4[2], patch: +n4[3], prerelease: n4[4] };
              if (null != s2.prerelease || a3.major !== s2.major) return o2(e4);
              if (0 === a3.major) return a3.minor === s2.minor && a3.patch <= s2.patch ? (t3.add(e4), true) : o2(e4);
              return a3.minor <= s2.minor ? (t3.add(e4), true) : o2(e4);
            };
          }
          t2._makeCompatibilityCheck = a2, t2.isCompatible = a2(n2.VERSION);
        }, 886: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.metrics = void 0, t2.metrics = r3(653).MetricsAPI.getInstance();
        }, 901: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ValueType = void 0, (r3 = t2.ValueType || (t2.ValueType = {}))[r3.INT = 0] = "INT", r3[r3.DOUBLE = 1] = "DOUBLE";
        }, 102: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createNoopMeter = t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t2.NOOP_OBSERVABLE_GAUGE_METRIC = t2.NOOP_OBSERVABLE_COUNTER_METRIC = t2.NOOP_UP_DOWN_COUNTER_METRIC = t2.NOOP_HISTOGRAM_METRIC = t2.NOOP_COUNTER_METRIC = t2.NOOP_METER = t2.NoopObservableUpDownCounterMetric = t2.NoopObservableGaugeMetric = t2.NoopObservableCounterMetric = t2.NoopObservableMetric = t2.NoopHistogramMetric = t2.NoopUpDownCounterMetric = t2.NoopCounterMetric = t2.NoopMetric = t2.NoopMeter = void 0;
          class r3 {
            createHistogram(e3, r4) {
              return t2.NOOP_HISTOGRAM_METRIC;
            }
            createCounter(e3, r4) {
              return t2.NOOP_COUNTER_METRIC;
            }
            createUpDownCounter(e3, r4) {
              return t2.NOOP_UP_DOWN_COUNTER_METRIC;
            }
            createObservableGauge(e3, r4) {
              return t2.NOOP_OBSERVABLE_GAUGE_METRIC;
            }
            createObservableCounter(e3, r4) {
              return t2.NOOP_OBSERVABLE_COUNTER_METRIC;
            }
            createObservableUpDownCounter(e3, r4) {
              return t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
            }
            addBatchObservableCallback(e3, t3) {
            }
            removeBatchObservableCallback(e3) {
            }
          }
          t2.NoopMeter = r3;
          class n2 {
          }
          t2.NoopMetric = n2;
          class i2 extends n2 {
            add(e3, t3) {
            }
          }
          t2.NoopCounterMetric = i2;
          class a2 extends n2 {
            add(e3, t3) {
            }
          }
          t2.NoopUpDownCounterMetric = a2;
          class o2 extends n2 {
            record(e3, t3) {
            }
          }
          t2.NoopHistogramMetric = o2;
          class s2 {
            addCallback(e3) {
            }
            removeCallback(e3) {
            }
          }
          t2.NoopObservableMetric = s2;
          class l2 extends s2 {
          }
          t2.NoopObservableCounterMetric = l2;
          class u2 extends s2 {
          }
          t2.NoopObservableGaugeMetric = u2;
          class c2 extends s2 {
          }
          t2.NoopObservableUpDownCounterMetric = c2, t2.NOOP_METER = new r3(), t2.NOOP_COUNTER_METRIC = new i2(), t2.NOOP_HISTOGRAM_METRIC = new o2(), t2.NOOP_UP_DOWN_COUNTER_METRIC = new a2(), t2.NOOP_OBSERVABLE_COUNTER_METRIC = new l2(), t2.NOOP_OBSERVABLE_GAUGE_METRIC = new u2(), t2.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new c2(), t2.createNoopMeter = function() {
            return t2.NOOP_METER;
          };
        }, 660: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NOOP_METER_PROVIDER = t2.NoopMeterProvider = void 0;
          let n2 = r3(102);
          class i2 {
            getMeter(e3, t3, r4) {
              return n2.NOOP_METER;
            }
          }
          t2.NoopMeterProvider = i2, t2.NOOP_METER_PROVIDER = new i2();
        }, 200: function(e2, t2, r3) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t3[r4];
            } });
          } : function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), e3[n3] = t3[r4];
          }), i2 = this && this.__exportStar || function(e3, t3) {
            for (var r4 in e3) "default" === r4 || Object.prototype.hasOwnProperty.call(t3, r4) || n2(t3, e3, r4);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), i2(r3(46), t2);
        }, 651: (t2, r3) => {
          Object.defineProperty(r3, "__esModule", { value: true }), r3._globalThis = void 0, r3._globalThis = "object" == typeof globalThis ? globalThis : e.g;
        }, 46: function(e2, t2, r3) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t3[r4];
            } });
          } : function(e3, t3, r4, n3) {
            void 0 === n3 && (n3 = r4), e3[n3] = t3[r4];
          }), i2 = this && this.__exportStar || function(e3, t3) {
            for (var r4 in e3) "default" === r4 || Object.prototype.hasOwnProperty.call(t3, r4) || n2(t3, e3, r4);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), i2(r3(651), t2);
        }, 939: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.propagation = void 0, t2.propagation = r3(181).PropagationAPI.getInstance();
        }, 874: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTextMapPropagator = void 0, t2.NoopTextMapPropagator = class {
            inject(e3, t3) {
            }
            extract(e3, t3) {
              return e3;
            }
            fields() {
              return [];
            }
          };
        }, 194: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.defaultTextMapSetter = t2.defaultTextMapGetter = void 0, t2.defaultTextMapGetter = { get(e3, t3) {
            if (null != e3) return e3[t3];
          }, keys: (e3) => null == e3 ? [] : Object.keys(e3) }, t2.defaultTextMapSetter = { set(e3, t3, r3) {
            null != e3 && (e3[t3] = r3);
          } };
        }, 845: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.trace = void 0, t2.trace = r3(997).TraceAPI.getInstance();
        }, 403: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NonRecordingSpan = void 0;
          let n2 = r3(476);
          t2.NonRecordingSpan = class {
            constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
              this._spanContext = e3;
            }
            spanContext() {
              return this._spanContext;
            }
            setAttribute(e3, t3) {
              return this;
            }
            setAttributes(e3) {
              return this;
            }
            addEvent(e3, t3) {
              return this;
            }
            setStatus(e3) {
              return this;
            }
            updateName(e3) {
              return this;
            }
            end(e3) {
            }
            isRecording() {
              return false;
            }
            recordException(e3, t3) {
            }
          };
        }, 614: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTracer = void 0;
          let n2 = r3(491), i2 = r3(607), a2 = r3(403), o2 = r3(139), s2 = n2.ContextAPI.getInstance();
          t2.NoopTracer = class {
            startSpan(e3, t3, r4 = s2.active()) {
              var n3;
              if (null == t3 ? void 0 : t3.root) return new a2.NonRecordingSpan();
              let l2 = r4 && (0, i2.getSpanContext)(r4);
              return "object" == typeof (n3 = l2) && "string" == typeof n3.spanId && "string" == typeof n3.traceId && "number" == typeof n3.traceFlags && (0, o2.isSpanContextValid)(l2) ? new a2.NonRecordingSpan(l2) : new a2.NonRecordingSpan();
            }
            startActiveSpan(e3, t3, r4, n3) {
              let a3, o3, l2;
              if (arguments.length < 2) return;
              2 == arguments.length ? l2 = t3 : 3 == arguments.length ? (a3 = t3, l2 = r4) : (a3 = t3, o3 = r4, l2 = n3);
              let u2 = null != o3 ? o3 : s2.active(), c2 = this.startSpan(e3, a3, u2), d2 = (0, i2.setSpan)(u2, c2);
              return s2.with(d2, l2, void 0, c2);
            }
          };
        }, 124: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTracerProvider = void 0;
          let n2 = r3(614);
          t2.NoopTracerProvider = class {
            getTracer(e3, t3, r4) {
              return new n2.NoopTracer();
            }
          };
        }, 125: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ProxyTracer = void 0;
          let n2 = new (r3(614)).NoopTracer();
          t2.ProxyTracer = class {
            constructor(e3, t3, r4, n3) {
              this._provider = e3, this.name = t3, this.version = r4, this.options = n3;
            }
            startSpan(e3, t3, r4) {
              return this._getTracer().startSpan(e3, t3, r4);
            }
            startActiveSpan(e3, t3, r4, n3) {
              let i2 = this._getTracer();
              return Reflect.apply(i2.startActiveSpan, i2, arguments);
            }
            _getTracer() {
              if (this._delegate) return this._delegate;
              let e3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
              return e3 ? (this._delegate = e3, this._delegate) : n2;
            }
          };
        }, 846: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ProxyTracerProvider = void 0;
          let n2 = r3(125), i2 = new (r3(124)).NoopTracerProvider();
          t2.ProxyTracerProvider = class {
            getTracer(e3, t3, r4) {
              var i3;
              return null != (i3 = this.getDelegateTracer(e3, t3, r4)) ? i3 : new n2.ProxyTracer(this, e3, t3, r4);
            }
            getDelegate() {
              var e3;
              return null != (e3 = this._delegate) ? e3 : i2;
            }
            setDelegate(e3) {
              this._delegate = e3;
            }
            getDelegateTracer(e3, t3, r4) {
              var n3;
              return null == (n3 = this._delegate) ? void 0 : n3.getTracer(e3, t3, r4);
            }
          };
        }, 996: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SamplingDecision = void 0, (r3 = t2.SamplingDecision || (t2.SamplingDecision = {}))[r3.NOT_RECORD = 0] = "NOT_RECORD", r3[r3.RECORD = 1] = "RECORD", r3[r3.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
        }, 607: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getSpanContext = t2.setSpanContext = t2.deleteSpan = t2.setSpan = t2.getActiveSpan = t2.getSpan = void 0;
          let n2 = r3(780), i2 = r3(403), a2 = r3(491), o2 = (0, n2.createContextKey)("OpenTelemetry Context Key SPAN");
          function s2(e3) {
            return e3.getValue(o2) || void 0;
          }
          function l2(e3, t3) {
            return e3.setValue(o2, t3);
          }
          t2.getSpan = s2, t2.getActiveSpan = function() {
            return s2(a2.ContextAPI.getInstance().active());
          }, t2.setSpan = l2, t2.deleteSpan = function(e3) {
            return e3.deleteValue(o2);
          }, t2.setSpanContext = function(e3, t3) {
            return l2(e3, new i2.NonRecordingSpan(t3));
          }, t2.getSpanContext = function(e3) {
            var t3;
            return null == (t3 = s2(e3)) ? void 0 : t3.spanContext();
          };
        }, 325: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceStateImpl = void 0;
          let n2 = r3(564);
          class i2 {
            constructor(e3) {
              this._internalState = /* @__PURE__ */ new Map(), e3 && this._parse(e3);
            }
            set(e3, t3) {
              let r4 = this._clone();
              return r4._internalState.has(e3) && r4._internalState.delete(e3), r4._internalState.set(e3, t3), r4;
            }
            unset(e3) {
              let t3 = this._clone();
              return t3._internalState.delete(e3), t3;
            }
            get(e3) {
              return this._internalState.get(e3);
            }
            serialize() {
              return this._keys().reduce((e3, t3) => (e3.push(t3 + "=" + this.get(t3)), e3), []).join(",");
            }
            _parse(e3) {
              !(e3.length > 512) && (this._internalState = e3.split(",").reverse().reduce((e4, t3) => {
                let r4 = t3.trim(), i3 = r4.indexOf("=");
                if (-1 !== i3) {
                  let a2 = r4.slice(0, i3), o2 = r4.slice(i3 + 1, t3.length);
                  (0, n2.validateKey)(a2) && (0, n2.validateValue)(o2) && e4.set(a2, o2);
                }
                return e4;
              }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
            }
            _keys() {
              return Array.from(this._internalState.keys()).reverse();
            }
            _clone() {
              let e3 = new i2();
              return e3._internalState = new Map(this._internalState), e3;
            }
          }
          t2.TraceStateImpl = i2;
        }, 564: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.validateValue = t2.validateKey = void 0;
          let r3 = "[_0-9a-z-*/]", n2 = `[a-z]${r3}{0,255}`, i2 = `[a-z0-9]${r3}{0,240}@[a-z]${r3}{0,13}`, a2 = RegExp(`^(?:${n2}|${i2})$`), o2 = /^[ -~]{0,255}[!-~]$/, s2 = /,|=/;
          t2.validateKey = function(e3) {
            return a2.test(e3);
          }, t2.validateValue = function(e3) {
            return o2.test(e3) && !s2.test(e3);
          };
        }, 98: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createTraceState = void 0;
          let n2 = r3(325);
          t2.createTraceState = function(e3) {
            return new n2.TraceStateImpl(e3);
          };
        }, 476: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.INVALID_SPAN_CONTEXT = t2.INVALID_TRACEID = t2.INVALID_SPANID = void 0;
          let n2 = r3(475);
          t2.INVALID_SPANID = "0000000000000000", t2.INVALID_TRACEID = "00000000000000000000000000000000", t2.INVALID_SPAN_CONTEXT = { traceId: t2.INVALID_TRACEID, spanId: t2.INVALID_SPANID, traceFlags: n2.TraceFlags.NONE };
        }, 357: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SpanKind = void 0, (r3 = t2.SpanKind || (t2.SpanKind = {}))[r3.INTERNAL = 0] = "INTERNAL", r3[r3.SERVER = 1] = "SERVER", r3[r3.CLIENT = 2] = "CLIENT", r3[r3.PRODUCER = 3] = "PRODUCER", r3[r3.CONSUMER = 4] = "CONSUMER";
        }, 139: (e2, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.wrapSpanContext = t2.isSpanContextValid = t2.isValidSpanId = t2.isValidTraceId = void 0;
          let n2 = r3(476), i2 = r3(403), a2 = /^([0-9a-f]{32})$/i, o2 = /^[0-9a-f]{16}$/i;
          function s2(e3) {
            return a2.test(e3) && e3 !== n2.INVALID_TRACEID;
          }
          function l2(e3) {
            return o2.test(e3) && e3 !== n2.INVALID_SPANID;
          }
          t2.isValidTraceId = s2, t2.isValidSpanId = l2, t2.isSpanContextValid = function(e3) {
            return s2(e3.traceId) && l2(e3.spanId);
          }, t2.wrapSpanContext = function(e3) {
            return new i2.NonRecordingSpan(e3);
          };
        }, 847: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SpanStatusCode = void 0, (r3 = t2.SpanStatusCode || (t2.SpanStatusCode = {}))[r3.UNSET = 0] = "UNSET", r3[r3.OK = 1] = "OK", r3[r3.ERROR = 2] = "ERROR";
        }, 475: (e2, t2) => {
          var r3;
          Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceFlags = void 0, (r3 = t2.TraceFlags || (t2.TraceFlags = {}))[r3.NONE = 0] = "NONE", r3[r3.SAMPLED = 1] = "SAMPLED";
        }, 521: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.VERSION = void 0, t2.VERSION = "1.6.0";
        } }, C = {};
        function T(e2) {
          var t2 = C[e2];
          if (void 0 !== t2) return t2.exports;
          var r3 = C[e2] = { exports: {} }, n2 = true;
          try {
            S[e2].call(r3.exports, r3, r3.exports, T), n2 = false;
          } finally {
            n2 && delete C[e2];
          }
          return r3.exports;
        }
        T.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/@opentelemetry/api/";
        var R = {};
        Object.defineProperty(R, "__esModule", { value: true }), R.trace = R.propagation = R.metrics = R.diag = R.context = R.INVALID_SPAN_CONTEXT = R.INVALID_TRACEID = R.INVALID_SPANID = R.isValidSpanId = R.isValidTraceId = R.isSpanContextValid = R.createTraceState = R.TraceFlags = R.SpanStatusCode = R.SpanKind = R.SamplingDecision = R.ProxyTracerProvider = R.ProxyTracer = R.defaultTextMapSetter = R.defaultTextMapGetter = R.ValueType = R.createNoopMeter = R.DiagLogLevel = R.DiagConsoleLogger = R.ROOT_CONTEXT = R.createContextKey = R.baggageEntryMetadataFromString = void 0, s = T(369), Object.defineProperty(R, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
          return s.baggageEntryMetadataFromString;
        } }), l = T(780), Object.defineProperty(R, "createContextKey", { enumerable: true, get: function() {
          return l.createContextKey;
        } }), Object.defineProperty(R, "ROOT_CONTEXT", { enumerable: true, get: function() {
          return l.ROOT_CONTEXT;
        } }), u = T(972), Object.defineProperty(R, "DiagConsoleLogger", { enumerable: true, get: function() {
          return u.DiagConsoleLogger;
        } }), c = T(957), Object.defineProperty(R, "DiagLogLevel", { enumerable: true, get: function() {
          return c.DiagLogLevel;
        } }), d = T(102), Object.defineProperty(R, "createNoopMeter", { enumerable: true, get: function() {
          return d.createNoopMeter;
        } }), h = T(901), Object.defineProperty(R, "ValueType", { enumerable: true, get: function() {
          return h.ValueType;
        } }), f = T(194), Object.defineProperty(R, "defaultTextMapGetter", { enumerable: true, get: function() {
          return f.defaultTextMapGetter;
        } }), Object.defineProperty(R, "defaultTextMapSetter", { enumerable: true, get: function() {
          return f.defaultTextMapSetter;
        } }), p = T(125), Object.defineProperty(R, "ProxyTracer", { enumerable: true, get: function() {
          return p.ProxyTracer;
        } }), g = T(846), Object.defineProperty(R, "ProxyTracerProvider", { enumerable: true, get: function() {
          return g.ProxyTracerProvider;
        } }), _ = T(996), Object.defineProperty(R, "SamplingDecision", { enumerable: true, get: function() {
          return _.SamplingDecision;
        } }), m = T(357), Object.defineProperty(R, "SpanKind", { enumerable: true, get: function() {
          return m.SpanKind;
        } }), y = T(847), Object.defineProperty(R, "SpanStatusCode", { enumerable: true, get: function() {
          return y.SpanStatusCode;
        } }), v = T(475), Object.defineProperty(R, "TraceFlags", { enumerable: true, get: function() {
          return v.TraceFlags;
        } }), b = T(98), Object.defineProperty(R, "createTraceState", { enumerable: true, get: function() {
          return b.createTraceState;
        } }), w = T(139), Object.defineProperty(R, "isSpanContextValid", { enumerable: true, get: function() {
          return w.isSpanContextValid;
        } }), Object.defineProperty(R, "isValidTraceId", { enumerable: true, get: function() {
          return w.isValidTraceId;
        } }), Object.defineProperty(R, "isValidSpanId", { enumerable: true, get: function() {
          return w.isValidSpanId;
        } }), E = T(476), Object.defineProperty(R, "INVALID_SPANID", { enumerable: true, get: function() {
          return E.INVALID_SPANID;
        } }), Object.defineProperty(R, "INVALID_TRACEID", { enumerable: true, get: function() {
          return E.INVALID_TRACEID;
        } }), Object.defineProperty(R, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
          return E.INVALID_SPAN_CONTEXT;
        } }), r2 = T(67), Object.defineProperty(R, "context", { enumerable: true, get: function() {
          return r2.context;
        } }), n = T(506), Object.defineProperty(R, "diag", { enumerable: true, get: function() {
          return n.diag;
        } }), i = T(886), Object.defineProperty(R, "metrics", { enumerable: true, get: function() {
          return i.metrics;
        } }), a = T(939), Object.defineProperty(R, "propagation", { enumerable: true, get: function() {
          return a.propagation;
        } }), o = T(845), Object.defineProperty(R, "trace", { enumerable: true, get: function() {
          return o.trace;
        } }), R.default = { context: r2.context, diag: n.diag, metrics: i.metrics, propagation: a.propagation, trace: o.trace }, t.exports = R;
      })();
    }, 83934, (e, t, r) => {
      (() => {
        "use strict";
        "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/cookie/");
        var e2, r2, n, i, a = {};
        a.parse = function(t2, r3) {
          if ("string" != typeof t2) throw TypeError("argument str must be a string");
          for (var i2 = {}, a2 = t2.split(n), o = (r3 || {}).decode || e2, s = 0; s < a2.length; s++) {
            var l = a2[s], u = l.indexOf("=");
            if (!(u < 0)) {
              var c = l.substr(0, u).trim(), d = l.substr(++u, l.length).trim();
              '"' == d[0] && (d = d.slice(1, -1)), void 0 == i2[c] && (i2[c] = function(e3, t3) {
                try {
                  return t3(e3);
                } catch (t4) {
                  return e3;
                }
              }(d, o));
            }
          }
          return i2;
        }, a.serialize = function(e3, t2, n2) {
          var a2 = n2 || {}, o = a2.encode || r2;
          if ("function" != typeof o) throw TypeError("option encode is invalid");
          if (!i.test(e3)) throw TypeError("argument name is invalid");
          var s = o(t2);
          if (s && !i.test(s)) throw TypeError("argument val is invalid");
          var l = e3 + "=" + s;
          if (null != a2.maxAge) {
            var u = a2.maxAge - 0;
            if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
            l += "; Max-Age=" + Math.floor(u);
          }
          if (a2.domain) {
            if (!i.test(a2.domain)) throw TypeError("option domain is invalid");
            l += "; Domain=" + a2.domain;
          }
          if (a2.path) {
            if (!i.test(a2.path)) throw TypeError("option path is invalid");
            l += "; Path=" + a2.path;
          }
          if (a2.expires) {
            if ("function" != typeof a2.expires.toUTCString) throw TypeError("option expires is invalid");
            l += "; Expires=" + a2.expires.toUTCString();
          }
          if (a2.httpOnly && (l += "; HttpOnly"), a2.secure && (l += "; Secure"), a2.sameSite) switch ("string" == typeof a2.sameSite ? a2.sameSite.toLowerCase() : a2.sameSite) {
            case true:
            case "strict":
              l += "; SameSite=Strict";
              break;
            case "lax":
              l += "; SameSite=Lax";
              break;
            case "none":
              l += "; SameSite=None";
              break;
            default:
              throw TypeError("option sameSite is invalid");
          }
          return l;
        }, e2 = decodeURIComponent, r2 = encodeURIComponent, n = /; */, i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, t.exports = a;
      })();
    }, 89181, (e, t, r) => {
      (() => {
        "use strict";
        let e2, r2, n, i, a;
        var o = { 993: (e3) => {
          var t2 = Object.prototype.hasOwnProperty, r3 = "~";
          function n2() {
          }
          function i2(e4, t3, r4) {
            this.fn = e4, this.context = t3, this.once = r4 || false;
          }
          function a2(e4, t3, n3, a3, o3) {
            if ("function" != typeof n3) throw TypeError("The listener must be a function");
            var s3 = new i2(n3, a3 || e4, o3), l2 = r3 ? r3 + t3 : t3;
            return e4._events[l2] ? e4._events[l2].fn ? e4._events[l2] = [e4._events[l2], s3] : e4._events[l2].push(s3) : (e4._events[l2] = s3, e4._eventsCount++), e4;
          }
          function o2(e4, t3) {
            0 == --e4._eventsCount ? e4._events = new n2() : delete e4._events[t3];
          }
          function s2() {
            this._events = new n2(), this._eventsCount = 0;
          }
          Object.create && (n2.prototype = /* @__PURE__ */ Object.create(null), new n2().__proto__ || (r3 = false)), s2.prototype.eventNames = function() {
            var e4, n3, i3 = [];
            if (0 === this._eventsCount) return i3;
            for (n3 in e4 = this._events) t2.call(e4, n3) && i3.push(r3 ? n3.slice(1) : n3);
            return Object.getOwnPropertySymbols ? i3.concat(Object.getOwnPropertySymbols(e4)) : i3;
          }, s2.prototype.listeners = function(e4) {
            var t3 = r3 ? r3 + e4 : e4, n3 = this._events[t3];
            if (!n3) return [];
            if (n3.fn) return [n3.fn];
            for (var i3 = 0, a3 = n3.length, o3 = Array(a3); i3 < a3; i3++) o3[i3] = n3[i3].fn;
            return o3;
          }, s2.prototype.listenerCount = function(e4) {
            var t3 = r3 ? r3 + e4 : e4, n3 = this._events[t3];
            return n3 ? n3.fn ? 1 : n3.length : 0;
          }, s2.prototype.emit = function(e4, t3, n3, i3, a3, o3) {
            var s3 = r3 ? r3 + e4 : e4;
            if (!this._events[s3]) return false;
            var l2, u2, c = this._events[s3], d = arguments.length;
            if (c.fn) {
              switch (c.once && this.removeListener(e4, c.fn, void 0, true), d) {
                case 1:
                  return c.fn.call(c.context), true;
                case 2:
                  return c.fn.call(c.context, t3), true;
                case 3:
                  return c.fn.call(c.context, t3, n3), true;
                case 4:
                  return c.fn.call(c.context, t3, n3, i3), true;
                case 5:
                  return c.fn.call(c.context, t3, n3, i3, a3), true;
                case 6:
                  return c.fn.call(c.context, t3, n3, i3, a3, o3), true;
              }
              for (u2 = 1, l2 = Array(d - 1); u2 < d; u2++) l2[u2 - 1] = arguments[u2];
              c.fn.apply(c.context, l2);
            } else {
              var h, f = c.length;
              for (u2 = 0; u2 < f; u2++) switch (c[u2].once && this.removeListener(e4, c[u2].fn, void 0, true), d) {
                case 1:
                  c[u2].fn.call(c[u2].context);
                  break;
                case 2:
                  c[u2].fn.call(c[u2].context, t3);
                  break;
                case 3:
                  c[u2].fn.call(c[u2].context, t3, n3);
                  break;
                case 4:
                  c[u2].fn.call(c[u2].context, t3, n3, i3);
                  break;
                default:
                  if (!l2) for (h = 1, l2 = Array(d - 1); h < d; h++) l2[h - 1] = arguments[h];
                  c[u2].fn.apply(c[u2].context, l2);
              }
            }
            return true;
          }, s2.prototype.on = function(e4, t3, r4) {
            return a2(this, e4, t3, r4, false);
          }, s2.prototype.once = function(e4, t3, r4) {
            return a2(this, e4, t3, r4, true);
          }, s2.prototype.removeListener = function(e4, t3, n3, i3) {
            var a3 = r3 ? r3 + e4 : e4;
            if (!this._events[a3]) return this;
            if (!t3) return o2(this, a3), this;
            var s3 = this._events[a3];
            if (s3.fn) s3.fn !== t3 || i3 && !s3.once || n3 && s3.context !== n3 || o2(this, a3);
            else {
              for (var l2 = 0, u2 = [], c = s3.length; l2 < c; l2++) (s3[l2].fn !== t3 || i3 && !s3[l2].once || n3 && s3[l2].context !== n3) && u2.push(s3[l2]);
              u2.length ? this._events[a3] = 1 === u2.length ? u2[0] : u2 : o2(this, a3);
            }
            return this;
          }, s2.prototype.removeAllListeners = function(e4) {
            var t3;
            return e4 ? (t3 = r3 ? r3 + e4 : e4, this._events[t3] && o2(this, t3)) : (this._events = new n2(), this._eventsCount = 0), this;
          }, s2.prototype.off = s2.prototype.removeListener, s2.prototype.addListener = s2.prototype.on, s2.prefixed = r3, s2.EventEmitter = s2, e3.exports = s2;
        }, 213: (e3) => {
          e3.exports = (e4, t2) => (t2 = t2 || (() => {
          }), e4.then((e5) => new Promise((e6) => {
            e6(t2());
          }).then(() => e5), (e5) => new Promise((e6) => {
            e6(t2());
          }).then(() => {
            throw e5;
          })));
        }, 574: (e3, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.default = function(e4, t3, r3) {
            let n2 = 0, i2 = e4.length;
            for (; i2 > 0; ) {
              let a2 = i2 / 2 | 0, o2 = n2 + a2;
              0 >= r3(e4[o2], t3) ? (n2 = ++o2, i2 -= a2 + 1) : i2 = a2;
            }
            return n2;
          };
        }, 821: (e3, t2, r3) => {
          Object.defineProperty(t2, "__esModule", { value: true });
          let n2 = r3(574);
          t2.default = class {
            constructor() {
              this._queue = [];
            }
            enqueue(e4, t3) {
              let r4 = { priority: (t3 = Object.assign({ priority: 0 }, t3)).priority, run: e4 };
              if (this.size && this._queue[this.size - 1].priority >= t3.priority) return void this._queue.push(r4);
              let i2 = n2.default(this._queue, r4, (e5, t4) => t4.priority - e5.priority);
              this._queue.splice(i2, 0, r4);
            }
            dequeue() {
              let e4 = this._queue.shift();
              return null == e4 ? void 0 : e4.run;
            }
            filter(e4) {
              return this._queue.filter((t3) => t3.priority === e4.priority).map((e5) => e5.run);
            }
            get size() {
              return this._queue.length;
            }
          };
        }, 816: (e3, t2, r3) => {
          let n2 = r3(213);
          class i2 extends Error {
            constructor(e4) {
              super(e4), this.name = "TimeoutError";
            }
          }
          let a2 = (e4, t3, r4) => new Promise((a3, o2) => {
            if ("number" != typeof t3 || t3 < 0) throw TypeError("Expected `milliseconds` to be a positive number");
            if (t3 === 1 / 0) return void a3(e4);
            let s2 = setTimeout(() => {
              if ("function" == typeof r4) {
                try {
                  a3(r4());
                } catch (e5) {
                  o2(e5);
                }
                return;
              }
              let n3 = "string" == typeof r4 ? r4 : `Promise timed out after ${t3} milliseconds`, s3 = r4 instanceof Error ? r4 : new i2(n3);
              "function" == typeof e4.cancel && e4.cancel(), o2(s3);
            }, t3);
            n2(e4.then(a3, o2), () => {
              clearTimeout(s2);
            });
          });
          e3.exports = a2, e3.exports.default = a2, e3.exports.TimeoutError = i2;
        } }, s = {};
        function l(e3) {
          var t2 = s[e3];
          if (void 0 !== t2) return t2.exports;
          var r3 = s[e3] = { exports: {} }, n2 = true;
          try {
            o[e3](r3, r3.exports, l), n2 = false;
          } finally {
            n2 && delete s[e3];
          }
          return r3.exports;
        }
        l.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/p-queue/";
        var u = {};
        Object.defineProperty(u, "__esModule", { value: true }), e2 = l(993), r2 = l(816), n = l(821), i = () => {
        }, a = new r2.TimeoutError(), u.default = class extends e2 {
          constructor(e3) {
            var t2, r3, a2, o2;
            if (super(), this._intervalCount = 0, this._intervalEnd = 0, this._pendingCount = 0, this._resolveEmpty = i, this._resolveIdle = i, !("number" == typeof (e3 = Object.assign({ carryoverConcurrencyCount: false, intervalCap: 1 / 0, interval: 0, concurrency: 1 / 0, autoStart: true, queueClass: n.default }, e3)).intervalCap && e3.intervalCap >= 1)) throw TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null != (r3 = null == (t2 = e3.intervalCap) ? void 0 : t2.toString()) ? r3 : ""}\` (${typeof e3.intervalCap})`);
            if (void 0 === e3.interval || !(Number.isFinite(e3.interval) && e3.interval >= 0)) throw TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null != (o2 = null == (a2 = e3.interval) ? void 0 : a2.toString()) ? o2 : ""}\` (${typeof e3.interval})`);
            this._carryoverConcurrencyCount = e3.carryoverConcurrencyCount, this._isIntervalIgnored = e3.intervalCap === 1 / 0 || 0 === e3.interval, this._intervalCap = e3.intervalCap, this._interval = e3.interval, this._queue = new e3.queueClass(), this._queueClass = e3.queueClass, this.concurrency = e3.concurrency, this._timeout = e3.timeout, this._throwOnTimeout = true === e3.throwOnTimeout, this._isPaused = false === e3.autoStart;
          }
          get _doesIntervalAllowAnother() {
            return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
          }
          get _doesConcurrentAllowAnother() {
            return this._pendingCount < this._concurrency;
          }
          _next() {
            this._pendingCount--, this._tryToStartAnother(), this.emit("next");
          }
          _resolvePromises() {
            this._resolveEmpty(), this._resolveEmpty = i, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = i, this.emit("idle"));
          }
          _onResumeInterval() {
            this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = void 0;
          }
          _isIntervalPaused() {
            let e3 = Date.now();
            if (void 0 === this._intervalId) {
              let t2 = this._intervalEnd - e3;
              if (!(t2 < 0)) return void 0 === this._timeoutId && (this._timeoutId = setTimeout(() => {
                this._onResumeInterval();
              }, t2)), true;
              this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
            }
            return false;
          }
          _tryToStartAnother() {
            if (0 === this._queue.size) return this._intervalId && clearInterval(this._intervalId), this._intervalId = void 0, this._resolvePromises(), false;
            if (!this._isPaused) {
              let e3 = !this._isIntervalPaused();
              if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                let t2 = this._queue.dequeue();
                return !!t2 && (this.emit("active"), t2(), e3 && this._initializeIntervalIfNeeded(), true);
              }
            }
            return false;
          }
          _initializeIntervalIfNeeded() {
            this._isIntervalIgnored || void 0 !== this._intervalId || (this._intervalId = setInterval(() => {
              this._onInterval();
            }, this._interval), this._intervalEnd = Date.now() + this._interval);
          }
          _onInterval() {
            0 === this._intervalCount && 0 === this._pendingCount && this._intervalId && (clearInterval(this._intervalId), this._intervalId = void 0), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0, this._processQueue();
          }
          _processQueue() {
            for (; this._tryToStartAnother(); ) ;
          }
          get concurrency() {
            return this._concurrency;
          }
          set concurrency(e3) {
            if (!("number" == typeof e3 && e3 >= 1)) throw TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e3}\` (${typeof e3})`);
            this._concurrency = e3, this._processQueue();
          }
          async add(e3, t2 = {}) {
            return new Promise((n2, i2) => {
              let o2 = async () => {
                this._pendingCount++, this._intervalCount++;
                try {
                  let o3 = void 0 === this._timeout && void 0 === t2.timeout ? e3() : r2.default(Promise.resolve(e3()), void 0 === t2.timeout ? this._timeout : t2.timeout, () => {
                    (void 0 === t2.throwOnTimeout ? this._throwOnTimeout : t2.throwOnTimeout) && i2(a);
                  });
                  n2(await o3);
                } catch (e4) {
                  i2(e4);
                }
                this._next();
              };
              this._queue.enqueue(o2, t2), this._tryToStartAnother(), this.emit("add");
            });
          }
          async addAll(e3, t2) {
            return Promise.all(e3.map(async (e4) => this.add(e4, t2)));
          }
          start() {
            return this._isPaused && (this._isPaused = false, this._processQueue()), this;
          }
          pause() {
            this._isPaused = true;
          }
          clear() {
            this._queue = new this._queueClass();
          }
          async onEmpty() {
            if (0 !== this._queue.size) return new Promise((e3) => {
              let t2 = this._resolveEmpty;
              this._resolveEmpty = () => {
                t2(), e3();
              };
            });
          }
          async onIdle() {
            if (0 !== this._pendingCount || 0 !== this._queue.size) return new Promise((e3) => {
              let t2 = this._resolveIdle;
              this._resolveIdle = () => {
                t2(), e3();
              };
            });
          }
          get size() {
            return this._queue.size;
          }
          sizeBy(e3) {
            return this._queue.filter(e3).length;
          }
          get pending() {
            return this._pendingCount;
          }
          get isPaused() {
            return this._isPaused;
          }
          get timeout() {
            return this._timeout;
          }
          set timeout(e3) {
            this._timeout = e3;
          }
        }, t.exports = u;
      })();
    }, 51615, (e, t, r) => {
      t.exports = e.x("node:buffer", () => (init_node_buffer(), __toCommonJS(node_buffer_exports)));
    }, 78500, (e, t, r) => {
      t.exports = e.x("node:async_hooks", () => (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports)));
    }, 79957, (e, t, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });
      var n = { getTestReqInfo: function() {
        return l;
      }, withRequest: function() {
        return s;
      } };
      for (var i in n) Object.defineProperty(r, i, { enumerable: true, get: n[i] });
      let a = new (e.r(78500)).AsyncLocalStorage();
      function o(e2, t2) {
        let r2 = t2.header(e2, "next-test-proxy-port");
        if (!r2) return;
        let n2 = t2.url(e2);
        return { url: n2, proxyPort: Number(r2), testData: t2.header(e2, "next-test-data") || "" };
      }
      function s(e2, t2, r2) {
        let n2 = o(e2, t2);
        return n2 ? a.run(n2, r2) : r2();
      }
      function l(e2, t2) {
        let r2 = a.getStore();
        return r2 || (e2 && t2 ? o(e2, t2) : void 0);
      }
    }, 33923, (e, t, r) => {
      "use strict";
      var n = e.i(51615);
      Object.defineProperty(r, "__esModule", { value: true });
      var i = { handleFetch: function() {
        return u;
      }, interceptFetch: function() {
        return c;
      }, reader: function() {
        return s;
      } };
      for (var a in i) Object.defineProperty(r, a, { enumerable: true, get: i[a] });
      let o = e.r(79957), s = { url: (e2) => e2.url, header: (e2, t2) => e2.headers.get(t2) };
      async function l(e2, t2) {
        let { url: r2, method: i2, headers: a2, body: o2, cache: s2, credentials: l2, integrity: u2, mode: c2, redirect: d, referrer: h, referrerPolicy: f } = t2;
        return { testData: e2, api: "fetch", request: { url: r2, method: i2, headers: [...Array.from(a2), ["next-test-stack", function() {
          let e3 = (Error().stack ?? "").split("\n");
          for (let t3 = 1; t3 < e3.length; t3++) if (e3[t3].length > 0) {
            e3 = e3.slice(t3);
            break;
          }
          return (e3 = (e3 = (e3 = e3.filter((e4) => !e4.includes("/next/dist/"))).slice(0, 5)).map((e4) => e4.replace("webpack-internal:///(rsc)/", "").trim())).join("    ");
        }()]], body: o2 ? n.Buffer.from(await t2.arrayBuffer()).toString("base64") : null, cache: s2, credentials: l2, integrity: u2, mode: c2, redirect: d, referrer: h, referrerPolicy: f } };
      }
      async function u(e2, t2) {
        let r2 = (0, o.getTestReqInfo)(t2, s);
        if (!r2) return e2(t2);
        let { testData: i2, proxyPort: a2 } = r2, u2 = await l(i2, t2), c2 = await e2(`http://localhost:${a2}`, { method: "POST", body: JSON.stringify(u2), next: { internal: true } });
        if (!c2.ok) throw Object.defineProperty(Error(`Proxy request failed: ${c2.status}`), "__NEXT_ERROR_CODE", { value: "E146", enumerable: false, configurable: true });
        let d = await c2.json(), { api: h } = d;
        switch (h) {
          case "continue":
            return e2(t2);
          case "abort":
          case "unhandled":
            throw Object.defineProperty(Error(`Proxy request aborted [${t2.method} ${t2.url}]`), "__NEXT_ERROR_CODE", { value: "E145", enumerable: false, configurable: true });
          case "fetch":
            return function(e3) {
              let { status: t3, headers: r3, body: i3 } = e3.response;
              return new Response(i3 ? n.Buffer.from(i3, "base64") : null, { status: t3, headers: new Headers(r3) });
            }(d);
          default:
            return h;
        }
      }
      function c(t2) {
        return e.g.fetch = function(e2, r2) {
          var n2;
          return (null == r2 || null == (n2 = r2.next) ? void 0 : n2.internal) ? t2(e2, r2) : u(t2, new Request(e2, r2));
        }, () => {
          e.g.fetch = t2;
        };
      }
    }, 92446, (e, t, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: true });
      var n = { interceptTestApis: function() {
        return s;
      }, wrapRequestHandler: function() {
        return l;
      } };
      for (var i in n) Object.defineProperty(r, i, { enumerable: true, get: n[i] });
      let a = e.r(79957), o = e.r(33923);
      function s() {
        return (0, o.interceptFetch)(e.g.fetch);
      }
      function l(e2) {
        return (t2, r2) => (0, a.withRequest)(t2, o.reader, () => e2(t2, r2));
      }
    }, 9007, (e, t, r) => {
      !function() {
        "use strict";
        var e2 = { 114: function(e3) {
          function t2(e4) {
            if ("string" != typeof e4) throw TypeError("Path must be a string. Received " + JSON.stringify(e4));
          }
          function r3(e4, t3) {
            for (var r4, n3 = "", i = 0, a = -1, o = 0, s = 0; s <= e4.length; ++s) {
              if (s < e4.length) r4 = e4.charCodeAt(s);
              else if (47 === r4) break;
              else r4 = 47;
              if (47 === r4) {
                if (a === s - 1 || 1 === o) ;
                else if (a !== s - 1 && 2 === o) {
                  if (n3.length < 2 || 2 !== i || 46 !== n3.charCodeAt(n3.length - 1) || 46 !== n3.charCodeAt(n3.length - 2)) {
                    if (n3.length > 2) {
                      var l = n3.lastIndexOf("/");
                      if (l !== n3.length - 1) {
                        -1 === l ? (n3 = "", i = 0) : i = (n3 = n3.slice(0, l)).length - 1 - n3.lastIndexOf("/"), a = s, o = 0;
                        continue;
                      }
                    } else if (2 === n3.length || 1 === n3.length) {
                      n3 = "", i = 0, a = s, o = 0;
                      continue;
                    }
                  }
                  t3 && (n3.length > 0 ? n3 += "/.." : n3 = "..", i = 2);
                } else n3.length > 0 ? n3 += "/" + e4.slice(a + 1, s) : n3 = e4.slice(a + 1, s), i = s - a - 1;
                a = s, o = 0;
              } else 46 === r4 && -1 !== o ? ++o : o = -1;
            }
            return n3;
          }
          var n2 = { resolve: function() {
            for (var e4, n3, i = "", a = false, o = arguments.length - 1; o >= -1 && !a; o--) o >= 0 ? n3 = arguments[o] : (void 0 === e4 && (e4 = ""), n3 = e4), t2(n3), 0 !== n3.length && (i = n3 + "/" + i, a = 47 === n3.charCodeAt(0));
            if (i = r3(i, !a), a) if (i.length > 0) return "/" + i;
            else return "/";
            return i.length > 0 ? i : ".";
          }, normalize: function(e4) {
            if (t2(e4), 0 === e4.length) return ".";
            var n3 = 47 === e4.charCodeAt(0), i = 47 === e4.charCodeAt(e4.length - 1);
            return (0 !== (e4 = r3(e4, !n3)).length || n3 || (e4 = "."), e4.length > 0 && i && (e4 += "/"), n3) ? "/" + e4 : e4;
          }, isAbsolute: function(e4) {
            return t2(e4), e4.length > 0 && 47 === e4.charCodeAt(0);
          }, join: function() {
            if (0 == arguments.length) return ".";
            for (var e4, r4 = 0; r4 < arguments.length; ++r4) {
              var i = arguments[r4];
              t2(i), i.length > 0 && (void 0 === e4 ? e4 = i : e4 += "/" + i);
            }
            return void 0 === e4 ? "." : n2.normalize(e4);
          }, relative: function(e4, r4) {
            if (t2(e4), t2(r4), e4 === r4 || (e4 = n2.resolve(e4)) === (r4 = n2.resolve(r4))) return "";
            for (var i = 1; i < e4.length && 47 === e4.charCodeAt(i); ++i) ;
            for (var a = e4.length, o = a - i, s = 1; s < r4.length && 47 === r4.charCodeAt(s); ++s) ;
            for (var l = r4.length - s, u = o < l ? o : l, c = -1, d = 0; d <= u; ++d) {
              if (d === u) {
                if (l > u) {
                  if (47 === r4.charCodeAt(s + d)) return r4.slice(s + d + 1);
                  else if (0 === d) return r4.slice(s + d);
                } else o > u && (47 === e4.charCodeAt(i + d) ? c = d : 0 === d && (c = 0));
                break;
              }
              var h = e4.charCodeAt(i + d);
              if (h !== r4.charCodeAt(s + d)) break;
              47 === h && (c = d);
            }
            var f = "";
            for (d = i + c + 1; d <= a; ++d) (d === a || 47 === e4.charCodeAt(d)) && (0 === f.length ? f += ".." : f += "/..");
            return f.length > 0 ? f + r4.slice(s + c) : (s += c, 47 === r4.charCodeAt(s) && ++s, r4.slice(s));
          }, _makeLong: function(e4) {
            return e4;
          }, dirname: function(e4) {
            if (t2(e4), 0 === e4.length) return ".";
            for (var r4 = e4.charCodeAt(0), n3 = 47 === r4, i = -1, a = true, o = e4.length - 1; o >= 1; --o) if (47 === (r4 = e4.charCodeAt(o))) {
              if (!a) {
                i = o;
                break;
              }
            } else a = false;
            return -1 === i ? n3 ? "/" : "." : n3 && 1 === i ? "//" : e4.slice(0, i);
          }, basename: function(e4, r4) {
            if (void 0 !== r4 && "string" != typeof r4) throw TypeError('"ext" argument must be a string');
            t2(e4);
            var n3, i = 0, a = -1, o = true;
            if (void 0 !== r4 && r4.length > 0 && r4.length <= e4.length) {
              if (r4.length === e4.length && r4 === e4) return "";
              var s = r4.length - 1, l = -1;
              for (n3 = e4.length - 1; n3 >= 0; --n3) {
                var u = e4.charCodeAt(n3);
                if (47 === u) {
                  if (!o) {
                    i = n3 + 1;
                    break;
                  }
                } else -1 === l && (o = false, l = n3 + 1), s >= 0 && (u === r4.charCodeAt(s) ? -1 == --s && (a = n3) : (s = -1, a = l));
              }
              return i === a ? a = l : -1 === a && (a = e4.length), e4.slice(i, a);
            }
            for (n3 = e4.length - 1; n3 >= 0; --n3) if (47 === e4.charCodeAt(n3)) {
              if (!o) {
                i = n3 + 1;
                break;
              }
            } else -1 === a && (o = false, a = n3 + 1);
            return -1 === a ? "" : e4.slice(i, a);
          }, extname: function(e4) {
            t2(e4);
            for (var r4 = -1, n3 = 0, i = -1, a = true, o = 0, s = e4.length - 1; s >= 0; --s) {
              var l = e4.charCodeAt(s);
              if (47 === l) {
                if (!a) {
                  n3 = s + 1;
                  break;
                }
                continue;
              }
              -1 === i && (a = false, i = s + 1), 46 === l ? -1 === r4 ? r4 = s : 1 !== o && (o = 1) : -1 !== r4 && (o = -1);
            }
            return -1 === r4 || -1 === i || 0 === o || 1 === o && r4 === i - 1 && r4 === n3 + 1 ? "" : e4.slice(r4, i);
          }, format: function(e4) {
            var t3, r4;
            if (null === e4 || "object" != typeof e4) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e4);
            return t3 = e4.dir || e4.root, r4 = e4.base || (e4.name || "") + (e4.ext || ""), t3 ? t3 === e4.root ? t3 + r4 : t3 + "/" + r4 : r4;
          }, parse: function(e4) {
            t2(e4);
            var r4, n3 = { root: "", dir: "", base: "", ext: "", name: "" };
            if (0 === e4.length) return n3;
            var i = e4.charCodeAt(0), a = 47 === i;
            a ? (n3.root = "/", r4 = 1) : r4 = 0;
            for (var o = -1, s = 0, l = -1, u = true, c = e4.length - 1, d = 0; c >= r4; --c) {
              if (47 === (i = e4.charCodeAt(c))) {
                if (!u) {
                  s = c + 1;
                  break;
                }
                continue;
              }
              -1 === l && (u = false, l = c + 1), 46 === i ? -1 === o ? o = c : 1 !== d && (d = 1) : -1 !== o && (d = -1);
            }
            return -1 === o || -1 === l || 0 === d || 1 === d && o === l - 1 && o === s + 1 ? -1 !== l && (0 === s && a ? n3.base = n3.name = e4.slice(1, l) : n3.base = n3.name = e4.slice(s, l)) : (0 === s && a ? (n3.name = e4.slice(1, o), n3.base = e4.slice(1, l)) : (n3.name = e4.slice(s, o), n3.base = e4.slice(s, l)), n3.ext = e4.slice(o, l)), s > 0 ? n3.dir = e4.slice(0, s - 1) : a && (n3.dir = "/"), n3;
          }, sep: "/", delimiter: ":", win32: null, posix: null };
          n2.posix = n2, e3.exports = n2;
        } }, r2 = {};
        function n(t2) {
          var i = r2[t2];
          if (void 0 !== i) return i.exports;
          var a = r2[t2] = { exports: {} }, o = true;
          try {
            e2[t2](a, a.exports, n), o = false;
          } finally {
            o && delete r2[t2];
          }
          return a.exports;
        }
        n.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/path-browserify/", t.exports = n(114);
      }();
    }, 38358, (e, t, r) => {
      t.exports = e.r(9007);
    }, 68037, (e, t, r) => {
      (() => {
        "use strict";
        "u" > typeof __nccwpck_require__ && (__nccwpck_require__.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/path-to-regexp/");
        var e2 = {};
        (() => {
          function t2(e3, t3) {
            void 0 === t3 && (t3 = {});
            for (var r3 = function(e4) {
              for (var t4 = [], r4 = 0; r4 < e4.length; ) {
                var n3 = e4[r4];
                if ("*" === n3 || "+" === n3 || "?" === n3) {
                  t4.push({ type: "MODIFIER", index: r4, value: e4[r4++] });
                  continue;
                }
                if ("\\" === n3) {
                  t4.push({ type: "ESCAPED_CHAR", index: r4++, value: e4[r4++] });
                  continue;
                }
                if ("{" === n3) {
                  t4.push({ type: "OPEN", index: r4, value: e4[r4++] });
                  continue;
                }
                if ("}" === n3) {
                  t4.push({ type: "CLOSE", index: r4, value: e4[r4++] });
                  continue;
                }
                if (":" === n3) {
                  for (var i2 = "", a3 = r4 + 1; a3 < e4.length; ) {
                    var o3 = e4.charCodeAt(a3);
                    if (o3 >= 48 && o3 <= 57 || o3 >= 65 && o3 <= 90 || o3 >= 97 && o3 <= 122 || 95 === o3) {
                      i2 += e4[a3++];
                      continue;
                    }
                    break;
                  }
                  if (!i2) throw TypeError("Missing parameter name at ".concat(r4));
                  t4.push({ type: "NAME", index: r4, value: i2 }), r4 = a3;
                  continue;
                }
                if ("(" === n3) {
                  var s3 = 1, l2 = "", a3 = r4 + 1;
                  if ("?" === e4[a3]) throw TypeError('Pattern cannot start with "?" at '.concat(a3));
                  for (; a3 < e4.length; ) {
                    if ("\\" === e4[a3]) {
                      l2 += e4[a3++] + e4[a3++];
                      continue;
                    }
                    if (")" === e4[a3]) {
                      if (0 == --s3) {
                        a3++;
                        break;
                      }
                    } else if ("(" === e4[a3] && (s3++, "?" !== e4[a3 + 1])) throw TypeError("Capturing groups are not allowed at ".concat(a3));
                    l2 += e4[a3++];
                  }
                  if (s3) throw TypeError("Unbalanced pattern at ".concat(r4));
                  if (!l2) throw TypeError("Missing pattern at ".concat(r4));
                  t4.push({ type: "PATTERN", index: r4, value: l2 }), r4 = a3;
                  continue;
                }
                t4.push({ type: "CHAR", index: r4, value: e4[r4++] });
              }
              return t4.push({ type: "END", index: r4, value: "" }), t4;
            }(e3), n2 = t3.prefixes, a2 = void 0 === n2 ? "./" : n2, o2 = t3.delimiter, s2 = void 0 === o2 ? "/#?" : o2, l = [], u = 0, c = 0, d = "", h = function(e4) {
              if (c < r3.length && r3[c].type === e4) return r3[c++].value;
            }, f = function(e4) {
              var t4 = h(e4);
              if (void 0 !== t4) return t4;
              var n3 = r3[c], i2 = n3.type, a3 = n3.index;
              throw TypeError("Unexpected ".concat(i2, " at ").concat(a3, ", expected ").concat(e4));
            }, p = function() {
              for (var e4, t4 = ""; e4 = h("CHAR") || h("ESCAPED_CHAR"); ) t4 += e4;
              return t4;
            }, g = function(e4) {
              for (var t4 = 0; t4 < s2.length; t4++) {
                var r4 = s2[t4];
                if (e4.indexOf(r4) > -1) return true;
              }
              return false;
            }, _ = function(e4) {
              var t4 = l[l.length - 1], r4 = e4 || (t4 && "string" == typeof t4 ? t4 : "");
              if (t4 && !r4) throw TypeError('Must have text between two parameters, missing text after "'.concat(t4.name, '"'));
              return !r4 || g(r4) ? "[^".concat(i(s2), "]+?") : "(?:(?!".concat(i(r4), ")[^").concat(i(s2), "])+?");
            }; c < r3.length; ) {
              var m = h("CHAR"), y = h("NAME"), v = h("PATTERN");
              if (y || v) {
                var b = m || "";
                -1 === a2.indexOf(b) && (d += b, b = ""), d && (l.push(d), d = ""), l.push({ name: y || u++, prefix: b, suffix: "", pattern: v || _(b), modifier: h("MODIFIER") || "" });
                continue;
              }
              var w = m || h("ESCAPED_CHAR");
              if (w) {
                d += w;
                continue;
              }
              if (d && (l.push(d), d = ""), h("OPEN")) {
                var b = p(), E = h("NAME") || "", S = h("PATTERN") || "", C = p();
                f("CLOSE"), l.push({ name: E || (S ? u++ : ""), pattern: E && !S ? _(b) : S, prefix: b, suffix: C, modifier: h("MODIFIER") || "" });
                continue;
              }
              f("END");
            }
            return l;
          }
          function r2(e3, t3) {
            void 0 === t3 && (t3 = {});
            var r3 = a(t3), n2 = t3.encode, i2 = void 0 === n2 ? function(e4) {
              return e4;
            } : n2, o2 = t3.validate, s2 = void 0 === o2 || o2, l = e3.map(function(e4) {
              if ("object" == typeof e4) return new RegExp("^(?:".concat(e4.pattern, ")$"), r3);
            });
            return function(t4) {
              for (var r4 = "", n3 = 0; n3 < e3.length; n3++) {
                var a2 = e3[n3];
                if ("string" == typeof a2) {
                  r4 += a2;
                  continue;
                }
                var o3 = t4 ? t4[a2.name] : void 0, u = "?" === a2.modifier || "*" === a2.modifier, c = "*" === a2.modifier || "+" === a2.modifier;
                if (Array.isArray(o3)) {
                  if (!c) throw TypeError('Expected "'.concat(a2.name, '" to not repeat, but got an array'));
                  if (0 === o3.length) {
                    if (u) continue;
                    throw TypeError('Expected "'.concat(a2.name, '" to not be empty'));
                  }
                  for (var d = 0; d < o3.length; d++) {
                    var h = i2(o3[d], a2);
                    if (s2 && !l[n3].test(h)) throw TypeError('Expected all "'.concat(a2.name, '" to match "').concat(a2.pattern, '", but got "').concat(h, '"'));
                    r4 += a2.prefix + h + a2.suffix;
                  }
                  continue;
                }
                if ("string" == typeof o3 || "number" == typeof o3) {
                  var h = i2(String(o3), a2);
                  if (s2 && !l[n3].test(h)) throw TypeError('Expected "'.concat(a2.name, '" to match "').concat(a2.pattern, '", but got "').concat(h, '"'));
                  r4 += a2.prefix + h + a2.suffix;
                  continue;
                }
                if (!u) {
                  var f = c ? "an array" : "a string";
                  throw TypeError('Expected "'.concat(a2.name, '" to be ').concat(f));
                }
              }
              return r4;
            };
          }
          function n(e3, t3, r3) {
            void 0 === r3 && (r3 = {});
            var n2 = r3.decode, i2 = void 0 === n2 ? function(e4) {
              return e4;
            } : n2;
            return function(r4) {
              var n3 = e3.exec(r4);
              if (!n3) return false;
              for (var a2 = n3[0], o2 = n3.index, s2 = /* @__PURE__ */ Object.create(null), l = 1; l < n3.length; l++) !function(e4) {
                if (void 0 !== n3[e4]) {
                  var r5 = t3[e4 - 1];
                  "*" === r5.modifier || "+" === r5.modifier ? s2[r5.name] = n3[e4].split(r5.prefix + r5.suffix).map(function(e5) {
                    return i2(e5, r5);
                  }) : s2[r5.name] = i2(n3[e4], r5);
                }
              }(l);
              return { path: a2, index: o2, params: s2 };
            };
          }
          function i(e3) {
            return e3.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
          }
          function a(e3) {
            return e3 && e3.sensitive ? "" : "i";
          }
          function o(e3, t3, r3) {
            void 0 === r3 && (r3 = {});
            for (var n2 = r3.strict, o2 = void 0 !== n2 && n2, s2 = r3.start, l = r3.end, u = r3.encode, c = void 0 === u ? function(e4) {
              return e4;
            } : u, d = r3.delimiter, h = r3.endsWith, f = "[".concat(i(void 0 === h ? "" : h), "]|$"), p = "[".concat(i(void 0 === d ? "/#?" : d), "]"), g = void 0 === s2 || s2 ? "^" : "", _ = 0; _ < e3.length; _++) {
              var m = e3[_];
              if ("string" == typeof m) g += i(c(m));
              else {
                var y = i(c(m.prefix)), v = i(c(m.suffix));
                if (m.pattern) if (t3 && t3.push(m), y || v) if ("+" === m.modifier || "*" === m.modifier) {
                  var b = "*" === m.modifier ? "?" : "";
                  g += "(?:".concat(y, "((?:").concat(m.pattern, ")(?:").concat(v).concat(y, "(?:").concat(m.pattern, "))*)").concat(v, ")").concat(b);
                } else g += "(?:".concat(y, "(").concat(m.pattern, ")").concat(v, ")").concat(m.modifier);
                else {
                  if ("+" === m.modifier || "*" === m.modifier) throw TypeError('Can not repeat "'.concat(m.name, '" without a prefix and suffix'));
                  g += "(".concat(m.pattern, ")").concat(m.modifier);
                }
                else g += "(?:".concat(y).concat(v, ")").concat(m.modifier);
              }
            }
            if (void 0 === l || l) o2 || (g += "".concat(p, "?")), g += r3.endsWith ? "(?=".concat(f, ")") : "$";
            else {
              var w = e3[e3.length - 1], E = "string" == typeof w ? p.indexOf(w[w.length - 1]) > -1 : void 0 === w;
              o2 || (g += "(?:".concat(p, "(?=").concat(f, "))?")), E || (g += "(?=".concat(p, "|").concat(f, ")"));
            }
            return new RegExp(g, a(r3));
          }
          function s(e3, r3, n2) {
            if (e3 instanceof RegExp) {
              var i2;
              if (!r3) return e3;
              for (var l = /\((?:\?<(.*?)>)?(?!\?)/g, u = 0, c = l.exec(e3.source); c; ) r3.push({ name: c[1] || u++, prefix: "", suffix: "", modifier: "", pattern: "" }), c = l.exec(e3.source);
              return e3;
            }
            return Array.isArray(e3) ? (i2 = e3.map(function(e4) {
              return s(e4, r3, n2).source;
            }), new RegExp("(?:".concat(i2.join("|"), ")"), a(n2))) : o(t2(e3, n2), r3, n2);
          }
          Object.defineProperty(e2, "__esModule", { value: true }), e2.pathToRegexp = e2.tokensToRegexp = e2.regexpToFunction = e2.match = e2.tokensToFunction = e2.compile = e2.parse = void 0, e2.parse = t2, e2.compile = function(e3, n2) {
            return r2(t2(e3, n2), n2);
          }, e2.tokensToFunction = r2, e2.match = function(e3, t3) {
            var r3 = [];
            return n(s(e3, r3, t3), r3, t3);
          }, e2.regexpToFunction = n, e2.tokensToRegexp = o, e2.pathToRegexp = s;
        })(), t.exports = e2;
      })();
    }, 32670, (e, t, r) => {
      var n = { 226: function(t2, r2) {
        !function(n2) {
          "use strict";
          var i2 = "function", a2 = "undefined", o = "object", s = "string", l = "major", u = "model", c = "name", d = "type", h = "vendor", f = "version", p = "architecture", g = "console", _ = "mobile", m = "tablet", y = "smarttv", v = "wearable", b = "embedded", w = "Amazon", E = "Apple", S = "ASUS", C = "BlackBerry", T = "Browser", R = "Chrome", P = "Firefox", x = "Google", O = "Huawei", A = "Microsoft", N = "Motorola", I = "Opera", k = "Samsung", L = "Sharp", M = "Sony", D = "Xiaomi", B = "Zebra", H = "Facebook", j = "Chromium OS", U = "Mac OS", $ = function(e2, t3) {
            var r3 = {};
            for (var n3 in e2) t3[n3] && t3[n3].length % 2 == 0 ? r3[n3] = t3[n3].concat(e2[n3]) : r3[n3] = e2[n3];
            return r3;
          }, G = function(e2) {
            for (var t3 = {}, r3 = 0; r3 < e2.length; r3++) t3[e2[r3].toUpperCase()] = e2[r3];
            return t3;
          }, q = function(e2, t3) {
            return typeof e2 === s && -1 !== F(t3).indexOf(F(e2));
          }, F = function(e2) {
            return e2.toLowerCase();
          }, V = function(e2, t3) {
            if (typeof e2 === s) return e2 = e2.replace(/^\s\s*/, ""), typeof t3 === a2 ? e2 : e2.substring(0, 350);
          }, z = function(e2, t3) {
            for (var r3, n3, a3, s2, l2, u2, c2 = 0; c2 < t3.length && !l2; ) {
              var d2 = t3[c2], h2 = t3[c2 + 1];
              for (r3 = n3 = 0; r3 < d2.length && !l2 && d2[r3]; ) if (l2 = d2[r3++].exec(e2)) for (a3 = 0; a3 < h2.length; a3++) u2 = l2[++n3], typeof (s2 = h2[a3]) === o && s2.length > 0 ? 2 === s2.length ? typeof s2[1] == i2 ? this[s2[0]] = s2[1].call(this, u2) : this[s2[0]] = s2[1] : 3 === s2.length ? typeof s2[1] !== i2 || s2[1].exec && s2[1].test ? this[s2[0]] = u2 ? u2.replace(s2[1], s2[2]) : void 0 : this[s2[0]] = u2 ? s2[1].call(this, u2, s2[2]) : void 0 : 4 === s2.length && (this[s2[0]] = u2 ? s2[3].call(this, u2.replace(s2[1], s2[2])) : void 0) : this[s2] = u2 || void 0;
              c2 += 2;
            }
          }, K = function(e2, t3) {
            for (var r3 in t3) if (typeof t3[r3] === o && t3[r3].length > 0) {
              for (var n3 = 0; n3 < t3[r3].length; n3++) if (q(t3[r3][n3], e2)) return "?" === r3 ? void 0 : r3;
            } else if (q(t3[r3], e2)) return "?" === r3 ? void 0 : r3;
            return e2;
          }, X = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, W = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [f, [c, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [f, [c, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [c, f], [/opios[\/ ]+([\w\.]+)/i], [f, [c, I + " Mini"]], [/\bopr\/([\w\.]+)/i], [f, [c, I]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [c, f], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [f, [c, "UC" + T]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [f, [c, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [f, [c, "WeChat"]], [/konqueror\/([\w\.]+)/i], [f, [c, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [f, [c, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [f, [c, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[c, /(.+)/, "$1 Secure " + T], f], [/\bfocus\/([\w\.]+)/i], [f, [c, P + " Focus"]], [/\bopt\/([\w\.]+)/i], [f, [c, I + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [f, [c, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [f, [c, "Dolphin"]], [/coast\/([\w\.]+)/i], [f, [c, I + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [f, [c, "MIUI " + T]], [/fxios\/([-\w\.]+)/i], [f, [c, P]], [/\bqihu|(qi?ho?o?|360)browser/i], [[c, "360 " + T]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[c, /(.+)/, "$1 " + T], f], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], f], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [c, f], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [c], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[c, H], f], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [c, f], [/\bgsa\/([\w\.]+) .*safari\//i], [f, [c, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [f, [c, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [f, [c, R + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[c, R + " WebView"], f], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [f, [c, "Android " + T]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [c, f], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [f, [c, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [f, c], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [c, [f, K, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [c, f], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[c, "Netscape"], f], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [f, [c, P + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [c, f], [/(cobalt)\/([\w\.]+)/i], [c, [f, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[p, "amd64"]], [/(ia32(?=;))/i], [[p, F]], [/((?:i[346]|x)86)[;\)]/i], [[p, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[p, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[p, "armhf"]], [/windows (ce|mobile); ppc;/i], [[p, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[p, /ower/, "", F]], [/(sun4\w)[;\)]/i], [[p, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[p, F]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [h, k], [d, m]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [h, k], [d, _]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [u, [h, E], [d, _]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [h, E], [d, m]], [/(macintosh);/i], [u, [h, E]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [h, L], [d, _]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [h, O], [d, m]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [u, [h, O], [d, _]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [h, D], [d, _]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [h, D], [d, m]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [h, "OPPO"], [d, _]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [h, "Vivo"], [d, _]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [h, "Realme"], [d, _]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [h, N], [d, _]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [h, N], [d, m]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [h, "LG"], [d, m]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [h, "LG"], [d, _]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [h, "Lenovo"], [d, m]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [h, "Nokia"], [d, _]], [/(pixel c)\b/i], [u, [h, x], [d, m]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [h, x], [d, _]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [h, M], [d, _]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [h, M], [d, m]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [h, "OnePlus"], [d, _]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [h, w], [d, m]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [h, w], [d, _]], [/(playbook);[-\w\),; ]+(rim)/i], [u, h, [d, m]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [h, C], [d, _]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [h, S], [d, m]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [h, S], [d, _]], [/(nexus 9)/i], [u, [h, "HTC"], [d, m]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [u, /_/g, " "], [d, _]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [h, "Acer"], [d, m]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [h, "Meizu"], [d, _]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, u, [d, _]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, u, [d, m]], [/(surface duo)/i], [u, [h, A], [d, m]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [h, "Fairphone"], [d, _]], [/(u304aa)/i], [u, [h, "AT&T"], [d, _]], [/\bsie-(\w*)/i], [u, [h, "Siemens"], [d, _]], [/\b(rct\w+) b/i], [u, [h, "RCA"], [d, m]], [/\b(venue[\d ]{2,7}) b/i], [u, [h, "Dell"], [d, m]], [/\b(q(?:mv|ta)\w+) b/i], [u, [h, "Verizon"], [d, m]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [h, "Barnes & Noble"], [d, m]], [/\b(tm\d{3}\w+) b/i], [u, [h, "NuVision"], [d, m]], [/\b(k88) b/i], [u, [h, "ZTE"], [d, m]], [/\b(nx\d{3}j) b/i], [u, [h, "ZTE"], [d, _]], [/\b(gen\d{3}) b.+49h/i], [u, [h, "Swiss"], [d, _]], [/\b(zur\d{3}) b/i], [u, [h, "Swiss"], [d, m]], [/\b((zeki)?tb.*\b) b/i], [u, [h, "Zeki"], [d, m]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], u, [d, m]], [/\b(ns-?\w{0,9}) b/i], [u, [h, "Insignia"], [d, m]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [h, "NextBook"], [d, m]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], u, [d, _]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], u, [d, _]], [/\b(ph-1) /i], [u, [h, "Essential"], [d, _]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [h, "Envizen"], [d, m]], [/\b(trio[-\w\. ]+) b/i], [u, [h, "MachSpeed"], [d, m]], [/\btu_(1491) b/i], [u, [h, "Rotor"], [d, m]], [/(shield[\w ]+) b/i], [u, [h, "Nvidia"], [d, m]], [/(sprint) (\w+)/i], [h, u, [d, _]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [h, A], [d, _]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [h, B], [d, m]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [h, B], [d, _]], [/smart-tv.+(samsung)/i], [h, [d, y]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [h, k], [d, y]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, "LG"], [d, y]], [/(apple) ?tv/i], [h, [u, E + " TV"], [d, y]], [/crkey/i], [[u, R + "cast"], [h, x], [d, y]], [/droid.+aft(\w)( bui|\))/i], [u, [h, w], [d, y]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [u, [h, L], [d, y]], [/(bravia[\w ]+)( bui|\))/i], [u, [h, M], [d, y]], [/(mitv-\w{5}) bui/i], [u, [h, D], [d, y]], [/Hbbtv.*(technisat) (.*);/i], [h, u, [d, y]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, V], [u, V], [d, y]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, y]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, u, [d, g]], [/droid.+; (shield) bui/i], [u, [h, "Nvidia"], [d, g]], [/(playstation [345portablevi]+)/i], [u, [h, M], [d, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [h, A], [d, g]], [/((pebble))app/i], [h, u, [d, v]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [u, [h, E], [d, v]], [/droid.+; (glass) \d/i], [u, [h, x], [d, v]], [/droid.+; (wt63?0{2,3})\)/i], [u, [h, B], [d, v]], [/(quest( 2| pro)?)/i], [u, [h, H], [d, v]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [d, b]], [/(aeobc)\b/i], [u, [h, w], [d, b]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [d, _]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [d, m]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, m]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[d, _]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [h, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [f, [c, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [f, [c, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [c, f], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [f, c]], os: [[/microsoft (windows) (vista|xp)/i], [c, f], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [c, [f, K, X]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[c, "Windows"], [f, K, X]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[f, /_/g, "."], [c, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[c, U], [f, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [f, c], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [c, f], [/\(bb(10);/i], [f, [c, C]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [f, [c, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [f, [c, P + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [f, [c, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [f, [c, "watchOS"]], [/crkey\/([\d\.]+)/i], [f, [c, R + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[c, j], f], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [c, f], [/(sunos) ?([\w\.\d]*)/i], [[c, "Solaris"], f], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [c, f]] }, Y = function(e2, t3) {
            if (typeof e2 === o && (t3 = e2, e2 = void 0), !(this instanceof Y)) return new Y(e2, t3).getResult();
            var r3 = typeof n2 !== a2 && n2.navigator ? n2.navigator : void 0, g2 = e2 || (r3 && r3.userAgent ? r3.userAgent : ""), y2 = r3 && r3.userAgentData ? r3.userAgentData : void 0, v2 = t3 ? $(W, t3) : W, b2 = r3 && r3.userAgent == g2;
            return this.getBrowser = function() {
              var e3, t4 = {};
              return t4[c] = void 0, t4[f] = void 0, z.call(t4, g2, v2.browser), t4[l] = typeof (e3 = t4[f]) === s ? e3.replace(/[^\d\.]/g, "").split(".")[0] : void 0, b2 && r3 && r3.brave && typeof r3.brave.isBrave == i2 && (t4[c] = "Brave"), t4;
            }, this.getCPU = function() {
              var e3 = {};
              return e3[p] = void 0, z.call(e3, g2, v2.cpu), e3;
            }, this.getDevice = function() {
              var e3 = {};
              return e3[h] = void 0, e3[u] = void 0, e3[d] = void 0, z.call(e3, g2, v2.device), b2 && !e3[d] && y2 && y2.mobile && (e3[d] = _), b2 && "Macintosh" == e3[u] && r3 && typeof r3.standalone !== a2 && r3.maxTouchPoints && r3.maxTouchPoints > 2 && (e3[u] = "iPad", e3[d] = m), e3;
            }, this.getEngine = function() {
              var e3 = {};
              return e3[c] = void 0, e3[f] = void 0, z.call(e3, g2, v2.engine), e3;
            }, this.getOS = function() {
              var e3 = {};
              return e3[c] = void 0, e3[f] = void 0, z.call(e3, g2, v2.os), b2 && !e3[c] && y2 && "Unknown" != y2.platform && (e3[c] = y2.platform.replace(/chrome os/i, j).replace(/macos/i, U)), e3;
            }, this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            }, this.getUA = function() {
              return g2;
            }, this.setUA = function(e3) {
              return g2 = typeof e3 === s && e3.length > 350 ? V(e3, 350) : e3, this;
            }, this.setUA(g2), this;
          };
          if (Y.VERSION = "1.0.35", Y.BROWSER = G([c, f, l]), Y.CPU = G([p]), Y.DEVICE = G([u, h, d, g, _, y, m, v, b]), Y.ENGINE = Y.OS = G([c, f]), typeof r2 !== a2) t2.exports && (r2 = t2.exports = Y), r2.UAParser = Y;
          else if (typeof define === i2 && define.amd) e.r, void 0 !== Y && e.v(Y);
          else typeof n2 !== a2 && (n2.UAParser = Y);
          var Z = typeof n2 !== a2 && (n2.jQuery || n2.Zepto);
          if (Z && !Z.ua) {
            var J = new Y();
            Z.ua = J.getResult(), Z.ua.get = function() {
              return J.getUA();
            }, Z.ua.set = function(e2) {
              J.setUA(e2);
              var t3 = J.getResult();
              for (var r3 in t3) Z.ua[r3] = t3[r3];
            };
          }
        }(this);
      } }, i = {};
      function a(e2) {
        var t2 = i[e2];
        if (void 0 !== t2) return t2.exports;
        var r2 = i[e2] = { exports: {} }, o = true;
        try {
          n[e2].call(r2.exports, r2, r2.exports, a), o = false;
        } finally {
          o && delete i[e2];
        }
        return r2.exports;
      }
      a.ab = "/ROOT/node_modules/.pnpm/next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/ua-parser-js/", t.exports = a(226);
    }, 40943, (e, t, r) => {
      "use strict";
      var n = { H: null, A: null };
      function i(e2) {
        var t2 = "https://react.dev/errors/" + e2;
        if (1 < arguments.length) {
          t2 += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var r2 = 2; r2 < arguments.length; r2++) t2 += "&args[]=" + encodeURIComponent(arguments[r2]);
        }
        return "Minified React error #" + e2 + "; visit " + t2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var a = Array.isArray;
      function o() {
      }
      var s = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), h = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), m = Symbol.for("react.view_transition"), y = Symbol.iterator, v = Object.prototype.hasOwnProperty, b = Object.assign;
      function w(e2, t2, r2) {
        var n2 = r2.ref;
        return { $$typeof: s, type: e2, key: t2, ref: void 0 !== n2 ? n2 : null, props: r2 };
      }
      function E(e2) {
        return "object" == typeof e2 && null !== e2 && e2.$$typeof === s;
      }
      var S = /\/+/g;
      function C(e2, t2) {
        var r2, n2;
        return "object" == typeof e2 && null !== e2 && null != e2.key ? (r2 = "" + e2.key, n2 = { "=": "=0", ":": "=2" }, "$" + r2.replace(/[=:]/g, function(e3) {
          return n2[e3];
        })) : t2.toString(36);
      }
      function T(e2, t2, r2) {
        if (null == e2) return e2;
        var n2 = [], u2 = 0;
        return !function e3(t3, r3, n3, u3, c2) {
          var d2, h2, f2, p2 = typeof t3;
          ("undefined" === p2 || "boolean" === p2) && (t3 = null);
          var _2 = false;
          if (null === t3) _2 = true;
          else switch (p2) {
            case "bigint":
            case "string":
            case "number":
              _2 = true;
              break;
            case "object":
              switch (t3.$$typeof) {
                case s:
                case l:
                  _2 = true;
                  break;
                case g:
                  return e3((_2 = t3._init)(t3._payload), r3, n3, u3, c2);
              }
          }
          if (_2) return c2 = c2(t3), _2 = "" === u3 ? "." + C(t3, 0) : u3, a(c2) ? (n3 = "", null != _2 && (n3 = _2.replace(S, "$&/") + "/"), e3(c2, r3, n3, "", function(e4) {
            return e4;
          })) : null != c2 && (E(c2) && (d2 = c2, h2 = n3 + (null == c2.key || t3 && t3.key === c2.key ? "" : ("" + c2.key).replace(S, "$&/") + "/") + _2, c2 = w(d2.type, h2, d2.props)), r3.push(c2)), 1;
          _2 = 0;
          var m2 = "" === u3 ? "." : u3 + ":";
          if (a(t3)) for (var v2 = 0; v2 < t3.length; v2++) p2 = m2 + C(u3 = t3[v2], v2), _2 += e3(u3, r3, n3, p2, c2);
          else if ("function" == typeof (v2 = null === (f2 = t3) || "object" != typeof f2 ? null : "function" == typeof (f2 = y && f2[y] || f2["@@iterator"]) ? f2 : null)) for (t3 = v2.call(t3), v2 = 0; !(u3 = t3.next()).done; ) p2 = m2 + C(u3 = u3.value, v2++), _2 += e3(u3, r3, n3, p2, c2);
          else if ("object" === p2) {
            if ("function" == typeof t3.then) return e3(function(e4) {
              switch (e4.status) {
                case "fulfilled":
                  return e4.value;
                case "rejected":
                  throw e4.reason;
                default:
                  switch ("string" == typeof e4.status ? e4.then(o, o) : (e4.status = "pending", e4.then(function(t4) {
                    "pending" === e4.status && (e4.status = "fulfilled", e4.value = t4);
                  }, function(t4) {
                    "pending" === e4.status && (e4.status = "rejected", e4.reason = t4);
                  })), e4.status) {
                    case "fulfilled":
                      return e4.value;
                    case "rejected":
                      throw e4.reason;
                  }
              }
              throw e4;
            }(t3), r3, n3, u3, c2);
            throw Error(i(31, "[object Object]" === (r3 = String(t3)) ? "object with keys {" + Object.keys(t3).join(", ") + "}" : r3));
          }
          return _2;
        }(e2, n2, "", "", function(e3) {
          return t2.call(r2, e3, u2++);
        }), n2;
      }
      function R(e2) {
        if (-1 === e2._status) {
          var t2 = (0, e2._result)();
          t2.then(function(r2) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 1, e2._result = r2, void 0 === t2.status && (t2.status = "fulfilled", t2.value = r2));
          }, function(r2) {
            (0 === e2._status || -1 === e2._status) && (e2._status = 2, e2._result = r2, void 0 === t2.status && (t2.status = "rejected", t2.reason = r2));
          }), -1 === e2._status && (e2._status = 0, e2._result = t2);
        }
        if (1 === e2._status) return e2._result.default;
        throw e2._result;
      }
      function P() {
        return /* @__PURE__ */ new WeakMap();
      }
      function x() {
        return { s: 0, v: void 0, o: null, p: null };
      }
      r.Activity = _, r.Children = { map: T, forEach: function(e2, t2, r2) {
        T(e2, function() {
          t2.apply(this, arguments);
        }, r2);
      }, count: function(e2) {
        var t2 = 0;
        return T(e2, function() {
          t2++;
        }), t2;
      }, toArray: function(e2) {
        return T(e2, function(e3) {
          return e3;
        }) || [];
      }, only: function(e2) {
        if (!E(e2)) throw Error(i(143));
        return e2;
      } }, r.Fragment = u, r.Profiler = d, r.StrictMode = c, r.Suspense = f, r.ViewTransition = m, r.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, r.cache = function(e2) {
        return function() {
          var t2 = n.A;
          if (!t2) return e2.apply(null, arguments);
          var r2 = t2.getCacheForType(P);
          void 0 === (t2 = r2.get(e2)) && (t2 = x(), r2.set(e2, t2)), r2 = 0;
          for (var i2 = arguments.length; r2 < i2; r2++) {
            var a2 = arguments[r2];
            if ("function" == typeof a2 || "object" == typeof a2 && null !== a2) {
              var o2 = t2.o;
              null === o2 && (t2.o = o2 = /* @__PURE__ */ new WeakMap()), void 0 === (t2 = o2.get(a2)) && (t2 = x(), o2.set(a2, t2));
            } else null === (o2 = t2.p) && (t2.p = o2 = /* @__PURE__ */ new Map()), void 0 === (t2 = o2.get(a2)) && (t2 = x(), o2.set(a2, t2));
          }
          if (1 === t2.s) return t2.v;
          if (2 === t2.s) throw t2.v;
          try {
            var s2 = e2.apply(null, arguments);
            return (r2 = t2).s = 1, r2.v = s2;
          } catch (e3) {
            throw (s2 = t2).s = 2, s2.v = e3, e3;
          }
        };
      }, r.cacheSignal = function() {
        var e2 = n.A;
        return e2 ? e2.cacheSignal() : null;
      }, r.captureOwnerStack = function() {
        return null;
      }, r.cloneElement = function(e2, t2, r2) {
        if (null == e2) throw Error(i(267, e2));
        var n2 = b({}, e2.props), a2 = e2.key;
        if (null != t2) for (o2 in void 0 !== t2.key && (a2 = "" + t2.key), t2) v.call(t2, o2) && "key" !== o2 && "__self" !== o2 && "__source" !== o2 && ("ref" !== o2 || void 0 !== t2.ref) && (n2[o2] = t2[o2]);
        var o2 = arguments.length - 2;
        if (1 === o2) n2.children = r2;
        else if (1 < o2) {
          for (var s2 = Array(o2), l2 = 0; l2 < o2; l2++) s2[l2] = arguments[l2 + 2];
          n2.children = s2;
        }
        return w(e2.type, a2, n2);
      }, r.createElement = function(e2, t2, r2) {
        var n2, i2 = {}, a2 = null;
        if (null != t2) for (n2 in void 0 !== t2.key && (a2 = "" + t2.key), t2) v.call(t2, n2) && "key" !== n2 && "__self" !== n2 && "__source" !== n2 && (i2[n2] = t2[n2]);
        var o2 = arguments.length - 2;
        if (1 === o2) i2.children = r2;
        else if (1 < o2) {
          for (var s2 = Array(o2), l2 = 0; l2 < o2; l2++) s2[l2] = arguments[l2 + 2];
          i2.children = s2;
        }
        if (e2 && e2.defaultProps) for (n2 in o2 = e2.defaultProps) void 0 === i2[n2] && (i2[n2] = o2[n2]);
        return w(e2, a2, i2);
      }, r.createRef = function() {
        return { current: null };
      }, r.forwardRef = function(e2) {
        return { $$typeof: h, render: e2 };
      }, r.isValidElement = E, r.lazy = function(e2) {
        return { $$typeof: g, _payload: { _status: -1, _result: e2 }, _init: R };
      }, r.memo = function(e2, t2) {
        return { $$typeof: p, type: e2, compare: void 0 === t2 ? null : t2 };
      }, r.use = function(e2) {
        return n.H.use(e2);
      }, r.useCallback = function(e2, t2) {
        return n.H.useCallback(e2, t2);
      }, r.useDebugValue = function() {
      }, r.useId = function() {
        return n.H.useId();
      }, r.useMemo = function(e2, t2) {
        return n.H.useMemo(e2, t2);
      }, r.version = "19.3.0-canary-3f0b9e61-20260317";
    }, 26942, (e, t, r) => {
      "use strict";
      t.exports = e.r(40943);
    }, 58447, (e, t, r) => {
      "use strict";
      t.exports = i, t.exports.preferredCharsets = i;
      var n = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
      function i(e2, t2) {
        var r2 = function(e3) {
          for (var t3 = e3.split(","), r3 = 0, i3 = 0; r3 < t3.length; r3++) {
            var a2 = function(e4, t4) {
              var r4 = n.exec(e4);
              if (!r4) return null;
              var i4 = r4[1], a3 = 1;
              if (r4[2]) for (var o2 = r4[2].split(";"), s2 = 0; s2 < o2.length; s2++) {
                var l = o2[s2].trim().split("=");
                if ("q" === l[0]) {
                  a3 = parseFloat(l[1]);
                  break;
                }
              }
              return { charset: i4, q: a3, i: t4 };
            }(t3[r3].trim(), r3);
            a2 && (t3[i3++] = a2);
          }
          return t3.length = i3, t3;
        }(void 0 === e2 ? "*" : e2 || "");
        if (!t2) return r2.filter(s).sort(a).map(o);
        var i2 = t2.map(function(e3, t3) {
          for (var n2 = { o: -1, q: 0, s: 0 }, i3 = 0; i3 < r2.length; i3++) {
            var a2 = function(e4, t4, r3) {
              var n3 = 0;
              if (t4.charset.toLowerCase() === e4.toLowerCase()) n3 |= 1;
              else if ("*" !== t4.charset) return null;
              return { i: r3, o: t4.i, q: t4.q, s: n3 };
            }(e3, r2[i3], t3);
            a2 && 0 > (n2.s - a2.s || n2.q - a2.q || n2.o - a2.o) && (n2 = a2);
          }
          return n2;
        });
        return i2.filter(s).sort(a).map(function(e3) {
          return t2[i2.indexOf(e3)];
        });
      }
      function a(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i || 0;
      }
      function o(e2) {
        return e2.charset;
      }
      function s(e2) {
        return e2.q > 0;
      }
    }, 65072, (e, t, r) => {
      "use strict";
      t.exports = a, t.exports.preferredEncodings = a;
      var n = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
      function i(e2, t2, r2) {
        var n2 = 0;
        if (t2.encoding.toLowerCase() === e2.toLowerCase()) n2 |= 1;
        else if ("*" !== t2.encoding) return null;
        return { encoding: e2, i: r2, o: t2.i, q: t2.q, s: n2 };
      }
      function a(e2, t2, r2) {
        var a2 = function(e3) {
          for (var t3 = e3.split(","), r3 = false, a3 = 1, o2 = 0, s2 = 0; o2 < t3.length; o2++) {
            var l2 = function(e4, t4) {
              var r4 = n.exec(e4);
              if (!r4) return null;
              var i2 = r4[1], a4 = 1;
              if (r4[2]) for (var o3 = r4[2].split(";"), s3 = 0; s3 < o3.length; s3++) {
                var l3 = o3[s3].trim().split("=");
                if ("q" === l3[0]) {
                  a4 = parseFloat(l3[1]);
                  break;
                }
              }
              return { encoding: i2, q: a4, i: t4 };
            }(t3[o2].trim(), o2);
            l2 && (t3[s2++] = l2, r3 = r3 || i("identity", l2), a3 = Math.min(a3, l2.q || 1));
          }
          return r3 || (t3[s2++] = { encoding: "identity", q: a3, i: o2 }), t3.length = s2, t3;
        }(e2 || ""), u = r2 ? function(e3, t3) {
          if (e3.q !== t3.q) return t3.q - e3.q;
          var n2 = r2.indexOf(e3.encoding), i2 = r2.indexOf(t3.encoding);
          return -1 === n2 && -1 === i2 ? t3.s - e3.s || e3.o - t3.o || e3.i - t3.i : -1 !== n2 && -1 !== i2 ? n2 - i2 : -1 === n2 ? 1 : -1;
        } : o;
        if (!t2) return a2.filter(l).sort(u).map(s);
        var c = t2.map(function(e3, t3) {
          for (var r3 = { encoding: e3, o: -1, q: 0, s: 0 }, n2 = 0; n2 < a2.length; n2++) {
            var o2 = i(e3, a2[n2], t3);
            o2 && 0 > (r3.s - o2.s || r3.q - o2.q || r3.o - o2.o) && (r3 = o2);
          }
          return r3;
        });
        return c.filter(l).sort(u).map(function(e3) {
          return t2[c.indexOf(e3)];
        });
      }
      function o(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i;
      }
      function s(e2) {
        return e2.encoding;
      }
      function l(e2) {
        return e2.q > 0;
      }
    }, 3862, (e, t, r) => {
      "use strict";
      t.exports = a, t.exports.preferredLanguages = a;
      var n = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
      function i(e2, t2) {
        var r2 = n.exec(e2);
        if (!r2) return null;
        var i2 = r2[1], a2 = r2[2], o2 = i2;
        a2 && (o2 += "-" + a2);
        var s2 = 1;
        if (r2[3]) for (var l2 = r2[3].split(";"), u = 0; u < l2.length; u++) {
          var c = l2[u].split("=");
          "q" === c[0] && (s2 = parseFloat(c[1]));
        }
        return { prefix: i2, suffix: a2, q: s2, i: t2, full: o2 };
      }
      function a(e2, t2) {
        var r2 = function(e3) {
          for (var t3 = e3.split(","), r3 = 0, n3 = 0; r3 < t3.length; r3++) {
            var a2 = i(t3[r3].trim(), r3);
            a2 && (t3[n3++] = a2);
          }
          return t3.length = n3, t3;
        }(void 0 === e2 ? "*" : e2 || "");
        if (!t2) return r2.filter(l).sort(o).map(s);
        var n2 = t2.map(function(e3, t3) {
          for (var n3 = { o: -1, q: 0, s: 0 }, a2 = 0; a2 < r2.length; a2++) {
            var o2 = function(e4, t4, r3) {
              var n4 = i(e4);
              if (!n4) return null;
              var a3 = 0;
              if (t4.full.toLowerCase() === n4.full.toLowerCase()) a3 |= 4;
              else if (t4.prefix.toLowerCase() === n4.full.toLowerCase()) a3 |= 2;
              else if (t4.full.toLowerCase() === n4.prefix.toLowerCase()) a3 |= 1;
              else if ("*" !== t4.full) return null;
              return { i: r3, o: t4.i, q: t4.q, s: a3 };
            }(e3, r2[a2], t3);
            o2 && 0 > (n3.s - o2.s || n3.q - o2.q || n3.o - o2.o) && (n3 = o2);
          }
          return n3;
        });
        return n2.filter(l).sort(o).map(function(e3) {
          return t2[n2.indexOf(e3)];
        });
      }
      function o(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i || 0;
      }
      function s(e2) {
        return e2.full;
      }
      function l(e2) {
        return e2.q > 0;
      }
    }, 63597, (e, t, r) => {
      "use strict";
      t.exports = a, t.exports.preferredMediaTypes = a;
      var n = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
      function i(e2, t2) {
        var r2 = n.exec(e2);
        if (!r2) return null;
        var i2 = /* @__PURE__ */ Object.create(null), a2 = 1, o2 = r2[2], s2 = r2[1];
        if (r2[3]) for (var l2 = function(e3) {
          for (var t3 = e3.split(";"), r3 = 1, n2 = 0; r3 < t3.length; r3++) u(t3[n2]) % 2 == 0 ? t3[++n2] = t3[r3] : t3[n2] += ";" + t3[r3];
          t3.length = n2 + 1;
          for (var r3 = 0; r3 < t3.length; r3++) t3[r3] = t3[r3].trim();
          return t3;
        }(r2[3]).map(c), d = 0; d < l2.length; d++) {
          var h = l2[d], f = h[0].toLowerCase(), p = h[1], g = p && '"' === p[0] && '"' === p[p.length - 1] ? p.slice(1, -1) : p;
          if ("q" === f) {
            a2 = parseFloat(g);
            break;
          }
          i2[f] = g;
        }
        return { type: s2, subtype: o2, params: i2, q: a2, i: t2 };
      }
      function a(e2, t2) {
        var r2 = function(e3) {
          for (var t3 = function(e4) {
            for (var t4 = e4.split(","), r4 = 1, n4 = 0; r4 < t4.length; r4++) u(t4[n4]) % 2 == 0 ? t4[++n4] = t4[r4] : t4[n4] += "," + t4[r4];
            return t4.length = n4 + 1, t4;
          }(e3), r3 = 0, n3 = 0; r3 < t3.length; r3++) {
            var a2 = i(t3[r3].trim(), r3);
            a2 && (t3[n3++] = a2);
          }
          return t3.length = n3, t3;
        }(void 0 === e2 ? "*/*" : e2 || "");
        if (!t2) return r2.filter(l).sort(o).map(s);
        var n2 = t2.map(function(e3, t3) {
          for (var n3 = { o: -1, q: 0, s: 0 }, a2 = 0; a2 < r2.length; a2++) {
            var o2 = function(e4, t4, r3) {
              var n4 = i(e4), a3 = 0;
              if (!n4) return null;
              if (t4.type.toLowerCase() == n4.type.toLowerCase()) a3 |= 4;
              else if ("*" != t4.type) return null;
              if (t4.subtype.toLowerCase() == n4.subtype.toLowerCase()) a3 |= 2;
              else if ("*" != t4.subtype) return null;
              var o3 = Object.keys(t4.params);
              if (o3.length > 0) if (!o3.every(function(e5) {
                return "*" == t4.params[e5] || (t4.params[e5] || "").toLowerCase() == (n4.params[e5] || "").toLowerCase();
              })) return null;
              else a3 |= 1;
              return { i: r3, o: t4.i, q: t4.q, s: a3 };
            }(e3, r2[a2], t3);
            o2 && 0 > (n3.s - o2.s || n3.q - o2.q || n3.o - o2.o) && (n3 = o2);
          }
          return n3;
        });
        return n2.filter(l).sort(o).map(function(e3) {
          return t2[n2.indexOf(e3)];
        });
      }
      function o(e2, t2) {
        return t2.q - e2.q || t2.s - e2.s || e2.o - t2.o || e2.i - t2.i || 0;
      }
      function s(e2) {
        return e2.type + "/" + e2.subtype;
      }
      function l(e2) {
        return e2.q > 0;
      }
      function u(e2) {
        for (var t2 = 0, r2 = 0; -1 !== (r2 = e2.indexOf('"', r2)); ) t2++, r2++;
        return t2;
      }
      function c(e2) {
        var t2, r2, n2 = e2.indexOf("=");
        return -1 === n2 ? t2 = e2 : (t2 = e2.slice(0, n2), r2 = e2.slice(n2 + 1)), [t2, r2];
      }
    }, 89881, (e, t, r) => {
      "use strict";
      var n = e.r(58447), i = e.r(65072), a = e.r(3862), o = e.r(63597);
      function s(e2) {
        if (!(this instanceof s)) return new s(e2);
        this.request = e2;
      }
      t.exports = s, t.exports.Negotiator = s, s.prototype.charset = function(e2) {
        var t2 = this.charsets(e2);
        return t2 && t2[0];
      }, s.prototype.charsets = function(e2) {
        return n(this.request.headers["accept-charset"], e2);
      }, s.prototype.encoding = function(e2, t2) {
        var r2 = this.encodings(e2, t2);
        return r2 && r2[0];
      }, s.prototype.encodings = function(e2, t2) {
        return i(this.request.headers["accept-encoding"], e2, (t2 || {}).preferred);
      }, s.prototype.language = function(e2) {
        var t2 = this.languages(e2);
        return t2 && t2[0];
      }, s.prototype.languages = function(e2) {
        return a(this.request.headers["accept-language"], e2);
      }, s.prototype.mediaType = function(e2) {
        var t2 = this.mediaTypes(e2);
        return t2 && t2[0];
      }, s.prototype.mediaTypes = function(e2) {
        return o(this.request.headers.accept, e2);
      }, s.prototype.preferredCharset = s.prototype.charset, s.prototype.preferredCharsets = s.prototype.charsets, s.prototype.preferredEncoding = s.prototype.encoding, s.prototype.preferredEncodings = s.prototype.encodings, s.prototype.preferredLanguage = s.prototype.language, s.prototype.preferredLanguages = s.prototype.languages, s.prototype.preferredMediaType = s.prototype.mediaType, s.prototype.preferredMediaTypes = s.prototype.mediaTypes;
    }, 64852, (e) => {
      "use strict";
      let t = (0, e.i(44064).createAsyncLocalStorage)();
      e.s([], 47251), e.i(47251), e.s(["actionAsyncStorage", 0, t], 64852);
    }, 820, 8502, 17044, 87399, 48057, 55095, 15516, 39357, 72074, 65461, 83329, (e) => {
      "use strict";
      var t, r, n = e.i(44064);
      let i = (0, n.createAsyncLocalStorage)();
      e.s(["workAsyncStorageInstance", 0, i], 8502), e.s([], 820);
      let a = (0, n.createAsyncLocalStorage)();
      e.s(["workUnitAsyncStorageInstance", 0, a], 17044), e.s(["InvariantError", 0, class extends Error {
        constructor(e2, t2) {
          super(`Invariant: ${e2.endsWith(".") ? e2 : e2 + "."} This is a bug in Next.js.`, t2), this.name = "InvariantError";
        }
      }], 87399);
      var o = ((t = {})[t.Before = 1] = "Before", t[t.EarlyStatic = 2] = "EarlyStatic", t[t.Static = 3] = "Static", t[t.EarlyRuntime = 4] = "EarlyRuntime", t[t.Runtime = 5] = "Runtime", t[t.Dynamic = 6] = "Dynamic", t[t.Abandoned = 7] = "Abandoned", t);
      e.s(["RenderStage", 0, o], 48057), e.s(["getPrerenderResumeDataCache", 0, function(e2) {
        switch (e2.type) {
          case "prerender":
          case "prerender-runtime":
          case "prerender-ppr":
          case "prerender-client":
          case "validation-client":
            return e2.prerenderResumeDataCache;
          case "request":
            if (e2.prerenderResumeDataCache) return e2.prerenderResumeDataCache;
          case "prerender-legacy":
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "generate-static-params":
            return null;
          default:
            return e2;
        }
      }, "getRenderResumeDataCache", 0, function(e2) {
        switch (e2.type) {
          case "request":
          case "prerender":
          case "prerender-runtime":
          case "prerender-client":
          case "validation-client":
            if (e2.renderResumeDataCache) return e2.renderResumeDataCache;
          case "prerender-ppr":
            return e2.prerenderResumeDataCache ?? null;
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-legacy":
          case "generate-static-params":
            return null;
          default:
            return e2;
        }
      }, "isInEarlyRenderStage", 0, function(e2) {
        let t2 = e2.stagedRendering;
        return !!t2 && (t2.currentStage === o.EarlyStatic || t2.currentStage === o.EarlyRuntime);
      }, "throwForMissingRequestStore", 0, function(e2) {
        throw Object.defineProperty(Error(`\`${e2}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", { value: "E251", enumerable: false, configurable: true });
      }], 55095);
      var s = e.i(26942);
      let l = "DYNAMIC_SERVER_USAGE";
      class u extends Error {
        constructor(e2) {
          super(`Dynamic server usage: ${e2}`), this.description = e2, this.digest = l;
        }
      }
      e.s(["DynamicServerError", 0, u, "isDynamicServerError", 0, function(e2) {
        return "object" == typeof e2 && null !== e2 && "digest" in e2 && "string" == typeof e2.digest && e2.digest === l;
      }], 15516);
      let c = "function" == typeof s.default.unstable_postpone;
      function d(e2, t2) {
        return `Route ${e2} needs to bail out of prerendering at this point because it used ${t2}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      }
      function h(e2) {
        return e2.includes("needs to bail out of prerendering at this point because it used") && e2.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
      }
      if (false === h(d("%%%", "^^^"))) throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E296", enumerable: false, configurable: true });
      let f = "NEXT_PRERENDER_INTERRUPTED";
      function p(e2) {
        let t2 = Object.defineProperty(Error(e2), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        return t2.digest = f, t2;
      }
      RegExp("\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)"), RegExp("\\n\\s+at __next_metadata_boundary__[\\n\\s]"), RegExp("\\n\\s+at __next_viewport_boundary__[\\n\\s]"), RegExp("\\n\\s+at __next_outlet_boundary__[\\n\\s]"), RegExp("\\n\\s+at __next_instant_validation_boundary__[\\n\\s]"), e.s(["abortAndThrowOnSynchronousRequestDataAccess", 0, function(e2, t2, r2, n2) {
        if (false === n2.controller.signal.aborted) {
          let i2, a2;
          i2 = p(`Route ${e2} needs to bail out of prerendering at this point because it used ${t2}.`), n2.controller.abort(i2), (a2 = n2.dynamicTracking) && a2.dynamicAccesses.push({ stack: a2.isDebugDynamicAccesses ? Error().stack : void 0, expression: t2 });
          let o2 = n2.dynamicTracking;
          o2 && null === o2.syncDynamicErrorWithStack && (o2.syncDynamicErrorWithStack = r2);
        }
        throw p(`Route ${e2} needs to bail out of prerendering at this point because it used ${t2}.`);
      }, "isDynamicPostpone", 0, function(e2) {
        return "object" == typeof e2 && null !== e2 && "string" == typeof e2.message && h(e2.message);
      }, "isPrerenderInterruptedError", 0, function(e2) {
        return "object" == typeof e2 && null !== e2 && e2.digest === f && "name" in e2 && "message" in e2 && e2 instanceof Error;
      }, "postponeWithTracking", 0, function(e2, t2, r2) {
        (function() {
          if (!c) throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E224", enumerable: false, configurable: true });
        })(), r2 && r2.dynamicAccesses.push({ stack: r2.isDebugDynamicAccesses ? Error().stack : void 0, expression: t2 }), s.default.unstable_postpone(d(e2, t2));
      }, "throwToInterruptStaticGeneration", 0, function(e2, t2, r2) {
        let n2 = Object.defineProperty(new u(`Route ${t2.route} couldn't be rendered statically because it used \`${e2}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", { value: "E558", enumerable: false, configurable: true });
        throw r2.revalidate = 0, t2.dynamicUsageDescription = e2, t2.dynamicUsageStack = n2.stack, n2;
      }, "trackDynamicDataInDynamicRender", 0, function(e2) {
        switch (e2.type) {
          case "cache":
          case "unstable-cache":
          case "private-cache":
            return;
        }
      }], 39357);
      var g = ((r = {})[r.SeeOther = 303] = "SeeOther", r[r.TemporaryRedirect = 307] = "TemporaryRedirect", r[r.PermanentRedirect = 308] = "PermanentRedirect", r);
      e.s(["RedirectStatusCode", 0, g], 72074);
      let _ = "NEXT_REDIRECT";
      e.s(["REDIRECT_ERROR_CODE", 0, _, "isRedirectError", 0, function(e2) {
        if ("object" != typeof e2 || null === e2 || !("digest" in e2) || "string" != typeof e2.digest) return false;
        let t2 = e2.digest.split(";"), [r2, n2] = t2, i2 = t2.slice(2, -2).join(";"), a2 = Number(t2.at(-2));
        return r2 === _ && ("replace" === n2 || "push" === n2) && "string" == typeof i2 && !isNaN(a2) && a2 in g;
      }], 65461);
      let m = "HANGING_PROMISE_REJECTION";
      class y extends Error {
        constructor(e2, t2) {
          super(`During prerendering, ${t2} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t2} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e2}".`), this.route = e2, this.expression = t2, this.digest = m;
        }
      }
      let v = /* @__PURE__ */ new WeakMap();
      function b() {
      }
      e.s(["delayUntilRuntimeStage", 0, function(e2, t2) {
        let { stagedRendering: r2 } = e2;
        return r2 ? r2.waitForStage(r2.currentStage === o.EarlyStatic || r2.currentStage === o.EarlyRuntime ? o.EarlyRuntime : o.Runtime).then(() => t2) : t2;
      }, "isHangingPromiseRejectionError", 0, function(e2) {
        return "object" == typeof e2 && null !== e2 && "digest" in e2 && e2.digest === m;
      }, "makeDevtoolsIOAwarePromise", 0, function(e2, t2, r2) {
        return t2.stagedRendering ? t2.stagedRendering.delayUntilStage(r2, void 0, e2) : new Promise((t3) => {
          setTimeout(() => {
            t3(e2);
          }, 0);
        });
      }, "makeHangingPromise", 0, function(e2, t2, r2) {
        if (e2.aborted) return Promise.reject(new y(t2, r2));
        {
          let n2 = new Promise((n3, i2) => {
            let a2 = i2.bind(null, new y(t2, r2)), o2 = v.get(e2);
            if (o2) o2.push(a2);
            else {
              let t3 = [a2];
              v.set(e2, t3), e2.addEventListener("abort", () => {
                for (let e3 = 0; e3 < t3.length; e3++) t3[e3]();
              }, { once: true });
            }
          });
          return n2.catch(b), n2;
        }
      }], 83329);
    }, 22990, (e) => {
      "use strict";
      var t = e.i(83329);
      let r = Symbol.for("react.postpone"), n = new Set(Object.values({ NOT_FOUND: 404, FORBIDDEN: 403, UNAUTHORIZED: 401 }));
      var i = e.i(65461), a = e.i(39357), o = e.i(15516);
      e.s(["unstable_rethrow", 0, function e2(s) {
        if ((0, i.isRedirectError)(s) || function(e3) {
          if ("object" != typeof e3 || null === e3 || !("digest" in e3) || "string" != typeof e3.digest) return false;
          let [t2, r2] = e3.digest.split(";");
          return "NEXT_HTTP_ERROR_FALLBACK" === t2 && n.has(Number(r2));
        }(s) || "object" == typeof s && null !== s && "digest" in s && "BAILOUT_TO_CLIENT_SIDE_RENDERING" === s.digest || (0, o.isDynamicServerError)(s) || (0, a.isDynamicPostpone)(s) || "object" == typeof s && null !== s && s.$$typeof === r || (0, t.isHangingPromiseRejectionError)(s) || (0, a.isPrerenderInterruptedError)(s)) throw s;
        s instanceof Error && "cause" in s && e2(s.cause);
      }], 22990);
    }, 33914, (e, t, r) => {
      "use strict";
      var n = e.r(26942);
      function i() {
      }
      var a = { d: { f: i, r: function() {
        throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
      }, D: i, C: i, L: i, m: i, X: i, S: i, M: i }, p: 0, findDOMNode: null };
      if (!n.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
      function o(e2, t2) {
        return "font" === e2 ? "" : "string" == typeof t2 ? "use-credentials" === t2 ? t2 : "" : void 0;
      }
      r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, r.preconnect = function(e2, t2) {
        "string" == typeof e2 && (t2 = t2 ? "string" == typeof (t2 = t2.crossOrigin) ? "use-credentials" === t2 ? t2 : "" : void 0 : null, a.d.C(e2, t2));
      }, r.prefetchDNS = function(e2) {
        "string" == typeof e2 && a.d.D(e2);
      }, r.preinit = function(e2, t2) {
        if ("string" == typeof e2 && t2 && "string" == typeof t2.as) {
          var r2 = t2.as, n2 = o(r2, t2.crossOrigin), i2 = "string" == typeof t2.integrity ? t2.integrity : void 0, s = "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0;
          "style" === r2 ? a.d.S(e2, "string" == typeof t2.precedence ? t2.precedence : void 0, { crossOrigin: n2, integrity: i2, fetchPriority: s }) : "script" === r2 && a.d.X(e2, { crossOrigin: n2, integrity: i2, fetchPriority: s, nonce: "string" == typeof t2.nonce ? t2.nonce : void 0 });
        }
      }, r.preinitModule = function(e2, t2) {
        if ("string" == typeof e2) if ("object" == typeof t2 && null !== t2) {
          if (null == t2.as || "script" === t2.as) {
            var r2 = o(t2.as, t2.crossOrigin);
            a.d.M(e2, { crossOrigin: r2, integrity: "string" == typeof t2.integrity ? t2.integrity : void 0, nonce: "string" == typeof t2.nonce ? t2.nonce : void 0 });
          }
        } else null == t2 && a.d.M(e2);
      }, r.preload = function(e2, t2) {
        if ("string" == typeof e2 && "object" == typeof t2 && null !== t2 && "string" == typeof t2.as) {
          var r2 = t2.as, n2 = o(r2, t2.crossOrigin);
          a.d.L(e2, r2, { crossOrigin: n2, integrity: "string" == typeof t2.integrity ? t2.integrity : void 0, nonce: "string" == typeof t2.nonce ? t2.nonce : void 0, type: "string" == typeof t2.type ? t2.type : void 0, fetchPriority: "string" == typeof t2.fetchPriority ? t2.fetchPriority : void 0, referrerPolicy: "string" == typeof t2.referrerPolicy ? t2.referrerPolicy : void 0, imageSrcSet: "string" == typeof t2.imageSrcSet ? t2.imageSrcSet : void 0, imageSizes: "string" == typeof t2.imageSizes ? t2.imageSizes : void 0, media: "string" == typeof t2.media ? t2.media : void 0 });
        }
      }, r.preloadModule = function(e2, t2) {
        if ("string" == typeof e2) if (t2) {
          var r2 = o(t2.as, t2.crossOrigin);
          a.d.m(e2, { as: "string" == typeof t2.as && "script" !== t2.as ? t2.as : void 0, crossOrigin: r2, integrity: "string" == typeof t2.integrity ? t2.integrity : void 0 });
        } else a.d.m(e2);
      }, r.version = "19.3.0-canary-3f0b9e61-20260317";
    }, 36026, (e, t, r) => {
      "use strict";
      t.exports = e.r(33914);
    }, 13442, (e, t, r) => {
      "use strict";
      var n = e.r(36026), i = e.r(26942), a = Symbol.for("react.element"), o = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.memo_cache_sentinel"), g = Symbol.for("react.view_transition"), _ = Symbol.iterator;
      function m(e10) {
        return null === e10 || "object" != typeof e10 ? null : "function" == typeof (e10 = _ && e10[_] || e10["@@iterator"]) ? e10 : null;
      }
      var y = Symbol.asyncIterator, v = Symbol.for("react.optimistic_key");
      function b(e10) {
        setTimeout(function() {
          throw e10;
        });
      }
      var w = Promise, E = "function" == typeof queueMicrotask ? queueMicrotask : function(e10) {
        w.resolve(null).then(e10).catch(b);
      }, S = null, C = 0;
      function T(e10, t2) {
        if (0 !== t2.byteLength) if (4096 < t2.byteLength) 0 < C && (e10.enqueue(new Uint8Array(S.buffer, 0, C)), S = new Uint8Array(4096), C = 0), e10.enqueue(t2);
        else {
          var r2 = S.length - C;
          r2 < t2.byteLength && (0 === r2 ? e10.enqueue(S) : (S.set(t2.subarray(0, r2), C), e10.enqueue(S), t2 = t2.subarray(r2)), S = new Uint8Array(4096), C = 0), S.set(t2, C), C += t2.byteLength;
        }
        return true;
      }
      var R = new TextEncoder();
      function P(e10) {
        return R.encode(e10);
      }
      function x(e10) {
        return e10.byteLength;
      }
      function O(e10, t2) {
        "function" == typeof e10.error ? e10.error(t2) : e10.close();
      }
      var A = Symbol.for("react.client.reference"), N = Symbol.for("react.server.reference");
      function I(e10, t2, r2) {
        return Object.defineProperties(e10, { $$typeof: { value: A }, $$id: { value: t2 }, $$async: { value: r2 } });
      }
      var k = Function.prototype.bind, L = Array.prototype.slice;
      function M() {
        var e10 = k.apply(this, arguments);
        if (this.$$typeof === N) {
          var t2 = L.call(arguments, 1);
          return Object.defineProperties(e10, { $$typeof: { value: N }, $$id: { value: this.$$id }, $$bound: t2 = { value: this.$$bound ? this.$$bound.concat(t2) : t2 }, bind: { value: M, configurable: true } });
        }
        return e10;
      }
      var D = { value: function() {
        return "function () { [omitted code] }";
      }, configurable: true, writable: true }, B = Promise.prototype, H = { get: function(e10, t2, r2) {
        switch (t2) {
          case "$$typeof":
            return e10.$$typeof;
          case "$$id":
            return e10.$$id;
          case "$$async":
            return e10.$$async;
          case "name":
            return e10.name;
          case "displayName":
          case "defaultProps":
          case "_debugInfo":
          case "toJSON":
            return;
          case Symbol.toPrimitive:
            return Object.prototype[Symbol.toPrimitive];
          case Symbol.toStringTag:
            return Object.prototype[Symbol.toStringTag];
          case "Provider":
            return r2;
          case "then":
            throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
        }
        throw Error("Cannot access " + String(e10.name) + "." + String(t2) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
      }, set: function() {
        throw Error("Cannot assign to a client module from a server module.");
      } };
      function j(e10, t2) {
        switch (t2) {
          case "$$typeof":
            return e10.$$typeof;
          case "$$id":
            return e10.$$id;
          case "$$async":
            return e10.$$async;
          case "name":
            return e10.name;
          case "defaultProps":
          case "_debugInfo":
          case "toJSON":
            return;
          case Symbol.toPrimitive:
            return Object.prototype[Symbol.toPrimitive];
          case Symbol.toStringTag:
            return Object.prototype[Symbol.toStringTag];
          case "__esModule":
            var r2 = e10.$$id;
            return e10.default = I(function() {
              throw Error("Attempted to call the default export of " + r2 + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
            }, e10.$$id + "#", e10.$$async), true;
          case "then":
            if (e10.then) return e10.then;
            if (e10.$$async) return;
            var n2 = I({}, e10.$$id, true), i2 = new Proxy(n2, U);
            return e10.status = "fulfilled", e10.value = i2, e10.then = I(function(e11) {
              return Promise.resolve(e11(i2));
            }, e10.$$id + "#then", false);
        }
        if ("symbol" == typeof t2) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
        return (n2 = e10[t2]) || (Object.defineProperty(n2 = I(function() {
          throw Error("Attempted to call " + String(t2) + "() from the server but " + String(t2) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
        }, e10.$$id + "#" + t2, e10.$$async), "name", { value: t2 }), n2 = e10[t2] = new Proxy(n2, H)), n2;
      }
      var U = { get: function(e10, t2) {
        return j(e10, t2);
      }, getOwnPropertyDescriptor: function(e10, t2) {
        var r2 = Object.getOwnPropertyDescriptor(e10, t2);
        return r2 || (r2 = { value: j(e10, t2), writable: false, configurable: false, enumerable: false }, Object.defineProperty(e10, t2, r2)), r2;
      }, getPrototypeOf: function() {
        return B;
      }, set: function() {
        throw Error("Cannot assign to a client module from a server module.");
      } }, $ = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = $.d;
      function q(e10, t2, r2) {
        if ("string" == typeof e10) {
          var n2 = eE();
          if (n2) {
            var i2 = n2.hints, a2 = "L";
            if ("image" === t2 && r2) {
              var o2 = r2.imageSrcSet, s2 = r2.imageSizes, l2 = "";
              "string" == typeof o2 && "" !== o2 ? (l2 += "[" + o2 + "]", "string" == typeof s2 && (l2 += "[" + s2 + "]")) : l2 += "[][]" + e10, a2 += "[image]" + l2;
            } else a2 += "[" + t2 + "]" + e10;
            i2.has(a2) || (i2.add(a2), (r2 = V(r2)) ? eC(n2, "L", [e10, t2, r2]) : eC(n2, "L", [e10, t2]));
          } else G.L(e10, t2, r2);
        }
      }
      function F(e10, t2) {
        if ("string" == typeof e10) {
          var r2 = eE();
          if (r2) {
            var n2 = r2.hints, i2 = "m|" + e10;
            if (n2.has(i2)) return;
            return n2.add(i2), (t2 = V(t2)) ? eC(r2, "m", [e10, t2]) : eC(r2, "m", e10);
          }
          G.m(e10, t2);
        }
      }
      function V(e10) {
        if (null == e10) return null;
        var t2, r2 = false, n2 = {};
        for (t2 in e10) null != e10[t2] && (r2 = true, n2[t2] = e10[t2]);
        return r2 ? n2 : null;
      }
      $.d = { f: G.f, r: G.r, D: function(e10) {
        if ("string" == typeof e10 && e10) {
          var t2 = eE();
          if (t2) {
            var r2 = t2.hints, n2 = "D|" + e10;
            r2.has(n2) || (r2.add(n2), eC(t2, "D", e10));
          } else G.D(e10);
        }
      }, C: function(e10, t2) {
        if ("string" == typeof e10) {
          var r2 = eE();
          if (r2) {
            var n2 = r2.hints, i2 = "C|" + (null == t2 ? "null" : t2) + "|" + e10;
            n2.has(i2) || (n2.add(i2), "string" == typeof t2 ? eC(r2, "C", [e10, t2]) : eC(r2, "C", e10));
          } else G.C(e10, t2);
        }
      }, L: q, m: F, X: function(e10, t2) {
        if ("string" == typeof e10) {
          var r2 = eE();
          if (r2) {
            var n2 = r2.hints, i2 = "X|" + e10;
            if (n2.has(i2)) return;
            return n2.add(i2), (t2 = V(t2)) ? eC(r2, "X", [e10, t2]) : eC(r2, "X", e10);
          }
          G.X(e10, t2);
        }
      }, S: function(e10, t2, r2) {
        if ("string" == typeof e10) {
          var n2 = eE();
          if (n2) {
            var i2 = n2.hints, a2 = "S|" + e10;
            if (i2.has(a2)) return;
            return i2.add(a2), (r2 = V(r2)) ? eC(n2, "S", [e10, "string" == typeof t2 ? t2 : 0, r2]) : "string" == typeof t2 ? eC(n2, "S", [e10, t2]) : eC(n2, "S", e10);
          }
          G.S(e10, t2, r2);
        }
      }, M: function(e10, t2) {
        if ("string" == typeof e10) {
          var r2 = eE();
          if (r2) {
            var n2 = r2.hints, i2 = "M|" + e10;
            if (n2.has(i2)) return;
            return n2.add(i2), (t2 = V(t2)) ? eC(r2, "M", [e10, t2]) : eC(r2, "M", e10);
          }
          G.M(e10, t2);
        }
      } };
      var z = "function" == typeof AsyncLocalStorage, K = z ? new AsyncLocalStorage() : null, X = Symbol.for("react.temporary.reference"), W = { get: function(e10, t2, r2) {
        switch (t2) {
          case "$$typeof":
            return e10.$$typeof;
          case "name":
          case "displayName":
          case "defaultProps":
          case "_debugInfo":
          case "toJSON":
            return;
          case Symbol.toPrimitive:
            return Object.prototype[Symbol.toPrimitive];
          case Symbol.toStringTag:
            return Object.prototype[Symbol.toStringTag];
          case "Provider":
            return r2;
          case "then":
            return;
        }
        throw Error("Cannot access " + String(t2) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
      }, set: function() {
        throw Error("Cannot assign to a temporary client reference from a server module.");
      } };
      function Y() {
      }
      var Z = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), J = null;
      function Q() {
        if (null === J) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var e10 = J;
        return J = null, e10;
      }
      var ee = null, et = 0, er = null;
      function en() {
        var e10 = er || [];
        return er = null, e10;
      }
      var ei = { readContext: es, use: function(e10) {
        if (null !== e10 && "object" == typeof e10 || "function" == typeof e10) {
          if ("function" == typeof e10.then) {
            var t2 = et;
            et += 1, null === er && (er = []);
            var r2 = er, n2 = e10, i2 = t2;
            switch (void 0 === (i2 = r2[i2]) ? r2.push(n2) : i2 !== n2 && (n2.then(Y, Y), n2 = i2), n2.status) {
              case "fulfilled":
                return n2.value;
              case "rejected":
                throw n2.reason;
              default:
                switch ("string" == typeof n2.status ? n2.then(Y, Y) : ((r2 = n2).status = "pending", r2.then(function(e11) {
                  if ("pending" === n2.status) {
                    var t3 = n2;
                    t3.status = "fulfilled", t3.value = e11;
                  }
                }, function(e11) {
                  if ("pending" === n2.status) {
                    var t3 = n2;
                    t3.status = "rejected", t3.reason = e11;
                  }
                })), n2.status) {
                  case "fulfilled":
                    return n2.value;
                  case "rejected":
                    throw n2.reason;
                }
                throw J = n2, Z;
            }
          }
          e10.$$typeof === l && es();
        }
        if (e10.$$typeof === A) {
          if (null != e10.value && e10.value.$$typeof === l) throw Error("Cannot read a Client Context from a Server Component.");
          throw Error("Cannot use() an already resolved Client Reference.");
        }
        throw Error("An unsupported type was passed to use(): " + String(e10));
      }, useCallback: function(e10) {
        return e10;
      }, useContext: es, useEffect: ea, useImperativeHandle: ea, useLayoutEffect: ea, useInsertionEffect: ea, useMemo: function(e10) {
        return e10();
      }, useReducer: ea, useRef: ea, useState: ea, useDebugValue: function() {
      }, useDeferredValue: ea, useTransition: ea, useSyncExternalStore: ea, useId: function() {
        if (null === ee) throw Error("useId can only be used while React is rendering");
        var e10 = ee.identifierCount++;
        return "_" + ee.identifierPrefix + "S_" + e10.toString(32) + "_";
      }, useHostTransitionStatus: ea, useFormState: ea, useActionState: ea, useOptimistic: ea, useMemoCache: function(e10) {
        for (var t2 = Array(e10), r2 = 0; r2 < e10; r2++) t2[r2] = p;
        return t2;
      }, useCacheRefresh: function() {
        return eo;
      }, useEffectEvent: ea };
      function ea() {
        throw Error("This Hook is not supported in Server Components.");
      }
      function eo() {
        throw Error("Refreshing the cache is not supported in Server Components.");
      }
      function es() {
        throw Error("Cannot read a Client Context from a Server Component.");
      }
      var el = { getCacheForType: function(e10) {
        var t2 = (t2 = eE()) ? t2.cache : /* @__PURE__ */ new Map(), r2 = t2.get(e10);
        return void 0 === r2 && (r2 = e10(), t2.set(e10, r2)), r2;
      }, cacheSignal: function() {
        var e10 = eE();
        return e10 ? e10.cacheController.signal : null;
      } }, eu = i.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      if (!eu) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
      var ec = Array.isArray, ed = Object.getPrototypeOf;
      function eh(e10) {
        return (e10 = Object.prototype.toString.call(e10)).slice(8, e10.length - 1);
      }
      function ef(e10) {
        switch (typeof e10) {
          case "string":
            return JSON.stringify(10 >= e10.length ? e10 : e10.slice(0, 10) + "...");
          case "object":
            if (ec(e10)) return "[...]";
            if (null !== e10 && e10.$$typeof === ep) return "client";
            return "Object" === (e10 = eh(e10)) ? "{...}" : e10;
          case "function":
            return e10.$$typeof === ep ? "client" : (e10 = e10.displayName || e10.name) ? "function " + e10 : "function";
          default:
            return String(e10);
        }
      }
      var ep = Symbol.for("react.client.reference");
      function eg(e10, t2) {
        var r2 = eh(e10);
        if ("Object" !== r2 && "Array" !== r2) return r2;
        r2 = -1;
        var n2 = 0;
        if (ec(e10)) {
          for (var i2 = "[", a2 = 0; a2 < e10.length; a2++) {
            0 < a2 && (i2 += ", ");
            var s2 = e10[a2];
            s2 = "object" == typeof s2 && null !== s2 ? eg(s2) : ef(s2), "" + a2 === t2 ? (r2 = i2.length, n2 = s2.length, i2 += s2) : i2 = 10 > s2.length && 40 > i2.length + s2.length ? i2 + s2 : i2 + "...";
          }
          i2 += "]";
        } else if (e10.$$typeof === o) i2 = "<" + function e11(t3) {
          if ("string" == typeof t3) return t3;
          switch (t3) {
            case c:
              return "Suspense";
            case d:
              return "SuspenseList";
            case g:
              return "ViewTransition";
          }
          if ("object" == typeof t3) switch (t3.$$typeof) {
            case u:
              return e11(t3.render);
            case h:
              return e11(t3.type);
            case f:
              var r3 = t3._payload;
              t3 = t3._init;
              try {
                return e11(t3(r3));
              } catch (e12) {
              }
          }
          return "";
        }(e10.type) + "/>";
        else {
          if (e10.$$typeof === ep) return "client";
          for (s2 = 0, i2 = "{", a2 = Object.keys(e10); s2 < a2.length; s2++) {
            0 < s2 && (i2 += ", ");
            var l2 = a2[s2], p2 = JSON.stringify(l2);
            i2 += ('"' + l2 + '"' === p2 ? l2 : p2) + ": ", p2 = "object" == typeof (p2 = e10[l2]) && null !== p2 ? eg(p2) : ef(p2), l2 === t2 ? (r2 = i2.length, n2 = p2.length, i2 += p2) : i2 = 10 > p2.length && 40 > i2.length + p2.length ? i2 + p2 : i2 + "...";
          }
          i2 += "}";
        }
        return void 0 === t2 ? i2 : -1 < r2 && 0 < n2 ? "\n  " + i2 + "\n  " + (e10 = " ".repeat(r2) + "^".repeat(n2)) : "\n  " + i2;
      }
      var e_ = Object.prototype.hasOwnProperty, em = Object.prototype, ey = JSON.stringify;
      function ev(e10) {
        console.error(e10);
      }
      function eb(e10, t2, r2, n2, i2, a2, o2, s2) {
        if (null !== eu.A && eu.A !== el) throw Error("Currently React only supports one RSC renderer at a time.");
        eu.A = el;
        var l2 = /* @__PURE__ */ new Set(), u2 = [], c2 = /* @__PURE__ */ new Set();
        this.type = e10, this.status = 10, this.flushScheduled = false, this.destination = this.fatalError = null, this.bundlerConfig = r2, this.cache = /* @__PURE__ */ new Map(), this.cacheController = new AbortController(), this.pendingChunks = this.nextChunkId = 0, this.hints = c2, this.abortableTasks = l2, this.pingedTasks = u2, this.completedImportChunks = [], this.completedHintChunks = [], this.completedRegularChunks = [], this.completedErrorChunks = [], this.writtenSymbols = /* @__PURE__ */ new Map(), this.writtenClientReferences = /* @__PURE__ */ new Map(), this.writtenServerReferences = /* @__PURE__ */ new Map(), this.writtenObjects = /* @__PURE__ */ new WeakMap(), this.temporaryReferences = s2, this.identifierPrefix = o2 || "", this.identifierCount = 1, this.taintCleanupQueue = [], this.onError = void 0 === n2 ? ev : n2, this.onAllReady = i2, this.onFatalError = a2, u2.push(e10 = eI(this, t2, null, false, 0, l2));
      }
      var ew = null;
      function eE() {
        if (ew) return ew;
        if (z) {
          var e10 = K.getStore();
          if (e10) return e10;
        }
        return null;
      }
      function eS(e10, t2, r2) {
        var n2 = eI(e10, r2, t2.keyPath, t2.implicitSlot, t2.formatContext, e10.abortableTasks);
        switch (r2.status) {
          case "fulfilled":
            return n2.model = r2.value, eN(e10, n2), n2.id;
          case "rejected":
            return eX(e10, n2, r2.reason), n2.id;
          default:
            if (12 === e10.status) return e10.abortableTasks.delete(n2), 21 === e10.type ? (e1(n2), e2(n2, e10)) : (t2 = e10.fatalError, eQ(n2), e0(n2, e10, t2)), n2.id;
            "string" != typeof r2.status && (r2.status = "pending", r2.then(function(e11) {
              "pending" === r2.status && (r2.status = "fulfilled", r2.value = e11);
            }, function(e11) {
              "pending" === r2.status && (r2.status = "rejected", r2.reason = e11);
            }));
        }
        return r2.then(function(t3) {
          n2.model = t3, eN(e10, n2);
        }, function(t3) {
          0 === n2.status && (eX(e10, n2, t3), e9(e10));
        }), n2.id;
      }
      function eC(e10, t2, r2) {
        t2 = P(":H" + t2 + (r2 = ey(r2)) + "\n"), e10.completedHintChunks.push(t2), e9(e10);
      }
      function eT(e10) {
        if ("fulfilled" === e10.status) return e10.value;
        if ("rejected" === e10.status) throw e10.reason;
        throw e10;
      }
      function eR() {
      }
      function eP(e10, t2, r2, n2, i2) {
        var a2 = t2.thenableState;
        if (t2.thenableState = null, et = 0, er = a2, i2 = n2(i2, void 0), 12 === e10.status) throw "object" == typeof i2 && null !== i2 && "function" == typeof i2.then && i2.$$typeof !== A && i2.then(eR, eR), null;
        return i2 = function(e11, t3) {
          if ("object" != typeof t3 || null === t3 || t3.$$typeof === A) return t3;
          if ("function" == typeof t3.then) {
            switch (t3.status) {
              case "fulfilled":
                return t3.value;
              case "rejected":
                break;
              default:
                "string" != typeof t3.status && (t3.status = "pending", t3.then(function(e12) {
                  "pending" === t3.status && (t3.status = "fulfilled", t3.value = e12);
                }, function(e12) {
                  "pending" === t3.status && (t3.status = "rejected", t3.reason = e12);
                }));
            }
            return { $$typeof: f, _payload: t3, _init: eT };
          }
          var r3 = m(t3);
          return r3 ? ((e11 = {})[Symbol.iterator] = function() {
            return r3.call(t3);
          }, e11) : "function" != typeof t3[y] || "function" == typeof ReadableStream && t3 instanceof ReadableStream ? t3 : ((e11 = {})[y] = function() {
            return t3[y]();
          }, e11);
        }(e10, i2), n2 = t2.keyPath, a2 = t2.implicitSlot, null !== r2 ? t2.keyPath = r2 === v || n2 === v ? v : null === n2 ? r2 : n2 + "," + r2 : null === n2 && (t2.implicitSlot = true), e10 = eU(e10, t2, eW, "", i2), t2.keyPath = n2, t2.implicitSlot = a2, e10;
      }
      function ex(e10, t2, r2) {
        return null !== t2.keyPath ? (e10 = [o, s, t2.keyPath, { children: r2 }], t2.implicitSlot ? [e10] : e10) : r2;
      }
      var eO = 0;
      function eA(e10, t2) {
        return t2 = eI(e10, t2.model, t2.keyPath, t2.implicitSlot, t2.formatContext, e10.abortableTasks), eN(e10, t2), eL(t2.id);
      }
      function eN(e10, t2) {
        var r2 = e10.pingedTasks;
        r2.push(t2), 1 === r2.length && (e10.flushScheduled = null !== e10.destination, 21 === e10.type || 10 === e10.status ? E(function() {
          return eJ(e10);
        }) : setTimeout(function() {
          return eJ(e10);
        }, 0));
      }
      function eI(e10, t2, r2, n2, i2, a2) {
        e10.pendingChunks++;
        var s2 = e10.nextChunkId++;
        "object" != typeof t2 || null === t2 || null !== r2 || n2 || e10.writtenObjects.set(t2, ek(s2));
        var l2 = { id: s2, status: 0, model: t2, keyPath: r2, implicitSlot: n2, formatContext: i2, ping: function() {
          return eN(e10, l2);
        }, toJSON: function(t3, r3) {
          eO += t3.length;
          var n3 = l2.keyPath, i3 = l2.implicitSlot;
          try {
            var a3 = eU(e10, l2, this, t3, r3);
          } catch (u2) {
            if (t3 = "object" == typeof (t3 = l2.model) && null !== t3 && (t3.$$typeof === o || t3.$$typeof === f), 12 === e10.status) l2.status = 3, 21 === e10.type ? (n3 = e10.nextChunkId++, a3 = n3 = t3 ? eL(n3) : ek(n3)) : (n3 = e10.fatalError, a3 = t3 ? eL(n3) : ek(n3));
            else if ("object" == typeof (r3 = u2 === Z ? Q() : u2) && null !== r3 && "function" == typeof r3.then) {
              var s3 = (a3 = eI(e10, l2.model, l2.keyPath, l2.implicitSlot, l2.formatContext, e10.abortableTasks)).ping;
              r3.then(s3, s3), a3.thenableState = en(), l2.keyPath = n3, l2.implicitSlot = i3, a3 = t3 ? eL(a3.id) : ek(a3.id);
            } else l2.keyPath = n3, l2.implicitSlot = i3, e10.pendingChunks++, n3 = e10.nextChunkId++, i3 = e$(e10, r3, l2), eq(e10, n3, i3), a3 = t3 ? eL(n3) : ek(n3);
          }
          return a3;
        }, thenableState: null };
        return a2.add(l2), l2;
      }
      function ek(e10) {
        return "$" + e10.toString(16);
      }
      function eL(e10) {
        return "$L" + e10.toString(16);
      }
      function eM(e10, t2, r2) {
        return e10 = ey(r2), P(t2 = t2.toString(16) + ":" + e10 + "\n");
      }
      function eD(e10, t2, r2, n2) {
        var i2 = n2.$$async ? n2.$$id + "#async" : n2.$$id, a2 = e10.writtenClientReferences, s2 = a2.get(i2);
        if (void 0 !== s2) return t2[0] === o && "1" === r2 ? eL(s2) : ek(s2);
        try {
          var l2 = e10.bundlerConfig, u2 = n2.$$id;
          s2 = "";
          var c2 = l2[u2];
          if (c2) s2 = c2.name;
          else {
            var d2 = u2.lastIndexOf("#");
            if (-1 !== d2 && (s2 = u2.slice(d2 + 1), c2 = l2[u2.slice(0, d2)]), !c2) throw Error('Could not find the module "' + u2 + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
          }
          if (true === c2.async && true === n2.$$async) throw Error('The module "' + u2 + '" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.');
          var h2 = true === c2.async || true === n2.$$async ? [c2.id, c2.chunks, s2, 1] : [c2.id, c2.chunks, s2];
          e10.pendingChunks++;
          var f2 = e10.nextChunkId++, p2 = ey(h2), g2 = f2.toString(16) + ":I" + p2 + "\n", _2 = P(g2);
          return e10.completedImportChunks.push(_2), a2.set(i2, f2), t2[0] === o && "1" === r2 ? eL(f2) : ek(f2);
        } catch (n3) {
          return e10.pendingChunks++, t2 = e10.nextChunkId++, r2 = e$(e10, n3, null), eq(e10, t2, r2), ek(t2);
        }
      }
      function eB(e10, t2, r2) {
        return t2 = eI(e10, t2, null, false, r2, e10.abortableTasks), eY(e10, t2), t2.id;
      }
      function eH(e10, t2, r2) {
        e10.pendingChunks++;
        var n2 = e10.nextChunkId++;
        return eV(e10, n2, t2, r2, false), ek(n2);
      }
      var ej = false;
      function eU(e10, t2, r2, n2, i2) {
        if (t2.model = i2, i2 === o) return "$";
        if (null === i2) return null;
        if ("object" == typeof i2) {
          switch (i2.$$typeof) {
            case o:
              var l2 = null, c2 = e10.writtenObjects;
              if (null === t2.keyPath && !t2.implicitSlot) {
                var d2 = c2.get(i2);
                if (void 0 !== d2) if (ej !== i2) return d2;
                else ej = null;
                else -1 === n2.indexOf(":") && void 0 !== (r2 = c2.get(r2)) && (l2 = r2 + ":" + n2, c2.set(i2, l2));
              }
              if (3200 < eO) return eA(e10, t2);
              return r2 = (n2 = i2.props).ref, "object" == typeof (e10 = function e11(t3, r3, n3, i3, a2, l3) {
                if (null != a2) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
                if ("function" == typeof n3 && n3.$$typeof !== A && n3.$$typeof !== X) return eP(t3, r3, i3, n3, l3);
                if (n3 === s && null === i3) return n3 = r3.implicitSlot, null === r3.keyPath && (r3.implicitSlot = true), l3 = eU(t3, r3, eW, "", l3.children), r3.implicitSlot = n3, l3;
                if (null != n3 && "object" == typeof n3 && n3.$$typeof !== A) switch (n3.$$typeof) {
                  case f:
                    var c3 = n3._init;
                    if (n3 = c3(n3._payload), 12 === t3.status) throw null;
                    return e11(t3, r3, n3, i3, a2, l3);
                  case u:
                    return eP(t3, r3, i3, n3.render, l3);
                  case h:
                    return e11(t3, r3, n3.type, i3, a2, l3);
                }
                else "string" == typeof n3 && (c3 = function(e12, t4, r4) {
                  switch (t4) {
                    case "img":
                      t4 = r4.src;
                      var n4 = r4.srcSet;
                      if (!("lazy" === r4.loading || !t4 && !n4 || "string" != typeof t4 && null != t4 || "string" != typeof n4 && null != n4 || "low" === r4.fetchPriority || 3 & e12) && ("string" != typeof t4 || ":" !== t4[4] || "d" !== t4[0] && "D" !== t4[0] || "a" !== t4[1] && "A" !== t4[1] || "t" !== t4[2] && "T" !== t4[2] || "a" !== t4[3] && "A" !== t4[3]) && ("string" != typeof n4 || ":" !== n4[4] || "d" !== n4[0] && "D" !== n4[0] || "a" !== n4[1] && "A" !== n4[1] || "t" !== n4[2] && "T" !== n4[2] || "a" !== n4[3] && "A" !== n4[3])) {
                        var i4 = "string" == typeof r4.sizes ? r4.sizes : void 0, a3 = r4.crossOrigin;
                        q(t4 || "", "image", { imageSrcSet: n4, imageSizes: i4, crossOrigin: "string" == typeof a3 ? "use-credentials" === a3 ? a3 : "" : void 0, integrity: r4.integrity, type: r4.type, fetchPriority: r4.fetchPriority, referrerPolicy: r4.referrerPolicy });
                      }
                      return e12;
                    case "link":
                      if (t4 = r4.rel, n4 = r4.href, !(1 & e12 || null != r4.itemProp || "string" != typeof t4 || "string" != typeof n4 || "" === n4)) switch (t4) {
                        case "preload":
                          q(n4, r4.as, { crossOrigin: r4.crossOrigin, integrity: r4.integrity, nonce: r4.nonce, type: r4.type, fetchPriority: r4.fetchPriority, referrerPolicy: r4.referrerPolicy, imageSrcSet: r4.imageSrcSet, imageSizes: r4.imageSizes, media: r4.media });
                          break;
                        case "modulepreload":
                          F(n4, { as: r4.as, crossOrigin: r4.crossOrigin, integrity: r4.integrity, nonce: r4.nonce });
                          break;
                        case "stylesheet":
                          q(n4, "style", { crossOrigin: r4.crossOrigin, integrity: r4.integrity, nonce: r4.nonce, type: r4.type, fetchPriority: r4.fetchPriority, referrerPolicy: r4.referrerPolicy, media: r4.media });
                      }
                      return e12;
                    case "picture":
                      return 2 | e12;
                    case "noscript":
                      return 1 | e12;
                    default:
                      return e12;
                  }
                }(a2 = r3.formatContext, n3, l3), a2 !== c3 && null != l3.children && eB(t3, l3.children, c3));
                return t3 = i3, i3 = r3.keyPath, null === t3 ? t3 = i3 : null !== i3 && (t3 = i3 === v || t3 === v ? v : i3 + "," + t3), l3 = [o, n3, t3, l3], r3 = r3.implicitSlot && null !== t3 ? [l3] : l3;
              }(e10, t2, i2.type, i2.key, void 0 !== r2 ? r2 : null, n2)) && null !== e10 && null !== l2 && (c2.has(e10) || c2.set(e10, l2)), e10;
            case f:
              if (3200 < eO) return eA(e10, t2);
              if (t2.thenableState = null, i2 = (l2 = i2._init)(i2._payload), 12 === e10.status) throw null;
              return eU(e10, t2, r2, n2, i2);
            case a:
              throw Error('A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.');
          }
          if (i2.$$typeof === A) return eD(e10, r2, n2, i2);
          if (void 0 !== e10.temporaryReferences && void 0 !== (l2 = e10.temporaryReferences.get(i2))) return "$T" + l2;
          if (c2 = (l2 = e10.writtenObjects).get(i2), "function" == typeof i2.then) {
            if (void 0 !== c2) {
              if (null !== t2.keyPath || t2.implicitSlot) return "$@" + eS(e10, t2, i2).toString(16);
              if (ej !== i2) return c2;
              ej = null;
            }
            return e10 = "$@" + eS(e10, t2, i2).toString(16), l2.set(i2, e10), e10;
          }
          if (void 0 !== c2) if (ej !== i2) return c2;
          else {
            if (c2 !== ek(t2.id)) return c2;
            ej = null;
          }
          else if (-1 === n2.indexOf(":") && void 0 !== (c2 = l2.get(r2))) {
            if (d2 = n2, ec(r2) && r2[0] === o) switch (n2) {
              case "1":
                d2 = "type";
                break;
              case "2":
                d2 = "key";
                break;
              case "3":
                d2 = "props";
                break;
              case "4":
                d2 = "_owner";
            }
            l2.set(i2, c2 + ":" + d2);
          }
          if (ec(i2)) return ex(e10, t2, i2);
          if (i2 instanceof Map) return "$Q" + eB(e10, i2 = Array.from(i2), 0).toString(16);
          if (i2 instanceof Set) return "$W" + eB(e10, i2 = Array.from(i2), 0).toString(16);
          if ("function" == typeof FormData && i2 instanceof FormData) return "$K" + eB(e10, i2 = Array.from(i2.entries()), 0).toString(16);
          if (i2 instanceof Error) return "$Z";
          if (i2 instanceof ArrayBuffer) return eH(e10, "A", new Uint8Array(i2));
          if (i2 instanceof Int8Array) return eH(e10, "O", i2);
          if (i2 instanceof Uint8Array) return eH(e10, "o", i2);
          if (i2 instanceof Uint8ClampedArray) return eH(e10, "U", i2);
          if (i2 instanceof Int16Array) return eH(e10, "S", i2);
          if (i2 instanceof Uint16Array) return eH(e10, "s", i2);
          if (i2 instanceof Int32Array) return eH(e10, "L", i2);
          if (i2 instanceof Uint32Array) return eH(e10, "l", i2);
          if (i2 instanceof Float32Array) return eH(e10, "G", i2);
          if (i2 instanceof Float64Array) return eH(e10, "g", i2);
          if (i2 instanceof BigInt64Array) return eH(e10, "M", i2);
          if (i2 instanceof BigUint64Array) return eH(e10, "m", i2);
          if (i2 instanceof DataView) return eH(e10, "V", i2);
          if ("function" == typeof Blob && i2 instanceof Blob) return function(e11, t3) {
            function r3(t4) {
              0 === a2.status && (e11.cacheController.signal.removeEventListener("abort", n3), eX(e11, a2, t4), e9(e11), o2.cancel(t4).then(r3, r3));
            }
            function n3() {
              if (0 === a2.status) {
                var t4 = e11.cacheController.signal;
                t4.removeEventListener("abort", n3), t4 = t4.reason, 21 === e11.type ? (e11.abortableTasks.delete(a2), e1(a2), e2(a2, e11)) : (eX(e11, a2, t4), e9(e11)), o2.cancel(t4).then(r3, r3);
              }
            }
            var i3 = [t3.type], a2 = eI(e11, i3, null, false, 0, e11.abortableTasks), o2 = t3.stream().getReader();
            return e11.cacheController.signal.addEventListener("abort", n3), o2.read().then(function t4(s2) {
              if (0 === a2.status) if (!s2.done) return i3.push(s2.value), o2.read().then(t4).catch(r3);
              else e11.cacheController.signal.removeEventListener("abort", n3), eN(e11, a2);
            }).catch(r3), "$B" + a2.id.toString(16);
          }(e10, i2);
          if (l2 = m(i2)) return (n2 = l2.call(i2)) === i2 ? "$i" + eB(e10, i2 = Array.from(n2), 0).toString(16) : ex(e10, t2, Array.from(n2));
          if ("function" == typeof ReadableStream && i2 instanceof ReadableStream) return function(e11, t3, r3) {
            function n3(t4) {
              0 === l3.status && (e11.cacheController.signal.removeEventListener("abort", i3), eX(e11, l3, t4), e9(e11), s2.cancel(t4).then(n3, n3));
            }
            function i3() {
              if (0 === l3.status) {
                var t4 = e11.cacheController.signal;
                t4.removeEventListener("abort", i3), t4 = t4.reason, 21 === e11.type ? (e11.abortableTasks.delete(l3), e1(l3), e2(l3, e11)) : (eX(e11, l3, t4), e9(e11)), s2.cancel(t4).then(n3, n3);
              }
            }
            var a2 = r3.supportsBYOB;
            if (void 0 === a2) try {
              r3.getReader({ mode: "byob" }).releaseLock(), a2 = true;
            } catch (e12) {
              a2 = false;
            }
            var o2 = a2, s2 = r3.getReader(), l3 = eI(e11, t3.model, t3.keyPath, t3.implicitSlot, t3.formatContext, e11.abortableTasks);
            return e11.pendingChunks++, t3 = l3.id.toString(16) + ":" + (o2 ? "r" : "R") + "\n", e11.completedRegularChunks.push(P(t3)), e11.cacheController.signal.addEventListener("abort", i3), s2.read().then(function t4(r4) {
              if (0 === l3.status) if (r4.done) l3.status = 1, r4 = l3.id.toString(16) + ":C\n", e11.completedRegularChunks.push(P(r4)), e11.abortableTasks.delete(l3), e11.cacheController.signal.removeEventListener("abort", i3), e9(e11), e6(e11);
              else try {
                e11.pendingChunks++, l3.model = r4.value, o2 ? eV(e11, l3.id, "b", l3.model, false) : eZ(e11, l3), e9(e11), s2.read().then(t4, n3);
              } catch (e12) {
                n3(e12);
              }
            }, n3), ek(l3.id);
          }(e10, t2, i2);
          if ("function" == typeof (l2 = i2[y])) return null !== t2.keyPath ? (e10 = [o, s, t2.keyPath, { children: i2 }], e10 = t2.implicitSlot ? [e10] : e10) : (n2 = l2.call(i2), e10 = function(e11, t3, r3, n3) {
            function i3(t4) {
              0 === o2.status && (e11.cacheController.signal.removeEventListener("abort", a2), eX(e11, o2, t4), e9(e11), "function" == typeof n3.throw && n3.throw(t4).then(i3, i3));
            }
            function a2() {
              if (0 === o2.status) {
                var t4 = e11.cacheController.signal;
                t4.removeEventListener("abort", a2);
                var r4 = t4.reason;
                21 === e11.type ? (e11.abortableTasks.delete(o2), e1(o2), e2(o2, e11)) : (eX(e11, o2, t4.reason), e9(e11)), "function" == typeof n3.throw && n3.throw(r4).then(i3, i3);
              }
            }
            r3 = r3 === n3;
            var o2 = eI(e11, t3.model, t3.keyPath, t3.implicitSlot, t3.formatContext, e11.abortableTasks);
            return e11.pendingChunks++, t3 = o2.id.toString(16) + ":" + (r3 ? "x" : "X") + "\n", e11.completedRegularChunks.push(P(t3)), e11.cacheController.signal.addEventListener("abort", a2), n3.next().then(function t4(r4) {
              if (0 === o2.status) if (r4.done) {
                if (o2.status = 1, void 0 === r4.value) var s2 = o2.id.toString(16) + ":C\n";
                else try {
                  var l3 = eB(e11, r4.value, 0);
                  s2 = o2.id.toString(16) + ":C" + ey(ek(l3)) + "\n";
                } catch (e12) {
                  i3(e12);
                  return;
                }
                e11.completedRegularChunks.push(P(s2)), e11.abortableTasks.delete(o2), e11.cacheController.signal.removeEventListener("abort", a2), e9(e11), e6(e11);
              } else try {
                o2.model = r4.value, e11.pendingChunks++, eZ(e11, o2), e9(e11), n3.next().then(t4, i3);
              } catch (e12) {
                i3(e12);
              }
            }, i3), ek(o2.id);
          }(e10, t2, i2, n2)), e10;
          if (i2 instanceof Date) return "$D" + i2.toJSON();
          if ((e10 = ed(i2)) !== em && (null === e10 || null !== ed(e10))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + eg(r2, n2));
          return i2;
        }
        if ("string" == typeof i2) return (eO += i2.length, "Z" === i2[i2.length - 1] && r2[n2] instanceof Date) ? "$D" + i2 : 1024 <= i2.length && null !== x ? (e10.pendingChunks++, t2 = e10.nextChunkId++, ez(e10, t2, i2, false), ek(t2)) : e10 = "$" === i2[0] ? "$" + i2 : i2;
        if ("boolean" == typeof i2) return i2;
        if ("number" == typeof i2) return Number.isFinite(i2) ? 0 === i2 && -1 / 0 == 1 / i2 ? "$-0" : i2 : 1 / 0 === i2 ? "$Infinity" : -1 / 0 === i2 ? "$-Infinity" : "$NaN";
        if (void 0 === i2) return "$undefined";
        if ("function" == typeof i2) {
          if (i2.$$typeof === A) return eD(e10, r2, n2, i2);
          if (i2.$$typeof === N) return void 0 !== (n2 = (t2 = e10.writtenServerReferences).get(i2)) ? e10 = "$h" + n2.toString(16) : (n2 = null === (n2 = i2.$$bound) ? null : Promise.resolve(n2), e10 = eB(e10, { id: i2.$$id, bound: n2 }, 0), t2.set(i2, e10), e10 = "$h" + e10.toString(16)), e10;
          if (void 0 !== e10.temporaryReferences && void 0 !== (e10 = e10.temporaryReferences.get(i2))) return "$T" + e10;
          if (i2.$$typeof === X) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
          if (/^on[A-Z]/.test(n2)) throw Error("Event handlers cannot be passed to Client Component props." + eg(r2, n2) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
          throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.' + eg(r2, n2));
        }
        if ("symbol" == typeof i2) {
          if (void 0 !== (l2 = (t2 = e10.writtenSymbols).get(i2))) return ek(l2);
          if (Symbol.for(l2 = i2.description) !== i2) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + i2.description + ") cannot be found among global symbols." + eg(r2, n2));
          return e10.pendingChunks++, n2 = e10.nextChunkId++, r2 = eM(e10, n2, "$S" + l2), e10.completedImportChunks.push(r2), t2.set(i2, n2), ek(n2);
        }
        if ("bigint" == typeof i2) return "$n" + i2.toString(10);
        throw Error("Type " + typeof i2 + " is not supported in Client Component props." + eg(r2, n2));
      }
      function e$(e10, t2) {
        var r2 = ew;
        ew = null;
        try {
          var n2 = e10.onError, i2 = z ? K.run(void 0, n2, t2) : n2(t2);
        } finally {
          ew = r2;
        }
        if (null != i2 && "string" != typeof i2) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i2 + '" instead');
        return i2 || "";
      }
      function eG(e10, t2) {
        (0, e10.onFatalError)(t2), null !== e10.destination ? (e10.status = 14, O(e10.destination, t2)) : (e10.status = 13, e10.fatalError = t2), e10.cacheController.abort(Error("The render was aborted due to a fatal error.", { cause: t2 }));
      }
      function eq(e10, t2, r2) {
        r2 = { digest: r2 }, t2 = P(t2 = t2.toString(16) + ":E" + ey(r2) + "\n"), e10.completedErrorChunks.push(t2);
      }
      function eF(e10, t2, r2) {
        t2 = P(t2 = t2.toString(16) + ":" + r2 + "\n"), e10.completedRegularChunks.push(t2);
      }
      function eV(e10, t2, r2, n2, i2) {
        i2 ? e10.pendingDebugChunks++ : e10.pendingChunks++, i2 = (n2 = new Uint8Array(n2.buffer, n2.byteOffset, n2.byteLength)).byteLength, t2 = P(t2 = t2.toString(16) + ":" + r2 + i2.toString(16) + ","), e10.completedRegularChunks.push(t2, n2);
      }
      function ez(e10, t2, r2, n2) {
        if (null === x) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
        n2 ? e10.pendingDebugChunks++ : e10.pendingChunks++, n2 = (r2 = P(r2)).byteLength, t2 = P(t2 = t2.toString(16) + ":T" + n2.toString(16) + ","), e10.completedRegularChunks.push(t2, r2);
      }
      function eK(e10, t2, r2) {
        var n2 = t2.id;
        "string" == typeof r2 && null !== x ? ez(e10, n2, r2, false) : r2 instanceof ArrayBuffer ? eV(e10, n2, "A", new Uint8Array(r2), false) : r2 instanceof Int8Array ? eV(e10, n2, "O", r2, false) : r2 instanceof Uint8Array ? eV(e10, n2, "o", r2, false) : r2 instanceof Uint8ClampedArray ? eV(e10, n2, "U", r2, false) : r2 instanceof Int16Array ? eV(e10, n2, "S", r2, false) : r2 instanceof Uint16Array ? eV(e10, n2, "s", r2, false) : r2 instanceof Int32Array ? eV(e10, n2, "L", r2, false) : r2 instanceof Uint32Array ? eV(e10, n2, "l", r2, false) : r2 instanceof Float32Array ? eV(e10, n2, "G", r2, false) : r2 instanceof Float64Array ? eV(e10, n2, "g", r2, false) : r2 instanceof BigInt64Array ? eV(e10, n2, "M", r2, false) : r2 instanceof BigUint64Array ? eV(e10, n2, "m", r2, false) : r2 instanceof DataView ? eV(e10, n2, "V", r2, false) : (r2 = ey(r2, t2.toJSON), eF(e10, t2.id, r2));
      }
      function eX(e10, t2, r2) {
        t2.status = 4, r2 = e$(e10, r2, t2), eq(e10, t2.id, r2), e10.abortableTasks.delete(t2), e6(e10);
      }
      var eW = {};
      function eY(e10, t2) {
        if (0 === t2.status) {
          t2.status = 5;
          var r2 = eO;
          try {
            ej = t2.model;
            var n2 = eU(e10, t2, eW, "", t2.model);
            if (ej = n2, t2.keyPath = null, t2.implicitSlot = false, "object" == typeof n2 && null !== n2) e10.writtenObjects.set(n2, ek(t2.id)), eK(e10, t2, n2);
            else {
              var i2 = ey(n2);
              eF(e10, t2.id, i2);
            }
            t2.status = 1, e10.abortableTasks.delete(t2), e6(e10);
          } catch (r3) {
            if (12 === e10.status) if (e10.abortableTasks.delete(t2), t2.status = 0, 21 === e10.type) e1(t2), e2(t2, e10);
            else {
              var a2 = e10.fatalError;
              eQ(t2), e0(t2, e10, a2);
            }
            else {
              var o2 = r3 === Z ? Q() : r3;
              if ("object" == typeof o2 && null !== o2 && "function" == typeof o2.then) {
                t2.status = 0, t2.thenableState = en();
                var s2 = t2.ping;
                o2.then(s2, s2);
              } else eX(e10, t2, o2);
            }
          } finally {
            eO = r2;
          }
        }
      }
      function eZ(e10, t2) {
        var r2 = eO;
        try {
          eK(e10, t2, t2.model);
        } finally {
          eO = r2;
        }
      }
      function eJ(e10) {
        var t2 = eu.H;
        eu.H = ei;
        var r2 = ew;
        ee = ew = e10;
        try {
          var n2 = e10.pingedTasks;
          e10.pingedTasks = [];
          for (var i2 = 0; i2 < n2.length; i2++) eY(e10, n2[i2]);
          e3(e10);
        } catch (t3) {
          e$(e10, t3, null), eG(e10, t3);
        } finally {
          eu.H = t2, ee = null, ew = r2;
        }
      }
      function eQ(e10) {
        0 === e10.status && (e10.status = 3);
      }
      function e0(e10, t2, r2) {
        3 === e10.status && (r2 = ek(r2), e10 = eM(t2, e10.id, r2), t2.completedErrorChunks.push(e10));
      }
      function e1(e10) {
        0 === e10.status && (e10.status = 3);
      }
      function e2(e10, t2) {
        3 === e10.status && t2.pendingChunks--;
      }
      function e3(e10) {
        var t2 = e10.destination;
        if (null !== t2) {
          S = new Uint8Array(4096), C = 0;
          try {
            for (var r2 = e10.completedImportChunks, n2 = 0; n2 < r2.length; n2++) e10.pendingChunks--, T(t2, r2[n2]);
            r2.splice(0, n2);
            var i2 = e10.completedHintChunks;
            for (n2 = 0; n2 < i2.length; n2++) T(t2, i2[n2]);
            i2.splice(0, n2);
            var a2 = e10.completedRegularChunks;
            for (n2 = 0; n2 < a2.length; n2++) e10.pendingChunks--, T(t2, a2[n2]);
            a2.splice(0, n2);
            var o2 = e10.completedErrorChunks;
            for (n2 = 0; n2 < o2.length; n2++) e10.pendingChunks--, T(t2, o2[n2]);
            o2.splice(0, n2);
          } finally {
            e10.flushScheduled = false, S && 0 < C && (t2.enqueue(new Uint8Array(S.buffer, 0, C)), S = null, C = 0);
          }
        }
        0 === e10.pendingChunks && (12 > e10.status && e10.cacheController.abort(Error("This render completed successfully. All cacheSignals are now aborted to allow clean up of any unused resources.")), null !== e10.destination && (e10.status = 14, e10.destination.close(), e10.destination = null));
      }
      function e4(e10) {
        e10.flushScheduled = null !== e10.destination, z ? E(function() {
          K.run(e10, eJ, e10);
        }) : E(function() {
          return eJ(e10);
        }), setTimeout(function() {
          10 === e10.status && (e10.status = 11);
        }, 0);
      }
      function e9(e10) {
        false === e10.flushScheduled && 0 === e10.pingedTasks.length && null !== e10.destination && (e10.flushScheduled = true, setTimeout(function() {
          e10.flushScheduled = false, e3(e10);
        }, 0));
      }
      function e6(e10) {
        0 === e10.abortableTasks.size && (e10 = e10.onAllReady)();
      }
      function e5(e10, t2) {
        if (13 === e10.status) e10.status = 14, O(t2, e10.fatalError);
        else if (14 !== e10.status && null === e10.destination) {
          e10.destination = t2;
          try {
            e3(e10);
          } catch (t3) {
            e$(e10, t3, null), eG(e10, t3);
          }
        }
      }
      function e8(e10, t2) {
        if (!(11 < e10.status)) try {
          e10.status = 12, e10.cacheController.abort(t2);
          var r2 = e10.abortableTasks;
          if (0 < r2.size) if (21 === e10.type) r2.forEach(function(t3) {
            return e1(t3, e10);
          }), setTimeout(function() {
            try {
              r2.forEach(function(t3) {
                return e2(t3, e10);
              }), (0, e10.onAllReady)(), e3(e10);
            } catch (t3) {
              e$(e10, t3, null), eG(e10, t3);
            }
          }, 0);
          else {
            var n2 = void 0 === t2 ? Error("The render was aborted by the server without a reason.") : "object" == typeof t2 && null !== t2 && "function" == typeof t2.then ? Error("The render was aborted by the server with a promise.") : t2, i2 = e$(e10, n2, null), a2 = e10.nextChunkId++;
            e10.fatalError = a2, e10.pendingChunks++, eq(e10, a2, i2, n2, false, null), r2.forEach(function(t3) {
              return eQ(t3, e10, a2);
            }), setTimeout(function() {
              try {
                r2.forEach(function(t3) {
                  return e0(t3, e10, a2);
                }), (0, e10.onAllReady)(), e3(e10);
              } catch (t3) {
                e$(e10, t3, null), eG(e10, t3);
              }
            }, 0);
          }
          else (0, e10.onAllReady)(), e3(e10);
        } catch (t3) {
          e$(e10, t3, null), eG(e10, t3);
        }
      }
      function e7(e10, t2) {
        var r2 = "", n2 = e10[t2];
        if (n2) r2 = n2.name;
        else {
          var i2 = t2.lastIndexOf("#");
          if (-1 !== i2 && (r2 = t2.slice(i2 + 1), n2 = e10[t2.slice(0, i2)]), !n2) throw Error('Could not find the module "' + t2 + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
        }
        return n2.async ? [n2.id, n2.chunks, r2, 1] : [n2.id, n2.chunks, r2];
      }
      function te(e10) {
        var t2 = globalThis.__next_require__(e10);
        return "function" != typeof t2.then || "fulfilled" === t2.status ? null : (t2.then(function(e11) {
          t2.status = "fulfilled", t2.value = e11;
        }, function(e11) {
          t2.status = "rejected", t2.reason = e11;
        }), t2);
      }
      var tt = /* @__PURE__ */ new WeakSet(), tr = /* @__PURE__ */ new WeakSet();
      function tn() {
      }
      function ti(e10) {
        for (var t2 = e10[1], r2 = [], n2 = 0; n2 < t2.length; n2++) {
          var i2 = globalThis.__next_chunk_load__(t2[n2]);
          if (tr.has(i2) || r2.push(i2), !tt.has(i2)) {
            var a2 = tr.add.bind(tr, i2);
            i2.then(a2, tn), tt.add(i2);
          }
        }
        return 4 === e10.length ? 0 === r2.length ? te(e10[0]) : Promise.all(r2).then(function() {
          return te(e10[0]);
        }) : 0 < r2.length ? Promise.all(r2) : null;
      }
      function ta(e10) {
        var t2 = globalThis.__next_require__(e10[0]);
        if (4 === e10.length && "function" == typeof t2.then) if ("fulfilled" === t2.status) t2 = t2.value;
        else throw t2.reason;
        return "*" === e10[2] ? t2 : "" === e10[2] ? t2.__esModule ? t2.default : t2 : e_.call(t2, e10[2]) ? t2[e10[2]] : void 0;
      }
      var to = Symbol();
      function ts(e10, t2, r2) {
        this.status = e10, this.value = t2, this.reason = r2;
      }
      ts.prototype = Object.create(Promise.prototype), ts.prototype.then = function(e10, t2) {
        switch ("resolved_model" === this.status && tb(this), this.status) {
          case "fulfilled":
            if ("function" == typeof e10) {
              for (var r2 = this.value, n2 = 0, i2 = /* @__PURE__ */ new Set(); r2 instanceof ts; ) {
                if (n2++, r2 === this || i2.has(r2) || 1e3 < n2) {
                  "function" == typeof t2 && t2(Error("Cannot have cyclic thenables."));
                  return;
                }
                if (i2.add(r2), "fulfilled" === r2.status) r2 = r2.value;
                else break;
              }
              e10(this.value);
            }
            break;
          case "pending":
          case "blocked":
            "function" == typeof e10 && (null === this.value && (this.value = []), this.value.push(e10)), "function" == typeof t2 && (null === this.reason && (this.reason = []), this.reason.push(t2));
            break;
          default:
            "function" == typeof t2 && t2(this.reason);
        }
      };
      var tl = Object.prototype, tu = Array.prototype;
      function tc(e10, t2, r2, n2) {
        for (var i2 = 0; i2 < t2.length; i2++) {
          var a2 = t2[i2];
          "function" == typeof a2 ? a2(r2) : tS(e10, a2, r2, n2.reason);
        }
      }
      function td(e10, t2, r2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var i2 = t2[n2];
          "function" == typeof i2 ? i2(r2) : tT(e10, i2.handler, r2);
        }
      }
      function th(e10, t2, r2) {
        if ("pending" !== t2.status && "blocked" !== t2.status) t2.reason.error(r2);
        else {
          var n2 = t2.reason;
          t2.status = "rejected", t2.reason = r2, null !== n2 && td(e10, n2, r2);
        }
      }
      function tf(e10, t2, r2) {
        var n2 = {};
        return new ts("resolved_model", t2, (n2.id = r2, n2[to] = e10, n2));
      }
      function tp(e10, t2, r2, n2) {
        if ("pending" !== t2.status) t2 = t2.reason, "C" === r2[0] ? t2.close("C" === r2 ? '"$undefined"' : r2.slice(1)) : t2.enqueueModel(r2);
        else {
          var i2 = t2.value, a2 = t2.reason;
          if (t2.status = "resolved_model", t2.value = r2, r2 = {}, t2.reason = (r2.id = n2, r2[to] = e10, r2), null !== i2) switch (tb(t2), t2.status) {
            case "fulfilled":
              tc(e10, i2, t2.value, t2);
              break;
            case "blocked":
            case "pending":
              if (t2.value) for (e10 = 0; e10 < i2.length; e10++) t2.value.push(i2[e10]);
              else t2.value = i2;
              if (t2.reason) {
                if (a2) for (i2 = 0; i2 < a2.length; i2++) t2.reason.push(a2[i2]);
              } else t2.reason = a2;
              break;
            case "rejected":
              a2 && td(e10, a2, t2.reason);
          }
        }
      }
      function tg(e10, t2, r2) {
        var n2 = {};
        return new ts("resolved_model", (r2 ? '{"done":true,"value":' : '{"done":false,"value":') + t2 + "}", (n2.id = -1, n2[to] = e10, n2));
      }
      function t_(e10, t2, r2, n2) {
        tp(e10, t2, (n2 ? '{"done":true,"value":' : '{"done":false,"value":') + r2 + "}", -1);
      }
      function tm(e10, t2, r2, n2) {
        function i2(t3) {
          var r3 = s2.reason;
          s2.status = "rejected", s2.value = null, s2.reason = t3, null !== r3 && td(e10, r3, t3), tT(e10, u2, t3);
        }
        var a2 = t2.id;
        if ("string" != typeof a2 || "then" === n2) return null;
        var o2 = t2.$$promise;
        if (void 0 !== o2) return "fulfilled" === o2.status ? (o2 = o2.value, "__proto__" === n2 ? null : r2[n2] = o2) : (tv ? (a2 = tv, a2.deps++) : a2 = tv = { chunk: null, value: null, reason: null, deps: 1, errored: false }, o2.then(tC.bind(null, e10, a2, r2, n2), tT.bind(null, e10, a2)), null);
        var s2 = new ts("blocked", null, null);
        t2.$$promise = s2;
        var l2 = e7(e10._bundlerConfig, a2);
        if (o2 = t2.bound, a2 = ti(l2)) o2 instanceof ts && (a2 = Promise.all([a2, o2]));
        else {
          if (!(o2 instanceof ts)) return o2 = ta(l2), (a2 = s2).status = "fulfilled", a2.value = o2, a2.reason = null, o2;
          a2 = Promise.resolve(o2);
        }
        if (tv) {
          var u2 = tv;
          u2.deps++;
        } else u2 = tv = { chunk: null, value: null, reason: null, deps: 1, errored: false };
        return a2.then(function() {
          var a3 = ta(l2);
          if (t2.bound) {
            var o3 = t2.bound.value;
            if (1e3 < (o3 = ec(o3) ? o3.slice(0) : []).length) return void i2(Error("Server Function has too many bound arguments. Received " + o3.length + " but the limit is 1000."));
            o3.unshift(null), a3 = a3.bind.apply(a3, o3);
          }
          o3 = s2.value, s2.status = "fulfilled", s2.value = a3, s2.reason = null, null !== o3 && tc(e10, o3, a3, s2), tC(e10, u2, r2, n2, a3);
        }, i2), null;
      }
      function ty(e10, t2, r2) {
        if ((e10.count += t2) > r2._arraySizeLimit && e10.fork) throw Error("Maximum array nesting exceeded. Large nested arrays can be dangerous. Try adding intermediate objects.");
      }
      var tv = null;
      function tb(e10) {
        var t2 = tv;
        tv = null;
        var r2 = e10.reason, n2 = r2[to];
        r2 = -1 === (r2 = r2.id) ? void 0 : r2.toString(16);
        var i2 = e10.value;
        e10.status = "blocked", e10.value = null, e10.reason = null;
        try {
          var a2 = JSON.parse(i2);
          i2 = { count: 0, fork: false };
          var o2 = function e11(t3, r3, n3, i3, a3, o3) {
            if ("string" == typeof i3) return function(e12, t4, r4, n4, i4, a4) {
              if ("$" === n4[0]) {
                switch (n4[1]) {
                  case "$":
                    return null !== a4 && ty(a4, n4.length - 1, e12), n4.slice(1);
                  case "@":
                    return tE(e12, t4 = parseInt(n4.slice(2), 16));
                  case "h":
                    return tR(e12, a4 = n4.slice(2), t4, r4, null, tm);
                  case "T":
                    var o4, s4, l3;
                    if (void 0 === i4 || void 0 === e12._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
                    return o4 = e12._temporaryReferences, s4 = i4, l3 = new Proxy(l3 = Object.defineProperties(function() {
                      throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
                    }, { $$typeof: { value: X } }), W), o4.set(l3, s4), l3;
                  case "Q":
                    return tR(e12, a4 = n4.slice(2), t4, r4, null, tP);
                  case "W":
                    return tR(e12, a4 = n4.slice(2), t4, r4, null, tx);
                  case "K":
                    for (t4 = n4.slice(2), t4 = e12._prefix + t4 + "_", r4 = new FormData(), a4 = Array.from((e12 = e12._formData).keys()), n4 = 0; n4 < a4.length; n4++) if ((i4 = a4[n4]).startsWith(t4)) {
                      for (var u2 = e12.getAll(i4), c2 = i4.slice(t4.length), d2 = 0; d2 < u2.length; d2++) r4.append(c2, u2[d2]);
                      e12.delete(i4);
                    }
                    return r4;
                  case "i":
                    return tR(e12, a4 = n4.slice(2), t4, r4, null, tO);
                  case "I":
                    return 1 / 0;
                  case "-":
                    return "$-0" === n4 ? -0 : -1 / 0;
                  case "N":
                    return NaN;
                  case "u":
                    return;
                  case "D":
                    return new Date(Date.parse(n4.slice(2)));
                  case "n":
                    if (300 < (t4 = n4.slice(2)).length) throw Error("BigInt is too large. Received " + t4.length + " digits but the limit is 300.");
                    return null !== a4 && ty(a4, t4.length, e12), BigInt(t4);
                  case "A":
                    return tN(e12, n4, ArrayBuffer, 1, t4, r4, a4);
                  case "O":
                    return tN(e12, n4, Int8Array, 1, t4, r4, a4);
                  case "o":
                    return tN(e12, n4, Uint8Array, 1, t4, r4, a4);
                  case "U":
                    return tN(e12, n4, Uint8ClampedArray, 1, t4, r4, a4);
                  case "S":
                    return tN(e12, n4, Int16Array, 2, t4, r4, a4);
                  case "s":
                    return tN(e12, n4, Uint16Array, 2, t4, r4, a4);
                  case "L":
                    return tN(e12, n4, Int32Array, 4, t4, r4, a4);
                  case "l":
                    return tN(e12, n4, Uint32Array, 4, t4, r4, a4);
                  case "G":
                    return tN(e12, n4, Float32Array, 4, t4, r4, a4);
                  case "g":
                    return tN(e12, n4, Float64Array, 8, t4, r4, a4);
                  case "M":
                    return tN(e12, n4, BigInt64Array, 8, t4, r4, a4);
                  case "m":
                    return tN(e12, n4, BigUint64Array, 8, t4, r4, a4);
                  case "V":
                    return tN(e12, n4, DataView, 1, t4, r4, a4);
                  case "B":
                    if (t4 = parseInt(n4.slice(2), 16), !((e12 = e12._formData.get(e12._prefix + t4)) instanceof Blob)) throw Error("Referenced Blob is not a Blob.");
                    return e12;
                  case "R":
                    return tk(e12, n4, void 0);
                  case "r":
                    return tk(e12, n4, "bytes");
                  case "X":
                    return tM(e12, n4, false);
                  case "x":
                    return tM(e12, n4, true);
                }
                return tR(e12, n4 = n4.slice(1), t4, r4, a4, tA);
              }
              return null !== a4 && ty(a4, n4.length, e12), n4;
            }(t3, r3, n3, i3, a3, o3);
            if ("object" == typeof i3 && null !== i3) if (void 0 !== a3 && void 0 !== t3._temporaryReferences && t3._temporaryReferences.set(i3, a3), ec(i3)) {
              if (null === o3) {
                var s3 = { count: 0, fork: false };
                t3._rootArrayContexts.set(i3, s3);
              } else s3 = o3;
              for (1 < i3.length && (s3.fork = true), ty(s3, i3.length + 1, t3), r3 = 0; r3 < i3.length; r3++) i3[r3] = e11(t3, i3, "" + r3, i3[r3], void 0 !== a3 ? a3 + ":" + r3 : void 0, s3);
            } else for (s3 in i3) e_.call(i3, s3) && ("__proto__" === s3 ? delete i3[s3] : (r3 = void 0 !== a3 && -1 === s3.indexOf(":") ? a3 + ":" + s3 : void 0, void 0 !== (r3 = e11(t3, i3, s3, i3[s3], r3, null)) ? i3[s3] = r3 : delete i3[s3]));
            return i3;
          }(n2, { "": a2 }, "", a2, r2, i2), s2 = e10.value;
          if (null !== s2) for (e10.value = null, e10.reason = null, a2 = 0; a2 < s2.length; a2++) {
            var l2 = s2[a2];
            "function" == typeof l2 ? l2(o2) : tS(n2, l2, o2, i2);
          }
          if (null !== tv) {
            if (tv.errored) throw tv.reason;
            if (0 < tv.deps) {
              tv.value = o2, tv.reason = i2, tv.chunk = e10;
              return;
            }
          }
          e10.status = "fulfilled", e10.value = o2, e10.reason = i2;
        } catch (t3) {
          e10.status = "rejected", e10.reason = t3;
        } finally {
          tv = t2;
        }
      }
      function tw(e10, t2) {
        e10._closed = true, e10._closedReason = t2, e10._chunks.forEach(function(r2) {
          "pending" === r2.status ? th(e10, r2, t2) : "fulfilled" === r2.status && null !== r2.reason && "function" == typeof (r2 = r2.reason).error && r2.error(t2);
        });
      }
      function tE(e10, t2) {
        var r2 = e10._chunks, n2 = r2.get(t2);
        return n2 || (n2 = "string" == typeof (n2 = e10._formData.get(e10._prefix + t2)) ? tf(e10, n2, t2) : e10._closed ? new ts("rejected", null, e10._closedReason) : new ts("pending", null, null), r2.set(t2, n2)), n2;
      }
      function tS(e10, t2, r2, n2) {
        var i2 = t2.handler, a2 = t2.parentObject, o2 = t2.key, s2 = t2.map, l2 = t2.path;
        try {
          for (var u2 = 0, c2 = e10._rootArrayContexts, d2 = 1; d2 < l2.length; d2++) {
            var h2 = l2[d2];
            if ("object" != typeof r2 || null === r2 || ed(r2) !== tl && ed(r2) !== tu || !e_.call(r2, h2)) throw Error("Invalid reference.");
            if (r2 = r2[h2], ec(r2)) u2 = 0, n2 = c2.get(r2) || n2;
            else if (n2 = null, "string" == typeof r2) u2 = r2.length;
            else if ("bigint" == typeof r2) {
              var f2 = Math.abs(Number(r2));
              u2 = 0 === f2 ? 1 : Math.floor(Math.log10(f2)) + 1;
            } else u2 = ArrayBuffer.isView(r2) ? r2.byteLength : 0;
          }
          var p2 = s2(e10, r2, a2, o2), g2 = t2.arrayRoot;
          null !== g2 && (null !== n2 ? (n2.fork && (g2.fork = true), ty(g2, n2.count, e10)) : 0 < u2 && ty(g2, u2, e10));
        } catch (t3) {
          tT(e10, i2, t3);
          return;
        }
        tC(e10, i2, a2, o2, p2);
      }
      function tC(e10, t2, r2, n2, i2) {
        "__proto__" !== n2 && (r2[n2] = i2), "" === n2 && null === t2.value && (t2.value = i2), t2.deps--, 0 === t2.deps && null !== (r2 = t2.chunk) && "blocked" === r2.status && (n2 = r2.value, r2.status = "fulfilled", r2.value = t2.value, r2.reason = t2.reason, null !== n2 && tc(e10, n2, t2.value, r2));
      }
      function tT(e10, t2, r2) {
        t2.errored || (t2.errored = true, t2.value = null, t2.reason = r2, null !== (t2 = t2.chunk) && "blocked" === t2.status && th(e10, t2, r2));
      }
      function tR(e10, t2, r2, n2, i2, a2) {
        var o2 = parseInt((t2 = t2.split(":"))[0], 16), s2 = tE(e10, o2);
        switch ("resolved_model" === s2.status && tb(s2), s2.status) {
          case "fulfilled":
            o2 = s2.value, s2 = s2.reason;
            for (var l2 = 0, u2 = e10._rootArrayContexts, c2 = 1; c2 < t2.length; c2++) {
              if (l2 = t2[c2], "object" != typeof o2 || null === o2 || ed(o2) !== tl && ed(o2) !== tu || !e_.call(o2, l2)) throw Error("Invalid reference.");
              ec(o2 = o2[l2]) ? (l2 = 0, s2 = u2.get(o2) || s2) : (s2 = null, l2 = "string" == typeof o2 ? o2.length : "bigint" == typeof o2 ? 0 === (l2 = Math.abs(Number(o2))) ? 1 : Math.floor(Math.log10(l2)) + 1 : ArrayBuffer.isView(o2) ? o2.byteLength : 0);
            }
            return r2 = a2(e10, o2, r2, n2), null !== i2 && (null !== s2 ? (s2.fork && (i2.fork = true), ty(i2, s2.count, e10)) : 0 < l2 && ty(i2, l2, e10)), r2;
          case "blocked":
            return tv ? (e10 = tv, e10.deps++) : e10 = tv = { chunk: null, value: null, reason: null, deps: 1, errored: false }, i2 = { handler: e10, parentObject: r2, key: n2, map: a2, path: t2, arrayRoot: i2 }, null === s2.value ? s2.value = [i2] : s2.value.push(i2), null === s2.reason ? s2.reason = [i2] : s2.reason.push(i2), null;
          case "pending":
            throw Error("Invalid forward reference.");
          default:
            return tv ? (tv.errored = true, tv.value = null, tv.reason = s2.reason) : tv = { chunk: null, value: null, reason: s2.reason, deps: 0, errored: true }, null;
        }
      }
      function tP(e10, t2) {
        if (!ec(t2)) throw Error("Invalid Map initializer.");
        if (true === t2.$$consumed) throw Error("Already initialized Map.");
        return e10 = new Map(t2), t2.$$consumed = true, e10;
      }
      function tx(e10, t2) {
        if (!ec(t2)) throw Error("Invalid Set initializer.");
        if (true === t2.$$consumed) throw Error("Already initialized Set.");
        return e10 = new Set(t2), t2.$$consumed = true, e10;
      }
      function tO(e10, t2) {
        if (!ec(t2)) throw Error("Invalid Iterator initializer.");
        if (true === t2.$$consumed) throw Error("Already initialized Iterator.");
        return e10 = t2[Symbol.iterator](), t2.$$consumed = true, e10;
      }
      function tA(e10, t2, r2, n2) {
        return "then" === n2 && "function" == typeof t2 ? null : t2;
      }
      function tN(e10, t2, r2, n2, i2, a2, o2) {
        function s2(t3) {
          if (!u2.errored) {
            u2.errored = true, u2.value = null, u2.reason = t3;
            var r3 = u2.chunk;
            null !== r3 && "blocked" === r3.status && th(e10, r3, t3);
          }
        }
        t2 = parseInt(t2.slice(2), 16);
        var l2 = e10._prefix + t2;
        if ((n2 = e10._chunks).has(t2)) throw Error("Already initialized typed array.");
        if (n2.set(t2, new ts("rejected", null, Error("Already initialized typed array."))), t2 = e10._formData.get(l2).arrayBuffer(), tv) {
          var u2 = tv;
          u2.deps++;
        } else u2 = tv = { chunk: null, value: null, reason: null, deps: 1, errored: false };
        return t2.then(function(t3) {
          try {
            null !== o2 && ty(o2, t3.byteLength, e10);
            var n3 = r2 === ArrayBuffer ? t3 : new r2(t3);
            "__proto__" !== l2 && (i2[a2] = n3), "" === a2 && null === u2.value && (u2.value = n3);
          } catch (e11) {
            s2(e11);
            return;
          }
          u2.deps--, 0 === u2.deps && null !== (t3 = u2.chunk) && "blocked" === t3.status && (n3 = t3.value, t3.status = "fulfilled", t3.value = u2.value, t3.reason = null, null !== n3 && tc(e10, n3, u2.value, t3));
        }, s2), null;
      }
      function tI(e10, t2, r2, n2) {
        var i2 = e10._chunks;
        for (r2 = new ts("fulfilled", r2, n2), i2.set(t2, r2), e10 = e10._formData.getAll(e10._prefix + t2), t2 = 0; t2 < e10.length; t2++) "string" == typeof (i2 = e10[t2]) && ("C" === i2[0] ? n2.close("C" === i2 ? '"$undefined"' : i2.slice(1)) : n2.enqueueModel(i2));
      }
      function tk(e10, t2, r2) {
        function n2(e11) {
          "bytes" !== r2 || ArrayBuffer.isView(e11) ? i2.enqueue(e11) : l2.error(Error("Invalid data for bytes stream."));
        }
        if (t2 = parseInt(t2.slice(2), 16), e10._chunks.has(t2)) throw Error("Already initialized stream.");
        var i2 = null, a2 = false, o2 = new ReadableStream({ type: r2, start: function(e11) {
          i2 = e11;
        } }), s2 = null, l2 = { enqueueModel: function(t3) {
          if (null === s2) {
            var r3 = tf(e10, t3, -1);
            tb(r3), "fulfilled" === r3.status ? n2(r3.value) : (r3.then(n2, l2.error), s2 = r3);
          } else {
            r3 = s2;
            var i3 = new ts("pending", null, null);
            i3.then(n2, l2.error), s2 = i3, r3.then(function() {
              s2 === i3 && (s2 = null), tp(e10, i3, t3, -1);
            });
          }
        }, close: function() {
          if (!a2) if (a2 = true, null === s2) i2.close();
          else {
            var e11 = s2;
            s2 = null, e11.then(function() {
              return i2.close();
            });
          }
        }, error: function(e11) {
          if (!a2) if (a2 = true, null === s2) i2.error(e11);
          else {
            var t3 = s2;
            s2 = null, t3.then(function() {
              return i2.error(e11);
            });
          }
        } };
        return tI(e10, t2, o2, l2), o2;
      }
      function tL(e10) {
        this.next = e10;
      }
      function tM(e10, t2, r2) {
        if (t2 = parseInt(t2.slice(2), 16), e10._chunks.has(t2)) throw Error("Already initialized stream.");
        var n2 = [], i2 = false, a2 = 0, o2 = {};
        return o2[y] = function() {
          var e11 = 0;
          return new tL(function(t3) {
            if (void 0 !== t3) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
            if (e11 === n2.length) {
              if (i2) return new ts("fulfilled", { done: true, value: void 0 }, null);
              n2[e11] = new ts("pending", null, null);
            }
            return n2[e11++];
          });
        }, tI(e10, t2, r2 = r2 ? o2[y]() : o2, { enqueueModel: function(t3) {
          a2 === n2.length ? n2[a2] = tg(e10, t3, false) : t_(e10, n2[a2], t3, false), a2++;
        }, close: function(t3) {
          if (!i2) for (i2 = true, a2 === n2.length ? n2[a2] = tg(e10, t3, true) : t_(e10, n2[a2], t3, true), a2++; a2 < n2.length; ) t_(e10, n2[a2++], '"$undefined"', true);
        }, error: function(t3) {
          if (!i2) for (i2 = true, a2 === n2.length && (n2[a2] = new ts("pending", null, null)); a2 < n2.length; ) th(e10, n2[a2++], t3);
        } }), r2;
      }
      function tD(e10, t2, r2) {
        var n2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), i2 = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1e6;
        return { _bundlerConfig: e10, _prefix: t2, _formData: n2, _chunks: /* @__PURE__ */ new Map(), _closed: false, _closedReason: null, _temporaryReferences: r2, _rootArrayContexts: /* @__PURE__ */ new WeakMap(), _arraySizeLimit: i2 };
      }
      function tB(e10) {
        tw(e10, Error("Connection closed."));
      }
      function tH(e10, t2) {
        var r2 = t2.id;
        if ("string" != typeof r2) return null;
        var n2 = e7(e10, r2);
        return e10 = ti(n2), (t2 = t2.bound) instanceof Promise ? Promise.all([t2, e10]).then(function(e11) {
          e11 = e11[0];
          var t3 = ta(n2);
          if (1e3 < e11.length) throw Error("Server Function has too many bound arguments. Received " + e11.length + " but the limit is 1000.");
          return t3.bind.apply(t3, [null].concat(e11));
        }) : e10 ? Promise.resolve(e10).then(function() {
          return ta(n2);
        }) : Promise.resolve(ta(n2));
      }
      function tj(e10, t2, r2, n2) {
        if (tB(e10 = tD(t2, r2, void 0, e10, n2)), (e10 = tE(e10, 0)).then(function() {
        }), "fulfilled" !== e10.status) throw e10.reason;
        return e10.value;
      }
      tL.prototype = {}, tL.prototype[y] = function() {
        return this;
      }, r.createClientModuleProxy = function(e10) {
        return new Proxy(e10 = I({}, e10, false), U);
      }, r.createTemporaryReferenceSet = function() {
        return /* @__PURE__ */ new WeakMap();
      }, r.decodeAction = function(e10, t2) {
        var r2 = new FormData(), n2 = null, i2 = /* @__PURE__ */ new Set();
        return e10.forEach(function(a2, o2) {
          o2.startsWith("$ACTION_") ? o2.startsWith("$ACTION_REF_") ? i2.has(o2) || (i2.add(o2), a2 = tj(e10, t2, a2 = "$ACTION_" + o2.slice(12) + ":"), n2 = tH(t2, a2)) : o2.startsWith("$ACTION_ID_") && !i2.has(o2) && (i2.add(o2), n2 = tH(t2, { id: a2 = o2.slice(11), bound: null })) : r2.append(o2, a2);
        }), null === n2 ? null : n2.then(function(e11) {
          return e11.bind(null, r2);
        });
      }, r.decodeFormState = function(e10, t2, r2) {
        var n2 = t2.get("$ACTION_KEY");
        if ("string" != typeof n2) return Promise.resolve(null);
        var i2 = null;
        if (t2.forEach(function(e11, n3) {
          n3.startsWith("$ACTION_REF_") && (i2 = tj(t2, r2, "$ACTION_" + n3.slice(12) + ":"));
        }), null === i2) return Promise.resolve(null);
        var a2 = i2.id;
        return Promise.resolve(i2.bound).then(function(t3) {
          return null === t3 ? null : [e10, n2, a2, t3.length - 1];
        });
      }, r.decodeReply = function(e10, t2, r2) {
        if ("string" == typeof e10) {
          var n2 = new FormData();
          n2.append("0", e10), e10 = n2;
        }
        return t2 = tE(e10 = tD(t2, "", r2 ? r2.temporaryReferences : void 0, e10, r2 ? r2.arraySizeLimit : void 0), 0), tB(e10), t2;
      }, r.decodeReplyFromAsyncIterable = function(e10, t2, r2) {
        function n2(e11) {
          tw(a2, e11), "function" == typeof i2.throw && i2.throw(e11).then(n2, n2);
        }
        var i2 = e10[y](), a2 = tD(t2, "", r2 ? r2.temporaryReferences : void 0, void 0, r2 ? r2.arraySizeLimit : void 0);
        return i2.next().then(function e11(t3) {
          if (t3.done) tB(a2);
          else {
            var r3 = (t3 = t3.value)[0];
            if ("string" == typeof (t3 = t3[1])) {
              a2._formData.append(r3, t3);
              var o2 = a2._prefix;
              if (r3.startsWith(o2)) {
                var s2 = a2._chunks;
                r3 = +r3.slice(o2.length), (s2 = s2.get(r3)) && tp(a2, s2, t3, r3);
              }
            } else a2._formData.append(r3, t3);
            i2.next().then(e11, n2);
          }
        }, n2), tE(a2, 0);
      }, r.prerender = function(e10, t2, r2) {
        return new Promise(function(n2, i2) {
          var a2 = new eb(21, e10, t2, r2 ? r2.onError : void 0, function() {
            n2({ prelude: new ReadableStream({ type: "bytes", pull: function(e11) {
              e5(a2, e11);
            }, cancel: function(e11) {
              a2.destination = null, e8(a2, e11);
            } }, { highWaterMark: 0 }) });
          }, i2, r2 ? r2.identifierPrefix : void 0, r2 ? r2.temporaryReferences : void 0);
          if (r2 && r2.signal) {
            var o2 = r2.signal;
            if (o2.aborted) e8(a2, o2.reason);
            else {
              var s2 = function() {
                e8(a2, o2.reason), o2.removeEventListener("abort", s2);
              };
              o2.addEventListener("abort", s2);
            }
          }
          e4(a2);
        });
      }, r.registerClientReference = function(e10, t2, r2) {
        return I(e10, t2 + "#" + r2, false);
      }, r.registerServerReference = function(e10, t2, r2) {
        return Object.defineProperties(e10, { $$typeof: { value: N }, $$id: { value: null === r2 ? t2 : t2 + "#" + r2, configurable: true }, $$bound: { value: null, configurable: true }, bind: { value: M, configurable: true }, toString: D });
      }, r.renderToReadableStream = function(e10, t2, r2) {
        var n2 = new eb(20, e10, t2, r2 ? r2.onError : void 0, Y, Y, r2 ? r2.identifierPrefix : void 0, r2 ? r2.temporaryReferences : void 0);
        if (r2 && r2.signal) {
          var i2 = r2.signal;
          if (i2.aborted) e8(n2, i2.reason);
          else {
            var a2 = function() {
              e8(n2, i2.reason), i2.removeEventListener("abort", a2);
            };
            i2.addEventListener("abort", a2);
          }
        }
        return new ReadableStream({ type: "bytes", start: function() {
          e4(n2);
        }, pull: function(e11) {
          e5(n2, e11);
        }, cancel: function(e11) {
          n2.destination = null, e8(n2, e11);
        } }, { highWaterMark: 0 });
      };
    }, 48228, (e, t, r) => {
      "use strict";
      var n;
      r.renderToReadableStream = (n = e.r(13442)).renderToReadableStream, r.decodeReply = n.decodeReply, r.decodeReplyFromAsyncIterable = n.decodeReplyFromAsyncIterable, r.decodeAction = n.decodeAction, r.decodeFormState = n.decodeFormState, r.registerServerReference = n.registerServerReference, r.registerClientReference = n.registerClientReference, r.createClientModuleProxy = n.createClientModuleProxy, r.createTemporaryReferenceSet = n.createTemporaryReferenceSet;
    }, 82437, (e) => {
      "use strict";
      e.s(["default", () => t]);
      let t = (0, e.i(48228).registerClientReference)(function() {
        throw Error("Attempted to call the default export of [project]/node_modules/.pnpm/next-intl@4.9.0_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19._9f1829a68ed70f50ff7763336b2b8a29/node_modules/next-intl/dist/esm/production/navigation/shared/BaseLink.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
      }, "[project]/node_modules/.pnpm/next-intl@4.9.0_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19._9f1829a68ed70f50ff7763336b2b8a29/node_modules/next-intl/dist/esm/production/navigation/shared/BaseLink.js <module evaluation>", "default");
    }, 77712, (e) => {
      "use strict";
      e.s(["default", () => t]);
      let t = (0, e.i(48228).registerClientReference)(function() {
        throw Error("Attempted to call the default export of [project]/node_modules/.pnpm/next-intl@4.9.0_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19._9f1829a68ed70f50ff7763336b2b8a29/node_modules/next-intl/dist/esm/production/navigation/shared/BaseLink.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
      }, "[project]/node_modules/.pnpm/next-intl@4.9.0_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19._9f1829a68ed70f50ff7763336b2b8a29/node_modules/next-intl/dist/esm/production/navigation/shared/BaseLink.js", "default");
    }, 42514, (e) => {
      "use strict";
      e.i(82437);
      var t = e.i(77712);
      e.n(t);
    }, 7916, (e, t, r) => {
      "use strict";
      var n = e.r(26942), i = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
      if (!n.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
      function o(e2, t2, r2) {
        var n2 = null;
        if (void 0 !== r2 && (n2 = "" + r2), void 0 !== t2.key && (n2 = "" + t2.key), "key" in t2) for (var a2 in r2 = {}, t2) "key" !== a2 && (r2[a2] = t2[a2]);
        else r2 = t2;
        return { $$typeof: i, type: e2, key: n2, ref: void 0 !== (t2 = r2.ref) ? t2 : null, props: r2 };
      }
      r.Fragment = a, r.jsx = o, r.jsxDEV = void 0, r.jsxs = o;
    }, 46420, (e, t, r) => {
      "use strict";
      t.exports = e.r(7916);
    }, 52334, (e) => {
      "use strict";
      let t, r, n, i, a;
      async function o() {
        return "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
      }
      e.i(50759);
      let s = null;
      async function l() {
        if ("phase-production-build" === process.env.NEXT_PHASE) return;
        s || (s = o());
        let e10 = await s;
        if (null == e10 ? void 0 : e10.register) try {
          await e10.register();
        } catch (e11) {
          throw e11.message = `An error occurred while loading instrumentation hook: ${e11.message}`, e11;
        }
      }
      async function u(...e10) {
        let t10 = await o();
        try {
          var r10;
          await (null == t10 || null == (r10 = t10.onRequestError) ? void 0 : r10.call(t10, ...e10));
        } catch (e11) {
          console.error("Error in instrumentation.onRequestError:", e11);
        }
      }
      let c = null;
      function d() {
        return c || (c = l()), c;
      }
      function h(e10) {
        return `The edge runtime does not support Node.js '${e10}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      process !== e.g.process && (process.env = e.g.process.env, e.g.process = process);
      try {
        Object.defineProperty(globalThis, "__import_unsupported", { value: function(e10) {
          let t10 = new Proxy(function() {
          }, { get(t11, r10) {
            if ("then" === r10) return {};
            throw Object.defineProperty(Error(h(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, construct() {
            throw Object.defineProperty(Error(h(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          }, apply(r10, n10, i2) {
            if ("function" == typeof i2[0]) return i2[0](t10);
            throw Object.defineProperty(Error(h(e10)), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
          } });
          return new Proxy({}, { get: () => t10 });
        }, enumerable: false, configurable: false });
      } catch {
      }
      d();
      class f extends Error {
        constructor({ page: e10 }) {
          super(`The middleware "${e10}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class p extends Error {
        constructor() {
          super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ");
        }
      }
      class g extends Error {
        constructor() {
          super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ");
        }
      }
      let _ = "x-prerender-revalidate", m = ".meta", y = "x-next-cache-tags", v = "x-next-revalidated-tags", b = "_N_T_", w = { shared: "shared", reactServerComponents: "rsc", serverSideRendering: "ssr", actionBrowser: "action-browser", apiNode: "api-node", apiEdge: "api-edge", middleware: "middleware", instrument: "instrument", edgeAsset: "edge-asset", appPagesBrowser: "app-pages-browser", pagesDirBrowser: "pages-dir-browser", pagesDirEdge: "pages-dir-edge", pagesDirNode: "pages-dir-node" };
      function E(e10) {
        var t10, r10, n10, i2, a2, o2 = [], s2 = 0;
        function l2() {
          for (; s2 < e10.length && /\s/.test(e10.charAt(s2)); ) s2 += 1;
          return s2 < e10.length;
        }
        for (; s2 < e10.length; ) {
          for (t10 = s2, a2 = false; l2(); ) if ("," === (r10 = e10.charAt(s2))) {
            for (n10 = s2, s2 += 1, l2(), i2 = s2; s2 < e10.length && "=" !== (r10 = e10.charAt(s2)) && ";" !== r10 && "," !== r10; ) s2 += 1;
            s2 < e10.length && "=" === e10.charAt(s2) ? (a2 = true, s2 = i2, o2.push(e10.substring(t10, n10)), t10 = s2) : s2 = n10 + 1;
          } else s2 += 1;
          (!a2 || s2 >= e10.length) && o2.push(e10.substring(t10, e10.length));
        }
        return o2;
      }
      function S(e10) {
        let t10 = {}, r10 = [];
        if (e10) for (let [n10, i2] of e10.entries()) "set-cookie" === n10.toLowerCase() ? (r10.push(...E(i2)), t10[n10] = 1 === r10.length ? r10[0] : r10) : t10[n10] = i2;
        return t10;
      }
      function C(e10) {
        try {
          return String(new URL(String(e10)));
        } catch (t10) {
          throw Object.defineProperty(Error(`URL is malformed "${String(e10)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t10 }), "__NEXT_ERROR_CODE", { value: "E61", enumerable: false, configurable: true });
        }
      }
      ({ ...w, GROUP: { builtinReact: [w.reactServerComponents, w.actionBrowser], serverOnly: [w.reactServerComponents, w.actionBrowser, w.instrument, w.middleware], neutralTarget: [w.apiNode, w.apiEdge], clientOnly: [w.serverSideRendering, w.appPagesBrowser], bundled: [w.reactServerComponents, w.actionBrowser, w.serverSideRendering, w.appPagesBrowser, w.shared, w.instrument, w.middleware], appPages: [w.reactServerComponents, w.serverSideRendering, w.appPagesBrowser, w.actionBrowser] } });
      let T = Symbol("response"), R = Symbol("passThrough"), P = Symbol("waitUntil");
      class x {
        constructor(e10, t10) {
          this[R] = false, this[P] = t10 ? { kind: "external", function: t10 } : { kind: "internal", promises: [] };
        }
        respondWith(e10) {
          this[T] || (this[T] = Promise.resolve(e10));
        }
        passThroughOnException() {
          this[R] = true;
        }
        waitUntil(e10) {
          if ("external" === this[P].kind) return (0, this[P].function)(e10);
          this[P].promises.push(e10);
        }
      }
      class O extends x {
        constructor(e10) {
          var t10;
          super(e10.request, null == (t10 = e10.context) ? void 0 : t10.waitUntil), this.sourcePage = e10.page;
        }
        get request() {
          throw Object.defineProperty(new f({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new f({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      function A(e10) {
        return e10.replace(/\/$/, "") || "/";
      }
      function N(e10) {
        let t10 = e10.indexOf("#"), r10 = e10.indexOf("?"), n10 = r10 > -1 && (t10 < 0 || r10 < t10);
        return n10 || t10 > -1 ? { pathname: e10.substring(0, n10 ? r10 : t10), query: n10 ? e10.substring(r10, t10 > -1 ? t10 : void 0) : "", hash: t10 > -1 ? e10.slice(t10) : "" } : { pathname: e10, query: "", hash: "" };
      }
      function I(e10, t10) {
        if (!e10.startsWith("/") || !t10) return e10;
        let { pathname: r10, query: n10, hash: i2 } = N(e10);
        return `${t10}${r10}${n10}${i2}`;
      }
      function k(e10, t10) {
        if (!e10.startsWith("/") || !t10) return e10;
        let { pathname: r10, query: n10, hash: i2 } = N(e10);
        return `${r10}${t10}${n10}${i2}`;
      }
      function L(e10, t10) {
        if ("string" != typeof e10) return false;
        let { pathname: r10 } = N(e10);
        return r10 === t10 || r10.startsWith(t10 + "/");
      }
      let M = /* @__PURE__ */ new WeakMap();
      function D(e10, t10) {
        let r10;
        if (!t10) return { pathname: e10 };
        let n10 = M.get(t10);
        n10 || (n10 = t10.map((e11) => e11.toLowerCase()), M.set(t10, n10));
        let i2 = e10.split("/", 2);
        if (!i2[1]) return { pathname: e10 };
        let a2 = i2[1].toLowerCase(), o2 = n10.indexOf(a2);
        return o2 < 0 ? { pathname: e10 } : (r10 = t10[o2], { pathname: e10 = e10.slice(r10.length + 1) || "/", detectedLocale: r10 });
      }
      let B = /^(?:127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)$/;
      function H(e10, t10) {
        let r10 = new URL(String(e10), t10 && String(t10));
        return B.test(r10.hostname) && (r10.hostname = "localhost"), r10;
      }
      let j = Symbol("NextURLInternal");
      class U {
        constructor(e10, t10, r10) {
          let n10, i2;
          "object" == typeof t10 && "pathname" in t10 || "string" == typeof t10 ? (n10 = t10, i2 = r10 || {}) : i2 = r10 || t10 || {}, this[j] = { url: H(e10, n10 ?? i2.base), options: i2, basePath: "" }, this.analyze();
        }
        analyze() {
          var e10, t10, r10, n10, i2;
          let a2 = function(e11, t11) {
            let { basePath: r11, i18n: n11, trailingSlash: i3 } = t11.nextConfig ?? {}, a3 = { pathname: e11, trailingSlash: "/" !== e11 ? e11.endsWith("/") : i3 };
            r11 && L(a3.pathname, r11) && (a3.pathname = function(e12, t12) {
              if (!L(e12, t12)) return e12;
              let r12 = e12.slice(t12.length);
              return r12.startsWith("/") ? r12 : `/${r12}`;
            }(a3.pathname, r11), a3.basePath = r11);
            let o3 = a3.pathname;
            if (a3.pathname.startsWith("/_next/data/") && a3.pathname.endsWith(".json")) {
              let e12 = a3.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
              a3.buildId = e12[0], o3 = "index" !== e12[1] ? `/${e12.slice(1).join("/")}` : "/", true === t11.parseData && (a3.pathname = o3);
            }
            if (n11) {
              let e12 = t11.i18nProvider ? t11.i18nProvider.analyze(a3.pathname) : D(a3.pathname, n11.locales);
              a3.locale = e12.detectedLocale, a3.pathname = e12.pathname ?? a3.pathname, !e12.detectedLocale && a3.buildId && (e12 = t11.i18nProvider ? t11.i18nProvider.analyze(o3) : D(o3, n11.locales)).detectedLocale && (a3.locale = e12.detectedLocale);
            }
            return a3;
          }(this[j].url.pathname, { nextConfig: this[j].options.nextConfig, parseData: true, i18nProvider: this[j].options.i18nProvider }), o2 = function(e11, t11) {
            let r11;
            if (t11?.host && !Array.isArray(t11.host)) r11 = t11.host.toString().split(":", 1)[0];
            else {
              if (!e11.hostname) return;
              r11 = e11.hostname;
            }
            return r11.toLowerCase();
          }(this[j].url, this[j].options.headers);
          this[j].domainLocale = this[j].options.i18nProvider ? this[j].options.i18nProvider.detectDomainLocale(o2) : function(e11, t11, r11) {
            if (e11) {
              for (let n11 of (r11 && (r11 = r11.toLowerCase()), e11)) if (t11 === n11.domain?.split(":", 1)[0].toLowerCase() || r11 === n11.defaultLocale.toLowerCase() || n11.locales?.some((e12) => e12.toLowerCase() === r11)) return n11;
            }
          }(null == (t10 = this[j].options.nextConfig) || null == (e10 = t10.i18n) ? void 0 : e10.domains, o2);
          let s2 = (null == (r10 = this[j].domainLocale) ? void 0 : r10.defaultLocale) || (null == (i2 = this[j].options.nextConfig) || null == (n10 = i2.i18n) ? void 0 : n10.defaultLocale);
          this[j].url.pathname = a2.pathname, this[j].defaultLocale = s2, this[j].basePath = a2.basePath ?? "", this[j].buildId = a2.buildId, this[j].locale = a2.locale ?? s2, this[j].trailingSlash = a2.trailingSlash;
        }
        formatPathname() {
          var e10;
          let t10;
          return t10 = function(e11, t11, r10, n10) {
            if (!t11 || t11 === r10) return e11;
            let i2 = e11.toLowerCase();
            return !n10 && (L(i2, "/api") || L(i2, `/${t11.toLowerCase()}`)) ? e11 : I(e11, `/${t11}`);
          }((e10 = { basePath: this[j].basePath, buildId: this[j].buildId, defaultLocale: this[j].options.forceLocale ? void 0 : this[j].defaultLocale, locale: this[j].locale, pathname: this[j].url.pathname, trailingSlash: this[j].trailingSlash }).pathname, e10.locale, e10.buildId ? void 0 : e10.defaultLocale, e10.ignorePrefix), (e10.buildId || !e10.trailingSlash) && (t10 = A(t10)), e10.buildId && (t10 = k(I(t10, `/_next/data/${e10.buildId}`), "/" === e10.pathname ? "index.json" : ".json")), t10 = I(t10, e10.basePath), !e10.buildId && e10.trailingSlash ? t10.endsWith("/") ? t10 : k(t10, "/") : A(t10);
        }
        formatSearch() {
          return this[j].url.search;
        }
        get buildId() {
          return this[j].buildId;
        }
        set buildId(e10) {
          this[j].buildId = e10;
        }
        get locale() {
          return this[j].locale ?? "";
        }
        set locale(e10) {
          var t10, r10;
          if (!this[j].locale || !(null == (r10 = this[j].options.nextConfig) || null == (t10 = r10.i18n) ? void 0 : t10.locales.includes(e10))) throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e10}"`), "__NEXT_ERROR_CODE", { value: "E597", enumerable: false, configurable: true });
          this[j].locale = e10;
        }
        get defaultLocale() {
          return this[j].defaultLocale;
        }
        get domainLocale() {
          return this[j].domainLocale;
        }
        get searchParams() {
          return this[j].url.searchParams;
        }
        get host() {
          return this[j].url.host;
        }
        set host(e10) {
          this[j].url.host = e10;
        }
        get hostname() {
          return this[j].url.hostname;
        }
        set hostname(e10) {
          this[j].url.hostname = e10;
        }
        get port() {
          return this[j].url.port;
        }
        set port(e10) {
          this[j].url.port = e10;
        }
        get protocol() {
          return this[j].url.protocol;
        }
        set protocol(e10) {
          this[j].url.protocol = e10;
        }
        get href() {
          let e10 = this.formatPathname(), t10 = this.formatSearch();
          return `${this.protocol}//${this.host}${e10}${t10}${this.hash}`;
        }
        set href(e10) {
          this[j].url = H(e10), this.analyze();
        }
        get origin() {
          return this[j].url.origin;
        }
        get pathname() {
          return this[j].url.pathname;
        }
        set pathname(e10) {
          this[j].url.pathname = e10;
        }
        get hash() {
          return this[j].url.hash;
        }
        set hash(e10) {
          this[j].url.hash = e10;
        }
        get search() {
          return this[j].url.search;
        }
        set search(e10) {
          this[j].url.search = e10;
        }
        get password() {
          return this[j].url.password;
        }
        set password(e10) {
          this[j].url.password = e10;
        }
        get username() {
          return this[j].url.username;
        }
        set username(e10) {
          this[j].url.username = e10;
        }
        get basePath() {
          return this[j].basePath;
        }
        set basePath(e10) {
          this[j].basePath = e10.startsWith("/") ? e10 : `/${e10}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new U(String(this), this[j].options);
        }
      }
      var $, G, q, F, V, z, K, X, W, Y, Z, J, Q, ee, et, er, en, ei, ea, eo, es, el = e.i(37416);
      let eu = Symbol("internal request");
      class ec extends Request {
        constructor(e10, t10 = {}) {
          const r10 = "string" != typeof e10 && "url" in e10 ? e10.url : String(e10);
          C(r10), e10 instanceof Request ? super(e10, t10) : super(r10, t10);
          const n10 = new U(r10, { headers: S(this.headers), nextConfig: t10.nextConfig });
          this[eu] = { cookies: new el.RequestCookies(this.headers), nextUrl: n10, url: n10.toString() };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[eu].cookies;
        }
        get nextUrl() {
          return this[eu].nextUrl;
        }
        get page() {
          throw new p();
        }
        get ua() {
          throw new g();
        }
        get url() {
          return this[eu].url;
        }
      }
      class ed {
        static get(e10, t10, r10) {
          let n10 = Reflect.get(e10, t10, r10);
          return "function" == typeof n10 ? n10.bind(e10) : n10;
        }
        static set(e10, t10, r10, n10) {
          return Reflect.set(e10, t10, r10, n10);
        }
        static has(e10, t10) {
          return Reflect.has(e10, t10);
        }
        static deleteProperty(e10, t10) {
          return Reflect.deleteProperty(e10, t10);
        }
      }
      let eh = Symbol("internal response"), ef = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function ep(e10, t10) {
        var r10;
        if (null == e10 || null == (r10 = e10.request) ? void 0 : r10.headers) {
          if (!(e10.request.headers instanceof Headers)) throw Object.defineProperty(Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", { value: "E119", enumerable: false, configurable: true });
          let r11 = [];
          for (let [n10, i2] of e10.request.headers) t10.set("x-middleware-request-" + n10, i2), r11.push(n10);
          t10.set("x-middleware-override-headers", r11.join(","));
        }
      }
      class eg extends Response {
        constructor(e10, t10 = {}) {
          super(e10, t10);
          const r10 = this.headers, n10 = new Proxy(new el.ResponseCookies(r10), { get(e11, n11, i2) {
            switch (n11) {
              case "delete":
              case "set":
                return (...i3) => {
                  let a2 = Reflect.apply(e11[n11], e11, i3), o2 = new Headers(r10);
                  return a2 instanceof el.ResponseCookies && r10.set("x-middleware-set-cookie", a2.getAll().map((e12) => (0, el.stringifyCookie)(e12)).join(",")), ep(t10, o2), a2;
                };
              default:
                return ed.get(e11, n11, i2);
            }
          } });
          this[eh] = { cookies: n10, url: t10.url ? new U(t10.url, { headers: S(r10), nextConfig: t10.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[eh].cookies;
        }
        static json(e10, t10) {
          let r10 = Response.json(e10, t10);
          return new eg(r10.body, r10);
        }
        static redirect(e10, t10) {
          let r10 = "number" == typeof t10 ? t10 : (null == t10 ? void 0 : t10.status) ?? 307;
          if (!ef.has(r10)) throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", { value: "E529", enumerable: false, configurable: true });
          let n10 = "object" == typeof t10 ? t10 : {}, i2 = new Headers(null == n10 ? void 0 : n10.headers);
          return i2.set("Location", C(e10)), new eg(null, { ...n10, headers: i2, status: r10 });
        }
        static rewrite(e10, t10) {
          let r10 = new Headers(null == t10 ? void 0 : t10.headers);
          return r10.set("x-middleware-rewrite", C(e10)), ep(t10, r10), new eg(null, { ...t10, headers: r10 });
        }
        static next(e10) {
          let t10 = new Headers(null == e10 ? void 0 : e10.headers);
          return t10.set("x-middleware-next", "1"), ep(e10, t10), new eg(null, { ...e10, headers: t10 });
        }
      }
      function e_(e10, t10) {
        let r10 = "string" == typeof t10 ? new URL(t10) : t10, n10 = new URL(e10, t10), i2 = n10.origin === r10.origin;
        return { url: i2 ? n10.toString().slice(r10.origin.length) : n10.toString(), isRelative: i2 };
      }
      let em = "next-router-prefetch", ey = ["rsc", "next-router-state-tree", em, "next-hmr-refresh", "next-router-segment-prefetch"], ev = "_rsc";
      function eb(e10) {
        return e10.startsWith("/") ? e10 : `/${e10}`;
      }
      function ew(e10) {
        return eb(e10.split("/").reduce((e11, t10, r10, n10) => t10 ? "(" === t10[0] && t10.endsWith(")") || "@" === t10[0] || ("page" === t10 || "route" === t10) && r10 === n10.length - 1 ? e11 : `${e11}/${t10}` : e11, ""));
      }
      class eE extends Error {
        constructor() {
          super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
        }
        static callable() {
          throw new eE();
        }
      }
      class eS extends Headers {
        constructor(e10) {
          super(), this.headers = new Proxy(e10, { get(t10, r10, n10) {
            if ("symbol" == typeof r10) return ed.get(t10, r10, n10);
            let i2 = r10.toLowerCase(), a2 = Object.keys(e10).find((e11) => e11.toLowerCase() === i2);
            if (void 0 !== a2) return ed.get(t10, a2, n10);
          }, set(t10, r10, n10, i2) {
            if ("symbol" == typeof r10) return ed.set(t10, r10, n10, i2);
            let a2 = r10.toLowerCase(), o2 = Object.keys(e10).find((e11) => e11.toLowerCase() === a2);
            return ed.set(t10, o2 ?? r10, n10, i2);
          }, has(t10, r10) {
            if ("symbol" == typeof r10) return ed.has(t10, r10);
            let n10 = r10.toLowerCase(), i2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n10);
            return void 0 !== i2 && ed.has(t10, i2);
          }, deleteProperty(t10, r10) {
            if ("symbol" == typeof r10) return ed.deleteProperty(t10, r10);
            let n10 = r10.toLowerCase(), i2 = Object.keys(e10).find((e11) => e11.toLowerCase() === n10);
            return void 0 === i2 || ed.deleteProperty(t10, i2);
          } });
        }
        static seal(e10) {
          return new Proxy(e10, { get(e11, t10, r10) {
            switch (t10) {
              case "append":
              case "delete":
              case "set":
                return eE.callable;
              default:
                return ed.get(e11, t10, r10);
            }
          } });
        }
        merge(e10) {
          return Array.isArray(e10) ? e10.join(", ") : e10;
        }
        static from(e10) {
          return e10 instanceof Headers ? e10 : new eS(e10);
        }
        append(e10, t10) {
          let r10 = this.headers[e10];
          "string" == typeof r10 ? this.headers[e10] = [r10, t10] : Array.isArray(r10) ? r10.push(t10) : this.headers[e10] = t10;
        }
        delete(e10) {
          delete this.headers[e10];
        }
        get(e10) {
          let t10 = this.headers[e10];
          return void 0 !== t10 ? this.merge(t10) : null;
        }
        has(e10) {
          return void 0 !== this.headers[e10];
        }
        set(e10, t10) {
          this.headers[e10] = t10;
        }
        forEach(e10, t10) {
          for (let [r10, n10] of this.entries()) e10.call(t10, n10, r10, this);
        }
        *entries() {
          for (let e10 of Object.keys(this.headers)) {
            let t10 = e10.toLowerCase(), r10 = this.get(t10);
            yield [t10, r10];
          }
        }
        *keys() {
          for (let e10 of Object.keys(this.headers)) {
            let t10 = e10.toLowerCase();
            yield t10;
          }
        }
        *values() {
          for (let e10 of Object.keys(this.headers)) {
            let t10 = this.get(e10);
            yield t10;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      e.i(820);
      var eC = e.i(8502), eC = eC;
      class eT extends Error {
        constructor() {
          super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
        }
        static callable() {
          throw new eT();
        }
      }
      class eR {
        static seal(e10) {
          return new Proxy(e10, { get(e11, t10, r10) {
            switch (t10) {
              case "clear":
              case "delete":
              case "set":
                return eT.callable;
              default:
                return ed.get(e11, t10, r10);
            }
          } });
        }
      }
      let eP = Symbol.for("next.mutated.cookies");
      class ex {
        static wrap(e10, t10) {
          let r10 = new el.ResponseCookies(new Headers());
          for (let t11 of e10.getAll()) r10.set(t11);
          let n10 = [], i2 = /* @__PURE__ */ new Set(), a2 = () => {
            let e11 = eC.workAsyncStorageInstance.getStore();
            if (e11 && (e11.pathWasRevalidated = 1), n10 = r10.getAll().filter((e12) => i2.has(e12.name)), t10) {
              let e12 = [];
              for (let t11 of n10) {
                let r11 = new el.ResponseCookies(new Headers());
                r11.set(t11), e12.push(r11.toString());
              }
              t10(e12);
            }
          }, o2 = new Proxy(r10, { get(e11, t11, r11) {
            switch (t11) {
              case eP:
                return n10;
              case "delete":
                return function(...t12) {
                  i2.add("string" == typeof t12[0] ? t12[0] : t12[0].name);
                  try {
                    return e11.delete(...t12), o2;
                  } finally {
                    a2();
                  }
                };
              case "set":
                return function(...t12) {
                  i2.add("string" == typeof t12[0] ? t12[0] : t12[0].name);
                  try {
                    return e11.set(...t12), o2;
                  } finally {
                    a2();
                  }
                };
              default:
                return ed.get(e11, t11, r11);
            }
          } });
          return o2;
        }
      }
      function eO(e10, t10) {
        if ("action" !== e10.phase) throw new eT();
      }
      var eA = (($ = eA || {}).handleRequest = "BaseServer.handleRequest", $.run = "BaseServer.run", $.pipe = "BaseServer.pipe", $.getStaticHTML = "BaseServer.getStaticHTML", $.render = "BaseServer.render", $.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", $.renderToResponse = "BaseServer.renderToResponse", $.renderToHTML = "BaseServer.renderToHTML", $.renderError = "BaseServer.renderError", $.renderErrorToResponse = "BaseServer.renderErrorToResponse", $.renderErrorToHTML = "BaseServer.renderErrorToHTML", $.render404 = "BaseServer.render404", $), eN = ((G = eN || {}).loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", G.loadComponents = "LoadComponents.loadComponents", G), eI = ((q = eI || {}).getRequestHandler = "NextServer.getRequestHandler", q.getRequestHandlerWithMetadata = "NextServer.getRequestHandlerWithMetadata", q.getServer = "NextServer.getServer", q.getServerRequestHandler = "NextServer.getServerRequestHandler", q.createServer = "createServer.createServer", q), ek = ((F = ek || {}).compression = "NextNodeServer.compression", F.getBuildId = "NextNodeServer.getBuildId", F.createComponentTree = "NextNodeServer.createComponentTree", F.clientComponentLoading = "NextNodeServer.clientComponentLoading", F.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", F.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", F.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", F.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", F.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", F.sendRenderResult = "NextNodeServer.sendRenderResult", F.proxyRequest = "NextNodeServer.proxyRequest", F.runApi = "NextNodeServer.runApi", F.render = "NextNodeServer.render", F.renderHTML = "NextNodeServer.renderHTML", F.imageOptimizer = "NextNodeServer.imageOptimizer", F.getPagePath = "NextNodeServer.getPagePath", F.getRoutesManifest = "NextNodeServer.getRoutesManifest", F.findPageComponents = "NextNodeServer.findPageComponents", F.getFontManifest = "NextNodeServer.getFontManifest", F.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", F.getRequestHandler = "NextNodeServer.getRequestHandler", F.renderToHTML = "NextNodeServer.renderToHTML", F.renderError = "NextNodeServer.renderError", F.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", F.render404 = "NextNodeServer.render404", F.startResponse = "NextNodeServer.startResponse", F.route = "route", F.onProxyReq = "onProxyReq", F.apiResolver = "apiResolver", F.internalFetch = "internalFetch", F), eL = ((V = eL || {}).startServer = "startServer.startServer", V), eM = ((z = eM || {}).getServerSideProps = "Render.getServerSideProps", z.getStaticProps = "Render.getStaticProps", z.renderToString = "Render.renderToString", z.renderDocument = "Render.renderDocument", z.createBodyResult = "Render.createBodyResult", z), eD = ((K = eD || {}).renderToString = "AppRender.renderToString", K.renderToReadableStream = "AppRender.renderToReadableStream", K.getBodyResult = "AppRender.getBodyResult", K.fetch = "AppRender.fetch", K), eB = ((X = eB || {}).executeRoute = "Router.executeRoute", X), eH = ((W = eH || {}).runHandler = "Node.runHandler", W), ej = ((Y = ej || {}).runHandler = "AppRouteRouteHandlers.runHandler", Y), eU = ((Z = eU || {}).generateMetadata = "ResolveMetadata.generateMetadata", Z.generateViewport = "ResolveMetadata.generateViewport", Z), e$ = ((J = e$ || {}).execute = "Middleware.execute", J);
      let eG = /* @__PURE__ */ new Set(["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"]), eq = /* @__PURE__ */ new Set(["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"]);
      function eF(e10) {
        return null !== e10 && "object" == typeof e10 && "then" in e10 && "function" == typeof e10.then;
      }
      let eV = process.env.NEXT_OTEL_PERFORMANCE_PREFIX, { context: ez, propagation: eK, trace: eX, SpanStatusCode: eW, SpanKind: eY, ROOT_CONTEXT: eZ } = t = e.r(59164);
      class eJ extends Error {
        constructor(e10, t10) {
          super(), this.bubble = e10, this.result = t10;
        }
      }
      let eQ = (e10, t10) => {
        "object" == typeof t10 && null !== t10 && t10 instanceof eJ && t10.bubble ? e10.setAttribute("next.bubble", true) : (t10 && (e10.recordException(t10), e10.setAttribute("error.type", t10.name)), e10.setStatus({ code: eW.ERROR, message: null == t10 ? void 0 : t10.message })), e10.end();
      }, e0 = /* @__PURE__ */ new Map(), e1 = t.createContextKey("next.rootSpanId"), e2 = 0, e3 = { set(e10, t10, r10) {
        e10.push({ key: t10, value: r10 });
      } }, e4 = (i = new class e {
        getTracerInstance() {
          return eX.getTracer("next.js", "0.0.1");
        }
        getContext() {
          return ez;
        }
        getTracePropagationData() {
          let e10 = ez.active(), t10 = [];
          return eK.inject(e10, t10, e3), t10;
        }
        getActiveScopeSpan() {
          return eX.getSpan(null == ez ? void 0 : ez.active());
        }
        withPropagatedContext(e10, t10, r10, n10 = false) {
          let i2 = ez.active();
          if (n10) {
            let n11 = eK.extract(eZ, e10, r10);
            if (eX.getSpanContext(n11)) return ez.with(n11, t10);
            let a3 = eK.extract(i2, e10, r10);
            return ez.with(a3, t10);
          }
          if (eX.getSpanContext(i2)) return t10();
          let a2 = eK.extract(i2, e10, r10);
          return ez.with(a2, t10);
        }
        trace(...e10) {
          let [t10, r10, n10] = e10, { fn: i2, options: a2 } = "function" == typeof r10 ? { fn: r10, options: {} } : { fn: n10, options: { ...r10 } }, o2 = a2.spanName ?? t10;
          if (!eG.has(t10) && "1" !== process.env.NEXT_OTEL_VERBOSE || a2.hideSpan) return i2();
          let s2 = this.getSpanContext((null == a2 ? void 0 : a2.parentSpan) ?? this.getActiveScopeSpan());
          s2 || (s2 = (null == ez ? void 0 : ez.active()) ?? eZ);
          let l2 = s2.getValue(e1), u2 = "number" != typeof l2 || !e0.has(l2), c2 = e2++;
          return a2.attributes = { "next.span_name": o2, "next.span_type": t10, ...a2.attributes }, ez.with(s2.setValue(e1, c2), () => this.getTracerInstance().startActiveSpan(o2, a2, (e11) => {
            let r11;
            eV && t10 && eq.has(t10) && (r11 = "performance" in globalThis && "measure" in performance ? globalThis.performance.now() : void 0);
            let n11 = false, o3 = () => {
              !n11 && (n11 = true, e0.delete(c2), r11 && performance.measure(`${eV}:next-${(t10.split(".").pop() || "").replace(/[A-Z]/g, (e12) => "-" + e12.toLowerCase())}`, { start: r11, end: performance.now() }));
            };
            if (u2 && e0.set(c2, new Map(Object.entries(a2.attributes ?? {}))), i2.length > 1) try {
              return i2(e11, (t11) => eQ(e11, t11));
            } catch (t11) {
              throw eQ(e11, t11), t11;
            } finally {
              o3();
            }
            try {
              let t11 = i2(e11);
              if (eF(t11)) return t11.then((t12) => (e11.end(), t12)).catch((t12) => {
                throw eQ(e11, t12), t12;
              }).finally(o3);
              return e11.end(), o3(), t11;
            } catch (t11) {
              throw eQ(e11, t11), o3(), t11;
            }
          }));
        }
        wrap(...e10) {
          let t10 = this, [r10, n10, i2] = 3 === e10.length ? e10 : [e10[0], {}, e10[1]];
          return eG.has(r10) || "1" === process.env.NEXT_OTEL_VERBOSE ? function() {
            let e11 = n10;
            "function" == typeof e11 && "function" == typeof i2 && (e11 = e11.apply(this, arguments));
            let a2 = arguments.length - 1, o2 = arguments[a2];
            if ("function" != typeof o2) return t10.trace(r10, e11, () => i2.apply(this, arguments));
            {
              let n11 = t10.getContext().bind(ez.active(), o2);
              return t10.trace(r10, e11, (e12, t11) => (arguments[a2] = function(e13) {
                return null == t11 || t11(e13), n11.apply(this, arguments);
              }, i2.apply(this, arguments)));
            }
          } : i2;
        }
        startSpan(...e10) {
          let [t10, r10] = e10, n10 = this.getSpanContext((null == r10 ? void 0 : r10.parentSpan) ?? this.getActiveScopeSpan());
          return this.getTracerInstance().startSpan(t10, r10, n10);
        }
        getSpanContext(e10) {
          return e10 ? eX.setSpan(ez.active(), e10) : void 0;
        }
        getRootSpanAttributes() {
          let e10 = ez.active().getValue(e1);
          return e0.get(e10);
        }
        setRootSpanAttribute(e10, t10) {
          let r10 = ez.active().getValue(e1), n10 = e0.get(r10);
          n10 && !n10.has(e10) && n10.set(e10, t10);
        }
        withSpan(e10, t10) {
          let r10 = eX.setSpan(ez.active(), e10);
          return ez.with(r10, t10);
        }
      }(), () => i), e9 = "__prerender_bypass";
      Symbol("__next_preview_data"), Symbol(e9);
      class e6 {
        constructor(e10, t10, r10, n10) {
          var i2;
          const a2 = e10 && function(e11, t11) {
            let r11 = eS.from(e11.headers);
            return { isOnDemandRevalidate: r11.get(_) === t11.previewModeId, revalidateOnlyGenerated: r11.has("x-prerender-revalidate-if-generated") };
          }(t10, e10).isOnDemandRevalidate, o2 = null == (i2 = r10.get(e9)) ? void 0 : i2.value;
          this._isEnabled = !!(!a2 && o2 && e10 && o2 === e10.previewModeId), this._previewModeId = null == e10 ? void 0 : e10.previewModeId, this._mutableCookies = n10;
        }
        get isEnabled() {
          return this._isEnabled;
        }
        enable() {
          if (!this._previewModeId) throw Object.defineProperty(Error("Invariant: previewProps missing previewModeId this should never happen"), "__NEXT_ERROR_CODE", { value: "E93", enumerable: false, configurable: true });
          this._mutableCookies.set({ name: e9, value: this._previewModeId, httpOnly: true, sameSite: "none", secure: true, path: "/" }), this._isEnabled = true;
        }
        disable() {
          this._mutableCookies.set({ name: e9, value: "", httpOnly: true, sameSite: "none", secure: true, path: "/", expires: /* @__PURE__ */ new Date(0) }), this._isEnabled = false;
        }
      }
      function e5(e10, t10) {
        if ("x-middleware-set-cookie" in e10.headers && "string" == typeof e10.headers["x-middleware-set-cookie"]) {
          let r10 = e10.headers["x-middleware-set-cookie"], n10 = new Headers();
          for (let e11 of E(r10)) n10.append("set-cookie", e11);
          for (let e11 of new el.ResponseCookies(n10).getAll()) t10.set(e11);
        }
      }
      var e8 = e.i(55095), e7 = e.i(17044), e7 = e7, te = e.i(89181), tt = e.i(87399), eC = eC, tr = e.i(51615);
      process.env.NEXT_PRIVATE_DEBUG_CACHE, Symbol.for("@next/cache-handlers");
      let tn = Symbol.for("@next/cache-handlers-map"), ti = Symbol.for("@next/cache-handlers-set"), ta = globalThis;
      function to() {
        if (ta[tn]) return ta[tn].entries();
      }
      async function ts(e10, t10) {
        if (!e10) return t10();
        let r10 = tl(e10);
        try {
          return await t10();
        } finally {
          var n10, i2, a2, o2;
          let t11, s2, l2, u2, c2 = (n10 = r10, i2 = tl(e10), t11 = new Set(n10.pendingRevalidatedTags.map((e11) => {
            let t12 = "object" == typeof e11.profile ? JSON.stringify(e11.profile) : e11.profile || "";
            return `${e11.tag}:${t12}`;
          })), s2 = new Set(n10.pendingRevalidateWrites), { pendingRevalidatedTags: i2.pendingRevalidatedTags.filter((e11) => {
            let r11 = "object" == typeof e11.profile ? JSON.stringify(e11.profile) : e11.profile || "";
            return !t11.has(`${e11.tag}:${r11}`);
          }), pendingRevalidates: Object.fromEntries(Object.entries(i2.pendingRevalidates).filter(([e11]) => !(e11 in n10.pendingRevalidates))), pendingRevalidateWrites: i2.pendingRevalidateWrites.filter((e11) => !s2.has(e11)) });
          await (a2 = e10, l2 = [], (u2 = (null == (o2 = c2) ? void 0 : o2.pendingRevalidatedTags) ?? a2.pendingRevalidatedTags ?? []).length > 0 && l2.push(tu(u2, a2.incrementalCache, a2)), l2.push(...Object.values((null == o2 ? void 0 : o2.pendingRevalidates) ?? a2.pendingRevalidates ?? {})), l2.push(...(null == o2 ? void 0 : o2.pendingRevalidateWrites) ?? a2.pendingRevalidateWrites ?? []), 0 !== l2.length && Promise.all(l2).then(() => void 0));
        }
      }
      function tl(e10) {
        return { pendingRevalidatedTags: e10.pendingRevalidatedTags ? [...e10.pendingRevalidatedTags] : [], pendingRevalidates: { ...e10.pendingRevalidates }, pendingRevalidateWrites: e10.pendingRevalidateWrites ? [...e10.pendingRevalidateWrites] : [] };
      }
      async function tu(e10, t10, r10) {
        if (0 === e10.length) return;
        let n10 = function() {
          if (ta[ti]) return ta[ti].values();
        }(), i2 = [], a2 = /* @__PURE__ */ new Map();
        for (let t11 of e10) {
          let e11, r11 = t11.profile;
          for (let [t12] of a2) if ("string" == typeof t12 && "string" == typeof r11 && t12 === r11 || "object" == typeof t12 && "object" == typeof r11 && JSON.stringify(t12) === JSON.stringify(r11) || t12 === r11) {
            e11 = t12;
            break;
          }
          let n11 = e11 || r11;
          a2.has(n11) || a2.set(n11, []), a2.get(n11).push(t11.tag);
        }
        for (let [e11, s2] of a2) {
          let a3;
          if (e11) {
            let t11;
            if ("object" == typeof e11) t11 = e11;
            else if ("string" == typeof e11) {
              var o2;
              if (!(t11 = null == r10 || null == (o2 = r10.cacheLifeProfiles) ? void 0 : o2[e11])) throw Object.defineProperty(Error(`Invalid profile provided "${e11}" must be configured under cacheLife in next.config or be "max"`), "__NEXT_ERROR_CODE", { value: "E873", enumerable: false, configurable: true });
            }
            t11 && (a3 = { expire: t11.expire });
          }
          for (let t11 of n10 || []) e11 ? i2.push(null == t11.updateTags ? void 0 : t11.updateTags.call(t11, s2, a3)) : i2.push(null == t11.updateTags ? void 0 : t11.updateTags.call(t11, s2));
          t10 && i2.push(t10.revalidateTag(s2, a3));
        }
        await Promise.all(i2);
      }
      var tc = e.i(44064), e7 = e7;
      let td = (0, tc.createAsyncLocalStorage)();
      class th {
        constructor({ waitUntil: e10, onClose: t10, onTaskError: r10 }) {
          this.workUnitStores = /* @__PURE__ */ new Set(), this.waitUntil = e10, this.onClose = t10, this.onTaskError = r10, this.callbackQueue = new te.default(), this.callbackQueue.pause();
        }
        after(e10) {
          if (eF(e10)) this.waitUntil || tf(), this.waitUntil(e10.catch((e11) => this.reportTaskError("promise", e11)));
          else if ("function" == typeof e10) this.addCallback(e10);
          else throw Object.defineProperty(Error("`after()`: Argument must be a promise or a function"), "__NEXT_ERROR_CODE", { value: "E50", enumerable: false, configurable: true });
        }
        addCallback(e10) {
          this.waitUntil || tf();
          let t10 = e7.workUnitAsyncStorageInstance.getStore();
          t10 && this.workUnitStores.add(t10);
          let r10 = td.getStore(), n10 = r10 ? r10.rootTaskSpawnPhase : null == t10 ? void 0 : t10.phase;
          this.runCallbacksOnClosePromise || (this.runCallbacksOnClosePromise = this.runCallbacksOnClose(), this.waitUntil(this.runCallbacksOnClosePromise));
          let i2 = (0, tc.bindSnapshot)(async () => {
            try {
              await td.run({ rootTaskSpawnPhase: n10 }, () => e10());
            } catch (e11) {
              this.reportTaskError("function", e11);
            }
          });
          this.callbackQueue.add(i2);
        }
        async runCallbacksOnClose() {
          return await new Promise((e10) => this.onClose(e10)), this.runCallbacks();
        }
        async runCallbacks() {
          if (0 === this.callbackQueue.size) return;
          for (let e11 of this.workUnitStores) e11.phase = "after";
          let e10 = eC.workAsyncStorageInstance.getStore();
          if (!e10) throw Object.defineProperty(new tt.InvariantError("Missing workStore in AfterContext.runCallbacks"), "__NEXT_ERROR_CODE", { value: "E547", enumerable: false, configurable: true });
          return ts(e10, () => (this.callbackQueue.start(), this.callbackQueue.onIdle()));
        }
        reportTaskError(e10, t10) {
          if (console.error("promise" === e10 ? "A promise passed to `after()` rejected:" : "An error occurred in a function passed to `after()`:", t10), this.onTaskError) try {
            null == this.onTaskError || this.onTaskError.call(this, t10);
          } catch (e11) {
            console.error(Object.defineProperty(new tt.InvariantError("`onTaskError` threw while handling an error thrown from an `after` task", { cause: e11 }), "__NEXT_ERROR_CODE", { value: "E569", enumerable: false, configurable: true }));
          }
        }
      }
      function tf() {
        throw Object.defineProperty(Error("`after()` will not work correctly, because `waitUntil` is not available in the current environment."), "__NEXT_ERROR_CODE", { value: "E91", enumerable: false, configurable: true });
      }
      function tp(e10) {
        let t10, r10 = { then: (n10, i2) => (t10 || (t10 = Promise.resolve(e10())), t10.then((e11) => {
          r10.value = e11;
        }).catch(() => {
        }), t10.then(n10, i2)) };
        return r10;
      }
      var eC = eC;
      class tg {
        onClose(e10) {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot subscribe to a closed CloseController"), "__NEXT_ERROR_CODE", { value: "E365", enumerable: false, configurable: true });
          this.target.addEventListener("close", e10), this.listeners++;
        }
        dispatchClose() {
          if (this.isClosed) throw Object.defineProperty(Error("Cannot close a CloseController multiple times"), "__NEXT_ERROR_CODE", { value: "E229", enumerable: false, configurable: true });
          this.listeners > 0 && this.target.dispatchEvent(new Event("close")), this.isClosed = true;
        }
        constructor() {
          this.target = new EventTarget(), this.listeners = 0, this.isClosed = false;
        }
      }
      function t_() {
        return { previewModeId: process.env.__NEXT_PREVIEW_MODE_ID || "", previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "", previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "" };
      }
      let tm = Symbol.for("@next/request-context");
      async function ty(e10, t10, r10) {
        let n10 = /* @__PURE__ */ new Set();
        for (let t11 of ((e11) => {
          let t12 = ["/layout"];
          if (e11.startsWith("/")) {
            let r11 = e11.split("/");
            for (let e12 = 1; e12 < r11.length + 1; e12++) {
              let n11 = r11.slice(0, e12).join("/");
              n11 && (n11.endsWith("/page") || n11.endsWith("/route") || (n11 = `${n11}${!n11.endsWith("/") ? "/" : ""}layout`), t12.push(n11));
            }
          }
          return t12;
        })(e10)) t11 = `${b}${t11}`, n10.add(t11);
        if (t10 && (!r10 || 0 === r10.size)) {
          let e11 = `${b}${t10}`;
          n10.add(e11);
        }
        n10.has(`${b}/`) && n10.add(`${b}/index`), n10.has(`${b}/index`) && n10.add(`${b}/`);
        let i2 = Array.from(n10);
        return { tags: i2, expirationsByCacheKind: function(e11) {
          let t11 = /* @__PURE__ */ new Map(), r11 = to();
          if (r11) for (let [n11, i3] of r11) "getExpiration" in i3 && t11.set(n11, tp(async () => i3.getExpiration(e11)));
          return t11;
        }(i2) };
      }
      let tv = Symbol.for("NextInternalRequestMeta");
      class tb extends ec {
        constructor(e10) {
          super(e10.input, e10.init), this.sourcePage = e10.page;
        }
        get request() {
          throw Object.defineProperty(new f({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        respondWith() {
          throw Object.defineProperty(new f({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
        waitUntil() {
          throw Object.defineProperty(new f({ page: this.sourcePage }), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        }
      }
      let tw = { keys: (e10) => Array.from(e10.keys()), get: (e10, t10) => e10.get(t10) ?? void 0 }, tE = (e10, t10) => e4().withPropagatedContext(e10.headers, t10, tw), tS = false;
      async function tC(t10) {
        var r10, n10, i2, a2, o2;
        let s2, l2, u2, c2, h2;
        !function() {
          if (!tS && (tS = true, "true" === process.env.NEXT_PRIVATE_TEST_PROXY)) {
            let { interceptTestApis: t11, wrapRequestHandler: r11 } = e.r(92446);
            t11(), tE = r11(tE);
          }
        }(), await d();
        let f2 = void 0 !== globalThis.__BUILD_MANIFEST;
        t10.request.url = t10.request.url.replace(/\.rsc($|\?)/, "$1");
        let p2 = t10.bypassNextUrl ? new URL(t10.request.url) : new U(t10.request.url, { headers: t10.request.headers, nextConfig: t10.request.nextConfig });
        for (let e10 of [...p2.searchParams.keys()]) {
          let t11 = p2.searchParams.getAll(e10), r11 = function(e11) {
            for (let t12 of ["nxtP", "nxtI"]) if (e11 !== t12 && e11.startsWith(t12)) return e11.substring(t12.length);
            return null;
          }(e10);
          if (r11) {
            for (let e11 of (p2.searchParams.delete(r11), t11)) p2.searchParams.append(r11, e11);
            p2.searchParams.delete(e10);
          }
        }
        let g2 = process.env.__NEXT_BUILD_ID || "";
        "buildId" in p2 && (g2 = p2.buildId || "", p2.buildId = "");
        let _2 = function(e10) {
          let t11 = new Headers();
          for (let [r11, n11] of Object.entries(e10)) for (let e11 of Array.isArray(n11) ? n11 : [n11]) void 0 !== e11 && ("number" == typeof e11 && (e11 = e11.toString()), t11.append(r11, e11));
          return t11;
        }(t10.request.headers), m2 = _2.has("x-nextjs-data"), y2 = "1" === _2.get("rsc");
        m2 && "/index" === p2.pathname && (p2.pathname = "/");
        let v2 = /* @__PURE__ */ new Map();
        if (!f2) for (let e10 of ey) {
          let t11 = _2.get(e10);
          null !== t11 && (v2.set(e10, t11), _2.delete(e10));
        }
        let b2 = p2.searchParams.get(ev), w2 = new tb({ page: t10.page, input: ((c2 = (u2 = "string" == typeof p2) ? new URL(p2) : p2).searchParams.delete(ev), u2 ? c2.toString() : c2).toString(), init: { body: t10.request.body, headers: _2, method: t10.request.method, nextConfig: t10.request.nextConfig, signal: t10.request.signal } });
        t10.request.requestMeta && (o2 = t10.request.requestMeta, w2[tv] = o2), m2 && Object.defineProperty(w2, "__isData", { enumerable: false, value: true }), !globalThis.__incrementalCacheShared && t10.IncrementalCache && (globalThis.__incrementalCache = new t10.IncrementalCache({ CurCacheHandler: t10.incrementalCacheHandler, minimalMode: true, fetchCacheKeyPrefix: "", dev: false, requestHeaders: t10.request.headers, getPrerenderManifest: () => ({ version: -1, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: t_() }) }));
        let E2 = t10.request.waitUntil ?? (null == (r10 = null == (h2 = globalThis[tm]) ? void 0 : h2.get()) ? void 0 : r10.waitUntil), S2 = new O({ request: w2, page: t10.page, context: E2 ? { waitUntil: E2 } : void 0 });
        if ((s2 = await tE(w2, () => {
          if ("/middleware" === t10.page || "/src/middleware" === t10.page || "/proxy" === t10.page || "/src/proxy" === t10.page) {
            let e10 = S2.waitUntil.bind(S2), r11 = new tg();
            return e4().trace(e$.execute, { spanName: `middleware ${w2.method}`, attributes: { "http.target": w2.nextUrl.pathname, "http.method": w2.method } }, async () => {
              try {
                var n11, i3, a3, o3, s3, u3;
                let c3 = t_(), d2 = await ty("/", w2.nextUrl.pathname, null), h3 = (s3 = w2.nextUrl, u3 = (e11) => {
                  l2 = e11;
                }, function(e11, t11, r12, n12, i4, a4, o4, s4, l3, u4) {
                  function c4(e12) {
                    r12 && r12.setHeader("Set-Cookie", e12);
                  }
                  let d3 = {};
                  return { type: "request", phase: e11, implicitTags: a4, url: { pathname: n12.pathname, search: n12.search ?? "" }, rootParams: i4, get headers() {
                    return d3.headers || (d3.headers = function(e12) {
                      let t12 = eS.from(e12);
                      for (let e13 of ey) t12.delete(e13);
                      return eS.seal(t12);
                    }(t11.headers)), d3.headers;
                  }, get cookies() {
                    if (!d3.cookies) {
                      let e12 = new el.RequestCookies(eS.from(t11.headers));
                      e5(t11, e12), d3.cookies = eR.seal(e12);
                    }
                    return d3.cookies;
                  }, set cookies(value) {
                    d3.cookies = value;
                  }, get mutableCookies() {
                    if (!d3.mutableCookies) {
                      var h4, f4;
                      let e12, n13 = (h4 = t11.headers, f4 = o4 || (r12 ? c4 : void 0), e12 = new el.RequestCookies(eS.from(h4)), ex.wrap(e12, f4));
                      e5(t11, n13), d3.mutableCookies = n13;
                    }
                    return d3.mutableCookies;
                  }, get userspaceMutableCookies() {
                    if (!d3.userspaceMutableCookies) {
                      var p3;
                      let e12;
                      p3 = this, d3.userspaceMutableCookies = e12 = new Proxy(p3.mutableCookies, { get(t12, r13, n13) {
                        switch (r13) {
                          case "delete":
                            return function(...r14) {
                              return eO(p3, "cookies().delete"), t12.delete(...r14), e12;
                            };
                          case "set":
                            return function(...r14) {
                              return eO(p3, "cookies().set"), t12.set(...r14), e12;
                            };
                          default:
                            return ed.get(t12, r13, n13);
                        }
                      } });
                    }
                    return d3.userspaceMutableCookies;
                  }, get draftMode() {
                    return d3.draftMode || (d3.draftMode = new e6(s4, t11, this.cookies, this.mutableCookies)), d3.draftMode;
                  }, renderResumeDataCache: null, isHmrRefresh: l3, serverComponentsHmrCache: u4 || globalThis.__serverComponentsHmrCache, fallbackParams: null };
                }("action", w2, void 0, s3, {}, d2, u3, c3, false, void 0)), f3 = function({ page: e11, renderOpts: t11, isPrefetchRequest: r12, buildId: n12, previouslyRevalidatedTags: i4, nonce: a4 }) {
                  let o4 = !t11.shouldWaitOnAllReady && !t11.supportsDynamicResponse && !t11.isDraftMode && !t11.isPossibleServerAction, s4 = o4 && (!!process.env.NEXT_DEBUG_BUILD || "1" === process.env.NEXT_SSG_FETCH_METRICS), l3 = { isStaticGeneration: o4, page: e11, route: ew(e11), incrementalCache: t11.incrementalCache || globalThis.__incrementalCache, cacheLifeProfiles: t11.cacheLifeProfiles, isBuildTimePrerendering: t11.isBuildTimePrerendering, fetchCache: t11.fetchCache, isOnDemandRevalidate: t11.isOnDemandRevalidate, isDraftMode: t11.isDraftMode, isPrefetchRequest: r12, buildId: n12, reactLoadableManifest: (null == t11 ? void 0 : t11.reactLoadableManifest) || {}, assetPrefix: (null == t11 ? void 0 : t11.assetPrefix) || "", nonce: a4, afterContext: function(e12) {
                    let { waitUntil: t12, onClose: r13, onAfterTaskError: n13 } = e12;
                    return new th({ waitUntil: t12, onClose: r13, onTaskError: n13 });
                  }(t11), cacheComponentsEnabled: t11.cacheComponents, previouslyRevalidatedTags: i4, refreshTagsByCacheKind: function() {
                    let e12 = /* @__PURE__ */ new Map(), t12 = to();
                    if (t12) for (let [r13, n13] of t12) "refreshTags" in n13 && e12.set(r13, tp(async () => n13.refreshTags()));
                    return e12;
                  }(), runInCleanSnapshot: (0, tc.createSnapshot)(), shouldTrackFetchMetrics: s4, reactServerErrorsByDigest: /* @__PURE__ */ new Map() };
                  return t11.store = l3, l3;
                }({ page: "/", renderOpts: { cacheLifeProfiles: null == (i3 = t10.request.nextConfig) || null == (n11 = i3.experimental) ? void 0 : n11.cacheLife, cacheComponents: false, experimental: { isRoutePPREnabled: false, authInterrupts: !!(null == (o3 = t10.request.nextConfig) || null == (a3 = o3.experimental) ? void 0 : a3.authInterrupts) }, supportsDynamicResponse: true, waitUntil: e10, onClose: r11.onClose.bind(r11), onAfterTaskError: void 0 }, isPrefetchRequest: "1" === w2.headers.get(em), buildId: g2 ?? "", previouslyRevalidatedTags: [] });
                return await eC.workAsyncStorageInstance.run(f3, () => e7.workUnitAsyncStorageInstance.run(h3, t10.handler, w2, S2));
              } finally {
                setTimeout(() => {
                  r11.dispatchClose();
                }, 0);
              }
            });
          }
          return t10.handler(w2, S2);
        })) && !(s2 instanceof Response)) throw Object.defineProperty(TypeError("Expected an instance of Response to be returned"), "__NEXT_ERROR_CODE", { value: "E567", enumerable: false, configurable: true });
        s2 && l2 && s2.headers.set("set-cookie", l2);
        let C2 = null == s2 ? void 0 : s2.headers.get("x-middleware-rewrite");
        if (s2 && C2 && (y2 || !f2)) {
          let e10 = new U(C2, { forceLocale: true, headers: t10.request.headers, nextConfig: t10.request.nextConfig });
          f2 || e10.host !== w2.nextUrl.host || (e10.buildId = g2 || e10.buildId, s2.headers.set("x-middleware-rewrite", String(e10)));
          let { url: r11, isRelative: o3 } = e_(e10.toString(), p2.toString());
          !f2 && m2 && s2.headers.set("x-nextjs-rewrite", r11);
          let l3 = !o3 && (null == (a2 = t10.request.nextConfig) || null == (i2 = a2.experimental) || null == (n10 = i2.clientParamParsingOrigins) ? void 0 : n10.some((t11) => new RegExp(t11).test(e10.origin)));
          y2 && (o3 || l3) && (p2.pathname !== e10.pathname && s2.headers.set("x-nextjs-rewritten-path", e10.pathname), p2.search !== e10.search && s2.headers.set("x-nextjs-rewritten-query", e10.search.slice(1)));
        }
        if (s2 && C2 && y2 && b2) {
          let e10 = new URL(C2);
          e10.searchParams.has(ev) || (e10.searchParams.set(ev, b2), s2.headers.set("x-middleware-rewrite", e10.toString()));
        }
        let T2 = null == s2 ? void 0 : s2.headers.get("Location");
        if (s2 && T2 && !f2) {
          let e10 = new U(T2, { forceLocale: false, headers: t10.request.headers, nextConfig: t10.request.nextConfig });
          s2 = new Response(s2.body, s2), e10.host === p2.host && (e10.buildId = g2 || e10.buildId, s2.headers.set("Location", e_(e10, p2).url)), m2 && (s2.headers.delete("Location"), s2.headers.set("x-nextjs-redirect", e_(e10.toString(), p2.toString()).url));
        }
        let R2 = s2 || eg.next(), x2 = R2.headers.get("x-middleware-override-headers"), A2 = [];
        if (x2) {
          for (let [e10, t11] of v2) R2.headers.set(`x-middleware-request-${e10}`, t11), A2.push(e10);
          A2.length > 0 && R2.headers.set("x-middleware-override-headers", x2 + "," + A2.join(","));
        }
        return { response: R2, waitUntil: ("internal" === S2[P].kind ? Promise.all(S2[P].promises).then(() => {
        }) : void 0) ?? Promise.resolve(), fetchMetrics: w2.fetchMetrics };
      }
      class tT {
        constructor() {
          let e10, t10;
          this.promise = new Promise((r10, n10) => {
            e10 = r10, t10 = n10;
          }), this.resolve = e10, this.reject = t10;
        }
      }
      class tR {
        constructor(e10, t10, r10) {
          this.prev = null, this.next = null, this.key = e10, this.data = t10, this.size = r10;
        }
      }
      class tP {
        constructor() {
          this.prev = null, this.next = null;
        }
      }
      class tx {
        constructor(e10, t10, r10) {
          this.cache = /* @__PURE__ */ new Map(), this.totalSize = 0, this.maxSize = e10, this.calculateSize = t10, this.onEvict = r10, this.head = new tP(), this.tail = new tP(), this.head.next = this.tail, this.tail.prev = this.head;
        }
        addToHead(e10) {
          e10.prev = this.head, e10.next = this.head.next, this.head.next.prev = e10, this.head.next = e10;
        }
        removeNode(e10) {
          e10.prev.next = e10.next, e10.next.prev = e10.prev;
        }
        moveToHead(e10) {
          this.removeNode(e10), this.addToHead(e10);
        }
        removeTail() {
          let e10 = this.tail.prev;
          return this.removeNode(e10), e10;
        }
        set(e10, t10) {
          let r10 = (null == this.calculateSize ? void 0 : this.calculateSize.call(this, t10)) ?? 1;
          if (r10 <= 0) throw Object.defineProperty(Error(`LRUCache: calculateSize returned ${r10}, but size must be > 0. Items with size 0 would never be evicted, causing unbounded cache growth.`), "__NEXT_ERROR_CODE", { value: "E1045", enumerable: false, configurable: true });
          if (r10 > this.maxSize) return console.warn("Single item size exceeds maxSize"), false;
          let n10 = this.cache.get(e10);
          if (n10) n10.data = t10, this.totalSize = this.totalSize - n10.size + r10, n10.size = r10, this.moveToHead(n10);
          else {
            let n11 = new tR(e10, t10, r10);
            this.cache.set(e10, n11), this.addToHead(n11), this.totalSize += r10;
          }
          for (; this.totalSize > this.maxSize && this.cache.size > 0; ) {
            let e11 = this.removeTail();
            this.cache.delete(e11.key), this.totalSize -= e11.size, null == this.onEvict || this.onEvict.call(this, e11.key, e11.data);
          }
          return true;
        }
        has(e10) {
          return this.cache.has(e10);
        }
        get(e10) {
          let t10 = this.cache.get(e10);
          if (t10) return this.moveToHead(t10), t10.data;
        }
        *[Symbol.iterator]() {
          let e10 = this.head.next;
          for (; e10 && e10 !== this.tail; ) {
            let t10 = e10;
            yield [t10.key, t10.data], e10 = e10.next;
          }
        }
        remove(e10) {
          let t10 = this.cache.get(e10);
          t10 && (this.removeNode(t10), this.cache.delete(e10), this.totalSize -= t10.size);
        }
        get size() {
          return this.cache.size;
        }
        get currentSize() {
          return this.totalSize;
        }
      }
      let { env: tO, stdout: tA } = (null == (es = globalThis) ? void 0 : es.process) ?? {}, tN = tO && !tO.NO_COLOR && (tO.FORCE_COLOR || (null == tA ? void 0 : tA.isTTY) && !tO.CI && "dumb" !== tO.TERM), tI = (e10, t10, r10, n10) => {
        let i2 = e10.substring(0, n10) + r10, a2 = e10.substring(n10 + t10.length), o2 = a2.indexOf(t10);
        return ~o2 ? i2 + tI(a2, t10, r10, o2) : i2 + a2;
      }, tk = (e10, t10, r10 = e10) => tN ? (n10) => {
        let i2 = "" + n10, a2 = i2.indexOf(t10, e10.length);
        return ~a2 ? e10 + tI(i2, t10, r10, a2) + t10 : e10 + i2 + t10;
      } : String, tL = tk("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m");
      tk("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"), tk("\x1B[3m", "\x1B[23m"), tk("\x1B[4m", "\x1B[24m"), tk("\x1B[7m", "\x1B[27m"), tk("\x1B[8m", "\x1B[28m"), tk("\x1B[9m", "\x1B[29m"), tk("\x1B[30m", "\x1B[39m");
      let tM = tk("\x1B[31m", "\x1B[39m"), tD = tk("\x1B[32m", "\x1B[39m"), tB = tk("\x1B[33m", "\x1B[39m");
      tk("\x1B[34m", "\x1B[39m");
      let tH = tk("\x1B[35m", "\x1B[39m");
      tk("\x1B[38;2;173;127;168m", "\x1B[39m"), tk("\x1B[36m", "\x1B[39m");
      let tj = tk("\x1B[37m", "\x1B[39m");
      tk("\x1B[90m", "\x1B[39m"), tk("\x1B[40m", "\x1B[49m"), tk("\x1B[41m", "\x1B[49m"), tk("\x1B[42m", "\x1B[49m"), tk("\x1B[43m", "\x1B[49m"), tk("\x1B[44m", "\x1B[49m"), tk("\x1B[45m", "\x1B[49m"), tk("\x1B[46m", "\x1B[49m"), tk("\x1B[47m", "\x1B[49m"), tj(tL("\u25CB")), tM(tL("\u2A2F")), tB(tL("\u26A0")), tj(tL(" ")), tD(tL("\u2713")), tH(tL("\xBB")), new tx(1e4, (e10) => e10.length), new tx(1e4, (e10) => e10.length);
      var tU = ((Q = {}).APP_PAGE = "APP_PAGE", Q.APP_ROUTE = "APP_ROUTE", Q.PAGES = "PAGES", Q.FETCH = "FETCH", Q.REDIRECT = "REDIRECT", Q.IMAGE = "IMAGE", Q), t$ = ((ee = {}).APP_PAGE = "APP_PAGE", ee.APP_ROUTE = "APP_ROUTE", ee.PAGES = "PAGES", ee.FETCH = "FETCH", ee.IMAGE = "IMAGE", ee);
      function tG() {
      }
      let tq = new TextEncoder();
      function tF(e10) {
        return new ReadableStream({ start(t10) {
          t10.enqueue(tq.encode(e10)), t10.close();
        } });
      }
      function tV(e10) {
        return new ReadableStream({ start(t10) {
          t10.enqueue(e10), t10.close();
        } });
      }
      async function tz(e10, t10) {
        let r10 = new TextDecoder("utf-8", { fatal: true }), n10 = "";
        for await (let i2 of e10) {
          if (null == t10 ? void 0 : t10.aborted) return n10;
          n10 += r10.decode(i2, { stream: true });
        }
        return n10 + r10.decode();
      }
      let tK = "ResponseAborted";
      class tX extends Error {
        constructor(...e10) {
          super(...e10), this.name = tK;
        }
      }
      let tW = 0, tY = 0, tZ = 0;
      function tJ(e10) {
        return (null == e10 ? void 0 : e10.name) === "AbortError" || (null == e10 ? void 0 : e10.name) === tK;
      }
      async function tQ(e10, t10, r10) {
        try {
          let n10, { errored: i2, destroyed: a2 } = t10;
          if (i2 || a2) return;
          let o2 = (n10 = new AbortController(), t10.once("close", () => {
            t10.writableFinished || n10.abort(new tX());
          }), n10), s2 = function(e11, t11) {
            let r11 = false, n11 = new tT();
            function i3() {
              n11.resolve();
            }
            e11.on("drain", i3), e11.once("close", () => {
              e11.off("drain", i3), n11.resolve();
            });
            let a3 = new tT();
            return e11.once("finish", () => {
              a3.resolve();
            }), new WritableStream({ write: async (t12) => {
              if (!r11) {
                if (r11 = true, "performance" in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                  let e12 = function(e13 = {}) {
                    let t13 = 0 === tW ? void 0 : { clientComponentLoadStart: tW, clientComponentLoadTimes: tY, clientComponentLoadCount: tZ };
                    return e13.reset && (tW = 0, tY = 0, tZ = 0), t13;
                  }();
                  e12 && performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, { start: e12.clientComponentLoadStart, end: e12.clientComponentLoadStart + e12.clientComponentLoadTimes });
                }
                e11.flushHeaders(), e4().trace(ek.startResponse, { spanName: "start response" }, () => void 0);
              }
              try {
                let r12 = e11.write(t12);
                "flush" in e11 && "function" == typeof e11.flush && e11.flush(), r12 || (await n11.promise, n11 = new tT());
              } catch (t13) {
                throw e11.end(), Object.defineProperty(Error("failed to write chunk to response", { cause: t13 }), "__NEXT_ERROR_CODE", { value: "E321", enumerable: false, configurable: true });
              }
            }, abort: (t12) => {
              e11.writableFinished || e11.destroy(t12);
            }, close: async () => {
              if (t11 && await t11, !e11.writableFinished) return e11.end(), a3.promise;
            } });
          }(t10, r10);
          await e10.pipeTo(s2, { signal: o2.signal });
        } catch (e11) {
          if (tJ(e11)) return;
          throw Object.defineProperty(Error("failed to pipe response", { cause: e11 }), "__NEXT_ERROR_CODE", { value: "E180", enumerable: false, configurable: true });
        }
      }
      class t0 {
        static #e = this.EMPTY = new t0(null, { metadata: {}, contentType: null });
        static fromStatic(e10, t10) {
          return new t0(e10, { metadata: {}, contentType: t10 });
        }
        constructor(e10, { contentType: t10, waitUntil: r10, metadata: n10 }) {
          this.response = e10, this.contentType = t10, this.metadata = n10, this.waitUntil = r10;
        }
        assignMetadata(e10) {
          Object.assign(this.metadata, e10);
        }
        get isNull() {
          return null === this.response;
        }
        get isDynamic() {
          return "string" != typeof this.response;
        }
        toUnchunkedString(e10 = false) {
          if (null === this.response) return "";
          if ("string" != typeof this.response) {
            if (!e10) throw Object.defineProperty(new tt.InvariantError("dynamic responses cannot be unchunked. This is a bug in Next.js"), "__NEXT_ERROR_CODE", { value: "E732", enumerable: false, configurable: true });
            return tz(this.readable);
          }
          return this.response;
        }
        get readable() {
          return null === this.response ? new ReadableStream({ start(e10) {
            e10.close();
          } }) : "string" == typeof this.response ? tF(this.response) : tr.Buffer.isBuffer(this.response) ? tV(this.response) : Array.isArray(this.response) ? function(...e10) {
            if (0 === e10.length) return new ReadableStream({ start(e11) {
              e11.close();
            } });
            if (1 === e10.length) return e10[0];
            let { readable: t10, writable: r10 } = new TransformStream(), n10 = e10[0].pipeTo(r10, { preventClose: true }), i2 = 1;
            for (; i2 < e10.length - 1; i2++) {
              let t11 = e10[i2];
              n10 = n10.then(() => t11.pipeTo(r10, { preventClose: true }));
            }
            let a2 = e10[i2];
            return (n10 = n10.then(() => a2.pipeTo(r10))).catch(tG), t10;
          }(...this.response) : this.response;
        }
        coerce() {
          return null === this.response ? [] : "string" == typeof this.response ? [tF(this.response)] : Array.isArray(this.response) ? this.response : tr.Buffer.isBuffer(this.response) ? [tV(this.response)] : [this.response];
        }
        pipeThrough(e10) {
          this.response = this.readable.pipeThrough(e10);
        }
        unshift(e10) {
          this.response = this.coerce(), this.response.unshift(e10);
        }
        push(e10) {
          this.response = this.coerce(), this.response.push(e10);
        }
        async pipeTo(e10) {
          try {
            await this.readable.pipeTo(e10, { preventClose: true }), this.waitUntil && await this.waitUntil, await e10.close();
          } catch (t10) {
            if (tJ(t10)) return void await e10.abort(t10);
            throw t10;
          }
        }
        async pipeToNodeResponse(e10) {
          await tQ(this.readable, e10, this.waitUntil);
        }
      }
      function t1(e10, t10) {
        if (!e10) return t10;
        let r10 = parseInt(e10, 10);
        return Number.isFinite(r10) && r10 > 0 ? r10 : t10;
      }
      t1(process.env.NEXT_PRIVATE_RESPONSE_CACHE_TTL, 1e4), t1(process.env.NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE, 150);
      var t2 = e.i(38358);
      let t3 = /* @__PURE__ */ new Map(), t4 = (e10, t10) => {
        for (let r10 of e10) {
          let e11 = t3.get(r10), n10 = null == e11 ? void 0 : e11.expired;
          if ("number" == typeof n10 && n10 <= Date.now() && n10 > t10) return true;
        }
        return false;
      }, t9 = (e10, t10) => {
        for (let r10 of e10) {
          let e11 = t3.get(r10), n10 = (null == e11 ? void 0 : e11.stale) ?? 0;
          if ("number" == typeof n10 && n10 > t10) return true;
        }
        return false;
      };
      class t6 {
        constructor(e10) {
          this.fs = e10, this.tasks = [];
        }
        findOrCreateTask(e10) {
          for (let t11 of this.tasks) if (t11[0] === e10) return t11;
          let t10 = this.fs.mkdir(e10);
          t10.catch(() => {
          });
          let r10 = [e10, t10, []];
          return this.tasks.push(r10), r10;
        }
        append(e10, t10) {
          let r10 = this.findOrCreateTask(t2.default.dirname(e10)), n10 = r10[1].then(() => this.fs.writeFile(e10, t10));
          n10.catch(() => {
          }), r10[2].push(n10);
        }
        wait() {
          return Promise.all(this.tasks.flatMap((e10) => e10[2]));
        }
      }
      function t5(e10) {
        return (null == e10 ? void 0 : e10.length) || 0;
      }
      class t8 {
        static #e = this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        constructor(e10) {
          this.fs = e10.fs, this.flushToDisk = e10.flushToDisk, this.serverDistDir = e10.serverDistDir, this.revalidatedTags = e10.revalidatedTags, e10.maxMemoryCacheSize ? t8.memoryCache ? t8.debug && console.log("FileSystemCache: memory store already initialized") : (t8.debug && console.log("FileSystemCache: using memory store for fetch cache"), t8.memoryCache = function(e11) {
            return r || (r = new tx(e11, function({ value: e12 }) {
              var t10, r10;
              if (!e12) return 25;
              if (e12.kind === tU.REDIRECT) return JSON.stringify(e12.props).length;
              if (e12.kind === tU.IMAGE) throw Object.defineProperty(Error("invariant image should not be incremental-cache"), "__NEXT_ERROR_CODE", { value: "E501", enumerable: false, configurable: true });
              if (e12.kind === tU.FETCH) return JSON.stringify(e12.data || "").length;
              if (e12.kind === tU.APP_ROUTE) return e12.body.length;
              return e12.kind === tU.APP_PAGE ? Math.max(1, e12.html.length + t5(e12.rscData) + ((null == (r10 = e12.postponed) ? void 0 : r10.length) || 0) + function(e13) {
                if (!e13) return 0;
                let t11 = 0;
                for (let [r11, n10] of e13) t11 += r11.length + t5(n10);
                return t11;
              }(e12.segmentData)) : e12.html.length + ((null == (t10 = JSON.stringify(e12.pageData)) ? void 0 : t10.length) || 0);
            })), r;
          }(e10.maxMemoryCacheSize)) : t8.debug && console.log("FileSystemCache: not using memory store for fetch cache");
        }
        resetRequestCache() {
        }
        async revalidateTag(e10, t10) {
          if (e10 = "string" == typeof e10 ? [e10] : e10, t8.debug && console.log("FileSystemCache: revalidateTag", e10, t10), 0 === e10.length) return;
          let r10 = Date.now();
          for (let n10 of e10) {
            let e11 = t3.get(n10) || {};
            if (t10) {
              let i2 = { ...e11 };
              i2.stale = r10, void 0 !== t10.expire && (i2.expired = r10 + 1e3 * t10.expire), t3.set(n10, i2);
            } else t3.set(n10, { ...e11, expired: r10 });
          }
        }
        async get(...e10) {
          var t10, r10, n10, i2, a2, o2;
          let [s2, l2] = e10, { kind: u2 } = l2, c2 = null == (t10 = t8.memoryCache) ? void 0 : t10.get(s2);
          if (t8.debug && (u2 === t$.FETCH ? console.log("FileSystemCache: get", s2, l2.tags, u2, !!c2) : console.log("FileSystemCache: get", s2, u2, !!c2)), (null == c2 || null == (r10 = c2.value) ? void 0 : r10.kind) === tU.APP_PAGE || (null == c2 || null == (n10 = c2.value) ? void 0 : n10.kind) === tU.APP_ROUTE || (null == c2 || null == (i2 = c2.value) ? void 0 : i2.kind) === tU.PAGES) {
            let e11 = null == (o2 = c2.value.headers) ? void 0 : o2[y];
            if ("string" == typeof e11) {
              let t11 = e11.split(",");
              if (t11.length > 0 && t4(t11, c2.lastModified)) return t8.debug && console.log("FileSystemCache: expired tags", t11), null;
            }
          } else if ((null == c2 || null == (a2 = c2.value) ? void 0 : a2.kind) === tU.FETCH) {
            let e11 = l2.kind === t$.FETCH ? [...l2.tags || [], ...l2.softTags || []] : [];
            if (e11.some((e12) => this.revalidatedTags.includes(e12))) return t8.debug && console.log("FileSystemCache: was revalidated", e11), null;
            if (t4(e11, c2.lastModified)) return t8.debug && console.log("FileSystemCache: expired tags", e11), null;
          }
          return c2 ?? null;
        }
        async set(e10, t10, r10) {
          var n10;
          if (null == (n10 = t8.memoryCache) || n10.set(e10, { value: t10, lastModified: Date.now() }), t8.debug && console.log("FileSystemCache: set", e10), !this.flushToDisk || !t10) return;
          let i2 = new t6(this.fs);
          if (t10.kind === tU.APP_ROUTE) {
            let r11 = this.getFilePath(`${e10}.body`, t$.APP_ROUTE);
            i2.append(r11, t10.body);
            let n11 = { headers: t10.headers, status: t10.status, postponed: void 0, segmentPaths: void 0, prefetchHints: void 0 };
            i2.append(r11.replace(/\.body$/, m), JSON.stringify(n11, null, 2));
          } else if (t10.kind === tU.PAGES || t10.kind === tU.APP_PAGE) {
            let n11 = t10.kind === tU.APP_PAGE, a2 = this.getFilePath(`${e10}.html`, n11 ? t$.APP_PAGE : t$.PAGES);
            if (i2.append(a2, t10.html), r10.fetchCache || r10.isFallback || r10.isRoutePPREnabled || i2.append(this.getFilePath(`${e10}${n11 ? ".rsc" : ".json"}`, n11 ? t$.APP_PAGE : t$.PAGES), n11 ? t10.rscData : JSON.stringify(t10.pageData)), (null == t10 ? void 0 : t10.kind) === tU.APP_PAGE) {
              let e11;
              if (t10.segmentData) {
                e11 = [];
                let r12 = a2.replace(/\.html$/, ".segments");
                for (let [n12, a3] of t10.segmentData) {
                  e11.push(n12);
                  let t11 = r12 + n12 + ".segment.rsc";
                  i2.append(t11, a3);
                }
              }
              let r11 = { headers: t10.headers, status: t10.status, postponed: t10.postponed, segmentPaths: e11, prefetchHints: void 0 };
              i2.append(a2.replace(/\.html$/, m), JSON.stringify(r11));
            }
          } else if (t10.kind === tU.FETCH) {
            let n11 = this.getFilePath(e10, t$.FETCH);
            i2.append(n11, JSON.stringify({ ...t10, tags: r10.fetchCache ? r10.tags : [] }));
          }
          await i2.wait();
        }
        getFilePath(e10, t10) {
          switch (t10) {
            case t$.FETCH:
              return t2.default.join(this.serverDistDir, "..", "cache", "fetch-cache", e10);
            case t$.PAGES:
              return t2.default.join(this.serverDistDir, "pages", e10);
            case t$.IMAGE:
            case t$.APP_PAGE:
            case t$.APP_ROUTE:
              return t2.default.join(this.serverDistDir, "app", e10);
            default:
              throw Object.defineProperty(Error(`Unexpected file path kind: ${t10}`), "__NEXT_ERROR_CODE", { value: "E479", enumerable: false, configurable: true });
          }
        }
      }
      let t7 = ["(..)(..)", "(.)", "(..)", "(...)"], re = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/, rt = /\/\[[^/]+\](?=\/|$)/;
      function rr(e10) {
        return e10.replace(/(?:\/index)?\/?$/, "") || "/";
      }
      class rn {
        static #e = this.cacheControls = /* @__PURE__ */ new Map();
        constructor(e10) {
          this.prerenderManifest = e10;
        }
        get(e10) {
          let t10 = rn.cacheControls.get(e10);
          if (t10) return t10;
          let r10 = this.prerenderManifest.routes[e10];
          if (r10) {
            let { initialRevalidateSeconds: e11, initialExpireSeconds: t11 } = r10;
            if (void 0 !== e11) return { revalidate: e11, expire: t11 };
          }
          let n10 = this.prerenderManifest.dynamicRoutes[e10];
          if (n10) {
            let { fallbackRevalidate: e11, fallbackExpire: t11 } = n10;
            if (void 0 !== e11) return { revalidate: e11, expire: t11 };
          }
        }
        set(e10, t10) {
          rn.cacheControls.set(e10, t10);
        }
        clear() {
          rn.cacheControls.clear();
        }
      }
      var e7 = e7;
      e.i(68037);
      var eC = eC;
      class ri {
        static #e = this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
        constructor({ fs: e10, dev: t10, flushToDisk: r10, minimalMode: n10, serverDistDir: i2, requestHeaders: a2, maxMemoryCacheSize: o2, getPrerenderManifest: s2, fetchCacheKeyPrefix: l2, CurCacheHandler: u2, allowedRevalidateHeaderKeys: c2 }) {
          var d2, h2, f2, p2;
          this.locks = /* @__PURE__ */ new Map(), this.hasCustomCacheHandler = !!u2;
          const g2 = Symbol.for("@next/cache-handlers"), m2 = globalThis;
          if (u2) ri.debug && console.log("IncrementalCache: using custom cache handler", u2.name);
          else {
            const t11 = m2[g2];
            (null == t11 ? void 0 : t11.FetchCache) ? (u2 = t11.FetchCache, ri.debug && console.log("IncrementalCache: using global FetchCache cache handler")) : e10 && i2 && (ri.debug && console.log("IncrementalCache: using filesystem cache handler"), u2 = t8);
          }
          process.env.__NEXT_TEST_MAX_ISR_CACHE && (o2 = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10)), this.dev = t10, this.disableForTestmode = "true" === process.env.NEXT_PRIVATE_TEST_PROXY, this.minimalMode = n10, this.requestHeaders = a2, this.allowedRevalidateHeaderKeys = c2, this.prerenderManifest = s2(), this.cacheControls = new rn(this.prerenderManifest), this.fetchCacheKeyPrefix = l2;
          let y2 = [];
          a2[_] === (null == (h2 = this.prerenderManifest) || null == (d2 = h2.preview) ? void 0 : d2.previewModeId) && (this.isOnDemandRevalidate = true), n10 && (y2 = this.revalidatedTags = function(e11, t11) {
            return "string" == typeof e11[v] && e11["x-next-revalidate-tag-token"] === t11 ? e11[v].split(",") : [];
          }(a2, null == (p2 = this.prerenderManifest) || null == (f2 = p2.preview) ? void 0 : f2.previewModeId)), u2 && (this.cacheHandler = new u2({ dev: t10, fs: e10, flushToDisk: r10, serverDistDir: i2, revalidatedTags: y2, maxMemoryCacheSize: o2, _requestHeaders: a2, fetchCacheKeyPrefix: l2 }));
        }
        calculateRevalidate(e10, t10, r10, n10) {
          if (r10) return Math.floor(performance.timeOrigin + performance.now() - 1e3);
          let i2 = this.cacheControls.get(rr(e10)), a2 = i2 ? i2.revalidate : !n10 && 1;
          return "number" == typeof a2 ? 1e3 * a2 + t10 : a2;
        }
        _getPathname(e10, t10) {
          return t10 ? e10 : /^\/index(\/|$)/.test(e10) && !function(e11, t11 = true) {
            return (void 0 !== e11.split("/").find((e12) => t7.find((t12) => e12.startsWith(t12))) && (e11 = function(e12) {
              let t12, r10, n10;
              for (let i2 of e12.split("/")) if (r10 = t7.find((e13) => i2.startsWith(e13))) {
                [t12, n10] = e12.split(r10, 2);
                break;
              }
              if (!t12 || !r10 || !n10) throw Object.defineProperty(Error(`Invalid interception route: ${e12}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", { value: "E269", enumerable: false, configurable: true });
              switch (t12 = ew(t12), r10) {
                case "(.)":
                  n10 = "/" === t12 ? `/${n10}` : t12 + "/" + n10;
                  break;
                case "(..)":
                  if ("/" === t12) throw Object.defineProperty(Error(`Invalid interception route: ${e12}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", { value: "E207", enumerable: false, configurable: true });
                  n10 = t12.split("/").slice(0, -1).concat(n10).join("/");
                  break;
                case "(...)":
                  n10 = "/" + n10;
                  break;
                case "(..)(..)":
                  let i2 = t12.split("/");
                  if (i2.length <= 2) throw Object.defineProperty(Error(`Invalid interception route: ${e12}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", { value: "E486", enumerable: false, configurable: true });
                  n10 = i2.slice(0, -2).concat(n10).join("/");
                  break;
                default:
                  throw Object.defineProperty(Error("Invariant: unexpected marker"), "__NEXT_ERROR_CODE", { value: "E112", enumerable: false, configurable: true });
              }
              return { interceptingRoute: t12, interceptedRoute: n10 };
            }(e11).interceptedRoute), t11) ? rt.test(e11) : re.test(e11);
          }(e10) ? `/index${e10}` : "/" === e10 ? "/index" : eb(e10);
        }
        resetRequestCache() {
          var e10, t10;
          null == (t10 = this.cacheHandler) || null == (e10 = t10.resetRequestCache) || e10.call(t10);
        }
        async lock(e10) {
          for (; ; ) {
            let t11 = this.locks.get(e10);
            if (ri.debug && console.log("IncrementalCache: lock get", e10, !!t11), !t11) break;
            await t11;
          }
          let { resolve: t10, promise: r10 } = new tT();
          return ri.debug && console.log("IncrementalCache: successfully locked", e10), this.locks.set(e10, r10), () => {
            t10(), this.locks.delete(e10);
          };
        }
        async revalidateTag(e10, t10) {
          var r10;
          return null == (r10 = this.cacheHandler) ? void 0 : r10.revalidateTag(e10, t10);
        }
        async generateCacheKey(e10, t10 = {}) {
          let r10 = [], n10 = new TextEncoder(), i2 = new TextDecoder();
          if (t10.body) if (t10.body instanceof Uint8Array) r10.push(i2.decode(t10.body)), t10._ogBody = t10.body;
          else if ("function" == typeof t10.body.getReader) {
            let e11 = t10.body, a3 = [];
            try {
              await e11.pipeTo(new WritableStream({ write(e12) {
                "string" == typeof e12 ? (a3.push(n10.encode(e12)), r10.push(e12)) : (a3.push(e12), r10.push(i2.decode(e12, { stream: true })));
              } })), r10.push(i2.decode());
              let o3 = a3.reduce((e12, t11) => e12 + t11.length, 0), s3 = new Uint8Array(o3), l2 = 0;
              for (let e12 of a3) s3.set(e12, l2), l2 += e12.length;
              t10._ogBody = s3;
            } catch (e12) {
              console.error("Problem reading body", e12);
            }
          } else if ("function" == typeof t10.body.keys) {
            let e11 = t10.body;
            for (let n11 of (t10._ogBody = t10.body, /* @__PURE__ */ new Set([...e11.keys()]))) {
              let t11 = e11.getAll(n11);
              r10.push(`${n11}=${(await Promise.all(t11.map(async (e12) => "string" == typeof e12 ? e12 : await e12.text()))).join(",")}`);
            }
          } else if ("function" == typeof t10.body.arrayBuffer) {
            let e11 = t10.body, n11 = await e11.arrayBuffer();
            r10.push(await e11.text()), t10._ogBody = new Blob([n11], { type: e11.type });
          } else "string" == typeof t10.body && (r10.push(t10.body), t10._ogBody = t10.body);
          let a2 = "function" == typeof (t10.headers || {}).keys ? Object.fromEntries(t10.headers) : Object.assign({}, t10.headers);
          "traceparent" in a2 && delete a2.traceparent, "tracestate" in a2 && delete a2.tracestate;
          let o2 = JSON.stringify(["v3", this.fetchCacheKeyPrefix || "", e10, t10.method, a2, t10.mode, t10.redirect, t10.credentials, t10.referrer, t10.referrerPolicy, t10.integrity, t10.cache, r10]);
          {
            var s2;
            let e11 = n10.encode(o2);
            return s2 = await crypto.subtle.digest("SHA-256", e11), Array.prototype.map.call(new Uint8Array(s2), (e12) => e12.toString(16).padStart(2, "0")).join("");
          }
        }
        async get(e10, t10) {
          var r10, n10, i2, a2, o2, s2, l2;
          let u2, c2;
          if (t10.kind === t$.FETCH) {
            let r11 = e7.workUnitAsyncStorageInstance.getStore(), n11 = r11 ? (0, e8.getRenderResumeDataCache)(r11) : null;
            if (n11) {
              let r12 = n11.fetch.get(e10);
              if ((null == r12 ? void 0 : r12.kind) === tU.FETCH) {
                let n12 = eC.workAsyncStorageInstance.getStore();
                if (![...t10.tags || [], ...t10.softTags || []].some((e11) => {
                  var t11, r13;
                  return (null == (t11 = this.revalidatedTags) ? void 0 : t11.includes(e11)) || (null == n12 || null == (r13 = n12.pendingRevalidatedTags) ? void 0 : r13.some((t12) => t12.tag === e11));
                })) return ri.debug && console.log("IncrementalCache: rdc:hit", e10), { isStale: false, value: r12 };
                ri.debug && console.log("IncrementalCache: rdc:revalidated-tag", e10);
              } else ri.debug && console.log("IncrementalCache: rdc:miss", e10);
            } else ri.debug && console.log("IncrementalCache: rdc:no-resume-data");
          }
          if (this.disableForTestmode || this.dev && (t10.kind !== t$.FETCH || "no-cache" === this.requestHeaders["cache-control"])) return null;
          e10 = this._getPathname(e10, t10.kind === t$.FETCH);
          let d2 = await (null == (r10 = this.cacheHandler) ? void 0 : r10.get(e10, t10));
          if (t10.kind === t$.FETCH) {
            if (!d2) return null;
            if ((null == (i2 = d2.value) ? void 0 : i2.kind) !== tU.FETCH) throw Object.defineProperty(new tt.InvariantError(`Expected cached value for cache key ${JSON.stringify(e10)} to be a "FETCH" kind, got ${JSON.stringify(null == (a2 = d2.value) ? void 0 : a2.kind)} instead.`), "__NEXT_ERROR_CODE", { value: "E653", enumerable: false, configurable: true });
            let r11 = eC.workAsyncStorageInstance.getStore(), n11 = [...t10.tags || [], ...t10.softTags || []];
            if (n11.some((e11) => {
              var t11, n12;
              return (null == (t11 = this.revalidatedTags) ? void 0 : t11.includes(e11)) || (null == r11 || null == (n12 = r11.pendingRevalidatedTags) ? void 0 : n12.some((t12) => t12.tag === e11));
            })) return ri.debug && console.log("IncrementalCache: expired tag", e10), null;
            let o3 = e7.workUnitAsyncStorageInstance.getStore();
            if (o3) {
              let t11 = (0, e8.getPrerenderResumeDataCache)(o3);
              t11 && (ri.debug && console.log("IncrementalCache: rdc:set", e10), t11.fetch.set(e10, d2.value));
            }
            let s3 = t10.revalidate || d2.value.revalidate, l3 = (performance.timeOrigin + performance.now() - (d2.lastModified || 0)) / 1e3 > s3, u3 = d2.value.data;
            return t4(n11, d2.lastModified) ? null : (t9(n11, d2.lastModified) && (l3 = true), { isStale: l3, value: { kind: tU.FETCH, data: u3, revalidate: s3 } });
          }
          if ((null == d2 || null == (n10 = d2.value) ? void 0 : n10.kind) === tU.FETCH) throw Object.defineProperty(new tt.InvariantError(`Expected cached value for cache key ${JSON.stringify(e10)} not to be a ${JSON.stringify(t10.kind)} kind, got "FETCH" instead.`), "__NEXT_ERROR_CODE", { value: "E652", enumerable: false, configurable: true });
          let h2 = null, { isFallback: f2 } = t10, p2 = this.cacheControls.get(rr(e10));
          if ((null == d2 ? void 0 : d2.lastModified) === -1) u2 = -1, c2 = -31536e6;
          else {
            let r11 = performance.timeOrigin + performance.now(), n11 = (null == d2 ? void 0 : d2.lastModified) || r11;
            if (void 0 === (u2 = false !== (c2 = this.calculateRevalidate(e10, n11, this.dev ?? false, t10.isFallback)) && c2 < r11 || void 0) && ((null == d2 || null == (o2 = d2.value) ? void 0 : o2.kind) === tU.APP_PAGE || (null == d2 || null == (s2 = d2.value) ? void 0 : s2.kind) === tU.APP_ROUTE)) {
              let e11 = null == (l2 = d2.value.headers) ? void 0 : l2[y];
              if ("string" == typeof e11) {
                let t11 = e11.split(",");
                t11.length > 0 && (t4(t11, n11) ? u2 = -1 : t9(t11, n11) && (u2 = true));
              }
            }
          }
          return d2 && (h2 = { isStale: u2, cacheControl: p2, revalidateAfter: c2, value: d2.value, isFallback: f2 }), !d2 && this.prerenderManifest.notFoundRoutes.includes(e10) && (h2 = { isStale: u2, value: null, cacheControl: p2, revalidateAfter: c2, isFallback: f2 }, this.set(e10, h2.value, { ...t10, cacheControl: p2 })), h2;
        }
        async set(e10, t10, r10) {
          if ((null == t10 ? void 0 : t10.kind) === tU.FETCH) {
            let r11 = e7.workUnitAsyncStorageInstance.getStore(), n11 = r11 ? (0, e8.getPrerenderResumeDataCache)(r11) : null;
            n11 && (ri.debug && console.log("IncrementalCache: rdc:set", e10), n11.fetch.set(e10, t10));
          }
          if (this.disableForTestmode || this.dev && !r10.fetchCache) return;
          e10 = this._getPathname(e10, r10.fetchCache);
          let n10 = JSON.stringify(t10).length;
          if (r10.fetchCache && n10 > 2097152 && !this.hasCustomCacheHandler && !r10.isImplicitBuildTimeCache) {
            let t11 = `Failed to set Next.js data cache for ${r10.fetchUrl || e10}, items over 2MB can not be cached (${n10} bytes)`;
            if (this.dev) throw Object.defineProperty(Error(t11), "__NEXT_ERROR_CODE", { value: "E1003", enumerable: false, configurable: true });
            console.warn(t11);
            return;
          }
          try {
            var i2;
            !r10.fetchCache && r10.cacheControl && this.cacheControls.set(rr(e10), r10.cacheControl), await (null == (i2 = this.cacheHandler) ? void 0 : i2.set(e10, t10, r10));
          } catch (t11) {
            console.warn("Failed to update prerender cache for", e10, t11);
          }
        }
      }
      e.i(32670);
      var ra = e.i(39357);
      function ro(e10) {
        var t10, r10;
        return { ...e10, localePrefix: "object" == typeof (r10 = e10.localePrefix) ? r10 : { mode: r10 || "always" }, localeCookie: !!((t10 = e10.localeCookie) ?? 1) && { name: "NEXT_LOCALE", sameSite: "lax", ..."object" == typeof t10 && t10 }, localeDetection: e10.localeDetection ?? true, alternateLinks: e10.alternateLinks ?? true };
      }
      let rs = "X-NEXT-INTL-LOCALE";
      function rl(e10) {
        let t10;
        return ("object" == typeof e10 ? null == e10.host && null == e10.hostname : !/^[a-z]+:/i.test(e10)) && (null == (t10 = "object" == typeof e10 ? e10.pathname : e10) || !!t10.startsWith("/"));
      }
      function ru(e10, t10) {
        let r10 = e10;
        return /^\/(\?.*)?$/.test(t10) && (t10 = t10.slice(1)), r10 += t10;
      }
      function rc(e10, t10, r10) {
        return "string" == typeof e10 ? e10 : e10[t10] || r10;
      }
      function rd(e10) {
        let t10 = function() {
          try {
            return "true" === process.env._next_intl_trailing_slash;
          } catch {
            return false;
          }
        }(), [r10, ...n10] = e10.split("#"), i2 = n10.join("#"), a2 = r10;
        if ("/" !== a2) {
          let e11 = a2.endsWith("/");
          t10 && !e11 ? a2 += "/" : !t10 && e11 && (a2 = a2.slice(0, -1));
        }
        return i2 && (a2 += "#" + i2), a2;
      }
      function rh(e10, t10) {
        let r10 = rd(e10), n10 = rd(t10);
        return rp(r10).test(n10);
      }
      function rf(e10, t10) {
        return "never" !== t10.mode && t10.prefixes?.[e10] || "/" + e10;
      }
      function rp(e10) {
        let t10 = e10.replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
        return RegExp(`^${t10}$`);
      }
      function rg(e10) {
        return e10.includes("[[...");
      }
      function r_(e10) {
        return e10.includes("[...");
      }
      function rm(e10) {
        return e10.includes("[");
      }
      function ry(e10, t10) {
        let r10 = e10.split("/"), n10 = t10.split("/"), i2 = Math.max(r10.length, n10.length);
        for (let e11 = 0; e11 < i2; e11++) {
          let t11 = r10[e11], i3 = n10[e11];
          if (!t11 && i3) return -1;
          if (t11 && !i3) return 1;
          if (t11 || i3) {
            if (!rm(t11) && rm(i3)) return -1;
            if (rm(t11) && !rm(i3)) return 1;
            if (!r_(t11) && r_(i3)) return -1;
            if (r_(t11) && !r_(i3)) return 1;
            if (!rg(t11) && rg(i3)) return -1;
            if (rg(t11) && !rg(i3)) return 1;
          }
        }
        return 0;
      }
      function rv(e10) {
        return "function" == typeof e10.then;
      }
      function rb(e10, t10, r10, n10) {
        let i2 = "";
        return i2 += function(e11, t11) {
          if (!t11) return e11;
          let r11 = e11 = e11.replace(/\[\[/g, "[").replace(/\]\]/g, "]");
          return Object.entries(t11).forEach(([e12, t12]) => {
            r11 = r11.replace(`[${e12}]`, t12);
          }), r11;
        }(r10, function(e11, t11) {
          let r11 = rd(t11), n11 = rd(e11), i3 = rp(n11).exec(r11);
          if (!i3) return;
          let a2 = {}, o2 = n11.match(/\[([^\]]+)\]/g) ?? [];
          for (let e12 = 1; e12 < i3.length; e12++) {
            let t12 = o2[e12 - 1];
            if (!t12) continue;
            let r12 = t12.replace(/[[\]]/g, ""), n12 = i3[e12] ?? "";
            a2[r12] = n12;
          }
          return a2;
        }(t10, e10)), i2 = rd(i2);
      }
      function rw(e10, t10, r10) {
        e10.endsWith("/") || (e10 += "/");
        let n10 = rE(t10, r10), i2 = RegExp(`^(${n10.map(([, e11]) => e11.replaceAll("/", "\\/")).join("|")})/(.*)`, "i"), a2 = e10.match(i2), o2 = a2 ? "/" + a2[2] : e10;
        return "/" !== o2 && (o2 = rd(o2)), o2;
      }
      function rE(e10, t10, r10 = true) {
        let n10 = e10.map((e11) => [e11, rf(e11, t10)]);
        return r10 && n10.sort((e11, t11) => t11[1].length - e11[1].length), n10;
      }
      function rS(e10, t10, r10, n10) {
        let i2 = rE(t10, r10);
        for (let [t11, r11] of (n10 && i2.sort(([e11], [t12]) => {
          if (e11 === n10.defaultLocale) return -1;
          if (t12 === n10.defaultLocale) return 1;
          let r12 = n10.locales.includes(e11), i3 = n10.locales.includes(t12);
          return r12 && !i3 ? -1 : !r12 && i3 ? 1 : 0;
        }), i2)) {
          let n11, i3;
          if (e10 === r11 || e10.startsWith(r11 + "/")) n11 = i3 = true;
          else {
            let t12 = e10.toLowerCase(), a2 = r11.toLowerCase();
            (t12 === a2 || t12.startsWith(a2 + "/")) && (n11 = false, i3 = true);
          }
          if (i3) return { locale: t11, prefix: r11, matchedPrefix: e10.slice(0, r11.length), exact: n11 };
        }
      }
      function rC(e10, t10, r10) {
        let n10 = e10;
        return t10 && (n10 = ru(t10, n10)), r10 && (n10 += r10), n10;
      }
      function rT(e10) {
        return e10.get("x-forwarded-host") ?? e10.get("host") ?? void 0;
      }
      function rR(e10, t10) {
        return t10.defaultLocale === e10 || t10.locales.includes(e10);
      }
      function rP(e10, t10, r10) {
        let n10;
        return e10 && rR(t10, e10) && (n10 = e10), n10 || (n10 = r10.find((e11) => e11.defaultLocale === t10)), n10 || (n10 = r10.find((e11) => e11.locales.includes(t10))), n10;
      }
      function rx(e10, t10) {
        let r10 = t10 && t10.cache ? t10.cache : rk, n10 = t10 && t10.serializer ? t10.serializer : rN;
        return (t10 && t10.strategy ? t10.strategy : function(e11, t11) {
          var r11, n11;
          let i2 = 1 === e11.length ? rO : rA;
          return r11 = t11.cache.create(), n11 = t11.serializer, i2.bind(this, e11, r11, n11);
        })(e10, { cache: r10, serializer: n10 });
      }
      function rO(e10, t10, r10, n10) {
        let i2 = null == n10 || "number" == typeof n10 || "boolean" == typeof n10 ? n10 : r10(n10), a2 = t10.get(i2);
        return void 0 === a2 && (a2 = e10.call(this, n10), t10.set(i2, a2)), a2;
      }
      function rA(e10, t10, r10) {
        let n10 = Array.prototype.slice.call(arguments, 3), i2 = r10(n10), a2 = t10.get(i2);
        return void 0 === a2 && (a2 = e10.apply(this, n10), t10.set(i2, a2)), a2;
      }
      let rN = function() {
        return JSON.stringify(arguments);
      };
      class rI {
        cache;
        constructor() {
          this.cache = /* @__PURE__ */ Object.create(null);
        }
        get(e10) {
          return this.cache[e10];
        }
        set(e10, t10) {
          this.cache[e10] = t10;
        }
      }
      let rk = { create: function() {
        return new rI();
      } }, rL = { variadic: function(e10, t10) {
        var r10, n10;
        return r10 = t10.cache.create(), n10 = t10.serializer, rA.bind(this, e10, r10, n10);
      }, monadic: function(e10, t10) {
        var r10, n10;
        return r10 = t10.cache.create(), n10 = t10.serializer, rO.bind(this, e10, r10, n10);
      } }, rM = { "written-new": [{ paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } }, { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } }, { $cnsar: { _value: "HK+MO" } }, { $americas: { _value: "019" } }, { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } }, { no: { _desired: "nb", _distance: "1" } }, { bs: { _desired: "hr", _distance: "4" } }, { bs: { _desired: "sh", _distance: "4" } }, { hr: { _desired: "sh", _distance: "4" } }, { sr: { _desired: "sh", _distance: "4" } }, { aa: { _desired: "ssy", _distance: "4" } }, { de: { _desired: "gsw", _distance: "4", _oneway: "true" } }, { de: { _desired: "lb", _distance: "4", _oneway: "true" } }, { no: { _desired: "da", _distance: "8" } }, { nb: { _desired: "da", _distance: "8" } }, { ru: { _desired: "ab", _distance: "30", _oneway: "true" } }, { en: { _desired: "ach", _distance: "30", _oneway: "true" } }, { nl: { _desired: "af", _distance: "20", _oneway: "true" } }, { en: { _desired: "ak", _distance: "30", _oneway: "true" } }, { en: { _desired: "am", _distance: "30", _oneway: "true" } }, { es: { _desired: "ay", _distance: "20", _oneway: "true" } }, { ru: { _desired: "az", _distance: "30", _oneway: "true" } }, { ur: { _desired: "bal", _distance: "20", _oneway: "true" } }, { ru: { _desired: "be", _distance: "20", _oneway: "true" } }, { en: { _desired: "bem", _distance: "30", _oneway: "true" } }, { hi: { _desired: "bh", _distance: "30", _oneway: "true" } }, { en: { _desired: "bn", _distance: "30", _oneway: "true" } }, { zh: { _desired: "bo", _distance: "20", _oneway: "true" } }, { fr: { _desired: "br", _distance: "20", _oneway: "true" } }, { es: { _desired: "ca", _distance: "20", _oneway: "true" } }, { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } }, { en: { _desired: "chr", _distance: "20", _oneway: "true" } }, { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } }, { fr: { _desired: "co", _distance: "20", _oneway: "true" } }, { fr: { _desired: "crs", _distance: "20", _oneway: "true" } }, { sk: { _desired: "cs", _distance: "20" } }, { en: { _desired: "cy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ee", _distance: "30", _oneway: "true" } }, { en: { _desired: "eo", _distance: "30", _oneway: "true" } }, { es: { _desired: "eu", _distance: "20", _oneway: "true" } }, { da: { _desired: "fo", _distance: "20", _oneway: "true" } }, { nl: { _desired: "fy", _distance: "20", _oneway: "true" } }, { en: { _desired: "ga", _distance: "20", _oneway: "true" } }, { en: { _desired: "gaa", _distance: "30", _oneway: "true" } }, { en: { _desired: "gd", _distance: "20", _oneway: "true" } }, { es: { _desired: "gl", _distance: "20", _oneway: "true" } }, { es: { _desired: "gn", _distance: "20", _oneway: "true" } }, { hi: { _desired: "gu", _distance: "30", _oneway: "true" } }, { en: { _desired: "ha", _distance: "30", _oneway: "true" } }, { en: { _desired: "haw", _distance: "20", _oneway: "true" } }, { fr: { _desired: "ht", _distance: "20", _oneway: "true" } }, { ru: { _desired: "hy", _distance: "30", _oneway: "true" } }, { en: { _desired: "ia", _distance: "30", _oneway: "true" } }, { en: { _desired: "ig", _distance: "30", _oneway: "true" } }, { en: { _desired: "is", _distance: "20", _oneway: "true" } }, { id: { _desired: "jv", _distance: "20", _oneway: "true" } }, { en: { _desired: "ka", _distance: "30", _oneway: "true" } }, { fr: { _desired: "kg", _distance: "30", _oneway: "true" } }, { ru: { _desired: "kk", _distance: "30", _oneway: "true" } }, { en: { _desired: "km", _distance: "30", _oneway: "true" } }, { en: { _desired: "kn", _distance: "30", _oneway: "true" } }, { en: { _desired: "kri", _distance: "30", _oneway: "true" } }, { tr: { _desired: "ku", _distance: "30", _oneway: "true" } }, { ru: { _desired: "ky", _distance: "30", _oneway: "true" } }, { it: { _desired: "la", _distance: "20", _oneway: "true" } }, { en: { _desired: "lg", _distance: "30", _oneway: "true" } }, { fr: { _desired: "ln", _distance: "30", _oneway: "true" } }, { en: { _desired: "lo", _distance: "30", _oneway: "true" } }, { en: { _desired: "loz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "lua", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mai", _distance: "20", _oneway: "true" } }, { en: { _desired: "mfe", _distance: "30", _oneway: "true" } }, { fr: { _desired: "mg", _distance: "30", _oneway: "true" } }, { en: { _desired: "mi", _distance: "20", _oneway: "true" } }, { en: { _desired: "ml", _distance: "30", _oneway: "true" } }, { ru: { _desired: "mn", _distance: "30", _oneway: "true" } }, { hi: { _desired: "mr", _distance: "30", _oneway: "true" } }, { id: { _desired: "ms", _distance: "30", _oneway: "true" } }, { en: { _desired: "mt", _distance: "30", _oneway: "true" } }, { en: { _desired: "my", _distance: "30", _oneway: "true" } }, { en: { _desired: "ne", _distance: "30", _oneway: "true" } }, { nb: { _desired: "nn", _distance: "20" } }, { no: { _desired: "nn", _distance: "20" } }, { en: { _desired: "nso", _distance: "30", _oneway: "true" } }, { en: { _desired: "ny", _distance: "30", _oneway: "true" } }, { en: { _desired: "nyn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "oc", _distance: "20", _oneway: "true" } }, { en: { _desired: "om", _distance: "30", _oneway: "true" } }, { en: { _desired: "or", _distance: "30", _oneway: "true" } }, { en: { _desired: "pa", _distance: "30", _oneway: "true" } }, { en: { _desired: "pcm", _distance: "20", _oneway: "true" } }, { en: { _desired: "ps", _distance: "30", _oneway: "true" } }, { es: { _desired: "qu", _distance: "30", _oneway: "true" } }, { de: { _desired: "rm", _distance: "20", _oneway: "true" } }, { en: { _desired: "rn", _distance: "30", _oneway: "true" } }, { fr: { _desired: "rw", _distance: "30", _oneway: "true" } }, { hi: { _desired: "sa", _distance: "30", _oneway: "true" } }, { en: { _desired: "sd", _distance: "30", _oneway: "true" } }, { en: { _desired: "si", _distance: "30", _oneway: "true" } }, { en: { _desired: "sn", _distance: "30", _oneway: "true" } }, { en: { _desired: "so", _distance: "30", _oneway: "true" } }, { en: { _desired: "sq", _distance: "30", _oneway: "true" } }, { en: { _desired: "st", _distance: "30", _oneway: "true" } }, { id: { _desired: "su", _distance: "20", _oneway: "true" } }, { en: { _desired: "sw", _distance: "30", _oneway: "true" } }, { en: { _desired: "ta", _distance: "30", _oneway: "true" } }, { en: { _desired: "te", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tg", _distance: "30", _oneway: "true" } }, { en: { _desired: "ti", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tk", _distance: "30", _oneway: "true" } }, { en: { _desired: "tlh", _distance: "30", _oneway: "true" } }, { en: { _desired: "tn", _distance: "30", _oneway: "true" } }, { en: { _desired: "to", _distance: "30", _oneway: "true" } }, { ru: { _desired: "tt", _distance: "30", _oneway: "true" } }, { en: { _desired: "tum", _distance: "30", _oneway: "true" } }, { zh: { _desired: "ug", _distance: "20", _oneway: "true" } }, { ru: { _desired: "uk", _distance: "20", _oneway: "true" } }, { en: { _desired: "ur", _distance: "30", _oneway: "true" } }, { ru: { _desired: "uz", _distance: "30", _oneway: "true" } }, { fr: { _desired: "wo", _distance: "30", _oneway: "true" } }, { en: { _desired: "xh", _distance: "30", _oneway: "true" } }, { en: { _desired: "yi", _distance: "30", _oneway: "true" } }, { en: { _desired: "yo", _distance: "30", _oneway: "true" } }, { zh: { _desired: "za", _distance: "20", _oneway: "true" } }, { en: { _desired: "zu", _distance: "30", _oneway: "true" } }, { ar: { _desired: "aao", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "abv", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acm", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acw", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acx", _distance: "10", _oneway: "true" } }, { ar: { _desired: "acy", _distance: "10", _oneway: "true" } }, { ar: { _desired: "adf", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "aec", _distance: "10", _oneway: "true" } }, { ar: { _desired: "afb", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apc", _distance: "10", _oneway: "true" } }, { ar: { _desired: "apd", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arq", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ars", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ary", _distance: "10", _oneway: "true" } }, { ar: { _desired: "arz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "auz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "avl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } }, { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } }, { ar: { _desired: "pga", _distance: "10", _oneway: "true" } }, { ar: { _desired: "shu", _distance: "10", _oneway: "true" } }, { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } }, { az: { _desired: "azb", _distance: "10", _oneway: "true" } }, { et: { _desired: "vro", _distance: "10", _oneway: "true" } }, { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fub", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fue", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fui", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } }, { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gui", _distance: "10", _oneway: "true" } }, { gn: { _desired: "gun", _distance: "10", _oneway: "true" } }, { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } }, { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } }, { kln: { _desired: "enb", _distance: "10", _oneway: "true" } }, { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } }, { kln: { _desired: "niq", _distance: "10", _oneway: "true" } }, { kln: { _desired: "oki", _distance: "10", _oneway: "true" } }, { kln: { _desired: "pko", _distance: "10", _oneway: "true" } }, { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tec", _distance: "10", _oneway: "true" } }, { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } }, { kok: { _desired: "gom", _distance: "10", _oneway: "true" } }, { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } }, { luy: { _desired: "ida", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lko", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lks", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lri", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lto", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lts", _distance: "10", _oneway: "true" } }, { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nle", _distance: "10", _oneway: "true" } }, { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } }, { luy: { _desired: "rag", _distance: "10", _oneway: "true" } }, { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } }, { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } }, { mg: { _desired: "msh", _distance: "10", _oneway: "true" } }, { mg: { _desired: "skg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } }, { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } }, { mg: { _desired: "txy", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } }, { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } }, { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "btj", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bve", _distance: "10", _oneway: "true" } }, { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } }, { ms: { _desired: "coa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "dup", _distance: "10", _oneway: "true" } }, { ms: { _desired: "hji", _distance: "10", _oneway: "true" } }, { ms: { _desired: "id", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jak", _distance: "10", _oneway: "true" } }, { ms: { _desired: "jax", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } }, { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lce", _distance: "10", _oneway: "true" } }, { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } }, { ms: { _desired: "liw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "max", _distance: "10", _oneway: "true" } }, { ms: { _desired: "meo", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } }, { ms: { _desired: "min", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } }, { ms: { _desired: "msi", _distance: "10", _oneway: "true" } }, { ms: { _desired: "mui", _distance: "10", _oneway: "true" } }, { ms: { _desired: "orn", _distance: "10", _oneway: "true" } }, { ms: { _desired: "ors", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pel", _distance: "10", _oneway: "true" } }, { ms: { _desired: "pse", _distance: "10", _oneway: "true" } }, { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } }, { ms: { _desired: "urk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } }, { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } }, { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } }, { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } }, { ne: { _desired: "dty", _distance: "10", _oneway: "true" } }, { om: { _desired: "gax", _distance: "10", _oneway: "true" } }, { om: { _desired: "hae", _distance: "10", _oneway: "true" } }, { om: { _desired: "orc", _distance: "10", _oneway: "true" } }, { or: { _desired: "spv", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } }, { ps: { _desired: "pst", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qub", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qud", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quf", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qug", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quk", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qul", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qup", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qur", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qus", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qux", _distance: "10", _oneway: "true" } }, { qu: { _desired: "quy", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qva", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qve", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qws", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } }, { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } }, { sc: { _desired: "sro", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aae", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aat", _distance: "10", _oneway: "true" } }, { sq: { _desired: "aln", _distance: "10", _oneway: "true" } }, { syr: { _desired: "aii", _distance: "10", _oneway: "true" } }, { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } }, { yi: { _desired: "yih", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } }, { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "czo", _distance: "10", _oneway: "true" } }, { zh: { _desired: "gan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hak", _distance: "10", _oneway: "true" } }, { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } }, { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } }, { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } }, { zh: { _desired: "nan", _distance: "10", _oneway: "true" } }, { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } }, { zh: { _desired: "yue", _distance: "10", _oneway: "true" } }, { "*": { _desired: "*", _distance: "80" } }, { "en-Latn": { _desired: "am-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "az-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "bn-Beng", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "bo-Tibt", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "hy-Armn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ka-Geor", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "km-Khmr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "kn-Knda", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "lo-Laoo", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ml-Mlym", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "my-Mymr", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ne-Deva", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "or-Orya", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "pa-Guru", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ps-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "sd-Arab", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "si-Sinh", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ta-Taml", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "te-Telu", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ti-Ethi", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "tk-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "ur-Arab", _distance: "10", _oneway: "true" } }, { "ru-Cyrl": { _desired: "uz-Latn", _distance: "10", _oneway: "true" } }, { "en-Latn": { _desired: "yi-Hebr", _distance: "10", _oneway: "true" } }, { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } }, { "zh-Hans": { _desired: "za-Latn", _distance: "10", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "zh-Hant": { _desired: "zh-Hani", _distance: "20", _oneway: "true" } }, { "ar-Arab": { _desired: "ar-Latn", _distance: "20", _oneway: "true" } }, { "bn-Beng": { _desired: "bn-Latn", _distance: "20", _oneway: "true" } }, { "gu-Gujr": { _desired: "gu-Latn", _distance: "20", _oneway: "true" } }, { "hi-Deva": { _desired: "hi-Latn", _distance: "20", _oneway: "true" } }, { "kn-Knda": { _desired: "kn-Latn", _distance: "20", _oneway: "true" } }, { "ml-Mlym": { _desired: "ml-Latn", _distance: "20", _oneway: "true" } }, { "mr-Deva": { _desired: "mr-Latn", _distance: "20", _oneway: "true" } }, { "ta-Taml": { _desired: "ta-Latn", _distance: "20", _oneway: "true" } }, { "te-Telu": { _desired: "te-Latn", _distance: "20", _oneway: "true" } }, { "zh-Hans": { _desired: "zh-Latn", _distance: "20", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Latn", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hani", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ja-Jpan": { _desired: "ja-Hrkt", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Hira", _distance: "5", _oneway: "true" } }, { "ja-Hrkt": { _desired: "ja-Kana", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hani", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Hang", _distance: "5", _oneway: "true" } }, { "ko-Kore": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "ko-Hang": { _desired: "ko-Jamo", _distance: "5", _oneway: "true" } }, { "*-*": { _desired: "*-*", _distance: "50" } }, { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } }, { "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" } }, { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } }, { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } }, { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } }, { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } }, { "en-*-*": { _desired: "en-*-*", _distance: "5" } }, { "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" } }, { "es-*-$!americas": { _desired: "es-*-$!americas", _distance: "4" } }, { "es-*-*": { _desired: "es-*-*", _distance: "5" } }, { "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" } }, { "pt-*-$!americas": { _desired: "pt-*-$!americas", _distance: "4" } }, { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } }, { "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" } }, { "zh-Hant-$!cnsar": { _desired: "zh-Hant-$!cnsar", _distance: "4" } }, { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } }, { "*-*-*": { _desired: "*-*-*", _distance: "4" } }] }, rD = { "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"], "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"], "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"], "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"], "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"], "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"], "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"], "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"], "018": ["018", "BW", "LS", "NA", "SZ", "ZA"], "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"], "021": ["021", "BM", "CA", "GL", "PM", "US"], "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"], "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"], "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"], "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"], "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"], "054": ["054", "FJ", "NC", "PG", "SB", "VU"], "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"], "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"], 142: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"], 143: ["143", "KG", "KZ", "TJ", "TM", "UZ"], 145: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"], 150: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"], 151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"], 154: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"], 155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"], 202: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"], 419: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"], EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"], EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"], QO: ["AC", "AQ", "CP", "DG", "QO", "TA"], UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"] }, rB = /-u(?:-[0-9a-z]{2,8})+/gi;
      function rH(e10, t10, r10 = Error) {
        if (!e10) throw new r10(t10);
      }
      function rj(e10, t10, r10) {
        let [n10, i2, a2] = t10.split("-"), o2 = true;
        if (a2 && "$" === a2[0]) {
          let t11 = "!" !== a2[1], n11 = (t11 ? r10[a2.slice(1)] : r10[a2.slice(2)]).map((e11) => rD[e11] || [e11]).reduce((e11, t12) => [...e11, ...t12], []);
          o2 &&= n11.indexOf(e10.region || "") > -1 == t11;
        } else o2 &&= !e10.region || "*" === a2 || a2 === e10.region;
        return o2 &&= !e10.script || "*" === i2 || i2 === e10.script, o2 &&= !e10.language || "*" === n10 || n10 === e10.language;
      }
      function rU(e10) {
        return [e10.language, e10.script, e10.region].filter(Boolean).join("-");
      }
      function r$(e10, t10, r10) {
        for (let n10 of r10.matches) {
          let i2 = rj(e10, n10.desired, r10.matchVariables) && rj(t10, n10.supported, r10.matchVariables);
          if (n10.oneway || i2 || (i2 = rj(e10, n10.supported, r10.matchVariables) && rj(t10, n10.desired, r10.matchVariables)), i2) {
            let i3 = 10 * n10.distance;
            if (r10.paradigmLocales.indexOf(rU(e10)) > -1 != r10.paradigmLocales.indexOf(rU(t10)) > -1) return i3 - 1;
            return i3;
          }
        }
        throw Error("No matching distance found");
      }
      let rG = rx(function(e10, t10) {
        let r10 = new Intl.Locale(e10).maximize(), i2 = new Intl.Locale(t10).maximize(), a2 = { language: r10.language, script: r10.script || "", region: r10.region || "" }, o2 = { language: i2.language, script: i2.script || "", region: i2.region || "" }, s2 = 0, l2 = function() {
          if (!n) {
            let e11 = rM["written-new"][0]?.paradigmLocales?._locales.split(" "), t11 = rM["written-new"].slice(1, 5);
            n = { matches: rM["written-new"].slice(5).map((e12) => {
              let t12 = Object.keys(e12)[0], r11 = e12[t12];
              return { supported: t12, desired: r11._desired, distance: +r11._distance, oneway: "true" === r11.oneway };
            }, {}), matchVariables: t11.reduce((e12, t12) => {
              let r11 = Object.keys(t12)[0], n10 = t12[r11];
              return e12[r11.slice(1)] = n10._value.split("+"), e12;
            }, {}), paradigmLocales: [...e11, ...e11.map((e12) => new Intl.Locale(e12.replace(/_/g, "-")).maximize().toString())] };
          }
          return n;
        }();
        return a2.language !== o2.language && (s2 += r$({ language: r10.language, script: "", region: "" }, { language: i2.language, script: "", region: "" }, l2)), a2.script !== o2.script && (s2 += r$({ language: r10.language, script: a2.script, region: "" }, { language: i2.language, script: o2.script, region: "" }, l2)), a2.region !== o2.region && (s2 += r$(a2, o2, l2)), s2;
      }, { serializer: (e10) => `${e10[0]}|${e10[1]}` }), rq = /* @__PURE__ */ new WeakMap();
      function rF(e10) {
        return Intl.getCanonicalLocales(e10)[0];
      }
      let rV = /* @__PURE__ */ new WeakMap();
      var rz = e.i(89881);
      function rK(e10, t10, r10) {
        let n10, i2 = new rz.default({ headers: { "accept-language": e10.get("accept-language") || void 0 } }).languages();
        try {
          var a2;
          let e11 = t10.slice().sort((e12, t11) => t11.length - e12.length);
          a2 = function(e12, t11, r11, n11, i3, a3) {
            let o2, s2;
            if ("lookup" === r11.localeMatcher) o2 = function(e13, t12, r12) {
              let n12 = { locale: "" };
              for (let r13 of t12) {
                let t13 = r13.replace(rB, ""), i4 = function(e14, t14) {
                  let r14 = rV.get(e14);
                  r14 || (r14 = new Set(e14), rV.set(e14, r14));
                  let n13 = t14;
                  for (; ; ) {
                    if (r14.has(n13)) return n13;
                    let e15 = n13.lastIndexOf("-");
                    if (!~e15) return;
                    e15 >= 2 && "-" === n13[e15 - 2] && (e15 -= 2), n13 = n13.slice(0, e15);
                  }
                }(e13, t13);
                if (i4) return n12.locale = i4, r13 !== t13 && (n12.extension = r13.slice(t13.length, r13.length)), n12;
              }
              return n12.locale = r12(), n12;
            }(Array.from(e12), t11, a3);
            else {
              var l2;
              let r12, n12, i4, s3, u3;
              l2 = Array.from(e12), i4 = [], s3 = t11.reduce((e13, t12) => {
                let r13 = t12.replace(rB, "");
                return i4.push(r13), e13[r13] = t12, e13;
              }, {}), (u3 = function(e13, t12, r13 = 838) {
                let n13 = 1 / 0, i5 = { matchedDesiredLocale: "", distances: {} }, a4 = rq.get(t12);
                a4 || (a4 = t12.map((e14) => {
                  try {
                    return Intl.getCanonicalLocales([e14])[0] || e14;
                  } catch {
                    return e14;
                  }
                }), rq.set(t12, a4));
                let o3 = new Set(a4);
                for (let t13 = 0; t13 < e13.length; t13++) {
                  let r14 = e13[t13];
                  if (o3.has(r14)) {
                    let e14 = 0 + 40 * t13;
                    if (i5.distances[r14] = { [r14]: e14 }, e14 < n13 && (n13 = e14, i5.matchedDesiredLocale = r14, i5.matchedSupportedLocale = r14), 0 === t13) return i5;
                  }
                }
                for (let t13 = 0; t13 < e13.length; t13++) {
                  let r14 = e13[t13];
                  try {
                    let e14 = new Intl.Locale(r14).maximize().toString();
                    if (e14 !== r14) {
                      let a5 = function(e15) {
                        let t14 = [], r15 = e15;
                        for (; r15; ) {
                          t14.push(r15);
                          let e16 = r15.lastIndexOf("-");
                          if (-1 === e16) break;
                          r15 = r15.substring(0, e16);
                        }
                        return t14;
                      }(e14);
                      for (let s4 = 0; s4 < a5.length; s4++) {
                        let l3 = a5[s4];
                        if (l3 !== r14 && o3.has(l3)) {
                          let a6;
                          try {
                            a6 = new Intl.Locale(l3).maximize().toString() === e14 ? 0 + 40 * t13 : 10 * s4 + 40 * t13;
                          } catch {
                            a6 = 10 * s4 + 40 * t13;
                          }
                          i5.distances[r14] || (i5.distances[r14] = {}), i5.distances[r14][l3] = a6, a6 < n13 && (n13 = a6, i5.matchedDesiredLocale = r14, i5.matchedSupportedLocale = l3);
                          break;
                        }
                      }
                    }
                  } catch {
                  }
                }
                return i5.matchedSupportedLocale && 0 === n13 || (e13.forEach((e14, r14) => {
                  i5.distances[e14] || (i5.distances[e14] = {}), a4.forEach((a5, o4) => {
                    let s4 = t12[o4], l3 = rG(e14, a5) + 0 + 40 * r14;
                    i5.distances[e14][s4] = l3, l3 < n13 && (n13 = l3, i5.matchedDesiredLocale = e14, i5.matchedSupportedLocale = s4);
                  });
                }), n13 >= r13 && (i5.matchedDesiredLocale = void 0, i5.matchedSupportedLocale = void 0)), i5;
              }(i4, l2)).matchedSupportedLocale && u3.matchedDesiredLocale && (r12 = u3.matchedSupportedLocale, n12 = s3[u3.matchedDesiredLocale].slice(u3.matchedDesiredLocale.length) || void 0), o2 = r12 ? { locale: r12, extension: n12 } : { locale: a3() };
            }
            null == o2 && (o2 = { locale: a3(), extension: "" });
            let u2 = o2.locale, c2 = i3[u2], d2 = { locale: "en", dataLocale: u2 };
            s2 = o2.extension ? function(e13) {
              let t12;
              rH(e13 === e13.toLowerCase(), "Expected extension to be lowercase"), rH("-u-" === e13.slice(0, 3), "Expected extension to be a Unicode locale extension");
              let r12 = [], n12 = [], i4 = e13.length, a4 = 3;
              for (; a4 < i4; ) {
                let o3, s3 = e13.indexOf("-", a4);
                o3 = -1 === s3 ? i4 - a4 : s3 - a4;
                let l3 = e13.slice(a4, a4 + o3);
                rH(o3 >= 2, "Expected a subtag to have at least 2 characters"), void 0 === t12 && 2 != o3 ? -1 === r12.indexOf(l3) && r12.push(l3) : 2 === o3 ? (t12 = { key: l3, value: "" }, void 0 === n12.find((e14) => e14.key === t12?.key) && n12.push(t12)) : t12?.value === "" ? t12.value = l3 : (rH(void 0 !== t12, "Expected keyword to be defined"), t12.value += "-" + l3), a4 += o3 + 1;
              }
              return { attributes: r12, keywords: n12 };
            }(o2.extension).keywords : [];
            let h2 = [];
            for (let e13 of n11) {
              let t12, n12 = c2?.[e13] ?? [];
              rH(Array.isArray(n12), `keyLocaleData for ${e13} must be an array`);
              let i4 = n12[0];
              rH(void 0 === i4 || "string" == typeof i4, "value must be a string or undefined");
              let a4 = s2.find((t13) => t13.key === e13);
              if (a4) {
                let r12 = a4.value;
                "" !== r12 ? n12.indexOf(r12) > -1 && (t12 = { key: e13, value: i4 = r12 }) : n12.indexOf("true") > -1 && (t12 = { key: e13, value: i4 = "true" });
              }
              let o3 = r11[e13];
              rH(null == o3 || "string" == typeof o3, "optionsValue must be a string or undefined"), "string" == typeof o3 && "" === (o3 = function(e14, t13) {
                let r12 = t13.toLowerCase();
                return rH(void 0 !== e14, "ukey must be defined"), r12;
              }(e13.toLowerCase(), o3)) && (o3 = "true"), o3 !== i4 && n12.indexOf(o3) > -1 && (i4 = o3, t12 = void 0), t12 && h2.push(t12), d2[e13] = i4;
            }
            return h2.length > 0 && (u2 = function(e13, t12, r12) {
              rH(-1 === e13.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
              let n12 = "-u";
              for (let e14 of t12) n12 += `-${e14}`;
              for (let e14 of r12) {
                let { key: t13, value: r13 } = e14;
                n12 += `-${t13}`, "" !== r13 && (n12 += `-${r13}`);
              }
              if ("-u" === n12) return rF(e13);
              let i4 = e13.indexOf("-x-");
              return rF(-1 === i4 ? e13 + n12 : e13.slice(0, i4) + n12 + e13.slice(i4));
            }(u2, [], h2)), d2.locale = u2, d2;
          }(e11, Intl.getCanonicalLocales(i2), { localeMatcher: "best fit" }, [], {}, () => r10).locale, n10 = t10.find((e12) => e12.toLowerCase() === a2.toLowerCase());
        } catch {
        }
        return n10;
      }
      function rX(e10, t10) {
        if (e10.localeCookie && t10.has(e10.localeCookie.name)) {
          let r10 = t10.get(e10.localeCookie.name)?.value;
          if (r10 && e10.locales.includes(r10)) return r10;
        }
      }
      function rW(e10, t10, r10, n10) {
        let i2;
        return n10 && (i2 = rS(n10, e10.locales, e10.localePrefix)?.locale), !i2 && e10.localeDetection && (i2 = rX(e10, r10)), !i2 && e10.localeDetection && (i2 = rK(t10, e10.locales, e10.defaultLocale)), i2 || (i2 = e10.defaultLocale), i2;
      }
      URLSearchParams;
      var rY = e.i(72074), rZ = e.i(65461);
      let rJ = e.r(64852).actionAsyncStorage;
      function rQ(e10, t10, r10 = rY.RedirectStatusCode.TemporaryRedirect) {
        let n10 = Object.defineProperty(Error(rZ.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
        return n10.digest = `${rZ.REDIRECT_ERROR_CODE};${t10};${e10};${r10};`, n10;
      }
      function r0(e10, t10) {
        throw rQ(e10, t10 ??= rJ?.getStore()?.isAction ? "push" : "replace", rY.RedirectStatusCode.TemporaryRedirect);
      }
      function r1(e10, t10 = "replace") {
        throw rQ(e10, t10, rY.RedirectStatusCode.PermanentRedirect);
      }
      e.r(22990).unstable_rethrow;
      var r2 = e.i(26942), r3 = r2["use".trim()], r4 = e.i(42514);
      function r9(e10) {
        let t10 = new URLSearchParams();
        for (let [r10, n10] of Object.entries(e10)) Array.isArray(n10) ? n10.forEach((e11) => {
          t10.append(r10, String(e11));
        }) : t10.set(r10, String(n10));
        return "?" + t10.toString();
      }
      var r6 = e.i(46420);
      let r5 = ((et = {})[et.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", et[et.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", et[et.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", et[et.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", et[et.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", et[et.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", et[et.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", et[et.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", et[et.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", et[et.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", et[et.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", et[et.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", et[et.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", et[et.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", et[et.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", et[et.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", et[et.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", et[et.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", et[et.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", et[et.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", et[et.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", et[et.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", et[et.INVALID_TAG = 23] = "INVALID_TAG", et[et.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", et[et.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", et[et.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", et), r8 = ((er = {})[er.literal = 0] = "literal", er[er.argument = 1] = "argument", er[er.number = 2] = "number", er[er.date = 3] = "date", er[er.time = 4] = "time", er[er.select = 5] = "select", er[er.plural = 6] = "plural", er[er.pound = 7] = "pound", er[er.tag = 8] = "tag", er), r7 = ((en = {})[en.number = 0] = "number", en[en.dateTime = 1] = "dateTime", en);
      function ne(e10) {
        return e10.type === r8.literal;
      }
      function nt(e10) {
        return e10.type === r8.number;
      }
      function nr(e10) {
        return e10.type === r8.date;
      }
      function nn(e10) {
        return e10.type === r8.time;
      }
      function ni(e10) {
        return e10.type === r8.select;
      }
      function na(e10) {
        return e10.type === r8.plural;
      }
      function no(e10) {
        return e10.type === r8.tag;
      }
      function ns(e10) {
        return !!(e10 && "object" == typeof e10 && e10.type === r7.number);
      }
      function nl(e10) {
        return !!(e10 && "object" == typeof e10 && e10.type === r7.dateTime);
      }
      let nu = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, nc = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i, nd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, nh = /^(@+)?(\+|#+)?[rs]?$/g, nf = /(\*)(0+)|(#+)(0+)|(0+)/g, np = /^(0+)$/;
      function ng(e10) {
        let t10 = {};
        return "r" === e10[e10.length - 1] ? t10.roundingPriority = "morePrecision" : "s" === e10[e10.length - 1] && (t10.roundingPriority = "lessPrecision"), e10.replace(nh, function(e11, r10, n10) {
          return "string" != typeof n10 ? (t10.minimumSignificantDigits = r10.length, t10.maximumSignificantDigits = r10.length) : "+" === n10 ? t10.minimumSignificantDigits = r10.length : "#" === r10[0] ? t10.maximumSignificantDigits = r10.length : (t10.minimumSignificantDigits = r10.length, t10.maximumSignificantDigits = r10.length + ("string" == typeof n10 ? n10.length : 0)), "";
        }), t10;
      }
      function n_(e10) {
        switch (e10) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function nm(e10) {
        let t10 = n_(e10);
        return t10 || {};
      }
      let ny = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, nv = { "001": ["H", "h"], 419: ["h", "H", "hB", "hb"], AC: ["H", "h", "hb", "hB"], AD: ["H", "hB"], AE: ["h", "hB", "hb", "H"], AF: ["H", "hb", "hB", "h"], AG: ["h", "hb", "H", "hB"], AI: ["H", "h", "hb", "hB"], AL: ["h", "H", "hB"], AM: ["H", "hB"], AO: ["H", "hB"], AR: ["h", "H", "hB", "hb"], AS: ["h", "H"], AT: ["H", "hB"], AU: ["h", "hb", "H", "hB"], AW: ["H", "hB"], AX: ["H"], AZ: ["H", "hB", "h"], BA: ["H", "hB", "h"], BB: ["h", "hb", "H", "hB"], BD: ["h", "hB", "H"], BE: ["H", "hB"], BF: ["H", "hB"], BG: ["H", "hB", "h"], BH: ["h", "hB", "hb", "H"], BI: ["H", "h"], BJ: ["H", "hB"], BL: ["H", "hB"], BM: ["h", "hb", "H", "hB"], BN: ["hb", "hB", "h", "H"], BO: ["h", "H", "hB", "hb"], BQ: ["H"], BR: ["H", "hB"], BS: ["h", "hb", "H", "hB"], BT: ["h", "H"], BW: ["H", "h", "hb", "hB"], BY: ["H", "h"], BZ: ["H", "h", "hb", "hB"], CA: ["h", "hb", "H", "hB"], CC: ["H", "h", "hb", "hB"], CD: ["hB", "H"], CF: ["H", "h", "hB"], CG: ["H", "hB"], CH: ["H", "hB", "h"], CI: ["H", "hB"], CK: ["H", "h", "hb", "hB"], CL: ["h", "H", "hB", "hb"], CM: ["H", "h", "hB"], CN: ["H", "hB", "hb", "h"], CO: ["h", "H", "hB", "hb"], CP: ["H"], CR: ["h", "H", "hB", "hb"], CU: ["h", "H", "hB", "hb"], CV: ["H", "hB"], CW: ["H", "hB"], CX: ["H", "h", "hb", "hB"], CY: ["h", "H", "hb", "hB"], CZ: ["H"], DE: ["H", "hB"], DG: ["H", "h", "hb", "hB"], DJ: ["h", "H"], DK: ["H"], DM: ["h", "hb", "H", "hB"], DO: ["h", "H", "hB", "hb"], DZ: ["h", "hB", "hb", "H"], EA: ["H", "h", "hB", "hb"], EC: ["h", "H", "hB", "hb"], EE: ["H", "hB"], EG: ["h", "hB", "hb", "H"], EH: ["h", "hB", "hb", "H"], ER: ["h", "H"], ES: ["H", "hB", "h", "hb"], ET: ["hB", "hb", "h", "H"], FI: ["H"], FJ: ["h", "hb", "H", "hB"], FK: ["H", "h", "hb", "hB"], FM: ["h", "hb", "H", "hB"], FO: ["H", "h"], FR: ["H", "hB"], GA: ["H", "hB"], GB: ["H", "h", "hb", "hB"], GD: ["h", "hb", "H", "hB"], GE: ["H", "hB", "h"], GF: ["H", "hB"], GG: ["H", "h", "hb", "hB"], GH: ["h", "H"], GI: ["H", "h", "hb", "hB"], GL: ["H", "h"], GM: ["h", "hb", "H", "hB"], GN: ["H", "hB"], GP: ["H", "hB"], GQ: ["H", "hB", "h", "hb"], GR: ["h", "H", "hb", "hB"], GS: ["H", "h", "hb", "hB"], GT: ["h", "H", "hB", "hb"], GU: ["h", "hb", "H", "hB"], GW: ["H", "hB"], GY: ["h", "hb", "H", "hB"], HK: ["h", "hB", "hb", "H"], HN: ["h", "H", "hB", "hb"], HR: ["H", "hB"], HU: ["H", "h"], IC: ["H", "h", "hB", "hb"], ID: ["H"], IE: ["H", "h", "hb", "hB"], IL: ["H", "hB"], IM: ["H", "h", "hb", "hB"], IN: ["h", "H"], IO: ["H", "h", "hb", "hB"], IQ: ["h", "hB", "hb", "H"], IR: ["hB", "H"], IS: ["H"], IT: ["H", "hB"], JE: ["H", "h", "hb", "hB"], JM: ["h", "hb", "H", "hB"], JO: ["h", "hB", "hb", "H"], JP: ["H", "K", "h"], KE: ["hB", "hb", "H", "h"], KG: ["H", "h", "hB", "hb"], KH: ["hB", "h", "H", "hb"], KI: ["h", "hb", "H", "hB"], KM: ["H", "h", "hB", "hb"], KN: ["h", "hb", "H", "hB"], KP: ["h", "H", "hB", "hb"], KR: ["h", "H", "hB", "hb"], KW: ["h", "hB", "hb", "H"], KY: ["h", "hb", "H", "hB"], KZ: ["H", "hB"], LA: ["H", "hb", "hB", "h"], LB: ["h", "hB", "hb", "H"], LC: ["h", "hb", "H", "hB"], LI: ["H", "hB", "h"], LK: ["H", "h", "hB", "hb"], LR: ["h", "hb", "H", "hB"], LS: ["h", "H"], LT: ["H", "h", "hb", "hB"], LU: ["H", "h", "hB"], LV: ["H", "hB", "hb", "h"], LY: ["h", "hB", "hb", "H"], MA: ["H", "h", "hB", "hb"], MC: ["H", "hB"], MD: ["H", "hB"], ME: ["H", "hB", "h"], MF: ["H", "hB"], MG: ["H", "h"], MH: ["h", "hb", "H", "hB"], MK: ["H", "h", "hb", "hB"], ML: ["H"], MM: ["hB", "hb", "H", "h"], MN: ["H", "h", "hb", "hB"], MO: ["h", "hB", "hb", "H"], MP: ["h", "hb", "H", "hB"], MQ: ["H", "hB"], MR: ["h", "hB", "hb", "H"], MS: ["H", "h", "hb", "hB"], MT: ["H", "h"], MU: ["H", "h"], MV: ["H", "h"], MW: ["h", "hb", "H", "hB"], MX: ["h", "H", "hB", "hb"], MY: ["hb", "hB", "h", "H"], MZ: ["H", "hB"], NA: ["h", "H", "hB", "hb"], NC: ["H", "hB"], NE: ["H"], NF: ["H", "h", "hb", "hB"], NG: ["H", "h", "hb", "hB"], NI: ["h", "H", "hB", "hb"], NL: ["H", "hB"], NO: ["H", "h"], NP: ["H", "h", "hB"], NR: ["H", "h", "hb", "hB"], NU: ["H", "h", "hb", "hB"], NZ: ["h", "hb", "H", "hB"], OM: ["h", "hB", "hb", "H"], PA: ["h", "H", "hB", "hb"], PE: ["h", "H", "hB", "hb"], PF: ["H", "h", "hB"], PG: ["h", "H"], PH: ["h", "hB", "hb", "H"], PK: ["h", "hB", "H"], PL: ["H", "h"], PM: ["H", "hB"], PN: ["H", "h", "hb", "hB"], PR: ["h", "H", "hB", "hb"], PS: ["h", "hB", "hb", "H"], PT: ["H", "hB"], PW: ["h", "H"], PY: ["h", "H", "hB", "hb"], QA: ["h", "hB", "hb", "H"], RE: ["H", "hB"], RO: ["H", "hB"], RS: ["H", "hB", "h"], RU: ["H"], RW: ["H", "h"], SA: ["h", "hB", "hb", "H"], SB: ["h", "hb", "H", "hB"], SC: ["H", "h", "hB"], SD: ["h", "hB", "hb", "H"], SE: ["H"], SG: ["h", "hb", "H", "hB"], SH: ["H", "h", "hb", "hB"], SI: ["H", "hB"], SJ: ["H"], SK: ["H"], SL: ["h", "hb", "H", "hB"], SM: ["H", "h", "hB"], SN: ["H", "h", "hB"], SO: ["h", "H"], SR: ["H", "hB"], SS: ["h", "hb", "H", "hB"], ST: ["H", "hB"], SV: ["h", "H", "hB", "hb"], SX: ["H", "h", "hb", "hB"], SY: ["h", "hB", "hb", "H"], SZ: ["h", "hb", "H", "hB"], TA: ["H", "h", "hb", "hB"], TC: ["h", "hb", "H", "hB"], TD: ["h", "H", "hB"], TF: ["H", "h", "hB"], TG: ["H", "hB"], TH: ["H", "h"], TJ: ["H", "h"], TL: ["H", "hB", "hb", "h"], TM: ["H", "h"], TN: ["h", "hB", "hb", "H"], TO: ["h", "H"], TR: ["H", "hB"], TT: ["h", "hb", "H", "hB"], TW: ["hB", "hb", "h", "H"], TZ: ["hB", "hb", "H", "h"], UA: ["H", "hB", "h"], UG: ["hB", "hb", "H", "h"], UM: ["h", "hb", "H", "hB"], US: ["h", "hb", "H", "hB"], UY: ["h", "H", "hB", "hb"], UZ: ["H", "hB", "h"], VA: ["H", "h", "hB"], VC: ["h", "hb", "H", "hB"], VE: ["h", "H", "hB", "hb"], VG: ["h", "hb", "H", "hB"], VI: ["h", "hb", "H", "hB"], VN: ["H", "h"], VU: ["h", "H"], WF: ["H", "hB"], WS: ["h", "H"], XK: ["H", "hB", "h"], YE: ["h", "hB", "hb", "H"], YT: ["H", "hB"], ZA: ["H", "h", "hb", "hB"], ZM: ["h", "hb", "H", "hB"], ZW: ["H", "h"], "af-ZA": ["H", "h", "hB", "hb"], "ar-001": ["h", "hB", "hb", "H"], "ca-ES": ["H", "h", "hB"], "en-001": ["h", "hb", "H", "hB"], "en-HK": ["h", "hb", "H", "hB"], "en-IL": ["H", "h", "hb", "hB"], "en-MY": ["h", "hb", "H", "hB"], "es-BR": ["H", "h", "hB", "hb"], "es-ES": ["H", "h", "hB", "hb"], "es-GQ": ["H", "h", "hB", "hb"], "fr-CA": ["H", "h", "hB"], "gl-ES": ["H", "h", "hB"], "gu-IN": ["hB", "hb", "h", "H"], "hi-IN": ["hB", "h", "H"], "it-CH": ["H", "h", "hB"], "it-IT": ["H", "h", "hB"], "kn-IN": ["hB", "h", "H"], "ku-SY": ["H", "hB"], "ml-IN": ["hB", "h", "H"], "mr-IN": ["hB", "hb", "h", "H"], "pa-IN": ["hB", "hb", "h", "H"], "ta-IN": ["hB", "h", "hb", "H"], "te-IN": ["hB", "h", "H"], "zu-ZA": ["H", "hB", "hb", "h"] }, nb = RegExp(`^${nu.source}*`), nw = RegExp(`${nu.source}*$`);
      function nE(e10, t10) {
        return { start: e10, end: t10 };
      }
      let nS = !!Object.fromEntries, nC = !!String.prototype.trimStart, nT = !!String.prototype.trimEnd, nR = nS ? Object.fromEntries : function(e10) {
        let t10 = {};
        for (let [r10, n10] of e10) t10[r10] = n10;
        return t10;
      }, nP = nC ? function(e10) {
        return e10.trimStart();
      } : function(e10) {
        return e10.replace(nb, "");
      }, nx = nT ? function(e10) {
        return e10.trimEnd();
      } : function(e10) {
        return e10.replace(nw, "");
      }, nO = RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
      class nA {
        message;
        position;
        locale;
        ignoreTag;
        requiresOtherClause;
        shouldParseSkeletons;
        constructor(e10, t10 = {}) {
          this.message = e10, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!t10.ignoreTag, this.locale = t10.locale, this.requiresOtherClause = !!t10.requiresOtherClause, this.shouldParseSkeletons = !!t10.shouldParseSkeletons;
        }
        parse() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", false);
        }
        parseMessage(e10, t10, r10) {
          let n10 = [];
          for (; !this.isEOF(); ) {
            let i2 = this.char();
            if (123 === i2) {
              let t11 = this.parseArgument(e10, r10);
              if (t11.err) return t11;
              n10.push(t11.val);
            } else if (125 === i2 && e10 > 0) break;
            else if (35 === i2 && ("plural" === t10 || "selectordinal" === t10)) {
              let e11 = this.clonePosition();
              this.bump(), n10.push({ type: r8.pound, location: nE(e11, this.clonePosition()) });
            } else if (60 !== i2 || this.ignoreTag || 47 !== this.peek()) if (60 === i2 && !this.ignoreTag && nN(this.peek() || 0)) {
              let r11 = this.parseTag(e10, t10);
              if (r11.err) return r11;
              n10.push(r11.val);
            } else {
              let r11 = this.parseLiteral(e10, t10);
              if (r11.err) return r11;
              n10.push(r11.val);
            }
            else if (!r10) return this.error(r5.UNMATCHED_CLOSING_TAG, nE(this.clonePosition(), this.clonePosition()));
            else break;
          }
          return { val: n10, err: null };
        }
        parseTag(e10, t10) {
          let r10 = this.clonePosition();
          this.bump();
          let n10 = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return { val: { type: r8.literal, value: `<${n10}/>`, location: nE(r10, this.clonePosition()) }, err: null };
          if (!this.bumpIf(">")) return this.error(r5.INVALID_TAG, nE(r10, this.clonePosition()));
          {
            let i2 = this.parseMessage(e10 + 1, t10, true);
            if (i2.err) return i2;
            let a2 = i2.val, o2 = this.clonePosition();
            if (!this.bumpIf("</")) return this.error(r5.UNCLOSED_TAG, nE(r10, this.clonePosition()));
            {
              if (this.isEOF() || !nN(this.char())) return this.error(r5.INVALID_TAG, nE(o2, this.clonePosition()));
              let e11 = this.clonePosition();
              return n10 !== this.parseTagName() ? this.error(r5.UNMATCHED_CLOSING_TAG, nE(e11, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? { val: { type: r8.tag, value: n10, children: a2, location: nE(r10, this.clonePosition()) }, err: null } : this.error(r5.INVALID_TAG, nE(o2, this.clonePosition()));
            }
          }
        }
        parseTagName() {
          var e10;
          let t10 = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e10 = this.char()) || 46 === e10 || e10 >= 48 && e10 <= 57 || 95 === e10 || e10 >= 97 && e10 <= 122 || e10 >= 65 && e10 <= 90 || 183 == e10 || e10 >= 192 && e10 <= 214 || e10 >= 216 && e10 <= 246 || e10 >= 248 && e10 <= 893 || e10 >= 895 && e10 <= 8191 || e10 >= 8204 && e10 <= 8205 || e10 >= 8255 && e10 <= 8256 || e10 >= 8304 && e10 <= 8591 || e10 >= 11264 && e10 <= 12271 || e10 >= 12289 && e10 <= 55295 || e10 >= 63744 && e10 <= 64975 || e10 >= 65008 && e10 <= 65533 || e10 >= 65536 && e10 <= 983039); ) this.bump();
          return this.message.slice(t10, this.offset());
        }
        parseLiteral(e10, t10) {
          let r10 = this.clonePosition(), n10 = "";
          for (; ; ) {
            let r11 = this.tryParseQuote(t10);
            if (r11) {
              n10 += r11;
              continue;
            }
            let i3 = this.tryParseUnquoted(e10, t10);
            if (i3) {
              n10 += i3;
              continue;
            }
            let a2 = this.tryParseLeftAngleBracket();
            if (a2) {
              n10 += a2;
              continue;
            }
            break;
          }
          let i2 = nE(r10, this.clonePosition());
          return { val: { type: r8.literal, value: n10, location: i2 }, err: null };
        }
        tryParseLeftAngleBracket() {
          var e10;
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (nN(e10 = this.peek() || 0) || 47 === e10) ? null : (this.bump(), "<");
        }
        tryParseQuote(e10) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e10 || "selectordinal" === e10) break;
              return null;
            default:
              return null;
          }
          this.bump();
          let t10 = [this.char()];
          for (this.bump(); !this.isEOF(); ) {
            let e11 = this.char();
            if (39 === e11) if (39 === this.peek()) t10.push(39), this.bump();
            else {
              this.bump();
              break;
            }
            else t10.push(e11);
            this.bump();
          }
          return String.fromCodePoint(...t10);
        }
        tryParseUnquoted(e10, t10) {
          if (this.isEOF()) return null;
          let r10 = this.char();
          return 60 === r10 || 123 === r10 || 35 === r10 && ("plural" === t10 || "selectordinal" === t10) || 125 === r10 && e10 > 0 ? null : (this.bump(), String.fromCodePoint(r10));
        }
        parseArgument(e10, t10) {
          let r10 = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(r5.EXPECT_ARGUMENT_CLOSING_BRACE, nE(r10, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(r5.EMPTY_ARGUMENT, nE(r10, this.clonePosition()));
          let n10 = this.parseIdentifierIfPossible().value;
          if (!n10) return this.error(r5.MALFORMED_ARGUMENT, nE(r10, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(r5.EXPECT_ARGUMENT_CLOSING_BRACE, nE(r10, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), { val: { type: r8.argument, value: n10, location: nE(r10, this.clonePosition()) }, err: null };
            case 44:
              if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(r5.EXPECT_ARGUMENT_CLOSING_BRACE, nE(r10, this.clonePosition()));
              return this.parseArgumentOptions(e10, t10, n10, r10);
            default:
              return this.error(r5.MALFORMED_ARGUMENT, nE(r10, this.clonePosition()));
          }
        }
        parseIdentifierIfPossible() {
          var e10;
          let t10 = this.clonePosition(), r10 = this.offset(), n10 = (e10 = this.message, nO.lastIndex = r10, nO.exec(e10)[1] ?? ""), i2 = r10 + n10.length;
          return this.bumpTo(i2), { value: n10, location: nE(t10, this.clonePosition()) };
        }
        parseArgumentOptions(e10, t10, r10, n10) {
          let i2 = this.clonePosition(), a2 = this.parseIdentifierIfPossible().value, o2 = this.clonePosition();
          switch (a2) {
            case "":
              return this.error(r5.EXPECT_ARGUMENT_TYPE, nE(i2, o2));
            case "number":
            case "date":
            case "time": {
              this.bumpSpace();
              let e11 = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                let t12 = this.clonePosition(), r11 = this.parseSimpleArgStyleIfPossible();
                if (r11.err) return r11;
                let n11 = nx(r11.val);
                if (0 === n11.length) return this.error(r5.EXPECT_ARGUMENT_STYLE, nE(this.clonePosition(), this.clonePosition()));
                e11 = { style: n11, styleLocation: nE(t12, this.clonePosition()) };
              }
              let t11 = this.tryParseArgumentClose(n10);
              if (t11.err) return t11;
              let i3 = nE(n10, this.clonePosition());
              if (e11 && e11.style.startsWith("::")) {
                let t12 = nP(e11.style.slice(2));
                if ("number" === a2) {
                  let n11 = this.parseNumberSkeletonFromString(t12, e11.styleLocation);
                  if (n11.err) return n11;
                  return { val: { type: r8.number, value: r10, location: i3, style: n11.val }, err: null };
                }
                {
                  let n11;
                  if (0 === t12.length) return this.error(r5.EXPECT_DATE_TIME_SKELETON, i3);
                  let o3 = t12;
                  this.locale && (o3 = function(e12, t13) {
                    let r11 = "";
                    for (let n12 = 0; n12 < e12.length; n12++) {
                      let i4 = e12.charAt(n12);
                      if ("j" === i4) {
                        let a3 = 0;
                        for (; n12 + 1 < e12.length && e12.charAt(n12 + 1) === i4; ) a3++, n12++;
                        let o4 = 1 + (1 & a3), s3 = a3 < 2 ? 1 : 3 + (a3 >> 1), l2 = function(e13) {
                          let t14, r12 = e13.hourCycle;
                          if (void 0 === r12 && e13.hourCycles && e13.hourCycles.length && (r12 = e13.hourCycles[0]), r12) switch (r12) {
                            case "h24":
                              return "k";
                            case "h23":
                              return "H";
                            case "h12":
                              return "h";
                            case "h11":
                              return "K";
                            default:
                              throw Error("Invalid hourCycle");
                          }
                          let n13 = e13.language;
                          return "root" !== n13 && (t14 = e13.maximize().region), (nv[t14 || ""] || nv[n13 || ""] || nv[`${n13}-001`] || nv["001"])[0];
                        }(t13);
                        for (("H" == l2 || "k" == l2) && (s3 = 0); s3-- > 0; ) r11 += "a";
                        for (; o4-- > 0; ) r11 = l2 + r11;
                      } else "J" === i4 ? r11 += "H" : r11 += i4;
                    }
                    return r11;
                  }(t12, this.locale));
                  let s2 = { type: r7.dateTime, pattern: o3, location: e11.styleLocation, parsedOptions: this.shouldParseSkeletons ? (n11 = {}, o3.replace(ny, (e12) => {
                    let t13 = e12.length;
                    switch (e12[0]) {
                      case "G":
                        n11.era = 4 === t13 ? "long" : 5 === t13 ? "narrow" : "short";
                        break;
                      case "y":
                        n11.year = 2 === t13 ? "2-digit" : "numeric";
                        break;
                      case "Y":
                      case "u":
                      case "U":
                      case "r":
                        throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                      case "q":
                      case "Q":
                        throw RangeError("`q/Q` (quarter) patterns are not supported");
                      case "M":
                      case "L":
                        n11.month = ["numeric", "2-digit", "short", "long", "narrow"][t13 - 1];
                        break;
                      case "w":
                      case "W":
                        throw RangeError("`w/W` (week) patterns are not supported");
                      case "d":
                        n11.day = ["numeric", "2-digit"][t13 - 1];
                        break;
                      case "D":
                      case "F":
                      case "g":
                        throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                      case "E":
                        n11.weekday = 4 === t13 ? "long" : 5 === t13 ? "narrow" : "short";
                        break;
                      case "e":
                        if (t13 < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                        n11.weekday = ["short", "long", "narrow", "short"][t13 - 4];
                        break;
                      case "c":
                        if (t13 < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                        n11.weekday = ["short", "long", "narrow", "short"][t13 - 4];
                        break;
                      case "a":
                        n11.hour12 = true;
                        break;
                      case "b":
                      case "B":
                        throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                      case "h":
                        n11.hourCycle = "h12", n11.hour = ["numeric", "2-digit"][t13 - 1];
                        break;
                      case "H":
                        n11.hourCycle = "h23", n11.hour = ["numeric", "2-digit"][t13 - 1];
                        break;
                      case "K":
                        n11.hourCycle = "h11", n11.hour = ["numeric", "2-digit"][t13 - 1];
                        break;
                      case "k":
                        n11.hourCycle = "h24", n11.hour = ["numeric", "2-digit"][t13 - 1];
                        break;
                      case "j":
                      case "J":
                      case "C":
                        throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                      case "m":
                        n11.minute = ["numeric", "2-digit"][t13 - 1];
                        break;
                      case "s":
                        n11.second = ["numeric", "2-digit"][t13 - 1];
                        break;
                      case "S":
                      case "A":
                        throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                      case "z":
                        n11.timeZoneName = t13 < 4 ? "short" : "long";
                        break;
                      case "Z":
                      case "O":
                      case "v":
                      case "V":
                      case "X":
                      case "x":
                        throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
                    }
                    return "";
                  }), n11) : {} };
                  return { val: { type: "date" === a2 ? r8.date : r8.time, value: r10, location: i3, style: s2 }, err: null };
                }
              }
              return { val: { type: "number" === a2 ? r8.number : "date" === a2 ? r8.date : r8.time, value: r10, location: i3, style: e11?.style ?? null }, err: null };
            }
            case "plural":
            case "selectordinal":
            case "select": {
              let i3 = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(r5.EXPECT_SELECT_ARGUMENT_OPTIONS, nE(i3, { ...i3 }));
              this.bumpSpace();
              let o3 = this.parseIdentifierIfPossible(), s2 = 0;
              if ("select" !== a2 && "offset" === o3.value) {
                if (!this.bumpIf(":")) return this.error(r5.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, nE(this.clonePosition(), this.clonePosition()));
                this.bumpSpace();
                let e11 = this.tryParseDecimalInteger(r5.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, r5.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                if (e11.err) return e11;
                this.bumpSpace(), o3 = this.parseIdentifierIfPossible(), s2 = e11.val;
              }
              let l2 = this.tryParsePluralOrSelectOptions(e10, a2, t10, o3);
              if (l2.err) return l2;
              let u2 = this.tryParseArgumentClose(n10);
              if (u2.err) return u2;
              let c2 = nE(n10, this.clonePosition());
              if ("select" === a2) return { val: { type: r8.select, value: r10, options: nR(l2.val), location: c2 }, err: null };
              return { val: { type: r8.plural, value: r10, options: nR(l2.val), offset: s2, pluralType: "plural" === a2 ? "cardinal" : "ordinal", location: c2 }, err: null };
            }
            default:
              return this.error(r5.INVALID_ARGUMENT_TYPE, nE(i2, o2));
          }
        }
        tryParseArgumentClose(e10) {
          return this.isEOF() || 125 !== this.char() ? this.error(r5.EXPECT_ARGUMENT_CLOSING_BRACE, nE(e10, this.clonePosition())) : (this.bump(), { val: true, err: null });
        }
        parseSimpleArgStyleIfPossible() {
          let e10 = 0, t10 = this.clonePosition();
          for (; !this.isEOF(); ) switch (this.char()) {
            case 39: {
              this.bump();
              let e11 = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(r5.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, nE(e11, this.clonePosition()));
              this.bump();
              break;
            }
            case 123:
              e10 += 1, this.bump();
              break;
            case 125:
              if (!(e10 > 0)) return { val: this.message.slice(t10.offset, this.offset()), err: null };
              e10 -= 1;
              break;
            default:
              this.bump();
          }
          return { val: this.message.slice(t10.offset, this.offset()), err: null };
        }
        parseNumberSkeletonFromString(e10, t10) {
          let r10 = [];
          try {
            r10 = function(e11) {
              if (0 === e11.length) throw Error("Number skeleton cannot be empty");
              let t11 = e11.split(nc).filter((e12) => e12.length > 0), r11 = [];
              for (let e12 of t11) {
                let t12 = e12.split("/");
                if (0 === t12.length) throw Error("Invalid number skeleton");
                let [n10, ...i2] = t12;
                for (let e13 of i2) if (0 === e13.length) throw Error("Invalid number skeleton");
                r11.push({ stem: n10, options: i2 });
              }
              return r11;
            }(e10);
          } catch {
            return this.error(r5.INVALID_NUMBER_SKELETON, t10);
          }
          return { val: { type: r7.number, tokens: r10, location: t10, parsedOptions: this.shouldParseSkeletons ? function(e11) {
            let t11 = {};
            for (let r11 of e11) {
              switch (r11.stem) {
                case "percent":
                case "%":
                  t11.style = "percent";
                  continue;
                case "%x100":
                  t11.style = "percent", t11.scale = 100;
                  continue;
                case "currency":
                  t11.style = "currency", t11.currency = r11.options[0];
                  continue;
                case "group-off":
                case ",_":
                  t11.useGrouping = false;
                  continue;
                case "precision-integer":
                case ".":
                  t11.maximumFractionDigits = 0;
                  continue;
                case "measure-unit":
                case "unit":
                  t11.style = "unit", t11.unit = r11.options[0].replace(/^(.*?)-/, "");
                  continue;
                case "compact-short":
                case "K":
                  t11.notation = "compact", t11.compactDisplay = "short";
                  continue;
                case "compact-long":
                case "KK":
                  t11.notation = "compact", t11.compactDisplay = "long";
                  continue;
                case "scientific":
                  t11 = { ...t11, notation: "scientific", ...r11.options.reduce((e13, t12) => ({ ...e13, ...nm(t12) }), {}) };
                  continue;
                case "engineering":
                  t11 = { ...t11, notation: "engineering", ...r11.options.reduce((e13, t12) => ({ ...e13, ...nm(t12) }), {}) };
                  continue;
                case "notation-simple":
                  t11.notation = "standard";
                  continue;
                case "unit-width-narrow":
                  t11.currencyDisplay = "narrowSymbol", t11.unitDisplay = "narrow";
                  continue;
                case "unit-width-short":
                  t11.currencyDisplay = "code", t11.unitDisplay = "short";
                  continue;
                case "unit-width-full-name":
                  t11.currencyDisplay = "name", t11.unitDisplay = "long";
                  continue;
                case "unit-width-iso-code":
                  t11.currencyDisplay = "symbol";
                  continue;
                case "scale":
                  t11.scale = parseFloat(r11.options[0]);
                  continue;
                case "rounding-mode-floor":
                  t11.roundingMode = "floor";
                  continue;
                case "rounding-mode-ceiling":
                  t11.roundingMode = "ceil";
                  continue;
                case "rounding-mode-down":
                  t11.roundingMode = "trunc";
                  continue;
                case "rounding-mode-up":
                  t11.roundingMode = "expand";
                  continue;
                case "rounding-mode-half-even":
                  t11.roundingMode = "halfEven";
                  continue;
                case "rounding-mode-half-down":
                  t11.roundingMode = "halfTrunc";
                  continue;
                case "rounding-mode-half-up":
                  t11.roundingMode = "halfExpand";
                  continue;
                case "integer-width":
                  if (r11.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                  r11.options[0].replace(nf, function(e13, r12, n11, i2, a2, o2) {
                    if (r12) t11.minimumIntegerDigits = n11.length;
                    else if (i2 && a2) throw Error("We currently do not support maximum integer digits");
                    else if (o2) throw Error("We currently do not support exact integer digits");
                    return "";
                  });
                  continue;
              }
              if (np.test(r11.stem)) {
                t11.minimumIntegerDigits = r11.stem.length;
                continue;
              }
              if (nd.test(r11.stem)) {
                if (r11.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                r11.stem.replace(nd, function(e14, r12, n11, i2, a2, o2) {
                  return "*" === n11 ? t11.minimumFractionDigits = r12.length : i2 && "#" === i2[0] ? t11.maximumFractionDigits = i2.length : a2 && o2 ? (t11.minimumFractionDigits = a2.length, t11.maximumFractionDigits = a2.length + o2.length) : (t11.minimumFractionDigits = r12.length, t11.maximumFractionDigits = r12.length), "";
                });
                let e13 = r11.options[0];
                "w" === e13 ? t11 = { ...t11, trailingZeroDisplay: "stripIfInteger" } : e13 && (t11 = { ...t11, ...ng(e13) });
                continue;
              }
              if (nh.test(r11.stem)) {
                t11 = { ...t11, ...ng(r11.stem) };
                continue;
              }
              let e12 = n_(r11.stem);
              e12 && (t11 = { ...t11, ...e12 });
              let n10 = function(e13) {
                let t12;
                if ("E" === e13[0] && "E" === e13[1] ? (t12 = { notation: "engineering" }, e13 = e13.slice(2)) : "E" === e13[0] && (t12 = { notation: "scientific" }, e13 = e13.slice(1)), t12) {
                  let r12 = e13.slice(0, 2);
                  if ("+!" === r12 ? (t12.signDisplay = "always", e13 = e13.slice(2)) : "+?" === r12 && (t12.signDisplay = "exceptZero", e13 = e13.slice(2)), !np.test(e13)) throw Error("Malformed concise eng/scientific notation");
                  t12.minimumIntegerDigits = e13.length;
                }
                return t12;
              }(r11.stem);
              n10 && (t11 = { ...t11, ...n10 });
            }
            return t11;
          }(r10) : {} }, err: null };
        }
        tryParsePluralOrSelectOptions(e10, t10, r10, n10) {
          let i2 = false, a2 = [], o2 = /* @__PURE__ */ new Set(), { value: s2, location: l2 } = n10;
          for (; ; ) {
            if (0 === s2.length) {
              let e11 = this.clonePosition();
              if ("select" !== t10 && this.bumpIf("=")) {
                let t11 = this.tryParseDecimalInteger(r5.EXPECT_PLURAL_ARGUMENT_SELECTOR, r5.INVALID_PLURAL_ARGUMENT_SELECTOR);
                if (t11.err) return t11;
                l2 = nE(e11, this.clonePosition()), s2 = this.message.slice(e11.offset, this.offset());
              } else break;
            }
            if (o2.has(s2)) return this.error("select" === t10 ? r5.DUPLICATE_SELECT_ARGUMENT_SELECTOR : r5.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l2);
            "other" === s2 && (i2 = true), this.bumpSpace();
            let n11 = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t10 ? r5.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : r5.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, nE(this.clonePosition(), this.clonePosition()));
            let u2 = this.parseMessage(e10 + 1, t10, r10);
            if (u2.err) return u2;
            let c2 = this.tryParseArgumentClose(n11);
            if (c2.err) return c2;
            a2.push([s2, { value: u2.val, location: nE(n11, this.clonePosition()) }]), o2.add(s2), this.bumpSpace(), { value: s2, location: l2 } = this.parseIdentifierIfPossible();
          }
          return 0 === a2.length ? this.error("select" === t10 ? r5.EXPECT_SELECT_ARGUMENT_SELECTOR : r5.EXPECT_PLURAL_ARGUMENT_SELECTOR, nE(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i2 ? this.error(r5.MISSING_OTHER_CLAUSE, nE(this.clonePosition(), this.clonePosition())) : { val: a2, err: null };
        }
        tryParseDecimalInteger(e10, t10) {
          let r10 = 1, n10 = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r10 = -1);
          let i2 = false, a2 = 0;
          for (; !this.isEOF(); ) {
            let e11 = this.char();
            if (e11 >= 48 && e11 <= 57) i2 = true, a2 = 10 * a2 + (e11 - 48), this.bump();
            else break;
          }
          let o2 = nE(n10, this.clonePosition());
          return i2 ? Number.isSafeInteger(a2 *= r10) ? { val: a2, err: null } : this.error(t10, o2) : this.error(e10, o2);
        }
        offset() {
          return this.position.offset;
        }
        isEOF() {
          return this.offset() === this.message.length;
        }
        clonePosition() {
          return { offset: this.position.offset, line: this.position.line, column: this.position.column };
        }
        char() {
          let e10 = this.position.offset;
          if (e10 >= this.message.length) throw Error("out of bound");
          let t10 = this.message.codePointAt(e10);
          if (void 0 === t10) throw Error(`Offset ${e10} is at invalid UTF-16 code unit boundary`);
          return t10;
        }
        error(e10, t10) {
          return { val: null, err: { kind: e10, message: this.message, location: t10 } };
        }
        bump() {
          if (this.isEOF()) return;
          let e10 = this.char();
          10 === e10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e10 < 65536 ? 1 : 2);
        }
        bumpIf(e10) {
          if (this.message.startsWith(e10, this.offset())) {
            for (let t10 = 0; t10 < e10.length; t10++) this.bump();
            return true;
          }
          return false;
        }
        bumpUntil(e10) {
          let t10 = this.offset(), r10 = this.message.indexOf(e10, t10);
          return r10 >= 0 ? (this.bumpTo(r10), true) : (this.bumpTo(this.message.length), false);
        }
        bumpTo(e10) {
          if (this.offset() > e10) throw Error(`targetOffset ${e10} must be greater than or equal to the current offset ${this.offset()}`);
          for (e10 = Math.min(e10, this.message.length); ; ) {
            let t10 = this.offset();
            if (t10 === e10) break;
            if (t10 > e10) throw Error(`targetOffset ${e10} is at invalid UTF-16 code unit boundary`);
            if (this.bump(), this.isEOF()) break;
          }
        }
        bumpSpace() {
          for (var e10; !this.isEOF() && ((e10 = this.char()) >= 9 && e10 <= 13 || 32 === e10 || 133 === e10 || e10 >= 8206 && e10 <= 8207 || 8232 === e10 || 8233 === e10); ) this.bump();
        }
        peek() {
          if (this.isEOF()) return null;
          let e10 = this.char(), t10 = this.offset();
          return this.message.charCodeAt(t10 + (e10 >= 65536 ? 2 : 1)) ?? null;
        }
      }
      function nN(e10) {
        return e10 >= 97 && e10 <= 122 || e10 >= 65 && e10 <= 90;
      }
      function nI(e10, t10 = {}) {
        let r10 = new nA(e10, t10 = { shouldParseSkeletons: true, requiresOtherClause: true, ...t10 }).parse();
        if (r10.err) {
          let e11 = SyntaxError(r5[r10.err.kind]);
          throw e11.location = r10.err.location, e11.originalMessage = r10.err.message, e11;
        }
        return t10?.captureLocation || function e11(t11) {
          t11.forEach((t12) => {
            if (delete t12.location, ni(t12) || na(t12)) for (let r11 in t12.options) delete t12.options[r11].location, e11(t12.options[r11].value);
            else nt(t12) && ns(t12.style) || (nr(t12) || nn(t12)) && nl(t12.style) ? delete t12.style.location : no(t12) && e11(t12.children);
          });
        }(r10.val), r10.val;
      }
      let nk = ((ei = {}).MISSING_VALUE = "MISSING_VALUE", ei.INVALID_VALUE = "INVALID_VALUE", ei.MISSING_INTL_API = "MISSING_INTL_API", ei);
      class nL extends Error {
        code;
        originalMessage;
        constructor(e10, t10, r10) {
          super(e10), this.code = t10, this.originalMessage = r10;
        }
        toString() {
          return `[formatjs Error: ${this.code}] ${this.message}`;
        }
      }
      class nM extends nL {
        constructor(e10, t10, r10, n10) {
          super(`Invalid values for "${e10}": "${t10}". Options are "${Object.keys(r10).join('", "')}"`, nk.INVALID_VALUE, n10);
        }
      }
      class nD extends nL {
        constructor(e10, t10, r10) {
          super(`Value for "${e10}" must be of type ${t10}`, nk.INVALID_VALUE, r10);
        }
      }
      class nB extends nL {
        constructor(e10, t10) {
          super(`The intl string context variable "${e10}" was not provided to the string "${t10}"`, nk.MISSING_VALUE, t10);
        }
      }
      let nH = ((ea = {})[ea.literal = 0] = "literal", ea[ea.object = 1] = "object", ea);
      function nj(e10) {
        return { create: () => ({ get: (t10) => e10[t10], set(t10, r10) {
          e10[t10] = r10;
        } }) };
      }
      class nU {
        ast;
        locales;
        resolvedLocale;
        formatters;
        formats;
        message;
        formatterCache = { number: {}, dateTime: {}, pluralRules: {} };
        constructor(e10, t10 = nU.defaultLocale, r10, n10) {
          if (this.locales = t10, this.resolvedLocale = nU.resolveLocale(t10), "string" == typeof e10) {
            if (this.message = e10, !nU.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            const { ...t11 } = n10 || {};
            this.ast = nU.__parse(e10, { ...t11, locale: this.resolvedLocale });
          } else this.ast = e10;
          if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
          this.formats = function(e11, t11) {
            return t11 ? Object.keys(e11).reduce((r11, n11) => {
              var i2, a2;
              return r11[n11] = (i2 = e11[n11], (a2 = t11[n11]) ? { ...i2, ...a2, ...Object.keys(i2).reduce((e12, t12) => (e12[t12] = { ...i2[t12], ...a2[t12] }, e12), {}) } : i2), r11;
            }, { ...e11 }) : e11;
          }(nU.formats, r10), this.formatters = n10 && n10.formatters || function(e11 = { number: {}, dateTime: {}, pluralRules: {} }) {
            return { getNumberFormat: rx((...e12) => new Intl.NumberFormat(...e12), { cache: nj(e11.number), strategy: rL.variadic }), getDateTimeFormat: rx((...e12) => new Intl.DateTimeFormat(...e12), { cache: nj(e11.dateTime), strategy: rL.variadic }), getPluralRules: rx((...e12) => new Intl.PluralRules(...e12), { cache: nj(e11.pluralRules), strategy: rL.variadic }) };
          }(this.formatterCache);
        }
        format = (e10) => {
          let t10 = this.formatToParts(e10);
          if (1 === t10.length) return t10[0].value;
          let r10 = t10.reduce((e11, t11) => (e11.length && t11.type === nH.literal && "string" == typeof e11[e11.length - 1] ? e11[e11.length - 1] += t11.value : e11.push(t11.value), e11), []);
          return r10.length <= 1 ? r10[0] || "" : r10;
        };
        formatToParts = (e10) => function e11(t10, r10, n10, i2, a2, o2, s2) {
          if (1 === t10.length && ne(t10[0])) return [{ type: nH.literal, value: t10[0].value }];
          let l2 = [];
          for (let u2 of t10) {
            if (ne(u2)) {
              l2.push({ type: nH.literal, value: u2.value });
              continue;
            }
            if (u2.type === r8.pound) {
              "number" == typeof o2 && l2.push({ type: nH.literal, value: n10.getNumberFormat(r10).format(o2) });
              continue;
            }
            let { value: t11 } = u2;
            if (!(a2 && t11 in a2)) throw new nB(t11, s2);
            let c2 = a2[t11];
            if (u2.type === r8.argument) {
              c2 && "string" != typeof c2 && "number" != typeof c2 && "bigint" != typeof c2 || (c2 = "string" == typeof c2 || "number" == typeof c2 || "bigint" == typeof c2 ? String(c2) : ""), l2.push({ type: "string" == typeof c2 ? nH.literal : nH.object, value: c2 });
              continue;
            }
            if (nr(u2)) {
              let e12 = "string" == typeof u2.style ? i2.date[u2.style] : nl(u2.style) ? u2.style.parsedOptions : void 0;
              l2.push({ type: nH.literal, value: n10.getDateTimeFormat(r10, e12).format(c2) });
              continue;
            }
            if (nn(u2)) {
              let e12 = "string" == typeof u2.style ? i2.time[u2.style] : nl(u2.style) ? u2.style.parsedOptions : i2.time.medium;
              l2.push({ type: nH.literal, value: n10.getDateTimeFormat(r10, e12).format(c2) });
              continue;
            }
            if (nt(u2)) {
              let e12 = "string" == typeof u2.style ? i2.number[u2.style] : ns(u2.style) ? u2.style.parsedOptions : void 0;
              if (e12 && e12.scale) {
                let t12 = e12.scale || 1;
                if ("bigint" == typeof c2) {
                  if (!Number.isInteger(t12)) throw TypeError(`Cannot apply fractional scale ${t12} to bigint value. Scale must be an integer when formatting bigint.`);
                  c2 *= BigInt(t12);
                } else c2 *= t12;
              }
              l2.push({ type: nH.literal, value: n10.getNumberFormat(r10, e12).format(c2) });
              continue;
            }
            if (no(u2)) {
              let { children: t12, value: c3 } = u2, d2 = a2[c3];
              if ("function" != typeof d2) throw new nD(c3, "function", s2);
              let h2 = d2(e11(t12, r10, n10, i2, a2, o2).map((e12) => e12.value));
              Array.isArray(h2) || (h2 = [h2]), l2.push(...h2.map((e12) => ({ type: "string" == typeof e12 ? nH.literal : nH.object, value: e12 })));
            }
            if (ni(u2)) {
              let t12 = c2, o3 = (Object.prototype.hasOwnProperty.call(u2.options, t12) ? u2.options[t12] : void 0) || u2.options.other;
              if (!o3) throw new nM(u2.value, c2, Object.keys(u2.options), s2);
              l2.push(...e11(o3.value, r10, n10, i2, a2));
              continue;
            }
            if (na(u2)) {
              let t12 = `=${c2}`, o3 = Object.prototype.hasOwnProperty.call(u2.options, t12) ? u2.options[t12] : void 0;
              if (!o3) {
                if (!Intl.PluralRules) throw new nL(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, nk.MISSING_INTL_API, s2);
                let e12 = "bigint" == typeof c2 ? Number(c2) : c2, t13 = n10.getPluralRules(r10, { type: u2.pluralType }).select(e12 - (u2.offset || 0));
                o3 = (Object.prototype.hasOwnProperty.call(u2.options, t13) ? u2.options[t13] : void 0) || u2.options.other;
              }
              if (!o3) throw new nM(u2.value, c2, Object.keys(u2.options), s2);
              let d2 = "bigint" == typeof c2 ? Number(c2) : c2;
              l2.push(...e11(o3.value, r10, n10, i2, a2, d2 - (u2.offset || 0)));
              continue;
            }
          }
          return l2.length < 2 ? l2 : l2.reduce((e12, t11) => {
            let r11 = e12[e12.length - 1];
            return r11 && r11.type === nH.literal && t11.type === nH.literal ? r11.value += t11.value : e12.push(t11), e12;
          }, []);
        }(this.ast, this.locales, this.formatters, this.formats, e10, void 0, this.message);
        resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] });
        getAst = () => this.ast;
        static memoizedDefaultLocale = null;
        static get defaultLocale() {
          return nU.memoizedDefaultLocale || (nU.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), nU.memoizedDefaultLocale;
        }
        static resolveLocale = (e10) => {
          if (void 0 === Intl.Locale) return;
          let t10 = Intl.NumberFormat.supportedLocalesOf(e10);
          return new Intl.Locale(t10.length > 0 ? t10[0] : "string" == typeof e10 ? e10 : e10[0]);
        };
        static __parse = nI;
        static formats = { number: { integer: { maximumFractionDigits: 0 }, currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } };
      }
      var n$ = ((eo = n$ || {}).MISSING_MESSAGE = "MISSING_MESSAGE", eo.MISSING_FORMAT = "MISSING_FORMAT", eo.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", eo.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", eo.INVALID_MESSAGE = "INVALID_MESSAGE", eo.INVALID_KEY = "INVALID_KEY", eo.FORMATTING_ERROR = "FORMATTING_ERROR", eo);
      function nG(e10, t10) {
        var r10, n10;
        return r10 = (...t11) => new e10(...t11), n10 = t10, rx(r10, { cache: { create: () => ({ get: (e11) => n10[e11], set(e11, t11) {
          n10[e11] = t11;
        } }) }, strategy: rL.variadic });
      }
      function nq(e10) {
        return function(...e11) {
          return e11.filter(Boolean).join(".");
        }(e10.namespace, e10.key);
      }
      function nF(e10) {
        console.error(e10);
      }
      let nV = { current: null }, nz = "function" == typeof r2.cache ? r2.cache : (e10) => e10, nK = console.warn;
      function nX(e10) {
        return function(...t10) {
          nK(e10(...t10));
        };
      }
      nz((e10) => {
        try {
          nK(nV.current);
        } finally {
          nV.current = null;
        }
      }), /* @__PURE__ */ new WeakMap(), nX(function(e10, t10) {
        let r10 = e10 ? `Route "${e10}" ` : "This route ";
        return Object.defineProperty(Error(`${r10}used ${t10}. \`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", { value: "E830", enumerable: false, configurable: true });
      });
      var eC = eC, e7 = e7;
      class nW extends Error {
        constructor(...e10) {
          super(...e10), this.code = "NEXT_STATIC_GEN_BAILOUT";
        }
      }
      var nY = e.i(83329);
      e.i(48057);
      let nZ = /* @__PURE__ */ new WeakMap();
      function nJ(e10) {
        let t10 = nZ.get(e10);
        if (t10) return t10;
        let r10 = Promise.resolve(e10);
        return nZ.set(e10, r10), r10;
      }
      nX(function(e10, t10) {
        let r10 = e10 ? `Route "${e10}" ` : "This route ";
        return Object.defineProperty(Error(`${r10}used ${t10}. \`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", { value: "E836", enumerable: false, configurable: true });
      });
      var eC = eC, e7 = e7;
      e.i(15516), /* @__PURE__ */ new WeakMap(), nX(function(e10, t10) {
        let r10 = e10 ? `Route "${e10}" ` : "This route ";
        return Object.defineProperty(Error(`${r10}used ${t10}. \`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", { value: "E835", enumerable: false, configurable: true });
      });
      let nQ = (0, r2.cache)(function() {
        return { locale: void 0 };
      }), n0 = (0, r2.cache)(async function() {
        let e10 = function e11() {
          let t10 = "headers", r10 = eC.workAsyncStorageInstance.getStore(), n10 = e7.workUnitAsyncStorageInstance.getStore();
          if (r10) {
            let o2;
            if (n10 && "after" === n10.phase && (null == (o2 = td.getStore()) ? void 0 : o2.rootTaskSpawnPhase) !== "action") throw Object.defineProperty(Error(`Route ${r10.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", { value: "E839", enumerable: false, configurable: true });
            if (r10.forceStatic) return nJ(eS.seal(new Headers({})));
            if (n10) switch (n10.type) {
              case "cache": {
                let t11 = Object.defineProperty(Error(`Route ${r10.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", { value: "E833", enumerable: false, configurable: true });
                throw Error.captureStackTrace(t11, e11), r10.invalidDynamicUsageError ??= t11, t11;
              }
              case "unstable-cache":
                throw Object.defineProperty(Error(`Route ${r10.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", { value: "E838", enumerable: false, configurable: true });
              case "generate-static-params":
                throw Object.defineProperty(Error(`Route ${r10.route} used \`headers()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", { value: "E1134", enumerable: false, configurable: true });
            }
            if (r10.dynamicShouldError) throw Object.defineProperty(new nW(`Route ${r10.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", { value: "E828", enumerable: false, configurable: true });
            if (n10) switch (n10.type) {
              case "prerender":
                var i2 = r10, a2 = n10;
                let s2 = nZ.get(a2);
                if (s2) return s2;
                let l2 = (0, nY.makeHangingPromise)(a2.renderSignal, i2.route, "`headers()`");
                return nZ.set(a2, l2), l2;
              case "prerender-client":
              case "validation-client":
                let u2 = "`headers`";
                throw Object.defineProperty(new tt.InvariantError(`${u2} must not be used within a client component. Next.js should be preventing ${u2} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", { value: "E1017", enumerable: false, configurable: true });
              case "prerender-ppr":
                return (0, ra.postponeWithTracking)(r10.route, t10, n10.dynamicTracking);
              case "prerender-legacy":
                return (0, ra.throwToInterruptStaticGeneration)(t10, r10, n10);
              case "prerender-runtime":
                return (0, nY.delayUntilRuntimeStage)(n10, nJ(n10.headers));
              case "private-cache":
                return nJ(n10.headers);
              case "request":
                if ((0, ra.trackDynamicDataInDynamicRender)(n10), n10.asyncApiPromises) return (0, e8.isInEarlyRenderStage)(n10) ? n10.asyncApiPromises.earlyHeaders : n10.asyncApiPromises.headers;
                return nJ(n10.headers);
            }
          }
          (0, e8.throwForMissingRequestStore)(t10);
        }();
        return rv(e10) ? await e10 : e10;
      }), n1 = (0, r2.cache)(async function() {
        let e10;
        try {
          e10 = (await n0()).get(rs) || void 0;
        } catch (e11) {
          if (e11 instanceof Error && "DYNAMIC_SERVER_USAGE" === e11.digest) {
            let t10 = Error("Usage of next-intl APIs in Server Components currently opts into dynamic rendering. This limitation will eventually be lifted, but as a stopgap solution, you can use the `setRequestLocale` API to enable static rendering, see https://next-intl.dev/docs/routing/setup#static-rendering", { cause: e11 });
            throw t10.digest = e11.digest, t10;
          }
          throw e11;
        }
        return e10;
      });
      async function n2() {
        return nQ().locale || await n1();
      }
      let n3 = async ({ requestLocale: t10 }) => {
        let r10 = await t10;
        return r10 && ie.locales.includes(r10) || (r10 = ie.defaultLocale), { locale: r10, messages: (await e.f({ "../messages/en.json": { id: () => 6984, module: () => Promise.resolve().then(() => e.i(6984)) }, "../messages/vi.json": { id: () => 7894, module: () => Promise.resolve().then(() => e.i(7894)) } }).import(`../messages/${r10}.json`)).default };
      }, n4 = (0, r2.cache)(function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }), n9 = (0, r2.cache)(async function(e10, t10) {
        let r10 = e10({ locale: t10, get requestLocale() {
          return t10 ? Promise.resolve(t10) : n2();
        } });
        if (rv(r10) && (r10 = await r10), !r10.locale) throw Error("No locale was returned from `getRequestConfig`.\n\nSee https://next-intl.dev/docs/usage/configuration#i18n-request");
        return r10;
      }), n6 = (0, r2.cache)(function(e10) {
        return { getDateTimeFormat: nG(Intl.DateTimeFormat, e10.dateTime), getNumberFormat: nG(Intl.NumberFormat, e10.number), getPluralRules: nG(Intl.PluralRules, e10.pluralRules), getRelativeTimeFormat: nG(Intl.RelativeTimeFormat, e10.relativeTime), getListFormat: nG(Intl.ListFormat, e10.list), getDisplayNames: nG(Intl.DisplayNames, e10.displayNames) };
      }), n5 = (0, r2.cache)(function() {
        return { dateTime: {}, number: {}, message: {}, relativeTime: {}, pluralRules: {}, list: {}, displayNames: {} };
      }), n8 = (0, r2.cache)(async function(e10) {
        let t10 = await n9(n3, e10);
        return { ...function({ formats: e11, getMessageFallback: t11, messages: r10, onError: n10, ...i2 }) {
          return { ...i2, formats: e11 || void 0, messages: r10 || void 0, onError: n10 || nF, getMessageFallback: t11 || nq };
        }(t10), _formatters: n6(n5()), timeZone: t10.timeZone || n4() };
      });
      async function n7() {
        return (await n8()).locale;
      }
      let ie = { locales: ["en", "vi"], defaultLocale: "en" }, { Link: it, redirect: ir, usePathname: ii, useRouter: ia, getPathname: io } = function(e10) {
        let { config: t10, ...r10 } = function(e11, t11) {
          let r11 = ro(t11 || {}), n11 = r11.pathnames, i2 = (0, r2.forwardRef)(function({ href: t12, locale: i3, ...o3 }, s2) {
            let l2, u2;
            "object" == typeof t12 ? (l2 = t12.pathname, u2 = t12.params) : l2 = t12;
            let c2 = rl(t12), d2 = e11(), h2 = rv(d2) ? r3(d2) : d2, f2 = c2 ? a2({ locale: i3 || h2, href: null == n11 ? l2 : { pathname: l2, params: u2 }, forcePrefix: null != i3 || void 0 }) : l2;
            return (0, r6.jsx)(r4.default, { ref: s2, href: "object" == typeof t12 ? { ...t12, pathname: f2 } : f2, locale: i3, localeCookie: r11.localeCookie, ...o3 });
          });
          function a2(e12) {
            let t12, { forcePrefix: i3, href: a3, locale: o3 } = e12;
            return null == n11 ? "object" == typeof a3 ? (t12 = a3.pathname, a3.query && (t12 += r9(a3.query))) : t12 = a3 : t12 = function({ pathname: e13, locale: t13, params: r12, pathnames: n12, query: i4 }) {
              function a4(e14) {
                let a5, o4 = n12[e14];
                return o4 ? (a5 = rc(o4, t13, e14), r12 && Object.entries(r12).forEach(([e15, t14]) => {
                  let r13, n13;
                  Array.isArray(t14) ? (r13 = `(\\[)?\\[...${e15}\\](\\])?`, n13 = t14.map((e16) => String(e16)).join("/")) : (r13 = `\\[${e15}\\]`, n13 = String(t14)), a5 = a5.replace(RegExp(r13, "g"), n13);
                }), a5 = new URL(a5 = a5.replace(/\[\[\.\.\..+\]\]/g, ""), "http://l").pathname) : a5 = e14, a5 = rd(a5), i4 && (a5 += r9(i4)), a5;
              }
              if ("string" == typeof e13) return a4(e13);
              {
                let { pathname: t14, ...r13 } = e13;
                return { ...r13, pathname: a4(t14) };
              }
            }({ locale: o3, ..."string" == typeof a3 ? { pathname: a3 } : a3, pathnames: r11.pathnames }), function(e13, t13, r12, n12) {
              let i4, { mode: a4 } = r12.localePrefix;
              return void 0 !== n12 ? i4 = n12 : rl(e13) && ("always" === a4 ? i4 = true : "as-needed" === a4 && (i4 = r12.domains ? !r12.domains.some((e14) => e14.defaultLocale === t13) : t13 !== r12.defaultLocale)), i4 ? ru(rf(t13, r12.localePrefix), e13) : e13;
            }(t12, o3, r11, i3);
          }
          function o2(e12) {
            return function(t12, ...r12) {
              return e12(a2(t12), ...r12);
            };
          }
          return { config: r11, Link: i2, redirect: o2(r0), permanentRedirect: o2(r1), getPathname: a2 };
        }(n7, e10);
        function n10(e11) {
          return () => {
            throw Error(`\`${e11}\` is not supported in Server Components. You can use this hook if you convert the calling component to a Client Component.`);
          };
        }
        return { ...r10, usePathname: n10("usePathname"), useRouter: n10("useRouter") };
      }(ie), is = (a = ro(ie), function(e10) {
        var t10, r10;
        let n10;
        try {
          n10 = decodeURI(e10.nextUrl.pathname);
        } catch {
          return eg.next();
        }
        let i2 = n10.replace(/\\/g, "%5C").replace(/\/+/g, "/"), { domain: o2, locale: s2 } = (t10 = e10.headers, r10 = e10.cookies, a.domains ? function(e11, t11, r11, n11) {
          let i3, a2 = function(e12, t12) {
            let r12 = rT(e12);
            if (r12) return t12.find((e13) => e13.domain === r12);
          }(t11, e11.domains);
          if (!a2) return { locale: rW(e11, t11, r11, n11) };
          if (n11) {
            let t12 = rS(n11, e11.locales, e11.localePrefix, a2)?.locale;
            if (t12) {
              if (!rR(t12, a2)) return { locale: t12, domain: a2 };
              i3 = t12;
            }
          }
          if (!i3 && e11.localeDetection) {
            let t12 = rX(e11, r11);
            t12 && rR(t12, a2) && (i3 = t12);
          }
          if (!i3 && e11.localeDetection) {
            let e12 = rK(t11, a2.locales, a2.defaultLocale);
            e12 && (i3 = e12);
          }
          return i3 || (i3 = a2.defaultLocale), { locale: i3, domain: a2 };
        }(a, t10, r10, i2) : { locale: rW(a, t10, r10, i2) }), l2 = o2 ? o2.defaultLocale === s2 : s2 === a.defaultLocale, u2 = a.domains?.filter((e11) => rR(s2, e11)) || [], c2 = null != a.domains && !o2;
        function d2(t11) {
          var r11;
          let n11 = new URL(t11, e10.url);
          e10.nextUrl.basePath && (r11 = n11.pathname, n11.pathname = rd(e10.nextUrl.basePath + r11));
          let i3 = new Headers(e10.headers);
          return i3.set(rs, s2), rd(e10.nextUrl.pathname) !== rd(n11.pathname) ? eg.rewrite(n11, { request: { headers: i3 } }) : eg.next({ request: { headers: i3 } });
        }
        function h2(t11, r11) {
          var n11;
          let i3 = new URL(t11, e10.url);
          if (i3.pathname = rd(i3.pathname), u2.length > 0 && !r11 && o2) {
            let e11 = rP(o2, s2, u2);
            e11 && (r11 = e11.domain, e11.defaultLocale === s2 && "as-needed" === a.localePrefix.mode && (i3.pathname = rw(i3.pathname, a.locales, a.localePrefix)));
          }
          return r11 && (i3.host = r11, e10.headers.get("x-forwarded-host")) && (i3.protocol = e10.headers.get("x-forwarded-proto") ?? e10.nextUrl.protocol, i3.port = r11.split(":")[1] ?? e10.headers.get("x-forwarded-port") ?? ""), e10.nextUrl.basePath && (n11 = i3.pathname, i3.pathname = rd(e10.nextUrl.basePath + n11)), v2 = true, eg.redirect(i3.toString());
        }
        let f2 = rw(i2, a.locales, a.localePrefix), p2 = rS(i2, a.locales, a.localePrefix, o2), g2 = null != p2, _2 = "never" === a.localePrefix.mode || l2 && "as-needed" === a.localePrefix.mode, m2, y2, v2, b2 = f2, w2 = a.pathnames;
        if (w2) {
          let t11;
          if ([t11, y2] = function(e11, t12, r11) {
            for (let n11 of Object.keys(e11).sort(ry)) {
              let i3 = e11[n11];
              if ("string" == typeof i3) {
                if (rh(i3, t12)) return [void 0, n11];
              } else {
                let a2 = Object.entries(i3), o3 = a2.findIndex(([e12]) => e12 === r11);
                for (let [r12] of (o3 > 0 && a2.unshift(a2.splice(o3, 1)[0]), a2)) if (rh(rc(e11[n11], r12, n11), t12)) return [r12, n11];
              }
            }
            for (let r12 of Object.keys(e11)) if (rh(r12, t12)) return [void 0, r12];
            return [void 0, void 0];
          }(w2, f2, s2), y2) {
            let r11 = w2[y2], n11 = rc(r11, s2, y2);
            if (rh(n11, f2)) b2 = rb(f2, n11, y2);
            else {
              let i3;
              i3 = t11 ? rc(r11, t11, y2) : y2;
              let o3 = _2 ? void 0 : rf(s2, a.localePrefix);
              m2 = h2(rC(rb(f2, i3, n11), o3, e10.nextUrl.search));
            }
          }
        }
        if (!m2) if ("/" !== b2 || g2) {
          let t11 = rC(b2, `/${s2}`, e10.nextUrl.search);
          if (g2) {
            let r11 = rC(f2, p2.prefix, e10.nextUrl.search);
            if ("never" === a.localePrefix.mode) m2 = h2(rC(f2, void 0, e10.nextUrl.search));
            else if (p2.exact) if (l2 && _2) m2 = h2(rC(f2, void 0, e10.nextUrl.search));
            else if (a.domains) {
              let e11 = rP(o2, p2.locale, u2);
              m2 = o2?.domain === e11?.domain || c2 ? d2(t11) : h2(r11, e11?.domain);
            } else m2 = d2(t11);
            else m2 = h2(r11);
          } else m2 = _2 ? d2(t11) : h2(rC(f2, rf(s2, a.localePrefix), e10.nextUrl.search));
        } else m2 = _2 ? d2(rC(b2, `/${s2}`, e10.nextUrl.search)) : h2(rC(f2, rf(s2, a.localePrefix), e10.nextUrl.search));
        return function(e11, t11, r11, n11, i3) {
          if (!n11.localeCookie) return;
          let { name: a2, ...o3 } = n11.localeCookie, s3 = e11.cookies.has(a2);
          s3 && e11.cookies.get(a2)?.value !== r11 ? t11.cookies.set(a2, r11, { path: e11.nextUrl.basePath || void 0, ...o3 }) : s3 || rK(e11.headers, i3?.locales || n11.locales, n11.defaultLocale) === r11 || t11.cookies.set(a2, r11, { path: e11.nextUrl.basePath || void 0, ...o3 });
        }(e10, m2, s2, a, o2), !v2 && "never" !== a.localePrefix.mode && a.alternateLinks && a.locales.length > 1 && m2.headers.set("Link", function({ internalTemplateName: e11, localizedPathnames: t11, request: r11, resolvedLocale: n11, routing: i3 }) {
          let a2 = r11.nextUrl.clone(), o3 = rT(r11.headers);
          function s3(e12, t12) {
            var n12;
            return e12.pathname = rd(e12.pathname), r11.nextUrl.basePath && ((e12 = new URL(e12)).pathname = (n12 = e12.pathname, rd(r11.nextUrl.basePath + n12))), `<${e12.toString()}>; rel="alternate"; hreflang="${t12}"`;
          }
          function l3(r12, i4) {
            return t11 && "object" == typeof t11 ? rb(r12, t11[n11] ?? e11, t11[i4] ?? e11) : r12;
          }
          o3 && (a2.port = "", a2.host = o3), a2.protocol = r11.headers.get("x-forwarded-proto") ?? a2.protocol, a2.pathname = rw(a2.pathname, i3.locales, i3.localePrefix);
          let u3 = rE(i3.locales, i3.localePrefix, false).flatMap(([e12, r12]) => {
            let n12;
            function o4(e13) {
              return "/" === e13 ? r12 : r12 + e13;
            }
            if (i3.domains) return i3.domains.filter((t12) => rR(e12, t12)).map((t12) => ((n12 = new URL(a2)).port = "", n12.host = t12.domain, n12.pathname = l3(a2.pathname, e12), e12 === t12.defaultLocale && "always" !== i3.localePrefix.mode || (n12.pathname = o4(n12.pathname)), s3(n12, e12)));
            {
              let r13;
              r13 = t11 && "object" == typeof t11 ? l3(a2.pathname, e12) : a2.pathname, e12 === i3.defaultLocale && "always" !== i3.localePrefix.mode || (r13 = o4(r13)), n12 = new URL(r13, a2);
            }
            return s3(n12, e12);
          });
          if (!i3.domains || 0 === i3.domains.length) {
            let e12 = l3(a2.pathname, i3.defaultLocale);
            if (e12) {
              let t12 = new URL(e12, a2);
              u3.push(s3(t12, "x-default"));
            }
          }
          return u3.join(", ");
        }({ routing: a, internalTemplateName: y2, localizedPathnames: null != y2 && w2 ? w2[y2] : void 0, request: e10, resolvedLocale: s2 })), m2;
      });
      e.s(["config", 0, { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] }, "default", 0, is], 96592);
      let il = { ...e.i(96592) }, iu = "/middleware", ic = il.middleware || il.default;
      if ("function" != typeof ic) throw new class extends Error {
        constructor(e10) {
          super(e10), this.stack = "";
        }
      }(`The Middleware file "${iu}" must export a function named \`middleware\` or a default function.`);
      let id = (e10) => tC({ ...e10, IncrementalCache: ri, incrementalCacheHandler: null, page: iu, handler: async (...e11) => {
        try {
          return await ic(...e11);
        } catch (i2) {
          let t10 = e11[0], r10 = new URL(t10.url), n10 = r10.pathname + r10.search;
          throw await u(i2, { path: n10, method: t10.method, headers: Object.fromEntries(t10.headers.entries()) }, { routerKind: "Pages Router", routePath: "/proxy", routeType: "proxy", revalidateReason: void 0 }), i2;
        }
      } });
      async function ih(e10, t10) {
        let r10 = await id({ request: { url: e10.url, method: e10.method, headers: S(e10.headers), nextConfig: { basePath: "", i18n: "", trailingSlash: false, experimental: { cacheLife: { default: { stale: 300, revalidate: 900, expire: 4294967294 }, seconds: { stale: 30, revalidate: 1, expire: 60 }, minutes: { stale: 300, revalidate: 60, expire: 3600 }, hours: { stale: 300, revalidate: 3600, expire: 86400 }, days: { stale: 300, revalidate: 86400, expire: 604800 }, weeks: { stale: 300, revalidate: 604800, expire: 2592e3 }, max: { stale: 300, revalidate: 2592e3, expire: 31536e3 } }, authInterrupts: false, clientParamParsingOrigins: [] } }, page: { name: iu }, body: "GET" !== e10.method && "HEAD" !== e10.method ? e10.body ?? void 0 : void 0, waitUntil: t10.waitUntil, requestMeta: t10.requestMeta, signal: t10.signal || new AbortController().signal } });
        return null == t10.waitUntil || t10.waitUntil.call(t10, r10.waitUntil), r10.response;
      }
      e.s(["default", 0, id, "handler", 0, ih], 52334);
    }]);
  }
});

// .next/server/edge/chunks/0hqd_next_dist_esm_build_templates_edge-wrapper_0zag735.js
var require_hqd_next_dist_esm_build_templates_edge_wrapper_0zag735 = __commonJS({
  ".next/server/edge/chunks/0hqd_next_dist_esm_build_templates_edge-wrapper_0zag735.js"() {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/0hqd_next_dist_esm_build_templates_edge-wrapper_0zag735.js", { otherChunks: ["chunks/_0tb3kv-._.js", "chunks/[root-of-the-server]__0q92aem._.js"], runtimeModuleIds: [23699] }]), (() => {
      let e;
      if (!Array.isArray(globalThis.TURBOPACK)) return;
      let t = ["NEXT_DEPLOYMENT_ID", "NEXT_CLIENT_ASSET_SUFFIX"];
      var r, n = ((r = n || {})[r.Runtime = 0] = "Runtime", r[r.Parent = 1] = "Parent", r[r.Update = 2] = "Update", r);
      let o = /* @__PURE__ */ new WeakMap();
      function u(e2, t2) {
        this.m = e2, this.e = t2;
      }
      let l = u.prototype, i = Object.prototype.hasOwnProperty, a = "u" > typeof Symbol && Symbol.toStringTag;
      function s(e2, t2, r2) {
        i.call(e2, t2) || Object.defineProperty(e2, t2, r2);
      }
      function c(e2, t2) {
        let r2 = e2[t2];
        return r2 || (r2 = f(t2), e2[t2] = r2), r2;
      }
      function f(e2) {
        return { exports: {}, error: void 0, id: e2, namespaceObject: void 0 };
      }
      function h(e2, t2) {
        s(e2, "__esModule", { value: true }), a && s(e2, a, { value: "Module" });
        let r2 = 0;
        for (; r2 < t2.length; ) {
          let n2 = t2[r2++], o2 = t2[r2++];
          if ("number" == typeof o2) if (0 === o2) s(e2, n2, { value: t2[r2++], enumerable: true, writable: false });
          else throw Error(`unexpected tag: ${o2}`);
          else "function" == typeof t2[r2] ? s(e2, n2, { get: o2, set: t2[r2++], enumerable: true }) : s(e2, n2, { get: o2, enumerable: true });
        }
        Object.seal(e2);
      }
      function d(e2, t2) {
        (null != t2 ? c(this.c, t2) : this.m).exports = e2;
      }
      l.s = function(e2, t2) {
        let r2, n2;
        null != t2 ? n2 = (r2 = c(this.c, t2)).exports : (r2 = this.m, n2 = this.e), r2.namespaceObject = n2, h(n2, e2);
      }, l.j = function(e2, t2) {
        var r2, n2;
        let u2, l2, a2;
        null != t2 ? l2 = (u2 = c(this.c, t2)).exports : (u2 = this.m, l2 = this.e);
        let s2 = (r2 = u2, n2 = l2, (a2 = o.get(r2)) || (o.set(r2, a2 = []), r2.exports = r2.namespaceObject = new Proxy(n2, { get(e3, t3) {
          if (i.call(e3, t3) || "default" === t3 || "__esModule" === t3) return Reflect.get(e3, t3);
          for (let e4 of a2) {
            let r3 = Reflect.get(e4, t3);
            if (void 0 !== r3) return r3;
          }
        }, ownKeys(e3) {
          let t3 = Reflect.ownKeys(e3);
          for (let e4 of a2) for (let r3 of Reflect.ownKeys(e4)) "default" === r3 || t3.includes(r3) || t3.push(r3);
          return t3;
        } })), a2);
        "object" == typeof e2 && null !== e2 && s2.push(e2);
      }, l.v = d, l.n = function(e2, t2) {
        let r2;
        (r2 = null != t2 ? c(this.c, t2) : this.m).exports = r2.namespaceObject = e2;
      };
      let p = Object.getPrototypeOf ? (e2) => Object.getPrototypeOf(e2) : (e2) => e2.__proto__, m = [null, p({}), p([]), p(p)];
      function b(e2, t2, r2) {
        let n2 = [], o2 = -1;
        for (let t3 = e2; ("object" == typeof t3 || "function" == typeof t3) && !m.includes(t3); t3 = p(t3)) for (let r3 of Object.getOwnPropertyNames(t3)) n2.push(r3, /* @__PURE__ */ function(e3, t4) {
          return () => e3[t4];
        }(e2, r3)), -1 === o2 && "default" === r3 && (o2 = n2.length - 1);
        return r2 && o2 >= 0 || (o2 >= 0 ? n2.splice(o2, 1, 0, e2) : n2.push("default", 0, e2)), h(t2, n2), t2;
      }
      function y(e2) {
        return "function" == typeof e2 ? function(...t2) {
          return e2.apply(this, t2);
        } : /* @__PURE__ */ Object.create(null);
      }
      function g(e2) {
        let t2 = K(e2, this.m);
        if (t2.namespaceObject) return t2.namespaceObject;
        let r2 = t2.exports;
        return t2.namespaceObject = b(r2, y(r2), r2 && r2.__esModule);
      }
      function w(e2) {
        let t2 = e2.indexOf("#");
        -1 !== t2 && (e2 = e2.substring(0, t2));
        let r2 = e2.indexOf("?");
        return -1 !== r2 && (e2 = e2.substring(0, r2)), e2;
      }
      function O(e2) {
        return "string" == typeof e2 ? e2 : e2.path;
      }
      function k() {
        let e2, t2;
        return { promise: new Promise((r2, n2) => {
          t2 = n2, e2 = r2;
        }), resolve: e2, reject: t2 };
      }
      l.i = g, l.A = function(e2) {
        return this.r(e2)(g.bind(this));
      }, l.t = "function" == typeof __require ? __require : function() {
        throw Error("Unexpected use of runtime require");
      }, l.r = function(e2) {
        return K(e2, this.m).exports;
      }, l.f = function(e2) {
        function t2(t3) {
          if (t3 = w(t3), i.call(e2, t3)) return e2[t3].module();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }
        return t2.keys = () => Object.keys(e2), t2.resolve = (t3) => {
          if (t3 = w(t3), i.call(e2, t3)) return e2[t3].id();
          let r2 = Error(`Cannot find module '${t3}'`);
          throw r2.code = "MODULE_NOT_FOUND", r2;
        }, t2.import = async (e3) => await t2(e3), t2;
      };
      let _ = Symbol("turbopack queues"), j = Symbol("turbopack exports"), C = Symbol("turbopack error");
      function P(e2) {
        e2 && 1 !== e2.status && (e2.status = 1, e2.forEach((e3) => e3.queueCount--), e2.forEach((e3) => e3.queueCount-- ? e3.queueCount++ : e3()));
      }
      l.a = function(e2, t2) {
        let r2 = this.m, n2 = t2 ? Object.assign([], { status: -1 }) : void 0, o2 = /* @__PURE__ */ new Set(), { resolve: u2, reject: l2, promise: i2 } = k(), a2 = Object.assign(i2, { [j]: r2.exports, [_]: (e3) => {
          n2 && e3(n2), o2.forEach(e3), a2.catch(() => {
          });
        } }), s2 = { get: () => a2, set(e3) {
          e3 !== a2 && (a2[j] = e3);
        } };
        Object.defineProperty(r2, "exports", s2), Object.defineProperty(r2, "namespaceObject", s2), e2(function(e3) {
          let t3 = e3.map((e4) => {
            if (null !== e4 && "object" == typeof e4) {
              if (_ in e4) return e4;
              if (null != e4 && "object" == typeof e4 && "then" in e4 && "function" == typeof e4.then) {
                let t4 = Object.assign([], { status: 0 }), r4 = { [j]: {}, [_]: (e5) => e5(t4) };
                return e4.then((e5) => {
                  r4[j] = e5, P(t4);
                }, (e5) => {
                  r4[C] = e5, P(t4);
                }), r4;
              }
            }
            return { [j]: e4, [_]: () => {
            } };
          }), r3 = () => t3.map((e4) => {
            if (e4[C]) throw e4[C];
            return e4[j];
          }), { promise: u3, resolve: l3 } = k(), i3 = Object.assign(() => l3(r3), { queueCount: 0 });
          function a3(e4) {
            e4 !== n2 && !o2.has(e4) && (o2.add(e4), e4 && 0 === e4.status && (i3.queueCount++, e4.push(i3)));
          }
          return t3.map((e4) => e4[_](a3)), i3.queueCount ? u3 : r3();
        }, function(e3) {
          e3 ? l2(a2[C] = e3) : u2(a2[j]), P(n2);
        }), n2 && -1 === n2.status && (n2.status = 0);
      };
      let v = function(e2) {
        let t2 = new URL(e2, "x:/"), r2 = {};
        for (let e3 in t2) r2[e3] = t2[e3];
        for (let t3 in r2.href = e2, r2.pathname = e2.replace(/[?#].*/, ""), r2.origin = r2.protocol = "", r2.toString = r2.toJSON = (...t4) => e2, r2) Object.defineProperty(this, t3, { enumerable: true, configurable: true, value: r2[t3] });
      };
      function E(e2, t2) {
        throw Error(`Invariant: ${t2(e2)}`);
      }
      v.prototype = URL.prototype, l.U = v, l.z = function(e2) {
        throw Error("dynamic usage of require is not supported");
      }, l.g = globalThis;
      let U = u.prototype, R = /* @__PURE__ */ new Map();
      l.M = R;
      let M = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
      async function x(e2, t2, r2) {
        let n2;
        if ("string" == typeof r2) return q(e2, t2, A(r2));
        let o2 = r2.included || [], u2 = o2.map((e3) => !!R.has(e3) || M.get(e3));
        if (u2.length > 0 && u2.every((e3) => e3)) return void await Promise.all(u2);
        let l2 = r2.moduleChunks || [], i2 = l2.map((e3) => $.get(e3)).filter((e3) => e3);
        if (i2.length > 0) {
          if (i2.length === l2.length) return void await Promise.all(i2);
          let r3 = /* @__PURE__ */ new Set();
          for (let e3 of l2) $.has(e3) || r3.add(e3);
          for (let n3 of r3) {
            let r4 = q(e2, t2, A(n3));
            $.set(n3, r4), i2.push(r4);
          }
          n2 = Promise.all(i2);
        } else {
          for (let o3 of (n2 = q(e2, t2, A(r2.path)), l2)) $.has(o3) || $.set(o3, n2);
        }
        for (let e3 of o2) M.has(e3) || M.set(e3, n2);
        await n2;
      }
      U.l = function(e2) {
        return x(n.Parent, this.m.id, e2);
      };
      let T = Promise.resolve(void 0), S = /* @__PURE__ */ new WeakMap();
      function q(t2, r2, o2) {
        let u2 = e.loadChunkCached(t2, o2), l2 = S.get(u2);
        if (void 0 === l2) {
          let e2 = S.set.bind(S, u2, T);
          l2 = u2.then(e2).catch((e3) => {
            let u3;
            switch (t2) {
              case n.Runtime:
                u3 = `as a runtime dependency of chunk ${r2}`;
                break;
              case n.Parent:
                u3 = `from module ${r2}`;
                break;
              case n.Update:
                u3 = "from an HMR update";
                break;
              default:
                E(t2, (e4) => `Unknown source type: ${e4}`);
            }
            let l3 = Error(`Failed to load chunk ${o2} ${u3}${e3 ? `: ${e3}` : ""}`, e3 ? { cause: e3 } : void 0);
            throw l3.name = "ChunkLoadError", l3;
          }), S.set(u2, l2);
        }
        return l2;
      }
      function A(e2) {
        return `${e2.split("/").map((e3) => encodeURIComponent(e3)).join("/")}`;
      }
      U.L = function(e2) {
        return q(n.Parent, this.m.id, e2);
      }, U.R = function(e2) {
        let t2 = this.r(e2);
        return t2?.default ?? t2;
      }, U.P = function(e2) {
        return `/ROOT/${e2 ?? ""}`;
      }, U.q = function(e2, t2) {
        d.call(this, `${e2}`, t2);
      }, U.b = function(e2, r2, n2, o2) {
        let u2 = "SharedWorker" === e2.name, l2 = [n2.map((e3) => A(e3)).reverse(), ""];
        for (let e3 of t) l2.push(globalThis[e3]);
        let i2 = new URL(A(r2), location.origin), a2 = JSON.stringify(l2);
        return u2 ? i2.searchParams.set("params", a2) : i2.hash = "#params=" + encodeURIComponent(a2), new e2(i2, o2 ? { ...o2, type: void 0 } : void 0);
      };
      let N = /\.js(?:\?[^#]*)?(?:#.*)?$/;
      l.w = function(t2, r2, o2) {
        return e.loadWebAssembly(n.Parent, this.m.id, t2, r2, o2);
      }, l.u = function(t2, r2) {
        return e.loadWebAssemblyModule(n.Parent, this.m.id, t2, r2);
      };
      let I = {};
      l.c = I;
      let K = (e2, t2) => {
        let r2 = I[e2];
        if (r2) {
          if (r2.error) throw r2.error;
          return r2;
        }
        return L(e2, n.Parent, t2.id);
      };
      function L(e2, t2, r2) {
        let n2 = R.get(e2);
        if ("function" != typeof n2) throw Error(function(e3, t3, r3) {
          let n3;
          switch (t3) {
            case 0:
              n3 = `as a runtime entry of chunk ${r3}`;
              break;
            case 1:
              n3 = `because it was required from module ${r3}`;
              break;
            case 2:
              n3 = "because of an HMR update";
              break;
            default:
              E(t3, (e4) => `Unknown source type: ${e4}`);
          }
          return `Module ${e3} was instantiated ${n3}, but the module factory is not available.`;
        }(e2, t2, r2));
        let o2 = f(e2), l2 = o2.exports;
        I[e2] = o2;
        let i2 = new u(o2, l2);
        try {
          n2(i2, o2, l2);
        } catch (e3) {
          throw o2.error = e3, e3;
        }
        return o2.namespaceObject && o2.exports !== o2.namespaceObject && b(o2.exports, o2.namespaceObject), o2;
      }
      function W(t2) {
        let r2, n2 = function(e2) {
          if ("string" == typeof e2) return e2;
          if (e2) return { src: e2.getAttribute("src") };
          if ("u" > typeof TURBOPACK_NEXT_CHUNK_URLS) return { src: TURBOPACK_NEXT_CHUNK_URLS.pop() };
          throw Error("chunk path empty but not in a worker");
        }(t2[0]);
        return 2 === t2.length ? r2 = t2[1] : (r2 = void 0, !function(e2, t3) {
          let r3 = 1;
          for (; r3 < e2.length; ) {
            let n3, o2 = r3 + 1;
            for (; o2 < e2.length && "function" != typeof e2[o2]; ) o2++;
            if (o2 === e2.length) throw Error("malformed chunk format, expected a factory function");
            let u2 = e2[o2];
            for (let u3 = r3; u3 < o2; u3++) {
              let r4 = e2[u3], o3 = t3.get(r4);
              if (o3) {
                n3 = o3;
                break;
              }
            }
            let l2 = n3 ?? u2, i2 = false;
            for (let n4 = r3; n4 < o2; n4++) {
              let r4 = e2[n4];
              t3.has(r4) || (i2 || (l2 === u2 && Object.defineProperty(u2, "name", { value: "module evaluation" }), i2 = true), t3.set(r4, l2));
            }
            r3 = o2 + 1;
          }
        }(t2, R)), e.registerChunk(n2, r2);
      }
      function B(e2, t2, r2 = false) {
        let n2;
        try {
          n2 = t2();
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return !r2 || n2.__esModule ? n2 : b(n2, y(n2), true);
      }
      l.y = async function(e2) {
        let t2;
        try {
          t2 = await import(e2);
        } catch (t3) {
          throw Error(`Failed to load external module ${e2}: ${t3}`);
        }
        return t2 && t2.__esModule && t2.default && "default" in t2.default ? b(t2.default, y(t2), true) : t2;
      }, B.resolve = (e2, t2) => __require.resolve(e2, t2), l.x = B, e = { registerChunk(e2, t2) {
        let r2 = function(e3) {
          if ("string" == typeof e3) return e3;
          let t3 = decodeURIComponent(e3.src.replace(/[?#].*$/, ""));
          return t3.startsWith("") ? t3.slice(0) : t3;
        }(e2);
        F.add(r2), function(e3) {
          let t3 = D.get(e3);
          if (null != t3) {
            for (let r3 of t3) r3.requiredChunks.delete(e3), 0 === r3.requiredChunks.size && X(r3.runtimeModuleIds, r3.chunkPath);
            D.delete(e3);
          }
        }(r2), null != t2 && (0 === t2.otherChunks.length ? X(t2.runtimeModuleIds, r2) : function(e3, t3, r3) {
          let n2 = /* @__PURE__ */ new Set(), o2 = { runtimeModuleIds: r3, chunkPath: e3, requiredChunks: n2 };
          for (let e4 of t3) {
            let t4 = O(e4);
            if (F.has(t4)) continue;
            n2.add(t4);
            let r4 = D.get(t4);
            null == r4 && (r4 = /* @__PURE__ */ new Set(), D.set(t4, r4)), r4.add(o2);
          }
          0 === o2.requiredChunks.size && X(o2.runtimeModuleIds, o2.chunkPath);
        }(r2, t2.otherChunks.filter((e3) => {
          var t3;
          return t3 = O(e3), N.test(t3);
        }), t2.runtimeModuleIds));
      }, loadChunkCached(e2, t2) {
        throw Error("chunk loading is not supported");
      }, async loadWebAssembly(e2, t2, r2, n2, o2) {
        let u2 = await z(r2, n2);
        return await WebAssembly.instantiate(u2, o2);
      }, loadWebAssemblyModule: async (e2, t2, r2, n2) => z(r2, n2) };
      let F = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
      function X(e2, t2) {
        for (let r2 of e2) !function(e3, t3) {
          let r3 = I[t3];
          if (r3) {
            if (r3.error) throw r3.error;
            return;
          }
          L(t3, n.Runtime, e3);
        }(t2, r2);
      }
      async function z(e2, t2) {
        let r2;
        try {
          r2 = t2();
        } catch (e3) {
        }
        if (!r2) throw Error(`dynamically loading WebAssembly is not supported in this runtime as global was not injected for chunk '${e2}'`);
        return r2;
      }
      let H = globalThis.TURBOPACK;
      globalThis.TURBOPACK = { push: W }, H.forEach(W);
    })();
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js
var edgeFunctionHandler_exports = {};
__export(edgeFunctionHandler_exports, {
  default: () => edgeFunctionHandler
});
async function edgeFunctionHandler(request) {
  const path3 = new URL(request.url).pathname;
  const routes = globalThis._ROUTES;
  const correspondingRoute = routes.find((route) => route.regex.some((r) => new RegExp(r).test(path3)));
  if (!correspondingRoute) {
    throw new Error(`No route found for ${request.url}`);
  }
  const entry = await self._ENTRIES[`middleware_${correspondingRoute.name}`];
  const result = await entry.default({
    page: correspondingRoute.page,
    request: {
      ...request,
      page: {
        name: correspondingRoute.name
      }
    }
  });
  globalThis.__openNextAls.getStore()?.pendingPromiseRunner.add(result.waitUntil);
  const response = result.response;
  return response;
}
var init_edgeFunctionHandler = __esm({
  "node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js"() {
    globalThis._ENTRIES = {};
    globalThis.self = globalThis;
    globalThis._ROUTES = [{ "name": "middleware", "page": "/", "regex": ["^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next|_vercel|.*\\..*).*))(\\\\.json)?[\\/#\\?]?$"] }];
    require_tb3kv();
    require_root_of_the_server_0q92aem();
    require_hqd_next_dist_esm_build_templates_edge_wrapper_0zag735();
  }
});

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/promise.js
init_logger();

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/requestCache.js
var RequestCache = class {
  _caches = /* @__PURE__ */ new Map();
  /**
   * Returns the Map registered under `key`.
   * If no Map exists yet for that key, a new empty Map is created, stored, and returned.
   * Repeated calls with the same key always return the **same** Map instance.
   */
  getOrCreate(key) {
    let cache = this._caches.get(key);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      this._caches.set(key, cache);
    }
    return cache;
  }
};

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/promise.js
var DetachedPromise = class {
  resolve;
  reject;
  promise;
  constructor() {
    let resolve;
    let reject;
    this.promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.resolve = resolve;
    this.reject = reject;
  }
};
var DetachedPromiseRunner = class {
  promises = [];
  withResolvers() {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    return detachedPromise;
  }
  add(promise) {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    promise.then(detachedPromise.resolve, detachedPromise.reject);
  }
  async await() {
    debug(`Awaiting ${this.promises.length} detached promises`);
    const results = await Promise.allSettled(this.promises.map((p) => p.promise));
    const rejectedPromises = results.filter((r) => r.status === "rejected");
    rejectedPromises.forEach((r) => {
      error(r.reason);
    });
  }
};
async function awaitAllDetachedPromise() {
  const store = globalThis.__openNextAls.getStore();
  const promisesToAwait = store?.pendingPromiseRunner.await() ?? Promise.resolve();
  if (store?.waitUntil) {
    store.waitUntil(promisesToAwait);
    return;
  }
  await promisesToAwait;
}
function provideNextAfterProvider() {
  const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for("@next/request-context");
  const VERCEL_REQUEST_CONTEXT_SYMBOL = Symbol.for("@vercel/request-context");
  const store = globalThis.__openNextAls.getStore();
  const waitUntil = store?.waitUntil ?? ((promise) => store?.pendingPromiseRunner.add(promise));
  const nextAfterContext = {
    get: () => ({
      waitUntil
    })
  };
  globalThis[NEXT_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  if (process.env.EMULATE_VERCEL_REQUEST_CONTEXT) {
    globalThis[VERCEL_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  }
}
function runWithOpenNextRequestContext({ isISRRevalidation, waitUntil, requestId = Math.random().toString(36) }, fn) {
  return globalThis.__openNextAls.run({
    requestId,
    pendingPromiseRunner: new DetachedPromiseRunner(),
    isISRRevalidation,
    waitUntil,
    writtenTags: /* @__PURE__ */ new Set(),
    requestCache: new RequestCache()
  }, async () => {
    provideNextAfterProvider();
    let result;
    try {
      result = await fn();
    } finally {
      await awaitAllDetachedPromise();
    }
    return result;
  });
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/adapters/middleware.js
init_logger();

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
init_logger();

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/resolve.js
async function resolveConverter(converter2) {
  if (typeof converter2 === "function") {
    return converter2();
  }
  const m_1 = await Promise.resolve().then(() => (init_edge(), edge_exports));
  return m_1.default;
}
async function resolveWrapper(wrapper) {
  if (typeof wrapper === "function") {
    return wrapper();
  }
  const m_1 = await Promise.resolve().then(() => (init_cloudflare_edge(), cloudflare_edge_exports));
  return m_1.default;
}
async function resolveOriginResolver(originResolver) {
  if (typeof originResolver === "function") {
    return originResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_pattern_env(), pattern_env_exports));
  return m_1.default;
}
async function resolveAssetResolver(assetResolver) {
  if (typeof assetResolver === "function") {
    return assetResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_dummy(), dummy_exports));
  return m_1.default;
}
async function resolveProxyRequest(proxyRequest) {
  if (typeof proxyRequest === "function") {
    return proxyRequest();
  }
  const m_1 = await Promise.resolve().then(() => (init_fetch(), fetch_exports));
  return m_1.default;
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
async function createGenericHandler(handler3) {
  const config = await import("./open-next.config.mjs").then((m) => m.default);
  globalThis.openNextConfig = config;
  const handlerConfig = config[handler3.type];
  const override = handlerConfig && "override" in handlerConfig ? handlerConfig.override : void 0;
  const converter2 = await resolveConverter(override?.converter);
  const { name, wrapper } = await resolveWrapper(override?.wrapper);
  debug("Using wrapper", name);
  return wrapper(handler3.handler, converter2);
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/util.js
import crypto2 from "node:crypto";
import { parse as parseQs, stringify as stringifyQs } from "node:querystring";

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/adapters/config/index.js
init_logger();
import path from "node:path";
globalThis.__dirname ??= "";
var NEXT_DIR = path.join(__dirname, ".next");
var OPEN_NEXT_DIR = path.join(__dirname, ".open-next");
debug({ NEXT_DIR, OPEN_NEXT_DIR });
var NextConfig = { "env": {}, "webpack": null, "typescript": { "ignoreBuildErrors": false }, "typedRoutes": false, "distDir": ".next", "cleanDistDir": true, "assetPrefix": "", "cacheMaxMemorySize": 52428800, "configOrigin": "next.config.ts", "useFileSystemPublicRoutes": true, "generateEtags": true, "pageExtensions": ["tsx", "ts", "jsx", "js"], "poweredByHeader": true, "compress": true, "images": { "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840], "imageSizes": [32, 48, 64, 96, 128, 256, 384], "path": "/_next/image", "loader": "default", "loaderFile": "", "domains": [], "disableStaticImages": false, "minimumCacheTTL": 14400, "formats": ["image/webp"], "maximumRedirects": 3, "maximumResponseBody": 5e7, "dangerouslyAllowLocalIP": false, "dangerouslyAllowSVG": false, "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;", "contentDispositionType": "attachment", "localPatterns": [{ "pathname": "**", "search": "" }], "remotePatterns": [{ "protocol": "https", "hostname": "scontent.cdninstagram.com" }], "qualities": [75], "unoptimized": false, "customCacheHandler": false }, "devIndicators": { "position": "bottom-left" }, "onDemandEntries": { "maxInactiveAge": 6e4, "pagesBufferLength": 5 }, "basePath": "", "sassOptions": {}, "trailingSlash": false, "i18n": null, "productionBrowserSourceMaps": false, "excludeDefaultMomentLocales": true, "reactProductionProfiling": false, "reactStrictMode": null, "reactMaxHeadersLength": 6e3, "httpAgentOptions": { "keepAlive": true }, "logging": { "serverFunctions": true, "browserToTerminal": "warn" }, "compiler": {}, "expireTime": 31536e3, "staticPageGenerationTimeout": 60, "output": "standalone", "modularizeImports": { "@mui/icons-material": { "transform": "@mui/icons-material/{{member}}" }, "lodash": { "transform": "lodash/{{member}}" } }, "outputFileTracingRoot": "/Users/airm1/Downloads/extaticaa", "cacheComponents": false, "cacheLife": { "default": { "stale": 300, "revalidate": 900, "expire": 4294967294 }, "seconds": { "stale": 30, "revalidate": 1, "expire": 60 }, "minutes": { "stale": 300, "revalidate": 60, "expire": 3600 }, "hours": { "stale": 300, "revalidate": 3600, "expire": 86400 }, "days": { "stale": 300, "revalidate": 86400, "expire": 604800 }, "weeks": { "stale": 300, "revalidate": 604800, "expire": 2592e3 }, "max": { "stale": 300, "revalidate": 2592e3, "expire": 31536e3 } }, "cacheHandlers": {}, "experimental": { "appNewScrollHandler": false, "useSkewCookie": false, "cssChunking": true, "multiZoneDraftMode": false, "appNavFailHandling": false, "prerenderEarlyExit": true, "serverMinification": true, "linkNoTouchStart": false, "caseSensitiveRoutes": false, "cachedNavigations": false, "partialFallbacks": false, "dynamicOnHover": false, "varyParams": false, "prefetchInlining": false, "preloadEntriesOnStart": true, "clientRouterFilter": true, "clientRouterFilterRedirects": false, "fetchCacheKeyPrefix": "", "proxyPrefetch": "flexible", "optimisticClientCache": true, "manualClientBasePath": false, "cpus": 7, "memoryBasedWorkersCount": false, "imgOptConcurrency": null, "imgOptTimeoutInSeconds": 7, "imgOptMaxInputPixels": 268402689, "imgOptSequentialRead": null, "imgOptSkipMetadata": null, "isrFlushToDisk": true, "workerThreads": false, "optimizeCss": false, "nextScriptWorkers": false, "scrollRestoration": false, "externalDir": false, "disableOptimizedLoading": false, "gzipSize": true, "craCompat": false, "esmExternals": true, "fullySpecified": false, "swcTraceProfiling": false, "forceSwcTransforms": false, "largePageDataBytes": 128e3, "typedEnv": false, "parallelServerCompiles": false, "parallelServerBuildTraces": false, "ppr": false, "authInterrupts": false, "webpackMemoryOptimizations": false, "optimizeServerReact": true, "strictRouteTypes": false, "viewTransition": false, "removeUncaughtErrorAndRejectionListeners": false, "validateRSCRequestHeaders": false, "staleTimes": { "dynamic": 0, "static": 300 }, "reactDebugChannel": true, "serverComponentsHmrCache": true, "staticGenerationMaxConcurrency": 8, "staticGenerationMinPagesPerWorker": 25, "transitionIndicator": false, "gestureTransition": false, "inlineCss": false, "useCache": false, "globalNotFound": false, "browserDebugInfoInTerminal": "warn", "lockDistDir": true, "proxyClientMaxBodySize": 10485760, "hideLogsAfterAbort": false, "mcpServer": true, "turbopackFileSystemCacheForDev": true, "turbopackFileSystemCacheForBuild": false, "turbopackInferModuleSideEffects": true, "turbopackPluginRuntimeStrategy": "childProcesses", "optimizePackageImports": ["lucide-react", "date-fns", "lodash-es", "ramda", "antd", "react-bootstrap", "ahooks", "@ant-design/icons", "@headlessui/react", "@headlessui-float/react", "@heroicons/react/20/solid", "@heroicons/react/24/solid", "@heroicons/react/24/outline", "@visx/visx", "@tremor/react", "rxjs", "@mui/material", "@mui/icons-material", "recharts", "react-use", "effect", "@effect/schema", "@effect/platform", "@effect/platform-node", "@effect/platform-browser", "@effect/platform-bun", "@effect/sql", "@effect/sql-mssql", "@effect/sql-mysql2", "@effect/sql-pg", "@effect/sql-sqlite-node", "@effect/sql-sqlite-bun", "@effect/sql-sqlite-wasm", "@effect/sql-sqlite-react-native", "@effect/rpc", "@effect/rpc-http", "@effect/typeclass", "@effect/experimental", "@effect/opentelemetry", "@material-ui/core", "@material-ui/icons", "@tabler/icons-react", "mui-core", "react-icons/ai", "react-icons/bi", "react-icons/bs", "react-icons/cg", "react-icons/ci", "react-icons/di", "react-icons/fa", "react-icons/fa6", "react-icons/fc", "react-icons/fi", "react-icons/gi", "react-icons/go", "react-icons/gr", "react-icons/hi", "react-icons/hi2", "react-icons/im", "react-icons/io", "react-icons/io5", "react-icons/lia", "react-icons/lib", "react-icons/lu", "react-icons/md", "react-icons/pi", "react-icons/ri", "react-icons/rx", "react-icons/si", "react-icons/sl", "react-icons/tb", "react-icons/tfi", "react-icons/ti", "react-icons/vsc", "react-icons/wi"], "trustHostHeader": false, "isExperimentalCompile": false }, "htmlLimitedBots": "[\\w-]+-Google|Google-[\\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight", "bundlePagesRouterDependencies": false, "configFileName": "next.config.ts", "turbopack": { "resolveAlias": { "next-intl/config": "./src/i18n/request.ts" }, "root": "/Users/airm1/Downloads/extaticaa" }, "distDirRoot": ".next" };
var BuildId = "LJvvDS3GmmJKE8m0bgsJf";
var RoutesManifest = { "basePath": "", "rewrites": { "beforeFiles": [], "afterFiles": [], "fallback": [] }, "redirects": [{ "source": "/:path+/", "destination": "/:path+", "internal": true, "priority": true, "statusCode": 308, "regex": "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$" }], "routes": { "static": [{ "page": "/_global-error", "regex": "^/_global\\-error(?:/)?$", "routeKeys": {}, "namedRegex": "^/_global\\-error(?:/)?$" }, { "page": "/_not-found", "regex": "^/_not\\-found(?:/)?$", "routeKeys": {}, "namedRegex": "^/_not\\-found(?:/)?$" }, { "page": "/api/contact", "regex": "^/api/contact(?:/)?$", "routeKeys": {}, "namedRegex": "^/api/contact(?:/)?$" }, { "page": "/api/subscribe", "regex": "^/api/subscribe(?:/)?$", "routeKeys": {}, "namedRegex": "^/api/subscribe(?:/)?$" }, { "page": "/favicon.ico", "regex": "^/favicon\\.ico(?:/)?$", "routeKeys": {}, "namedRegex": "^/favicon\\.ico(?:/)?$" }, { "page": "/robots.txt", "regex": "^/robots\\.txt(?:/)?$", "routeKeys": {}, "namedRegex": "^/robots\\.txt(?:/)?$" }, { "page": "/sitemap.xml", "regex": "^/sitemap\\.xml(?:/)?$", "routeKeys": {}, "namedRegex": "^/sitemap\\.xml(?:/)?$" }], "dynamic": [{ "page": "/[locale]", "regex": "^/([^/]+?)(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)(?:/)?$" }, { "page": "/[locale]/about", "regex": "^/([^/]+?)/about(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/about(?:/)?$" }, { "page": "/[locale]/contact", "regex": "^/([^/]+?)/contact(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/contact(?:/)?$" }, { "page": "/[locale]/events", "regex": "^/([^/]+?)/events(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/events(?:/)?$" }, { "page": "/[locale]/quiz", "regex": "^/([^/]+?)/quiz(?:/)?$", "routeKeys": { "nxtPlocale": "nxtPlocale" }, "namedRegex": "^/(?<nxtPlocale>[^/]+?)/quiz(?:/)?$" }], "data": { "static": [], "dynamic": [] } }, "locales": [] };
var ConfigHeaders = [];
var PrerenderManifest = { "version": 4, "routes": { "/_global-error": { "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/_global-error", "dataRoute": "/_global-error.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/_not-found": { "initialStatus": 404, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/_not-found", "dataRoute": "/_not-found.rsc", "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/favicon.ico": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico" }, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/favicon.ico", "dataRoute": null, "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/robots.txt": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "text/plain", "x-next-cache-tags": "_N_T_/layout,_N_T_/robots.txt/layout,_N_T_/robots.txt/route,_N_T_/robots.txt" }, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/robots.txt", "dataRoute": null, "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] }, "/sitemap.xml": { "initialHeaders": { "cache-control": "public, max-age=0, must-revalidate", "content-type": "application/xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/sitemap.xml/layout,_N_T_/sitemap.xml/route,_N_T_/sitemap.xml" }, "experimentalBypassFor": [{ "type": "header", "key": "next-action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/sitemap.xml", "dataRoute": null, "allowHeader": ["host", "x-matched-path", "x-prerender-revalidate", "x-prerender-revalidate-if-generated", "x-next-revalidated-tags", "x-next-revalidate-tag-token"] } }, "dynamicRoutes": {}, "notFoundRoutes": [], "preview": { "previewModeId": "d39c7b7abf3e5454ee81cac031bb2460", "previewModeSigningKey": "1d4fb3d5ae3c761684bd943766fcb88186eadbc53277d696df1f4ce5a1c0f039", "previewModeEncryptionKey": "398b30b76499f5af6284f7e1bf0a989509aef028c200da08ab9127970b293464" } };
var MiddlewareManifest = { "version": 3, "middleware": { "/": { "files": ["server/edge/chunks/_0tb3kv-._.js", "server/edge/chunks/[root-of-the-server]__0q92aem._.js", "server/edge/chunks/0hqd_next_dist_esm_build_templates_edge-wrapper_0zag735.js"], "name": "middleware", "page": "/", "entrypoint": "server/edge/chunks/0hqd_next_dist_esm_build_templates_edge-wrapper_0zag735.js", "matchers": [{ "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next|_vercel|.*\\..*).*))(\\\\.json)?[\\/#\\?]?$", "originalSource": "/((?!api|_next|_vercel|.*\\..*).*)" }], "wasm": [], "assets": [], "env": { "__NEXT_BUILD_ID": "LJvvDS3GmmJKE8m0bgsJf", "NEXT_SERVER_ACTIONS_ENCRYPTION_KEY": "3wgaTPm0rxoxpjyYfQBtxUHxtYlBlX+8IOHpE+Y94Cc=", "__NEXT_PREVIEW_MODE_ID": "d39c7b7abf3e5454ee81cac031bb2460", "__NEXT_PREVIEW_MODE_ENCRYPTION_KEY": "398b30b76499f5af6284f7e1bf0a989509aef028c200da08ab9127970b293464", "__NEXT_PREVIEW_MODE_SIGNING_KEY": "1d4fb3d5ae3c761684bd943766fcb88186eadbc53277d696df1f4ce5a1c0f039" } } }, "sortedMiddleware": ["/"], "functions": {} };
var AppPathRoutesManifest = { "/[locale]/about/page": "/[locale]/about", "/[locale]/contact/page": "/[locale]/contact", "/[locale]/events/page": "/[locale]/events", "/[locale]/page": "/[locale]", "/[locale]/quiz/page": "/[locale]/quiz", "/_global-error/page": "/_global-error", "/_not-found/page": "/_not-found", "/api/contact/route": "/api/contact", "/api/subscribe/route": "/api/subscribe", "/favicon.ico/route": "/favicon.ico", "/robots.txt/route": "/robots.txt", "/sitemap.xml/route": "/sitemap.xml" };
var FunctionsConfigManifest = { "version": 1, "functions": {} };
var PagesManifest = { "/404": "pages/404.html", "/500": "pages/500.html" };
process.env.NEXT_BUILD_ID = BuildId;
process.env.NEXT_PREVIEW_MODE_ID = PrerenderManifest?.preview?.previewModeId;

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/http/openNextResponse.js
init_logger();
init_util();
import { Transform } from "node:stream";

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/util.js
init_util();
init_logger();
import { ReadableStream as ReadableStream3 } from "node:stream/web";

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/binary.js
var commonBinaryMimeTypes = /* @__PURE__ */ new Set([
  "application/octet-stream",
  // Docs
  "application/epub+zip",
  "application/msword",
  "application/pdf",
  "application/rtf",
  "application/vnd.amazon.ebook",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  // Fonts
  "font/otf",
  "font/woff",
  "font/woff2",
  // Images
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/tiff",
  "image/vnd.microsoft.icon",
  "image/webp",
  // Audio
  "audio/3gpp",
  "audio/aac",
  "audio/basic",
  "audio/flac",
  "audio/mpeg",
  "audio/ogg",
  "audio/wavaudio/webm",
  "audio/x-aiff",
  "audio/x-midi",
  "audio/x-wav",
  // Video
  "video/3gpp",
  "video/mp2t",
  "video/mpeg",
  "video/ogg",
  "video/quicktime",
  "video/webm",
  "video/x-msvideo",
  // Archives
  "application/java-archive",
  "application/vnd.apple.installer+xml",
  "application/x-7z-compressed",
  "application/x-apple-diskimage",
  "application/x-bzip",
  "application/x-bzip2",
  "application/x-gzip",
  "application/x-java-archive",
  "application/x-rar-compressed",
  "application/x-tar",
  "application/x-zip",
  "application/zip",
  // Serialized data
  "application/x-protobuf"
]);
function isBinaryContentType(contentType) {
  if (!contentType)
    return false;
  const value = contentType.split(";")[0];
  return commonBinaryMimeTypes.has(value);
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
init_stream();
init_logger();

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/i18n/accept-header.js
function parse(raw, preferences, options) {
  const lowers = /* @__PURE__ */ new Map();
  const header = raw.replace(/[ \t]/g, "");
  if (preferences) {
    let pos = 0;
    for (const preference of preferences) {
      const lower = preference.toLowerCase();
      lowers.set(lower, { orig: preference, pos: pos++ });
      if (options.prefixMatch) {
        const parts2 = lower.split("-");
        while (parts2.pop(), parts2.length > 0) {
          const joined = parts2.join("-");
          if (!lowers.has(joined)) {
            lowers.set(joined, { orig: preference, pos: pos++ });
          }
        }
      }
    }
  }
  const parts = header.split(",");
  const selections = [];
  const map = /* @__PURE__ */ new Set();
  for (let i = 0; i < parts.length; ++i) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const params = part.split(";");
    if (params.length > 2) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const token = params[0].toLowerCase();
    if (!token) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const selection = { token, pos: i, q: 1 };
    if (preferences && lowers.has(token)) {
      selection.pref = lowers.get(token).pos;
    }
    map.add(selection.token);
    if (params.length === 2) {
      const q = params[1];
      const [key, value] = q.split("=");
      if (!value || key !== "q" && key !== "Q") {
        throw new Error(`Invalid ${options.type} header`);
      }
      const score = Number.parseFloat(value);
      if (score === 0) {
        continue;
      }
      if (Number.isFinite(score) && score <= 1 && score >= 1e-3) {
        selection.q = score;
      }
    }
    selections.push(selection);
  }
  selections.sort((a, b) => {
    if (b.q !== a.q) {
      return b.q - a.q;
    }
    if (b.pref !== a.pref) {
      if (a.pref === void 0) {
        return 1;
      }
      if (b.pref === void 0) {
        return -1;
      }
      return a.pref - b.pref;
    }
    return a.pos - b.pos;
  });
  const values = selections.map((selection) => selection.token);
  if (!preferences || !preferences.length) {
    return values;
  }
  const preferred = [];
  for (const selection of values) {
    if (selection === "*") {
      for (const [preference, value] of lowers) {
        if (!map.has(preference)) {
          preferred.push(value.orig);
        }
      }
    } else {
      const lower = selection.toLowerCase();
      if (lowers.has(lower)) {
        preferred.push(lowers.get(lower).orig);
      }
    }
  }
  return preferred;
}
function acceptLanguage(header = "", preferences) {
  return parse(header, preferences, {
    type: "accept-language",
    prefixMatch: true
  })[0] || void 0;
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
function isLocalizedPath(path3) {
  return NextConfig.i18n?.locales.includes(path3.split("/")[1].toLowerCase()) ?? false;
}
function getLocaleFromCookie(cookies) {
  const i18n = NextConfig.i18n;
  const nextLocale = cookies.NEXT_LOCALE?.toLowerCase();
  return nextLocale ? i18n?.locales.find((locale) => nextLocale === locale.toLowerCase()) : void 0;
}
function detectDomainLocale({ hostname, detectedLocale }) {
  const i18n = NextConfig.i18n;
  const domains = i18n?.domains;
  if (!domains) {
    return;
  }
  const lowercasedLocale = detectedLocale?.toLowerCase();
  for (const domain of domains) {
    const domainHostname = domain.domain.split(":", 1)[0].toLowerCase();
    if (hostname === domainHostname || lowercasedLocale === domain.defaultLocale.toLowerCase() || domain.locales?.some((locale) => lowercasedLocale === locale.toLowerCase())) {
      return domain;
    }
  }
}
function detectLocale(internalEvent, i18n) {
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  if (i18n.localeDetection === false) {
    return domainLocale?.defaultLocale ?? i18n.defaultLocale;
  }
  const cookiesLocale = getLocaleFromCookie(internalEvent.cookies);
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  debug({
    cookiesLocale,
    preferredLocale,
    defaultLocale: i18n.defaultLocale,
    domainLocale
  });
  return domainLocale?.defaultLocale ?? cookiesLocale ?? preferredLocale ?? i18n.defaultLocale;
}
function localizePath(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n) {
    return internalEvent.rawPath;
  }
  if (isLocalizedPath(internalEvent.rawPath)) {
    return internalEvent.rawPath;
  }
  const detectedLocale = detectLocale(internalEvent, i18n);
  return `/${detectedLocale}${internalEvent.rawPath}`;
}
function handleLocaleRedirect(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n || i18n.localeDetection === false || internalEvent.rawPath !== "/") {
    return false;
  }
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  const detectedLocale = detectLocale(internalEvent, i18n);
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  const preferredDomain = detectDomainLocale({
    detectedLocale: preferredLocale
  });
  if (domainLocale && preferredDomain) {
    const isPDomain = preferredDomain.domain === domainLocale.domain;
    const isPLocale = preferredDomain.defaultLocale === preferredLocale;
    if (!isPDomain || !isPLocale) {
      const scheme = `http${preferredDomain.http ? "" : "s"}`;
      const rlocale = isPLocale ? "" : preferredLocale;
      return {
        type: "core",
        statusCode: 307,
        headers: {
          Location: `${scheme}://${preferredDomain.domain}/${rlocale}`
        },
        body: emptyReadableStream(),
        isBase64Encoded: false
      };
    }
  }
  const defaultLocale = domainLocale?.defaultLocale ?? i18n.defaultLocale;
  if (detectedLocale.toLowerCase() !== defaultLocale.toLowerCase()) {
    const nextUrl = constructNextUrl(internalEvent.url, `/${detectedLocale}${NextConfig.trailingSlash ? "/" : ""}`);
    const queryString = convertToQueryString(internalEvent.query);
    return {
      type: "core",
      statusCode: 307,
      headers: {
        Location: `${nextUrl}${queryString}`
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/queue.js
function generateShardId(rawPath, maxConcurrency, prefix) {
  let a = cyrb128(rawPath);
  let t = a += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  const randomFloat = ((t ^ t >>> 14) >>> 0) / 4294967296;
  const randomInt = Math.floor(randomFloat * maxConcurrency);
  return `${prefix}-${randomInt}`;
}
function generateMessageGroupId(rawPath) {
  const maxConcurrency = Number.parseInt(process.env.MAX_REVALIDATE_CONCURRENCY ?? "10");
  return generateShardId(rawPath, maxConcurrency, "revalidate");
}
function cyrb128(str) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ h1 >>> 18, 597399067);
  h2 = Math.imul(h4 ^ h2 >>> 22, 2869860233);
  h3 = Math.imul(h1 ^ h3 >>> 17, 951274213);
  h4 = Math.imul(h2 ^ h4 >>> 19, 2716044179);
  h1 ^= h2 ^ h3 ^ h4, h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return h1 >>> 0;
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/util.js
function isExternal(url, host) {
  if (!url)
    return false;
  const pattern = /^https?:\/\//;
  if (!pattern.test(url))
    return false;
  if (host) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.host !== host;
    } catch {
      return !url.includes(host);
    }
  }
  return true;
}
function convertFromQueryString(query) {
  if (query === "")
    return {};
  const queryParts = query.split("&");
  return getQueryFromIterator(queryParts.map((p) => {
    const [key, value] = p.split("=");
    return [key, value];
  }));
}
function getUrlParts(url, isExternal2) {
  if (!isExternal2) {
    const regex2 = /\/([^?]*)\??(.*)/;
    const match3 = url.match(regex2);
    return {
      hostname: "",
      pathname: match3?.[1] ? `/${match3[1]}` : url,
      protocol: "",
      queryString: match3?.[2] ?? ""
    };
  }
  const regex = /^(https?:)\/\/?([^\/\s]+)(\/[^?]*)?(\?.*)?/;
  const match2 = url.match(regex);
  if (!match2) {
    throw new Error(`Invalid external URL: ${url}`);
  }
  return {
    protocol: match2[1] ?? "https:",
    hostname: match2[2],
    pathname: match2[3] ?? "",
    queryString: match2[4]?.slice(1) ?? ""
  };
}
function constructNextUrl(baseUrl, path3) {
  const nextBasePath = NextConfig.basePath ?? "";
  const url = new URL(`${nextBasePath}${path3}`, baseUrl);
  return url.href;
}
function convertToQueryString(query) {
  const queryStrings = [];
  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => queryStrings.push(`${key}=${entry}`));
    } else {
      queryStrings.push(`${key}=${value}`);
    }
  });
  return queryStrings.length > 0 ? `?${queryStrings.join("&")}` : "";
}
function getMiddlewareMatch(middlewareManifest2, functionsManifest) {
  if (functionsManifest?.functions?.["/_middleware"]) {
    return functionsManifest.functions["/_middleware"].matchers?.map(({ regexp }) => new RegExp(regexp)) ?? [/.*/];
  }
  const rootMiddleware = middlewareManifest2.middleware["/"];
  if (!rootMiddleware?.matchers)
    return [];
  return rootMiddleware.matchers.map(({ regexp }) => new RegExp(regexp));
}
function escapeRegex(str, { isPath } = {}) {
  const result = str.replaceAll("(.)", "_\xB51_").replaceAll("(..)", "_\xB52_").replaceAll("(...)", "_\xB53_");
  return isPath ? result : result.replaceAll("+", "_\xB54_");
}
function unescapeRegex(str) {
  return str.replaceAll("_\xB51_", "(.)").replaceAll("_\xB52_", "(..)").replaceAll("_\xB53_", "(...)").replaceAll("_\xB54_", "+");
}
function convertBodyToReadableStream(method, body) {
  if (method === "GET" || method === "HEAD")
    return void 0;
  if (!body)
    return void 0;
  return new ReadableStream3({
    start(controller) {
      controller.enqueue(body);
      controller.close();
    }
  });
}
var CommonHeaders;
(function(CommonHeaders2) {
  CommonHeaders2["CACHE_CONTROL"] = "cache-control";
  CommonHeaders2["NEXT_CACHE"] = "x-nextjs-cache";
})(CommonHeaders || (CommonHeaders = {}));
function normalizeLocationHeader(location2, baseUrl, encodeQuery = false) {
  if (!URL.canParse(location2)) {
    return location2;
  }
  const locationURL = new URL(location2);
  const origin = new URL(baseUrl).origin;
  let search = locationURL.search;
  if (encodeQuery && search) {
    search = `?${stringifyQs(parseQs(search.slice(1)))}`;
  }
  const href = `${locationURL.origin}${locationURL.pathname}${search}${locationURL.hash}`;
  if (locationURL.origin === origin) {
    return href.slice(origin.length);
  }
  return href;
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routingHandler.js
init_logger();

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
import { createHash } from "node:crypto";
init_stream();

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/cache.js
init_logger();
async function hasBeenRevalidated(key, tags, cacheEntry) {
  if (globalThis.openNextConfig.dangerous?.disableTagCache) {
    return false;
  }
  const value = cacheEntry.value;
  if (!value) {
    return true;
  }
  if ("type" in cacheEntry && cacheEntry.type === "page") {
    return false;
  }
  const lastModified = cacheEntry.lastModified ?? Date.now();
  if (globalThis.tagCache.mode === "nextMode") {
    return tags.length === 0 ? false : await globalThis.tagCache.hasBeenRevalidated(tags, lastModified);
  }
  const _lastModified = await globalThis.tagCache.getLastModified(key, lastModified);
  return _lastModified === -1;
}
function getTagsFromValue(value) {
  if (!value) {
    return [];
  }
  try {
    const cacheTags = value.meta?.headers?.["x-next-cache-tags"]?.split(",") ?? [];
    delete value.meta?.headers?.["x-next-cache-tags"];
    return cacheTags;
  } catch (e) {
    return [];
  }
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
init_logger();
var CACHE_ONE_YEAR = 60 * 60 * 24 * 365;
var CACHE_ONE_MONTH = 60 * 60 * 24 * 30;
var VARY_HEADER = "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Next-Url";
var NEXT_SEGMENT_PREFETCH_HEADER = "next-router-segment-prefetch";
var NEXT_PRERENDER_HEADER = "x-nextjs-prerender";
var NEXT_POSTPONED_HEADER = "x-nextjs-postponed";
async function computeCacheControl(path3, body, host, revalidate, lastModified) {
  let finalRevalidate = CACHE_ONE_YEAR;
  const existingRoute = Object.entries(PrerenderManifest?.routes ?? {}).find((p) => p[0] === path3)?.[1];
  if (revalidate === void 0 && existingRoute) {
    finalRevalidate = existingRoute.initialRevalidateSeconds === false ? CACHE_ONE_YEAR : existingRoute.initialRevalidateSeconds;
  } else if (revalidate !== void 0) {
    finalRevalidate = revalidate === false ? CACHE_ONE_YEAR : revalidate;
  }
  const age = Math.round((Date.now() - (lastModified ?? 0)) / 1e3);
  const hash = (str) => createHash("md5").update(str).digest("hex");
  const etag = hash(body);
  if (revalidate === 0) {
    return {
      "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "x-opennext-cache": "ERROR",
      etag
    };
  }
  if (finalRevalidate !== CACHE_ONE_YEAR) {
    const sMaxAge = Math.max(finalRevalidate - age, 1);
    debug("sMaxAge", {
      finalRevalidate,
      age,
      lastModified,
      revalidate
    });
    const isStale = sMaxAge === 1;
    if (isStale) {
      let url = NextConfig.trailingSlash ? `${path3}/` : path3;
      if (NextConfig.basePath) {
        url = `${NextConfig.basePath}${url}`;
      }
      await globalThis.queue.send({
        MessageBody: {
          host,
          url,
          eTag: etag,
          lastModified: lastModified ?? Date.now()
        },
        MessageDeduplicationId: hash(`${path3}-${lastModified}-${etag}`),
        MessageGroupId: generateMessageGroupId(path3)
      });
    }
    return {
      "cache-control": `s-maxage=${sMaxAge}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
      "x-opennext-cache": isStale ? "STALE" : "HIT",
      etag
    };
  }
  return {
    "cache-control": `s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
    "x-opennext-cache": "HIT",
    etag
  };
}
function getBodyForAppRouter(event, cachedValue) {
  if (cachedValue.type !== "app") {
    throw new Error("getBodyForAppRouter called with non-app cache value");
  }
  try {
    const segmentHeader = `${event.headers[NEXT_SEGMENT_PREFETCH_HEADER]}`;
    const isSegmentResponse = Boolean(segmentHeader) && segmentHeader in (cachedValue.segmentData || {}) && !NextConfig.experimental?.prefetchInlining;
    const body = isSegmentResponse ? cachedValue.segmentData[segmentHeader] : cachedValue.rsc;
    return {
      body,
      additionalHeaders: isSegmentResponse ? { [NEXT_PRERENDER_HEADER]: "1", [NEXT_POSTPONED_HEADER]: "2" } : {}
    };
  } catch (e) {
    error("Error while getting body for app router from cache:", e);
    return { body: cachedValue.rsc, additionalHeaders: {} };
  }
}
async function generateResult(event, localizedPath, cachedValue, lastModified) {
  debug("Returning result from experimental cache");
  let body = "";
  let type = "application/octet-stream";
  let isDataRequest = false;
  let additionalHeaders = {};
  if (cachedValue.type === "app") {
    isDataRequest = Boolean(event.headers.rsc);
    if (isDataRequest) {
      const { body: appRouterBody, additionalHeaders: appHeaders } = getBodyForAppRouter(event, cachedValue);
      body = appRouterBody;
      additionalHeaders = appHeaders;
    } else {
      body = cachedValue.html;
    }
    type = isDataRequest ? "text/x-component" : "text/html; charset=utf-8";
  } else if (cachedValue.type === "page") {
    isDataRequest = Boolean(event.query.__nextDataReq);
    body = isDataRequest ? JSON.stringify(cachedValue.json) : cachedValue.html;
    type = isDataRequest ? "application/json" : "text/html; charset=utf-8";
  } else {
    throw new Error("generateResult called with unsupported cache value type, only 'app' and 'page' are supported");
  }
  const cacheControl = await computeCacheControl(localizedPath, body, event.headers.host, cachedValue.revalidate, lastModified);
  return {
    type: "core",
    // Sometimes other status codes can be cached, like 404. For these cases, we should return the correct status code
    // Also set the status code to the rewriteStatusCode if defined
    // This can happen in handleMiddleware in routingHandler.
    // `NextResponse.rewrite(url, { status: xxx})
    // The rewrite status code should take precedence over the cached one
    statusCode: event.rewriteStatusCode ?? cachedValue.meta?.status ?? 200,
    body: toReadableStream(body, false),
    isBase64Encoded: false,
    headers: {
      ...cacheControl,
      "content-type": type,
      ...cachedValue.meta?.headers,
      vary: VARY_HEADER,
      ...additionalHeaders
    }
  };
}
function escapePathDelimiters(segment, escapeEncoded) {
  return segment.replace(new RegExp(`([/#?]${escapeEncoded ? "|%(2f|23|3f|5c)" : ""})`, "gi"), (char) => encodeURIComponent(char));
}
function decodePathParams(pathname) {
  return pathname.split("/").map((segment) => {
    try {
      return escapePathDelimiters(decodeURIComponent(segment), true);
    } catch (e) {
      return segment;
    }
  }).join("/");
}
async function cacheInterceptor(event) {
  if (Boolean(event.headers["next-action"]) || Boolean(event.headers["x-prerender-revalidate"]))
    return event;
  const cookies = event.headers.cookie || "";
  const hasPreviewData = cookies.includes("__prerender_bypass") || cookies.includes("__next_preview_data");
  if (hasPreviewData) {
    debug("Preview mode detected, passing through to handler");
    return event;
  }
  let localizedPath = localizePath(event);
  if (NextConfig.basePath) {
    localizedPath = localizedPath.replace(NextConfig.basePath, "");
  }
  localizedPath = localizedPath.replace(/\/$/, "");
  localizedPath = decodePathParams(localizedPath);
  debug("Checking cache for", localizedPath, PrerenderManifest);
  const isISR = Object.keys(PrerenderManifest?.routes ?? {}).includes(localizedPath ?? "/") || Object.values(PrerenderManifest?.dynamicRoutes ?? {}).some((dr) => new RegExp(dr.routeRegex).test(localizedPath));
  debug("isISR", isISR);
  if (isISR) {
    try {
      const cachedData = await globalThis.incrementalCache.get(localizedPath ?? "/index");
      debug("cached data in interceptor", cachedData);
      if (!cachedData?.value) {
        return event;
      }
      if (cachedData.value?.type === "app" || cachedData.value?.type === "route") {
        const tags = getTagsFromValue(cachedData.value);
        const _hasBeenRevalidated = cachedData.shouldBypassTagCache ? false : await hasBeenRevalidated(localizedPath, tags, cachedData);
        if (_hasBeenRevalidated) {
          return event;
        }
      }
      const host = event.headers.host;
      switch (cachedData?.value?.type) {
        case "app":
        case "page":
          return generateResult(event, localizedPath, cachedData.value, cachedData.lastModified);
        case "redirect": {
          const cacheControl = await computeCacheControl(localizedPath, "", host, cachedData.value.revalidate, cachedData.lastModified);
          return {
            type: "core",
            statusCode: cachedData.value.meta?.status ?? 307,
            body: emptyReadableStream(),
            headers: {
              ...cachedData.value.meta?.headers ?? {},
              ...cacheControl
            },
            isBase64Encoded: false
          };
        }
        case "route": {
          const cacheControl = await computeCacheControl(localizedPath, cachedData.value.body, host, cachedData.value.revalidate, cachedData.lastModified);
          const isBinary = isBinaryContentType(String(cachedData.value.meta?.headers?.["content-type"]));
          return {
            type: "core",
            statusCode: event.rewriteStatusCode ?? cachedData.value.meta?.status ?? 200,
            body: toReadableStream(cachedData.value.body, isBinary),
            headers: {
              ...cacheControl,
              ...cachedData.value.meta?.headers,
              vary: VARY_HEADER
            },
            isBase64Encoded: isBinary
          };
        }
        default:
          return event;
      }
    } catch (e) {
      debug("Error while fetching cache", e);
      return event;
    }
  }
  return event;
}

// node_modules/.pnpm/path-to-regexp@6.3.0/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path3 = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path3 += prefix;
        prefix = "";
      }
      if (path3) {
        result.push(path3);
        path3 = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path3 += value;
      continue;
    }
    if (path3) {
      result.push(path3);
      path3 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path3 = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path3 += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path3 += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path3 += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path3;
  };
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path3 = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path: path3, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path3, keys) {
  if (!keys)
    return path3;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path3.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path3.source);
  }
  return path3;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path3) {
    return pathToRegexp(path3, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path3, keys, options) {
  return tokensToRegexp(parse2(path3, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path3, keys, options) {
  if (path3 instanceof RegExp)
    return regexpToRegexp(path3, keys);
  if (Array.isArray(path3))
    return arrayToRegexp(path3, keys, options);
  return stringToRegexp(path3, keys, options);
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/utils/normalize-path.js
import path2 from "node:path";
function normalizeRepeatedSlashes(url) {
  const urlNoQuery = url.host + url.pathname;
  return `${url.protocol}//${urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/")}${url.search}`;
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/matcher.js
init_stream();
init_logger();

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/routeMatcher.js
var optionalLocalePrefixRegex = `^/(?:${RoutesManifest.locales.map((locale) => `${locale}/?`).join("|")})?`;
var optionalBasepathPrefixRegex = RoutesManifest.basePath ? `^${RoutesManifest.basePath}/?` : "^/";
var optionalPrefix = optionalLocalePrefixRegex.replace("^/", optionalBasepathPrefixRegex);
function routeMatcher(routeDefinitions) {
  const regexp = routeDefinitions.map((route) => ({
    page: route.page,
    regexp: new RegExp(route.regex.replace("^/", optionalPrefix))
  }));
  const appPathsSet = /* @__PURE__ */ new Set();
  const routePathsSet = /* @__PURE__ */ new Set();
  for (const [k, v] of Object.entries(AppPathRoutesManifest)) {
    if (k.endsWith("page")) {
      appPathsSet.add(v);
    } else if (k.endsWith("route")) {
      routePathsSet.add(v);
    }
  }
  return function matchRoute(path3) {
    const foundRoutes = regexp.filter((route) => route.regexp.test(path3));
    return foundRoutes.map((foundRoute) => {
      let routeType = "page";
      if (appPathsSet.has(foundRoute.page)) {
        routeType = "app";
      } else if (routePathsSet.has(foundRoute.page)) {
        routeType = "route";
      }
      return {
        route: foundRoute.page,
        type: routeType
      };
    });
  };
}
var staticRouteMatcher = routeMatcher([
  ...RoutesManifest.routes.static,
  ...getStaticAPIRoutes()
]);
var dynamicRouteMatcher = routeMatcher(RoutesManifest.routes.dynamic);
function getStaticAPIRoutes() {
  const createRouteDefinition = (route) => ({
    page: route,
    regex: `^${route}(?:/)?$`
  });
  const dynamicRoutePages = new Set(RoutesManifest.routes.dynamic.map(({ page }) => page));
  const pagesStaticAPIRoutes = Object.keys(PagesManifest).filter((route) => route.startsWith("/api/") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  const appPathsStaticAPIRoutes = Object.values(AppPathRoutesManifest).filter((route) => (route.startsWith("/api/") || route === "/api") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  return [...pagesStaticAPIRoutes, ...appPathsStaticAPIRoutes];
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/matcher.js
var routeHasMatcher = (headers, cookies, query) => (redirect) => {
  switch (redirect.type) {
    case "header":
      return !!headers?.[redirect.key.toLowerCase()] && new RegExp(redirect.value ?? "").test(headers[redirect.key.toLowerCase()] ?? "");
    case "cookie":
      return !!cookies?.[redirect.key] && new RegExp(redirect.value ?? "").test(cookies[redirect.key] ?? "");
    case "query":
      return query[redirect.key] && Array.isArray(redirect.value) ? redirect.value.reduce((prev, current) => prev || new RegExp(current).test(query[redirect.key]), false) : new RegExp(redirect.value ?? "").test(query[redirect.key] ?? "");
    case "host":
      return headers?.host !== "" && new RegExp(redirect.value ?? "").test(headers.host);
    default:
      return false;
  }
};
function checkHas(matcher, has, inverted = false) {
  return has ? has.reduce((acc, cur) => {
    if (acc === false)
      return false;
    return inverted ? !matcher(cur) : matcher(cur);
  }, true) : true;
}
var getParamsFromSource = (source) => (value) => {
  debug("value", value);
  const _match = source(value);
  return _match ? _match.params : {};
};
var computeParamHas = (headers, cookies, query) => (has) => {
  if (!has.value)
    return {};
  const matcher = new RegExp(`^${has.value}$`);
  const fromSource = (value) => {
    const matches = value.match(matcher);
    return matches?.groups ?? {};
  };
  switch (has.type) {
    case "header":
      return fromSource(headers[has.key.toLowerCase()] ?? "");
    case "cookie":
      return fromSource(cookies[has.key] ?? "");
    case "query":
      return Array.isArray(query[has.key]) ? fromSource(query[has.key].join(",")) : fromSource(query[has.key] ?? "");
    case "host":
      return fromSource(headers.host ?? "");
  }
};
function convertMatch(match2, toDestination, destination) {
  if (!match2) {
    return destination;
  }
  const { params } = match2;
  const isUsingParams = Object.keys(params).length > 0;
  return isUsingParams ? toDestination(params) : destination;
}
function getNextConfigHeaders(event, configHeaders) {
  if (!configHeaders) {
    return {};
  }
  const matcher = routeHasMatcher(event.headers, event.cookies, event.query);
  const requestHeaders = {};
  const localizedRawPath = localizePath(event);
  for (const { headers, has, missing, regex, source, locale } of configHeaders) {
    const path3 = locale === false ? event.rawPath : localizedRawPath;
    if (new RegExp(regex).test(path3) && checkHas(matcher, has) && checkHas(matcher, missing, true)) {
      const fromSource = match(source);
      const _match = fromSource(path3);
      headers.forEach((h) => {
        try {
          const key = convertMatch(_match, compile(h.key), h.key);
          const value = convertMatch(_match, compile(h.value), h.value);
          requestHeaders[key] = value;
        } catch {
          debug(`Error matching header ${h.key} with value ${h.value}`);
          requestHeaders[h.key] = h.value;
        }
      });
    }
  }
  return requestHeaders;
}
function handleRewrites(event, rewrites) {
  const { rawPath, headers, query, cookies, url } = event;
  const localizedRawPath = localizePath(event);
  const matcher = routeHasMatcher(headers, cookies, query);
  const computeHas = computeParamHas(headers, cookies, query);
  const rewrite = rewrites.find((route) => {
    const path3 = route.locale === false ? rawPath : localizedRawPath;
    return new RegExp(route.regex).test(path3) && checkHas(matcher, route.has) && checkHas(matcher, route.missing, true);
  });
  let finalQuery = query;
  let rewrittenUrl = url;
  const isExternalRewrite = isExternal(rewrite?.destination);
  debug("isExternalRewrite", isExternalRewrite);
  if (rewrite) {
    const { pathname, protocol, hostname, queryString } = getUrlParts(rewrite.destination, isExternalRewrite);
    const pathToUse = rewrite.locale === false ? rawPath : localizedRawPath;
    debug("urlParts", { pathname, protocol, hostname, queryString });
    const toDestinationPath = compile(escapeRegex(pathname, { isPath: true }));
    const toDestinationHost = compile(escapeRegex(hostname));
    const toDestinationQuery = compile(escapeRegex(queryString));
    const params = {
      // params for the source
      ...getParamsFromSource(match(escapeRegex(rewrite.source, { isPath: true })))(pathToUse),
      // params for the has
      ...rewrite.has?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {}),
      // params for the missing
      ...rewrite.missing?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {})
    };
    const isUsingParams = Object.keys(params).length > 0;
    let rewrittenQuery = queryString;
    let rewrittenHost = hostname;
    let rewrittenPath = pathname;
    if (isUsingParams) {
      rewrittenPath = unescapeRegex(toDestinationPath(params));
      rewrittenHost = unescapeRegex(toDestinationHost(params));
      rewrittenQuery = unescapeRegex(toDestinationQuery(params));
    }
    if (NextConfig.i18n && !isExternalRewrite) {
      const strippedPathLocale = rewrittenPath.replace(new RegExp(`^/(${NextConfig.i18n.locales.join("|")})`), "");
      if (strippedPathLocale.startsWith("/api/")) {
        rewrittenPath = strippedPathLocale;
      }
    }
    rewrittenUrl = isExternalRewrite ? `${protocol}//${rewrittenHost}${rewrittenPath}` : new URL(rewrittenPath, event.url).href;
    finalQuery = {
      ...query,
      ...convertFromQueryString(rewrittenQuery)
    };
    rewrittenUrl += convertToQueryString(finalQuery);
    debug("rewrittenUrl", { rewrittenUrl, finalQuery, isUsingParams });
  }
  return {
    internalEvent: {
      ...event,
      query: finalQuery,
      rawPath: new URL(rewrittenUrl).pathname,
      url: rewrittenUrl
    },
    __rewrite: rewrite,
    isExternalRewrite
  };
}
function handleRepeatedSlashRedirect(event) {
  if (event.rawPath.match(/(\\|\/\/)/)) {
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: normalizeRepeatedSlashes(new URL(event.url))
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}
function handleTrailingSlashRedirect(event) {
  const url = new URL(event.rawPath, "http://localhost");
  if (
    // Someone is trying to redirect to a different origin, let's not do that
    url.host !== "localhost" || NextConfig.skipTrailingSlashRedirect || // We should not apply trailing slash redirect to API routes
    event.rawPath.startsWith("/api/")
  ) {
    return false;
  }
  const emptyBody = emptyReadableStream();
  if (NextConfig.trailingSlash && !event.headers["x-nextjs-data"] && !event.rawPath.endsWith("/") && !event.rawPath.match(/[\w-]+\.[\w]+$/g)) {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0]}/${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  if (!NextConfig.trailingSlash && event.rawPath.endsWith("/") && event.rawPath !== "/") {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0].replace(/\/$/, "")}${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  return false;
}
function handleRedirects(event, redirects) {
  const repeatedSlashRedirect = handleRepeatedSlashRedirect(event);
  if (repeatedSlashRedirect)
    return repeatedSlashRedirect;
  const trailingSlashRedirect = handleTrailingSlashRedirect(event);
  if (trailingSlashRedirect)
    return trailingSlashRedirect;
  const localeRedirect = handleLocaleRedirect(event);
  if (localeRedirect)
    return localeRedirect;
  const { internalEvent, __rewrite } = handleRewrites(event, redirects.filter((r) => !r.internal));
  if (__rewrite && !__rewrite.internal) {
    return {
      type: event.type,
      statusCode: __rewrite.statusCode ?? 308,
      headers: {
        Location: internalEvent.url
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
}
function fixDataPage(internalEvent, buildId) {
  const { rawPath, query } = internalEvent;
  const basePath = NextConfig.basePath ?? "";
  const dataPattern = `${basePath}/_next/data/${buildId}`;
  if (rawPath.startsWith("/_next/data") && !rawPath.startsWith(dataPattern)) {
    return {
      type: internalEvent.type,
      statusCode: 404,
      body: toReadableStream("{}"),
      headers: {
        "Content-Type": "application/json"
      },
      isBase64Encoded: false
    };
  }
  if (rawPath.startsWith(dataPattern) && rawPath.endsWith(".json")) {
    const newPath = `${basePath}${rawPath.slice(dataPattern.length, -".json".length).replace(/^\/index$/, "/")}`;
    query.__nextDataReq = "1";
    return {
      ...internalEvent,
      rawPath: newPath,
      query,
      url: new URL(`${newPath}${convertToQueryString(query)}`, internalEvent.url).href
    };
  }
  return internalEvent;
}
function handleFallbackFalse(internalEvent, prerenderManifest) {
  const { rawPath } = internalEvent;
  const { dynamicRoutes = {}, routes = {} } = prerenderManifest ?? {};
  const prerenderedFallbackRoutes = Object.entries(dynamicRoutes).filter(([, { fallback }]) => fallback === false);
  const routeFallback = prerenderedFallbackRoutes.some(([, { routeRegex }]) => {
    const routeRegexExp = new RegExp(routeRegex);
    return routeRegexExp.test(rawPath);
  });
  const locales = NextConfig.i18n?.locales;
  const routesAlreadyHaveLocale = locales?.includes(rawPath.split("/")[1]) || // If we don't use locales, we don't need to add the default locale
  locales === void 0;
  let localizedPath = routesAlreadyHaveLocale ? rawPath : `/${NextConfig.i18n?.defaultLocale}${rawPath}`;
  if (
    // Not if localizedPath is "/" tho, because that would not make it find `isPregenerated` below since it would be try to match an empty string.
    localizedPath !== "/" && NextConfig.trailingSlash && localizedPath.endsWith("/")
  ) {
    localizedPath = localizedPath.slice(0, -1);
  }
  const matchedStaticRoute = staticRouteMatcher(localizedPath);
  const prerenderedFallbackRoutesName = prerenderedFallbackRoutes.map(([name]) => name);
  const matchedDynamicRoute = dynamicRouteMatcher(localizedPath).filter(({ route }) => !prerenderedFallbackRoutesName.includes(route));
  const isPregenerated = Object.keys(routes).includes(localizedPath);
  if (routeFallback && !isPregenerated && matchedStaticRoute.length === 0 && matchedDynamicRoute.length === 0) {
    return {
      event: {
        ...internalEvent,
        rawPath: "/404",
        url: constructNextUrl(internalEvent.url, "/404"),
        headers: {
          ...internalEvent.headers,
          "x-invoke-status": "404"
        }
      },
      isISR: false
    };
  }
  return {
    event: internalEvent,
    isISR: routeFallback || isPregenerated
  };
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routing/middleware.js
init_stream();
init_utils();
var middlewareManifest = MiddlewareManifest;
var functionsConfigManifest = FunctionsConfigManifest;
var middleMatch = getMiddlewareMatch(middlewareManifest, functionsConfigManifest);
var REDIRECTS = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function defaultMiddlewareLoader() {
  return Promise.resolve().then(() => (init_edgeFunctionHandler(), edgeFunctionHandler_exports));
}
async function handleMiddleware(internalEvent, initialSearch, middlewareLoader = defaultMiddlewareLoader) {
  const headers = internalEvent.headers;
  if (headers["x-isr"] && headers["x-prerender-revalidate"] === PrerenderManifest?.preview?.previewModeId)
    return internalEvent;
  const normalizedPath = localizePath(internalEvent);
  const hasMatch = middleMatch.some((r) => r.test(normalizedPath));
  if (!hasMatch)
    return internalEvent;
  const initialUrl = new URL(normalizedPath, internalEvent.url);
  initialUrl.search = initialSearch;
  const url = initialUrl.href;
  const middleware = await middlewareLoader();
  const result = await middleware.default({
    // `geo` is pre Next 15.
    geo: {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: decodeURIComponent(headers["x-open-next-city"]),
      country: headers["x-open-next-country"],
      region: headers["x-open-next-region"],
      latitude: headers["x-open-next-latitude"],
      longitude: headers["x-open-next-longitude"]
    },
    headers,
    method: internalEvent.method || "GET",
    nextConfig: {
      basePath: NextConfig.basePath,
      i18n: NextConfig.i18n,
      trailingSlash: NextConfig.trailingSlash
    },
    url,
    body: convertBodyToReadableStream(internalEvent.method, internalEvent.body)
  });
  const statusCode = result.status;
  const responseHeaders = result.headers;
  const reqHeaders = {};
  const resHeaders = {};
  const filteredHeaders = [
    "x-middleware-override-headers",
    "x-middleware-next",
    "x-middleware-rewrite",
    // We need to drop `content-encoding` because it will be decoded
    "content-encoding"
  ];
  const xMiddlewareKey = "x-middleware-request-";
  responseHeaders.forEach((value, key) => {
    if (key.startsWith(xMiddlewareKey)) {
      const k = key.substring(xMiddlewareKey.length);
      reqHeaders[k] = value;
    } else {
      if (filteredHeaders.includes(key.toLowerCase()))
        return;
      if (key.toLowerCase() === "set-cookie") {
        resHeaders[key] = resHeaders[key] ? [...resHeaders[key], value] : [value];
      } else if (REDIRECTS.has(statusCode) && key.toLowerCase() === "location") {
        resHeaders[key] = normalizeLocationHeader(value, internalEvent.url);
      } else {
        resHeaders[key] = value;
      }
    }
  });
  const rewriteUrl = responseHeaders.get("x-middleware-rewrite");
  let isExternalRewrite = false;
  let middlewareQuery = internalEvent.query;
  let newUrl = internalEvent.url;
  if (rewriteUrl) {
    newUrl = rewriteUrl;
    if (isExternal(newUrl, internalEvent.headers.host)) {
      isExternalRewrite = true;
    } else {
      const rewriteUrlObject = new URL(rewriteUrl);
      middlewareQuery = getQueryFromSearchParams(rewriteUrlObject.searchParams);
      if ("__nextDataReq" in internalEvent.query) {
        middlewareQuery.__nextDataReq = internalEvent.query.__nextDataReq;
      }
    }
  }
  if (!rewriteUrl && !responseHeaders.get("x-middleware-next")) {
    const body = result.body ?? emptyReadableStream();
    return {
      type: internalEvent.type,
      statusCode,
      headers: resHeaders,
      body,
      isBase64Encoded: false
    };
  }
  return {
    responseHeaders: resHeaders,
    url: newUrl,
    rawPath: new URL(newUrl).pathname,
    type: internalEvent.type,
    headers: { ...internalEvent.headers, ...reqHeaders },
    body: internalEvent.body,
    method: internalEvent.method,
    query: middlewareQuery,
    cookies: internalEvent.cookies,
    remoteAddress: internalEvent.remoteAddress,
    isExternalRewrite,
    rewriteStatusCode: rewriteUrl && !isExternalRewrite ? statusCode : void 0
  };
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/core/routingHandler.js
var MIDDLEWARE_HEADER_PREFIX = "x-middleware-response-";
var MIDDLEWARE_HEADER_PREFIX_LEN = MIDDLEWARE_HEADER_PREFIX.length;
var INTERNAL_HEADER_PREFIX = "x-opennext-";
var INTERNAL_HEADER_INITIAL_URL = `${INTERNAL_HEADER_PREFIX}initial-url`;
var INTERNAL_HEADER_LOCALE = `${INTERNAL_HEADER_PREFIX}locale`;
var INTERNAL_HEADER_RESOLVED_ROUTES = `${INTERNAL_HEADER_PREFIX}resolved-routes`;
var INTERNAL_HEADER_REWRITE_STATUS_CODE = `${INTERNAL_HEADER_PREFIX}rewrite-status-code`;
var INTERNAL_EVENT_REQUEST_ID = `${INTERNAL_HEADER_PREFIX}request-id`;
var geoHeaderToNextHeader = {
  "x-open-next-city": "x-vercel-ip-city",
  "x-open-next-country": "x-vercel-ip-country",
  "x-open-next-region": "x-vercel-ip-country-region",
  "x-open-next-latitude": "x-vercel-ip-latitude",
  "x-open-next-longitude": "x-vercel-ip-longitude"
};
function applyMiddlewareHeaders(eventOrResult, middlewareHeaders) {
  const isResult = isInternalResult(eventOrResult);
  const headers = eventOrResult.headers;
  const keyPrefix = isResult ? "" : MIDDLEWARE_HEADER_PREFIX;
  Object.entries(middlewareHeaders).forEach(([key, value]) => {
    if (value) {
      headers[keyPrefix + key] = Array.isArray(value) ? value.join(",") : value;
    }
  });
}
async function routingHandler(event, { assetResolver }) {
  try {
    for (const [openNextGeoName, nextGeoName] of Object.entries(geoHeaderToNextHeader)) {
      const value = event.headers[openNextGeoName];
      if (value) {
        event.headers[nextGeoName] = value;
      }
    }
    for (const key of Object.keys(event.headers)) {
      if (key.startsWith(INTERNAL_HEADER_PREFIX) || key.startsWith(MIDDLEWARE_HEADER_PREFIX)) {
        delete event.headers[key];
      }
    }
    let headers = getNextConfigHeaders(event, ConfigHeaders);
    let eventOrResult = fixDataPage(event, BuildId);
    if (isInternalResult(eventOrResult)) {
      return eventOrResult;
    }
    const redirect = handleRedirects(eventOrResult, RoutesManifest.redirects);
    if (redirect) {
      redirect.headers.Location = normalizeLocationHeader(redirect.headers.Location, event.url, true);
      debug("redirect", redirect);
      return redirect;
    }
    const middlewareEventOrResult = await handleMiddleware(
      eventOrResult,
      // We need to pass the initial search without any decoding
      // TODO: we'd need to refactor InternalEvent to include the initial querystring directly
      // Should be done in another PR because it is a breaking change
      new URL(event.url).search
    );
    if (isInternalResult(middlewareEventOrResult)) {
      return middlewareEventOrResult;
    }
    const middlewareHeadersPrioritized = globalThis.openNextConfig.dangerous?.middlewareHeadersOverrideNextConfigHeaders ?? false;
    if (middlewareHeadersPrioritized) {
      headers = {
        ...headers,
        ...middlewareEventOrResult.responseHeaders
      };
    } else {
      headers = {
        ...middlewareEventOrResult.responseHeaders,
        ...headers
      };
    }
    let isExternalRewrite = middlewareEventOrResult.isExternalRewrite ?? false;
    eventOrResult = middlewareEventOrResult;
    if (!isExternalRewrite) {
      const beforeRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.beforeFiles);
      eventOrResult = beforeRewrite.internalEvent;
      isExternalRewrite = beforeRewrite.isExternalRewrite;
      if (!isExternalRewrite) {
        const assetResult = await assetResolver?.maybeGetAssetResult?.(eventOrResult);
        if (assetResult) {
          applyMiddlewareHeaders(assetResult, headers);
          return assetResult;
        }
      }
    }
    const foundStaticRoute = staticRouteMatcher(eventOrResult.rawPath);
    const isStaticRoute = !isExternalRewrite && foundStaticRoute.length > 0;
    if (!(isStaticRoute || isExternalRewrite)) {
      const afterRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.afterFiles);
      eventOrResult = afterRewrite.internalEvent;
      isExternalRewrite = afterRewrite.isExternalRewrite;
    }
    let isISR = false;
    if (!isExternalRewrite) {
      const fallbackResult = handleFallbackFalse(eventOrResult, PrerenderManifest);
      eventOrResult = fallbackResult.event;
      isISR = fallbackResult.isISR;
    }
    const foundDynamicRoute = dynamicRouteMatcher(eventOrResult.rawPath);
    const isDynamicRoute = !isExternalRewrite && foundDynamicRoute.length > 0;
    if (!(isDynamicRoute || isStaticRoute || isExternalRewrite)) {
      const fallbackRewrites = handleRewrites(eventOrResult, RoutesManifest.rewrites.fallback);
      eventOrResult = fallbackRewrites.internalEvent;
      isExternalRewrite = fallbackRewrites.isExternalRewrite;
    }
    const isNextImageRoute = eventOrResult.rawPath.startsWith("/_next/image");
    const isRouteFoundBeforeAllRewrites = isStaticRoute || isDynamicRoute || isExternalRewrite;
    if (!(isRouteFoundBeforeAllRewrites || isNextImageRoute || // We need to check again once all rewrites have been applied
    staticRouteMatcher(eventOrResult.rawPath).length > 0 || dynamicRouteMatcher(eventOrResult.rawPath).length > 0)) {
      eventOrResult = {
        ...eventOrResult,
        rawPath: "/404",
        url: constructNextUrl(eventOrResult.url, "/404"),
        headers: {
          ...eventOrResult.headers,
          "x-middleware-response-cache-control": "private, no-cache, no-store, max-age=0, must-revalidate"
        }
      };
    }
    if (globalThis.openNextConfig.dangerous?.enableCacheInterception && !isInternalResult(eventOrResult)) {
      debug("Cache interception enabled");
      eventOrResult = await cacheInterceptor(eventOrResult);
      if (isInternalResult(eventOrResult)) {
        applyMiddlewareHeaders(eventOrResult, headers);
        return eventOrResult;
      }
    }
    applyMiddlewareHeaders(eventOrResult, headers);
    const resolvedRoutes = [
      ...foundStaticRoute,
      ...foundDynamicRoute
    ];
    debug("resolvedRoutes", resolvedRoutes);
    return {
      internalEvent: eventOrResult,
      isExternalRewrite,
      origin: false,
      isISR,
      resolvedRoutes,
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(eventOrResult, NextConfig.i18n) : void 0,
      rewriteStatusCode: middlewareEventOrResult.rewriteStatusCode
    };
  } catch (e) {
    error("Error in routingHandler", e);
    return {
      internalEvent: {
        type: "core",
        method: "GET",
        rawPath: "/500",
        url: constructNextUrl(event.url, "/500"),
        headers: {
          ...event.headers
        },
        query: event.query,
        cookies: event.cookies,
        remoteAddress: event.remoteAddress
      },
      isExternalRewrite: false,
      origin: false,
      isISR: false,
      resolvedRoutes: [],
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(event, NextConfig.i18n) : void 0
    };
  }
}
function isInternalResult(eventOrResult) {
  return eventOrResult != null && "statusCode" in eventOrResult;
}

// node_modules/.pnpm/@opennextjs+aws@3.10.1_next@16.2.2_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_/node_modules/@opennextjs/aws/dist/adapters/middleware.js
globalThis.internalFetch = fetch;
globalThis.__openNextAls = new AsyncLocalStorage();
var defaultHandler = async (internalEvent, options) => {
  const middlewareConfig = globalThis.openNextConfig.middleware;
  const originResolver = await resolveOriginResolver(middlewareConfig?.originResolver);
  const externalRequestProxy = await resolveProxyRequest(middlewareConfig?.override?.proxyExternalRequest);
  const assetResolver = await resolveAssetResolver(middlewareConfig?.assetResolver);
  const requestId = Math.random().toString(36);
  return runWithOpenNextRequestContext({
    isISRRevalidation: internalEvent.headers["x-isr"] === "1",
    waitUntil: options?.waitUntil,
    requestId
  }, async () => {
    const result = await routingHandler(internalEvent, { assetResolver });
    if ("internalEvent" in result) {
      debug("Middleware intercepted event", internalEvent);
      if (!result.isExternalRewrite) {
        const origin = await originResolver.resolve(result.internalEvent.rawPath);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_HEADER_INITIAL_URL]: internalEvent.url,
              [INTERNAL_HEADER_RESOLVED_ROUTES]: JSON.stringify(result.resolvedRoutes),
              [INTERNAL_EVENT_REQUEST_ID]: requestId,
              [INTERNAL_HEADER_REWRITE_STATUS_CODE]: String(result.rewriteStatusCode)
            }
          },
          isExternalRewrite: result.isExternalRewrite,
          origin,
          isISR: result.isISR,
          initialURL: result.initialURL,
          resolvedRoutes: result.resolvedRoutes
        };
      }
      try {
        return externalRequestProxy.proxy(result.internalEvent);
      } catch (e) {
        error("External request failed.", e);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_EVENT_REQUEST_ID]: requestId
            },
            rawPath: "/500",
            url: constructNextUrl(result.internalEvent.url, "/500"),
            method: "GET"
          },
          // On error we need to rewrite to the 500 page which is an internal rewrite
          isExternalRewrite: false,
          origin: false,
          isISR: result.isISR,
          initialURL: result.internalEvent.url,
          resolvedRoutes: [{ route: "/500", type: "page" }]
        };
      }
    }
    if (process.env.OPEN_NEXT_REQUEST_ID_HEADER || globalThis.openNextDebug) {
      result.headers[INTERNAL_EVENT_REQUEST_ID] = requestId;
    }
    debug("Middleware response", result);
    return result;
  });
};
var handler2 = await createGenericHandler({
  handler: defaultHandler,
  type: "middleware"
});
var middleware_default = {
  fetch: handler2
};
export {
  middleware_default as default,
  handler2 as handler
};
