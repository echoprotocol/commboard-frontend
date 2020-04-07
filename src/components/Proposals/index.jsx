import React from 'react';
import ProposalsItem from './ProposalsItem';

const Proposals = React.memo(() => (
  <div>
    <ProposalsItem />
    <ProposalsItem />
    <ProposalsItem />
    ...
  </div>
));


export default Proposals;
