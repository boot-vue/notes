(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{390:function(t,s,n){"use strict";n.r(s);var a=n(12),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"gradle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[t._v("#")]),t._v(" Gradle")]),t._v(" "),n("h2",{attrs:{id:"流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),n("blockquote",[n("p",[t._v("init --\x3e config --(afterEvaluate)--\x3e execution")])]),t._v(" "),n("h2",{attrs:{id:"project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[t._v("#")]),t._v(" project")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllprojects")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSubprojets")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRootproject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("project")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Project project"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .... 可以指定某个project的配置  plugin group version dependencies.....")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root+sub project的配置")]),t._v("\nallprojects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sub project的配置")]),t._v("\nsubprojects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用外部命令")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    doLast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" src"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'....'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" dest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'....'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" command"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"mv '),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("$")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v("\n        exec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                executable "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bash'")]),t._v("\n                args "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("command\n                println "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.....'")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GradleException e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"property"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[t._v("#")]),t._v(" property")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以写在root  project的 build.gradle配置中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 : this.xxx   this.mmm 或者 (this.rootProject.xxx)都可以")]),t._v("\next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    xxx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyy'")]),t._v("\n    mmm"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n    ooo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        kkkk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pppp'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也可以把ext 属性单独放在xxx.gradle中, root project通过 apply from: this.file('xxx.gradle) 引入")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子project: rootProject.ext.ooo.kkkk")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gradle.properties 定义   xxx=yyy")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build.gradle 直接用 xxx")]),t._v("\n")])])]),n("h3",{attrs:{id:"file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[t._v("#")]),t._v(" file")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRootDir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBuildDir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProjectDir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path相对于当前project")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("files")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncopy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    from "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    into "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRootProject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBuildDir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    exclude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    rename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fileTree")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/cccc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("FileTree t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("visit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("FileTreeElement e"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  .....")]),t._v("\n        copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"buildscript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#buildscript"}},[t._v("#")]),t._v(" buildscript")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("buildscript"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ScriptHandler h"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仓库")]),t._v("\n    h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repositories"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("RepositoryHandler rh"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n        rh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("jcenter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenLocal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maven"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),t._v("\n            url "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'llllllll'")]),t._v("\n            credentials"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .....")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugin 的依赖(gradle需要的)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是project 的依赖")]),t._v("\n    h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"dependencies"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" dependencies")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// project的依赖(项目用到的依赖)")]),t._v("\ndependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    implementation "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不向上传递依赖")]),t._v("\n    api "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递依赖")]),t._v("\n    compileOnly "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不参与打包")]),t._v("\n    runtimeOnly "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行时")]),t._v("\n    testImplementation\n    debugImplementation\n    releaseImplementation\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"task"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[t._v("#")]),t._v(" task")]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[t._v("task "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("xxx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("description"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ttt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dependsOn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ccc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vvvv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输入")]),t._v("\n  inputs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("properties")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("....")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出")]),t._v("\n  outputs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file xxxx\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似dependsOn")]),t._v("\n  mustRunAfter oooo\n  shouldRunAfter oooo\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\ntask xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    doLast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于")]),t._v("\ntask xxx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"other"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" other")]),t._v(" "),n("h3",{attrs:{id:"settings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),n("blockquote",[n("p",[t._v("settings.gradle")])]),t._v(" "),n("h3",{attrs:{id:"sourceset"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sourceset"}},[t._v("#")]),t._v(" SourceSet")]),t._v(" "),n("blockquote",[n("p",[t._v("src resources manifest 等等配置....")])]),t._v(" "),n("h3",{attrs:{id:"plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[t._v("#")]),t._v(" Plugin")]),t._v(" "),n("blockquote",[n("p",[t._v("一组 task")])]),t._v(" "),n("div",{staticClass:"language-groovy extra-class"},[n("pre",{pre:!0,attrs:{class:"language-groovy"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义插件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Xxxx.groovy")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Xxxx")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plugin")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Project"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Project project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入插件的时候会被调用执行")]),t._v("\n        project"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyInfo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("YyyyExtension"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部可以向插件传递参数")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件参数  YyyyExtension.groovy")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YyyyExtension")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    string name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    string address"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件  自定义的task")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ZzzTask")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultTask")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@TaskAction")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gradle执行阶段执行")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// project.extensions.yyInfo.name")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..........")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resources 下 xxx.properties 声明插件")]),t._v("\nimplemention"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Xxxx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用插件")]),t._v("\napply plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package.Xxx'")]),t._v("\n\nyyInfo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    age"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    address"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);