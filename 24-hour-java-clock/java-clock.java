class Clock {
  private int hours = 0;
  private int minutes = 0;
  private int seconds = 0;

  public void setTime(int hours, int minutes, int seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  public String getTime(){
    String hourDisplay = hours < 10 ? "0" + Integer.toString(hours) : Integer.toString(hours);
    String minuteDisplay = minutes < 10 ? "0" + Integer.toString(minutes) : Integer.toString(minutes);
    String secondDisplay = seconds < 10 ? "0" + Integer.toString(seconds) : Integer.toString(seconds);
    return hourDisplay + ":" + minuteDisplay + ":" + secondDisplay;
  }

  public void tick(){
    if(seconds >= 59){
      seconds = 0;
      if(minutes >= 59){
        minutes = 0;
        if(hours >= 12){
          hours = 1;
        } else {
          hours++;
        }
      } else {
        minutes++;
      }
    } else {
      seconds++;
    }
  }
}

class my24HrClock {
  public static void main(String[] args){
    Clock clock = new Clock();
    clock.setTime(12,34,56);
    System.out.println(clock.getTime()); // 12:34:56
    clock.tick();
    clock.tick();
    clock.tick();
    clock.tick();
    System.out.println(clock.getTime()); // 12:35:00
  }
}
