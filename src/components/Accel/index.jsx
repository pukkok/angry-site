import NextDescription from "../NextDescription"
import TextFilm from "./TextFilm"
import {constellationTexts, symbolTexts, spaceTermTexts } from "./accelFilmTexts"

const AccelSection = () => {

  return (
    <section className="w-screen  overflow-x-hidden bg-black">
      <TextFilm texts={constellationTexts} direction={-1} tilt={-3} selectType="a"/>
      <TextFilm texts={symbolTexts} direction={1} selectType="b"/>
      <TextFilm texts={spaceTermTexts} direction={-1} tilt={-3} selectType="c"/>
      <TextFilm texts={constellationTexts} direction={1} selectType="d"/>
      <TextFilm texts={symbolTexts} direction={-1} tilt={-3} selectType="e"/>
      <TextFilm texts={spaceTermTexts} direction={1} selectType="f"/>

      <div className="px-20 mt-40 text-white">
        <NextDescription 
          first={'PARALLAX'}
          second={'DIFFERENT SPEED'}
          description={'각자 다른 속도로 움직입니다'}
        />
      </div>
    </section>
  )
}

export default AccelSection