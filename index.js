const languages = {
  'defaultLanguage': 'pt-br',
  'sentences': {
    'welcome to the page': {
      'pt-br': 'bem vindo a página',
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
    let { textContent } = element;
    const { sentences } = languages;
    const index_translation = element.getAttribute("data-translate")
    
    textContent = element.previousText || textContent;

    if (sentences.hasOwnProperty(index_translation)) {
      if (languages.defaultLanguage === lang) {
        element.textContent = textContent;
      } else if (sentences[index_translation].hasOwnProperty(lang)) {
        element.previousText = textContent;
        element.textContent = sentences[index_translation][lang];
      }
    }
  });
}