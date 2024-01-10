import{_ as l,r as o,o as c,c as i,a as n,b as s,d as e,e as t}from"./app-10c1c556.js";const p="/sd-fe-eng/assets/style-1711bd72.svg",d={},u=n("h1",{id:"css-编码规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css-编码规范","aria-hidden":"true"},"#"),s(" CSS 编码规范")],-1),r=n("code",null,"CSS",-1),v=n("code",null,"Sass",-1),k=n("code",null,"Less",-1),m={href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"},b=t('<h2 id="_1-css" tabindex="-1"><a class="header-anchor" href="#_1-css" aria-hidden="true">#</a> 1. CSS</h2><h3 id="_1-1-编码风格" tabindex="-1"><a class="header-anchor" href="#_1-1-编码风格" aria-hidden="true">#</a> 1.1. 编码风格</h3><p><img src="'+p+'" alt="style"></p><p>详细规则如下：</p>',4),g=n("code",null,"stylelint",-1),h={href:"https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>虽然 <code>CSS</code> 语法中最后一条声明的分号是可选的，但是使用分号可以增加代码的一致性和易用性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=n("code",null,"stylelint",-1),y={href:"https://stylelint.io/user-guide/rules/indentation",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=n("code",null,"{",-1),C=n("code",null,"stylelint",-1),w={href:"https://stylelint.io/user-guide/rules/block-opening-brace-space-before",target:"_blank",rel:"noopener noreferrer"},z=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=n("code",null,":",-1),L=n("code",null,":",-1),M=n("code",null,"stylelint",-1),N={href:"https://stylelint.io/user-guide/rules/declaration-colon-space-after",target:"_blank",rel:"noopener noreferrer"},B={href:"https://stylelint.io/user-guide/rules/declaration-colon-space-before",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E=n("code",null,">",-1),T=n("code",null,"+",-1),U=n("code",null,"~",-1),V=n("code",null,"||",-1),W=n("code",null,"stylelint",-1),$={href:"https://stylelint.io/user-guide/rules/selector-combinator-space-before",target:"_blank",rel:"noopener noreferrer"},G={href:"https://stylelint.io/user-guide/rules/selector-combinator-space-after",target:"_blank",rel:"noopener noreferrer"},H=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector &gt; .children</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.selector + .brother</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector &gt; .children</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.selector + .brother</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),I=n("code",null,",",-1),P=n("code",null,",",-1),R=n("code",null,"stylelint",-1),Y={href:"https://stylelint.io/user-guide/rules/value-list-comma-space-after",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 1px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span> inset 0 1px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 1px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span> inset 0 1px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),A=n("code",null,"stylelint",-1),O={href:"https://stylelint.io/user-guide/rules/comment-whitespace-inside",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token comment">/*comment*/</span>
  <span class="token comment">/*  comment  */</span>
  <span class="token comment">/**
   *comment
   */</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token comment">/* comment */</span>
  <span class="token comment">/**
   * comment
   */</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),J=t(`<li><p>1.1.8.【推荐】声明块的右大括号 <code>}</code> 应单独成行。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),K=n("code",null,"stylelint",-1),Q={href:"https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations",target:"_blank",rel:"noopener noreferrer"},X=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Z=n("code",null,"stylelint",-1),nn={href:"https://stylelint.io/user-guide/rules/max-line-length",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/url",target:"_blank",rel:"noopener noreferrer"},an=n("code",null,"url()",-1),en=n("li",null,"CSS 属性值本身无法换行时，即属性值内无空格或逗号时",-1),tn=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>
  linear<span class="token punctuation">,</span>
  left bottom<span class="token punctuation">,</span>
  left top<span class="token punctuation">,</span>
  <span class="token function">color-stop</span><span class="token punctuation">(</span>0.04<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>88<span class="token punctuation">,</span> 94<span class="token punctuation">,</span> 124<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">color-stop</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>115<span class="token punctuation">,</span> 123<span class="token punctuation">,</span> 162<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* good */</span>
<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>
  linear<span class="token punctuation">,</span>
  left bottom<span class="token punctuation">,</span>
  left top<span class="token punctuation">,</span>
  <span class="token function">color-stop</span><span class="token punctuation">(</span>0.04<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>88<span class="token punctuation">,</span> 94<span class="token punctuation">,</span> 124<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">color-stop</span><span class="token punctuation">(</span>0.52<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>115<span class="token punctuation">,</span> 123<span class="token punctuation">,</span> 162<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),ln=n("code",null,"stylelint",-1),on={href:"https://stylelint.io/user-guide/rules/selector-list-comma-newline-after",target:"_blank",rel:"noopener noreferrer"},cn=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector,
.selector-secondary,
.selector-third</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector,
.selector-secondary,
.selector-third</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),pn=t(`<li><p>1.1.12.【参考】声明块内只有一条语句时，也应该写成多行。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),dn=n("code",null,"stylelint",-1),un={href:"https://stylelint.io/user-guide/rules/comment-empty-line-before",target:"_blank",rel:"noopener noreferrer"},rn=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token comment">/* comment */</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token comment">/* comment */</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token comment">/* comment */</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>

  <span class="token comment">/* comment */</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),vn=n("h3",{id:"_1-2-选择器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-选择器","aria-hidden":"true"},"#"),s(" 1.2. 选择器")],-1),kn=n("code",null,"id",-1),mn=n("code",null,"stylelint",-1),bn={href:"https://stylelint.io/user-guide/rules/selector-max-id",target:"_blank",rel:"noopener noreferrer"},gn=n("code",null,"id",-1),hn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"},_n=n("code",null,"!important",-1),fn=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.normal</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#special</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.normal</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.normal.special</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),yn=n("code",null,"stylelint",-1),xn={href:"https://stylelint.io/user-guide/rules/selector-attribute-quotes",target:"_blank",rel:"noopener noreferrer"},Sn={href:"https://mathiasbynens.be/notes/unquoted-attribute-values#css",target:"_blank",rel:"noopener noreferrer"},Cn=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">input[type=&#39;text&#39;]</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">input[type=&#39;text&#39;]</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),wn=t("<li><p>1.2.3.【参考】使用 <code>CSS</code> 选择器时，应注意以下性能问题：</p><ul><li>使用 <code>class</code> 而不是原生元素标签</li><li>减少在经常出现的组件中使用个别属性选择器（如 <code>[class^=&quot;...&quot;]</code>）</li><li>控制选择器的长度，每个组合选择器内的条目尽量不超过 3 个</li></ul><blockquote><p>只从效率的角度来看，CSS 选择器从高（高效率）到低（低效率）的顺序是：</p><ul><li>ID 选择器， 比如 <code>#header</code></li><li>类选择器，比如 <code>.header</code></li><li>标签（元素）选择器，比如 <code>div</code></li><li>相邻兄弟选择器，比如 <code>h2 + p</code></li><li>子选择器，比如 <code>ul &gt; li</code></li><li>后代选择器，比如 <code>ul a</code></li><li>通配符选择器，比如 <code>*</code></li><li>属性选择器，比如 <code>[class^=&quot;grid-&quot;]</code></li><li>伪类（伪元素）选择器，比如 <code>a:hover</code>、<code>a::before</code></li></ul></blockquote></li>",1),zn=n("h3",{id:"_1-3-属性和属性值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-3-属性和属性值","aria-hidden":"true"},"#"),s(" 1.3. 属性和属性值")],-1),qn=n("code",null,"stylelint",-1),Ln={href:"https://stylelint.io/user-guide/rules/color-hex-length",target:"_blank",rel:"noopener noreferrer"},Mn=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Nn=n("li",null,[n("p",null,[s("1.3.2.【推荐】不要使用 "),n("code",null,"!important"),s(" 重写样式。")])],-1),Bn=n("code",null,"stylelint",-1),Dn={href:"https://stylelint.io/user-guide/rules/color-hex-case",target:"_blank",rel:"noopener noreferrer"},En=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fefefe<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fefefe<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Tn=n("code",null,"stylelint",-1),Un={href:"https://stylelint.io/user-guide/rules/length-zero-no-unit",target:"_blank",rel:"noopener noreferrer"},Vn=t(`<p>在 CSS 中，长度值为 0 时，它的单位是可选的（长度单位包括：em, ex, ch, vw, vh, cm, mm, in, pt, PC, px, rem, vmin, and vmax）。省略长度单位可以使代码更简洁：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Wn=n("code",null,"stylelint",-1),$n={href:"https://stylelint.io/user-guide/rules/number-leading-zero",target:"_blank",rel:"noopener noreferrer"},Gn=t(`<p>在 CSS 中，大于 -1 小于 1 的小数，小数点前的 0 可以省略：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -0.5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -0.5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于是否省略小数点前的 0，业界存在争议：</p><ul><li>省略 0 的好处是：代码更简洁，可以减少一个字符</li><li>不省略的好处是：代码可读性更好、一致性更强</li></ul><p>你可选择自己倾向的风格，在代码中风格统一即可，要么都省略，要么都保留。</p><p>我们推荐保留 0，因为当今很多 CSS 压缩工具会在压缩时帮我们去掉 0，不存在多占用一个字符的问题。保留 0 能增强代码的可读性和一致性。</p>`,6),Hn=t(`<li><p>1.3.6.【参考】属性声明的顺序。</p><p>相关联的属性声明最好写成一组，并按如下顺序排序：</p><ol><li><strong>定位</strong>：如 <code>position</code>、<code>left</code>、<code>right</code>、<code>top</code>、<code>bottom</code>、<code>z-index</code></li><li><strong>盒模型</strong>：如 <code>display</code>、<code>float</code>、<code>width</code>、<code>height</code>、<code>margin</code>、<code>padding</code>、<code>border</code></li><li><strong>文字排版</strong>：如 <code>font</code>、<code>color</code>、<code>line-height</code>、<code>text-align</code></li><li><strong>外观</strong>：如 <code>background</code></li><li><strong>其他属性</strong></li></ol><p>「定位」和「盒模型」放在最前面，是因为它们决定了元素的布局、位置和尺寸。「定位」排在「盒模型」之前，是由于「定位」属性可以让元素脱离正常文本流，从而使「盒模型」属性失效。</p><p>除了「定位」和「盒模型」，其他属性都只在元素内部起作用，不会对前两类属性的结果产生影响，因此放在后面。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.declaration-order</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 定位 */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>

  <span class="token comment">/* 盒模型 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #e5e5e5<span class="token punctuation">;</span>

  <span class="token comment">/* 排版 */</span>
  <span class="token property">font</span><span class="token punctuation">:</span> normal 13px <span class="token string">&#39;Helvetica Neue&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>

  <span class="token comment">/* 外观 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>

  <span class="token comment">/* 其他 */</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多 CSS 属性顺序参考如下列表：</p><table><thead><tr><th>第一组</th><th>第二组</th><th>第三组</th><th>第四组</th><th>第五组</th><th>第六组</th><th>第七组</th></tr></thead><tbody><tr><td>content</td><td>box-sizing</td><td>background*</td><td>font*</td><td>opacity</td><td>unicode-bidi</td><td>transition*</td></tr><tr><td>position</td><td>*width</td><td>color</td><td>src</td><td>visibility</td><td>direction</td><td>transform*</td></tr><tr><td>top</td><td>*height</td><td>box-decoration-break</td><td>line-height</td><td>filter</td><td>columns</td><td>animation*</td></tr><tr><td>right</td><td>margin*</td><td>box-shadow</td><td>letter-spacing</td><td>resize</td><td>column-*</td><td></td></tr><tr><td>bottom</td><td>padding*</td><td>outline*</td><td>quotes</td><td>cursor</td><td>break-*</td><td></td></tr><tr><td>left</td><td>border*</td><td>table-layout</td><td>counter-*</td><td>pointer-events</td><td>page-break-*</td><td></td></tr><tr><td>z-index</td><td></td><td>caption-side</td><td>-ms-writing-mode</td><td>user-select</td><td>orphans</td><td></td></tr><tr><td>display</td><td></td><td>empty-cells</td><td>text-*</td><td></td><td>widows</td><td></td></tr><tr><td>vertical-align</td><td></td><td>list-style*</td><td>white-space</td><td></td><td>*zoom</td><td></td></tr><tr><td>flex*</td><td></td><td></td><td>word-*</td><td></td><td>orientation</td><td></td></tr><tr><td>grid*</td><td></td><td></td><td>overflow-wrap</td><td></td><td>fill</td><td></td></tr><tr><td>*gap</td><td></td><td></td><td>tab-size</td><td></td><td>stroke</td><td></td></tr><tr><td>align-*</td><td></td><td></td><td>hyphens</td><td></td><td></td><td></td></tr><tr><td>justify-*</td><td></td><td></td><td>interpolation-mode</td><td></td><td></td><td></td></tr><tr><td>order</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>float</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>clear</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>object-fit</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>overflow*</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>clip</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></li>`,1),In=n("code",null,"stylelint",-1),Pn={href:"https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides",target:"_blank",rel:"noopener noreferrer"},Rn={href:"https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties",target:"_blank",rel:"noopener noreferrer"},Yn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties",target:"_blank",rel:"noopener noreferrer"},jn=t(`<ul><li><code>font</code></li><li><code>background</code></li><li><code>padding</code></li><li><code>margin</code></li><li><code>border</code></li><li><code>border-radius</code></li></ul><p>使用简写属性时，需要显式地设置所有值。我们应该在真正需要设置所有值或大多数值时才使用简写属性。</p><p>如果只是想设置某一个属性，则不应该使用简写属性：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),An=t(`<h3 id="_1-4-其他" tabindex="-1"><a class="header-anchor" href="#_1-4-其他" aria-hidden="true">#</a> 1.4. 其他</h3><ul><li><p>1.4.1.【推荐】不要使用 <code>CSS</code> 的 <code>@import</code>。</p><p>与 <code>&lt;link&gt;</code> 相比，<code>@import</code> 会在关键渲染路径上增加更多的往返（即关键路径的深度变长），这样会导致浏览器处理 CSS 文件速度变慢，因此我们应该避免使用 <code>@import</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;!-- bad --&gt;
&lt;style&gt;
  <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;more.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
&lt;/style&gt;

&lt;!-- good --&gt;
&lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> href=<span class="token string">&quot;more.css&quot;</span>&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_2-sass-和-less" tabindex="-1"><a class="header-anchor" href="#_2-sass-和-less" aria-hidden="true">#</a> 2. <code>Sass</code> 和 <code>Less</code></h2><blockquote><p>对于 CSS 而言，可以在新项目中尝试放弃使用 <code>Sass</code>、<code>Less</code> 这样的处理器语言，因为：</p><ul><li>这些处理器语言是在一定历史条件下的产物，虽然这些产物在一定程度上提高开发者的开发效率，但不同的处理器语言也同时增加了项目的维护成本（特别是多人协作，多团队协作的时候）。</li><li>更建议使用 <code>PostCSS</code> 处理器，它类似于 <code>CSS</code> 中的 <code>Babel</code>，不但具备 <code>Sass</code> 和 <code>Less</code> 的功能，而且社区繁荣，同时还可以根据自己的需求扩展相关的插件。</li><li>随着 <code>CSS</code> 的一些新特性出现，<code>Sass</code> 和 <code>Less</code> 以往的优势也会慢慢消失。</li></ul></blockquote>`,4),On=t(`<li><p>2.1.【推荐】四则运算符两侧各保留一个空格：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $default-width/2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $default-width / 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.2.【推荐】Mixin 名称和括号 <code>()</code> 间无空格，在拥有多个参数的表达式中， <code>,</code> 之前无空格，<code>,</code> 之后保留一个空格：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* bad */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  .<span class="token function">size</span><span class="token punctuation">(</span>30px<span class="token punctuation">,</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  .clearfix <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* good */</span>
<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  .<span class="token function">size</span><span class="token punctuation">(</span>30px<span class="token punctuation">,</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  .<span class="token function">clearfix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.3.【推荐】按如下顺序组织 Sass / Less 代码：</p><ul><li><code>@import</code> 语句</li><li>全局变量声明</li><li>样式声明</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;common/theme.scss&#39;</span><span class="token punctuation">;</span></span>

$<span class="token property">color-red</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>

<span class="token selector">.selector</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $color-red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.4.【推荐】对于 <code>Sass</code> 和 <code>Less</code>，块内的属性声明按如下顺序排序：</p><ul><li>标准属性声明：除了 <code>mixin</code> 调用、<code>extend</code> 子级选择器的声明，其他属性声明的顺序与「属性声明的顺序」章节的规则一致</li><li>mixin 调用：<code>Sass</code> 的 <code>@include</code> 声明、<code>Less</code> 的 <code>mixin</code> 调用</li><li>嵌套的子级选择器：将嵌套的选择器放到块的末尾，并且在其上方保留一行空行</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">transition</span><span class="token punctuation">(</span>background 0.5s ease<span class="token punctuation">)</span><span class="token punctuation">;</span></span>

  <span class="token selector">.icon</span> <span class="token punctuation">{</span>
    <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,4),Fn=n("p",null,"2.5.【推荐】嵌套选择器的深度不要超过 3 层，否则可能带来一些副作用：",-1),Jn=n("li",null,[s("与 "),n("code",null,"HTML"),s(" 结构强耦合，难以复用")],-1),Kn={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"},Qn=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token selector">.header</span> <span class="token punctuation">{</span>
    <span class="token selector">.user-name</span> <span class="token punctuation">{</span>
      // STOP！不要再嵌套更深选择器
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Xn=t(`<li><p>2.6.【推荐】可以使用双斜杠注释。但需要注意的是，编译为 <code>CSS</code> 后，代码中的双斜杠注释会被删除，而 <code>/* */</code> 会被保留。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">// 单行注释
.selector-a</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 多行注释
 * 多行注释
 */</span>
<span class="token selector">.selector-b</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为 <code>CSS</code> 后，双斜杠注释会被删除：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.selector-a</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 多行注释
 * 多行注释
 */</span>
<span class="token selector">.selector-b</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.7.【推荐】使用 <code>Mixin</code> (<code>@mixin</code> 和 <code>@include</code> 指令) 来让代码遵循 <code>DRY</code> 原则（<code>Don&#39;t Repeat Yourself</code>）、增加抽象性和降低复杂度。</p><p>应避免使用 <code>@extend</code> 指令，它不够直观且具有潜在风险，尤其是在嵌套选择器中。即使继承的是顶层选择器，如果选择器的顺序发生变化，也可能引起问题（比如，如果它们存在于其他文件，而加载顺序发生了变化）。</p><p><code>Extend</code> 相比 <code>Mixin</code> 的好处是，如果无参数的 <code>mixin</code> 被多处使用，编译后会输出多段重复的代码。这时如果使用 <code>@extend</code>，可以避免这个问题。但是 <code>gzip</code> 等压缩工具就可以解决重复代码的问题，因此大多数情况下，你只需要使用 <code>mixin</code> 来让代码符合 DRY 原则。</p></li>`,2),Zn=n("h2",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),ns={href:"http://codeguide.co",target:"_blank",rel:"noopener noreferrer"},ss={href:"https://github.com/airbnb/css",target:"_blank",rel:"noopener noreferrer"},as={href:"https://google.github.io/styleguide/htmlcssguide.html",target:"_blank",rel:"noopener noreferrer"},es={href:"https://github.com/ecomfe/spec/blob/master/css-style-guide.md",target:"_blank",rel:"noopener noreferrer"};function ts(ls,os){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[s("本规范涉及 "),r,s(" 及其预编译语言（"),v,s("、"),k,s("）的编码风格和最佳实践，部分规则可通过 "),n("a",m,[s("stylelint"),e(a)]),s(" 工具落地。")]),b,n("ul",null,[n("li",null,[n("p",null,[s("1.1.1.【强制】所有声明都应该以分号结尾，不能省略。"),g,s(": "),n("a",h,[s("declaration-block-trailing-semicolon"),e(a)])]),_]),n("li",null,[n("p",null,[s("1.1.2.【推荐】使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。"),f,s(": "),n("a",y,[s("indentation"),e(a)])]),x]),n("li",null,[n("p",null,[s("1.1.3.【推荐】选择器和 "),S,s(" 之间保留一个空格。"),C,s(": "),n("a",w,[s("block-opening-brace-space-before"),e(a)])]),z]),n("li",null,[n("p",null,[s("1.1.4.【推荐】属性名和 "),q,s(" 之前无空格，"),L,s(" 和属性值之间保留一个空格。"),M,s(": "),n("a",N,[s("declaration-colon-space-after"),e(a)]),s(),n("a",B,[s("declaration-colon-space-before"),e(a)])]),D]),n("li",null,[n("p",null,[s("1.1.5.【推荐】"),E,s("、"),T,s("、"),U,s(" 、"),V,s(" 等组合器前后各保留一个空格。"),W,s(": "),n("a",$,[s("selector-combinator-space-before"),e(a)]),s(),n("a",G,[s("selector-combinator-space-after"),e(a)])]),H]),n("li",null,[n("p",null,[s("1.1.6.【推荐】在使用 "),I,s(" 分隔的属性值中，"),P,s(" 之后保留一个空格。"),R,s(": "),n("a",Y,[s("value-list-comma-space-after"),e(a)])]),j]),n("li",null,[n("p",null,[s("1.1.7.【推荐】注释内容和注释符之间留有一个空格。"),A,s(": "),n("a",O,[s("comment-whitespace-inside"),e(a)])]),F]),J,n("li",null,[n("p",null,[s("1.1.9.【推荐】属性声明应单独成行。"),K,s(": "),n("a",Q,[s("declaration-block-single-line-max-declarations"),e(a)])]),X]),n("li",null,[n("p",null,[s("1.1.10.【推荐】单行代码最多不要超过 100 个字符。 "),Z,s(": "),n("a",nn,[s("max-line-length"),e(a)]),s(" 除了以下两种情况：")]),n("ul",null,[n("li",null,[s("使用 "),n("a",sn,[an,e(a)]),s(" 函数时")]),en]),tn]),n("li",null,[n("p",null,[s("1.1.11.【参考】使用多个选择器时，每个选择器应该单独成行。"),ln,s(": "),n("a",on,[s("selector-list-comma-newline-after"),e(a)])]),cn]),pn,n("li",null,[n("p",null,[s("1.1.13.【参考】注释行上方需留有一行空行，除非上一行是注释或块的顶部。"),dn,s(": "),n("a",un,[s("comment-empty-line-before"),e(a)])]),rn])]),vn,n("ul",null,[n("li",null,[n("p",null,[s("1.2.1.【参考】不要使用 "),kn,s(" 选择器。"),mn,s(": "),n("a",bn,[s("selector-max-id"),e(a)])]),n("p",null,[gn,s(" 会带来过高的"),n("a",hn,[s("选择器优先级"),e(a)]),s("，使得后续很难进行样式覆盖（继而引发使用 "),_n,s(" 覆盖样式的恶性循环）。")]),fn]),n("li",null,[n("p",null,[s("1.2.2.【参考】属性选择器的值始终用双引号包裹。"),yn,s(": "),n("a",xn,[s("selector-attribute-quotes"),e(a)])]),n("p",null,[s("属性选择器的值的引号只有在"),n("a",Sn,[s("某些情况下"),e(a)]),s("可以省略。")]),Cn]),wn]),zn,n("ul",null,[n("li",null,[n("p",null,[s("1.3.1.【推荐】使用尽可能短的十六进制值。"),qn,s(": "),n("a",Ln,[s("color-hex-length"),e(a)])]),Mn]),Nn,n("li",null,[n("p",null,[s("1.3.3.【推荐】十六进制值统一使用小写字母（小写字母更容易分辨）。"),Bn,s(": "),n("a",Dn,[s("color-hex-case"),e(a)])]),En]),n("li",null,[n("p",null,[s("1.3.4.【推荐】长度值为 0 时，省略掉长度单位。"),Tn,s(": "),n("a",Un,[s("length-zero-no-unit"),e(a)])]),Vn]),n("li",null,[n("p",null,[s("1.3.5.【参考】保留小数点前的 0。"),Wn,s(": "),n("a",$n,[s("number-leading-zero"),e(a)])]),Gn]),Hn,n("li",null,[n("p",null,[s("1.3.7.【参考】适时使用简写属性。"),In,s(": "),n("a",Pn,[s("declaration-block-no-shorthand-property-overrides"),e(a)]),s(),n("a",Rn,[s("declaration-block-no-redundant-longhand-properties"),e(a)])]),n("p",null,[s("常见的"),n("a",Yn,[s("简写属性"),e(a)]),s("包括：")]),jn])]),An,n("ul",null,[On,n("li",null,[Fn,n("ul",null,[Jn,n("li",null,[s("过高的"),n("a",Kn,[s("选择器优先级"),e(a)])])]),Qn]),Xn]),Zn,n("ul",null,[n("li",null,[n("a",ns,[s("Code Guide by @mdo"),e(a)])]),n("li",null,[n("a",ss,[s("Airbnb CSS / Sass Styleguide"),e(a)])]),n("li",null,[n("a",as,[s("Google HTML/CSS Style Guide"),e(a)])]),n("li",null,[n("a",es,[s("spec CSS-style-guide"),e(a)])])])])}const is=l(d,[["render",ts],["__file","css.html.vue"]]);export{is as default};
