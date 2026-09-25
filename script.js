const ORGANISMS = {
  squid: {
    name: "Squid",
    scientific: "Mollusca • Cephalopoda",
    habitat: "Marine",
    description: "Streamlined cephalopod with specialized structures for active swimming, feeding, and escape.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["chromatophores", "Chromatophores", "Freckle-like spots whose size changes the squid's color for camouflage."],
          ["fins", "Fins", "Structures that help the squid change direction when swimming."],
          ["mantle", "Mantle", "The main body region; the organs are enclosed inside the mantle."],
          ["pen", "Pen / gladius", "A reduced, chitinous remnant of the shell of squid ancestors."],
          ["eyes", "Eyes", "Large side-positioned eyes that provide visual information and broad peripheral vision."],
          ["tentacles", "2 feeding tentacles", "Long, retractable appendages with suckers at the tips; used to catch prey and pass food to the arms."],
          ["arms", "8 arms", "Shorter appendages with suckers along their length; they hold prey."],
          ["mouth", "Mouth / buccal bulb", "The mouth is associated with the buccal bulb, which connects to the esophagus."],
          ["beak", "Beak / jaw", "Hard, dark mouthpart used to bite prey into small pieces."],
          ["collar", "Collar", "The opening of the mantle, described as similar to a shirt collar."],
          ["siphon", "Siphon / funnel", "Water is forced through the siphon for jet propulsion and rapid movement."]
        ]
      },

      internal: {
        label: "Internal anatomy",
        parts: [
          ["gills", "Gills", "Feathery structures that absorb oxygen from water and provide a large surface area for gas exchange."],
          ["inkSac", "Ink sac", "A gland/sac that stores ink released during danger and pushed through the siphon."],
          ["hearts", "3 hearts", "Two branchial hearts and one systemic heart; the hearts are located at the bottoms of the gills."],
          ["buccalBulb", "Buccal bulb", "The muscular mouth region connected to the esophagus."],
          ["esophagus", "Esophagus", "Tube carrying food toward the stomach."],
          ["stomach", "Stomach", "A digestive organ connected with the esophagus; the worksheet describes the general stomach area."],
          ["gonads", "Gonads", "Reproductive organs; described as a sperm sac in males or an egg mass in females."],
          ["penInternal", "Pen / gladius", "The reduced chitinous shell element embedded in the upper mantle."],
          ["eyeInternal", "Eye", "The worksheet describes examination of the eye, including its cornea and lens."],
          ["cornea", "Cornea", "Film-like outer part of the eye examined during dissection."],
          ["lens", "Lens", "Hard, silvery, pearl-like structure inside the eye."],
          ["beakInternal", "Beak", "Hard mouthpart examined during internal anatomy."],
          ["radula", "Radula", "A structure the worksheet instructs students to examine with the beak."]
        ]
      }
    }
  },

  earthworm: {
    name: "Earthworm",
    scientific: "Annelida • Clitellata",
    habitat: "Moist soil",
    description: "Segmented worm whose body wall, setae, and digestive tract are adapted to life and movement in soil.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["prostomium", "Prostomium", "Small fleshy lobe over the mouth; helps the worm explore and manipulate soil and food."],
          ["mouth", "Mouth", "Opening through which soil and organic material enter the digestive tract."],
          ["segments", "Segments / metameres", "Repeated ring-like divisions that provide flexibility and coordinated movement."],
          ["setae", "Setae", "Tiny bristles that anchor the worm against soil during locomotion."],
          ["clitellum", "Clitellum", "Thickened glandular band toward the anterior; produces mucus and contributes to cocoon formation."],
          ["anus", "Anus", "Terminal opening where the digestive tract ends and undigested material exits."],
          ["bodyWall", "Body wall", "Muscular outer surface containing circular and longitudinal muscles used in movement."],
          ["dorsalVesselExt", "Dorsal blood vessel", "Part of the closed circulatory system; may be visible along the dorsal midline."]
        ]
      },

      internal: {
        label: "Internal anatomy",
        parts: [
          ["pharynx", "Pharynx", "Muscular region behind the mouth that helps draw food into the digestive tract."],
          ["esophagus", "Esophagus", "Narrow tube carrying food posteriorly toward the crop."],
          ["crop", "Crop", "Enlarged, thin-walled region that temporarily stores food."],
          ["gizzard", "Gizzard", "Thick-walled muscular region that mechanically grinds soil particles and organic material."],
          ["dorsalVessel", "Dorsal blood vessel", "Longitudinal vessel above the digestive tract, part of the closed circulatory system."],
          ["intestine", "Intestine", "Major region where digestion and nutrient absorption occur."],
          ["typhlosole", "Typhlosole", "Inward fold of the intestinal wall that increases internal surface area for absorption."],
          ["ventralNerve", "Ventral nerve cord", "Longitudinal nervous structure that coordinates sensory information and motor activity."],
          ["nephridia", "Nephridia", "Excretory structures that remove metabolic wastes and help regulate the internal environment."]
        ]
      }
    }
  },

  shrimp: {
    name: "Shrimp",
    scientific: "Arthropoda • Crustacea",
    habitat: "Aquatic",
    description: "Crustacean with a chitinous exoskeleton and specialized jointed appendages for sensing, feeding, walking, swimming, and escape.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["rostrum", "Rostrum", "Pointed extension of the carapace between the eyes; protects the anterior region and may aid sensory orientation."],
          ["compoundEyes", "Compound eyes", "Paired visual structures, usually on movable stalks, detecting light, movement, and visual information."],
          ["antennules", "Antennules", "Short sensory appendages involved in detecting chemical and mechanical stimuli."],
          ["antennae", "Antennae", "Long sensory appendages for touch and chemical sensing; help detect the surroundings."],
          ["scaphocerite", "Scaphocerite", "Flattened antennal scale with sensory and hydrodynamic functions."],
          ["carapace", "Carapace", "Hard shield-like covering over the cephalothorax; protects structures and provides muscle attachment."],
          ["cephalothorax", "Cephalothorax", "Region formed by fused head and thoracic segments; bears most sensory and locomotory appendages."],
          ["mouth", "Mouth", "Opening on the ventral anterior cephalothorax, surrounded by specialized feeding appendages."],
          ["mouthparts", "Mouthparts", "Mandibles, maxillules, maxillae, and maxillipeds that manipulate, tear, and direct food."],
          ["walkingLegs", "Walking legs / pereopods", "Larger jointed appendages used for locomotion and sometimes handling food."],
          ["claws", "Claws / chelae", "Claw-like structures that may occur on the first pair of walking legs for grasping."],
          ["abdomen", "Abdomen", "Flexible series of segments containing powerful muscles for swimming and rapid escape."],
          ["swimmerets", "Swimmerets / pleopods", "Small feathery or paddle-like appendages beneath the abdomen that aid swimming and generate water currents; may support eggs in females."],
          ["uropods", "Uropods", "Paired lateral portions of the tail fan that provide thrust and help change direction."],
          ["telson", "Telson", "Central portion of the tail fan between the uropods."],
          ["tailFan", "Tail fan", "Uropods and telson together; especially important during rapid backward swimming."],
          ["abdominalSegments", "Abdominal segments", "Distinct overlapping segments that give the abdomen flexibility."]
        ]
      }
    }
  },

  ant: {
    name: "Ant",
    scientific: "Arthropoda • Insecta • Formicidae",
    habitat: "Terrestrial",
    description: "Social insect with a segmented body, chitinous exoskeleton, jointed appendages, and highly specialized sensory and feeding structures.",
    views: {
      external: {
        label: "External anatomy",
        parts: [
          ["head", "Head", "Anterior body region containing the major sensory and feeding structures."],
          ["compoundEyes", "Compound eyes", "Paired eyes made of many visual units that detect light, movement, and visual information."],
          ["antennae", "Antennae", "Important sensory organs for touch, chemicals, vibrations, and environmental cues; composed of the scape and funiculus."],
          ["mandibles", "Mandibles", "Paired hardened jaws used for feeding, carrying, nest construction, manipulation, and defense."],
          ["thorax", "Thorax", "Middle body region bearing the three pairs of legs and providing muscle attachment."],
          ["forelegs", "Forelegs", "Front pair of jointed legs used in walking, climbing, and navigating surfaces."],
          ["middleLegs", "Middle legs", "Middle pair of jointed legs used in coordinated movement."],
          ["hindLegs", "Hind legs", "Rear pair of jointed legs used in walking, climbing, and navigation."],
          ["legSegments", "Leg segments", "Jointed sections identified in the worksheet as coxa, trochanter, femur, tibia, and tarsus."],
          ["tarsalClaw", "Tarsal claw", "Small claw at the end of a leg that helps the ant grip surfaces."],
          ["petiole", "Petiole", "Narrow connection between thorax and abdomen that provides flexibility."],
          ["gaster", "Abdomen / gaster", "Posterior region behind the petiole containing many internal organs and visible segmentation."],
          ["tergites", "Tergites", "Hardened plates forming the upper surface of the abdomen."],
          ["sternites", "Sternites", "Plates along the underside of the abdomen."],
          ["spiracles", "Spiracles", "Tiny openings on the sides of the thorax and abdomen that allow air to enter and leave the respiratory system."],
          ["sting", "Stinger", "Defensive structure present in some ants; used primarily for defense."],
          ["clypeus", "Clypeus", "Head structure labeled in the worksheet's ant anatomy diagram."],
          ["frontalLobes", "Frontal lobes", "Head regions labeled in the worksheet's ant anatomy diagram."],
          ["antennalFossa", "Antennal fossa", "Depression associated with antenna placement, labeled in the worksheet diagram."],
          ["pronotum", "Pronotum", "Thoracic structure labeled in the worksheet's ant anatomy diagram."],
          ["mesonotum", "Mesonotum", "Thoracic segment/plate labeled in the worksheet's ant anatomy diagram."],
          ["metanotum", "Metanotum", "Thoracic structure labeled in the worksheet's ant anatomy diagram."],
          ["propodeum", "Propodeum", "Posterior thoracic region labeled in the worksheet's ant anatomy diagram."],
          ["scutellum", "Scutellum", "Thoracic structure labeled in the worksheet's ant anatomy diagram."],
          ["metapleural", "Metapleural gland", "Structure labeled in the worksheet's ant anatomy diagram."],
          ["spiracleThoracic", "Mesothoracic / metathoracic spiracles", "Thoracic spiracles labeled in the worksheet diagram."]
        ]
      }
    }
  }
};


