import { setup, assertions, run } from "inertion";
import * as util from "util";

const test = setup(assertions);

test(`yo`, async is => {
  is.ok(false, "oh noes");
});

(async () => {
  const results = await run(test);

  console.log(util.inspect(results, { depth: 99 }));
})();
