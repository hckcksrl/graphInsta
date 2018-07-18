import {sequelize} from "./db"


const resolvers = {
    Query : {
        images : async (_,args) => {
            await console.log(args.caller)
            return await sequelize.model('image').findAll({
                where : {
                    image_id : args.user_id
                }
            })
        },
        image_comment : async(_,args) => {
            return await sequelize.model('comment').findAll({
                where : {
                    image_id : args.image_id
                }
            })
        },
        image_like : async(_,args) => {
            return await sequelize.model('like').findAll({
                where :{
                    image_id : args.image_id
                }
            })
        },
        User_profile : async(_,args) => {
            return await sequelize.model('user').findOne({
                where : {
                    username : args.username
                }
            })
        },
    },
    Mutation : {
        CreateImage : async (_,args) => {
            return await sequelize.model('image').create({
                file : args.file,
                // location : args.location,
                user_id : args.user_id
            })
        },
        CreateComment : async (_,args) => {
            return await sequelize.model('comment').create({
                image_id : args.image_id,
                message : args.message,
                user_id : args.user_id
            })
        },
        CreateLike : async (_,args) => {
            return await sequelize.model('like').create({
                image_id : args.image_id,
                user_id : args.user_id
            })
        },
        CreateUser : async (_,args) => {
            return await sequelize.model('user').create({
                username : args.username,
                password : args.password,
            })
        },
        // DeleteImage : async (_,args) => {
        //     return await sequelize.models('image').destroy()
        // },
        // DeleteComment : async (_,args) => {

        // },
        // DeleteLike : async (_,args) => {

        // },
        // DeleteUser : async (_,args) => {

        // },
        // UpdateImage : async (_,args) => {

        // },
        // UpdateComment : async (_,args) => {

        // },
        // UpdateUser : async (_,args) => {

        // },
    }
    
}

export default resolvers