"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsrpcErrorType = void 0;
/**
 * 明确错误类型
 * @public
 */
var TsrpcErrorType;
(function (TsrpcErrorType) {
    /** 网络错误 */
    TsrpcErrorType["NetworkError"] = "NetworkError";
    /** 服务器内部异常（不适宜抛给客户端的错误信息） */
    TsrpcErrorType["ServerError"] = "ServerError";
    /** 客户端异常（如解析服务端返回失败等） */
    TsrpcErrorType["ClientError"] = "ClientError";
    /** 业务错误（API中返回的） */
    TsrpcErrorType["ApiError"] = "ApiError";
})(TsrpcErrorType = exports.TsrpcErrorType || (exports.TsrpcErrorType = {}));
