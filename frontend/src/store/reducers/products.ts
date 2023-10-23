import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '../../models/Product'


type ProductsState = {
    itens: Product[]
}

const initialState: ProductsState = {
    itens: []
}

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
            const productAlreadyAdded = state.itens.find(
                (product) => product.name.toLowerCase() === action.payload.name.toLowerCase()
            )

            if (productAlreadyAdded) {
                alert('Produto já cadastrado!')
            } else {
                const lastProduct = state.itens[state.itens.length - 1]
                const newProduct = {
                    ...action.payload,
                    id: lastProduct ? lastProduct.id + 1 : 1
                }
                state.itens.push(newProduct)
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((product) => product.id !== action.payload)
            ]
        },
        edit: (state, action: PayloadAction<Product>) => {
            const productIndex = state.itens.findIndex((product) => product.id === action.payload.id)

            if (productIndex >= 0) {
                state.itens[productIndex] = action.payload
            }
        }
    }
})

export const { add, remove, edit } = productsSlice.actions
export default productsSlice.reducer