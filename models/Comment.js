// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/config');

// class Comment extends Model {}

// // Comment.init({
// //         id: {
// //             type: DataTypes.INTEGER,
// //             allowNull: false,
// //             primaryKey: true,
// //             autoIncrement: true,   
// //         },
// //         user_id: {
// //             type: DataTypes.INTEGER,
// //             allowNull: false,
// //             references: {
// //                 model: 'User',
// //                 key: 'id'
// //             }
// //         },
// //         comment_text: {
// //             type: DataTypes.STRING,
// //             allowNull: false,
// //         },
// //         createdAt: {
// //             type: DataTypes.DATE,
// //             allowNull: true,
// //         },
// //         updatedAt: {
// //             type: DataTypes.DATE,
// //             allowNull: true,
// //         },
// //         postId: {
// //             type: DataTypes.INTEGER,
// //             allowNull: false,
// //             references: {
// //                 model: 'post',
// //                 key: 'id',
// //             },
// //         }
// //     },
// //     {
// //         sequelize,
// //         timestamps: false,
// //         freezeTableName: true,
// //         underscored: true,
// //         modelName: 'comment',  
// //     }
// // );

// // module.exports = Comment;
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/config');
// class Comment extends Model {}
// Comment.init({
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     comment_text: {
//         type: DataTypes.STRING,
//         validate: {

//             len: [3]
//         }
//     },
//     user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'user',
//             key: 'id'
//         }
//     },
//     post_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'post',
//             key: 'id'
//         }
//     }
// }, {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'comment'
// });

//just body and see how far, ask ta about comment issues
module.exports = Comment;