(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{2223:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),d=t(123),s=t(990),r=t(11),i=t(999),l=t(3),c=t(389),u=t(388),p=t(154),m=t(1028),g=Object(m.a)(function(e){return{root:{padding:"24px 32px"},badge:{display:"inline-flex",fontSize:13,color:"#FFF",letterSpacing:".015em",lineHeight:1,padding:"5px 8px",borderRadius:2,"&.new":{backgroundColor:c.a[500]},"&.fix":{backgroundColor:u.a[500]},"&.breaking":{backgroundColor:p.a[500]}}}});function h(e){var a=g();return o.a.createElement(i.a,{className:Object(l.a)(a.root,e.className)},o.a.createElement("div",{className:"flex items-center"},e.version&&o.a.createElement(d.a,{className:"text-24",component:"h2"},"v".concat(e.version)),e.date&&o.a.createElement(d.a,{className:"text-17 ml-8",color:"textSecondary",component:"h3"},"(",e.date,")")),e.newChanges.length>0&&o.a.createElement("div",{className:"mt-24"},o.a.createElement("div",{className:Object(l.a)(a.badge,"new")},"New"),o.a.createElement("ul",{className:"my-16 pl-24"},e.newChanges.map(function(e,a){return o.a.createElement("li",{key:a,className:"mb-6"},o.a.createElement(d.a,null,e))}))),e.fixedChanges.length>0&&o.a.createElement("div",{className:"mt-24"},o.a.createElement("div",{className:Object(l.a)(a.badge,"fix")},"Fixed"),o.a.createElement("ul",{className:"my-16 pl-24"},e.fixedChanges.map(function(e,a){return o.a.createElement("li",{key:a,className:"mb-6"},o.a.createElement(d.a,null,e))}))),e.breakingChanges.length>0&&o.a.createElement("div",{className:"mt-24"},o.a.createElement("div",{className:Object(l.a)(a.badge,"breaking")},"Breaking Changes"),o.a.createElement("ul",{className:"my-16 pl-24"},e.breakingChanges.map(function(e,a){return o.a.createElement("li",{key:a,className:"mb-6"},o.a.createElement(d.a,null,e))}))),e.notes)}h.defaultProps={version:null,date:null,newChanges:[],fixedChanges:[],breakingChanges:[],notes:null};var f=h,v=[{version:"3.0.0",date:"2019-06-02",newChanges:[o.a.createElement("span",null,"All of the code migrated to ",o.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"},"the hooks")," (New feature of react let you use state and other React features without writing a class.)"),"material-ui updated to v4","react-scripts updated to v3","react-redux updated to v7.1 (for hooks support)","tailwindcss updated to v1.0.2",o.a.createElement("span",null,"user.role can be array to assign multiple permission roles. For details checkout ",o.a.createElement("a",{href:"http://react-material.fusetheme.com/documentation/fuse-components/fuse-authorization",target:"_blank",rel:"noopener noreferrer"},"FuseAuthorization Docs"),"."),"All dependecy packages updated.","Codebase improved."],fixedChanges:[o.a.createElement("span",null,o.a.createElement("i",null,'"createBrowserHistroy is not exported from history.js"')," error on windows environment(rare)")],breakingChanges:[o.a.createElement("span",null,"react-loadable changed with React.suspense, React.lazy. All route configs updated with React.lazy"),"classNames() replaced with clsx().",o.a.createElement("span",null,"We have no longer support Internet Explorer by default. If you still need it, you can install ",o.a.createElement("a",{href:"https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill",target:"_blank",rel:"noopener noreferrer"},"react-app-polyfill")," for to support.")],notes:o.a.createElement(d.a,{className:"text-14 p-12 border-2 rounded-8 w-full max-w-lg mt-16",component:"div"},"Migrating to the new major version (",o.a.createElement("b",null,"v3.0.0"),") can be difficult because of the hooks support and major dependency releases.")},{version:"2.2.5",date:"2019-03-25",newChanges:["Dependency packages updated (react v16.8.5, react-router v5 etc).","Mail, Todo apps route configs updated.","Changelog page design updated."],fixedChanges:["Minor text color refinement."]},{version:"2.2.4",date:"2019-03-06",newChanges:["Dependency packages updated (react v16.8.4 etc).","setRef prop added to FuseAnimate."],fixedChanges:["Whitelist added to purgecss config for to prevent removing dynamically created navigation classes.","Layout issues on safari <= v10"]},{version:"2.2.3",date:"2019-02-27",newChanges:["Dependency packages updated (react v16.8.3 etc).","purgecss added to decrease file size of the production build."],fixedChanges:["Fuse vertical navigation collapse items don\u2019t have to be collapsed whenever navigation updated or location path changed."],breakingChanges:["src/styles/fuse-helpers.css renamed with src/styles/tailwind.css","src/styles/fuse-helpers.tailwind.css renamed with src/styles/tailwind.base.css"]},{version:"2.2.2",date:"2019-02-18",newChanges:["Dependency packages updated (react v16.8.1, react-scripts etc).","PSD files updated."],fixedChanges:['Rendering Dom in "window.onload" function to wait all files loaded (esp css files).',"Theming issues (FuseCountdown, tables of Invoice pages)."]},{version:"2.2.1",date:"2019-02-11",newChanges:["Dependency packages updated (react, material-ui etc).","FuseNavigation update,remove,append,prepend actions created, documentation page is updated.","react-chartjs-2-defaults.js file created."],fixedChanges:["react, react-dom are added to resolutions to prevent loading two versions of the react. +\nthe issue's main reason is auth0-lock uses react as dependency not peerDependency and they don't change it with kinda valid reason\n(https://github.com/auth0/lock/issues/1148#issuecomment-336765301).","Calendar App Header updating issue fixed."]},{version:"2.2.0",date:"2019-02-03",newChanges:["Project Dashboard App added.","External Link Item added to FuseNavigation (type:'link').",'"metecons" extra icon fonts added.',"Dependency packages updated."]},{version:"2.1.0",date:"2019-01-22",newChanges:["Notes App Added.","Dependency packages updated."],fixedChanges:["dir-glob error is fixed with globby 8.0.2 via locking it's version. (This error only occurs when you use npm to install node_modules instead of yarn).","FuseSearch did not hide auth protected navigation items."]},{version:"2.0.0",date:"2019-01-11",newChanges:["New theme layout added (layout-3)",'Container layout mode created for layout-2 and layout-3."container" class added to relevant places.',"FuseSidePanel created and used in layout-3.","FuseNavigation: dense variant added for horizontal layout only.","FuseShortcuts: vertical variant added.","FuseSearch: basic variant added (checkout layout-3)","dark-material-bg.jpg changed to gradient background.","IconsUI page refined.","Generating source map disabled by default on production build.","Navigation data refactored on the demo.","Documentation updated.","Dependency packages updated."],fixedChanges:["Codebase improvements.","Some IE fixes.","FuseAuthorization must have state to prevent restricted route component mount when unauthorized user redirects.","E-Commerce App, navigating product to new product didn't update the form state.","Authentication timing issues fixed."],breakingChanges:["Theme layouts moved out of the @fuse core files which gives developers to create or edit theme layouts easily.","Project structure changed after new layout system.","Theme configuration state moved from FuseTheme to redux store (fuse.settings)."],notes:o.a.createElement(d.a,{className:"text-14 p-12 border-2 rounded-8 w-full max-w-lg mt-16",component:"div"},"Migrating to the new major version (v2.0.0) can be difficult because of the project structure and layout system changes.")},{version:"1.2.8",date:"2018-11-28",newChanges:["Academy App added.","FuseSearch Component added (located at the main toolbar and searches in the navigation).","FuseChipSelect documentation page added.","Dependency packages updated (Material-ui etc)."],fixedChanges:["Missing input variants added to Formsy Higher Order Components.","FuseChipSelect variant styles fixed.","FuseNavHorizontalItem missing exact prop added.","E-Commerce App, navigating product to new product didn't update the form state.","Authentication timing issues fixed."]},{version:"1.2.7",date:"2018-11-18",newChanges:["JWT support added to Regular Authentication.","FuseMessage variations added (error, success, alert, info).","Dependency packages updated (Material-ui etc)."],fixedChanges:["FuseMessage relocated (position changed absolute to fixed).","Hide navbar button when navbar display set to false on mobile.","Layout-1 folded navigation mobile fix.","react-router-config react-router-dom versions matched.","tabs style fix for tabbed page layouts."]},{version:"1.2.6",date:"2018-11-07",fixedChanges:["Theme Layout-1 Mobile fix (!important)"]},{version:"1.2.5",date:"2018-11-06",newChanges:["FuseDialog Component added to theme layout for easily show dialog messages via redux action.","Dependency packages updated (Material-ui, react-redux etc)."],fixedChanges:["Layout-1 folded navigation broken in macOS safari browser."]},{version:"1.2.4",date:"2018-10-26",newChanges:["Dependency packages updated (React, Material-ui etc)."]},{version:"1.2.3",date:"2018-10-14",newChanges:["Dependency packages updated (Redux etc).","Redux developer tools disabled on production."],fixedChanges:["Redux Developer Tools Extension fix: problem occurs if the extension is enabled on Firefox."]},{version:"1.2.2",date:"2018-10-09",newChanges:["Initial loading time reduced with code splitting (lazy loading) components and also reducers.","redux-loadable library added.","FuseLoadable component created for to avoid repetition.","webpack-bundle-analyzer package added to devDependencies for to analyze build.","Material UI updated to v3.2.0.","Dependency packages updated."]},{version:"1.2.1",date:"2018-10-04",newChanges:["create-react-app updated to v2","Material UI updated to v3.1.2","Navigation active item style option added for to use square highlighting(old style).","Dependency packages updated.","E-commerce App data/assets updated."],fixedChanges:["Synthetically trigger event onChange for higher-order components of formsy.","Edge, Ie font icon ligature fix."]},{version:"1.2.0",date:"2018-09-25",newChanges:["The design is modernized with Google Material Design's new specs. + Icons replaced with outlined material icons, + Main Font Family changed to Muli","Scrumboard App added.","Material UI updated to v3.1.1",'FuseChipSelect: "variant" attr added for to choose creatable or fixed multi selection.',"Dependency packages updated.","@lodash path created to use lodash's mixins.","Webkit scrollbar styles added.","Auth Services(Auth0, Firebase) are revised for to easily disable.","Various mobile device refinements applied."],fixedChanges:["Cleaner approach for Mail App."]},{version:"1.1.8",date:"2018-09-08",newChanges:["E-commerce App added.","FuseChipSelect Component added.","Material UI updated to v3.0.2","Dependency packages updated."]},{version:"1.1.7",date:"2018-08-27",newChanges:["FuseSplashScreen added.",o.a.createElement("span",null,o.a.createElement("b",null,"firebaseService")," and ",o.a.createElement("b",null,"auth0Service")," created, ",o.a.createElement("b",null,"Auth")," component added as entry point for authentication."),"Login, register pages updated due to adding Auth0 authentication.","404 page redirection added to the routes.","Material UI updated to v1.5.1","Dependency packages updated."],breakingChanges:["FirebaseAuth Component removed, using Auth component instead."]},{version:"1.1.6",date:"2018-08-12",newChanges:["Chat App added.","Material UI updated to v1.4.3","Dependency packages updated."]},{version:"1.1.5",date:"2018-07-18",newChanges:["Chat Panel added.","LeftSidePanel RightSidePanel Layout areas added.","Navbar style refined.","Material UI updated to v1.4.0","Other Dependency packages updated."]},{version:"1.1.4",date:"2018-07-09",newChanges:["Todo App added.","Material UI updated to v1.3.1","Other Dependency packages updated."]},{version:"1.1.3",date:"2018-06-28",newChanges:["Material UI updated to v1.3.0","Dependency packages updated."]},{version:"1.1.2",date:"2018-06-18",newChanges:["Changing default settings with route params.","Dependency packages updated."],fixedChanges:["FuseAnimate, FuseAnimateGroup inject error.","Folded Navigation extra space fixed between 960px and 1280px of window width."]},{version:"1.1.1",date:"2018-06-10",newChanges:[o.a.createElement("span",null,o.a.createElement("code",null,"velocity-react")," added as dependency, its used for fuseAnimation"),o.a.createElement("span",null,o.a.createElement("code",null,"FuseAnimation")," ",o.a.createElement("code",null,"FuseAnimationGroup")," created for easily animate components and applied most of the pages."),o.a.createElement("span",null,o.a.createElement("code",null,"exact")," property option added to navigation item for matching location exactly."),"Dependency packages updated."]},{version:"1.1.0",date:"2018-06-06",newChanges:["Layout system enhanced.","New Horizontal Layout added (layout-2).",o.a.createElement("span",null,o.a.createElement("code",null,"react-poper")," added as dependency, its used for horizontal navigation"),o.a.createElement("span",null,o.a.createElement("code",null,"Material UI")," updated to v1.2.0"),"Dependency packages updated."],fixedChanges:["Dialog form of Contacts App and Calendar App fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps","(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).","Actions and reducers of fuse navigation fixed."],breakingChanges:["Layout and Theme settings data structure changed.","If you are storing the user data at database, old saved user settings will not work with this version.","Page Layouts default scroll behaviour changed to singleScroll due to new layout mechanism, additional innerScroll attribute also added.","FuseSettings separated from the settings panel."]},{version:"1.0.5",date:"2018-05-29",newChanges:[o.a.createElement("span",null,o.a.createElement("code",null,"Material UI")," updated to v1.1.0"),"Dependency packages updated."],fixedChanges:["Extra control added if user.data exist in Firebase Db","Navigation Collapse fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps","(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops)."]},{version:"1.0.4",date:"2018-05-22",newChanges:[o.a.createElement("span",null,o.a.createElement("code",null,"Material UI")," updated to v1.0.0"),"Firebase integration added as an example for authentication (Also saves user data to firebase/db).","Register Page Created for Firebase.","FuseMessage Component added to theme layout for easily show snackbar messages via redux action."],breakingChanges:[o.a.createElement("span",null,o.a.createElement("code",null,"FuseAuth")," renamed with FuseAuthorization"),"Shortcuts data storage moved under the user.data."]},{version:"1.0.3",date:"2018-05-16",newChanges:[o.a.createElement("span",null,o.a.createElement("code",null,"Material UI")," updated to v1.0.0-rc.0"),o.a.createElement("span",null,o.a.createElement("a",{href:"https://github.com/mui-org/material-ui/releases/tag/v1.0.0-rc.0",target:"_blank",rel:"noopener noreferrer"}," Checkout the breaking changes")),o.a.createElement("span",null,o.a.createElement("code",null,"google-map-react")," updated.")]},{version:"1.0.2",date:"2018-05-12",fixedChanges:["Tailwind error on windows.",o.a.createElement("span",null,"missing ",o.a.createElement("code",null,".env")," ",o.a.createElement("code",null,".babelrc")," files added.")]},{version:"1.0.1",date:"2018-05-10",newChanges:["All dependencies updated."],fixedChanges:[o.a.createElement("span",null,o.a.createElement("code",null,"cross-env")," library added for absolute path across platforms.")]},{version:"1.0.0",date:"2018-04-21",notes:o.a.createElement("ul",{className:"mt-24 pl-24"},o.a.createElement("li",null,o.a.createElement(d.a,null,"Initial Release")))}];a.default=function(){return o.a.createElement(r.s,{header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(s.a,{className:"text-18",color:"action"},"home"),o.a.createElement(s.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(d.a,{color:"textSecondary"},"Documentation")),o.a.createElement(d.a,{variant:"h6"},"Changelog"))),content:o.a.createElement("div",{className:"p-24 max-w-xl"},v.map(function(e){return o.a.createElement(f,Object.assign({className:"mb-24",key:e.version},e))}))})}}}]);