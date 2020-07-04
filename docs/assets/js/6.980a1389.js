(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{351:function(s,t,n){s.exports=n.p+"assets/img/lvm.1af515ed.png"},367:function(s,t,n){"use strict";n.r(t);var e=n(42),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),e("h2",{attrs:{id:"lvm-磁盘管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lvm-磁盘管理"}},[s._v("#")]),s._v(" LVM 磁盘管理")]),s._v(" "),e("blockquote",[e("p",[s._v("物理硬盘 --\x3e 物理卷 PV --\x3e 卷组 VG --\x3e 逻辑卷 LV --\x3e 挂载")])]),s._v(" "),e("p",[e("img",{attrs:{src:n(351),alt:"LVM"}})]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gpt 分区")]),s._v("\ngdisk /dev/sdn\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建PV卷")]),s._v("\n\npvcreate /dev/sdn /dev/sdx\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卷组")]),s._v("\n\nvgcreate -s 32M xxx /dev/sdn  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s PE最小块大小  4M整数倍")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 逻辑卷")]),s._v("\n\nlvcreate -L 15G -n xxxx1  xxx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vg name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -L 容量大小")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式化逻辑卷")]),s._v("\n\nmkfs.ext4 /dev/xxx/xxxx1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /dev目录下会存在  卷组名/逻辑卷名的路径")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载 /dev/xxx/xxxx1 到具体目录上")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动挂载 /etc/fstab 增加")]),s._v("\n/dev/xxx/xxxx1 /data       ext4    defaults       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扩展/缩小逻辑卷")]),s._v("\nlvextend -L +50G /dev/xxx/xxxx1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加50G")]),s._v("\nlvreduce -L -50G /dev/xxx/xxxx1   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 减小50G")]),s._v("\n\nlvextend -r -l +100FREE /dev/xxx/xxxx1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分配vg剩余所有空间  -r 刷新文件系统大小")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新")]),s._v("\nresize2fs /dev/xxx/xxxx1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etx格式")]),s._v("\nxfs_growfs /dev/xxx/xxx1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xfs格式")]),s._v("\n")])])]),e("h2",{attrs:{id:"rsync-同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rsync-同步"}},[s._v("#")]),s._v(" rsync 同步")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程 ----\x3e 本地  root@xxx:/xxx  /home.....")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rsync")]),s._v(" -arPu --exclude "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo1/'")]),s._v(" --exclude "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo2/'")]),s._v(" --exclude "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'demo3/'")]),s._v(" root@202.60.245.163:/root/test /root\n\n-v, --verbose 详细模式输出\n-q, --quiet 精简输出模式\n-c, --checksum 打开校验开关，强制对文件传输进行校验\n-a, --archive 归档模式，表示以递归方式传输文件，并保持所有文件属性，等于-rlptgoD\n-r, --recursive 对子目录以递归模式处理\n-R, --relative 使用相对路径信息\n-b, --backup 创建备份，也就是对于目的已经存在有同样的文件名时，将老的文件重新命名为~filename。可以使用--suffix选项来指定不同的备份文件前缀。\n--backup-dir 将备份文件"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如~filename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("存放在在目录下。\n-suffix"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SUFFIX 定义备份文件前缀\n-u, --update 仅仅进行更新，也就是跳过所有已经存在于DST，并且文件时间晚于要备份的文件。"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("不覆盖更新的文件"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-l, --links 保留软链结\n-L, --copy-links 想对待常规文件一样处理软链结\n--copy-unsafe-links 仅仅拷贝指向SRC路径目录树以外的链结\n--safe-links 忽略指向SRC路径目录树以外的链结\n-H, --hard-links 保留硬链结\n-p, --perms 保持文件权限\n-o, --owner 保持文件属主信息\n-g, --group 保持文件属组信息\n-D, --devices 保持设备文件信息\n-t, --times 保持文件时间信息\n-S, --sparse 对稀疏文件进行特殊处理以节省DST的空间\n-n, --dry-run现实哪些文件将被传输\n-W, --whole-file 拷贝文件，不进行增量检测\n-x, --one-file-system 不要跨越文件系统边界\n-B, --block-size"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SIZE 检验算法使用的块尺寸，默认是700字节\n-e, --rsh"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("COMMAND 指定使用rsh、ssh方式进行数据同步\n--rsync-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" 指定远程服务器上的rsync命令所在路径信息\n-C, --cvs-exclude 使用和CVS一样的方法自动忽略文件，用来排除那些不希望传输的文件\n--existing 仅仅更新那些已经存在于DST的文件，而不备份那些新创建的文件\n--delete 删除那些DST中SRC没有的文件\n--delete-excluded 同样删除接收端那些被该选项指定排除的文件\n--delete-after 传输结束以后再删除\n--ignore-errors 及时出现IO错误也进行删除\n--max-delete"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUM 最多删除NUM个文件\n--partial 保留那些因故没有完全传输的文件，以是加快随后的再次传输\n--force 强制删除目录，即使不为空\n--numeric-ids 不将数字的用户和组ID匹配为用户名和组名\n--timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("TIME IP超时时间，单位为秒\n-I, --ignore-times 不跳过那些有同样的时间和长度的文件\n--size-only 当决定是否要备份文件时，仅仅察看文件大小而不考虑文件时间\n--modify-window"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUM 决定文件是否时间相同时使用的时间戳窗口，默认为0\n-T --temp-dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DIR 在DIR中创建临时文件\n--compare-dest"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DIR 同样比较DIR中的文件来决定是否需要备份\n-P 等同于 --partial\n--progress 显示备份过程\n-z, --compress 对备份的文件在传输时进行压缩处理\n--exclude"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PATTERN 指定排除不需要传输的文件模式\n--include"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PATTERN 指定不排除而需要传输的文件模式\n--exclude-from"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 排除FILE中指定模式的文件\n--include-from"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 不排除FILE指定模式匹配的文件\n--version 打印版本信息\n--address 绑定到特定的地址\n--config"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 指定其他的配置文件，不使用默认的rsyncd.conf文件\n--port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PORT 指定其他的rsync服务端口\n--blocking-io 对远程shell使用阻塞IO\n-stats 给出某些文件的传输状态\n--progress 在传输时现实传输过程\n--log-format"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("formAT 指定日志文件格式\n--password-file"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE 从FILE中得到密码\n--bwlimit"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("KBPS 限制I/O带宽，KBytes per second\n-h, --help 显示帮助信息\n")])])]),e("h2",{attrs:{id:"zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" zsh")]),s._v(" "),e("blockquote",[e("p",[s._v("home end 键 & 小键盘")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key bindings")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[1~"')]),s._v(" beginning-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[4~"')]),s._v(" end-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[5~"')]),s._v(" beginning-of-history\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[6~"')]),s._v(" end-of-history\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for rxvt")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[8~"')]),s._v(" end-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[7~"')]),s._v(" beginning-of-line\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for non RH/Debian xterm, can't hurt for RH/DEbian xterm")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('OH"')]),s._v(" beginning-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('OF"')]),s._v(" end-of-line\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for freebsd console")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[H"')]),s._v(" beginning-of-line\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\e"}},[s._v("\\e")]),s._v('[F"')]),s._v(" end-of-line\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# completion in the middle of a line")]),s._v("\nbindkey "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^i'")]),s._v(" expand-or-complete-prefix\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Fix numeric keypad")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0 . Enter")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Op"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[On"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[OM"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^M"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 2 3")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oq"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Or"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Os"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4 5 6")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ot"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ou"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ov"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 7 8 9")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ow"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ox"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oy"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# + - * /")]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Ol"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Om"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oj"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("\nbindkey -s "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[Oo"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v("\n\n")])])]),e("h2",{attrs:{id:"vim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vim"}},[s._v("#")]),s._v(" Vim")]),s._v(" "),e("blockquote",[e("p",[s._v(".vimrc")])]),s._v(" "),e("p",[s._v("搜索高亮 "),e("code",[s._v("set hlsearch")])]),s._v(" "),e("h2",{attrs:{id:"dash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dash"}},[s._v("#")]),s._v(" dash")]),s._v(" "),e("p",[s._v("ubuntu 下 declare 报错:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg-reconfigure dash\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选否  ubuntu默认sh 指向了dash  通过上边命令  解除dash与sh的关联")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);