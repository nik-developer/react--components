import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem = ({ statsItem }) => (
  <>
    <span>{statsItem.label}</span>
    <span> {statsItem.percentage}%</span>
  </>
);

StatisticsItem.propTypes = {
  statsItem: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;
