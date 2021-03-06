const languages = {
  'defaultLanguage': 'en',
  'sentences': {
    'welcome to the page': {
      'pt-br': 'bem-vindo à página',
      'en-us': 'welcome to the page'
    },
    'this text has no a pt-br translation': {},
    'this has': {
      'pt-br': 'este tem',
      'en-us': 'this has'
    },
  }
}

function renderTranslations(lang) {
  document.querySelectorAll('*[data-translate]').forEach(element => {
    const { sentences } = languages;
    const index_translation = element.getAttribute("data-translate")

    if (sentences.hasOwnProperty(index_translation)) {
      if (languages.defaultLanguage === lang) {
        element.textContent = index_translation;
      } else if (sentences[index_translation].hasOwnProperty(lang)) {
        element.textContent = sentences[index_translation][lang];
      }
    }
  });
}