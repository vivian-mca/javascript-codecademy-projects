// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Create factory function for pAequor
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    // Randomly selects a base in `dna` and change the current base to a different base
    mutate() {
      // Selects random base location in dna strand
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let generatedBase = returnRandBase();
      let currentBase = this.dna[randIndex];

      // If identical, generate new base until bases are different from each other
      while (currentBase === generatedBase) {
        currentBase = generatedBase;
      }

      // Replaces currentBase with generatedBase
      this.dna.splice(randIndex, 1, generatedBase);
    },

    // Compares the DNA of 2 specimens and returns the shared common DNA percentage
    compareDNA(otherSpecimen) {
      let identicalBaseCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        const currentSpecimenBase = this.dna[i];
        const otherSpecimenBase = otherSpecimen.dna[i];
        if (currentSpecimenBase === otherSpecimenBase) {
          identicalBaseCount += 1;
        }
      }

      const percentageDNA = ((identicalBaseCount / 15) * 100).toFixed(2);

      return `Specimen #${this.specimenNum} and Specimen #${otherSpecimen.specimenNum} have ${percentageDNA}% in common.`;
    },

    // Checks if specimen will survive based on whether its DNA contains at least 60% C and G bases
    willLikelySurvive() {
      let cAndGBaseCount = 0;
      for (let base of this.dna) {
        if (base === "C" || base === "G") {
          cAndGBaseCount += 1;
        }
      }

      const survivalChance = (cAndGBaseCount / 15) * 100;

      return !!(survivalChance >= 60); //returns true if survival chance (percentage of C and G bases) are equal to or over 60%
    },

    // Returns the complementary DNA strand (`A` bases bind with `T` bases (and vice versa) and `C` bases bind with `G` bases (and vice versa))
    complementStrand() {
      const complementaryStrand = [];
      for (let base of this.dna) {
        if (base === "A") {
          complementaryStrand.push("T");
        } else if (base === "T") {
          complementaryStrand.push("A");
        } else if (base === "C") {
          complementaryStrand.push("G");
        } else if (base === "G") {
          complementaryStrand.push("C");
        }
      }

      return complementaryStrand;
    },
  };
};

// Creates 30 instances of pAequor that can survive in their natural environment
const pAequorSpecimens = [];

const survivingSpecimen = () => {
  for (let i = 1; i <= 30; i++) {
    let specimen = pAequorFactory(i, mockUpStrand());
    if (specimen.willLikelySurvive) {
      pAequorSpecimens.push(specimen);
    }
  }
};

survivingSpecimen();

/*
//---- TEST CASES ----

const pAequor1 = pAequorFactory(1, mockUpStrand());  
const pAequor2 = pAequorFactory(2, mockUpStrand()); 

// .mutate() method

console.log(`Starting DNA: ${pAequor1.dna}`);
pAequor1.mutate();
console.log(`Mutated DNA: ${pAequor1.dna}`);


// .compareDNA() method

console.log(`Specimen ${pAequor1.specimenNum} DNA: ${pAequor1.dna}`);
console.log(`Specimen ${pAequor2.specimenNum} DNA: ${pAequor2.dna}`);
console.log(pAequor1.compareDNA(pAequor2));


// .willLikelySurvive() method

console.log(`Specimen ${pAequor1.specimenNum} DNA: ${pAequor1.dna}`);
console.log(`Will Specimen ${pAequor1.specimenNum} likely survive? ${pAequor1.willLikelySurvive()}`);

// .complementStrand() method
console.log(`Specimen ${pAequor1.specimenNum} DNA: ${pAequor1.dna}`);
console.log(`Complementary strand of Specimen ${pAequor1.specimenNum}: ${pAequor1.complementStrand()}`);
*/
