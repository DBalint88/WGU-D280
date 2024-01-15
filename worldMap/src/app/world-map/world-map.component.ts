import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    let paths = Array.from(document.getElementsByTagName("path"));

    paths.forEach((path) => {
      path.addEventListener("click", async () => {
        this.fetchInfo(path.id)
      })
    });
  }
  
  async fetchInfo (countryCode: string) {
    console.log(countryCode)
    let source: string = "https://api.worldbank.org/V2/country/" + countryCode + "?format=json";
    let response = await fetch(source);
    let fullData: any = await response.json();
    let info: any = fullData[1];
    this.updateInfo(info)
  }
  
  updateInfo(info: any) {
    const name = document.getElementById("name")
    const capital = document.getElementById("capital")
    const region = document.getElementById("region")
    const income = document.getElementById("income")
    const latitude = document.getElementById("latitude")
    const longitude = document.getElementById("longitude")

    if (name && capital && region && income && latitude && longitude) {
      name.innerText = info[0].name;
      capital.innerText = info[0].capitalCity;
      region.innerText = info[0].region.value;
      income.innerText = info[0].incomeLevel.value;
      latitude.innerText = info[0].latitude
      longitude.innerText = info[0].longitude
    }
  }
}





  



  
function updateInfo(info: any, Object: ObjectConstructor) {
  throw new Error('Function not implemented.');
}

