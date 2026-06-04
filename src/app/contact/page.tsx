'use client'

import { useState } from 'react'
import { PageHeader } from "@/components/layout/PageHeader"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  // ADD THIS:
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  
  setLoading(true)
  // ...rest of your code)

    const { data, error } = await supabase
      .from('Enquiries')
      .insert([
        {
          Student_name: name,
          Email: email,
          Phone_no: phone ? Number(phone) : null,
          Message: `Subject: ${subject}\n\n${message}`,
        },
      ])
      .select()

    console.log('DATA:', data)
    console.log('ERROR:', error)

    setLoading(false)

    if (error) {
      console.error('Code:', error.code)
      console.error('Message:', error.message)
      console.error('Details:', error.details)
      console.error('Hint:', error.hint)
      alert(`Failed: ${error.message || 'Unknown error — check console'}`)
      return
    }

    alert('Enquiry submitted successfully')

    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
  }

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with our team for any queries regarding admissions, academics, or school facilities."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 text-left">
                School Information
              </h2>

              <div className="space-y-8">

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">
                      Address
                    </h4>
                    <p className="text-gray-600 text-left">
                      Neyyoor, Kanyakumari District, Tamil Nadu, 629802
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">
                      Phone
                    </h4>
                    <p className="text-gray-600 text-left">
                      (04651) 270536
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">
                      Email
                    </h4>
                    <p className="text-gray-600 text-left">
                      info@lmsghss.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1 text-left">
                      Office Hours
                    </h4>
                    <p className="text-gray-600 text-left">
                      Mon - Fri: 8:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-8 text-left">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200"
                      placeholder="Subject"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 min-h-[150px]"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}