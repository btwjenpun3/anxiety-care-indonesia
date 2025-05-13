module.exports = {
    apps: [
      {
        name: 'Anxiety Care Indonesia',            // Nama app bebas
        script: './.output/server/index.mjs',     // Nuxt 3 build output
        exec_mode: 'cluster',                     // Jalankan dalam mode cluster (multi-core)
        instances: 'max',                         // Maksimalkan semua core CPU
        port: 3000,                               // Optional: biar tau port-nya
        env: {
          NODE_ENV: 'production'                  // Environment
        }
      }
    ]
  }