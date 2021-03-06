import {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'avsv.atlas.app',
    appName: 'Атлас КОП',
    webDir: 'www',
    bundledWebRuntime: false,
    backgroundColor: '#12151E',
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            androidScaleType: "CENTER_CROP",
            splashFullScreen: true,
            splashImmersive: true,
        }
    },
};

export default config;
