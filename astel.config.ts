import { defineAstelConfig } from '@astel/cli'

export default defineAstelConfig({
  ignoreDirs: ['.DS_Store'],
  prefix: '',
  declarationDir: 'dist/types',
  build: {
    entry: 'packages/index.ts',
    emptyOutDir: true,
    library: [
      { format: 'esm', outputDir: 'dist/esm', summary: true, minify: true },
      { format: 'umd', outputDir: 'dist/cjs', summary: true, minify: true },
    ],
  },
})
