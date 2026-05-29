import { ImageResponse } from 'next/og'
import { wedding } from '@/lib/wedding'

export const runtime = 'edge'

async function loadFont(url: string) {
  const res = await fetch(url, { cache: 'force-cache' })
  if (!res.ok) throw new Error(`Failed to load font ${url}`)
  return res.arrayBuffer()
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const rawName = searchParams.get('name') ?? ''
  const guest = rawName
    .replace(/[<>{}"'`\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60)

  const [serifItalic, sans] = await Promise.all([
    loadFont('https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd58jDOjw.ttf'),
    loadFont('https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf'),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #1F3A2E 0%, #13241C 50%, #1F3A2E 100%)',
          color: '#FBF8F3',
          fontFamily: 'Inter',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 32, left: 32, right: 32, bottom: 32, border: '1px solid rgba(201, 169, 106, 0.5)', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 44, left: 44, right: 44, bottom: 44, border: '1px solid rgba(201, 169, 106, 0.2)', display: 'flex' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, color: '#C9A96A', marginBottom: 16, marginTop: -40 }}>
          <div style={{ width: 60, height: 1, background: '#C9A96A', display: 'flex' }} />
          <div style={{ fontSize: 13, letterSpacing: 8, fontFamily: 'Inter', fontWeight: 300, display: 'flex' }}>
            SAVE THE DATE
          </div>
          <div style={{ width: 60, height: 1, background: '#C9A96A', display: 'flex' }} />
        </div>

        {guest && (
          <div
            style={{
              fontSize: 26,
              fontFamily: 'Cormorant',
              fontStyle: 'italic',
              color: 'rgba(251, 248, 243, 0.92)',
              marginBottom: 18,
              display: 'flex',
            }}
          >
            Дорогой {guest}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 0.95 }}>
          <div style={{ fontSize: 120, fontFamily: 'Cormorant', fontStyle: 'italic', fontWeight: 400, letterSpacing: -1, display: 'flex' }}>
            {wedding.groom}
          </div>
          <div style={{ fontSize: 78, color: '#D4B981', fontFamily: 'Cormorant', fontStyle: 'italic', fontWeight: 400, margin: '6px 0', display: 'flex' }}>
            &amp;
          </div>
          <div style={{ fontSize: 120, fontFamily: 'Cormorant', fontStyle: 'italic', fontWeight: 400, letterSpacing: -1, display: 'flex' }}>
            {wedding.bride}
          </div>
        </div>

        <div
          style={{
            width: 180,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #C9A96A, transparent)',
            margin: '30px 0 18px',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div style={{ fontSize: 15, letterSpacing: 6, color: 'rgba(251, 248, 243, 0.9)', fontFamily: 'Inter', fontWeight: 300, display: 'flex' }}>
            5 ИЮНЯ 2026  ·  18:00
          </div>
          <div style={{ fontSize: 24, fontFamily: 'Cormorant', fontStyle: 'italic', color: '#D4B981', marginTop: 6, display: 'flex' }}>
            {wedding.venue}
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 70,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            fontSize: 11,
            letterSpacing: 6,
            color: 'rgba(201, 169, 106, 0.75)',
            fontFamily: 'Inter',
            fontWeight: 300,
          }}
        >
          СЕМЬИ {wedding.groomFamily.toUpperCase()} · {wedding.brideFamily.toUpperCase()}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Cormorant', data: serifItalic, weight: 400, style: 'italic' },
        { name: 'Inter', data: sans, weight: 400, style: 'normal' },
      ],
    },
  )
}
