/**
 * @param {Error} err - The error object
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 */
export const globalMiddleware = (err, req, res, next) => {
	const error = {
		error: err.stack,
		request: req.body,
		url: req.url,
		method: req.method,
	};
	console.log(error);

	res.status(500).send({
		error: err.stack,
		request: req.body,
		url: req.url,
		method: req.method,
	});
};
