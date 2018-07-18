import Sequelize from "sequelize"

export const sequelize = new Sequelize({
  database: 'graphql',
  username: 'graphql',
  password: '1111',
  dialect: 'postgres'
});


const User = sequelize.define('user', {
    user_id : {
      type : Sequelize.INTEGER,
      autoIncrement : true,
      allowNull : false ,
      primaryKey : true
    },
    username : {
      type : Sequelize.STRING,
      unique : true,
      allowNull : false
    },
    password : {
      type : Sequelize.STRING,
      allowNull : false
    },
    date_joined : {
      type : Sequelize.DATE,
      allowNull : true,
    },
    bio : {
      type : Sequelize.STRING,
      allowNull : true
    },
    gender:{
      type : Sequelize.STRING,
      allowNull : true  
    },  
    phone :{
      type : Sequelize.STRING,
      allowNull : true
    },        
    website:{
      type : Sequelize.STRING,
      allowNull : true
    },     
    profile_image :{
      type : Sequelize.STRING,
      allowNull : true
    }
  },{
    tableName : 'user',
    timestamps : true
  }
)

const Image = sequelize.define('image',{
    image_id : { 
      type : Sequelize.INTEGER,
      autoIncrement : true,
      allowNull : false ,
      primaryKey : true
    },        
    file : {
      type : Sequelize.STRING,
      allowNull : false
    },       
    location : {
      type : Sequelize.STRING,
      allowNull : true
    },   
    content : {
      type : Sequelize.STRING,
      allowNull : true
    },    
  },{
    tableName : 'image',
    timestamps : true
  }
)

const Comment = sequelize.define('comment', {
    comment_id : {
      type : Sequelize.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    }, 
    message : {
      type : Sequelize.STRING,
      allowNull : false
    },   
  } , {
    tableName : 'comment',
    timestamps : true
  }
)

const Like = sequelize.define('like' , {
    like_id : {
      type : Sequelize.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    } 
  } , {
    tableName : 'like',
    timestamps : true
  }
)

const Follower = sequelize.define('follower' , { 
    id : {
      type : Sequelize.INTEGER,
      primaryKey : true,
      autoIncrement : true ,
      allowNull : false
    }
  },{
    tableName : 'follower',
    timestamps : false
  }
)

User.hasMany(Image ,{foreignKey:'user_id'})
Image.belongsTo(User ,{foreignKey:'user_id'})

Image.hasMany(Comment ,{foreignKey:'image_id'})
Comment.belongsTo(Image ,{foreignKey:'image_id'})

Image.hasMany(Like ,{foreignKey:'image_id'})
Like.belongsTo(Image ,{foreignKey:'image_id'})

User.hasMany(Comment ,{foreignKey:'user_id'})
Comment.belongsTo(User ,{foreignKey:'user_id'})

User.hasMany(Like ,{foreignKey:'user_id'})
Like.belongsTo(User ,{foreignKey:'user_id'})

User.belongsToMany(User , {as : 'from_id',through : Follower , foreignKey : 'from_id'})
User.belongsToMany(User , {as : 'to_id',through : Follower , foreignKey : 'to_id'})


sequelize.sync({
  force : true
})
.then(() =>
  User.create({
    username : 'hckcksrl',
    password : '1234',
    bio : 'ssibal'
  })
)
.then(()=>
  User.create({
    username : 'cksrl',
    password : '1234',
    bio : 'byungsin'
  })
)
.then(() =>
  User.create({
    username : 'woojin',
    password : '1234',
    bio : 'ukkk'
  })
)
.then(() => 
  Image.create({
    file : 'hckcksrl',
    location : 'daejeon',
    user_id : 1
  })
)
.then(()=>
  Image.create({
    file : 'cksrl',
    location : 'seoul',
    user_id : 2
  })
)
.then(()=>
  Comment.create({
    image_id : 1,
    message : 'ssibalnom',
    user_id : 2
  })
)
.then(()=>
  Comment.create({
    image_id : 1,
    message : 'nimiral',
    user_id : 3
  })
)
.then(()=>
  Like.create({
    image_id : 1,
    user_id : 1
  })
)
.then(()=>
  Like.create({
    image_id : 1,
    user_id : 3
  })
)


