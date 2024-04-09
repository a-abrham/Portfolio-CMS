import {defineField, defineType} from 'sanity'

export const certification = defineType({
  name: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'issued_by',
      type: 'string',
    }),
    defineField({
      name: 'certification_title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
})
