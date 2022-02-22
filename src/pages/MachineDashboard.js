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
  const [searchParams, setSearchParams] = useSearchParams();
  const [machineName, setMachineName] = useState('');
  const [machineSerial, setMachineSerial] = useState('');
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
  const getParams = () => {
    setMachineName(searchParams.get('machine_name'));
    setMachineSerial(searchParams.get('machine_serial'));

    if (machineName === '') setMachineName('01');
    if (machineSerial === '') setMachineName('APA-AU-1231-34-X');
  };
  useEffect(() => {
    getParams();
  }, []);

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
              packingspeed={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&from=now-1h&to=now&panelId=5&refresh=5s&kiosk&var-machine_serial=${machineSerial}`}
              accumulationfill={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&from=now-1h&to=now&panelId=6&refresh=5s&kiosk&var-machine_serial=${machineSerial}`}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Machineside
              packingspeed={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&from=now-1h&to=now&panelId=7&refresh=5s&kiosk&var-machine_serial=${machineSerial}`}
              accumulationfill={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&from=now-1h&to=now&panelId=8&refresh=5s&kiosk&var-machine_serial=${machineSerial}`}
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
              url={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&kiosk=&refresh=5s&panelId=14&var-machine_serial=${machineSerial}`}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&kiosk=&refresh=5s&panelId=15&var-machine_serial=${machineSerial}`}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&kiosk=&refresh=5s&panelId=13&var-machine_serial=${machineSerial}`}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&kiosk=&refresh=5s&panelId=17&var-machine_serial=${machineSerial}`}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&kiosk=&refresh=5s&panelId=2&var-machine_serial=${machineSerial}`}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grafana
              url={`${process.env.REACT_APP_GRAFANA_URL_DEV}graphs/d-solo/21aYM4xnz/machine-dashboard?orgId=1&kiosk=&refresh=5s&panelId=16&var-machine_serial=${machineSerial}`}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
