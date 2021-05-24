import ComunitySVG from './images/comunity.svg';
import ConnectionSVG from './images/connection.svg';
import EventSVG from './images/events.svg';
import FinanceSVG from './images/finance.svg';
import MentorSVG from './images/mentor.svg';
import ToolSVG from './images/tool.svg';
import { IBenefit } from './type';

export const benefits: IBenefit[] = [
  {
    id: 1,
    icon: ComunitySVG,
    title: 'Comunidade Afya Ventures',
    description: 'uma rede única para troca de experiências e networking',
  },
  {
    id: 2,
    icon: ToolSVG,
    title: 'Metodologias e ferramentas',
    description: 'para auxiliar no desenvolvimento e gestão do seu negócio',
  },
  {
    id: 3,
    icon: MentorSVG,
    title: 'Rede de mentores',
    description:
      'composta por professores, empreendedores e executivos de mercado',
  },
  {
    id: 4,
    icon: ConnectionSVG,
    title: 'Conexões com o mercado',
    description:
      'para suporte na validação do produto e em esforços comerciais',
  },
  {
    id: 5,
    icon: EventSVG,
    title: 'Eventos e workshops',
    description: 'conteúdo atualizado e baseado nos desafios dos projetos',
  },
  {
    id: 6,
    icon: FinanceSVG,
    title: 'Apoio financeiro',
    description: 'Investimento em projetos selecionados',
  },
];
