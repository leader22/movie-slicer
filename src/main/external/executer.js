const { exec } = require('child_process');

module.exports = function(evName, cmd, sender) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      return sender.send(`${evName}:result`, {
        type: 'err',
        payload: err,
      });
    }

    // ffmpeg and ffprobe puts logs to stderr...
    return sender.send(`${evName}:result`, {
      type: 'ok',
      payload: stderr || stdout,
    });
  });
};
