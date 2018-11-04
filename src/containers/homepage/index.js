/* eslint-disable */

import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Timeline from './timeline';
import { updateTimeline } from '../../actions/timeline';
import Cloud from '../animation/cloud';
import Typing from '../animation/typing';
import Music from '../music';
import './index.scss';

const Homepage = (props) => {
  const { timeline, updateTimelineAction } = props;

  return (
    <div className="homepage">
      <Timeline timeline={timeline} updateTimeline={updateTimelineAction} />
      <Typing content={timeline.title} />
      <Music 
        url={timeline.backgroundMusicUrl}
        play={true}
      />
      <Cloud />
    </div>
  );
};

// Homepage.propTypes = {
//   timeline: PropsTypes.string,
//   step: PropsTypes.number,
//   updateTimelineAction: PropsTypes.func, // eslint-disable-line
// };

// Homepage.defaultProps = {
//   timeline: '',
//   step: 0,
// };

const mapStateToProps = ({ timeline }) => ({
  timeline: timeline.current,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTimelineAction: updateTimeline,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
