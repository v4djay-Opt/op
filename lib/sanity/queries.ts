export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "category": categories[0]->title,
  publishedAt,
  estimatedReadTime,
  "image": mainImage.asset->url
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  "category": categories[0]->title,
  publishedAt,
  estimatedReadTime,
  body,
  "image": mainImage.asset->url
}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;

export const relatedPostsQuery = `*[_type == "post" && slug.current != $slug && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  "category": categories[0]->title,
  publishedAt,
  estimatedReadTime
}`;

export const caseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  slug,
  client,
  industry,
  result,
  metric,
  description,
  "image": mainImage.asset->url
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  client,
  industry,
  result,
  metric,
  description,
  challenge,
  approach,
  outcome,
  "image": mainImage.asset->url
}`;

export const caseStudySlugsQuery = `*[_type == "caseStudy" && defined(slug.current)].slug.current`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  role,
  quote,
  rating
}`;
