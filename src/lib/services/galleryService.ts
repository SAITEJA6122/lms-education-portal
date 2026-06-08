import { supabase } from '@/lib/supabase/client'

export async function getGallery() {
  try {
    const { data, error } = await supabase
      .from('Gallery')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    const items = data as any[] || []
    
    const galleryWithUrls = items.map(item => ({
      id: item.id,
      title: item.Title,
      image_url: item.image_url,
      created_at: item.created_at
    }))
    
    return { success: true, data: galleryWithUrls, error: null }
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return { success: false, data: [], error: 'Failed to load gallery' }
  }
}