import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { table } from '@sanity/table'

export default defineConfig({
  name: 'default',
  title: 'my-blog-studio',

  projectId: '1lh5yxd7',
  dataset: 'production',

  plugins: [structureTool(), visionTool() , table()],

  schema: {
    types: schemaTypes,
  },
})
