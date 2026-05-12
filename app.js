/* ══════════════════════════════════════════
   Financeiro Dashboard — app.js
   Dados persistidos em localStorage
   ══════════════════════════════════════════ */

// ── Dados iniciais (planilha importada) ─────────────────────────────────────
const SEED_DATA = [
  {id:'s1', data:'2026-03-01', desc:'Salário',            tipo:'Receita',      cat:'Salário',                conta:'Pix',                       val:3514.16, obs:''},
  {id:'s2', data:'2026-03-01', desc:'Google Gemini',      tipo:'Despesa',      cat:'Serviços de assinatura', conta:'C.C. Mercado Pago 1454',     val:12.50,   obs:'Duplicado'},
  {id:'s3', data:'2026-03-31', desc:'99Pay',              tipo:'Despesa',      cat:'Transporte',             conta:'Pix',                       val:162.20,  obs:''},
  {id:'s4', data:'2026-03-06', desc:'Bananinha',          tipo:'Despesa',      cat:'Alimentação',            conta:'Pix',                       val:15.00,   obs:''},
  {id:'s5', data:'2026-03-21', desc:'Cuniã',              tipo:'Despesa',      cat:'Viagens',                conta:'Pix',                       val:303.00,  obs:''},
  {id:'s6', data:'2026-04-02', desc:'Salário',            tipo:'Receita',      cat:'Salário',                conta:'Pix',                       val:3636.11, obs:''},
  {id:'s7', data:'2026-04-01', desc:'Receitas extra',     tipo:'Receita',      cat:'Salário',                conta:'Pix',                       val:100.00,  obs:''},
  {id:'s8', data:'2026-04-02', desc:'Google Gemini',      tipo:'Despesa',      cat:'Serviços de assinatura', conta:'C.C. Mercado Pago 1454',     val:12.50,   obs:''},
  {id:'s9', data:'2026-04-01', desc:'Claro Flex',         tipo:'Despesa',      cat:'Celular',                conta:'C.C. Mercado Pago 1454',     val:34.50,   obs:''},
  {id:'s10',data:'2026-04-01', desc:'Claro Flex 2',       tipo:'Despesa',      cat:'Celular',                conta:'C.C. Mercado Pago 1454',     val:34.90,   obs:''},
  {id:'s11',data:'2026-04-02', desc:'Meli+',              tipo:'Despesa',      cat:'Serviços de assinatura', conta:'C.C. Mercado Pago 1454',     val:9.90,    obs:''},
  {id:'s12',data:'2026-04-02', desc:'Uninter',            tipo:'Despesa',      cat:'Educação',               conta:'C.C. Mercado Pago 1454',     val:155.93,  obs:''},
  {id:'s13',data:'2026-04-01', desc:'Internet',           tipo:'Despesa',      cat:'Internet',               conta:'C.C. Mercado Pago 1454',     val:129.90,  obs:''},
  {id:'s14',data:'2026-04-01', desc:'Transporte',         tipo:'Despesa',      cat:'Transporte',             conta:'Pix',                       val:138.00,  obs:''},
  {id:'s15',data:'2026-04-09', desc:'CacauShow',          tipo:'Despesa',      cat:'Alimentação',            conta:'C.C. Mercado Pago 1454',     val:16.99,   obs:''},
  {id:'s16',data:'2026-04-09', desc:'Norte Pão',          tipo:'Despesa',      cat:'Alimentação',            conta:'C.C. Mercado Pago 1454',     val:16.00,   obs:''},
  {id:'s17',data:'2026-04-10', desc:'Café Helena',        tipo:'Despesa',      cat:'Delivery',               conta:'C.C. Mercado Pago 1454',     val:30.10,   obs:''},
  {id:'s18',data:'2026-04-11', desc:'Inkasa Espetaria',   tipo:'Despesa',      cat:'Alimentação',            conta:'C.C. Mercado Pago 1454',     val:25.75,   obs:''},
  {id:'s19',data:'2026-04-15', desc:'Capacete MT Braker', tipo:'Despesa',      cat:'Veículo',                conta:'C.C. Mercado Pago 1454',     val:908.15,  obs:''},
  {id:'s20',data:'2026-04-16', desc:'Aliexpress',         tipo:'Despesa',      cat:'Compras',                conta:'C.C. Mercado Pago 1454',     val:83.13,   obs:''},
  {id:'s21',data:'2026-04-18', desc:'Arena Lake',         tipo:'Despesa',      cat:'Lazer',                  conta:'Pix',                       val:17.00,   obs:''},
  {id:'s22',data:'2026-04-18', desc:'Espetinho',          tipo:'Despesa',      cat:'Alimentação',            conta:'Cartão de Débito',           val:48.00,   obs:''},
  {id:'s23',data:'2026-04-23', desc:'Salgado',            tipo:'Despesa',      cat:'Alimentação',            conta:'Pix',                       val:16.00,   obs:''},
  {id:'s24',data:'2026-04-22', desc:'Hanny',              tipo:'Despesa',      cat:'Pets',                   conta:'Dinheiro',                  val:100.00,  obs:''},
  {id:'s25',data:'2026-04-27', desc:'Banho pets',         tipo:'Despesa',      cat:'Pets',                   conta:'Pix',                       val:300.00,  obs:''},
  {id:'s26',data:'2026-04-29', desc:'Norte Pão',          tipo:'Despesa',      cat:'Alimentação',            conta:'Cartão de Débito',           val:14.31,   obs:''},
  {id:'s27',data:'2026-05-01', desc:'Salário',            tipo:'Receita',      cat:'Salário',                conta:'Pix',                       val:3636.11, obs:''},
  {id:'s28',data:'2026-05-01', desc:'Pizza Bilu',         tipo:'Despesa',      cat:'Delivery',               conta:'Pix',                       val:23.00,   obs:''},
  {id:'s29',data:'2026-05-02', desc:'Drogasil',           tipo:'Despesa',      cat:'Saúde',                  conta:'Pix',                       val:129.46,  obs:''},
  {id:'s30',data:'2026-05-05', desc:'Café Helena',        tipo:'Despesa',      cat:'Delivery',               conta:'Pix',                       val:26.09,   obs:''},
  {id:'s31',data:'2026-05-05', desc:'Hanny',              tipo:'Despesa',      cat:'Pets',                   conta:'Dinheiro',                  val:300.00,  obs:''},
  {id:'s32',data:'2026-05-05', desc:'Taimax lanche',      tipo:'Despesa',      cat:'Alimentação',            conta:'Cartão de Débito',           val:20.11,   obs:''},
  {id:'s33',data:'2026-05-05', desc:'Transporte',         tipo:'Despesa',      cat:'Transporte',             conta:'Pix',                       val:18.80,   obs:''},
  {id:'s34',data:'2026-05-07', desc:'Café Helena',        tipo:'Despesa',      cat:'Delivery',               conta:'Pix',                       val:26.09,   obs:''},
  {id:'s35',data:'2026-05-07', desc:'Rafas pastelaria',   tipo:'Despesa',      cat:'Delivery',               conta:'Cartão de Débito',           val:28.50,   obs:''},
  {id:'s36',data:'2026-05-08', desc:'Salgado',            tipo:'Despesa',      cat:'Delivery',               conta:'Pix',                       val:11.00,   obs:''},
  {id:'s37',data:'2026-05-08', desc:'Auto Escola',        tipo:'Despesa',      cat:'Veículo',                conta:'Pix',                       val:50.00,   obs:''},
  {id:'s38',data:'2026-05-08', desc:'Corrida',            tipo:'Despesa',      cat:'Lazer',                  conta:'Pix',                       val:40.00,   obs:''},
  {id:'s39',data:'2026-05-09', desc:'Pizzaria Chamas',    tipo:'Despesa',      cat:'Delivery',               conta:'Pix',                       val:59.99,   obs:''},
];

