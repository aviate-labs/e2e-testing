import { assert } from "chai";
import { ensureIdentity } from "../lib/keys";
import { Example } from "../src/declarations/example/example.did";
import { canisterId, createActor } from "../src/declarations/example";

describe("Admins", () => {
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

    it("get admins", async () => {
        const admins = await example.getAdmins();
        assert.equal(admins.length, 2);
    });
})