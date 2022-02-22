// material
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Typography, Divider, Grid, Button } from '@mui/material';
// ----------------------------------------------------------------------
import Logo from '../../Logo';

const RootStyle = styled('div')(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  border: '10px',
  borderColor: grey[500],
  borderStyle: 'solid',
  padding: 0,
  backgroundColor: grey[800]
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '2px',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
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
        <Grid item xs padding={3}>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: grey[300] }}>
            A
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2 }} />
        <Grid item xs padding={3}>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: grey[300] }}>
            B
          </Typography>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
