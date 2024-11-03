class SignUpControllers{
    async getUsers(req,res){
        try {
            const users = await req.app.locals.services.users.getUsers()
            res.json(users)
        } catch (error) {
            res.json(error)
        }
    }
    
    async creatUser(req,res){
        try {
            const user = await req.app.locals.services.users.creatUser(req.body)
            res.status(201).json(user)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = SignUpControllers