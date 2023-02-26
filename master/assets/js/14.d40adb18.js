(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{265:function(t,e,o){t.exports=o.p+"assets/img/elementPolygonProps.67d2feff.png"},368:function(t,e,o){"use strict";o.r(e);var n=o(4),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"polygon-annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polygon-annotations"}},[t._v("#")]),t._v(" Polygon Annotations")]),t._v(" "),e("p",[t._v("Polygon annotations are used to mark whatever polygon (for instance triangle, square or pentagon) on the chart area. This can be useful for highlighting values that are of interest.")]),t._v(" "),e("chart-editor",{attrs:{code:"/* <block:options:0> */\nconst options = {\n  plugins: {\n    annotation: {\n      annotations: {\n        pentagon: {\n          type: 'polygon',\n          xValue: 1,\n          yValue: 60,\n          sides: 5,\n          radius: 60,\n          backgroundColor: 'rgba(255, 99, 132, 0.25)'\n        }\n      }\n    }\n  }\n};\n/* </block:options> */\n\n/* <block:config:1> */\nconst config = {\n  type: 'line',\n  data: {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, 80, 81, 56, 55, 40],\n      fill: false,\n      borderColor: 'rgb(75, 192, 192)',\n      tension: 0.1\n    }]\n  },\n  options\n};\n/* </block:config> */\n\nmodule.exports = {\n  config\n};\n"}}),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h3",{attrs:{id:"polygon-annotation-specific-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polygon-annotation-specific-options"}},[t._v("#")]),t._v(" Polygon annotation specific options")]),t._v(" "),e("p",[t._v("The following options are available for polygon annotations.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("backgroundShadowColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/guide/options.html#color"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'transparent'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderCapStyle")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'butt'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderJoinStyle")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'miter'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderWidth")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#point"}},[e("code",[t._v("point")])])]),t._v(" "),e("td",[e("code",[t._v("object")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("{radius: 0}")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("radius")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("10")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("rotation")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("sides")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("3")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("xAdjust")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("xValue")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v(" | "),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("yAdjust")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("yValue")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v(" | "),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])])])]),t._v(" "),e("h3",{attrs:{id:"common-options-to-all-annotations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-annotations"}},[t._v("#")]),t._v(" Common options to all annotations")]),t._v(" "),e("p",[t._v("The following options are available for all annotations.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("adjustScaleRange")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("backgroundColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/guide/options.html#color"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("options.color")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/guide/options.html#color"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("options.color")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderDash")])])]),t._v(" "),e("td",[e("code",[t._v("number[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("[]")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderDashOffset")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("borderShadowColor")])])]),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/guide/options.html#color"}},[e("code",[t._v("Color")])])],1),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'transparent'")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("display")])])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("true")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("drawTime")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("'afterDatasetsDraw'")])])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/guide/configuration.html#common"}},[e("code",[t._v("init")])])],1),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("RouterLink",{attrs:{to:"/guide/configuration.html#initial-animation"}},[t._v("See initial animation")])],1),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("id")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("shadowBlur")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("shadowOffsetX")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#styling"}},[e("code",[t._v("shadowOffsetY")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("xMax")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v(" | "),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("xMin")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v(" | "),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("xScaleID")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("yMin")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v(" | "),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("yMax")])])]),t._v(" "),e("td",[e("code",[t._v("number")]),t._v(" | "),e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("yScaleID")])])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("undefined")])])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#general"}},[e("code",[t._v("z")])])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),e("td",[e("code",[t._v("0")])])])])]),t._v(" "),e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),e("p",[t._v("If one of the axes does not match an axis in the chart, the polygon annotation will take the center of the chart as point. The 2 coordinates, xValue, yValue are optional. If not specified, the polygon annotation will take the center of the scale dimension.")]),t._v(" "),e("p",[t._v("The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction and the box size is used to calculated the center of the point. To enable to use the box positioning, the "),e("code",[t._v("radius")]),t._v(" must be set to "),e("code",[t._v("0")]),t._v(" or "),e("code",[t._v("NaN")]),t._v(".")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("adjustScaleRange")])]),t._v(" "),e("td",[t._v("Should the scale range be adjusted if this annotation is out of range.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("display")])]),t._v(" "),e("td",[t._v("Whether or not this annotation is visible.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("drawTime")])]),t._v(" "),e("td",[t._v("See "),e("RouterLink",{attrs:{to:"/guide/options.html#draw-time"}},[t._v("drawTime")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("id")])]),t._v(" "),e("td",[t._v("Identifies a unique id  for the annotation and it will be stored in the element context. When the annotations are defined by an object, the id is automatically set using the key used to store the annotations in the object. When the annotations are configured by an array, the id, passed by this option in the annotation, will be used.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("radius")])]),t._v(" "),e("td",[t._v("Size of the polygon in pixels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("rotation")])]),t._v(" "),e("td",[t._v("Rotation of polygon, in degrees.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("sides")])]),t._v(" "),e("td",[t._v("Amount of sides of polygon.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("xAdjust")])]),t._v(" "),e("td",[t._v("Adjustment along x-axis (left-right) of polygon relative to computed position. Negative values move the polygon left, positive right.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("xMax")])]),t._v(" "),e("td",[t._v("Right edge of the box in units along the x axis.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("xMin")])]),t._v(" "),e("td",[t._v("Left edge of the box in units along the x axis.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("xScaleID")])]),t._v(" "),e("td",[t._v("ID of the X scale to bind onto. If missing, the plugin will try to use the scale of the chart, configured as "),e("code",[t._v("'x'")]),t._v(" axis. If more than one scale has been defined in the chart as "),e("code",[t._v("'x'")]),t._v(" axis, the option is mandatory to select the right scale.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("xValue")])]),t._v(" "),e("td",[t._v("X coordinate of the polygon in units along the x axis.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("yAdjust")])]),t._v(" "),e("td",[t._v("Adjustment along y-axis (top-bottom) of polygon relative to computed position. Negative values move the polygon up, positive down.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("yMax")])]),t._v(" "),e("td",[t._v("Bottom edge of the box in units along the y axis.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("yMin")])]),t._v(" "),e("td",[t._v("Top edge of the box in units along the y axis.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("yScaleID")])]),t._v(" "),e("td",[t._v("ID of the Y scale to bind onto. If missing, the plugin will try to use the scale of the chart, configured as "),e("code",[t._v("'y'")]),t._v(" axis. If more than one scale has been defined in the chart as "),e("code",[t._v("'y'")]),t._v(" axis, the option is mandatory to select the right scale.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("yValue")])]),t._v(" "),e("td",[t._v("Y coordinate of the polygon in units along the y axis.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("z")])]),t._v(" "),e("td",[t._v("The "),e("code",[t._v("z")]),t._v(" property determines the drawing stack level of the polygon annotation element. All visible elements will be drawn in ascending order of "),e("code",[t._v("z")]),t._v(" option, with the same "),e("code",[t._v("drawTime")]),t._v(" option.")])])])]),t._v(" "),e("h3",{attrs:{id:"styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("backgroundColor")])]),t._v(" "),e("td",[t._v("Fill color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("backgroundShadowColor")])]),t._v(" "),e("td",[t._v("The color of shadow. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderColor")])]),t._v(" "),e("td",[t._v("Stroke color.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderCapStyle")])]),t._v(" "),e("td",[t._v("Cap style of the border of polygon. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderDash")])]),t._v(" "),e("td",[t._v("Length and spacing of dashes. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderDashOffset")])]),t._v(" "),e("td",[t._v("Offset for line dashes. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderJoinStyle")])]),t._v(" "),e("td",[t._v("Border line join style. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderShadowColor")])]),t._v(" "),e("td",[t._v("The color of the border shadow. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("borderWidth")])]),t._v(" "),e("td",[t._v("Stroke width.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("shadowBlur")])]),t._v(" "),e("td",[t._v("The amount of blur applied to shadow. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("shadowOffsetX")])]),t._v(" "),e("td",[t._v("The distance that shadow will be offset horizontally. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("shadowOffsetY")])]),t._v(" "),e("td",[t._v("The distance that shadow will be offset vertically. See "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),t._v(".")])])])]),t._v(" "),e("h3",{attrs:{id:"point"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#point"}},[t._v("#")]),t._v(" Point")]),t._v(" "),e("p",[t._v("Polygon consists of points. These points are actually "),e("a",{attrs:{href:"point"}},[t._v("Point Annotations")]),t._v(" and all of the "),e("RouterLink",{attrs:{to:"/guide/types/point.html#styling"}},[t._v("styling options")]),t._v(" can be configured. General options affecting the location of the point are ignored.")],1),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options.annotations[annotationID].point")]),t._v(", it defines options for the callout on the annotation label.")]),t._v(" "),e("chart-editor",{attrs:{code:"/* <block:options:0> */\nconst options = {\n  plugins: {\n    annotation: {\n      annotations: {\n        pentagon: {\n          type: 'polygon',\n          xValue: 1,\n          yValue: 60,\n          sides: 4,\n          radius: 60,\n          backgroundColor: 'rgba(255, 99, 132, 0.25)',\n          point: {\n            radius: 10,\n            borderWidth: 2,\n            borderColor: '#666',\n            backgroundColor: 'rgba(99, 132, 255, 0.25)',\n          }\n        }\n      }\n    }\n  }\n};\n/* </block:options> */\n\n/* <block:config:1> */\nconst config = {\n  type: 'line',\n  data: {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, 80, 81, 56, 55, 40],\n      fill: false,\n      borderColor: 'rgb(75, 192, 192)',\n      tension: 0.1\n    }]\n  },\n  options\n};\n/* </block:config> */\n\nmodule.exports = {\n  config\n};\n"}}),e("h2",{attrs:{id:"element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element"}},[t._v("#")]),t._v(" Element")]),t._v(" "),e("p",[t._v("The following diagram is showing the element properties about a "),e("code",[t._v("'polygon'")]),t._v(" annotation:")]),t._v(" "),e("p",[e("img",{attrs:{src:o(265),alt:"polygon"}})])],1)}),[],!1,null,null,null);e.default=a.exports}}]);