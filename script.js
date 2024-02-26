const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);
// battery API
const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function allBatteryInfo() {
        updateChargingInfo();
        updateLevelChange();
        updateBatteryDischargingTime();
        updateChargingTime();
        updateBatteryStatus();
      }
      allBatteryInfo();

      //Battery Charging
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });
      function updateChargingInfo() {
        const isCharging = battery.charging ? "yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }

      //battery charging time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTime();
      });
      function updateChargingTime() {
        batteryChargingTime.innerHTML = battery.chargingTime;
      }

      //battery discharging time
      battery.addEventListener("dischargingchange", () => {
        updateBatteryDischargingTime();
      });
      function updateBatteryDischargingTime() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      //battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      //battery Status
      function updateBatteryStatus() {
        if (battery.level === 100) {
          alert("battery is 100% charged unpluged the Charger");
        } else {
          console.log("keep charging ");
        }
      }
    });
  }
};
battery();
