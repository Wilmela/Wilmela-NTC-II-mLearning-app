import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TopicsModule from "../model/TopicsModule";
import {ContentHolder, Zoomable} from "../components/";
import { MY_STYLE } from "../constants/Style";
export const CABLEJOINTINGTOPICS = [
  new TopicsModule(
    "cj1",
    "What is cable jointing",
    (
      <ContentHolder
        link={require("../assets/LessonPics/cableJointing/cablejJoint.png")}
        children={
          <View>
            <Text style={MY_STYLE}>
              "Joint" is a term usually applied where two (or more) cables are
              joined together, in a way which is intended to reflect the
              construction of the cable itself.
              {"\n"}
              {"\n"}
              Cable jointing is the entire process involved in joining cables.
              (Health and Safety Executive, 2014).
              {"\n"}
              Cable joint is also referred to as wire splice.
              {"\n"}
              {"\n"}
              Knowing how to join a cable is essential for both building and
              circuits repair. Not using the proper electrical joint type can
              result in useless circuit, at the best, a dangerous one, at the
              worst. There are a few different types of wire joints, alongside
              various methods for holding wires together.(Annie, 2018).
              {"\n"}
              {"\n"}
              Cable jointers make and repair joins in insulated power supply and
              control cables installed in underground pipes, trenches and
              overhead systems. They also prepare cable terminations for
              electrical equipment and overhead lines. Cable jointers also
              install and maintain underground electrical cables used to
              transmit and distribute electricity in city and country areas, new
              housing estates and industrial centres.(The Good University Guide,
              n.d.).
              {"\n"}
              {"\n"}
              Personal requirement fro a cable jointer
              {"\n"}
              {"\n"}
              1. Enjoy practical work
              {"\n"}
              2. Able to cope with the physical demands of the job
              {"\n"}
              3. Normal eyesight and colour vision
              {"\n"}
              4. Good hand-eye coordination
              {"\n"}
              5. Safety-conscious
              {"\n"}
              6. Able to work at heights
              {"\n"}
              7. Good communication skills.
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "cj2",
    "Types of Cable Joints?",
    (
      <ContentHolder
        link={require("../assets/LessonPics/cableJointing/cablejJoint.png")}
        children={
          <View>
            <Text style={MY_STYLE}>
              According to Engineering Discoveries (n.d.), there are three main
              types of electrical joints, also known as splices:
              {"\n"}
              1. The Western Union splice
              {"\n"}
              2. The tap splice and
              {"\n"}
              3. The fixture splice.
              {"\n"}
              All other joints or splices originate from these three.
              {"\n"}
              {"\n"}
              Western Union splice
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/western-union.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              The Western Union splice joins small, solid conductors.
              {"\n"}
              {"\n"}
              Steps
              {"\n"}
              1. Prepare the wires for splicing. Enough insulation is removed to
              make the splice. The conductor is cleaned.
              {"\n"}
              2. Bring the wires to a crossed position and make a long twist or
              bend in each wire
              {"\n"}
              3. Wrap one end of the wire and then the other end four or five
              times around the straight portion of each wire
              {"\n"}
              4. Press the ends of the wires down as close as possible to the
              straight portion of the wire. This prevents the sharp ends from
              puncturing the tape covering that is wrapped over the splice.
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/Western-Union2.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
              Tap splice
              {"\n"}
              {"\n"}A tap splice connects a loose wire to the conductor at an
              angle, typically resembling a "T" shape. They are named tap
              splices because the loose wire can then "tap" the flow of the
              conductor. The wires of the loose wire are wrapped around the
              conductor, first with one on one side and then with five or more
              on the other.
              {"\n"}
              This is used where the tap wire is under considerable tensile
              stress circuit.
              {"\n"}
              {"\n"}
              {/* Steps
          {"\n"}
        1. Prepare the wires for splicing. Enough insulation is removed to make the splice. The conductor is cleaned.
        {"\n"}
        2. Bring the wires to a crossed position and make a long twist or bend in each wire
        {"\n"}
        3. Wrap one end of the wire and then the other end four or five times around the straight portion of each wire
        {"\n"}
        4. Press the ends of the wires down as close as possible to the straight portion of the wire. This prevents the sharp ends from puncturing the tape covering that is wrapped over the splice.
        {"\n"} */}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/T-splice.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />

            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
              Fixture splice
              {"\n"}
              {"\n"}
              The fixture joint is used to connect a small-diameter wire, such
              as in a lighting fixture, to a larger diameter wire used in a
              branch circuit. Like the rattail joint, the fixture joint will not
              stand much strain.
              {"\n"}
              {"\n"}
              Steps
              {"\n"}
              1. The first step is to remove the insulation andclean the wires
              to be joined.
              {"\n"}
              2. After the wires are prepared, the fixture wire is wrapped a few
              times around the branch wire.
              {"\n"}
              3. The end of the branch wire is then bent over the completed
              turns.
              {"\n"}
              4. The remainder of the bare fixture wire is then wrapped over the
              bent branch wire.
              {"\n"}
              5. Soldering and taping completes the job.
              {"\n"}
              {"\n"}
              Other types of cable joints include:
              {"\n"}
              {"\n"}
              Scarf Joint
              {"\n"}
              Britannia Joint
              {"\n"}
              Telegraph Joint
              {"\n"}
              straight Married Joint
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/Fixture-splice.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
              {"\n"}
              After forming a wire splice, it's highly recommended to solder it
              in order to secure. A good wire splice will hold without a solder,
              but the solder adds an important backup.
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "cj3",
    "Cable Jointing Tools",
    (
      <ContentHolder
        link={require("../assets/LessonPics/cableJointing/soldering.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Some common tools used for cable jointing include:
              {"\n"}
              {"\n"}
              1. Soldering bit
              {"\n"}
              {"\n"}A soldering iron is a hand tool used in soldering. It
              supplies heat to melt solder so that it can flow into the joint
              between two workpieces.
              {"\n"}A soldering iron is composed of a heated metal tip and an
              insulated handle.
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/bits.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              2. Blow lamp
              {"\n"}
              {"\n"}
              The blow lamp is used for soldering and cable jointing purposes.
              It is capable of producing very high temperatures. Usually
              kerosene oil is burnt into it.
              {"\n"}
              If its flame is projected directly on a job, the temperature of
              the job will increase to a very high degree.
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/BlowLamp.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              3. Strippers (Wire/Cable Stripper)
              {"\n"}
              {"\n"}A wire stripper is a small, hand-held device used to strip
              the electrical insulation from electric wires.
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/stripper.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              4. Soldering lugs
              {"\n"}
              {"\n"}
              Standard style solder lugs are designed to provide an excellent
              electrical connection by soldering a wire directly onto the solder
              lug.
              {"\n"}
              Multiple wires can be soldered to one lug. Some standard style
              solder lugs can also be soldered onto the connecting surface.
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/lugs.png")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              5. Electric soldering iron
              {"\n"}
              {"\n"}A soldering iron is a hand tool used to heat solder, usually
              from an electrical supply at high temperatures above the melting
              point of the metal alloy.
              {"\n"}
              This allows for the solder to flow between the workpieces needing
              to be joined.
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/solderingBit.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              6. Pot and ladle
              {"\n"}
              {"\n"}
              This is a method used in when jointing heavy conductors. A Solder
              pot is heated untill solder is running freely. However, the solder
              should not be overheated as this will burn the tin and forminga
              dross on the surface of the solder.
              {"\n"}
              When solder has reached a working temperature, it is taken from
              the pot with a ladle. The solder is the poured over the prepared
              joint and is caught with another ladle placed under the joint.
              {"\n"}
              This action is repeated untill everything is ok.
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/pot.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              7. Pliers etc.
              {"\n"}
              {"\n"}
              There are different types of plier use for either cuting or
              holding of cables
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/cableJointing/plier.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "cj4",
    "Conductors and Insulators",
    (
      <ContentHolder
        link={require("../assets/LessonPics/cableJointing/soldering.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              Conductors are the materials or substances which allow electricity
              to flow through them.
              {"\n"}
              They conduct electricity because they allow electrons to flow
              easily inside them from atom to atom. Also, conductors allow the
              transmission of heat or light from one source to another.
              {"\n"}
              {"\n"}
              Here are a few common examples of conductors and insulators:
              {"\n"}
              {"\n"}
              Conductors:
              {"\n"}
              {"\n"}
              1. silver
              {"\n"}
              2. copper
              {"\n"}
              3. gold
              {"\n"}
              4. aluminum
              {"\n"}
              5. iron
              {"\n"}
              6. steel
              {"\n"}
              7. brass
              {"\n"}
              8. bronze
              {"\n"}
              9. mercury
              {"\n"}
              10. graphite
              {"\n"}
              11. dirty water
              {"\n"}
              {"\n"}
              An insulator is a material that does not conduct electrical
              current.
              {"\n"}
              Insulating materials include paper, plastic, rubber, glass and
              air. Vacuum is also an insulator, but is not actually a material.
              Most electrical conductors are covered by insulation.
              {"\n"}
              {"\n"}
              Insulators:
              {"\n"}
              {"\n"}
              1. glass
              {"\n"}
              2. rubber
              {"\n"}
              3. oil
              {"\n"}
              4. asphalt
              {"\n"}
              5. fiberglass
              {"\n"}
              6. ceramic
              {"\n"}
              7. (dry) cotton
              {"\n"}
              8. (dry) paper
              {"\n"}
              9. (dry) wood plastic
              {"\n"}
              10. Pure water
              {"\n"}
              11. Diamond
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "cj5",
    "SUMMARY",
    (
      <ContentHolder
        link={require("../assets/LessonPics/cableJointing/soldering.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              A cable joint is simply the joining together of two or more
              cables.
              {"\n"}
              Cable jointing is the entire process involved in joining a cable.
              {"\n"}
              {"\n"}
              There are three main types of cable joint namely:
              {"\n"}
              1. The western union splice
              {"\n"}
              2. The tap splice
              {"\n"}
              3. The fixture splice
              {"\n"}
              {"\n"}
              Cable Jointing tools include:
              {"\n"}
              1. Soldering bit and Electric Soldering iron
              {"\n"}
              2.Blow lamp
              {"\n"}
              3.Strippers and Pliers
              {"\n"}
              4. Soldering lug
              {"\n"}
              2.Pot and ladle
              {"\n"}
              {"\n"}
              Conductors are materials which allow electricity to flow through
              them.
              {"\n"}
              Examples include:
              {"\n"}
              1.copper
              {"\n"}
              2. gold
              {"\n"}
              3. aluminum
              {"\n"}
              4. iron
              {"\n"}
              5. graphite
              {"\n"}
              {"\n"}
              An insulator is a material that does not conduct electrical
              current.
              {"\n"}
              Examples include:
              {"\n"}
              1. glass
              {"\n"}
              2. rubber
              {"\n"}
              3. oil
              {"\n"}
              4. asphalt
              {"\n"}
              5. fiberglass
              {"\n"}
              6. ceramic
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
];
