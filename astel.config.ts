import { defineAstelConfig } from '@astel/cli'

export default defineAstelConfig({
  ignoreDirs: ['.DS_Store'],
  prefix: '',
  declarationDir: 'dist/types',
  build: {
    entry: 'packages/index.ts',
    emptyOutDir: true,
    library: [
      { format: 'esm', outputDir: 'dist/es', summary: true, minify: true },
      { format: 'umd', outputDir: 'dist/lib', summary: true, minify: true },
    ],
  },
})
