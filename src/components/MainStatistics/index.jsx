import React from 'react';
import MainStatisticsItem from './MainStatisticsItem';

const MainStatistics = React.memo(() => (
  <div>
    <MainStatisticsItem />
    <MainStatisticsItem />
    <MainStatisticsItem />
    <MainStatisticsItem />
  </div>
));


export default MainStatistics;
