import type { LocaleText } from '@/types/i18n'

interface Award {
  year: string
  name: LocaleText
  description: LocaleText
}

const awards: Award[] = [
  {
    year: '',
    name: { en: 'Third Prize in the 10th IC Innovation and Entrepreneurship Competition · Qixing Microelectronics Cup', zh: '第十届集成电路创新创业大赛七星微杯西北分赛区三等奖' },
    description: { en: '', zh: '' },
  },
  {
    year: '2025-2026',
    name: { en: 'HUST Second-class Scholarship', zh: '华中科技大学二等奖学金' },
    description: { en: '', zh: '' },
  },
  {
    year: '2026-2027',
    name: { en: 'HUST Second-class Scholarship', zh: '华中科技大学二等奖学金' },
    description: { en: '', zh: '' },
  },
  {
    year: '2024-2025',
    name: { en: 'HUST Third-class Scholarship', zh: '华中科技大学三等奖学金' },
    description: { en: '', zh: '' },
  },
]

export { awards, type Award }
