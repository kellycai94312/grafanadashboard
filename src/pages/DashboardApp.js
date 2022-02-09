import { useEffect, useState } from 'react';
import moment from 'moment';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { Grafana, Graphite } from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [count, setCount] = useState(0);
  const [graphite, setGraphite] = useState([]);
  const [panelone, setPanelone] = useState('');
  const [paneltwo, setPaneltwo] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const fetchGraphiteData = () =>
    fetch(`${process.env.REACT_APP_GRAPHITE_URL_DEV}`)
      .then((response) => response.json())
      .then((data) => {
        const txt = data[0].datapoints.map((item) => `[ ${item[0]} , ${item[1]} ]`);
        setGraphite((graphite) => txt);
      });
  const panelsUrl = () => {
    const to = moment();
    const from = moment().add(-6, 'hours');
    setStartTime(from.format('LLL'));
    setEndTime(to.format('LLL'));
    setPanelone(
      `${process.env.REACT_APP_GRAFANA_URL_DEV}d-solo/21aYM4xnz/new-dashboard?orgId=1&from=${from}&to=${to}&panelId=4`
    );
    setPaneltwo(
      `${process.env.REACT_APP_GRAFANA_URL_DEV}d-solo/21aYM4xnz/new-dashboard?orgId=1&from=${from}&to=${to}&panelId=2`
    );
  };
  useEffect(() => {
    const timer = setInterval(() => {
      fetchGraphiteData();
      panelsUrl();
      // setCount((count) => count + 1);
    }, process.env.REACT_APP_DURATION_DEV);
    return () => clearInterval(timer);
  }, []);

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={4}>
            <Graphite text={graphite} />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Grafana url={panelone} panel="Gauge test" from={startTime} to={endTime} />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Grafana url={paneltwo} panel="Time series test" from={startTime} to={endTime} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
