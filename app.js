const views = [...document.querySelectorAll('.view')];
const navItems = [...document.querySelectorAll('[data-view]')];
const pageTitle = document.getElementById('pageTitle');
const sidebar = document.getElementById('sidebar');
const toast = document.getElementById('toast');
let toastTimeout;

function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800); }
function navigate(viewName) { const target = document.getElementById(`view-${viewName}`) ? viewName : 'dashboard'; views.forEach((view) => view.classList.toggle('active-view', view.id === `view-${target}`)); document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === target)); pageTitle.textContent = document.getElementById(`view-${target}`).dataset.title; sidebar.classList.remove('open'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
navItems.forEach((item) => item.addEventListener('click', () => navigate(item.dataset.view)));
document.getElementById('menuToggle').addEventListener('click', () => sidebar.classList.toggle('open'));
document.getElementById('dismissNotice').addEventListener('click', (event) => event.currentTarget.parentElement.remove());
document.querySelectorAll('.task-row input').forEach((input) => input.addEventListener('change', () => { const task = input.closest('.task-row').querySelector('strong').textContent; showToast(input.checked ? `Tarefa concluída: ${task}` : `Tarefa reaberta: ${task}`); }));

const searchInput = document.getElementById('globalSearch'); const contentCards = [...document.querySelectorAll('.content-card')]; const emptyLibrary = document.getElementById('emptyLibrary');
searchInput.addEventListener('input', () => { const query = searchInput.value.toLowerCase().trim(); if (query) navigate('library'); let visible = 0; contentCards.forEach((card) => { const matches = !query || `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query); card.hidden = !matches; if (matches) visible += 1; }); emptyLibrary.hidden = visible > 0; });
document.querySelectorAll('.filter-tab').forEach((tab) => tab.addEventListener('click', () => { document.querySelectorAll('.filter-tab').forEach((other) => other.classList.remove('active')); tab.classList.add('active'); const filter = tab.dataset.filter; let visible = 0; contentCards.forEach((card) => { const matches = filter === 'all' || card.dataset.subject === filter; card.hidden = !matches; if (matches) visible += 1; }); emptyLibrary.hidden = visible > 0; }));
document.addEventListener('keydown', (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchInput.focus(); } });

let focusSeconds = 25 * 60; let focusInterval = null; const focusTimer = document.getElementById('focusTimer'); const startFocus = document.getElementById('startFocus');
function renderTimer() { focusTimer.textContent = `${String(Math.floor(focusSeconds / 60)).padStart(2, '0')}:${String(focusSeconds % 60).padStart(2, '0')}`; }
startFocus.addEventListener('click', () => { if (focusInterval) { clearInterval(focusInterval); focusInterval = null; startFocus.innerHTML = 'Continuar foco <span>→</span>'; showToast('Sessão pausada. Seu tempo foi preservado.'); return; } startFocus.innerHTML = 'Pausar foco <span>Ⅱ</span>'; showToast('Focus Space iniciado. Uma coisa de cada vez.'); focusInterval = setInterval(() => { if (focusSeconds > 0) { focusSeconds -= 1; renderTimer(); } else { clearInterval(focusInterval); focusInterval = null; startFocus.innerHTML = 'Começar foco <span>→</span>'; showToast('Sessão concluída. Bom trabalho.'); } }, 1000); });
document.getElementById('resetFocus').addEventListener('click', () => { clearInterval(focusInterval); focusInterval = null; focusSeconds = 25 * 60; renderTimer(); startFocus.innerHTML = 'Começar foco <span>→</span>'; showToast('Cronômetro reiniciado.'); });
document.getElementById('focusToolButton').addEventListener('click', () => { navigate('dashboard'); setTimeout(() => document.getElementById('startFocus').focus(), 100); });

const calculatorInputs = ['po1', 'po2', 'ac', 'si'].map((id) => document.getElementById(id)); const subjectType = document.getElementById('subjectType'); const calcResult = document.getElementById('calcResult');
function calculateGrade() { const [po1, po2, ac, si] = calculatorInputs.map((input) => Number(input.value) || 0); const po = (po1 + po2) / 2; const result = subjectType.value === 'technical' ? po * 0.5 + ac * 0.4 + si * 0.1 : po * 0.5 + ac * 0.3 + si * 0.2; calcResult.textContent = result.toFixed(1).replace('.', ','); }
[...calculatorInputs, subjectType].forEach((input) => input.addEventListener('input', calculateGrade));
document.getElementById('openGradeCalc').addEventListener('click', () => { navigate('tools'); document.getElementById('calculator').scrollIntoView({ behavior: 'smooth', block: 'center' }); showToast('Calculadora aberta. Os valores são apenas uma simulação.'); });
document.querySelectorAll('.content-card .round-arrow').forEach((button) => button.addEventListener('click', () => showToast('Leitor de conteúdo: disponível na próxima etapa.')));
document.querySelectorAll('.tool-card .text-button').forEach((button) => button.addEventListener('click', () => showToast('Esta ferramenta está preparada para a próxima integração.')));
document.getElementById('libraryFocusButton').addEventListener('click', () => { const first = document.querySelector('.library-subject-card'); if (first) first.click(); else showToast('Entre no seu perfil para carregar suas matérias.'); });

// Supabase: login com identificador interno, sem e-mail na experiência do aluno.
const sb = window.supabase.createClient(window.STUDYFCP_SUPABASE.url, window.STUDYFCP_SUPABASE.anonKey);
let currentProfile = null; let allSubjects = []; let currentGrades = []; let directoryData = null;
const authScreen = document.getElementById('authScreen'); const loginForm = document.getElementById('loginForm'); const loginError = document.getElementById('loginError'); const loginButton = document.getElementById('loginButton');
function setLoginError(message) { loginError.textContent = message; loginError.hidden = !message; }
function internalEmail(login) { return `${login.trim().toLowerCase()}@studyfcp.local`; }
async function finishLogin(login) {
  const { data, error } = await sb.rpc('bootstrap_profile', { p_login: login.trim().toLowerCase() });
  if (error) throw new Error(error.message.includes('LOGIN_NOT_AUTHORIZED') ? 'Este login ainda não foi autorizado no diretório do StudyFCP.' : error.message);
  currentProfile = data;
  document.body.classList.add('authenticated'); authScreen.hidden = true;
  const profileName = document.querySelector('.profile-chip strong'); if (profileName) profileName.textContent = currentProfile.display_name;
  const profileCaption = document.querySelector('.profile-chip small'); if (profileCaption) profileCaption.textContent = currentProfile.class_name || 'Perfil privado';
  await loadSubjects(); await loadGrades();
}
loginForm.addEventListener('submit', async (event) => { event.preventDefault(); setLoginError(''); loginButton.disabled = true; loginButton.textContent = 'Entrando…'; const login = document.getElementById('loginInput').value; const password = document.getElementById('passwordInput').value; const { error } = await sb.auth.signInWithPassword({ email: internalEmail(login), password }); if (error) setLoginError('Login ou senha inválidos. Confira os dados fornecidos pelo administrador.'); else { try { await finishLogin(login); } catch (err) { await sb.auth.signOut(); setLoginError(err.message); } } loginButton.disabled = false; loginButton.innerHTML = 'Entrar no StudyFCP <span>→</span>'; });

async function loadSubjects() {
  directoryData = await fetch('data/student-directory.json').then((r) => r.json()).catch(() => null);
  const student = directoryData?.students?.find((item) => item.login === currentProfile.login);
  const allowedNames = student?.subjects || [];
  const { data, error } = await sb.from('subjects').select('id,name,category').order('name');
  const remoteSubjects = !error && data?.length ? data : [];
  const sourceSubjects = remoteSubjects.length ? remoteSubjects : (directoryData?.subjects || []).map((subject) => ({ id: `local:${subject.name}`, ...subject }));
  allSubjects = allowedNames.length ? sourceSubjects.filter((subject) => allowedNames.includes(subject.name)) : sourceSubjects;
  const select = document.getElementById('gradeSubject');
  select.innerHTML = allSubjects.length ? allSubjects.map((subject) => `<option value="${subject.id}">${subject.name} · ${subject.category === 'technical' ? 'técnica' : 'curricular'}</option>`).join('') : '<option value="">Nenhuma disciplina encontrada</option>';
  renderSubjectWidget();
  renderLibrarySubjects();
  updateAssessmentOptions();
}
function renderSubjectWidget() {
  const target = document.getElementById('subjectProgressList');
  const caption = document.querySelector('.subject-widget-caption');
  if (!target) return;
  if (!allSubjects.length) { target.innerHTML = '<span class="subject-chip empty-chip">Nenhuma disciplina carregada</span>'; if (caption) caption.textContent = 'Execute o schema do Supabase para sincronizar o catálogo.'; return; }
  if (caption) caption.textContent = `${allSubjects.length} disciplinas associadas ao seu perfil · widget de teste`;
  target.innerHTML = allSubjects.map((subject, index) => { const count = currentGrades.filter((grade) => grade.subject_id === subject.id).length; const tone = subject.category === 'technical' ? 'chip-cyan' : index % 3 === 0 ? 'chip-violet' : 'chip-amber'; return `<button type="button" class="subject-chip ${tone}" data-subject-id="${subject.id}"><i></i><span>${subject.name}</span><b>${count ? `${count} registro${count > 1 ? 's' : ''}` : 'começar'}</b></button>`; }).join('');
  target.querySelectorAll('[data-subject-id]').forEach((button) => button.addEventListener('click', () => { navigate('performance'); document.getElementById('gradeSubject').value = button.dataset.subjectId; setTimeout(() => document.getElementById('gradeFormCard').scrollIntoView({ behavior: 'smooth', block: 'center' }), 80); }));
}
function slugify(value) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
function renderLibrarySubjects() {
  const target = document.getElementById('librarySubjectGrid');
  const caption = document.getElementById('librarySubjectCaption');
  if (!target) return;
  if (!allSubjects.length) { target.innerHTML = '<span class="subject-library-empty">Nenhuma matéria disponível ainda.</span>'; return; }
  if (caption) caption.textContent = `${allSubjects.length} matérias do seu perfil · conteúdos demonstrativos por enquanto`;
  target.innerHTML = allSubjects.map((subject, index) => `<button type="button" class="library-subject-card ${subject.category === 'technical' ? 'library-tech' : ''}" data-library-subject="${slugify(subject.name)}"><span class="library-subject-icon">${subject.name.slice(0, 2).toUpperCase()}</span><strong>${subject.name}</strong><small>${subject.category === 'technical' ? 'técnica' : 'curricular'}</small><i>→</i></button>`).join('');
  target.querySelectorAll('[data-library-subject]').forEach((button) => button.addEventListener('click', () => { const slug = button.dataset.librarySubject; const cards = [...document.querySelectorAll('.content-card')]; let shown = 0; cards.forEach((card) => { const matches = card.dataset.subject === slug || card.dataset.search.includes(button.textContent.split('→')[0].trim().toLowerCase()); card.hidden = !matches; if (matches) shown += 1; }); document.querySelectorAll('.filter-tab').forEach((tab) => tab.classList.remove('active')); showToast(shown ? `${button.querySelector('strong').textContent}: ${shown} conteúdo(s) encontrado(s).` : `${button.querySelector('strong').textContent}: nenhum conteúdo publicado ainda.`); document.getElementById('contentCards').scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
}
function updateAssessmentOptions() {
  const category = document.getElementById('gradeCategory').value;
  const label = document.getElementById('gradeLabel');
  const options = category === 'PO' ? ['PO1', 'PO2'] : category === 'SI' ? ['SI'] : Array.from({ length: 20 }, (_, index) => `AC${index + 1}`);
  label.innerHTML = options.map((option) => `<option value="${option}">${option}${category === 'AC' ? ` · atividade contínua ${option.slice(2)}` : ''}</option>`).join('');
}
document.getElementById('gradeCategory').addEventListener('change', updateAssessmentOptions);
document.getElementById('passwordToggle').addEventListener('click', () => { const input = document.getElementById('passwordInput'); const visible = input.type === 'text'; input.type = visible ? 'password' : 'text'; document.getElementById('passwordToggle').textContent = visible ? 'mostrar' : 'ocultar'; });
function gradeByKey(subjectId, trimester, category) { return currentGrades.filter((grade) => grade.subject_id === subjectId && grade.trimester === trimester && grade.category === category); }
function average(list) { return list.length ? list.reduce((sum, item) => sum + Number(item.grade), 0) / list.length : null; }
function trimesterAverage(subject, trimester) { const grades = currentGrades.filter((grade) => grade.subject_id === subject.id && grade.trimester === trimester); const po = average(grades.filter((grade) => grade.category === 'PO')); const ac = average(grades.filter((grade) => grade.category === 'AC')); const si = average(grades.filter((grade) => grade.category === 'SI')); if (po === null || ac === null || si === null) return null; const weights = subject.category === 'technical' ? [0.5, 0.4, 0.1] : [0.5, 0.3, 0.2]; return po * weights[0] + ac * weights[1] + si * weights[2]; }
function formatGrade(value) { return value === null ? '—' : Number(value).toFixed(1).replace('.', ','); }
function metricClass(value, threshold = 6) { return value !== null && value < threshold ? 'below-average' : ''; }
function renderPerformance() {
  const subjectRows = allSubjects.map((subject) => { const t1 = trimesterAverage(subject, 1); const t2 = trimesterAverage(subject, 2); const t3 = trimesterAverage(subject, 3); const values = [t1, t2, t3].filter((value) => value !== null); const annual = values.length === 3 ? values.reduce((sum, value) => sum + value, 0) : null; return { subject, t1, t2, t3, annual }; }).filter((row) => row.t1 !== null || row.t2 !== null || row.t3 !== null);
  const summary = document.getElementById('gradesSummary');
  summary.innerHTML = subjectRows.length ? subjectRows.map((row) => { const situation = row.annual === null ? 'incompleto' : row.annual >= 18 && [row.t1,row.t2,row.t3].every((value) => value >= 6) ? 'aprovado' : 'revisar'; return `<div class="table-row"><strong>${row.subject.name}</strong><span class="${metricClass(row.t1)}">${formatGrade(row.t1)}</span><span class="${metricClass(row.t2)}">${formatGrade(row.t2)}</span><span class="${metricClass(row.t3)}">${formatGrade(row.t3)}</span><b class="${metricClass(row.annual, 18)}">${formatGrade(row.annual)}</b><span class="${situation === 'aprovado' ? 'success-text' : situation === 'revisar' ? 'below-average' : 'warning-text'}">${situation}</span></div>`; }).join('') : '<div class="table-row"><span class="muted-copy">Nenhuma média completa ainda. Cadastre PO1, PO2, AC e SI para calcular.</span></div>';
  const completeTrimesters = [1,2,3].map((trimester) => { const values = allSubjects.map((subject) => trimesterAverage(subject, trimester)).filter((value) => value !== null); return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null; });
  const annuals = subjectRows.map((row) => row.annual).filter((value) => value !== null); const annual = annuals.length ? annuals.reduce((sum, value) => sum + value, 0) / annuals.length : null;
  const incomplete = completeTrimesters.filter((value) => value === null).length; const belowTrimesters = completeTrimesters.filter((value) => value !== null && value < 6).length; const belowGrades = currentGrades.filter((grade) => (Number(grade.grade) / Number(grade.max_grade || 10)) * 10 < 6).length;
  document.getElementById('annualScore').innerHTML = annual === null ? '—<small>/18</small>' : `${formatGrade(annual)}<small>/18</small>`; document.getElementById('annualScore').className = metricClass(annual, 18); document.getElementById('annualMessage').textContent = annual === null ? 'aguardando 3 trimestres completos' : annual >= 18 ? 'pontuação anual atingida' : `${formatGrade(18 - annual)} pontos restantes`;
  document.getElementById('trimesterStatus').textContent = `${3 - incomplete}/3`; document.getElementById('trimesterStatus').className = belowTrimesters ? 'below-average' : ''; document.getElementById('trimesterMessage').textContent = belowTrimesters ? `${belowTrimesters} trimestre(s) abaixo de 6,0` : incomplete ? `${incomplete} pendente(s)` : 'todos acima de 6,0';
  document.getElementById('attentionCount').textContent = belowGrades; document.getElementById('attentionCount').className = belowGrades ? 'below-average' : 'success-text'; document.getElementById('attentionMessage').textContent = belowGrades ? 'nota(s) abaixo de 6,0' : 'nenhuma nota abaixo de 6,0';
}

async function loadGrades() { const { data, error } = await sb.from('grades').select('*, subjects(id,name,category)').eq('profile_id', currentProfile.id).order('trimester').order('created_at'); if (error) { showToast('Não foi possível carregar suas notas.'); return; } currentGrades = data || []; renderGradeRows(); renderPerformance(); }
function renderGradeRows() { renderSubjectWidget(); renderLibrarySubjects(); const target = document.getElementById('gradeRows'); target.innerHTML = currentGrades.length ? currentGrades.map((grade) => { const normalized = (Number(grade.grade) / Number(grade.max_grade || 10)) * 10; return `<div class="grade-row ${normalized < 6 ? 'below-average' : ''}"><strong>${grade.subjects?.name || 'Disciplina'}<small>${grade.assessment_label} · ${grade.category} · ${grade.trimester}º tri.</small></strong><span>${Number(grade.grade).toFixed(2).replace('.', ',')}</span><small>de ${Number(grade.max_grade).toFixed(2).replace('.', ',')}</small><small>${grade.assessment_date || 'sem data'}</small><button class="delete-grade" data-grade-id="${grade.id}" aria-label="Excluir ${grade.assessment_label}">×</button></div>`; }).join('') : '<p class="muted-copy">Nenhuma avaliação cadastrada. Cada AC aparecerá em uma linha separada.</p>'; target.querySelectorAll('.delete-grade').forEach((button) => button.addEventListener('click', () => deleteGrade(button.dataset.gradeId))); }
async function deleteGrade(id) { if (!confirm('Excluir esta avaliação?')) return; const { error } = await sb.from('grades').delete().eq('id', id).eq('profile_id', currentProfile.id); if (error) showToast('Não foi possível excluir a avaliação.'); else { showToast('Avaliação excluída.'); await loadGrades(); } }
document.getElementById('gradeForm').addEventListener('submit', async (event) => { event.preventDefault(); const form = event.currentTarget; const errorTarget = document.getElementById('gradeError'); errorTarget.hidden = true; const subjectId = document.getElementById('gradeSubject').value; if (!subjectId || subjectId.startsWith('local:')) { errorTarget.textContent = 'O catálogo do Supabase ainda não foi sincronizado. Execute o supabase-schema.sql no projeto e recarregue a página.'; errorTarget.hidden = false; return; } const payload = { profile_id: currentProfile.id, subject_id: subjectId, trimester: Number(document.getElementById('gradeTrimester').value), category: document.getElementById('gradeCategory').value, assessment_label: document.getElementById('gradeLabel').value, grade: Number(document.getElementById('gradeValue').value), max_grade: Number(document.getElementById('gradeMax').value), assessment_date: document.getElementById('gradeDate').value || null, notes: document.getElementById('gradeNotes').value.trim() || null }; const { error } = await sb.from('grades').insert(payload); if (error) { errorTarget.textContent = error.message; errorTarget.hidden = false; return; } form.reset(); document.getElementById('gradeMax').value = 10; updateAssessmentOptions(); showToast('Nota salva no seu espaço privado.'); await loadGrades(); });
document.getElementById('scrollGradeForm').addEventListener('click', () => { navigate('performance'); setTimeout(() => document.getElementById('gradeFormCard').scrollIntoView({ behavior: 'smooth', block: 'center' }), 80); });
document.querySelector('.profile-chip').addEventListener('click', async () => { if (confirm('Sair do StudyFCP?')) { await sb.auth.signOut(); location.reload(); } });

calculateGrade(); renderTimer(); updateAssessmentOptions();
sb.auth.getSession().then(async ({ data }) => { if (data.session) { const login = data.session.user.email.split('@')[0]; try { await finishLogin(login); } catch { await sb.auth.signOut(); } } });
