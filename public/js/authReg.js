const { regDriver } = document.forms;

regDriver.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(regDriver);
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data)),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    if (result.message === 'OK') {
      window.location.href = '/login';
    } else {
      alert(result.message);
      window.location.href = '/signup';
    }
  } catch (error) {
    console.log(error);
  }
});
