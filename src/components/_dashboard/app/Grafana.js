// material

import PropTypes from 'prop-types';

export default function Grafana(props) {
  if (props.expand === false) return null;
  return (
    <div>
      <iframe
        title="panel"
        src={props.url}
        width="100%"
        height="200px"
        frameBorder="0"
        allowtransparency="true"
      />
    </div>
  );
}

Grafana.propTypes = {
  expand: PropTypes.bool,
  url: PropTypes.node.isRequired
};
