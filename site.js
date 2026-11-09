const modules = {
  web: ['UI / UX', 'CMS', 'SEO', 'API'],
  store: ['CATALOG', 'PAYMENT', 'SHIPPING', 'STOCK'],
  erp: ['SALES', 'INVENTORY', 'REPORTS', 'ROLES'],
  custom: ['PORTAL', 'APP', 'WORKFLOW', 'API'],
};

const visual = document.querySelector('#visual');
const visualButtons = [...visual.querySelectorAll('[data-visual]')];
const nodes = [...visual.querySelectorAll('.node-label')];

for (const button of visualButtons) {
  button.addEventListener('click', () => {
    const system = button.dataset.visual;
    visual.dataset.system = system;
    for (const item of visualButtons) {
      item.setAttribute('aria-pressed', String(item === button));
    }
    nodes.forEach((node, index) => {
      node.textContent = modules[system][index];
    });
  });
}

const form = document.querySelector('#project-form');
const projectType = form.elements.namedItem('type');
const result = document.querySelector('#result');
const summary = document.querySelector('#summary');

for (const link of document.querySelectorAll('[data-project]')) {
  link.addEventListener('click', () => {
    projectType.value = link.dataset.project;
    result.hidden = true;
  });
}

form.addEventListener('input', () => {
  result.hidden = true;
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const region = form.elements.namedItem('region').value;
  const notes = form.elements.namedItem('notes').value.trim();
  summary.textContent = [
    'ملخص مشروع | Quin Tech',
    '',
    'نوع المشروع: ' + projectType.selectedOptions[0].textContent,
    'السوق المستهدف: ' + region,
    '',
    'فكرة المشروع',
    notes,
  ].join('\n');
  result.hidden = false;
  document.querySelector('#download').focus();
});

document.querySelector('#download').addEventListener('click', () => {
  const blob = new Blob(['\uFEFF', summary.textContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'quin-tech-project.txt';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
