(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{389:function(n,t,o){"use strict";o.r(t);var a=o(4),e=Object(a.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"intro"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[this._v("#")]),this._v(" Intro")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:3>\nUtils.srand(8);\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n    type: 'line',\n    label: 'Dataset 1',\n    borderColor: 'rgb(54, 162, 235)',\n    borderWidth: 2,\n    fill: false,\n    data: Utils.numbers({count: 7, min: -100, max: 100}),\n  }, {\n    type: 'bar',\n    label: 'Dataset 2',\n    backgroundColor: 'rgb(255, 99, 132)',\n    data: Utils.numbers({count: 7, min: -100, max: 100}),\n    borderColor: 'white',\n    borderWidth: 2\n  }, {\n    type: 'bar',\n    label: 'Dataset 3',\n    backgroundColor: 'rgb(75, 192, 192)',\n    data: Utils.numbers({count: 7, min: -100, max: 100}),\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'line',\n  borderColor: 'black',\n  borderWidth: 5,\n  click: function({chart, element}) {\n    console.log('Line annotation clicked');\n  },\n  label: {\n    backgroundColor: 'red',\n    content: 'Test Label',\n    display: true\n  },\n  scaleID: 'y',\n  value: Utils.rand(-100, 100)\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'box',\n  backgroundColor: 'rgba(101, 33, 171, 0.5)',\n  borderColor: 'rgb(101, 33, 171)',\n  borderWidth: 1,\n  click: function({chart, element}) {\n    console.log('Box annotation clicked');\n  },\n  drawTime: 'beforeDatasetsDraw',\n  xMax: 'April',\n  xMin: 'February',\n  xScaleID: 'x',\n  yMax: Utils.rand(-100, 100),\n  yMin: Utils.rand(-100, 100),\n  yScaleID: 'y'\n};\n// </block:annotation2>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = Utils.numbers({count: 7, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n  output: 'console.log output is shown here, click one of the annotations'\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);