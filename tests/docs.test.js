import fs from "fs";

const dirToCheck = [["./docs/"]];

function collectDirToCheck(dirPath) {
  const dirs = fs.readdirSync(dirPath);

  dirs.forEach((dir) => {
    if (
      !dir.includes("areas.json") &&
      !dir.includes("README.md") &&
      !dir.includes("index.html")
    ) {
      const dirTarget = `${dirPath}${dir}/`;

      dirToCheck.push([dirTarget]);
      collectDirToCheck(dirTarget);
    }
  });
}

collectDirToCheck(dirToCheck[0][0]);

describe("Snapshot test", () => {
  test.each(dirToCheck)("Snapshot test on %s", (dir) => {
    const data = require(`.${dir}areas.json`);
    expect(data).toMatchSnapshot();
  });
});

describe("Check for duplicate data on each areas.json file", () => {
  test.each(dirToCheck)("Check for duplicate 'id' on %s", (dir) => {
    const data = require(`.${dir}areas.json`);

    expect(data).toHaveProperty("areas");
    expect(data.areas.length).toBeGreaterThan(0);

    const ids = data.areas.map((area) => area.id);
    const isDuplicate = ids.some((id, idx) => ids.indexOf(id) !== idx);

    expect(isDuplicate).toBe(false);
  });

  test.each(dirToCheck)("Check for duplicate 'name' on %s", (dir) => {
    const data = require(`.${dir}areas.json`);

    expect(data).toHaveProperty("areas");
    expect(data.areas.length).toBeGreaterThan(0);

    const names = data.areas.map((area) => area.name);
    const isDuplicate = names.some((name, idx) => names.indexOf(name) !== idx);

    expect(isDuplicate).toBe(false);
  });

  test.each(dirToCheck)("Check for README.md content on %s", (dir) => {
    const parentDirSplit = dir.split("/");
    parentDirSplit.pop();
    parentDirSplit.pop();
    const parentDir = parentDirSplit.join("/") + "/";

    if (fs.existsSync(`${parentDir}areas.json`)) {
      const parentAreas = require(`../${parentDir}areas.json`);
      const currentArea = parentAreas.areas.find(
        (area) =>
          area.id ===
          Number.parseInt(dir.replace(parentDir, "").replace("/", ""), 10)
      );

      const readmeFile = fs.readFileSync(`${dir}README.md`, 'utf8');
      expect(readmeFile).toBe(`# ${currentArea.name}`);
    }

    // const data = require(`.${dir}areas.json`);

    // expect(data).toHaveProperty("areas");
    // expect(data.areas.length).toBeGreaterThan(0);

    // const ids = data.areas.map((area) => area.id);
    // const isDuplicate = ids.some((id, idx) => ids.indexOf(id) !== idx);

    // expect(isDuplicate).toBe(false);
  });
});
