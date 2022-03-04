// material
import { Card, CardHeader, Box, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';

export default function Machineside(props) {
  return (
    <Box sx={{ p: 3, pb: 1 }} minHeight="100px">
      <iframe src={props.packingstate} width="100%" height="90px" frameBorder="0" allowtransparency="true" />
      <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
        PACKING SPEED
      </Typography>
      <iframe src={props.packingspeed} width="100%" height="50px" frameBorder="0" allowtransparency="true" />
      <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
        ACCUMULATION FILL
      </Typography>
      <iframe src={props.accumulationfill} width="100%" height="50px" frameBorder="0" allowtransparency="true" />
    </Box>
  );
}
