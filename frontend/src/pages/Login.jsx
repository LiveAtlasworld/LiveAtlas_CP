import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGlobeAmericas, FaMapMarkedAlt, FaSuitcaseRolling } from 'react-icons/fa';

const Login = ({ setUserRole }) => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    setUserRole(role);
    if (role === 'guide') navigate('/guide-dashboard');
    else navigate('/user-dashboard');
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      fontFamily: "'Inter', sans-serif",
      background: 'white'
    }}>
      {/* LEFT SIDE: Image & Branding */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '50px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <FaGlobeAmericas 
            style={{
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                fontSize: '600px', 
                opacity: 0.1
            }} 
        />
        
        <div style={{zIndex: 10, textAlign: 'center'}}>
            <div style={{background: 'rgba(255,255,255,0.2)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', backdropFilter: 'blur(10px)'}}>
                <FaGlobeAmericas size={40} />
            </div>
            <h1 style={{fontSize: '48px', fontWeight: '800', margin: '0 0 10px 0'}}>LiveAtlas</h1>
            <p style={{fontSize: '18px', opacity: 0.9, maxWidth: '400px'}}>Your window to the world. Connect with local guides and explore anywhere, anytime.</p>
        </div>
      </div>

      {/* RIGHT SIDE: Login Options */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        background: '#F8FAFC'
      }}>
        <div style={{width: '100%', maxWidth: '400px'}}>
            <h2 style={{fontSize: '32px', fontWeight: 'bold', color: '#0F172A', marginBottom: '10px'}}>Welcome Back</h2>
            <p style={{color: '#64748B', marginBottom: '40px'}}>Choose how you want to continue</p>

            {/* Tourist Option */}
            <button 
                onClick={() => handleLogin('user')}
                style={{
                    width: '100%',
                    padding: '20px',
                    background: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    marginBottom: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                }}
                onMouseOver={(e) => {e.currentTarget.style.borderColor = '#0EA5E9'; e.currentTarget.style.transform = 'translateY(-2px)'}}
                onMouseOut={(e) => {e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.transform = 'translateY(0)'}}
            >
                <div style={{background: '#E0F2FE', padding: '15px', borderRadius: '12px', color: '#0EA5E9'}}>
                    <FaSuitcaseRolling size={24} />
                </div>
                <div style={{textAlign: 'left'}}>
                    <div style={{fontWeight: 'bold', fontSize: '16px', color: '#0F172A'}}>I am a Tourist</div>
                    <div style={{fontSize: '14px', color: '#64748B'}}>Explore tours and join broadcasts</div>
                </div>
            </button>

            {/* Guide Option */}
            <button 
                onClick={() => handleLogin('guide')}
                style={{
                    width: '100%',
                    padding: '20px',
                    background: 'white',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
                }}
                onMouseOver={(e) => {e.currentTarget.style.borderColor = '#0EA5E9'; e.currentTarget.style.transform = 'translateY(-2px)'}}
                onMouseOut={(e) => {e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.transform = 'translateY(0)'}}
            >
                <div style={{background: '#FEF3C7', padding: '15px', borderRadius: '12px', color: '#D97706'}}>
                    <FaMapMarkedAlt size={24} />
                </div>
                <div style={{textAlign: 'left'}}>
                    <div style={{fontWeight: 'bold', fontSize: '16px', color: '#0F172A'}}>I am a Guide</div>
                    <div style={{fontSize: '14px', color: '#64748B'}}>Create tours and host live sessions</div>
                </div>
            </button>

        </div>
      </div>
    </div>
  );
};

export default Login;