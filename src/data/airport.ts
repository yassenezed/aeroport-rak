export const airport = {
  name: "Marrakech Ménara",
  code: "RAK",
  icao: "GMMX",
  distanceToCityKm: 6,
  driveToCityMin: {
    min: 15,
    max: 30
  },
  // Tarifs affichés au rang de taxis de l'aéroport (petit taxi, course complète).
  taxiFare: {
    dayMad: [100, 150],
    nightMad: [150, 240]
  },
  // Bus 19 ALSA, aéroport <-> Jemaa el-Fna.
  bus: {
    line: "19",
    operator: "ALSA",
    oneWayMad: 30,
    returnMad: 50,
    frequencyMin: 30,
    firstDeparture: "06:00",
    lastDeparture: "23:30",
    rideMin: 20
  },
  passengers2024: 9_300_000,
  runwayM: 3100,
  elevationM: 471
};

export const PRICES_CHECKED = "septembre 2026";
