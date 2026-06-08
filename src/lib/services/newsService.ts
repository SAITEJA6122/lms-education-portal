import { supabase } from '@/lib/supabase/client'

export async function getLatestNews(limit: number = 10) {
  try {
    const { data, error } = await supabase
      .from('News')
      .select('*')
      .order('date', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    
    // Transform column names to match frontend expectations
    const transformedData = (data as any[] || []).map(item => ({
      id: item.id,
      title: item.Heading,
      content: item.content,
      date: item.date,
      image_url: null, // News table doesn't have image_url
      is_featured: false,
      created_at: item.created_at
    }))
    
    return { success: true, data: transformedData, error: null }
  } catch (error) {
    console.error('Error fetching news:', error)
    return { success: false, data: [], error: 'Failed to load news' }
  }
}