// ============================================================
// SVG / DIAGRAM HELPERS
// ============================================================

function svgWrap(inner, viewBox = "0 0 1000 600") {
  return `
    <svg
      viewBox="${viewBox}"
      role="img"
      aria-label="Interactive anatomical diagram"
    >
      ${inner}
    </svg>
  `;
}

function hotspot(id, content, cls = "", title = "") {
  return `
    <g
      class="part-hotspot ${cls}"
      data-part="${id}"
      tabindex="0"
      role="button"
      aria-label="${title}"
      title="${title}"
    >
      ${content}
    </g>
  `;
}

function line(x1, y1, x2, y2) {
  return `
    <line
      class="label-line"
      x1="${x1}"
      y1="${y1}"
      x2="${x2}"
      y2="${y2}"
    ></line>
  `;
}

function label(x, y, text, small = false, anchor = "start") {
  return `
    <text
      class="part-label ${small ? "part-label-small" : ""}"
      x="${x}"
      y="${y}"
      text-anchor="${anchor}"
    >
      ${text}
    </text>
  `;
}


// ============================================================
// SMALL CARD ILLUSTRATIONS
// ============================================================

function miniSquid() {
  return svgWrap(`
    <ellipse
      cx="500"
      cy="290"
      rx="178"
      ry="92"
      fill="#c6a7a2"
      class="part-outline"
    />

    <ellipse
      cx="500"
      cy="245"
      rx="58"
      ry="58"
      fill="#9e7d7a"
    />

    <path
      d="M350 282 C275 250 240 210 210 185 C250 235 270 280 305 318"
      fill="none"
      stroke="#6b5f5e"
      stroke-width="20"
      stroke-linecap="round"
    />

    <path
      d="M650 282 C725 250 760 210 790 185 C750 235 730 280 695 318"
      fill="none"
      stroke="#6b5f5e"
      stroke-width="20"
      stroke-linecap="round"
    />

    <circle cx="465" cy="228" r="18" fill="#1b2420"/>
    <circle cx="535" cy="228" r="18" fill="#1b2420"/>

    <path
      d="M350 355 Q500 425 650 355"
      fill="none"
      stroke="#879d8f"
      stroke-width="22"
    />

    <text
      x="500"
      y="520"
      class="diagram-note"
      text-anchor="middle"
    >
      streamlined cephalopod
    </text>
  `, "0 0 1000 560");
}


function miniWorm() {
  let segs = "";

  for (let i = 0; i < 12; i++) {
    const x = 145 + i * 58;

    segs += `
      <ellipse
        cx="${x}"
        cy="285"
        rx="38"
        ry="63"
        fill="${i > 6 && i < 9 ? "#a4b177" : "#b87656"}"
        stroke="#4c463d"
        stroke-width="2"
      />
    `;
  }

  return svgWrap(`
    ${segs}

    <path
      d="M130 245 Q90 285 130 325"
      fill="#8c5b42"
      stroke="#4c463d"
      stroke-width="2"
    />

    <path
      d="M810 262 Q850 285 810 308"
      fill="#8c5b42"
      stroke="#4c463d"
      stroke-width="2"
    />

    <text
      x="500"
      y="505"
      class="diagram-note"
      text-anchor="middle"
    >
      segmented body • setae-assisted movement
    </text>
  `, "0 0 1000 560");
}


