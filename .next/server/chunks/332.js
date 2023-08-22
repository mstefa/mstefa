exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 9350:
/***/ (() => {



/***/ }),

/***/ 9476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "mstefa blog",
    description: "Matias Stefanutti personal Blog"
};
function BlogLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 7483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ getArticlesMetadata),
/* harmony export */   v: () => (/* binding */ getArticleBySlug)
/* harmony export */ });
/* harmony import */ var _infrastructure_file_managment_mdx_file_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3804);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1656);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8957);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_infrastructure_file_managment_mdx_file_repository__WEBPACK_IMPORTED_MODULE_0__]);
_infrastructure_file_managment_mdx_file_repository__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function getArticleBySlug(slug) {
    const serialized = await (0,_infrastructure_file_managment_mdx_file_repository__WEBPACK_IMPORTED_MODULE_0__/* .getArticleFromSlug */ .V)(slug);
    if (serialized === null) {
        return null;
    }
    const metadata = {
        slug,
        title: serialized.frontmatter.title,
        excerpt: serialized.frontmatter.excerpt,
        coverImage: serialized.frontmatter.cover_image,
        publishedAt: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(serialized.frontmatter.published_at).format("D MMMM YYYY"),
        readTime: reading_time__WEBPACK_IMPORTED_MODULE_2___default()(serialized.compiledSource).text
    };
    return {
        metadata,
        serialized
    };
}
async function getArticlesMetadata() {
    const slugs = (0,_infrastructure_file_managment_mdx_file_repository__WEBPACK_IMPORTED_MODULE_0__/* .getSlug */ .Q)();
    const readArticles = slugs.map((slug)=>{
        return getArticleBySlug(slug);
    });
    return Promise.all(readArticles).then((articles)=>articles.filter((article)=>article !== null).map((article)=>article.metadata).sort((a, b)=>{
            if (a.publishedAt > b.publishedAt) return 1;
            if (a.publishedAt < b.publishedAt) return -1;
            return 0;
        }).reverse());
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ getSlug),
/* harmony export */   V: () => (/* binding */ getArticleFromSlug)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4818);
/* harmony import */ var rehype_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5529);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__]);
next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

 //use promise version



const articlesRelativePath = "data/articles";
const articlesPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), articlesRelativePath);
function getSlug() {
    const paths = (0,glob__WEBPACK_IMPORTED_MODULE_2__/* .sync */ .Z_)(`${articlesPath}/*.mdx`);
    return paths.map((path)=>{
        // holds the paths to the directory of the article
        const pathContent = path.split("/");
        const fileName = pathContent[pathContent.length - 1];
        const [slug, _extension] = fileName.split(".");
        return slug;
    });
}
async function getArticleFromSlug(slug) {
    const articleDir = path__WEBPACK_IMPORTED_MODULE_0___default().join(articlesPath, `${slug}.mdx`);
    try {
        const raw = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(articleDir);
        const serialized = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_3__.serialize)(raw, {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehype_highlight__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                ]
            }
        });
        return serialized;
    } catch (e) {
        console.log(e);
        return null;
    }
} // // get the path that stores all the articles or blog post
 // export async function getAllArticles(): Promise<Array<Article>> {
 //   const articles = fs.readdirSync(path.join(process.cwd(), articlesRelativePath));
 //   return articles.reduce((allArticles: any, articleSlug) => {
 //     // get parsed data from mdx files in the "articles" dir
 //     const source = fs.readFileSync(
 //       path.join(process.cwd(), articlesRelativePath, articleSlug),
 //       "utf-8"
 //     );
 //     const { data } = matter(source);
 //     return [
 //       {
 //         ...data,
 //         slug: articleSlug.replace(".mdx", ""),
 //         readingTime: readingTime(source).text,
 //       },
 //       ...allArticles,
 //     ];
 //   }, []);
 // }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;