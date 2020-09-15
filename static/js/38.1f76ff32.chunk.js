(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1029:function(e,a,n){"use strict";var t=n(327);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var n=o.default.memo(o.default.forwardRef(function(a,n){return o.default.createElement(l.default,(0,r.default)({},a,{ref:n}),e)}));0;return n.muiName=l.default.muiName,n};var r=t(n(2)),o=t(n(0)),l=t(n(965))},1031:function(e,a,n){"use strict";var t=n(2),r=n.n(t),o=n(1028),l=n(182);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,r()({defaultTheme:l.a},a))}},1062:function(e,a,n){"use strict";var t=n(327);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1029)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Mail");a.default=o},1190:function(e,a,n){"use strict";var t=n(2),r=n.n(t),o=n(4),l=n.n(o),i=n(0),c=n.n(i),m=(n(1),n(3)),s=n(6),d=n(9),g=c.a.forwardRef(function(e,a){var n=e.badgeContent,t=e.children,o=e.classes,i=e.className,s=e.color,g=void 0===s?"default":s,u=e.component,p=void 0===u?"span":u,f=e.invisible,b=e.max,y=void 0===b?99:b,h=e.showZero,v=void 0!==h&&h,E=e.variant,B=void 0===E?"standard":E,N=l()(e,["badgeContent","children","classes","className","color","component","invisible","max","showZero","variant"]),x=f;null==f&&(0===n&&!v||null==n&&"dot"!==B)&&(x=!0);var C="";return"dot"!==B&&(C=n>y?"".concat(y,"+"):n),c.a.createElement(p,r()({className:Object(m.a)(o.root,i),ref:a},N),t,c.a.createElement("span",{className:Object(m.a)(o.badge,"default"!==g&&o["color".concat(Object(d.a)(g))],x&&o.invisible,"dot"===B&&o.dot)},C))});a.a=Object(s.a)(function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle"},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",top:0,right:0,boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,padding:"0 4px",height:20,borderRadius:10,backgroundColor:e.palette.color,color:e.palette.textColor,zIndex:1,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen}),transform:"scale(0) translate(50%, -50%)",transformOrigin:"100% 0%"},dot:{height:6,minWidth:6,padding:0}}},{name:"MuiBadge"})(g)},1468:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(1031),l=n(1190),i=n(508),c=n(1062),m=n.n(c),s=n(1e3),d=n(1012),g=n(1001),u=n(123),p=n(1008),f=Object(o.a)(function(e){return{margin:{margin:e.spacing(2)},padding:{padding:e.spacing(0,2)}}});a.default=function(){var e=f();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(l.a,{className:e.margin,badgeContent:4,color:"primary"},r.a.createElement(m.a,null)),r.a.createElement(l.a,{className:e.margin,badgeContent:10,color:"secondary"},r.a.createElement(m.a,null)),r.a.createElement(i.a,{"aria-label":"4 pending messages",className:e.margin},r.a.createElement(l.a,{badgeContent:4,color:"primary"},r.a.createElement(m.a,null)))),r.a.createElement(s.a,{position:"static",className:e.margin},r.a.createElement(d.a,{value:0},r.a.createElement(g.a,{label:r.a.createElement(l.a,{className:e.padding,color:"secondary",badgeContent:4},"Item One")}),r.a.createElement(g.a,{label:"Item Two"}),r.a.createElement(g.a,{label:"Item Three"}))),r.a.createElement(l.a,{color:"primary",badgeContent:4,className:e.margin},r.a.createElement(u.a,{className:e.padding},"Typography")),r.a.createElement(l.a,{color:"primary",badgeContent:4,className:e.margin},r.a.createElement(p.a,{variant:"contained"},"Button")))}},1469:function(e,a){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Badge from \'@material-ui/core/Badge\';\nimport IconButton from \'@material-ui/core/IconButton\';\nimport MailIcon from \'@material-ui/icons/Mail\';\nimport AppBar from \'@material-ui/core/AppBar\';\nimport Tabs from \'@material-ui/core/Tabs\';\nimport Tab from \'@material-ui/core/Tab\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Button from \'@material-ui/core/Button\';\n\nconst useStyles = makeStyles(theme => ({\n  margin: {\n    margin: theme.spacing(2),\n  },\n  padding: {\n    padding: theme.spacing(0, 2),\n  },\n}));\n\nfunction SimpleBadge() {\n  const classes = useStyles();\n\n  return (\n    <div>\n      <div>\n        <Badge className={classes.margin} badgeContent={4} color="primary">\n          <MailIcon />\n        </Badge>\n        <Badge className={classes.margin} badgeContent={10} color="secondary">\n          <MailIcon />\n        </Badge>\n        <IconButton aria-label="4 pending messages" className={classes.margin}>\n          <Badge badgeContent={4} color="primary">\n            <MailIcon />\n          </Badge>\n        </IconButton>\n      </div>\n      <AppBar position="static" className={classes.margin}>\n        <Tabs value={0}>\n          <Tab\n            label={\n              <Badge className={classes.padding} color="secondary" badgeContent={4}>\n                Item One\n              </Badge>\n            }\n          />\n          <Tab label="Item Two" />\n          <Tab label="Item Three" />\n        </Tabs>\n      </AppBar>\n      <Badge color="primary" badgeContent={4} className={classes.margin}>\n        <Typography className={classes.padding}>Typography</Typography>\n      </Badge>\n      <Badge color="primary" badgeContent={4} className={classes.margin}>\n        <Button variant="contained">Button</Button>\n      </Badge>\n    </div>\n  );\n}\n\nexport default SimpleBadge;\n'},1470:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(1031),l=n(1190),i=n(1062),c=n.n(i),m=Object(o.a)(function(e){return{margin:{margin:e.spacing(2),marginRight:e.spacing(3)}}});a.default=function(){var e=m();return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:e.margin,badgeContent:99,color:"primary"},r.a.createElement(c.a,null)),r.a.createElement(l.a,{className:e.margin,badgeContent:100,color:"primary"},r.a.createElement(c.a,null)),r.a.createElement(l.a,{className:e.margin,badgeContent:1e3,max:999,color:"primary"},r.a.createElement(c.a,null)))}},1471:function(e,a){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\n\nconst useStyles = makeStyles(theme => ({\n  margin: {\n    margin: theme.spacing(2),\n    marginRight: theme.spacing(3),\n  },\n}));\n\nfunction BadgeMax() {\n  const classes = useStyles();\n\n  return (\n    <React.Fragment>\n      <Badge className={classes.margin} badgeContent={99} color=\"primary\">\n        <MailIcon />\n      </Badge>\n      <Badge className={classes.margin} badgeContent={100} color=\"primary\">\n        <MailIcon />\n      </Badge>\n      <Badge className={classes.margin} badgeContent={1000} max={999} color=\"primary\">\n        <MailIcon />\n      </Badge>\n    </React.Fragment>\n  );\n}\n\nexport default BadgeMax;\n"},1472:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(1031),l=n(1190),i=n(1062),c=n.n(i),m=n(123),s=Object(o.a)(function(e){return{margin:{margin:e.spacing(2)}}});a.default=function(){var e=s();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(l.a,{className:e.margin,color:"primary",variant:"dot"},r.a.createElement(c.a,null)),r.a.createElement(l.a,{className:e.margin,color:"secondary",variant:"dot"},r.a.createElement(c.a,null))),r.a.createElement(l.a,{color:"primary",className:e.margin,variant:"dot"},r.a.createElement(m.a,null,"Typography")))}},1473:function(e,a){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Badge from \'@material-ui/core/Badge\';\nimport MailIcon from \'@material-ui/icons/Mail\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles(theme => ({\n  margin: {\n    margin: theme.spacing(2),\n  },\n}));\n\nfunction DotBadge() {\n  const classes = useStyles();\n\n  return (\n    <div>\n      <div>\n        <Badge className={classes.margin} color="primary" variant="dot">\n          <MailIcon />\n        </Badge>\n        <Badge className={classes.margin} color="secondary" variant="dot">\n          <MailIcon />\n        </Badge>\n      </div>\n      <Badge color="primary" className={classes.margin} variant="dot">\n        <Typography>Typography</Typography>\n      </Badge>\n    </div>\n  );\n}\n\nexport default DotBadge;\n'},1474:function(e,a,n){"use strict";n.r(a);var t=n(17),r=n(0),o=n.n(r),l=n(1031),i=n(1190),c=n(1062),m=n.n(c),s=n(998),d=n(518),g=n(997),u=n(995),p=Object(l.a)(function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},margin:{margin:e.spacing(1)},divider:{width:"100%"},row:{marginTop:e.spacing(2)}}});a.default=function(){var e=p(),a=o.a.useState(!1),n=Object(t.a)(a,2),r=n[0],l=n[1];return o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.row},o.a.createElement(i.a,{color:"secondary",badgeContent:4,invisible:r,className:e.margin},o.a.createElement(m.a,null)),o.a.createElement(i.a,{color:"secondary",variant:"dot",invisible:r,className:e.margin},o.a.createElement(m.a,null))),o.a.createElement(d.a,{row:!0},o.a.createElement(g.a,{control:o.a.createElement(s.a,{color:"primary",checked:!r,onChange:function(){l(!r)}}),label:"Show Badge"})),o.a.createElement(u.a,{className:e.divider}),o.a.createElement("div",{className:e.row},o.a.createElement(i.a,{color:"secondary",badgeContent:0,className:e.margin},o.a.createElement(m.a,null)),o.a.createElement(i.a,{color:"secondary",badgeContent:0,showZero:!0,className:e.margin},o.a.createElement(m.a,null))))}},1475:function(e,a){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\nimport Switch from '@material-ui/core/Switch';\nimport FormGroup from '@material-ui/core/FormGroup';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport Divider from '@material-ui/core/Divider';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    width: '100%',\n  },\n  margin: {\n    margin: theme.spacing(1),\n  },\n  divider: {\n    width: '100%',\n  },\n  row: {\n    marginTop: theme.spacing(2),\n  },\n}));\n\nfunction BadgeVisibility() {\n  const classes = useStyles();\n  const [invisible, setInvisible] = React.useState(false);\n\n  function handleBadgeVisibility() {\n    setInvisible(!invisible);\n  }\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.row}>\n        <Badge color=\"secondary\" badgeContent={4} invisible={invisible} className={classes.margin}>\n          <MailIcon />\n        </Badge>\n        <Badge color=\"secondary\" variant=\"dot\" invisible={invisible} className={classes.margin}>\n          <MailIcon />\n        </Badge>\n      </div>\n      <FormGroup row>\n        <FormControlLabel\n          control={<Switch color=\"primary\" checked={!invisible} onChange={handleBadgeVisibility} />}\n          label=\"Show Badge\"\n        />\n      </FormGroup>\n      <Divider className={classes.divider} />\n      <div className={classes.row}>\n        <Badge color=\"secondary\" badgeContent={0} className={classes.margin}>\n          <MailIcon />\n        </Badge>\n        <Badge color=\"secondary\" badgeContent={0} showZero className={classes.margin}>\n          <MailIcon />\n        </Badge>\n      </div>\n    </div>\n  );\n}\n\nexport default BadgeVisibility;\n"},1476:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(508),l=n(1190),i=n(6),c=n(1477),m=n.n(c),s=Object(i.a)(function(e){return{badge:{top:"50%",right:-3,border:"2px solid ".concat("light"===e.palette.type?e.palette.grey[200]:e.palette.grey[900])}}})(l.a);a.default=function(){return r.a.createElement(o.a,{"aria-label":"Cart"},r.a.createElement(s,{badgeContent:4,color:"primary"},r.a.createElement(m.a,null)))}},1477:function(e,a,n){"use strict";var t=n(327);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=(0,t(n(1029)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ShoppingCart");a.default=o},1478:function(e,a){e.exports="import React from 'react';\nimport IconButton from '@material-ui/core/IconButton';\nimport Badge from '@material-ui/core/Badge';\nimport { withStyles } from '@material-ui/core/styles';\nimport ShoppingCartIcon from '@material-ui/icons/ShoppingCart';\n\nconst StyledBadge = withStyles(theme => ({\n  badge: {\n    top: '50%',\n    right: -3,\n    // The border color match the background color.\n    border: `2px solid ${\n      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]\n    }`,\n  },\n}))(Badge);\n\nfunction CustomizedBadges() {\n  return (\n    <IconButton aria-label=\"Cart\">\n      <StyledBadge badgeContent={4} color=\"primary\">\n        <ShoppingCartIcon />\n      </StyledBadge>\n    </IconButton>\n  );\n}\n\nexport default CustomizedBadges;\n"},2151:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(11),l=n(990),i=n(123),c=n(1008),m=n(1028),s=Object(m.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});a.default=function(e){var a=s();return r.a.createElement(o.s,{classes:{root:a.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement("div",{className:"flex flex-col"},r.a.createElement("div",{className:"flex items-center mb-16"},r.a.createElement(l.a,{className:"text-18",color:"action"},"home"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(i.a,{color:"textSecondary"},"Documentation"),r.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),r.a.createElement(i.a,{color:"textSecondary"},"Material UI Components")),r.a.createElement(i.a,{variant:"h6"},"Badges")),r.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/badges",target:"_blank"},r.a.createElement(l.a,{className:"mr-4"},"link"),"Reference")),content:r.a.createElement("div",{className:"p-24 max-w-2xl"},r.a.createElement(i.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Badges"),r.a.createElement(i.a,{className:"description"},"Badge generates a small badge to the top-right of its child(ren)."),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple Badges"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"Examples of badges containing text, using primary and secondary colors. The badge is applied to its children."),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1468).default,raw:n(1469)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Maximum Value"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"You can use the ",r.a.createElement("code",null,"max")," property to cap the value of the badge content."),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1470).default,raw:n(1471)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Dot Badge"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"The ",r.a.createElement("code",null,"dot")," property changes a badge into a small dot. This can be used as a notification that something has changed without giving a count."),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1472).default,raw:n(1473)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Badge visibility"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"The visibility of badges can be controlled using the ",r.a.createElement("code",null,"invisible")," property."),r.a.createElement(i.a,{className:"mb-16",component:"div"},"The badge auto hides with badgeContent is zero. You can override this with the ",r.a.createElement("code",null,"showZero")," property."),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1474).default,raw:n(1475)})),r.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized badges"),r.a.createElement(i.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",r.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),r.a.createElement(i.a,{className:"mb-16",component:"div"},r.a.createElement(o.j,{className:"my-24",iframe:!1,component:n(1476).default,raw:n(1478)})))})}},965:function(e,a,n){"use strict";n.r(a);var t=n(328);n.d(a,"default",function(){return t.a})}}]);