function miniShrimp() {
  return svgWrap(`
    <path
      d="M245 300 Q330 190 515 215 Q640 230 700 305
         L635 360 Q505 395 350 350 Z"
      fill="#c78b6e"
      class="part-outline"
    />

    <path
      d="M635 360 Q760 415 845 372
         Q790 335 855 292 Q770 265 700 305"
      fill="#aa7057"
      class="part-outline"
    />

    <path
      d="M290 250 L180 180
         M315 240 L160 145"
      stroke="#5e5147"
      stroke-width="7"
      stroke-linecap="round"
    />

    <circle
      cx="300"
      cy="230"
      r="13"
      fill="#1e231f"
    />

    <path
      d="M735 315 L880 265
         M742 335 L885 342"
      stroke="#5e5147"
      stroke-width="8"
      stroke-linecap="round"
    />

    <path
      d="M340 350 L310 430
         M385 355 L375 440
         M430 365 L445 445
         M480 370 L505 438"
      stroke="#6c5b4f"
      stroke-width="12"
      stroke-linecap="round"
    />

    <text
      x="520"
      y="520"
      class="diagram-note"
      text-anchor="middle"
    >
      cephalothorax • abdomen • tail fan
    </text>
  `, "0 0 1000 560");
}


function miniAnt() {
  return svgWrap(`
    <ellipse
      cx="510"
      cy="278"
      rx="70"
      ry="120"
      fill="#3b3a34"
    />

    <ellipse
      cx="390"
      cy="300"
      rx="85"
      ry="66"
      fill="#46443d"
    />

    <ellipse
      cx="645"
      cy="300"
      rx="105"
      ry="86"
      fill="#2d2d28"
    />

    <circle
      cx="372"
      cy="282"
      r="8"
      fill="#f3e8bd"
    />

    <circle
      cx="408"
      cy="282"
      r="8"
      fill="#f3e8bd"
    />

    <g
      stroke="#3b3a34"
      stroke-width="13"
      stroke-linecap="round"
    >
      <path d="M360 340 L280 418"/>
      <path d="M396 350 L355 440"/>
      <path d="M525 370 L485 455"/>
      <path d="M650 366 L710 455"/>
      <path d="M665 340 L760 420"/>
      <path d="M735 300 L815 360"/>
    </g>

    <path
      d="M360 260 Q300 195 258 178"
      fill="none"
      stroke="#514d42"
      stroke-width="9"
      stroke-linecap="round"
    />

    <path
      d="M420 255 Q350 182 320 165"
      fill="none"
      stroke="#514d42"
      stroke-width="9"
      stroke-linecap="round"
    />

    <text
      x="510"
      y="520"
      class="diagram-note"
      text-anchor="middle"
    >
      head • thorax • petiole • gaster
    </text>
  `, "0 0 1000 560");
}


// ============================================================
// SQUID DIAGRAM
// ============================================================

