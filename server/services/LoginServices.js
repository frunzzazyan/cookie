const bcrypt = require("bcrypt")
class LoginServices { 
    constructor(models){
        this.models = models
    }
    async loginUser(body){
        const identificationUserEmail = await this.models.users.aggregate([
            {$match : {email : {$eq : body.email}}}
        ])
        if(identificationUserEmail){
            const authenticationUserPassword = await bcrypt.compare(body.password, identificationUserEmail[0].password)
            if(authenticationUserPassword){
                return identificationUserEmail
            }
        }
    }
}

module.exports = LoginServices