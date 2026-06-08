import { supabase } from '@/lib/supabase/client'

export async function getEvents() {
  try {
    const { data, error } = await supabase
      .from('Events')
      .select('*')
      .eq('completion_status', 'upcoming') // Only show upcoming events
      .order('Date', { ascending: true })
    
    if (error) throw error
    
    const items = data as any[] || []
    
    const transformedData = items.map(item => ({
      id: item.event_id,
      title: item.Title,
      description: item.description,
      date: item.Date,
      location: item.location,
      status: item.completion_status
    }))
    
    return { success: true, data: transformedData, error: null }
  } catch (error) {
    console.error('Error fetching events:', error)
    return { success: false, data: [], error: 'Failed to load events' }
  }
}