const CATEGORIAS = [
  'Alimentação','Beleza','Celular','Compras','Delivery','Despesas Fixas',
  'Educação','Emergências','Impostos','Internet','Investimentos','Lazer',
  'Manutenção do Veículo','Mercado','Moradia','Pets','Restaurantes',
  'Salário','Saúde','Seguros','Serviços de assinatura','Transporte','Veículo',
  'Vestuário','Viagens','Outros',
];

const CONTAS = [
  'Pix','Cartão de Débito','Dinheiro',
  'C.C. Nubank','C.C. Mercado Pago 1454','C.C. Elo Nanquim 9414',
  'C.C. Recarga Pay','Vale Alimentação (Coopcerto)',
];

const CAT_COLORS = [
  '#f87171','#fb923c','#fbbf24','#a3e635','#34d399',
  '#22d3ee','#60a5fa','#a78bfa','#f472b6','#94a3b8',
  '#e879f9','#4ade80','#2dd4bf','#818cf8','#f43f5e',
];

// ── Storage ──────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'financeiro_lancamentos';

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  // Primeiro acesso: carrega dados da planilha
  saveData(SEED_DATA);
  return SEED_DATA;
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ── State ─────────────────────────────────────────────────────────────────────
let lancamentos = loadData();
let currentMonth = null; // null = todos
let editingId = null;
let barChart = null, pieChart = null;

