import { LocaleAnalysisResult } from 'next/dist/server/lib/i18n-provider'
import 'server-only'

const dictionaries = {
    en: () => import('@/app/translations/en.json').then(module => module.default)

}