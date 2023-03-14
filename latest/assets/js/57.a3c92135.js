(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{375:function(n,t,o){"use strict";o.r(t);var a=o(4),e=Object(a.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"magic-quadrant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#magic-quadrant"}},[this._v("#")]),this._v(" Magic quadrant")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:6>\nconst META = [[\n  {color: 'rgb(255, 174, 201)', backgroundColor: 'rgba(255, 174, 201, 0.5)', label: 'Niche players'},\n  {color: 'rgb(159, 168, 218)', backgroundColor: 'rgba(159, 168, 218, 0.5)', label: 'Visionaries'},\n], [\n  {color: 'rgb(255, 245, 157)', backgroundColor: 'rgba(255, 245, 157, 0.5)', label: 'Challengers'},\n  {color: 'rgb(165, 214, 167)', backgroundColor: 'rgba(165, 214, 167, 0.5)', label: 'Leaders'},\n]];\nconst DATA_COUNT = 12;\nconst MIN = 0.5;\nconst MAX = 9.5;\n\nconst data = {\n  datasets: [{\n    data: randomize(),\n    pointRadius: 8\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'box',\n  backgroundColor: (ctx) => gradient(ctx, META[1][0].backgroundColor),\n  xMax: 5,\n  yMin: 5,\n  label: {\n    content: META[1][0].label,\n    position: {\n      x: 'start',\n      y: 'start'\n    }\n  }\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'box',\n  backgroundColor: (ctx) => gradient(ctx, META[1][1].backgroundColor, true),\n  xMin: 5,\n  yMin: 5,\n  label: {\n    content: META[1][1].label,\n    position: {\n      x: 'end',\n      y: 'start'\n    }\n  }\n};\n// </block:annotation2>\n\n// <block:annotation3:3>\nconst annotation3 = {\n  type: 'box',\n  backgroundColor: (ctx) => gradient(ctx, META[0][0].backgroundColor),\n  xMax: 5,\n  yMax: 5,\n  label: {\n    content: META[0][0].label,\n    position: {\n      x: 'start',\n      y: 'end'\n    }\n  }\n};\n// </block:annotation3>\n\n// <block:annotation4:4>\nconst annotation4 = {\n  type: 'box',\n  backgroundColor: (ctx) => gradient(ctx, META[0][1].backgroundColor, true),\n  xMin: 5,\n  yMax: 5,\n  label: {\n    content: META[0][1].label,\n    position: {\n      x: 'end',\n      y: 'end'\n    }\n  }\n};\n// </block:annotation4>\n\n// <block:utils:5>\nfunction randomize() {\n  const xValues = Utils.numbers({count: DATA_COUNT, min: MIN, max: MAX});\n  const yValues = Utils.numbers({count: DATA_COUNT, min: MIN, max: MAX});\n  const values = [];\n  for (let i = 0; i < DATA_COUNT; i++) {\n    values.push({x: xValues[i], y: yValues[i], co: 'Company ' + (i + 1)});\n  }\n  return values;\n}\n\nfunction gradient({chart: {ctx}, element}, color, rtl = false) {\n  const g = ctx.createLinearGradient(element.x, element.y, element.x2, element.y);\n  g.addColorStop(rtl ? 1 : 0, color);\n  g.addColorStop(rtl ? 0 : 1, 'transparent');\n  return g;\n}\n\nfunction gridColor(context) {\n  if (context.tick.value === 5) {\n    return 'lightGray';\n  } else if (context.tick.value === 0 || context.tick.value === 10) {\n    return 'lightGray';\n  }\n  return 'transparent';\n}\n// </block:utils>\n\n/* <block:config:0> */\nconst config = {\n  type: 'scatter',\n  data,\n  options: {\n    layout: {\n      padding: {\n        top: 12\n      }\n    },\n    elements: {\n      boxAnnotation: {\n        borderWidth: 0,\n        label: {\n          drawTime: 'beforeDatasetsDraw',\n          display: true,\n          font: {\n            size: 20\n          }\n        }\n      }\n    },\n    scales: {\n      x: {\n        beginAtZero: true,\n        max: 10,\n        min: 0,\n        grid: {\n          drawTicks: false,\n          color: gridColor\n        },\n        ticks: {\n          display: false\n        },\n        title: {\n          display: true,\n          text: 'Completeness of vision',\n          padding: 10,\n          font: {\n            size: 20,\n            weight: 'bold'\n          }\n        }\n      },\n      y: {\n        display: true,\n        beginAtZero: true,\n        max: 10,\n        min: 0,\n        grid: {\n          drawTicks: false,\n          color: gridColor\n        },\n        ticks: {\n          display: false\n        },\n        title: {\n          display: true,\n          text: 'Ability to execute',\n          padding: 10,\n          font: {\n            size: 20,\n            weight: 'bold'\n          }\n        }\n      }\n    },\n    plugins: {\n      annotation: {\n        common: {\n          drawTime: 'beforeDraw'\n        },\n        annotations: {\n          annotation1,\n          annotation2,\n          annotation3,\n          annotation4\n        }\n      },\n      tooltip: {\n        mode: 'nearest',\n        intersect: true,\n        usePointStyle: true,\n        footerAlign: 'right',\n        footerColor: 'lightGray',\n        footerMarginTop: 10,\n        callbacks: {\n          title: (items) => items[0].raw.co,\n          labelColor({raw}) {\n            const x = raw.x > 5 ? 1 : 0;\n            const y = raw.y > 5 ? 1 : 0;\n            return {\n              borderColor: META[y][x].color,\n              backgroundColor: META[y][x].backgroundColor,\n              borderWidth: 3\n            };\n          },\n          label({raw}) {\n            const x = raw.x > 5 ? 1 : 0;\n            const y = raw.y > 5 ? 1 : 0;\n            return META[y][x].label;\n          },\n          footer(items) {\n            const {raw} = items[0];\n            return ['Completeness of vision: ' + raw.x.toFixed(2), 'Ability to execute: ' + raw.y.toFixed(2)];\n          }\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        const values = randomize();\n        dataset.data.forEach((p, idx) => {\n          const v = values[idx];\n          p.x = v.x;\n          p.y = v.y;\n          p.co = v.co;\n        });\n      });\n      chart.update();\n    }\n  },\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);