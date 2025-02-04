export type MenuItem = {
    id: number
    name: string
    price: number
}

export type OrderItem = Pick<MenuItem, 'id' | 'name' | 'price' > & {
    quantity: number
}
