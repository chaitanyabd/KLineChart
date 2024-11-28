import { init, registerStyles } from 'klinecharts';

registerStyles('customTheme', {
  candle: {
    bar: {
      upColor: '#2b821d',
      upBorderColor: '#2b821d',
      upWickColor: '#2b821d',
      downColor: '#c12e34',
      downBorderColor: '#c12e34',
      downWickColor: '#c12e34',
    }
  }
});

const chart = init('setStyles-extension-chart');
chart.setStyles('customTheme');

fetch('/datas/kline.json')
  .then(res => res.json())
  .then(dataList => { chart.applyNewData(dataList); });