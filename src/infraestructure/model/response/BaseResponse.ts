export class BaseResponse<T> {
    code: number;
    message: string;
    response: T | null;

    constructor(code: number, message: string, response: T | null) {
        this.code = code;
        this.message = message;
        this.response = response;
    }
    
}

