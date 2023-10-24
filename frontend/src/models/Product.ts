class Product {
    id: string
    name: string
    category: string
    price: string
    quantity: number

    constructor(
        id: string,
        name: string,
        category: string,
        price: string,
        quantity: number
    ) {
        this.id = id
        this.name = name
        this.category = category
        this.price = price
        this.quantity = quantity
    }
}

export default Product