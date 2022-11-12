import connection from "../database/connection.js";
import { QueryResult } from "pg";
import { Item, ItemEntity } from "../protocols.js";

const getAllItems = (): Promise<QueryResult<ItemEntity>> => {
    return connection.query(`SELECT * FROM items;`)
}

const getItemById = ({ id }: Partial<ItemEntity>): Promise<QueryResult<ItemEntity>> => {
    return connection.query(`
        SELECT * FROM items WHERE id = $1;
    `, [id])
}

const getFinishedItems = (): Promise<QueryResult<{ itemsFinished: string }>> => {
    return connection.query(`
        SELECT COUNT(*) AS "itemsFinished" FROM items WHERE finished;
    `)
}

const setItem = ({ name }: Item): Promise<QueryResult<[]>> => {
    return connection.query(`
        INSERT INTO items (name) VALUES ($1)`
    , [name])
}

const updateItem = ({ id }: Partial<ItemEntity>, { name, finished, notes, summary }: Item): Promise<QueryResult<[]>> => {
    return connection.query(`
        UPDATE items 
        SET name=$1, finished=$2, notes=$3, summary=$4 
        WHERE id=$5;
    `, [name, finished, notes, summary, id])
}

const deleteItem = ({ id }: Partial<ItemEntity>): Promise<QueryResult<[]>> => {
    return connection.query(`
        DELETE FROM items WHERE id=$1;
    `, [id])
}

export default {
    getAllItems,
    getItemById,
    getFinishedItems,
    setItem,
    updateItem,
    deleteItem
}