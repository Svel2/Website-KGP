import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const query = searchParams.get('q') || 'finance+keuangan+ekonomi+banking+Indonesia';
    
    // API Key dari environment variable atau fallback
    const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || 'kgr0GWN4EZquzDIM02D9wspGtJnJ1WFnDTyUYSv8';
    
    const API_URL = `https://newsapi.org/v2/everything?q=${query}&language=id&sortBy=publishedAt&apiKey=${API_KEY}&pageSize=10&page=${page}`;
    
    console.log('Fetching news from API:', API_URL);
    
    const response = await fetch(API_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      console.error('NewsAPI Error:', response.status, response.statusText);
      return NextResponse.json(
        { 
          error: 'Failed to fetch news',
          status: response.status,
          message: response.statusText 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('NewsAPI Response:', data);

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
