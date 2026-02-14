// "use client";
// import { useState } from "react";

// /* ===================== TYPES ===================== */
// type Powertrain = "E-CNG" | "NEODRIVE" | "HYBRID";

// type Variant =
//   | "E CNG-S"
//   | "E CNG-G"
//   | "NEODRIVE -E"
//   | "NEODRIVE-S"
//   | "NEODRIVE-G(O)"
//   | "NEODRIVE-V"
//   | "HYBRID-S"
//   | "HYBRID-G(O)"
//   | "HYBRID-V";

// const VARIANTS_BY_POWERTRAIN: Record<Powertrain, Variant[]> = {
//   "E-CNG": ["E CNG-S", "E CNG-G"],
//   NEODRIVE: ["NEODRIVE -E", "NEODRIVE-S", "NEODRIVE-G(O)", "NEODRIVE-V"],
//   HYBRID: ["HYBRID-S", "HYBRID-G(O)", "HYBRID-V"],
// };

// interface SpecItem {
//   label: string;
//   value: string;
// }

// interface SpecSection {
//   title: string;
//   data: SpecItem[];
// }

// interface VariantSpecs {
//   ENGINE?: SpecSection;
//   TRANSMISSION?: SpecSection;
//   DRIVE?: SpecSection;
//   DIMENSIONS?: SpecSection;
//   SUSPENSION?: SpecSection;
//   BRAKES?: SpecSection;
//   WHEEL_TYRE?: SpecSection;
//   FEATURES?: SpecSection;
// }


// /* ===================== SPEC DATA ===================== */
// /* ===================== SPEC DATA ===================== */
// const specifications: Record<Powertrain, Record<Variant, VariantSpecs>> = {
//   HYBRID: {
//     "HYBRID-V": {
//       ENGINE: {
//         title: "ENGINE",
//         data: [
//           { label: "Engine Capacity - No of cylinders", value: "1490 cm³ / 3" },
//           { label: "Max Power", value: "68 kW (92.45PS) @ 5500 rpm" },
//           { label: "Max Torque", value: "122 Nm @ 4400 - 4800 rpm" },
//           { label: "Total system Max.Power", value: "85 kW (115.56PS)" },
//           { label: "Battery type", value: "Lithium-ion" },
//           { label: "Battery Voltage", value: "177.6 V" },
//           { label: "Motor Generator type", value: "AC Synchronous Motor" },
//           { label: "Hybrid System Max. Power", value: "59 kW (80.2 PS) @ 3995 rpm" },
//           { label: "Hybrid System Max. Torque", value: "141 Nm @ 0 - 3995 rpm" },
//           { label: "OBD", value: "OBD2" },
//           { label: "ISG", value: "ISG -" },
//         ],
//       },
//       TRANSMISSION: {
//         title: "TRANSMISSION",
//         data: [{ label: "Type", value: "e-Drive" }],
//       },
//       DRIVE: {
//         title: "DRIVE",
//         data: [{ label: "Type", value: "2WD" }],
//       },
//       DIMENSIONS: {
//         title: "DIMENSIONS & WEIGHT",
//         data: [
//           { label: "Length x Width x Height", value: "4365 mm x 1795 mm x 1645 mm" },
//           { label: "Wheelbase", value: "2600 mm" },
//           { label: "Turning radius", value: "5.4 m" },
//           { label: "Fuel Tank capacity", value: "0.045 m³ (45 L)" },
//           { label: "Fuel Efficiency", value: "27.97 kmpl" },
//           { label: "Seating Capacity", value: "5" },
//           { label: "Kerb weight", value: "1255 - 1285 kg" },
//           { label: "Gross Weight", value: "1755 kg" },
//         ],
//       },
//       SUSPENSION: {
//         title: "SUSPENSION",
//         data: [
//           { label: "Front", value: "MacPherson strut" },
//           { label: "Rear", value: "Torsion beam" },
//         ],
//       },
//       BRAKES: {
//         title: "BRAKES",
//         data: [
//           { label: "Front", value: "Ventilated disc" },
//           { label: "Rear", value: "Solid disc" },
//           { label: "EPB", value: "-" },
//         ],
//       },
//       WHEEL_TYRE: {
//         title: "WHEEL & TYRE",
//         data: [
//           { label: "Size", value: "215 / 60 R17 (43.18 cm)" },
//           { label: "Wheel Type", value: "Steel wheel with Full wheel cap" },
//           { label: "Tire repair kit", value: "Included" },
//         ],
//       },
//       EXTERIOR: {
//         title: "EXTERIOR",
//         data: [
//           { label: "Headlamp", value: "Projector Bi-Halogen (w/chrome plating)" },
//           { label: "LED Position lamp", value: "Included" },
//           { label: "Twin LED Day-time running lamp / Side turn lamp", value: "Included" },
//           { label: "Auto Headlight", value: "-" },
//           { label: "Headlight levelling (manual)", value: "Included" },
//           { label: "LED Tail Stop Lamp", value: "Included" },
//           { label: "High mount stop lamp", value: "Included" },
//           { label: "Follow me home headlamp", value: "-" },
//           { label: "ORVM with turn indicator", value: "Included" },
//           { label: "Front Upper Grill", value: "Unique crystal acrylic type" },
//           { label: "Black wheel arch cladding", value: "Front & rear" },
//           { label: "Back door garnish", value: "Chrome" },
//           { label: "Roof Rails", value: "Silver" },
//           { label: "Skid Plate", value: "Front & Rear Silver" },
//           { label: "Front Variable Intermittent wiper", value: "-" },
//           { label: "Rear window wiper & washer", value: "-" },
//           { label: "Green Glass", value: "Front Windshield / Doors / Quarter / Back Door" },
//           { label: "Optional Stylish Dual Tone Exterior", value: "-" },
//           { label: "Roof end spoiler", value: "Included" },
//           { label: "Side under protection garnish", value: "Included" },
//           { label: "Sharkfin Antenna", value: "Included" },
//           { label: "Chrome belt line garnish", value: "-" },
//           { label: "Body color outside door handle", value: "Included" },
//         ],
//       },
//       INTERIOR: {
//         title: "INTERIOR",
//         data: [
//           { label: "Interior color", value: "Dual tone Black x Brown" },
//           { label: "Ambient lighting", value: "-" },
//           { label: "Smart Playcast Touchscreen Audio", value: "7 inch, MP3/AM/FM/Bluetooth/USB/Apple CarPlay/Android Auto" },
//           { label: "Arkamys Sound tuning", value: "-" },
//           { label: "Premium Audio", value: "-" },
//           { label: "Speakers", value: "4 Speakers + 2 Tweeters" },
//           { label: "Information display", value: "TFT Color 7 inch" },
//           { label: "Soft touch IP with premium stitch", value: "-" },
//           { label: "Chrome inside door handle", value: "Included" },
//           { label: "IP Garnish", value: "Gloss Silver" },
//           { label: "Front ventilation knob", value: "Satin chrome" },
//           { label: "Centre ventilation knob & fin", value: "Satin silver" },
//           { label: "Steering Garnish", value: "Satin chrome" },
//           { label: "Shift Garnish", value: "Gloss black paint + Satin silver (Resin)" },
//           { label: "Hazard Garnish (Outer)", value: "Satin silver (Resin)" },
//           { label: "Air conditioner Control Panel", value: "Matte black" },
//           { label: "Rear AC vent Garnish & Knob", value: "Satin chrome (Resin)" },
//           { label: "Front door garnish", value: "Silver" },
//           { label: "Door armrest", value: "Black Fabric" },
//           { label: "Switch bezel", value: "-" },
//           { label: "Artificial Leather seats", value: "Brown fabric with perforations" },
//           { label: "Leather Steering wheel", value: "-" },
//           { label: "Assist Grips", value: "3 Units" },
//           { label: "Luggage Shelf Strings", value: "-" },
//           { label: "Spot map lamp", value: "Roof front" },
//           { label: "Reading Lamp", value: "One on each side of the roof" },
//           { label: "Trunk/Luggage room lamp", value: "Included" },
//           { label: "Glove box light", value: "-" },
//           { label: "Front footwell light", value: "Driver & Co driver side" },
//           { label: "Courtesy lamp", value: "-" },
//         ],
//       },
//       SAFETY: {
//         title: "SAFETY & SECURITY",
//         data: [
//           { label: "Dual Front Airbags", value: "Driver + Co Driver" },
//           { label: "Front Side and Curtain Airbag", value: "Included" },
//           { label: "Surround View Monitor", value: "360 degree camera -" },
//           { label: "Reverse Parking Camera", value: "Included" },
//           { label: "Front seatbelt pre-tension & force limiter", value: "Included" },
//           { label: "Adjustable shoulder anchor", value: "Front seatbelts" },
//           { label: "Rear seats belts type", value: "Side:3 points / Center:3 points" },
//           { label: "Seat belt reminder", value: "Front & Rear Lamp + Buzzer" },
//           { label: "ISOFIX Child Seat Restraint System", value: "Included" },
//           { label: "ABS with EBD", value: "Included" },
//           { label: "Vehicle Stability Control", value: "Included" },
//           { label: "Hill Hold Control", value: "Included" },
//           { label: "Hill descendant", value: "-" },
//           { label: "Tire-pressure monitoring system (TPMS)", value: "Included" },
//           { label: "Immobilizer", value: "Included" },
//           { label: "Advanced Body Structure (TECT Body)", value: "Included" },
//           { label: "Side Impact Protection Beam", value: "Included" },
//           { label: "Pedal release system", value: "Included" },
//           { label: "Rear Parking Sensors", value: "Included" },
//           { label: "Day/night rear view mirror", value: "Manual" },
//           { label: "Child-proof rear door locks", value: "Included" },
//           { label: "Warning Lamp/ Reminder", value: "Low Fuel, Door Ajar, Headlamp On" },
//           { label: "Speed Warning Buzzer", value: "Included" },
//         ],
//       },
//       COMFORT: {
//         title: "COMFORT & CONVENIENCE",
//         data: [
//           { label: "Panoramic Roof", value: "-" },
//           { label: "Head-up Display", value: "-" },
//           { label: "Front Wireless Charger", value: "-" },
//           { label: "Toyota i-Connect", value: "Included" },
//           { label: "Front sliding armrest", value: "With storage" },
//           { label: "USB Ports", value: "Front x1 / Rear x2" },
//           { label: "USB Charger Rear", value: "High speed type 15w Type C x2" },
//           { label: "Adjustable Tilt & Telescopic steering", value: "Included" },
//           { label: "Power Steering (EPS)", value: "Included" },
//           { label: "Cruise Control", value: "Included" },
//           { label: "Steering mounted commands", value: "Audio, BT, Cruise control" },
//           { label: "Paddle Shift", value: "-" },
//           { label: "Auto air conditioner", value: "Included" },
//           { label: "Rear AC vents", value: "Included" },
//           { label: "PM2.5 filter & display", value: "AQI Display in Infotainment DA" },
//           { label: "Ventilated seats (D+P)", value: "-" },
//           { label: "Drive mode switch", value: "THS" },
//           { label: "Driver seat height adjust", value: "Included" },
//           { label: "Seat back pocket", value: "D+P" },
//           { label: "Separately folding rear seat backs & cushions", value: "60/40" },
//           { label: "Reclining rear seats", value: "Included" },
//           { label: "Rear headrest", value: "Removable type (3 Units)" },
//           { label: "Rear center armrest with cupholder", value: "Included" },
//           { label: "Power Seat", value: "-" },
//           { label: "Keyless Entry", value: "Included" },
//           { label: "Push start/stop button", value: "Included" },
//           { label: "Power door locks (Central Locking)", value: "Included" },
//           { label: "Front & rear door pet bottle holder", value: "1000ml" },
//           { label: "Power windows", value: "D-side auto up/down" },
//           { label: "Auto folding outside mirror", value: "-" },
//           { label: "Electric outside mirrors", value: "Electric fold" },
//           { label: "D+P vanity mirror", value: "Included" },
//           { label: "D+P vanity mirror lamp", value: "Included" },
//           { label: "D+P ticket holder", value: "Included" },
//           { label: "Centre console with cupholder", value: "2 cups" },
//           { label: "Accessory socket (Center console)", value: "Included" },
//           { label: "Accessory socket (Luggage room)", value: "Included" },
//           { label: "Gear Shift indicator", value: "-" },
//           { label: "Driver footrest", value: "Included" },
//           { label: "Rear door Sunshade", value: "Included" },
//         ],
//       },
//     },
//     "HYBRID-G(O)": {
//      ENGINE: {
//         title: "ENGINE",
//         data: [
//           { label: "Engine Capacity - No of cylinders", value: "1490 cm³ / 3" },
//           { label: "Max Power", value: "68 kW (92.45PS) @ 5500 rpm" },
//           { label: "Max Torque", value: "122 Nm @ 4400 - 4800 rpm" },
//           { label: "Total system Max.Power", value: "85 kW (115.56PS)" },
//           { label: "Battery type", value: "Lithium-ion" },
//           { label: "Battery Voltage", value: "177.6 V" },
//           { label: "Motor Generator type", value: "AC Synchronous Motor" },
//           { label: "Hybrid System Max. Power", value: "59 kW (80.2 PS) @ 3995 rpm" },
//           { label: "Hybrid System Max. Torque", value: "141 Nm @ 0 - 3995 rpm" },
//           { label: "OBD", value: "OBD2" },
//           { label: "ISG", value: "ISG -" },
//         ],
//       },
//       TRANSMISSION: {
//         title: "TRANSMISSION",
//         data: [{ label: "Type", value: "e-Drive" }],
//       },
//       DRIVE: {
//         title: "DRIVE",
//         data: [{ label: "Type", value: "2WD" }],
//       },
//       DIMENSIONS: {
//         title: "DIMENSIONS & WEIGHT",
//         data: [
//           { label: "Length x Width x Height", value: "4365 mm x 1795 mm x 1645 mm" },
//           { label: "Wheelbase", value: "2600 mm" },
//           { label: "Turning radius", value: "5.4 m" },
//           { label: "Fuel Tank capacity", value: "0.045 m³ (45 L)" },
//           { label: "Fuel Efficiency", value: "27.97 kmpl" },
//           { label: "Seating Capacity", value: "5" },
//           { label: "Kerb weight", value: "1255 - 1285 kg" },
//           { label: "Gross Weight", value: "1755 kg" },
//         ],
//       },
//       SUSPENSION: {
//         title: "SUSPENSION",
//         data: [
//           { label: "Front", value: "MacPherson strut" },
//           { label: "Rear", value: "Torsion beam" },
//         ],
//       },
//       BRAKES: {
//         title: "BRAKES",
//         data: [
//           { label: "Front", value: "Ventilated disc" },
//           { label: "Rear", value: "Solid disc" },
//           { label: "EPB", value: "-" },
//         ],
//       },
//       WHEEL_TYRE: {
//         title: "WHEEL & TYRE",
//         data: [
//           { label: "Size", value: "215 / 60 R17 (43.18 cm)" },
//           { label: "Wheel Type", value: "Steel wheel with Full wheel cap" },
//           { label: "Tire repair kit", value: "Included" },
//         ],
//       },
//       EXTERIOR: {
//         title: "EXTERIOR",
//         data: [
//           { label: "Headlamp", value: "Projector Bi-Halogen (w/chrome plating)" },
//           { label: "LED Position lamp", value: "Included" },
//           { label: "Twin LED Day-time running lamp / Side turn lamp", value: "Included" },
//           { label: "Auto Headlight", value: "-" },
//           { label: "Headlight levelling (manual)", value: "Included" },
//           { label: "LED Tail Stop Lamp", value: "Included" },
//           { label: "High mount stop lamp", value: "Included" },
//           { label: "Follow me home headlamp", value: "-" },
//           { label: "ORVM with turn indicator", value: "Included" },
//           { label: "Front Upper Grill", value: "Unique crystal acrylic type" },
//           { label: "Black wheel arch cladding", value: "Front & rear" },
//           { label: "Back door garnish", value: "Chrome" },
//           { label: "Roof Rails", value: "Silver" },
//           { label: "Skid Plate", value: "Front & Rear Silver" },
//           { label: "Front Variable Intermittent wiper", value: "-" },
//           { label: "Rear window wiper & washer", value: "-" },
//           { label: "Green Glass", value: "Front Windshield / Doors / Quarter / Back Door" },
//           { label: "Optional Stylish Dual Tone Exterior", value: "-" },
//           { label: "Roof end spoiler", value: "Included" },
//           { label: "Side under protection garnish", value: "Included" },
//           { label: "Sharkfin Antenna", value: "Included" },
//           { label: "Chrome belt line garnish", value: "-" },
//           { label: "Body color outside door handle", value: "Included" },
//         ],
//       },
//       INTERIOR: {
//         title: "INTERIOR",
//         data: [
//           { label: "Interior color", value: "Dual tone Black x Brown" },
//           { label: "Ambient lighting", value: "-" },
//           { label: "Smart Playcast Touchscreen Audio", value: "7 inch, MP3/AM/FM/Bluetooth/USB/Apple CarPlay/Android Auto" },
//           { label: "Arkamys Sound tuning", value: "-" },
//           { label: "Premium Audio", value: "-" },
//           { label: "Speakers", value: "4 Speakers + 2 Tweeters" },
//           { label: "Information display", value: "TFT Color 7 inch" },
//           { label: "Soft touch IP with premium stitch", value: "-" },
//           { label: "Chrome inside door handle", value: "Included" },
//           { label: "IP Garnish", value: "Gloss Silver" },
//           { label: "Front ventilation knob", value: "Satin chrome" },
//           { label: "Centre ventilation knob & fin", value: "Satin silver" },
//           { label: "Steering Garnish", value: "Satin chrome" },
//           { label: "Shift Garnish", value: "Gloss black paint + Satin silver (Resin)" },
//           { label: "Hazard Garnish (Outer)", value: "Satin silver (Resin)" },
//           { label: "Air conditioner Control Panel", value: "Matte black" },
//           { label: "Rear AC vent Garnish & Knob", value: "Satin chrome (Resin)" },
//           { label: "Front door garnish", value: "Silver" },
//           { label: "Door armrest", value: "Black Fabric" },
//           { label: "Switch bezel", value: "-" },
//           { label: "Artificial Leather seats", value: "Brown fabric with perforations" },
//           { label: "Leather Steering wheel", value: "-" },
//           { label: "Assist Grips", value: "3 Units" },
//           { label: "Luggage Shelf Strings", value: "-" },
//           { label: "Spot map lamp", value: "Roof front" },
//           { label: "Reading Lamp", value: "One on each side of the roof" },
//           { label: "Trunk/Luggage room lamp", value: "Included" },
//           { label: "Glove box light", value: "-" },
//           { label: "Front footwell light", value: "Driver & Co driver side" },
//           { label: "Courtesy lamp", value: "-" },
//         ],
//       },
//       SAFETY: {
//         title: "SAFETY & SECURITY",
//         data: [
//           { label: "Dual Front Airbags", value: "Driver + Co Driver" },
//           { label: "Front Side and Curtain Airbag", value: "Included" },
//           { label: "Surround View Monitor", value: "360 degree camera -" },
//           { label: "Reverse Parking Camera", value: "Included" },
//           { label: "Front seatbelt pre-tension & force limiter", value: "Included" },
//           { label: "Adjustable shoulder anchor", value: "Front seatbelts" },
//           { label: "Rear seats belts type", value: "Side:3 points / Center:3 points" },
//           { label: "Seat belt reminder", value: "Front & Rear Lamp + Buzzer" },
//           { label: "ISOFIX Child Seat Restraint System", value: "Included" },
//           { label: "ABS with EBD", value: "Included" },
//           { label: "Vehicle Stability Control", value: "Included" },
//           { label: "Hill Hold Control", value: "Included" },
//           { label: "Hill descendant", value: "-" },
//           { label: "Tire-pressure monitoring system (TPMS)", value: "Included" },
//           { label: "Immobilizer", value: "Included" },
//           { label: "Advanced Body Structure (TECT Body)", value: "Included" },
//           { label: "Side Impact Protection Beam", value: "Included" },
//           { label: "Pedal release system", value: "Included" },
//           { label: "Rear Parking Sensors", value: "Included" },
//           { label: "Day/night rear view mirror", value: "Manual" },
//           { label: "Child-proof rear door locks", value: "Included" },
//           { label: "Warning Lamp/ Reminder", value: "Low Fuel, Door Ajar, Headlamp On" },
//           { label: "Speed Warning Buzzer", value: "Included" },
//         ],
//       },
//       COMFORT: {
//         title: "COMFORT & CONVENIENCE",
//         data: [
//           { label: "Panoramic Roof", value: "-" },
//           { label: "Head-up Display", value: "-" },
//           { label: "Front Wireless Charger", value: "-" },
//           { label: "Toyota i-Connect", value: "Included" },
//           { label: "Front sliding armrest", value: "With storage" },
//           { label: "USB Ports", value: "Front x1 / Rear x2" },
//           { label: "USB Charger Rear", value: "High speed type 15w Type C x2" },
//           { label: "Adjustable Tilt & Telescopic steering", value: "Included" },
//           { label: "Power Steering (EPS)", value: "Included" },
//           { label: "Cruise Control", value: "Included" },
//           { label: "Steering mounted commands", value: "Audio, BT, Cruise control" },
//           { label: "Paddle Shift", value: "-" },
//           { label: "Auto air conditioner", value: "Included" },
//           { label: "Rear AC vents", value: "Included" },
//           { label: "PM2.5 filter & display", value: "AQI Display in Infotainment DA" },
//           { label: "Ventilated seats (D+P)", value: "-" },
//           { label: "Drive mode switch", value: "THS" },
//           { label: "Driver seat height adjust", value: "Included" },
//           { label: "Seat back pocket", value: "D+P" },
//           { label: "Separately folding rear seat backs & cushions", value: "60/40" },
//           { label: "Reclining rear seats", value: "Included" },
//           { label: "Rear headrest", value: "Removable type (3 Units)" },
//           { label: "Rear center armrest with cupholder", value: "Included" },
//           { label: "Power Seat", value: "-" },
//           { label: "Keyless Entry", value: "Included" },
//           { label: "Push start/stop button", value: "Included" },
//           { label: "Power door locks (Central Locking)", value: "Included" },
//           { label: "Front & rear door pet bottle holder", value: "1000ml" },
//           { label: "Power windows", value: "D-side auto up/down" },
//           { label: "Auto folding outside mirror", value: "-" },
//           { label: "Electric outside mirrors", value: "Electric fold" },
//           { label: "D+P vanity mirror", value: "Included" },
//           { label: "D+P vanity mirror lamp", value: "Included" },
//           { label: "D+P ticket holder", value: "Included" },
//           { label: "Centre console with cupholder", value: "2 cups" },
//           { label: "Accessory socket (Center console)", value: "Included" },
//           { label: "Accessory socket (Luggage room)", value: "Included" },
//           { label: "Gear Shift indicator", value: "-" },
//           { label: "Driver footrest", value: "Included" },
//           { label: "Rear door Sunshade", value: "Included" },
//         ],
//       },
//     },
//       "HYBRID-S": {
//       ENGINE: {
//         title: "ENGINE",
//         data: [
//           { label: "Engine Capacity - No of cylinders", value: "1490 cm³ / 3" },
//           { label: "Max Power", value: "68 kW (92.45PS) @ 5500 rpm" },
//           { label: "Max Torque", value: "122 Nm @ 4400 - 4800 rpm" },
//           { label: "Total system Max.Power", value: "85 kW (115.56PS)" },
//           { label: "Battery type", value: "Lithium-ion" },
//           { label: "Battery Voltage", value: "177.6 V" },
//           { label: "Motor Generator type", value: "AC Synchronous Motor" },
//           { label: "Hybrid System Max. Power", value: "59 kW (80.2 PS) @ 3995 rpm" },
//           { label: "Hybrid System Max. Torque", value: "141 Nm @ 0 - 3995 rpm" },
//           { label: "OBD", value: "OBD2" },
//           { label: "ISG", value: "ISG -" },
//         ],
//       },
//       TRANSMISSION: {
//         title: "TRANSMISSION",
//         data: [{ label: "Type", value: "e-Drive" }],
//       },
//       DRIVE: {
//         title: "DRIVE",
//         data: [{ label: "Type", value: "2WD" }],
//       },
//       DIMENSIONS: {
//         title: "DIMENSIONS & WEIGHT",
//         data: [
//           { label: "Length x Width x Height", value: "4365 mm x 1795 mm x 1645 mm" },
//           { label: "Wheelbase", value: "2600 mm" },
//           { label: "Turning radius", value: "5.4 m" },
//           { label: "Fuel Tank capacity", value: "0.045 m³ (45 L)" },
//           { label: "Fuel Efficiency", value: "27.97 kmpl" },
//           { label: "Seating Capacity", value: "5" },
//           { label: "Kerb weight", value: "1255 - 1285 kg" },
//           { label: "Gross Weight", value: "1755 kg" },
//         ],
//       },
//       SUSPENSION: {
//         title: "SUSPENSION",
//         data: [
//           { label: "Front", value: "MacPherson strut" },
//           { label: "Rear", value: "Torsion beam" },
//         ],
//       },
//       BRAKES: {
//         title: "BRAKES",
//         data: [
//           { label: "Front", value: "Ventilated disc" },
//           { label: "Rear", value: "Solid disc" },
//           { label: "EPB", value: "-" },
//         ],
//       },
//       WHEEL_TYRE: {
//         title: "WHEEL & TYRE",
//         data: [
//           { label: "Size", value: "215 / 60 R17 (43.18 cm)" },
//           { label: "Wheel Type", value: "Steel wheel with Full wheel cap" },
//           { label: "Tire repair kit", value: "Included" },
//         ],
//       },
//       EXTERIOR: {
//         title: "EXTERIOR",
//         data: [
//           { label: "Headlamp", value: "Projector Bi-Halogen (w/chrome plating)" },
//           { label: "LED Position lamp", value: "Included" },
//           { label: "Twin LED Day-time running lamp / Side turn lamp", value: "Included" },
//           { label: "Auto Headlight", value: "-" },
//           { label: "Headlight levelling (manual)", value: "Included" },
//           { label: "LED Tail Stop Lamp", value: "Included" },
//           { label: "High mount stop lamp", value: "Included" },
//           { label: "Follow me home headlamp", value: "-" },
//           { label: "ORVM with turn indicator", value: "Included" },
//           { label: "Front Upper Grill", value: "Unique crystal acrylic type" },
//           { label: "Black wheel arch cladding", value: "Front & rear" },
//           { label: "Back door garnish", value: "Chrome" },
//           { label: "Roof Rails", value: "Silver" },
//           { label: "Skid Plate", value: "Front & Rear Silver" },
//           { label: "Front Variable Intermittent wiper", value: "-" },
//           { label: "Rear window wiper & washer", value: "-" },
//           { label: "Green Glass", value: "Front Windshield / Doors / Quarter / Back Door" },
//           { label: "Optional Stylish Dual Tone Exterior", value: "-" },
//           { label: "Roof end spoiler", value: "Included" },
//           { label: "Side under protection garnish", value: "Included" },
//           { label: "Sharkfin Antenna", value: "Included" },
//           { label: "Chrome belt line garnish", value: "-" },
//           { label: "Body color outside door handle", value: "Included" },
//         ],
//       },
//       INTERIOR: {
//         title: "INTERIOR",
//         data: [
//           { label: "Interior color", value: "Dual tone Black x Brown" },
//           { label: "Ambient lighting", value: "-" },
//           { label: "Smart Playcast Touchscreen Audio", value: "7 inch, MP3/AM/FM/Bluetooth/USB/Apple CarPlay/Android Auto" },
//           { label: "Arkamys Sound tuning", value: "-" },
//           { label: "Premium Audio", value: "-" },
//           { label: "Speakers", value: "4 Speakers + 2 Tweeters" },
//           { label: "Information display", value: "TFT Color 7 inch" },
//           { label: "Soft touch IP with premium stitch", value: "-" },
//           { label: "Chrome inside door handle", value: "Included" },
//           { label: "IP Garnish", value: "Gloss Silver" },
//           { label: "Front ventilation knob", value: "Satin chrome" },
//           { label: "Centre ventilation knob & fin", value: "Satin silver" },
//           { label: "Steering Garnish", value: "Satin chrome" },
//           { label: "Shift Garnish", value: "Gloss black paint + Satin silver (Resin)" },
//           { label: "Hazard Garnish (Outer)", value: "Satin silver (Resin)" },
//           { label: "Air conditioner Control Panel", value: "Matte black" },
//           { label: "Rear AC vent Garnish & Knob", value: "Satin chrome (Resin)" },
//           { label: "Front door garnish", value: "Silver" },
//           { label: "Door armrest", value: "Black Fabric" },
//           { label: "Switch bezel", value: "-" },
//           { label: "Artificial Leather seats", value: "Brown fabric with perforations" },
//           { label: "Leather Steering wheel", value: "-" },
//           { label: "Assist Grips", value: "3 Units" },
//           { label: "Luggage Shelf Strings", value: "-" },
//           { label: "Spot map lamp", value: "Roof front" },
//           { label: "Reading Lamp", value: "One on each side of the roof" },
//           { label: "Trunk/Luggage room lamp", value: "Included" },
//           { label: "Glove box light", value: "-" },
//           { label: "Front footwell light", value: "Driver & Co driver side" },
//           { label: "Courtesy lamp", value: "-" },
//         ],
//       },
//       SAFETY: {
//         title: "SAFETY & SECURITY",
//         data: [
//           { label: "Dual Front Airbags", value: "Driver + Co Driver" },
//           { label: "Front Side and Curtain Airbag", value: "Included" },
//           { label: "Surround View Monitor", value: "360 degree camera -" },
//           { label: "Reverse Parking Camera", value: "Included" },
//           { label: "Front seatbelt pre-tension & force limiter", value: "Included" },
//           { label: "Adjustable shoulder anchor", value: "Front seatbelts" },
//           { label: "Rear seats belts type", value: "Side:3 points / Center:3 points" },
//           { label: "Seat belt reminder", value: "Front & Rear Lamp + Buzzer" },
//           { label: "ISOFIX Child Seat Restraint System", value: "Included" },
//           { label: "ABS with EBD", value: "Included" },
//           { label: "Vehicle Stability Control", value: "Included" },
//           { label: "Hill Hold Control", value: "Included" },
//           { label: "Hill descendant", value: "-" },
//           { label: "Tire-pressure monitoring system (TPMS)", value: "Included" },
//           { label: "Immobilizer", value: "Included" },
//           { label: "Advanced Body Structure (TECT Body)", value: "Included" },
//           { label: "Side Impact Protection Beam", value: "Included" },
//           { label: "Pedal release system", value: "Included" },
//           { label: "Rear Parking Sensors", value: "Included" },
//           { label: "Day/night rear view mirror", value: "Manual" },
//           { label: "Child-proof rear door locks", value: "Included" },
//           { label: "Warning Lamp/ Reminder", value: "Low Fuel, Door Ajar, Headlamp On" },
//           { label: "Speed Warning Buzzer", value: "Included" },
//         ],
//       },
//       COMFORT: {
//         title: "COMFORT & CONVENIENCE",
//         data: [
//           { label: "Panoramic Roof", value: "-" },
//           { label: "Head-up Display", value: "-" },
//           { label: "Front Wireless Charger", value: "-" },
//           { label: "Toyota i-Connect", value: "Included" },
//           { label: "Front sliding armrest", value: "With storage" },
//           { label: "USB Ports", value: "Front x1 / Rear x2" },
//           { label: "USB Charger Rear", value: "High speed type 15w Type C x2" },
//           { label: "Adjustable Tilt & Telescopic steering", value: "Included" },
//           { label: "Power Steering (EPS)", value: "Included" },
//           { label: "Cruise Control", value: "Included" },
//           { label: "Steering mounted commands", value: "Audio, BT, Cruise control" },
//           { label: "Paddle Shift", value: "-" },
//           { label: "Auto air conditioner", value: "Included" },
//           { label: "Rear AC vents", value: "Included" },
//           { label: "PM2.5 filter & display", value: "AQI Display in Infotainment DA" },
//           { label: "Ventilated seats (D+P)", value: "-" },
//           { label: "Drive mode switch", value: "THS" },
//           { label: "Driver seat height adjust", value: "Included" },
//           { label: "Seat back pocket", value: "D+P" },
//           { label: "Separately folding rear seat backs & cushions", value: "60/40" },
//           { label: "Reclining rear seats", value: "Included" },
//           { label: "Rear headrest", value: "Removable type (3 Units)" },
//           { label: "Rear center armrest with cupholder", value: "Included" },
//           { label: "Power Seat", value: "-" },
//           { label: "Keyless Entry", value: "Included" },
//           { label: "Push start/stop button", value: "Included" },
//           { label: "Power door locks (Central Locking)", value: "Included" },
//           { label: "Front & rear door pet bottle holder", value: "1000ml" },
//           { label: "Power windows", value: "D-side auto up/down" },
//           { label: "Auto folding outside mirror", value: "-" },
//           { label: "Electric outside mirrors", value: "Electric fold" },
//           { label: "D+P vanity mirror", value: "Included" },
//           { label: "D+P vanity mirror lamp", value: "Included" },
//           { label: "D+P ticket holder", value: "Included" },
//           { label: "Centre console with cupholder", value: "2 cups" },
//           { label: "Accessory socket (Center console)", value: "Included" },
//           { label: "Accessory socket (Luggage room)", value: "Included" },
//           { label: "Gear Shift indicator", value: "-" },
//           { label: "Driver footrest", value: "Included" },
//           { label: "Rear door Sunshade", value: "Included" },
//         ],
//       },
//     },
  
