import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  try {
    // If you have a Testimonials table
    const { data, error } = await supabase
      .from('Testimonials') // Change to your actual table name
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return NextResponse.json(
      { success: true, data: data || [] },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, data: [], error: 'Failed to fetch testimonials' },
      { status: 200 } // Return 200 so component uses defaults
    )
  }
}