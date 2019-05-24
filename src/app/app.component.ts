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
  result:any[] = []
  hideResult:boolean = true;
  haveColumn:boolean = false;
  displayedColumns:string[] = ['name', 'scrip', 'ihave']
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
      scrip: 3,
      have: 0
    },
    {
      name: 'Legendary armor',
      type: 'armor',
      stars: 2,
      scrip: 9,
      have: 0
    },
    {
      name: 'Legendary armor',
      type: 'armor',
      stars: 3,
      scrip: 24,
      have: 0
    },
    {
      name: 'Legendary weapon',
      type: 'weapon',
      stars: 1,
      scrip: 5,
      have: 0
    },
    {
      name: 'Legendary weapon',
      type: 'weapon',
      stars: 2,
      scrip: 15,
      have: 0
    },
    {
      name: 'Legendary weapon',
      type: 'weapon',
      stars: 3,
      scrip: 40,
      have: 0
    },
  ]
  ngOnInit() {
    // this.change().then(()=>{
    //   this.hideResult = false;
    // })
  }
  detechScripChange() {
    if (this.scrips > this.maxScrip) {
      this.scrips = this.maxScrip;
    } else if (this.scrips < 0) {
      this.scrips = 0;
    }
    this.hideResult = true
    this.result = []
    console.time('performance')
    this.change().then(r=>{
      console.timeEnd('performance')
      // console.log(result)
      this.result = r
      this.hideResult = false;
    })
  }
  async change():Promise<any[]> {
    return new Promise((resolve, reject)=>{
      let s = this.scrips
      let result = []
      for (let a = 0; this.data[0].scrip * a <= s;a++) {
        let aArr = [a,0,0,0,0,0]
        let aScrips = s - this.data[0].scrip * a;
        if (aScrips == 0) result.push(aArr);
        else {
          for (let b = 0; this.data[1].scrip * b <= aScrips; b++) {
            let bArr = [a,b,0,0,0,0]
            let bScrips = aScrips - this.data[1].scrip * b
            if (bScrips == 0) result.push(bArr); else {
              for (let c = 0; this.data[2].scrip * c <= bScrips;c++) {
                let cArr = [a,b,c,0,0,0]
                let cScrips = bScrips - this.data[2].scrip * c
                if (cScrips == 0) result.push(cArr); else {
                  for (let d = 0; this.data[3].scrip * d <= cScrips;d++) {
                    let dArr = [a,b,c,d,0,0]
                    let dScrips = cScrips - this.data[3].scrip * d
                    if (dScrips == 0) result.push(dArr); else {
                      for (let e = 0; this.data[4].scrip * e <= dScrips;e++) {
                        let eArr = [a,b,c,d,e,0]
                        let eScrips = dScrips - this.data[4].scrip * e
                        if (eScrips == 0) result.push(eArr); else {
                          for (let f = 0; this.data[5].scrip * f <= eScrips; f++) {
                            let fArr = [a,b,c,d,e,f]
                            let fScrips = eScrips - this.data[5].scrip * f
                            if (fScrips == 0) result.push(fArr);
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
      result.sort((a,b)=> {
        return this.sum(a) - this.sum(b);
      })
      resolve(result)
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
