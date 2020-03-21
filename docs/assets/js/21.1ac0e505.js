(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{225:function(e,t,a){"use strict";a.r(t);var r=a(28),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"netty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty"}},[e._v("#")]),e._v(" Netty")]),e._v(" "),a("h2",{attrs:{id:"handler-编解码器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler-编解码器"}},[e._v("#")]),e._v(" Handler&编解码器")]),e._v(" "),a("p",[a("code",[e._v("IdleStateHandler: 读写空闲检测")]),e._v(" "),a("code",[e._v("HttpObjectAggregator")]),e._v(" "),a("code",[e._v("HttpServerCodec")]),e._v(" "),a("code",[e._v("ChunkedWriteHandler")]),e._v(" "),a("code",[e._v("WebSocketServerProtocalHandler")]),e._v(" "),a("code",[e._v("ProtobufVarint32FrameDecoder")]),e._v(" "),a("code",[e._v("ProtobufDecoder")]),e._v(" "),a("code",[e._v("ProtobufVarint32LengthFieldPrepender")]),e._v(" "),a("code",[e._v("protobufEncoder")])]),e._v(" "),a("blockquote",[a("p",[e._v("ByteToMessageDecoder MessageToByteEncoder MessageToMessageDecoder MessageToMessageEncoder\nReplayingDecoder FiexedLengthFrameDecoder DelimiterBasedFramedDecoder LengthFieldBasedFrameDecoder")])]),e._v(" "),a("h2",{attrs:{id:"protocal-buffers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protocal-buffers"}},[e._v("#")]),e._v(" Protocal Buffers")]),e._v(" "),a("div",{staticClass:"language-proto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('syntax="proto2";\npackage  xxx;\noption java_package="xxxx";\noption java_outer_classname="xxxx";\noption optimize_for = SPEED;// CODE_SIZE LITE_TUNTIME\n\nmessage Person{\n    required String name=1;\n    required int32 age=2;\n    optional String address=3;\n    repeated phones=4;\n\n    enum xx_type {\n        IPHONE=0;\n        HUAWEI=1;\n    }\n\n    oneof data_bofy { // oneof 同时只有一个字段生效\n        XX xx =5;\n        YY yy=6;\n    }\n\n    message xx{\n        ....\n    }\n}\n')])])]),a("blockquote",[a("p",[e._v("protobuf-java protobuf-lite protobuf-util")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("protoc --java_out"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("src/main/java src/xxxxx.ptoto\n")])])]),a("h2",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" Grpc")]),e._v(" "),a("blockquote",[a("p",[e._v("proto3 request/stream request <----\x3e response/stream response")])]),e._v(" "),a("div",{staticClass:"language-proto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("option java_multiple_files=true;\n\nservice xx {\n    rpc Test(Request xx) returns (Response) {}\n}\n\nmessage Request{\n    ...\n}\n\nmessage Response{\n    ...\n}\n")])])]),a("p",[e._v("java:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("extends XxxServiceGrpc.XxxServiceImplBase{\n// 重写 ptoto中定义的rpc方法\n}\n\nStreamObserver\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);