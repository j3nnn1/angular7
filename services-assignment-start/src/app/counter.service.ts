export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToInactiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('activeToInactiveCounter' + this.activeToInactiveCounter);
  }
  incrementInActiveToActive() {
    this.inactiveToInactiveCounter++;
    console.log('inactiveToInactiveCounter' +this.inactiveToInactiveCounter);
  }
}
