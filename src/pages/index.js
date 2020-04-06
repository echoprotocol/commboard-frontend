import React from 'react';
import Header from '../components/layout/Header';
import Page from '../components/layout/Page';
import Footer from '../components/layout/Footer';
import Dashboard from '../components/layout/Dashboard';
import SideBar from '../components/layout/Sidebar';
import MainStatistics from '../components/MainStatistics';
import MemoryStatistics from '../components/MemoryStatistics';
import Balances from '../components/Balances';
import Rates from '../components/Rates';
import Proposals from '../components/Proposals';
import MessageLogs from '../components/MessageLogs';
import Logs from '../components/Logs';

const Index = () => (
  <div>
    <Header />
    <Page>
      <Dashboard>
        <MainStatistics />
        <MemoryStatistics />
        <Balances />
        <Rates />
      </Dashboard>
      <SideBar>
        <Proposals />
        <MessageLogs />
        <Logs />
      </SideBar>
    </Page>
    <Footer />
  </div>
);

export default Index;
