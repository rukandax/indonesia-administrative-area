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

describe("Check for duplicate ID on each Areas File", () => {
  test.each(dirToCheck)("Check for duplicate ID on %s", (dir) => {
    const data = require(`.${dir}areas.json`);

    expect(data).toHaveProperty("areas");
    expect(data.areas.length).toBeGreaterThan(0);

    const ids = data.areas.map((area) => area.id);
    const isDuplicate = ids.some((id, idx) => ids.indexOf(id) !== idx);

    expect(isDuplicate).toBe(false);
  });
});
