import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
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
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "Education" },
          { title: "Fitness", value: "Fitness" },
          { title: "Real Estate", value: "Real Estate" },
          { title: "Healthcare", value: "Healthcare" },
          { title: "Retail", value: "Retail" },
          { title: "Corporate", value: "Corporate" },
          { title: "Interior Design", value: "Interior Design" },
        ],
      },
    }),
    defineField({
      name: "result",
      title: "Result Value",
      type: "string",
      description: "e.g. 3x, 150%",
    }),
    defineField({
      name: "metric",
      title: "Metric Label",
      type: "string",
      description: "e.g. Lead Generation, Membership Growth",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroMetrics",
      title: "Hero Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
      description: "Extra metrics shown in the hero section (e.g. 6 months, 50% less time).",
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "blockContent",
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "blockContent",
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "blockContent",
    }),
    defineField({
      name: "approachSteps",
      title: "Approach Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Step Title", type: "string" },
            { name: "description", title: "Step Description", type: "text", rows: 2 },
          ],
        },
      ],
      description: "Numbered steps shown in the Our Approach section.",
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
          ],
        },
      ],
      description: "Key results shown as stat cards.",
    }),
    defineField({
      name: "testimonial",
      title: "Client Testimonial",
      type: "object",
      fields: [
        { name: "quote", title: "Quote", type: "text", rows: 3 },
        { name: "name", title: "Client Name", type: "string" },
        { name: "role", title: "Role", type: "string" },
        { name: "company", title: "Company", type: "string" },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ogImage",
      title: "OG / Social Share Image",
      type: "image",
      description: "Used for social share previews (Facebook, Twitter, WhatsApp). Recommended: 1200×630px.",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client",
      media: "mainImage",
    },
  },
});
