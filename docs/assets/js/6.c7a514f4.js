(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{347:function(s,t,e){s.exports=e.p+"assets/img/lvm.1af515ed.png"},359:function(s,t,e){"use strict";e.r(t);var n=e(41),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"lvm磁盘管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lvm磁盘管理"}},[s._v("#")]),s._v(" LVM磁盘管理")]),s._v(" "),n("blockquote",[n("p",[s._v("物理硬盘 --\x3e 物理卷 PV --\x3e 卷组 VG --\x3e 逻辑卷 LV --\x3e 挂载")])]),s._v(" "),n("p",[n("img",{attrs:{src:e(347),alt:"LVM"}})]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gpt 分区")]),s._v("\ngdisk /dev/sdn\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建PV卷")]),s._v("\n\npvcreate /dev/sdn /dev/sdx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卷组")]),s._v("\n\nvgcreate -s 32M xxx /dev/sdn  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s PE最小块大小  4M整数倍")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 逻辑卷")]),s._v("\n\nlvcreate -L 15G -n xxxx1  xxxx2 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -L 容量大小")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式化逻辑卷")]),s._v("\n\nmkfs.ext4 /dev/xxx/xxxx1   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /dev目录下会存在  卷组名/逻辑卷名的路径")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载 /dev/xxx/xxxx1 到具体目录上")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动挂载 /etc/fstab 增加")]),s._v("\n/dev/xxx/xxxx1 /data       ext4    defaults       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扩展/缩小逻辑卷")]),s._v("\nlvextend -L +50G /dev/xxx/xxxx1   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加50G")]),s._v("\nlvreduce -L -50G /dev/xxx/xxxx1   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 减小50G")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新")]),s._v("\nresize2fs /dev/xxx/xxxx1  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etx格式")]),s._v("\nxfs_growfs /dev/xxx/xxx1  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xfs格式")]),s._v("\n")])])]),n("h2",{attrs:{id:"rsync-同步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rsync-同步"}},[s._v("#")]),s._v(" rsync 同步")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程 ----\x3e 本地  root@xxx:/xxx  /home.....")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -arPu --exclude "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo1/'")]),s._v(" --exclude "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo2/'")]),s._v(" --exclude "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo3/'")]),s._v(" root@202.60.245.163:/root/test /root\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);