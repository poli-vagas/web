import { Benefits, NameId } from '~/services/vacancies/types'
import { capitalize } from '~/utils/string'

export const type = (t: string) => {
  switch (t) {
    case 'Trainee':
      return 'Trainee'
    case 'Internship':
      return 'Estágio'
    case 'FullTime':
      return 'Emprego'
    default:
      return ''
  }
}

export const workplace = (t: string) => {
  switch (t) {
    case 'Remote':
      return 'Remoto'
    case 'Office':
      return 'Presencial'
    case 'Hybrid':
      return 'Híbrido'
    default:
      return ''
  }
}

export const englishLevel = (t: string) => {
  switch (t) {
    case 'Beginner':
      return 'Básico'
    case 'Intermediate':
      return 'Intermediário'
    case 'Advanced':
      return 'Avançado'
    default:
      return ''
  }
}

export const benefits = (b?: Benefits): string => {
  const benefitList: string[] = []

  if (b?.hasFoodVoucher) {
    benefitList.push('Vale alimentação')
  }

  if (b?.hasTransportVoucher) {
    benefitList.push('Vale transporte')
  }

  if (b?.hasHealthInsurance) {
    benefitList.push('Plano de saúde')
  }

  if (b?.hasLifeInsurance) {
    benefitList.push('Seguro de vida')
  }

  if (b?.others) {
    benefitList.push(b?.others)
  }

  if (benefitList.length === 0) {
    return ''
  }

  return benefitList.join(', ')
}

export const parseBenefits = (
  benefitsArray: string[]
): Omit<Benefits, 'others'> => {
  const benefits: Omit<Benefits, 'others'> = {
    hasFoodVoucher: null,
    hasTransportVoucher: null,
    hasHealthInsurance: null,
    hasLifeInsurance: null
  }

  if (benefitsArray.includes('Vale alimentação')) {
    benefits.hasFoodVoucher = true
  }

  if (benefitsArray.includes('Vale transporte')) {
    benefits.hasTransportVoucher = true
  }

  if (benefitsArray.includes('Plano de saúde')) {
    benefits.hasHealthInsurance = true
  }

  if (benefitsArray.includes('Seguro de vida')) {
    benefits.hasLifeInsurance = true
  }

  return benefits
}

export const courses = (c?: NameId[]): string => {
  const coursesList = c?.map?.((item) => capitalize(item.name)) ?? []

  return coursesList.join(', ')
}

export const SALARY_LIST = [
  { value: '1', label: 'R$ 0,00 - R$ 1000,00' },
  { value: '2', label: 'R$ 1000,01 - R$ 2000,00' },
  { value: '3', label: 'R$ 2000,01 - R$ 3000,00' },
  { value: '4', label: 'R$ 3000,01 - R$ 4000,00' },
  { value: '5', label: 'R$ 4000,01 - R$ 5000,00' }
]

export const HOURS_PER_DAY_LIST = [
  { value: 2, label: '2 horas' },
  { value: 4, label: '4 horas' },
  { value: 6, label: '6 horas' },
  { value: 8, label: '8 horas' }
]

export const TYPE_LIST = [
  { value: 'Trainee', label: 'Trainee' },
  { value: 'Internship', label: 'Estágio' },
  { value: 'FullTime', label: 'Emprego' }
]

