import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL =
  process.env.CLOUDCASTING_API_URL ||
  'http://https://gsoc-cloudcasting-api.onrender.com/api/cloudcasting/layers';

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ variable: string; step: string }> }
) {
  const params = await props.params;
  try {
    const { variable, step } = params;

    // Validate parameters
    if (!variable || !step) {
      return NextResponse.json({ error: 'Missing variable or step parameter' }, { status: 400 });
    }

    // Validate step is a number
    const stepNum = parseInt(step.replace('.tif', ''));
    if (isNaN(stepNum) || stepNum < 0 || stepNum > 11) {
      return NextResponse.json(
        { error: 'Invalid step parameter. Must be between 0 and 11' },
        { status: 400 }
      );
    }

    // Fetch from the CloudCasting API
    const apiUrl = `${API_BASE_URL}/${variable}/${stepNum}.tif`;
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/octet-stream',
      },
    });

    if (!response.ok) {
      console.error(`API request failed: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { error: `Failed to fetch from CloudCasting API: ${response.statusText}` },
        { status: response.status }
      );
    }

    // Get the blob data
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();

    // Return the TIF file with proper headers
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/tiff',
        'Content-Length': arrayBuffer.byteLength.toString(),
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error in cloud layer proxy:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Handle preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
