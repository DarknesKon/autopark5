import PropTypes from 'prop-types';

const Card = ({ title, count, icon }) => (
  <div className="card">
    <div className="card-inner">
      <h3>{title}</h3>
      <span className="material-icons-outlined">{icon}</span>
    </div>
    <h1>{count}</h1>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Card;
