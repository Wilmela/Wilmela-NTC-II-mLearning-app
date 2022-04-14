import React from "react";
import { View, Text } from "react-native";
import TopicsModule from "../model/TopicsModule";
import {ContentHolder, Zoomable} from "../components/";
import { MY_STYLE } from "../constants/Style";

export const WINDINGOFELECTMACHINESTOPICS = [
  new TopicsModule(
    "em1",
    "What is Winding?",
    (
      <ContentHolder
        link={require("../assets/LessonPics/winding/motor-winding.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              A winding is one or more turns of wire that forms a continuous
              coil through which an electric current can pass, as used in
              transformers and generators.
              {"\n"}
              {"\n"}
              classification of Winding
              {"\n"}
              {"\n"}
              The objective of winding is to set up a current sheet pattern.
              {"\n"}
              Winding can be classified into:
              {"\n"}
              {"\n"}
              a. Concentrated winding and
              {"\n"}
              b. Distributed winding
              {"\n"}
              Distributed winding is further classified into:
              {"\n"}
              a. Coil winding
              {"\n"}
              b. Case winding
              {"\n"}
              c. Phase winding
              {"\n"}
              d. commutator winding
              {"\n"}
              {"\n"}
              In concentrated type of winding, all the winding turns are wound
              together in series to form one multi-turn coil.
              {"\n"}
              Examples of concentrated winding are field winding for salient
              pole synchronous machine and DC machine.
              {"\n"}
              In concentrated winding, all the turns have the same magnetic
              axis.
              {"\n"}
              Primary and secondary winding of a transformer also form
              concentrated winding. Figure below shows one example of
              concentrated winding.
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/winding/concentrated-winding.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
              In distributed type of winding, all the winding turns are arranged
              in several full-pitch or fractional pitch coils.
              {"\n"}
              These coils are then inserted into slots spread along the air gap
              periphery. Stator and rotor of Induction Machine, armature winding
              of synchronous and DC machine are some of the examples where
              distributed winding is used. Figure below depicts distributed
              winding.
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/winding/distributed-winding.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
              Differnce between concentrated and distributed winding
              {"\n"}
              {"\n"}
              The major difference between the concentrated and distributed
              winding is that, concentric oils are used in concentrated winding
              whereas coils are spread along the air gap periphery in
              distributed winding.
            </Text>
          </View>
        }
      />
    )
  ),

  new TopicsModule(
    "em2",
    "Electrical Machines",
    (
      <ContentHolder
        link={require("../assets/LessonPics/winding/motor-winding.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              An electrical motor is an electrical machine which converts
              electrical energy to mechanical energy.
              {"\n"}
              Most of the motors work on the principle of interaction among the
              electric current as well as the magnetic field within a wire
              winding.
              {"\n"}
              {"\n"}
              This can generate force in the form of shaft rotation. These
              motors can be powered with DC or AC sources.
              {"\n"}
              The DC sources are batteries whereas the AC sources are inverters,
              power grids, generators.
              {"\n"}
              {"\n"}A generator is mechanically similar to the motor but works
              in the reverse direction by converting the energy from mechanical
              to electrical. An electric motor can be built with the rotor,
              stator, air gap, windings, bearings, & commutator. The
              classification of motors can be done with considerations like the
              type of power source, construction, motion output type, and
              applications.
              {"\n"}
              {"\n"}
              Motor Winding
              {"\n"}
              {"\n"}
              Motors could be either single phase or 3 phase motor.
              {"\n"}
              {"\n"}
              Types of Motor Winding
              {"\n"}
              {"\n"}
              The two types of motor winding are:
              {"\n"}
              1. Stator winding and
              {"\n"}
              2. Rotor winding
              {"\n"}
              {"\n"}
              Based on the motor winding connection, armature windings are
              classified into two types which include the following.
              {"\n"}
              1. Lap winding and
              {"\n"}
              2. Wave winding
              {"\n"}
              {"\n"}
              Stator Winding
              {"\n"}
              {"\n"}
              The slot on stator core of the three-phase motor winding carries
              stator winding. This winding can be supplied with 3-phase AC
              supply.
              {"\n"}
              The motor winding in three-phase which is connected in star or
              delta form based on the type of starting method used.
              {"\n"}
              {"\n"}
              The motor like squirrel cage can be frequently on track by the
              star to delta stator & thus the stator of the motor can be
              connected in delta.
              {"\n"}
              The slip ring 3-phase induction motor is in progress by including
              resistances, thus the slip ring induction motor’s stator winding
              can be associated in star otherwise delta form.
              {"\n"}
              {"\n"}
              Whenever the stator winding is energized by 3-phase ac supply,
              then it generates a rotating magnetic field (RMF).
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/winding/stator-winding.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              Rotor Winding
              {"\n"}
              {"\n"}
              In a motor, the rotating part is known as the rotor. The rotor
              includes the rotor winding as well as rotor core. The rotor
              winding is energized by the DC supply.
              {"\n"}
              The rotor can be classified into two types namely the phase wound
              and the squirrel cage.
              {"\n"}
              {"\n"}
              The squirrel cage rotor’s core is made up of cylindrical iron core
              which has a curved slot over the external surface on which the
              aluminum or copper conductors are located. These are
              short-circuited at the endings using the copper or aluminum rings.
              {"\n"}
              {"\n"}
              The electromagnetic induction is the occurrence wherein the
              electromagnetic force is induced within the conductor which
              carries the conductor due to the variable magnetic field. When the
              current stimulates in the rotor then it causes the rotor to move.
              {"\n"}
              {"\n"}
              Lap Winding
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/winding/lap-winding.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              Lap winding is the one kind of armature winding. The conductor
              connection can be done where the lanes and poles are similarly
              connected.
              {"\n"}
              The final part of each armature coil is associated with the
              commutator. The number of brushes within winding is the same as
              the number of parallel lanes.
              {"\n"}
              These are divided equally into two polarity windings like positive
              & negative. The lap winding applications mainly involve in high
              current and low voltage machines. These windings are categorized
              into three type’s namely simplex, duplex and triplex type winding.
              {"\n"}
              {"\n"}
              Wave Winding
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/winding/waveWinding.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              Wave winding includes parallel lanes among the two brushed like
              positive & negative. The primary armature coil’s end part can be
              associated with the starting part of the next armature coil
              commutator part with some distance. The conductors in this type of
              winding can be connected with two parallel lanes in a machine
              pole.
              {"\n"}
              {"\n"}
              The number of parallel ports can be equal in the direction of the
              number of brushes, which is used for high-voltage, and low-current
              machines.
              {"\n"}
              {"\n"}
              Motor Winding Calculation using an Ohmmter
              {"\n"}
              {"\n"}
              1. Connect the positive terminal of the multimeter which is in red
              color to the positive terminal of the windings of the motor
              {"\n"}
              2. Similarly, connect the negative terminal of the multimeter
              which is in black color to the positive terminal of the windings
              of the motor
              {"\n"}
              3. Turn the multimeter to read to ohms to resistance
              {"\n"}
              4. Detach power from the motor. Observed reading should be between
              2 to 3 ohms
              {"\n"}
              If observed value is something like zero, a short among phase
              occurred.
              {"\n"}
              {"\n"}
              Generally, if it is open then it will be above 2K ohms or
              infinite.
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "em3",
    "Tools",
    (
      <ContentHolder
        link={require("../assets/LessonPics/winding/motor-winding.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Some of the specialty tools traditionally used for rewinding
              motors.
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/winding/tools.jpg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              (1) stripping tool for stripping open slot armatures and stators.
              {"\n"}
              (2) coil lifter for lifting coils from the slots.
              {"\n"}
              (3) lead lifter for lifting coil leads from commutator risers.
              {"\n"}
              (4) lifting tool for prying tight coils from slots.
              {"\n"}
              (5) coil hook to break coil ends loose from insulating varnish.
              {"\n"}
              (6) coil puller for sliding top sides of coils into slots.
              {"\n"}
              (7) fiber slot drift for driving coils into slots (four
              thicknesses needed: 3/16″, 5/16″, 7/16″, and 9/16″).
              {"\n"}
              (8) fiber coil shaper for shaping coil ends after coils are in
              slots.
              {"\n"}
              (9) steel slot drift for driving coils to the bottom of partly
              closed slots.
              {"\n"}
              (10) push cutter for trimming edges of slot insulation.
              {"\n"}
              (11) wedge driver for driving wedges into partly closed slots.
              {"\n"}
              (12) wire scraper for removing insulation from ends of coil leads.
              {"\n"}
              (13) lead drift for driving coil leads into commutator risers.
              {"\n"}
              (14) one-sided chisel to cut off leads at risers.
              {"\n"}
              (15) commutator pick for picking out short circuits between
              segments.
              {"\n"}
              (16) under-cutting saw for under-cutting commutator mica.
              {"\n"}
              (17) banding clamp for placing tension on banding wires while
              winding them. (Courtesy Page Power Co.)
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "em4",
    "Statutory Regulations",
    (
      <ContentHolder
        link={require("../assets/LessonPics/winding/motor-winding.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Soldering and Termination
              {"\n"}
              {"\n"}
              1. Every connection at a cable termination shall be made by means
              of a terminal, soldering socket, or compression-type socket; shall
              securely contain and anchor all the wires of the conductor, and
              shall not impose any appreciable mechanical strain on the terminal
              or socket.
              {"\n"}
              2.Soldering fluxes, which remain acidic or corrosive at the
              completion of the soldering operation, shall not be used.
              {"\n"}
              {"\n"}
              Statutory Regulations as it concerns setting of winding machine,
              liquid varnish and oven
              {"\n"}
              {"\n"}
              1. Setting of winding machine
              {"\n"}
              a. Steady speed should be maintained to allow smooth and equal
              tension on the former for goos construction of the coils
              {"\n"}
              b. The winding machine should be placed on a flat surface for good
              operation
              {"\n"}
              c. The use of correct former size for the construction of the coil
              {"\n"}
              d. Fix the former properly to prevent shaking.
              {"\n"}
              e. There should be proper illumination for the operation of a
              machine t work effectively
              {"\n"}
              f. There should be proper alignItem between the former and the
              copper conductor
              {"\n"}
              g. The counter should be set to zero
              {"\n"}
              {"\n"}
              2. liquid varnish
              {"\n"}
              a. Electrical machines can only be varnished after it has been
              wound, soldered, branched and tested.
              {"\n"}
              b. Varnish is used on wound machines coil to prevent or reduce the
              following
              {"\n"}
              i. Moisture on wire insulation.
              {"\n"}
              ii. Vibration of the coils of wire in the machines slots.
              {"\n"}
              c. Varnish must be allowed to dry before the use of the machine.
              For instance if an air dry varnish is applied, the machine is
              placed on the workbench to dry and if the ovens dry the machine is
              placedin the oven dry.
              {"\n"}
              {"\n"}
              3. Oven
              {"\n"}
              a. The oven must be set to required temperature before the
              varnished machine is placed on it.
              {"\n"}
              b. The oven must be closed when in use.
              {"\n"}
              c. Flammable materials must not be placed near the oven during
              operation.
              {"\n"}
              d. Only oven dry varnished machines are baked in it.
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "em5",
    "SUMMARY",
    (
      <ContentHolder
        link={require("../assets/LessonPics/winding/motor-winding.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              A winding is one or more turns of wire that forms a continuous
              coil through which an electric current can pass.
              {"\n"}
              {"\n"}
              Winding can be classified into two:
              {"\n"}
              1. Concentrated Winding
              {"\n"}
              2. Distributed Winding
              {"\n"}
              {"\n"}When testing a motor winding with a multimeter, the measured
              resistance should be between 2 to 3 ohms
              {"\n"}
              {"\n"}
              If the resistance reads 2k ohms or above, that means there is an
              open circuit.
              {"\n"}
              An electic motor is a machine that converts electrical energy to
              mechanical energy.
              {"\n"}A generator is a machine that converts mechanical energy to
              electrical energy.
              {"\n"}
              {"\n"}
              Motor is either powered by
              {"\n"}
              1. alternating current (AC) or
              {"\n"}
              2. distributed current (DC)
              {"\n"}
              These are the two sources of power for motors
              {"\n"}A motor is called AC Motor or DC Motor simply because of its
              power source.
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
];
