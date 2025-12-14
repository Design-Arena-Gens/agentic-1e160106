import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Test Application</h1>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Counter: {count}</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '0.5rem',
              background: 'white',
              color: '#667eea',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              border: '2px solid white',
              borderRadius: '0.5rem',
              background: 'transparent',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <p style={{ marginTop: '2rem', opacity: 0.8 }}>✓ Application is working correctly</p>
    </div>
  );
}
