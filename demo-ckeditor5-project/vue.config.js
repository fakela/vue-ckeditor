const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // Enable transpilation for dependencies
  transpileDependencies: true,
  
  // Configure development server settings
  devServer: {
    // Allow any host header (for development purposes)
    allowedHosts: 'all'
  }
});
