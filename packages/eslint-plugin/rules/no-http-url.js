const RULE_NAME = 'no-http-url';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    fixable: null,
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
    },
  },
  create(context) {
    return {
        // Literal 抽像语法树中的节点类型
      Literal: function handleRequires(node) {
        if (node.value && typeof node.value === 'string' && node.value.indexOf('http:') === 0) {
            // 抛出错误
            context.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
          });
        }
      },
    };
  },
};
