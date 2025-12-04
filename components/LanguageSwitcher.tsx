'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-2">
            <button
                className={`px-3 py-1 rounded border ${i18n.language === 'en' ? 'bg-foreground text-background' : 'border-foreground'}`}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
            <button
                className={`px-3 py-1 rounded border ${i18n.language === 'fr' ? 'bg-foreground text-background' : 'border-foreground'}`}
                onClick={() => changeLanguage('fr')}
            >
                FR
            </button>
        </div>
    );
}
