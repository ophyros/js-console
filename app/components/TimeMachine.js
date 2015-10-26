//DateFormat = require('../libs/dateFormat.js');

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
      outputFormat = params[formatIndex + 1];
      //time = DateFormat.format(now, outputFormat);
      let dd = now.getDate();
      if (dd < 10) dd = '0' + dd;
      let mm = now.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;
      let yy = now.getFullYear();
      return yy + '-' + mm + '-' + dd;
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