//     },


//   NEODRIVE: {
//     "NEODRIVE -E": {
//       ENGINE: {
//   title: "ENGINE",
//   data: [
//     { label: "Displacement", value: "1462 cc" },
//     { label: "Fuel Type", value: "Petrol" },
//     { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
//     { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
//     { label: "OBD", value: "OBD2" },
//     { label: "ISG", value: "12V – 6Ah (Li-ion)" },
//   ],
// },
// TRANSMISSION: {
//   title: "TRANSMISSION & DRIVE",
//   data: [
//     { label: "Transmission Type", value: "5MT" },
//     { label: "Drive Type", value: "2WD" },
//   ],
// },
// DIMENSIONS: {
//   title: "DIMENSIONS & WEIGHT",
//   data: [
//     { label: "Length", value: "4365 mm" },
//     { label: "Width", value: "1795 mm" },
//     { label: "Height", value: "1645 mm" },
//     { label: "Wheelbase", value: "2600 mm" },
//     { label: "Turning Radius", value: "5.4 m" },
//     { label: "Seating Capacity", value: "5" },
//   ],
// },
// FUEL: {
//   title: "FUEL",
//   data: [
//     { label: "Fuel Tank Capacity", value: "45 L" },
//     { label: "Fuel Efficiency", value: "21.11 km/l (2WD 5MT)" },
//   ],
// },

// CHASSIS: {
//   title: "SUSPENSION, BRAKES & WHEELS",
//   data: [
//     { label: "Front Suspension", value: "MacPherson Strut" },
//     { label: "Rear Suspension", value: "Torsion Beam" },
//     { label: "Front Brakes", value: "Ventilated Disc" },
//     { label: "Rear Brakes", value: "Solid Disc" },
//     { label: "Wheel & Tyre Size", value: "215 / 60 R17" },
//     { label: "Wheel Type", value: "Steel Wheel with Full Wheel Cap" },
//     { label: "Tyre Repair Kit", value: "✔" },
//     { label: "EPB", value: "-" },
//   ],
// },

// EXTERIOR: {
//   title: "EXTERIOR",
//   data: [
//     { label: "Projector Headlamps", value: "Bi-Halogen" },
//     { label: "LED Position Lamp", value: "✔" },
//     { label: "Twin LED DRL / Turn Lamp", value: "✔" },
//     { label: "Auto Headlight", value: "-" },
//     { label: "Headlamp Levelling", value: "Manual" },
//     { label: "LED Tail Stop Lamp", value: "✔" },
//     { label: "High Mount Stop Lamp", value: "✔" },
//     { label: "Follow Me Home Headlamp", value: "-" },
//     { label: "ORVM with Turn Indicator", value: "✔" },
//     { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
//     { label: "Black Wheel Arch Cladding", value: "✔" },
//     { label: "Back Door Garnish", value: "Silver" },
//     { label: "Roof Rails", value: "-" },
//     { label: "Skid Plate (Front & Rear)", value: "Silver" },
//     { label: "Front Intermittent Wiper", value: "-" },
//     { label: "Rear Wiper & Washer", value: "-" },
//     { label: "Green Tinted Glass", value: "✔" },
//     { label: "Roof End Spoiler", value: "✔" },
//     { label: "Side Under Protection Garnish", value: "✔" },
//     { label: "Sharkfin Antenna", value: "✔" },
//     { label: "Chrome Belt Line Garnish", value: "-" },
//     { label: "Outside Door Handle", value: "Body Colour" },
//   ],
// },

// SAFETY: {
//   title: "SAFETY & SECURITY",
//   data: [
//     { label: "Airbags", value: "Dual Front" },
//     { label: "Side & Curtain Airbags", value: "-" },
//     { label: "ABS with EBD", value: "✔" },
//     { label: "Vehicle Stability Control", value: "✔" },
//     { label: "Hill Hold Control", value: "✔" },
//     { label: "Hill Descent Control", value: "-" },
//     { label: "TPMS", value: "-" },
//     { label: "ISOFIX Child Seat Mount", value: "✔" },
//     { label: "Rear Parking Sensors", value: "✔" },
//     { label: "Reverse Parking Camera", value: "-" },
//     { label: "Day / Night IRVM", value: "Manual" },
//     { label: "Immobilizer", value: "✔" },
//     { label: "Speed Warning Buzzer", value: "✔" },
//   ],
// },
// INTERIOR: {
//   title: "INTERIOR",
//   data: [
//     { label: "Interior Theme", value: "Black / Black-Brown" },
//     { label: "Ambient Lighting", value: "-" },
//     { label: "Touchscreen Infotainment", value: "-" },
//     { label: "Speakers", value: "2 (Front)" },
//     { label: "Tweeters", value: "-" },
//     { label: "MID Display", value: "4.2-inch TFT" },
//     { label: "Seat Upholstery", value: "Fabric" },
//     { label: "Leather Steering Wheel", value: "-" },
//     { label: "Rear AC Vent", value: "-" },
//     { label: "Front Footwell Lamp", value: "-" },
//     { label: "Glove Box Lamp", value: "-" },
//     { label: "Luggage Room Lamp", value: "-" },
//   ],
// },
// COMFORT: {
//   title: "COMFORT & CONVENIENCE",
//   data: [
//     { label: "Power Steering", value: "EPS" },
//     { label: "Manual AC", value: "✔" },
//     { label: "Auto AC", value: "✔" },
//     { label: "Steering Adjustment", value: "Tilt & Telescopic" },
//     { label: "Driver Seat Height Adjust", value: "✔" },
//     { label: "Front Armrest", value: "✔" },
//     { label: "Keyless Entry", value: "✔" },
//     { label: "Push Start / Stop", value: "-" },
//     { label: "Power Windows", value: "All" },
//     { label: "Driver Auto Up / Down", value: "✔" },
//     { label: "Electric ORVM", value: "-" },
//     { label: "Cruise Control", value: "-" },
//     { label: "Rear Defogger", value: "✔" },
//     { label: "Rear Fast Charging USB", value: "-" },
//     { label: "Pet Bottle Holders", value: "✔ (1000 ml)" },
//   ],
// },



