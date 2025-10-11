import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') || 'Némo Kardassevitch';
  const subtitle = searchParams.get('subtitle') || 'Ingénieur Logiciel & Électronique';
  const description = searchParams.get('description') || 'Portfolio et projets d\'un ingénieur fullstack passionné par la tech et l\'innovation';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#252525',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        {/* Top section with branding */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {/* NK Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                background: '#8B7AB8',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              NK
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#F2F2F2',
              lineHeight: 1.1,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '40px',
              color: '#9F8DCB',
              fontWeight: '600',
            }}
          >
            {subtitle}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: '28px',
                color: '#A3A3A3',
                maxWidth: '900px',
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Bottom section with URL */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '28px',
            color: '#71717a',
          }}
        >
          <span style={{ color: '#9F8DCB' }}>●</span>
          nkardas.fr
        </div>

      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
