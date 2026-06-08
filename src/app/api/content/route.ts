import { NextResponse } from 'next/server'
import { getHomeContent } from '@/lib/services/contentService'

export async function GET() {
  try {
    const result = await getHomeContent()
    
    return NextResponse.json(
      { success: result.success, data: result.data, error: result.error },
      { status: result.success ? 200 : 404 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}