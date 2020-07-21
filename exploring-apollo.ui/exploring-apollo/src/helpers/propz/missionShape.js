import PropTypes from 'prop-types';

const missionShape = PropTypes.shape({
  missionId: PropTypes.number,
  missionName: PropTypes.string.isRequired,
  patchUrl: PropTypes.string.isRequired,
  missionStart: PropTypes.string.isRequired,
  missionEnd: PropTypes.string.isRequired,
  commander: PropTypes.string.isRequired,
  lmPilot: PropTypes.string.isRequired,
  mPilot: PropTypes.string.isRequired,
  profileId: PropTypes.number.isRequired,
});

export default { missionShape };