import React from 'react';

import Card from '../Card/Card.js';

const OrderItem = ({ order }) => {
  const { id, createdAt, items } = order;

  return (
    <div className="d-flex flex-column justify-between mb-30">
      <h2>Мої замовлення #{id}</h2>
      <p>Дата cтворення: {new Date(createdAt).toLocaleString()}</p>
      <h3>Список товарів:</h3>
       <div className="d-flex justify-start flex-wrap ">
        {items.map((item,key) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default OrderItem;


 





