export type ItemEntity = {
    id: string | number,
    name: string,
    finished: boolean,
    notes?: string,
    summary?: string
}

export type Item = Omit<ItemEntity, "id">
