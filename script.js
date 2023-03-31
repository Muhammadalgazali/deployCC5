function rubahKata() {
    const text = document.getElementById('text');
    if (text.innerHTML === 'C173DKX4816') {
      text.innerHTML = 'Al';
    } else if (text.innerHTML === 'Al') {
      text.innerHTML = 'Ali';
    } else if (text.innerHTML === 'Ali') {
      text.innerHTML = 'Alga';
    } else if (text.innerHTML === 'Alga') {
      text.innerHTML = 'Gazali';
    } else {
      text.innerHTML = 'Al';
    }
  }
  