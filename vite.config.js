import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Add react-router-dom to the list of external dependencies
const externalDependencies = ['react-router-dom'];

export default defineConfig({
  plugins: [
    // Use the react plugin
    react()
  ],
  // Add build configuration to treat "react-router-dom" as an external dependency
  build: {
    rollupOptions: {
      external: externalDependencies
    }
  }
});


