// Modal and booking interaction
document.addEventListener('DOMContentLoaded', function(){
  const openBtns = [document.getElementById('openBooking'), document.getElementById('bookHero')];
  const modal = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const form = document.getElementById('bookingForm');

  function openModal(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    // focus on first input
    const firstInput = modal.querySelector('input, select, textarea');
    if(firstInput) firstInput.focus();
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  openBtns.forEach(b => { if(b) b.addEventListener('click', openModal); });
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(cancelBtn) cancelBtn.addEventListener('click', closeModal);

  // close when clicking outside modal-card
  modal.addEventListener('click', function(e){
    if(e.target === modal) closeModal();
  });

  // handle form submit
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const entry = {
      name: data.get('name'),
      phone: data.get('phone'),
      service: data.get('service'),
      date: data.get('date'),
      time: data.get('time'),
      note: data.get('note')
    };
    // simple front-end confirmation (in real app you'd send to server)
    alert('💜 Ballantaada waa la helay!\nMagaca: ' + entry.name + '\nTaariikh: ' + entry.date + ' ' + entry.time + '\nAdeeg: ' + entry.service);
    form.reset();
    closeModal();
  });
});
