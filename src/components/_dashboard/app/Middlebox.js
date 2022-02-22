// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Divider, Grid, Button } from '@mui/material';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.grey.darker,
  backgroundColor: theme.palette.action.selected
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
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
      <IconWrapperStyle>
        <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: 'black' }}>
          {props.machinename}
        </Typography>
      </IconWrapperStyle>
      <Grid container>
        <Grid item xs>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: 'black' }}>
            A
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs>
          <Typography variant="h2" sx={{ fontWeight: 'fontWeightBold', color: 'black' }}>
            B
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs sx={{ p: 1 }}>
          <Button variant="contained" color="error" fullWidth>
            Stop
          </Button>
        </Grid>
        <Grid item xs sx={{ p: 1 }}>
          <Button variant="contained" color="error" fullWidth>
            Stop
          </Button>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
