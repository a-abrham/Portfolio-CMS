import {defineField, defineType} from 'sanity'

export const blogs = defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'Content',
      type: 'string',
    }),
    defineField({
      name: 'Blog_Image',
      type: 'image',
    }),
    defineField({
      name: 'Publish_Date',
      type: 'datetime',
    }),
    defineField({
      name: 'Tags',
      type: 'string',
    }),
    defineField({
      name: 'Url',
      type: 'url',
    }),
  ],
})
