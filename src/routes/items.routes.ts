import { Router } from "express";
import itemsController from "../controllers/items.controller.js";

const router = Router()

router.get('/', itemsController.listItems)
router.get('/finished', itemsController.listFinishedItems)
router.get('/:id', itemsController.listItemById)
router.post('/', itemsController.insertItem)
router.patch('/:id', itemsController.modifyItem)
router.delete('/:id', itemsController.removeItem)

export default router