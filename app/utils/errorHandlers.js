const routesErrorHandler = (controller) => (req, res, next) => {
    Promise.resolve(controller(req, res, next)).catch(next);
};

const generalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: 'error',
        message: err.message || 'Internal server error.'
    });
};

module.exports = {
    routesErrorHandler,
    generalErrorHandler
};