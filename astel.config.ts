import { defineAstelConfig } from '@astel/cli'

export default defineAstelConfig({
  ignoreDirs: ['.DS_Store'],
  build: {
    entry: 'packages/index.ts',
    prefix: '',
    emptyOutDir: true,
    declaration: true,
    library: [
      { name: 'astel', format: 'esm', outputDir: 'dist/es', bundle: false, summary: true },
      { name: 'astel', format: 'umd', outputDir: 'dist/lib', bundle: false, summary: true },
    ],
  },
})