// },
//     "NEODRIVE-S": {
//       ENGINE: {
//     title: "ENGINE",
//     data: [
//       { label: "Displacement", value: "1462 cm³" },
//       { label: "Fuel Type", value: "Petrol" },
//       { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
//       { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
//       { label: "OBD", value: "OBD2" },
//       { label: "ISG", value: "ISG (12V – 6Ah Li-ion)" },
//     ],
//   },

//   TRANSMISSION: {
//     title: "TRANSMISSION",
//     data: [
//       { label: "Transmission Type", value: "5MT / 6AT" },
//       { label: "Drive Type", value: "2WD" },
//     ],
//   },

//   DIMENSIONS_WEIGHT: {
//     title: "DIMENSIONS & WEIGHT",
//     data: [
//       { label: "Length", value: "4365 mm" },
//       { label: "Width", value: "1795 mm" },
//       { label: "Height", value: "1645 mm" },
//       { label: "Wheelbase", value: "2600 mm" },
//       { label: "Turning Radius", value: "5.4 m" },
//       { label: "Fuel Tank Capacity", value: "45 L" },
//       {
//         label: "Fuel Efficiency",
//         value:
//           "2WD 5MT: 21.11 km/l | 2WD 6AT: 20.58 km/l | AWD 6AT: 19.20 km/l",
//       },
//       { label: "Seating Capacity", value: "5" },
//       {
//         label: "Kerb Weight",
//         value:
//           "2WD 5MT: 1145–1190 kg | 2WD 6AT: 1185–1215 kg | AWD 6AT: 1290 kg",
//       },
//       {
//         label: "Gross Vehicle Weight",
//         value:
//           "2WD 5MT: 1650 kg | 2WD 6AT: 1675 kg | AWD 6AT: 1750 kg",
//       },
//     ],
//   },

//   SUSPENSION_BRAKES: {
//     title: "SUSPENSION & BRAKES",
//     data: [
//       { label: "Front Suspension", value: "MacPherson strut" },
//       { label: "Rear Suspension", value: "Torsion beam" },
//       { label: "Front Brakes", value: "Ventilated Disc" },
//       { label: "Rear Brakes", value: "Solid Disc" },
//       { label: "EPB", value: "✔ (6AT)" },
//     ],
//   },

//   WHEEL_TYRE: {
//     title: "WHEEL & TYRE",
//     data: [
//       { label: "Tyre Size", value: "215 / 60 R17" },
//       { label: "Wheel Type", value: "Steel wheel with full wheel cap" },
//       { label: "Tyre Repair Kit", value: "✔" },
//     ],
//   },

//   EXTERIOR: {
//     title: "EXTERIOR",
//     data: [
//       { label: "Projector Headlamps (Bi-Halogen)", value: "✔" },
//       { label: "LED Position Lamp", value: "✔" },
//       { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
//       { label: "Auto Headlamp", value: "-" },
//       { label: "Headlamp Levelling (Manual)", value: "✔" },
//       { label: "LED Tail Stop Lamp", value: "✔" },
//       { label: "High Mount Stop Lamp", value: "✔" },
//       { label: "Follow Me Home Headlamp", value: "-" },
//       { label: "ORVM with Turn Indicator", value: "✔" },
//       { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
//       { label: "Black Wheel Arch Cladding", value: "✔" },
//       { label: "Back Door Garnish", value: "Silver" },
//       { label: "Roof Rails", value: "Black" },
//       { label: "Skid Plate (Front & Rear)", value: "Silver" },
//       { label: "Front Variable Intermittent Wiper", value: "-" },
//       { label: "Rear Wiper & Washer", value: "-" },
//       { label: "Green Tinted Glass", value: "✔" },
//       { label: "Dual Tone Exterior Option", value: "-" },
//       { label: "Roof End Spoiler", value: "✔" },
//       { label: "Side Under Protection Garnish", value: "✔" },
//       { label: "Sharkfin Antenna", value: "✔" },
//       { label: "Chrome Belt Line Garnish", value: "-" },
//       { label: "Body Colour Outside Door Handle", value: "✔" },
//     ],
//   },

//   SAFETY: {
//     title: "SAFETY & SECURITY",
//     data: [
//       { label: "Dual Front Airbags", value: "✔" },
//       { label: "Front Side & Curtain Airbags", value: "✔" },
//       { label: "360° Camera", value: "-" },
//       { label: "Reverse Parking Camera", value: "✔" },
//       { label: "Seatbelt Pretensioner & Force Limiter", value: "✔" },
//       { label: "Adjustable Shoulder Anchor", value: "✔" },
//       { label: "Rear Seatbelt (All 3-point)", value: "✔" },
//       { label: "Seatbelt Reminder", value: "Lamp + Buzzer" },
//       { label: "ISOFIX", value: "✔" },
//       { label: "ABS with EBD", value: "✔" },
//       { label: "Vehicle Stability Control", value: "✔" },
//       { label: "Hill Hold Control", value: "✔" },
//       { label: "Hill Descent Control", value: "-" },
//       { label: "TPMS", value: "✔" },
//       { label: "Immobilizer", value: "✔" },
//       { label: "TECT Body", value: "✔" },
//       { label: "Rear Parking Sensors", value: "✔" },
//     ],
//   },

//   INTERIOR: {
//     title: "INTERIOR",
//     data: [
//       { label: "Black Interior Theme", value: "✔" },
//       { label: "Ambient Lighting", value: "-" },
//       {
//         label: "Touchscreen Audio",
//         value: "17.78 cm Smart Playcast (CarPlay & Android Auto)",
//       },
//       { label: "Speakers", value: "4" },
//       { label: "Tweeters", value: "✔ (2)" },
//       { label: "MID Display", value: "10.16 cm TFT" },
//       { label: "Chrome Inside Door Handle", value: "✔" },
//       { label: "Rear AC Vent", value: "✔" },
//       { label: "Artificial Leather Seats", value: "-" },
//       { label: "Leather Steering Wheel", value: "-" },
//     ],
//   },

//   COMFORT: {
//     title: "COMFORT & CONVENIENCE",
//     data: [
//       { label: "Panoramic Roof", value: "-" },
//       { label: "Head-Up Display", value: "-" },
//       { label: "Wireless Charger", value: "-" },
//       { label: "Toyota i-Connect", value: "✔" },
//       { label: "USB Ports", value: "Front x1 / Rear x2" },
//       { label: "Cruise Control", value: "✔" },
//       { label: "Auto AC", value: "✔" },
//       { label: "Rear AC Vents", value: "✔" },
//       { label: "Keyless Entry", value: "✔" },
//       { label: "Push Start/Stop", value: "✔" },
//       { label: "Power Windows", value: "✔" },
//       { label: "Rear Sunshade", value: "-" },
//     ],
//   },
//     },
//     "NEODRIVE-G(O)": {
//       ENGINE: {
//     title: "ENGINE",
//     data: [
//       { label: "Displacement", value: "1462 cm³" },
//       { label: "Fuel Type", value: "Petrol" },
//       { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
//       { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
//       { label: "OBD", value: "OBD2" },
//       { label: "ISG", value: "ISG (12V – 6Ah Li-ion)" },
//     ],
//   },

//   TRANSMISSION: {
//     title: "TRANSMISSION",
//     data: [
//       { label: "Transmission Type", value: "5MT / 6AT" },
//       { label: "Drive Type", value: "2WD" },
//     ],
//   },

//   DIMENSIONS_WEIGHT: {
//     title: "DIMENSIONS & WEIGHT",
//     data: [
//       { label: "Length", value: "4365 mm" },
//       { label: "Width", value: "1795 mm" },
//       { label: "Height", value: "1645 mm" },
//       { label: "Wheelbase", value: "2600 mm" },
//       { label: "Turning Radius", value: "5.4 m" },
//       { label: "Fuel Tank Capacity", value: "45 L" },
//       {
//         label: "Fuel Efficiency",
//         value:
//           "2WD 5MT: 21.11 km/l | 2WD 6AT: 20.58 km/l | AWD 6AT: 19.20 km/l",
//       },
//       { label: "Seating Capacity", value: "5" },
//       {
//         label: "Kerb Weight",
//         value:
//           "2WD 5MT: 1145–1190 kg | 2WD 6AT: 1185–1215 kg | AWD 6AT: 1290 kg",
//       },
//       {
//         label: "Gross Vehicle Weight",
//         value:
//           "2WD 5MT: 1650 kg | 2WD 6AT: 1675 kg | AWD 6AT: 1750 kg",
//       },
//     ],
//   },

//   SUSPENSION_BRAKES: {
//     title: "SUSPENSION & BRAKES",
//     data: [
//       { label: "Front Suspension", value: "MacPherson Strut" },
//       { label: "Rear Suspension", value: "Torsion Beam" },
//       { label: "Front Brakes", value: "Ventilated Disc" },
//       { label: "Rear Brakes", value: "Solid Disc" },
//       { label: "EPB", value: "✔ (6AT)" },
//     ],
//   },

//   WHEEL_TYRE: {
//     title: "WHEEL & TYRE",
//     data: [
//       { label: "Tyre Size", value: "215 / 60 R17 (43.18 cm)" },
//       { label: "Wheel Type", value: "Machined Alloy Wheel" },
//       { label: "Tyre Repair Kit", value: "✔" },
//     ],
//   },

//   EXTERIOR: {
//     title: "EXTERIOR",
//     data: [
//       { label: "Projector Headlamps (LED)", value: "✔" },
//       { label: "LED Position Lamp", value: "✔" },
//       { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
//       { label: "Auto Headlamp", value: "✔" },
//       { label: "Headlamp Levelling (Manual)", value: "✔" },
//       { label: "LED Tail Stop Lamp", value: "✔" },
//       { label: "High Mount Stop Lamp", value: "✔" },
//       { label: "Follow Me Home Headlamp", value: "✔" },
//       { label: "ORVM with Turn Indicator", value: "✔" },
//       { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
//       { label: "Black Wheel Arch Cladding", value: "✔" },
//       { label: "Back Door Garnish", value: "Silver" },
//       { label: "Roof Rails", value: "Black" },
//       { label: "Skid Plate (Front & Rear)", value: "Silver" },
//       { label: "Front Variable Intermittent Wiper", value: "✔" },
//       { label: "Rear Wiper & Washer", value: "✔" },
//       { label: "Green Tinted Glass", value: "✔" },
//       { label: "Dual Tone Exterior Option", value: "-" },
//       { label: "Roof End Spoiler", value: "✔" },
//       { label: "Side Under Protection Garnish", value: "✔" },
//       { label: "Sharkfin Antenna", value: "✔" },
//       { label: "Chrome Belt Line Garnish", value: "✔" },
//       { label: "Body Colour Outside Door Handle", value: "✔" },
//     ],
//   },

//   INTERIOR: {
//     title: "INTERIOR",
//     data: [
//       { label: "Black Interior Theme", value: "✔" },
//       { label: "Ambient Lighting", value: "Door Spot" },
//       {
//         label: "Touchscreen Audio",
//         value: "22.86 cm (9 inch) Smart Playcast",
//       },
//       { label: "Arkamys Sound Tuning", value: "✔" },
//       { label: "Premium Audio", value: "✔" },
//       { label: "Speakers", value: "4 (Premium)" },
//       { label: "Tweeters", value: "2 (Premium)" },
//       { label: "MID Display", value: "17.78 cm (7 inch) TFT" },
//       { label: "Soft Touch IP with Stitching", value: "✔" },
//       { label: "Artificial Leather Seats", value: "✔" },
//       { label: "Leather Steering Wheel", value: "-" },
//     ],
//   },

//   COMFORT: {
//     title: "COMFORT & CONVENIENCE",
//     data: [
//       { label: "Panoramic Roof", value: "✔" },
//       { label: "Head-Up Display", value: "-" },
//       { label: "Wireless Charger", value: "✔" },
//       { label: "Toyota i-Connect", value: "✔" },
//       { label: "Front Sliding Armrest", value: "✔" },
//       { label: "USB Ports", value: "Front x1 / Rear x2" },
//       { label: "Rear Fast Charging USB (Type-C)", value: "✔ (15W x2)" },
//       { label: "Cruise Control", value: "-" },
//       { label: "Auto AC", value: "✔" },
//       { label: "Rear AC Vents", value: "✔" },
//       { label: "Ventilated Seats (D+P)", value: "✔" },
//       { label: "Drive Mode Switch", value: "-" },
//       { label: "Keyless Entry", value: "✔" },
//       { label: "Push Start / Stop", value: "✔" },
//       { label: "Auto Folding ORVM", value: "✔" },
//       { label: "Rear Door Sunshade", value: "✔" },
//     ],
//   },

//   SAFETY: {
//     title: "SAFETY & SECURITY",
//     data: [
//       { label: "Dual Front Airbags", value: "✔" },
//       { label: "Front Side & Curtain Airbags", value: "✔" },
//       { label: "360° Camera", value: "-" },
//       { label: "Reverse Parking Camera", value: "✔" },
//       { label: "Seatbelt Pretensioner & Force Limiter", value: "✔" },
//       { label: "Adjustable Shoulder Anchor", value: "✔" },
//       { label: "Rear Seatbelt (All 3-Point)", value: "✔" },
//       { label: "Seatbelt Reminder", value: "Lamp + Buzzer" },
//       { label: "ISOFIX", value: "✔" },
//       { label: "ABS with EBD", value: "✔" },
//       { label: "Vehicle Stability Control", value: "✔" },
//       { label: "Hill Hold Control", value: "✔" },
//       { label: "Hill Descent Control", value: "-" },
//       { label: "TPMS", value: "✔" },
//       { label: "Immobilizer", value: "✔" },
//       { label: "TECT Body", value: "✔" },
//       { label: "Side Impact Protection Beam", value: "✔" },
//       { label: "Rear Parking Sensors", value: "✔" },
//       { label: "Day / Night IRVM", value: "Auto" },
//     ],
//   },
//     },
//     "NEODRIVE-V": {
//       ENGINE: {
//     title: "ENGINE",
//     data: [
//       { label: "Displacement", value: "1462 cm³" },
//       { label: "Fuel Type", value: "Petrol" },
//       { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
//       { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
//       { label: "OBD", value: "OBD2" },
//       { label: "ISG", value: "ISG (12V – 6Ah Li-ion)" },
//     ],
//   },

//   TRANSMISSION: {
//     title: "TRANSMISSION",
//     data: [
//       {
//         label: "Transmission Type",
//         value: "5MT (2WD) / 6AT (2WD / 4WD)",
//       },
//       { label: "Drive Type", value: "2WD / 4WD" },
//     ],
//   },

//   DIMENSIONS_WEIGHT: {
//     title: "DIMENSIONS & WEIGHT",
//     data: [
//       { label: "Length", value: "4365 mm" },
//       { label: "Width", value: "1795 mm" },
//       { label: "Height", value: "1645 mm" },
//       { label: "Wheelbase", value: "2600 mm" },
//       { label: "Turning Radius", value: "5.4 m" },
//       { label: "Fuel Tank Capacity", value: "45 L" },
//       {
//         label: "Fuel Efficiency",
//         value:
//           "2WD 5MT: 21.11 km/l | 2WD 6AT: 20.58 km/l | AWD 6AT: 19.20 km/l",
//       },
//       { label: "Seating Capacity", value: "5" },
//       {
//         label: "Kerb Weight",
//         value:
//           "2WD 5MT: 1145–1190 kg | 2WD 6AT: 1185–1215 kg | AWD 6AT: 1290 kg",
//       },
//       {
//         label: "Gross Vehicle Weight",
//         value:
//           "2WD 5MT: 1650 kg | 2WD 6AT: 1675 kg | AWD 6AT: 1750 kg",
//       },
//     ],
//   },

//   SUSPENSION_BRAKES: {
//     title: "SUSPENSION & BRAKES",
//     data: [
//       { label: "Front Suspension", value: "MacPherson Strut" },
//       { label: "Rear Suspension", value: "Torsion Beam" },
//       { label: "Front Brakes", value: "Ventilated Disc" },
//       { label: "Rear Brakes", value: "Solid Disc" },
//       { label: "EPB", value: "✔ (6AT)" },
//     ],
//   },

//   WHEEL_TYRE: {
//     title: "WHEEL & TYRE",
//     data: [
//       { label: "Tyre Size", value: "215 / 60 R17 (43.18 cm)" },
//       { label: "Wheel Type", value: "Machined Alloy Wheel" },
//       { label: "Tyre Repair Kit", value: "✔" },
//     ],
//   },

//   EXTERIOR: {
//     title: "EXTERIOR",
//     data: [
//       { label: "LED Projector Headlamps", value: "✔" },
//       { label: "LED Position Lamp", value: "✔" },
//       { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
//       { label: "Auto Headlamp", value: "✔" },
//       { label: "Headlamp Levelling (Manual)", value: "✔" },
//       { label: "LED Tail Stop Lamp", value: "✔" },
//       { label: "High Mount Stop Lamp", value: "✔" },
//       { label: "Follow Me Home Headlamp", value: "✔" },
//       { label: "ORVM with Turn Indicator", value: "✔" },
//       { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
//       { label: "Black Wheel Arch Cladding", value: "✔" },
//       { label: "Back Door Garnish", value: "Silver" },
//       { label: "Roof Rails", value: "Black" },
//       { label: "Skid Plate (Front & Rear)", value: "Silver" },
//       { label: "Front Variable Intermittent Wiper", value: "✔" },
//       { label: "Rear Wiper & Washer", value: "✔" },
//       { label: "Green Tinted Glass", value: "✔" },
//       { label: "Dual Tone Exterior Option", value: "✔" },
//       { label: "Roof End Spoiler", value: "✔" },
//       { label: "Side Under Protection Garnish", value: "✔" },
//       { label: "Sharkfin Antenna", value: "✔" },
//       { label: "Chrome Belt Line Garnish", value: "✔" },
//       { label: "Body Colour Outside Door Handle", value: "✔" },
//     ],
//   },

//   INTERIOR: {
//     title: "INTERIOR",
//     data: [
//       { label: "Black Interior Theme", value: "✔" },
//       { label: "Ambient Lighting", value: "Door Spot + IP Line" },
//       {
//         label: "Touchscreen Audio",
//         value: "22.86 cm (9 inch) Smart Playcast",
//       },
//       { label: "Arkamys Sound Tuning", value: "✔" },
//       { label: "Premium Audio", value: "✔" },
//       { label: "Speakers", value: "4 (Premium)" },
//       { label: "Tweeters", value: "2 (Premium)" },
//       { label: "MID Display", value: "17.78 cm (7 inch) TFT" },
//       { label: "Soft Touch IP with Stitching", value: "✔" },
//       { label: "Artificial Leather Seats", value: "✔" },
//       { label: "Leather Steering Wheel", value: "✔" },
//     ],
//   },

//   COMFORT: {
//     title: "COMFORT & CONVENIENCE",
//     data: [
//       { label: "Panoramic Roof", value: "✔" },
//       { label: "Head-Up Display", value: "✔" },
//       { label: "Wireless Charger", value: "✔" },
//       { label: "Toyota i-Connect", value: "✔" },
//       { label: "Front Sliding Armrest", value: "✔" },
//       { label: "USB Ports", value: "Front x1 / Rear x2" },
//       { label: "Rear Fast Charging USB (Type-C)", value: "✔ (15W x2)" },
//       { label: "Cruise Control", value: "✔" },
//       { label: "Steering Mounted Controls", value: "✔" },
//       { label: "Paddle Shift", value: "✔ (AT only)" },
//       { label: "Auto AC", value: "✔" },
//       { label: "Rear AC Vents", value: "✔" },
//       { label: "PM2.5 Filter", value: "✔" },
//       { label: "Ventilated Seats (D+P)", value: "✔" },
//       { label: "Drive Mode Switch", value: "AWD" },
//       { label: "Keyless Entry", value: "✔" },
//       { label: "Push Start / Stop", value: "✔" },
//       { label: "Auto Folding ORVM", value: "✔" },
//       { label: "Rear Door Sunshade", value: "✔" },
//     ],
//   },

