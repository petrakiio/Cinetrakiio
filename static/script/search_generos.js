(function () {
  function decodeSafe(value) {
    try {
      return decodeURIComponent(value || '');
    } catch {
      return value || '';
    }
  }

  const input = document.querySelector('#pesquisa, .pesquisa');
  const linhas = Array.from(document.querySelectorAll('.linha-filmes'));

  if (!input || linhas.length === 0) {
    return;
  }

  const cards = Array.from(document.querySelectorAll('.linha-filmes .filme a')).map((link) => {
    const img = link.querySelector('img');

    const hrefName = (link.getAttribute('href') || '')
      .split('/')
      .pop()
      ?.replace('.html', '')
      .replaceAll('_', ' ') || '';

    const srcName = (img?.getAttribute('src') || '')
      .split('/')
      .pop()
      ?.replace(/\.[a-zA-Z0-9]+$/, '')
      .replaceAll('-', ' ') || '';

    const rawName = `${decodeSafe(img?.alt || '')} ${decodeSafe(hrefName)} ${decodeSafe(srcName)}`.trim();

    return {
      link,
      row: link.closest('.linha-filmes'),
      text: normalize(rawName),
    };
  });

  const noResult = document.createElement('p');
  noResult.textContent = 'Nenhum filme encontrado nesse gênero.';
  noResult.style.textAlign = 'center';
  noResult.style.margin = '10px 0 18px';
  noResult.style.display = 'none';

  const firstRow = linhas[0];
  firstRow.parentNode.insertBefore(noResult, firstRow);

  function normalize(value) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  function runSearch() {
    const term = normalize(input.value || '');

    let visibleCount = 0;

    cards.forEach((item) => {
      const visible = term === '' || item.text.includes(term);
      item.link.style.display = visible ? '' : 'none';
      if (visible) visibleCount += 1;
    });

    linhas.forEach((row) => {
      const hasVisible = Array.from(row.querySelectorAll('.filme a')).some((a) => a.style.display !== 'none');
      row.style.display = hasVisible ? 'flex' : 'none';
    });

    noResult.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  input.addEventListener('input', runSearch);
})();
