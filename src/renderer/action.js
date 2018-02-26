export const loadFile = file => ({
  type: 'LOAD_FILE',
  payload: file.path,
});

export const getVideoDuration = $video => ({
  type: 'GET_VIDEO_DURATION',
  payload: $video.duration,
});

export const setCurrentTime = percentage => ({
  type: 'SET_CURRENT_TIME',
  payload: percentage,
});