//   SAFETY: {
//     title: "SAFETY & SECURITY",
//     data: [
//       { label: "Dual Front Airbags", value: "✔" },
//       { label: "Front Side & Curtain Airbags", value: "✔" },
//       { label: "360° Camera", value: "✔" },
//       { label: "Reverse Parking Camera", value: "-" },
//       { label: "Seatbelt Pretensioner & Force Limiter", value: "✔" },
//       { label: "Adjustable Shoulder Anchor", value: "✔" },
//       { label: "Rear Seatbelt (All 3-Point)", value: "✔" },
//       { label: "Seatbelt Reminder", value: "Lamp + Buzzer" },
//       { label: "ISOFIX", value: "✔" },
//       { label: "ABS with EBD", value: "✔" },
//       { label: "Vehicle Stability Control", value: "✔" },
//       { label: "Hill Hold Control", value: "✔" },
//       { label: "Hill Descent Control", value: "✔ (AWD only)" },
//       { label: "TPMS", value: "✔" },
//       { label: "Immobilizer", value: "✔" },
//       { label: "TECT Body", value: "✔" },
//       { label: "Side Impact Protection Beam", value: "✔" },
//       { label: "Rear Parking Sensors", value: "✔" },
//       { label: "Day / Night IRVM", value: "Auto" },
//     ],
//   },
//     },
//   },

//   "E-CNG": {
//     "E CNG-S": {
//      ENGINE: {
//   title: "ENGINE",
//   data: [
//     { label: "Displacement", value: "1462 cc" },
//     { label: "Fuel Type", value: "Petrol + CNG" },
//     { label: "Max Power (Petrol)", value: "74 kW (100.6 PS) @ 6000 rpm" },
//     { label: "Max Power (CNG)", value: "64.6 kW (87.8 PS) @ 5500 rpm" },
//     { label: "Max Torque (Petrol)", value: "136 Nm @ 4400 rpm" },
//     { label: "Max Torque (CNG)", value: "121.5 Nm @ 4200 rpm" },
//     { label: "OBD", value: "OBD2" },
//     { label: "ISG", value: "-" },
//   ],
// },

// TRANSMISSION: {
//   title: "TRANSMISSION",
//   data: [
//     { label: "Transmission Type", value: "5MT" },
//     { label: "Drive Type", value: "2WD" },
//   ],
// },

//      DIMENSIONS: {
//   title: "DIMENSIONS & WEIGHT",
//   data: [
//     { label: "Length", value: "4365 mm" },
//     { label: "Width", value: "1795 mm" },
//     { label: "Height", value: "1645 mm" },
//     { label: "Wheelbase", value: "2600 mm" },
//     { label: "Turning Radius", value: "5.4 m" },
//     { label: "Seating Capacity", value: "5" },
//     { label: "Kerb Weight", value: "1245 kg" },
//     { label: "Gross Vehicle Weight", value: "1705 kg" },
//   ],
// },
// FUEL: {
//   title: "FUEL & EFFICIENCY",
//   data: [
//     { label: "Fuel Tank (Petrol)", value: "45 L" },
//     { label: "Fuel Tank (CNG)", value: "55 L (Water equivalent)" },
//     { label: "Fuel Efficiency (CNG)", value: "26.6 km/kg" },
//   ],
// },

//      CHASSIS: {
//   title: "SUSPENSION, BRAKES & TYRES",
//   data: [
//     { label: "Front Suspension", value: "MacPherson strut" },
//     { label: "Rear Suspension", value: "Torsion beam" },
//     { label: "Front Brake", value: "Ventilated disc" },
//     { label: "Rear Brake", value: "Solid disc" },
//     { label: "EPB", value: "-" },
//     { label: "Wheel & Tyre Size", value: "215 / 60 R17" },
//     { label: "Wheel Type", value: "Steel wheel with full wheel cap" },
//     { label: "Tyre Repair Kit", value: "✔" },
//   ],
// },

//       BRAKES: {
//         title: "BRAKES",
//         data: [
//           { label: "Front", value: "Ventilated disc" },
//           { label: "Rear", value: "Solid disc" },
//           { label: "EPB", value: "-" },
//         ],
//       },
//       "WHEEL & TYRE SIZE": {
//         title: "WHEEL & TYRE SIZE",
//         data: [
//           { label: "Tyre Size", value: "215 / 60 R17 (43.18 cm)" },
//           { label: "Wheel", value: "Steel wheel with full wheel cap" },
//           { label: "Tire repair kit", value: "-" },
//         ],
//       },
//       EXTERIOR: {
//   title: "EXTERIOR",
//   data: [
//     { label: "Projector Headlamps (Bi-Halogen)", value: "✔" },
//     { label: "LED Position Lamp", value: "✔" },
//     { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
//     { label: "Auto Headlight", value: "-" },
//     { label: "Manual Headlamp Levelling", value: "✔" },
//     { label: "LED Tail Stop Lamp", value: "✔" },
//     { label: "High Mount Stop Lamp", value: "✔" },
//     { label: "Follow Me Home Headlamp", value: "-" },
//     { label: "ORVM with Turn Indicator", value: "✔" },
//     { label: "Roof Rails (Black)", value: "✔" },
//     { label: "Sharkfin Antenna", value: "✔" },
//     { label: "Skid Plate (Front & Rear)", value: "Silver" },
//     { label: "Rear Wiper & Washer", value: "-" },
//   ],
// },
// SAFETY: {
//   title: "SAFETY & SECURITY",
//   data: [
//     { label: "Dual Front Airbags", value: "✔" },
//     { label: "Front Side & Curtain Airbags", value: "✔" },
//     { label: "360° Camera", value: "-" },
//     { label: "Reverse Parking Camera", value: "✔" },
//     { label: "ABS with EBD", value: "✔" },
//     { label: "Vehicle Stability Control", value: "✔" },
//     { label: "Hill Hold Control", value: "✔" },
//     { label: "Hill Descent Control", value: "-" },
//     { label: "TPMS", value: "✔" },
//     { label: "ISOFIX Child Seat Mount", value: "✔" },
//     { label: "Rear Parking Sensors", value: "✔" },
//   ],
// },
// INTERIOR: {
//   title: "INTERIOR",
//   data: [
//     { label: "Interior Theme", value: "Black" },
//     { label: "Touchscreen Audio System", value: "17.78 cm" },
//     { label: "Android Auto & Apple CarPlay", value: "✔" },
//     { label: "Speakers", value: "4" },
//     { label: "TFT MID Display", value: "10.16 cm" },
//     { label: "Leather Steering Wheel", value: "-" },
//     { label: "Ambient Lighting", value: "-" },
//     { label: "Rear AC Vents", value: "✔" },
//   ],
// },
// COMFORT: {
//   title: "COMFORT & CONVENIENCE",
//   data: [
//     { label: "Panoramic Roof", value: "-" },
//     { label: "Cruise Control", value: "✔" },
//     { label: "Wireless Charger", value: "-" },
//     { label: "USB Ports", value: "Front x1 / Rear x2 (Type-C)" },
//     { label: "Push Start / Stop Button", value: "✔" },
//     { label: "Keyless Entry", value: "✔" },
//     { label: "Power Windows", value: "✔" },
//     { label: "Auto Folding ORVM", value: "-" },
//     { label: "Rear Sunshade", value: "✔" },
//   ],
// },


//     },
//     "E CNG-G": {
//       ENGINE: {
//   title: "ENGINE",
//   data: [
//     { label: "Displacement", value: "1462 cc" },
//     { label: "Fuel Type", value: "Petrol + CNG" },
//     { label: "Max Power (Petrol)", value: "74 kW (100.6 PS) @ 6000 rpm" },
//     { label: "Max Power (CNG)", value: "64.6 kW (87.8 PS) @ 5500 rpm" },
//     { label: "Max Torque (Petrol)", value: "136 Nm @ 4400 rpm" },
//     { label: "Max Torque (CNG)", value: "121.5 Nm @ 4200 rpm" },
//     { label: "OBD", value: "OBD2" },
//     { label: "ISG", value: "-" },
//   ],
// },
// TRANSMISSION: {
//   title: "TRANSMISSION & DRIVE",
//   data: [
//     { label: "Transmission Type", value: "5MT" },
//     { label: "Drive Type", value: "2WD" },
//   ],
// },
// DIMENSIONS: {
//   title: "DIMENSIONS & WEIGHT",
//   data: [
//     { label: "Length", value: "4365 mm" },
//     { label: "Width", value: "1795 mm" },
//     { label: "Height", value: "1645 mm" },
//     { label: "Wheelbase", value: "2600 mm" },
//     { label: "Turning Radius", value: "5.4 m" },
//     { label: "Seating Capacity", value: "5" },
//     { label: "Kerb Weight", value: "1245 kg" },
//     { label: "Gross Vehicle Weight", value: "1705 kg" },
//   ],
// },
// FUEL: {
//   title: "FUEL & EFFICIENCY",
//   data: [
//     { label: "Fuel Tank (Petrol)", value: "45 L" },
//     { label: "Fuel Tank (CNG)", value: "55 L (Water Equivalent)" },
//     { label: "Fuel Efficiency (CNG)", value: "26.6 km/kg" },
//   ],
// },
// CHASSIS: {
//   title: "SUSPENSION, BRAKES & TYRES",
//   data: [
//     { label: "Front Suspension", value: "MacPherson strut" },
//     { label: "Rear Suspension", value: "Torsion beam" },
//     { label: "Front Brake", value: "Ventilated disc" },
//     { label: "Rear Brake", value: "Solid disc" },
//     { label: "EPB", value: "-" },
//     { label: "Wheel & Tyre Size", value: "215 / 60 R17" },
//     { label: "Wheel Type", value: "Machined Alloy Wheel" },
//     { label: "Tyre Repair Kit", value: "✔" },
//   ],
// },
// EXTERIOR: {
//   title: "EXTERIOR",
//   data: [
//     { label: "Projector Headlamps (LED)", value: "✔" },
//     { label: "LED Position Lamp", value: "✔" },
//     { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
//     { label: "Auto Headlight", value: "✔" },
//     { label: "Manual Headlamp Levelling", value: "✔" },
//     { label: "LED Tail Stop Lamp", value: "✔" },
//     { label: "High Mount Stop Lamp", value: "✔" },
//     { label: "Follow Me Home Headlamp", value: "✔" },
//     { label: "ORVM with Turn Indicator", value: "✔" },
//     { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
//     { label: "Black Wheel Arch Cladding", value: "✔" },
//     { label: "Back Door Garnish", value: "Silver" },
//     { label: "Roof Rails", value: "Black" },
//     { label: "Skid Plate (Front & Rear)", value: "Silver" },
//     { label: "Front Variable Intermittent Wiper", value: "✔" },
//     { label: "Rear Wiper & Washer", value: "✔" },
//     { label: "Green Tinted Glass (All Doors)", value: "✔" },
//     { label: "Optional Dual Tone Exterior", value: "-" },
//     { label: "Roof End Spoiler", value: "✔" },
//     { label: "Side Under Protection Garnish", value: "✔" },
//     { label: "Sharkfin Antenna", value: "✔" },
//     { label: "Chrome Belt Line Garnish", value: "✔" },
//     { label: "Body Coloured Door Handles", value: "✔" },
//   ],
// },
// INTERIOR: {
//   title: "INTERIOR",
//   data: [
//     { label: "Interior Theme", value: "Black / Black-Brown" },
//     { label: "Ambient Lighting", value: "Door Spot" },
//     { label: "Touchscreen Audio", value: "22.86 cm (9 inch)" },
//     { label: "Android Auto & Apple CarPlay", value: "✔" },
//     { label: "Arkamys Sound Tuning", value: "✔" },
//     { label: "Premium Audio", value: "✔" },
//     { label: "Speakers", value: "4 (Premium)" },
//     { label: "Tweeters", value: "2 (Premium)" },
//     { label: "TFT MID Display", value: "10.16 cm (4.2 inch)" },
//     { label: "Soft Touch IP with Stitching", value: "✔" },
//     { label: "Leather Steering Wheel", value: "-" },
//     { label: "Artificial Leather Seats", value: "✔" },
//     { label: "Rear AC Vent", value: "✔" },
//     { label: "LED Reading & Map Lamps", value: "✔" },
//     { label: "Front Footwell Light", value: "✔" },
//   ],
// },
// COMFORT: {
//   title: "COMFORT & CONVENIENCE",
//   data: [
//     { label: "Panoramic Roof", value: "-" },
//     { label: "Head-up Display", value: "-" },
//     { label: "Wireless Charger", value: "✔" },
//     { label: "Toyota i-Connect", value: "✔" },
//     { label: "Front Armrest with Storage", value: "✔" },
//     { label: "USB Ports", value: "Front x1 / Rear x2 (Type-C)" },
//     { label: "Adjustable Steering", value: "Tilt & Telescopic" },
//     { label: "Cruise Control", value: "-" },
//     { label: "Auto Air Conditioner", value: "✔" },
//     { label: "PM2.5 Filter", value: "✔" },
//     { label: "Ventilated Seats", value: "✔" },
//     { label: "Driver Seat Height Adjust", value: "✔" },
//     { label: "60:40 Split Rear Seats", value: "✔" },
//     { label: "Keyless Entry & Push Start", value: "✔" },
//     { label: "Power Windows (All)", value: "✔" },
//     { label: "Auto Folding ORVM", value: "✔" },
//     { label: "Rear Sunshade", value: "✔" },
//   ],
// },
// SAFETY: {
//   title: "SAFETY & SECURITY",
//   data: [
//     { label: "Dual Front Airbags", value: "✔" },
//     { label: "Front Side & Curtain Airbags", value: "✔" },
//     { label: "360° Camera", value: "-" },
//     { label: "Reverse Parking Camera", value: "✔" },
//     { label: "ABS with EBD", value: "✔" },
//     { label: "Vehicle Stability Control", value: "✔" },
//     { label: "Hill Hold Control", value: "✔" },
//     { label: "Hill Descent Control", value: "-" },
//     { label: "TPMS", value: "✔" },
//     { label: "ISOFIX Child Seat Mount", value: "✔" },
//     { label: "Rear Parking Sensors", value: "✔" },
//     { label: "Auto Day/Night IRVM", value: "✔" },
//   ],
// },

//     },
//   },
// };


// /* ===================== DISCLAIMER ===================== */
// const disclaimerPoints = [
//   "1 -Speed Warning Buzzer gives audible warning of Over Speed to Driver, If Vehicle Speed >80 km/h then two beeps will sound every minute If Vehicle Speed >120 km/h, continuous beeps will sound. This Buzzer does not indicate any Malfunction in Vehicle",
//   "2 -Application Features & Displays may vary depending on different Operating Systems or Smartphone Devices used. Avoid using the phone while driving for your safety Apple CarPlay is registered trademark of Apple Inc. Android Auto is registered Trademark of Google Inc. Bluetooth is a registered Trademark of Bluetooth SIG",
//   "3 -Lithium Ion Battery poses safety & environmental hazard if disposed inappropriately. Do not dispose battery in garbage bin. Always ask Toyota Authorized Dealer for replacing or disposing battery",
//   "4 -Some Parts of Leather appointed upholstery will contain man - made material",
//   "5 -As per certification under Rule 115(G) of CMVR 1989",
//   " -Vehicle pictures and specifications detailed in this brochure may vary between models & equipment. Addition of Features may change figures in this chart. Actual colour of the vehicle body & upholstery might differ slightly from images depicted in this brochure. Features are grade specific. Toyota Kirloskar Motor Pvt Ltd reserves the right to alter the details of specifications and equipment without a notice.",
// ];

// /* ===================== COMPONENT ===================== */
// export default function Technical() {
//   const [powertrain, setPowertrain] = useState<Powertrain>("HYBRID");
//   const [variant, setVariant] = useState<Variant>("HYBRID-V");

//   const [showAll, setShowAll] = useState(true);
//   const [showDisclaimer, setShowDisclaimer] = useState(false);

//   const currentSpecs = specifications[powertrain][variant];

//   return (
//     <>
//       <style>{`
//       *{box-sizing:border-box}
//       body{margin:0}

//       .tech-container{
//         max-width:1600px;
//         margin:auto;
//         padding:30px 20px;
//         font-family:Arial,Helvetica,sans-serif;
//         background:#fff;   /* only specs section */
//         color:#000;
//       }

//       .title{
//         text-align:center;
//         font-size:22px;
//         letter-spacing:1px;
//         margin-bottom:25px;
//       }

//       /* POWERTRAIN */
//       .powertrain-bar{
//         display:grid;
//         grid-template-columns:repeat(3,1fr);
//         background:#e6edf6;
//         height:48px;
//         margin-bottom:15px;
//       }

//       .powertrain-tab{
//         border:none;
//         background:transparent;
//         font-size:15px;
//         cursor:pointer;
//       }

//       .powertrain-tab.active{
//         background:#dce7f5;
//         font-weight:600;
//       }

//       /* VARIANT */
//       .variant-bar{
//         display:grid;
//         grid-template-columns:repeat(4,1fr);
//         background:#f5f7fa;
//         height:44px;
//         margin-bottom:35px;
//       }

//       .variant-tab{
//         border:none;
//         background:transparent;
//         font-size:14px;
//         cursor:pointer;
//       }

//       .variant-tab.active{
//         background:#dce7f5;
//         font-weight:600;
//       }

//       /* SPECS */
//       .spec-grid{
//         display:grid;
//         grid-template-columns:1fr 1fr;
//         gap:60px;
//       }

//       .spec-title {
//   color: #e60000;
//   font-size: 14px;
//   font-weight: 600;
//   margin: 22px 0 10px;
// }


//       .spec-row {
//   display: flex;
//   justify-content: space-between;
//   font-size: 13.5px;
//   padding: 6px 0;
//   border-bottom: 1px solid #eee;
// }


//       /* VIEW ALL */
//       .view-all{
//         text-align:center;
//         margin:30px 0;
//       }

//       .view-all button{
//         background:#e60000;
//         color:#fff;
//         border:none;
//         padding:10px 35px;
//         font-size:14px;
//         cursor:pointer;
//       }

//       /* DISCLAIMER */
//       .disclaimer{
//         margin-top:40px;
//       }

//       .disclaimer button{
//         background:#000;
//         color:#fff;
//         border:none;
//         padding:8px 25px;
//         cursor:pointer;
//       }

//       /* RESPONSIVE */
//       @media(max-width:1024px){
//         .spec-grid{grid-template-columns:1fr}
//         .spec-title{width:100%;border-right:none}
//       }

//       @media(max-width:768px){
//         .powertrain-bar,
//         .variant-bar{
//           grid-template-columns:1fr;
//           height:auto;
//         }
//         .spec-row{
//           flex-direction:column;
//           gap:4px;
//         }
//       }
//       `}</style>

//       <div className="tech-container">

//         <div className="title">TECHNICAL SPECIFICATIONS</div>

//         {/* POWERTRAIN */}
//         <div className="powertrain-bar">
//           {(Object.keys(VARIANTS_BY_POWERTRAIN) as Powertrain[]).map((p) => (
//             <button
//               key={p}
//               className={`powertrain-tab ${powertrain === p ? "active" : ""}`}
//               onClick={() => {
//                 setPowertrain(p);
//                 setVariant(VARIANTS_BY_POWERTRAIN[p][0]);
//               }}
//             >
//               {p}
//             </button>
//           ))}
//         </div>

//         {/* VARIANT */}
//         <div className="variant-bar">
//           {VARIANTS_BY_POWERTRAIN[powertrain].map((v) => (
//             <button
//               key={v}
//               className={`variant-tab ${variant === v ? "active" : ""}`}
//               onClick={() => setVariant(v)}
//             >
//               {v.replace("-", " - ")}
//             </button>
//           ))}
//         </div>

//         {/* SPECS */}
//         <div className="spec-grid">
//           {currentSpecs &&
//   Object.values(currentSpecs)
//     .slice(0, showAll ? undefined : 3) // agar showAll false hai to sirf first 3 sections
//     .map((section, i) =>
//       section?.data?.length > 0 ? (
//         <div key={i}>
//           <div className="spec-title">{section.title}</div>
//           {section.data.map((row, j) => (
//   <div className="spec-row" key={j}>
//     <span>{row.label}</span>
//     <span>
//       {row.value === "-" ? "–" : "✔"}
//     </span>
//   </div>
// ))}

