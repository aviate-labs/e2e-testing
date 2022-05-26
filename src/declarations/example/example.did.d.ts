import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Example {
  'add' : ActorMethod<[bigint], bigint>,
  'addAdmin' : ActorMethod<[Principal], undefined>,
  'counter' : ActorMethod<[], bigint>,
  'div' : ActorMethod<[bigint], bigint>,
  'getAdmins' : ActorMethod<[], Array<Principal>>,
  'mul' : ActorMethod<[bigint], bigint>,
  'sub' : ActorMethod<[bigint], bigint>,
}
export interface _SERVICE extends Example {}
