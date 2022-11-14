import type { NextApiRequest, NextApiResponse } from 'next'

interface KnowledgeGroup {
    name: string        // for ex. "Math", "Economy", "React.JS"
}

interface KnowledgeType {
    learnStartTimestamp: number
    learnEndTimestamp: number
    name: string
    description: string
    groups: KnowledgeGroup[]

}

const ts = (d: string) => (new Date(d)).valueOf()       // d = 'month/day/year'

let data: KnowledgeType[];

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200)
    res.json(data)
}


data = [
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'React.js',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Redux',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'React Router',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Ant UI',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Next.js',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Vue.js',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Vue Router',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Vuex',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Vuetify',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Nuxt.js',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Node.js',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'npm',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Webpack',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Git',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'HTML',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'CSS3',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'SCSS',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'SASS',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Java Script',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: '',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: '',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Type Script',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'PostgreSQL',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'MySQL',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'PHP',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Python',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Django',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Django REST',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'OOP',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'REST API',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Linux',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Math Analysis',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Linear Algebra',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Topology',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Abstract Algebra',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Partial Differential Equations',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Ordinary Differential Equations',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Cryptografy',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Graph Theory',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Complex Analysis',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Functional Analysis',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Makroekonomy',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Probability Theory',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Measure theory and integration',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Shell',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'English Language',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Polish Language',
        description: '',
        groups: [],
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Laravel',
        description: '',
        groups: [],
    
    },
    {
        learnStartTimestamp: ts(''),
        learnEndTimestamp: ts(''),
        name: 'Nest.js',
        description: '',
        groups: [],
    
    }
    // {
    //     learnStartTimestamp: ts(''),
    //     learnEndTimestamp: ts(''),
    //     name: '',
    //     description: '',
    //     groups: [],
    
    // },
].map((el, i) => {
    const m = (j: number) => (j % 12)
    const y = (j: number) => parseInt(`${(j - m(j)) / 12}`)
    const d = (j: number) => `${m(j) + 1}/${(7*j) % 29 + 1}/${2015 + y(j)}`

    el.learnStartTimestamp = ts(d(3*i))
    el.learnEndTimestamp = ts(d(3*i+1 + Math.floor(Math.random()*11)))

    return el
})