//         </div>
//       ) : null
//     )}

//         </div>

//         {/* VIEW ALL */}
//         <div className="view-all">
//           <button onClick={() => setShowAll(!showAll)}>
//             VIEW ALL
//           </button>
//         </div>

//         {/* DISCLAIMER */}
//         <div className="disclaimer">
//           <h3>DISCLAIMER:</h3>
//           <p>{disclaimerPoints[0]}</p>
//           {showDisclaimer &&
//             disclaimerPoints.slice(1).map((p, i) => <p key={i}>* {p}</p>)}
//           <button onClick={() => setShowDisclaimer(!showDisclaimer)}>
//             {showDisclaimer ? "VIEW LESS" : "VIEW MORE"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }



























"use client";
import { useState } from "react";

/* ===================== TYPES ===================== */
type Powertrain = "E-CNG" | "NEODRIVE" | "HYBRID";

type Variant =
  | "E CNG-S"
  | "E CNG-G"
  | "NEODRIVE -E"
  | "NEODRIVE-S"
  | "NEODRIVE-G(O)"
  | "NEODRIVE-V"
  | "HYBRID-S"
  | "HYBRID-G(O)"
  | "HYBRID-V";

const VARIANTS_BY_POWERTRAIN: Record<Powertrain, Variant[]> = {
  "E-CNG": ["E CNG-S", "E CNG-G"],
  NEODRIVE: ["NEODRIVE -E", "NEODRIVE-S", "NEODRIVE-G(O)", "NEODRIVE-V"],
  HYBRID: ["HYBRID-S", "HYBRID-G(O)", "HYBRID-V"],
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
  TRANSMISSION?: SpecSection;
  DRIVE?: SpecSection;
  DIMENSIONS?: SpecSection;
  SUSPENSION?: SpecSection;
  BRAKES?: SpecSection;
  WHEEL_TYRE?: SpecSection;
  FEATURES?: SpecSection;
}


