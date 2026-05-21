import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
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
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "estimatedReadTime",
      title: "Estimated Read Time (minutes)",
      type: "number",
      initialValue: 5,
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "authorRole",
      title: "Author Role",
      type: "string",
    }),
    defineField({
      name: "authorBio",
      title: "Author Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "authorLinkedIn",
      title: "Author LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "authorTwitter",
      title: "Author Twitter URL",
      type: "url",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
