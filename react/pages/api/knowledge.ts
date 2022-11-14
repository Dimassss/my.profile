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
        learnStartTimestamp: ts('7/1/2019'),
        learnEndTimestamp: ts('11/25/2019'),
        name: 'React.js',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('8/20/2019'),
        learnEndTimestamp: ts('9/25/2019'),
        name: 'Redux',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('8/20/2019'),
        learnEndTimestamp: ts('8/30/2019'),
        name: 'React Router',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('2/1/2021'),
        learnEndTimestamp: ts('3/1/2021'),
        name: 'Ant UI',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('7/5/2022'),
        learnEndTimestamp: ts('11/15/2022'),
        name: 'Next.js',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('9/10/2020'),
        learnEndTimestamp: ts('2/5/2021'),
        name: 'Vue.js',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('9/10/2020'),
        learnEndTimestamp: ts('9/30/2020'),
        name: 'Vue Router',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('9/10/2020'),
        learnEndTimestamp: ts('10/5/2020'),
        name: 'Vuex',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('9/10/2020'),
        learnEndTimestamp: ts('9/30/2020'),
        name: 'Vuetify',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('9/10/2020'),
        learnEndTimestamp: ts('2/5/2021'),
        name: 'Nuxt.js',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('3/16/2021'),
        learnEndTimestamp: ts('4/16/2021'),
        name: 'Node.js',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('10/1/2017'),
        learnEndTimestamp: ts('10/20/2017'),
        name: 'npm',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('6/1/2018'),
        learnEndTimestamp: ts('7/1/2018'),
        name: 'Webpack',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('8/15/2016'),
        learnEndTimestamp: ts('10/15/2016'),
        name: 'Git',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('5/1/2015'),
        learnEndTimestamp: ts('7/1/2015'),
        name: 'HTML',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('5/1/2015'),
        learnEndTimestamp: ts('9/1/2015'),
        name: 'CSS3',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('6/10/2018'),
        learnEndTimestamp: ts('6/11/2018'),
        name: 'SCSS',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('6/10/2018'),
        learnEndTimestamp: ts('6/11/2018'),
        name: 'SASS',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('3/4/2017'),
        learnEndTimestamp: ts('12/4/2017'),
        name: 'Java Script',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('12/25/2019'),
        learnEndTimestamp: ts('1/4/2020'),
        name: 'Type Script',
        description: '',
        groups: [{name:'frontend'}],
    
    },
    {
        learnStartTimestamp: ts('4/2/2019'),
        learnEndTimestamp: ts('4/10/2019'),
        name: 'PostgreSQL',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('7/1/2017'),
        learnEndTimestamp: ts('9/1/2017'),
        name: 'MySQL',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('5/1/2017'),
        learnEndTimestamp: ts('9/1/2017'),
        name: 'PHP',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('1/5/2018'),
        learnEndTimestamp: ts('3/25/2018'),
        name: 'Python',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('6/5/2022'),
        learnEndTimestamp: ts('11/15/2022'),
        name: 'Django',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('8/5/2022'),
        learnEndTimestamp: ts('11/1/2022'),
        name: 'Django REST',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('8/15/2016'),
        learnEndTimestamp: ts('5/15/2017'),
        name: 'Java',
        description: '',
        groups: [{name:'backend'}],
    },
    {
        learnStartTimestamp: ts('9/10/2016'),
        learnEndTimestamp: ts('12/15/2016'),
        name: 'OOP',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('3/3/2017'),
        learnEndTimestamp: ts('4/3/2017'),
        name: 'REST API',
        description: '',
        groups: [{name:'backend'}],
    
    },
    {
        learnStartTimestamp: ts('2/20/2022'),
        learnEndTimestamp: ts('10/20/2022'),
        name: 'Linux',
        description: '',
        groups: [{name:'administration'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2019'),
        learnEndTimestamp: ts('8/20/2021'),
        name: 'Math Analysis',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2019'),
        learnEndTimestamp: ts('2/25/2021'),
        name: 'Linear Algebra',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('3/1/2020'),
        learnEndTimestamp: ts('2/25/2021'),
        name: 'Topology',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('3/1/2020'),
        learnEndTimestamp: ts('2/25/2021'),
        name: 'Abstract Algebra',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('3/1/2022'),
        learnEndTimestamp: ts('8/20/2022'),
        name: 'Partial Differential Equations',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2021'),
        learnEndTimestamp: ts('2/25/2022'),
        name: 'Ordinary Differential Equations',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('3/1/2022'),
        learnEndTimestamp: ts('8/20/2022'),
        name: 'Cryptografy',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('3/1/2022'),
        learnEndTimestamp: ts('8/20/2022'),
        name: 'Graph Theory',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2021'),
        learnEndTimestamp: ts('2/25/2022'),
        name: 'Complex Analysis',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2021'),
        learnEndTimestamp: ts('2/25/2022'),
        name: 'Functional Analysis',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('3/1/2021'),
        learnEndTimestamp: ts('8/20/2021'),
        name: 'Makroekonomy',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('3/1/2021'),
        learnEndTimestamp: ts('8/20/2021'),
        name: 'Probability Theory',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2020'),
        learnEndTimestamp: ts('2/25/2021'),
        name: 'Measure theory and integration',
        description: '',
        groups: [{name:'math'}],
    
    },
    {
        learnStartTimestamp: ts('2/20/2022'),
        learnEndTimestamp: ts('3/20/2022'),
        name: 'Shell',
        description: '',
        groups: [{name:'administration'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2013'),
        learnEndTimestamp: ts('10/1/2018'),
        name: 'English Language',
        description: '',
        groups: [{name:'general'}],
    
    },
    {
        learnStartTimestamp: ts('9/1/2018'),
        learnEndTimestamp: ts('6/30/2019'),
        name: 'Polish Language',
        description: '',
        groups: [{name:'general'}],
    },
    {
        learnStartTimestamp: ts('10/20/2019'),
        learnEndTimestamp: ts('5/4/2020'),
        name: 'Laravel',
        description: '',
        groups: [{name:'backend'}],
    },
    {
        learnStartTimestamp: ts('3/25/2021'),
        learnEndTimestamp: ts('5/16/2021'),
        name: 'Nest.js',
        description: '',
        groups: [{name:'backend'}],
    },
    {
        learnStartTimestamp: ts('10/1/2017'),
        learnEndTimestamp: ts('10/10/2017'),
        name: 'Composer',
        description: '',
        groups: [{name:'backend'}],
    },
    {
        learnStartTimestamp: ts('10/1/2017'),
        learnEndTimestamp: ts('11/10/2017'),
        name: 'Fat Free',
        description: '',
        groups: [{name:'backend'}],
    },
    {
        learnStartTimestamp: ts('9/1/2021'),
        learnEndTimestamp: ts('2/25/2022'),
        name: 'Quantitative methods and applications',
        description: '',
        groups: [{name:'big_data'}],
    
    },
].filter(el => !isNaN(el.learnEndTimestamp))