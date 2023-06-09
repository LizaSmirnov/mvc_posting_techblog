const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post')
//but we are in a continuos development environment

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey:'post_id'
});

User.hasMany(Comment, {
    foreignKey:'user_id'
});

User.hasMany(Post, {
    foreignKey:'user_id'
});

Post.hasMany(Comment, {
    foreignKey:'post_id'
})
module.exports = { User , Comment, Post  }
