import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Videoplayer from './Videoplayer';
import testvideo from '../../../_mocks_/testvideo.mp4';
// import testvideourl from '../../../_mocks_/video';
export default function Vlcvideo(props) {
  const rtmpurl = props.url; // 'rtmp://localhost:1935/vod/file_example_MP4_480_1_5MG.mp4';
  const videoJsOptions = {
    autoplay: true,
    preload: 'auto',
    responsive: true,
    // width: '100,
    height: 400,
    errorDisplay: true,
    controls: true,
    fluid: true,
    sources: [
      {
        src: testvideo,
        type: 'video/mp4'
      }
    ]
  };
  return (
    <Box item margin={1} sx={{ height: '400px' }}>
      {
        // <ReactPlayer width="100%" url={testvideo} playing controls />
        // <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} />
      }
      <Carousel showThumbs={false} showIndicators={false} infiniteLoop>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} />
        </div>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} />
        </div>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} />
        </div>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} />
        </div>
      </Carousel>
    </Box>
  );
}
