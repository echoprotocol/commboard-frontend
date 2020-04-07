import React from 'react';
import RatesItem from './RatesItem';
import PriceItem from './PriceItem';

const Rates = React.memo(() => (
  <div>
    <RatesItem />
    <RatesItem />
    <PriceItem />
  </div>
));

export default Rates;