function squidDiagram(view) {
  if (view === "external") {
    return svgWrap(`
      <rect
        x="35"
        y="35"
        width="930"
        height="530"
        rx="28"
        fill="#fbf8ef"
      />

      <path
        d="M240 300 Q300 185 500 170
           Q700 185 760 300
           Q700 415 500 430
           Q300 415 240 300Z"
        fill="#c9aca4"
        class="part-outline"
      />

      ${hotspot(
        "fins",
        `<path
          d="M735 245 Q845 270 790 335
             Q730 350 700 325Z"
          fill="#a8847e"
          class="part-outline"
        />`,
        "",
        "Fins"
      )}

      ${hotspot(
        "mantle",
        `<path
          d="M255 300 Q315 195 500 180
             Q685 195 745 300
             Q680 405 500 420
             Q320 405 255 300Z"
          fill="#c9aca4"
          class="part-outline"
        />`,
        "",
        "Mantle"
      )}

      ${hotspot(
        "pen",
        `<path
          d="M440 185 Q500 155 560 185
             L560 410 Q500 440 440 410Z"
          fill="#e9e3d2"
          class="part-outline"
        />`,
        "",
        "Pen / gladius"
      )}

      ${hotspot(
        "eyes",
        `<ellipse
          cx="360"
          cy="238"
          rx="35"
          ry="28"
          fill="#2b2f2c"
          class="part-outline"
        />
        <ellipse
          cx="640"
          cy="238"
          rx="35"
          ry="28"
          fill="#2b2f2c"
          class="part-outline"
        />`,
        "",
        "Eyes"
      )}

      ${hotspot(
        "chromatophores",
        `<g fill="#7d5550">
          <circle cx="330" cy="300" r="7"/>
          <circle cx="368" cy="320" r="11"/>
          <circle cx="414" cy="295" r="8"/>
          <circle cx="585" cy="310" r="10"/>
          <circle cx="645" cy="285" r="8"/>
          <circle cx="690" cy="315" r="12"/>
          <circle cx="315" cy="360" r="8"/>
          <circle cx="680" cy="355" r="7"/>
        </g>`,
        "",
        "Chromatophores"
      )}

      ${hotspot(
        "tentacles",
        `<path
          d="M300 338 C220 400 140 450 95 420
             C145 445 240 365 305 320"
          fill="none"
          stroke="#6d5550"
          stroke-width="21"
          stroke-linecap="round"
        />`,
        "",
        "2 feeding tentacles"
      )}

      ${hotspot(
        "arms",
        `<path
          d="M325 330 C250 360 175 390 120 370
             M330 348 C240 405 200 450 150 445
             M675 330 C750 360 825 390 880 370
             M670 348 C760 405 800 450 850 445
             M340 360 C300 430 250 465 210 470
             M660 360 C700 430 750 465 790 470
             M380 365 C360 445 330 485 295 500
             M620 365 C640 445 670 485 705 500"
          fill="none"
          stroke="#775d57"
          stroke-width="14"
          stroke-linecap="round"
        />`,
        "",
        "8 arms"
      )}

      ${hotspot(
        "mouth",
        `<ellipse
          cx="500"
          cy="278"
          rx="22"
          ry="17"
          fill="#633f3a"
          class="part-outline"
        />`,
        "",
        "Mouth / buccal bulb"
      )}

      ${hotspot(
        "beak",
        `<path
          d="M492 293 Q500 310 508 293
             Q500 286 492 293Z"
          fill="#3c302a"
          class="part-outline"
        />`,
        "",
        "Beak / jaw"
      )}

      ${hotspot(
        "collar",
        `<path
          d="M370 365 Q500 415 630 365"
          fill="none"
          stroke="#b58f88"
          stroke-width="13"
          stroke-linecap="round"
        />`,
        "",
        "Collar"
      )}

      ${hotspot(
        "siphon",
        `<path
          d="M470 345 L500 425 L530 345Z"
          fill="#866b63"
          class="part-outline"
        />`,
        "",
        "Siphon / funnel"
      )}

      ${line(790,245,865,210)}
      ${label(874,207,"fins")}

      ${line(690,180,820,125)}
      ${label(828,121,"mantle")}

      ${line(560,250,745,150)}
      ${label(755,147,"pen / gladius")}

      ${line(325,220,205,145)}
      ${label(195,141,"eyes",false,"end")}

      ${line(350,300,175,245)}
      ${label(165,241,"chromatophores",false,"end")}

      ${line(220,423,105,485)}
      ${label(95,491,"tentacles",false,"end")}

      ${line(255,380,135,525)}
      ${label(125,530,"arms",false,"end")}

      ${line(500,278,500,105)}
      ${label(500,96,"mouth / buccal bulb",false,"middle")}

      ${line(505,300,600,510)}
      ${label(610,515,"beak / jaw")}

      ${line(400,380,335,535)}
      ${label(330,540,"collar",false,"end")}

      ${line(530,405,610,465)}
      ${label(620,470,"siphon / funnel")}

      <text
        x="80"
        y="90"
        class="diagram-note"
      >
        Darker dorsal surface • ventral side is lighter
      </text>
    `);
  }

  return svgWrap(`
    <rect
      x="35"
      y="35"
      width="930"
      height="530"
      rx="28"
      fill="#fbf8ef"
    />

    <path
      d="M245 300 Q300 190 500 170
         Q700 190 755 300
         Q700 410 500 430
         Q300 410 245 300Z"
      fill="#dcc2bb"
      class="part-outline"
    />

    ${hotspot(
      "gills",
      `<path
        d="M325 245 Q360 215 395 255
           Q365 270 325 320
           Q305 285 325 245Z

           M675 245 Q640 215 605 255
           Q635 270 675 320
           Q695 285 675 245Z"
        fill="#8fa7a0"
        class="part-outline"
      />`,
      "",
      "Gills"
    )}

    ${hotspot(
      "inkSac",
      `<path
        d="M485 235 Q500 215 515 235
           L535 330 Q500 350 465 330Z"
        fill="#343a35"
        class="part-outline"
      />`,
      "",
      "Ink sac"
    )}

    ${hotspot(
      "hearts",
      `<g fill="#8a6058">
        <circle cx="375" cy="340" r="16"/>
        <circle cx="625" cy="340" r="16"/>
        <circle cx="500" cy="365" r="18"/>
      </g>`,
      "",
      "3 hearts"
    )}

    ${hotspot(
      "buccalBulb",
      `<ellipse
        cx="500"
        cy="265"
        rx="30"
        ry="22"
        fill="#7c5a53"
        class="part-outline"
      />`,
      "",
      "Buccal bulb"
    )}

    ${hotspot(
      "esophagus",
      `<path
        d="M492 280 L492 345 L508 345 L508 280Z"
        fill="#b47d70"
        class="part-outline"
      />`,
      "",
      "Esophagus"
    )}

    ${hotspot(
      "stomach",
      `<path
        d="M485 335 Q500 320 515 335
           Q535 365 500 390
           Q465 365 485 335Z"
        fill="#c99d87"
        class="part-outline"
      />`,
      "",
      "Stomach"
    )}

    ${hotspot(
      "gonads",
      `<ellipse
        cx="500"
        cy="425"
        rx="78"
        ry="27"
        fill="#e3c67e"
        class="part-outline"
      />`,
      "",
      "Gonads"
    )}

    ${hotspot(
      "penInternal",
      `<path
        d="M430 180 Q500 150 570 180
           L555 205 Q500 185 445 205Z"
        fill="#eee6ce"
        class="part-outline"
      />`,
      "",
      "Pen / gladius"
    )}

    ${hotspot(
      "eyeInternal",
      `<g>
        <ellipse
          cx="360"
          cy="220"
          rx="40"
          ry="33"
          fill="#454c49"
          class="part-outline"
        />
        <ellipse
          cx="640"
          cy="220"
          rx="40"
          ry="33"
          fill="#454c49"
          class="part-outline"
        />
      </g>`,
      "",
      "Eye"
    )}

    ${hotspot(
      "cornea",
      `<ellipse
        cx="360"
        cy="220"
        rx="17"
        ry="14"
        fill="#dfe8de"
        class="part-outline"
      />
      <ellipse
        cx="640"
        cy="220"
        rx="17"
        ry="14"
        fill="#dfe8de"
        class="part-outline"
      />`,
      "",
      "Cornea"
    )}

    ${hotspot(
      "lens",
      `<circle
        cx="360"
        cy="220"
        r="8"
        fill="#f4f0dc"
      />
      <circle
        cx="640"
        cy="220"
        r="8"
        fill="#f4f0dc"
      />`,
      "",
      "Lens"
    )}

    ${hotspot(
      "beakInternal",
      `<path
        d="M486 270 Q500 289 514 270
           Q500 258 486 270Z"
        fill="#3b3129"
        class="part-outline"
      />`,
      "",
      "Beak"
    )}

    ${hotspot(
      "radula",
      `<path
        d="M488 283 Q500 290 512 283"
        fill="none"
        stroke="#e7d5a2"
        stroke-width="5"
      />`,
      "",
      "Radula"
    )}

    ${line(300,270,170,140)}
    ${label(160,136,"gills",false,"end")}

    ${line(515,245,650,125)}
    ${label(660,121,"ink sac")}

    ${line(625,340,800,210)}
    ${label(810,206,"3 hearts")}

    ${line(500,265,500,100)}
    ${label(500,92,"buccal bulb",false,"middle")}

    ${line(510,320,650,470)}
    ${label(660,475,"esophagus")}

    ${line(520,365,700,520)}
    ${label(710,525,"stomach")}

    ${line(500,450,500,535)}
    ${label(500,545,"gonads",false,"middle")}

    ${line(570,182,725,150)}
    ${label(735,147,"pen / gladius")}

    ${line(640,220,825,275)}
    ${label(835,279,"eye")}

    ${line(650,220,840,340)}
    ${label(850,345,"cornea + lens")}

    ${line(515,272,720,390)}
    ${label(730,395,"beak")}

    ${line(505,284,720,435)}
    ${label(730,440,"radula")}

    <text
      x="80"
      y="90"
      class="diagram-note"
    >
      Internal structures shown schematically for study use
    </text>
  `);
}


// ============================================================
// EARTHWORM DIAGRAM
// ============================================================

