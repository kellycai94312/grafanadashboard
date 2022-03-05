import React from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-flash';

// import testvideo from '../../../_mocks_/testvideo.mp4';
// import testvideourl from '../../../_mocks_/video';

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    // 这里的this.props是上级传进来的video的options
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this.player);
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.player && this.props.index !== nextProps.play) {
      this.player.pause();
    } else {
      this.player.autoplay('muted');
    }
    return true;
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => {
              this.videoNode = node;
            }}
            className="video-js vjs-fluid"
          >
            <track kind="captions" label="caption" />
          </video>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  index: PropTypes.node.isRequired,
  play: PropTypes.node.isRequired
};
