import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src', // Use src as the root directory
  plugins: [react()],
  build: {
<<<<<<< HEAD
    outDir: 'build', // change output directory to 'build'
  },
})
=======
    outDir: '../dist', // Output to a top-level dist directory
    emptyOutDir: true, // Empty the output directory before building
  },
  publicDir: '../public', // Ensure the public directory is served
});
>>>>>>> c2e9e8aa48f1676b0b967bdc64ccc14582dd3876
