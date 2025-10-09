import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '0';
    const nextPage = searchParams.get('nextPage') || '';
    
    // API Token dari environment variable
    const API_TOKEN = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY || 'pub_f2c9500f95704113b1436b82287ee4f0';
    const API_ENDPOINT = 'https://newsdata.io/api/1/latest';
    
    const params = new URLSearchParams({
      apikey: API_TOKEN,
      q: 'ATM OR bank OR perbankan OR fintech OR "kartu debit"',
      country: 'id',
      language: 'id',
      size: '8',
    });

    if (page !== '0' && nextPage) {
      params.append('page', nextPage);
    }
    
    const API_URL = `${API_ENDPOINT}?${params}`;
    console.log('Fetching news from NewsData.io:', API_URL);
    
    const response = await fetch(API_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      console.error('NewsData.io Error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      
      return NextResponse.json(
        { 
          error: 'Failed to fetch news',
          status: response.status,
          message: response.statusText,
          details: errorText
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('NewsData.io Response:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
