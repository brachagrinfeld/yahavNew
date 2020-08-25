
import { Component, ViewChild } from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators, FormArray} from '@angular/forms';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
      fontFamily: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;

};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;



  constructor(private fb: FormBuilder,
    ) {
    this.chartOptions = {
      series: [
        {
          name: "דרוג שייכות",
          data: [0,0,0,0,0,0]
        }
      ],
      chart: {
        height: 400,
        width: 400,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: true
      },
      legend: {
        show: false
      },
      grid: {
        show: true
      },
      yaxis: {
        min: 0,
        max: 10
      },
      xaxis: {
        categories: [
          "נוכחות",
          "לימודים",
          "אמון",
          "התנהגות",
          "חברה",
          "הורים",
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#26a69a",
              "#D10CE8",
              "#546E7A"
            ],
            fontSize: "14px",
            fontFamily: 'Times New Roman'

          }
        }
      }
    };
  }
  form: FormGroup;
  personForm: FormGroup;

  ngOnInit() {

    this.form = this.fb.group({
      presence: [5],
      study: [2],
      trust: [3],
      emotionalState: [6],
      socialAbility:[2],
      homeSchool:[8]

  })

  this.personForm = this.fb.group({
    name: [""],
    class: [""],
    teacher: [""],

})

  this.form.valueChanges
      .subscribe((value: []) => {
        console.log('11111111111111111111', value);
        this.chartOptions.series = [{
          data: Object.values(value)
        }];
         
        // this.chartOptions.series[0].data = Object.values(value);
      })
}

}

