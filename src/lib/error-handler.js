const errors = {
    BAD_REQUEST: {
        statusCode: 400,
    },
    INTERNAL_SERVER_ERROR: {
        statusCode: 500,
    },
};

const errorHandler = (err, req, res, next) => {
    const errorName =
        err.message in errors ? err.message : 'INTERNAL_SERVER_ERROR';
    const { statusCode } = errors[errorName];
    
    if (statusCode === 500) console.error(err);
    res.sendStatus(statusCode);
};

module.exports = { errorHandler };
