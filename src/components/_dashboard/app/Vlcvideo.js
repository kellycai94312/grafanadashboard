import { Box } from '@mui/material';

export default function Vlcvideo(props) {
  return (
    <Box item margin={1} sx={{ height: '200px', backgroundColor: '#FFFFFF' }}>
      <video width="100%" height="100%">
        <source src={props.url} />
        <track kind="captions" label="video" />
      </video>
    </Box>
  );
}
