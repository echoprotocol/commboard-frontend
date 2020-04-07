import React from 'react';
import BalancesItem from './BalancesItem';

const Balances = React.memo(() => (
  <div>
    <BalancesItem />
    <BalancesItem />
    <BalancesItem />
    <BalancesItem />
  </div>
));


export default Balances;
