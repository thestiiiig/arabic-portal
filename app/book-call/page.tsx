'use client'

import { useRouter } from 'next/navigation'

export default function BookCallPage() {
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
        <h1 style={{ fontSize: '22px', fontWeight: '500', marginBottom: '4px' }}>Book a call</h1>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>Choose a time that works for you and I'll see you there.</p>
      </div>

      {/* Cal.com embed */}
      <div style={{ padding: '0 28px 28px' }}>
        <div style={{
          background: '#fff', border: '0.5px solid #e5e7eb',
          borderRadius: '12px', overflow: 'hidden', minHeight: '600px'
        }}>
          <iframe
            src="https://calendly.com/ismailarman1/30min"
            style={{ width: '100%', height: '700px', border: 'none' }}
          />
        </div>
      </div>

    </div>
  )
}