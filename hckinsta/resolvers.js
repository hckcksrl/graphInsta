import {sequelize} from "./db"
import { request } from "http";

const resolvers = {
    Query : {
        images : async (_,args) => {
            let result;
            await sequelize.query(
                `select * from images_image where creator_id = ? ;`,
                {   
                    replacements : [args.creator_id] ,
                    type : sequelize.QueryTypes.SELECT
                })
                .then((rows)=> {
                    result = rows
                    console.log(result)
                    return result
                }
            )
            return await result
        },
        image_comment : async (_,args) => {
            let result;
            await sequelize.query(
                `select * from images_comment where image_id = ? ;`,
                {   
                    replacements : [args.image_id] ,
                    type : sequelize.QueryTypes.SELECT
                })
                .then((rows)=> {
                    result = rows
                    console.log(result)
                    return result
                }
            )
            return await result
        },
        image_like : async (_,args) => {
            let result;
            await sequelize.query(
                `select * from images_like where image_id = ? ;`,
                {   
                    replacements : [args.image_id] ,
                    type : sequelize.QueryTypes.SELECT
                })
                .then((rows)=> {
                    result = rows
                    console.log(result)
                    return result
                }
            )
            return await result
        },
        User_profile : async (_,args) => {
            let result;
            await sequelize.query(
                `select * from users_user where username = ? or id = ?;`,
                {   
                    replacements : [args.username , args.id] ,
                    type : sequelize.QueryTypes.SELECT
                })
                .then((rows)=> {
                    result = rows
                    console.log(result)
                    return result
                }
            )
            return await result
        },

    },
    // Mutation : {
    //     Updata
    // }
}

export default resolvers