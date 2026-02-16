
'use client';
import React, { useState } from 'react';

/* ================= VARIANTS ================= */
const initialVariants = [
  { id: 's-mt-neo', name: 'S MT NEO DRIVE', price: '₹10,44,200' },
  { id: 's-mt-cng', name: 'S MT CNG', price: '₹11,35,900' },
  { id: 'g-mt-neo', name: 'G MT NEO DRIVE', price: '₹11,56,200' },
  { id: 's-at-neo', name: 'S AT NEO DRIVE', price: '₹11,89,000' },
  { id: 'v-mt-neo', name: 'V MT NEO ', price: '₹12,26,600' },
  
];

/* ================= MASTER SPEC DATA ================= */
const SPEC_SECTIONS = [
  {
    key: 'DIMENSIONS',
    rows: [
      ['Overall Length', ['446.0 cm','446.0 cm','446.0 cm','446.0 cm','446.0 cm','446.0 cm','446.0 cm']],
      ['Overall Width', ['173.5 cm','173.5 cm','173.5 cm','173.5 cm','173.5 cm','173.5 cm','173.5 cm']],
      ['Overall Height', ['169.0 cm','169.0 cm','169.0 cm','169.0 cm','169.0 cm','169.0 cm','169.0 cm']],
      ['Wheelbase', ['274.0 cm','274.0 cm','274.0 cm','274.0 cm','274.0 cm','274.0 cm','274.0 cm']],
      ['Seating capacity', ['7','7','7','7','7','7','7']],
      ['Min Turning Radius', ['5.2 m','5.2 m','5.2 m','5.2 m','5.2 m','5.2 m','5.2 m']],
      ['Fuel Tank capacity (litres)', ['45L','45L','45L','45L','45L','45L','45L']],
    ],
  },
  {
    key: 'WEIGHT',
    rows: [
      ['Max Kerb Weight', ['1175-1200 kg','1270 kg','1175-1200 kg','1215-1225 kg','1175-1200 kg','1215-1225 kg','1215-1225 kg']],
      ['Gross Weight', ['1760 kg','1820 kg','1760 kg','1785 kg','1760 kg','1760 kg','1760 kg']],
    ],
  },
  {
    key: 'ENGINE, TRANSMISSION & CHASSIS',
    rows: [
      ['Engine Capacity', ['1462cc (0.001462m3)','1462cc (0.001462m3)','1462cc (0.001462m3)','1462cc (0.001462m3)','1462cc (0.001',]],
      ['Transmission', ['5 MT','5 MT','5 MT','6 AT','5 MT',]],
      ['Power (kw @ rpm)', ['75.8 kW @ 6000rpm','74 kW @ 6000rpm (Gasoline Mode)64.6 kW @ 5500rpm (CNG Mode)','75.8 kW @ 6000rpm','75.8 kW @ 6000rpm','75.8 kW @ 6000rpm',]],
      ['Torque (Nm @ rpm)', ['139.0 Nm @ 4300rpm','137.1 Nm @ 4300rpm(Gasoline Mode)121.5 Nm @ 4200rpm (CNG Mode)','139.0 Nm @ 4300rpm','139.0 Nm @ 4300rpm','139.0 Nm @ 4300rpm',]],
      ['Emission Type', ['BS 6 (phase 2)','BS 6 (phase 2)','BS 6 (phase 2)','BS 6 (phase 2)','BS 6 (phase 2)',]],
      ['Fuel Efficiency', ['20.51 km/l (MT)','26.11 km/kg','20.51 km/l (MT)','20.30 Km/l (AT)','20.51 km/l (MT)',]],
      ['Idle Start stop', ['✔','✖','✔','✔','✔',]],
      ['Brake Energy regeneration', ['✔','✖','✔','✔','✔',]],
      ['Torque Assist', ['✔','✖','✔','✔','✔',]],
      ['Tire size & dimensions', ['185/65 R15 (38.1 cm)','185/65 R15 (38.1 cm)','185/65 R15 (38.1 cm)','185/65 R15 (38.1 cm)','185/65 R15 (38.1 cm)',]],
      ['Front suspension type', ['Macpherson Strut & Coil Spring','Macpherson Strut & Coil Spring','Macpherson Strut & Coil Spring','Macpherson Strut & Coil Spring','Macpherson Strut & Coil Spring',]],
      ['Rear suspension type', ['Torsion Beam & Coil Spring','Torsion Beam & Coil Spring','Torsion Beam & Coil Spring','Torsion Beam & Coil Spring','Torsion Beam & Coil Spring',]],
      ['Front Brake', ['Disc','Disc','Disc','Disc','Disc',]],
      ['Rear Brake', ['Drum','Drum','Drum','Drum','Drum',]],
    ],
  },
  {
    key: 'EXTERIORS',
    rows: [
      ['Chrome surround Front Grill', ['✔','✔','✔','✔','✔',]],
      ['Front bumper with chrome finish', ['✔','✔','✔','✔','✔',]],
      ['Halogen Projector Head lamps', ['✔','✔','✔','✔','✔',]],
      ['LED Tail Lamps', ['✔','✔','✔','✔','✔',]],
      ['Full Steel wheel caps', ['✔','✔','✖','✔','✖',]],
      ['Two tone machined Alloy wheels', ['✖','✖','✔','✖','✔',]],
      ['Turn signal lamp inegrtared in ORVM', ['✔','✔','✔','✔','✔']],
      ['Chrome Back door Garnish', ['✖','✖','✔','✖','✔',]],
      ['Body colour Door handles', ['✔','✔','✖','✔','✖',]],
      ['Chrome Door handles', ['✖','✖','✔','✖','✔',]],
      ['Body Colour ORVMS', ['✔','✔','✔','✔','✔',]],
      ['Rear Wiper & Washer', ['✖','✖','✔','✖','✔',]],
      ['Rear Defogger', ['✖','✖','✔','✖','✔',]],
      ['Mudguard (Front & Rear)', ['✖','✖','✔','✖','✔',]],
    ],
  },
  {
    key: 'INTERIORS',
    rows: [
      ['Metallic Teak wood Finish Dashboard', ['✖','✖','✔','✖','✔',]],
      ['Metallic Teak wood Finish Door trim (Front)', ['✖','✖','✔','✖','✔',]],
      ['Height Adjustable Driver seat', ['✖','✖','✔','✖','✔',]],
      ['2nd row 60:40 Split seats with one touch recline & Slide', ['✔','✔','✔','✔','✔',]],
      ['3rd row 50:50 Split with recline function', ['✔','✔','✔','✔','✔',]],
      ['Flexible luggage space with Flat fold (3rd row)', ['✔','✔','✔','✔','✔',]],
      ['Premium dual tone interiors', ['✔','✔','✔','✔','✔',]],
      ['Plush Dual tone seat fabric', ['✖','✖','✔','✖','✔',]],
      ['Front seat back pockets', ['Co-driver','Co-driver','✔','Co-driver','✔',]],
      ['Sliding Armrest with Utility Box (Fr row)', ['✔','✔','✔','✔','✔',]],
      ['Leather wrapped steering wheel with metallic Teak wooden fi nish', ['✖','✖','✖','✖','✔',]],
      ['Adjustable head rest all 3 rows', ['✔','✔','✔','✔','✔',]],
      ['Split type luggage board', ['✔','✖','✔','✔','✔',]],
      ['Driver side sun visor with ticket holder', ['✔','✔','✔','✔','✔',]],
      ['Passenger side sun visor with vanity mirror', ['✔','✔','✔','✔','✔',]],
      ['Chrome tip parking brake lever', ['✔','✔','✔','✔','✔',]],
      ['Gear Shift knob with chrome finish', ['✖','✖','✔','✖','✔',]],
      ['Cabin Lamp (Front & Rearr)', ['✖','✖','✖','✖','✔',]],
      ['Courtesy Lamp(Fr door)', ['✖','✖','✖','✖','✔']],

    ],
  },
  {
    key: 'INSTRUMENT CLUSTER',
    rows: [
      ['MID with Color TFT', ['✔','✔','✔','✔','✔',]],
      ['Tachometer', ['✔','✖','✔','✔','✔',]],
      ['Gear Shift indicator (MT)', ['✔','✔','✔','✔','✔',]],
      ['Digital clock', ['✔','✔','✔','✔','✔',]],
      ['Outside temperature Gauge', ['✖','✖','✔','✖','✔',]],
      ['Fuel consumption', ['✔','✖','✔','✔','✔',]],
      ['CNG Fuel Gauge', ['✖','✔','✖','✖','✖',]],
      ['Total CNG mode time', ['✖','✔','✖','✖','✖']],
      ['Distance to empty', ['✔','✖','✔','✔','✔',]],
      ['Headlamp on warning', ['✔','✔','✔','✔','✔',]],
      ['Door ajar warning lamp', ['✔','✖','✔','✔','✔',]],
      
    ],
  },
  {
    key: 'COMFORT & CONVENIENCE',
    rows: [
       ['Engine Push start/stop with smart key', ['✖','✖','✔','✖','✔','✔','✔']],
    ['Manual AC (Front)', ['✔','✔','✖','✔','✖','✖','✖']],
    ['Auto AC (Front)', ['✖','✖','✔','✖','✔','✔','✔']],
    ['2nd Row Center Console AC vent', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Twin cup holder', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Remote keyless entry', ['✔','✔','✔ (Smart Key)','✔','✔ (Smart Key)','✔ (Smart Key)','✔ (Smart Key)']],
    ['Front row 12V power socket with smartphone storage space', ['✔','✔','✔','✔','✔','✔','✔']],
    ['2nd Row Illuminated C type Charging port', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Power windows (Front/Rear) with driver side Auto down functions', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Auto window up (Driver side with anti pinch)', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Day and night adjustable IRVM', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Power & tilt steering', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Electrically adjustable & Foldable ORVM', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Key operated Retractable ORVM', ['✖','✖','✖','✖','✔','✖','✔']],
    ['Bottle holders in each row', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Driver side Coin/Ticket holder', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Cruise control', ['✖','✖','✖','✖','✔','✖','✔']],
    ['Paddle shifters', ['✖','✖','✖','✔','✖','✖','✔']],
    ['Foot rest', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Auto head lamp with follow me home function', ['✖','✖','✖','✖','✔','✖','✔']],
    ['PM2.5 Filter', ['✖','✖','✖','✖','✔','✔','✔']],
      
    ],
  },
  {
    key: 'INFOTAINMENT',
    rows: [
      ['17.78 cm Smartplay Cast Touchscreen Infotainment System with Arkamys Surround Sense', ['✖','✖','✔','✖','✔','✔','✔']],
    ['Android Auto & Apple CarPlay (Wireless)', ['✖','✖','✔','✖','✔','✔','✔']],
    ['Audio screen with Touch buttons', ['✔','✔','✖','✔','✖','✖','✖']],
    ['Bluetooth connectivity', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Speakers (4)', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Tweeters (2)', ['✖','✖','✔','✖','✔','✔','✔']],
    ['USB and Aux connectivity', ['✔','✔','✔ (USB Only)','✔','✔ (USB Only)','✔ (USB Only)','✔ (USB Only)']],
    ['Steering mounted audio controls', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Steering mounted calling controls', ['✔','✔','✔','✔','✔','✔','✔']],
    ],
  },
  {
    key: 'SAFETY',
    rows: [
      ['Heartect Platform', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Dual Front Airbags', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Front Seat Side Airbags', ['✔','✔','✔','✔','✔','✔','✔']],
    ['ABS with EBD & Brake Assist', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Engine Immobiliser', ['✔','✔','✔','✔','✔','✔','✔']],
    ['ESP', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Hill Hold', ['✔','✔','✔','✔','✔','✔','✔']],
    ['ISO Fix Child Seat Anchorages (2nd Row Seats)', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Front Seat Belts with Pretensioner & Force Limiters', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Front Seat Belt Height Adjuster', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Seat Belt Reminder Lamp with Buzzer (All Seats)', ['✔','✔','✔','✔','✔','✔','✔']],
    ['High Speed Alert System*4', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Speed Sensitive Auto Door Lock', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Security Alarm', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Rear Parking Sensors', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Rear Parking Camera', ['✖','✖','✔','✖','✔','✔','✔']],
    ['Central Locking', ['✔','✔','✔','✔','✔','✔','✔']],
    ['Front Fog Lamps', ['✖','✖','✔','✖','✔','✔','✔']],
    ['Curtain Airbag', ['✔','✔','✔','✔','✔','✔','✔']],
    ['TPMS', ['✖','✖','✖','✖','✔','✖','✖']],
    ],
  },
  {
    key: 'TOYOTA I CONNECT',
    rows: [
      ['Remote Check & control (Climate control,Lock/unlock,Hazard lights,Headlights,distance to empty)', ['✖','✖','✔','✖','✔',]],
      ['Smart watch & Hey Siri voice assistant compatibility', ['✖','✖','✔','✖','✔',]],
      ['Vehicle safety & security - Auto collision notification,tow alert, Find my car & valet profile', ['✖','✖','✔','✖','✔',]],
      ['Service connect-Vehicle health & Malfunction indicator', ['✖','✖','✔','✖','✔',]],
    ],
  },
];

export default function TechnicalSpecificationsExact() {
  const [variants, setVariants] = useState(initialVariants);
  const [openSections, setOpenSections] = useState(['DIMENSIONS']);

  const toggleSection = (key) => {
    setOpenSections(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const removeVariant = (id) => {
    setVariants(prev => prev.filter(v => v.id !== id));
  };

  return (
    <section className="spec-page">
      <h2 className="heading">TECHNICAL<br /><span>SPECIFICATIONS</span></h2>

      {/* STICKY VARIANT HEADER */}
      <div className="variant-header">
        <div className="price-heading">Ex-Showroom Price</div>
        {variants.map(v => (
          <div key={v.id} className="variant-box">
            <p className="variant-name">{v.name}</p>
            <p className="remove" onClick={() => removeVariant(v.id)}>Remove ⓘ</p>
            <p className="price">{v.price}</p>
          </div>
        ))}
      </div>

      {/* ALL SPEC SECTIONS */}
      {SPEC_SECTIONS.map(section => (
        <div key={section.key} className="spec-section">
          <div className="spec-title" onClick={() => toggleSection(section.key)}>
            <h3>{section.key}</h3>
            <span className="toggle">{openSections.includes(section.key) ? '−' : '+'}</span>
          </div>

          {openSections.includes(section.key) && (
            <div className="spec-table">
              <div className="label-column">
                {section.rows.map(([label]) => (
                  <div key={label} className="cell label">{label}</div>
                ))}
              </div>

              {variants.map((v, vIndex) => (
                <div key={v.id} className="value-column">
                  {section.rows.map(([_, values], i) => (
                    <div key={i} className="cell">{values[vIndex]}</div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        

      ))}

      <style jsx>{`
        .spec-page { padding: 50px 24px; font-family: Arial, sans-serif;background: #fff;color:#000; }
        .heading { text-align: center; font-size: 28px; font-weight: 700; }
        .heading span { color: #009ddc; }
        .variant-header { position: sticky; top: 0;background: #d9d5d56b; z-index: 10; display: grid; grid-template-columns: 160px repeat(auto-fit, minmax(160px, 1fr)); }
        .price-heading { font-size: 12px; color: #777; display: flex; align-items: center; justify-content: center; }
        .variant-box { border: 1px solid #000; padding: 12px; }
        .variant-name { font-weight: 700; font-size: 13px; }
        .remove { font-size: 11px; cursor: pointer; color: #666; }
        .price { font-weight: 700; margin-top: 10px; }
        .spec-section { border-top: 1px solid #000; }
        .spec-title { display: flex; justify-content: space-between; padding: 14px 0; cursor: pointer; }
        .spec-table {
  display: grid;
  grid-template-columns: 240px repeat(auto-fit, minmax(160px, 1fr));
  overflow-x: auto;
  align-items: stretch; /* 🔥 important */
        
}

        
        .label-column,
.value-column {
  display: flex;
  flex-direction: column;
  background: #d9d5d56b;
  
}

  .cell {
  min-height: 100px;       /* 🔥 column height increase */
  padding: 18px 12px;
  display: flex;
  align-items: center;    /* vertical center */
  background: #d9d5d56b;
  font-size: 13px;
  
}


        .label { font-weight: 600; }
      `}</style>
      <div className="table-disclaimer" style={{ marginTop: '20px', fontSize: '14px', lineHeight: '1.6' }}>
  <strong style={{ fontSize:"30px",fontWeight:"bolder" }}>DISCLAIMER</strong>
  <p style={{ marginBottom: '8px' }}>
    *1 - Fuel efficiency as certified by the test agency under rule 115 of CMVR, 1989 under standard test conditions. Actual mileage on road may vary.
  </p>
  <p style={{ marginBottom: '8px' }}>
    *2 - Spare Tyre Wheel is Steel Material. Size is 185/65 R15 38.10 cm.
  </p>
  <p style={{ marginBottom: '8px' }}>
    *3 - Application Features & Displays may vary depending on different Operating Systems or Smartphone Devices used. Avoid using the phone while driving for your safety. Apple CarPlay is registered trademark of Apple Inc. Android Auto is registered Trademark of Google Inc. Bluetooth is a registered Trademark of Bluetooth SIG.
  </p>
  <p style={{ marginBottom: '8px' }}>
    *4 - Speed Warning Buzzer gives audible warning of Over Speed to Driver. If Vehicle speed &gt;80 km/h then two beeps will sound every minute. If Vehicle Speed &gt;120 km/h, continuous beeps will sound. This Buzzer does not Indicate any malfunction in the Vehicle.
  </p>
  <p style={{ marginBottom: '8px' }}>
    *5 - Vehicle pictured and specifications detailed in this brochure may vary between models & equipment. Addition of Features may change figures in this chart. Actual colour of the vehicle body & upholstery might differ slightly from images depicted in this brochure. Features are grade specific. Toyota Kirloskar Motor Pvt Ltd reserves the right to alter the details of specifications and equipment without a notice.
  </p>
</div>


    </section>
  );
}
