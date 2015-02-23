class Application {
    public static instance: Application;
    public visualizer: Visualizer;

    constructor() {
        Application.instance = this;
    }

    public start() {
        this.visualizer = new Visualizer(<HTMLCanvasElement>document.getElementById('canvas'));
        this.visualizer.init();
        this.visualizer.start();
    }
}

window.onload = () => {
    new Application().start();
}

window.onresize = () => {
    if (typeof Application.instance !== 'undefined') {
        Application.instance.visualizer.resize();
    }
}