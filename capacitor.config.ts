import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.uscivicaction.app',
    appName: 'US Civic Action',
    webDir: 'mobile-assets', // Points to static assets for fallback, but main content is from server.url
    server: {
        androidScheme: 'https',
        // REPLACE with your actual deployed URL for production builds
        url: 'https://nh-civic-app.vercel.app',
        cleartext: true, // Allow http for dev
    },
    android: {
        buildOptions: {
            keystorePath: undefined,
            keystoreAlias: undefined,
        }
    }
};

export default config;
