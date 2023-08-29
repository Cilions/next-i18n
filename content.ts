interface DictionaryEntry {
  homeHeader: string;
  homeContent: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
  en: {
    homeHeader: 'Home',
    homeContent: 'Welcome to my home.',
  },
  fr: {
    homeHeader: 'Accueil',
    homeContent: 'Bienvenue chez moi.',
  },
  es: {
    homeHeader: 'Casa',
    homeContent: 'Beinvenidos a mi casa.',
  },
};