function earthwormDiagram(view) {
  if (view === "external") {
    const segs = [];

    for (let i = 0; i < 14; i++) {
      const x = 185 + i * 48;
      const fill = i === 3 || i === 4 ? "#b59a6f" : "#ba7959";

      segs.push(
        hotspot(
          "segments",
          `<ellipse
            cx="${x}"
            cy="300"
            rx="31"
            ry="78"
            fill="${fill}"
            class="part-outline"
          />`,
          "",
          "Segments / metameres"
        )
      );
    }

    return svgWrap(`
      <rect
        x="35"
        y="35"
        width="930"
        height="530"
        rx="28"
        fill="#fbf8ef"
      />

      ${hotspot(
        "bodyWall",
        `<path
          d="M130 240 Q110 300 130 360
             Q180 405 240 390
             Q500 450 780 390
             Q850 370 875 300
             Q850 230 780 210
             Q500 150 240 210
             Q175 195 130 240Z"
          fill="#bd7a58"
          class="part-outline"
        />`,
        "",
        "Body wall"
      )}

      ${segs.join("")}

      ${hotspot(
        "prostomium",
        `<path
          d="M145 270 Q100 285 142 330
             Q175 335 190 300
             Q175 270 145 270Z"
          fill="#92573e"
          class="part-outline"
        />`,
        "",
        "Prostomium"
      )}

      ${hotspot(
        "mouth",
        `<ellipse
          cx="140"
          cy="300"
          rx="12"
          ry="15"
          fill="#4e2e25"
          class="part-outline"
        />`,
        "",
        "Mouth"
      )}

      ${hotspot(
        "setae",
        `<g
          stroke="#594b42"
          stroke-width="4"
          stroke-linecap="round"
        >
          <path d="M230 370 l-14 18"/>
          <path d="M278 382 l-12 19"/>
          <path d="M326 388 l-10 20"/>
          <path d="M374 392 l-10 20"/>
          <path d="M422 395 l-8 22"/>
          <path d="M470 396 l-5 22"/>
          <path d="M518 396 l5 22"/>
          <path d="M566 392 l8 20"/>
          <path d="M614 388 l10 20"/>
        </g>`,
        "",
        "Setae"
      )}

      ${hotspot(
        "clitellum",
        `<path
          d="M275 225 Q315 190 355 220
             L355 385 Q315 410 275 375Z"
          fill="#d1ad78"
          class="part-outline"
        />`,
        "",
        "Clitellum"
      )}

      ${hotspot(
        "anus",
        `<ellipse
          cx="850"
          cy="300"
          rx="10"
          ry="13"
          fill="#4e2e25"
          class="part-outline"
        />`,
        "",
        "Anus"
      )}

      ${hotspot(
        "dorsalVesselExt",
        `<path
          d="M165 205 Q500 160 835 205"
          fill="none"
          stroke="#7e534e"
          stroke-width="7"
        />`,
        "",
        "Dorsal blood vessel"
      )}

      ${line(145,270,92,150)}
      ${label(85,145,"prostomium",false,"end")}

      ${line(140,300,70,290)}
      ${label(60,295,"mouth",false,"end")}

      ${line(360,230,500,120)}
      ${label(510,116,"clitellum")}

      ${line(430,395,300,515)}
      ${label(290,525,"setae",false,"end")}

      ${line(600,215,780,125)}
      ${label(790,121,"dorsal blood vessel")}

      ${line(850,300,900,250)}
      ${label(910,246,"anus")}

      ${line(690,405,840,500)}
      ${label(850,505,"body wall")}

      <text
        x="80"
        y="90"
        class="diagram-note"
      >
        Anterior ← • → posterior
      </text>
    `);
  }

  return svgWrap(`
    <rect
      x="35"
      y="35"
      width="930"
      height="530"
      rx="28"
      fill="#fbf8ef"
    />

    <path
      d="M125 250 Q110 300 125 350
         Q210 390 500 410
         Q790 390 875 350
         Q890 300 875 250
         Q790 210 500 190
         Q210 210 125 250Z"
      fill="#c98a67"
      opacity=".34"
    />

    ${hotspot(
      "pharynx",
      `<ellipse
        cx="220"
        cy="300"
        rx="56"
        ry="42"
        fill="#93624e"
        class="part-outline"
      />`,
      "",
      "Pharynx"
    )}

    ${hotspot(
      "esophagus",
      `<path
        d="M270 284 L390 284 L390 316 L270 316Z"
        fill="#b17b61"
        class="part-outline"
      />`,
      "",
      "Esophagus"
    )}

    ${hotspot(
      "crop",
      `<ellipse
        cx="445"
        cy="300"
        rx="70"
        ry="50"
        fill="#d8b77f"
        class="part-outline"
      />`,
      "",
      "Crop"
    )}

    ${hotspot(
      "gizzard",
      `<ellipse
        cx="545"
        cy="300"
        rx="56"
        ry="63"
        fill="#9c7056"
        class="part-outline"
      />`,
      "",
      "Gizzard"
    )}

    ${hotspot(
      "intestine",
      `<path
        d="M595 275 Q665 250 725 285
           Q750 300 730 322
           Q670 350 600 326"
        fill="none"
        stroke="#c38a68"
        stroke-width="28"
        stroke-linecap="round"
      />`,
      "",
      "Intestine"
    )}

    ${hotspot(
      "typhlosole",
      `<path
        d="M615 307 Q675 335 720 300"
        fill="none"
        stroke="#7a5b49"
        stroke-width="7"
      />`,
      "",
      "Typhlosole"
    )}

    ${hotspot(
      "dorsalVessel",
      `<path
        d="M170 232 Q450 165 790 225"
        fill="none"
        stroke="#7d4b4c"
        stroke-width="10"
      />`,
      "",
      "Dorsal blood vessel"
    )}

    ${hotspot(
      "ventralNerve",
      `<path
        d="M180 375 Q470 430 790 360"
        fill="none"
        stroke="#655863"
        stroke-width="9"
      />`,
      "",
      "Ventral nerve cord"
    )}

    ${hotspot(
      "nephridia",
      `<g fill="#806d5c">
        <circle cx="330" cy="385" r="7"/>
        <circle cx="365" cy="392" r="7"/>
        <circle cx="400" cy="395" r="7"/>
        <circle cx="435" cy="400" r="7"/>
        <circle cx="470" cy="403" r="7"/>
        <circle cx="505" cy="405" r="7"/>
      </g>`,
      "",
      "Nephridia"
    )}

    ${line(220,260,135,135)}
    ${label(125,130,"pharynx",false,"end")}

    ${line(335,284,240,115)}
    ${label(235,111,"esophagus",false,"end")}

    ${line(440,250,425,105)}
    ${label(425,98,"crop",false,"middle")}

    ${line(545,240,600,120)}
    ${label(610,116,"gizzard")}

    ${line(650,275,770,150)}
    ${label(780,146,"intestine")}

    ${line(670,326,800,405)}
    ${label(810,410,"typhlosole")}

    ${line(600,185,760,80)}
    ${label(770,77,"dorsal blood vessel")}

    ${line(650,375,805,500)}
    ${label(815,505,"ventral nerve cord")}

    ${line(435,400,290,500)}
    ${label(280,505,"nephridia",false,"end")}

    <text
      x="80"
      y="90"
      class="diagram-note"
    >
      Digestive tract shown from anterior toward posterior
    </text>
  `);
}


// ============================================================
// SHRIMP DIAGRAM
// ============================================================

