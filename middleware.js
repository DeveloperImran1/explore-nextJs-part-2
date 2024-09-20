import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = (request) => {
  // Access cookies without passing the request object
  const token = cookies().get('next-auth.session-token') || cookies().get('__Secure-next-auth.session-token');
  console.log(cookies())

  console.log('Session Token:', token);

  // If token does not exist, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  // If token exists, allow the request to proceed
  return NextResponse.next();
};

// Apply middleware to these routes
export const config = {
  matcher: ['posts', 'meals', "/about"], // Specify paths where middleware should run
};

