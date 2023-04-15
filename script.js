const sidebarToggleBtn = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const wrapper = document.getElementById('wrapper');

sidebarToggleBtn.addEventListener('click', () => {
  wrapper.classList.toggle('show-sidebar');
});