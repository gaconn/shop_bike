class ResponseBuilder {
    constructor(message = null, statusCode = null, dataResponse = null) {
        this.Message = message;
        this.StatusCode = statusCode;
        this.DataResponse = dataResponse;
    }

    SetMessage = (message) => {
        this.Message = message;
        return this;
    }

    SetStatusCode = (statusCode) => {
        this.StatusCode = statusCode;
        return this;
    }

    SetDataResponse = (dataResponse) => {
        this.DataResponse = dataResponse;
        return this;
    }

    Build = () => {
        return {
            Message: this.Message,
            StatusCode: this.StatusCode,
            DataResponse: this.DataResponse
        };
    }
}

module.exports = {ResponseBuilder}