import React, { memo } from 'react';
import MainStatisticsItem from './MainStatisticsItem';

const MainStatistics = () => (
  <div>
    <MainStatisticsItem />
    <MainStatisticsItem />
    <MainStatisticsItem />
    <MainStatisticsItem />
  </div>
);


export default memo(MainStatistics);
