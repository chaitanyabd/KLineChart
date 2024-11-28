import { init } from 'klinecharts';

const chart = init('setLocale-basic-chart');
chart.setLocale('zh-CN');

fetch('/datas/kline.json')
  .then(res => res.json())
  .then(dataList => { chart.applyNewData(dataList); });