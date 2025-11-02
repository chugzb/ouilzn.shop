import { NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST() {
  return NextResponse.json(
    { error: 'File uploads are disabled in this demo build.' },
    { status: 503 }
  );
}
