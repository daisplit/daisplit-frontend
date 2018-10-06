import React from 'react';
import MyChart from './presentation/mychart';
import Table from './container/Table';

import { Animation } from 'mdbreact';

const home = () => {
  return (
    <Animation type="fadeIn">
      <MyChart />
      <Table style={{ paddingTop: 1 + 'rem' }} />
    </Animation>
  );
};

export default home;
