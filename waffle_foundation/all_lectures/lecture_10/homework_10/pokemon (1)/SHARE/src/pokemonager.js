const allPokemon = window.allPokemon;

window.pokemonager = {
  findNames: () => {
    // 1問目のコードをここに書きましょう
    return allPokemon.map(Poke => Poke["Name"]);
  },

  //filterは「true」だったら返す。だからtrue / falseで判断できないものは配列の要素に入れられない。

  findByResistance: attack => {
    // 2問目のコードをここに書きましょう
    return allPokemon.filter(Poke => {
      for (const PokeResi of Poke["Resistant"]) {
        if (PokeResi === attack) {
          return true;
        }
      }
    });
  },

  findNamesByResistance: attack => {
    // 3問目のコードをここに書きましょう
    const AttackArray = allPokemon.filter(Poke => {
      for (const PokeResi of Poke["Resistant"]) {
        if (PokeResi === attack) {
          return true;
        }
      }
    });
    return AttackArray.map(Poke => Poke["Name"]);
  },

  avgMaxCP: () => {
    // 4問目のコードをここに書きましょう
    let sum = 0;
    let ReSum = 0;
    const PokeMaxCps = allPokemon.map(Poke => Poke["MaxCP"]);
    console.log("PokeMaxCps", PokeMaxCps);
    for (const PokeMaxCp of PokeMaxCps) {
      console.log("PokeMaxCP", PokeMaxCp);
      if (typeof PokeMaxCp === "number") sum = sum + PokeMaxCp;
      console.log("sum", sum);
    }
    ReSum = sum / allPokemon.length;
    console.log(ReSum);
  },

  countedWeaknesses: () => {
    // 5問目のコードをここに書きましょう
  }
};
