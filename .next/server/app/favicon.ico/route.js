"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fmstefanutti%2Fpersonalws%2Fmstefa%2Fsrc%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=.&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "export"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/Users/mstefanutti/personalws/mstefa/src/app/favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(769)));
module.exports = __webpack_exports__;

})();