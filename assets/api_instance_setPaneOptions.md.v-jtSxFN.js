import{_ as e,a as l,b as t,c as h,d as p}from"./chunks/index.ODxzPF0_.js";import{c as k,a2 as r,i as a,b as i,m as n,o as d}from"./chunks/framework.DYFzKSfR.js";import"./chunks/theme.x4Z5Tc0C.js";const F=JSON.parse('{"title":"setPaneOptions(options)","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api/instance/setPaneOptions.md","filePath":"api/instance/setPaneOptions.md","lastUpdated":1733247063000}'),E={name:"api/instance/setPaneOptions.md"},b=Object.assign(E,{setup(o){return(c,s)=>(d(),k("div",null,[s[0]||(s[0]=r(`<h1 id="setpaneoptions-options" tabindex="-1">setPaneOptions(options) <a class="header-anchor" href="#setpaneoptions-options" aria-label="Permalink to &quot;setPaneOptions(options)&quot;">​</a></h1><p><code>setPaneOptions</code> 设置窗口配置。</p><h2 id="reference" tabindex="-1">参考 <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;参考 {#reference}&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id?: string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    minHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dragEnabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    order</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;normal&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;maximize&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;minimize&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name?: string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      reverse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      inside</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;left&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;right&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      scrollZoomEnabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      gap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        top?: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        bottom</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      createRange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        from: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        to: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        range: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        realFrom: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        realTo: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        realRange: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        displayFrom: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        displayTo: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        displayRange: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      createTicks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        coord</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span></code></pre></div><h3 id="parameters" tabindex="-1">参数 <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;参数 {#parameters}&quot;">​</a></h3><ul><li><code>options</code> 窗口配置项。 <ul><li><code>id</code> 窗口id。</li><li><code>height</code> 高度。</li><li><code>minHeight</code> 最小高度。</li><li><code>dragEnabled</code> 是否可以拖拽调整高度。</li><li><code>order</code> 顺序。</li><li><code>state</code> 状态，支持 <code>normal</code> ， <code>maximize</code> 和 <code>minimize</code> 。</li><li><code>axis</code> 坐标轴配置。 <ul><li><code>name</code> 坐标轴名称。</li><li><code>reverse</code> 是否反向。</li><li><code>inside</code> 是否在内部。</li><li><code>position</code> 位置，支持 <code>left</code> 和 <code>right</code> 。</li><li><code>scrollZoomEnabled</code> 是否允许滚动缩放。</li><li><code>gap</code> 上下边距配置。 <ul><li><code>top</code> 上边距。</li><li><code>bottom</code> 下边距。</li></ul></li><li><code>createRange</code> 创建轴上取值范围回调方法。如果是x轴此方法无用。</li><li><code>createTicks</code> 创建分割信息回调方法。</li></ul></li></ul></li></ul><h3 id="returns" tabindex="-1">返回值 <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;返回值 {#returns}&quot;">​</a></h3><p><code>setPaneOptions</code> 返回 <code>undefined</code>。</p><h2 id="usage" tabindex="-1">用法 <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;用法 {#usage}&quot;">​</a></h2><h3 id="basic" tabindex="-1">基本使用 <a class="header-anchor" href="#basic" aria-label="Permalink to &quot;基本使用 {#basic}&quot;">​</a></h3>`,10)),a(e),s[1]||(s[1]=i("h3",{id:"dragEnabled",tabindex:"-1"},[n("不可调整高度 "),i("a",{class:"header-anchor",href:"#dragEnabled","aria-label":'Permalink to "不可调整高度 {#dragEnabled}"'},"​")],-1)),a(l),s[2]||(s[2]=i("h3",{id:"state",tabindex:"-1"},[n("窗口最小化 "),i("a",{class:"header-anchor",href:"#state","aria-label":'Permalink to "窗口最小化 {#state}"'},"​")],-1)),a(t),s[3]||(s[3]=i("h3",{id:"axis-basic",tabindex:"-1"},[n("设置坐标轴基础属性 "),i("a",{class:"header-anchor",href:"#axis-basic","aria-label":'Permalink to "设置坐标轴基础属性 {#axis-basic}"'},"​")],-1)),a(h),s[4]||(s[4]=i("h3",{id:"axis-extension",tabindex:"-1"},[n("坐标轴简单自定义 "),i("a",{class:"header-anchor",href:"#axis-extension","aria-label":'Permalink to "坐标轴简单自定义 {#axis-extension}"'},"​")],-1)),a(p)]))}});export{F as __pageData,b as default};
