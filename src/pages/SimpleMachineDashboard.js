import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography, Divider } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { grey } from '@mui/material/colors';
// components
import Page from '../components/Page';
import { Machineside } from '../components/_dashboard/app';
// ----------------------------------------------------------------------

export default function SimpleMachineDashboard() {
  // const [count, setCount] = useState(0);
  // const [graphite, setGraphite] = useState([]);
  const [searchParams] = useSearchParams();
  const [machineName] = useState(searchParams.get('machine_name') || 'Missing');
  const [machineSerial] = useState(searchParams.get('machine_serial') || 'Missing');

  /*
  This function will replace placeholders in a string with values from the .env file `process.env` and query parameters like `machineSerial`.
  eg injectConfigVars("This machine is called {{machineName}}")
  returns "This machine is called XYZ"
  */
  const injectConfigVars = (str) => {
    const configValues = {
      ...process.env,
      machineName,
      machineSerial
    };
    return str.replace(/\{{(.*?)}}/g, (_, g) => configValues[g] || 'undefined');
  };

  return (
    <Page title="Machine Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ p: 1 }}>
          <Typography variant="h4" align="center" sx={{ color: '#FFFFFF' }}>
            Machine {machineName} ( {machineSerial} )
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs>
            <Machineside
              name="A"
              packingstate={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_A_DEV)}
              packingspeed={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_A_DEV)}
              accumulationfill={injectConfigVars(
                process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_A_DEV
              )}
            />
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightWidth: 5,
              borderColor: grey[800]
            }}
          />
          <Grid item xs>
            <Machineside
              name="B"
              packingstate={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_B_DEV)}
              packingspeed={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_B_DEV)}
              accumulationfill={injectConfigVars(
                process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_B_DEV
              )}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
