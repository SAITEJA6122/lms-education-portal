import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  try {
    // If you have a Highlights or Facilities table
    const { data, error } = await supabase
      .from('Highlights') // Change to your actual table name
      .select('*')
      .order('order', { ascending: true })
    
    if (error) throw error
    
    return NextResponse.json(
      { success: true, data: data || [] },
      { status: 200 }
    )
  } catch (error) {
    // Return empty array - component will use default highlights
    return NextResponse.json(
      { success: false, data: [], error: 'Failed to fetch highlights' },
      { status: 200 } // Return 200 so component uses defaults
    )
  }
}