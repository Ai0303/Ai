'use strict'
// Please don't delete the 'use strict' line above
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }
  
console.log(allPokemon);
//warm up!
//1
console.log(allPokemon.length);
//2
console.log(allPokemon[1]);

//基本演習
//問題１
   /**
    * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
    */
   function getNames(){
    const AllNames = [];
    for (const name of allPokemon){
        AllNames.push(name["Name"])
    }
    return AllNames;
   }
   test(getNames(), getNamesExpected);

//問題２
   /**
    * @param {string} ??? - ポケモンの名前
    * @returns {object} 与えられた名前を持つポケモンのオブジェクト
    */
   function getPokemonByName(PokeName){
    for (const PokeData of allPokemon){
        if(PokeName === (PokeData["Name"])){
            return PokeData;
        }
    }
   }
   test(getPokemonByName("Pikachu"), getPokemonByNameExpected);

//問題３
   /**
    * @param {string} ??? - ポケモンの名前
    * @returns {object} 与えられた名前を持つポケモンのオブジェクト
    */
   function getTypePokemon(PokeType){
    const ReturnArray = [];
    for (const PokeData of allPokemon){
        for (const ArrayType of PokeData["Types"]){
            if (PokeType === ArrayType){
                ReturnArray.push(PokeData);
            }
        }   
        }
        return ReturnArray;
    }
   
   test(getTypePokemon("Electric"), getTypePokemonExpected);

//問題４
   /**
    * @param {string} ??? - ポケモンの名前
    * @returns {object} 与えられた名前を持つポケモンのオブジェクト
    */
   function getTypePokemonNames(PokeType){
    let result = [];
    for (const Type of getTypePokemon(PokeType)){
        result.push(Type["Name"])
    }
     return result;
   }
   test(getTypePokemonNames("Electric"), getTypePokemonNamesExpected);

//問題５
   /**
    * @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
    */
　function getAvgMaxCP(){
    const result = []; 
    let SumNum = 0;
    let ReturnNum = 0;
    for (const Pokemon of allPokemon){
        // console.log ("Pokemon;", Pokemon)
        result.push(Pokemon["MaxCP"]);
        console.log(result);
        if(result.length === allPokemon.length){
            console.log("Result", result.length, "AllPokemon", allPokemon.length)
            for (const num of result){
                   console.log("num", num)
                    SumNum = SumNum + num;
                }
        }
        ReturnNum = SumNum / result.length;
    }
    console.log("ReturnNum", ReturnNum)
    return ReturnNum;
}
   // このテストの値はおおよそ答と近ければ合格です。少し違っても問題ありません。
   // 少しだけ違う場合は、テストをコメントアウトしてください
   // それにしても、なぜ違ってもよいかわかりますか？🤔
   console.log("get",getAvgMaxCPExpected)
   test(getAvgMaxCP(), getAvgMaxCPExpected);

//問題６
   /**
    * @param {string} attack（技）
    * @returns {Array<object>} 与えられた技に耐性がある、すべてのポケモンのオブジェクトが入った配列
    */
   function getResistantPokemon(AttackName){
    const result = [];
    for (const Pokemon of allPokemon){
        console.log(Pokemon["Resistant"])
        for (const resistant of Pokemon["Resistant"]){
            if (resistant === AttackName){
                result.push(Pokemon)
            }
        }
    }
    return result;
   }
   console.log("get", getResistantPokemonExpected)
   test(getResistantPokemon("Fire"), getResistantPokemonExpected);

//問題７
   /**
    * @param {string} attack（技）
    * @returns {Array<string>} 与えられた技に耐性がある、すべてのポケモンの名前が入った配列
    */
   function getResistantPokemonNames(AttackName){
    const result = [];
    for(const object of getResistantPokemon(AttackName)){
        result.push (object["Name"]);
    }
    return result
   }
   test(getResistantPokemonNames("Ice"), getResistantPokemonNamesExpected);
   
//問題８
   /**
    * @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケモンの数の組み合わせをキー/値のペアで表現したオブジェクト
    */
   function getWeaknessCounts (){
    const WeakObj = {};
    for (let i = 0; i < allPokemon.length; i ++){
        let Weak = allPokemon[i]["Weaknesses"];
        for (let y = 0; y < Weak.length; y ++){
            if (WeakObj.hasOwnProperty(Weak[y])){
                WeakObj[Weak[y]]++;
            }
            else{
                WeakObj[Weak[y]] = 1;
            }
        }
    }
    return WeakObj;
   }
    
　console.log("Expecet", getWeaknessCountsExpected)
   test(getWeaknessCounts(), getWeaknessCountsExpected);