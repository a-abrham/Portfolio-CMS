import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'Projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'Project_Title',
      type: 'string',
    }),
    defineField({
      name: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'Project_Image',
      type: 'image',
    }),
    defineField({
      name: 'Language',
      type: 'reference',
      to: [{type: 'language'}],
    }),
  ],
})