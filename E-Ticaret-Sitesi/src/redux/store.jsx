import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/slices/productSlice'
import appRudecer from '../redux/slices/appSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        app: appRudecer
    },
})