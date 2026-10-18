import type { LocaleText } from '@/types/i18n'

interface Experience {
  title: LocaleText
  time: LocaleText
  img_path: string
  description: LocaleText
  link: LocaleText
}

const experiences: Experience[] = [
  {
    title: { en: 'Beijing Institute of Open Source Chip', zh: '北京开源芯片研究院' },
    time: { en: '2026.03 - current', zh: '2026.03 - 至今' },
    img_path: '/experiences/bosc.png',
    description: {
      en: 'Designed the second-generation Yanqihu L2 cache subsystem for ECOS.',
      zh: '负责 ECOS 第二代雁栖湖二级缓存子系统的设计。',
    },
    link: { en: 'https://www.bosc.ac.cn/', zh: 'https://www.bosc.ac.cn/' },
  },
  {
    title: { en: 'Huazhong University of Science and Technology', zh: '华中科技大学' },
    time: { en: '2024.09 - 2027.06 (expected)', zh: '2024.09 - 2027.06（预计）' },
    img_path: '/experiences/hust.png',
    description: {
      en: 'M.S. in Electronic Science and Technology. Research focus: processor architecture.',
      zh: '电子科学与技术专业硕士在读，研究方向为处理器体系结构。',
    },
    link: { en: 'https://www.hust.edu.cn/', zh: 'https://www.hust.edu.cn/' },
  },
  {
    title: { en: 'Tianjin University of Technology', zh: '天津理工大学' },
    time: { en: '2019.09 - 2023.06', zh: '2019.09 - 2023.06' },
    img_path: '/experiences/tjut.png',
    description: {
      en: 'Bachelor of Electronic Science and Technology.',
      zh: '电子科学与技术专业本科。',
    },
    link: { en: 'https://www.tjut.edu.cn/', zh: 'https://www.tjut.edu.cn/' },
  },
]

export { experiences, type Experience }
