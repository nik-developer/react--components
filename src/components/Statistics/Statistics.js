import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticksItem';

import style from '../Statistics/Statistics.module.css';

const colors = ['#66CDAA', '#3CB371	', '#9ACD32', '#6B8E23', '#DAA520'];

const Statistics = ({ title, stats }) => (
  <section className={style.card}>
    <h2 className={style.StatisticsTitle}>Upload stats{title}</h2>

    <ul className={style.StatisticsList}>
      {stats.map((statsItem, index) => (
        <li
          style={{ backgroundColor: colors[index] }}
          key={statsItem.id}
          className={style.StatisticsItem}
        >
          <StatisticsItem statsItem={statsItem} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
