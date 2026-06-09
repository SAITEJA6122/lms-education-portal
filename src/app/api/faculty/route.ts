import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('Faculty')
      .select('*')
    
    if (error) throw error
    
    // Transform data to match what the frontend expects
    const transformedData = (data || []).map((item: any) => ({
      id: item.id,
      name: item.faculty_name,
      designation: item.designation || 'Faculty Member',
      department: item.department || 'General',
      qualification: item.qualification || 'Qualified Educator',
      experience: item.experience || 'Experienced',
      image: item.photo_url || null,
      order: item.order || 0,
      is_active: item.is_active !== false
    }));
    
    return NextResponse.json(
      { success: true, data: transformedData },
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