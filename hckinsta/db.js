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
      unique : true,

    },
    username : {
      type : Sequelize.STRING,
      unique : true,
      allowNull : false,
      primaryKey : true,
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

User.hasMany(Image ,{foreignKey:'username'})
Image.belongsTo(User ,{foreignKey:'username'})

Image.hasMany(Comment ,{foreignKey:'image_id'})
Comment.belongsTo(Image ,{foreignKey:'image_id'})

Image.hasMany(Like ,{foreignKey:'image_id'})
Like.belongsTo(Image ,{foreignKey:'image_id'})

User.hasMany(Comment ,{foreignKey:'username'})
Comment.belongsTo(User ,{foreignKey:'username'})

User.hasMany(Like ,{foreignKey:'username'})
Like.belongsTo(User ,{foreignKey:'username'})

User.belongsToMany(User , {as : 'from_username',through : Follower , foreignKey : 'from_username'})
User.belongsToMany(User , {as : 'to_username',through : Follower , foreignKey : 'to_username'})


sequelize.sync({
  force : true
})
.then(() =>
  User.create({
    username : 'hckcksrl',
    password : '1234',
    bio : 'Hi'
  })
)
.then(()=>
  User.create({
    username : 'cksrl',
    password : '1234',
    bio : 'Good'
  })
)
.then(() =>
  User.create({
    username : 'woojin',
    password : '1234',
    bio : 'Hello'
  })
)
.then(() => 
  Image.create({
    file : 'hckcksrl',
    location : 'daejeon',
    username : 'hckcksrl'
  })
)
.then(()=>
  Image.create({
    file : 'cksrl',
    location : 'seoul',
    username : 'hckcksrl'
  })
)
.then(()=>
  Comment.create({
    image_id : 1,
    message : 'Oh! Thats Great',
    username : 'cksrl'
  })
)
.then(()=>
  Comment.create({
    image_id : 1,
    message : 'HoHoHo',
    username : 'hckcksrl'
  })
)
.then(()=>
  Like.create({
    image_id : 1,
    username : 'woojin'
  })
)
.then(()=>
  Like.create({
    image_id : 1,
    username : 'hckcksrl'
  })
)


