(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{420:function(e,s,t){"use strict";t.r(s);var n=t(19),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("其实早在去年十一月份，我就已经发现了深度播放器无法播放视频的问题。具体表现为播放视频画面黑屏，但是声音能正常播放。一开始我没有在意，以为这么明显的 BUG 官方会很快修，而且后面我误以为已经修复了（实际上并不是所有视频都会有这个问题）。")]),e._v(" "),t("p",[e._v("但是到了去年十二月份，我发现我下载的物语系列动画依然无法播放时，我去质询了下内测群里的其他人有没有这个问题。他们建议我用终端运行下播放器看下有无输出报错。果不其然，在播放视频时出现了以下报错：")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("mesa: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the -simplifycfg-sink-common option: may only occur zero or one times"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nmesa: "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the -global-isel-abort option: may only occur zero or one times"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("虽然我这方面了解不多，但是我知道 Mesa 是 Linux 下基于 AMD 开源显卡驱动开发的图形库。而刚好我的笔记本的显卡是 R7-4800U 的自带核显，那我猜测可能是显卡驱动问题。")]),e._v(" "),t("p",[e._v("于是乎我在 Github 上提了个 "),t("a",{attrs:{href:"https://github.com/linuxdeepin/deepin-movie-reborn/issues/67",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issues"),t("OutboundLink")],1),e._v("，经过几天激烈的讨论后（其实是官方工作人员一般早上给答复而我一般晚上才有空回复），终于找到了问题所在！")]),e._v(" "),t("p",[e._v("（没有配图，我还没有搞图床）")]),e._v(" "),t("blockquote",[t("p",[e._v("我们已经定位到问题原因，因为amd4000系列，集显下，不支持h264硬解码导致，我们在后期会修复此问题。")])]),e._v(" "),t("p",[e._v("问题已经确认，接下来就是等官方推送更新就是了。不过应该要等一段时间……")])])}),[],!1,null,null,null);s.default=r.exports}}]);