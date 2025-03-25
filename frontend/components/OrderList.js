import React, { useState } from 'react';
import { useGetOrdersQuery } from '../state/orderApi';

export default function OrderList() {
  const { data: orders } = useGetOrdersQuery();
  const [sizeFilter, setSizeFilter] = useState('All');

  // Filter orders based on selected size
  const filteredOrders = orders?.filter((order) => sizeFilter === 'All' || order.size === sizeFilter);

  // Helper function to format order description
  const formatOrderDescription = (order) => {
    const toppingsCount = order.toppings?.length || 0;
    const toppingsText = toppingsCount === 0 ? 'no toppings' : `${toppingsCount} ${toppingsCount === 1 ? 'topping' : 'toppings'}`;
    return `${order.customer} ordered a size ${order.size} with ${toppingsText}`;
  };

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {filteredOrders?.map((order) => (
          <li key={order.id}>
            <div>{formatOrderDescription(order)}</div>
          </li>
        ))}
      </ol>

      <div id="sizeFilters">
        <span>Filter by size:</span>
        {['All', 'S', 'M', 'L'].map((size) => (
          <button
            key={size}
            data-testid={`filterBtn${size}`}
            className={`button-filter${size === sizeFilter ? ' active' : ''}`}
            onClick={() => setSizeFilter(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
