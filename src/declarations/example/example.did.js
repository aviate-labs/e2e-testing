export const idlFactory = ({ IDL }) => {
  const Example = IDL.Service({
    'add' : IDL.Func([IDL.Int], [IDL.Int], []),
    'addAdmin' : IDL.Func([IDL.Principal], [], ['oneway']),
    'counter' : IDL.Func([], [IDL.Int], ['query']),
    'div' : IDL.Func([IDL.Int], [IDL.Int], []),
    'getAdmins' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'mul' : IDL.Func([IDL.Int], [IDL.Int], []),
    'sub' : IDL.Func([IDL.Int], [IDL.Int], []),
  });
  return Example;
};
export const init = ({ IDL }) => { return []; };
