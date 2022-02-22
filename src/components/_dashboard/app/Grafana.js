// material
import { Card } from '@mui/material';

export default function Grafana(props) {
  return (
    <Card>
      <embed title="panel" src={props.url} width="100%" height="200px" frameBorder="0" />
    </Card>
  );
}
