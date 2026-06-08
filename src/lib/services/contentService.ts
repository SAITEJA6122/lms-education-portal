import { supabase } from '@/lib/supabase/client'

export async function getHomeContent() {
  try {
    const { data, error } = await supabase
      .from('Content')
      .select('*')
      .single()
    
    if (error) throw error
    
    const content = data as any
    
    return {
      success: true,
      data: {
        principal_message: content?.Principal_message || '',
        principal_image_url: content?.Principal_image || '',
        welcome_text: content?.Homepage_content || '',
      },
      error: null
    }
  } catch (error) {
    console.error('Error fetching home content:', error)
    return { success: false, data: null, error: 'Failed to load content' }
  }
}