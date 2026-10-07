# Content Updates

Site-managed blog posts, testimonials, and creator links live in `lib/data.ts`. Add media under `public/images` before referencing it from an entry.

## Add a What's New post

1. Add an item to `whatsNewPosts` with a unique `id` and `slug`.
2. Use an ISO `publishedAt` value (`YYYY-MM-DD`) for automatic newest-first ordering.
3. Set `section` to `guide` for the upper guides grid or `activity` for the Camp Stories section.
4. Add each article paragraph as a separate string in the `body` array.
5. Use a real Windmills camp or activity image and write descriptive alternative text.
6. Check both `/whats-new` and `/whats-new/[slug]`, then run `npm run lint` and `npm run build`.

## Add a testimonial

1. Confirm the exact reviewer name, wording, and date from the original review.
2. Add the review to `testimonials`; include `rating` only when the source explicitly provides one.
3. Add `sourceUrl` when a stable public link to the original review is available.
4. Do not infer dates from relative labels or publish placeholder testimonials.
5. Check the homepage carousel at desktop and mobile widths.

## Add a creator feature

1. Add one entry to `influencerFeatures` per creator.
2. Add each verified link with a `facebook` or `youtube` platform value.
3. Use direct destination URLs instead of social-network redirect links.
4. Check every link from the Gallery before deployment.
