# Example Testing

Integration testing with TS...

```shell
npm test
```

```text
  Admins
    ✔ get admins (41ms)

  Counter
    ✔ count == 0
    ✔ count++ (2113ms)
    ✔ update canister (1832ms)
    ✔ count == 1
```

## Dependencies

- dfx `v0.10.0`
- node `v18.2.0` (npm `v8.9.0`)

## TODO

- Fix hardcoded canister id.
- Figure out why `export const example = createActor(canisterId);` breaks `createActor`...
