import nx from '@nx/eslint-plugin';

import baseConfig from '../../eslint.config.ts';

const eslintConfig = [
  // Next.js 관련 규칙 제거 (e2e 프로젝트는 Next.js가 아님)
  // ...compat.extends('next', 'next/core-web-vitals'),
  ...baseConfig,
  ...nx.configs['flat/react-typescript'],
  // e2e 프로젝트에 특화된 설정
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // Next.js 관련 규칙 비활성화
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
];

export default eslintConfig;
