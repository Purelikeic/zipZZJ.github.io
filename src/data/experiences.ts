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
    title: { en: 'Tianjin University of Technology', zh: '天津理工大学' },
    time: { en: '2019.09 - 2023.06', zh: '2019.09 - 2023.06' },
    img_path: '/experiences/tjut.png',
    description: {
      en: 'Bachelor of Electronic Science and Technology.',
      zh: '电子科学与技术专业本科。',
    },
    link: { en: 'https://www.tjut.edu.cn/', zh: 'https://www.tjut.edu.cn/' },
  },
  {
    title: { en: 'Huazhong University of Science and Technology', zh: '华中科技大学' },
    time: { en: '2024.09 - 2027.06 (expected)', zh: '2024.09 - 2027.06（预计）' },
    img_path: '/experiences/hust.png',
    description: {
      en: 'M.S. in Electronic Science and Technology. Research focus: processor architecture. Ranked in the top 20% of the program.',
      zh: '电子科学与技术专业硕士在读，研究方向为处理器体系结构，专业排名前 20%。',
    },
    link: { en: 'https://www.hust.edu.cn/', zh: 'https://www.hust.edu.cn/' },
  },
  {
    title: { en: 'Beijing Institute of Open Source Chip', zh: '北京开源芯片研究院' },
    time: { en: '2026.03 - current', zh: '2026.03 - 至今' },
    img_path: '/experiences/bosc.png',
    description: {
      en: 'IC front-end design intern. Working on the second-generation Yanqihu L2 Cache, including microarchitecture, RTL implementation, MSHR miss handling, and Compact CHI coherence interfaces.',
      zh: 'IC 前端设计实习生，参与第二代雁栖湖 L2 Cache 的微架构设计与 RTL 实现，负责 MSHR 未命中处理和 Compact CHI 一致性接口。',
    },
    link: { en: 'https://www.bosc.ac.cn/', zh: 'https://www.bosc.ac.cn/' },
  },
]

export { experiences, type Experience }
