import {defineField, defineType} from 'sanity'

export const edu = defineType({
  name: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'School_Name',
      type: 'string',
    }),
    defineField({
      name: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'Field_of_Study',
      type: 'string',
    }),
    defineField({
      name: 'Start_Date',
      type: 'datetime',
    }),
    defineField({
      name: 'End_Date',
      type: 'datetime',
    }),
    defineField({
      name: 'GPA',
      type: 'number',
    }),
  ],
})
