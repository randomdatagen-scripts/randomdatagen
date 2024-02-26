
function generateRandomAddress() {
  fetch('https://randommer.io/api/Misc/Random-Address?number=1&culture=nl', {
    method: 'GET',
    headers: {
      'accept': '*/*',
      'X-Api-Key': 'f12fda54565941f6a7c1b2c4ef070ba3'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerHTML = `<p>${data}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function generateRandomIBAN() {
  fetch('https://randommer.io/api/Finance/Iban/nl', {
    method: 'GET',
    headers: {
      'accept': '*/*',
      'X-Api-Key': 'f12fda54565941f6a7c1b2c4ef070ba3'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerHTML = `<p>${data}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function generateRandomName() {
  fetch('https://randommer.io/api/Name?nameType=fullname&quantity=1', {
    method: 'GET',
    headers: {
      'accept': '*/*',
      'X-Api-Key': 'f12fda54565941f6a7c1b2c4ef070ba3'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerHTML = `<p>${data}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function generateValidSSN() {
  fetch('https://randommer.io/api/SocialNumber', {
    method: 'GET',
    headers: {
      'accept': '*/*',
      'X-Api-Key': 'f12fda54565941f6a7c1b2c4ef070ba3'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerHTML = `<p>${data}</p>`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
