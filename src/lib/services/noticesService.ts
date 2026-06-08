import { supabase } from '@/lib/supabase/client'

export async function getNotices() {
  try {
    const { data, error } = await supabase
      .from('Notices')
      .select('*')
      .order('Date', { ascending: false })
    
    if (error) throw error
    
    // Transform column names to match frontend expectations
    const transformedData = (data as any[] || []).map(item => ({
      id: item.notice_id,
      title: item.Title,
      description: item.description,
      date: item.Date,
      file_url: null, // Notices table doesn't have file_url
      created_at: item.created_at
    }))
    
    return { success: true, data: transformedData, error: null }
  } catch (error) {
    console.error('Error fetching notices:', error)
    return { success: false, data: [], error: 'Failed to load notices' }
  }
}