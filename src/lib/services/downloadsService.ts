import { supabase } from '@/lib/supabase/client'

const ALLOWED_CATEGORIES = ['exam', 'syllabus', 'worksheet', 'circular']

function getStorageUrl(bucket: string, path: string): string {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`
}

export async function getDownloadsByCategory(category: string) {
  try {
    if (!ALLOWED_CATEGORIES.includes(category)) {
      return { success: false, data: [], error: 'Invalid category' }
    }
    
    const { data, error } = await supabase
      .from('Downloads')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    const items = data as any[] || []
    
    const downloadsWithUrls = items.map(download => ({
      id: download.id,
      name: download.Title,
      description: download.description,
      category: download.category,
      file_url: getStorageUrl('student-downloads', download.file_url),
      file_size: null,
      uploaded_at: download.created_at,
      date: download.date
    }))
    
    return { success: true, data: downloadsWithUrls, error: null }
  } catch (error) {
    console.error('Error fetching downloads:', error)
    return { success: false, data: [], error: 'Failed to load downloads' }
  }
}