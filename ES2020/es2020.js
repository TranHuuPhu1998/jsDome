const string = "Email: john@gmail.com mary@gmail.com";
const regex = /\b([a-z0-9]*)@([a-z0-9\.]*)\b/gi;

for(const match of string.match(regex)){
    console.log(match)
}
for(const matchAll of string.matchAll(regex)){
    console.log(matchAll)
}