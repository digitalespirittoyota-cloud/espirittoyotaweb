"use client";
import { useState } from "react";

/* ===================== TYPES ===================== */
type FuelType = "Petrol" | "E-CNG";
type Variant = "E" | "S" | "G" | "V";
const VARIANTS_BY_FUEL: Record<FuelType, Variant[]> = {
  Petrol: ["E", "S", "G", "V"],
  "E-CNG": ["S", "G"],
};

interface SpecItem {
  label: string;
  value: string;
}

interface SpecSection {
  title: string;
  data: SpecItem[];
}

interface VariantSpecs {
  ENGINE?: SpecSection;
  DIMENSIONS?: SpecSection;
  SUSPENSION?: SpecSection;
  BRAKES?: SpecSection;
  WEIGHT?: SpecSection;
  INTERIOR?: SpecSection;
  EXTERIOR?: SpecSection;
  CONNECT?: SpecSection;
  SAFETY?: SpecSection;
  COMFORT?: SpecSection;
}
/* ===================== SECTION ORDER ===================== */
const SECTION_ROWS: (keyof VariantSpecs)[][] = [
  ["ENGINE", "DIMENSIONS"],
  ["SUSPENSION", "BRAKES"],
  ["WEIGHT", "INTERIOR"],
  ["EXTERIOR", "CONNECT"],
  ["SAFETY", "COMFORT"],
];

