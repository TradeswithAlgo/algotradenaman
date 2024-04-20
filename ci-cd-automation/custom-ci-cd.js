const fs = require("fs");
const yaml = require("js-yaml");

const ciCdYmlFile = fs.readFileSync("../.cpanel-test.yml", {
  encoding: "utf-8",
});

const jsonObj = yaml.load(ciCdYmlFile);

function editYaml() {
  try {
    const initialString = "export DEPLOYPATH=/home/brainautotech/public_html";
    const initialString2 =
      "/bin/tar -xf /home/brainautotech/repositories/BrainAutotechProd/compiled-prod.tar";
    const files = [];
    const dirs = [];
    const dirList = fs.readdirSync("../compiled-prod-code");
    for (let index = 0; index < dirList.length; index++) {
      const element = dirList[index];
      if (
        fs.lstatSync(`../compiled-prod-code/${element}`).isDirectory() === false
      ) {
        files.push(element);
      } else {
        dirs.push(element);
      }
    }
    console.log("Files Are:!!");
    console.log(files);
    console.log("Directory Are:!!");
    console.log(dirs);
    console.log("Writing to JSON Object!!");
    const newTasks = [];
    newTasks.push(initialString);
    newTasks.push(initialString2);
    for (let element of files) {
      let copyTask =
        "/bin/cp /home/brainautotech/repositories/BrainAutotechProd/compiled-prod-code/" +
        element +
        " $DEPLOYPATH";
      newTasks.push(copyTask);
      console.log((element = " pushed!!"));
    }
    for (let element of dirs) {
      let copyTask =
        "/bin/cp -R /home/brainautotech/repositories/BrainAutotechProd/compiled-prod-code/" +
        element +
        " $DEPLOYPATH";
      newTasks.push(copyTask);
      console.log((element = " pushed!!"));
    }
    console.log(newTasks);
    jsonObj.deployment.tasks = newTasks;
    const yamlString = "---\n" + yaml.dump(jsonObj);
    console.log(
      "Converting JSON Object back to YAML and Writing to .cpanel.yml file!!"
    );
    console.log(yamlString);
    fs.writeFileSync("../.cpanel-test.yml", yamlString);
    console.log("CI CD Steps are done! You can Push your code!!");
    // console.log(dirList);public_html
  } catch (error) {
    console.log(error);
  }
}

editYaml(jsonObj);

// console.log(yamlString);
