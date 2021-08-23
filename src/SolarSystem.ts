
export class SolarSystem {

    listPlanets1() {
    const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
         for (let i=0; i < planets.length; i++) {
             console.log(planets[i]);
            };
             console.log('done');
    }
    listPlanetsReverse1() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (let i=10; i > planets.length; i--) {
            console.log(planets[i]);
        };
        console.log('done');
    }
    listPlanets2() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for(const planet of planets) {
            console.log(planet);
        }
    }
    listPlanetsReverse2() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for(const planet of planets) {
            console.log(planet);
        }
        console.log('done');
    }
    listPlanets3() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = 1;
        while(i < planets.length) {
            i++
            console.log(i)

        }
        console.log('done');
    }
    listPlanetsReverse3() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = 10;
        while(i > planets.length) {
            i--
            console.log(i)
        }
    }
    listPlanets4() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = 1;
        do {
          console.log(i)
          i++
      } while(i < planets.length) {
            console.log(i)
        }
    }
    listPlanetsReverse4() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = 10;
        do {
            console.log(i)
            i--
        } while(i > planets.length) {
            console.log(i)
        }
    }
}