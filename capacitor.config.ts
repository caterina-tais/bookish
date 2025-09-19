const config = {
  appId: "com.tuempresa.tuapp",
  appName: "MiApp",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    Auth0: {
      domain: "dev-kaiy6ln85ojjaylg.us.auth0.com",
      clientId: "lTwxecdkiMtphFsSArROb3qLzqiZzYUF",
      scheme: "myapp", // 👈 este es el custom scheme
    },
  },
};

export default config;

