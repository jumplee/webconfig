//在多功能栏添加搜索引擎

//视频网站
addSearchAliasX('bz', 'B站', 'https://search.bilibili.com/all?keyword=');
addSearchAliasX('aqy', '爱奇艺', 'http://so.iqiyi.com/so/q_');
addSearchAliasX('tx', '爱奇艺', 'https://v.qq.com/x/search/?q=');
addSearchAliasX('yk', '优酷', 'https://so.youku.com/search_video/q_');
addSearchAliasX('', '爱奇艺', 'https://v.qq.com/x/search/?q=');

//搜索网站
addSearchAliasX('gg','谷歌','https://www.google.com/search?q=');
addSearchAliasX('bd','百度','http://www.baidu.com/s?wd=');
addSearchAliasX('by','必应', 'http://www.bing.com/search?q=');
addSearchAliasX('wx','微信', 'https://weixin.sogou.com/weixin?query=');
addSearchAliasX('wj', '维基百科', 'https://zh.wikipedia.org/w/index.php?title=Special:%E6%90%9C%E7%B4%A2&search=');
addSearchAliasX('bk', '百度百科', 'https://baike.baidu.com/item/');
addSearchAliasX('hd', '互动百科', 'https://www.baike.com/wiki/');
addSearchAliasX('wb', '微博', 'http://s.weibo.com/weibo/');
addSearchAliasX('tt', '今日头条', 'https://www.toutiao.com/search/?keyword=');
addSearchAliasX('zh', '知乎', 'https://www.zhihu.com/search?type=content&q=');


//购物
addSearchAliasX('tb','淘宝','https://s.taobao.com/search?q=');
addSearchAliasX('tm','天猫','https://list.tmall.com/search_product.htm?q=');
addSearchAliasX('jd','京东','https://search.jd.com/Search?keyword=');
addSearchAliasX('sn','苏宁易购','https://search.suning.com/');
addSearchAliasX('wph','唯品会','https://category.vip.com/suggest.php?keyword=');
// addSearchAliasX('wd','微店','http://www.baidu.com/s?wd=');
addSearchAliasX('dd','当当','http://search.dangdang.com/?key=');
addSearchAliasX('mt','美团','https://gy.meituan.com/s/');
addSearchAliasX('ymx','亚马逊','https://www.amazon.cn/s?k=');
// addSearchAliasX('pdd','拼多多','http://www.baidu.com/s?wd=');

//常用网站
addSearchAliasX('db', '豆瓣', 'http://www.douban.com/search?q=');
addSearchAliasX('gh', 'github', 'https://github.com/search?ref=opensearch&q=');
addSearchAliasX('pj','吾爱破解', 'https://www.52pojie.cn/search.php?mod=forum&searchid=');

//增加按键映射

//打开常用网页
mapkey('oa', '打开爱奇艺', function() {
        tabOpenLink("http://so.iqiyi.com ");
});
mapkey('op', '打开吾爱破解', function() {
        tabOpenLink("https://www.52pojie.cn/");
});

mapkey('ou', '打开猿料', function() {
        tabOpenLink("https://yuanliao.info/");
});
// mapkey('oi', '打开icon矢量图', function() {
//         tabOpenLink("https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2");
// });
mapkey('oj', '打开娟妞影视', function() {
        tabOpenLink("http://www.nnyy8.com/");
});
mapkey('ok', '打开共享库', function() {
        tabOpenLink("https://getquicker.net/Share/");
});
mapkey('ol', '打开listary', function() {
        tabOpenLink("https://discussion.listary.com/c/14-category");
});
mapkey('os', '打开资源搜索', function() {
        tabOpenLink("http://magnet.chongbuluo.com/");
});
mapkey('ot', '打开淘宝', function() {
        tabOpenLink("https://www.taobao.com/");
});

mapkey('ov', '打开腾讯视频', function() {
        tabOpenLink("http://v.qq.com/");
});
mapkey('oq', '打开QQ邮箱', function() {
        tabOpenLink("http://v.qq.com/");
});
mapkey('oc', '打开listary', function() {
        tabOpenLink("https://www.runoob.com/python3/python3-tutorial.html");
});
mapkey('oz', '打开知乎', function() {
        tabOpenLink("https://www.zhihu.com/explore/recommendations");
});
mapkey('gb', '打开B站', function() {
        tabOpenLink("https://www.bilibili.com/");
});

