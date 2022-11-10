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
                    name: "Big Data",
                    children: []
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


const convertTree = (root: resumeTreeType, depth = 1): [cytoscape.NodeDefinition[], cytoscape.EdgeDefinition[]] => {
    const rootNode: cytoscape.NodeDefinition = {
        data: { 
            id: root.name.toLocaleLowerCase(), 
            name: root.name,
            size: 64 / Math.pow(2, depth),
            fontSize: 10/(Math.log(depth) + 1)
        },
        position: {
            x: 300 * Math.random(),
            y: 300 * Math.random(),
        }
    }
    const nodes: cytoscape.NodeDefinition[] = [rootNode]
    const edges: cytoscape.EdgeDefinition[] = []

    if(root.children)
        root.children.forEach(chRoot => {
            const [chNodes, chEdges] = convertTree(chRoot, depth + 1)

            edges.push({
                data: {
                    id: `${root.name}${chRoot.name}`,
                    source: root.name.toLocaleLowerCase(),
                    target: chRoot.name.toLocaleLowerCase(),
                    selectable: false,
                },
                selectable: false,
            })

            edges.push(...chEdges)
            nodes.push(...chNodes)
        })

    return [nodes, edges]
}

let [nodes, edges] = convertTree(resumeTree)

export default [...nodes, ...edges]