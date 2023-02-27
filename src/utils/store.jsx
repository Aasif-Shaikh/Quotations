import {configureStore} from '@reduxjs/toolkit'

import demoSlice from './demoSelice'
const store = configureStore({
    reducer : {
        demo : demoSlice.reducer
    }
})

export default store