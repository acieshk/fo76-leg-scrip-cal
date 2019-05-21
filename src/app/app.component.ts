import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fo76-legendary-scrip-calculator';
  scrips:number = 150;
  result = []
  data:any = [
    {
      name: 'legendary armor 1',
      scrip: 3
    },
    {
      name: 'legendary armor 2',
      scrip: 9
    },
    {
      name: 'legendary armor 3',
      scrip: 24
    },
    {
      name: 'legendary weapon 1',
      scrip: 5
    },
    {
      name: 'legendary weapon 2',
      scrip: 15
    },
    {
      name: 'legendary weapon 3',
      scrip: 40
    },
  ]
  ngOnInit() {
    this.change()
  }
  change() {
    console.log('change')
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
  // calc(scrips:number, input:any[], data:any[]):any[] {
  //   var obj = data[0]
  //   var arr = []
  //   for(let i = 1; obj.scrip * i <= scrips;i++) {
  //     let t = {
  //       times: t,
  //       obj: obj
  //     }
  //     arr.push(t)
  //   }
  //   return arr;
  // }

}
