(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{498:function(n,t,a){"use strict";a.r(t);var o=a(22),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"line-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#line-chart"}},[this._v("#")]),this._v(" Line Chart")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:4>\nconst DATA_COUNT = 8;\nconst MIN = 10;\nconst MAX = 100;\n\nUtils.srand(8);\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: [10, 20, 30, 40, 50, 60, 70, 80],\n  datasets: [{\n    data: Utils.numbers(numberCfg),\n  }, {\n    data: Utils.numbers(numberCfg),\n  }, {\n    data: Utils.numbers(numberCfg),\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'line',\n  scaleID: 'x',\n  borderWidth: 3,\n  borderColor: 'black',\n  value: 5,\n  label: {\n    rotation: 'auto',\n    content: 'Line at x=5',\n    enabled: true\n  },\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'line',\n  scaleID: 'x',\n  borderWidth: 3,\n  borderColor: 'black',\n  value: 90,\n  label: {\n    rotation: 'auto',\n    position: 'start',\n    backgroundColor: 'black',\n    content: 'Line at x=90',\n    enabled: true\n  }\n};\n// </block:annotation2>\n\n// <block:annotation3:3>\nconst annotation3 = {\n  type: 'box',\n  xMin: 75,\n  xMax: 85,\n  yMin: 80,\n  yMax: 90,\n  backgroundColor: 'rgba(250, 250, 0, 0.4)',\n  borderColor: 'rgba(0, 150, 0, 0.2)',\n  drawTime: 'beforeDatasetsDraw',\n  borderWidth: 0,\n  borderRadius: 0,\n};\n// </block:annotation3>\n\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      x: {\n        type: 'linear',\n        bounds: 'data'\n      }\n    },\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2,\n          annotation3\n        }\n      }\n    },\n  }\n};\n/* </block:config> */\n\nconst actions = [\n  {\n    name: 'Zoom out',\n    handler: function(chart) {\n      chart.scales.x.options.min = 0;\n      chart.scales.x.options.max = 100;\n      chart.update();\n    }\n  },\n  {\n    name: 'Zoom in',\n    handler: function(chart) {\n      chart.scales.x.options.min = 10;\n      chart.scales.x.options.max = 80;\n      chart.update();\n    }\n  },\n  {\n    name: 'Reset zoom',\n    handler: function(chart) {\n      chart.scales.x.options.min = undefined;\n      chart.scales.x.options.max = undefined;\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);