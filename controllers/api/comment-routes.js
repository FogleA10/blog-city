// const router = require('express').Router();
// const { Comment } = require('../../models/');
// const withAuth = require('../../utils/auth');

// // router.get('/', withAuth, async (req, res) => {
// //   await Comment.findAll({})
// //     .then(commentData => res.json(commentData))
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     })
// // });

// // router.get('/:id', withAuth, async (req, res) => {
// //   await Comment.findAll({
// //     where: {
// //       id: req.params.id
// //     }
// //   })
// //     .then(commentData => res.json(commentData))
// //     .catch(err => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     });
// // });




// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       ...req.body,
//       userId: req.session.userId,
//     });
//     res.json(newComment);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// // router.put('/:id', withAuth, async (req, res) => {
// //   await Comment.update({
// //     comment: req.body.comment
// //   }, {
// //     where: {
// //       id: req.params.id
// //     }
// //   })
// //     .then(commentData => {
// //       if (!commentData) {
// //         res.status(404).json({ message: 'Comment with this ID not found' });
// //         return;
// //       }
// //       res.json(commentData);
// //   })
// //     .catch(err => {
// //     console.log(err);
// //     res.status(500).json(err);
// //   });
// // });

// // router.delete('/:id', withAuth, (req, res) => {
// //   Comment.destroy({
// //     where: {
// //       id: req.params.id
// //     }
// //   })
// //   .then(commentData => {
// //     if (!commentData) {
// //       res.status(404).json({ message: 'Comment with this ID not found' });
// //       return;
// //     }
// //     res.json(commentData);
// //   })
// //   .catch(err => {
// //     console.log(err);
// //     res.status(500).json(err);
// //   });
// // });

// module.exports = router;
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', (req, res) => {
//     Comment.findAll({})
//         .then(dbCommentData => res.json(dbCommentData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// });

// router.get('/:id', (req, res) => {
//     Comment.findAll({
//             where: {
//                 id: req.params.id
//             }
//         })
//         .then(dbCommentData => res.json(dbCommentData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// });


//  ! COME BACK HERE
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newComment = await Comment.create({
//       ...req.body,
//       userId: req.session.userId,
//     });
//     res.json(newComment);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', withAuth, (req, res) => {
//     if (req.session) {
//         Comment.create({
//                 comment_text: req.body.comment_text,
//                 post_id: req.body.post_id,
//                 user_id: req.session.user_id,
//             })
//             .then(dbCommentData => res.json(dbCommentData))
//             .catch(err => {
//                 console.log(err);
//                 res.status(400).json(err);
//             })
//     }
// });

// router.put('/:id', withAuth, (req, res) => {
//     Comment.update({
//         comment_text: req.body.comment_text
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(dbCommentData => {
//         if (!dbCommentData) {
//             res.status(404).json({ message: 'No comment found with this id' });
//             return;
//         }
//         res.json(dbCommentData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//     Comment.destroy({
//         where: {
//             id: req.params.id
//         }
//     }).then(dbCommentData => {
//         if (!dbCommentData) {
//             res.status(404).json({ message: 'No comment found with this id' });
//             return;
//         }
//         res.json(dbCommentData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });
module.exports = router;
