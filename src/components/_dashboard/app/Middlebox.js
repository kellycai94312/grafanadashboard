// material
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Typography, Divider, Grid } from '@mui/material';
// ----------------------------------------------------------------------
import Logo from '../../Logo';

const RootStyle = styled('div')(() => ({
  boxShadow: 'none',
  textAlign: 'center',
  border: '10px',
  borderColor: grey[500],
  borderStyle: 'solid',
  padding: 0,
  backgroundColor: grey[800]
}));

// ----------------------------------------------------------------------
export default function Middlebox(props) {
  return (
    <RootStyle>
      <Grid item xs padding={3}>
        <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: grey[300] }}>
          {props.machinename}
        </Typography>
      </Grid>
      <Divider flexItem sx={{ borderRightWidth: 2 }} />
      <Grid item xs padding={3}>
        <Logo sx={{ margin: 'auto' }} />
      </Grid>
      <Divider flexItem sx={{ borderRightWidth: 2 }} />
      <Grid container>
        <Grid item xs padding={3} sx={{ background: props.bga }}>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: grey[300] }}>
            A
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2 }} />
        <Grid item xs padding={3} sx={{ background: props.bgb }}>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: grey[300] }}>
            B
          </Typography>
        </Grid>
      </Grid>
    </RootStyle>
  );
}

Middlebox.propTypes = {
  machinename: PropTypes.node.isRequired,
  bga: PropTypes.node.isRequired,
  bgb: PropTypes.node.isRequired
};
