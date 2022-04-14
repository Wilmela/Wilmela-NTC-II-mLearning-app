import AudioModule from "../model/audioModule";

export default AUDIOLINKS = [
  new AudioModule(
    "1",
    "Basic Electricity",
    require("../assets/sound/Basic.mp3")
  ),
  new AudioModule(
    "2",
    "Domestic Installation",
    require("../assets/sound/Domestic.mp3")
  ),
  new AudioModule(
    "3",
    "Industrial Installation",
    require("../assets/sound/Industrial.mp3")
  ),
  new AudioModule("4", "Cable Jointing", require("../assets/sound/Cable.mp3")),
  
  new AudioModule(
    "5",
    "Battery Charging",
    require("../assets/sound/Battery.mp3")
  ),
  new AudioModule(
    "6",
    "Winding of Electrical Machines",
    require("../assets/sound/Winding.mp3")
  ),
];
