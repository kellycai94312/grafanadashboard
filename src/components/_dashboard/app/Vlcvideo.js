import { Box } from '@mui/material';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Videoplayer from './Videoplayer';
import testvideo from '../../../_mocks_/testvideo.mp4';
// import testvideourl from '../../../_mocks_/video';
export default function Vlcvideo() {
  // const rtmpurl = props.url; // 'rtmp://localhost:1935/vod/file_example_MP4_480_1_5MG.mp4';
  const [autoplay, setAutoplay] = useState(0);
  const videoJsOptions = {
    autoplay: true,
    preload: 'auto',
    responsive: true,
    // width: '100,
    height: 400,
    loop: true,
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

  const handleChange = (index) => {
    setAutoplay(index);
  };
  return (
    <Box item margin={1} sx={{ height: '400px' }}>
      {
        // <ReactPlayer width="100%" url={testvideo} playing controls />
        // <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} />
      }
      <Carousel showThumbs={false} showIndicators={false} infiniteLoop onChange={handleChange}>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} play={autoplay} index={0} />
        </div>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} play={autoplay} index={1} />
        </div>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} play={autoplay} index={2} />
        </div>
        <div>
          <Videoplayer {...videoJsOptions} sx={{ width: '100%' }} play={autoplay} index={3} />
        </div>
      </Carousel>
    </Box>
  );
}

/*
Vlcvideo.propTypes = {
  url: PropTypes.node.isRequired
};
*/