// ── Helpers ──────────────────────────────────────────────────────────────────
function uid() { return 'id_' + Date.now() + '_' + Math.random().toString(36).slice(2,7); }

function fmt(v) {
  return 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtDate(s) {
  if (!s) return '';
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
}

function monthKey(data) {
  // Returns "2026-03" from "2026-03-01"
  return data ? data.slice(0, 7) : '';
}

function monthLabel(key) {
  if (!key) return '';
  const [y, m] = key.split('-');
  const names = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return names[parseInt(m) - 1] + '/' + y.slice(2);
}

function allMonths() {
  const keys = [...new Set(lancamentos.map(l => monthKey(l.data)))].filter(Boolean).sort();
  return keys;
}

function filtered() {
  if (!currentMonth) return lancamentos;
  return lancamentos.filter(l => monthKey(l.data) === currentMonth);
}

// ── Navigation ────────────────────────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.page === name);
  });
  if (name === 'dashboard') renderDashboard();
  if (name === 'historico') renderHistorico();
}

document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    showPage(el.dataset.page);
  });
});

// ── Month Navigation ──────────────────────────────────────────────────────────
function updateMonthLabel() {
  document.getElementById('monthLabel').textContent = currentMonth ? monthLabel(currentMonth) : 'Todos';
}

document.getElementById('prevMonth').addEventListener('click', () => {
  const months = allMonths();
  if (!months.length) return;
  if (!currentMonth) { currentMonth = months[months.length - 1]; }
  else {
    const idx = months.indexOf(currentMonth);
    if (idx > 0) currentMonth = months[idx - 1];
  }
  document.getElementById('btnAll').classList.remove('active');
  updateMonthLabel();
  renderDashboard();
});

document.getElementById('nextMonth').addEventListener('click', () => {
  const months = allMonths();
  if (!months.length) return;
  if (!currentMonth) return;
  const idx = months.indexOf(currentMonth);
  if (idx < months.length - 1) { currentMonth = months[idx + 1]; }
  else { currentMonth = null; document.getElementById('btnAll').classList.add('active'); }
  updateMonthLabel();
  renderDashboard();
});

document.getElementById('btnAll').addEventListener('click', () => {
  currentMonth = null;
  document.getElementById('btnAll').classList.add('active');
  updateMonthLabel();
  renderDashboard();
});

// ── Dashboard ─────────────────────────────────────────────────────────────────
function renderDashboard() {
  const data = filtered();
  updateMonthLabel();

  // Subtitle
  const label = currentMonth ? monthLabel(currentMonth) : 'Todos os meses';
  document.getElementById('dash-subtitle').textContent = `${label} · ${data.length} lançamentos`;

  // KPIs
  let rec = 0, desp = 0, inv = 0;
  data.forEach(l => {
    if (l.tipo === 'Receita') rec += l.val;
    else if (l.tipo === 'Despesa') desp += l.val;
    else if (l.tipo === 'Investimento') inv += l.val;
  });
  const saldo = rec - desp - inv;

  document.getElementById('kpiGrid').innerHTML = `
    <div class="kpi-card"><div class="kpi-label">Receita</div><div class="kpi-value green">${fmt(rec)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Despesas</div><div class="kpi-value red">${fmt(desp)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Investimentos</div><div class="kpi-value purple">${fmt(inv)}</div></div>
    <div class="kpi-card"><div class="kpi-label">Saldo</div><div class="kpi-value ${saldo >= 0 ? 'green' : 'red'}">${fmt(saldo)}</div><div class="kpi-sub">${saldo >= 0 ? '▲ positivo' : '▼ negativo'}</div></div>
  `;

  renderBarChart();
  renderPieChart(data);
  renderDashTable(data);
}

