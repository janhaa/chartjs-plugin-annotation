(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{511:function(n,t,a){"use strict";a.r(t);var e=a(22),o=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"limited-lines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limited-lines"}},[this._v("#")]),this._v(" Limited lines")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:4>\nconst DATA_COUNT = 12;\nconst MIN = 10;\nconst MAX = 100;\n\nUtils.srand(8);\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }, {\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'line',\n  borderColor: 'green',\n  borderWidth: 3,\n  label: {\n    enabled: true,\n    backgroundColor: 'lightGreen',\n    borderRadius: 0,\n    color: 'green',\n    content: 'Summer time'\n  },\n  arrowHeads: {\n    start: {\n      enabled: true,\n      borderColor: 'green'\n    },\n    end: {\n      enabled: true,\n      borderColor: 'green'\n    }\n  },\n  xMax: 8,\n  xMin: 5,\n  xScaleID: 'x',\n  yMax: 110,\n  yMin: 110,\n  yScaleID: 'y'\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'line',\n  borderColor: 'green',\n  borderDash: [6, 6],\n  borderWidth: 1,\n  xMax: 5,\n  xMin: 5,\n  xScaleID: 'x',\n  yMax: 0,\n  yMin: 110,\n  yScaleID: 'y'\n};\n// </block:annotation2>\n\n// <block:annotation3:3>\nconst annotation3 = {\n  type: 'line',\n  borderColor: 'green',\n  borderDash: [6, 6],\n  borderWidth: 1,\n  xMax: 8,\n  xMin: 8,\n  xScaleID: 'x',\n  yMax: 0,\n  yMin: 110,\n  yScaleID: 'y'\n};\n// </block:annotation3>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scale: {\n      y: {\n        beginAtZero: true,\n        max: 120,\n        min: 0\n      }\n    },\n    plugins: {\n      annotation: {\n        drawTime: 'beforeDraw',\n        annotations: {\n          annotation1,\n          annotation2,\n          annotation3\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);