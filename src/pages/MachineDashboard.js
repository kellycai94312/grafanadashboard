import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { Grafana, Machineside, Middlebox, Vlcvideo } from '../components/_dashboard/app';
// ----------------------------------------------------------------------

export default function MachineDashboard() {
  // const [count, setCount] = useState(0);
  // const [graphite, setGraphite] = useState([]);
  const [searchParams] = useSearchParams();
  const [machineName] = useState(searchParams.get("machine_name") || "Missing");
  const [machineSerial] = useState(searchParams.get("machine_serial") || "Missing");

  /*
  This function will replace placeholders in a string with values from the .env file `process.env` and query parameters like `machineSerial`.
  eg injectConfigVars("This machine is called {{machineName}}")
  returns "This machine is called XYZ"
  */
  const injectConfigVars = (str) => {
    const configValues = {
      ...process.env,
      machineName,
      machineSerial,
    };
    return str.replace(/\{{(.*?)}}/g, (_,g)=> configValues[g] || "undefined");
  }

  /*
   const fetchGraphiteData = () =>
//     fetch(`${process.env.REACT_APP_GRAPHITE_URL_DEV}`)
//       .then((response) => response.json())
//       .then((data) => {
//         const txt = data[0].datapoints.map((item, index) => {
//           let temp = '';
//           if (index < 10) temp = `[ ${item[0]} , ${item[1]} ] \n\r`;
//           return temp;
//         });
//         setGraphite('');
//         setCount(0);
//         setGraphite((graphite) => txt);
//       });
*/

  return (
    <Page title="Machine Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Machine {machineName} ( {machineSerial} ) Dashboard
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Machineside
              packingstate={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_A_DEV)}
              packingspeed={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_A_DEV)}
              accumulationfill={injectConfigVars(process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_A_DEV)}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Machineside
              packingstate={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_B_DEV)}
              packingspeed={injectConfigVars(process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_B_DEV)}
              accumulationfill={injectConfigVars(process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_B_DEV)}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ pt: 2, pb: 2 }}>
        <Grid container rowpacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4} sm={6}>
            <Middlebox machinename={machineName} machineserial={machineSerial} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Vlcvideo />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Vlcvideo />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={injectConfigVars(process.env.REACT_APP_PANEL_CHART1_SIDE_A_DEV)}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={injectConfigVars(process.env.REACT_APP_PANEL_CHART2_SIDE_A_DEV)}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={injectConfigVars(process.env.REACT_APP_PANEL_CHART3_SIDE_A_DEV)}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={injectConfigVars(process.env.REACT_APP_PANEL_CHART1_SIDE_B_DEV)}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={injectConfigVars(process.env.REACT_APP_PANEL_CHART2_SIDE_B_DEV)}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={injectConfigVars(process.env.REACT_APP_PANEL_CHART3_SIDE_B_DEV)}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
