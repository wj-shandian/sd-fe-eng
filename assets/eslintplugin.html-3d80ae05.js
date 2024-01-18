import{_ as e,r as o,o as c,c as i,a as n,b as s,d as p,e as t}from"./app-144f2dab.js";const l={},r=n("h1",{id:"eslint-插件开发",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint-插件开发","aria-hidden":"true"},"#"),s(" eslint 插件开发")],-1),u={href:"https://eslint.org/docs/latest/extend/plugins",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="首先在项目-sd-fe-eng-初始化文件" tabindex="-1"><a class="header-anchor" href="#首先在项目-sd-fe-eng-初始化文件" aria-hidden="true">#</a> 首先在项目 sd-fe-eng 初始化文件</h2><p>learn create eslint-plugin</p><p>所有eslint插件都要以 eslint-plugin 为开头</p><p>然后learn会在 packages 生成一个文件夹 里面有一些初始化的文件创建在根目录下创建index.js package.json的main入口 改为index.js</p><p>index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> requireAll <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;require-all&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导出规则</span>
exports<span class="token punctuation">.</span>rules <span class="token operator">=</span> <span class="token function">requireAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">dirname</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;rules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导出默认配置</span>
exports<span class="token punctuation">.</span>configs <span class="token operator">=</span> <span class="token function">requireAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">dirname</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;configs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加json文件的eslint校验</span>
exports<span class="token punctuation">.</span>processors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 识别json文件 </span>
  <span class="token string-property property">&#39;.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// As JS file</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">module.exports = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终导出一个这样的对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;no-broad-semantic-versioning&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;no-broad-semantic-versioning&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">create</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> create<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;no-http-url&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;no-http-url&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">create</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> create<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">recommended</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>Array<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">processors</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">preprocess</span><span class="token operator">:</span> <span class="token punctuation">[</span>Function<span class="token operator">:</span> preprocess<span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="no-http-url" tabindex="-1"><a class="header-anchor" href="#no-http-url" aria-hidden="true">#</a> no-http-url</h2><p>在rules文件夹下创建no-http-url.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">RULE_NAME</span> <span class="token operator">=</span> <span class="token string">&#39;no-http-url&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">RULE_NAME</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;suggestion&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fixable</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 是否修复</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">noHttpUrl</span><span class="token operator">:</span> <span class="token string">&#39;Recommended &quot;{{url}}&quot; switch to HTTPS&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// Literal 抽像语法树中的节点类型</span>
      <span class="token function-variable function">Literal</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">handleRequires</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> node<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;http:&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 抛出错误</span>
            context<span class="token punctuation">.</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            node<span class="token punctuation">,</span>
            <span class="token literal-property property">messageId</span><span class="token operator">:</span> <span class="token string">&#39;noHttpUrl&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">url</span><span class="token operator">:</span> node<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Property</code>和<code>Literal</code>是ESLint中的两种不同的抽象语法树（AST）节点类型，用于表示不同的代码结构。</p><p><code>Property</code>节点用于表示对象字面量中的属性，而<code>Literal</code>节点用于表示字面量值，比如字符串、数字、正则表达式等。它们在语义上有不同的作用和用途。</p><p>一般情况下，当你需要处理对象字面量中的属性时，应使用<code>Property</code>节点。例如，你可能想要检查对象字面量中属性的命名规范、值的类型或数量等。</p><p>而当你需要处理字面量值本身时，应使用<code>Literal</code>节点。例如，你可能想要检查字符串字面量是否符合特定的格式、数字字面量是否在指定的范围内等。</p><p>总之，根据你的具体需求，选择适合的节点类型进行处理。如果你需要处理对象字面量中的属性，使用<code>Property</code>节点；如果你需要处理字面量值本身，使用<code>Literal</code>节点。</p><h2 id="no-broad-semantic-versioning" tabindex="-1"><a class="header-anchor" href="#no-broad-semantic-versioning" aria-hidden="true">#</a> no-broad-semantic-versioning</h2><p>在rules中 创建 no-broad-semantic-versioning 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">RULE_NAME</span> <span class="token operator">=</span> <span class="token string">&#39;no-broad-semantic-versioning&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">RULE_NAME</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;problem&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fixable</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">noBroadSemanticVersioning</span><span class="token operator">:</span>
        <span class="token string">&#39;The &quot;{{dependencyName}}&quot; is not recommended to use &quot;{{versioning}}&quot;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;package.json&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> cwd <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getCwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">Property</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">handleRequires</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          node<span class="token punctuation">.</span>key <span class="token operator">&amp;&amp;</span>
          node<span class="token punctuation">.</span>key<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span>
          <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;dependencies&#39;</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>key<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;devDependencies&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          node<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span>
          node<span class="token punctuation">.</span>value<span class="token punctuation">.</span>properties
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          node<span class="token punctuation">.</span>value<span class="token punctuation">.</span>properties<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">property</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>property<span class="token punctuation">.</span>key <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span>key<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> dependencyName <span class="token operator">=</span> property<span class="token punctuation">.</span>key<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
              <span class="token keyword">const</span> dependencyVersion <span class="token operator">=</span> property<span class="token punctuation">.</span>value<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>
                <span class="token comment">// *</span>
                dependencyVersion<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span>
                <span class="token comment">// x.x</span>
                dependencyVersion<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span>
                <span class="token comment">// &gt; x</span>
                dependencyVersion<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;&gt;&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span>
              <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                context<span class="token punctuation">.</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">loc</span><span class="token operator">:</span> property<span class="token punctuation">.</span>loc<span class="token punctuation">,</span>
                  <span class="token literal-property property">messageId</span><span class="token operator">:</span> <span class="token string">&#39;noBroadSemanticVersioning&#39;</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    dependencyName<span class="token punctuation">,</span>
                    <span class="token literal-property property">versioning</span><span class="token operator">:</span> dependencyVersion<span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rules和configs是必须要导出的配置</p><p>rules很好理解就定义的规则 configs是配置规则的参数</p><p><code>configs</code> 则是必须导出的一个对象，它包含了插件中定义的配置。每个配置都是一个键值对，键是配置的名称，值是一个对象，其中包含了配置的具体内容。配置对象通常包含 <code>rules</code> 属性，用于定义配置下的规则和启用状态。</p><p>配置可以在 ESLint 的配置文件中使用，通过配置文件中的 <code>extends</code> 或 <code>plugins</code> 来引用插件提供的配置。这样可以方便地使用插件提供的默认配置，或者为特定项目定制配置。</p><p>在根目录下创建configs文件夹 添加文件 recommended.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint-plugin-sd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;eslint-plugin-sd/no-http-url&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;eslint-plugin-sd/no-broad-semantic-versioning&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>processors</code> 不是必须导出的，它是可选的导出项。<code>processors</code> 是用于定义插件中支持的自定义处理器（processors）的对象。 <code>Processor</code> 的主要作用是从其他类型的文件中提取 JavaScript 代码，从而让ESLint有处理其他类型文件的能力。 主要原理也是解析<code>.json</code>文件内容内容生成AST，从AST中提取JavaScript内容，然后交给ESLint进行处理。根据规则是否抛出错误。</p><p>例如 no-broad-semantic-versioning 规则需要判断package.json中的版本号是否符合规范，就需要使用processors来处理package.json文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span>processors <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;.json&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">preprocess</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// As JS file</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">module.exports = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调试" tabindex="-1"><a class="header-anchor" href="#调试" aria-hidden="true">#</a> 调试</h2>`,29),k=n("em",null,"test",-1),v={href:"https://github.com/wj-shandian/sd-fe-eng/packages/eslint-plugin/__tests__",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"npm用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm用法","aria-hidden":"true"},"#"),s(" npm用法")],-1),b=n("h3",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),g={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-sd eslint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><h4 id="引入插件" tabindex="-1"><a class="header-anchor" href="#引入插件" aria-hidden="true">#</a> 引入插件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;eslint-config-sd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;eslint-plugin-sd/no-http-url&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-presets" tabindex="-1"><a class="header-anchor" href="#使用-presets" aria-hidden="true">#</a> 使用 presets</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">&#39;plugin:eslint-plugin-encode/recommended&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持的规则" tabindex="-1"><a class="header-anchor" href="#支持的规则" aria-hidden="true">#</a> 支持的规则</h3>`,7),h={href:"https://encode-studio-fe.github.io/fe-spec/plugin/no-broad-semantic-versioning.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"no-broad-semantic-versioning",-1),x={href:"https://encode-studio-fe.github.io/fe-spec/plugin/no-http-url.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"no-http-url",-1),j=n("p",null,"只是举例子 更多的规则 可以根据自己的业务需求开发",-1);function w(E,L){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[n("a",u,[s("eslint官网关于插件开发的部分"),p(a)])]),d,n("p",null,[s("参考代码中的 "),k,s(" 写测试用例 "),n("a",v,[s("地址"),p(a)])]),m,b,n("p",null,[s("除了本包，你需要同时安装 "),n("a",g,[s("ESlint"),p(a)])]),y,n("ul",null,[n("li",null,[n("a",h,[f,p(a)]),s(" 不要指定宽泛的版本范围")]),n("li",null,[n("a",x,[_,p(a)]),s(" 使用 HTTPS 协议头的 URL，而不是 HTTP")])]),j])}const q=e(l,[["render",w],["__file","eslintplugin.html.vue"]]);export{q as default};