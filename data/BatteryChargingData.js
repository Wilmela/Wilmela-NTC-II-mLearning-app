import React from "react";
import { View, Text } from "react-native";
import TopicsModule from "../model/TopicsModule";
import {ContentHolder, Zoomable} from "../components/";
import { MY_STYLE } from "../constants/Style";

export const BATTERYCHARGINGTOPICS = [
  new TopicsModule(
    "bc1",
    "Cell and Battery",
    (
      <ContentHolder
        link={require("../assets/LessonPics/battery/battery.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              According to Shawn (n.d.), A cell refers to a single anode and
              cathode separated by electrolyte used to produce a voltage and
              current.
              {"\n"}
              {"\n"}A battery can be made up of one or more cells.
              {"\n"}
              For example, A single AA battery is one cell.
              {"\n"}
              Car batteries contain six cells at 2.1 V each.
              {"\n"}
              {"\n"}
              There are two types of cells:
              {"\n"}
              1. Primary cell (None rechargeable).
              {"\n"}
              2. Secondary cell (rechargeable).
              {"\n"}
              {"\n"}
              Primary cells contain chemistry that cannot be reversed. As a
              result, the battery must be thrown away after it is dead.
              {"\n"}
              Secondary cells can be recharged and have their chemistry reverted
              back to their original state. Otherwise known as "rechargeable
              batteries," these cells can be used many times.
              {"\n"}
              {"\n"}
              Batteries are a collection of one or more cells whose chemical
              reactions create a flow of electrons in a circuit.
              {"\n"}
              {"\n"}
              All batteries are made up of three basic components: an anode (the
              '-' side), a cathode (the '+' side), and some kind of electrolyte
              (a substance that chemically reacts with the anode and cathode)
              Shawn (n.d.).
              {"\n"}
              {"\n"}
              Difference between cell and battery
              {"\n"}
              {"\n"}A cell is a single unit device which converts chemical
              energy into electric energy. while
              {"\n"}A battery usually consists of group of cells
              {"\n"}A cell is usually light and compact as it has a single unit.
              {"\n"}
              Battery normally consists of several cells thus giving it a bigger
              size and is bulky.
              {"\n"}A battery usually consists of group of cells
              {"\n"}A cell supplies power for a shorter period of time.
              {"\n"}A battery can supply power long durations.
              {"\n"}
              {"\n"}
              Types of Cell
              {"\n"}
              {"\n"}
              votalic Cell
              {"\n"}
              {"\n"}
              Alessandro Volta developed the first battery cell, and this cell
              is popularly known as the simple voltaic cell. This type of simple
              cell can be created very easily. Take one container and fill it
              with diluted sulfuric acid as the electrolyte. Now we immerse one
              zinc and one copper rod in the solution and we connect them
              externally by an electric load. Now your simple voltaic cell is
              completed. Current will start flowing through the external load.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/battery/votalicCell.webp")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              Daniell Cell
              {"\n"}
              The Daniell cell consists of a copper vessel containing copper
              sulfate solution. The copper vessel itself acts as the positive
              electrode. A porous pot containing diluted sulfuric acid is placed
              in the copper vessel. An amalgamated zinc rod, dipped inside the
              sulfuric acid, acts as the negative electrode.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/battery/DanielCell.webp")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "bc",
    "Maintenance",
    (
      <ContentHolder
        link={require("../assets/LessonPics/battery/battery.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              According to Century (n.d.) Regular testing and inspection will
              help to maximise battery life. A routine inspection at least once
              a month is recommended to maintain optimum performance. The author
              recommended the following steps to examine your battery:
              {"\n"}
              {"\n"}
              1. Check the battery's state of charge. Most batteries have a
              State of Charge Indicator on top of the battery that will give you
              an on the spot diagnosis of the battery condition. However, a more
              reliable way to check is with a voltmeter to determine the
              stabilised voltage or if the vent caps are removable a hydrometer
              to determine the specific gravity (SG) of the electrolyte. A
              charged Century battery will have a stabilised voltage above 12.5
              volts and an SG reading above 1.240.
              {"\n"}
              2. Ensure the battery top is clean, dry, free of dirt and grime. A
              dirty battery can discharge across the grime on top of the battery
              casing.
              {"\n"}
              {"\n"}
              3. Inspect the terminals, screws, clamps and cables for breakage,
              damage or loose connections. These should be clean, tight and free
              of corrosion.
              {"\n"}
              4. Apply a thin coating of high temperature grease to posts and
              cable connections for added protection.
              {"\n"}
              5. Inspect the battery case for obvious signs of physical damage
              or warpage. This usually indicates the battery has been overheated
              or has been overcharged.
              {"\n"}
              6. If you have a maintainable battery, it is important to check if
              the battery has sufficient electrolyte covering the battery
              plates. If topping up is required, do not over fill as the fluid
              levels will rise when the battery is fully charged and may
              overflow. Top up using distilled or demineralised water and never
              fill with sulphuric acid.
              {"\n"}
              7. When servicing a sealed maintenance free (SMF) battery, check
              the State of Charge Indicator. This gives you a snap shot of the
              battery's condition and whether the battery needs to be charged or
              replaced. The vehicle may still start the engine although the
              indicator outlines to replace the battery. If the State of Charge
              Indicator advises 'Replace Battery' it is important that the
              battery is replaced as the electrolyte levels may be below the
              plates which can lead to an internal explosion.
              {"\n"}
              8. For batteries used in seasonal applications and stored long
              term, fully recharge the battery prior to storing. Check the state
              of charge or voltage regularly. Should the voltage drop below
              12.5V, recharge the battery. It is important to check the battery
              completely before reconnecting to electrical devices.
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "bc3",
    "Battery Charging",
    (
      <ContentHolder
        link={require("../assets/LessonPics/battery/battery.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Charging a lead acid battery is the process of replacing the
              energy removed during discharge, plus EXTRA to compensate for any
              charging inefficiencies. The amount of energy necessary for
              complete recharge depends on the depth of discharge, rate of
              recharge and temperature. Typically 110% - 150% of the discharged
              ampere-hours depending on battery type must be returned to the
              battery to achieve full recharge.
              {"\n"}
              {"\n"}
              1. Check the battery's state of charge. Most batteries have a
              State of Charge Indicator on top of the battery that will give you
              an on the spot diagnosis of the battery condition. However, a more
              reliable way to check is with a voltmeter to determine the
              stabilised voltage or if the vent caps are removable a hydrometer
              to determine the specific gravity (SG) of the electrolyte. A
              charged Century battery will have a stabilised voltage above 12.5
              volts and an SG reading above 1.240.
              {"\n"}
              {"\n"}
              Safety First
              {"\n"}
              {"\n"}
              Before attempting to charge a battery with an external battery
              charger, it is important to be aware of the safety precautions
              when charging batteries and follow the instructions outlined by
              the charger manufacturer.
              {"\n"}
              1. Turn the charger off before attaching, rocking or removing the
              terminal clamps.
              {"\n"}
              2. Keep open flames and sparks away from the battery.
              {"\n"}
              3. Keep vent caps in place.
              {"\n"}
              4. Charge in well ventilated area.
              {"\n"}
              5. Follow the battery charger manufacturer’s instructions to avoid
              overheating.
              {"\n"}
              {"\n"}
              Dangerous explosive gases are generated during the charging
              process that can be ignited by a variety of sources including,
              sparks, naked flames and static electricity. It is highly
              recommended to wear PPE (Personal Protection Equipment) including
              safety glasses, chemical resistant gloves and overalls.
              {"\n"}
              {"\n"}
              Selecting the correct charger
              {"\n"}
              {"\n"}
              Lead acid batteries should be charged in 3 stages; constant
              current (boost), constant voltage (absorption) and float charge.
              {"\n"}
              When choosing a battery charger, it is important to select a
              charger that delivers the specified charging voltage and current
              to suit the battery type. Flooded, Absorbed Glass Mat (AGM) and
              Gel battery types require different charging specifications to
              provide optimum performance and service life.
              {"\n"}
              {"\n"}
              Charging Voltage (for manual chargers)
              {"\n"}
              {"\n"}
              Monitoring battery voltage during charging is extremely important
              to reduce the risk of overcharging and to check the progress of
              the battery during recharge. Always keep inside the parameters
              outlined in the below table. Failure to do so can result in
              permanent damage to the battery.
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "bc4",
    "   Working Principle",
    (
      <ContentHolder
        link={require("../assets/LessonPics/battery/battery.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              According to Jose and Peter (2015), when a battery is discharged
              the chemical reaction produces some extra electrons as the
              reaction occurs. An example of a reaction that produces electrons
              is the oxidation of iron to produce rust. Iron reacts with oxygen
              and gives up electrons to the oxygen to produce iron oxide.
              {"\n"}
              {"\n"}
              The standard construction of a battery is to use two metals or
              compounds with different chemical potentials and separate them
              with a porous insulator. The chemical potential is the energy
              stored in the atoms and bonds of the compounds, which is then
              imparted to the moving electrons, when these are allowed to move
              through the connected external device.
              {"\n"}
              {"\n"}A conducting fluid such as salt and water is used to
              transfer soluble ions from one metal to the other during the
              reaction and is called the electrolyte.
              {"\n"}
              {"\n"}
              The metal or compound that loses the electrons during discharge is
              called the anode and the metal or compound that accepts the
              electrons is called the cathode. This flow of electrons from the
              anode to the cathode through the external connection is what we
              use to run our electronic devices.
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "bc5",
    "SUMMARY",
    (
      <ContentHolder
        link={require("../assets/LessonPics/battery/battery.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              The first cell called VOLTAIC CELL was invented by Alessandro
              Volta.
              {"\n"}
              {"\n"}A cell mean a single anode and cathode separated by
              electrolyte used to produce voltage and current.
              {"\n"}
              There are basically two types of cell namely:
              {"\n"}
              1. Primary cell - They are not recharged
              {"\n"}
              2. Secondary cell - They are rechargeable
              {"\n"}
              {"\n"}
              Batteries are collection of one or more cells whose chemical
              reaction creates a flow of electrons in a circuit
              {"\n"}
              Batteries are made up of three parts namely:
              {"\n"}
              1. Anode (-) The negative side.
              {"\n"}
              2. Cathode (+) The positive side.
              {"\n"}
              3. Electrolyte (A substance that chemically reacts with the anode
              and cathode)
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
];
