import {sequelize} from "./db"

const resolvers = {
    Query : {
        images : async (_,args) => {
            return await sequelize.model('image').findAll({
                where : {
                    user_id : args.user_id
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
        follower : async(_,args) => {
            return await sequelize.model('follower').findAll({
                where : {
                    from_id : args.from_id
                }
            })
        },
        following : async(_,args) => {
            return await sequelize.model('follower').findAll({
                where : {
                    to_id : args.to_id
                }
            })
        },
        allImage : async () => {
            return await sequelize.model('image').all()
        },
        allComment : async () => {
            return await sequelize.model('comment').all()
        },
        allLike : async () => {
            return await sequelize.model('like').all()
        },
        allFollower : async () => {
            return await sequelize.model('follower').all()
        },
        allUser : async () => {
            return await sequelize.model('user').all()
        },
    },
    Mutation : {
        CreateImage : async (_,args) => {
            return await sequelize.model('image').create({
                file : args.file,
                location : args.location,
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
        CreateFollower : async (_,args) => {
            return await sequelize.model('follower').create({
                from_id : args.from_id,
                to_id : args.to_id
            })
        },
        DeleteImage : async (_,args) => {
            return await sequelize.model('image').destroy({
                where :{
                    image_id : args.image_id,
                    user_id : args.user_id
                }
            })
        },
        DeleteComment : async (_,args) => {
            return await sequelize.model('comment').destroy({
                where :{
                    comment_id : args.comment_id,
                    user_id : args.user_id
                }
            })
        },
        DeleteLike : async (_,args) => {
            return await sequelize.model('like').destroy({
                where :{
                    like_id : args.like_id,
                    user_id : args.user_id
                }
            })
        },
        DeleteUser : async (_,args) => {
            return await sequelize.model('user').destroy({
                where :{
                    username : args.username,
                    password : args.password
                }
            })
        },
        DeleteFollower : async (_,args) => {
            return await sequelize.model('follower').destroy({
                where : {
                    from_id : args.from_id,
                    to_id : args.to_id
                }
            })
        },
        UpdateImage : async (_,args) => {
            return await sequelize.model('image').update({
                    file : args.file,
                    location : args.location
                } , {
                    where :{
                        image_id : args.image_id,
                        user_id : args.user_id
                    }
                }
            )
        },
        UpdateComment : async (_,args) => {
            return await sequelize.model('comment').update({
                    message : args.message
                } , {
                    where :{
                        image_id : args.image_id,
                        user_id : args.user_id
                    }
                }
            )
        },
        UpdateUser : async (_,args) => {
            return await sequelize.model('user').update({
                    email :args.email,
                    name :args.name,
                    bio :args.bio,
                    gender :args.gender,
                    phone :args.phone,
                    website :args.website,
                    profile_image :args.profile_image,
                } , {
                    where :{
                        username : args.username,
                        password : args.password
                    }
                }
            )
        },
    }
    
}

export default resolvers