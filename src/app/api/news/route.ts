import { NextRequest, NextResponse } from 'next/server'
import { getLatestNews } from '@/lib/services/newsService'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = parseInt(searchParams.get('limit') || '10')
    
    const result = await getLatestNews(limit)
    
    return NextResponse.json(
      { success: result.success, data: result.data },
      { status: result.success ? 200 : 500 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}