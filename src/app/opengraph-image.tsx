import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_LOCATION_LABEL } from '@/lib/site';

export const alt = 'Swift Stack Digital — Web Development, E-Commerce, Custom Software & SEO Agency in Sri Lanka';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#02040a',
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.25) 0%, transparent 50%), radial-gradient(circle at 85% 85%, rgba(99, 102, 241, 0.28) 0%, transparent 50%)',
          color: '#ffffff',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '9999px',
                backgroundColor: '#38bdf8',
              }}
            />
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {SITE_NAME}
            </span>
          </div>
          <span
            style={{
              fontSize: '18px',
              color: '#7dd3fc',
              border: '1px solid rgba(125, 211, 252, 0.35)',
              borderRadius: '9999px',
              padding: '8px 20px',
            }}
          >
            www.swiftstack.digital
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#38bdf8',
            }}
          >
            Web Development · E-Commerce · Software · SEO · AI
          </span>
          <div
            style={{
              display: 'flex',
              fontSize: '62px',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '960px',
            }}
          >
            Custom Websites & Digital Solutions That Grow Your Business
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.14)',
            paddingTop: '28px',
            fontSize: '22px',
            color: '#94a3b8',
          }}
        >
          <span>{SITE_LOCATION_LABEL}</span>
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Get a Free Consultation →</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
