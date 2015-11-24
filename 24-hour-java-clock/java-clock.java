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

    String hourDisplay = formatNumber(hours);
    String minuteDisplay = formatNumber(minutes);
    String secondDisplay = formatNumber(seconds);
    return hourDisplay + ":" + minuteDisplay + ":" + secondDisplay;
  }

  private String formatNumber(int num){
    String string = Integer.toString(num);
    return num < 10 ? "0" + string : string;
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
