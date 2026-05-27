import Router from 'express';
import {getAllPosts} from '../controllers/postController.js';
import {getPostById} from '../controllers/postController.js';
import {createPost} from '../controllers/postController.js';
import {updatePost} from '../controllers/postController.js';
import {deletePost} from '../controllers/postController.js';
const router=Router();

router.get("/posts",getAllPosts);

router.get("/posts/:id",getPostById);


router.post("/posts",createPost);

router.put("/posts/:id",updatePost);

router.delete("/posts/:id",deletePost);
    
export default router;


