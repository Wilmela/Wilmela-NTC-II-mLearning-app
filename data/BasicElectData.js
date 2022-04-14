import React from "react";
import Topic from "../model/TopicsModule";
import { View, Text } from "react-native";
import {ContentHolder, Zoomable} from "../components/";
import { MY_STYLE } from "../constants/Style";

export const BASICELECTTOPICS = [
  new Topic(
    "be1",
    "Electrical Circuit",
    (
      <ContentHolder
        link={require("../assets/LessonPics/electricalCircuit.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              {"\n"}
              An electrical circuit is an interconnection of electrical
              components (e.g., batteries, resistors, inductors, capacitors,
              switches, transistors)
              {"\n"}
              {"\n"}
              An electrical circuit is a network consisting of a closed loop,
              giving a return path for the current.'
            </Text>
            <ContentHolder
              link={require("../assets/LessonPics/electricalCircuit.png")}
              children={
                <Text style={MY_STYLE}>
                  Above is a simple electric circuit made up of a voltage source
                  and a resistor. Here, v = I * R according to Ohm's law.
                  {"\n"}
                  {"\n"}
                  The simplest electrical circuit are connected either in series
                  or parallel
                  {"\n"}
                  {"\n"}
                  The picture below shows Reistors connected in series
                  {"\n"}
                </Text>
              }
            />
            <Zoomable
              resizeMode="contain"
              link={require("../assets/LessonPics/seriesCircuit.png")}
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              The picture below shows Reistors connected in parallel
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/parallelCircuit.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text> {"\n"}</Text>
          </View>
        }
      />
    )
  ),

  new Topic(
    "be2",
    "Resistor",
    (
      <ContentHolder
        link={require("../assets/LessonPics/resistor.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              A resistor is a passive two-terminal electrical component that
              limits the current flowing in electrical or electronic circuits.
              Its property to resist the flow of current is called resistance,
              expressed in ohm (Ω), named after German physicist Georg Simon
              Ohm.
              {"\n"}
              {"\n"}
            </Text>
            <ContentHolder
              style={{ resizeMode: "contain" }}
              link={require("../assets/LessonPics/resistors2.png")}
              children={
                <Text style={MY_STYLE}>
                  Types of resistor
                  {"\n"}
                  1. Fixed Resistor
                  {"\n"}
                  2. Variable Resistor
                  {"\n"}
                  {"\n"}
                  Fixed resistors are designed to set the right conditions in a
                  circuit. Their values should never be changed to adjust the
                  circuit since those were determined during the design phase.
                  It can have a carbon composition or chip-and-wire wound type.
                  It can also be made with a mixture of finely ground carbon or
                  be very small in size and for high power rating.
                  {"\n"}
                  {"\n"}
                  Variable resistors have fixed resistor elements plus a slider.
                  The slider taps onto the main resistor element so there will
                  be three connections; two are connected to the third element
                  and one to the slider. Examples of this are potentiometers,
                  rheostats, trimmers, and so on.
                </Text>
              }
            />
            <Zoomable
              link={require("../assets/LessonPics/reistorSymbol.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              How to calculate resistance in a series circuit
              {"\n"}
              {"\n"}
              Calculating resistance in a series circuit is as simple as adding
              up all the values of each resistor.
              {"\n"}
              For Example: Find the resistance of a circuit with three resistors
              (100, 50, 220)ohms connected in series.
              {"\n"}
              Solution:
              {"\n"}
              {"\n"}
              Total Resistance = 100 + 50 + 220 = 370 ohms
            </Text>
          </View>
        }
      />
    )
  ),
  new Topic(
    "be3",
    "Capacitor",
    (
      <ContentHolder
        link={require("../assets/LessonPics/capacitor.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              A capacitor is a device that stores electrical energy in an
              electric field. It is a passive electronic component with two
              terminals.
              {"\n"}
              {"\n"}
              Two Types of Capacitors
              {"\n"}
              1. Polarized capacitor
              {"\n"}
              2. Non-polarized capacitor
              {"\n"}
              {"\n"}
              In each case there are two terminals, running perpendicularly into
              plates.
            </Text>
            <ContentHolder
              link={require("../assets/LessonPics/polarityCapacitor.jpeg")}
              children={
                <Text style={MY_STYLE}>
                  Capacitors are connected in series or in parallel just like
                  every other electrical components.
                </Text>
              }
            />

            <Zoomable
              link={require("../assets/LessonPics/SeriesCapacitor.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Zoomable
              link={require("../assets/LessonPics/parallelCapacitor.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Text style={MY_STYLE}>
              {"\n"}
              Total capacitance (C-Total) = C1 + C2 + C3 = 10F + 22 F+ 47F = 79F
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new Topic(
    "be4",
    "Voltage",
    (
      <ContentHolder
        link={require("../assets/LessonPics/voltage2.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Voltage is the pressure from an electrical circuit's power source
              that pushes charged electrons (current) through a conducting loop,
              enabling them to do work such as illuminating a light.
              {"\n"}
              {"\n"}
              In brief, voltage is measured in volts (V).
              {"\n"}
              In electricity's early days, voltage was known as electromotive
              force (emf). This is why in equations such as Ohm's Law, voltage
              is represented by the symbol E.
              {"\n"}
              {"\n"}
              Example of voltage in a simple direct current (dc) circuit:
              {"\n"}
              {"\n"}
              1. In this dc circuit, the switch is closed (turned ON).
              {"\n"}
              2. Voltage in the power source—the "potential difference" between
              the battery's two poles—is activated, creating pressure that
              forces electrons to flow as current out the battery's negative
              terminal.
              {"\n"}
              3. Current reaches the light, causing it to glow.
              {"\n"}
              4. Current returns to the power source.
              {"\n"}
              {"\n"}
              Ohms law: (V = I * R) is used to calculate voltage in a circuit.
              {"\n"}
              where v = voltage
              {"\n"}I = current
              {"\n"}R = Resistance
              {"\n"}
              {"\n"}
              For Example: Find the voltage in a circuit with resistance of 10
              ohms and current of 2 Ampere
              {"\n"}
              {"\n"}
              Solution:
              {"\n"}
              Voltage(V) = I * R = 2 * 10 = 20V.
            </Text>
            <ContentHolder
              link={require("../assets/LessonPics/voltage.webp")}
              children={
                <Text style={MY_STYLE}>
                  {"\n"}
                  Two types of voltage
                  {"\n"}
                  1. Alternating current (AC) voltage or
                  {"\n"}
                  2. Direct current (DC) voltage.
                  {"\n"}
                  {"\n"}
                  What is potential difference?
                  {"\n"}
                  {"\n"}
                  Voltage and the term "potential difference" are often used
                  interchangeably. Potential difference might be better defined
                  as the potential energy difference between two points in a
                  circuit. The amount of difference (expressed in volts)
                  determines how much potential energy exists to move electrons
                  from one specific point to another. The quantity identifies
                  how much work, potentially, can be done through the circuit.
                  {"\n"}
                  {"\n"}
                </Text>
              }
            />
          </View>
        }
      />
    )
  ),

  new Topic(
    "be5",
    "SUMMARY",
    (
      <ContentHolder
        link={require("../assets/LessonPics/electricalCircuit.png")}
        children={
          <View>
            <Text style={MY_STYLE}>
              SUMMARY/EVLUATION
              {"\n"}
              {"\n"}
              There are two types of electrical circuit / connection namely:
              {"\n"}
              1. Series connection or series circuit
              {"\n"}
              2. Parallel connection or Parallel circuit
              {"\n"}
              {"\n"}
              There are two types of resistors namely:
              {"\n"}
              1. Fixed Resistor
              {"\n"}
              2. Variable Resistor
              {"\n"}
              {"\n"}
              To Calculate resistance in a series circuit is as simple as adding
              up all the values of each resistor.
              {"\n"}
              For Example: Find the resistance of a circuit with three resistors
              (100, 50, 220)ohms connected in series.
              {"\n"}
              Solution:
              {"\n"}
              {"\n"}
              Total Resistance = 100 + 50 + 220 = 370 ohms
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/reistorSymbol.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}A capacitor is a device that stores electical charges in an
              electric field.
              {"\n"}
              They are of two types namely:
              {"\n"}
              1. Polarized capacitor
              {"\n"}
              2. Non-polarized capacitor
              {"\n"}
              {"\n"}
            </Text>

            <Zoomable
              link={require("../assets/LessonPics/polarityCapacitor.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              Voltage is the pressure that forces electrons to flow in a closed
              circuit
              {"\n"}
              It is calculated using ohms law where Voltage (V) = I * R{"\n"}
              For Example: Find the voltage in a circuit with resistance of 10
              ohms and current of 2 Ampere
              {"\n"}
              {"\n"}
              Solution:
              {"\n"}
              Voltage(V) = I * R = 2 * 10 = 20V.
            </Text>

            <Zoomable
              link={require("../assets/LessonPics/voltage.webp")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
          </View>
        }
      />
    )
  ),
];
