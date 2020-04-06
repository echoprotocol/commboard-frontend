import React from 'react';
import MemoryStatisticsItem from './MemoryStatisticsItem';

const MemoryStatistics = React.memo(() => (
  <div>
    <MemoryStatisticsItem />
    <MemoryStatisticsItem />
  </div>
));


export default MemoryStatistics;
