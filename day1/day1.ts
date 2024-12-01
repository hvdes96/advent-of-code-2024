import { promises as fs } from "fs";

const readFileContent = async () => {
  try {
    const fileContent = await fs.readFile("./day1/day1.txt", "utf8");

    const lines = fileContent.trim().split("\n");
    const columns = lines.map((line) => line.trim().split(/\s+/).map(Number));
    const column1 = columns.map((row) => row[0]);
    const column2 = columns.map((row) => row[1]);

    const counts = new Map<number, number>();
    for (const num of column2) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }

    const result = column1.reduce((sum, num) => {
      const multiplier = counts.get(num) || 0;
      return sum + num * multiplier;
    }, 0);

    console.log(result);
  } catch (e) {
    console.error("Error reading file:", e);
  }
};

(async () => {
  await readFileContent();
})();
