import{_ as a,r as d,o as l,c as r,a as n,b as i,d as s,e as c}from"./app-4b60a80d.js";const v={},o=c(`<h1 id="文档-规范" tabindex="-1"><a class="header-anchor" href="#文档-规范" aria-hidden="true">#</a> 文档 规范</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>在撰写文档的时候如果能遵循一点良好的规范，将能<strong>提升所有人的阅读体验</strong>。</p><p>在此，文档的含义非常广泛，可以指代任何供人类阅读的文本材料。包括但不限于：<code>Readme</code>、<code>Changelog</code>、代码注释、上手指南、<code>Issue</code> 说明和<code>PPT</code> 分享等。</p><h2 id="_1-空格" tabindex="-1"><a class="header-anchor" href="#_1-空格" aria-hidden="true">#</a> 1. 空格</h2><ul><li><p>1.1.【强制】中英文之间需要增加空格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

HTML 定义网页的结构与内容，CSS 定义其格式与样式，而 JavaScript 则为网页增加可交互性，创作功能丰富的 Web 应用。

<span class="token comment">&lt;!-- good --&gt;</span>

HTML 定义网页的结构与内容，CSS 定义其格式与样式，而 JavaScript 则为网页增加可交互性，创作功能丰富的 Web 应用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.2.【强制】中英文与数字之间需要增加空格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

截至 2012 年，所有的现代浏览器都完整的支持 ECMAScript5.1，旧版本的浏览器至少支持 ECMAScript3 标准。

<span class="token comment">&lt;!-- good --&gt;</span>

截至 2012 年，所有的现代浏览器都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.3.【强制】全角标点与其他字符之间不加空格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

不像 UDP， HTTP 是一个不会静默丢失消息的协议。

<span class="token comment">&lt;!-- good --&gt;</span>

不像 UDP，HTTP 是一个不会静默丢失消息的协议。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.4.【强制】半角标点与其他字符之间需要增加空格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

Cookie 主要用于以下三个方面：

1.会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息） 2.个性化设置（如用户自定义设置、主题等） 3.浏览器行为跟踪（如跟踪分析用户行为等）

<span class="token comment">&lt;!-- good --&gt;</span>

Cookie 主要用于以下三个方面：

<span class="token list punctuation">1.</span> 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
<span class="token list punctuation">2.</span> 个性化设置（如用户自定义设置、主题等）
<span class="token list punctuation">3.</span> 浏览器行为跟踪（如跟踪分析用户行为等）

<span class="token comment">&lt;!-- bad --&gt;</span>

我+你=世界。

<span class="token comment">&lt;!-- good --&gt;</span>

我 + 你 = 世界。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1.5.【推荐】链接文字前后不需要增加空格</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

<span class="token url">[<span class="token content">了解更多</span>](<span class="token url">https://developer.mozilla.org/zh-CN/docs/Web</span>)</span> 开发技术相关知识。

<span class="token comment">&lt;!-- good --&gt;</span>

<span class="token url">[<span class="token content">了解更多</span>](<span class="token url">https://developer.mozilla.org/zh-CN/docs/Web</span>)</span>开发技术相关知识。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-标点符号" tabindex="-1"><a class="header-anchor" href="#_2-标点符号" aria-hidden="true">#</a> 2. 标点符号</h2><ul><li><p>2.1.【推荐】正确使用引号</p><p>中文句子内夹用英文句子时，该英文句子用中文双引号标示，保留英文句子内部的英文标点符号，句末使用中文标点。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad - 英文句子不建议使用英文引号标示 --&gt;</span>

他写的是 &quot;Hello, world!&quot;。

<span class="token comment">&lt;!-- bad - 英文句子不建议使用中文单引号标示 --&gt;</span>

他写的是‘Hello, world!’。

<span class="token comment">&lt;!-- bad - 英文句子内部的标点符号建议保留英文标点符号 --&gt;</span>

他写的是“Hello，world！”。

<span class="token comment">&lt;!-- good --&gt;</span>

他写的是“Hello, world!”。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.2.【推荐】正确使用省略号</p><p>中文省略号的形式为“……”（中文输入法下 SHIFT + 6），6 个居中小圆点；英文省略号的形式为“...”，3 个齐线小圆点。</p><p>夹用英文的中文句子里，英文内部的省略使用英文省略号；中文内部的省略使用中文省略号。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

省略号是 3 个小圆点...
省略号是 6 个齐线小圆点......
省略号是 6 个句号。。。。。。

<span class="token comment">&lt;!-- good --&gt;</span>

省略号是 6 个居中小圆点，占两个全角空格……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.3.【推荐】正确使用破折号</p><p>中文破折号的形式为“——”，长度相当于两个汉字的长度。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad - 破折号不推荐使用两个中横线 --&gt;</span>

第三方框架和库--用来快速构建网站和应用。

<span class="token comment">&lt;!-- good --&gt;</span>

第三方框架和库——用来快速构建网站和应用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_3-全角和半角" tabindex="-1"><a class="header-anchor" href="#_3-全角和半角" aria-hidden="true">#</a> 3. 全角和半角</h2><ul><li><p>3.1.【强制】中文标点符号使用全角</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad - 中文句子冒号未使用全角 --&gt;</span>

前端框架: React、Vue、Angular。

<span class="token comment">&lt;!-- bad - 中文句子内夹用并列的英文单词时使未使用顿号分隔 --&gt;</span>

前端框架：React, Vue, Angular。

<span class="token comment">&lt;!-- good --&gt;</span>

前端框架：React、Vue、Angular。

<span class="token comment">&lt;!-- bad - 中文句子括号未使用全角 --&gt;</span>

至少熟悉一门非前端的语言(如 Java、PHP、C、C++、Python、Ruby)，并有实践经验！

<span class="token comment">&lt;!-- good --&gt;</span>

至少熟悉一门非前端的语言（如 Java、PHP、C、C++、Python、Ruby），并有实践经验！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>3.2.【强制】英文和数字使用半角</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad - 英文和数字不应该使用全角 --&gt;</span>

该版本正式名称为 ＥＣＭＡＳｃｒｉｐｔ ２０１５，但通常被称为 ＥＣＭＡＳｃｒｉｐｔ ６ 或者 ＥＳ６。

<span class="token comment">&lt;!-- good --&gt;</span>

该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>3.3.【强制】完整的英文整句和特殊名词使用半角标点</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

<span class="token comment">&lt;!-- good --&gt;</span>

乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
推荐你阅读《Hackers &amp; Painters: Big Ideas from the Computer Age》，非常的有趣。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_4-名词" tabindex="-1"><a class="header-anchor" href="#_4-名词" aria-hidden="true">#</a> 4. 名词</h2><ul><li><p>4.1.【强制】正确地拼写英文专有词汇</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- bad --&gt;</span>

我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。

<span class="token comment">&lt;!-- good --&gt;</span>

我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="附录" tabindex="-1"><a class="header-anchor" href="#附录" aria-hidden="true">#</a> 附录</h2><p>前端常用专有名词：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>HTML, CSS, JavaScript/JS, AJAX, JSON, DOM, BOM, Less, HTTP, HTTPS, WebSocket, ECMAScript, ECMAScript 2015, ECMAScript 6, ES6, ES2015
jQuery, jQuery UI, jQuery Mobile, YUI, Zepto, Dojo
React, React Native, Bootstrap, RequireJS, Sea.js, AngularJS, Backbone.js
Gulp, Grunt, webpack, Yeoman, npm, spm, Babel
Mocha, Jasmine, Should.js
PHP, Java, Node.js
MySQL, MongoDB, Redis
Apache, Nginx
GitHub, GitLab, GitCafe
Chrome, Firefox, Safari, Internet Explore/IE, IE 7, Opera, UC
Android, iOS, Windows, OS X, Ubuntu, Linux, Debian
PC, Mobile, H5
MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini
iPad Air, iPad Air 2, iPad mini, iPhone, iPhone 6s, iPhone 6s Plus, Apple Watch
FPS, UI, URL, URI, URLs, URIs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),t={href:"https://github.com/sparanoid/chinese-copywriting-guidelines",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113092346124.pdf",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.w3.org/TR/clreq/",target:"_blank",rel:"noopener noreferrer"};function p(g,h){const e=d("ExternalLinkIcon");return l(),r("div",null,[o,n("ul",null,[n("li",null,[n("a",t,[i("《中文文案排版指北》"),s(e)])]),n("li",null,[n("a",m,[i("《标点符号用法》"),s(e)])]),n("li",null,[n("a",u,[i("夹用英文的中文文本的标点符号用法（草案）"),s(e)])]),n("li",null,[n("a",b,[i("《中文排版需求》"),s(e)])])])])}const w=a(v,[["render",p],["__file","doc.html.vue"]]);export{w as default};
