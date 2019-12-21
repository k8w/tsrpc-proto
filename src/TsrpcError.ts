export class TsrpcError extends Error {
    readonly info?: any;

    constructor(message: string, info?: any) {
        super(message);
        this.info = info;

        if ((Object as any).setPrototypeOf) {
            (Object as any).setPrototypeOf(this, TsrpcError.prototype);
        }
        else {
            (this as any).__proto__ = TsrpcError.prototype;
        }
    }

    get type(): 'NetworkError' | 'ServerError' | 'ClientError' | 'ApiError' {
        if (this.info && this.info.isNetworkError) {
            return 'NetworkError';
        }
        else if (this.info && this.info.isServerError) {
            return 'ServerError';
        }
        else if (this.info && this.info.isClientError) {
            return 'ClientError';
        }
        else {
            return 'ApiError';
        }
    }

    get code(): string | undefined {
        if (this.info) {
            if (typeof this.info === 'string') {
                return this.info;
            }
            else if (typeof this.info === 'object') {
                return this.info.code;
            }
        }
        else {
            return this.code;
        }
    }
}
