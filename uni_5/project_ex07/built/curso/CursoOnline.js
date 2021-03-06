System.register(["./Curso"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var Curso_1, CursoOnline;
    return {
        setters: [
            function (Curso_1_1) {
                Curso_1 = Curso_1_1;
            }
        ],
        execute: function () {
            CursoOnline = /** @class */ (function (_super) {
                __extends(CursoOnline, _super);
                function CursoOnline(nome, cargaHoraria, categoria, thumb, link) {
                    if (link === void 0) { link = 'http://www.imediabrasil.com.br'; }
                    var _this = _super.call(this, nome, cargaHoraria, categoria, thumb) || this;
                    _this.link = link;
                    return _this;
                }
                return CursoOnline;
            }(Curso_1.default));
            exports_1("default", CursoOnline);
        }
    };
});
