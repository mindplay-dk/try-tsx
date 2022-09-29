import { setup, assertions, run, statusOf, printReport } from "inertion";

const test = setup(assertions);

test(`yo`, async is => {
  console.log(new Error("oh noes"));

  is.ok(false, "oh noes");
});

(async () => {
  const results = await run(test);

  printReport(results);

  process.exit(statusOf(results));
})();
