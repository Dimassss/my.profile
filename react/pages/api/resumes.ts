import { NextApiRequest, NextApiResponse } from "next"

type resumeTreeType = {
    name: string,
    children?: resumeTreeType[]
}

const resumeTree: resumeTreeType = {
    name: "Full CV",
    children: [
        {
            name: "Math",
            children: [
                {name: "Theory"},
                {name: "Economy"}
            ]
        },
        {
            name: "IT",
            children: [
                {
                    name: "Administration",
                    children: [
                        {
                            name: "Linux"
                        },
                        {
                            name: "Windows"
                        }
                    ]
                },
                {
                    name: "Big Data"
                },
                {
                    name: "Frontend",
                    children: [
                        {
                            name: "Vue"
                        },
                        {
                            name: "React"
                        }
                    ]
                },
                {
                    name: "Backend",
                    children: [
                        {
                            name: "Node.JS"
                        },
                        {
                            name: "Python"
                        },
                        {
                            name: "PHP"
                        }
                    ]
                }
            ]
        }
    ]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200)
    res.json(resumeTree)
}