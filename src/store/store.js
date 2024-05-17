import { configureStore } from '@reduxjs/toolkit'
import formSlice from './formSlice'
import headerSlice from './headerSlice'

const store = configureStore({
    reducer: {
        form: formSlice,
        header: headerSlice
    }
})
export default store