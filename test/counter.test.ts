import { assert } from "chai";
import { execSync } from "child_process";
import { ensureIdentity } from "../lib/keys";
import { Example } from "../src/declarations/example/example.did";
import { canisterId, createActor } from "../src/declarations/example";

describe("Counter", () => {
    let example : Example;
    before(() => {       
        const identity = ensureIdentity("admin");
        example = createActor(canisterId, {
            agentOptions: {
                host: "http://127.0.0.1:8000",
                identity
            }
        });
    });

    it("count == 0", async () => {
        assert.equal(await example.counter(), 0n);
    });

    it("count++", async () => {
        assert.equal(await example.add(1n), 1n);
    });

    it("update canister", async () => {
        execSync(`dfx deploy --upgrade-unchanged`, { stdio: "ignore" });
    });

    it("count == 1", async () => {
        assert.equal(await example.counter(), 1n);
    });
})
