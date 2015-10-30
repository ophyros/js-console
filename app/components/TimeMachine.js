var DateFormat = require('../libs/dateFormat');

class TimeMachine {
  constructor() {
    this.startTime = Date.now();
  }
  
  getTime(params) {
    let now = new Date();
    let nowWithTimeZone = 0;
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      };
    let timezoneIndex = params.indexOf('--timezone');
    let formatIndex = params.indexOf('--format');
    let outputFormat = '';
    if (timezoneIndex >= 0) {
      let timezone = params[timezoneIndex + 1];
      nowWithTimeZone = now.getTime() + (+timezone * 3600000);
      now.setTime(nowWithTimeZone);
    }
    if (formatIndex >= 0) {
      return DateFormat.format.date(now, params[formatIndex + 1]);
    } else {
      return now.toLocaleString('ru', options);
    }
    
  }
  
  getUptime() {
    let uptime = Date.now() - this.startTime;
    let result = 'up ';
    let sec = Math.floor(uptime / 1000);
    if (sec < 60) {
      result += sec + ' sec';
    } else {
      let min = Math.floor(uptime / 60000);
      result += min + ' min';
    }
    return result;
  }
  
}

export default TimeMachine;