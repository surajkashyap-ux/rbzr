(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1029:function(e,t,a){"use strict";var n=a(327);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=i.default.memo(i.default.forwardRef(function(t,a){return i.default.createElement(o.default,(0,r.default)({},t,{ref:a}),e)}));0;return a.muiName=o.default.muiName,a};var r=n(a(2)),i=n(a(0)),o=n(a(965))},1031:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(1028),o=a(182);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,r()({defaultTheme:o.a},t))}},1066:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(2),o=a.n(i),c=a(0),s=a.n(c),l=(a(1),a(3)),m=a(6),d=a(35),u=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=s.a.forwardRef(function(e,t){var a=e.alignContent,n=void 0===a?"stretch":a,i=e.alignItems,c=void 0===i?"stretch":i,m=e.classes,d=e.className,u=e.component,p=void 0===u?"div":u,f=e.container,v=void 0!==f&&f,h=e.direction,g=void 0===h?"row":h,x=e.item,y=void 0!==x&&x,E=e.justify,b=void 0===E?"flex-start":E,I=e.lg,L=void 0!==I&&I,N=e.md,w=void 0!==N&&N,S=e.sm,k=void 0!==S&&S,T=e.spacing,D=void 0===T?0:T,j=e.wrap,A=void 0===j?"wrap":j,W=e.xl,C=void 0!==W&&W,M=e.xs,B=void 0!==M&&M,z=e.zeroMinWidth,O=void 0!==z&&z,J=r()(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(l.a)(m.root,d,v&&[m.container,0!==D&&m["spacing-xs-".concat(String(D))]],y&&m.item,O&&m.zeroMinWidth,"row"!==g&&m["direction-xs-".concat(String(g))],"wrap"!==A&&m["wrap-xs-".concat(String(A))],"stretch"!==c&&m["align-items-xs-".concat(String(c))],"stretch"!==n&&m["align-content-xs-".concat(String(n))],"flex-start"!==b&&m["justify-xs-".concat(String(b))],!1!==B&&m["grid-xs-".concat(String(B))],!1!==k&&m["grid-sm-".concat(String(k))],!1!==w&&m["grid-md-".concat(String(w))],!1!==L&&m["grid-lg-".concat(String(L))],!1!==C&&m["grid-xl-".concat(String(C))]);return s.a.createElement(p,o()({className:G,ref:t},J))});var v=Object(m.a)(function(e){return o()({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return u.forEach(function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:-r/2,width:"calc(100% + ".concat(r,"px)"),"& > $item":{padding:r/2}})}),a}(e,"xs"),d.b.reduce(function(t,a){return function(e,t,a){var n={};p.forEach(function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?Object.assign(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t},{}))},{name:"MuiGrid"})(f);t.a=v},1148:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(4),o=a.n(i),c=a(0),s=a.n(c),l=(a(1),a(3)),m=a(6),d=a(104),u=s.a.forwardRef(function(e,t){var a=e.classes,n=e.className,i=o()(e,["classes","className"]),c=s.a.useContext(d.a);return s.a.createElement("div",r()({className:Object(l.a)(a.root,"flex-start"===c.alignItems&&a.alignItemsFlexStart,n),ref:t},i))});t.a=Object(m.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(u)},1214:function(e,t,a){"use strict";var n=a(327);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(1029)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"BeachAccess");t.default=i},1256:function(e,t,a){"use strict";var n=a(327);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(1029)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})),"Image");t.default=i},1257:function(e,t,a){"use strict";var n=a(327);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(1029)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})),"Work");t.default=i},1593:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1031),o=a(512),c=a(513),s=a(992),l=a(995),m=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:"360px",backgroundColor:e.palette.background.paper}}});t.default=function(){var e=m();return r.a.createElement(o.a,{component:"nav",className:e.root},r.a.createElement(c.a,{button:!0},r.a.createElement(s.a,{primary:"Inbox"})),r.a.createElement(l.a,null),r.a.createElement(c.a,{button:!0,divider:!0},r.a.createElement(s.a,{primary:"Drafts"})),r.a.createElement(c.a,{button:!0},r.a.createElement(s.a,{primary:"Trash"})),r.a.createElement(l.a,{light:!0}),r.a.createElement(c.a,{button:!0},r.a.createElement(s.a,{primary:"Spam"})))}},1594:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport ListItem from '@material-ui/core/ListItem';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n    maxWidth: '360px',\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nfunction ListDividers() {\n  const classes = useStyles();\n\n  return (\n    <List component=\"nav\" className={classes.root}>\n      <ListItem button>\n        <ListItemText primary=\"Inbox\" />\n      </ListItem>\n      <Divider />\n      <ListItem button divider>\n        <ListItemText primary=\"Drafts\" />\n      </ListItem>\n      <ListItem button>\n        <ListItemText primary=\"Trash\" />\n      </ListItem>\n      <Divider light />\n      <ListItem button>\n        <ListItemText primary=\"Spam\" />\n      </ListItem>\n    </List>\n  );\n}\n\nexport default ListDividers;\n"},1595:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1031),o=a(512),c=a(513),s=a(992),l=a(1148),m=a(505),d=a(1256),u=a.n(d),p=a(1257),f=a.n(p),v=a(1214),h=a.n(v),g=a(995),x=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}});t.default=function(){var e=x();return r.a.createElement(o.a,{className:e.root},r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,null))),r.a.createElement(s.a,{primary:"Photos",secondary:"Jan 9, 2014"})),r.a.createElement(g.a,{variant:"inset",component:"li"}),r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(f.a,null))),r.a.createElement(s.a,{primary:"Work",secondary:"Jan 7, 2014"})),r.a.createElement(g.a,{variant:"inset",component:"li"}),r.a.createElement(c.a,null,r.a.createElement(l.a,null,r.a.createElement(m.a,null,r.a.createElement(h.a,null))),r.a.createElement(s.a,{primary:"Vacation",secondary:"July 20, 2014"})))}},1596:function(e,t){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport ListItem from '@material-ui/core/ListItem';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport ListItemAvatar from '@material-ui/core/ListItemAvatar';\nimport Avatar from '@material-ui/core/Avatar';\nimport ImageIcon from '@material-ui/icons/Image';\nimport WorkIcon from '@material-ui/icons/Work';\nimport BeachAccessIcon from '@material-ui/icons/BeachAccess';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: '100%',\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nfunction InsetDividers() {\n  const classes = useStyles();\n\n  return (\n    <List className={classes.root}>\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <ImageIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Photos\" secondary=\"Jan 9, 2014\" />\n      </ListItem>\n      <Divider variant=\"inset\" component=\"li\" />\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <WorkIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Work\" secondary=\"Jan 7, 2014\" />\n      </ListItem>\n      <Divider variant=\"inset\" component=\"li\" />\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <BeachAccessIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Vacation\" secondary=\"July 20, 2014\" />\n      </ListItem>\n    </List>\n  );\n}\n\nexport default InsetDividers;\n"},1597:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1031),o=a(512),c=a(513),s=a(1148),l=a(992),m=a(505),d=a(1214),u=a.n(d),p=a(995),f=a(123),v=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},dividerFullWidth:{margin:"5px 0 0 ".concat(e.spacing(2),"px")},dividerInset:{margin:"5px 0 0 ".concat(e.spacing(9),"px")}}});t.default=function(){var e=v();return r.a.createElement(o.a,{className:e.root},r.a.createElement(c.a,null,r.a.createElement(l.a,{primary:"Photos",secondary:"Jan 9, 2014"})),r.a.createElement(p.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(f.a,{className:e.dividerFullWidth,color:"textSecondary",display:"block",variant:"caption"},"Divider")),r.a.createElement(c.a,null,r.a.createElement(l.a,{primary:"Work",secondary:"Jan 7, 2014"})),r.a.createElement(p.a,{component:"li",variant:"inset"}),r.a.createElement("li",null,r.a.createElement(f.a,{className:e.dividerInset,color:"textSecondary",display:"block",variant:"caption"},"Leisure")),r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement(u.a,null))),r.a.createElement(l.a,{primary:"Vacation",secondary:"July 20, 2014"})))}},1598:function(e,t){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport List from \'@material-ui/core/List\';\nimport ListItem from \'@material-ui/core/ListItem\';\nimport ListItemAvatar from \'@material-ui/core/ListItemAvatar\';\nimport ListItemText from \'@material-ui/core/ListItemText\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport BeachAccessIcon from \'@material-ui/icons/BeachAccess\';\nimport Divider from \'@material-ui/core/Divider\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: \'100%\',\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper,\n  },\n  dividerFullWidth: {\n    margin: `5px 0 0 ${theme.spacing(2)}px`,\n  },\n  dividerInset: {\n    margin: `5px 0 0 ${theme.spacing(9)}px`,\n  },\n}));\n\nfunction SubheaderDividers() {\n  const classes = useStyles();\n\n  return (\n    <List className={classes.root}>\n      <ListItem>\n        <ListItemText primary="Photos" secondary="Jan 9, 2014" />\n      </ListItem>\n      <Divider component="li" />\n      <li>\n        <Typography\n          className={classes.dividerFullWidth}\n          color="textSecondary"\n          display="block"\n          variant="caption"\n        >\n          Divider\n        </Typography>\n      </li>\n      <ListItem>\n        <ListItemText primary="Work" secondary="Jan 7, 2014" />\n      </ListItem>\n      <Divider component="li" variant="inset" />\n      <li>\n        <Typography\n          className={classes.dividerInset}\n          color="textSecondary"\n          display="block"\n          variant="caption"\n        >\n          Leisure\n        </Typography>\n      </li>\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <BeachAccessIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary="Vacation" secondary="July 20, 2014" />\n      </ListItem>\n    </List>\n  );\n}\n\nexport default SubheaderDividers;\n'},1599:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1031),o=a(1016),c=a(1008),s=a(1066),l=a(995),m=a(123),d=Object(i.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},chip:{marginRight:e.spacing(1)},section1:{margin:e.spacing(3,2)},section2:{margin:e.spacing(2)},section3:{margin:e.spacing(3,1,1)}}});t.default=function(){var e=d();return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.section1},r.a.createElement(s.a,{container:!0,alignItems:"center"},r.a.createElement(s.a,{item:!0,xs:!0},r.a.createElement(m.a,{gutterBottom:!0,variant:"h4"},"Toothbrush")),r.a.createElement(s.a,{item:!0},r.a.createElement(m.a,{gutterBottom:!0,variant:"h6"},"$4.50"))),r.a.createElement(m.a,{color:"textSecondary",variant:"body2"},"Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.")),r.a.createElement(l.a,{variant:"middle"}),r.a.createElement("div",{className:e.section2},r.a.createElement(m.a,{gutterBottom:!0,variant:"body1"},"Select type"),r.a.createElement("div",null,r.a.createElement(o.a,{className:e.chip,label:"Extra Soft"}),r.a.createElement(o.a,{className:e.chip,color:"primary",label:"Soft"}),r.a.createElement(o.a,{className:e.chip,label:"Medium"}),r.a.createElement(o.a,{className:e.chip,label:"Hard"}))),r.a.createElement("div",{className:e.section3},r.a.createElement(c.a,{color:"primary"},"Add to cart")))}},1600:function(e,t){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Chip from \'@material-ui/core/Chip\';\nimport Button from \'@material-ui/core/Button\';\nimport Grid from \'@material-ui/core/Grid\';\nimport Divider from \'@material-ui/core/Divider\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: \'100%\',\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper,\n  },\n  chip: {\n    marginRight: theme.spacing(1),\n  },\n  section1: {\n    margin: theme.spacing(3, 2),\n  },\n  section2: {\n    margin: theme.spacing(2),\n  },\n  section3: {\n    margin: theme.spacing(3, 1, 1),\n  },\n}));\n\nfunction MiddleDividers() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.section1}>\n        <Grid container alignItems="center">\n          <Grid item xs>\n            <Typography gutterBottom variant="h4">\n              Toothbrush\n            </Typography>\n          </Grid>\n          <Grid item>\n            <Typography gutterBottom variant="h6">\n              $4.50\n            </Typography>\n          </Grid>\n        </Grid>\n        <Typography color="textSecondary" variant="body2">\n          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the\n          hall.\n        </Typography>\n      </div>\n      <Divider variant="middle" />\n      <div className={classes.section2}>\n        <Typography gutterBottom variant="body1">\n          Select type\n        </Typography>\n        <div>\n          <Chip className={classes.chip} label="Extra Soft" />\n          <Chip className={classes.chip} color="primary" label="Soft" />\n          <Chip className={classes.chip} label="Medium" />\n          <Chip className={classes.chip} label="Hard" />\n        </div>\n      </div>\n      <div className={classes.section3}>\n        <Button color="primary">Add to cart</Button>\n      </div>\n    </div>\n  );\n}\n\nexport default MiddleDividers;\n'},2163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a(990),c=a(123),s=a(1008),l=a(1028),m=Object(l.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=m();return r.a.createElement(i.s,{classes:{root:t.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(o.a,{className:"text-18",color:"action"},"home"),r.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(c.a,{color:"textSecondary"},"Documentation"),r.a.createElement(o.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(c.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(c.a,{variant:"h6"},"Dividers")),r.a.createElement(s.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/dividers",target:"_blank"},r.a.createElement(o.a,{className:"mr-4"},"link"),"Reference")),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Dividers"),r.a.createElement(c.a,{className:"description"},"A divider is a thin line that groups content in lists and layouts."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement("a",{href:"https://material.io/design/components/dividers.html"},"Dividers")," separate content into clear groups."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"List Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"The divider renders as a ",r.a.createElement("code",null,"&lt;hr&gt;")," by default. You can save rendering this DOM element by using the ",r.a.createElement("code",null,"divider")," property on the ",r.a.createElement("code",null,"ListItem")," component."),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1593).default,raw:a(1594)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"HTML5 Specification"),r.a.createElement(c.a,{className:"mb-16",component:"div"},"We need to make sure the ",r.a.createElement("code",null,"Divider")," is rendered as a ",r.a.createElement("code",null,"li")," to match the HTML5 specification. The examples below show two ways of achieving this."),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Inset Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1595).default,raw:a(1596)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Subheader Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1597).default,raw:a(1598)})),r.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Middle Dividers"),r.a.createElement(c.a,{className:"mb-16",component:"div"},r.a.createElement(i.j,{className:"my-24",iframe:!1,component:a(1599).default,raw:a(1600)})))})}},965:function(e,t,a){"use strict";a.r(t);var n=a(328);a.d(t,"default",function(){return n.a})}}]);