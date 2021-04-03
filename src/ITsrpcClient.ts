import { ApiReturn } from "./ApiReturn";
import { BaseServiceType } from "./BaseServiceType";

export interface ITsrpcClient<ServiceType extends BaseServiceType> {
    callApi<T extends keyof ServiceType['api']>(apiName: T, req: ServiceType['api'][T]['req']): Promise<ApiReturn<ServiceType['api'][T]['res']>>;
    sendMsg<T extends keyof ServiceType['msg']>(msgName: T, msg: ServiceType['msg'][T]): Promise<{ isSucc: true } | { isSucc: false, errMsg: string }>;
}