import { NextResponse } from 'next/server';

export const maxDuration = 60;

export async function GET() {
  return NextResponse.json(
    { error: 'Authentication API is disabled in this demo build.' },
    { status: 503 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: 'Authentication API is disabled in this demo build.' },
    { status: 503 }
  );
}