function shrimpDiagram() {
  return svgWrap(`
    <rect
      x="35"
      y="35"
      width="930"
      height="530"
      rx="28"
      fill="#fbf8ef"
    />

    ${hotspot(
      "cephalothorax",
      `<path
        d="M210 250 Q280 155 455 175
           Q560 185 625 260
           L600 355 Q460 375 290 345
           Q235 320 210 250Z"
        fill="#c79072"
        class="part-outline"
      />`,
      "",
      "Cephalothorax"
    )}

    ${hotspot(
      "carapace",
      `<path
        d="M225 250 Q290 170 450 185
           Q545 195 610 255
           L575 320 Q450 335 300 315
           Q250 300 225 250Z"
        fill="#b97c60"
        class="part-outline"
      />`,
      "",
      "Carapace"
    )}

    ${hotspot(
      "rostrum",
      `<path
        d="M290 225 L175 175 L300 250Z"
        fill="#9d684f"
        class="part-outline"
      />`,
      "",
      "Rostrum"
    )}

    ${hotspot(
      "compoundEyes",
      `<g>
        <circle
          cx="300"
          cy="228"
          r="18"
          fill="#252b28"
          class="part-outline"
        />
        <circle
          cx="355"
          cy="215"
          r="18"
          fill="#252b28"
          class="part-outline"
        />
      </g>`,
      "",
      "Compound eyes"
    )}

    ${hotspot(
      "antennules",
      `<path
        d="M300 212 Q220 130 165 112
           M325 210 Q250 115 205 90"
        fill="none"
        stroke="#67584f"
        stroke-width="5"
        stroke-linecap="round"
      />`,
      "",
      "Antennules"
    )}

    ${hotspot(
      "antennae",
      `<path
        d="M335 205 Q205 90 90 72
           M360 210 Q220 80 115 45"
        fill="none"
        stroke="#4f4a42"
        stroke-width="6"
        stroke-linecap="round"
      />`,
      "",
      "Antennae"
    )}

    ${hotspot(
      "scaphocerite",
      `<path
        d="M350 220 Q390 180 420 220
           L398 265 Q370 252 350 220Z"
        fill="#9fb5a8"
        class="part-outline"
      />`,
      "",
      "Scaphocerite"
    )}

    ${hotspot(
      "mouth",
      `<ellipse
        cx="330"
        cy="275"
        rx="18"
        ry="14"
        fill="#5a3b31"
        class="part-outline"
      />`,
      "",
      "Mouth"
    )}

    ${hotspot(
      "mouthparts",
      `<g fill="#80624f">
        <path d="M305 278 l-50 35 l60 -16Z"/>
        <path d="M312 290 l-30 55 l50 -48Z"/>
        <path d="M345 285 l50 48 l-60 -25Z"/>
        <path d="M347 275 l62 22 l-55 -38Z"/>
      </g>`,
      "",
      "Mouthparts"
    )}

    ${hotspot(
      "walkingLegs",
      `<g
        stroke="#705a4d"
        stroke-width="14"
        stroke-linecap="round"
        fill="none"
      >
        <path d="M290 315 L245 390 L220 452"/>
        <path d="M335 320 L310 405 L300 472"/>
        <path d="M380 325 L385 405 L410 470"/>
        <path d="M425 328 L455 400 L490 455"/>
        <path d="M470 324 L520 382 L565 430"/>
      </g>`,
      "",
      "Walking legs / pereopods"
    )}

    ${hotspot(
      "claws",
      `<g
        stroke="#4f443c"
        stroke-width="8"
        stroke-linecap="round"
      >
        <path d="M220 452 l-25 20"/>
        <path d="M220 452 l20 18"/>
        <path d="M300 472 l-15 20"/>
        <path d="M300 472 l22 12"/>
      </g>`,
      "",
      "Claws / chelae"
    )}

    ${hotspot(
      "abdomen",
      `<path
        d="M590 260 Q700 220 820 275
           Q870 300 845 345
           Q725 395 610 350Z"
        fill="#b8795b"
        class="part-outline"
      />`,
      "",
      "Abdomen"
    )}

    ${hotspot(
      "abdominalSegments",
      `<g
        fill="none"
        stroke="#6e5146"
        stroke-width="3"
      >
        <path d="M650 250 Q670 300 650 370"/>
        <path d="M700 245 Q720 300 705 375"/>
        <path d="M750 255 Q770 305 760 365"/>
        <path d="M800 270 Q820 310 815 350"/>
      </g>`,
      "",
      "Abdominal segments"
    )}

    ${hotspot(
      "swimmerets",
      `<g
        stroke="#78958d"
        stroke-width="8"
        stroke-linecap="round"
      >
        <path d="M635 350 l-5 55"/>
        <path d="M675 362 l0 55"/>
        <path d="M715 370 l8 52"/>
        <path d="M755 368 l18 45"/>
      </g>`,
      "",
      "Swimmerets / pleopods"
    )}

    ${hotspot(
      "tailFan",
      `<path
        d="M825 290 Q915 270 930 300
           Q905 355 840 330Z"
        fill="#83a29a"
        opacity=".30"
        class="part-outline"
      />`,
      "",
      "Tail fan"
    )}

    ${hotspot(
      "uropods",
      `<path
        d="M830 315 Q910 250 900 340
           Q870 390 820 345Z"
        fill="#8ea8a0"
        class="part-outline"
      />`,
      "",
      "Uropods"
    )}

    ${hotspot(
      "telson",
      `<path
        d="M825 295 L930 300 L840 330Z"
        fill="#75928a"
        class="part-outline"
      />`,
      "",
      "Telson"
    )}

    ${line(180,175,75,170)}
    ${label(66,165,"rostrum",false,"end")}

    ${line(300,228,150,215)}
    ${label(140,210,"compound eyes",false,"end")}

    ${line(250,140,130,110)}
    ${label(120,105,"antennules",false,"end")}

    ${line(210,90,90,40)}
    ${label(80,37,"antennae",false,"end")}

    ${line(395,220,480,110)}
    ${label(490,106,"scaphocerite")}

    ${line(300,190,530,70)}
    ${label(540,66,"carapace")}

    ${line(470,350,600,500)}
    ${label(610,505,"walking legs")}

    ${line(245,450,110,500)}
    ${label(100,505,"claws / chelae",false,"end")}

    ${line(610,260,590,145)}
    ${label(590,140,"abdomen",false,"middle")}

    ${line(715,365,715,470)}
    ${label(715,485,"swimmerets",false,"middle")}

    ${line(850,315,900,220)}
    ${label(910,216,"tail fan")}

    ${line(930,300,880,415)}
    ${label(885,430,"telson")}

    ${line(900,325,965,380)}
    ${label(975,385,"uropods",false,"end")}

    ${line(330,275,500,320)}
    ${label(510,325,"mouth + mouthparts")}

    <text
      x="75"
      y="90"
      class="diagram-note"
    >
      Anterior ← • → posterior
    </text>
  `);
}


// ============================================================
// ANT DIAGRAM
// ============================================================

