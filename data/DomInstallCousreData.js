import React from "react";
import { View, Text } from "react-native";
import TopicsModule from "../model/TopicsModule";
import {ContentHolder, Zoomable} from "../components/";
import { MY_STYLE } from "../constants/Style";

export const DOMESTICINSTALTOPICS = [
  new TopicsModule(
    "dm1",
    "Types of Domestic Wiring",
    (
      <ContentHolder
        link={require("../assets/LessonPics/Domestic/surface1.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              There are total 4 types of domestic wiring system
              {"\n"}
              1. Cleat Wiring
              {"\n"}
              2. Casing and capping Wiring
              {"\n"}
              3. Batten Wiring : Batten Wiring is further classified as,
              {"\n"}
              i) CTS or TRS or PVC sheath wiring
              {"\n"}
              ii) Lead Sheat or metal sheathed
              {"\n"}
              wiring
              {"\n"}
              4.Conduit Wiring : Conduit Wiring is further classified as,
              {"\n"}
              i) Surface or open Conduit type Wiring
              {"\n"}
              ii) Concealed or underground type of Conduit Wiring.
              {"\n"}
              {"\n"}
              1. Cleat Wiring
              {"\n"}
              This wiring comprises of PVC insulated wires or ordinary VIR that
              are braided and compounded. They are held on walls and ceilings
              using porcelain cleats with groves, wood or plastic. It is a
              temporary wiring system, therefore making it unsuitable for
              domestic premises. Moreover, cleat wiring system is rarely being
              used these days.
              {"\n"}
              {"\n"}
              2. Casing and Capping Wiring
              {"\n"}
              It was quite popular in the past but it is considered obsolete
              these days due to the popularity of the conduit and sheathed
              wiring system. The cables used in this electric wiring were PVC,
              VIR or any other approved insulated cables. The cables were
              carried through the wooden casing enclosures, where the casing was
              made of a strip of wood with parallel grooves cut lengthwise for
              accommodating the cables.
              {"\n"}
              {"\n"}
              3. Batten Wiring
              {"\n"}
              This is when a single electrical wire or a group of wires are laid
              over a wooden batten. The wires are held to the batten using a
              brass clip and spaced at an interval of 10 cm for horizontal runs
              and 15 cm for vertical runs.
              {"\n"}
              {"\n"}
              4. Lead Sheathed Wiring
              {"\n"}
              Lead sheathed wiring uses conductors which are insulated with VIR
              and are covered with an outer sheath of lead aluminum alloy which
              contains about 95% lead. The metal sheath gives protection to
              cables from mechanical damage, moisture and atmospheric corrosion.
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/Domestic/surfaceNew.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),

  new TopicsModule(
    "dm2",
    "Surface & Conduit Wiring",
    (
      <ContentHolder
        link={require("../assets/LessonPics/Domestic/conduit.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              {"\n"}
              Surface wiring is a system in which the wires are simply run
              across the surface of a wall or ceiling but are concealed and
              protected by a decorative cover or channel. The advantage of
              surface wiring is that it can be done with little or no disruption
              to existing finishes. This can be a real plus especially when
              wallpaper or paneling is involved. The disadvantage (and the
              objection that most folks have to this system) is that it can be
              difficult to conceal and can “stick out like a sore thumb.”
              However, where walls are made of block, concrete or other material
              that make wire-fishing impossible, surface wiring might be the
              only practical choice. Note: this type of surface wiring system is
              not designed for exterior use. There are other surface wiring
              systems which are approved for exterior use.
              {"\n"}
              {"\n"}
              Conduit is a hollow tube that wires are pulled, or "fished,"
              through during installation.
              {"\n"}
              Coonduit wiring is simply the installation of wires using
              conduits.
              {"\n"}
              {"\n"}
              Advantages of conduit wiring
              {"\n"}
              1. PVC conduits offers high resistance against corrosion.
              {"\n"}
              2. It is durable and a very popurlar system.
              {"\n"}
              3. It is a water proof wiring system.
              {"\n"}
              4. It does not support combustion.
              {"\n"}
              5. There is no chance of fire.
              {"\n"}
              6. No risk for electric shock.
              {"\n"}
              7. Maintenace is easy.
              {"\n"}
              8. Alternation is possible.
              {"\n"}
              9. It has a long life.
              {"\n"}
              {"\n"}
              Disdvantages of conduit wiring
              {"\n"}
              1. Incase of steel conduits, it is expensive compared to other
              wiring system.
              {"\n"}
              2. Incase of PVC plastic conduit risk of mechanical injury is
              possible
              {"\n"}
              3. More time is required to install this type of system.
              {"\n"}
              4. Fault finding process is difficult.
              {"\n"}
              5. It is also difficult to install.
              {"\n"}
              {"\n"}
              Different Types of Conduit
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/Domestic/TypesOFConduit.webp")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/Domestic/surface2.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "dm3",
    "Electrical Installtion Tests ",
    (
      <ContentHolder
        link={require("../assets/LessonPics/Domestic/Megger.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              {"\n"}
              All new completed electrical installation should be tested before
              connection to the supply, to ensure that the installation is
              technically sound and free from any possible short circuits, etc.
              {"\n"}
              The main reasons, to test a new electrical installation or house
              wiring before it is switched on to the mains are as follows:
              {"\n"}
              1. To know the cause of failure of a particular circuit or
              circuits or equipment and to locate the exact position of break
              down.
              {"\n"}
              2. To ensure that it is free from faults and is as per electricity
              rules.
              {"\n"}
              3. These tests will receive the attention of the owner before any
              possible undue damage occurs.
              {"\n"}
              {"\n"}
              Types of Electrical Installtion Tests
              {"\n"}
              1. Insulation resistance test between installation and earth.
              {"\n"}
              To ensure that the insulation of the cables or wires is not
              damaged and there is no leakage between them, this test is
              performed.
              {"\n"}
              2. Insulation resistance test between conductors.
              {"\n"}
              The leakage of the current to earth should not exceed 0.02% of the
              full load current.
              {"\n"}
              For testing the whole installation, the test is conducted on the
              main switch. A testing set known as megger is used for the test.
              It is a special form of the ohmmeter.
              {"\n"}
              {"\n"}
              3. Testing of polarity.
              {"\n"}
              In a low voltage installation, this test is performed to verify
              that all single pole switches have been connected to phase wire
              throughout the installation.
              {"\n"}
              It is very necessary to place all switches on phase so that when a
              switch is made OFF, the connected appliance is quite dead.
              {"\n"}
              4.Testing of earth continuity paths.
              {"\n"}
              5. Earth resistance test.
              {"\n"}
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/Domestic/Megger.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "dm4",
    "Illumination",
    (
      <ContentHolder
        link={require("../assets/LessonPics/Domestic/bulbs.jpeg")}
        children={
          <View>
            <Text style={MY_STYLE}>
              What is a Lamp?
              {"\n"}A lamp is an artificial source of light. Over the last 100
              years, lamps have become an integral part of our daily lives.
              {"\n"}
              Various types of lamps are available on the market. These lamps
              differ in their operating principle, materials used, and
              importantly – their energy efficiency.
              {"\n"}
              {"\n"}
              Types of lamps
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/Domestic/Lamps.webp")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              {"\n"}
              1. Incandescent Lamps
              {"\n"}
              2. Tungsten Halogen Lamps
              {"\n"}
              3. Fluorescent Lamps
              {"\n"}
              4. Compact Fluorescent Lamps
              {"\n"}
              5. Mercury Vapour Lamps
              {"\n"}
              6. Metal Halide Lamps
              {"\n"}
              7. High Pressure Sodium Vapour Lamps
              {"\n"}
              8. Low Pressure Sodium Vapour Lamps
              {"\n"}
              9. LED Lamp
              {"\n"}
            </Text>
          </View>
        }
      />
    )
  ),
  new TopicsModule(
    "dm5",
    "SUMMARY",
    (
      <ContentHolder
        link={require("../assets/LessonPics/Domestic/FullWiring.png")}
        children={
          <View>
            <Text style={MY_STYLE}>
              There are four (4) types of domestic wiring system namely:
              {"\n"}
              1. Cleat Wiring
              {"\n"}
              2. Casing and capping Wiring
              {"\n"}
              3. Batten Wiring
              {"\n"}
              4. Conduit Wiring
              {"\n"}
            </Text>
            <Zoomable
              link={require("../assets/LessonPics/Domestic/conduit.jpeg")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
            <Text style={MY_STYLE}>
              {"\n"}
              Advantages of conduit wiring
              {"\n"}
              1. PVC conduits offers high resistance against corrosion.
              {"\n"}
              2. It is durable and a very popurlar system.
              {"\n"}
              3. It is a water proof wiring system.
              {"\n"}
              4. It does not support combustion.
              {"\n"}
              5. There is no chance of fire.
              {"\n"}
              6. No risk for electric shock.
              {"\n"}
              7. Maintenace is easy.
              {"\n"}
              8. Alternation is possible.
              {"\n"}
              9. It has a long life.
              {"\n"}
              {"\n"}
              Disdvantages of conduit wiring
              {"\n"}
              1. Incase of steel conduits, it is expensive compared to other
              wiring system.
              {"\n"}
              2. Incase of PVC plastic conduit risk of mechanical injury is
              possible
              {"\n"}
              3. More time is required to install this type of system.
              {"\n"}
              4. Fault finding process is difficult.
              {"\n"}
              5. It is also difficult to install.
              {"\n"}
              {"\n"}
              Types of Electrical Installation Test
              {"\n"}
              {"\n"}
              1. Polarity Test
              {"\n"}
              2. Insulation reistance test between installation and earth.
              {"\n"}
              3. Insulation reistance test between conductors.
              {"\n"}
              {"\n"}
              Types of Lamps
              {"\n"}
              {"\n"}
              1. Incandescent Lamps
              {"\n"}
              2. Tungsten Halogen Lamp.
              {"\n"}
              3. Metal Halide Lamp
              {"\n"}
              4. Compact Fluorescent Lamps
            </Text>

            <Zoomable
              link={require("../assets/LessonPics/Domestic/Lamps.webp")}
              resizeMode="contain"
              style={{ width: "100%", height: 200 }}
            />
          </View>
        }
      />
    )
  ),
];
