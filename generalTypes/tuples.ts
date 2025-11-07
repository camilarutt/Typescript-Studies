/* #########################################################
      This is the file for the lessons about TUPLES,
          their syntax and types of common usage
########################################################### */

// special type exclusive to typescript with fixed length and ordered values with specific types

const color: [number, number, number] = [255, 45, 3]; // ex for RGB
// if "= []" it complains that needs three elements

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] = "200" -> type string is not ... type number

// goodRes.push(123) -> it doesn't complain if we implement more elements on a const that needs to follow a tuple type

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
]; // array of tuples
