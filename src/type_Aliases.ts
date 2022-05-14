//this is type aliasis
//
type Id = string;
type PopularTag = string;

interface UserInterface {
  id: Id;
  name1: string;
  surname1: string;
}

// we can assing array of string
const PopularTag = ["shubham", "rugwed"];
//or
// its better tell others it is the type of string
// const PopularTag:PopularTag[] = ["shubham", "rugwed"];

//** the combunation of union and type aliases */
type meybePopularTag = PopularTag |null

const dragons:meybePopularTag = "dragon"


