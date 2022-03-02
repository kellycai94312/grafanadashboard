import { Box } from '@mui/material';
import Videoplayer from './Videoplayer';
import testvideo from '../../../_mocks_/testvideo.mp4';
// import testvideourl from '../../../_mocks_/video';
export default function Vlcvideo(props) {
  const rtmpurl = 'rtmp://localhost:1935/vod/file_example_MP4_480_1_5MG.mp4';
  const videoJsOptions = {
    autoplay: true,
    preload: 'auto',
    responsive: true,
    // width: '100,
    height: 400,
    errorDisplay: true,
    // controls: true,
    fluid: true,
    sources: [
      {
        src: rtmpurl,
        type: 'rtmp/mp4'
      }
    ]
  };
  return (
    <Box item margin={1} sx={{ height: '400px' }}>
      {
        // <ReactPlayer width="100%" url={testvideo} playing controls />
      }
      <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} />
    </Box>
  );
}
