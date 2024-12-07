export const initializeCustomScripts = () => {
    // Define functions and logic within the function
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (
        !selectHeader?.classList.contains('scroll-up-sticky') &&
        !selectHeader?.classList.contains('sticky-top') &&
        !selectHeader?.classList.contains('fixed-top')
      )
        return;
  
      window.scrollY > 100
        ? selectBody?.classList.add('scrolled')
        : selectBody?.classList.remove('scrolled');
    };
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileNavToogle = () => {
      const body = document.querySelector('body');
      body?.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn?.classList.toggle('bi-list');
      mobileNavToggleBtn?.classList.toggle('bi-x');
    };
    mobileNavToggleBtn?.addEventListener('click', mobileNavToogle);
  
    document.querySelectorAll('#navmenu a').forEach((navmenu) => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
  
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
      navmenu.addEventListener('click', (e) => {
        e.preventDefault();
        navmenu.parentNode?.classList.toggle('active');
        navmenu.parentNode?.nextElementSibling?.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => preloader.remove());
    }
  
    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add('active')
          : scrollTop.classList.remove('active');
      }
    };
  
    scrollTop?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    // Cleanup event listeners when the component unmounts
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      mobileNavToggleBtn?.removeEventListener('click', mobileNavToogle);
      scrollTop?.removeEventListener('click', toggleScrollTop);
      document.removeEventListener('scroll', toggleScrollTop);
      window.removeEventListener('load', toggleScrollTop);
    };
  };
  