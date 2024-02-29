import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend, ChartComponent, ApexTitleSubtitle, ApexGrid } from 'ng-apexcharts';
import { StatistiqueService } from '../../service/statistique/statistique.service';

export type ChartTempsMoyen = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

export type ChartNombreReservation = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};
export type ChartCA = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
type ApexXAxis_type = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartBenefice = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis_type;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrl: './statistique.component.css'
})
export class StatistiqueComponent implements OnInit{
  public charttempsmoyen: Partial<ChartTempsMoyen>;
  public chartnbreservation: Partial<ChartNombreReservation>;
  public chartChiffreAffaire: Partial<ChartCA>;
  public chartBenefice: Partial<ChartBenefice>;
  statistiques: any;
  reservations: any;
  benefice: any;
  chiffre_affaires: any;
  moisSelectionne: string | null = null; 
  mois_chiffre_affaire: string | null = null;
  public mois: string[] = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  //filtre par année
  annees: number[] = [];
  selectedYear!: number;
  selectedYear_reservation!:number;
  selectedYear_chiffreaffaire!:number;
  selectedYear_benefice!:number;

  //filtre par employé
  selectedEmployee: any
  employes:any


  constructor(private statistiqueService: StatistiqueService, private cdr: ChangeDetectorRef) {
    this.charttempsmoyen = {
      series: [
      
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Avr",
          "Mai",
          "Ju",
          "Juill",
          "Août",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yaxis: {
        title: {
          text: "heures"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "" + val + " heures";
          }
        }
      }
    };

    this.chartnbreservation = {
      series: [
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Janvier",
          "Fevrier",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre"
        ]
      }
    };
    this.chartChiffreAffaire = {
      series: [
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + " MGA";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Avr",
          "Mai",
          "Juin",
          "Juil",
          "Août",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "bottom",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          // stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + " MGA";
          }
        }
      }
    };
    this.chartBenefice = {
      series: [
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["Janvier"],
          ["Février"],
          ["Mars"],
          ["Avril"],
          ["Mai"],
          ["Juin"],
          ["Juillet"],
          ["Août"],
          ["Septembre"],
          ["Octobre"],
          ["Novembre"],
          ["Décembre"],
        ],
        labels: {
          style: {
            fontSize: "12px"
          }
        }
      },
      yaxis: {
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        labels: {
          show: true,
          formatter: function(val) {
            return val + " MGA";
          }
        }
      }
    };

   
  }

  ngOnInit() {
    this.annees = [2021, 2022, 2023,2024];
    this.getListeEmploye();

    this.selectedYear = this.annees[3];
    this.selectedYear_reservation = this.annees[3];
    this.selectedYear_chiffreaffaire= this.annees[3];
    this.selectedYear_benefice= this.annees[3];
    this.selectedYear = this.annees[3];
    this.selectedEmployee = undefined;
    this.statistiqueTempsMoyen();
    this.statistiqueReservation();
    
    this.statistiqueChiffreAffaire();
    this.statistiqueBenefice();
    
  }
  afficherDetails(mois: string) {
    this.moisSelectionne = mois;
  }
  afficherDetailsCA(mois: string) {
    this.mois_chiffre_affaire = mois;
  }
  filtrerParAnneeReservation(){
    this.statistiqueReservation()

  }
  filtrerParAnneeChiffreAffaire(){
    this.statistiqueChiffreAffaire()
  }
  filtrerParAnneeBenefice(){
    this.statistiqueBenefice();
  }
  filtrerParAnneeTempsMoyen() {
    this.statistiqueTempsMoyen()
  }
  filtrerParEmploye() { 
    this.statistiqueTempsMoyen()
  }
  getListeEmploye(){
    this.statistiqueService.getListeEmploye().subscribe(data=>{
      this.employes=data
    })
  }
  statistiqueTempsMoyen(){
    this.statistiqueService.getStatTempsMoyenne(this.selectedYear,this.selectedEmployee).subscribe(data => {
      this.statistiques = data;
      console.log(data);
      this.charttempsmoyen.series=
      data.map((item: any) => {
        return {
          name: item.nomEmploye,
          data: item.tempsMoyenParMois.map(Number)
        };
      })
    });
  }
  statistiqueReservation(){
    this.statistiqueService.getStatReservation(this.selectedYear_reservation).subscribe(data => {
      this.reservations = data;
      this.chartnbreservation.series = [
        {
          name: "Réservations",
          data: Object.keys(data).map(mois => data[mois].total)
        }
      ];
    });
  }
  statistiqueChiffreAffaire(){
    this.statistiqueService.getStatCA(this.selectedYear_chiffreaffaire).subscribe(data => {
      this.chiffre_affaires = data;
      this.chartChiffreAffaire.series = [
        {
          name: "Chiffre d'affaires",
          data: Object.keys(data).map(mois => data[mois].total)
        }
      ];
    });
  }
  statistiqueBenefice(){
    this.statistiqueService.getStatBenefice(this.selectedYear_benefice).subscribe((data: Record<string, number>) => {
      this.benefice = data;
    
      const colors = Object.values(data).map((value: number) => (value < 0 ? "#FF0000" : "#00E396"));
    
      this.chartBenefice.series = [
        {
          name: "Benefice",
          data: Object.values(data)
        }
      ];
    
      this.chartBenefice.colors = colors;
    });
  }
}
