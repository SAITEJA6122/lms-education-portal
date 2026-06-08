import { supabase } from '@/lib/supabase/client'

export async function getTestimonials() {
  try {
    const { data, error } = await supabase
      .from('Testimonials')
      .select('*')
      // Don't order by created_at if column doesn't exist
    
    if (error) throw error
    
    return { success: true, data: data || [], error: null }
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return { success: false, data: [], error: 'Failed to load testimonials' }
  }
}