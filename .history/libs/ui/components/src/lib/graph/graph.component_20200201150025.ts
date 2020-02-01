import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const data = {
  results: [
    {
      name: 'speed',
      series: [
        {
          name: '1',
          value: 20
        },
        {
          name: '5',
          value: 21
        },
        {
          name: '10',
          value: 10
        },
        {
          name: '15',
          value: 20
        },
        {
          name: '20',
          value: 21
        },
        {
          name: '25',
          value: 10
        },
        {
          name: '30',
          value: 30
        },
        {
          name: '35',
          value: 20
        },
        {
          name: '40',
          value: 21
        },
        {
          name: '45',
          value: 10
        }
      ]
    },

    {
      name: 'height',
      series: [
        {
          name: '1',
          value: 15
        },
        {
          name: '5',
          value: 30
        },
        {
          name: '10',
          value: 15
        },
        {
          name: '15',
          value: 13
        },
        {
          name: '20',
          value: 21
        },
        {
          name: '25',
          value: 12
        },
        {
          name: '30',
          value: 5
        },
        {
          name: '35',
          value: 16
        },
        {
          name: '40',
          value: 20
        },
        {
          name: '45',
          value: 9
        }
      ]
    }
  ]
};

@Component({
  selector: 'sap-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  results: any[];
  view: any[] = [350, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'speed / height';
  yAxisLabel: string = 'time';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    this.results = data.results;
    //Object.assign(this, { data });
  }

  ngOnInit() {}

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
