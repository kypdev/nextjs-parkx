// import { NextRequest, NextResponse } from 'next/server'
// import acceptLanguage from 'accept-language'
// import { fallbackLng, languages, cookieName } from './app/i18n/settings'
// import { getValidSubdomain } from '@/lib/getValidSubdomain'

// acceptLanguage.languages(languages)

// export const config = {
//   // matcher: '/:lng*'
//   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
// }

// export function middleware(req:NextRequest) {
//     // Clone the URL
//       const url = req.nextUrl.clone();
//     if (req.nextUrl.pathname.indexOf('images') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
//     let lng
//     if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
//     if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
//     if (!lng) lng = fallbackLng

//     // Redirect if lng in path is not supported
//     if (
//       !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
//       !req.nextUrl.pathname.startsWith('/_next')
//     ) {
//       console.log(`>>> Redirecting: ${req.nextUrl.pathname} to /${lng}${req.nextUrl.pathname}`);
//       const host = req.headers.get('host');
//       const subdomain = getValidSubdomain(host);
//       console.log(`>>> Subdomain: ${subdomain}`);
//       if (subdomain) {

//         // Subdomain available, rewriting
//         console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
//         url.pathname = `/${subdomain}${url.pathname}`;
//         return NextResponse.redirect(new URL(`/${subdomain}/${lng}${req.nextUrl.pathname}`, req.url))
//       }
//       return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
//     }

//   if (req.headers.has('referer')) {
//     const refererHeaderValue = req.headers.get('referer');
//     if (refererHeaderValue) {
//       const refererUrl = new URL(refererHeaderValue);
//       const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
//       const response = NextResponse.next();
//       if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
//       return response;
//     }
//   }



//   return NextResponse.rewrite(url);

// }
