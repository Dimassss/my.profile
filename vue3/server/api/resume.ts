type resumeTreeType = {
    name: string,
    url? : string,
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
                    url: "https://github.com/Dimassss/CV/raw/main/resume.pdf",
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

export default defineEventHandler(async (event) => {
    return resumeTree
})