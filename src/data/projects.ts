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
      en: 'An open-source processor-chip teaching and tape-out practice project that connects computer science and electronic engineering through RISC-V, hardware/software co-design, and the full chip-design workflow. I worked on the processor core, cache subsystem, and FPGA validation.',
      zh: '“一生一芯”是一个以 RISC-V 为载体、贯通计算机科学与电子信息工程的开源处理器芯片教学流片实践项目，覆盖软硬件协同和芯片设计流程。我参与了处理器核心、Cache 子系统和 FPGA 验证工作。',
    },
    time: '2026.03 - 2026.05',
    link: 'https://github.com/Purelikeic/ysyx-workbench',
  },
  {
    name: { en: '10th IC Innovation and Entrepreneurship Competition · Qixing Microelectronics Cup', zh: '第十届集成电路创新创业大赛七星微杯' },
    description: {
      en: 'Responsible for processor/chip design and RTL implementation; won Third Prize in the Northwest Regional Competition. <br /><a href="https://univ.ciciec.com/nd.jsp?id=1025#_jcp=1" target="_blank">Competition details</a>.',
      zh: '负责处理器/芯片设计与 RTL 实现，获第十届集成电路创新创业大赛西北分赛区三等奖。<br /><a href="https://univ.ciciec.com/nd.jsp?id=1025#_jcp=1" target="_blank">比赛详情</a>。',
    },
    time: '',
    link: 'https://github.com/Purelikeic/ic-competition2',
  },
]

export { projects, type Project }
