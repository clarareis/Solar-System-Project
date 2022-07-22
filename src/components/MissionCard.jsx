import PropTypes from 'prop-types';
import React from 'react';
import '../styles/MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="cardmissions">
        <p data-testid="mission-name">
          Nome:
          {' '}
          {name}
        </p>
        <p data-testid="mission-year">
          Ano:
          {' '}
          {year}
        </p>
        <p data-testid="mission-country">
          País:
          {' '}
          {country}
        </p>
        <p data-testid="mission-destination">
          Destino:
          {' '}
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
