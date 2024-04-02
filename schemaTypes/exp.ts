import {defineField, defineType} from 'sanity'

export const exp = defineType({
  name: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'Company_Name',
      type: 'string',
    }),
    defineField({
      name: 'Job_Title',
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
      name: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'Skills_Used',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'Employment_Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'full_time'},
          {title: 'Part-time', value: 'part_time'},
          {title: 'Contract', value: 'contract'},
          {title: 'Freelance', value: 'freelance'},
        ],
      },
    }),
  ],
})
