import  { StatusCodes }  from 'http-status-codes';
const NODE_ENVIRONMENT = process.env.NODE_ENV || "development";

const errorHandler = (err, req, res, next) => {

	const errorMessage = getErrorMessage(err);

	logErrorMessage(errorMessage);

	/**
	 * If response headers have already been sent,
	 * delegate to the default Express error handler.
	 */
	if (res.headersSent) {
		return next(err);
	}

	const errorResponse = {
		statusCode: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
		body: errorMessage
	};

	/**
	 * Error object should never be sent in a response when
	 * your application is running in production.
	 */
	if (NODE_ENVIRONMENT !== "production") {
		errorResponse.body = errorMessage;
	}

	res.status(errorResponse.statusCode);
	res.json({ status: errorResponse.statusCode, message: errorResponse.body });
	
	next();
}

function getErrorMessage(err) {
	if (err.message) {
		return err.message;
	}

	if (typeof err.toString === "function") {
		return err.toString();
	}
}

function logErrorMessage(err) {
	console.error(err);
}

export { errorHandler };