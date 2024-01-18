import{_ as t,r as i,o,c as l,a as n,b as s,d as a,e as r}from"./app-144f2dab.js";const p={},c=n("h1",{id:"eslint-plugin-sd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint-plugin-sd","aria-hidden":"true"},"#"),s(" eslint-plugin-sd")],-1),d=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),u={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},h=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-sd eslint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="引入插件" tabindex="-1"><a class="header-anchor" href="#引入插件" aria-hidden="true">#</a> 引入插件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint-config-sd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;eslint-plugin-sd/no-http-url&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-presets" tabindex="-1"><a class="header-anchor" href="#使用-presets" aria-hidden="true">#</a> 使用 presets</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;plugin:eslint-plugin-encode/recommended&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的规则" tabindex="-1"><a class="header-anchor" href="#支持的规则" aria-hidden="true">#</a> 支持的规则</h2>`,7),v={href:"https://encode-studio-fe.github.io/fe-spec/plugin/no-broad-semantic-versioning.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"no-broad-semantic-versioning",-1),k={href:"https://encode-studio-fe.github.io/fe-spec/plugin/no-http-url.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"no-http-url",-1);function b(_,f){const e=i("ExternalLinkIcon");return o(),l("div",null,[c,d,n("p",null,[s("除了本包，你需要同时安装 "),n("a",u,[s("ESlint"),a(e)])]),h,n("ul",null,[n("li",null,[n("a",v,[m,a(e)]),s(" 不要指定宽泛的版本范围")]),n("li",null,[n("a",k,[g,a(e)]),s(" 使用 HTTPS 协议头的 URL，而不是 HTTP")])])])}const j=t(p,[["render",b],["__file","eslintplugin.html.vue"]]);export{j as default};