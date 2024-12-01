import{a,c as o,a2 as t,o as c}from"./chunks/framework.DYFzKSfR.js";const h=JSON.parse('{"title":"🛠️ 从 V9 到 V10","description":"","frontmatter":{},"headers":[],"relativePath":"guide/v9-to-v10.md","filePath":"guide/v9-to-v10.md","lastUpdated":1733079804000}'),d={name:"guide/v9-to-v10.md"};function i(l,e,r,s,n,p){return c(),o("div",null,e[0]||(e[0]=[t('<h1 id="🛠️-从-v9-到-v10" tabindex="-1">🛠️ 从 V9 到 V10 <a class="header-anchor" href="#🛠️-从-v9-到-v10" aria-label="Permalink to &quot;🛠️ 从 V9 到 V10&quot;">​</a></h1><p>本文档将帮助你从 klinecharts 9.x 版本升级到 klinecharts 10.x 版本，如果你是 8.x 或者更老的版本，请先参考 <a href="https://v9.klinecharts.com/guide/v8-to-v9" target="_blank" rel="noreferrer">v8 到 v9</a> 升级到 9.x。</p><h2 id="样式配置调整" tabindex="-1">样式配置调整 <a class="header-anchor" href="#样式配置调整" aria-label="Permalink to &quot;样式配置调整&quot;">​</a></h2><ul><li>删除 <code>yAxis.position</code> ， <code>yAxis.type</code> ， <code>yAxis.inside</code> 和 <code>yAxis.inside</code> ，请使用窗口配置 <code>axis</code> 中的属性代替。详情参阅图表API <a href="/api/chart/init#parameters">init(dcs, options)</a> ，实例API <a href="/api/instance/createIndicator#parameters">createIndicator(value, isStack, paneOptions)</a> 和 <a href="/api/instance/setPaneOptions#parameters">setPaneOptions(options)</a> 。</li><li>删除 <code>overlay.rectText</code> 。</li></ul><h2 id="api调整" tabindex="-1">API调整 <a class="header-anchor" href="#api调整" aria-label="Permalink to &quot;API调整&quot;">​</a></h2><h3 id="图表api" tabindex="-1">图表API <a class="header-anchor" href="#图表api" aria-label="Permalink to &quot;图表API&quot;">​</a></h3><ul><li>删除 <code>utils.drawArc(ctx, arc, styles)</code> ，<code>utils.drawCircle(ctx, circle, styles)</code> ， <code>utils.drawLine(ctx, line, styles)</code> ，<code>utils.drawPolygon(ctx, polygon, styles)</code> ， <code>utils.drawRect(ctx, rect, styles)</code> ，<code>utils.drawText(ctx, text, styles)</code> ， <code>utils.drawRectText(ctx, rectText, styles)</code>，请使用 <code>getFigureClass(name)</code> 代替。</li><li><code>init(dcs, options)</code> ， <code>options.layout</code> 子项中的 <code>position</code> 变更为 <code>order</code> ， <code>options.customApi</code> 中的 <code>formatDate(dateTimeFormat, timestamp, format, type)</code> 变更为 <code>formatDate(timestamp, format, type)</code> ， <code>options.thousandsSeparator</code> 变更为对象 <code>{ sign, format }</code> ， <code>options.decimalFoldThreshold</code> 变更为 <code>options.decimalFold</code> 。</li></ul><h3 id="实例api" tabindex="-1">实例API <a class="header-anchor" href="#实例api" aria-label="Permalink to &quot;实例API&quot;">​</a></h3><ul><li>删除 <code>setPriceVolumePrecision(pricePrecision, volumePrecision)</code> ，请使用 <code>setPrecision(precision)</code> 代替。</li><li>删除 <code>applyMoreData(dataList, more, callback)</code> ， <code>setLoadDataCallback(cb)</code> 和 <code>loadMore(cb)</code> ，请使用 <code>setLoadMoreDataCallback(cb)</code> 代替。</li><li>删除 <code>getIndicatorByPaneId(paneId, name)</code> ，请使用 <code>getIndicators(filter)</code> 代替。</li><li>删除 <code>getOverlayById(id)</code> ，请使用 <code>getOverlays(filter)</code> 代替。</li><li><code>applyNewData(dataList, more, callback)</code> 变更为 <code>applyNewData(dataList, more)</code> 。</li><li><code>updateData(data, callback)</code> 变更为 <code>updateData(data)</code> 。</li><li><code>getBarSpace()</code> 返回值变更为对象。</li></ul><h2 id="自定义扩展调整" tabindex="-1">自定义扩展调整 <a class="header-anchor" href="#自定义扩展调整" aria-label="Permalink to &quot;自定义扩展调整&quot;">​</a></h2><ul><li>指标 <code>createTooltipDataSource</code> 方法返回值 <code>values</code> 变更为 <code>legends</code> 。</li><li>删除内置的基础图形 <code>rectText</code> ，请使用 <code>text</code> 代替。</li></ul>',11)]))}const m=a(d,[["render",i]]);export{h as __pageData,m as default};
