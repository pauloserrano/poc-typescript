import { Request, Response } from "express";
import itemsRepository from "../repositories/items.repository.js";
import { Item } from "../protocols.js";

const listItems = async (req: Request, res: Response) => {
    try {
        const { rows: items } = await itemsRepository.getAllItems()
        res.send(items)
    } catch (error) {
        console.error(error)
    }
}

const listFinishedItems = async (req: Request, res: Response) => {
    try {
        const { rows: [ total ] } = await itemsRepository.getFinishedItems()
        res.send(total)
    } catch (error) {
        console.error(error)
    }
}

const listItemById = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const { rows: [ item ] } = await itemsRepository.getItemById({ id })

        if (!item){
            res.sendStatus(404)
        }
        
        res.send(item)
    } catch (error) {
        console.error(error)
    }
}

const insertItem = async (req: Request, res: Response) => {
    const item = req.body as Item

    try {
        await itemsRepository.setItem({ ...item })
        res.sendStatus(201)
    } catch (error) {
        console.error(error)
    }
}

const modifyItem = async (req: Request, res: Response) => {
    const { id } = req.params
    const changes: Partial<Item> = req.body

    try {
        const { rows: [ item ] } = await itemsRepository.getItemById({ id })

        if (!item){
            res.sendStatus(404)
        }

        await itemsRepository.updateItem({ id }, {
            name: changes.name || item.name,
            finished: changes.finished || item.finished,
            notes: changes.notes || item.notes,
            summary: changes.summary || item.summary
        })
        
        res.send()
    } catch (error) {
        console.error(error)
    }
}

const removeItem = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const { rows: [ item ] } = await itemsRepository.getItemById({ id })

        if (!item) {
            res.sendStatus(404)
        }

        await itemsRepository.deleteItem({ id })
        res.send()
    } catch (error) {
        console.error(error)
    }
}

export default {
    listItems,
    listItemById,
    listFinishedItems,
    insertItem,
    modifyItem,
    removeItem
}