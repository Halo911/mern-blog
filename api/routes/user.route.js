import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
//import needs curly braces for named exports and doesn't need them for the default one
/*
CommonJS is the traditional module system in Node.js where modules are imported using require and exported using module.exports.
ESM is the newer standard, which uses import and export statements, and is what's used in modern JavaScript development.
When you add "type": "module" to your package.json, you are telling Node.js to treat .js files as ESM by default.
Which could be an issue.
When using ESM, Node.js expects the full file path including the extension. 
*/

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);

export default router;
