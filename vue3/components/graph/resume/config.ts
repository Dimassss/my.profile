import cytoscape from "cytoscape"

export default {
    container: undefined,
    userZoomingEnabled: false,
    userPanningEnabled: false,
    boxSelectionEnabled: false,
    //autoungrabify: true,
    //autounselectify: true,
    autolock: true,
    zoom: 1,
    pan: { x: 0, y: 0 },

    style: [ // the stylesheet for the graph
        {
        selector: 'node',
        style: {
            'color': "#aaa",
            'label': 'data(name)',
            'width': 'data(size)',
            'height': 'data(size)',
            'font-size': 'data(fontSize)',
            'overlay-padding': 0,
            'overlay-opacity': 0,
            'background-color': (d: any) => {
                return d.data().resume.url ? "#d71" : '#919'
            },
            'border': '2px solid black'
        }
        },

        {
        selector: 'edge',
        style: {
            'width': 1,
            'line-color': '#333',
            'target-arrow-color': '#555',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 0.4,
            'curve-style': 'bezier',
            'overlay-padding': 0,
            'overlay-opacity': 0
        }
        }
    ],

    layout: {
        name: 'grid',
        rows: 1
    }
} as cytoscape.CytoscapeOptions