/* ===================== DATA ===================== */
const specifications: Record<FuelType, Partial<Record<Variant, VariantSpecs>>> = {
  Petrol: {
    E: {
      ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1197cc(.001197m³)- 4 Cylinders (BS6 Phase2)" },
          { label: "Max Power", value: "66 kW @ 6000 rpm" },
          { label: "Torque", value: "113 Nm @ 4400 rpm" },
          { label: "Fuel efficiency (kilometer per litre)", value: "22.35 km/l (MT), 22.94 km/l (AMT)" },
          { label: "Idle start/stop", value: "All Variants" },
          
          
        ],
      },
      DIMENSIONS: {
        title: "DIMENSIONS",
        data: [
          { label: "Length X Width X Height", value: "3990 mm X 1745 mm X 1500 mm" },
          { label: "Wheelbase", value: "2521 mm" },
          { label: "Turning radius", value: "4.85 m" },
          { label: "Fuel Tank capacity", value: "37 litres" },
          { label: "Seating Capacity", value: "5N" },
          
          
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Suspension type Front", value: "MacPherson Strut" },
          { label: "Suspension type Rear", value: "Torsion Beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Brake type Front", value: "Disc" },
          { label: "Brake type Rear", value: "Drum" },
        ],
      },
      WEIGHT:{
        title: "WEIGHT",
        data: [
          { label: "Kerb weight (KG)", value: "920-955 (MT), 935-960 (AMT)" },
          { label: "Gross Weight (KG)", value: "1410" },
        ],
      },
      EXTERIOR:{
        title: "EXTERIOR",
        data: [
          { label: "Sporty Front bumper with Carbon fibre Texture element", value: "" },
          { label: "Body Coloured Bumpers", value: "" },
          { label: "Cool new Wide & Sharp front grill with Horizontal chrome bar plating", value: "" },
          { label: "New Sleek Alloy wheel + Tire 195/55 R16 (Diameter 40.64 cm)", value: "" },
          { label: "Steel wheel + Tire 185/65 R15 (Diameter 38.1 cm)", value: "" },
          { label: "Spare wheel (Steel wheel – 185/65 R15 Diameter 38.1 cm)", value: "" },
          { label: "Projector headlamp", value: "Halogen" },
          { label: "LED Fog lamps", value: "" },
          { label: "Auto headlamps with follow me home function", value: "" },
          { label: "LED Daytime Running Lamp (DRL)", value: "" },
          { label: "Turn lamp(Door mirrors)", value: "" },
          { label: "Tail lamp + Brake lamp + Highmounted stop lamp", value: "Halogen" },
          { label: "Rear window wiper & washer", value: "" },
          { label: "UV Protect Glass", value: "" },
          { label: "ORVM Body Coloured", value: "Black" },
          { label: "Outside door handle - chrome", value: "" },
          { label: "Outside door handle body coloured", value: "Black" },
          { label: "Back door / Trunk lid garnish", value: "" },
          { label: "Back door Spoiler", value: "" },
          { label: "Floating roof effect w A/B/C Pillar black out", value: "" },
        ],
      },
      SAFETY:{
        title: "SAFETY",
        data: [
          { label: "ABS / EBD", value: "" },
          { label: "Brake Assist", value: "" },
          { label: "Vehicle Stability Control (ESP)", value: "" },
          { label: "Hill hold control", value: "" },
          { label: "Automatically door lock by speed", value: "" },
          { label: "High speed alert system* (>80 Kilometer Per Hour)", value: "" },
          { label: "Immobilizer", value: "" },
          { label: "Front Airbags (Driver + Co-driver)", value: "" },
          { label: "Front side airbag", value: "" },
          { label: "Curtain airbag", value: "" },
          { label: "Front seat belt pre-tensioners and Force limiter (Driver + Co-driver)", value: "" },
          { label: "Seat belt reminder- front & rear", value: "3 point seat belt" },
          { label: "Rear seat belt type", value: "" },
          { label: "Isofix Anchorage", value: "" },
          { label: "Child-proof rear door locks", value: "" },
          
        ],
      },
      INTERIOR:{
        title: "INTERIOR",
        data: [
          { label: "Classy Dual Tone (Dashboard + Seats)", value: "" },
          { label: "Interactive TFT Tachometer display - Door ajar warning - Tachometer - Speedometer - Clock & outside temperature", value: "Monochrome" },
          { label: "- Average fuel economy", value: "-" },
          { label: "Leather wrapped steering wheel", value: "-" },
          { label: "All New Smart Playcast Audio* (Touch Screen) [Smart phone connect (Android auto/Apple carplay), Hey Siri &", value: "-" },
          { label: "Hello Google compatible, Smartplay cast Pro (Remote Control app), Smart Playcast Pro S (Audio OTA update)]", value: "-" },
          { label: "Smart Playcast Audio* [Touch screen FM/AM/, Smart phone connect (Android auto/Apple carplay)]", value: "-" },
          { label: "Door speaker", value: "-" },
          { label: "Tweeter", value: "-" },
          { label: "Hey Toyota", value: "-" },
          { label: "Premium sound system (Arkamys)", value: "-" },
          { label: "Automatic Shift panel- Piano Black", value: "-" },
        
        ],
      },
      CONNECT:{
        title: "TOYOTA I-CONNECT",
        data: [
          { label: "Remote check & Control (Lock/Unlock, Hazard lights, Headlights, Distance to empty)", value: "-" },
          { label: "Smart Watch & Hey Siri Voice Assistance Compatibility", value: "-" },
          { label: "Vehicle Safety & security - Auto collision notification, Tow alert, Geo fencing, Find my car & Valet profile", value: "-" },
          { label: "Service connect - Vehicle health & Malfunction indicator", value: "-" },
          
          
        ],
      },
      COMFORT:{
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Toyota i-Connect* (Connect to Toyota)", value: "" },
          { label: "ORVMs Electric adjust & retract", value: "-" },
          { label: "Manual ORVMS", value: "" },
          { label: "Remote keyless entry", value: "" },
          { label: "All power windows", value: "" },
          { label: "Driver side Auto up/Down with Pinch Guard", value: "" },
          { label: "Key less push start system", value: "-" },
          { label: "Head Up Display (HUD)", value: "-" },
          { label: "360 Degree camera (Surround view)", value: "-" },
          { label: "Back Camera", value: "-" },
          { label: "Rear Parking sensor", value: "" },
          { label: "Gear shift indicator", value: "" },
          { label: "Day / night rear view mirror", value: "" },
          { label: "Cruise control", value: "-" },
          { label: "Adjustable Steering (Tilt + Telescopic)", value: "(Tilt)" },
          { label: "Steering mounted Audio & calling", value: "-" },
          { label: "Driver seat height adjust", value: "-" },
          { label: "Auto AC", value: "" },
          { label: "Rear A/C Vent", value: "-" },
          { label: "Front center armrest with Slide", value: "-" },
          { label: "Center console with cupholder", value: "" },
          { label: "Seat back pocket (Co-driver)", value: "-" },
          { label: "60:40 Split rear seats", value: "" },
          { label: "Front seat adjustable headrest", value: "-" },
          { label: "Rear seat adjustable headrest", value: "" },
          { label: "Room lamp (Roof center)", value: "" },
          { label: "Spot map lamp (Roof front)", value: "-" },
          { label: "Luggage room lamp + Glove box light +Front footwell light", value: "-" },
          { label: "Interior light turn-on when IG OFF or Key open", value: "" },
          { label: "Pet bottle holder (Front door + Rear Door) 1000ml", value: "" },
          { label: "Co-Driver vanity mirror", value: "-" },
          { label: "Vanity mirror + Lamp + ticket holder (Driver + Co-driver)", value: "-" },
          { label: "Rear Defogger", value: "" },
          { label: "Rear Fast Charging USB", value: "-" },
          { label: "Luggage room Shelf", value: "-" },
          
        ],
      },
    },
    S: {
      ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1197cc(.001197m³)- 4 Cylinders (BS6 Phase2)" },
          { label: "Max Power", value: "66 kW @ 6000 rpm" },
          { label: "Torque", value: "113 Nm @ 4400 rpm" },
          { label: "Fuel efficiency (kilometer per litre)", value: "22.35 km/l (MT), 22.94 km/l (AMT)" },
          { label: "Idle start/stop", value: "All Variants" },
          
          
        ],
      },
      DIMENSIONS: {
        title: "DIMENSIONS",
        data: [
          { label: "Length X Width X Height", value: "3990 mm X 1745 mm X 1500 mm" },
          { label: "Wheelbase", value: "2521 mm" },
          { label: "Turning radius", value: "4.85 m" },
          { label: "Fuel Tank capacity", value: "37 litres" },
          { label: "Seating Capacity", value: "5N" },
          
          
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Suspension type Front", value: "MacPherson Strut" },
          { label: "Suspension type Rear", value: "Torsion Beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Brake type Front", value: "Disc" },
          { label: "Brake type Rear", value: "Drum" },
        ],
      },
      WEIGHT:{
        title: "WEIGHT",
        data: [
          { label: "Kerb weight (KG)", value: "920-955 (MT), 935-960 (AMT)" },
          { label: "Gross Weight (KG)", value: "1410" },
        ],
      },
      EXTERIOR:{
        title: "EXTERIOR",
        data: [
          { label: "Sporty Front bumper with Carbon fibre Texture element", value: "" },
          { label: "Body Coloured Bumpers", value: "" },
          { label: "Cool new Wide & Sharp front grill with Horizontal chrome bar plating", value: "" },
          { label: "New Sleek Alloy wheel + Tire 195/55 R16 (Diameter 40.64 cm)", value: "" },
          { label: "Steel wheel + Tire 185/65 R15 (Diameter 38.1 cm)", value: "" },
          { label: "Spare wheel (Steel wheel – 185/65 R15 Diameter 38.1 cm)", value: "" },
          { label: "Projector headlamp", value: "Halogen" },
          { label: "LED Fog lamps", value: "" },
          { label: "Auto headlamps with follow me home function", value: "" },
          { label: "LED Daytime Running Lamp (DRL)", value: "" },
          { label: "Turn lamp(Door mirrors)", value: "" },
          { label: "Tail lamp + Brake lamp + Highmounted stop lamp", value: "Halogen" },
          { label: "Rear window wiper & washer", value: "" },
          { label: "UV Protect Glass", value: "" },
          { label: "ORVM Body Coloured", value: "Black" },
          { label: "Outside door handle - chrome", value: "" },
          { label: "Outside door handle body coloured", value: "Black" },
          { label: "Back door / Trunk lid garnish", value: "" },
          { label: "Back door Spoiler", value: "" },
          { label: "Floating roof effect w A/B/C Pillar black out", value: "" },
        ],
      },
      SAFETY:{
        title: "SAFETY",
        data: [
          { label: "ABS / EBD", value: "" },
          { label: "Brake Assist", value: "" },
          { label: "Vehicle Stability Control (ESP)", value: "" },
          { label: "Hill hold control", value: "" },
          { label: "Automatically door lock by speed", value: "" },
          { label: "High speed alert system* (>80 Kilometer Per Hour)", value: "" },
          { label: "Immobilizer", value: "" },
          { label: "Front Airbags (Driver + Co-driver)", value: "" },
          { label: "Front side airbag", value: "" },
          { label: "Curtain airbag", value: "" },
          { label: "Front seat belt pre-tensioners and Force limiter (Driver + Co-driver)", value: "" },
          { label: "Seat belt reminder- front & rear", value: "3 point seat belt" },
          { label: "Rear seat belt type", value: "" },
          { label: "Isofix Anchorage", value: "" },
          { label: "Child-proof rear door locks", value: "" },
          
        ],
      },
      INTERIOR:{
        title: "INTERIOR",
        data: [
          { label: "Classy Dual Tone (Dashboard + Seats)", value: "" },
          { label: "Interactive TFT Tachometer display - Door ajar warning - Tachometer - Speedometer - Clock & outside temperature", value: "Monochrome" },
          { label: "- Average fuel economy", value: "-" },
          { label: "Leather wrapped steering wheel", value: "-" },
          { label: "All New Smart Playcast Audio* (Touch Screen) [Smart phone connect (Android auto/Apple carplay), Hey Siri &", value: "-" },
          { label: "Hello Google compatible, Smartplay cast Pro (Remote Control app), Smart Playcast Pro S (Audio OTA update)]", value: "-" },
          { label: "Smart Playcast Audio* [Touch screen FM/AM/, Smart phone connect (Android auto/Apple carplay)]", value: "-" },
          { label: "Door speaker", value: "4N" },
          { label: "Tweeter", value: "-" },
          { label: "Hey Toyota", value: "-" },
          { label: "Premium sound system (Arkamys)", value: "-" },
          { label: "Automatic Shift panel- Piano Black", value: "-" },
        
        ],
      },
      CONNECT:{
        title: "TOYOTA I-CONNECT",
        data: [
          { label: "Remote check & Control (Lock/Unlock, Hazard lights, Headlights, Distance to empty)", value: "-" },
          { label: "Smart Watch & Hey Siri Voice Assistance Compatibility", value: "-" },
          { label: "Vehicle Safety & security - Auto collision notification, Tow alert, Geo fencing, Find my car & Valet profile", value: "-" },
          { label: "Service connect - Vehicle health & Malfunction indicator", value: "-" },
          
          
        ],
      },
      COMFORT:{
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Toyota i-Connect* (Connect to Toyota)", value: "" },
          { label: "ORVMs Electric adjust & retract", value: "-" },
          { label: "Manual ORVMS", value: "" },
          { label: "Remote keyless entry", value: "" },
          { label: "All power windows", value: "" },
          { label: "Driver side Auto up/Down with Pinch Guard", value: "" },
          { label: "Key less push start system", value: "-" },
          { label: "Head Up Display (HUD)", value: "-" },
          { label: "360 Degree camera (Surround view)", value: "-" },
          { label: "Back Camera", value: "-" },
          { label: "Rear Parking sensor", value: "" },
          { label: "Gear shift indicator", value: "" },
          { label: "Day / night rear view mirror", value: "" },
          { label: "Cruise control", value: "-" },
          { label: "Adjustable Steering (Tilt + Telescopic)", value: "(Tilt)" },
          { label: "Steering mounted Audio & calling", value: "-" },
          { label: "Driver seat height adjust", value: "-" },
          { label: "Auto AC", value: "" },
          { label: "Rear A/C Vent", value: "-" },
          { label: "Front center armrest with Slide", value: "-" },
          { label: "Center console with cupholder", value: "" },
          { label: "Seat back pocket (Co-driver)", value: "-" },
          { label: "60:40 Split rear seats", value: "" },
          { label: "Front seat adjustable headrest", value: "-" },
          { label: "Rear seat adjustable headrest", value: "" },
          { label: "Room lamp (Roof center)", value: "" },
          { label: "Spot map lamp (Roof front)", value: "-" },
          { label: "Luggage room lamp + Glove box light +Front footwell light", value: "-" },
          { label: "Interior light turn-on when IG OFF or Key open", value: "" },
          { label: "Pet bottle holder (Front door + Rear Door) 1000ml", value: "" },
          { label: "Co-Driver vanity mirror", value: "-" },
          { label: "Vanity mirror + Lamp + ticket holder (Driver + Co-driver)", value: "-" },
          { label: "Rear Defogger", value: "" },
          { label: "Rear Fast Charging USB", value: "-" },
          { label: "Luggage room Shelf", value: "-" },
          
        ],
      },
      
    },
    G: {
        ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1197cc(.001197m³)- 4 Cylinders (BS6 Phase2)" },
          { label: "Max Power", value: "66 kW @ 6000 rpm" },
          { label: "Torque", value: "113 Nm @ 4400 rpm" },
          { label: "Fuel efficiency (kilometer per litre)", value: "22.35 km/l (MT), 22.94 km/l (AMT)" },
          { label: "Idle start/stop", value: "All Variants" },
          
          
        ],
      },
      DIMENSIONS: {
        title: "DIMENSIONS",
        data: [
          { label: "Length X Width X Height", value: "3990 mm X 1745 mm X 1500 mm" },
          { label: "Wheelbase", value: "2521 mm" },
          { label: "Turning radius", value: "4.85 m" },
          { label: "Fuel Tank capacity", value: "37 litres" },
          { label: "Seating Capacity", value: "5N" },
          
          
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Suspension type Front", value: "MacPherson Strut" },
          { label: "Suspension type Rear", value: "Torsion Beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Brake type Front", value: "Disc" },
          { label: "Brake type Rear", value: "Drum" },
        ],
      },
      WEIGHT:{
        title: "WEIGHT",
        data: [
          { label: "Kerb weight (KG)", value: "920-955 (MT), 935-960 (AMT)" },
          { label: "Gross Weight (KG)", value: "1410" },
        ],
      },
      EXTERIOR:{
        title: "EXTERIOR",
        data: [
          { label: "Sporty Front bumper with Carbon fibre Texture element", value: "" },
          { label: "Body Coloured Bumpers", value: "" },
          { label: "Cool new Wide & Sharp front grill with Horizontal chrome bar plating", value: "" },
          { label: "New Sleek Alloy wheel + Tire 195/55 R16 (Diameter 40.64 cm)", value: "" },
          { label: "Steel wheel + Tire 185/65 R15 (Diameter 38.1 cm)", value: "" },
          { label: "Spare wheel (Steel wheel – 185/65 R15 Diameter 38.1 cm)", value: "" },
          { label: "Projector headlamp", value: "Halogen" },
          { label: "LED Fog lamps", value: "" },
          { label: "Auto headlamps with follow me home function", value: "" },
          { label: "LED Daytime Running Lamp (DRL)", value: "" },
          { label: "Turn lamp(Door mirrors)", value: "" },
          { label: "Tail lamp + Brake lamp + Highmounted stop lamp", value: "Halogen" },
          { label: "Rear window wiper & washer", value: "" },
          { label: "UV Protect Glass", value: "" },
          { label: "ORVM Body Coloured", value: "Black" },
          { label: "Outside door handle - chrome", value: "" },
          { label: "Outside door handle body coloured", value: "Black" },
          { label: "Back door / Trunk lid garnish", value: "" },
          { label: "Back door Spoiler", value: "" },
          { label: "Floating roof effect w A/B/C Pillar black out", value: "" },
        ],
      },
      SAFETY:{
        title: "SAFETY",
        data: [
          { label: "ABS / EBD", value: "" },
          { label: "Brake Assist", value: "" },
          { label: "Vehicle Stability Control (ESP)", value: "" },
          { label: "Hill hold control", value: "" },
          { label: "Automatically door lock by speed", value: "" },
          { label: "High speed alert system* (>80 Kilometer Per Hour)", value: "" },
          { label: "Immobilizer", value: "" },
          { label: "Front Airbags (Driver + Co-driver)", value: "" },
          { label: "Front side airbag", value: "" },
          { label: "Curtain airbag", value: "" },
          { label: "Front seat belt pre-tensioners and Force limiter (Driver + Co-driver)", value: "" },
          { label: "Seat belt reminder- front & rear", value: "3 point seat belt" },
          { label: "Rear seat belt type", value: "" },
          { label: "Isofix Anchorage", value: "" },
          { label: "Child-proof rear door locks", value: "" },
          
        ],
      },
      INTERIOR:{
        title: "INTERIOR",
        data: [
          { label: "Classy Dual Tone (Dashboard + Seats)", value: "" },
          { label: "Interactive TFT Tachometer display - Door ajar warning - Tachometer - Speedometer - Clock & outside temperature", value: "10.66 cm" },
          { label: "- Average fuel economy", value: "-" },
          { label: "Leather wrapped steering wheel", value: "-" },
          { label: "All New Smart Playcast Audio* (Touch Screen) [Smart phone connect (Android auto/Apple carplay), Hey Siri &", value: "17.78 cm" },
          { label: "Hello Google compatible, Smartplay cast Pro (Remote Control app), Smart Playcast Pro S (Audio OTA update)]", value: "-" },
          { label: "Smart Playcast Audio* [Touch screen FM/AM/, Smart phone connect (Android auto/Apple carplay)]", value: "-" },
          { label: "Door speaker", value: "4N" },
          { label: "Tweeter", value: "2N" },
          { label: "Hey Toyota", value: "-" },
          { label: "Premium sound system (Arkamys)", value: "-" },
          { label: "Automatic Shift panel- Piano Black", value: "-" },
        
        ],
      },
      CONNECT:{
        title: "TOYOTA I-CONNECT",
        data: [
          { label: "Remote check & Control (Lock/Unlock, Hazard lights, Headlights, Distance to empty)", value: "-" },
          { label: "Smart Watch & Hey Siri Voice Assistance Compatibility", value: "-" },
          { label: "Vehicle Safety & security - Auto collision notification, Tow alert, Geo fencing, Find my car & Valet profile", value: "-" },
          { label: "Service connect - Vehicle health & Malfunction indicator", value: "-" },
          
          
        ],
      },
      COMFORT:{
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Toyota i-Connect* (Connect to Toyota)", value: "" },
          { label: "ORVMs Electric adjust & retract", value: "-" },
          { label: "Manual ORVMS", value: "" },
          { label: "Remote keyless entry", value: "" },
          { label: "All power windows", value: "" },
          { label: "Driver side Auto up/Down with Pinch Guard", value: "" },
          { label: "Key less push start system", value: "-" },
          { label: "Head Up Display (HUD)", value: "-" },
          { label: "360 Degree camera (Surround view)", value: "-" },
          { label: "Back Camera", value: "-" },
          { label: "Rear Parking sensor", value: "" },
          { label: "Gear shift indicator", value: "" },
          { label: "Day / night rear view mirror", value: "" },
          { label: "Cruise control", value: "-" },
          { label: "Adjustable Steering (Tilt + Telescopic)", value: "" },
          { label: "Steering mounted Audio & calling", value: "-" },
          { label: "Driver seat height adjust", value: "-" },
          { label: "Auto AC", value: "" },
          { label: "Rear A/C Vent", value: "-" },
          { label: "Front center armrest with Slide", value: "-" },
          { label: "Center console with cupholder", value: "" },
          { label: "Seat back pocket (Co-driver)", value: "-" },
          { label: "60:40 Split rear seats", value: "" },
          { label: "Front seat adjustable headrest", value: "-" },
          { label: "Rear seat adjustable headrest", value: "" },
          { label: "Room lamp (Roof center)", value: "" },
          { label: "Spot map lamp (Roof front)", value: "-" },
          { label: "Luggage room lamp + Glove box light +Front footwell light", value: "-" },
          { label: "Interior light turn-on when IG OFF or Key open", value: "" },
          { label: "Pet bottle holder (Front door + Rear Door) 1000ml", value: "" },
          { label: "Co-Driver vanity mirror", value: "-" },
          { label: "Vanity mirror + Lamp + ticket holder (Driver + Co-driver)", value: "-" },
          { label: "Rear Defogger", value: "" },
          { label: "Rear Fast Charging USB", value: "-" },
          { label: "Luggage room Shelf", value: "-" },
          
        ],
      },
    },
    V: {
        ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1197cc(.001197m³)- 4 Cylinders (BS6 Phase2)" },
          { label: "Max Power", value: "66 kW @ 6000 rpm" },
          { label: "Torque", value: "113 Nm @ 4400 rpm" },
          { label: "Fuel efficiency (kilometer per litre)", value: "22.35 km/l (MT), 22.94 km/l (AMT)" },
          { label: "Idle start/stop", value: "All Variants" },
          
          
        ],
      },
      DIMENSIONS: {
        title: "DIMENSIONS",
        data: [
          { label: "Length X Width X Height", value: "3990 mm X 1745 mm X 1500 mm" },
          { label: "Wheelbase", value: "2521 mm" },
          { label: "Turning radius", value: "4.85 m" },
          { label: "Fuel Tank capacity", value: "37 litres" },
          { label: "Seating Capacity", value: "5N" },
          
          
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Suspension type Front", value: "MacPherson Strut" },
          { label: "Suspension type Rear", value: "Torsion Beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Brake type Front", value: "Disc" },
          { label: "Brake type Rear", value: "Drum" },
        ],
      },
      WEIGHT:{
        title: "WEIGHT",
        data: [
          { label: "Kerb weight (KG)", value: "920-955 (MT), 935-960 (AMT)" },
          { label: "Gross Weight (KG)", value: "1410" },
        ],
      },
      EXTERIOR:{
        title: "EXTERIOR",
        data: [
          { label: "Sporty Front bumper with Carbon fibre Texture element", value: "" },
          { label: "Body Coloured Bumpers", value: "" },
          { label: "Cool new Wide & Sharp front grill with Horizontal chrome bar plating", value: "" },
          { label: "New Sleek Alloy wheel + Tire 195/55 R16 (Diameter 40.64 cm)", value: "" },
          { label: "Steel wheel + Tire 185/65 R15 (Diameter 38.1 cm)", value: "" },
          { label: "Spare wheel (Steel wheel – 185/65 R15 Diameter 38.1 cm)", value: "" },
          { label: "Projector headlamp", value: "Halogen" },
          { label: "LED Fog lamps", value: "" },
          { label: "Auto headlamps with follow me home function", value: "" },
          { label: "LED Daytime Running Lamp (DRL)", value: "" },
          { label: "Turn lamp(Door mirrors)", value: "" },
          { label: "Tail lamp + Brake lamp + Highmounted stop lamp", value: "Halogen" },
          { label: "Rear window wiper & washer", value: "" },
          { label: "UV Protect Glass", value: "" },
          { label: "ORVM Body Coloured", value: "Black" },
          { label: "Outside door handle - chrome", value: "" },
          { label: "Outside door handle body coloured", value: "Black" },
          { label: "Back door / Trunk lid garnish", value: "" },
          { label: "Back door Spoiler", value: "" },
          { label: "Floating roof effect w A/B/C Pillar black out", value: "" },
        ],
      },
      SAFETY:{
        title: "SAFETY",
        data: [
          { label: "ABS / EBD", value: "" },
          { label: "Brake Assist", value: "" },
          { label: "Vehicle Stability Control (ESP)", value: "" },
          { label: "Hill hold control", value: "" },
          { label: "Automatically door lock by speed", value: "" },
          { label: "High speed alert system* (>80 Kilometer Per Hour)", value: "" },
          { label: "Immobilizer", value: "" },
          { label: "Front Airbags (Driver + Co-driver)", value: "" },
          { label: "Front side airbag", value: "" },
          { label: "Curtain airbag", value: "" },
          { label: "Front seat belt pre-tensioners and Force limiter (Driver + Co-driver)", value: "" },
          { label: "Seat belt reminder- front & rear", value: "3 point seat belt" },
          { label: "Rear seat belt type", value: "" },
          { label: "Isofix Anchorage", value: "" },
          { label: "Child-proof rear door locks", value: "" },
          
        ],
      },
      INTERIOR:{
        title: "INTERIOR",
        data: [
          { label: "Classy Dual Tone (Dashboard + Seats)", value: "" },
          { label: "Interactive TFT Tachometer display - Door ajar warning - Tachometer - Speedometer - Clock & outside temperature", value: "10.66 cm" },
          { label: "- Average fuel economy", value: "" },
          { label: "Leather wrapped steering wheel", value: "" },
          { label: "All New Smart Playcast Audio* (Touch Screen) [Smart phone connect (Android auto/Apple carplay), Hey Siri &", value: "22.86 cm" },
          { label: "Hello Google compatible, Smartplay cast Pro (Remote Control app), Smart Playcast Pro S (Audio OTA update)]", value: "" },
          { label: "Smart Playcast Audio* [Touch screen FM/AM/, Smart phone connect (Android auto/Apple carplay)]", value: "-" },
          { label: "Door speaker", value: "4N" },
          { label: "Tweeter", value: "2N" },
          { label: "Hey Toyota", value: "" },
          { label: "Premium sound system (Arkamys)", value: "" },
          { label: "Automatic Shift panel- Piano Black", value: "" },
        
        ],
      },
      CONNECT:{
        title: "TOYOTA I-CONNECT",
        data: [
          { label: "Remote check & Control (Lock/Unlock, Hazard lights, Headlights, Distance to empty)", value: "" },
          { label: "Smart Watch & Hey Siri Voice Assistance Compatibility", value: "" },
          { label: "Vehicle Safety & security - Auto collision notification, Tow alert, Geo fencing, Find my car & Valet profile", value: "" },
          { label: "Service connect - Vehicle health & Malfunction indicator", value: "" },
          
          
        ],
      },
      COMFORT:{
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Toyota i-Connect* (Connect to Toyota)", value: "" },
          { label: "ORVMs Electric adjust & retract", value: "(Auto)" },
          { label: "Manual ORVMS", value: "-" },
          { label: "Remote keyless entry", value: "" },
          { label: "All power windows", value: "" },
          { label: "Driver side Auto up/Down with Pinch Guard", value: "" },
          { label: "Key less push start system", value: "" },
          { label: "Head Up Display (HUD)", value: "" },
          { label: "360 Degree camera (Surround view)", value: "" },
          { label: "Back Camera", value: "" },
          { label: "Rear Parking sensor", value: "" },
          { label: "Gear shift indicator", value: "(Auto)" },
          { label: "Day / night rear view mirror", value: "" },
          { label: "Cruise control", value: "" },
          { label: "Adjustable Steering (Tilt + Telescopic)", value: "" },
          { label: "Steering mounted Audio & calling", value: "" },
          { label: "Driver seat height adjust", value: "" },
          { label: "Auto AC", value: "" },
          { label: "Rear A/C Vent", value: "" },
          { label: "Front center armrest with Slide", value: "" },
          { label: "Center console with cupholder", value: "" },
          { label: "Seat back pocket (Co-driver)", value: "" },
          { label: "60:40 Split rear seats", value: "" },
          { label: "Front seat adjustable headrest", value: "" },
          { label: "Rear seat adjustable headrest", value: "" },
          { label: "Room lamp (Roof center)", value: "" },
          { label: "Spot map lamp (Roof front)", value: "" },
          { label: "Luggage room lamp + Glove box light +Front footwell light", value: "-" },
          { label: "Interior light turn-on when IG OFF or Key open", value: "" },
          { label: "Pet bottle holder (Front door + Rear Door) 1000ml", value: "" },
          { label: "Co-Driver vanity mirror", value: "-" },
          { label: "Vanity mirror + Lamp + ticket holder (Driver + Co-driver)", value: "-" },
          { label: "Rear Defogger", value: "" },
          { label: "Rear Fast Charging USB", value: "-" },
          { label: "Luggage room Shelf", value: "-" },
          
        ],
      },
    },
  },

  "E-CNG": {
    S: {
      ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1197cc(.001197m³)- 4 Cylinders (BS6 Phase2)" },
          { label: "Max Power", value: "66 kW @ 6000 rpm" },
          { label: "Torque", value: "113 Nm @ 4400 rpm" },
          { label: "Fuel efficiency (kilometer per litre)", value: "22.35 km/l (MT), 22.94 km/l (AMT)" },
          { label: "Idle start/stop", value: "All Variants" },
          
          
        ],
      },
      DIMENSIONS: {
        title: "DIMENSIONS",
        data: [
          { label: "Length X Width X Height", value: "3990 mm X 1745 mm X 1500 mm" },
          { label: "Wheelbase", value: "2521 mm" },
          { label: "Turning radius", value: "4.85 m" },
          { label: "Fuel Tank capacity", value: "37 litres" },
          { label: "Seating Capacity", value: "5N" },
          
          
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Suspension type Front", value: "MacPherson Strut" },
          { label: "Suspension type Rear", value: "Torsion Beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Brake type Front", value: "Disc" },
          { label: "Brake type Rear", value: "Drum" },
        ],
      },
      WEIGHT:{
        title: "WEIGHT",
        data: [
          { label: "Kerb weight (KG)", value: "920-955 (MT), 935-960 (AMT)" },
          { label: "Gross Weight (KG)", value: "1410" },
        ],
      },
      EXTERIOR:{
        title: "EXTERIOR",
        data: [
          { label: "Sporty Front bumper with Carbon fibre Texture element", value: "" },
          { label: "Body Coloured Bumpers", value: "" },
          { label: "Cool new Wide & Sharp front grill with Horizontal chrome bar plating", value: "" },
          { label: "New Sleek Alloy wheel + Tire 195/55 R16 (Diameter 40.64 cm)", value: "" },
          { label: "Steel wheel + Tire 185/65 R15 (Diameter 38.1 cm)", value: "" },
          { label: "Spare wheel (Steel wheel – 185/65 R15 Diameter 38.1 cm)", value: "" },
          { label: "Projector headlamp", value: "Halogen" },
          { label: "LED Fog lamps", value: "" },
          { label: "Auto headlamps with follow me home function", value: "" },
          { label: "LED Daytime Running Lamp (DRL)", value: "" },
          { label: "Turn lamp(Door mirrors)", value: "" },
          { label: "Tail lamp + Brake lamp + Highmounted stop lamp", value: "Halogen" },
          { label: "Rear window wiper & washer", value: "" },
          { label: "UV Protect Glass", value: "" },
          { label: "ORVM Body Coloured", value: "Black" },
          { label: "Outside door handle - chrome", value: "" },
          { label: "Outside door handle body coloured", value: "Black" },
          { label: "Back door / Trunk lid garnish", value: "" },
          { label: "Back door Spoiler", value: "" },
          { label: "Floating roof effect w A/B/C Pillar black out", value: "" },
        ],
      },
      SAFETY:{
        title: "SAFETY",
        data: [
          { label: "ABS / EBD", value: "" },
          { label: "Brake Assist", value: "" },
          { label: "Vehicle Stability Control (ESP)", value: "" },
          { label: "Hill hold control", value: "" },
          { label: "Automatically door lock by speed", value: "" },
          { label: "High speed alert system* (>80 Kilometer Per Hour)", value: "" },
          { label: "Immobilizer", value: "" },
          { label: "Front Airbags (Driver + Co-driver)", value: "" },
          { label: "Front side airbag", value: "" },
          { label: "Curtain airbag", value: "" },
          { label: "Front seat belt pre-tensioners and Force limiter (Driver + Co-driver)", value: "" },
          { label: "Seat belt reminder- front & rear", value: "3 point seat belt" },
          { label: "Rear seat belt type", value: "" },
          { label: "Isofix Anchorage", value: "" },
          { label: "Child-proof rear door locks", value: "" },
          
        ],
      },
      INTERIOR:{
        title: "INTERIOR",
        data: [
          { label: "Classy Dual Tone (Dashboard + Seats)", value: "" },
          { label: "Interactive TFT Tachometer display - Door ajar warning - Tachometer - Speedometer - Clock & outside temperature", value: "Monochrome" },
          { label: "- Average fuel economy", value: "-" },
          { label: "Leather wrapped steering wheel", value: "-" },
          { label: "All New Smart Playcast Audio* (Touch Screen) [Smart phone connect (Android auto/Apple carplay), Hey Siri &", value: "-" },
          { label: "Hello Google compatible, Smartplay cast Pro (Remote Control app), Smart Playcast Pro S (Audio OTA update)]", value: "-" },
          { label: "Smart Playcast Audio* [Touch screen FM/AM/, Smart phone connect (Android auto/Apple carplay)]", value: "-" },
          { label: "Door speaker", value: "4N" },
          { label: "Tweeter", value: "-" },
          { label: "Hey Toyota", value: "-" },
          { label: "Premium sound system (Arkamys)", value: "-" },
          { label: "Automatic Shift panel- Piano Black", value: "-" },
        
        ],
      },
      CONNECT:{
        title: "TOYOTA I-CONNECT",
        data: [
          { label: "Remote check & Control (Lock/Unlock, Hazard lights, Headlights, Distance to empty)", value: "-" },
          { label: "Smart Watch & Hey Siri Voice Assistance Compatibility", value: "-" },
          { label: "Vehicle Safety & security - Auto collision notification, Tow alert, Geo fencing, Find my car & Valet profile", value: "-" },
          { label: "Service connect - Vehicle health & Malfunction indicator", value: "-" },
          
          
        ],
      },
      COMFORT:{
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Toyota i-Connect* (Connect to Toyota)", value: "" },
          { label: "ORVMs Electric adjust & retract", value: "-" },
          { label: "Manual ORVMS", value: "" },
          { label: "Remote keyless entry", value: "" },
          { label: "All power windows", value: "" },
          { label: "Driver side Auto up/Down with Pinch Guard", value: "" },
          { label: "Key less push start system", value: "-" },
          { label: "Head Up Display (HUD)", value: "-" },
          { label: "360 Degree camera (Surround view)", value: "-" },
          { label: "Back Camera", value: "-" },
          { label: "Rear Parking sensor", value: "" },
          { label: "Gear shift indicator", value: "" },
          { label: "Day / night rear view mirror", value: "" },
          { label: "Cruise control", value: "-" },
          { label: "Adjustable Steering (Tilt + Telescopic)", value: "(Tilt)" },
          { label: "Steering mounted Audio & calling", value: "-" },
          { label: "Driver seat height adjust", value: "-" },
          { label: "Auto AC", value: "" },
          { label: "Rear A/C Vent", value: "-" },
          { label: "Front center armrest with Slide", value: "-" },
          { label: "Center console with cupholder", value: "" },
          { label: "Seat back pocket (Co-driver)", value: "-" },
          { label: "60:40 Split rear seats", value: "" },
          { label: "Front seat adjustable headrest", value: "-" },
          { label: "Rear seat adjustable headrest", value: "" },
          { label: "Room lamp (Roof center)", value: "" },
          { label: "Spot map lamp (Roof front)", value: "-" },
          { label: "Luggage room lamp + Glove box light +Front footwell light", value: "-" },
          { label: "Interior light turn-on when IG OFF or Key open", value: "" },
          { label: "Pet bottle holder (Front door + Rear Door) 1000ml", value: "" },
          { label: "Co-Driver vanity mirror", value: "-" },
          { label: "Vanity mirror + Lamp + ticket holder (Driver + Co-driver)", value: "-" },
          { label: "Rear Defogger", value: "" },
          { label: "Rear Fast Charging USB", value: "-" },
          { label: "Luggage room Shelf", value: "-" },
          
        ],
      },
    },
    
    G: {ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1197cc(.001197m³)- 4 Cylinders (BS6 Phase2)" },
          { label: "Max Power", value: "66 kW @ 6000 rpm" },
          { label: "Torque", value: "113 Nm @ 4400 rpm" },
          { label: "Fuel efficiency (kilometer per litre)", value: "22.35 km/l (MT), 22.94 km/l (AMT)" },
          { label: "Idle start/stop", value: "All Variants" },
          
          
        ],
      },
      DIMENSIONS: {
        title: "DIMENSIONS",
        data: [
          { label: "Length X Width X Height", value: "3990 mm X 1745 mm X 1500 mm" },
          { label: "Wheelbase", value: "2521 mm" },
          { label: "Turning radius", value: "4.85 m" },
          { label: "Fuel Tank capacity", value: "37 litres" },
          { label: "Seating Capacity", value: "5N" },
          
          
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Suspension type Front", value: "MacPherson Strut" },
          { label: "Suspension type Rear", value: "Torsion Beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Brake type Front", value: "Disc" },
          { label: "Brake type Rear", value: "Drum" },
        ],
      },
      WEIGHT:{
        title: "WEIGHT",
        data: [
          { label: "Kerb weight (KG)", value: "920-955 (MT), 935-960 (AMT)" },
          { label: "Gross Weight (KG)", value: "1410" },
        ],
      },
      EXTERIOR:{
        title: "EXTERIOR",
        data: [
          { label: "Sporty Front bumper with Carbon fibre Texture element", value: "" },
          { label: "Body Coloured Bumpers", value: "" },
          { label: "Cool new Wide & Sharp front grill with Horizontal chrome bar plating", value: "" },
          { label: "New Sleek Alloy wheel + Tire 195/55 R16 (Diameter 40.64 cm)", value: "" },
          { label: "Steel wheel + Tire 185/65 R15 (Diameter 38.1 cm)", value: "" },
          { label: "Spare wheel (Steel wheel – 185/65 R15 Diameter 38.1 cm)", value: "" },
          { label: "Projector headlamp", value: "Halogen" },
          { label: "LED Fog lamps", value: "" },
          { label: "Auto headlamps with follow me home function", value: "" },
          { label: "LED Daytime Running Lamp (DRL)", value: "" },
          { label: "Turn lamp(Door mirrors)", value: "" },
          { label: "Tail lamp + Brake lamp + Highmounted stop lamp", value: "Halogen" },
          { label: "Rear window wiper & washer", value: "" },
          { label: "UV Protect Glass", value: "" },
          { label: "ORVM Body Coloured", value: "Black" },
          { label: "Outside door handle - chrome", value: "" },
          { label: "Outside door handle body coloured", value: "Black" },
          { label: "Back door / Trunk lid garnish", value: "" },
          { label: "Back door Spoiler", value: "" },
          { label: "Floating roof effect w A/B/C Pillar black out", value: "" },
        ],
      },
      SAFETY:{
        title: "SAFETY",
        data: [
          { label: "ABS / EBD", value: "" },
          { label: "Brake Assist", value: "" },
          { label: "Vehicle Stability Control (ESP)", value: "" },
          { label: "Hill hold control", value: "" },
          { label: "Automatically door lock by speed", value: "" },
          { label: "High speed alert system* (>80 Kilometer Per Hour)", value: "" },
          { label: "Immobilizer", value: "" },
          { label: "Front Airbags (Driver + Co-driver)", value: "" },
          { label: "Front side airbag", value: "" },
          { label: "Curtain airbag", value: "" },
          { label: "Front seat belt pre-tensioners and Force limiter (Driver + Co-driver)", value: "" },
          { label: "Seat belt reminder- front & rear", value: "3 point seat belt" },
          { label: "Rear seat belt type", value: "" },
          { label: "Isofix Anchorage", value: "" },
          { label: "Child-proof rear door locks", value: "" },
          
        ],
      },
      INTERIOR:{
        title: "INTERIOR",
        data: [
          { label: "Classy Dual Tone (Dashboard + Seats)", value: "" },
          { label: "Interactive TFT Tachometer display - Door ajar warning - Tachometer - Speedometer - Clock & outside temperature", value: "10.66 cm" },
          { label: "- Average fuel economy", value: "-" },
          { label: "Leather wrapped steering wheel", value: "-" },
          { label: "All New Smart Playcast Audio* (Touch Screen) [Smart phone connect (Android auto/Apple carplay), Hey Siri &", value: "17.78 cm" },
          { label: "Hello Google compatible, Smartplay cast Pro (Remote Control app), Smart Playcast Pro S (Audio OTA update)]", value: "-" },
          { label: "Smart Playcast Audio* [Touch screen FM/AM/, Smart phone connect (Android auto/Apple carplay)]", value: "-" },
          { label: "Door speaker", value: "4N" },
          { label: "Tweeter", value: "2N" },
          { label: "Hey Toyota", value: "-" },
          { label: "Premium sound system (Arkamys)", value: "-" },
          { label: "Automatic Shift panel- Piano Black", value: "-" },
        
        ],
      },
      CONNECT:{
        title: "TOYOTA I-CONNECT",
        data: [
          { label: "Remote check & Control (Lock/Unlock, Hazard lights, Headlights, Distance to empty)", value: "-" },
          { label: "Smart Watch & Hey Siri Voice Assistance Compatibility", value: "-" },
          { label: "Vehicle Safety & security - Auto collision notification, Tow alert, Geo fencing, Find my car & Valet profile", value: "-" },
          { label: "Service connect - Vehicle health & Malfunction indicator", value: "-" },
          
          
        ],
      },
      COMFORT:{
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Toyota i-Connect* (Connect to Toyota)", value: "" },
          { label: "ORVMs Electric adjust & retract", value: "-" },
          { label: "Manual ORVMS", value: "" },
          { label: "Remote keyless entry", value: "" },
          { label: "All power windows", value: "" },
          { label: "Driver side Auto up/Down with Pinch Guard", value: "" },
          { label: "Key less push start system", value: "-" },
          { label: "Head Up Display (HUD)", value: "-" },
          { label: "360 Degree camera (Surround view)", value: "-" },
          { label: "Back Camera", value: "-" },
          { label: "Rear Parking sensor", value: "" },
          { label: "Gear shift indicator", value: "" },
          { label: "Day / night rear view mirror", value: "" },
          { label: "Cruise control", value: "-" },
          { label: "Adjustable Steering (Tilt + Telescopic)", value: "" },
          { label: "Steering mounted Audio & calling", value: "-" },
          { label: "Driver seat height adjust", value: "-" },
          { label: "Auto AC", value: "" },
          { label: "Rear A/C Vent", value: "-" },
          { label: "Front center armrest with Slide", value: "-" },
          { label: "Center console with cupholder", value: "" },
          { label: "Seat back pocket (Co-driver)", value: "-" },
          { label: "60:40 Split rear seats", value: "" },
          { label: "Front seat adjustable headrest", value: "-" },
          { label: "Rear seat adjustable headrest", value: "" },
          { label: "Room lamp (Roof center)", value: "" },
          { label: "Spot map lamp (Roof front)", value: "-" },
          { label: "Luggage room lamp + Glove box light +Front footwell light", value: "-" },
          { label: "Interior light turn-on when IG OFF or Key open", value: "" },
          { label: "Pet bottle holder (Front door + Rear Door) 1000ml", value: "" },
          { label: "Co-Driver vanity mirror", value: "-" },
          { label: "Vanity mirror + Lamp + ticket holder (Driver + Co-driver)", value: "-" },
          { label: "Rear Defogger", value: "" },
          { label: "Rear Fast Charging USB", value: "-" },
          { label: "Luggage room Shelf", value: "-" },
          
        ],
      },},
    
  },
};
const disclaimerPoints = [
  "1 - VDA Method",
  "2 - Fuel Efficiency as Certified by Test Agency under Rule 115 of CMVR, 1989 under standard Test Conditions.",
  "3-Spare Wheel Material is Steel & Spare Tyre Size is 185/65 R15 Diameter 38.1 cm.",
  "4-Application Features & Displays may vary depending on different Operating Systems or Smartphone Devices used. Avoid using the phone while driving for your safety. Apple CarPlay & Hey Siri Voice assistance is registered trademark of Apple Inc. Android Auto & Hello Google voice assistance is registered Trademark of Google Inc. Bluetooth is a registered Trademark of Bluetooth SIG",
  "5-Application features of displays may depend on different operating systems or smart Devices. The connected feature also further depends on the network availability of the device fitted on the car & Smartphone network provider. Hey Siri is a trademark registered of Apple Inc. Unlock feature execution through smart devices only when locked through smart devices. Auto collision notification trigger depends on emergency contact only when Airbag is deployed & the Smartphone network.",
  "Vehicle pictured and specifications detailed in this brochure may vary between models & equipment. Addition of Features may change figures in this chart. Actual colour of the vehicle body & upholstery might differ slightly from images depicted in this brochure. Features are grade specific. Toyota Kirloskar Motor Pvt Ltd reserves the right to alter the details of specifications and equipment without a notice."
];

