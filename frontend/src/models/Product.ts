class Product {
    id: number
    name: string
    category: string
    price?: string
    quantity: string

    constructor(
        id: number,
        name: string,
        category: string,
        price: string,
        quantity: string
    ) {
        this.id = id
        this.name = name
        this.category = category
        this.price = price
        this.quantity = quantity
    }
}

export default Product