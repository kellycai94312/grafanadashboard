// material
import { Card } from '@mui/material';

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
