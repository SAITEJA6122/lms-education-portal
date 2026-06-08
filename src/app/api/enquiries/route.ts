import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('Received payload:', body)
    
    // Check required fields - using your exact column names
    if (!body.Parent_name || !body.Email || !body.Message) {
      console.log('Missing fields:', {
        Parent_name: !body.Parent_name,
        Email: !body.Email,
        Message: !body.Message
      })
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields: Parent_name, Email, and Message are required' 
        },
        { status: 400 }
      )
    }
    
    // Prepare data for Supabase - match your exact column names
    const enquiryData = {
      Parent_name: body.Parent_name,
      Student_name: body.Student_name || null,
      Email: body.Email,
      Phone_no: body.Phone_no || null,
      Grade: body.Grade || null,
      Message: body.Message,
      created_at: new Date().toISOString()
    }
    
    console.log('Inserting data:', enquiryData)
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('Enquiries')
      .insert([enquiryData])
      .select()
    
    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          details: error
        },
        { status: 400 }
      )
    }
    
    console.log('Insert successful:', data)
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry submitted successfully!',
        data: data 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}