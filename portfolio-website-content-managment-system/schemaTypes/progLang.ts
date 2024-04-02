import {defineField, defineType} from 'sanity'

export const progLang = defineType({
  name: 'language',
  title: 'Programming Language',
  type: 'document',
  fields: [
    defineField({
      name: 'Language',
      type: 'string',
    }),
  ],
})