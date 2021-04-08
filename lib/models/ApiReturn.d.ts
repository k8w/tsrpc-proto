import { TsrpcError } from "./TsrpcError";
export interface ApiReturnSucc<Res> {
    isSucc: true;
    res: Res;
    err?: undefined;
}
export interface ApiReturnError {
    isSucc: false;
    res?: undefined;
    err: TsrpcError;
}
/** @public */
export declare type ApiReturn<Res> = ApiReturnSucc<Res> | ApiReturnError;
//# sourceMappingURL=ApiReturn.d.ts.map