import { Card, CardHeader, Box } from '@mui/material';
import ReactPlayer from 'react-player';

export default function Vlcvideo(props) {
  return (
    <Card>
      <CardHeader title="VLC video" subheader="" />
      <Box sx={{ p: 3, pb: 1 }}>
        <ReactPlayer url={props.url} />
      </Box>
    </Card>
  );
}