function renderBarChart() {
  const months = allMonths();
  const labels = months.map(monthLabel);
  const rec   = months.map(m => lancamentos.filter(l => monthKey(l.data) === m && l.tipo === 'Receita').reduce((s,l) => s+l.val, 0));
  const desp  = months.map(m => lancamentos.filter(l => monthKey(l.data) === m && l.tipo === 'Despesa').reduce((s,l) => s+l.val, 0));
  const saldo = months.map((_, i) => parseFloat((rec[i] - desp[i]).toFixed(2)));

  if (barChart) { barChart.destroy(); barChart = null; }

  const ctx = document.getElementById('barChart');
  if (!ctx) return;

  barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label:'Receita', data: rec,   backgroundColor:'rgba(52,211,153,0.75)',  borderRadius:5, order:2 },
        { label:'Despesa', data: desp,  backgroundColor:'rgba(248,113,113,0.75)', borderRadius:5, order:3 },
        { label:'Saldo',   data: saldo, type:'line', borderColor:'#a78bfa',
          backgroundColor:'rgba(167,139,250,0.08)', fill:true, tension:0.35,
          pointBackgroundColor:'#a78bfa', pointRadius:4, borderWidth:2, order:1 },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend:{ display:false } },
      scales: {
        x: { ticks:{ color:'#888899', font:{size:11}, autoSkip:false }, grid:{ color:'rgba(255,255,255,0.04)' } },
        y: { ticks:{ color:'#888899', font:{size:11}, callback: v => 'R$' + v.toLocaleString('pt-BR') }, grid:{ color:'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

function renderPieChart(data) {
  const cats = {};
  data.filter(l => l.tipo === 'Despesa').forEach(l => { cats[l.cat] = (cats[l.cat] || 0) + l.val; });
  const sorted = Object.entries(cats).sort((a,b) => b[1]-a[1]);
  const labels = sorted.map(e => e[0]);
  const vals   = sorted.map(e => parseFloat(e[1].toFixed(2)));
  const total  = vals.reduce((a,b) => a+b, 0);
  const colors = labels.map((_, i) => CAT_COLORS[i % CAT_COLORS.length]);

  if (pieChart) { pieChart.destroy(); pieChart = null; }

  const ctx = document.getElementById('pieChart');
  if (!ctx) return;

  // Sem dados de despesa: mostra placeholder
  if (!labels.length) {
    document.getElementById('pieLegend').innerHTML = '<span style="color:var(--muted);font-size:12px">Nenhuma despesa no período</span>';
    return;
  }

  pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data:vals, backgroundColor:colors, borderWidth:0 }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: { display:false },
        tooltip: { callbacks: { label: ctx => `${ctx.label}: ${fmt(ctx.raw)}` } }
      }
    }
  });

  document.getElementById('pieLegend').innerHTML = labels.map((l, i) =>
    `<div class="pie-legend-item"><span class="pie-legend-dot" style="background:${colors[i]}"></span>${l} (${total ? ((vals[i]/total)*100).toFixed(0) : 0}%)</div>`
  ).join('');
}

function renderDashTable(data) {
  const rows = [...data].sort((a,b) => b.data.localeCompare(a.data)).slice(0, 10);
  const tbody = document.querySelector('#dashTxTable tbody');
  tbody.innerHTML = rows.map(l => `
    <tr>
      <td style="color:#888899">${fmtDate(l.data)}</td>
      <td>${l.desc}</td>
      <td style="color:#888899;font-size:12px">${l.cat}</td>
      <td><span class="badge badge-${l.tipo==='Receita'?'r':l.tipo==='Investimento'?'i':'d'}">${l.tipo}</span></td>
      <td class="right"><span class="tx-valor ${l.tipo==='Receita'?'r':l.tipo==='Investimento'?'i':'d'}">${fmt(l.val)}</span></td>
    </tr>
  `).join('');
}

