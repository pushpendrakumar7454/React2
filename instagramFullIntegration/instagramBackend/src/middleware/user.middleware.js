export const authenticate = (req, res) => {
    try {
        const token = req.headers.authorization


        if (!token) {
            res.status(401).json({
                message: "invalid user"
            })
        }




    } catch (error) {
        res.status(500).json({
            message: "invvalid users"
        })

    }
}