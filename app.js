const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('[data-view]')];
const pageTitle = document.getElementById('pageTitle');
const sidebar = document.getElementById('sidebar');
const toast = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
}

function navigate(viewName) {
  const target = document.getElementById(`view-${viewName}`) ? viewName : 'dashboard';
  views.forEach((view) => view.classList.toggle('active-view', view.id === `view-${target}`));
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === target));
  pageTitle.textContent = document.getElementById(`view-${target}`).dataset.title;
  sidebar.classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navItems.forEach((item) => item.addEventListener('click', () => navigate(item.dataset.view)));
document.getElementById('menuToggle').addEventListener('click', () => sidebar.classList.toggle('open'));
document.getElementById('dismissNotice').addEventListener('click', (event) => event.currentTarget.parentElement.remove());

document.querySelectorAll('.task-row input').forEach((input) => {
  input.addEventListener('change', () => {
    const task = input.closest('.task-row').querySelector('strong').textContent;
    showToast(input.checked ? `Tarefa concluída: ${task}` : `Tarefa reaberta: ${task}`);
  });
});

const searchInput = document.getElementById('globalSearch');
const contentCards = [...document.querySelectorAll('.content-card')];
const emptyLibrary = document.getElementById('emptyLibrary');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  if (query) navigate('library');
  let visible = 0;
  contentCards.forEach((card) => {
    const matches = !query || `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  emptyLibrary.hidden = visible > 0;
});

document.querySelectorAll('.filter-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach((other) => other.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    let visible = 0;
    contentCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.subject === filter;
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    emptyLibrary.hidden = visible > 0;
  });
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
});

let focusSeconds = 25 * 60;
let focusInterval = null;
const focusTimer = document.getElementById('focusTimer');
const startFocus = document.getElementById('startFocus');
function renderTimer() {
  const minutes = String(Math.floor(focusSeconds / 60)).padStart(2, '0');
  const seconds = String(focusSeconds % 60).padStart(2, '0');
  focusTimer.textContent = `${minutes}:${seconds}`;
}
startFocus.addEventListener('click', () => {
  if (focusInterval) {
    clearInterval(focusInterval);
    focusInterval = null;
    startFocus.innerHTML = 'Continuar foco <span>→</span>';
    showToast('Sessão pausada. Seu tempo foi preservado.');
    return;
  }
  startFocus.innerHTML = 'Pausar foco <span>Ⅱ</span>';
  showToast('Focus Space iniciado. Uma coisa de cada vez.');
  focusInterval = setInterval(() => {
    if (focusSeconds > 0) {
      focusSeconds -= 1;
      renderTimer();
    } else {
      clearInterval(focusInterval);
      focusInterval = null;
      startFocus.innerHTML = 'Começar foco <span>→</span>';
      showToast('Sessão concluída. Bom trabalho.');
    }
  }, 1000);
});
document.getElementById('resetFocus').addEventListener('click', () => {
  clearInterval(focusInterval);
  focusInterval = null;
  focusSeconds = 25 * 60;
  renderTimer();
  startFocus.innerHTML = 'Começar foco <span>→</span>';
  showToast('Cronômetro reiniciado.');
});
document.getElementById('focusToolButton').addEventListener('click', () => {
  navigate('dashboard');
  setTimeout(() => document.getElementById('startFocus').focus(), 100);
});

const calculatorInputs = ['po1', 'po2', 'ac', 'si'].map((id) => document.getElementById(id));
const subjectType = document.getElementById('subjectType');
const calcResult = document.getElementById('calcResult');
function calculateGrade() {
  const [po1, po2, ac, si] = calculatorInputs.map((input) => Number(input.value) || 0);
  const po = (po1 + po2) / 2;
  const result = subjectType.value === 'technical' ? po * 0.5 + ac * 0.4 + si * 0.1 : po * 0.5 + ac * 0.3 + si * 0.2;
  calcResult.textContent = result.toFixed(1).replace('.', ',');
}
[...calculatorInputs, subjectType].forEach((input) => input.addEventListener('input', calculateGrade));
document.getElementById('openGradeCalc').addEventListener('click', () => {
  navigate('tools');
  document.getElementById('calculator').scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast('Calculadora aberta. Os valores são apenas uma simulação.');
});

document.querySelectorAll('.content-card .round-arrow').forEach((button) => button.addEventListener('click', () => showToast('Leitor de conteúdo: disponível na próxima etapa.')));
document.querySelectorAll('.tool-card .text-button').forEach((button) => button.addEventListener('click', () => showToast('Esta ferramenta está preparada para a próxima integração.')));

calculateGrade();
