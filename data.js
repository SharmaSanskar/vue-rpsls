const gameData = () =>{
    return {
        "Rock": {
            "Scissors": "crushes",
            "Lizard": "crushes" 
          },
          "Paper": {
            "Rock": "covers",
            "Spock": "disproves"
          },
          "Scissors": {
            "Paper": "cuts",
            "Lizard": "decapitates"
          },
          "Lizard": {
            "Paper": "eats",
            "Spock": "poisons"
          },
          "Spock": {
            "Scissors": "smashes",
            "Rock": "vaporizes"
          }
        
    }
}

export default gameData