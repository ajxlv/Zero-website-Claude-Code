import { defineConfig } from 'astro/config';

// Set `site` to the production domain once it is decided (open item).
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
