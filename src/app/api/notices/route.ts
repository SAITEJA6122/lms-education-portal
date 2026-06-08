import { NextResponse } from 'next/server'
import { getNotices } from '@/lib/services/noticesService'

export async function GET() {
  try {
    const result = await getNotices()
    
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