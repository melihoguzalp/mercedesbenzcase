export class ApiResponse {
    result: any;
    success: boolean;
    error: any;
    statusCode: number;
    totalCount: number;
}

export class ApiResponseSerializer {
    static fromData(data: any): ApiResponse {
        // data = data === undefined ? {} : data;
        const apiResponse = new ApiResponse();
        if (typeof data.Success === 'undefined') {
            apiResponse.result = data;
            apiResponse.success = true;
            apiResponse.statusCode = 0;
            apiResponse.error = null;
        }
        else {
            apiResponse.error = data.Error;
            apiResponse.totalCount = data.TotalCount;
            apiResponse.statusCode = data.StatusCode;
            apiResponse.success = data.Success;
            apiResponse.result = data.Result;
        }
        return apiResponse;
    }
}