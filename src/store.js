import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from './Reducers'
export const store=configureStore({

    reducer:{
task:sliceReducer,
    }
})