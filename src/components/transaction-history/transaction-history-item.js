import React from 'react';
import PropTypes from 'prop-types';

import style from '../transaction-history/Transaction.module.css';

const TransactionHistoryItem = ({ tableItem }) => (
  <>
    <td className={style.row}>{tableItem.type}</td>
    <td className={style.row}>{tableItem.amount}</td>
    <td>{tableItem.currency}</td>
  </>
);
TransactionHistoryItem.propTypes = {
  tableItem: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionHistoryItem;
