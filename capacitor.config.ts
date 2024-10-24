import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.miempresa.mipwa",
  appName: "Mi PWA",
  webDir: "www",
  server: {
    url: "https://develop.d3khydlw98663i.amplifyapp.com/",
    cleartext: true,
  },
};

export default config;
