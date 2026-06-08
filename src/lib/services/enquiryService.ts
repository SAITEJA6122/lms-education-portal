import { supabase } from '@/lib/supabase/client'

interface EnquiryData {
  Parent_name: string
  Student_name?: string | null
  Email: string
  Phone_no?: string | null
  Grade?: string | null
  subject?: string  // Add subject field if exists, or use a default
  Message: string
}

export async function submitEnquiry(data: EnquiryData) {
  try {
    const { data: enquiry, error } = await supabase
      .from('Enquiries')
      .insert({
        Parent_name: data.Parent_name,
        Student_name: data.Student_name || null,
        Email: data.Email,
        Phone_no: data.Phone_no || null,
        Grade: data.Grade || null,
        Message: data.Message,
        // If subject column doesn't exist, remove this line
        // user_id: null  // Add if needed
      })
      .select()
      .single()
    
    if (error) {
      console.error('Supabase error:', error)
      return { success: false, id: null, error: error.message }
    }
    
    return { success: true, id: (enquiry as any)?.enquiry_id, error: null }
  } catch (error) {
    console.error('Error submitting enquiry:', error)
    return { success: false, id: null, error: 'Failed to submit enquiry' }
  }
}