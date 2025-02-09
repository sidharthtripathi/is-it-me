import { NextRequest, NextResponse } from 'next/server';

import { AccessTokenType } from './schema/account';
import { verifyJWT } from './lib/jwt';

export async function middleware(request: NextRequest) {
    request.headers.delete("username")
    const requestHeaders = new Headers(request.headers);
    const token = request.cookies.get('access-token');

  if (!token) return NextResponse.next();
  
  try {
    const {username} = await verifyJWT(
      token.value,
      (process.env.JWT_SECRET as string)
    ) as AccessTokenType

    requestHeaders.set('username', username);
  } catch (error) {
    console.log(error);
  } finally {
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
  }
}