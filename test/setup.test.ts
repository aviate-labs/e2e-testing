import { execSync } from "child_process";
import { ensureIdentity } from "../lib/keys";

before(() => {
    const identity = ensureIdentity("admin");
    execSync(`dfx stop`, { stdio: "ignore" });
    execSync(`dfx start --background --clean`, { stdio: "ignore" });
    execSync(`dfx deploy`, { stdio: "ignore" });
    execSync(`dfx canister call example addAdmin "(principal \\"${identity.getPrincipal().toString()}\\")"`);        
});

after(() => {
    execSync(`dfx stop`, { stdio: "ignore" });
});
