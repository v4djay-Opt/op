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
  "image": mainImage.asset->url,
  "ogImage": ogImage.asset->url,
  author,
  authorRole,
  authorBio,
  authorLinkedIn,
  authorTwitter
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

export const caseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  client,
  industry,
  result,
  metric,
  description,
  publishedAt,
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
  publishedAt,
  heroMetrics,
  challenge,
  approach,
  outcome,
  approachSteps,
  results,
  testimonial,
  "image": mainImage.asset->url,
  "ogImage": ogImage.asset->url
}`;

export const caseStudySlugsQuery = `*[_type == "caseStudy" && defined(slug.current)].slug.current`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  role,
  quote,
  rating
}`;
