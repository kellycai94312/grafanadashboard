// material
import { Card, CardHeader, Box } from '@mui/material';
import { green, red } from '@mui/material/colors';

export default function Machineside(props) {
  return (
    <Card>
      <CardHeader title="Running" sx={{ color: green[500] }} />
      <Box sx={{ p: 3, pb: 1 }} minHeight="100px">
        <embed src={props.packingspeed} width="100%" height="50px" frameBorder="0" />
        <embed src={props.accumulationfill} width="100%" height="50px" frameBorder="0" />
      </Box>
    </Card>
  );
}
