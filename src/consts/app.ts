import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'NouweBridge';
export const APP_DESCRIPTION = 'NouweBridge is a platform for cross chain bridging.';
export const APP_URL = 'nouwe-bridge.vercel.app';
export const BRAND_COLOR = Color.primary;
export const BACKGROUND_COLOR = Color.primary;
export const BACKGROUND_IMAGE =
  'radial-gradient(circle at 50% -50%, rgba(0, 0, 0, 0), rgba(75, 0, 130, 0.8) 40%, rgb(48, 25, 52) 60%)';
