import React from 'react';

export default function CardItem(props){
    return <tr>
      <th scope="row">{props.product.name}</th>
      <td>${props.product.price}</td>
      <td>{props.button}</td>
    </tr>
}