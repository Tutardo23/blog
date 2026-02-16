import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'BLOG',

  projectId: 'wrubiu1d',
  dataset: 'blog',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