// ── Formulário Novo Lançamento ────────────────────────────────────────────────
function populateSelects(catId, contaId, tipoAtual) {
  const catSelect = document.getElementById(catId);
  const contaSelect = document.getElementById(contaId);
  catSelect.innerHTML = CATEGORIAS.map(c => `<option value="${c}">${c}</option>`).join('');
  contaSelect.innerHTML = CONTAS.map(c => `<option value="${c}">${c}</option>`).join('');
}

function setupTipoToggle(toggleId) {
  document.querySelectorAll(`#${toggleId} .tipo-btn`).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(`#${toggleId} .tipo-btn`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function activeTipo(toggleId) {
  return document.querySelector(`#${toggleId} .tipo-btn.active`)?.dataset.tipo || 'Despesa';
}

function setActiveTipo(toggleId, tipo) {
  document.querySelectorAll(`#${toggleId} .tipo-btn`).forEach(b => {
    b.classList.toggle('active', b.dataset.tipo === tipo);
  });
}

// Set default date to today
function setToday() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('fData').value = today;
}

document.getElementById('btnSalvar').addEventListener('click', () => {
  const desc  = document.getElementById('fDesc').value.trim();
  const valorRaw = document.getElementById('fValor').value;
  const valor = parseFloat(valorRaw);
  const data  = document.getElementById('fData').value;
  const cat   = document.getElementById('fCat').value;
  const conta = document.getElementById('fConta').value;
  const obs   = document.getElementById('fObs').value.trim();
  const tipo  = activeTipo('tipoToggle');

  if (!desc) { showMsg('formMsg', 'Informe a descrição.', '#f87171'); return; }
  if (!valorRaw || isNaN(valor) || valor <= 0) { showMsg('formMsg', 'Informe um valor válido maior que zero.', '#f87171'); return; }
  if (!data) { showMsg('formMsg', 'Informe a data.', '#f87171'); return; }
  if (!cat) { showMsg('formMsg', 'Selecione a categoria.', '#f87171'); return; }

  const novo = { id: uid(), data, desc, tipo, cat, conta, val: valor, obs };
  lancamentos.push(novo);
  saveData(lancamentos);

  // Reset form
  document.getElementById('fDesc').value  = '';
  document.getElementById('fValor').value = '';
  document.getElementById('fObs').value   = '';
  setToday();
  showMsg('formMsg', '✓ Lançamento salvo com sucesso!', '#34d399');
  setTimeout(() => { document.getElementById('formMsg').textContent = ''; }, 3000);
});

function showMsg(id, msg, color) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.style.color = color;
}

// ── Histórico ─────────────────────────────────────────────────────────────────
let histFiltersInit = false;

function renderHistorico() {
  // Atualiza o select de meses sem perder a seleção atual
  const filterMes = document.getElementById('filterMes');
  const currentVal = filterMes.value;
  const months = allMonths();
  filterMes.innerHTML = `<option value="">Todos os meses</option>` +
    months.map(m => `<option value="${m}"${m === currentVal ? ' selected' : ''}>${monthLabel(m)}</option>`).join('');

  // Registra os listeners apenas uma vez
  if (!histFiltersInit) {
    document.getElementById('searchInput').addEventListener('input', applyHistFilters);
    document.getElementById('filterTipo').addEventListener('change', applyHistFilters);
    document.getElementById('filterMes').addEventListener('change', applyHistFilters);
    histFiltersInit = true;
  }

  applyHistFilters();
}

