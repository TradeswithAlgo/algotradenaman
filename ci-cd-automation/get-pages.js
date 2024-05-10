const fs = require("fs");

const data1 = fs.readdirSync("../nanosoft-app/src/app");
const data2 = fs.readdirSync("../nanosoft-app/src/app/it-services");
const data3 = data2.map(ele => {
    if (
      fs.lstatSync(`../nanosoft-app/src/app/it-services/${ele}`).isDirectory()
    ) {
      return `{
      url: "https://brainautotech.com/it-services/${ele}",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,},`;
    }
})
fs.writeFileSync("./some.txt",data3.toString());
console.log(data3);