/* ===================== COMPONENT ===================== */
export default function TechnicalSpecifications() {
  const [fuel, setFuel] = useState<FuelType>("Petrol");
  const [variant, setVariant] = useState<Variant>("E");
  const [showAllSpecs, setShowAllSpecs] = useState(true);

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const currentSpecs = specifications[fuel][variant];

const totalRows = SECTION_ROWS.filter(row =>
  row.some(key => currentSpecs?.[key])
).length;


  return (
    <>
      <style>{`
  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 1600px;
    margin: auto;
    padding: 30px 20px;
    color: #000;
    font-family: Arial, Helvetica, sans-serif;
  }

  .title {
    text-align: center;
    font-size: 22px;
    margin-bottom: 25px;
    letter-spacing: 1px;
  }

.fuel-bar {
  display: flex;
  justify-content: center;
  gap: 6px;
  background: #e5e5e5;
  height: 48px;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 4px;
}

.fuel-tab {
  flex: 1;
  max-width: 260px;   /* desktop width */
  border-radius: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;
}



  .fuel-tab.active {
    background: #5fbf1f;
    color: #fff;
    font-weight: 600;
    
  }

  /* Variant bar */
  .variant-bar {
    display: flex;
    background: #e5e5e5;
    height: 44px;
    margin-bottom: 35px;
    border-radius: 5px;
    overflow: hidden;
  }

  .variant-tab {
    flex: 1;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 14px;
    position: relative;
    transition: all 0.3s ease;
  }

  .variant-tab:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 10px;
    width: 1px;
    height: 24px;
    background: #000;
  }

  .variant-tab.active {
    background: #5fbf1f;
    color: #fff;
    font-weight: 600;
  }

  /* Spec grid */
  .spec-grid {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .spec-row-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  .spec-section {
    margin-bottom: 25px;
  }

  .spec-title {
    color: red;
    font-size: 15px;
    font-weight: 600;
    border-right: 2px solid red;
    border-top: 2px solid red;
    padding: 10px 12px;
    margin-bottom: 10px;
    width: 170px;
    max-width: 100%;
  }

  .spec-row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    font-size: 14px;
    word-break: break-word;
  }

  /* View all button */
  .view-all {
    text-align: center;
    margin: 30px 0;
  }

  .view-all button {
    background: #e60000;
    color: #fff;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 5px;
  }

  /* Disclaimer */
  .disclaimer {
    font-size: 13px;
    color: #333;
    margin-top: 40px;
  }

  .disclaimer button {
    background: #e60000;
    color: #fff;
    border: none;
    padding: 8px 20px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 13px;
    border-radius: 5px;
  }

  /* MEDIA QUERIES */
  @media (max-width: 1024px) {
    .spec-row-pair {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    .spec-title {
      width: 100%;
      border-right: none;
      border-top: 2px solid red;
    }
  }

  @media (max-width: 768px) {
    .fuel-tab {
    max-width: 200px;
    font-size: 14px;
  }
    .variant-bar {
      flex-direction: column;
      height: auto;
    }
    .variant-tab:not(:last-child)::after {
      display: none;
    }
    .spec-grid {
      gap: 25px;
    }
    .spec-row {
      flex-direction: column;
      gap: 5px;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 18px;
    }
    .fuel-bar {
    flex-direction: column;
    height: auto;
  }

  .fuel-tab {
    max-width: 100%;
    padding: 10px 0;
    font-size: 13px;
  }
    .spec-title {
      font-size: 14px;
      padding: 8px;
    }
    .spec-row {
      font-size: 13px;
    }
    .view-all button,
    .disclaimer button {
      padding: 8px 20px;
      font-size: 12px;
    }
  }
`}</style>


      <div className="container" style={{backgroundColor:"white"}}>
        <div className="title">TECHNICAL SPECIFICATIONS</div>

        {/* Fuel */}
        <div className="fuel-bar">
          {(["Petrol", "E-CNG"] as FuelType[]).map((f) => (
            <button
              key={f}
              className={`fuel-tab ${fuel === f ? "active" : ""}`}
              onClick={() => setFuel(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Variant */}
        <div className="variant-bar">
  {VARIANTS_BY_FUEL[fuel].map((v) => (
    <button
      key={v}
      className={`variant-tab ${variant === v ? "active" : ""}`}
      onClick={() => setVariant(v)}
    >
      Glanza {v}
    </button>
  ))}
</div>


       <div className="spec-grid">
  {(showAllSpecs ? SECTION_ROWS : SECTION_ROWS.slice(0, 2)).map(
    (row, rowIndex) => (
      <div key={rowIndex} className="spec-row-pair">
        {row.map((key) => {
          const section = currentSpecs?.[key];
          if (!section) return <div key={key}></div>;

          return (
            <div key={key} className="spec-section">
              <div className="spec-title">{section.title}</div>
              {section.data.map((item, idx) => (
                <div key={idx} className="spec-row">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    )
  )}
</div>



        {/* View all */}
        {totalRows > 2 && (
  <div className="view-all">
    <button onClick={() => setShowAllSpecs(!showAllSpecs)}>
      {showAllSpecs ? "VIEW LESS" : "VIEW ALL"}
    </button>
  </div>
)}


        {/* Disclaimer */}
      <div className="disclaimer">
  <strong style={{fontWeight:"bolder",fontSize:"20px"}}>DISCLAIMER:</strong>

  <p style={{fontSize:"16px"}}>Disclaimer for</p>

  {/* Always visible points */}
  <p style={{fontFamily:"serif",fontWeight:"bold",}}>{disclaimerPoints[0]}</p>

  {/* View More points */}
  {showDisclaimer &&
    disclaimerPoints.slice(1).map((point, index) => (
      <p key={index}style={{fontFamily:"serif",fontWeight:"bold"}}>* {point}</p>
    ))}

  <button onClick={() => setShowDisclaimer(!showDisclaimer)}>
    {showDisclaimer ? "VIEW LESS" : "VIEW MORE"}
  </button>
</div>

      </div>
    </>
  );
}
