import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './transaction-history-item';

import style from '../transaction-history/Transaction.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={style.TransactionTable}>
    <thead>
      <tr>
        <th className={style.row}>Type</th>
        <th className={style.row}>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(tableItem => (
        <tr key={tableItem.id}>
          <TransactionHistoryItem tableItem={tableItem} />
        </tr>
      ))}
    </tbody>
  </table>
);
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
