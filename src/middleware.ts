import { get } from '@vercel/edge-config';
import { geolocation } from '@vercel/functions';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  // only run on the index
  matcher: '/',
};

const BLOCKED_COUNTRIES = [
  'CU', // Cuba
  'KP', // North Korea
  'RU', // Russia
  'AF', // Afghanistan
  'BY', // Belarus
  'BA', // Bosnia & Herzegovina
  'CF', // Central African Republic
  'CD', // Democratic Republic of the Congo
  'GN', // Guinea
  'GW', // Guinea-Bissau
  'HT', // Haiti
  'IQ', // Iraq
  'LB', // Lebanon
  'LY', // Libya
  'ML', // Mali
  'NI', // Nicaragua
  'SO', // Somalia
  'SS', // South Sudan
  'SD', // Sudan
  'VE', // Venezuela
  'YE', // Yemen
  'ZW', // Zimbabwe
  'MM', // Myanmar
  'SY', // Syria
];

const BLOCKED_REGIONS = [
  {
    country: 'UA', // Ukraine
    regions: [
      '43', // Crimea
      '14', // Donetsk
      '09', // Luhansk
    ],
  },
];

export async function middleware(req: NextRequest) {
  // country restriction
  const { country, region } = geolocation(req);

  if (country && BLOCKED_COUNTRIES.includes(country)) {
    return NextResponse.redirect(new URL('/blocked', req.url));
  }

  if (
    country &&
    region &&
    BLOCKED_REGIONS.find((x) => x.country === country)?.regions.includes(region)
  ) {
    return NextResponse.redirect(new URL('/blocked', req.url));
  }

  // maintenance mode
  if (process.env.EDGE_CONFIG) {
    const isInMaintenanceMode = await get<boolean>('isInMaintenanceMode');

    if (isInMaintenanceMode) {
      req.nextUrl.pathname = '/maintenance';

      return NextResponse.rewrite(req.nextUrl);
    }
  }

  // default
  return NextResponse.next();
}
