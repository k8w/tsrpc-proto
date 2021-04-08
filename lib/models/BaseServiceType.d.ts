/** @public */
export interface BaseServiceType {
    api: {
        [apiName: string]: {
            req: any;
            res: any;
        };
    };
    msg: {
        [msgName: string]: any;
    };
}
//# sourceMappingURL=BaseServiceType.d.ts.map