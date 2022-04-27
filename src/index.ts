import { join } from 'path'
import { cwd } from 'process'
import { exec } from 'shelljs'
import icons from 'lucide-static'
import { mkdirpSync, removeSync, writeFileSync } from 'fs-extra'
import { optimize } from 'svgo'
import { iconTemplate, indexTemplate } from './template'
import { formatComponentName, replaceStyle } from './utils'
import type { OptimizedSvg } from 'svgo'

const buildIcons = async () => {
  const baseDir = join(cwd(), 'packages')

  removeSync(baseDir)
  mkdirpSync(baseDir)

  Object.entries(icons).forEach((icon) => {
    const iconName = icon[0] as string
    const inconSvg = icon[1] as string

    const svg = optimize(inconSvg, {
      plugins: [
        {
          name: 'removeAttrs',
          params: { attrs: '(height|width|color)' },
        },
        'removeXMLNS',
      ],
    }) as OptimizedSvg

    mkdirpSync(join(baseDir, formatComponentName(iconName)))

    writeFileSync(
      join(baseDir, formatComponentName(iconName), `${iconName}.vue`),
      iconTemplate(iconName, replaceStyle(svg.data))
    )

    writeFileSync(
      join(baseDir, iconName, 'index.ts'),
      indexTemplate(iconName, formatComponentName(iconName))
    )
  })

  writeFileSync(join(baseDir, 'index.ts'), '')
  exec(`npx astel collect`)
  exec(`npx astel build`)
  exec(`npx astel types`)
}

buildIcons()
