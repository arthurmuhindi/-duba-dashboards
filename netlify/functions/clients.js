const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwuaem0poM8ki72DnTi_MRY3MOAZ7XjewPbQcDk5uQ3kjpb9s9DdhME6JYG_N14gdqO/exec';

exports.handler = async function(event) {
  const params = new URLSearchParams(event.queryStringParameters).toString();
  const url = APPS_SCRIPT_URL + '?' + params;

  try {
    const response = await fetch(url, { redirect: 'follow' });
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.toString() })
    };
  }
};
