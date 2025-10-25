document.getElementById('actionBtn').addEventListener('click', function(){
  const out = document.getElementById('output');
  const now = new Date();
  out.textContent = 'Hello! This demo was generated on ' + now.toLocaleString();
});