export const AREA_LIST = [
  { value: 'Engenharia', label: 'Engenharia' },
  { value: 'Operações Offshore', label: 'Operações Offshore' },
  { value: 'Tecnologia Da Informação', label: 'Tecnologia Da Informação' },
  { value: 'Data Science', label: 'Data Science' },
  { value: 'Qualidade', label: 'Qualidade' },
  { value: 'Energia', label: 'Energia' },
  { value: 'Análise E Operações', label: 'Análise E Operações' },
  { value: 'Manutenção', label: 'Manutenção' },
  { value: 'Financeiro', label: 'Financeiro' },
  { value: 'Petróleo E Gás', label: 'Petróleo E Gás' },
  { value: 'Controle Operacional', label: 'Controle Operacional' },
  { value: 'Gestão De Projetos', label: 'Gestão De Projetos' },
  { value: 'Diversas Áreas', label: 'Diversas Áreas' },
  { value: 'Comercial', label: 'Comercial' },
  { value: 'Consultoria', label: 'Consultoria' },
  { value: 'Modelagem Matemática', label: 'Modelagem Matemática' },
  { value: 'Logística', label: 'Logística' },
  { value: 'Atração E Desenvolvimento', label: 'Atração E Desenvolvimento' },
  { value: 'Equity Research', label: 'Equity Research' },
  {
    value: 'Markets, Finance E Corporate Banking',
    label: 'Markets, Finance E Corporate Banking'
  },
  { value: 'Meio Ambiente', label: 'Meio Ambiente' },
  {
    value: 'Controle E Back Office De Fundos De Investimentos',
    label: 'Controle E Back Office De Fundos De Investimentos'
  },
  { value: 'Risco E Controle', label: 'Risco E Controle' },
  { value: 'Inteligência De Mercado', label: 'Inteligência De Mercado' },
  { value: 'Planejamento', label: 'Planejamento' },
  { value: 'Administrativa', label: 'Administrativa' },
  {
    value: 'Operações / Supply Chain / Comercial / Suprimentos',
    label: 'Operações / Supply Chain / Comercial / Suprimentos'
  },
  { value: 'Marketing', label: 'Marketing' },
  {
    value: 'Recursos Humanos (gente E Gestão)',
    label: 'Recursos Humanos (gente E Gestão)'
  },
  { value: 'Controle E Risco', label: 'Controle E Risco' },
  { value: 'Estudos De Consultoria', label: 'Estudos De Consultoria' },
  {
    value: 'Planejamento E Controle De Obras',
    label: 'Planejamento E Controle De Obras'
  },
  {
    value:
      'Planejamento E Operações / Customer Success / Sucesso Do Cliente / Product Designer',
    label:
      'Planejamento E Operações / Customer Success / Sucesso Do Cliente / Product Designer'
  },
  { value: 'Controle Fiscal', label: 'Controle Fiscal' },
  { value: 'Óleo E Gás', label: 'Óleo E Gás' },
  { value: 'Sustentablidade', label: 'Sustentablidade' },
  { value: 'Corporate Bank', label: 'Corporate Bank' },
  { value: 'Recursos Hídricos', label: 'Recursos Hídricos' },
  { value: 'Engenharia De Sistemas', label: 'Engenharia De Sistemas' },
  { value: 'Vendas', label: 'Vendas' },
  { value: 'Automação', label: 'Automação' },
  { value: 'Desenvolvimento De Produto', label: 'Desenvolvimento De Produto' },
  {
    value: 'Gestão De Fundos De Exclusivos',
    label: 'Gestão De Fundos De Exclusivos'
  },
  {
    value: 'Vagas Nas Áreas De Consultoria, Desenvolvimento E Data Science',
    label: 'Vagas Nas Áreas De Consultoria, Desenvolvimento E Data Science'
  },
  {
    value: 'Tráfego Pago, Financeiro Ou Bi (análise De Dados)',
    label: 'Tráfego Pago, Financeiro Ou Bi (análise De Dados)'
  },
  { value: 'Patrimônio', label: 'Patrimônio' },
  { value: 'Procurement', label: 'Procurement' },
  {
    value: 'Geologia, Mineração E Transformação Mineral',
    label: 'Geologia, Mineração E Transformação Mineral'
  },
  { value: 'Saúde', label: 'Saúde' },
  { value: 'Educacional', label: 'Educacional' },
  { value: 'Auditoria De Tecnologia', label: 'Auditoria De Tecnologia' },
  { value: 'Front-end', label: 'Front-end' },
  { value: 'Engenharia De Dados', label: 'Engenharia De Dados' },
  { value: 'Dagi/poli', label: 'Dagi/poli' },
  { value: 'Agrimensura', label: 'Agrimensura' },
  {
    value: 'Engenharia Naval E Offshore',
    label: 'Engenharia Naval E Offshore'
  },
  { value: 'Instrumentação', label: 'Instrumentação' },
  { value: 'Financeiro E Ri', label: 'Financeiro E Ri' },
  { value: 'Infraestrutura', label: 'Infraestrutura' },
  { value: 'Operações Onshore', label: 'Operações Onshore' },
  { value: 'Análise De Empresas', label: 'Análise De Empresas' },
  { value: 'Segurança Do Trabalho', label: 'Segurança Do Trabalho' },
  { value: 'Controles Internos', label: 'Controles Internos' },
  { value: 'Diversos', label: 'Diversos' },
  {
    value:
      'Consultoria E Gestão De Negócios / Tecnologia E Desenvolvimento / Data Science',
    label:
      'Consultoria E Gestão De Negócios / Tecnologia E Desenvolvimento / Data Science'
  },
  { value: 'Área De Projetos', label: 'Área De Projetos' },
  { value: 'Área De Pessoas', label: 'Área De Pessoas' },
  { value: 'Planejamento E Operações', label: 'Planejamento E Operações' },
  { value: 'Transportes', label: 'Transportes' },
  { value: 'Venture Capital', label: 'Venture Capital' },
  {
    value: 'Fiinanceiro E Administrativo',
    label: 'Fiinanceiro E Administrativo'
  },
  {
    value: 'Gerência Geral De Reservatório',
    label: 'Gerência Geral De Reservatório'
  },
  { value: 'Operações Internas', label: 'Operações Internas' },
  { value: 'Pesquisa E Desenvolvimento', label: 'Pesquisa E Desenvolvimento' },
  {
    value: 'Desenvolvimento De Software',
    label: 'Desenvolvimento De Software'
  },
  { value: 'Gerencial', label: 'Gerencial' },
  {
    value: 'Administrativo, Produção E Vendas.',
    label: 'Administrativo, Produção E Vendas.'
  },
  {
    value: 'Project Control Engineer - All Interested Applicants',
    label: 'Project Control Engineer - All Interested Applicants'
  },
  { value: 'Atendimento Ao Cliente', label: 'Atendimento Ao Cliente' },
  {
    value:
      'Frota; Produto; Financeiro; Relações Com Investidores, Estratégias E Esg; Tecnologia Da Informação.',
    label:
      'Frota; Produto; Financeiro; Relações Com Investidores, Estratégias E Esg; Tecnologia Da Informação.'
  },
  { value: 'Macroeconomia', label: 'Macroeconomia' },
  {
    value: 'Desenvolvimento De Sistemas',
    label: 'Desenvolvimento De Sistemas'
  },
  {
    value: 'Estágio Em Segurança Da Informação',
    label: 'Estágio Em Segurança Da Informação'
  },
  { value: 'Orçamentos / Obra', label: 'Orçamentos / Obra' }
]

export const WORKPLACE_LIST = [
  { value: 'Remote', label: 'Remoto' },
  { value: 'Office', label: 'Presencial' },
  { value: 'Hybrid', label: 'Híbrido' }
]

export const ENGLISH_LEVEL_LIST = [
  { value: 'Beginner', label: 'Básico' },
  { value: 'Intermediate', label: 'Intermediário' },
  { value: 'Advanced', label: 'Avançado' }
]

export const BENEFITS_LIST = [
  { value: 'Vale alimentação', label: 'Vale alimentação' },
  { value: 'Vale transporte', label: 'Vale transporte' },
  { value: 'Plano de saúde', label: 'Plano de saúde' },
  { value: 'Seguro de vida', label: 'Seguro de vida' }
]