function antDiagram() {
  return svgWrap(`
    <rect
      x="35"
      y="35"
      width="930"
      height="530"
      rx="28"
      fill="#fbf8ef"
    />

    ${hotspot(
      "head",
      `<ellipse
        cx="290"
        cy="295"
        rx="92"
        ry="76"
        fill="#49473f"
        class="part-outline"
      />`,
      "",
      "Head"
    )}

    ${hotspot(
      "thorax",
      `<ellipse
        cx="505"
        cy="295"
        rx="112"
        ry="92"
        fill="#45433d"
        class="part-outline"
      />`,
      "",
      "Thorax"
    )}

    ${hotspot(
      "petiole",
      `<ellipse
        cx="635"
        cy="295"
        rx="45"
        ry="38"
        fill="#555046"
        class="part-outline"
      />`,
      "",
      "Petiole"
    )}

    ${hotspot(
      "gaster",
      `<ellipse
        cx="775"
        cy="295"
        rx="125"
        ry="100"
        fill="#363631"
        class="part-outline"
      />`,
      "",
      "Abdomen / gaster"
    )}

    ${hotspot(
      "compoundEyes",
      `<g fill="#ddd8bd">
        <circle cx="255" cy="275" r="15"/>
        <circle cx="325" cy="275" r="15"/>
      </g>`,
      "",
      "Compound eyes"
    )}

    ${hotspot(
      "antennae",
      `<g
        fill="none"
        stroke="#555047"
        stroke-width="8"
        stroke-linecap="round"
      >
        <path d="M260 252 Q205 175 150 155"/>
        <path d="M330 252 Q285 165 240 135"/>
      </g>

      <g
        fill="#6e675b"
        stroke="#49463f"
        stroke-width="2"
      >
        <circle cx="150" cy="155" r="12"/>
        <circle cx="240" cy="135" r="12"/>
      </g>`,
      "",
      "Antennae"
    )}

    ${hotspot(
      "mandibles",
      `<path
        d="M230 315 Q185 330 225 352 L275 320Z
           M350 315 Q395 330 355 352 L305 320Z"
        fill="#2c2c27"
        class="part-outline"
      />`,
      "",
      "Mandibles"
    )}

    ${hotspot(
      "forelegs",
      `<path
        d="M455 330 L390 405 L350 475"
        fill="none"
        stroke="#4c4840"
        stroke-width="16"
        stroke-linecap="round"
      />`,
      "",
      "Forelegs"
    )}

    ${hotspot(
      "middleLegs",
      `<path
        d="M505 345 L485 425 L500 505"
        fill="none"
        stroke="#4c4840"
        stroke-width="16"
        stroke-linecap="round"
      />`,
      "",
      "Middle legs"
    )}

    ${hotspot(
      "hindLegs",
      `<path
        d="M560 325 L635 400 L690 478"
        fill="none"
        stroke="#4c4840"
        stroke-width="16"
        stroke-linecap="round"
      />`,
      "",
      "Hind legs"
    )}

    ${hotspot(
      "legSegments",
      `<g
        fill="none"
        stroke="#7a7264"
        stroke-width="5"
      >
        <path d="M390 405 l-12 16"/>
        <path d="M485 425 l8 17"/>
        <path d="M635 400 l14 15"/>
      </g>`,
      "",
      "Leg segments"
    )}

    ${hotspot(
      "tarsalClaw",
      `<g
        stroke="#262822"
        stroke-width="7"
      >
        <path d="M350 475 l-15 14"/>
        <path d="M350 475 l18 10"/>
        <path d="M500 505 l-14 16"/>
        <path d="M500 505 l17 8"/>
        <path d="M690 478 l-13 17"/>
        <path d="M690 478 l18 7"/>
      </g>`,
      "",
      "Tarsal claw"
    )}

    ${hotspot(
      "tergites",
      `<g
        fill="none"
        stroke="#85806e"
        stroke-width="3"
      >
        <path d="M700 220 Q775 265 850 235"/>
        <path d="M685 260 Q775 300 875 272"/>
        <path d="M680 305 Q775 338 875 315"/>
        <path d="M690 348 Q775 375 855 355"/>
      </g>`,
      "",
      "Tergites"
    )}

    ${hotspot(
      "sternites",
      `<g
        fill="none"
        stroke="#656157"
        stroke-width="3"
      >
        <path d="M700 365 Q775 395 845 372"/>
        <path d="M710 390 Q780 420 830 405"/>
      </g>`,
      "",
      "Sternites"
    )}

    ${hotspot(
      "spiracles",
      `<g fill="#bfa875">
        <circle cx="470" cy="245" r="6"/>
        <circle cx="520" cy="225" r="6"/>
        <circle cx="580" cy="235" r="6"/>
        <circle cx="705" cy="270" r="6"/>
        <circle cx="750" cy="255" r="6"/>
        <circle cx="810" cy="280" r="6"/>
      </g>`,
      "",
      "Spiracles"
    )}

    ${hotspot(
      "sting",
      `<path
        d="M885 315 L935 305 L900 330Z"
        fill="#292923"
        class="part-outline"
      />`,
      "",
      "Stinger"
    )}

    ${hotspot(
      "clypeus",
      `<ellipse
        cx="290"
        cy="315"
        rx="30"
        ry="18"
        fill="#625d50"
        class="part-outline"
      />`,
      "",
      "Clypeus"
    )}

    ${hotspot(
      "frontalLobes",
      `<path
        d="M275 235 Q290 215 305 235
           Q290 250 275 235Z

           M315 235 Q330 215 345 235
           Q330 250 315 235Z"
        fill="#676157"
      />`,
      "",
      "Frontal lobes"
    )}

    ${hotspot(
      "antennalFossa",
      `<circle
        cx="270"
        cy="250"
        r="12"
        fill="#756f61"
      />`,
      "",
      "Antennal fossa"
    )}

    ${hotspot(
      "pronotum",
      `<path
        d="M450 245 Q505 220 560 245
           L550 280 Q505 260 460 280Z"
        fill="#5a554a"
        class="part-outline"
      />`,
      "",
      "Pronotum"
    )}

    ${hotspot(
      "mesonotum",
      `<path
        d="M455 285 Q505 265 555 285
           L555 315 Q505 300 455 315Z"
        fill="#625c51"
        class="part-outline"
      />`,
      "",
      "Mesonotum"
    )}

    ${hotspot(
      "metanotum",
      `<path
        d="M462 320 Q505 307 548 320
           L540 345 Q505 335 470 345Z"
        fill="#5b564d"
        class="part-outline"
      />`,
      "",
      "Metanotum"
    )}

    ${hotspot(
      "propodeum",
      `<path
        d="M550 260 Q585 275 605 300
           Q585 325 550 330Z"
        fill="#514d44"
        class="part-outline"
      />`,
      "",
      "Propodeum"
    )}

    ${hotspot(
      "scutellum",
      `<path
        d="M505 265 l25 20 l-25 20 l-25 -20Z"
        fill="#6a6257"
      />`,
      "",
      "Scutellum"
    )}

    ${hotspot(
      "metapleural",
      `<circle
        cx="580"
        cy="315"
        r="10"
        fill="#8a806d"
      />`,
      "",
      "Metapleural gland"
    )}

    ${line(220,250,110,165)}
    ${label(100,160,"head",false,"end")}

    ${line(500,210,500,105)}
    ${label(500,98,"thorax",false,"middle")}

    ${line(635,255,635,125)}
    ${label(635,118,"petiole",false,"middle")}

    ${line(780,200,780,95)}
    ${label(780,88,"gaster",false,"middle")}

    ${line(300,275,200,120)}
    ${label(195,116,"compound eyes",false,"end")}

    ${line(210,175,90,120)}
    ${label(85,116,"antennae",false,"end")}

    ${line(260,330,125,350)}
    ${label(115,355,"mandibles",false,"end")}

    ${line(390,405,265,510)}
    ${label(255,520,"forelegs",false,"end")}

    ${line(500,505,500,545)}
    ${label(500,555,"middle legs",false,"middle")}

    ${line(690,478,800,515)}
    ${label(810,520,"hind legs")}

    ${line(720,220,875,150)}
    ${label(885,146,"tergites")}

    ${line(720,390,875,440)}
    ${label(885,445,"sternites")}

    ${line(750,255,900,200)}
    ${label(910,198,"spiracles")}

    ${line(900,320,935,360)}
    ${label(945,365,"stinger")}

    <text
      x="75"
      y="90"
      class="diagram-note"
    >
      Worker-ant style diagram • reproductive wings are omitted because the worksheet notes workers are commonly wingless
    </text>
  `);
}


// ============================================================
// ORGANISM SELECTION SCREEN
// ============================================================

