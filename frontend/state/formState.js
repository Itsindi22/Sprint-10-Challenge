import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form_state',
  initialState: {
    fullName: '',
    size: '',
    toppings: []
  },
  reducers: {
    updateFullName: (state, action) => {
        state.fullName = action.payload
    },
    updateSize: (state, action) => {
        state.size = action.payload
    },
    updateTopping: (state, action) => {
        if (state.toppings.includes(action.payload)) {
            state.toppings = state.toppings.filter(topping => topping !== action.payload)
        }
        else {
            state.toppings.push(action.payload)
        }
    },
clearForm:(state) => {
    state.fullName = ''
    state.size = ''
    state.toppings = []
}
  

}
})
export default formSlice.reducer
export const { updateFullName, updateSize, updateTopping,clearForm } = formSlice.actions
