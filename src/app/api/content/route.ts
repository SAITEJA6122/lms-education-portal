import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('Content')
      .select('*')
      .maybeSingle() // Changed from .single() to .maybeSingle()
    
    if (error) throw error
    
    // Return default values if no data exists
    return NextResponse.json(
      { 
        success: true, 
        data: {
          principal_message: data?.Principal_message || "Welcome to our school. We are committed to excellence in education.",
          principal_image_url: data?.Principal_image || null,
          welcome_text: data?.Homepage_content || "The Best School for Your Child's Future"
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { 
        success: true,  // Return true with defaults instead of error
        data: {
          principal_message: "Welcome to our school. We are committed to excellence in education.",
          principal_image_url: null,
          welcome_text: "The Best School for Your Child's Future"
        }
      },
      { status: 200 }
    )
  }
}