/* ===================== SPEC DATA ===================== */
/* ===================== SPEC DATA ===================== */
const specifications: Record<Powertrain, Record<Variant, VariantSpecs>> = {
  HYBRID: {
    "HYBRID-V": {
      ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1490 cm³ / 3" },
          { label: "Max Power", value: "68 kW (92.45PS) @ 5500 rpm" },
          { label: "Max Torque", value: "122 Nm @ 4400 - 4800 rpm" },
          { label: "Total system Max.Power", value: "85 kW (115.56PS)" },
          { label: "Battery type", value: "Lithium-ion" },
          { label: "Battery Voltage", value: "177.6 V" },
          { label: "Motor Generator type", value: "AC Synchronous Motor" },
          { label: "Hybrid System Max. Power", value: "59 kW (80.2 PS) @ 3995 rpm" },
          { label: "Hybrid System Max. Torque", value: "141 Nm @ 0 - 3995 rpm" },
          { label: "OBD", value: "OBD2" },
          { label: "ISG", value: "ISG -" },
        ],
      },
      TRANSMISSION: {
        title: "TRANSMISSION",
        data: [{ label: "Type", value: "e-Drive" }],
      },
      DRIVE: {
        title: "DRIVE",
        data: [{ label: "Type", value: "2WD" }],
      },
      DIMENSIONS: {
        title: "DIMENSIONS & WEIGHT",
        data: [
          { label: "Length x Width x Height", value: "4365 mm x 1795 mm x 1645 mm" },
          { label: "Wheelbase", value: "2600 mm" },
          { label: "Turning radius", value: "5.4 m" },
          { label: "Fuel Tank capacity", value: "0.045 m³ (45 L)" },
          { label: "Fuel Efficiency", value: "27.97 kmpl" },
          { label: "Seating Capacity", value: "5" },
          { label: "Kerb weight", value: "1255 - 1285 kg" },
          { label: "Gross Weight", value: "1755 kg" },
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Front", value: "MacPherson strut" },
          { label: "Rear", value: "Torsion beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Front", value: "Ventilated disc" },
          { label: "Rear", value: "Solid disc" },
          { label: "EPB", value: "-" },
        ],
      },
      WHEEL_TYRE: {
        title: "WHEEL & TYRE",
        data: [
          { label: "Size", value: "215 / 60 R17 (43.18 cm)" },
          { label: "Wheel Type", value: "Steel wheel with Full wheel cap" },
          { label: "Tire repair kit", value: "Included" },
        ],
      },
      EXTERIOR: {
        title: "EXTERIOR",
        data: [
          { label: "Headlamp", value: "Projector Bi-Halogen (w/chrome plating)" },
          { label: "LED Position lamp", value: "Included" },
          { label: "Twin LED Day-time running lamp / Side turn lamp", value: "Included" },
          { label: "Auto Headlight", value: "-" },
          { label: "Headlight levelling (manual)", value: "Included" },
          { label: "LED Tail Stop Lamp", value: "Included" },
          { label: "High mount stop lamp", value: "Included" },
          { label: "Follow me home headlamp", value: "-" },
          { label: "ORVM with turn indicator", value: "Included" },
          { label: "Front Upper Grill", value: "Unique crystal acrylic type" },
          { label: "Black wheel arch cladding", value: "Front & rear" },
          { label: "Back door garnish", value: "Chrome" },
          { label: "Roof Rails", value: "Silver" },
          { label: "Skid Plate", value: "Front & Rear Silver" },
          { label: "Front Variable Intermittent wiper", value: "-" },
          { label: "Rear window wiper & washer", value: "-" },
          { label: "Green Glass", value: "Front Windshield / Doors / Quarter / Back Door" },
          { label: "Optional Stylish Dual Tone Exterior", value: "-" },
          { label: "Roof end spoiler", value: "Included" },
          { label: "Side under protection garnish", value: "Included" },
          { label: "Sharkfin Antenna", value: "Included" },
          { label: "Chrome belt line garnish", value: "-" },
          { label: "Body color outside door handle", value: "Included" },
        ],
      },
      INTERIOR: {
        title: "INTERIOR",
        data: [
          { label: "Interior color", value: "Dual tone Black x Brown" },
          { label: "Ambient lighting", value: "-" },
          { label: "Smart Playcast Touchscreen Audio", value: "7 inch, MP3/AM/FM/Bluetooth/USB/Apple CarPlay/Android Auto" },
          { label: "Arkamys Sound tuning", value: "-" },
          { label: "Premium Audio", value: "-" },
          { label: "Speakers", value: "4 Speakers + 2 Tweeters" },
          { label: "Information display", value: "TFT Color 7 inch" },
          { label: "Soft touch IP with premium stitch", value: "-" },
          { label: "Chrome inside door handle", value: "Included" },
          { label: "IP Garnish", value: "Gloss Silver" },
          { label: "Front ventilation knob", value: "Satin chrome" },
          { label: "Centre ventilation knob & fin", value: "Satin silver" },
          { label: "Steering Garnish", value: "Satin chrome" },
          { label: "Shift Garnish", value: "Gloss black paint + Satin silver (Resin)" },
          { label: "Hazard Garnish (Outer)", value: "Satin silver (Resin)" },
          { label: "Air conditioner Control Panel", value: "Matte black" },
          { label: "Rear AC vent Garnish & Knob", value: "Satin chrome (Resin)" },
          { label: "Front door garnish", value: "Silver" },
          { label: "Door armrest", value: "Black Fabric" },
          { label: "Switch bezel", value: "-" },
          { label: "Artificial Leather seats", value: "Brown fabric with perforations" },
          { label: "Leather Steering wheel", value: "-" },
          { label: "Assist Grips", value: "3 Units" },
          { label: "Luggage Shelf Strings", value: "-" },
          { label: "Spot map lamp", value: "Roof front" },
          { label: "Reading Lamp", value: "One on each side of the roof" },
          { label: "Trunk/Luggage room lamp", value: "Included" },
          { label: "Glove box light", value: "-" },
          { label: "Front footwell light", value: "Driver & Co driver side" },
          { label: "Courtesy lamp", value: "-" },
        ],
      },
      SAFETY: {
        title: "SAFETY & SECURITY",
        data: [
          { label: "Dual Front Airbags", value: "Driver + Co Driver" },
          { label: "Front Side and Curtain Airbag", value: "Included" },
          { label: "Surround View Monitor", value: "360 degree camera -" },
          { label: "Reverse Parking Camera", value: "Included" },
          { label: "Front seatbelt pre-tension & force limiter", value: "Included" },
          { label: "Adjustable shoulder anchor", value: "Front seatbelts" },
          { label: "Rear seats belts type", value: "Side:3 points / Center:3 points" },
          { label: "Seat belt reminder", value: "Front & Rear Lamp + Buzzer" },
          { label: "ISOFIX Child Seat Restraint System", value: "Included" },
          { label: "ABS with EBD", value: "Included" },
          { label: "Vehicle Stability Control", value: "Included" },
          { label: "Hill Hold Control", value: "Included" },
          { label: "Hill descendant", value: "-" },
          { label: "Tire-pressure monitoring system (TPMS)", value: "Included" },
          { label: "Immobilizer", value: "Included" },
          { label: "Advanced Body Structure (TECT Body)", value: "Included" },
          { label: "Side Impact Protection Beam", value: "Included" },
          { label: "Pedal release system", value: "Included" },
          { label: "Rear Parking Sensors", value: "Included" },
          { label: "Day/night rear view mirror", value: "Manual" },
          { label: "Child-proof rear door locks", value: "Included" },
          { label: "Warning Lamp/ Reminder", value: "Low Fuel, Door Ajar, Headlamp On" },
          { label: "Speed Warning Buzzer", value: "Included" },
        ],
      },
      COMFORT: {
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Panoramic Roof", value: "-" },
          { label: "Head-up Display", value: "-" },
          { label: "Front Wireless Charger", value: "-" },
          { label: "Toyota i-Connect", value: "Included" },
          { label: "Front sliding armrest", value: "With storage" },
          { label: "USB Ports", value: "Front x1 / Rear x2" },
          { label: "USB Charger Rear", value: "High speed type 15w Type C x2" },
          { label: "Adjustable Tilt & Telescopic steering", value: "Included" },
          { label: "Power Steering (EPS)", value: "Included" },
          { label: "Cruise Control", value: "Included" },
          { label: "Steering mounted commands", value: "Audio, BT, Cruise control" },
          { label: "Paddle Shift", value: "-" },
          { label: "Auto air conditioner", value: "Included" },
          { label: "Rear AC vents", value: "Included" },
          { label: "PM2.5 filter & display", value: "AQI Display in Infotainment DA" },
          { label: "Ventilated seats (D+P)", value: "-" },
          { label: "Drive mode switch", value: "THS" },
          { label: "Driver seat height adjust", value: "Included" },
          { label: "Seat back pocket", value: "D+P" },
          { label: "Separately folding rear seat backs & cushions", value: "60/40" },
          { label: "Reclining rear seats", value: "Included" },
          { label: "Rear headrest", value: "Removable type (3 Units)" },
          { label: "Rear center armrest with cupholder", value: "Included" },
          { label: "Power Seat", value: "-" },
          { label: "Keyless Entry", value: "Included" },
          { label: "Push start/stop button", value: "Included" },
          { label: "Power door locks (Central Locking)", value: "Included" },
          { label: "Front & rear door pet bottle holder", value: "1000ml" },
          { label: "Power windows", value: "D-side auto up/down" },
          { label: "Auto folding outside mirror", value: "-" },
          { label: "Electric outside mirrors", value: "Electric fold" },
          { label: "D+P vanity mirror", value: "Included" },
          { label: "D+P vanity mirror lamp", value: "Included" },
          { label: "D+P ticket holder", value: "Included" },
          { label: "Centre console with cupholder", value: "2 cups" },
          { label: "Accessory socket (Center console)", value: "Included" },
          { label: "Accessory socket (Luggage room)", value: "Included" },
          { label: "Gear Shift indicator", value: "-" },
          { label: "Driver footrest", value: "Included" },
          { label: "Rear door Sunshade", value: "Included" },
        ],
      },
    },
    "HYBRID-G(O)": {
     ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1490 cm³ / 3" },
          { label: "Max Power", value: "68 kW (92.45PS) @ 5500 rpm" },
          { label: "Max Torque", value: "122 Nm @ 4400 - 4800 rpm" },
          { label: "Total system Max.Power", value: "85 kW (115.56PS)" },
          { label: "Battery type", value: "Lithium-ion" },
          { label: "Battery Voltage", value: "177.6 V" },
          { label: "Motor Generator type", value: "AC Synchronous Motor" },
          { label: "Hybrid System Max. Power", value: "59 kW (80.2 PS) @ 3995 rpm" },
          { label: "Hybrid System Max. Torque", value: "141 Nm @ 0 - 3995 rpm" },
          { label: "OBD", value: "OBD2" },
          { label: "ISG", value: "ISG -" },
        ],
      },
      TRANSMISSION: {
        title: "TRANSMISSION",
        data: [{ label: "Type", value: "e-Drive" }],
      },
      DRIVE: {
        title: "DRIVE",
        data: [{ label: "Type", value: "2WD" }],
      },
      DIMENSIONS: {
        title: "DIMENSIONS & WEIGHT",
        data: [
          { label: "Length x Width x Height", value: "4365 mm x 1795 mm x 1645 mm" },
          { label: "Wheelbase", value: "2600 mm" },
          { label: "Turning radius", value: "5.4 m" },
          { label: "Fuel Tank capacity", value: "0.045 m³ (45 L)" },
          { label: "Fuel Efficiency", value: "27.97 kmpl" },
          { label: "Seating Capacity", value: "5" },
          { label: "Kerb weight", value: "1255 - 1285 kg" },
          { label: "Gross Weight", value: "1755 kg" },
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Front", value: "MacPherson strut" },
          { label: "Rear", value: "Torsion beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Front", value: "Ventilated disc" },
          { label: "Rear", value: "Solid disc" },
          { label: "EPB", value: "-" },
        ],
      },
      WHEEL_TYRE: {
        title: "WHEEL & TYRE",
        data: [
          { label: "Size", value: "215 / 60 R17 (43.18 cm)" },
          { label: "Wheel Type", value: "Steel wheel with Full wheel cap" },
          { label: "Tire repair kit", value: "Included" },
        ],
      },
      EXTERIOR: {
        title: "EXTERIOR",
        data: [
          { label: "Headlamp", value: "Projector Bi-Halogen (w/chrome plating)" },
          { label: "LED Position lamp", value: "Included" },
          { label: "Twin LED Day-time running lamp / Side turn lamp", value: "Included" },
          { label: "Auto Headlight", value: "-" },
          { label: "Headlight levelling (manual)", value: "Included" },
          { label: "LED Tail Stop Lamp", value: "Included" },
          { label: "High mount stop lamp", value: "Included" },
          { label: "Follow me home headlamp", value: "-" },
          { label: "ORVM with turn indicator", value: "Included" },
          { label: "Front Upper Grill", value: "Unique crystal acrylic type" },
          { label: "Black wheel arch cladding", value: "Front & rear" },
          { label: "Back door garnish", value: "Chrome" },
          { label: "Roof Rails", value: "Silver" },
          { label: "Skid Plate", value: "Front & Rear Silver" },
          { label: "Front Variable Intermittent wiper", value: "-" },
          { label: "Rear window wiper & washer", value: "-" },
          { label: "Green Glass", value: "Front Windshield / Doors / Quarter / Back Door" },
          { label: "Optional Stylish Dual Tone Exterior", value: "-" },
          { label: "Roof end spoiler", value: "Included" },
          { label: "Side under protection garnish", value: "Included" },
          { label: "Sharkfin Antenna", value: "Included" },
          { label: "Chrome belt line garnish", value: "-" },
          { label: "Body color outside door handle", value: "Included" },
        ],
      },
      INTERIOR: {
        title: "INTERIOR",
        data: [
          { label: "Interior color", value: "Dual tone Black x Brown" },
          { label: "Ambient lighting", value: "-" },
          { label: "Smart Playcast Touchscreen Audio", value: "7 inch, MP3/AM/FM/Bluetooth/USB/Apple CarPlay/Android Auto" },
          { label: "Arkamys Sound tuning", value: "-" },
          { label: "Premium Audio", value: "-" },
          { label: "Speakers", value: "4 Speakers + 2 Tweeters" },
          { label: "Information display", value: "TFT Color 7 inch" },
          { label: "Soft touch IP with premium stitch", value: "-" },
          { label: "Chrome inside door handle", value: "Included" },
          { label: "IP Garnish", value: "Gloss Silver" },
          { label: "Front ventilation knob", value: "Satin chrome" },
          { label: "Centre ventilation knob & fin", value: "Satin silver" },
          { label: "Steering Garnish", value: "Satin chrome" },
          { label: "Shift Garnish", value: "Gloss black paint + Satin silver (Resin)" },
          { label: "Hazard Garnish (Outer)", value: "Satin silver (Resin)" },
          { label: "Air conditioner Control Panel", value: "Matte black" },
          { label: "Rear AC vent Garnish & Knob", value: "Satin chrome (Resin)" },
          { label: "Front door garnish", value: "Silver" },
          { label: "Door armrest", value: "Black Fabric" },
          { label: "Switch bezel", value: "-" },
          { label: "Artificial Leather seats", value: "Brown fabric with perforations" },
          { label: "Leather Steering wheel", value: "-" },
          { label: "Assist Grips", value: "3 Units" },
          { label: "Luggage Shelf Strings", value: "-" },
          { label: "Spot map lamp", value: "Roof front" },
          { label: "Reading Lamp", value: "One on each side of the roof" },
          { label: "Trunk/Luggage room lamp", value: "Included" },
          { label: "Glove box light", value: "-" },
          { label: "Front footwell light", value: "Driver & Co driver side" },
          { label: "Courtesy lamp", value: "-" },
        ],
      },
      SAFETY: {
        title: "SAFETY & SECURITY",
        data: [
          { label: "Dual Front Airbags", value: "Driver + Co Driver" },
          { label: "Front Side and Curtain Airbag", value: "Included" },
          { label: "Surround View Monitor", value: "360 degree camera -" },
          { label: "Reverse Parking Camera", value: "Included" },
          { label: "Front seatbelt pre-tension & force limiter", value: "Included" },
          { label: "Adjustable shoulder anchor", value: "Front seatbelts" },
          { label: "Rear seats belts type", value: "Side:3 points / Center:3 points" },
          { label: "Seat belt reminder", value: "Front & Rear Lamp + Buzzer" },
          { label: "ISOFIX Child Seat Restraint System", value: "Included" },
          { label: "ABS with EBD", value: "Included" },
          { label: "Vehicle Stability Control", value: "Included" },
          { label: "Hill Hold Control", value: "Included" },
          { label: "Hill descendant", value: "-" },
          { label: "Tire-pressure monitoring system (TPMS)", value: "Included" },
          { label: "Immobilizer", value: "Included" },
          { label: "Advanced Body Structure (TECT Body)", value: "Included" },
          { label: "Side Impact Protection Beam", value: "Included" },
          { label: "Pedal release system", value: "Included" },
          { label: "Rear Parking Sensors", value: "Included" },
          { label: "Day/night rear view mirror", value: "Manual" },
          { label: "Child-proof rear door locks", value: "Included" },
          { label: "Warning Lamp/ Reminder", value: "Low Fuel, Door Ajar, Headlamp On" },
          { label: "Speed Warning Buzzer", value: "Included" },
        ],
      },
      COMFORT: {
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Panoramic Roof", value: "-" },
          { label: "Head-up Display", value: "-" },
          { label: "Front Wireless Charger", value: "-" },
          { label: "Toyota i-Connect", value: "Included" },
          { label: "Front sliding armrest", value: "With storage" },
          { label: "USB Ports", value: "Front x1 / Rear x2" },
          { label: "USB Charger Rear", value: "High speed type 15w Type C x2" },
          { label: "Adjustable Tilt & Telescopic steering", value: "Included" },
          { label: "Power Steering (EPS)", value: "Included" },
          { label: "Cruise Control", value: "Included" },
          { label: "Steering mounted commands", value: "Audio, BT, Cruise control" },
          { label: "Paddle Shift", value: "-" },
          { label: "Auto air conditioner", value: "Included" },
          { label: "Rear AC vents", value: "Included" },
          { label: "PM2.5 filter & display", value: "AQI Display in Infotainment DA" },
          { label: "Ventilated seats (D+P)", value: "-" },
          { label: "Drive mode switch", value: "THS" },
          { label: "Driver seat height adjust", value: "Included" },
          { label: "Seat back pocket", value: "D+P" },
          { label: "Separately folding rear seat backs & cushions", value: "60/40" },
          { label: "Reclining rear seats", value: "Included" },
          { label: "Rear headrest", value: "Removable type (3 Units)" },
          { label: "Rear center armrest with cupholder", value: "Included" },
          { label: "Power Seat", value: "-" },
          { label: "Keyless Entry", value: "Included" },
          { label: "Push start/stop button", value: "Included" },
          { label: "Power door locks (Central Locking)", value: "Included" },
          { label: "Front & rear door pet bottle holder", value: "1000ml" },
          { label: "Power windows", value: "D-side auto up/down" },
          { label: "Auto folding outside mirror", value: "-" },
          { label: "Electric outside mirrors", value: "Electric fold" },
          { label: "D+P vanity mirror", value: "Included" },
          { label: "D+P vanity mirror lamp", value: "Included" },
          { label: "D+P ticket holder", value: "Included" },
          { label: "Centre console with cupholder", value: "2 cups" },
          { label: "Accessory socket (Center console)", value: "Included" },
          { label: "Accessory socket (Luggage room)", value: "Included" },
          { label: "Gear Shift indicator", value: "-" },
          { label: "Driver footrest", value: "Included" },
          { label: "Rear door Sunshade", value: "Included" },
        ],
      },
    },
      "HYBRID-S": {
      ENGINE: {
        title: "ENGINE",
        data: [
          { label: "Engine Capacity - No of cylinders", value: "1490 cm³ / 3" },
          { label: "Max Power", value: "68 kW (92.45PS) @ 5500 rpm" },
          { label: "Max Torque", value: "122 Nm @ 4400 - 4800 rpm" },
          { label: "Total system Max.Power", value: "85 kW (115.56PS)" },
          { label: "Battery type", value: "Lithium-ion" },
          { label: "Battery Voltage", value: "177.6 V" },
          { label: "Motor Generator type", value: "AC Synchronous Motor" },
          { label: "Hybrid System Max. Power", value: "59 kW (80.2 PS) @ 3995 rpm" },
          { label: "Hybrid System Max. Torque", value: "141 Nm @ 0 - 3995 rpm" },
          { label: "OBD", value: "OBD2" },
          { label: "ISG", value: "ISG -" },
        ],
      },
      TRANSMISSION: {
        title: "TRANSMISSION",
        data: [{ label: "Type", value: "e-Drive" }],
      },
      DRIVE: {
        title: "DRIVE",
        data: [{ label: "Type", value: "2WD" }],
      },
      DIMENSIONS: {
        title: "DIMENSIONS & WEIGHT",
        data: [
          { label: "Length x Width x Height", value: "4365 mm x 1795 mm x 1645 mm" },
          { label: "Wheelbase", value: "2600 mm" },
          { label: "Turning radius", value: "5.4 m" },
          { label: "Fuel Tank capacity", value: "0.045 m³ (45 L)" },
          { label: "Fuel Efficiency", value: "27.97 kmpl" },
          { label: "Seating Capacity", value: "5" },
          { label: "Kerb weight", value: "1255 - 1285 kg" },
          { label: "Gross Weight", value: "1755 kg" },
        ],
      },
      SUSPENSION: {
        title: "SUSPENSION",
        data: [
          { label: "Front", value: "MacPherson strut" },
          { label: "Rear", value: "Torsion beam" },
        ],
      },
      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Front", value: "Ventilated disc" },
          { label: "Rear", value: "Solid disc" },
          { label: "EPB", value: "-" },
        ],
      },
      WHEEL_TYRE: {
        title: "WHEEL & TYRE",
        data: [
          { label: "Size", value: "215 / 60 R17 (43.18 cm)" },
          { label: "Wheel Type", value: "Steel wheel with Full wheel cap" },
          { label: "Tire repair kit", value: "Included" },
        ],
      },
      EXTERIOR: {
        title: "EXTERIOR",
        data: [
          { label: "Headlamp", value: "Projector Bi-Halogen (w/chrome plating)" },
          { label: "LED Position lamp", value: "Included" },
          { label: "Twin LED Day-time running lamp / Side turn lamp", value: "Included" },
          { label: "Auto Headlight", value: "-" },
          { label: "Headlight levelling (manual)", value: "Included" },
          { label: "LED Tail Stop Lamp", value: "Included" },
          { label: "High mount stop lamp", value: "Included" },
          { label: "Follow me home headlamp", value: "-" },
          { label: "ORVM with turn indicator", value: "Included" },
          { label: "Front Upper Grill", value: "Unique crystal acrylic type" },
          { label: "Black wheel arch cladding", value: "Front & rear" },
          { label: "Back door garnish", value: "Chrome" },
          { label: "Roof Rails", value: "Silver" },
          { label: "Skid Plate", value: "Front & Rear Silver" },
          { label: "Front Variable Intermittent wiper", value: "-" },
          { label: "Rear window wiper & washer", value: "-" },
          { label: "Green Glass", value: "Front Windshield / Doors / Quarter / Back Door" },
          { label: "Optional Stylish Dual Tone Exterior", value: "-" },
          { label: "Roof end spoiler", value: "Included" },
          { label: "Side under protection garnish", value: "Included" },
          { label: "Sharkfin Antenna", value: "Included" },
          { label: "Chrome belt line garnish", value: "-" },
          { label: "Body color outside door handle", value: "Included" },
        ],
      },
      INTERIOR: {
        title: "INTERIOR",
        data: [
          { label: "Interior color", value: "Dual tone Black x Brown" },
          { label: "Ambient lighting", value: "-" },
          { label: "Smart Playcast Touchscreen Audio", value: "7 inch, MP3/AM/FM/Bluetooth/USB/Apple CarPlay/Android Auto" },
          { label: "Arkamys Sound tuning", value: "-" },
          { label: "Premium Audio", value: "-" },
          { label: "Speakers", value: "4 Speakers + 2 Tweeters" },
          { label: "Information display", value: "TFT Color 7 inch" },
          { label: "Soft touch IP with premium stitch", value: "-" },
          { label: "Chrome inside door handle", value: "Included" },
          { label: "IP Garnish", value: "Gloss Silver" },
          { label: "Front ventilation knob", value: "Satin chrome" },
          { label: "Centre ventilation knob & fin", value: "Satin silver" },
          { label: "Steering Garnish", value: "Satin chrome" },
          { label: "Shift Garnish", value: "Gloss black paint + Satin silver (Resin)" },
          { label: "Hazard Garnish (Outer)", value: "Satin silver (Resin)" },
          { label: "Air conditioner Control Panel", value: "Matte black" },
          { label: "Rear AC vent Garnish & Knob", value: "Satin chrome (Resin)" },
          { label: "Front door garnish", value: "Silver" },
          { label: "Door armrest", value: "Black Fabric" },
          { label: "Switch bezel", value: "-" },
          { label: "Artificial Leather seats", value: "Brown fabric with perforations" },
          { label: "Leather Steering wheel", value: "-" },
          { label: "Assist Grips", value: "3 Units" },
          { label: "Luggage Shelf Strings", value: "-" },
          { label: "Spot map lamp", value: "Roof front" },
          { label: "Reading Lamp", value: "One on each side of the roof" },
          { label: "Trunk/Luggage room lamp", value: "Included" },
          { label: "Glove box light", value: "-" },
          { label: "Front footwell light", value: "Driver & Co driver side" },
          { label: "Courtesy lamp", value: "-" },
        ],
      },
      SAFETY: {
        title: "SAFETY & SECURITY",
        data: [
          { label: "Dual Front Airbags", value: "Driver + Co Driver" },
          { label: "Front Side and Curtain Airbag", value: "Included" },
          { label: "Surround View Monitor", value: "360 degree camera -" },
          { label: "Reverse Parking Camera", value: "Included" },
          { label: "Front seatbelt pre-tension & force limiter", value: "Included" },
          { label: "Adjustable shoulder anchor", value: "Front seatbelts" },
          { label: "Rear seats belts type", value: "Side:3 points / Center:3 points" },
          { label: "Seat belt reminder", value: "Front & Rear Lamp + Buzzer" },
          { label: "ISOFIX Child Seat Restraint System", value: "Included" },
          { label: "ABS with EBD", value: "Included" },
          { label: "Vehicle Stability Control", value: "Included" },
          { label: "Hill Hold Control", value: "Included" },
          { label: "Hill descendant", value: "-" },
          { label: "Tire-pressure monitoring system (TPMS)", value: "Included" },
          { label: "Immobilizer", value: "Included" },
          { label: "Advanced Body Structure (TECT Body)", value: "Included" },
          { label: "Side Impact Protection Beam", value: "Included" },
          { label: "Pedal release system", value: "Included" },
          { label: "Rear Parking Sensors", value: "Included" },
          { label: "Day/night rear view mirror", value: "Manual" },
          { label: "Child-proof rear door locks", value: "Included" },
          { label: "Warning Lamp/ Reminder", value: "Low Fuel, Door Ajar, Headlamp On" },
          { label: "Speed Warning Buzzer", value: "Included" },
        ],
      },
      COMFORT: {
        title: "COMFORT & CONVENIENCE",
        data: [
          { label: "Panoramic Roof", value: "-" },
          { label: "Head-up Display", value: "-" },
          { label: "Front Wireless Charger", value: "-" },
          { label: "Toyota i-Connect", value: "Included" },
          { label: "Front sliding armrest", value: "With storage" },
          { label: "USB Ports", value: "Front x1 / Rear x2" },
          { label: "USB Charger Rear", value: "High speed type 15w Type C x2" },
          { label: "Adjustable Tilt & Telescopic steering", value: "Included" },
          { label: "Power Steering (EPS)", value: "Included" },
          { label: "Cruise Control", value: "Included" },
          { label: "Steering mounted commands", value: "Audio, BT, Cruise control" },
          { label: "Paddle Shift", value: "-" },
          { label: "Auto air conditioner", value: "Included" },
          { label: "Rear AC vents", value: "Included" },
          { label: "PM2.5 filter & display", value: "AQI Display in Infotainment DA" },
          { label: "Ventilated seats (D+P)", value: "-" },
          { label: "Drive mode switch", value: "THS" },
          { label: "Driver seat height adjust", value: "Included" },
          { label: "Seat back pocket", value: "D+P" },
          { label: "Separately folding rear seat backs & cushions", value: "60/40" },
          { label: "Reclining rear seats", value: "Included" },
          { label: "Rear headrest", value: "Removable type (3 Units)" },
          { label: "Rear center armrest with cupholder", value: "Included" },
          { label: "Power Seat", value: "-" },
          { label: "Keyless Entry", value: "Included" },
          { label: "Push start/stop button", value: "Included" },
          { label: "Power door locks (Central Locking)", value: "Included" },
          { label: "Front & rear door pet bottle holder", value: "1000ml" },
          { label: "Power windows", value: "D-side auto up/down" },
          { label: "Auto folding outside mirror", value: "-" },
          { label: "Electric outside mirrors", value: "Electric fold" },
          { label: "D+P vanity mirror", value: "Included" },
          { label: "D+P vanity mirror lamp", value: "Included" },
          { label: "D+P ticket holder", value: "Included" },
          { label: "Centre console with cupholder", value: "2 cups" },
          { label: "Accessory socket (Center console)", value: "Included" },
          { label: "Accessory socket (Luggage room)", value: "Included" },
          { label: "Gear Shift indicator", value: "-" },
          { label: "Driver footrest", value: "Included" },
          { label: "Rear door Sunshade", value: "Included" },
        ],
      },
    },
  
    },


  NEODRIVE: {
    "NEODRIVE -E": {
      ENGINE: {
  title: "ENGINE",
  data: [
    { label: "Displacement", value: "1462 cc" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
    { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
    { label: "OBD", value: "OBD2" },
    { label: "ISG", value: "12V – 6Ah (Li-ion)" },
  ],
},
TRANSMISSION: {
  title: "TRANSMISSION & DRIVE",
  data: [
    { label: "Transmission Type", value: "5MT" },
    { label: "Drive Type", value: "2WD" },
  ],
},
DIMENSIONS: {
  title: "DIMENSIONS & WEIGHT",
  data: [
    { label: "Length", value: "4365 mm" },
    { label: "Width", value: "1795 mm" },
    { label: "Height", value: "1645 mm" },
    { label: "Wheelbase", value: "2600 mm" },
    { label: "Turning Radius", value: "5.4 m" },
    { label: "Seating Capacity", value: "5" },
  ],
},
FUEL: {
  title: "FUEL",
  data: [
    { label: "Fuel Tank Capacity", value: "45 L" },
    { label: "Fuel Efficiency", value: "21.11 km/l (2WD 5MT)" },
  ],
},

CHASSIS: {
  title: "SUSPENSION, BRAKES & WHEELS",
  data: [
    { label: "Front Suspension", value: "MacPherson Strut" },
    { label: "Rear Suspension", value: "Torsion Beam" },
    { label: "Front Brakes", value: "Ventilated Disc" },
    { label: "Rear Brakes", value: "Solid Disc" },
    { label: "Wheel & Tyre Size", value: "215 / 60 R17" },
    { label: "Wheel Type", value: "Steel Wheel with Full Wheel Cap" },
    { label: "Tyre Repair Kit", value: "✔" },
    { label: "EPB", value: "-" },
  ],
},

EXTERIOR: {
  title: "EXTERIOR",
  data: [
    { label: "Projector Headlamps", value: "Bi-Halogen" },
    { label: "LED Position Lamp", value: "✔" },
    { label: "Twin LED DRL / Turn Lamp", value: "✔" },
    { label: "Auto Headlight", value: "-" },
    { label: "Headlamp Levelling", value: "Manual" },
    { label: "LED Tail Stop Lamp", value: "✔" },
    { label: "High Mount Stop Lamp", value: "✔" },
    { label: "Follow Me Home Headlamp", value: "-" },
    { label: "ORVM with Turn Indicator", value: "✔" },
    { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
    { label: "Black Wheel Arch Cladding", value: "✔" },
    { label: "Back Door Garnish", value: "Silver" },
    { label: "Roof Rails", value: "-" },
    { label: "Skid Plate (Front & Rear)", value: "Silver" },
    { label: "Front Intermittent Wiper", value: "-" },
    { label: "Rear Wiper & Washer", value: "-" },
    { label: "Green Tinted Glass", value: "✔" },
    { label: "Roof End Spoiler", value: "✔" },
    { label: "Side Under Protection Garnish", value: "✔" },
    { label: "Sharkfin Antenna", value: "✔" },
    { label: "Chrome Belt Line Garnish", value: "-" },
    { label: "Outside Door Handle", value: "Body Colour" },
  ],
},

SAFETY: {
  title: "SAFETY & SECURITY",
  data: [
    { label: "Airbags", value: "Dual Front" },
    { label: "Side & Curtain Airbags", value: "-" },
    { label: "ABS with EBD", value: "✔" },
    { label: "Vehicle Stability Control", value: "✔" },
    { label: "Hill Hold Control", value: "✔" },
    { label: "Hill Descent Control", value: "-" },
    { label: "TPMS", value: "-" },
    { label: "ISOFIX Child Seat Mount", value: "✔" },
    { label: "Rear Parking Sensors", value: "✔" },
    { label: "Reverse Parking Camera", value: "-" },
    { label: "Day / Night IRVM", value: "Manual" },
    { label: "Immobilizer", value: "✔" },
    { label: "Speed Warning Buzzer", value: "✔" },
  ],
},
INTERIOR: {
  title: "INTERIOR",
  data: [
    { label: "Interior Theme", value: "Black / Black-Brown" },
    { label: "Ambient Lighting", value: "-" },
    { label: "Touchscreen Infotainment", value: "-" },
    { label: "Speakers", value: "2 (Front)" },
    { label: "Tweeters", value: "-" },
    { label: "MID Display", value: "4.2-inch TFT" },
    { label: "Seat Upholstery", value: "Fabric" },
    { label: "Leather Steering Wheel", value: "-" },
    { label: "Rear AC Vent", value: "-" },
    { label: "Front Footwell Lamp", value: "-" },
    { label: "Glove Box Lamp", value: "-" },
    { label: "Luggage Room Lamp", value: "-" },
  ],
},
COMFORT: {
  title: "COMFORT & CONVENIENCE",
  data: [
    { label: "Power Steering", value: "EPS" },
    { label: "Manual AC", value: "✔" },
    { label: "Auto AC", value: "✔" },
    { label: "Steering Adjustment", value: "Tilt & Telescopic" },
    { label: "Driver Seat Height Adjust", value: "✔" },
    { label: "Front Armrest", value: "✔" },
    { label: "Keyless Entry", value: "✔" },
    { label: "Push Start / Stop", value: "-" },
    { label: "Power Windows", value: "All" },
    { label: "Driver Auto Up / Down", value: "✔" },
    { label: "Electric ORVM", value: "-" },
    { label: "Cruise Control", value: "-" },
    { label: "Rear Defogger", value: "✔" },
    { label: "Rear Fast Charging USB", value: "-" },
    { label: "Pet Bottle Holders", value: "✔ (1000 ml)" },
  ],
},



},
    "NEODRIVE-S": {
      ENGINE: {
    title: "ENGINE",
    data: [
      { label: "Displacement", value: "1462 cm³" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
      { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
      { label: "OBD", value: "OBD2" },
      { label: "ISG", value: "ISG (12V – 6Ah Li-ion)" },
    ],
  },

  TRANSMISSION: {
    title: "TRANSMISSION",
    data: [
      { label: "Transmission Type", value: "5MT / 6AT" },
      { label: "Drive Type", value: "2WD" },
    ],
  },

  DIMENSIONS_WEIGHT: {
    title: "DIMENSIONS & WEIGHT",
    data: [
      { label: "Length", value: "4365 mm" },
      { label: "Width", value: "1795 mm" },
      { label: "Height", value: "1645 mm" },
      { label: "Wheelbase", value: "2600 mm" },
      { label: "Turning Radius", value: "5.4 m" },
      { label: "Fuel Tank Capacity", value: "45 L" },
      {
        label: "Fuel Efficiency",
        value:
          "2WD 5MT: 21.11 km/l | 2WD 6AT: 20.58 km/l | AWD 6AT: 19.20 km/l",
      },
      { label: "Seating Capacity", value: "5" },
      {
        label: "Kerb Weight",
        value:
          "2WD 5MT: 1145–1190 kg | 2WD 6AT: 1185–1215 kg | AWD 6AT: 1290 kg",
      },
      {
        label: "Gross Vehicle Weight",
        value:
          "2WD 5MT: 1650 kg | 2WD 6AT: 1675 kg | AWD 6AT: 1750 kg",
      },
    ],
  },

  SUSPENSION_BRAKES: {
    title: "SUSPENSION & BRAKES",
    data: [
      { label: "Front Suspension", value: "MacPherson strut" },
      { label: "Rear Suspension", value: "Torsion beam" },
      { label: "Front Brakes", value: "Ventilated Disc" },
      { label: "Rear Brakes", value: "Solid Disc" },
      { label: "EPB", value: "✔ (6AT)" },
    ],
  },

  WHEEL_TYRE: {
    title: "WHEEL & TYRE",
    data: [
      { label: "Tyre Size", value: "215 / 60 R17" },
      { label: "Wheel Type", value: "Steel wheel with full wheel cap" },
      { label: "Tyre Repair Kit", value: "✔" },
    ],
  },

  EXTERIOR: {
    title: "EXTERIOR",
    data: [
      { label: "Projector Headlamps (Bi-Halogen)", value: "✔" },
      { label: "LED Position Lamp", value: "✔" },
      { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
      { label: "Auto Headlamp", value: "-" },
      { label: "Headlamp Levelling (Manual)", value: "✔" },
      { label: "LED Tail Stop Lamp", value: "✔" },
      { label: "High Mount Stop Lamp", value: "✔" },
      { label: "Follow Me Home Headlamp", value: "-" },
      { label: "ORVM with Turn Indicator", value: "✔" },
      { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
      { label: "Black Wheel Arch Cladding", value: "✔" },
      { label: "Back Door Garnish", value: "Silver" },
      { label: "Roof Rails", value: "Black" },
      { label: "Skid Plate (Front & Rear)", value: "Silver" },
      { label: "Front Variable Intermittent Wiper", value: "-" },
      { label: "Rear Wiper & Washer", value: "-" },
      { label: "Green Tinted Glass", value: "✔" },
      { label: "Dual Tone Exterior Option", value: "-" },
      { label: "Roof End Spoiler", value: "✔" },
      { label: "Side Under Protection Garnish", value: "✔" },
      { label: "Sharkfin Antenna", value: "✔" },
      { label: "Chrome Belt Line Garnish", value: "-" },
      { label: "Body Colour Outside Door Handle", value: "✔" },
    ],
  },

  SAFETY: {
    title: "SAFETY & SECURITY",
    data: [
      { label: "Dual Front Airbags", value: "✔" },
      { label: "Front Side & Curtain Airbags", value: "✔" },
      { label: "360° Camera", value: "-" },
      { label: "Reverse Parking Camera", value: "✔" },
      { label: "Seatbelt Pretensioner & Force Limiter", value: "✔" },
      { label: "Adjustable Shoulder Anchor", value: "✔" },
      { label: "Rear Seatbelt (All 3-point)", value: "✔" },
      { label: "Seatbelt Reminder", value: "Lamp + Buzzer" },
      { label: "ISOFIX", value: "✔" },
      { label: "ABS with EBD", value: "✔" },
      { label: "Vehicle Stability Control", value: "✔" },
      { label: "Hill Hold Control", value: "✔" },
      { label: "Hill Descent Control", value: "-" },
      { label: "TPMS", value: "✔" },
      { label: "Immobilizer", value: "✔" },
      { label: "TECT Body", value: "✔" },
      { label: "Rear Parking Sensors", value: "✔" },
    ],
  },

  INTERIOR: {
    title: "INTERIOR",
    data: [
      { label: "Black Interior Theme", value: "✔" },
      { label: "Ambient Lighting", value: "-" },
      {
        label: "Touchscreen Audio",
        value: "17.78 cm Smart Playcast (CarPlay & Android Auto)",
      },
      { label: "Speakers", value: "4" },
      { label: "Tweeters", value: "✔ (2)" },
      { label: "MID Display", value: "10.16 cm TFT" },
      { label: "Chrome Inside Door Handle", value: "✔" },
      { label: "Rear AC Vent", value: "✔" },
      { label: "Artificial Leather Seats", value: "-" },
      { label: "Leather Steering Wheel", value: "-" },
    ],
  },

  COMFORT: {
    title: "COMFORT & CONVENIENCE",
    data: [
      { label: "Panoramic Roof", value: "-" },
      { label: "Head-Up Display", value: "-" },
      { label: "Wireless Charger", value: "-" },
      { label: "Toyota i-Connect", value: "✔" },
      { label: "USB Ports", value: "Front x1 / Rear x2" },
      { label: "Cruise Control", value: "✔" },
      { label: "Auto AC", value: "✔" },
      { label: "Rear AC Vents", value: "✔" },
      { label: "Keyless Entry", value: "✔" },
      { label: "Push Start/Stop", value: "✔" },
      { label: "Power Windows", value: "✔" },
      { label: "Rear Sunshade", value: "-" },
    ],
  },
    },
    "NEODRIVE-G(O)": {
      ENGINE: {
    title: "ENGINE",
    data: [
      { label: "Displacement", value: "1462 cm³" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
      { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
      { label: "OBD", value: "OBD2" },
      { label: "ISG", value: "ISG (12V – 6Ah Li-ion)" },
    ],
  },

  TRANSMISSION: {
    title: "TRANSMISSION",
    data: [
      { label: "Transmission Type", value: "5MT / 6AT" },
      { label: "Drive Type", value: "2WD" },
    ],
  },

  DIMENSIONS_WEIGHT: {
    title: "DIMENSIONS & WEIGHT",
    data: [
      { label: "Length", value: "4365 mm" },
      { label: "Width", value: "1795 mm" },
      { label: "Height", value: "1645 mm" },
      { label: "Wheelbase", value: "2600 mm" },
      { label: "Turning Radius", value: "5.4 m" },
      { label: "Fuel Tank Capacity", value: "45 L" },
      {
        label: "Fuel Efficiency",
        value:
          "2WD 5MT: 21.11 km/l | 2WD 6AT: 20.58 km/l | AWD 6AT: 19.20 km/l",
      },
      { label: "Seating Capacity", value: "5" },
      {
        label: "Kerb Weight",
        value:
          "2WD 5MT: 1145–1190 kg | 2WD 6AT: 1185–1215 kg | AWD 6AT: 1290 kg",
      },
      {
        label: "Gross Vehicle Weight",
        value:
          "2WD 5MT: 1650 kg | 2WD 6AT: 1675 kg | AWD 6AT: 1750 kg",
      },
    ],
  },

  SUSPENSION_BRAKES: {
    title: "SUSPENSION & BRAKES",
    data: [
      { label: "Front Suspension", value: "MacPherson Strut" },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Front Brakes", value: "Ventilated Disc" },
      { label: "Rear Brakes", value: "Solid Disc" },
      { label: "EPB", value: "✔ (6AT)" },
    ],
  },

  WHEEL_TYRE: {
    title: "WHEEL & TYRE",
    data: [
      { label: "Tyre Size", value: "215 / 60 R17 (43.18 cm)" },
      { label: "Wheel Type", value: "Machined Alloy Wheel" },
      { label: "Tyre Repair Kit", value: "✔" },
    ],
  },

  EXTERIOR: {
    title: "EXTERIOR",
    data: [
      { label: "Projector Headlamps (LED)", value: "✔" },
      { label: "LED Position Lamp", value: "✔" },
      { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
      { label: "Auto Headlamp", value: "✔" },
      { label: "Headlamp Levelling (Manual)", value: "✔" },
      { label: "LED Tail Stop Lamp", value: "✔" },
      { label: "High Mount Stop Lamp", value: "✔" },
      { label: "Follow Me Home Headlamp", value: "✔" },
      { label: "ORVM with Turn Indicator", value: "✔" },
      { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
      { label: "Black Wheel Arch Cladding", value: "✔" },
      { label: "Back Door Garnish", value: "Silver" },
      { label: "Roof Rails", value: "Black" },
      { label: "Skid Plate (Front & Rear)", value: "Silver" },
      { label: "Front Variable Intermittent Wiper", value: "✔" },
      { label: "Rear Wiper & Washer", value: "✔" },
      { label: "Green Tinted Glass", value: "✔" },
      { label: "Dual Tone Exterior Option", value: "-" },
      { label: "Roof End Spoiler", value: "✔" },
      { label: "Side Under Protection Garnish", value: "✔" },
      { label: "Sharkfin Antenna", value: "✔" },
      { label: "Chrome Belt Line Garnish", value: "✔" },
      { label: "Body Colour Outside Door Handle", value: "✔" },
    ],
  },

  INTERIOR: {
    title: "INTERIOR",
    data: [
      { label: "Black Interior Theme", value: "✔" },
      { label: "Ambient Lighting", value: "Door Spot" },
      {
        label: "Touchscreen Audio",
        value: "22.86 cm (9 inch) Smart Playcast",
      },
      { label: "Arkamys Sound Tuning", value: "✔" },
      { label: "Premium Audio", value: "✔" },
      { label: "Speakers", value: "4 (Premium)" },
      { label: "Tweeters", value: "2 (Premium)" },
      { label: "MID Display", value: "17.78 cm (7 inch) TFT" },
      { label: "Soft Touch IP with Stitching", value: "✔" },
      { label: "Artificial Leather Seats", value: "✔" },
      { label: "Leather Steering Wheel", value: "-" },
    ],
  },

  COMFORT: {
    title: "COMFORT & CONVENIENCE",
    data: [
      { label: "Panoramic Roof", value: "✔" },
      { label: "Head-Up Display", value: "-" },
      { label: "Wireless Charger", value: "✔" },
      { label: "Toyota i-Connect", value: "✔" },
      { label: "Front Sliding Armrest", value: "✔" },
      { label: "USB Ports", value: "Front x1 / Rear x2" },
      { label: "Rear Fast Charging USB (Type-C)", value: "✔ (15W x2)" },
      { label: "Cruise Control", value: "-" },
      { label: "Auto AC", value: "✔" },
      { label: "Rear AC Vents", value: "✔" },
      { label: "Ventilated Seats (D+P)", value: "✔" },
      { label: "Drive Mode Switch", value: "-" },
      { label: "Keyless Entry", value: "✔" },
      { label: "Push Start / Stop", value: "✔" },
      { label: "Auto Folding ORVM", value: "✔" },
      { label: "Rear Door Sunshade", value: "✔" },
    ],
  },

  SAFETY: {
    title: "SAFETY & SECURITY",
    data: [
      { label: "Dual Front Airbags", value: "✔" },
      { label: "Front Side & Curtain Airbags", value: "✔" },
      { label: "360° Camera", value: "-" },
      { label: "Reverse Parking Camera", value: "✔" },
      { label: "Seatbelt Pretensioner & Force Limiter", value: "✔" },
      { label: "Adjustable Shoulder Anchor", value: "✔" },
      { label: "Rear Seatbelt (All 3-Point)", value: "✔" },
      { label: "Seatbelt Reminder", value: "Lamp + Buzzer" },
      { label: "ISOFIX", value: "✔" },
      { label: "ABS with EBD", value: "✔" },
      { label: "Vehicle Stability Control", value: "✔" },
      { label: "Hill Hold Control", value: "✔" },
      { label: "Hill Descent Control", value: "-" },
      { label: "TPMS", value: "✔" },
      { label: "Immobilizer", value: "✔" },
      { label: "TECT Body", value: "✔" },
      { label: "Side Impact Protection Beam", value: "✔" },
      { label: "Rear Parking Sensors", value: "✔" },
      { label: "Day / Night IRVM", value: "Auto" },
    ],
  },
    },
    "NEODRIVE-V": {
      ENGINE: {
    title: "ENGINE",
    data: [
      { label: "Displacement", value: "1462 cm³" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Max Power", value: "75.8 kW (103.06 PS) @ 6000 rpm" },
      { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
      { label: "OBD", value: "OBD2" },
      { label: "ISG", value: "ISG (12V – 6Ah Li-ion)" },
    ],
  },

  TRANSMISSION: {
    title: "TRANSMISSION",
    data: [
      {
        label: "Transmission Type",
        value: "5MT (2WD) / 6AT (2WD / 4WD)",
      },
      { label: "Drive Type", value: "2WD / 4WD" },
    ],
  },

  DIMENSIONS_WEIGHT: {
    title: "DIMENSIONS & WEIGHT",
    data: [
      { label: "Length", value: "4365 mm" },
      { label: "Width", value: "1795 mm" },
      { label: "Height", value: "1645 mm" },
      { label: "Wheelbase", value: "2600 mm" },
      { label: "Turning Radius", value: "5.4 m" },
      { label: "Fuel Tank Capacity", value: "45 L" },
      {
        label: "Fuel Efficiency",
        value:
          "2WD 5MT: 21.11 km/l | 2WD 6AT: 20.58 km/l | AWD 6AT: 19.20 km/l",
      },
      { label: "Seating Capacity", value: "5" },
      {
        label: "Kerb Weight",
        value:
          "2WD 5MT: 1145–1190 kg | 2WD 6AT: 1185–1215 kg | AWD 6AT: 1290 kg",
      },
      {
        label: "Gross Vehicle Weight",
        value:
          "2WD 5MT: 1650 kg | 2WD 6AT: 1675 kg | AWD 6AT: 1750 kg",
      },
    ],
  },

  SUSPENSION_BRAKES: {
    title: "SUSPENSION & BRAKES",
    data: [
      { label: "Front Suspension", value: "MacPherson Strut" },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Front Brakes", value: "Ventilated Disc" },
      { label: "Rear Brakes", value: "Solid Disc" },
      { label: "EPB", value: "✔ (6AT)" },
    ],
  },

  WHEEL_TYRE: {
    title: "WHEEL & TYRE",
    data: [
      { label: "Tyre Size", value: "215 / 60 R17 (43.18 cm)" },
      { label: "Wheel Type", value: "Machined Alloy Wheel" },
      { label: "Tyre Repair Kit", value: "✔" },
    ],
  },

  EXTERIOR: {
    title: "EXTERIOR",
    data: [
      { label: "LED Projector Headlamps", value: "✔" },
      { label: "LED Position Lamp", value: "✔" },
      { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
      { label: "Auto Headlamp", value: "✔" },
      { label: "Headlamp Levelling (Manual)", value: "✔" },
      { label: "LED Tail Stop Lamp", value: "✔" },
      { label: "High Mount Stop Lamp", value: "✔" },
      { label: "Follow Me Home Headlamp", value: "✔" },
      { label: "ORVM with Turn Indicator", value: "✔" },
      { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
      { label: "Black Wheel Arch Cladding", value: "✔" },
      { label: "Back Door Garnish", value: "Silver" },
      { label: "Roof Rails", value: "Black" },
      { label: "Skid Plate (Front & Rear)", value: "Silver" },
      { label: "Front Variable Intermittent Wiper", value: "✔" },
      { label: "Rear Wiper & Washer", value: "✔" },
      { label: "Green Tinted Glass", value: "✔" },
      { label: "Dual Tone Exterior Option", value: "✔" },
      { label: "Roof End Spoiler", value: "✔" },
      { label: "Side Under Protection Garnish", value: "✔" },
      { label: "Sharkfin Antenna", value: "✔" },
      { label: "Chrome Belt Line Garnish", value: "✔" },
      { label: "Body Colour Outside Door Handle", value: "✔" },
    ],
  },

  INTERIOR: {
    title: "INTERIOR",
    data: [
      { label: "Black Interior Theme", value: "✔" },
      { label: "Ambient Lighting", value: "Door Spot + IP Line" },
      {
        label: "Touchscreen Audio",
        value: "22.86 cm (9 inch) Smart Playcast",
      },
      { label: "Arkamys Sound Tuning", value: "✔" },
      { label: "Premium Audio", value: "✔" },
      { label: "Speakers", value: "4 (Premium)" },
      { label: "Tweeters", value: "2 (Premium)" },
      { label: "MID Display", value: "17.78 cm (7 inch) TFT" },
      { label: "Soft Touch IP with Stitching", value: "✔" },
      { label: "Artificial Leather Seats", value: "✔" },
      { label: "Leather Steering Wheel", value: "✔" },
    ],
  },

  COMFORT: {
    title: "COMFORT & CONVENIENCE",
    data: [
      { label: "Panoramic Roof", value: "✔" },
      { label: "Head-Up Display", value: "✔" },
      { label: "Wireless Charger", value: "✔" },
      { label: "Toyota i-Connect", value: "✔" },
      { label: "Front Sliding Armrest", value: "✔" },
      { label: "USB Ports", value: "Front x1 / Rear x2" },
      { label: "Rear Fast Charging USB (Type-C)", value: "✔ (15W x2)" },
      { label: "Cruise Control", value: "✔" },
      { label: "Steering Mounted Controls", value: "✔" },
      { label: "Paddle Shift", value: "✔ (AT only)" },
      { label: "Auto AC", value: "✔" },
      { label: "Rear AC Vents", value: "✔" },
      { label: "PM2.5 Filter", value: "✔" },
      { label: "Ventilated Seats (D+P)", value: "✔" },
      { label: "Drive Mode Switch", value: "AWD" },
      { label: "Keyless Entry", value: "✔" },
      { label: "Push Start / Stop", value: "✔" },
      { label: "Auto Folding ORVM", value: "✔" },
      { label: "Rear Door Sunshade", value: "✔" },
    ],
  },

  SAFETY: {
    title: "SAFETY & SECURITY",
    data: [
      { label: "Dual Front Airbags", value: "✔" },
      { label: "Front Side & Curtain Airbags", value: "✔" },
      { label: "360° Camera", value: "✔" },
      { label: "Reverse Parking Camera", value: "-" },
      { label: "Seatbelt Pretensioner & Force Limiter", value: "✔" },
      { label: "Adjustable Shoulder Anchor", value: "✔" },
      { label: "Rear Seatbelt (All 3-Point)", value: "✔" },
      { label: "Seatbelt Reminder", value: "Lamp + Buzzer" },
      { label: "ISOFIX", value: "✔" },
      { label: "ABS with EBD", value: "✔" },
      { label: "Vehicle Stability Control", value: "✔" },
      { label: "Hill Hold Control", value: "✔" },
      { label: "Hill Descent Control", value: "✔ (AWD only)" },
      { label: "TPMS", value: "✔" },
      { label: "Immobilizer", value: "✔" },
      { label: "TECT Body", value: "✔" },
      { label: "Side Impact Protection Beam", value: "✔" },
      { label: "Rear Parking Sensors", value: "✔" },
      { label: "Day / Night IRVM", value: "Auto" },
    ],
  },
    },
  },

  "E-CNG": {
    "E CNG-S": {
     ENGINE: {
  title: "ENGINE",
  data: [
    { label: "Displacement", value: "1462 cc" },
    { label: "Fuel Type", value: "Petrol + CNG" },
    { label: "Max Power (Petrol)", value: "74 kW (100.6 PS) @ 6000 rpm" },
    { label: "Max Power (CNG)", value: "64.6 kW (87.8 PS) @ 5500 rpm" },
    { label: "Max Torque (Petrol)", value: "136 Nm @ 4400 rpm" },
    { label: "Max Torque (CNG)", value: "121.5 Nm @ 4200 rpm" },
    { label: "OBD", value: "OBD2" },
    { label: "ISG", value: "-" },
  ],
},

TRANSMISSION: {
  title: "TRANSMISSION",
  data: [
    { label: "Transmission Type", value: "5MT" },
    { label: "Drive Type", value: "2WD" },
  ],
},

     DIMENSIONS: {
  title: "DIMENSIONS & WEIGHT",
  data: [
    { label: "Length", value: "4365 mm" },
    { label: "Width", value: "1795 mm" },
    { label: "Height", value: "1645 mm" },
    { label: "Wheelbase", value: "2600 mm" },
    { label: "Turning Radius", value: "5.4 m" },
    { label: "Seating Capacity", value: "5" },
    { label: "Kerb Weight", value: "1245 kg" },
    { label: "Gross Vehicle Weight", value: "1705 kg" },
  ],
},
FUEL: {
  title: "FUEL & EFFICIENCY",
  data: [
    { label: "Fuel Tank (Petrol)", value: "45 L" },
    { label: "Fuel Tank (CNG)", value: "55 L (Water equivalent)" },
    { label: "Fuel Efficiency (CNG)", value: "26.6 km/kg" },
  ],
},

     CHASSIS: {
  title: "SUSPENSION, BRAKES & TYRES",
  data: [
    { label: "Front Suspension", value: "MacPherson strut" },
    { label: "Rear Suspension", value: "Torsion beam" },
    { label: "Front Brake", value: "Ventilated disc" },
    { label: "Rear Brake", value: "Solid disc" },
    { label: "EPB", value: "-" },
    { label: "Wheel & Tyre Size", value: "215 / 60 R17" },
    { label: "Wheel Type", value: "Steel wheel with full wheel cap" },
    { label: "Tyre Repair Kit", value: "✔" },
  ],
},

      BRAKES: {
        title: "BRAKES",
        data: [
          { label: "Front", value: "Ventilated disc" },
          { label: "Rear", value: "Solid disc" },
          { label: "EPB", value: "-" },
        ],
      },
      "WHEEL & TYRE SIZE": {
        title: "WHEEL & TYRE SIZE",
        data: [
          { label: "Tyre Size", value: "215 / 60 R17 (43.18 cm)" },
          { label: "Wheel", value: "Steel wheel with full wheel cap" },
          { label: "Tire repair kit", value: "-" },
        ],
      },
      EXTERIOR: {
  title: "EXTERIOR",
  data: [
    { label: "Projector Headlamps (Bi-Halogen)", value: "✔" },
    { label: "LED Position Lamp", value: "✔" },
    { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
    { label: "Auto Headlight", value: "-" },
    { label: "Manual Headlamp Levelling", value: "✔" },
    { label: "LED Tail Stop Lamp", value: "✔" },
    { label: "High Mount Stop Lamp", value: "✔" },
    { label: "Follow Me Home Headlamp", value: "-" },
    { label: "ORVM with Turn Indicator", value: "✔" },
    { label: "Roof Rails (Black)", value: "✔" },
    { label: "Sharkfin Antenna", value: "✔" },
    { label: "Skid Plate (Front & Rear)", value: "Silver" },
    { label: "Rear Wiper & Washer", value: "-" },
  ],
},
SAFETY: {
  title: "SAFETY & SECURITY",
  data: [
    { label: "Dual Front Airbags", value: "✔" },
    { label: "Front Side & Curtain Airbags", value: "✔" },
    { label: "360° Camera", value: "-" },
    { label: "Reverse Parking Camera", value: "✔" },
    { label: "ABS with EBD", value: "✔" },
    { label: "Vehicle Stability Control", value: "✔" },
    { label: "Hill Hold Control", value: "✔" },
    { label: "Hill Descent Control", value: "-" },
    { label: "TPMS", value: "✔" },
    { label: "ISOFIX Child Seat Mount", value: "✔" },
    { label: "Rear Parking Sensors", value: "✔" },
  ],
},
INTERIOR: {
  title: "INTERIOR",
  data: [
    { label: "Interior Theme", value: "Black" },
    { label: "Touchscreen Audio System", value: "17.78 cm" },
    { label: "Android Auto & Apple CarPlay", value: "✔" },
    { label: "Speakers", value: "4" },
    { label: "TFT MID Display", value: "10.16 cm" },
    { label: "Leather Steering Wheel", value: "-" },
    { label: "Ambient Lighting", value: "-" },
    { label: "Rear AC Vents", value: "✔" },
  ],
},
COMFORT: {
  title: "COMFORT & CONVENIENCE",
  data: [
    { label: "Panoramic Roof", value: "-" },
    { label: "Cruise Control", value: "✔" },
    { label: "Wireless Charger", value: "-" },
    { label: "USB Ports", value: "Front x1 / Rear x2 (Type-C)" },
    { label: "Push Start / Stop Button", value: "✔" },
    { label: "Keyless Entry", value: "✔" },
    { label: "Power Windows", value: "✔" },
    { label: "Auto Folding ORVM", value: "-" },
    { label: "Rear Sunshade", value: "✔" },
  ],
},


    },
    "E CNG-G": {
      ENGINE: {
  title: "ENGINE",
  data: [
    { label: "Displacement", value: "1462 cc" },
    { label: "Fuel Type", value: "Petrol + CNG" },
    { label: "Max Power (Petrol)", value: "74 kW (100.6 PS) @ 6000 rpm" },
    { label: "Max Power (CNG)", value: "64.6 kW (87.8 PS) @ 5500 rpm" },
    { label: "Max Torque (Petrol)", value: "136 Nm @ 4400 rpm" },
    { label: "Max Torque (CNG)", value: "121.5 Nm @ 4200 rpm" },
    { label: "OBD", value: "OBD2" },
    { label: "ISG", value: "-" },
  ],
},
TRANSMISSION: {
  title: "TRANSMISSION & DRIVE",
  data: [
    { label: "Transmission Type", value: "5MT" },
    { label: "Drive Type", value: "2WD" },
  ],
},
DIMENSIONS: {
  title: "DIMENSIONS & WEIGHT",
  data: [
    { label: "Length", value: "4365 mm" },
    { label: "Width", value: "1795 mm" },
    { label: "Height", value: "1645 mm" },
    { label: "Wheelbase", value: "2600 mm" },
    { label: "Turning Radius", value: "5.4 m" },
    { label: "Seating Capacity", value: "5" },
    { label: "Kerb Weight", value: "1245 kg" },
    { label: "Gross Vehicle Weight", value: "1705 kg" },
  ],
},
FUEL: {
  title: "FUEL & EFFICIENCY",
  data: [
    { label: "Fuel Tank (Petrol)", value: "45 L" },
    { label: "Fuel Tank (CNG)", value: "55 L (Water Equivalent)" },
    { label: "Fuel Efficiency (CNG)", value: "26.6 km/kg" },
  ],
},
CHASSIS: {
  title: "SUSPENSION, BRAKES & TYRES",
  data: [
    { label: "Front Suspension", value: "MacPherson strut" },
    { label: "Rear Suspension", value: "Torsion beam" },
    { label: "Front Brake", value: "Ventilated disc" },
    { label: "Rear Brake", value: "Solid disc" },
    { label: "EPB", value: "-" },
    { label: "Wheel & Tyre Size", value: "215 / 60 R17" },
    { label: "Wheel Type", value: "Machined Alloy Wheel" },
    { label: "Tyre Repair Kit", value: "✔" },
  ],
},
EXTERIOR: {
  title: "EXTERIOR",
  data: [
    { label: "Projector Headlamps (LED)", value: "✔" },
    { label: "LED Position Lamp", value: "✔" },
    { label: "Twin LED DRL / Side Turn Lamp", value: "✔" },
    { label: "Auto Headlight", value: "✔" },
    { label: "Manual Headlamp Levelling", value: "✔" },
    { label: "LED Tail Stop Lamp", value: "✔" },
    { label: "High Mount Stop Lamp", value: "✔" },
    { label: "Follow Me Home Headlamp", value: "✔" },
    { label: "ORVM with Turn Indicator", value: "✔" },
    { label: "Front Upper Grille (Crystal Acrylic)", value: "-" },
    { label: "Black Wheel Arch Cladding", value: "✔" },
    { label: "Back Door Garnish", value: "Silver" },
    { label: "Roof Rails", value: "Black" },
    { label: "Skid Plate (Front & Rear)", value: "Silver" },
    { label: "Front Variable Intermittent Wiper", value: "✔" },
    { label: "Rear Wiper & Washer", value: "✔" },
    { label: "Green Tinted Glass (All Doors)", value: "✔" },
    { label: "Optional Dual Tone Exterior", value: "-" },
    { label: "Roof End Spoiler", value: "✔" },
    { label: "Side Under Protection Garnish", value: "✔" },
    { label: "Sharkfin Antenna", value: "✔" },
    { label: "Chrome Belt Line Garnish", value: "✔" },
    { label: "Body Coloured Door Handles", value: "✔" },
  ],
},
INTERIOR: {
  title: "INTERIOR",
  data: [
    { label: "Interior Theme", value: "Black / Black-Brown" },
    { label: "Ambient Lighting", value: "Door Spot" },
    { label: "Touchscreen Audio", value: "22.86 cm (9 inch)" },
    { label: "Android Auto & Apple CarPlay", value: "✔" },
    { label: "Arkamys Sound Tuning", value: "✔" },
    { label: "Premium Audio", value: "✔" },
    { label: "Speakers", value: "4 (Premium)" },
    { label: "Tweeters", value: "2 (Premium)" },
    { label: "TFT MID Display", value: "10.16 cm (4.2 inch)" },
    { label: "Soft Touch IP with Stitching", value: "✔" },
    { label: "Leather Steering Wheel", value: "-" },
    { label: "Artificial Leather Seats", value: "✔" },
    { label: "Rear AC Vent", value: "✔" },
    { label: "LED Reading & Map Lamps", value: "✔" },
    { label: "Front Footwell Light", value: "✔" },
  ],
},
COMFORT: {
  title: "COMFORT & CONVENIENCE",
  data: [
    { label: "Panoramic Roof", value: "-" },
    { label: "Head-up Display", value: "-" },
    { label: "Wireless Charger", value: "✔" },
    { label: "Toyota i-Connect", value: "✔" },
    { label: "Front Armrest with Storage", value: "✔" },
    { label: "USB Ports", value: "Front x1 / Rear x2 (Type-C)" },
    { label: "Adjustable Steering", value: "Tilt & Telescopic" },
    { label: "Cruise Control", value: "-" },
    { label: "Auto Air Conditioner", value: "✔" },
    { label: "PM2.5 Filter", value: "✔" },
    { label: "Ventilated Seats", value: "✔" },
    { label: "Driver Seat Height Adjust", value: "✔" },
    { label: "60:40 Split Rear Seats", value: "✔" },
    { label: "Keyless Entry & Push Start", value: "✔" },
    { label: "Power Windows (All)", value: "✔" },
    { label: "Auto Folding ORVM", value: "✔" },
    { label: "Rear Sunshade", value: "✔" },
  ],
},
SAFETY: {
  title: "SAFETY & SECURITY",
  data: [
    { label: "Dual Front Airbags", value: "✔" },
    { label: "Front Side & Curtain Airbags", value: "✔" },
    { label: "360° Camera", value: "-" },
    { label: "Reverse Parking Camera", value: "✔" },
    { label: "ABS with EBD", value: "✔" },
    { label: "Vehicle Stability Control", value: "✔" },
    { label: "Hill Hold Control", value: "✔" },
    { label: "Hill Descent Control", value: "-" },
    { label: "TPMS", value: "✔" },
    { label: "ISOFIX Child Seat Mount", value: "✔" },
    { label: "Rear Parking Sensors", value: "✔" },
    { label: "Auto Day/Night IRVM", value: "✔" },
  ],
},

    },
  },
};


/* ===================== DISCLAIMER ===================== */
const disclaimerPoints = [
  "Speed Warning Buzzer gives audible warning of Over Speed to Driver, If Vehicle Speed >80 km/h then two beeps will sound every minute If Vehicle Speed >120 km/h, continuous beeps will sound. This Buzzer does not indicate any Malfunction in Vehicle",
  "Application Features & Displays may vary depending on different Operating Systems or Smartphone Devices used. Avoid using the phone while driving for your safety Apple CarPlay is registered trademark of Apple Inc.",
  "Lithium Ion Battery poses safety & environmental hazard if disposed inappropriately. Do not dispose battery in garbage bin.",
  "Some Parts of Leather appointed upholstery will contain man - made material",
  "As per certification under Rule 115(G) of CMVR 1989",
  "Vehicle pictures and specifications detailed in this brochure may vary between models & equipment.",
];

/* ===================== COMPONENT ===================== */
export default function Technical() {
  const [powertrain, setPowertrain] = useState<Powertrain>("HYBRID");
  const [variant, setVariant] = useState<Variant>("HYBRID-V");

  const [showAll, setShowAll] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const currentSpecs = specifications[powertrain][variant];

  return (
    <>
      <style>{`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
      }

      .tech-container {
        max-width: 1600px;
        margin: auto;
        padding: 30px 20px;
        font-family: Arial, Helvetica, sans-serif;
        background: #fff;
        color: #000;
        overflow-x: hidden;
      }

      .title {
        text-align: center;
        font-size: 22px;
        letter-spacing: 1px;
        margin-bottom: 25px;
        font-weight: 600;
      }

      /* POWERTRAIN */
      .powertrain-bar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background: #e6edf6;
        height: 48px;
        margin-bottom: 15px;
        gap: 0;
      }

      .powertrain-tab {
        border: none;
        background: transparent;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .powertrain-tab:hover {
        background: #d0ddf0;
      }

      .powertrain-tab.active {
        background: #dce7f5;
        font-weight: 600;
      }

      /* VARIANT */
      .variant-bar {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        background: #f5f7fa;
        height: 44px;
        margin-bottom: 35px;
        gap: 0;
      }

      .variant-tab {
        border: none;
        background: transparent;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .variant-tab:hover {
        background: #e0e8f0;
      }

      .variant-tab.active {
        background: #dce7f5;
        font-weight: 600;
      }

      /* SPECS */
      .spec-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
      }

      .spec-title {
        color: #e60000;
        font-size: 14px;
        font-weight: 600;
        margin: 22px 0 10px;
      }

      .spec-row {
        display: flex;
        justify-content: space-between;
        font-size: 13.5px;
        padding: 6px 0;
        border-bottom: 1px solid #eee;
      }

      .spec-row span:first-child {
        flex: 1;
        padding-right: 10px;
      }

      .spec-row span:last-child {
        flex-shrink: 0;
        text-align: right;
      }

      /* VIEW ALL */
      .view-all {
        text-align: center;
        margin: 30px 0;
      }

      .view-all button {
        background: #e60000;
        color: #fff;
        border: none;
        padding: 10px 35px;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .view-all button:hover {
        background: #cc0000;
      }

      /* DISCLAIMER */
      .disclaimer {
        margin-top: 40px;
      }

      .disclaimer h3 {
        font-size: 16px;
        margin-bottom: 15px;
      }

      .disclaimer p {
        font-size: 13px;
        line-height: 1.6;
        margin: 8px 0;
      }

      .disclaimer button {
        background: #000;
        color: #fff;
        border: none;
        padding: 8px 25px;
        cursor: pointer;
        margin-top: 15px;
        transition: background 0.3s ease;
      }

      .disclaimer button:hover {
        background: #333;
      }

      /* ================= RESPONSIVE BREAKPOINTS ================= */

      /* Large Tablets (1200px - 1400px) */
      @media (max-width: 1400px) {
        .tech-container {
          padding: 25px 15px;
        }

        .spec-grid {
          gap: 40px;
        }
      }

      /* Tablets (992px - 1199px) */
      @media (max-width: 1199px) {
        .spec-grid {
          gap: 30px;
        }

        .title {
          font-size: 20px;
        }

        .powertrain-tab,
        .variant-tab {
          font-size: 13px;
        }
      }

      /* Small Tablets & Large Phones (768px - 991px) */
      @media (max-width: 991px) {
        .tech-container {
          padding: 20px 12px;
        }

        .spec-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .title {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .powertrain-bar,
        .variant-bar {
          height: auto;
        }

        .powertrain-tab {
          padding: 12px 8px;
          font-size: 13px;
        }

        .variant-tab {
          padding: 10px 6px;
          font-size: 12px;
        }

        .spec-title {
          font-size: 13px;
          margin: 18px 0 8px;
        }

        .spec-row {
          font-size: 12.5px;
        }
      }

      /* Mobile Landscape (576px - 767px) */
      @media (max-width: 767px) {
        .tech-container {
          padding: 15px 10px;
        }

        .title {
          font-size: 17px;
          margin-bottom: 18px;
        }

        .powertrain-bar {
          grid-template-columns: 1fr;
          gap: 1px;
          margin-bottom: 12px;
        }

        .powertrain-tab {
          padding: 12px;
          font-size: 14px;
          border-bottom: 1px solid #d0ddf0;
        }

        .variant-bar {
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          margin-bottom: 25px;
        }

        .variant-tab {
          padding: 10px;
          font-size: 12px;
          border-bottom: 1px solid #e0e8f0;
        }

        .spec-row {
          flex-direction: column;
          gap: 4px;
          padding: 8px 0;
        }

        .spec-row span:last-child {
          text-align: left;
          font-weight: 600;
        }

        .view-all button {
          padding: 10px 30px;
          font-size: 13px;
        }

        .disclaimer h3 {
          font-size: 15px;
        }

        .disclaimer p {
          font-size: 12px;
        }
      }

      /* Mobile Portrait (320px - 575px) */
      @media (max-width: 575px) {
        .tech-container {
          padding: 12px 8px;
        }

        .title {
          font-size: 16px;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }

        .powertrain-tab {
          padding: 10px;
          font-size: 13px;
        }

        .variant-bar {
          grid-template-columns: 1fr;
        }

        .variant-tab {
          padding: 10px;
          font-size: 13px;
          text-align: left;
          padding-left: 15px;
        }

        .spec-grid {
          gap: 15px;
        }

        .spec-title {
          font-size: 12.5px;
          margin: 15px 0 6px;
        }

        .spec-row {
          font-size: 12px;
          padding: 6px 0;
        }

        .view-all {
          margin: 25px 0;
        }

        .view-all button {
          padding: 9px 25px;
          font-size: 12px;
          width: 100%;
          max-width: 250px;
        }

        .disclaimer {
          margin-top: 30px;
        }

        .disclaimer h3 {
          font-size: 14px;
        }

        .disclaimer p {
          font-size: 11px;
        }

        .disclaimer button {
          padding: 8px 20px;
          font-size: 12px;
          width: 100%;
          max-width: 200px;
        }
      }

      /* Extra Small Mobile (< 400px) */
      @media (max-width: 400px) {
        .tech-container {
          padding: 10px 6px;
        }

        .title {
          font-size: 15px;
        }

        .powertrain-tab,
        .variant-tab {
          font-size: 12px;
          padding: 9px;
        }

        .spec-title {
          font-size: 12px;
        }

        .spec-row {
          font-size: 11px;
        }

        .view-all button,
        .disclaimer button {
          font-size: 11px;
          padding: 8px 18px;
        }
      }

      /* Extra Extra Small Mobile (< 360px) */
      @media (max-width: 360px) {
        .title {
          font-size: 14px;
        }

        .powertrain-tab,
        .variant-tab {
          font-size: 11px;
          padding: 8px;
        }

        .spec-title {
          font-size: 11px;
        }

        .spec-row {
          font-size: 10.5px;
        }
      }
      `}</style>

      <div className="tech-container">

        <div className="title">TECHNICAL SPECIFICATIONS</div>

        {/* POWERTRAIN */}
        <div className="powertrain-bar">
          {(Object.keys(VARIANTS_BY_POWERTRAIN) as Powertrain[]).map((p) => (
            <button
              key={p}
              className={`powertrain-tab ${powertrain === p ? "active" : ""}`}
              onClick={() => {
                setPowertrain(p);
                setVariant(VARIANTS_BY_POWERTRAIN[p][0]);
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* VARIANT */}
        <div className="variant-bar">
          {VARIANTS_BY_POWERTRAIN[powertrain].map((v) => (
            <button
              key={v}
              className={`variant-tab ${variant === v ? "active" : ""}`}
              onClick={() => setVariant(v)}
            >
              {v.replace("-", " - ")}
            </button>
          ))}
        </div>

        {/* SPECS */}
        <div className="spec-grid">
          {currentSpecs &&
  Object.values(currentSpecs)
    .slice(0, showAll ? undefined : 3)
    .map((section, i) =>
      section?.data?.length > 0 ? (
        <div key={i}>
          <div className="spec-title">{section.title}</div>
          {section.data.map((row, j) => (
  <div className="spec-row" key={j}>
    <span>{row.label}</span>
    <span>
      {row.value === "-" ? "–" : row.value.includes("✔") ? "✔" : row.value}
    </span>
  </div>
))}

        </div>
      ) : null
    )}

        </div>

        {/* VIEW ALL */}
        <div className="view-all">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "VIEW LESS" : "VIEW ALL"}
          </button>
        </div>

        {/* DISCLAIMER */}
        <div className="disclaimer">
          <h3>DISCLAIMER:</h3>
          <p>{disclaimerPoints[0]}</p>
          {showDisclaimer &&
            disclaimerPoints.slice(1).map((p, i) => <p key={i}>* {p}</p>)}
          <button onClick={() => setShowDisclaimer(!showDisclaimer)}>
            {showDisclaimer ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>
      </div>
    </>
  );
}