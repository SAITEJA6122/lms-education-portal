export type EnquiryStatus = 'pending' | 'replied' | 'archived'
export type EnquirySubject = 'Admissions' | 'General' | 'Academics' | 'Complaints' | 'Other'
export type DownloadCategory = 'exam' | 'syllabus' | 'worksheet' | 'circular'
export type ContentType = 'home' | 'about' | 'principal'

export interface Enquiry {
  id: string
  parent_name: string
  student_name: string | null
  email: string
  phone: string | null
  grade: string | null
  subject: EnquirySubject
  message: string
  status: EnquiryStatus
  created_at: string
  updated_at: string
}

export interface Content {
  id: string
  type: ContentType
  key: string
  value: string
  image_url: string | null
  updated_at: string
}

export interface News {
  id: string
  title: string
  content: string
  date: string
  image_url: string | null
  is_featured: boolean
  created_at: string
}

export interface Notice {
  id: string
  title: string
  description: string
  date: string
  file_url: string | null
  created_at: string
}

export interface Download {
  id: string
  name: string
  description: string | null
  category: DownloadCategory
  file_url: string
  file_size: number | null
  uploaded_at: string
}

export interface Faculty {
  id: string
  name: string
  designation: string | null
  qualification: string | null
  photo_url: string | null
  bio: string | null
  order: number
  is_active: boolean
}

export interface Database {
  public: {
    Tables: {
      enquiries: {
        Row: Enquiry
        Insert: Omit<Enquiry, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Enquiry, 'id'>>
      }
      content: {
        Row: Content
        Insert: Omit<Content, 'id' | 'updated_at'>
        Update: Partial<Omit<Content, 'id'>>
      }
      news: {
        Row: News
        Insert: Omit<News, 'id' | 'created_at'>
        Update: Partial<Omit<News, 'id'>>
      }
      notices: {
        Row: Notice
        Insert: Omit<Notice, 'id' | 'created_at'>
        Update: Partial<Omit<Notice, 'id'>>
      }
      downloads: {
        Row: Download
        Insert: Omit<Download, 'id' | 'uploaded_at'>
        Update: Partial<Omit<Download, 'id'>>
      }
      faculty: {
        Row: Faculty
        Insert: Omit<Faculty, 'id'>
        Update: Partial<Omit<Faculty, 'id'>>
      }
    }
  }
}