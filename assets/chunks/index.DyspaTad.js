import{C as t}from"./theme.Cpb_Ol9H.js";import{o as n,g as a,k as e}from"./framework.DYFzKSfR.js";const r=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('getSize-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\\nconst bounding = chart.getSize('candle_pane', 'main');"}`),p={__name:"index",setup(s){return(c,o)=>(n(),a(t,{chartId:"getSize-chart",code:e(r).js},null,8,["code"]))}};export{p as _};
