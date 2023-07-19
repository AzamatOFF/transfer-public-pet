const { logDriver } = document.forms;

logDriver.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    if (result.message === 'OK') {
      window.location.href = '/home';
    } else {
      alert(result.message);
      window.location.href = '/login';
    }
  } catch (error) {
    console.log(error);
  }
});
