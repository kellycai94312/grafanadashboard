// material
import { Card, CardHeader, Box, Typography } from '@mui/material';

export default function Grafana(props) {
  return (
    <Card>
      <CardHeader title="Grafana Analytic" subheader={props.panel} />
      <Box sx={{ p: 3, pb: 1 }} minHeight="300px">
        <Typography gutterBottom align="center" variant="caption">
          {props.from} ~ {props.to}
        </Typography>
        <embed title="panel" src={props.url} width="100%" height="400px" frameBorder="0" />
      </Box>
    </Card>
  );
}
