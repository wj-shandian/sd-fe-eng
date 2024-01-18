import{_ as p,r as i,o as l,c as o,a as n,b as s,d as e,e as t}from"./app-144f2dab.js";const c="/sd-fe-eng/assets/token-13f0a120.png",r={},u=n("h1",{id:"前端工程化规范-一",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端工程化规范-一","aria-hidden":"true"},"#"),s(" 前端工程化规范 一")],-1),d=n("h2",{id:"项目初始化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#项目初始化","aria-hidden":"true"},"#"),s(" 项目初始化")],-1),v=n("p",null,"我们使用的lerna+pnpm来管理多包工具",-1),k={href:"https://www.lernajs.cn/",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>lerna init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行后会生成一些文件夹，文件暂时先不用管，后续使用会再详细说明 根目录创建文件 <code>pnpm-workspace.yaml</code>, 输入一下内容</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">packages</span><span class="token operator">:</span>
  <span class="token operator">-</span> <span class="token string">&#39;packages/*&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化完成 接下来我们开始 <code>vuepress</code> 文档的初始化</p><h2 id="vuepress-初始化" tabindex="-1"><a class="header-anchor" href="#vuepress-初始化" aria-hidden="true">#</a> vuePress 初始化</h2>`,5),b={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>也可以参考以下步骤 首先使用 pnpm 安装相关插件</p><ul><li>安装插件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>pnpm add <span class="token operator">-</span><span class="token constant">D</span> vuepress@next @vuepress<span class="token operator">/</span>client@next vue <span class="token operator">-</span>w
<span class="token comment">// -w 意思是在根目录安装 因为我们是一个lerna 管理的多包项目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在package.json中添加脚本。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>将默认的临时目录和缓存目录添加到 .gitignore 文件中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    echo <span class="token string">&#39;node_modules&#39;</span> <span class="token operator">&gt;&gt;</span> <span class="token punctuation">.</span>gitignore
    echo <span class="token string">&#39;.temp&#39;</span> <span class="token operator">&gt;&gt;</span> <span class="token punctuation">.</span>gitignore
    echo <span class="token string">&#39;.cache&#39;</span> <span class="token operator">&gt;&gt;</span> <span class="token punctuation">.</span>gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建文件夹 docs 然后在 docs文件夹中创建文件夹 <code>.vuepress</code>,再创建一个 <code>index.md</code> 文件 输入以下内容 测试使用</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># heroImage: img/logo.png</span>
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Hero 标题
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> Hero 副标题
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> 快速上手 →
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /zh/guide/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue驱动
  <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
<span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
  <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2018<span class="token punctuation">-</span>present Evan You</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>.vuepress</code>文件夹中创建public文件夹用来放置一些公共资源例如 logo, 然后再在<code>.vuepress</code>文件夹中创建 <code>config.js</code>配置文件，以下内容作为参考。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;前端规范工程化&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;这是我的第一个 VuePress 站点&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/sd-fe-eng/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/img/logo.png&#39;</span><span class="token punctuation">,</span><span class="token comment">// 这个就是指public中的文件路径</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，文档已经初始化完成，可以执行 <code>npm run docs:dev</code> 启动文档。查看效果。</p><p>下一步我们要在github上能够自动化部署项目。</p><h2 id="action自动化部署" tabindex="-1"><a class="header-anchor" href="#action自动化部署" aria-hidden="true">#</a> action自动化部署</h2><ul><li><p>Workflows（工作流程） 持续集成的运行过程称为一次工作流程，也就是我们项目开始自动化部署到部署结束的这一段过程可以称为工作流程，一个工作流程中由一个或者多个任务（job）组成。</p></li><li><p>Jobs（任务） 一个工作流程中包含多个任务，简单来说就是一次自动部署的过程中，需要完成一个或多个任务，这些任务里面又包含了多个步骤（step）。</p></li><li><p>Step（步骤） 我们开发项目需要按照一个一个的步骤来进行，自动部署也一样，在一个任务中，步骤需要一步步的完成。</p></li><li><p>Action（动作） 每个步骤（step）可以包含一个或多个动作，比如我们在一个步骤中执行打包命令这个Action。</p></li></ul><p>上面4点是GitHub Actions中几个大的概念，也很好理解，大家可以把它想象为一条完整的流水线，流水线包含的几个操作要点如下：</p><p>workflow-&gt;job-&gt;step-&gt;action</p><p>github会自动识别<code>.github</code>文件下的 工作流</p><p>创建一个 <code>.github/workflows/main.yml</code> 文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 名字可以随意设置</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> 构建部署
<span class="token key atrule">on</span><span class="token punctuation">:</span>
   <span class="token key atrule">push</span><span class="token punctuation">:</span>
       <span class="token key atrule">branches</span><span class="token punctuation">:</span>
           <span class="token punctuation">-</span> master <span class="token comment"># 拉取代码的分支</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
   <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>
       <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest <span class="token comment"># 构建部署的环境</span>
       <span class="token key atrule">steps</span><span class="token punctuation">:</span>
           <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout  ️
             <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2.3.1

           <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> lock npm version <span class="token comment"># 锁定版本</span>
             <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
             <span class="token key atrule">with</span><span class="token punctuation">:</span>
                 <span class="token key atrule">node-version</span><span class="token punctuation">:</span> 17.0.0 <span class="token comment"># 指定node版本</span>

           <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build <span class="token comment"># 安装并打包</span>
             <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
                 npm i -g pnpm
                 pnpm run init
                 pnpm run docs:build</span>
             <span class="token key atrule">env</span><span class="token punctuation">:</span>
                 <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token string">&#39;--max_old_space_size=4096&#39;</span> <span class="token comment"># 设置nodejs运行构建环境内存</span>

           <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy <span class="token comment"># 部署</span>
             <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@4.1.3
             <span class="token key atrule">with</span><span class="token punctuation">:</span>
                 <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
                 <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> docs/.vuepress/dist
                 <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 获取token 后面会说怎么设置token</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还需要在项目上设置 <code>secrets.ACCESS_TOKEN</code>,首先需要先获取token 点击github 个人头像 的 <code>Settings</code> 点击左侧最底下的 <code>Developer Settings</code> 然后点击 <code>Personal access tokens</code>, 选择 tokens (classic) 然后生成token 复制这个token，如果不清楚 可以网上搜索一些图文教程很清晰 这里我就不放图片了。</p><p>再次找到需要token的项目 点击项目的 Settings, <img src="`+c+`" alt="token"> 新增即可</p><p>然后设置完毕 可以提交代码， github action 会自动构建并部署到 github pages 了。</p><p>当然 可能会有一些问题 具体要查看 Actions 构建的日志报错</p><p>然后在 项目上的 <code>Settings</code> 找到 <code>Pages</code> 设置分支以及目录 再设置访问的域名即可。</p><p>至此已经可以访问静态网站了，接下来开始 正式的规范开发。</p><h2 id="deploy-sh" tabindex="-1"><a class="header-anchor" href="#deploy-sh" aria-hidden="true">#</a> deploy.sh</h2><p>除了上面的自动化部署 我们也可以用下面的脚本进行构建部署 提交</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>


<span class="token assign-left variable">push_addr</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> remote get-url <span class="token parameter variable">--push</span> origin<span class="token variable">\`</span></span>
<span class="token assign-left variable">commit_info</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> describe <span class="token parameter variable">--all</span> <span class="token parameter variable">--always</span> <span class="token parameter variable">--long</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">dist_path</span><span class="token operator">=</span>docs/.vuepress/dist
<span class="token assign-left variable">push_branch</span><span class="token operator">=</span>gh-pages

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$dist_path</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;deploy, <span class="token variable">$commit_info</span>&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> <span class="token variable">$push_addr</span> HEAD:<span class="token variable">$push_branch</span>

<span class="token builtin class-name">cd</span> -
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">$dist_path</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打包发布完之后可以自动提交到 github pages 了。</p>`,28);function h(y,f){const a=i("ExternalLinkIcon");return l(),o("div",null,[u,d,v,n("p",null,[s("创建文件夹，例如sd-fe-eng，然后使用 "),n("a",k,[s("lerna"),e(a)]),s(" 来初始化项目, 初始化命令如下")]),m,n("p",null,[s("可以参考官网 "),n("a",b,[s("VuePress"),e(a)])]),g])}const x=p(r,[["render",h],["__file","init.html.vue"]]);export{x as default};