//打开url
unmap('u')
mapkey('ua', '打开爱奇艺', function() {
        tabOpenLink("http://so.iqiyi.com ");
});
mapkey('ub', '打开B站', function() {
        tabOpenLink("https://www.bilibili.com/");
});
mapkey('uc', '打开菜鸟教程', function() {
        tabOpenLink("https://www.runoob.com/");
});
// mapkey('ud', '打开B站', function() {
//         tabOpenLink("https://www.bilibili.com/");
// });
// mapkey('ue', '打开B站', function() {
//         tabOpenLink("https://www.bilibili.com/");
// });
// mapkey('uf', '打开B站', function() {
//         tabOpenLink("https://www.bilibili.com/");
// });
mapkey('ug', '打开扩展脚本', function() {
        tabOpenLink("https://greasyfork.org/zh-CN");
});
// mapkey('gh', '打开B站', function() {
//         tabOpenLink("https://www.bilibili.com/");
// });
mapkey('ui', '打开icon矢量图', function() {
        tabOpenLink("https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2");
});
mapkey('uj', '打开娟妞影视', function() {
        tabOpenLink("http://www.nnyy8.com/");
});
mapkey('uk', '打开云课堂', function() {
        tabOpenLink("https://study.163.com/");
});
mapkey('ul', '打开listary', function() {
        tabOpenLink("https://discussion.listary.com/c/14-cateuory");
});
// mapkey('um', '打开listary', function() {
//         tabOpenLink("https://discussion.listary.com/c/14-cateuory");
// });
// mapkey('un', '打开listary', function() {
//         tabOpenLink("https://discussion.listary.com/c/14-cateuory");
// });
// mapkey('uo', '打开listary', function() {
//         tabOpenLink("https://discussion.listary.com/c/14-cateuory");
// });
mapkey('up', '打开吾爱破解', function() {
        tabOpenLink("http://www.52pojie.cn/");
});
mapkey('uq', '打开QQ邮箱', function() {
        tabOpenLink("http://v.qq.com/");
});
// mapkey('ur', '打开QQ邮箱', function() {
//         tabOpenLink("http://v.qq.com/");
// });
mapkey('us', '打开资源搜索', function() {
        tabOpenLink("http://magnet.chongbuluo.com/");
});
mapkey('ut', '打开淘宝', function() {
        tabOpenLink("https://www.taobao.com/ ");
});
mapkey('uu', '打开猿料', function() {
        tabOpenLink("https://yuanliao.info/");
});
mapkey('uv', '打开腾讯视频', function() {
        tabOpenLink("http://v.qq.com/");
});
mapkey('uw', '打开我要自学网', function() {
        tabOpenLink("http://www.51zxw.net/");
});
mapkey('ux', '打开迅云播', function() {
        tabOpenLink("http://www.ooe.la/");
});
mapkey('uy', '打开优酷视频', function() {
        tabOpenLink("http://www.youku.com/");
});
mapkey('uz', '打开知乎', function() {
        tabOpenLink("https://www.zhihu.com/explore/recommendations");
});
mapkey('uo', '打开磁盘', function() {
        var obj=new ActiveXObject("wscript.shell");
        obj.Run("C:/")
});

//其他功能
mapkey('cu', '美化页面', function() {
  var deuglifycss = document.createElement("style");
  deuglifycss.type = "text/css";
  deuglifycss.innerHTML = "body {width: 50%; margin-left: 300px; line-height: 1.3}";
  document.body.appendChild(deuglifycss);
});
// mapkey('gn', 'translate', function() {
//      Front.registerInlineQuery({
//         url: "https://api.shanbay.com/bdc/search/?word=",
//         parseResult: function(res) {
//             try {
//                 res = JSON.parse(res.text);
//                 var exp = res.msg;
//                 if (res.data.definition) {
//                     var pronunciations = [];
//                     for (var reg in res.data.pronunciations) {
//                         pronunciations.push(`<div>[${reg}] ${res.data.pronunciations[reg]}</div>`);
//                         // pronunciations.push(`<div><audio src="${res.data[reg+'_audio']}" controls></audio></div>`);
//                     }
//                     var definition = res.data.definition.split("\n").map(function(d) {
//                         return `<li>${d}</li>`;
//                     }).join("");
//                     exp = `${pronunciations.join("")}<ul>${definition}</ul>`;
//                 }
//                 if (res.data.en_definitions) {
//                     exp += "<hr/>";
//                     for (var lex in res.data.en_definitions) {
//                         var sense = res.data.en_definitions[lex].map(function(s) {
//                             return `<li>${s}</li>`;
//                         }).join("");
//                         exp += `<div>${lex}</div><ul>${sense}</ul>`;
//                     }
//                 }
//                 return exp;
//             } catch (e) {
//                 return "";
//             }
//         }
//     });});

//修改按键映射
map('gxh','gx0')
unmap('gx0')
map('gxe','gx$')
unmap('gx$')
map('gxl','gxt')
unmap('gxt')
map('gxr','gxT')
unmap('gxT')
map('gh','g0')
unmap('g0')
map('ge','g$')
unmap('g$')
map('gd','gr')
map('gr','gU')
unmap('gU')
//删除按键映射


//主题一
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
//主题二
settings.hintAlign = "left";
Hints.style('border: solid 3px #552a48; color:#efe1eb; background: initial; background-color: #552a48; font-family: sans-serif;');

settings.theme = `
.sk_theme {
    font-family: sans-serif;
    font-size: 11pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}
.sk_theme .prompt .separator {
    display: none;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
