import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './reducers/products'

const store = configureStore({
    reducer: {
        product: productsReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store