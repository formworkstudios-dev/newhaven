import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug / ID",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Flyer / Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "date",
      title: "Date (display text)",
      type: "string",
      description: 'e.g. "Every Sunday" or "Saturday, August 15, 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: 'e.g. "10:00 AM" or "6:30 PM – 8:00 PM"',
    }),
    defineField({
      name: "firstOccurrence",
      title: "First Occurrence (YYYY-MM-DD)",
      type: "date",
      description: "Used for sorting. Required.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "cost",
      title: "Cost",
      type: "string",
      description: 'Leave blank if free. e.g. "$75"',
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Featured", value: "featured" },
          { title: "Ongoing", value: "ongoing" },
          { title: "Weekly", value: "weekly" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Show on Events page (Featured)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "homepage",
      title: "Show on Home page",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "image" },
  },
});