function applyHistFilters() {
  const search  = document.getElementById('searchInput').value.toLowerCase();
  const tipo    = document.getElementById('filterTipo').value;
  const mes     = document.getElementById('filterMes').value;

  let data = lancamentos.filter(l => {
    if (tipo && l.tipo !== tipo) return false;
    if (mes  && monthKey(l.data) !== mes) return false;
    if (search && !l.desc.toLowerCase().includes(search) && !l.cat.toLowerCase().includes(search)) return false;
    return true;
  });

  data = [...data].sort((a,b) => b.data.localeCompare(a.data));

  const tbody = document.querySelector('#histTable tbody');
  tbody.innerHTML = data.map(l => `
    <tr>
      <td style="color:#888899;white-space:nowrap">${fmtDate(l.data)}</td>
      <td>${l.desc}${l.obs ? `<span style="color:#888899;font-size:11px;margin-left:6px">${l.obs}</span>` : ''}</td>
      <td style="color:#888899;font-size:12px">${l.cat}</td>
      <td style="color:#888899;font-size:12px">${l.conta}</td>
      <td><span class="badge badge-${l.tipo==='Receita'?'r':l.tipo==='Investimento'?'i':'d'}">${l.tipo}</span></td>
      <td class="right"><span class="tx-valor ${l.tipo==='Receita'?'r':l.tipo==='Investimento'?'i':'d'}">${fmt(l.val)}</span></td>
      <td><button class="btn-edit" data-id="${l.id}" title="Editar">✎</button></td>
    </tr>
  `).join('');

  document.getElementById('emptyMsg').style.display = data.length ? 'none' : 'block';

  document.querySelectorAll('.btn-edit').forEach(btn => {
    btn.addEventListener('click', () => openEditModal(btn.dataset.id));
  });
}



// ── Modal Edição ──────────────────────────────────────────────────────────────
function openEditModal(id) {
  const l = lancamentos.find(x => x.id === id);
  if (!l) return;
  editingId = id;

  // Popula os selects primeiro, depois define os valores
  populateSelects('eCat','eConta');
  setActiveTipo('editTipoToggle', l.tipo);

  document.getElementById('eDesc').value  = l.desc;
  document.getElementById('eValor').value = l.val;
  document.getElementById('eData').value  = l.data;
  document.getElementById('eObs').value   = l.obs || '';

  // Aguarda o DOM atualizar antes de setar o valor do select
  requestAnimationFrame(() => {
    document.getElementById('eCat').value   = l.cat;
    document.getElementById('eConta').value = l.conta;
  });

  document.getElementById('editModal').style.display = 'flex';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('editModal').addEventListener('click', e => { if (e.target === document.getElementById('editModal')) closeModal(); });

function closeModal() {
  document.getElementById('editModal').style.display = 'none';
  editingId = null;
}

document.getElementById('btnSalvarEdit').addEventListener('click', () => {
  if (!editingId) return;
  const idx = lancamentos.findIndex(l => l.id === editingId);
  if (idx === -1) return;

  lancamentos[idx] = {
    ...lancamentos[idx],
    desc:  document.getElementById('eDesc').value.trim(),
    val:   parseFloat(document.getElementById('eValor').value),
    data:  document.getElementById('eData').value,
    cat:   document.getElementById('eCat').value,
    conta: document.getElementById('eConta').value,
    obs:   document.getElementById('eObs').value.trim(),
    tipo:  activeTipo('editTipoToggle'),
  };

  saveData(lancamentos);
  closeModal();
  renderHistorico();
});

document.getElementById('btnDeletar').addEventListener('click', () => {
  if (!editingId) return;
  if (!confirm('Tem certeza que deseja deletar este lançamento?')) return;
  lancamentos = lancamentos.filter(l => l.id !== editingId);
  saveData(lancamentos);
  closeModal();
  renderHistorico();
});

// ── Export / Import JSON ──────────────────────────────────────────────────────
document.getElementById('btnExport').addEventListener('click', () => {
  const json = JSON.stringify(lancamentos, null, 2);
  const blob = new Blob([json], { type:'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `financeiro_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
});

document.getElementById('btnImport').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (!Array.isArray(imported)) { alert('Arquivo inválido.'); return; }
      if (!confirm(`Importar ${imported.length} lançamentos? Os dados atuais serão substituídos.`)) return;
      lancamentos = imported;
      saveData(lancamentos);
      showPage('dashboard');
      alert('Importação concluída!');
    } catch(err) {
      alert('Erro ao ler o arquivo JSON.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});

// ── Init ──────────────────────────────────────────────────────────────────────
populateSelects('fCat','fConta');
populateSelects('eCat','eConta');
setupTipoToggle('tipoToggle');
setupTipoToggle('editTipoToggle');
setToday();
renderDashboard();
