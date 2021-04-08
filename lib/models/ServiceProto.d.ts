import { TSBufferProto } from 'tsbuffer-schema';
import { BaseServiceType } from './BaseServiceType';
export interface BaseServiceDef {
    id: number;
    name: string;
}
/** @public */
export interface ApiServiceDef extends BaseServiceDef {
    type: 'api';
    conf?: {
        [key: string]: any;
    };
}
/** @public */
export interface MsgServiceDef extends BaseServiceDef {
    type: 'msg';
    conf?: {
        [key: string]: any;
    };
}
/** @public */
export declare type ServiceDef = ApiServiceDef | MsgServiceDef;
/** @public */
export interface ServiceProto<ServiceType extends BaseServiceType = any> {
    services: ServiceDef[];
    types: TSBufferProto;
    __SERVICE_TYPE__?: ServiceType;
}
//# sourceMappingURL=ServiceProto.d.ts.map