import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  try {
    // Remove order by created_at since column doesn't exist
    const { data, error } = await supabase
      .from('Testimonials')
      .select('*')
      // Remove this line if created_at doesn't exist:
      // .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return NextResponse.json(
      { success: true, data: data || [] },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, data: [], error: 'Failed to fetch testimonials' },
      { status: 200 }
    )
  }
}