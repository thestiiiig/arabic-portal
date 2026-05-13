'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: '#fff',
        border: '0.5px solid #e5e7eb',
        borderRadius: '16px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
      }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '8px',
            background: '#1D9E75', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#fff', fontSize: '16px'
          }}>ع</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '500' }}>Arabic with [Your Name]</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>Student portal</div>
          </div>
        </div>

        <h1 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '6px' }}>Welcome back</h1>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>Sign in to access your portal</p>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '13px', color: '#374151', display: 'block', marginBottom: '6px' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@email.com"
            style={{
              width: '100%', padding: '10px 12px', fontSize: '14px',
              border: '0.5px solid #d1d5db', borderRadius: '8px',
              outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '13px', color: '#374151', display: 'block', marginBottom: '6px' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: '100%', padding: '10px 12px', fontSize: '14px',
              border: '0.5px solid #d1d5db', borderRadius: '8px',
              outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>

        {error && (
          <p style={{ fontSize: '13px', color: '#dc2626', marginBottom: '16px' }}>{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: '100%', padding: '11px', fontSize: '14px', fontWeight: '500',
            background: '#1D9E75', color: '#fff', border: 'none',
            borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>

      </div>
    </div>
  )
}