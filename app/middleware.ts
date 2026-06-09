// Auth is handled in server.js — this file is intentionally a passthrough.
import { NextResponse } from 'next/server'
export function middleware() {
  return NextResponse.next()
}
