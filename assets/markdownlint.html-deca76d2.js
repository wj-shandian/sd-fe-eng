import{_ as e,r as p,o as i,c as u,a as n,b as s,d as t,e as o}from"./app-144f2dab.js";const l={},c=n("h1",{id:"如何拥有自己的文档规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#如何拥有自己的文档规范","aria-hidden":"true"},"#"),s(" 如何拥有自己的文档规范")],-1),r={href:"https://github.com/DavidAnson/markdownlint",target:"_blank",rel:"noopener noreferrer"},d=o(`<h2 id="首先在项目-sd-fe-eng-初始化文件" tabindex="-1"><a class="header-anchor" href="#首先在项目-sd-fe-eng-初始化文件" aria-hidden="true">#</a> 首先在项目 sd-fe-eng 初始化文件</h2><p>learn create markdownlint-config</p><p>然后learn会在 packages 生成一个文件夹 里面有一些初始化的文件创建在根目录下创建index.json文件 package.json的main入口 改为index.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ul-style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dash&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-trailing-spaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;br_spaces&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;list_item_empty_lines&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list-marker-space&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;line-length&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-inline-html&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;no-duplicate-header&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;proper-names&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;names&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;CSS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;AJAX&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;JSON&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;DOM&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;BOM&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Less&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Sass&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;SCSS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;HTTP&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;HTTPS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;WebSocket&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ECMAScript&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ECMAScript 2015&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ECMAScript 6&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;jQuery&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;jQuery Mobile&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;React&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;React Native&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Bootstrap&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Gulp&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Grunt&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Yeoman&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;npm&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;spm&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Babel&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Mocha&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Jasmine&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;PHP&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Node.js&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;NodeJS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;MongoDB&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Redis&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Apache&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Nginx&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;NGINX&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;GitHub&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;GitLab&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;GitCafe&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Chrome&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Firefox&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Safari&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Internet Explore&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;IE&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;IE 7&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Opera&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;UC&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Android&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iOS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Windows&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;OS X&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Ubuntu&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Linux&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Debian&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;PC&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Mobile&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;H5&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;MacBook&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;MacBook Pro&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;MacBook Air&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iMac&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Mac Pro&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iPad&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Mac mini&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iPad Air&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iPad Air 2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iPad mini&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iPhone&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iPhone 6s&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;iPhone 6s Plus&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Apple Watch&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Alibaba&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Taobao&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Alphabet&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Apple&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Microsoft&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Yahoo&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;FPS&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;UI&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;URL&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;URI&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;URLs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;URIs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Visual Studio Code&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;code_blocks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这只是一个例子 你也可以根据文档规范 写成自己需要的</p>`,5),k={href:"https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="在sd-fe-eng项目中调试" tabindex="-1"><a class="header-anchor" href="#在sd-fe-eng项目中调试" aria-hidden="true">#</a> 在sd-fe-eng项目中调试</h2><p>全局安装 markdownlint 在根目录创建.markdownlint.json文件 然后相对路径引入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span><span class="token string">&quot;./packages/markdownlint-config/index.json&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在根目录创建 README.md 文件</p><p>输入以下内容</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 前端工程化规范</span>

<span class="token title important"><span class="token punctuation">##</span> https</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出来 https的关键词是不在我们设置里的 所以我们执行 markdownlint README.md 是能够看到报错 并提示相关的错误</p><p>这里建议在vscode安装markdownlint插件 能够实时看到错误并且保存时可以自动修复</p><h2 id="发布npm" tabindex="-1"><a class="header-anchor" href="#发布npm" aria-hidden="true">#</a> 发布npm</h2><p>首先注册npm账号 然后 执行npm login 登录账号</p><p>然后要发布的包的 publishConfig 要和当前 npm源的地址一致</p><p>登录之后 执行npm publish 发布包即可</p><h2 id="具体包的使用-看查看npm包的readme-md" tabindex="-1"><a class="header-anchor" href="#具体包的使用-看查看npm包的readme-md" aria-hidden="true">#</a> 具体包的使用 看查看npm包的README.md</h2>`,13);function q(m,b){const a=p("ExternalLinkIcon");return i(),u("div",null,[c,n("p",null,[n("a",r,[s("markdownlint官网"),t(a)])]),d,n("p",null,[n("a",k,[s("文档地址"),t(a)])]),v])}const h=e(l,[["render",q],["__file","markdownlint.html.vue"]]);export{h as default};
