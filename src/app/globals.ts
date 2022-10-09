import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
  firstName = 'Mohammed';
  lastName = 'Rifas S';
  address = 'Bangalore, Karnataka, India';
  email = 'mohd.rifas.s [AT] GoogleMAIL [dot] COM';

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms))
      .then(()=>{});
  }
}
