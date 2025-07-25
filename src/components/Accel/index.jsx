import TextFilm from "./TextFilm"
import {constellationTexts, symbolTexts, spaceTermTexts } from "./accelFilmTexts"

const AccelSection = () => {

  return (
    <section className="w-screen h-[200vh] overflow-x-hidden bg-black">
      <TextFilm texts={constellationTexts} direction={-1} tilt={-3} selectType="a"/>
      <TextFilm texts={symbolTexts} direction={1} selectType="b"/>
      <TextFilm texts={spaceTermTexts} direction={-1} tilt={-3} selectType="c"/>
      <TextFilm texts={constellationTexts} direction={1} selectType="d"/>
      <TextFilm texts={symbolTexts} direction={-1} tilt={-3} selectType="e"/>
      <TextFilm texts={spaceTermTexts} direction={1} selectType="f"/>
    </section>
  )
}

export default AccelSection