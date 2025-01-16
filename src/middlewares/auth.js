module.exports = {
    authenticate: (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(403).send({ message: 'No token provided.' });
        }

        // Aquí deberías verificar el token (esto es solo un ejemplo)
        if (token !== 'TU_SECRET_TOKEN') {
            return res.status(401).send({ message: 'Failed to authenticate token.' });
        }

        next();
    },
    authorize: (roles) => {
        return (req, res, next) => {
            const userRole = req.headers['role'];

            if (!roles.includes(userRole)) {
                return res.status(403).send({ message: 'You do not have permission to perform this action.' });
            }

            next();
        };
    }
};
