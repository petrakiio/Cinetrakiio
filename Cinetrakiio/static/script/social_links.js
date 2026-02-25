(function () {
  const row = document.getElementById('social-links-row');
  if (!row) return;

  const links = [
    {
      href: 'https://www.instagram.com/pe.zrd/',
      img: '/static/img/redes sociais/instagran.png',
      alt: 'instagram',
    },
    {
      href: 'https://www.tiktok.com/@petrakiio',
      img: '/static/img/redes sociais/tik tok.webp',
      alt: 'tiktok',
    },
    {
      href: 'https://discord.com/discovery/quests#1333839522189938740',
      img: '/static/img/redes sociais/discord.png',
      alt: 'discord',
    },
    {
      href: 'https://www.linkedin.com/in/petrakiio/',
      img: '/static/img/redes sociais/link.svg',
      alt: 'linkedin',
    },
  ];

  links.forEach((item) => {
    const td = document.createElement('td');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.href = item.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    img.src = encodeURI(item.img);
    img.alt = item.alt;
    img.id = 'imageinsta';

    a.appendChild(img);
    td.appendChild(a);
    row.appendChild(td);
  });
})();
