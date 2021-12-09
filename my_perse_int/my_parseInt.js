"use strict"

function my_parse_int(str) {
    let filtered = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            continue;
          }
          if(str[i] >= "0" && str[i] <= "9") {
            filtered.push(str[i]);
          } else {
              if(filtered.length === 0)
                return NaN;
            else {
                return filtered.join("") * 1;
            }
          }
    }
    if(!filtered)
        return NaN;
    return filtered.join("") * 1;
  }

console.log(my_parse_int("456321"));
console.log(my_parse_int("  541"));
console.log(my_parse_int("sdf6321"));
console.log(my_parse_int("4.6321"));


