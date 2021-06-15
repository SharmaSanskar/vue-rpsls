interface Rock {
  [key: string]: string;
  Scissors: string;
  Lizard: string;
}

interface Paper {
  [key: string]: string;
  Rock: string;
  Spock: string;
}

interface Scissors {
  [key: string]: string;
  Paper: string;
  Lizard: string;
}

interface Lizard {
  [key: string]: string;
  Paper: string;
  Spock: string;
}

interface Spock {
  [key: string]: string;
  Scissors: string;
  Rock: string;
}

export interface Data {
  [key: string]: Rock | Paper | Scissors | Lizard | Spock;
  Rock: Rock;
  Paper: Paper;
  Scissors: Scissors;
  Lizard: Lizard;
  Spock: Spock;
}

export const data: Data = {
  Rock: {
    Scissors: "crushes",
    Lizard: "crushes",
  },
  Paper: {
    Rock: "covers",
    Spock: "disproves",
  },
  Scissors: {
    Paper: "cuts",
    Lizard: "decapitates",
  },
  Lizard: {
    Paper: "eats",
    Spock: "poisons",
  },
  Spock: {
    Scissors: "smashes",
    Rock: "vaporizes",
  },
};
