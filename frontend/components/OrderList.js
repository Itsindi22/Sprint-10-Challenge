import React, {useState} from 'react'
import { useGetOrdersQuery } from '../state/orderApi'

export default function OrderList() {
const {data: orders} = useGetOrdersQuery();
const [sizeFilter, setSizeFilter] = useState("All");

let filterOrders =orders?.filter((order) => {
  if (sizeFilter === "All") {
    return true;
  }
  return order.size === sizeFilter
})
return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          filterOrders?.map((order) => {
            const toppingsCount = order.toppings?.length || 0;
            return (
              <li key={order.id}>
                <div>
                {order.customer} ordered a size {order.size} with  {toppingsCount}{""}
                 {toppingsCount === 1 ? "topping" : "toppings"}
                  </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        { ['All', 'S', 'M', 'L'].map((size) => {
            const className = `button-filter${size === sizeFilter ? ' active' : ""}`;
            return (
               <button
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}
              onClick={() => setSizeFilter(size)}
              >
                {size}
              </button>
            );
})}
        </div>
    </div>
  )
}