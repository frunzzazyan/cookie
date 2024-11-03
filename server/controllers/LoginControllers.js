class LoginControllers {
    async loginUser(req,res){
        try {
            const user = await req.app.locals.services.login.loginUser(req.body)
            // res.cookie("_id" , user._id)
            res.json(user)
        } catch (error) {
            res.json(error)
        }
        
    }
}

module.exports = LoginControllers