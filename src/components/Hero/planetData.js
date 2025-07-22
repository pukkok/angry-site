import Sun from "@/assets/orbits/Sun.png"
import Mercury from "@/assets/orbits/Mercury.png"
import Venus from "@/assets/orbits/Venus.png"
import Earth from "@/assets/orbits/Earth.png"
import Mars from "@/assets/orbits/Mars.png"
import Jupiter from "@/assets/orbits/Jupiter.png"
import Saturn from "@/assets/orbits/Saturn.png"
import Uranus from "@/assets/orbits/Uranus.png"
import Neptune from "@/assets/orbits/Neptune.png"

export const planetData = [
  {
    name: "Mercury",
    img: Mercury,
    description: "수성은 태양에 가장 가까운 작고 빠른 행성입니다.",
    size: 6,
    orbitIndex: 0,
    startDeg: 0,
    orbitSpeed: "fast"
  },
  {
    name: "Venus",
    img: Venus,
    description: "금성은 두 번째로 가까운 행성이며 두꺼운 대기를 가졌습니다.",
    size: 7,
    orbitIndex: 1,
    startDeg: 45,
    orbitSpeed: "fast"
  },
  {
    name: "Earth",
    img: Earth,
    description: "지구는 생명이 존재하는 유일한 행성입니다.",
    size: 7,
    orbitIndex: 2,
    startDeg: 90,
    orbitSpeed: "medium"
  },
  {
    name: "Mars",
    img: Mars,
    description: "화성은 붉은 색의 지형으로 유명합니다.",
    size: 6,
    orbitIndex: 3,
    startDeg: 135,
    orbitSpeed: "medium"
  },
  {
    name: "Jupiter",
    img: Jupiter,
    description: "목성은 가장 큰 행성으로 수많은 위성을 가지고 있습니다.",
    size: 10,
    orbitIndex: 4,
    startDeg: 180,
    orbitSpeed: "slow"
  },
  {
    name: "Saturn",
    img: Saturn,
    description: "토성은 아름다운 고리를 가진 행성입니다.",
    size: 10,
    orbitIndex: 5,
    startDeg: 225,
    orbitSpeed: "slow"
  },
  {
    name: "Uranus",
    img: Uranus,
    description: "천왕성은 옆으로 누운 축으로 자전합니다.",
    size: 8,
    orbitIndex: 6,
    startDeg: 270,
    orbitSpeed: "slow"
  },
  {
    name: "Neptune",
    img: Neptune,
    description: "해왕성은 푸른 색의 대기를 가진 가장 먼 행성입니다.",
    size: 8,
    orbitIndex: 7,
    startDeg: 315,
    orbitSpeed: "slow"
  }
]

export const sunImage = Sun