function renderSelect() {
  const grid = document.getElementById("organismGrid");

  const cards = [
    [
      "squid",
      "01",
      miniSquid(),
      "Cephalopod",
      "External + internal views"
    ],
    [
      "earthworm",
      "02",
      miniWorm(),
      "Segmented annelid",
      "External + internal views"
    ],
    [
      "shrimp",
      "03",
      miniShrimp(),
      "Aquatic crustacean",
      "External anatomy"
    ],
    [
      "ant",
      "04",
      miniAnt(),
      "Terrestrial insect",
      "External anatomy"
    ]
  ];

  grid.innerHTML = cards.map(
    ([key, num, visual, labelText, mode]) => `
      <article
        class="organism-card"
        data-organism="${key}"
        tabindex="0"
        role="button"
        aria-label="Open ${ORGANISMS[key].name} anatomy"
      >
        <div class="organism-visual">
          ${visual}
        </div>

        <span class="organism-index">
          ${num} • ${labelText}
        </span>

        <h3>${ORGANISMS[key].name}</h3>

        <p>${mode}</p>
      </article>
    `
  ).join("");

  grid.querySelectorAll(".organism-card").forEach(card => {
    card.addEventListener("click", () => {
      openOrganism(card.dataset.organism);
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openOrganism(card.dataset.organism);
      }
    });
  });
}


// ============================================================
// GAME STATE
// ============================================================

let currentOrganism = null;
let currentView = null;
let eliminated = new Set();


// ============================================================
// SCREEN CONTROL
// ============================================================

function setScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach(screen => screen.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


// ============================================================
// OPEN ORGANISM
// ============================================================

function openOrganism(key) {
  currentOrganism = key;
  currentView = "external";
  eliminated = new Set();

  renderAnatomy();
  setScreen("anatomyScreen");
}


// ============================================================
// RENDER ANATOMY
// ============================================================

function renderAnatomy() {
  const data = ORGANISMS[currentOrganism];
  const view = data.views[currentView];

  document.getElementById("anatomyEyebrow").textContent =
    `${data.scientific} • ${data.habitat}`;

  document.getElementById("anatomyTitle").textContent =
    data.name;

  // ---------------------------------------------
  // View switch
  // ---------------------------------------------

  const switcher = document.getElementById("viewSwitch");
  const viewKeys = Object.keys(data.views);

  switcher.innerHTML = viewKeys.map(
    key => `
      <button
        class="view-tab ${key === currentView ? "active" : ""}"
        data-view="${key}"
      >
        ${data.views[key].label}
      </button>
    `
  ).join("");

  switcher
    .querySelectorAll(".view-tab")
    .forEach(button => {
      button.addEventListener("click", () => {
        if (button.dataset.view === currentView) {
          return;
        }

        currentView = button.dataset.view;

        document.getElementById(
          "selectedPartTitle"
        ).textContent = "Choose a part";

        document.getElementById(
          "selectedPartText"
        ).textContent =
          "Select any highlighted part on the diagram to see its worksheet-based description.";

        renderAnatomy();
      });
    });


  // ---------------------------------------------
  // Draw diagram
  // ---------------------------------------------

  const board = document.getElementById("board");

  if (currentOrganism === "squid") {
    board.innerHTML = squidDiagram(currentView);
  }

  else if (currentOrganism === "earthworm") {
    board.innerHTML = earthwormDiagram(currentView);
  }

  else if (currentOrganism === "shrimp") {
    board.innerHTML = shrimpDiagram();
  }

  else if (currentOrganism === "ant") {
    board.innerHTML = antDiagram();
  }


  // ---------------------------------------------
  // Counters
  // ---------------------------------------------

  document.getElementById("activeCount").textContent =
    eliminated.size;

  document.getElementById("eliminatedCount").textContent =
    eliminated.size;


  // ---------------------------------------------
  // Make parts interactive
  // ---------------------------------------------

  board
    .querySelectorAll(".part-hotspot")
    .forEach(hotspotElement => {

      const id = hotspotElement.dataset.part;

      if (eliminated.has(id)) {
        hotspotElement.classList.add("eliminated");
      }

      hotspotElement.addEventListener("click", () => {
        togglePart(id);
      });

      hotspotElement.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          togglePart(id);
        }
      });
    });


  updateEliminatedList(view);
}


// ============================================================
// FIND PART INFORMATION
// ============================================================

function getPartById(id) {
  for (
    const view of Object.values(
      ORGANISMS[currentOrganism].views
    )
  ) {
    const found = view.parts.find(
      part => part[0] === id
    );

    if (found) {
      return found;
    }
  }

  return null;
}


// ============================================================
// ELIMINATE / RESTORE PART
// ============================================================

function togglePart(id) {
  const part = getPartById(id);

  if (!part) {
    return;
  }

  if (eliminated.has(id)) {
    eliminated.delete(id);
  } else {
    eliminated.add(id);
  }


  // Darken / restore the part
  document
    .querySelectorAll(
      `.part-hotspot[data-part="${CSS.escape(id)}"]`
    )
    .forEach(element => {
      element.classList.toggle(
        "eliminated",
        eliminated.has(id)
      );
    });


  // Update information panel
  document.getElementById(
    "selectedPartTitle"
  ).textContent = part[1];

  document.getElementById(
    "selectedPartText"
  ).textContent = part[2];


  // Update counters
  document.getElementById(
    "activeCount"
  ).textContent = eliminated.size;

  document.getElementById(
    "eliminatedCount"
  ).textContent = eliminated.size;


  // Update eliminated list
  updateEliminatedList(
    ORGANISMS[currentOrganism].views[currentView]
  );


  // Small feedback animation
  const panel = document.querySelector(".info-panel");

  panel.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.012)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 180,
      easing: "ease-out"
    }
  );
}


// ============================================================
// ELIMINATED PART LIST
// ============================================================

function updateEliminatedList(view) {
  const list =
    document.getElementById("eliminatedList");

  const parts = view.parts.filter(
    part => eliminated.has(part[0])
  );

  if (!parts.length) {
    list.innerHTML =
      `<div class="empty-state">No parts eliminated yet.</div>`;

    return;
  }

  list.innerHTML = parts
    .map(
      part =>
        `<span class="elim-tag">${part[1]}</span>`
    )
    .join("");
}


// ============================================================
// BUTTON EVENTS
// ============================================================

document.getElementById("playBtn").addEventListener(
  "click",
  () => {
    setScreen("selectScreen");
  }
);


document.getElementById("resetBtn").addEventListener(
  "click",
  () => {

    eliminated.clear();

    document.getElementById(
      "selectedPartTitle"
    ).textContent = "Choose a part";

    document.getElementById(
      "selectedPartText"
    ).textContent =
      "Select any highlighted part on the diagram to see its worksheet-based description.";

    renderAnatomy();
  }
);


// Home buttons
document
  .querySelectorAll("[data-action='home']")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        setScreen("homeScreen");
      }
    );
  });


// Organism selection buttons
document
  .querySelectorAll("[data-action='select']")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        setScreen("selectScreen");
      }
    );
  });


// ============================================================
// INITIALIZE
// ============================================================

renderSelect();
