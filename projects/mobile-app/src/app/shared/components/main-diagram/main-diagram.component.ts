import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {IMainDiagram, IPath} from "./main-diagram.model";
import {DIAGRAM_DATA} from "./mock";
@Component({
    selector: 'app-main-diagram',
    templateUrl: './main-diagram.component.html',
    styleUrls: ['./main-diagram.component.scss']
})
export class MainDiagramComponent implements OnInit, AfterViewInit {
    @ViewChild('diagram') private diagram: ElementRef | undefined;
    public diagramData: IMainDiagram = DIAGRAM_DATA;
    private svg: any = null;
    margin: number = 6;
    constructor() { }

    @HostListener('window:resize', ['$event'])
    public onResize(): void {
        this.drawSvg(this.diagramData);
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.drawSvg(this.diagramData);
    }

    private drawSvg(data: any): void {
        if (!!this.svg) {
            this.svg.remove();
        }
        const diagramElement = this.diagram.nativeElement;
        const diagramValuesElement = this.diagram.nativeElement.querySelector('.line');
        const size = diagramValuesElement.clientHeight;

        this.svg = d3.select(diagramElement).append('svg').attr('width', `${size + this.margin}px`).attr('height', `${size + this.margin}px`);

        this.svg.append('circle')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', size / 2)
            .attr('class', 'diagram__circle')

        this.appendPath('diagram__path_white', this.diagramData.white, size);
        this.appendPath('diagram__path_blue', this.diagramData.blue, size, true);
        this.appendPath('diagram__path_green', this.diagramData.green, size);
    }

    private appendPath(className: string, data: number[], maxSize: number, marks: boolean = false) {
        const line = d3.line()
            .x(d => d.x)
            .y(d => d.y);

        let pathData: IPath[] = []
        data.forEach((item, i) => {
            const r = item / 100 * maxSize / 2;
            pathData.push({
                x: (maxSize + this.margin) / 2 + r * Math.cos(i * Math.PI / 4 - Math.PI / 2),
                y: (maxSize + this.margin) / 2 + r * Math.sin(i * Math.PI / 4 - Math.PI / 2)
            })
        })

        this.svg.append('path').attr('d', line(pathData) + 'z').attr('class', `diagram__path ${className}`);

        if (marks) {
            this.generateMarks(className, pathData);
        }
    }

    private generateMarks(className: string, pathData: IPath[]): void {
        this.svg
            .selectAll('.dot')
            .data(pathData)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('r', 4)
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y);
    }
}
