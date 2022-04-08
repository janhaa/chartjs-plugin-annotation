(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{474:function(e,t,n){e.exports=n.p+"assets/img/elementBoxProps.645c7c00.png"},475:function(e,t,n){e.exports=n.p+"assets/img/elementEllipseProps.ef1b550b.png"},476:function(e,t,n){e.exports=n.p+"assets/img/elementLabelProps.97ea168e.png"},477:function(e,t,n){e.exports=n.p+"assets/img/elementLineProps.dfab03ea.png"},478:function(e,t,n){e.exports=n.p+"assets/img/elementPointProps.de8e50cf.png"},479:function(e,t,n){e.exports=n.p+"assets/img/elementPolygonProps.67d2feff.png"},504:function(e,t,n){"use strict";n.r(t);var o=n(22),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_2-x-migration-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-migration-guide"}},[e._v("#")]),e._v(" 2.x Migration guide")]),e._v(" "),o("p",[o("code",[e._v("chartjs-plugin-annotation")]),e._v(" plugin version 2 introduces a number of breaking changes. In order to improve performance, offer new features, and improve maintainability, it was necessary to break backwards compatibility, but we aimed to do so only when worth the benefit.")]),e._v(" "),o("h2",{attrs:{id:"options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),o("p",[e._v("A number of changes were made to the configuration options passed to the plugin configuration. Those changes are documented below.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("xScaleID")]),e._v(" option default has been changed, now set to "),o("code",[e._v("undefined")]),e._v(". If the option is missing, the plugin will try to use the first scale of the chart, configured as "),o("code",[e._v("'x'")]),e._v(" axis. If more than one scale has been defined in the chart as "),o("code",[e._v("'x'")]),e._v(" axis, the option is mandatory to select the right scale.")]),e._v(" "),o("li",[o("code",[e._v("yScaleID")]),e._v(" option default has been changed, now set to "),o("code",[e._v("undefined")]),e._v(". If the option is missing, the plugin will try to use the first scale of the chart, configured as "),o("code",[e._v("'y'")]),e._v(" axis. If more than one scale has been defined in the chart as "),o("code",[e._v("'y'")]),e._v(" axis, the option is mandatory to select the right scale.")]),e._v(" "),o("li",[e._v("When "),o("a",{attrs:{href:"https://www.chartjs.org/docs/latest/axes/cartesian/#common-options-to-all-cartesian-axes",target:"_blank",rel:"noopener noreferrer"}},[e._v("stacked scales"),o("OutboundLink")],1),e._v(" are used, instead of the whole chart area, the designated scale area is used as fallback for "),o("code",[e._v("xMin")]),e._v(", "),o("code",[e._v("xMax")]),e._v(", "),o("code",[e._v("yMin")]),e._v(", "),o("code",[e._v("yMax")]),e._v(", "),o("code",[e._v("xValue")]),e._v(" or "),o("code",[e._v("yValue")]),e._v(" options.")]),e._v(" "),o("li",[o("code",[e._v("cornerRadius")]),e._v(" option was replaced by "),o("code",[e._v("borderRadius")]),e._v(" in the box annotation configuration and in the label configuration of line annotation to align with Chart.js options.")]),e._v(" "),o("li",[o("code",[e._v("xPadding")]),e._v(" and "),o("code",[e._v("yPadding")]),e._v(" options were merged into a single "),o("code",[e._v("padding")]),e._v(" object in the label configuration of line annotation to align with Chart.js options.")]),e._v(" "),o("li",[o("code",[e._v("enabled")]),e._v(" option was replaced by "),o("code",[e._v("display")]),e._v(" in the callout configuration of label annotation, in the label configuration of line and box annotations and in the arrow heads configuration of line annotation to have the same option on all elements.")]),e._v(" "),o("li",[o("code",[e._v("dblClickSpeed")]),e._v(" option was removed from the plugin options because "),o("code",[e._v("dblclick")]),e._v(" event hook is not available anymore.")])]),e._v(" "),o("h2",{attrs:{id:"elements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#elements"}},[e._v("#")]),e._v(" Elements")]),e._v(" "),o("p",[o("code",[e._v("chartjs-plugin-annotation")]),e._v(" plugin version 2 hides the following methods in the "),o("code",[e._v("line")]),e._v(" annotation element because they should be used only internally:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("intersects")])]),e._v(" "),o("li",[o("code",[e._v("labelIsVisible")])]),e._v(" "),o("li",[o("code",[e._v("isOnLabel")])])]),e._v(" "),o("p",[o("code",[e._v("chartjs-plugin-annotation")]),e._v(" plugin version 2 normalizes the properties of the annotation elements in order to be based on common box model.")]),e._v(" "),o("h4",{attrs:{id:"box-annotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#box-annotation"}},[e._v("#")]),e._v(" Box annotation")]),e._v(" "),o("p",[e._v("The following diagram is showing the element properties about a "),o("code",[e._v("'box'")]),e._v(" annotation:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(474),alt:"box"}})]),e._v(" "),o("h4",{attrs:{id:"ellipse-annotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ellipse-annotation"}},[e._v("#")]),e._v(" Ellipse annotation")]),e._v(" "),o("p",[e._v("The following diagram is showing the element properties about a "),o("code",[e._v("'ellipse'")]),e._v(" annotation:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(475),alt:"ellipse"}})]),e._v(" "),o("h4",{attrs:{id:"label-annotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#label-annotation"}},[e._v("#")]),e._v(" Label annotation")]),e._v(" "),o("p",[e._v("The following diagram is showing the element properties about a "),o("code",[e._v("'label'")]),e._v(" annotation:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(476),alt:"label"}})]),e._v(" "),o("h4",{attrs:{id:"line-annotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#line-annotation"}},[e._v("#")]),e._v(" Line annotation")]),e._v(" "),o("p",[e._v("The following diagram is showing the element properties about a "),o("code",[e._v("'line'")]),e._v(" annotation and the inner label:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(477),alt:"line"}})]),e._v(" "),o("h4",{attrs:{id:"point-annotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#point-annotation"}},[e._v("#")]),e._v(" Point annotation")]),e._v(" "),o("p",[e._v("The following diagram is showing the element properties about a "),o("code",[e._v("'point'")]),e._v(" annotation:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(478),alt:"point"}})]),e._v(" "),o("h4",{attrs:{id:"polygon-annotation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#polygon-annotation"}},[e._v("#")]),e._v(" Polygon annotation")]),e._v(" "),o("p",[e._v("The following diagram is showing the element properties about a "),o("code",[e._v("'polygon'")]),e._v(" annotation:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(479),alt:"polygon"}})]),e._v(" "),o("h2",{attrs:{id:"events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),o("p",[o("code",[e._v("chartjs-plugin-annotation")]),e._v(" plugin version 2 introduces the "),o("a",{attrs:{href:"options#interaction"}},[o("code",[e._v("interaction")])]),e._v(" options, to configure which events trigger annotation interactions. By default, the plugin uses the "),o("a",{attrs:{href:"https://www.chartjs.org/docs/latest/configuration/interactions.html#interactions",target:"_blank",rel:"noopener noreferrer"}},[e._v("chart interaction configuration"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("When "),o("a",{attrs:{href:"https://www.chartjs.org/docs/latest/charts/scatter.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("scatter charts"),o("OutboundLink")],1),e._v(" are used, the interaction default "),o("code",[e._v("mode")]),e._v(" in Chart.js is "),o("code",[e._v("point")]),e._v(", while, in the previous plugin version, the default was "),o("code",[e._v("nearest")]),e._v(".")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("dblclick")]),e._v(" event hook was removed from annotations options because, being executed asynchronously, it can not enable the chart re-rendering, automatically after processing the event completely. This is important when the user requires re-draws. It gets slow and messy if every event hook does the draw (or update!).")])])}),[],!1,null,null,null);t.default=a.exports}}]);