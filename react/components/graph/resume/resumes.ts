export type ResumeTreeType = {
    name: string,
    children?: ResumeTreeType[]
}


export const convertTree = (root: ResumeTreeType, depth = 1): [cytoscape.NodeDefinition[], cytoscape.EdgeDefinition[]] => {
    const rootNode: cytoscape.NodeDefinition = {
        data: { 
            id: root.name.toLocaleLowerCase(), 
            name: root.name,
            size: 128 / (2*depth + 2),
            fontSize: 3/(Math.log(depth) + 3) + 'em',
            resume: {...root, children: undefined}
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