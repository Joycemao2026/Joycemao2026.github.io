(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const main = document.querySelector('main');
  const footer = document.querySelector('.site-footer');

  function setMenu(open, returnFocus = true) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
    toggle.querySelector('.menu-label').textContent = open ? '关闭' : '目录';
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    main.inert = open;
    footer.inert = open;
    if (open) menu.querySelector('a').focus();
    else if (returnFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (menu.hidden) return;
    if (event.key === 'Escape') setMenu(false);
    if (event.key !== 'Tab') return;
    const links = [...menu.querySelectorAll('a')];
    const first = toggle;
    const last = links[links.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
    if (event.matches && !menu.hidden) setMenu(false, false);
  });

  const filters = document.querySelectorAll('[data-note-filter]');
  if (filters.length) {
    const notes = [...document.querySelectorAll('[data-note-category]')];
    const count = document.querySelector('#notes-count');
    const empty = document.querySelector('.empty-state');
    filters.forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => {
        const selected = button.dataset.noteFilter;
        filters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
        let visible = 0;
        notes.forEach((note) => {
          note.hidden = selected !== 'all' && note.dataset.noteCategory !== selected;
          if (!note.hidden) visible++;
        });
        count.textContent = `${String(visible).padStart(2, '0')} 篇手记`;
        empty.hidden = visible > 0;
      });
    });
  }

  // 兼容此前分享的首页 #contact 链接。
  if (document.body.dataset.page === 'home' && window.location.hash === '#contact') {
    window.location.replace('contact.html');
  }
})();
