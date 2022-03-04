import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography, Divider, Button } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { grey } from '@mui/material/colors';
// components
import Page from '../components/Page';
import { Grafana, Machineside, Middlebox, Vlcvideo } from '../components/_dashboard/app';
// ----------------------------------------------------------------------

export default function MachineDashboard() {
  // const [count, setCount] = useState(0);
  // const [graphite, setGraphite] = useState([]);
  const [sideABg, setSideABg] = useState('');
  const [sideBBg, setSideBBg] = useState('');
  const [chartAOpen, setChartAOpen] = useState(true);
  const [chartBOpen, setChartBOpen] = useState(true);
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

  const fetchGraphiteAData = () =>
    fetch(
      `${
        process.env.REACT_APP_RUN_MODE === 'dev'
          ? process.env.REACT_APP_GRAPHITE_URL_A_DEV
          : process.env.REACT_APP_GRAPHITE_URL_A_PROD
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const last = data[0].datapoints.slice(-1);
        // console.log(last[0][0]);
        setSideABg(last[0][0] >= 0 ? '#54D62C' : '#FF4842');
      });
  const fetchGraphiteBData = () =>
    fetch(
      `${
        process.env.REACT_APP_RUN_MODE === 'dev'
          ? process.env.REACT_APP_GRAPHITE_URL_B_DEV
          : process.env.REACT_APP_GRAPHITE_URL_B_PROD
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const last = data[0].datapoints.slice(-1);
        // console.log(last[0][0]);
        setSideBBg(last[0][0] >= 0 ? '#54D62C' : '#FF4842');
      });
  useEffect(() => {
    const timer = setInterval(
      () => {
        fetchGraphiteAData();
        fetchGraphiteBData();
      },
      process.env.REACT_APP_RUN_MODE === 'dev'
        ? process.env.REACT_APP_DURATION_DEV
        : process.env.REACT_APP_DURATION_PROD
    );
    return () => clearInterval(timer);
  }, []);
  const expandCollapseAChart = () => {
    setChartAOpen(!chartAOpen);
  };
  const expandCollapseBChart = () => {
    setChartBOpen(!chartBOpen);
  };
  return (
    <Page title="Machine Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ p: 1 }}>
          <Typography variant="h4" align="center" sx={{ color: '#FFFFFF' }}>
            Machine {machineName} ( {machineSerial} ) Dashboard
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs>
            <Machineside
              packingstate={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_A_DEV
                  : process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_A_PROD
              )}
              packingspeed={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_A_DEV
                  : process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_A_PROD
              )}
              accumulationfill={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_A_DEV
                  : process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_A_PROD
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
              packingstate={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_B_DEV
                  : process.env.REACT_APP_PANEL_PACKING_STATE_SIDE_B_PROD
              )}
              packingspeed={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_B_DEV
                  : process.env.REACT_APP_PANEL_PACKING_SPEED_SIDE_B_PROD
              )}
              accumulationfill={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_B_DEV
                  : process.env.REACT_APP_PANEL_ACCUMULATION_FILL_SIDE_B_PROD
              )}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container rowpacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4} sm={6}>
            <Middlebox
              machinename={machineName}
              machineserial={machineSerial}
              bga={sideABg}
              bgb={sideBBg}
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs>
            <Button
              variant="contained"
              color="error"
              size="medium"
              sx={{ width: '300px', marginLeft: '20px' }}
            >
              STOP A
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightWidth: 5,
              borderColor: grey[800]
            }}
          />
          <Grid item xs textAlign="right">
            <Button
              variant="contained"
              color="error"
              size="medium"
              sx={{ width: '300px', marginRight: '20px' }}
            >
              STOP B
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs>
            <Vlcvideo
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_VLC_URL_DEV
                  : process.env.REACT_APP_VLC_URL_PROD
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
            <Vlcvideo
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_VLC_URL_DEV
                  : process.env.REACT_APP_VLC_URL_PROD
              )}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs padding={1}>
            <Grafana
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_CHART1_SIDE_A_DEV
                  : process.env.REACT_APP_PANEL_CHART1_SIDE_A_PROD
              )}
              expand={chartAOpen}
            />
            <Grafana
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_CHART2_SIDE_A_DEV
                  : process.env.REACT_APP_PANEL_CHART2_SIDE_A_PROD
              )}
              expand={chartAOpen}
            />
            <Grafana
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_CHART3_SIDE_A_DEV
                  : process.env.REACT_APP_PANEL_CHART3_SIDE_A_PROD
              )}
              expand={chartAOpen}
            />
            <Button
              variant="outlined"
              fullWidth
              size="small"
              sx={{ color: grey[500], borderColor: grey[500], borderRadius: 0 }}
              onClick={() => expandCollapseAChart()}
            >
              {chartAOpen ? 'Collapse A Side Charts' : 'Expand A Side Charts'}
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderRightWidth: 5,
              borderColor: grey[800]
            }}
          />
          <Grid item xs padding={1}>
            <Grafana
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_CHART1_SIDE_B_DEV
                  : process.env.REACT_APP_PANEL_CHART1_SIDE_B_PROD
              )}
              expand={chartBOpen}
            />
            <Grafana
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_CHART2_SIDE_B_DEV
                  : process.env.REACT_APP_PANEL_CHART2_SIDE_B_PROD
              )}
              expand={chartBOpen}
            />
            <Grafana
              url={injectConfigVars(
                process.env.REACT_APP_RUN_MODE === 'dev'
                  ? process.env.REACT_APP_PANEL_CHART3_SIDE_B_DEV
                  : process.env.REACT_APP_PANEL_CHART3_SIDE_B_PROD
              )}
              expand={chartBOpen}
            />
            <Button
              variant="outlined"
              fullWidth
              size="small"
              sx={{ color: grey[500], borderColor: grey[500], borderRadius: 0 }}
              onClick={() => expandCollapseBChart()}
            >
              {chartBOpen ? 'Collapse B Side Charts' : 'Expand B Side Charts'}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
