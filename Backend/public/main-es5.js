function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acciones/acciones.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/acciones/acciones.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAccionesAccionesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown-container\">\r\n    <div (click)=\"toggle()\">\r\n        <i class=\"fas fa-circle\"></i>\r\n        <i class=\"fas fa-circle\"></i>\r\n        <i class=\"fas fa-circle\"></i>\r\n    </div>\r\n    <ul id=\"menu{{path}}\">\r\n        <li (click)=\"renombrar()\">Renombrar</li>\r\n        <li (click)=\"mover()\">Mover</li>\r\n        <li (click)=\"copiar()\">Copiar</li>\r\n        <li (click)=\"eliminar()\">Eliminar</li>\r\n        <li class=\"ulClose\" (click)=\"closeAll()\"><i (click)=\"closeAll()\" class=\"fas fa-times\"></i></li>\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>La pagina no existe</h3>\r\n<a [routerLink]=\"['/']\">Inicio</a>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ficheros/ficheros.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ficheros/ficheros.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFicherosFicherosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<upload *ngIf=\"exist\" [username]=\"username\" [path]=\"path\"></upload>\r\n\r\n<modal [pathAct]=\"path\"></modal>\r\n\r\n<div id=\"detailFile\" *ngIf=\"haveDetail\">\r\n    <div class=\"titleFile\">\r\n        <h4><i style=\"font-size: 16px;margin-left: 3px;\" class=\"fas fa-file-alt\"></i> {{FileDetail.name}}</h4>\r\n        <i (click)=\"closeDetail()\" class=\"fas fa-times\"></i>\r\n    </div>\r\n    <div class=\"detailFile\">\r\n        <div class=\"textFile\">\r\n            <p>Extension: {{FileDetail.ext}}</p>\r\n            <p>Peso: {{FileDetail.size}}</p>\r\n        </div>\r\n        <div class=\"dowload\">\r\n            <i (click)=\"download(FileDetail.path, FileDetail.name, FileDetail.ext)\" class=\"fas fa-download\"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"detailFile\" *ngIf=\"haveDetailImage\">\r\n    <div class=\"titleFile\">\r\n        <h4><i style=\"font-size: 16px;margin-left: 3px;\" class=\"fas fa-file-alt\"></i> {{ImageDetail.name}}</h4>\r\n        <i (click)=\"closeDetailImage()\" class=\"fas fa-times\"></i>\r\n    </div>\r\n    <div class=\"detailFile\">\r\n        <div class=\"textFile\">\r\n            <p>Extension: {{ImageDetail.ext}}</p>\r\n            <p>Peso: {{ImageDetail.size}}</p>\r\n        </div>\r\n        <div class=\"dowload\">\r\n            <a style=\"display: none;\" id=\"downloadImage\"></a>\r\n            <i (click)=\"downloadImage(ImageDetail.url, ImageDetail.name)\" class=\"fas fa-download\"></i>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"div-upload-2\">\r\n    <div id=\"nameuser\">\r\n        <h3>Ficheros</h3>\r\n    </div>\r\n    <div *ngIf=\"exist; else dontExist\">\r\n        \r\n        <div id=\"anterior\" *ngIf=\"havePath\">\r\n            <a [routerLink]=\"['/']\"><i class=\"fas fa-home\"></i></a>\r\n            <div></div>\r\n            <a [routerLink]=\"[pathAnterior]\"><i class=\"fas fa-reply\">   ..</i></a>\r\n        </div>\r\n\r\n        <div id=\"div-ficheros\">\r\n            <section id=\"ficheros\" *ngIf=\"lleno;else carpetaVacia\">\r\n                <article class=\"fichero\" *ngFor=\"let dir of dirs\">\r\n                    <acciones [path]=\"path + '-' + dir\" *ngIf=\"havePath; else dontPathAccDir\"></acciones>\r\n                    <ng-template #dontPathAccDir>\r\n                        <acciones [path]=\"dir\"></acciones>\r\n                    </ng-template>\r\n                    <i class=\"fas fa-folder-open fa-2x carpeta\"></i>\r\n                    <div class=\"texto\" *ngIf=\"havePath; else dontPath\">\r\n                        <p (click)=\"openDir(path + '-' + dir)\">{{ dir }}</p>\r\n                    </div>\r\n                    <ng-template #dontPath>\r\n                        <div class=\"texto\">\r\n                            <a [routerLink]=\"['/path/', dir]\">{{ dir }}</a>\r\n                        </div>\r\n                    </ng-template>\r\n                </article>\r\n                <article class=\"fichero\" *ngFor=\"let file of files\">\r\n                    <acciones [path]=\"path + '-' + file\" [file]='true' *ngIf=\"havePath; else dontPathAccFile\"></acciones>\r\n                    <ng-template #dontPathAccFile>\r\n                        <acciones [path]=\"file\" [file]='true'></acciones>\r\n                    </ng-template>\r\n                    <i class=\"fas fa-file-alt fa-2x archivo\"></i>\r\n                    <div class=\"texto\" *ngIf=\"havePath; else dontPathFile\">\r\n                        <p (click)=\"detailFile(path + '-' + file)\">{{ file }}</p>\r\n                    </div>\r\n                    <ng-template #dontPathFile>\r\n                        <div class=\"texto\">\r\n                            <p (click)=\"detailFile(file)\">{{ file }}</p>\r\n                        </div>\r\n                    </ng-template>\r\n                </article>\r\n                <article class=\"fichero\" *ngFor=\"let imagen of images\">\r\n                    <acciones [path]=\"path + '-' + imagen\" [imagen]='true' *ngIf=\"havePath; else dontPathAccImage\"></acciones>\r\n                    <ng-template #dontPathAccImage>\r\n                        <acciones [path]=\"imagen\" [imagen]='true'></acciones>\r\n                    </ng-template>\r\n                    <i class=\"far fa-image fa-2x imagen\"></i>\r\n                    <div class=\"texto\" *ngIf=\"havePath; else dontPathImage\">\r\n                        <p (click)=\"detailImage(path + '-' + imagen)\">{{ imagen }}</p>\r\n                    </div>\r\n                    <ng-template #dontPathImage>\r\n                        <div class=\"texto\">\r\n                            <p (click)=\"detailImage(imagen)\">{{ imagen }}</p>\r\n                        </div>\r\n                    </ng-template>\r\n                </article>\r\n                \r\n            </section>\r\n            <ng-template #carpetaVacia>\r\n                <h3 id=\"carpetaVacia\" *ngIf=\"havePath; else cloudVacia\">La carpeta esta vacia</h3>\r\n            </ng-template>\r\n            <ng-template #cloudVacia>\r\n                <h3 id=\"carpetaVacia\">!Tu nube esta vacia¡. Aqui puedes subir cualquier archivo o crear carpetas y desde cualquier dispositivo solo iniciando sesion podras descargarlos.</h3>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #dontExist>\r\n        <div id=\"div-ficheros\">\r\n            <h3>La carpeta no existe</h3>\r\n            <a [routerLink]=\"['/']\" style=\"padding: 0 15px 15px 15px;display: block;color: #000;\">Inicio</a>\r\n        </div>\r\n    </ng-template>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/inicio.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/inicio.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInicioInicioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<minav></minav>\r\n<ficheros [username]=\"user.username\"></ficheros>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"auth\">\r\n    <div class=\"bandaBlanca\">\r\n\r\n    </div>\r\n    <form id=\"login\" class=\"auth\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\r\n        <p>Login</p>\r\n        <div class=\"err\" *ngIf=\"err\">\r\n            {{ errMessage }}\r\n        </div>\r\n        <div class=\"confirm\" *ngIf=\"cargando\">\r\n            Cargando...\r\n        </div>\r\n        \r\n        <input name=\"email\" type=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\r\n        <input name=\"password\" type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"user.password\">\r\n        \r\n        <input type=\"submit\" value=\"Iniciar sesion\">\r\n        <a [routerLink]=\"['/register']\">¿No tienes cuenta? Registrate aqui</a>\r\n    </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input type=\"checkbox\" id=\"btn-modal\">\r\n<label for=\"btn-modal\" class=\"lbl-modal\">Añadir</label>\r\n<div class=\"modal\">\r\n    <div class=\"contenedor-modal\">\r\n        <div class=\"header\" id=\"header-alerta\"></div>\r\n        <label for=\"btn-modal\"><i class=\"fas fa-times\"></i></label>\r\n        <div class=\"contenido\" id=\"contenido-del-modal\">\r\n            <section id=\"modal-body\">\r\n                <p id=\"text-modal-body\"></p>\r\n                <div id=\"renombrar\">\r\n                    <span id=\"validNameRenombrar\"></span>\r\n                    <div id=\"divRenombrar\">\r\n                        <input type=\"text\" id=\"inputRenombrar\" placeholder=\"Nuevo Nombre\">\r\n                    </div>\r\n                    <div id=\"divRenombrarFile\">\r\n                        <input type=\"text\" id=\"inputRenombrarFile\" placeholder=\"Nuevo Nombre\">\r\n                        <input type=\"text\" disabled id=\"extRenombrar\">\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section id=\"modal-footer\">\r\n                <button id=\"cancelar\" (click)=\"cerrar()\">Cancelar</button>\r\n                <button class=\"confirmar\" (click)=\"confirmar()\">Confirmar</button>\r\n            </section>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav id=\"nav\">\r\n    <h3>SenntCloud</h3>\r\n    <a (click)=\"logout()\"><i (click)=\"logout()\" class=\"fas fa-sign-out-alt\"></i>Cerrar Sesion</a>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"auth\">\r\n    <div class=\"bandaBlanca\">\r\n\r\n    </div>\r\n    <form #registerForm=\"ngForm\" id=\"register\" class=\"auth\" (ngSubmit)=\"register()\">\r\n        <p>Registrarme</p>\r\n        <div class=\"err\" *ngIf=\"err\">\r\n            {{ errMessage }}\r\n        </div>\r\n        <div class=\"confirm\" *ngIf=\"cargando\">\r\n            Cargando...\r\n        </div>\r\n        <input type=\"text\" name=\"username\" placeholder=\"Nombre\" [(ngModel)]=\"user.username\">  \r\n        <input type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\r\n        <input type=\"password\" name=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"user.password\">\r\n        \r\n        <input type=\"submit\" value=\"Crear cuenta\">\r\n        <a [routerLink]=\"['/login']\">¿Tienes cuenta? Inicia sesion aqui</a>\r\n    </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload/upload.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload/upload.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUploadUploadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"div-upload\">\r\n    <div id=\"nameuser\">\r\n        <h3>{{ username }}</h3>\r\n    </div>\r\n    <div id=\"upload\">\r\n        <div id=\"upload-1\">\r\n            <h3>Crear Carpeta</h3>\r\n            <div class=\"confirm\" style=\"display: flex;\" *ngIf=\"dirOk\">\r\n                <p>{{ dirMessage }}</p>\r\n                <i style=\"padding-left: 10px;font-size: 18px;cursor: pointer;display: block;margin-left: auto;\" (click)=\"reseatAll()\" class=\"fas fa-times\"></i>\r\n            </div>\r\n            <div class=\"err\" style=\"display: flex;\" *ngIf=\"dirErr\">\r\n                <p>{{ dirMessage }}</p>\r\n                <i style=\"padding-left: 10px;font-size: 18px;cursor: pointer;display: block;margin-left: auto;\" (click)=\"reseatAll()\" class=\"fas fa-times\"></i>\r\n            </div>\r\n            <form #createDirForm=\"ngForm\" (ngSubmit)=\"createDir()\" id=\"formCreateDir\">\r\n                <div class=\"inputs\">\r\n                    <input type=\"text\" name=\"name\" placeholder=\"Nombre\" [(ngModel)]=\"name\">\r\n                    <div class=\"icon\">\r\n                        <input type=\"submit\" value=\"\">\r\n                        <i class=\"fas fa-paper-plane\"></i>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div id=\"upload-2\">\r\n            <h3>Subir Archivo</h3>\r\n            <div class=\"confirm\" style=\"display: flex;\" *ngIf=\"fileOk\">\r\n                <p>{{ fileMessage }}</p>\r\n                <i style=\"padding-left: 10px;font-size: 18px;cursor: pointer;display: block;margin-left: auto;\" (click)=\"reseatAll()\" class=\"fas fa-times\"></i>\r\n            </div>\r\n            <div class=\"err\" style=\"display: flex;\" *ngIf=\"fileErr\">\r\n                <p>{{ fileMessage }}</p>\r\n                <i style=\"padding-left: 10px;font-size: 18px;cursor: pointer;display: block;margin-left: auto;\" (click)=\"reseatAll()\" class=\"fas fa-times\"></i>\r\n            </div>\r\n            <div id=\"nameFile\" *ngIf=\"files\" style=\"display: flex;\">\r\n                <p>{{ nameFile }}</p>\r\n                <i style=\"padding-left: 10px;font-size: 18px;cursor: pointer;display: block;margin-left: auto;\" (click)=\"reseatInput()\" class=\"fas fa-times\"></i>\r\n            </div>\r\n            <form #uploadFileForm=\"ngForm\" (ngSubmit)=\"uploadFile($event)\" id=\"formUploadFile\">\r\n                <div class=\"inputs\">\r\n                    \r\n                    <input (change)=\"selectFile($event)\" type=\"file\" name=\"file\" id=\"archivo\">\r\n                    <label for=\"archivo\">Seleccionar archivo</label>\r\n                    \r\n                    <div class=\"icon\">\r\n                        <input id=\"a\" type=\"submit\" value=\"\">\r\n                        <i class=\"fas fa-paper-plane\"></i>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/inicio/inicio.component */
    "./src/app/components/inicio/inicio.component.ts");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/upload/upload.component */
    "./src/app/components/upload/upload.component.ts");
    /* harmony import */


    var _components_ficheros_ficheros_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/ficheros/ficheros.component */
    "./src/app/components/ficheros/ficheros.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _components_acciones_acciones_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/acciones/acciones.component */
    "./src/app/components/acciones/acciones.component.ts");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/modal/modal.component */
    "./src/app/components/modal/modal.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__["InicioComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"], _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"], _components_ficheros_ficheros_component__WEBPACK_IMPORTED_MODULE_14__["FicherosComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"], _components_acciones_acciones_component__WEBPACK_IMPORTED_MODULE_16__["AccionesComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModalComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"], _auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: appRoutingProviders, routing */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function () {
      return appRoutingProviders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/inicio/inicio.component */
    "./src/app/components/inicio/inicio.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");

    var appRoutes = [{
      path: '',
      component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'path/:ruta',
      component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: '**',
      component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]
    }];
    var appRoutingProviders = [];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(_authService, _router) {
        _classCallCheck(this, AuthGuard);

        this._authService = _authService;
        this._router = _router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this._authService.loggedIn()) {
            return true;
          }

          this._router.navigate(['/login']);

          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/components/acciones/acciones.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/acciones/acciones.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAccionesAccionesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjaW9uZXMvYWNjaW9uZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/acciones/acciones.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/acciones/acciones.component.ts ***!
    \***********************************************************/

  /*! exports provided: AccionesComponent */

  /***/
  function srcAppComponentsAccionesAccionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccionesComponent", function () {
      return AccionesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/modal/modal.component */
    "./src/app/components/modal/modal.component.ts");

    var AccionesComponent = /*#__PURE__*/function () {
      function AccionesComponent(_modalComponent) {
        _classCallCheck(this, AccionesComponent);

        this._modalComponent = _modalComponent;
      }

      _createClass(AccionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle() {
          this.closeAll();
          var menu = 'menu' + this.path;
          document.getElementById(menu).classList.toggle('show');
        }
      }, {
        key: "closeAll",
        value: function closeAll() {
          var uls = document.querySelectorAll('.dropdown-container .show');

          if (uls.length >= 1) {
            uls.forEach(function (ul) {
              ul.classList.remove('show');
            });
          }
        }
      }, {
        key: "eliminar",
        value: function eliminar() {
          this.closeAll();

          this._modalComponent.abrir(this.path, 'eliminar', this.file, this.imagen);
        }
      }, {
        key: "renombrar",
        value: function renombrar() {
          this.closeAll();

          this._modalComponent.abrir(this.path, 'renombrar', this.file, this.imagen);
        }
      }, {
        key: "copiar",
        value: function copiar() {
          this.closeAll();

          this._modalComponent.abrir(this.path, 'copiar', this.file, this.imagen);
        }
      }, {
        key: "mover",
        value: function mover() {
          this.closeAll();

          this._modalComponent.abrir(this.path, 'mover', this.file, this.imagen);
        }
      }]);

      return AccionesComponent;
    }();

    AccionesComponent.ctorParameters = function () {
      return [{
        type: _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccionesComponent.prototype, "path", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccionesComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccionesComponent.prototype, "imagen", void 0);
    AccionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'acciones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./acciones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/acciones/acciones.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./acciones.component.css */
      "./src/app/components/acciones/acciones.component.css"))["default"]]
    })], AccionesComponent);
    /***/
  },

  /***/
  "./src/app/components/error/error.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/error/error.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/error/error.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/error/error.component.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent = /*#__PURE__*/function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/components/error/error.component.css"))["default"]]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/components/ficheros/ficheros.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/ficheros/ficheros.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFicherosFicherosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmljaGVyb3MvZmljaGVyb3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/ficheros/ficheros.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/ficheros/ficheros.component.ts ***!
    \***********************************************************/

  /*! exports provided: FicherosComponent */

  /***/
  function srcAppComponentsFicherosFicherosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FicherosComponent", function () {
      return FicherosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cloud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cloud.service */
    "./src/app/services/cloud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);

    var FicherosComponent = /*#__PURE__*/function () {
      function FicherosComponent(_cloudService, _router, _route) {
        var _this = this;

        _classCallCheck(this, FicherosComponent);

        this._cloudService = _cloudService;
        this._router = _router;
        this._route = _route;
        /* DIR */

        this.havePath = false;
        this.path = false;
        this.haveDetail = false;
        this.haveDetailImage = false;
        /* COMPROBACION */

        this.lleno = true;
        this.exist = true;

        this._route.params.subscribe(function (params) {
          if (params.ruta) {
            _this.havePath = true;
            _this.path = params.ruta;
          } else {
            _this.havePath = false;
          }
        });
      }

      _createClass(FicherosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.openDir(this.path);

          if (this.havePath) {
            this.afterPath();
          }

          this.moveAndCopy();
        }
      }, {
        key: "moveAndCopy",
        value: function moveAndCopy() {
          // MODAL ACTIONS
          var data = localStorage.getItem('actions');
          var confirm = true;

          if (data) {
            try {
              data = JSON.parse(data);
            } catch (e) {
              confirm = false;
            }

            if (confirm) {
              if (data.method == 'copiar' || data.method == 'mover') {
                var inicio = data.path.lastIndexOf('-');
                inicio++;
                var name = data.path.substring(inicio);
                var titleModal = '';
                var textoModal = '';

                if (data.method == 'copiar') {
                  titleModal = 'Copiar ' + name;
                  textoModal = "Muevete a la carpeta donde desees copiar '".concat(name, "' y pulsa el boton de confirmar");
                } else {
                  titleModal = 'Mover ' + name;
                  textoModal = "Muevete a la carpeta donde desees mover '".concat(name, "' y pulsa el boton de confirmar");
                }

                document.getElementById('header-alerta').innerHTML = titleModal;
                document.getElementById('text-modal-body').innerHTML = textoModal;
                var check = document.getElementById('btn-modal');
                check.checked = true;
              } else {
                localStorage.removeItem('actions');
              }
            }
          }
        }
      }, {
        key: "afterPath",
        value: function afterPath() {
          var _this2 = this;

          this._route.params.subscribe(function (params) {
            var path = params.ruta;

            _this2.openDir(path);

            var inicio = path.lastIndexOf('-');

            if (inicio > -1) {
              path = path.substring(0, inicio);
              _this2.pathAnterior = '/path/' + path;
            } else {
              _this2.pathAnterior = '/';
            }
          });
        }
      }, {
        key: "openDir",
        value: function openDir(path) {
          var _this3 = this;

          this.closeDetail();

          if (this.havePath) {
            this._router.navigate(['/path/', path]);
          }

          this._cloudService.openDir(path).subscribe(function (res) {
            _this3.exist = true;
            _this3.lleno = true;
            var response = res;
            _this3.dirs = response.content.directories;
            _this3.files = response.content.files;
            _this3.images = response.content.images;

            if (_this3.dirs.length <= 0 && _this3.files.length <= 0 && _this3.images.length <= 0) {
              _this3.lleno = false;
            }
          }, function (err) {
            _this3.exist = false;
          });
        }
      }, {
        key: "processSize",
        value: function processSize(LLegaSize) {
          var size = LLegaSize;
          size = size.toString();
          size = size.slice(0, -3);

          if (size.length <= 0) {
            return 'Menos de 1 KB';
          } else {
            if (size.length >= 4) {
              size = size.slice(0, -3);
              return size + 'MB';
            } else {
              return size + 'KB';
            }
          }
        }
      }, {
        key: "detailFile",
        value: function detailFile(path) {
          var _this4 = this;

          this._cloudService.detailFile(path).subscribe(function (res) {
            var response = res;
            _this4.FileDetail = response.details;
            _this4.FileDetail.size = _this4.processSize(_this4.FileDetail.size);
            _this4.haveDetail = true;
            _this4.FileDetail.path = path;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "download",
        value: function download(path, filename, ext) {
          this._cloudService.downloadFile(path).subscribe(function (res) {
            var blob = new Blob([res]);
            var name = filename + '.' + ext;
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, name);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "closeDetail",
        value: function closeDetail() {
          this.haveDetail = false;
          this.FileDetail = false;
        }
      }, {
        key: "closeDetailImage",
        value: function closeDetailImage() {
          this.ImageDetail = false;
          this.haveDetailImage = false;
        }
      }, {
        key: "downloadImage",
        value: function downloadImage(url, name) {
          this._cloudService.downloadImage(url, name).subscribe(function (res) {
            var blob = new Blob([res]);
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, name);
          }, function (err) {
            if (err.error.message) {
              alert(err.error.message);
            } else {
              alert('Ha ocurrido un error inesperado al descargar');
            }
          });
        }
      }, {
        key: "detailImage",
        value: function detailImage(path) {
          var _this5 = this;

          this._cloudService.detailImage(path).subscribe(function (res) {
            _this5.ImageDetail = res;
            _this5.ImageDetail.size = _this5.processSize(_this5.ImageDetail.size);
            _this5.haveDetailImage = true;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return FicherosComponent;
    }();

    FicherosComponent.ctorParameters = function () {
      return [{
        type: _services_cloud_service__WEBPACK_IMPORTED_MODULE_2__["CloudService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FicherosComponent.prototype, "username", void 0);
    FicherosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ficheros',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ficheros.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ficheros/ficheros.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ficheros.component.css */
      "./src/app/components/ficheros/ficheros.component.css"))["default"]]
    })], FicherosComponent);
    /***/
  },

  /***/
  "./src/app/components/inicio/inicio.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/inicio/inicio.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInicioInicioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/inicio/inicio.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/inicio/inicio.component.ts ***!
    \*******************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppComponentsInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InicioComponent = /*#__PURE__*/function () {
      function InicioComponent(_authService, _router) {
        _classCallCheck(this, InicioComponent);

        this._authService = _authService;
        this._router = _router;
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.user = this._authService.getUser().subscribe(function (res) {
            _this6.user = res;
          }, function (err) {
            if (err.error.message) {
              _this6._authService.logout();
            } else {
              alert('Ha ocurrido un error al iniciar sesion');
              setTimeout(function () {
                _this6._authService.logout();
              }, 3000);
            }
          });
        }
      }]);

      return InicioComponent;
    }();

    InicioComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inicio/inicio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.component.css */
      "./src/app/components/inicio/inicio.component.css"))["default"]]
    })], InicioComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_authService, _router) {
        _classCallCheck(this, LoginComponent);

        this._authService = _authService;
        this._router = _router;
        this.err = false;
        this.cargando = false;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '', '');
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._authService.loggedIn()) {
            this._router.navigate(['/']);
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this7 = this;

          this.user.email = this.user.email.trim();
          this.user.password = this.user.password.trim();

          if (this.user.email && this.user.password) {
            /* COMPROBAR EMAIL */
            var email = this.user.email;
            var confirm = false;
            var gmail = '@gmail.com';
            var hotmail = '@hotmail.com';

            for (var i = 0; i < email.length; i++) {
              if (email.substring(i) == gmail || email.substring(i) == hotmail) {
                confirm = true;
              }
            }

            if (confirm) {
              this.err = false;
              this.cargando = true;

              this._authService.login(this.user).subscribe(function (res) {
                var response = res;

                _this7._authService.setDatos(response.token, response.user._id);

                _this7.user._id = localStorage.getItem('id');

                _this7._authService.registerDir(_this7.user).subscribe(function (res) {
                  _this7._router.navigate(['/']);
                }, function (err) {
                  alert('Ocurrio un error al iniciar session, Intentelo mas tarde');
                });
              }, function (err) {
                _this7.cargando = false;
                _this7.err = true;
                _this7.errMessage = err.error.message;
              });
            } else {
              this.errMessage = 'Introdusca un email valido';
              this.err = true;
            }
          } else {
            this.errMessage = 'Llene todos los campos porfavor';
            this.err = true;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/modal/modal.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/modal/modal.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/modal/modal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/modal/modal.component.ts ***!
    \*****************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cloud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cloud.service */
    "./src/app/services/cloud.service.ts");
    /* harmony import */


    var _components_ficheros_ficheros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/ficheros/ficheros.component */
    "./src/app/components/ficheros/ficheros.component.ts");

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(_cloudService, _ficherosComponent) {
        _classCallCheck(this, ModalComponent);

        this._cloudService = _cloudService;
        this._ficherosComponent = _ficherosComponent;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.pathAct) {
            this.pathAct = '';
          }
        }
      }, {
        key: "abrir",
        value: function abrir(path, method) {
          var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var imagen = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.confirmFile = file;
          this.confirmImagen = imagen;
          var inicioName = path.lastIndexOf('-');

          if (inicioName == -1) {
            this.name = path;
          } else {
            inicioName++;
            this.name = path.substring(inicioName);
          }

          this.cerrar();
          this.setText(this.name, method, path);
          var check = document.getElementById('btn-modal');
          check.checked = true;
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          var check = document.getElementById('btn-modal');
          check.checked = false;
          this.reseatAllText();
        }
      }, {
        key: "setText",
        value: function setText(name, method, path) {
          this.reseatAllText();
          var titleModal = '';
          var textoModal = '';

          if (method == 'eliminar') {
            titleModal = 'Eliminar ' + name;
            textoModal = "\xBFEstas seguro de eliminar '".concat(name, "'?");
          } else if (method == 'renombrar') {
            titleModal = 'Renombrar ' + name;
            textoModal = "Introduce el nuevo nombre de '".concat(name, "'");
            document.getElementById('renombrar').style.display = 'block';

            if (this.confirmFile || this.confirmImagen) {
              document.getElementById('divRenombrarFile').style.display = 'flex';
              var ext = document.getElementById('extRenombrar');
              var inicio = name;
              inicio = inicio.lastIndexOf('.');
              inicio++;
              var nameExt = name.substring(inicio);
              ext.value = nameExt;
            } else {
              document.getElementById('divRenombrar').style.display = 'block';
            }
          } else if (method == 'copiar') {
            titleModal = 'Copiar ' + name;
            textoModal = "Muevete a la carpeta donde desees copiar '".concat(name, "' y pulsa el boton de confirmar");
          } else if (method == 'mover') {
            titleModal = 'Mover ' + name;
            textoModal = "Muevete a la carpeta donde desees mover '".concat(name, "' y pulsa el boton de confirmar");
          }

          this.setDatos(method, path, this.confirmImagen);
          document.getElementById('header-alerta').innerHTML = titleModal;
          document.getElementById('text-modal-body').innerHTML = textoModal;
        }
      }, {
        key: "setDatos",
        value: function setDatos(method, path, imagen) {
          var data = {
            method: method,
            path: path
          };

          if (imagen) {
            data.imagen = true;
          }

          data = JSON.stringify(data);
          localStorage.setItem('actions', data);
        }
      }, {
        key: "reseatAllText",
        value: function reseatAllText() {
          localStorage.removeItem('actions');
          document.getElementById('renombrar').style.display = 'none';
          document.getElementById('divRenombrarFile').style.display = 'none';
          document.getElementById('divRenombrar').style.display = 'none';
          document.getElementById('divRenombrarFile').style.display = 'none';
          var newName = document.getElementById('inputRenombrar');
          newName.value = '';
          var newNameFile = document.getElementById('inputRenombrarFile');
          newNameFile.value = '';
          document.getElementById('validNameRenombrar').style.display = 'none';
          document.getElementById('header-alerta').innerHTML = '';
          document.getElementById('text-modal-body').innerHTML = '';
        }
      }, {
        key: "confirmar",
        value: function confirmar() {
          var data = localStorage.getItem('actions');
          var confirm = true;

          try {
            data = JSON.parse(data);
          } catch (e) {
            confirm = false;
          }

          if (confirm) {
            if (data.method == 'eliminar') {
              this.eliminar(data);
            } else if (data.method == 'renombrar') {
              this.renombrar(data);
            } else if (data.method == 'copiar') {
              data.newPath = this.pathAct;
              this.copiar(data);
            } else if (data.method == 'mover') {
              data.newPath = this.pathAct;
              this.mover(data);
            }
          } else {
            this.cerrar();
          }
        }
      }, {
        key: "eliminar",
        value: function eliminar(data) {
          var _this8 = this;

          var imagen = false;

          if (data.imagen) {
            imagen = true;
          }

          this.cerrar();

          this._cloudService.deleteFile(data.path, imagen).subscribe(function (res) {
            _this8._ficherosComponent.openDir(_this8.pathAct);

            var response = res;
            alert(response.message);
          }, function (err) {
            var error = err;

            if (error.error.message) {
              alert(error.error.message);
            } else {
              alert('Ocurrio un error al eliminar');
            }
          });
        }
      }, {
        key: "renombrar",
        value: function renombrar(data) {
          var _this9 = this;

          var imagen = false;

          if (data.imagen) {
            imagen = true;
          }

          var valid = document.getElementById('validNameRenombrar');
          var newName = document.getElementById('inputRenombrar');
          newName = newName.value;
          newName = newName.trim();
          var newNameFile = document.getElementById('inputRenombrarFile');
          var ext = document.getElementById('extRenombrar');
          ext = ext.value;
          newNameFile = newNameFile.value;
          newNameFile = newNameFile.trim();

          if (newName || newNameFile) {
            var nombre;

            if (newName) {
              nombre = newName;
            } else {
              nombre = newNameFile + '.' + ext;
            }

            this.cerrar();

            this._cloudService.rename(data.path, nombre, imagen).subscribe(function (res) {
              _this9._ficherosComponent.openDir(_this9.pathAct);

              var response = res;
              alert(response.message);
            }, function (err) {
              if (err.error.message) {
                alert(err.error.message);
              } else {
                alert('Ha ocurrido un error');
              }
            });
          } else {
            valid.innerHTML = 'Introdusca el nuevo nombre';
            valid.style.display = 'block';
          }
        }
      }, {
        key: "copiar",
        value: function copiar(data) {
          var _this10 = this;

          var imagen = false;

          if (data.imagen) {
            imagen = true;
          }

          this.cerrar();

          this._cloudService.copy(data.path, data.newPath, imagen).subscribe(function (res) {
            _this10._ficherosComponent.openDir(_this10.pathAct);

            var response = res;
            alert(response.message);
          }, function (err) {
            if (err.error.message) {
              alert(err.error.message);
            } else {
              alert('Ha ocurrido un error al copiar');
            }
          });
        }
      }, {
        key: "mover",
        value: function mover(data) {
          var _this11 = this;

          var imagen = false;

          if (data.imagen) {
            imagen = true;
          }

          this.cerrar();

          this._cloudService.move(data.path, data.newPath, imagen).subscribe(function (res) {
            _this11._ficherosComponent.openDir(_this11.pathAct);

            var response = res;
            alert(response.message);
          }, function (err) {
            if (err.error.message) {
              alert(err.error.message);
            } else {
              alert('Ha ocurrido un error al mover');
            }
          });
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _services_cloud_service__WEBPACK_IMPORTED_MODULE_2__["CloudService"]
      }, {
        type: _components_ficheros_ficheros_component__WEBPACK_IMPORTED_MODULE_3__["FicherosComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalComponent.prototype, "pathAct", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.component.css */
      "./src/app/components/modal/modal.component.css"))["default"]]
    })], ModalComponent);
    /***/
  },

  /***/
  "./src/app/components/nav/nav.component.css":
  /*!**************************************************!*\
    !*** ./src/app/components/nav/nav.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/nav/nav.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/nav/nav.component.ts ***!
    \*************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(_authService) {
        _classCallCheck(this, NavComponent);

        this._authService = _authService;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this._authService.logout();
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'minav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/components/nav/nav.component.css"))["default"]]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(_authService, _router) {
        _classCallCheck(this, RegisterComponent);

        this._authService = _authService;
        this._router = _router;
        this.err = false;
        this.cargando = false;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '', '');
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._authService.loggedIn()) {
            this._router.navigate(['/']);
          }
        }
      }, {
        key: "register",
        value: function register() {
          var _this12 = this;

          this.user.username = this.user.username.trim();
          this.user.email = this.user.email.trim();
          this.user.password = this.user.password.trim();

          if (this.user.username && this.user.email && this.user.password) {
            /* COMPROBAR EMAIL */
            var email = this.user.email;
            var confirm = false;
            var gmail = '@gmail.com';
            var hotmail = '@hotmail.com';

            for (var i = 0; i < email.length; i++) {
              if (email.substring(i) == gmail || email.substring(i) == hotmail) {
                confirm = true;
              }
            }

            if (confirm) {
              this.err = false;
              this.cargando = true;

              this._authService.register(this.user).subscribe(function (res) {
                var response = res;

                _this12._authService.setDatos(response.token, response.user._id);

                _this12.user._id = localStorage.getItem('id');

                _this12._authService.registerDir(_this12.user).subscribe(function (res) {
                  console.log(res);

                  _this12._router.navigate(['/']);
                });
              }, function (err) {
                _this12.cargando = false;
                _this12.err = true;
                _this12.errMessage = err.error.message;
              });
            } else {
              this.errMessage = 'Introdusca un email valido';
              this.err = true;
            }
          } else {
            this.errMessage = 'Llene todos los campos porfavor';
            this.err = true;
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/upload/upload.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/upload/upload.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUploadUploadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/upload/upload.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/upload/upload.component.ts ***!
    \*******************************************************/

  /*! exports provided: UploadComponent */

  /***/
  function srcAppComponentsUploadUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadComponent", function () {
      return UploadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ficheros_ficheros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ficheros/ficheros.component */
    "./src/app/components/ficheros/ficheros.component.ts");
    /* harmony import */


    var _services_cloud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cloud.service */
    "./src/app/services/cloud.service.ts");

    var UploadComponent = /*#__PURE__*/function () {
      function UploadComponent(_cloudService, _ficherosComponent, _route) {
        _classCallCheck(this, UploadComponent);

        this._cloudService = _cloudService;
        this._ficherosComponent = _ficherosComponent;
        this._route = _route; // Carpetas

        this.name = '';
        this.dirMessage = false;
        this.dirOk = false;
        this.dirErr = false; // Archivos

        this.files = false;
        this.nameFile = false;
        this.fileMessage = false;
        this.fileOk = false;
        this.fileErr = false;
      }

      _createClass(UploadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "reseatAll",
        value: function reseatAll() {
          this.dirOk = false;
          this.dirErr = false;
          this.dirMessage = false;
          this.fileOk = false;
          this.fileErr = false;
          this.fileMessage = false;
        }
      }, {
        key: "createDir",
        value: function createDir() {
          var _this13 = this;

          this.reseatAll();
          this.dirOk = true;
          this.dirMessage = 'Creando...';
          var name = this.name;
          name = name.trim();
          this.name = name;

          if (this.name) {
            this._cloudService.createDir(this.path, this.name).subscribe(function (res) {
              _this13.reseatAll();

              _this13.name = '';
              _this13.dirOk = true;
              _this13.dirMessage = 'Carpeta creada correctamente';

              _this13._ficherosComponent.openDir(_this13.path);
            }, function (err) {
              _this13.reseatAll();

              if (err.error.message) {
                _this13.dirMessage = err.error.message;
              } else {
                _this13.dirMessage = 'Ha ocurrido un error';
              }

              _this13.dirErr = true;
            });
          } else {
            this.reseatAll();
            this.dirMessage = 'Introdusca un nombre';
            this.dirErr = true;
          }
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(e) {
          var _this14 = this;

          this.reseatAll();
          this.fileOk = true;
          this.fileMessage = 'Cargando...';

          if (this.files) {
            this._cloudService.uploadFile(this.path, this.files[0]).subscribe(function (res) {
              var response = res;

              _this14.reseatInput();

              _this14.reseatAll();

              _this14.fileOk = true;
              _this14.fileMessage = response.message;

              _this14._ficherosComponent.openDir(_this14.path);
            }, function (err) {
              console.log(err);

              if (err.error.message) {
                _this14.reseatAll();

                _this14.fileMessage = err.error.message;
                _this14.fileErr = true;

                _this14.reseatInput();
              } else {
                alert('Ha ocurrido un error');
                console.log(err);

                _this14.reseatInput();
              }
            });
          } else {
            this.reseatAll();
            this.fileMessage = 'Seleccione un archivo';
            this.fileErr = true;
          }
        }
      }, {
        key: "selectFile",
        value: function selectFile(e) {
          this.files = e.target.files;
          this.nameFile = this.files[0].name;
        }
      }, {
        key: "reseatInput",
        value: function reseatInput() {
          var input = document.getElementById('archivo');
          this.files = false;
          input.value = '';
          this.nameFile = '';
        }
      }]);

      return UploadComponent;
    }();

    UploadComponent.ctorParameters = function () {
      return [{
        type: _services_cloud_service__WEBPACK_IMPORTED_MODULE_4__["CloudService"]
      }, {
        type: _ficheros_ficheros_component__WEBPACK_IMPORTED_MODULE_3__["FicherosComponent"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UploadComponent.prototype, "username", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UploadComponent.prototype, "path", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/upload/upload.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload.component.css */
      "./src/app/components/upload/upload.component.css"))["default"]]
    })], UploadComponent);
    /***/
  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(_id, username, email, password) {
      _classCallCheck(this, User);

      this._id = _id;
      this.username = username;
      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(_http, _router) {
        _classCallCheck(this, AuthService);

        this._http = _http;
        this._router = _router;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
      }

      _createClass(AuthService, [{
        key: "setDatos",
        value: function setDatos(token, user_id) {
          localStorage.setItem('token', token);
          localStorage.setItem('id', user_id);
        }
      }, {
        key: "getDatos",
        value: function getDatos() {
          var data = {
            token: localStorage.getItem('token'),
            user_id: localStorage.getItem('id')
          };
          return data;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          if (localStorage.getItem('token')) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('token');
          localStorage.removeItem('id');

          this._router.navigate(['/login']);
        }
      }, {
        key: "register",
        value: function register(user) {
          return this._http.post(this.url + 'signup', user);
        }
      }, {
        key: "registerDir",
        value: function registerDir(user) {
          return this._http.post(this.url + 'cloud/register', user);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this._http.post(this.url + 'signin', user);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var user = {
            _id: localStorage.getItem('id')
          };
          return this._http.post(this.url + 'getUser', user);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/cloud.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/cloud.service.ts ***!
    \*******************************************/

  /*! exports provided: CloudService */

  /***/
  function srcAppServicesCloudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloudService", function () {
      return CloudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var CloudService = /*#__PURE__*/function () {
      function CloudService(_http, _authService) {
        _classCallCheck(this, CloudService);

        this._http = _http;
        this._authService = _authService;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["Global"].url;
        this.url += 'cloud/';
      }

      _createClass(CloudService, [{
        key: "loadAuth",
        value: function loadAuth() {
          var data = this._authService.getDatos();

          this.auth = {
            _id: data.user_id
          };
        }
      }, {
        key: "openDir",
        value: function openDir(ruta) {
          this.loadAuth();

          if (ruta) {
            return this._http.post(this.url + 'openDir/' + ruta, this.auth);
          } else {
            return this._http.post(this.url + 'openDir', this.auth);
          }
        }
      }, {
        key: "detailFile",
        value: function detailFile(path) {
          this.loadAuth();
          return this._http.post(this.url + 'detailFile/' + path, this.auth);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(path) {
          this.loadAuth();
          return this._http.post(this.url + 'downloadFile/' + path, this.auth, {
            responseType: 'blob'
          });
        }
      }, {
        key: "downloadImage",
        value: function downloadImage(url, name) {
          this.loadAuth();
          var data = {
            url: url,
            name: name,
            _id: this.auth._id
          };
          return this._http.post(this.url + 'downloadImage', data, {
            responseType: 'blob'
          });
        }
      }, {
        key: "createDir",
        value: function createDir(path, name) {
          this.loadAuth();
          var data = {
            _id: this.auth._id,
            name: name
          };

          if (path) {
            return this._http.post(this.url + 'createDir/' + path, data);
          } else {
            return this._http.post(this.url + 'createDir', data);
          }
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(path, file) {
          this.loadAuth();
          var formdata = new FormData();
          formdata.append('file', file);
          formdata.append('_id', this.auth._id);

          if (path) {
            return this._http.post(this.url + 'uploadFile/' + path, formdata);
          } else {
            return this._http.post(this.url + 'uploadFile', formdata);
          }
        }
      }, {
        key: "detailImage",
        value: function detailImage(path) {
          this.loadAuth();
          return this._http.post(this.url + 'getImage/' + path, this.auth);
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(path, imagen) {
          this.loadAuth();

          if (imagen) {
            return this._http.post(this.url + 'deleteImage/' + path, this.auth);
          } else {
            return this._http.post(this.url + 'delete/' + path, this.auth);
          }
        }
      }, {
        key: "rename",
        value: function rename(path, name, imagen) {
          this.loadAuth();
          var data = {
            name: name,
            _id: this.auth._id
          };

          if (imagen) {
            return this._http.post(this.url + 'renameImage/' + path, data);
          } else {
            return this._http.post(this.url + 'rename/' + path, data);
          }
        }
      }, {
        key: "copy",
        value: function copy(path, newPath, imagen) {
          this.loadAuth();
          var data = {
            newPath: newPath,
            _id: this.auth._id
          };

          if (imagen) {
            return this._http.post(this.url + 'copyImage/' + path, data);
          } else {
            return this._http.post(this.url + 'copy/' + path, data);
          }
        }
      }, {
        key: "move",
        value: function move(path, newPath, imagen) {
          this.loadAuth();
          var data = {
            newPath: newPath,
            _id: this.auth._id
          };

          if (imagen) {
            return this._http.post(this.url + 'moveImage/' + path, data);
          } else {
            return this._http.post(this.url + 'move/' + path, data);
          }
        }
      }]);

      return CloudService;
    }();

    CloudService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    CloudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CloudService);
    /***/
  },

  /***/
  "./src/app/services/global.ts":
  /*!************************************!*\
    !*** ./src/app/services/global.ts ***!
    \************************************/

  /*! exports provided: Global */

  /***/
  function srcAppServicesGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Global", function () {
      return Global;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Global = {
      url: '/api/senntcloud/'
    };
    /***/
  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(_authService) {
        _classCallCheck(this, TokenInterceptorService);

        this._authService = _authService;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var tokenizeReq = req.clone({
            setHeaders: {
              Authorization: "".concat(this._authService.getToken())
            }
          });
          return next.handle(tokenizeReq);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenInterceptorService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\David\Proyectos\02.Angular\02.SenntCloud\Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map