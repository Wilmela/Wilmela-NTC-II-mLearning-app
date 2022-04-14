import React from "react";
import { View, Text } from "react-native";
import TopicsModule from "../model/TopicsModule";
import {ContentHolder, Zoomable} from "../components/";
import { MY_STYLE } from "../constants/Style";

export const INDUSTRIALINSTALTOPICS = [
  new TopicsModule(
    "ii2",
    "Ducts and Trunking",
    (
      <ContentHolder
        link={require("../assets/LessonPics/industrialImg/industrial.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Types of Ducting wiring
              {"\n"}
              {"\n"}
              When you enter a room full of wires, you probably see lots of
              wires are insert through a long PVC box. That's called ducting
              wiring.
              {"\n"}
              {"\n"}
              Ducting wiring are used in offices, huge sale market and data
              centers. These places require ducting wiring because of safety and
              ease to find power source.
              {"\n"}
              {"\n"}
              Ducting wiring are the same as other wiring, but this wiring use
              sockets, ethernet outlet, and so on. Below are some types of
              ducting wiring.
              {"\n"}
              1. Overhead Ducting : This ducting wiring is place overhead, to
              send and receive power.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/duct1.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              2. Underfloor ducting wiring : This kind of wiring can be easily
              foundc in stores and offices. These place widely use this wiring to
              send data or use power source.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/ducti2.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Text style={MY_STYLE}>
              {"\n"}
              3. Wall mounted/Skirting ducting :This ducting is used commonly in
              hospitals and homes.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/duct3.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              Ducting are made of PVC. So this can be easily be cut or shaped.
              But ducting wiring doesn't require to be shaped in 90° or 45°.
              because it is automatically shaped in 90° angle.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/duct4.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Text style={MY_STYLE}>
              {"\n"}
              Advantages :{"\n"}
              1. Can hold more wires
              {"\n"}
              2. Can add up more wiring for future installation
              {"\n"}
              3. Low cost
              {"\n"}
              4. Easy installation
              {"\n"}
              {"\n"}
              Disadvantage :{"\n"}
              1. More professional workers needed
              {"\n"}
              2. More special tools needed
              {"\n"}
              3. Take long time for installation.
            </Text>

            <Text style={MY_STYLE}>
              Trunking is a cable tidy device used to organised cables which
              would otherwise be running loosely around floors and walls,
              causing an untidy view and a possible tripping hazard. If cables
              need to replaced or re-wired, trunking will make the job simpler
              due to the easy access of the relevant wire. The robust trunking
              also serves as a protector from cables being damaged by falling
              object or being trodden on.
              {"\n"}
              {"\n"}
              Benefits of trunking
              {"\n"}
              1. Cable protection
              {"\n"}
              2. Improved design layout
              {"\n"}
              3. Significantly lower fire risk
              {"\n"}
              4. Easier cable management
              {"\n"}
              {"\n"}
              Uses of trunking
              {"\n"}
              1. Offices and indoor workspaces, at various lengths
              {"\n"}
              2. Electrical workshops
              {"\n"}
              3. Schools, Hospitals, Hotels and anywhere with customers walking
              amongst cables
              {"\n"}
              {"\n"}
              Trunking Types and Materials
              {"\n"}
              1. Aluminium, Stainless Steel, galvanised steel and other metals
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/Al-Trunck.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              2. PVC and other plastic trunking
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/pvc.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              3. Clip on, self-adhesive, slotted and skirting trunking.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/Trunk.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}></Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "ii3",
    "AC and DC machines",
    (
      <ContentHolder
        link={require("../assets/LessonPics/industrialImg/industrial.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              AC machines are motors that convert AC electric energy to
              mechanical energy and generators that convert mechanical energy to
              ac electric energy.
              {"\n"}
              {"\n"}
              An electric motor is an electrical machine that converts
              electrical energy into mechanical energy.
              {"\n"}
              AC motors consist of several parts, including a stator and rotor.
              AC motors are efficient, durable, quiet and flexible, making them
              a viable solution for many power generation needs.
              {"\n"}
              {"\n"}
              AC Motor
              {"\n"}
              {"\n"}
              The two types of AC motors include:
              {"\n"}
              {"\n"}
              1. Synchronous Motor
              {"\n"}
              2. Induction Motor.
              {"\n"}
              {"\n"}
              Synchronous: The synchronous motor rotates at the same rate as the
              frequency of the supply current, a fact that gives the motor its
              name. Synchronous motors are constructed of a stator, rotor and
              Synchronous motors are used in a wide range of applications.
              {"\n"}
              {"\n"}
              Induction: Induction motors are the simplest and most rugged
              electric motor available. These AC electric motors consist of two
              electrical assemblies: the wound stator and the rotor assembly.
              The electric current needed to turn the rotor is created by
              electromagnetic induction created by the stator winding. Induction
              motors are among the most commonly used type of motor in the
              world.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/Ac-Motor.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Text style={MY_STYLE}>
              {"\n"}
              DC motors
              {"\n"}
              {"\n"}
              The energy used by a DC motor comes from batteries or another
              generated power source that offers constant voltage. DC motors are
              made up of several parts, the most notable of which include
              bearings, shafts and a gearbox or gears. DC motors offer better
              speed variation and control and produce more torque than AC
              motors.
              {"\n"}
              {"\n"}
              The two types of DC motors include:
              {"\n"}
              {"\n"}
              1.Brushed Motor
              {"\n"}
              2.Brushless Motor
              {"\n"}
              {"\n"}
              Brushed: One of the oldest types of motor, brushed motors are
              internally commutated electric motors powered by direct current.
              Brushed motors are constructed of a rotor, brushes, an axle and
              The charge and polarity of the brushes control the direction and
              speed of the motor.
              {"\n"}
              {"\n"}
              Brushless: In recent years, brushless motors have gained in
              popularity for many uses, largely due to their efficiency.
              Brushless motors are constructed in the same fashion as brushed
              motors, minus, of course, the brushes. Brushless motors also
              include specialized circuitry to control speed and direction. In
              brushless motors, magnets are mounted around the rotor, a
              configuration that improves efficiency.
              {"\n"}
              {"\n"}
              DC motors are DC motors are used in a wide range of applications,
              including electric wheelchairs, handheld sprayers and pumps,
              coffee machines, off-road equipment and many more.
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/Dc-Motor.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              Difference between AC and DC Motor
              {"\n"}
              {"\n"}
              There are many differences between AC and DC motors. The most
              obvious difference is the type of current each motor turns into
              energy, alternating current in the case of AC motors, and direct
              current in the case of DC motors.
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "ii4",
    "MICC Cable",
    (
      <ContentHolder
        link={require("../assets/LessonPics/industrialImg/MICCC2.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Mineral-insulated copper-clad cable (MICC) is a variety of
              electrical cable made from copper conductors inside a copper
              sheath, insulated by inorganic magnesium oxide powder. The name is
              often abbreviated to MICC or MI cable, and colloquially known as
              pyro
              {"\n"}
              {"\n"}
              MI cable is made by placing copper rods inside a circular copper
              tube and filling the intervening spaces with dry magnesium oxide
              powder
              {"\n"}
              {"\n"}
              Since MI cables use no organic material as insulation (except at
              the ends), they are more resistant to fires than plastic-insulated
              cables.
              {"\n"}
              {"\n"}
              MI cables are used in critical fire protection applications such
              as fire alarm circuits, fire pumps, and smoke control systems. In
              process industries handling flammable fluids MI cable is used
              where small fires would otherwise cause damage to control or power
              cables. MI cable is also highly resistant to ionizing radiation
              and so finds applications in instrumentation for nuclear reactors
              and nuclear physics apparatus.
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/industrialImg/Micc1.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Text style={MY_STYLE}>
              How to install MICC Cable
              {"\n"}
              {"\n"}
              The energy used by a DC motor comes from batteries or another
              generated power source that offers constant voltage. DC motors are
              made up of several parts, the most notable of which include
              bearings, shafts and a gearbox or gears. DC motors offer better
              speed variation and control and produce more torque than AC
              motors.
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "ii1",
    "SUMMARY",
    (
      <ContentHolder
        link={require("../assets/LessonPics/industrialImg/industrial.webp")}
        children={
          <View>
            <Text style={MY_STYLE}>
              One of the advantages of Ducting Wiring is that it can hold more
              wire.
              {"\n"}
              {"\n"}
              AC machines are motors that converts AC electric energy to
              mechanical energy.
              {"\n"}
              {"\n"}
              Generators are opposite of motors. They converts mechanical energy
              to electrical energy.
              {"\n"}
              {"\n"}
              Types of Trunking include:
              {"\n"}
              1.Aluminium Trunking.
              {"\n"}
              2. PVC Trunking.
              {"\n"}
              3. Skirting Trunking.
              {"\n"}
              {"\n"}
              There are two types of AC Motor namely:
              {"\n"}
              1. Synchronous Motors
              {"\n"}
              2. Induction Motors
              {"\n"}
              There are two types of DC Motor namely:
              {"\n"}
              1. Brushed Motors
              {"\n"}
              2. Brushless Motors
              {"\n"}
              {"\n"}
              MICC - Mineral Insulated Clad Cable.
              {"\n"}
              They are more resistant to fire than plastic insulations, that is
              why they are used in fire applications such as fire circuit, fire
              pumps and smoke control systems.
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
];
