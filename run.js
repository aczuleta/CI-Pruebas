import Jasmine from "jasmine";
import reporters from "jasmine-reporters";
const jasmine = new Jasmine();
jasmine.loadConfigFile("./spec/support/jasmine.json");
const junitReporter = new reporters.JUnitXmlReporter({
  savePath: "./spec/results",
  consolidateAll: false
});
jasmine.addReporter(junitReporter);
jasmine.execute();
