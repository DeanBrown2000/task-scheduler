const TAB_STORAGE_KEY = 'dashboard-active-tab';

const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[data-panel]'));

const setActiveTab = (tabId, { store = true } = {}) => {
  const targetTab = tabButtons.find((tab) => tab.dataset.tab === tabId);
  const targetPanel = panels.find((panel) => panel.dataset.panel === tabId);

  if (!targetTab || !targetPanel) {
    return;
  }

  tabButtons.forEach((tab) => {
    const isActive = tab === targetTab;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  panels.forEach((panel) => {
    panel.classList.toggle('is-active', panel === targetPanel);
  });

  if (store) {
    try {
      sessionStorage.setItem(TAB_STORAGE_KEY, tabId);
    } catch (error) {
      console.warn('Unable to persist active tab:', error);
    }
  }
};

const activateTabByIndex = (index, { store = true } = {}) => {
  if (!tabButtons.length) {
    return;
  }
  const safeIndex = (index + tabButtons.length) % tabButtons.length;
  const tabId = tabButtons[safeIndex]?.dataset.tab;
  if (tabId) {
    setActiveTab(tabId, { store });
    tabButtons[safeIndex].focus();
  }
};

const initTabs = () => {
  if (!tabButtons.length || !panels.length) {
    return;
  }

  const storedTab = sessionStorage.getItem(TAB_STORAGE_KEY);
  const initialTab = tabButtons.some((tab) => tab.dataset.tab === storedTab)
    ? storedTab
    : tabButtons[0].dataset.tab;

  setActiveTab(initialTab, { store: false });

  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      setActiveTab(tab.dataset.tab);
    });

    tab.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          activateTabByIndex(index + 1);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          activateTabByIndex(index - 1);
          break;
        case 'Home':
          event.preventDefault();
          activateTabByIndex(0);
          break;
        case 'End':
          event.preventDefault();
          activateTabByIndex(tabButtons.length - 1);
          break;
        case 'Enter':
        case ' ': // Space
          event.preventDefault();
          setActiveTab(tab.dataset.tab);
          break;
        default:
      }
    });
  });
};

initTabs();
