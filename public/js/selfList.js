const self = document.getElementById('self');

self.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.type === 'delete') {
    window.location.href = '/self';
  }
});
