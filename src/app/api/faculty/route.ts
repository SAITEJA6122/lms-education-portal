import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('Faculty')
      .select('*')
      .order('order', { ascending: true })
    
    if (error) throw error
    
    return NextResponse.json(
      { success: true, data: data || [] },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, data: [], error: 'Failed to fetch faculty' },
      { status: 200 }
    )
  }
}