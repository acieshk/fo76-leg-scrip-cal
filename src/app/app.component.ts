import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fo76-legendary-scrip-calculator';
  maxScrip:number = 150;
  scrips:number = 150;
  result = []
  hideResult = true;
  displayedColumns:string[] = ['name', 'scrip']
  itemColor = [
    'brown',
    'orange',
    'violet'
  ]
  data:any = [
    {
      name: 'Legendary armor',
      type: 'armor',
      stars: 1,
      scrip: 3
    },
    {
      name: 'Legendary armor',
      type: 'armor',
      stars: 2,
      scrip: 9
    },
    {
      name: 'Legendary armor',
      type: 'armor',
      stars: 3,
      scrip: 24
    },
    {
      name: 'Legendary weapon',
      type: 'weapon',
      stars: 1,
      scrip: 5
    },
    {
      name: 'Legendary weapon',
      type: 'weapon',
      stars: 2,
      scrip: 15
    },
    {
      name: 'Legendary weapon',
      type: 'weapon',
      stars: 3,
      scrip: 40
    },
  ]
  ngOnInit() {
    this.change().then(()=>{
      this.hideResult = false;
    })
  }
  detechScripChange() {
    if (this.scrips > this.maxScrip) {
      this.scrips = this.maxScrip;
    } else if (this.scrips < 0) {
      this.scrips = 0;
    }
    this.hideResult = true
    this.change().then(()=>{
      this.hideResult = false;
    })
  }
  async change() {
    this.hideResult = true;

    let s = this.scrips
    this.result = [];
    for (let a = 0; this.data[0].scrip * a <= s;a++) {
      let aArr = [a,0,0,0,0,0]
      let aScips = s - this.data[0].scrip * a;
      if (aScips == 0) this.result.push(aArr);
      else {
        for (let b = 0; this.data[1].scrip * b <= aScips; b++) {
          let bArr = [a,b,0,0,0,0]
          let bScrips = aScips - this.data[1].scrip * b
          if (bScrips == 0) this.result.push(bArr); else {
            for (let c = 0; this.data[2].scrip * c <= bScrips;c++) {
              let cArr = [a,b,c,0,0,0]
              let cScrips = bScrips - this.data[2].scrip * c
              if (cScrips == 0) this.result.push(cArr); else {
                for (let d = 0; this.data[3].scrip * d <= cScrips;d++) {
                  let dArr = [a,b,c,d,0,0]
                  let dScrips = cScrips - this.data[3].scrip * d
                  if (dScrips == 0) this.result.push(dArr); else {
                    for (let e = 0; this.data[4].scrip * e <= dScrips;e++) {
                      let eArr = [a,b,c,d,e,0]
                      let eScrips = dScrips - this.data[4].scrip * e
                      if (eScrips == 0) this.result.push(eArr); else {
                        for (let f = 0; this.data[5].scrip * f <= eScrips; f++) {
                          let fArr = [a,b,c,d,e,f]
                          let fScrips = eScrips - this.data[5].scrip * f
                          if (fScrips == 0) this.result.push(fArr);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    this.result.sort((a,b)=> {
      return this.sum(a) - this.sum(b);
    })
  }
  sum(arr:number[]):number {
    let sum = 0
    arr.forEach(a=> {
      sum+=a
    })
    return sum;
  }
}
