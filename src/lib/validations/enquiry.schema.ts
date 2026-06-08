import { z } from 'zod'

export const enquirySchema = z.object({
  parent_name: z.string().min(2, 'Parent name must be at least 2 characters'),
  student_name: z.string().optional().nullable(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().nullable(),
  grade: z.string().optional().nullable(),
  subject: z.enum(['Admissions', 'General', 'Academics', 'Complaints', 'Other']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message too long'),
})

export type EnquiryFormData = z.infer<typeof enquirySchema>