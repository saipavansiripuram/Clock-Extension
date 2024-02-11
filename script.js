function getLondonTime() {
  const options = { timeZone: 'Europe/London' };
  const LondonTime = new Date().toLocaleString('en-US', options);
  document.getElementById('londonTime').textContent = `${LondonTime}`;
}
getLondonTime();
setInterval(getLondonTime, 1000);


function getSanFranscico(){
  const options = { timeZone: 'America/Los_Angeles' };
  const sanTime = new Date().toLocaleString('en-US', options);
  document.getElementById('sanFrancisco').textContent = `${sanTime}`;
}
getSanFranscico();
setInterval(getSanFranscico, 1000);
