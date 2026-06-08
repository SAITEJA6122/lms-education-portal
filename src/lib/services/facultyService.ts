import { supabase } from '@/lib/supabase/client'

function getStorageUrl(bucket: string, path: string): string {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`
}

export async function getFaculty() {
  try {
    const { data, error } = await supabase
      .from('Faculty')
      .select('*')
      .order('id', { ascending: true })
    
    if (error) throw error
    
    const items = data as any[] || []
    
    const facultyWithPhotos = items.map(faculty => ({
      id: faculty.id,
      name: faculty.faculty_name,
      designation: faculty.designation,
      qualification: null, // Not in Faculty table
      photo_url: faculty.photo_url ? getStorageUrl('faculty-photos', faculty.photo_url) : null,
      bio: null, // Not in Faculty table
      order: faculty.id,
      is_active: true
    }))
    
    return { success: true, data: facultyWithPhotos, error: null }
  } catch (error) {
    console.error('Error fetching faculty:', error)
    return { success: false, data: [], error: 'Failed to load faculty' }
  }
}