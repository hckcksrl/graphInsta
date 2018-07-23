import {sequelize} from "./db"

const resolvers = {
    Query : {
        images : async (_,args) => {
            return await sequelize.model('image').findAll({
                where : {
                    username : args.username
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
        user_profile : async(_,args) => {
            return await sequelize.model('user').findOne({
                where : {
                    username : args.username
                }
            })
        },
        follower : async(_,args) => {
            return await sequelize.model('follower').findAll({
                where : {
                    from_username : args.from_username
                }
            })
        },
        following : async(_,args) => {
            return await sequelize.model('follower').findAll({
                where : {
                    to_username : args.to_username
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
                username : args.username
            })
        },
        CreateComment : async (_,args) => {
            return await sequelize.model('comment').create({
                image_id : args.image_id,
                message : args.message,
                username : args.username
            })
        },
        CreateLike : async (_,args) => {
            return await sequelize.model('like').create({
                image_id : args.image_id,
                username : args.username
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
                from_username : args.from_username,
                to_username : args.to_username
            })
        },
        DeleteImage : async (_,args) => {
            return await sequelize.model('image').destroy({
                where :{
                    image_id : args.image_id,
                    username : args.username
                }
            })
        },
        DeleteComment : async (_,args) => {
            return await sequelize.model('comment').destroy({
                where :{
                    comment_id : args.comment_id,
                    username : args.username
                }
            })
        },
        DeleteLike : async (_,args) => {
            return await sequelize.model('like').destroy({
                where :{
                    like_id : args.like_id,
                    username : args.username
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
                    from_username : args.from_username,
                    to_username : args.to_username
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
                        username : args.username
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
                        username : args.username
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