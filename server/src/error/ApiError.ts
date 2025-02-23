class ApiError extends Error {
    status: number

    constructor (status: number, message: string) {
        super()
        this.status = status
        this.message = message
    }

    static internal (message: string) {
        return new ApiError(500, message)
    }

    static badRequest (message: string) {
        return new ApiError(400, message)
    }

    static notFound (message: string) {
        return new ApiError(404, message)
    }
}

export default ApiError