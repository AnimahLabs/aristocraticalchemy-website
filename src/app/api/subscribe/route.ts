import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email } = await request.json();
  
  const API_KEY = 'kit_d4832bb9e1fa8c6029a86b7382594015';
  
  try {
    const response = await fetch('https://api.kit.com/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        api_key: API_KEY
      })
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const error = await response.json();
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
