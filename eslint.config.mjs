// @ts-check
// @ts-ignore
import promise from 'eslint-plugin-promise';
// @ts-ignore
import pluginVue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';

const INLINE_ELEMENTS = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'canvas',
  'cite',
  'code',
  'data',
  'del',
  'dfn',
  'em',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'noscript',
  'object',
  'output',
  'picture',
  'q',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'time',
  'u',
  'var',
  'video'
];

export default withNuxt({
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: {
    promise,
  },
  rules: {
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-shadow': [
      'error'
    ],
    '@typescript-eslint/no-unused-vars': [
      'error'
    ],
    '@typescript-eslint/no-use-before-define': [
      'error'
    ],
    'array-bracket-spacing': [
      2,
      'always',
      {
        'arraysInArrays': false,
        'objectsInArrays': false,
        'singleValue': true
      }
    ],
    'arrow-body-style': [
      2,
      'always'
    ],
    'arrow-parens': [
      2,
      'always'
    ],
    'func-names': [
      2,
      'as-needed'
    ],
    'function-paren-newline': [
      2,
      'consistent'
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        'devDependencies': true
      }
    ],
    'import/order': [
      'error',
      {
        groups: [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type' ],
      },
    ],
    'import/prefer-default-export': 'off',
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'jsx-a11y/click-events-have-key-events': [
      0
    ],
    'jsx-a11y/label-has-for': [
      0
    ],
    'jsx-quotes': [
      2,
      'prefer-single'
    ],
    'keyword-spacing': [
      2,
      {
        'after': true,
        'before': true
      }
    ],
    'linebreak-style': [
      2,
      'unix'
    ],
    'max-len': [
      2,
      120,
      {
        'ignoreUrls': true,
        'ignoreComments': false,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ],
    'new-cap': [
      0
    ],
    'newline-per-chained-call': [
      2,
      {
        'ignoreChainWithDepth': 10
      }
    ],
    'no-async-promise-executor': 'error',
    'no-console': 'production' === process.env.NODE_ENV ? 'error' : 'off',
    'no-debugger': 'production' === process.env.NODE_ENV ? 'error' : 'off',
    'no-multi-spaces': [
      2
    ],
    'no-multiple-empty-lines': [
      2,
      {
        'max': 1
      }
    ],
    'no-nested-ternary': [
      0
    ],
    'no-param-reassign': [
      2,
      {
        'props': false
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        'patterns': []
      }
    ],
    'no-shadow': 'off',
    'no-trailing-spaces': [
      2
    ],
    'no-underscore-dangle': [
      0
    ],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-var': 'error',
    'object-curly-newline': [
      'error',
      {
        'consistent': true
      }
    ],
    'object-curly-spacing': [
      2,
      'always'
    ],
    'promise/no-return-in-finally': 2,
    'promise/no-return-wrap': [
      2
    ],
    'promise/param-names': [
      2
    ],
    'quotes': [
      2,
      'single'
    ],
    'semi': [
      2,
      'always'
    ],
    'simple-import-sort/imports': 'off',
    'space-before-blocks': [
      2,
      'always'
    ],
    'space-before-function-paren': [
      2,
      {
        'anonymous': 'always',
        'named': 'never'
      }
    ],
    'template-curly-spacing': [
      2,
      'always'
    ],
    'vue/attribute-hyphenation': [ 'error', 'always', {
      'ignore': []
    }],
    'vue/attributes-order': [ 'error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        [ 'UNIQUE', 'SLOT' ],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      'alphabetical': true
    }],
    'vue/block-lang': [ 'error',
      {
        'script': {
          'lang': 'ts'
        }
      }
    ],
    'vue/block-order': [ 'error', {
      'order': [ 'template', 'script', 'style' ]
    }],
    'vue/block-tag-newline': [ 'error', {
      'singleline': 'always',
      'multiline': 'always',
      'maxEmptyLines': 1,
      'blocks': {
        'template': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 1,
        },
        'script': {
          'singleline': 'always',
          'multiline': 'always',
          'maxEmptyLines': 1,
        },
      }
    }],
    'vue/component-api-style': [ 'error',
      [ 'script-setup', 'composition' ] // "script-setup", "composition", "composition-vue2", or "options"
    ],
    'vue/component-definition-name-casing': [ 'error', 'PascalCase' ],
    'vue/component-name-in-template-casing': [ 'error', 'PascalCase', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'vue/component-options-name-casing': [ 'error', 'PascalCase' ],
    'vue/custom-event-name-casing': [ 'error',
      'camelCase',
      {
        'ignores': []
      }
    ],
    'vue/define-emits-declaration': [ 'error', 'type-based' ],
    'vue/define-macros-order': [ 'error', {
      'order': [ 'defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots' ],
      'defineExposeLast': true
    }],
    'vue/define-props-declaration': [ 'error', 'type-based' ],
    'vue/enforce-style-attribute': [
      'error',
      { 'allow': [ 'module', 'plain' ] }
    ],
    'vue/first-attribute-linebreak': [ 'error', {
      'singleline': 'ignore',
      'multiline': 'below'
    }],
    'vue/html-button-has-type': [ 'error', {
      'button': true,
      'submit': true,
      'reset': true
    }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        'singleline': 'never',
        'multiline': 'always',
        'selfClosingTag': {
          'singleline': 'never',
          'multiline': 'always'
        }
      }
    ],
    'vue/html-closing-bracket-spacing': [ 'error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-comment-content-newline': [ 'error',
      {
        'singleline': 'never',
        'multiline': 'always',
      },
      {
        'exceptions': []
      }
    ],
    'vue/html-comment-content-spacing': [ 'error',
      'always',
      {
        'exceptions': []
      }
    ],
    'vue/html-comment-indent': [ 'error', 2 ],
    'vue/html-indent': [ 'error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-quotes': [ 'error', 'double', { 'avoidEscape': true }],
    'vue/html-self-closing': [ 'error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': [ 'error', {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false
    }],
    'vue/mustache-interpolation-spacing': [ 'error', 'always' ],
    'vue/next-tick-style': [ 'error', 'promise' ],
    'vue/no-boolean-default': [ 'error', 'default-false' ],
    'vue/no-deprecated-model-definition': [ 'error', {
      'allowVue3Compat': true
    }],
    'vue/no-dupe-keys': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-lone-template': [ 'error', {
      'ignoreAccessible': false
    }],
    'vue/no-multi-spaces': [ 'error', {
      'ignoreProperties': false
    }],
    'vue/no-multiple-template-root': 'off',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-namespace': false
      }
    ],
    'vue/no-required-prop-with-default': [ 'error', {
      'autofix': true,
    }],
    'vue/no-reserved-component-names': 'error',
    'vue/no-setup-props-destructure': 'off',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': [ 'error' ],
    'vue/no-static-inline-styles': [ 'error', {
      'allowBinding': false
    }],
    'vue/no-template-shadow': [ 'error', { 'allow': [] }],
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-use-v-if-with-v-for': [ 'error', {
      'allowUsingIterationVar': false
    }],
    'vue/order-in-components': [ 'error', {
      'order': [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        [ 'delimiters', 'comments' ],
        [ 'components', 'directives', 'filters' ],
        'extends',
        'mixins',
        [ 'provide', 'inject' ],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        [ 'props', 'propsData' ],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        [ 'template', 'render' ],
        'renderError'
      ]
    }],
    'vue/prop-name-casing': [ 'error', 'camelCase' ],
    'vue/require-default-prop': 'error',
    'vue/require-explicit-emits': [ 'error', {
      'allowProps': false
    }],
    'vue/script-setup-uses-vars': 'error',
    'vue/singleline-html-element-content-newline': [ 'error', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': [ 'pre', 'textarea', ...INLINE_ELEMENTS ],
      'externalIgnores': []
    }],
    'vue/this-in-template': [ 'error', 'never' ],
    'vue/v-bind-style': [ 'error', 'shorthand', {
      'sameNameShorthand': 'ignore'
    }],
    'vue/v-on-event-hyphenation': [ 'error', 'always', {
      'autofix': false,
      'ignore': []
    }],
    'vue/v-on-style': [ 'error', 'shorthand' ],
    'vue/v-slot-style': [ 'error', {
      'atComponent': 'v-slot',
      'default': 'shorthand',
      'named': 'shorthand',
    }],
    'yoda': [
      2,
      'always'
    ]
  }
}).prepend(
  ...pluginVue.configs['flat/strongly-recommended'],
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/base'],
  ...pluginVue.configs['flat/recommended']
);
