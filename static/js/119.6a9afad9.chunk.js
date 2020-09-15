(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{2145:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(123),l=a(11);n.default=function(){return o.a.createElement(l.s,{header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement(r.a,{variant:"h6"},"Fuse Routing")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(r.a,{className:"mb-16",component:"p"},"Fuse React routing system based on ",o.a.createElement("a",{href:"https://reacttraining.com/react-router/",target:"_blank",rel:"noopener noreferrer",className:"font-bold"},"react-router")," and its package ",o.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config",target:"_blank",rel:"noopener noreferrer",className:"font-bold"},"react-router-config")),o.a.createElement(r.a,{className:"mb-16",component:"p"},"For the modular approach and route based Fuse settings, we are using config files and generate routes from that files."),o.a.createElement(r.a,{className:"mb-16",component:"p"},"For example, have a look at the code below ",o.a.createElement(l.k,{component:"code",className:"language-bash"},"MailAppConfig.js"),". You can override all settings for a particular route as ",o.a.createElement("code",null,"/apps/mail")," for this example."),o.a.createElement(l.k,{component:"pre",className:"language-jsx my-16"},"\n                            import MailApp from './MailApp';\n                            import React from 'react';\n                            import {Redirect} from 'react-router-dom';\n\n                            export const MailAppConfig = {\n                                settings: {\n                                    layout          : {\n                                        style : 'layout1',\n                                        config: {\n                                            scroll : 'content',\n                                            navbar : {\n                                                display : true,\n                                                folded  : false,\n                                                position: 'left'\n                                            },\n                                            toolbar: {\n                                                display : true,\n                                                style   : 'fixed',\n                                                position: 'below'\n                                            },\n                                            footer : {\n                                                display : true,\n                                                style   : 'fixed',\n                                                position: 'below'\n                                            },\n                                            mode   : 'fullwidth'\n                                        }\n                                    },\n                                    customScrollbars: true,\n                                    theme           : {\n                                        main   : 'default',\n                                        navbar : 'mainThemeDark',\n                                        toolbar: 'mainThemeLight',\n                                        footer : 'mainThemeDark'\n                                    }\n                                },\n                                routes  : [\n                                    {\n                                        path     : '/apps/mail/label/:labelHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail/filter/:filterHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail/:folderHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail',\n                                        component: () => <Redirect to=\"/apps/mail/inbox\"/>\n                                    }\n                                ]\n                            };\n                            "),o.a.createElement(r.a,{className:"mb-16",component:"p"},"Then we import and generate routes from that file in ",o.a.createElement("code",null,"fuse-configs/fuseRoutes")),o.a.createElement(l.k,{component:"pre",className:"language-jsx my-16"},"\n                                import {appsRoutes} from 'app/main/apps/mail/MailAppConfig.js';\n                                import {FuseUtils} from '@fuse';\n                                import {Redirect} from 'react-router-dom';\n                                import React from 'react';\n\n                                const routeConfigs = [\n                                    MailAppConfig\n                                ];\n\n                                export const routes = [\n                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),\n                                    {\n                                        path     : '/',\n                                        component: () => <Redirect to=\"/pages/errors/error-404\"/>\n                                    }\n                                ];\n                            "))})}}}]);