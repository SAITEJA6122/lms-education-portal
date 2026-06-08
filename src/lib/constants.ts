export const ALLOWED_DOWNLOAD_CATEGORIES = ['exam', 'syllabus', 'worksheet', 'circular'] as const
export const ENQUIRY_SUBJECTS = ['Admissions', 'General', 'Academics', 'Complaints', 'Other'] as const
export const DEFAULT_PAGE_LIMIT = 10

export const STORAGE_BUCKETS = {
  SCHOOL_ASSETS: 'school-assets',
  FACULTY_PHOTOS: 'faculty-photos',
  GALLERY_IMAGES: 'gallery-images',
  STUDENT_DOWNLOADS: 'student-downloads',
} as const

export function getStorageUrl(bucket: string, path: string): string {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`
}