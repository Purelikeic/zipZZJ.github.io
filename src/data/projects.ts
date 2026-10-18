import type { LocaleText } from '@/types/i18n'

interface Project {
  name: LocaleText
  description: LocaleText
  time: string
  link: string
}

const projects: Project[] = [
  {
    name: { en: 'One Student One Chip', zh: '一生一芯' },
    description: {
      en: 'A RISC-V processor design and FPGA validation project.',
      zh: '基于 RISC-V 的高性能 CPU 设计及 FPGA 验证项目。',
    },
    time: '2026.03 - 2026.05',
    link: 'https://github.com/Purelikeic/ysyx-workbench',
  },
  {
    name: { en: '10th IC Innovation and Entrepreneurship Competition · Qixing Microelectronics Cup', zh: '第十届集成电路创新创业大赛七星微杯' },
    description: {
      en: 'Third Prize in the Northwest Regional Competition. <br /><a href="https://univ.ciciec.com/nd.jsp?id=1025#_jcp=1" target="_blank">Competition details</a>.',
      zh: '第十届集成电路创新创业大赛西北分赛区三等奖。<br /><a href="https://univ.ciciec.com/nd.jsp?id=1025#_jcp=1" target="_blank">比赛详情</a>。',
    },
    time: '',
    link: 'https://github.com/Purelikeic/ic-competition2',
  },
]

export { projects, type Project }
