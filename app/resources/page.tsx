'use client'

import { useRouter } from 'next/navigation'

const resources = [
  {
    category: 'Listening & immersion',
    items: [
      { title: 'Arabic Pod 101', desc: 'Structured audio lessons for all levels.', href: 'https://www.arabicpod101.com' },
      { title: 'Assil Arabic YouTube', desc: 'Native Arabic content for immersion.', href: 'https://www.youtube.com' },
    ]
  },
  {
    category: 'Vocabulary & dictionary',
    items: [
      { title: 'Hans Wehr Dictionary', desc: 'The definitive Arabic-English dictionary.', href: 'https://www.dict.cc' },
      { title: 'Forvo Arabic', desc: 'Hear native pronunciation of any word.', href: 'https://forvo.com/languages/ar' },
    ]
  },
  {
    category: 'Reading & writing',
    items: [
      { title: 'Arabicreader', desc: 'Read Arabic texts with instant word lookup.', href: 'https://www.arabicreader.com' },
      { title: 'Madinah Arabic', desc: 'Classical Arabic reading practice.', href: 'https://www.madinaharabic.com' },
    ]
  },
]

export default function ResourcesPage() {
  const router = useRouter()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>

      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 28px', background: '#fff',
        borderBottom: '0.5px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px', background: '#1D9E75',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontSize: '14px'
          }}>ع</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '500' }}>Arabic with Ismail</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Student portal</div>
          </div>
        </div>
        <button
          onClick={() => router.push('/dashboard')}
          style={{
            fontSize: '13px', color: '#6b7280', background: 'none',
            border: '0.5px solid #e5e7eb', borderRadius: '8px',
            padding: '6px 12px', cursor: 'pointer'
          }}
        >
          ← Back to dashboard
        </button>
      </div>

      {/* Header */}
      <div style={{ padding: '32px 28px 24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '500', marginBottom: '4px' }}>Resources</h1>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>Curated tools and references to support your Arabic journey.</p>
      </div>

      {/* Resource list */}
      <div style={{ padding: '0 28px 28px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {resources.map((section) => (
          <div key={section.category}>
            <h2 style={{ fontSize: '13px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              {section.category}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {section.items.map((item) => (
                <div
                  key={item.title}
                  onClick={() => window.open(item.href, '_blank')}
                  style={{
                    background: '#fff', border: '0.5px solid #e5e7eb',
                    borderRadius: '12px', padding: '16px 18px',
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '2px' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.desc}</div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#1D9E75', fontWeight: '500' }}>Visit →</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}