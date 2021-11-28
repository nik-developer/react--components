import React from 'react';

import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friend-list/FriendList';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import Profile from './components/Profile/Profile';

import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/Friend-list/friends.json';
import transactions from './components/transaction-history/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
