import {
  defineCollections,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';



/**
 * Pages collection disabled - using React components instead
 */
// export const pages = defineCollections({
//   type: 'doc',
//   dir: 'content/pages',
//   schema: frontmatterSchema.extend({
//     date: z.string().date(),
//     published: z.boolean().default(true),
//   }),
// });


