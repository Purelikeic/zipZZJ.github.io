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
      en: 'Designed and validated a 32-bit, in-order, single-issue, five-stage RISC-V processor with branch prediction, bypassing, I/D caches, AXI4, FPGA deployment, and RT-Thread support; achieved 3.50 CoreMark/MHz.',
      zh: '负责 32 位顺序单发射五级流水 RISC-V 处理器及 Cache 子系统设计与 FPGA 验证，实现分支预测、旁路、I/D Cache 和 AXI4 链路，完成 RT-Thread 适配，CoreMark 达到 3.50 CoreMark/MHz。',
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
