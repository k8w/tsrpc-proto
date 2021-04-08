"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsrpcError = void 0;
var TransportData_1 = require("./TransportData");
/**
 * TSRPC Error
 * It means this error would be return to frontend directly
 * If a error is throwed during API, but not TSRPC Error, then another internal server error would be returned
 *
 * @locale zhCN
 * TsrpcError 与普通 Error 的差异在于，它的错误信息会直接返回给前端，而不是像 Error 那样返回一个 “服务器内部错误”
 * 如此，我们可以通过 `throw new TsrpcError(...)` 和 `throw new Error('...')` 去更灵活的抛出异常
 *
 * @public
 */
var TsrpcError = /** @class */ (function () {
    function TsrpcError(dataOrMessage, data) {
        var _a;
        if (typeof dataOrMessage === 'string') {
            this.message = dataOrMessage;
            this.type = (_a = data === null || data === void 0 ? void 0 : data.type) !== null && _a !== void 0 ? _a : TransportData_1.TsrpcErrorType.ApiError;
            Object.assign(this, data);
        }
        else {
            Object.assign(this, dataOrMessage);
        }
    }
    TsrpcError.prototype.toString = function () {
        return "[TSRPC] " + this.type + ": " + this.message;
    };
    return TsrpcError;
}());
exports.TsrpcError = TsrpcError;
