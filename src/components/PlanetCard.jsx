import PropTypes from 'prop-types';
import React from 'react';
import '../styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const texto = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ planetImage } alt={ texto } className="planets" />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
