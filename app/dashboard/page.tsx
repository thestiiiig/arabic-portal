'use client'

import { useRouter } from 'next/navigation'

const cards = [
  {
    title: 'Learning modules',
    desc: 'Access your full curriculum and lesson library.',
    icon: '📚',
    bg: '#E6F1FB',
    action: 'Open Skool →',
    href: 'https://skool.com', // replace with your Skool URL
  },
  {
    title: 'AI Arabic chat',
    desc: 'Practise real conversations with an AI tutor in Arabic.',
    icon: '💬',
    bg: '#E1F5EE',
    action: 'Start chatting →',
    href: '/chat',
    featured: true,
  },
  {
    title: 'Book a call',
    desc: 'Schedule your next 1-1 session with your tutor.',
    icon: '📅',
    bg: '#FAEEDA',
    action: 'View availability →',
    href: '/book-call',
  },
  {
    title: 'Vocabulary bank',
    desc: 'Review and build your personal word list.',
    icon: '📖',
    bg: '#EEEDFE',
    action: 'View words →',
    href: '/vocabulary',
  },
  {
    title: 'Resources',
    desc: 'Curated links, tools, and references to support your learning.',
    icon: '🌐',
    bg: '#E1F5EE',
    action: 'Browse →',
    href: '/resources',
  },
  {
    title: 'Programme guide',
    desc: 'How everything works, what to do and when.',
    icon: '🗺️',
    bg: '#FAECE7',
    action: 'Read guide →',
    href: '/guide',
  },
]

export default function DashboardPage() {
  const router = useRouter()

  const handleCard = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank')
    } else {
      router.push(href)
    }
  }

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
            <div style={{ fontSize: '15px', fontWeight: '500' }}>Arabic with [Your Name]</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Student portal</div>
          </div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '6px 12px', borderRadius: '999px',
          border: '0.5px solid #e5e7eb', background: '#f9fafb'
        }}>
          <div style={{
            width: '26px', height: '26px', borderRadius: '50%', background: '#E1F5EE',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '11px', fontWeight: '500', color: '#0F6E56'
          }}>SA</div>
          <span style={{ fontSize: '13px' }}>Sara A.</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '32px 28px 8px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '500', marginBottom: '4px' }}>
          Ahlan, <span style={{ color: '#1D9E75' }}>Sara</span> — مرحباً
        </h1>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>Here's everything you need, in one place.</p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '14px',
        padding: '24px 28px 28px'
      }}>
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => handleCard(card.href)}
            style={{
              background: '#fff',
              border: card.featured ? '2px solid #1D9E75' : '0.5px solid #e5e7eb',
              borderRadius: '12px',
              padding: '22px 18px 18px',
              cursor: 'pointer',
              display: 'flex', flexDirection: 'column', gap: '10px',
              position: 'relative'
            }}
          >
            {card.featured && (
              <div style={{
                position: 'absolute', top: '12px', right: '12px',
                background: '#E1F5EE', color: '#0F6E56',
                fontSize: '10px', fontWeight: '500',
                padding: '3px 8px', borderRadius: '999px'
              }}>New</div>
            )}
            <div style={{
              width: '42px', height: '42px', borderRadius: '10px',
              background: card.bg, display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '20px'
            }}>{card.icon}</div>
            <div style={{ fontSize: '14px', fontWeight: '500' }}>{card.title}</div>
            <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.5' }}>{card.desc}</div>
            <div style={{ marginTop: 'auto', fontSize: '12px', color: '#1D9E75', fontWeight: '500' }}>{card.action}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        margin: '0 28px 28px',
        padding: '14px 18px',
        background: '#f9fafb',
        borderRadius: '12px',
        border: '0.5px solid #e5e7eb',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>Need help? Message your tutor on WhatsApp</span>
        <span style={{ fontSize: '12px', color: '#1D9E75', fontWeight: '500', cursor: 'pointer' }}>Get in touch →</span>
      </div>

    </div>
  )
}