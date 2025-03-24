import React from 'react'
import PizzaForm from './PizzaForm'
import store from '../state/store'
import OrderList from './OrderList'

export default function App() {
  return (
    <div id="app">
      <PizzaForm />
      <OrderList />
    </div>
  )
}
