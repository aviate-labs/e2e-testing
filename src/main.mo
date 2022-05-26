import Buffer "mo:base/Buffer";

shared({caller = owner}) actor class Example() {

    stable var admins : [Principal] = [owner];

    private func isAdmin(admin : Principal) : Bool {
        for (a in admins.vals()) if (a == admin) return true;
        false;
    };

    public shared({caller}) func addAdmin(admin : Principal) {
        assert(isAdmin(caller));
        if (isAdmin(admin)) return;
        let b = Buffer.Buffer<Principal>(admins.size() + 1);
        for (a in admins.vals()) b.add(a); b.add(admin);
        admins := b.toArray();
    };

    public query func getAdmins() : async [Principal] {
        admins;
    };

    stable var _counter : Int = 0;

    public shared func add(x : Int) : async Int {
        _counter += x;
        _counter;
    };

    public shared func sub(x : Int) : async Int {
        _counter -= x;
        _counter;
    };

    public shared func mul(x : Int) : async Int {
        _counter *= x;
        _counter;
    };

    public shared func div(x : Int) : async Int {
        _counter /= x;
        _counter;
    };

    public query func counter() : async Int {
        _counter;
    }
};
