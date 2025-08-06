
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model CampAccess
 * 
 */
export type CampAccess = $Result.DefaultSelection<Prisma.$CampAccessPayload>
/**
 * Model Camp
 * 
 */
export type Camp = $Result.DefaultSelection<Prisma.$CampPayload>
/**
 * Model Query
 * 
 */
export type Query = $Result.DefaultSelection<Prisma.$QueryPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model EquipmentTransaction
 * 
 */
export type EquipmentTransaction = $Result.DefaultSelection<Prisma.$EquipmentTransactionPayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EqTransactionType: {
  bringOnCharge: 'bringOnCharge',
  issuance: 'issuance',
  return: 'return',
  disposal: 'disposal'
};

export type EqTransactionType = (typeof EqTransactionType)[keyof typeof EqTransactionType]


export const Status: {
  unassigned: 'unassigned',
  assigned: 'assigned',
  responded: 'responded',
  closed: 'closed'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type EqTransactionType = $Enums.EqTransactionType

export const EqTransactionType: typeof $Enums.EqTransactionType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campAccess`: Exposes CRUD operations for the **CampAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampAccesses
    * const campAccesses = await prisma.campAccess.findMany()
    * ```
    */
  get campAccess(): Prisma.CampAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.camp`: Exposes CRUD operations for the **Camp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Camps
    * const camps = await prisma.camp.findMany()
    * ```
    */
  get camp(): Prisma.CampDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.query`: Exposes CRUD operations for the **Query** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Queries
    * const queries = await prisma.query.findMany()
    * ```
    */
  get query(): Prisma.QueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentTransaction`: Exposes CRUD operations for the **EquipmentTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentTransactions
    * const equipmentTransactions = await prisma.equipmentTransaction.findMany()
    * ```
    */
  get equipmentTransaction(): Prisma.EquipmentTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Appointment: 'Appointment',
    Branch: 'Branch',
    CampAccess: 'CampAccess',
    Camp: 'Camp',
    Query: 'Query',
    Equipment: 'Equipment',
    EquipmentTransaction: 'EquipmentTransaction',
    Model: 'Model'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "appointment" | "branch" | "campAccess" | "camp" | "query" | "equipment" | "equipmentTransaction" | "model"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BranchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      CampAccess: {
        payload: Prisma.$CampAccessPayload<ExtArgs>
        fields: Prisma.CampAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>
          }
          findFirst: {
            args: Prisma.CampAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>
          }
          findMany: {
            args: Prisma.CampAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>[]
          }
          create: {
            args: Prisma.CampAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>
          }
          createMany: {
            args: Prisma.CampAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>[]
          }
          delete: {
            args: Prisma.CampAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>
          }
          update: {
            args: Prisma.CampAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>
          }
          deleteMany: {
            args: Prisma.CampAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>[]
          }
          upsert: {
            args: Prisma.CampAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampAccessPayload>
          }
          aggregate: {
            args: Prisma.CampAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampAccess>
          }
          groupBy: {
            args: Prisma.CampAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampAccessCountArgs<ExtArgs>
            result: $Utils.Optional<CampAccessCountAggregateOutputType> | number
          }
        }
      }
      Camp: {
        payload: Prisma.$CampPayload<ExtArgs>
        fields: Prisma.CampFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>
          }
          findFirst: {
            args: Prisma.CampFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>
          }
          findMany: {
            args: Prisma.CampFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>[]
          }
          create: {
            args: Prisma.CampCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>
          }
          createMany: {
            args: Prisma.CampCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>[]
          }
          delete: {
            args: Prisma.CampDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>
          }
          update: {
            args: Prisma.CampUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>
          }
          deleteMany: {
            args: Prisma.CampDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>[]
          }
          upsert: {
            args: Prisma.CampUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampPayload>
          }
          aggregate: {
            args: Prisma.CampAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCamp>
          }
          groupBy: {
            args: Prisma.CampGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampCountArgs<ExtArgs>
            result: $Utils.Optional<CampCountAggregateOutputType> | number
          }
        }
      }
      Query: {
        payload: Prisma.$QueryPayload<ExtArgs>
        fields: Prisma.QueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findFirst: {
            args: Prisma.QueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          findMany: {
            args: Prisma.QueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          create: {
            args: Prisma.QueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          createMany: {
            args: Prisma.QueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          delete: {
            args: Prisma.QueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          update: {
            args: Prisma.QueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          deleteMany: {
            args: Prisma.QueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>[]
          }
          upsert: {
            args: Prisma.QueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryPayload>
          }
          aggregate: {
            args: Prisma.QueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuery>
          }
          groupBy: {
            args: Prisma.QueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueryCountArgs<ExtArgs>
            result: $Utils.Optional<QueryCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      EquipmentTransaction: {
        payload: Prisma.$EquipmentTransactionPayload<ExtArgs>
        fields: Prisma.EquipmentTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>
          }
          findFirst: {
            args: Prisma.EquipmentTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>
          }
          findMany: {
            args: Prisma.EquipmentTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>[]
          }
          create: {
            args: Prisma.EquipmentTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>
          }
          createMany: {
            args: Prisma.EquipmentTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>[]
          }
          delete: {
            args: Prisma.EquipmentTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>
          }
          update: {
            args: Prisma.EquipmentTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentTransactionPayload>
          }
          aggregate: {
            args: Prisma.EquipmentTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentTransaction>
          }
          groupBy: {
            args: Prisma.EquipmentTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentTransactionCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    appointment?: AppointmentOmit
    branch?: BranchOmit
    campAccess?: CampAccessOmit
    camp?: CampOmit
    query?: QueryOmit
    equipment?: EquipmentOmit
    equipmentTransaction?: EquipmentTransactionOmit
    model?: ModelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
    campAccesses: number
    sponsoredCampAccesses: number
    approvedCampAccesses: number
    queries: number
    assignedQueries: number
    equipmentTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    campAccesses?: boolean | UserCountOutputTypeCountCampAccessesArgs
    sponsoredCampAccesses?: boolean | UserCountOutputTypeCountSponsoredCampAccessesArgs
    approvedCampAccesses?: boolean | UserCountOutputTypeCountApprovedCampAccessesArgs
    queries?: boolean | UserCountOutputTypeCountQueriesArgs
    assignedQueries?: boolean | UserCountOutputTypeCountAssignedQueriesArgs
    equipmentTransactions?: boolean | UserCountOutputTypeCountEquipmentTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSponsoredCampAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedCampAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEquipmentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentTransactionWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    members: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | BranchCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type CampCountOutputType
   */

  export type CampCountOutputType = {
    accesses: number
  }

  export type CampCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesses?: boolean | CampCountOutputTypeCountAccessesArgs
  }

  // Custom InputTypes
  /**
   * CampCountOutputType without action
   */
  export type CampCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampCountOutputType
     */
    select?: CampCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampCountOutputType without action
   */
  export type CampCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampAccessWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    movement: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movement?: boolean | EquipmentCountOutputTypeCountMovementArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentTransactionWhereInput
  }


  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    equipments: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | ModelCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    contact: string | null
    email: string | null
    passwordHash: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    contact: string | null
    email: string | null
    passwordHash: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    contact: number
    email: number
    passwordHash: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    contact?: true
    email?: true
    passwordHash?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    contact?: true
    email?: true
    passwordHash?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    contact?: true
    email?: true
    passwordHash?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    contact?: boolean
    email?: boolean
    passwordHash?: boolean
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    campAccesses?: boolean | User$campAccessesArgs<ExtArgs>
    sponsoredCampAccesses?: boolean | User$sponsoredCampAccessesArgs<ExtArgs>
    approvedCampAccesses?: boolean | User$approvedCampAccessesArgs<ExtArgs>
    queries?: boolean | User$queriesArgs<ExtArgs>
    assignedQueries?: boolean | User$assignedQueriesArgs<ExtArgs>
    equipmentTransactions?: boolean | User$equipmentTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    contact?: boolean
    email?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    contact?: boolean
    email?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    contact?: boolean
    email?: boolean
    passwordHash?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "contact" | "email" | "passwordHash", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    campAccesses?: boolean | User$campAccessesArgs<ExtArgs>
    sponsoredCampAccesses?: boolean | User$sponsoredCampAccessesArgs<ExtArgs>
    approvedCampAccesses?: boolean | User$approvedCampAccessesArgs<ExtArgs>
    queries?: boolean | User$queriesArgs<ExtArgs>
    assignedQueries?: boolean | User$assignedQueriesArgs<ExtArgs>
    equipmentTransactions?: boolean | User$equipmentTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      campAccesses: Prisma.$CampAccessPayload<ExtArgs>[]
      sponsoredCampAccesses: Prisma.$CampAccessPayload<ExtArgs>[]
      approvedCampAccesses: Prisma.$CampAccessPayload<ExtArgs>[]
      queries: Prisma.$QueryPayload<ExtArgs>[]
      assignedQueries: Prisma.$QueryPayload<ExtArgs>[]
      equipmentTransactions: Prisma.$EquipmentTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      contact: string
      email: string
      passwordHash: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campAccesses<T extends User$campAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$campAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sponsoredCampAccesses<T extends User$sponsoredCampAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$sponsoredCampAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedCampAccesses<T extends User$approvedCampAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedCampAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    queries<T extends User$queriesArgs<ExtArgs> = {}>(args?: Subset<T, User$queriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedQueries<T extends User$assignedQueriesArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedQueriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipmentTransactions<T extends User$equipmentTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$equipmentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly contact: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.campAccesses
   */
  export type User$campAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    where?: CampAccessWhereInput
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    cursor?: CampAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampAccessScalarFieldEnum | CampAccessScalarFieldEnum[]
  }

  /**
   * User.sponsoredCampAccesses
   */
  export type User$sponsoredCampAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    where?: CampAccessWhereInput
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    cursor?: CampAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampAccessScalarFieldEnum | CampAccessScalarFieldEnum[]
  }

  /**
   * User.approvedCampAccesses
   */
  export type User$approvedCampAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    where?: CampAccessWhereInput
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    cursor?: CampAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampAccessScalarFieldEnum | CampAccessScalarFieldEnum[]
  }

  /**
   * User.queries
   */
  export type User$queriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    where?: QueryWhereInput
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    cursor?: QueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * User.assignedQueries
   */
  export type User$assignedQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    where?: QueryWhereInput
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    cursor?: QueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * User.equipmentTransactions
   */
  export type User$equipmentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    where?: EquipmentTransactionWhereInput
    orderBy?: EquipmentTransactionOrderByWithRelationInput | EquipmentTransactionOrderByWithRelationInput[]
    cursor?: EquipmentTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentTransactionScalarFieldEnum | EquipmentTransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    branchId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    branchId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    userId: number | null
    branchId: number | null
    isActive: boolean | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    userId: number | null
    branchId: number | null
    isActive: boolean | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    title: number
    startDate: number
    endDate: number
    userId: number
    branchId: number
    isActive: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    userId?: true
    branchId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    userId?: true
    branchId?: true
    isActive?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    userId?: true
    branchId?: true
    isActive?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    userId?: true
    branchId?: true
    isActive?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    title: string
    startDate: Date
    endDate: Date | null
    userId: number
    branchId: number
    isActive: boolean | null
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    branchId?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    branchId?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    branchId?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    branchId?: boolean
    isActive?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "startDate" | "endDate" | "userId" | "branchId" | "isActive", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      startDate: Date
      endDate: Date | null
      userId: number
      branchId: number
      isActive: boolean | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly title: FieldRef<"Appointment", 'String'>
    readonly startDate: FieldRef<"Appointment", 'DateTime'>
    readonly endDate: FieldRef<"Appointment", 'DateTime'>
    readonly userId: FieldRef<"Appointment", 'Int'>
    readonly branchId: FieldRef<"Appointment", 'Int'>
    readonly isActive: FieldRef<"Appointment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    id: number | null
  }

  export type BranchSumAggregateOutputType = {
    id: number | null
  }

  export type BranchMinAggregateOutputType = {
    id: number | null
    name: string | null
    isDeleted: boolean | null
  }

  export type BranchMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isDeleted: boolean | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    isDeleted: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    id?: true
  }

  export type BranchSumAggregateInputType = {
    id?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    isDeleted?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    isDeleted?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    isDeleted?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: number
    name: string
    isDeleted: boolean
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDeleted?: boolean
    members?: boolean | Branch$membersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    isDeleted?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isDeleted", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Branch$membersArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BranchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      members: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isDeleted: boolean
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches and returns the data updated in the database.
     * @param {BranchUpdateManyAndReturnArgs} args - Arguments to update many Branches.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BranchUpdateManyAndReturnArgs>(args: SelectSubset<T, BranchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Branch$membersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'Int'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly isDeleted: FieldRef<"Branch", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch updateManyAndReturn
   */
  export type BranchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.members
   */
  export type Branch$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model CampAccess
   */

  export type AggregateCampAccess = {
    _count: CampAccessCountAggregateOutputType | null
    _avg: CampAccessAvgAggregateOutputType | null
    _sum: CampAccessSumAggregateOutputType | null
    _min: CampAccessMinAggregateOutputType | null
    _max: CampAccessMaxAggregateOutputType | null
  }

  export type CampAccessAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sponsorId: number | null
    approverId: number | null
    campId: number | null
  }

  export type CampAccessSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sponsorId: number | null
    approverId: number | null
    campId: number | null
  }

  export type CampAccessMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    userId: number | null
    sponsorId: number | null
    approverId: number | null
    campId: number | null
  }

  export type CampAccessMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    userId: number | null
    sponsorId: number | null
    approverId: number | null
    campId: number | null
  }

  export type CampAccessCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    userId: number
    sponsorId: number
    approverId: number
    campId: number
    _all: number
  }


  export type CampAccessAvgAggregateInputType = {
    id?: true
    userId?: true
    sponsorId?: true
    approverId?: true
    campId?: true
  }

  export type CampAccessSumAggregateInputType = {
    id?: true
    userId?: true
    sponsorId?: true
    approverId?: true
    campId?: true
  }

  export type CampAccessMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    userId?: true
    sponsorId?: true
    approverId?: true
    campId?: true
  }

  export type CampAccessMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    userId?: true
    sponsorId?: true
    approverId?: true
    campId?: true
  }

  export type CampAccessCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    userId?: true
    sponsorId?: true
    approverId?: true
    campId?: true
    _all?: true
  }

  export type CampAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampAccess to aggregate.
     */
    where?: CampAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampAccesses to fetch.
     */
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampAccesses
    **/
    _count?: true | CampAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampAccessMaxAggregateInputType
  }

  export type GetCampAccessAggregateType<T extends CampAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateCampAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampAccess[P]>
      : GetScalarType<T[P], AggregateCampAccess[P]>
  }




  export type CampAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampAccessWhereInput
    orderBy?: CampAccessOrderByWithAggregationInput | CampAccessOrderByWithAggregationInput[]
    by: CampAccessScalarFieldEnum[] | CampAccessScalarFieldEnum
    having?: CampAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampAccessCountAggregateInputType | true
    _avg?: CampAccessAvgAggregateInputType
    _sum?: CampAccessSumAggregateInputType
    _min?: CampAccessMinAggregateInputType
    _max?: CampAccessMaxAggregateInputType
  }

  export type CampAccessGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    userId: number
    sponsorId: number
    approverId: number
    campId: number
    _count: CampAccessCountAggregateOutputType | null
    _avg: CampAccessAvgAggregateOutputType | null
    _sum: CampAccessSumAggregateOutputType | null
    _min: CampAccessMinAggregateOutputType | null
    _max: CampAccessMaxAggregateOutputType | null
  }

  type GetCampAccessGroupByPayload<T extends CampAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampAccessGroupByOutputType[P]>
            : GetScalarType<T[P], CampAccessGroupByOutputType[P]>
        }
      >
    >


  export type CampAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    sponsorId?: boolean
    approverId?: boolean
    campId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sponsoredBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
    camp?: boolean | CampDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campAccess"]>

  export type CampAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    sponsorId?: boolean
    approverId?: boolean
    campId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sponsoredBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
    camp?: boolean | CampDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campAccess"]>

  export type CampAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    sponsorId?: boolean
    approverId?: boolean
    campId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sponsoredBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
    camp?: boolean | CampDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campAccess"]>

  export type CampAccessSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    sponsorId?: boolean
    approverId?: boolean
    campId?: boolean
  }

  export type CampAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "userId" | "sponsorId" | "approverId" | "campId", ExtArgs["result"]["campAccess"]>
  export type CampAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sponsoredBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
    camp?: boolean | CampDefaultArgs<ExtArgs>
  }
  export type CampAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sponsoredBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
    camp?: boolean | CampDefaultArgs<ExtArgs>
  }
  export type CampAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sponsoredBy?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | UserDefaultArgs<ExtArgs>
    camp?: boolean | CampDefaultArgs<ExtArgs>
  }

  export type $CampAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sponsoredBy: Prisma.$UserPayload<ExtArgs>
      approvedBy: Prisma.$UserPayload<ExtArgs>
      camp: Prisma.$CampPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      userId: number
      sponsorId: number
      approverId: number
      campId: number
    }, ExtArgs["result"]["campAccess"]>
    composites: {}
  }

  type CampAccessGetPayload<S extends boolean | null | undefined | CampAccessDefaultArgs> = $Result.GetResult<Prisma.$CampAccessPayload, S>

  type CampAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampAccessCountAggregateInputType | true
    }

  export interface CampAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampAccess'], meta: { name: 'CampAccess' } }
    /**
     * Find zero or one CampAccess that matches the filter.
     * @param {CampAccessFindUniqueArgs} args - Arguments to find a CampAccess
     * @example
     * // Get one CampAccess
     * const campAccess = await prisma.campAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampAccessFindUniqueArgs>(args: SelectSubset<T, CampAccessFindUniqueArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampAccessFindUniqueOrThrowArgs} args - Arguments to find a CampAccess
     * @example
     * // Get one CampAccess
     * const campAccess = await prisma.campAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, CampAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAccessFindFirstArgs} args - Arguments to find a CampAccess
     * @example
     * // Get one CampAccess
     * const campAccess = await prisma.campAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampAccessFindFirstArgs>(args?: SelectSubset<T, CampAccessFindFirstArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAccessFindFirstOrThrowArgs} args - Arguments to find a CampAccess
     * @example
     * // Get one CampAccess
     * const campAccess = await prisma.campAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, CampAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampAccesses
     * const campAccesses = await prisma.campAccess.findMany()
     * 
     * // Get first 10 CampAccesses
     * const campAccesses = await prisma.campAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campAccessWithIdOnly = await prisma.campAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampAccessFindManyArgs>(args?: SelectSubset<T, CampAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampAccess.
     * @param {CampAccessCreateArgs} args - Arguments to create a CampAccess.
     * @example
     * // Create one CampAccess
     * const CampAccess = await prisma.campAccess.create({
     *   data: {
     *     // ... data to create a CampAccess
     *   }
     * })
     * 
     */
    create<T extends CampAccessCreateArgs>(args: SelectSubset<T, CampAccessCreateArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampAccesses.
     * @param {CampAccessCreateManyArgs} args - Arguments to create many CampAccesses.
     * @example
     * // Create many CampAccesses
     * const campAccess = await prisma.campAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampAccessCreateManyArgs>(args?: SelectSubset<T, CampAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampAccesses and returns the data saved in the database.
     * @param {CampAccessCreateManyAndReturnArgs} args - Arguments to create many CampAccesses.
     * @example
     * // Create many CampAccesses
     * const campAccess = await prisma.campAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampAccesses and only return the `id`
     * const campAccessWithIdOnly = await prisma.campAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, CampAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampAccess.
     * @param {CampAccessDeleteArgs} args - Arguments to delete one CampAccess.
     * @example
     * // Delete one CampAccess
     * const CampAccess = await prisma.campAccess.delete({
     *   where: {
     *     // ... filter to delete one CampAccess
     *   }
     * })
     * 
     */
    delete<T extends CampAccessDeleteArgs>(args: SelectSubset<T, CampAccessDeleteArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampAccess.
     * @param {CampAccessUpdateArgs} args - Arguments to update one CampAccess.
     * @example
     * // Update one CampAccess
     * const campAccess = await prisma.campAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampAccessUpdateArgs>(args: SelectSubset<T, CampAccessUpdateArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampAccesses.
     * @param {CampAccessDeleteManyArgs} args - Arguments to filter CampAccesses to delete.
     * @example
     * // Delete a few CampAccesses
     * const { count } = await prisma.campAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampAccessDeleteManyArgs>(args?: SelectSubset<T, CampAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampAccesses
     * const campAccess = await prisma.campAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampAccessUpdateManyArgs>(args: SelectSubset<T, CampAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampAccesses and returns the data updated in the database.
     * @param {CampAccessUpdateManyAndReturnArgs} args - Arguments to update many CampAccesses.
     * @example
     * // Update many CampAccesses
     * const campAccess = await prisma.campAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampAccesses and only return the `id`
     * const campAccessWithIdOnly = await prisma.campAccess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, CampAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampAccess.
     * @param {CampAccessUpsertArgs} args - Arguments to update or create a CampAccess.
     * @example
     * // Update or create a CampAccess
     * const campAccess = await prisma.campAccess.upsert({
     *   create: {
     *     // ... data to create a CampAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampAccess we want to update
     *   }
     * })
     */
    upsert<T extends CampAccessUpsertArgs>(args: SelectSubset<T, CampAccessUpsertArgs<ExtArgs>>): Prisma__CampAccessClient<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAccessCountArgs} args - Arguments to filter CampAccesses to count.
     * @example
     * // Count the number of CampAccesses
     * const count = await prisma.campAccess.count({
     *   where: {
     *     // ... the filter for the CampAccesses we want to count
     *   }
     * })
    **/
    count<T extends CampAccessCountArgs>(
      args?: Subset<T, CampAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampAccessAggregateArgs>(args: Subset<T, CampAccessAggregateArgs>): Prisma.PrismaPromise<GetCampAccessAggregateType<T>>

    /**
     * Group by CampAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampAccessGroupByArgs['orderBy'] }
        : { orderBy?: CampAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampAccess model
   */
  readonly fields: CampAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sponsoredBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    camp<T extends CampDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampDefaultArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampAccess model
   */
  interface CampAccessFieldRefs {
    readonly id: FieldRef<"CampAccess", 'Int'>
    readonly startDate: FieldRef<"CampAccess", 'DateTime'>
    readonly endDate: FieldRef<"CampAccess", 'DateTime'>
    readonly userId: FieldRef<"CampAccess", 'Int'>
    readonly sponsorId: FieldRef<"CampAccess", 'Int'>
    readonly approverId: FieldRef<"CampAccess", 'Int'>
    readonly campId: FieldRef<"CampAccess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CampAccess findUnique
   */
  export type CampAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * Filter, which CampAccess to fetch.
     */
    where: CampAccessWhereUniqueInput
  }

  /**
   * CampAccess findUniqueOrThrow
   */
  export type CampAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * Filter, which CampAccess to fetch.
     */
    where: CampAccessWhereUniqueInput
  }

  /**
   * CampAccess findFirst
   */
  export type CampAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * Filter, which CampAccess to fetch.
     */
    where?: CampAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampAccesses to fetch.
     */
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampAccesses.
     */
    cursor?: CampAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampAccesses.
     */
    distinct?: CampAccessScalarFieldEnum | CampAccessScalarFieldEnum[]
  }

  /**
   * CampAccess findFirstOrThrow
   */
  export type CampAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * Filter, which CampAccess to fetch.
     */
    where?: CampAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampAccesses to fetch.
     */
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampAccesses.
     */
    cursor?: CampAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampAccesses.
     */
    distinct?: CampAccessScalarFieldEnum | CampAccessScalarFieldEnum[]
  }

  /**
   * CampAccess findMany
   */
  export type CampAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * Filter, which CampAccesses to fetch.
     */
    where?: CampAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampAccesses to fetch.
     */
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampAccesses.
     */
    cursor?: CampAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampAccesses.
     */
    skip?: number
    distinct?: CampAccessScalarFieldEnum | CampAccessScalarFieldEnum[]
  }

  /**
   * CampAccess create
   */
  export type CampAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a CampAccess.
     */
    data: XOR<CampAccessCreateInput, CampAccessUncheckedCreateInput>
  }

  /**
   * CampAccess createMany
   */
  export type CampAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampAccesses.
     */
    data: CampAccessCreateManyInput | CampAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampAccess createManyAndReturn
   */
  export type CampAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * The data used to create many CampAccesses.
     */
    data: CampAccessCreateManyInput | CampAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampAccess update
   */
  export type CampAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a CampAccess.
     */
    data: XOR<CampAccessUpdateInput, CampAccessUncheckedUpdateInput>
    /**
     * Choose, which CampAccess to update.
     */
    where: CampAccessWhereUniqueInput
  }

  /**
   * CampAccess updateMany
   */
  export type CampAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampAccesses.
     */
    data: XOR<CampAccessUpdateManyMutationInput, CampAccessUncheckedUpdateManyInput>
    /**
     * Filter which CampAccesses to update
     */
    where?: CampAccessWhereInput
    /**
     * Limit how many CampAccesses to update.
     */
    limit?: number
  }

  /**
   * CampAccess updateManyAndReturn
   */
  export type CampAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * The data used to update CampAccesses.
     */
    data: XOR<CampAccessUpdateManyMutationInput, CampAccessUncheckedUpdateManyInput>
    /**
     * Filter which CampAccesses to update
     */
    where?: CampAccessWhereInput
    /**
     * Limit how many CampAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampAccess upsert
   */
  export type CampAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the CampAccess to update in case it exists.
     */
    where: CampAccessWhereUniqueInput
    /**
     * In case the CampAccess found by the `where` argument doesn't exist, create a new CampAccess with this data.
     */
    create: XOR<CampAccessCreateInput, CampAccessUncheckedCreateInput>
    /**
     * In case the CampAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampAccessUpdateInput, CampAccessUncheckedUpdateInput>
  }

  /**
   * CampAccess delete
   */
  export type CampAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    /**
     * Filter which CampAccess to delete.
     */
    where: CampAccessWhereUniqueInput
  }

  /**
   * CampAccess deleteMany
   */
  export type CampAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampAccesses to delete
     */
    where?: CampAccessWhereInput
    /**
     * Limit how many CampAccesses to delete.
     */
    limit?: number
  }

  /**
   * CampAccess without action
   */
  export type CampAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
  }


  /**
   * Model Camp
   */

  export type AggregateCamp = {
    _count: CampCountAggregateOutputType | null
    _avg: CampAvgAggregateOutputType | null
    _sum: CampSumAggregateOutputType | null
    _min: CampMinAggregateOutputType | null
    _max: CampMaxAggregateOutputType | null
  }

  export type CampAvgAggregateOutputType = {
    id: number | null
    postalCode: number | null
  }

  export type CampSumAggregateOutputType = {
    id: number | null
    postalCode: number | null
  }

  export type CampMinAggregateOutputType = {
    id: number | null
    name: string | null
    addressLine1: string | null
    addressLine2: string | null
    postalCode: number | null
    isDeleted: boolean | null
  }

  export type CampMaxAggregateOutputType = {
    id: number | null
    name: string | null
    addressLine1: string | null
    addressLine2: string | null
    postalCode: number | null
    isDeleted: boolean | null
  }

  export type CampCountAggregateOutputType = {
    id: number
    name: number
    addressLine1: number
    addressLine2: number
    postalCode: number
    isDeleted: number
    _all: number
  }


  export type CampAvgAggregateInputType = {
    id?: true
    postalCode?: true
  }

  export type CampSumAggregateInputType = {
    id?: true
    postalCode?: true
  }

  export type CampMinAggregateInputType = {
    id?: true
    name?: true
    addressLine1?: true
    addressLine2?: true
    postalCode?: true
    isDeleted?: true
  }

  export type CampMaxAggregateInputType = {
    id?: true
    name?: true
    addressLine1?: true
    addressLine2?: true
    postalCode?: true
    isDeleted?: true
  }

  export type CampCountAggregateInputType = {
    id?: true
    name?: true
    addressLine1?: true
    addressLine2?: true
    postalCode?: true
    isDeleted?: true
    _all?: true
  }

  export type CampAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Camp to aggregate.
     */
    where?: CampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Camps to fetch.
     */
    orderBy?: CampOrderByWithRelationInput | CampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Camps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Camps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Camps
    **/
    _count?: true | CampCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampMaxAggregateInputType
  }

  export type GetCampAggregateType<T extends CampAggregateArgs> = {
        [P in keyof T & keyof AggregateCamp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCamp[P]>
      : GetScalarType<T[P], AggregateCamp[P]>
  }




  export type CampGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampWhereInput
    orderBy?: CampOrderByWithAggregationInput | CampOrderByWithAggregationInput[]
    by: CampScalarFieldEnum[] | CampScalarFieldEnum
    having?: CampScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampCountAggregateInputType | true
    _avg?: CampAvgAggregateInputType
    _sum?: CampSumAggregateInputType
    _min?: CampMinAggregateInputType
    _max?: CampMaxAggregateInputType
  }

  export type CampGroupByOutputType = {
    id: number
    name: string
    addressLine1: string
    addressLine2: string
    postalCode: number
    isDeleted: boolean
    _count: CampCountAggregateOutputType | null
    _avg: CampAvgAggregateOutputType | null
    _sum: CampSumAggregateOutputType | null
    _min: CampMinAggregateOutputType | null
    _max: CampMaxAggregateOutputType | null
  }

  type GetCampGroupByPayload<T extends CampGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampGroupByOutputType[P]>
            : GetScalarType<T[P], CampGroupByOutputType[P]>
        }
      >
    >


  export type CampSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postalCode?: boolean
    isDeleted?: boolean
    accesses?: boolean | Camp$accessesArgs<ExtArgs>
    _count?: boolean | CampCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["camp"]>

  export type CampSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postalCode?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["camp"]>

  export type CampSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postalCode?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["camp"]>

  export type CampSelectScalar = {
    id?: boolean
    name?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    postalCode?: boolean
    isDeleted?: boolean
  }

  export type CampOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "addressLine1" | "addressLine2" | "postalCode" | "isDeleted", ExtArgs["result"]["camp"]>
  export type CampInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesses?: boolean | Camp$accessesArgs<ExtArgs>
    _count?: boolean | CampCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Camp"
    objects: {
      accesses: Prisma.$CampAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      addressLine1: string
      addressLine2: string
      postalCode: number
      isDeleted: boolean
    }, ExtArgs["result"]["camp"]>
    composites: {}
  }

  type CampGetPayload<S extends boolean | null | undefined | CampDefaultArgs> = $Result.GetResult<Prisma.$CampPayload, S>

  type CampCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampCountAggregateInputType | true
    }

  export interface CampDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Camp'], meta: { name: 'Camp' } }
    /**
     * Find zero or one Camp that matches the filter.
     * @param {CampFindUniqueArgs} args - Arguments to find a Camp
     * @example
     * // Get one Camp
     * const camp = await prisma.camp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampFindUniqueArgs>(args: SelectSubset<T, CampFindUniqueArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Camp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampFindUniqueOrThrowArgs} args - Arguments to find a Camp
     * @example
     * // Get one Camp
     * const camp = await prisma.camp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampFindUniqueOrThrowArgs>(args: SelectSubset<T, CampFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Camp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampFindFirstArgs} args - Arguments to find a Camp
     * @example
     * // Get one Camp
     * const camp = await prisma.camp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampFindFirstArgs>(args?: SelectSubset<T, CampFindFirstArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Camp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampFindFirstOrThrowArgs} args - Arguments to find a Camp
     * @example
     * // Get one Camp
     * const camp = await prisma.camp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampFindFirstOrThrowArgs>(args?: SelectSubset<T, CampFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Camps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Camps
     * const camps = await prisma.camp.findMany()
     * 
     * // Get first 10 Camps
     * const camps = await prisma.camp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campWithIdOnly = await prisma.camp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampFindManyArgs>(args?: SelectSubset<T, CampFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Camp.
     * @param {CampCreateArgs} args - Arguments to create a Camp.
     * @example
     * // Create one Camp
     * const Camp = await prisma.camp.create({
     *   data: {
     *     // ... data to create a Camp
     *   }
     * })
     * 
     */
    create<T extends CampCreateArgs>(args: SelectSubset<T, CampCreateArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Camps.
     * @param {CampCreateManyArgs} args - Arguments to create many Camps.
     * @example
     * // Create many Camps
     * const camp = await prisma.camp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampCreateManyArgs>(args?: SelectSubset<T, CampCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Camps and returns the data saved in the database.
     * @param {CampCreateManyAndReturnArgs} args - Arguments to create many Camps.
     * @example
     * // Create many Camps
     * const camp = await prisma.camp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Camps and only return the `id`
     * const campWithIdOnly = await prisma.camp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampCreateManyAndReturnArgs>(args?: SelectSubset<T, CampCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Camp.
     * @param {CampDeleteArgs} args - Arguments to delete one Camp.
     * @example
     * // Delete one Camp
     * const Camp = await prisma.camp.delete({
     *   where: {
     *     // ... filter to delete one Camp
     *   }
     * })
     * 
     */
    delete<T extends CampDeleteArgs>(args: SelectSubset<T, CampDeleteArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Camp.
     * @param {CampUpdateArgs} args - Arguments to update one Camp.
     * @example
     * // Update one Camp
     * const camp = await prisma.camp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampUpdateArgs>(args: SelectSubset<T, CampUpdateArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Camps.
     * @param {CampDeleteManyArgs} args - Arguments to filter Camps to delete.
     * @example
     * // Delete a few Camps
     * const { count } = await prisma.camp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampDeleteManyArgs>(args?: SelectSubset<T, CampDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Camps
     * const camp = await prisma.camp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampUpdateManyArgs>(args: SelectSubset<T, CampUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camps and returns the data updated in the database.
     * @param {CampUpdateManyAndReturnArgs} args - Arguments to update many Camps.
     * @example
     * // Update many Camps
     * const camp = await prisma.camp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Camps and only return the `id`
     * const campWithIdOnly = await prisma.camp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampUpdateManyAndReturnArgs>(args: SelectSubset<T, CampUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Camp.
     * @param {CampUpsertArgs} args - Arguments to update or create a Camp.
     * @example
     * // Update or create a Camp
     * const camp = await prisma.camp.upsert({
     *   create: {
     *     // ... data to create a Camp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Camp we want to update
     *   }
     * })
     */
    upsert<T extends CampUpsertArgs>(args: SelectSubset<T, CampUpsertArgs<ExtArgs>>): Prisma__CampClient<$Result.GetResult<Prisma.$CampPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Camps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampCountArgs} args - Arguments to filter Camps to count.
     * @example
     * // Count the number of Camps
     * const count = await prisma.camp.count({
     *   where: {
     *     // ... the filter for the Camps we want to count
     *   }
     * })
    **/
    count<T extends CampCountArgs>(
      args?: Subset<T, CampCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Camp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampAggregateArgs>(args: Subset<T, CampAggregateArgs>): Prisma.PrismaPromise<GetCampAggregateType<T>>

    /**
     * Group by Camp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampGroupByArgs['orderBy'] }
        : { orderBy?: CampGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Camp model
   */
  readonly fields: CampFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Camp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accesses<T extends Camp$accessesArgs<ExtArgs> = {}>(args?: Subset<T, Camp$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Camp model
   */
  interface CampFieldRefs {
    readonly id: FieldRef<"Camp", 'Int'>
    readonly name: FieldRef<"Camp", 'String'>
    readonly addressLine1: FieldRef<"Camp", 'String'>
    readonly addressLine2: FieldRef<"Camp", 'String'>
    readonly postalCode: FieldRef<"Camp", 'Int'>
    readonly isDeleted: FieldRef<"Camp", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Camp findUnique
   */
  export type CampFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * Filter, which Camp to fetch.
     */
    where: CampWhereUniqueInput
  }

  /**
   * Camp findUniqueOrThrow
   */
  export type CampFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * Filter, which Camp to fetch.
     */
    where: CampWhereUniqueInput
  }

  /**
   * Camp findFirst
   */
  export type CampFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * Filter, which Camp to fetch.
     */
    where?: CampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Camps to fetch.
     */
    orderBy?: CampOrderByWithRelationInput | CampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Camps.
     */
    cursor?: CampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Camps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Camps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Camps.
     */
    distinct?: CampScalarFieldEnum | CampScalarFieldEnum[]
  }

  /**
   * Camp findFirstOrThrow
   */
  export type CampFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * Filter, which Camp to fetch.
     */
    where?: CampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Camps to fetch.
     */
    orderBy?: CampOrderByWithRelationInput | CampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Camps.
     */
    cursor?: CampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Camps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Camps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Camps.
     */
    distinct?: CampScalarFieldEnum | CampScalarFieldEnum[]
  }

  /**
   * Camp findMany
   */
  export type CampFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * Filter, which Camps to fetch.
     */
    where?: CampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Camps to fetch.
     */
    orderBy?: CampOrderByWithRelationInput | CampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Camps.
     */
    cursor?: CampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Camps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Camps.
     */
    skip?: number
    distinct?: CampScalarFieldEnum | CampScalarFieldEnum[]
  }

  /**
   * Camp create
   */
  export type CampCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * The data needed to create a Camp.
     */
    data: XOR<CampCreateInput, CampUncheckedCreateInput>
  }

  /**
   * Camp createMany
   */
  export type CampCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Camps.
     */
    data: CampCreateManyInput | CampCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Camp createManyAndReturn
   */
  export type CampCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * The data used to create many Camps.
     */
    data: CampCreateManyInput | CampCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Camp update
   */
  export type CampUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * The data needed to update a Camp.
     */
    data: XOR<CampUpdateInput, CampUncheckedUpdateInput>
    /**
     * Choose, which Camp to update.
     */
    where: CampWhereUniqueInput
  }

  /**
   * Camp updateMany
   */
  export type CampUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Camps.
     */
    data: XOR<CampUpdateManyMutationInput, CampUncheckedUpdateManyInput>
    /**
     * Filter which Camps to update
     */
    where?: CampWhereInput
    /**
     * Limit how many Camps to update.
     */
    limit?: number
  }

  /**
   * Camp updateManyAndReturn
   */
  export type CampUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * The data used to update Camps.
     */
    data: XOR<CampUpdateManyMutationInput, CampUncheckedUpdateManyInput>
    /**
     * Filter which Camps to update
     */
    where?: CampWhereInput
    /**
     * Limit how many Camps to update.
     */
    limit?: number
  }

  /**
   * Camp upsert
   */
  export type CampUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * The filter to search for the Camp to update in case it exists.
     */
    where: CampWhereUniqueInput
    /**
     * In case the Camp found by the `where` argument doesn't exist, create a new Camp with this data.
     */
    create: XOR<CampCreateInput, CampUncheckedCreateInput>
    /**
     * In case the Camp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampUpdateInput, CampUncheckedUpdateInput>
  }

  /**
   * Camp delete
   */
  export type CampDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
    /**
     * Filter which Camp to delete.
     */
    where: CampWhereUniqueInput
  }

  /**
   * Camp deleteMany
   */
  export type CampDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Camps to delete
     */
    where?: CampWhereInput
    /**
     * Limit how many Camps to delete.
     */
    limit?: number
  }

  /**
   * Camp.accesses
   */
  export type Camp$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampAccess
     */
    select?: CampAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampAccess
     */
    omit?: CampAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampAccessInclude<ExtArgs> | null
    where?: CampAccessWhereInput
    orderBy?: CampAccessOrderByWithRelationInput | CampAccessOrderByWithRelationInput[]
    cursor?: CampAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampAccessScalarFieldEnum | CampAccessScalarFieldEnum[]
  }

  /**
   * Camp without action
   */
  export type CampDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Camp
     */
    select?: CampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Camp
     */
    omit?: CampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampInclude<ExtArgs> | null
  }


  /**
   * Model Query
   */

  export type AggregateQuery = {
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  export type QueryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    assigneeId: number | null
  }

  export type QuerySumAggregateOutputType = {
    id: number | null
    userId: number | null
    assigneeId: number | null
  }

  export type QueryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    assigneeId: number | null
    content: string | null
    status: $Enums.Status | null
  }

  export type QueryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    assigneeId: number | null
    content: string | null
    status: $Enums.Status | null
  }

  export type QueryCountAggregateOutputType = {
    id: number
    userId: number
    assigneeId: number
    content: number
    status: number
    _all: number
  }


  export type QueryAvgAggregateInputType = {
    id?: true
    userId?: true
    assigneeId?: true
  }

  export type QuerySumAggregateInputType = {
    id?: true
    userId?: true
    assigneeId?: true
  }

  export type QueryMinAggregateInputType = {
    id?: true
    userId?: true
    assigneeId?: true
    content?: true
    status?: true
  }

  export type QueryMaxAggregateInputType = {
    id?: true
    userId?: true
    assigneeId?: true
    content?: true
    status?: true
  }

  export type QueryCountAggregateInputType = {
    id?: true
    userId?: true
    assigneeId?: true
    content?: true
    status?: true
    _all?: true
  }

  export type QueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Query to aggregate.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Queries
    **/
    _count?: true | QueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryMaxAggregateInputType
  }

  export type GetQueryAggregateType<T extends QueryAggregateArgs> = {
        [P in keyof T & keyof AggregateQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuery[P]>
      : GetScalarType<T[P], AggregateQuery[P]>
  }




  export type QueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryWhereInput
    orderBy?: QueryOrderByWithAggregationInput | QueryOrderByWithAggregationInput[]
    by: QueryScalarFieldEnum[] | QueryScalarFieldEnum
    having?: QueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryCountAggregateInputType | true
    _avg?: QueryAvgAggregateInputType
    _sum?: QuerySumAggregateInputType
    _min?: QueryMinAggregateInputType
    _max?: QueryMaxAggregateInputType
  }

  export type QueryGroupByOutputType = {
    id: number
    userId: number
    assigneeId: number | null
    content: string
    status: $Enums.Status
    _count: QueryCountAggregateOutputType | null
    _avg: QueryAvgAggregateOutputType | null
    _sum: QuerySumAggregateOutputType | null
    _min: QueryMinAggregateOutputType | null
    _max: QueryMaxAggregateOutputType | null
  }

  type GetQueryGroupByPayload<T extends QueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryGroupByOutputType[P]>
            : GetScalarType<T[P], QueryGroupByOutputType[P]>
        }
      >
    >


  export type QuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assigneeId?: boolean
    content?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Query$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["query"]>

  export type QuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assigneeId?: boolean
    content?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Query$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["query"]>

  export type QuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assigneeId?: boolean
    content?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Query$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["query"]>

  export type QuerySelectScalar = {
    id?: boolean
    userId?: boolean
    assigneeId?: boolean
    content?: boolean
    status?: boolean
  }

  export type QueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "assigneeId" | "content" | "status", ExtArgs["result"]["query"]>
  export type QueryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Query$assignedToArgs<ExtArgs>
  }
  export type QueryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Query$assignedToArgs<ExtArgs>
  }
  export type QueryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | Query$assignedToArgs<ExtArgs>
  }

  export type $QueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Query"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      assigneeId: number | null
      content: string
      status: $Enums.Status
    }, ExtArgs["result"]["query"]>
    composites: {}
  }

  type QueryGetPayload<S extends boolean | null | undefined | QueryDefaultArgs> = $Result.GetResult<Prisma.$QueryPayload, S>

  type QueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueryCountAggregateInputType | true
    }

  export interface QueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Query'], meta: { name: 'Query' } }
    /**
     * Find zero or one Query that matches the filter.
     * @param {QueryFindUniqueArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueryFindUniqueArgs>(args: SelectSubset<T, QueryFindUniqueArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Query that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueryFindUniqueOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueryFindUniqueOrThrowArgs>(args: SelectSubset<T, QueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueryFindFirstArgs>(args?: SelectSubset<T, QueryFindFirstArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Query that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindFirstOrThrowArgs} args - Arguments to find a Query
     * @example
     * // Get one Query
     * const query = await prisma.query.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueryFindFirstOrThrowArgs>(args?: SelectSubset<T, QueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Queries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Queries
     * const queries = await prisma.query.findMany()
     * 
     * // Get first 10 Queries
     * const queries = await prisma.query.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queryWithIdOnly = await prisma.query.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueryFindManyArgs>(args?: SelectSubset<T, QueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Query.
     * @param {QueryCreateArgs} args - Arguments to create a Query.
     * @example
     * // Create one Query
     * const Query = await prisma.query.create({
     *   data: {
     *     // ... data to create a Query
     *   }
     * })
     * 
     */
    create<T extends QueryCreateArgs>(args: SelectSubset<T, QueryCreateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Queries.
     * @param {QueryCreateManyArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueryCreateManyArgs>(args?: SelectSubset<T, QueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Queries and returns the data saved in the database.
     * @param {QueryCreateManyAndReturnArgs} args - Arguments to create many Queries.
     * @example
     * // Create many Queries
     * const query = await prisma.query.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueryCreateManyAndReturnArgs>(args?: SelectSubset<T, QueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Query.
     * @param {QueryDeleteArgs} args - Arguments to delete one Query.
     * @example
     * // Delete one Query
     * const Query = await prisma.query.delete({
     *   where: {
     *     // ... filter to delete one Query
     *   }
     * })
     * 
     */
    delete<T extends QueryDeleteArgs>(args: SelectSubset<T, QueryDeleteArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Query.
     * @param {QueryUpdateArgs} args - Arguments to update one Query.
     * @example
     * // Update one Query
     * const query = await prisma.query.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueryUpdateArgs>(args: SelectSubset<T, QueryUpdateArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Queries.
     * @param {QueryDeleteManyArgs} args - Arguments to filter Queries to delete.
     * @example
     * // Delete a few Queries
     * const { count } = await prisma.query.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueryDeleteManyArgs>(args?: SelectSubset<T, QueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueryUpdateManyArgs>(args: SelectSubset<T, QueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Queries and returns the data updated in the database.
     * @param {QueryUpdateManyAndReturnArgs} args - Arguments to update many Queries.
     * @example
     * // Update many Queries
     * const query = await prisma.query.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Queries and only return the `id`
     * const queryWithIdOnly = await prisma.query.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QueryUpdateManyAndReturnArgs>(args: SelectSubset<T, QueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Query.
     * @param {QueryUpsertArgs} args - Arguments to update or create a Query.
     * @example
     * // Update or create a Query
     * const query = await prisma.query.upsert({
     *   create: {
     *     // ... data to create a Query
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Query we want to update
     *   }
     * })
     */
    upsert<T extends QueryUpsertArgs>(args: SelectSubset<T, QueryUpsertArgs<ExtArgs>>): Prisma__QueryClient<$Result.GetResult<Prisma.$QueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryCountArgs} args - Arguments to filter Queries to count.
     * @example
     * // Count the number of Queries
     * const count = await prisma.query.count({
     *   where: {
     *     // ... the filter for the Queries we want to count
     *   }
     * })
    **/
    count<T extends QueryCountArgs>(
      args?: Subset<T, QueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QueryAggregateArgs>(args: Subset<T, QueryAggregateArgs>): Prisma.PrismaPromise<GetQueryAggregateType<T>>

    /**
     * Group by Query.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryGroupByArgs['orderBy'] }
        : { orderBy?: QueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Query model
   */
  readonly fields: QueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Query.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Query$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Query$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Query model
   */
  interface QueryFieldRefs {
    readonly id: FieldRef<"Query", 'Int'>
    readonly userId: FieldRef<"Query", 'Int'>
    readonly assigneeId: FieldRef<"Query", 'Int'>
    readonly content: FieldRef<"Query", 'String'>
    readonly status: FieldRef<"Query", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Query findUnique
   */
  export type QueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findUniqueOrThrow
   */
  export type QueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query findFirst
   */
  export type QueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findFirstOrThrow
   */
  export type QueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Query to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Queries.
     */
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query findMany
   */
  export type QueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter, which Queries to fetch.
     */
    where?: QueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Queries to fetch.
     */
    orderBy?: QueryOrderByWithRelationInput | QueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Queries.
     */
    cursor?: QueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Queries.
     */
    skip?: number
    distinct?: QueryScalarFieldEnum | QueryScalarFieldEnum[]
  }

  /**
   * Query create
   */
  export type QueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * The data needed to create a Query.
     */
    data: XOR<QueryCreateInput, QueryUncheckedCreateInput>
  }

  /**
   * Query createMany
   */
  export type QueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Query createManyAndReturn
   */
  export type QueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to create many Queries.
     */
    data: QueryCreateManyInput | QueryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Query update
   */
  export type QueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * The data needed to update a Query.
     */
    data: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
    /**
     * Choose, which Query to update.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query updateMany
   */
  export type QueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
  }

  /**
   * Query updateManyAndReturn
   */
  export type QueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * The data used to update Queries.
     */
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyInput>
    /**
     * Filter which Queries to update
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Query upsert
   */
  export type QueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * The filter to search for the Query to update in case it exists.
     */
    where: QueryWhereUniqueInput
    /**
     * In case the Query found by the `where` argument doesn't exist, create a new Query with this data.
     */
    create: XOR<QueryCreateInput, QueryUncheckedCreateInput>
    /**
     * In case the Query was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryUpdateInput, QueryUncheckedUpdateInput>
  }

  /**
   * Query delete
   */
  export type QueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
    /**
     * Filter which Query to delete.
     */
    where: QueryWhereUniqueInput
  }

  /**
   * Query deleteMany
   */
  export type QueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Queries to delete
     */
    where?: QueryWhereInput
    /**
     * Limit how many Queries to delete.
     */
    limit?: number
  }

  /**
   * Query.assignedTo
   */
  export type Query$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Query without action
   */
  export type QueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Query
     */
    select?: QuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Query
     */
    omit?: QueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
    broughtOnChargeId: number | null
    disposalId: number | null
    modelId: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: number | null
    broughtOnChargeId: number | null
    disposalId: number | null
    modelId: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: number | null
    broughtOnChargeId: number | null
    disposalId: number | null
    modelId: number | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: number | null
    broughtOnChargeId: number | null
    disposalId: number | null
    modelId: number | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    broughtOnChargeId: number
    disposalId: number
    modelId: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
    broughtOnChargeId?: true
    disposalId?: true
    modelId?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
    broughtOnChargeId?: true
    disposalId?: true
    modelId?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    broughtOnChargeId?: true
    disposalId?: true
    modelId?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    broughtOnChargeId?: true
    disposalId?: true
    modelId?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    broughtOnChargeId?: true
    disposalId?: true
    modelId?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: number
    broughtOnChargeId: number
    disposalId: number | null
    modelId: number
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broughtOnChargeId?: boolean
    disposalId?: boolean
    modelId?: boolean
    broughtOnCharge?: boolean | EquipmentTransactionDefaultArgs<ExtArgs>
    movement?: boolean | Equipment$movementArgs<ExtArgs>
    disposal?: boolean | Equipment$disposalArgs<ExtArgs>
    model?: boolean | ModelDefaultArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broughtOnChargeId?: boolean
    disposalId?: boolean
    modelId?: boolean
    broughtOnCharge?: boolean | EquipmentTransactionDefaultArgs<ExtArgs>
    disposal?: boolean | Equipment$disposalArgs<ExtArgs>
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    broughtOnChargeId?: boolean
    disposalId?: boolean
    modelId?: boolean
    broughtOnCharge?: boolean | EquipmentTransactionDefaultArgs<ExtArgs>
    disposal?: boolean | Equipment$disposalArgs<ExtArgs>
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    broughtOnChargeId?: boolean
    disposalId?: boolean
    modelId?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "broughtOnChargeId" | "disposalId" | "modelId", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broughtOnCharge?: boolean | EquipmentTransactionDefaultArgs<ExtArgs>
    movement?: boolean | Equipment$movementArgs<ExtArgs>
    disposal?: boolean | Equipment$disposalArgs<ExtArgs>
    model?: boolean | ModelDefaultArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broughtOnCharge?: boolean | EquipmentTransactionDefaultArgs<ExtArgs>
    disposal?: boolean | Equipment$disposalArgs<ExtArgs>
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broughtOnCharge?: boolean | EquipmentTransactionDefaultArgs<ExtArgs>
    disposal?: boolean | Equipment$disposalArgs<ExtArgs>
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      broughtOnCharge: Prisma.$EquipmentTransactionPayload<ExtArgs>
      movement: Prisma.$EquipmentTransactionPayload<ExtArgs>[]
      disposal: Prisma.$EquipmentTransactionPayload<ExtArgs> | null
      model: Prisma.$ModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      broughtOnChargeId: number
      disposalId: number | null
      modelId: number
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    broughtOnCharge<T extends EquipmentTransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentTransactionDefaultArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movement<T extends Equipment$movementArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$movementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disposal<T extends Equipment$disposalArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$disposalArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'Int'>
    readonly broughtOnChargeId: FieldRef<"Equipment", 'Int'>
    readonly disposalId: FieldRef<"Equipment", 'Int'>
    readonly modelId: FieldRef<"Equipment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.movement
   */
  export type Equipment$movementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    where?: EquipmentTransactionWhereInput
    orderBy?: EquipmentTransactionOrderByWithRelationInput | EquipmentTransactionOrderByWithRelationInput[]
    cursor?: EquipmentTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentTransactionScalarFieldEnum | EquipmentTransactionScalarFieldEnum[]
  }

  /**
   * Equipment.disposal
   */
  export type Equipment$disposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    where?: EquipmentTransactionWhereInput
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentTransaction
   */

  export type AggregateEquipmentTransaction = {
    _count: EquipmentTransactionCountAggregateOutputType | null
    _avg: EquipmentTransactionAvgAggregateOutputType | null
    _sum: EquipmentTransactionSumAggregateOutputType | null
    _min: EquipmentTransactionMinAggregateOutputType | null
    _max: EquipmentTransactionMaxAggregateOutputType | null
  }

  export type EquipmentTransactionAvgAggregateOutputType = {
    id: number | null
    equipmentId: number | null
    userId: number | null
  }

  export type EquipmentTransactionSumAggregateOutputType = {
    id: number | null
    equipmentId: number | null
    userId: number | null
  }

  export type EquipmentTransactionMinAggregateOutputType = {
    id: number | null
    type: $Enums.EqTransactionType | null
    date: Date | null
    equipmentId: number | null
    userId: number | null
  }

  export type EquipmentTransactionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.EqTransactionType | null
    date: Date | null
    equipmentId: number | null
    userId: number | null
  }

  export type EquipmentTransactionCountAggregateOutputType = {
    id: number
    type: number
    date: number
    equipmentId: number
    userId: number
    _all: number
  }


  export type EquipmentTransactionAvgAggregateInputType = {
    id?: true
    equipmentId?: true
    userId?: true
  }

  export type EquipmentTransactionSumAggregateInputType = {
    id?: true
    equipmentId?: true
    userId?: true
  }

  export type EquipmentTransactionMinAggregateInputType = {
    id?: true
    type?: true
    date?: true
    equipmentId?: true
    userId?: true
  }

  export type EquipmentTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    date?: true
    equipmentId?: true
    userId?: true
  }

  export type EquipmentTransactionCountAggregateInputType = {
    id?: true
    type?: true
    date?: true
    equipmentId?: true
    userId?: true
    _all?: true
  }

  export type EquipmentTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentTransaction to aggregate.
     */
    where?: EquipmentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTransactions to fetch.
     */
    orderBy?: EquipmentTransactionOrderByWithRelationInput | EquipmentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentTransactions
    **/
    _count?: true | EquipmentTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentTransactionMaxAggregateInputType
  }

  export type GetEquipmentTransactionAggregateType<T extends EquipmentTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentTransaction[P]>
      : GetScalarType<T[P], AggregateEquipmentTransaction[P]>
  }




  export type EquipmentTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentTransactionWhereInput
    orderBy?: EquipmentTransactionOrderByWithAggregationInput | EquipmentTransactionOrderByWithAggregationInput[]
    by: EquipmentTransactionScalarFieldEnum[] | EquipmentTransactionScalarFieldEnum
    having?: EquipmentTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentTransactionCountAggregateInputType | true
    _avg?: EquipmentTransactionAvgAggregateInputType
    _sum?: EquipmentTransactionSumAggregateInputType
    _min?: EquipmentTransactionMinAggregateInputType
    _max?: EquipmentTransactionMaxAggregateInputType
  }

  export type EquipmentTransactionGroupByOutputType = {
    id: number
    type: $Enums.EqTransactionType
    date: Date
    equipmentId: number
    userId: number
    _count: EquipmentTransactionCountAggregateOutputType | null
    _avg: EquipmentTransactionAvgAggregateOutputType | null
    _sum: EquipmentTransactionSumAggregateOutputType | null
    _min: EquipmentTransactionMinAggregateOutputType | null
    _max: EquipmentTransactionMaxAggregateOutputType | null
  }

  type GetEquipmentTransactionGroupByPayload<T extends EquipmentTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentTransactionGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    date?: boolean
    equipmentId?: boolean
    userId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    broughtOnChargeFor?: boolean | EquipmentTransaction$broughtOnChargeForArgs<ExtArgs>
    disposalFor?: boolean | EquipmentTransaction$disposalForArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentTransaction"]>

  export type EquipmentTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    date?: boolean
    equipmentId?: boolean
    userId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentTransaction"]>

  export type EquipmentTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    date?: boolean
    equipmentId?: boolean
    userId?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentTransaction"]>

  export type EquipmentTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    date?: boolean
    equipmentId?: boolean
    userId?: boolean
  }

  export type EquipmentTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "date" | "equipmentId" | "userId", ExtArgs["result"]["equipmentTransaction"]>
  export type EquipmentTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
    broughtOnChargeFor?: boolean | EquipmentTransaction$broughtOnChargeForArgs<ExtArgs>
    disposalFor?: boolean | EquipmentTransaction$disposalForArgs<ExtArgs>
  }
  export type EquipmentTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EquipmentTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    performedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EquipmentTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentTransaction"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      performedBy: Prisma.$UserPayload<ExtArgs>
      broughtOnChargeFor: Prisma.$EquipmentPayload<ExtArgs> | null
      disposalFor: Prisma.$EquipmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.EqTransactionType
      date: Date
      equipmentId: number
      userId: number
    }, ExtArgs["result"]["equipmentTransaction"]>
    composites: {}
  }

  type EquipmentTransactionGetPayload<S extends boolean | null | undefined | EquipmentTransactionDefaultArgs> = $Result.GetResult<Prisma.$EquipmentTransactionPayload, S>

  type EquipmentTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentTransactionCountAggregateInputType | true
    }

  export interface EquipmentTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentTransaction'], meta: { name: 'EquipmentTransaction' } }
    /**
     * Find zero or one EquipmentTransaction that matches the filter.
     * @param {EquipmentTransactionFindUniqueArgs} args - Arguments to find a EquipmentTransaction
     * @example
     * // Get one EquipmentTransaction
     * const equipmentTransaction = await prisma.equipmentTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentTransactionFindUniqueArgs>(args: SelectSubset<T, EquipmentTransactionFindUniqueArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentTransactionFindUniqueOrThrowArgs} args - Arguments to find a EquipmentTransaction
     * @example
     * // Get one EquipmentTransaction
     * const equipmentTransaction = await prisma.equipmentTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTransactionFindFirstArgs} args - Arguments to find a EquipmentTransaction
     * @example
     * // Get one EquipmentTransaction
     * const equipmentTransaction = await prisma.equipmentTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentTransactionFindFirstArgs>(args?: SelectSubset<T, EquipmentTransactionFindFirstArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTransactionFindFirstOrThrowArgs} args - Arguments to find a EquipmentTransaction
     * @example
     * // Get one EquipmentTransaction
     * const equipmentTransaction = await prisma.equipmentTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentTransactions
     * const equipmentTransactions = await prisma.equipmentTransaction.findMany()
     * 
     * // Get first 10 EquipmentTransactions
     * const equipmentTransactions = await prisma.equipmentTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentTransactionWithIdOnly = await prisma.equipmentTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentTransactionFindManyArgs>(args?: SelectSubset<T, EquipmentTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentTransaction.
     * @param {EquipmentTransactionCreateArgs} args - Arguments to create a EquipmentTransaction.
     * @example
     * // Create one EquipmentTransaction
     * const EquipmentTransaction = await prisma.equipmentTransaction.create({
     *   data: {
     *     // ... data to create a EquipmentTransaction
     *   }
     * })
     * 
     */
    create<T extends EquipmentTransactionCreateArgs>(args: SelectSubset<T, EquipmentTransactionCreateArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentTransactions.
     * @param {EquipmentTransactionCreateManyArgs} args - Arguments to create many EquipmentTransactions.
     * @example
     * // Create many EquipmentTransactions
     * const equipmentTransaction = await prisma.equipmentTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentTransactionCreateManyArgs>(args?: SelectSubset<T, EquipmentTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentTransactions and returns the data saved in the database.
     * @param {EquipmentTransactionCreateManyAndReturnArgs} args - Arguments to create many EquipmentTransactions.
     * @example
     * // Create many EquipmentTransactions
     * const equipmentTransaction = await prisma.equipmentTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentTransactions and only return the `id`
     * const equipmentTransactionWithIdOnly = await prisma.equipmentTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentTransaction.
     * @param {EquipmentTransactionDeleteArgs} args - Arguments to delete one EquipmentTransaction.
     * @example
     * // Delete one EquipmentTransaction
     * const EquipmentTransaction = await prisma.equipmentTransaction.delete({
     *   where: {
     *     // ... filter to delete one EquipmentTransaction
     *   }
     * })
     * 
     */
    delete<T extends EquipmentTransactionDeleteArgs>(args: SelectSubset<T, EquipmentTransactionDeleteArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentTransaction.
     * @param {EquipmentTransactionUpdateArgs} args - Arguments to update one EquipmentTransaction.
     * @example
     * // Update one EquipmentTransaction
     * const equipmentTransaction = await prisma.equipmentTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentTransactionUpdateArgs>(args: SelectSubset<T, EquipmentTransactionUpdateArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentTransactions.
     * @param {EquipmentTransactionDeleteManyArgs} args - Arguments to filter EquipmentTransactions to delete.
     * @example
     * // Delete a few EquipmentTransactions
     * const { count } = await prisma.equipmentTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentTransactionDeleteManyArgs>(args?: SelectSubset<T, EquipmentTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentTransactions
     * const equipmentTransaction = await prisma.equipmentTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentTransactionUpdateManyArgs>(args: SelectSubset<T, EquipmentTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentTransactions and returns the data updated in the database.
     * @param {EquipmentTransactionUpdateManyAndReturnArgs} args - Arguments to update many EquipmentTransactions.
     * @example
     * // Update many EquipmentTransactions
     * const equipmentTransaction = await prisma.equipmentTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentTransactions and only return the `id`
     * const equipmentTransactionWithIdOnly = await prisma.equipmentTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentTransaction.
     * @param {EquipmentTransactionUpsertArgs} args - Arguments to update or create a EquipmentTransaction.
     * @example
     * // Update or create a EquipmentTransaction
     * const equipmentTransaction = await prisma.equipmentTransaction.upsert({
     *   create: {
     *     // ... data to create a EquipmentTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentTransaction we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentTransactionUpsertArgs>(args: SelectSubset<T, EquipmentTransactionUpsertArgs<ExtArgs>>): Prisma__EquipmentTransactionClient<$Result.GetResult<Prisma.$EquipmentTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTransactionCountArgs} args - Arguments to filter EquipmentTransactions to count.
     * @example
     * // Count the number of EquipmentTransactions
     * const count = await prisma.equipmentTransaction.count({
     *   where: {
     *     // ... the filter for the EquipmentTransactions we want to count
     *   }
     * })
    **/
    count<T extends EquipmentTransactionCountArgs>(
      args?: Subset<T, EquipmentTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentTransactionAggregateArgs>(args: Subset<T, EquipmentTransactionAggregateArgs>): Prisma.PrismaPromise<GetEquipmentTransactionAggregateType<T>>

    /**
     * Group by EquipmentTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentTransactionGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentTransaction model
   */
  readonly fields: EquipmentTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    performedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broughtOnChargeFor<T extends EquipmentTransaction$broughtOnChargeForArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentTransaction$broughtOnChargeForArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    disposalFor<T extends EquipmentTransaction$disposalForArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentTransaction$disposalForArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentTransaction model
   */
  interface EquipmentTransactionFieldRefs {
    readonly id: FieldRef<"EquipmentTransaction", 'Int'>
    readonly type: FieldRef<"EquipmentTransaction", 'EqTransactionType'>
    readonly date: FieldRef<"EquipmentTransaction", 'DateTime'>
    readonly equipmentId: FieldRef<"EquipmentTransaction", 'Int'>
    readonly userId: FieldRef<"EquipmentTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentTransaction findUnique
   */
  export type EquipmentTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentTransaction to fetch.
     */
    where: EquipmentTransactionWhereUniqueInput
  }

  /**
   * EquipmentTransaction findUniqueOrThrow
   */
  export type EquipmentTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentTransaction to fetch.
     */
    where: EquipmentTransactionWhereUniqueInput
  }

  /**
   * EquipmentTransaction findFirst
   */
  export type EquipmentTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentTransaction to fetch.
     */
    where?: EquipmentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTransactions to fetch.
     */
    orderBy?: EquipmentTransactionOrderByWithRelationInput | EquipmentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentTransactions.
     */
    cursor?: EquipmentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentTransactions.
     */
    distinct?: EquipmentTransactionScalarFieldEnum | EquipmentTransactionScalarFieldEnum[]
  }

  /**
   * EquipmentTransaction findFirstOrThrow
   */
  export type EquipmentTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentTransaction to fetch.
     */
    where?: EquipmentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTransactions to fetch.
     */
    orderBy?: EquipmentTransactionOrderByWithRelationInput | EquipmentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentTransactions.
     */
    cursor?: EquipmentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentTransactions.
     */
    distinct?: EquipmentTransactionScalarFieldEnum | EquipmentTransactionScalarFieldEnum[]
  }

  /**
   * EquipmentTransaction findMany
   */
  export type EquipmentTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentTransactions to fetch.
     */
    where?: EquipmentTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentTransactions to fetch.
     */
    orderBy?: EquipmentTransactionOrderByWithRelationInput | EquipmentTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentTransactions.
     */
    cursor?: EquipmentTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentTransactions.
     */
    skip?: number
    distinct?: EquipmentTransactionScalarFieldEnum | EquipmentTransactionScalarFieldEnum[]
  }

  /**
   * EquipmentTransaction create
   */
  export type EquipmentTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentTransaction.
     */
    data: XOR<EquipmentTransactionCreateInput, EquipmentTransactionUncheckedCreateInput>
  }

  /**
   * EquipmentTransaction createMany
   */
  export type EquipmentTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentTransactions.
     */
    data: EquipmentTransactionCreateManyInput | EquipmentTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentTransaction createManyAndReturn
   */
  export type EquipmentTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentTransactions.
     */
    data: EquipmentTransactionCreateManyInput | EquipmentTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentTransaction update
   */
  export type EquipmentTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentTransaction.
     */
    data: XOR<EquipmentTransactionUpdateInput, EquipmentTransactionUncheckedUpdateInput>
    /**
     * Choose, which EquipmentTransaction to update.
     */
    where: EquipmentTransactionWhereUniqueInput
  }

  /**
   * EquipmentTransaction updateMany
   */
  export type EquipmentTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentTransactions.
     */
    data: XOR<EquipmentTransactionUpdateManyMutationInput, EquipmentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentTransactions to update
     */
    where?: EquipmentTransactionWhereInput
    /**
     * Limit how many EquipmentTransactions to update.
     */
    limit?: number
  }

  /**
   * EquipmentTransaction updateManyAndReturn
   */
  export type EquipmentTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentTransactions.
     */
    data: XOR<EquipmentTransactionUpdateManyMutationInput, EquipmentTransactionUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentTransactions to update
     */
    where?: EquipmentTransactionWhereInput
    /**
     * Limit how many EquipmentTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentTransaction upsert
   */
  export type EquipmentTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentTransaction to update in case it exists.
     */
    where: EquipmentTransactionWhereUniqueInput
    /**
     * In case the EquipmentTransaction found by the `where` argument doesn't exist, create a new EquipmentTransaction with this data.
     */
    create: XOR<EquipmentTransactionCreateInput, EquipmentTransactionUncheckedCreateInput>
    /**
     * In case the EquipmentTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentTransactionUpdateInput, EquipmentTransactionUncheckedUpdateInput>
  }

  /**
   * EquipmentTransaction delete
   */
  export type EquipmentTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
    /**
     * Filter which EquipmentTransaction to delete.
     */
    where: EquipmentTransactionWhereUniqueInput
  }

  /**
   * EquipmentTransaction deleteMany
   */
  export type EquipmentTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentTransactions to delete
     */
    where?: EquipmentTransactionWhereInput
    /**
     * Limit how many EquipmentTransactions to delete.
     */
    limit?: number
  }

  /**
   * EquipmentTransaction.broughtOnChargeFor
   */
  export type EquipmentTransaction$broughtOnChargeForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * EquipmentTransaction.disposalFor
   */
  export type EquipmentTransaction$disposalForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * EquipmentTransaction without action
   */
  export type EquipmentTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentTransaction
     */
    select?: EquipmentTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentTransaction
     */
    omit?: EquipmentTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    id: number | null
  }

  export type ModelSumAggregateOutputType = {
    id: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    manufacturer: string | null
  }

  export type ModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    manufacturer: string | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    manufacturer: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    id?: true
  }

  export type ModelSumAggregateInputType = {
    id?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    manufacturer?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    manufacturer?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    manufacturer?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: number
    name: string
    description: string
    manufacturer: string
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    manufacturer?: boolean
    equipments?: boolean | Model$equipmentsArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    manufacturer?: boolean
  }, ExtArgs["result"]["model"]>

  export type ModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    manufacturer?: boolean
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    manufacturer?: boolean
  }

  export type ModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "manufacturer", ExtArgs["result"]["model"]>
  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | Model$equipmentsArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      manufacturer: string
    }, ExtArgs["result"]["model"]>
    composites: {}
  }

  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelFindUniqueArgs>(args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelFindFirstArgs>(args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelFindManyArgs>(args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
     */
    create<T extends ModelCreateArgs>(args: SelectSubset<T, ModelCreateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelCreateManyArgs>(args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
     */
    delete<T extends ModelDeleteArgs>(args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelUpdateArgs>(args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelDeleteManyArgs>(args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelUpdateManyArgs>(args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
     */
    upsert<T extends ModelUpsertArgs>(args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipments<T extends Model$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Model$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Model model
   */
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'Int'>
    readonly name: FieldRef<"Model", 'String'>
    readonly description: FieldRef<"Model", 'String'>
    readonly manufacturer: FieldRef<"Model", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }

  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model createManyAndReturn
   */
  export type ModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model updateManyAndReturn
   */
  export type ModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }

  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Model.equipments
   */
  export type Model$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    contact: 'contact',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    userId: 'userId',
    branchId: 'branchId',
    isActive: 'isActive'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isDeleted: 'isDeleted'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const CampAccessScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    userId: 'userId',
    sponsorId: 'sponsorId',
    approverId: 'approverId',
    campId: 'campId'
  };

  export type CampAccessScalarFieldEnum = (typeof CampAccessScalarFieldEnum)[keyof typeof CampAccessScalarFieldEnum]


  export const CampScalarFieldEnum: {
    id: 'id',
    name: 'name',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    postalCode: 'postalCode',
    isDeleted: 'isDeleted'
  };

  export type CampScalarFieldEnum = (typeof CampScalarFieldEnum)[keyof typeof CampScalarFieldEnum]


  export const QueryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    assigneeId: 'assigneeId',
    content: 'content',
    status: 'status'
  };

  export type QueryScalarFieldEnum = (typeof QueryScalarFieldEnum)[keyof typeof QueryScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    broughtOnChargeId: 'broughtOnChargeId',
    disposalId: 'disposalId',
    modelId: 'modelId'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const EquipmentTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    date: 'date',
    equipmentId: 'equipmentId',
    userId: 'userId'
  };

  export type EquipmentTransactionScalarFieldEnum = (typeof EquipmentTransactionScalarFieldEnum)[keyof typeof EquipmentTransactionScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    manufacturer: 'manufacturer'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'EqTransactionType'
   */
  export type EnumEqTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EqTransactionType'>
    


  /**
   * Reference to a field of type 'EqTransactionType[]'
   */
  export type ListEnumEqTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EqTransactionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    contact?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    appointments?: AppointmentListRelationFilter
    campAccesses?: CampAccessListRelationFilter
    sponsoredCampAccesses?: CampAccessListRelationFilter
    approvedCampAccesses?: CampAccessListRelationFilter
    queries?: QueryListRelationFilter
    assignedQueries?: QueryListRelationFilter
    equipmentTransactions?: EquipmentTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    campAccesses?: CampAccessOrderByRelationAggregateInput
    sponsoredCampAccesses?: CampAccessOrderByRelationAggregateInput
    approvedCampAccesses?: CampAccessOrderByRelationAggregateInput
    queries?: QueryOrderByRelationAggregateInput
    assignedQueries?: QueryOrderByRelationAggregateInput
    equipmentTransactions?: EquipmentTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contact?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    appointments?: AppointmentListRelationFilter
    campAccesses?: CampAccessListRelationFilter
    sponsoredCampAccesses?: CampAccessListRelationFilter
    approvedCampAccesses?: CampAccessListRelationFilter
    queries?: QueryListRelationFilter
    assignedQueries?: QueryListRelationFilter
    equipmentTransactions?: EquipmentTransactionListRelationFilter
  }, "id" | "contact" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    contact?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    title?: StringFilter<"Appointment"> | string
    startDate?: DateTimeFilter<"Appointment"> | Date | string
    endDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    userId?: IntFilter<"Appointment"> | number
    branchId?: IntFilter<"Appointment"> | number
    isActive?: BoolNullableFilter<"Appointment"> | boolean | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    title?: StringFilter<"Appointment"> | string
    startDate?: DateTimeFilter<"Appointment"> | Date | string
    endDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    userId?: IntFilter<"Appointment"> | number
    branchId?: IntFilter<"Appointment"> | number
    isActive?: BoolNullableFilter<"Appointment"> | boolean | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    title?: StringWithAggregatesFilter<"Appointment"> | string
    startDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Appointment"> | number
    branchId?: IntWithAggregatesFilter<"Appointment"> | number
    isActive?: BoolNullableWithAggregatesFilter<"Appointment"> | boolean | null
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: IntFilter<"Branch"> | number
    name?: StringFilter<"Branch"> | string
    isDeleted?: BoolFilter<"Branch"> | boolean
    members?: AppointmentListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    members?: AppointmentOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    isDeleted?: BoolFilter<"Branch"> | boolean
    members?: AppointmentListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Branch"> | number
    name?: StringWithAggregatesFilter<"Branch"> | string
    isDeleted?: BoolWithAggregatesFilter<"Branch"> | boolean
  }

  export type CampAccessWhereInput = {
    AND?: CampAccessWhereInput | CampAccessWhereInput[]
    OR?: CampAccessWhereInput[]
    NOT?: CampAccessWhereInput | CampAccessWhereInput[]
    id?: IntFilter<"CampAccess"> | number
    startDate?: DateTimeFilter<"CampAccess"> | Date | string
    endDate?: DateTimeFilter<"CampAccess"> | Date | string
    userId?: IntFilter<"CampAccess"> | number
    sponsorId?: IntFilter<"CampAccess"> | number
    approverId?: IntFilter<"CampAccess"> | number
    campId?: IntFilter<"CampAccess"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sponsoredBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    camp?: XOR<CampScalarRelationFilter, CampWhereInput>
  }

  export type CampAccessOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    sponsorId?: SortOrder
    approverId?: SortOrder
    campId?: SortOrder
    user?: UserOrderByWithRelationInput
    sponsoredBy?: UserOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
    camp?: CampOrderByWithRelationInput
  }

  export type CampAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampAccessWhereInput | CampAccessWhereInput[]
    OR?: CampAccessWhereInput[]
    NOT?: CampAccessWhereInput | CampAccessWhereInput[]
    startDate?: DateTimeFilter<"CampAccess"> | Date | string
    endDate?: DateTimeFilter<"CampAccess"> | Date | string
    userId?: IntFilter<"CampAccess"> | number
    sponsorId?: IntFilter<"CampAccess"> | number
    approverId?: IntFilter<"CampAccess"> | number
    campId?: IntFilter<"CampAccess"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sponsoredBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    camp?: XOR<CampScalarRelationFilter, CampWhereInput>
  }, "id">

  export type CampAccessOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    sponsorId?: SortOrder
    approverId?: SortOrder
    campId?: SortOrder
    _count?: CampAccessCountOrderByAggregateInput
    _avg?: CampAccessAvgOrderByAggregateInput
    _max?: CampAccessMaxOrderByAggregateInput
    _min?: CampAccessMinOrderByAggregateInput
    _sum?: CampAccessSumOrderByAggregateInput
  }

  export type CampAccessScalarWhereWithAggregatesInput = {
    AND?: CampAccessScalarWhereWithAggregatesInput | CampAccessScalarWhereWithAggregatesInput[]
    OR?: CampAccessScalarWhereWithAggregatesInput[]
    NOT?: CampAccessScalarWhereWithAggregatesInput | CampAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CampAccess"> | number
    startDate?: DateTimeWithAggregatesFilter<"CampAccess"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"CampAccess"> | Date | string
    userId?: IntWithAggregatesFilter<"CampAccess"> | number
    sponsorId?: IntWithAggregatesFilter<"CampAccess"> | number
    approverId?: IntWithAggregatesFilter<"CampAccess"> | number
    campId?: IntWithAggregatesFilter<"CampAccess"> | number
  }

  export type CampWhereInput = {
    AND?: CampWhereInput | CampWhereInput[]
    OR?: CampWhereInput[]
    NOT?: CampWhereInput | CampWhereInput[]
    id?: IntFilter<"Camp"> | number
    name?: StringFilter<"Camp"> | string
    addressLine1?: StringFilter<"Camp"> | string
    addressLine2?: StringFilter<"Camp"> | string
    postalCode?: IntFilter<"Camp"> | number
    isDeleted?: BoolFilter<"Camp"> | boolean
    accesses?: CampAccessListRelationFilter
  }

  export type CampOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postalCode?: SortOrder
    isDeleted?: SortOrder
    accesses?: CampAccessOrderByRelationAggregateInput
  }

  export type CampWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampWhereInput | CampWhereInput[]
    OR?: CampWhereInput[]
    NOT?: CampWhereInput | CampWhereInput[]
    name?: StringFilter<"Camp"> | string
    addressLine1?: StringFilter<"Camp"> | string
    addressLine2?: StringFilter<"Camp"> | string
    postalCode?: IntFilter<"Camp"> | number
    isDeleted?: BoolFilter<"Camp"> | boolean
    accesses?: CampAccessListRelationFilter
  }, "id">

  export type CampOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postalCode?: SortOrder
    isDeleted?: SortOrder
    _count?: CampCountOrderByAggregateInput
    _avg?: CampAvgOrderByAggregateInput
    _max?: CampMaxOrderByAggregateInput
    _min?: CampMinOrderByAggregateInput
    _sum?: CampSumOrderByAggregateInput
  }

  export type CampScalarWhereWithAggregatesInput = {
    AND?: CampScalarWhereWithAggregatesInput | CampScalarWhereWithAggregatesInput[]
    OR?: CampScalarWhereWithAggregatesInput[]
    NOT?: CampScalarWhereWithAggregatesInput | CampScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Camp"> | number
    name?: StringWithAggregatesFilter<"Camp"> | string
    addressLine1?: StringWithAggregatesFilter<"Camp"> | string
    addressLine2?: StringWithAggregatesFilter<"Camp"> | string
    postalCode?: IntWithAggregatesFilter<"Camp"> | number
    isDeleted?: BoolWithAggregatesFilter<"Camp"> | boolean
  }

  export type QueryWhereInput = {
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    id?: IntFilter<"Query"> | number
    userId?: IntFilter<"Query"> | number
    assigneeId?: IntNullableFilter<"Query"> | number | null
    content?: StringFilter<"Query"> | string
    status?: EnumStatusFilter<"Query"> | $Enums.Status
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type QueryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
  }

  export type QueryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QueryWhereInput | QueryWhereInput[]
    OR?: QueryWhereInput[]
    NOT?: QueryWhereInput | QueryWhereInput[]
    userId?: IntFilter<"Query"> | number
    assigneeId?: IntNullableFilter<"Query"> | number | null
    content?: StringFilter<"Query"> | string
    status?: EnumStatusFilter<"Query"> | $Enums.Status
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type QueryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    content?: SortOrder
    status?: SortOrder
    _count?: QueryCountOrderByAggregateInput
    _avg?: QueryAvgOrderByAggregateInput
    _max?: QueryMaxOrderByAggregateInput
    _min?: QueryMinOrderByAggregateInput
    _sum?: QuerySumOrderByAggregateInput
  }

  export type QueryScalarWhereWithAggregatesInput = {
    AND?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    OR?: QueryScalarWhereWithAggregatesInput[]
    NOT?: QueryScalarWhereWithAggregatesInput | QueryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Query"> | number
    userId?: IntWithAggregatesFilter<"Query"> | number
    assigneeId?: IntNullableWithAggregatesFilter<"Query"> | number | null
    content?: StringWithAggregatesFilter<"Query"> | string
    status?: EnumStatusWithAggregatesFilter<"Query"> | $Enums.Status
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: IntFilter<"Equipment"> | number
    broughtOnChargeId?: IntFilter<"Equipment"> | number
    disposalId?: IntNullableFilter<"Equipment"> | number | null
    modelId?: IntFilter<"Equipment"> | number
    broughtOnCharge?: XOR<EquipmentTransactionScalarRelationFilter, EquipmentTransactionWhereInput>
    movement?: EquipmentTransactionListRelationFilter
    disposal?: XOR<EquipmentTransactionNullableScalarRelationFilter, EquipmentTransactionWhereInput> | null
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    broughtOnChargeId?: SortOrder
    disposalId?: SortOrderInput | SortOrder
    modelId?: SortOrder
    broughtOnCharge?: EquipmentTransactionOrderByWithRelationInput
    movement?: EquipmentTransactionOrderByRelationAggregateInput
    disposal?: EquipmentTransactionOrderByWithRelationInput
    model?: ModelOrderByWithRelationInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    broughtOnChargeId?: number
    disposalId?: number
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    modelId?: IntFilter<"Equipment"> | number
    broughtOnCharge?: XOR<EquipmentTransactionScalarRelationFilter, EquipmentTransactionWhereInput>
    movement?: EquipmentTransactionListRelationFilter
    disposal?: XOR<EquipmentTransactionNullableScalarRelationFilter, EquipmentTransactionWhereInput> | null
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
  }, "id" | "broughtOnChargeId" | "disposalId">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    broughtOnChargeId?: SortOrder
    disposalId?: SortOrderInput | SortOrder
    modelId?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipment"> | number
    broughtOnChargeId?: IntWithAggregatesFilter<"Equipment"> | number
    disposalId?: IntNullableWithAggregatesFilter<"Equipment"> | number | null
    modelId?: IntWithAggregatesFilter<"Equipment"> | number
  }

  export type EquipmentTransactionWhereInput = {
    AND?: EquipmentTransactionWhereInput | EquipmentTransactionWhereInput[]
    OR?: EquipmentTransactionWhereInput[]
    NOT?: EquipmentTransactionWhereInput | EquipmentTransactionWhereInput[]
    id?: IntFilter<"EquipmentTransaction"> | number
    type?: EnumEqTransactionTypeFilter<"EquipmentTransaction"> | $Enums.EqTransactionType
    date?: DateTimeFilter<"EquipmentTransaction"> | Date | string
    equipmentId?: IntFilter<"EquipmentTransaction"> | number
    userId?: IntFilter<"EquipmentTransaction"> | number
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    broughtOnChargeFor?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    disposalFor?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
  }

  export type EquipmentTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    userId?: SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    performedBy?: UserOrderByWithRelationInput
    broughtOnChargeFor?: EquipmentOrderByWithRelationInput
    disposalFor?: EquipmentOrderByWithRelationInput
  }

  export type EquipmentTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipmentTransactionWhereInput | EquipmentTransactionWhereInput[]
    OR?: EquipmentTransactionWhereInput[]
    NOT?: EquipmentTransactionWhereInput | EquipmentTransactionWhereInput[]
    type?: EnumEqTransactionTypeFilter<"EquipmentTransaction"> | $Enums.EqTransactionType
    date?: DateTimeFilter<"EquipmentTransaction"> | Date | string
    equipmentId?: IntFilter<"EquipmentTransaction"> | number
    userId?: IntFilter<"EquipmentTransaction"> | number
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
    performedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    broughtOnChargeFor?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    disposalFor?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
  }, "id">

  export type EquipmentTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    userId?: SortOrder
    _count?: EquipmentTransactionCountOrderByAggregateInput
    _avg?: EquipmentTransactionAvgOrderByAggregateInput
    _max?: EquipmentTransactionMaxOrderByAggregateInput
    _min?: EquipmentTransactionMinOrderByAggregateInput
    _sum?: EquipmentTransactionSumOrderByAggregateInput
  }

  export type EquipmentTransactionScalarWhereWithAggregatesInput = {
    AND?: EquipmentTransactionScalarWhereWithAggregatesInput | EquipmentTransactionScalarWhereWithAggregatesInput[]
    OR?: EquipmentTransactionScalarWhereWithAggregatesInput[]
    NOT?: EquipmentTransactionScalarWhereWithAggregatesInput | EquipmentTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EquipmentTransaction"> | number
    type?: EnumEqTransactionTypeWithAggregatesFilter<"EquipmentTransaction"> | $Enums.EqTransactionType
    date?: DateTimeWithAggregatesFilter<"EquipmentTransaction"> | Date | string
    equipmentId?: IntWithAggregatesFilter<"EquipmentTransaction"> | number
    userId?: IntWithAggregatesFilter<"EquipmentTransaction"> | number
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: IntFilter<"Model"> | number
    name?: StringFilter<"Model"> | string
    description?: StringFilter<"Model"> | string
    manufacturer?: StringFilter<"Model"> | string
    equipments?: EquipmentListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    manufacturer?: SortOrder
    equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    name?: StringFilter<"Model"> | string
    description?: StringFilter<"Model"> | string
    manufacturer?: StringFilter<"Model"> | string
    equipments?: EquipmentListRelationFilter
  }, "id">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    manufacturer?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Model"> | number
    name?: StringWithAggregatesFilter<"Model"> | string
    description?: StringWithAggregatesFilter<"Model"> | string
    manufacturer?: StringWithAggregatesFilter<"Model"> | string
  }

  export type UserCreateInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessCreateNestedManyWithoutApprovedByInput
    queries?: QueryCreateNestedManyWithoutUserInput
    assignedQueries?: QueryCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessUncheckedCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutApprovedByInput
    queries?: QueryUncheckedCreateNestedManyWithoutUserInput
    assignedQueries?: QueryUncheckedCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUncheckedUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUncheckedUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUncheckedUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean | null
    user: UserCreateNestedOneWithoutAppointmentsInput
    branch: BranchCreateNestedOneWithoutMembersInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: number
    branchId: number
    isActive?: boolean | null
  }

  export type AppointmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
    branch?: BranchUpdateOneRequiredWithoutMembersNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AppointmentCreateManyInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: number
    branchId: number
    isActive?: boolean | null
  }

  export type AppointmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type BranchCreateInput = {
    name: string
    isDeleted?: boolean
    members?: AppointmentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: number
    name: string
    isDeleted?: boolean
    members?: AppointmentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    members?: AppointmentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    members?: AppointmentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: number
    name: string
    isDeleted?: boolean
  }

  export type BranchUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CampAccessCreateInput = {
    startDate: Date | string
    endDate: Date | string
    user: UserCreateNestedOneWithoutCampAccessesInput
    sponsoredBy: UserCreateNestedOneWithoutSponsoredCampAccessesInput
    approvedBy: UserCreateNestedOneWithoutApprovedCampAccessesInput
    camp: CampCreateNestedOneWithoutAccessesInput
  }

  export type CampAccessUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    sponsorId: number
    approverId: number
    campId: number
  }

  export type CampAccessUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampAccessesNestedInput
    sponsoredBy?: UserUpdateOneRequiredWithoutSponsoredCampAccessesNestedInput
    approvedBy?: UserUpdateOneRequiredWithoutApprovedCampAccessesNestedInput
    camp?: CampUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type CampAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sponsorId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type CampAccessCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    sponsorId: number
    approverId: number
    campId: number
  }

  export type CampAccessUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sponsorId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type CampCreateInput = {
    name: string
    addressLine1: string
    addressLine2: string
    postalCode: number
    isDeleted?: boolean
    accesses?: CampAccessCreateNestedManyWithoutCampInput
  }

  export type CampUncheckedCreateInput = {
    id?: number
    name: string
    addressLine1: string
    addressLine2: string
    postalCode: number
    isDeleted?: boolean
    accesses?: CampAccessUncheckedCreateNestedManyWithoutCampInput
  }

  export type CampUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    accesses?: CampAccessUpdateManyWithoutCampNestedInput
  }

  export type CampUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    accesses?: CampAccessUncheckedUpdateManyWithoutCampNestedInput
  }

  export type CampCreateManyInput = {
    id?: number
    name: string
    addressLine1: string
    addressLine2: string
    postalCode: number
    isDeleted?: boolean
  }

  export type CampUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CampUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QueryCreateInput = {
    content: string
    status: $Enums.Status
    user: UserCreateNestedOneWithoutQueriesInput
    assignedTo?: UserCreateNestedOneWithoutAssignedQueriesInput
  }

  export type QueryUncheckedCreateInput = {
    id?: number
    userId: number
    assigneeId?: number | null
    content: string
    status: $Enums.Status
  }

  export type QueryUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutQueriesNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedQueriesNestedInput
  }

  export type QueryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type QueryCreateManyInput = {
    id?: number
    userId: number
    assigneeId?: number | null
    content: string
    status: $Enums.Status
  }

  export type QueryUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type QueryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EquipmentCreateInput = {
    broughtOnCharge: EquipmentTransactionCreateNestedOneWithoutBroughtOnChargeForInput
    movement?: EquipmentTransactionCreateNestedManyWithoutEquipmentInput
    disposal?: EquipmentTransactionCreateNestedOneWithoutDisposalForInput
    model: ModelCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: number
    broughtOnChargeId: number
    disposalId?: number | null
    modelId: number
    movement?: EquipmentTransactionUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    broughtOnCharge?: EquipmentTransactionUpdateOneRequiredWithoutBroughtOnChargeForNestedInput
    movement?: EquipmentTransactionUpdateManyWithoutEquipmentNestedInput
    disposal?: EquipmentTransactionUpdateOneWithoutDisposalForNestedInput
    model?: ModelUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    broughtOnChargeId?: IntFieldUpdateOperationsInput | number
    disposalId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: IntFieldUpdateOperationsInput | number
    movement?: EquipmentTransactionUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: number
    broughtOnChargeId: number
    disposalId?: number | null
    modelId: number
  }

  export type EquipmentUpdateManyMutationInput = {

  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    broughtOnChargeId?: IntFieldUpdateOperationsInput | number
    disposalId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipmentTransactionCreateInput = {
    type: $Enums.EqTransactionType
    date: Date | string
    equipment: EquipmentCreateNestedOneWithoutMovementInput
    performedBy: UserCreateNestedOneWithoutEquipmentTransactionsInput
    broughtOnChargeFor?: EquipmentCreateNestedOneWithoutBroughtOnChargeInput
    disposalFor?: EquipmentCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionUncheckedCreateInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    equipmentId: number
    userId: number
    broughtOnChargeFor?: EquipmentUncheckedCreateNestedOneWithoutBroughtOnChargeInput
    disposalFor?: EquipmentUncheckedCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionUpdateInput = {
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutMovementNestedInput
    performedBy?: UserUpdateOneRequiredWithoutEquipmentTransactionsNestedInput
    broughtOnChargeFor?: EquipmentUpdateOneWithoutBroughtOnChargeNestedInput
    disposalFor?: EquipmentUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    broughtOnChargeFor?: EquipmentUncheckedUpdateOneWithoutBroughtOnChargeNestedInput
    disposalFor?: EquipmentUncheckedUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionCreateManyInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    equipmentId: number
    userId: number
  }

  export type EquipmentTransactionUpdateManyMutationInput = {
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ModelCreateInput = {
    name: string
    description: string
    manufacturer: string
    equipments?: EquipmentCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    manufacturer: string
    equipments?: EquipmentUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    equipments?: EquipmentUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: number
    name: string
    description: string
    manufacturer: string
  }

  export type ModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type CampAccessListRelationFilter = {
    every?: CampAccessWhereInput
    some?: CampAccessWhereInput
    none?: CampAccessWhereInput
  }

  export type QueryListRelationFilter = {
    every?: QueryWhereInput
    some?: QueryWhereInput
    none?: QueryWhereInput
  }

  export type EquipmentTransactionListRelationFilter = {
    every?: EquipmentTransactionWhereInput
    some?: EquipmentTransactionWhereInput
    none?: EquipmentTransactionWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QueryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
    isActive?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    branchId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CampScalarRelationFilter = {
    is?: CampWhereInput
    isNot?: CampWhereInput
  }

  export type CampAccessCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    sponsorId?: SortOrder
    approverId?: SortOrder
    campId?: SortOrder
  }

  export type CampAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sponsorId?: SortOrder
    approverId?: SortOrder
    campId?: SortOrder
  }

  export type CampAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    sponsorId?: SortOrder
    approverId?: SortOrder
    campId?: SortOrder
  }

  export type CampAccessMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    sponsorId?: SortOrder
    approverId?: SortOrder
    campId?: SortOrder
  }

  export type CampAccessSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sponsorId?: SortOrder
    approverId?: SortOrder
    campId?: SortOrder
  }

  export type CampCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postalCode?: SortOrder
    isDeleted?: SortOrder
  }

  export type CampAvgOrderByAggregateInput = {
    id?: SortOrder
    postalCode?: SortOrder
  }

  export type CampMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postalCode?: SortOrder
    isDeleted?: SortOrder
  }

  export type CampMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    postalCode?: SortOrder
    isDeleted?: SortOrder
  }

  export type CampSumOrderByAggregateInput = {
    id?: SortOrder
    postalCode?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type QueryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assigneeId?: SortOrder
    content?: SortOrder
    status?: SortOrder
  }

  export type QueryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assigneeId?: SortOrder
  }

  export type QueryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assigneeId?: SortOrder
    content?: SortOrder
    status?: SortOrder
  }

  export type QueryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assigneeId?: SortOrder
    content?: SortOrder
    status?: SortOrder
  }

  export type QuerySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assigneeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EquipmentTransactionScalarRelationFilter = {
    is?: EquipmentTransactionWhereInput
    isNot?: EquipmentTransactionWhereInput
  }

  export type EquipmentTransactionNullableScalarRelationFilter = {
    is?: EquipmentTransactionWhereInput | null
    isNot?: EquipmentTransactionWhereInput | null
  }

  export type ModelScalarRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    broughtOnChargeId?: SortOrder
    disposalId?: SortOrder
    modelId?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    broughtOnChargeId?: SortOrder
    disposalId?: SortOrder
    modelId?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    broughtOnChargeId?: SortOrder
    disposalId?: SortOrder
    modelId?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    broughtOnChargeId?: SortOrder
    disposalId?: SortOrder
    modelId?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    id?: SortOrder
    broughtOnChargeId?: SortOrder
    disposalId?: SortOrder
    modelId?: SortOrder
  }

  export type EnumEqTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EqTransactionType | EnumEqTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEqTransactionTypeFilter<$PrismaModel> | $Enums.EqTransactionType
  }

  export type EquipmentScalarRelationFilter = {
    is?: EquipmentWhereInput
    isNot?: EquipmentWhereInput
  }

  export type EquipmentNullableScalarRelationFilter = {
    is?: EquipmentWhereInput | null
    isNot?: EquipmentWhereInput | null
  }

  export type EquipmentTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    userId?: SortOrder
  }

  export type EquipmentTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    userId?: SortOrder
  }

  export type EquipmentTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    userId?: SortOrder
  }

  export type EquipmentTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    date?: SortOrder
    equipmentId?: SortOrder
    userId?: SortOrder
  }

  export type EquipmentTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    userId?: SortOrder
  }

  export type EnumEqTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EqTransactionType | EnumEqTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEqTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.EqTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEqTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumEqTransactionTypeFilter<$PrismaModel>
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    manufacturer?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    manufacturer?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    manufacturer?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CampAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<CampAccessCreateWithoutUserInput, CampAccessUncheckedCreateWithoutUserInput> | CampAccessCreateWithoutUserInput[] | CampAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutUserInput | CampAccessCreateOrConnectWithoutUserInput[]
    createMany?: CampAccessCreateManyUserInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type CampAccessCreateNestedManyWithoutSponsoredByInput = {
    create?: XOR<CampAccessCreateWithoutSponsoredByInput, CampAccessUncheckedCreateWithoutSponsoredByInput> | CampAccessCreateWithoutSponsoredByInput[] | CampAccessUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutSponsoredByInput | CampAccessCreateOrConnectWithoutSponsoredByInput[]
    createMany?: CampAccessCreateManySponsoredByInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type CampAccessCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<CampAccessCreateWithoutApprovedByInput, CampAccessUncheckedCreateWithoutApprovedByInput> | CampAccessCreateWithoutApprovedByInput[] | CampAccessUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutApprovedByInput | CampAccessCreateOrConnectWithoutApprovedByInput[]
    createMany?: CampAccessCreateManyApprovedByInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type QueryCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryCreateWithoutUserInput, QueryUncheckedCreateWithoutUserInput> | QueryCreateWithoutUserInput[] | QueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutUserInput | QueryCreateOrConnectWithoutUserInput[]
    createMany?: QueryCreateManyUserInputEnvelope
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
  }

  export type QueryCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<QueryCreateWithoutAssignedToInput, QueryUncheckedCreateWithoutAssignedToInput> | QueryCreateWithoutAssignedToInput[] | QueryUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutAssignedToInput | QueryCreateOrConnectWithoutAssignedToInput[]
    createMany?: QueryCreateManyAssignedToInputEnvelope
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
  }

  export type EquipmentTransactionCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<EquipmentTransactionCreateWithoutPerformedByInput, EquipmentTransactionUncheckedCreateWithoutPerformedByInput> | EquipmentTransactionCreateWithoutPerformedByInput[] | EquipmentTransactionUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutPerformedByInput | EquipmentTransactionCreateOrConnectWithoutPerformedByInput[]
    createMany?: EquipmentTransactionCreateManyPerformedByInputEnvelope
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CampAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CampAccessCreateWithoutUserInput, CampAccessUncheckedCreateWithoutUserInput> | CampAccessCreateWithoutUserInput[] | CampAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutUserInput | CampAccessCreateOrConnectWithoutUserInput[]
    createMany?: CampAccessCreateManyUserInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput = {
    create?: XOR<CampAccessCreateWithoutSponsoredByInput, CampAccessUncheckedCreateWithoutSponsoredByInput> | CampAccessCreateWithoutSponsoredByInput[] | CampAccessUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutSponsoredByInput | CampAccessCreateOrConnectWithoutSponsoredByInput[]
    createMany?: CampAccessCreateManySponsoredByInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type CampAccessUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<CampAccessCreateWithoutApprovedByInput, CampAccessUncheckedCreateWithoutApprovedByInput> | CampAccessCreateWithoutApprovedByInput[] | CampAccessUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutApprovedByInput | CampAccessCreateOrConnectWithoutApprovedByInput[]
    createMany?: CampAccessCreateManyApprovedByInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type QueryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryCreateWithoutUserInput, QueryUncheckedCreateWithoutUserInput> | QueryCreateWithoutUserInput[] | QueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutUserInput | QueryCreateOrConnectWithoutUserInput[]
    createMany?: QueryCreateManyUserInputEnvelope
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
  }

  export type QueryUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<QueryCreateWithoutAssignedToInput, QueryUncheckedCreateWithoutAssignedToInput> | QueryCreateWithoutAssignedToInput[] | QueryUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutAssignedToInput | QueryCreateOrConnectWithoutAssignedToInput[]
    createMany?: QueryCreateManyAssignedToInputEnvelope
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
  }

  export type EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput = {
    create?: XOR<EquipmentTransactionCreateWithoutPerformedByInput, EquipmentTransactionUncheckedCreateWithoutPerformedByInput> | EquipmentTransactionCreateWithoutPerformedByInput[] | EquipmentTransactionUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutPerformedByInput | EquipmentTransactionCreateOrConnectWithoutPerformedByInput[]
    createMany?: EquipmentTransactionCreateManyPerformedByInputEnvelope
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CampAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampAccessCreateWithoutUserInput, CampAccessUncheckedCreateWithoutUserInput> | CampAccessCreateWithoutUserInput[] | CampAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutUserInput | CampAccessCreateOrConnectWithoutUserInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutUserInput | CampAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampAccessCreateManyUserInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutUserInput | CampAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutUserInput | CampAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type CampAccessUpdateManyWithoutSponsoredByNestedInput = {
    create?: XOR<CampAccessCreateWithoutSponsoredByInput, CampAccessUncheckedCreateWithoutSponsoredByInput> | CampAccessCreateWithoutSponsoredByInput[] | CampAccessUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutSponsoredByInput | CampAccessCreateOrConnectWithoutSponsoredByInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutSponsoredByInput | CampAccessUpsertWithWhereUniqueWithoutSponsoredByInput[]
    createMany?: CampAccessCreateManySponsoredByInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutSponsoredByInput | CampAccessUpdateWithWhereUniqueWithoutSponsoredByInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutSponsoredByInput | CampAccessUpdateManyWithWhereWithoutSponsoredByInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type CampAccessUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<CampAccessCreateWithoutApprovedByInput, CampAccessUncheckedCreateWithoutApprovedByInput> | CampAccessCreateWithoutApprovedByInput[] | CampAccessUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutApprovedByInput | CampAccessCreateOrConnectWithoutApprovedByInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutApprovedByInput | CampAccessUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: CampAccessCreateManyApprovedByInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutApprovedByInput | CampAccessUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutApprovedByInput | CampAccessUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type QueryUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryCreateWithoutUserInput, QueryUncheckedCreateWithoutUserInput> | QueryCreateWithoutUserInput[] | QueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutUserInput | QueryCreateOrConnectWithoutUserInput[]
    upsert?: QueryUpsertWithWhereUniqueWithoutUserInput | QueryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryCreateManyUserInputEnvelope
    set?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    disconnect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    delete?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    update?: QueryUpdateWithWhereUniqueWithoutUserInput | QueryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryUpdateManyWithWhereWithoutUserInput | QueryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryScalarWhereInput | QueryScalarWhereInput[]
  }

  export type QueryUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<QueryCreateWithoutAssignedToInput, QueryUncheckedCreateWithoutAssignedToInput> | QueryCreateWithoutAssignedToInput[] | QueryUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutAssignedToInput | QueryCreateOrConnectWithoutAssignedToInput[]
    upsert?: QueryUpsertWithWhereUniqueWithoutAssignedToInput | QueryUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: QueryCreateManyAssignedToInputEnvelope
    set?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    disconnect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    delete?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    update?: QueryUpdateWithWhereUniqueWithoutAssignedToInput | QueryUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: QueryUpdateManyWithWhereWithoutAssignedToInput | QueryUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: QueryScalarWhereInput | QueryScalarWhereInput[]
  }

  export type EquipmentTransactionUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<EquipmentTransactionCreateWithoutPerformedByInput, EquipmentTransactionUncheckedCreateWithoutPerformedByInput> | EquipmentTransactionCreateWithoutPerformedByInput[] | EquipmentTransactionUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutPerformedByInput | EquipmentTransactionCreateOrConnectWithoutPerformedByInput[]
    upsert?: EquipmentTransactionUpsertWithWhereUniqueWithoutPerformedByInput | EquipmentTransactionUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: EquipmentTransactionCreateManyPerformedByInputEnvelope
    set?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    disconnect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    delete?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    update?: EquipmentTransactionUpdateWithWhereUniqueWithoutPerformedByInput | EquipmentTransactionUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: EquipmentTransactionUpdateManyWithWhereWithoutPerformedByInput | EquipmentTransactionUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: EquipmentTransactionScalarWhereInput | EquipmentTransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CampAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CampAccessCreateWithoutUserInput, CampAccessUncheckedCreateWithoutUserInput> | CampAccessCreateWithoutUserInput[] | CampAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutUserInput | CampAccessCreateOrConnectWithoutUserInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutUserInput | CampAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CampAccessCreateManyUserInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutUserInput | CampAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutUserInput | CampAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput = {
    create?: XOR<CampAccessCreateWithoutSponsoredByInput, CampAccessUncheckedCreateWithoutSponsoredByInput> | CampAccessCreateWithoutSponsoredByInput[] | CampAccessUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutSponsoredByInput | CampAccessCreateOrConnectWithoutSponsoredByInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutSponsoredByInput | CampAccessUpsertWithWhereUniqueWithoutSponsoredByInput[]
    createMany?: CampAccessCreateManySponsoredByInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutSponsoredByInput | CampAccessUpdateWithWhereUniqueWithoutSponsoredByInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutSponsoredByInput | CampAccessUpdateManyWithWhereWithoutSponsoredByInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<CampAccessCreateWithoutApprovedByInput, CampAccessUncheckedCreateWithoutApprovedByInput> | CampAccessCreateWithoutApprovedByInput[] | CampAccessUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutApprovedByInput | CampAccessCreateOrConnectWithoutApprovedByInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutApprovedByInput | CampAccessUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: CampAccessCreateManyApprovedByInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutApprovedByInput | CampAccessUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutApprovedByInput | CampAccessUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type QueryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryCreateWithoutUserInput, QueryUncheckedCreateWithoutUserInput> | QueryCreateWithoutUserInput[] | QueryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutUserInput | QueryCreateOrConnectWithoutUserInput[]
    upsert?: QueryUpsertWithWhereUniqueWithoutUserInput | QueryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryCreateManyUserInputEnvelope
    set?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    disconnect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    delete?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    update?: QueryUpdateWithWhereUniqueWithoutUserInput | QueryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryUpdateManyWithWhereWithoutUserInput | QueryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryScalarWhereInput | QueryScalarWhereInput[]
  }

  export type QueryUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<QueryCreateWithoutAssignedToInput, QueryUncheckedCreateWithoutAssignedToInput> | QueryCreateWithoutAssignedToInput[] | QueryUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: QueryCreateOrConnectWithoutAssignedToInput | QueryCreateOrConnectWithoutAssignedToInput[]
    upsert?: QueryUpsertWithWhereUniqueWithoutAssignedToInput | QueryUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: QueryCreateManyAssignedToInputEnvelope
    set?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    disconnect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    delete?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    connect?: QueryWhereUniqueInput | QueryWhereUniqueInput[]
    update?: QueryUpdateWithWhereUniqueWithoutAssignedToInput | QueryUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: QueryUpdateManyWithWhereWithoutAssignedToInput | QueryUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: QueryScalarWhereInput | QueryScalarWhereInput[]
  }

  export type EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput = {
    create?: XOR<EquipmentTransactionCreateWithoutPerformedByInput, EquipmentTransactionUncheckedCreateWithoutPerformedByInput> | EquipmentTransactionCreateWithoutPerformedByInput[] | EquipmentTransactionUncheckedCreateWithoutPerformedByInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutPerformedByInput | EquipmentTransactionCreateOrConnectWithoutPerformedByInput[]
    upsert?: EquipmentTransactionUpsertWithWhereUniqueWithoutPerformedByInput | EquipmentTransactionUpsertWithWhereUniqueWithoutPerformedByInput[]
    createMany?: EquipmentTransactionCreateManyPerformedByInputEnvelope
    set?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    disconnect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    delete?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    update?: EquipmentTransactionUpdateWithWhereUniqueWithoutPerformedByInput | EquipmentTransactionUpdateWithWhereUniqueWithoutPerformedByInput[]
    updateMany?: EquipmentTransactionUpdateManyWithWhereWithoutPerformedByInput | EquipmentTransactionUpdateManyWithWhereWithoutPerformedByInput[]
    deleteMany?: EquipmentTransactionScalarWhereInput | EquipmentTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutMembersInput = {
    create?: XOR<BranchCreateWithoutMembersInput, BranchUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutMembersInput
    connect?: BranchWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type BranchUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<BranchCreateWithoutMembersInput, BranchUncheckedCreateWithoutMembersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutMembersInput
    upsert?: BranchUpsertWithoutMembersInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutMembersInput, BranchUpdateWithoutMembersInput>, BranchUncheckedUpdateWithoutMembersInput>
  }

  export type AppointmentCreateNestedManyWithoutBranchInput = {
    create?: XOR<AppointmentCreateWithoutBranchInput, AppointmentUncheckedCreateWithoutBranchInput> | AppointmentCreateWithoutBranchInput[] | AppointmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBranchInput | AppointmentCreateOrConnectWithoutBranchInput[]
    createMany?: AppointmentCreateManyBranchInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<AppointmentCreateWithoutBranchInput, AppointmentUncheckedCreateWithoutBranchInput> | AppointmentCreateWithoutBranchInput[] | AppointmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBranchInput | AppointmentCreateOrConnectWithoutBranchInput[]
    createMany?: AppointmentCreateManyBranchInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AppointmentUpdateManyWithoutBranchNestedInput = {
    create?: XOR<AppointmentCreateWithoutBranchInput, AppointmentUncheckedCreateWithoutBranchInput> | AppointmentCreateWithoutBranchInput[] | AppointmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBranchInput | AppointmentCreateOrConnectWithoutBranchInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBranchInput | AppointmentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: AppointmentCreateManyBranchInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBranchInput | AppointmentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBranchInput | AppointmentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<AppointmentCreateWithoutBranchInput, AppointmentUncheckedCreateWithoutBranchInput> | AppointmentCreateWithoutBranchInput[] | AppointmentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBranchInput | AppointmentCreateOrConnectWithoutBranchInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBranchInput | AppointmentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: AppointmentCreateManyBranchInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBranchInput | AppointmentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBranchInput | AppointmentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCampAccessesInput = {
    create?: XOR<UserCreateWithoutCampAccessesInput, UserUncheckedCreateWithoutCampAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSponsoredCampAccessesInput = {
    create?: XOR<UserCreateWithoutSponsoredCampAccessesInput, UserUncheckedCreateWithoutSponsoredCampAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredCampAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedCampAccessesInput = {
    create?: XOR<UserCreateWithoutApprovedCampAccessesInput, UserUncheckedCreateWithoutApprovedCampAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedCampAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type CampCreateNestedOneWithoutAccessesInput = {
    create?: XOR<CampCreateWithoutAccessesInput, CampUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: CampCreateOrConnectWithoutAccessesInput
    connect?: CampWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCampAccessesNestedInput = {
    create?: XOR<UserCreateWithoutCampAccessesInput, UserUncheckedCreateWithoutCampAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampAccessesInput
    upsert?: UserUpsertWithoutCampAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampAccessesInput, UserUpdateWithoutCampAccessesInput>, UserUncheckedUpdateWithoutCampAccessesInput>
  }

  export type UserUpdateOneRequiredWithoutSponsoredCampAccessesNestedInput = {
    create?: XOR<UserCreateWithoutSponsoredCampAccessesInput, UserUncheckedCreateWithoutSponsoredCampAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSponsoredCampAccessesInput
    upsert?: UserUpsertWithoutSponsoredCampAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSponsoredCampAccessesInput, UserUpdateWithoutSponsoredCampAccessesInput>, UserUncheckedUpdateWithoutSponsoredCampAccessesInput>
  }

  export type UserUpdateOneRequiredWithoutApprovedCampAccessesNestedInput = {
    create?: XOR<UserCreateWithoutApprovedCampAccessesInput, UserUncheckedCreateWithoutApprovedCampAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedCampAccessesInput
    upsert?: UserUpsertWithoutApprovedCampAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedCampAccessesInput, UserUpdateWithoutApprovedCampAccessesInput>, UserUncheckedUpdateWithoutApprovedCampAccessesInput>
  }

  export type CampUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<CampCreateWithoutAccessesInput, CampUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: CampCreateOrConnectWithoutAccessesInput
    upsert?: CampUpsertWithoutAccessesInput
    connect?: CampWhereUniqueInput
    update?: XOR<XOR<CampUpdateToOneWithWhereWithoutAccessesInput, CampUpdateWithoutAccessesInput>, CampUncheckedUpdateWithoutAccessesInput>
  }

  export type CampAccessCreateNestedManyWithoutCampInput = {
    create?: XOR<CampAccessCreateWithoutCampInput, CampAccessUncheckedCreateWithoutCampInput> | CampAccessCreateWithoutCampInput[] | CampAccessUncheckedCreateWithoutCampInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutCampInput | CampAccessCreateOrConnectWithoutCampInput[]
    createMany?: CampAccessCreateManyCampInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type CampAccessUncheckedCreateNestedManyWithoutCampInput = {
    create?: XOR<CampAccessCreateWithoutCampInput, CampAccessUncheckedCreateWithoutCampInput> | CampAccessCreateWithoutCampInput[] | CampAccessUncheckedCreateWithoutCampInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutCampInput | CampAccessCreateOrConnectWithoutCampInput[]
    createMany?: CampAccessCreateManyCampInputEnvelope
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
  }

  export type CampAccessUpdateManyWithoutCampNestedInput = {
    create?: XOR<CampAccessCreateWithoutCampInput, CampAccessUncheckedCreateWithoutCampInput> | CampAccessCreateWithoutCampInput[] | CampAccessUncheckedCreateWithoutCampInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutCampInput | CampAccessCreateOrConnectWithoutCampInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutCampInput | CampAccessUpsertWithWhereUniqueWithoutCampInput[]
    createMany?: CampAccessCreateManyCampInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutCampInput | CampAccessUpdateWithWhereUniqueWithoutCampInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutCampInput | CampAccessUpdateManyWithWhereWithoutCampInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type CampAccessUncheckedUpdateManyWithoutCampNestedInput = {
    create?: XOR<CampAccessCreateWithoutCampInput, CampAccessUncheckedCreateWithoutCampInput> | CampAccessCreateWithoutCampInput[] | CampAccessUncheckedCreateWithoutCampInput[]
    connectOrCreate?: CampAccessCreateOrConnectWithoutCampInput | CampAccessCreateOrConnectWithoutCampInput[]
    upsert?: CampAccessUpsertWithWhereUniqueWithoutCampInput | CampAccessUpsertWithWhereUniqueWithoutCampInput[]
    createMany?: CampAccessCreateManyCampInputEnvelope
    set?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    disconnect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    delete?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    connect?: CampAccessWhereUniqueInput | CampAccessWhereUniqueInput[]
    update?: CampAccessUpdateWithWhereUniqueWithoutCampInput | CampAccessUpdateWithWhereUniqueWithoutCampInput[]
    updateMany?: CampAccessUpdateManyWithWhereWithoutCampInput | CampAccessUpdateManyWithWhereWithoutCampInput[]
    deleteMany?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQueriesInput = {
    create?: XOR<UserCreateWithoutQueriesInput, UserUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedQueriesInput = {
    create?: XOR<UserCreateWithoutAssignedQueriesInput, UserUncheckedCreateWithoutAssignedQueriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedQueriesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutQueriesNestedInput = {
    create?: XOR<UserCreateWithoutQueriesInput, UserUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueriesInput
    upsert?: UserUpsertWithoutQueriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQueriesInput, UserUpdateWithoutQueriesInput>, UserUncheckedUpdateWithoutQueriesInput>
  }

  export type UserUpdateOneWithoutAssignedQueriesNestedInput = {
    create?: XOR<UserCreateWithoutAssignedQueriesInput, UserUncheckedCreateWithoutAssignedQueriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedQueriesInput
    upsert?: UserUpsertWithoutAssignedQueriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedQueriesInput, UserUpdateWithoutAssignedQueriesInput>, UserUncheckedUpdateWithoutAssignedQueriesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentTransactionCreateNestedOneWithoutBroughtOnChargeForInput = {
    create?: XOR<EquipmentTransactionCreateWithoutBroughtOnChargeForInput, EquipmentTransactionUncheckedCreateWithoutBroughtOnChargeForInput>
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutBroughtOnChargeForInput
    connect?: EquipmentTransactionWhereUniqueInput
  }

  export type EquipmentTransactionCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<EquipmentTransactionCreateWithoutEquipmentInput, EquipmentTransactionUncheckedCreateWithoutEquipmentInput> | EquipmentTransactionCreateWithoutEquipmentInput[] | EquipmentTransactionUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutEquipmentInput | EquipmentTransactionCreateOrConnectWithoutEquipmentInput[]
    createMany?: EquipmentTransactionCreateManyEquipmentInputEnvelope
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
  }

  export type EquipmentTransactionCreateNestedOneWithoutDisposalForInput = {
    create?: XOR<EquipmentTransactionCreateWithoutDisposalForInput, EquipmentTransactionUncheckedCreateWithoutDisposalForInput>
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutDisposalForInput
    connect?: EquipmentTransactionWhereUniqueInput
  }

  export type ModelCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<ModelCreateWithoutEquipmentsInput, ModelUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: ModelCreateOrConnectWithoutEquipmentsInput
    connect?: ModelWhereUniqueInput
  }

  export type EquipmentTransactionUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<EquipmentTransactionCreateWithoutEquipmentInput, EquipmentTransactionUncheckedCreateWithoutEquipmentInput> | EquipmentTransactionCreateWithoutEquipmentInput[] | EquipmentTransactionUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutEquipmentInput | EquipmentTransactionCreateOrConnectWithoutEquipmentInput[]
    createMany?: EquipmentTransactionCreateManyEquipmentInputEnvelope
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
  }

  export type EquipmentTransactionUpdateOneRequiredWithoutBroughtOnChargeForNestedInput = {
    create?: XOR<EquipmentTransactionCreateWithoutBroughtOnChargeForInput, EquipmentTransactionUncheckedCreateWithoutBroughtOnChargeForInput>
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutBroughtOnChargeForInput
    upsert?: EquipmentTransactionUpsertWithoutBroughtOnChargeForInput
    connect?: EquipmentTransactionWhereUniqueInput
    update?: XOR<XOR<EquipmentTransactionUpdateToOneWithWhereWithoutBroughtOnChargeForInput, EquipmentTransactionUpdateWithoutBroughtOnChargeForInput>, EquipmentTransactionUncheckedUpdateWithoutBroughtOnChargeForInput>
  }

  export type EquipmentTransactionUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<EquipmentTransactionCreateWithoutEquipmentInput, EquipmentTransactionUncheckedCreateWithoutEquipmentInput> | EquipmentTransactionCreateWithoutEquipmentInput[] | EquipmentTransactionUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutEquipmentInput | EquipmentTransactionCreateOrConnectWithoutEquipmentInput[]
    upsert?: EquipmentTransactionUpsertWithWhereUniqueWithoutEquipmentInput | EquipmentTransactionUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: EquipmentTransactionCreateManyEquipmentInputEnvelope
    set?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    disconnect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    delete?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    update?: EquipmentTransactionUpdateWithWhereUniqueWithoutEquipmentInput | EquipmentTransactionUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: EquipmentTransactionUpdateManyWithWhereWithoutEquipmentInput | EquipmentTransactionUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: EquipmentTransactionScalarWhereInput | EquipmentTransactionScalarWhereInput[]
  }

  export type EquipmentTransactionUpdateOneWithoutDisposalForNestedInput = {
    create?: XOR<EquipmentTransactionCreateWithoutDisposalForInput, EquipmentTransactionUncheckedCreateWithoutDisposalForInput>
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutDisposalForInput
    upsert?: EquipmentTransactionUpsertWithoutDisposalForInput
    disconnect?: EquipmentTransactionWhereInput | boolean
    delete?: EquipmentTransactionWhereInput | boolean
    connect?: EquipmentTransactionWhereUniqueInput
    update?: XOR<XOR<EquipmentTransactionUpdateToOneWithWhereWithoutDisposalForInput, EquipmentTransactionUpdateWithoutDisposalForInput>, EquipmentTransactionUncheckedUpdateWithoutDisposalForInput>
  }

  export type ModelUpdateOneRequiredWithoutEquipmentsNestedInput = {
    create?: XOR<ModelCreateWithoutEquipmentsInput, ModelUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: ModelCreateOrConnectWithoutEquipmentsInput
    upsert?: ModelUpsertWithoutEquipmentsInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutEquipmentsInput, ModelUpdateWithoutEquipmentsInput>, ModelUncheckedUpdateWithoutEquipmentsInput>
  }

  export type EquipmentTransactionUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<EquipmentTransactionCreateWithoutEquipmentInput, EquipmentTransactionUncheckedCreateWithoutEquipmentInput> | EquipmentTransactionCreateWithoutEquipmentInput[] | EquipmentTransactionUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentTransactionCreateOrConnectWithoutEquipmentInput | EquipmentTransactionCreateOrConnectWithoutEquipmentInput[]
    upsert?: EquipmentTransactionUpsertWithWhereUniqueWithoutEquipmentInput | EquipmentTransactionUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: EquipmentTransactionCreateManyEquipmentInputEnvelope
    set?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    disconnect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    delete?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    connect?: EquipmentTransactionWhereUniqueInput | EquipmentTransactionWhereUniqueInput[]
    update?: EquipmentTransactionUpdateWithWhereUniqueWithoutEquipmentInput | EquipmentTransactionUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: EquipmentTransactionUpdateManyWithWhereWithoutEquipmentInput | EquipmentTransactionUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: EquipmentTransactionScalarWhereInput | EquipmentTransactionScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutMovementInput = {
    create?: XOR<EquipmentCreateWithoutMovementInput, EquipmentUncheckedCreateWithoutMovementInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutMovementInput
    connect?: EquipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEquipmentTransactionsInput = {
    create?: XOR<UserCreateWithoutEquipmentTransactionsInput, UserUncheckedCreateWithoutEquipmentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipmentTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EquipmentCreateNestedOneWithoutBroughtOnChargeInput = {
    create?: XOR<EquipmentCreateWithoutBroughtOnChargeInput, EquipmentUncheckedCreateWithoutBroughtOnChargeInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutBroughtOnChargeInput
    connect?: EquipmentWhereUniqueInput
  }

  export type EquipmentCreateNestedOneWithoutDisposalInput = {
    create?: XOR<EquipmentCreateWithoutDisposalInput, EquipmentUncheckedCreateWithoutDisposalInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDisposalInput
    connect?: EquipmentWhereUniqueInput
  }

  export type EquipmentUncheckedCreateNestedOneWithoutBroughtOnChargeInput = {
    create?: XOR<EquipmentCreateWithoutBroughtOnChargeInput, EquipmentUncheckedCreateWithoutBroughtOnChargeInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutBroughtOnChargeInput
    connect?: EquipmentWhereUniqueInput
  }

  export type EquipmentUncheckedCreateNestedOneWithoutDisposalInput = {
    create?: XOR<EquipmentCreateWithoutDisposalInput, EquipmentUncheckedCreateWithoutDisposalInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDisposalInput
    connect?: EquipmentWhereUniqueInput
  }

  export type EnumEqTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.EqTransactionType
  }

  export type EquipmentUpdateOneRequiredWithoutMovementNestedInput = {
    create?: XOR<EquipmentCreateWithoutMovementInput, EquipmentUncheckedCreateWithoutMovementInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutMovementInput
    upsert?: EquipmentUpsertWithoutMovementInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutMovementInput, EquipmentUpdateWithoutMovementInput>, EquipmentUncheckedUpdateWithoutMovementInput>
  }

  export type UserUpdateOneRequiredWithoutEquipmentTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutEquipmentTransactionsInput, UserUncheckedCreateWithoutEquipmentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEquipmentTransactionsInput
    upsert?: UserUpsertWithoutEquipmentTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEquipmentTransactionsInput, UserUpdateWithoutEquipmentTransactionsInput>, UserUncheckedUpdateWithoutEquipmentTransactionsInput>
  }

  export type EquipmentUpdateOneWithoutBroughtOnChargeNestedInput = {
    create?: XOR<EquipmentCreateWithoutBroughtOnChargeInput, EquipmentUncheckedCreateWithoutBroughtOnChargeInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutBroughtOnChargeInput
    upsert?: EquipmentUpsertWithoutBroughtOnChargeInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutBroughtOnChargeInput, EquipmentUpdateWithoutBroughtOnChargeInput>, EquipmentUncheckedUpdateWithoutBroughtOnChargeInput>
  }

  export type EquipmentUpdateOneWithoutDisposalNestedInput = {
    create?: XOR<EquipmentCreateWithoutDisposalInput, EquipmentUncheckedCreateWithoutDisposalInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDisposalInput
    upsert?: EquipmentUpsertWithoutDisposalInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutDisposalInput, EquipmentUpdateWithoutDisposalInput>, EquipmentUncheckedUpdateWithoutDisposalInput>
  }

  export type EquipmentUncheckedUpdateOneWithoutBroughtOnChargeNestedInput = {
    create?: XOR<EquipmentCreateWithoutBroughtOnChargeInput, EquipmentUncheckedCreateWithoutBroughtOnChargeInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutBroughtOnChargeInput
    upsert?: EquipmentUpsertWithoutBroughtOnChargeInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutBroughtOnChargeInput, EquipmentUpdateWithoutBroughtOnChargeInput>, EquipmentUncheckedUpdateWithoutBroughtOnChargeInput>
  }

  export type EquipmentUncheckedUpdateOneWithoutDisposalNestedInput = {
    create?: XOR<EquipmentCreateWithoutDisposalInput, EquipmentUncheckedCreateWithoutDisposalInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDisposalInput
    upsert?: EquipmentUpsertWithoutDisposalInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutDisposalInput, EquipmentUpdateWithoutDisposalInput>, EquipmentUncheckedUpdateWithoutDisposalInput>
  }

  export type EquipmentCreateNestedManyWithoutModelInput = {
    create?: XOR<EquipmentCreateWithoutModelInput, EquipmentUncheckedCreateWithoutModelInput> | EquipmentCreateWithoutModelInput[] | EquipmentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutModelInput | EquipmentCreateOrConnectWithoutModelInput[]
    createMany?: EquipmentCreateManyModelInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<EquipmentCreateWithoutModelInput, EquipmentUncheckedCreateWithoutModelInput> | EquipmentCreateWithoutModelInput[] | EquipmentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutModelInput | EquipmentCreateOrConnectWithoutModelInput[]
    createMany?: EquipmentCreateManyModelInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUpdateManyWithoutModelNestedInput = {
    create?: XOR<EquipmentCreateWithoutModelInput, EquipmentUncheckedCreateWithoutModelInput> | EquipmentCreateWithoutModelInput[] | EquipmentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutModelInput | EquipmentCreateOrConnectWithoutModelInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutModelInput | EquipmentUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: EquipmentCreateManyModelInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutModelInput | EquipmentUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutModelInput | EquipmentUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<EquipmentCreateWithoutModelInput, EquipmentUncheckedCreateWithoutModelInput> | EquipmentCreateWithoutModelInput[] | EquipmentUncheckedCreateWithoutModelInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutModelInput | EquipmentCreateOrConnectWithoutModelInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutModelInput | EquipmentUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: EquipmentCreateManyModelInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutModelInput | EquipmentUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutModelInput | EquipmentUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumEqTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EqTransactionType | EnumEqTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEqTransactionTypeFilter<$PrismaModel> | $Enums.EqTransactionType
  }

  export type NestedEnumEqTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EqTransactionType | EnumEqTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EqTransactionType[] | ListEnumEqTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEqTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.EqTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEqTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumEqTransactionTypeFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutUserInput = {
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean | null
    branch: BranchCreateNestedOneWithoutMembersInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    branchId: number
    isActive?: boolean | null
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampAccessCreateWithoutUserInput = {
    startDate: Date | string
    endDate: Date | string
    sponsoredBy: UserCreateNestedOneWithoutSponsoredCampAccessesInput
    approvedBy: UserCreateNestedOneWithoutApprovedCampAccessesInput
    camp: CampCreateNestedOneWithoutAccessesInput
  }

  export type CampAccessUncheckedCreateWithoutUserInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    sponsorId: number
    approverId: number
    campId: number
  }

  export type CampAccessCreateOrConnectWithoutUserInput = {
    where: CampAccessWhereUniqueInput
    create: XOR<CampAccessCreateWithoutUserInput, CampAccessUncheckedCreateWithoutUserInput>
  }

  export type CampAccessCreateManyUserInputEnvelope = {
    data: CampAccessCreateManyUserInput | CampAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CampAccessCreateWithoutSponsoredByInput = {
    startDate: Date | string
    endDate: Date | string
    user: UserCreateNestedOneWithoutCampAccessesInput
    approvedBy: UserCreateNestedOneWithoutApprovedCampAccessesInput
    camp: CampCreateNestedOneWithoutAccessesInput
  }

  export type CampAccessUncheckedCreateWithoutSponsoredByInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    approverId: number
    campId: number
  }

  export type CampAccessCreateOrConnectWithoutSponsoredByInput = {
    where: CampAccessWhereUniqueInput
    create: XOR<CampAccessCreateWithoutSponsoredByInput, CampAccessUncheckedCreateWithoutSponsoredByInput>
  }

  export type CampAccessCreateManySponsoredByInputEnvelope = {
    data: CampAccessCreateManySponsoredByInput | CampAccessCreateManySponsoredByInput[]
    skipDuplicates?: boolean
  }

  export type CampAccessCreateWithoutApprovedByInput = {
    startDate: Date | string
    endDate: Date | string
    user: UserCreateNestedOneWithoutCampAccessesInput
    sponsoredBy: UserCreateNestedOneWithoutSponsoredCampAccessesInput
    camp: CampCreateNestedOneWithoutAccessesInput
  }

  export type CampAccessUncheckedCreateWithoutApprovedByInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    sponsorId: number
    campId: number
  }

  export type CampAccessCreateOrConnectWithoutApprovedByInput = {
    where: CampAccessWhereUniqueInput
    create: XOR<CampAccessCreateWithoutApprovedByInput, CampAccessUncheckedCreateWithoutApprovedByInput>
  }

  export type CampAccessCreateManyApprovedByInputEnvelope = {
    data: CampAccessCreateManyApprovedByInput | CampAccessCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type QueryCreateWithoutUserInput = {
    content: string
    status: $Enums.Status
    assignedTo?: UserCreateNestedOneWithoutAssignedQueriesInput
  }

  export type QueryUncheckedCreateWithoutUserInput = {
    id?: number
    assigneeId?: number | null
    content: string
    status: $Enums.Status
  }

  export type QueryCreateOrConnectWithoutUserInput = {
    where: QueryWhereUniqueInput
    create: XOR<QueryCreateWithoutUserInput, QueryUncheckedCreateWithoutUserInput>
  }

  export type QueryCreateManyUserInputEnvelope = {
    data: QueryCreateManyUserInput | QueryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QueryCreateWithoutAssignedToInput = {
    content: string
    status: $Enums.Status
    user: UserCreateNestedOneWithoutQueriesInput
  }

  export type QueryUncheckedCreateWithoutAssignedToInput = {
    id?: number
    userId: number
    content: string
    status: $Enums.Status
  }

  export type QueryCreateOrConnectWithoutAssignedToInput = {
    where: QueryWhereUniqueInput
    create: XOR<QueryCreateWithoutAssignedToInput, QueryUncheckedCreateWithoutAssignedToInput>
  }

  export type QueryCreateManyAssignedToInputEnvelope = {
    data: QueryCreateManyAssignedToInput | QueryCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentTransactionCreateWithoutPerformedByInput = {
    type: $Enums.EqTransactionType
    date: Date | string
    equipment: EquipmentCreateNestedOneWithoutMovementInput
    broughtOnChargeFor?: EquipmentCreateNestedOneWithoutBroughtOnChargeInput
    disposalFor?: EquipmentCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionUncheckedCreateWithoutPerformedByInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    equipmentId: number
    broughtOnChargeFor?: EquipmentUncheckedCreateNestedOneWithoutBroughtOnChargeInput
    disposalFor?: EquipmentUncheckedCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionCreateOrConnectWithoutPerformedByInput = {
    where: EquipmentTransactionWhereUniqueInput
    create: XOR<EquipmentTransactionCreateWithoutPerformedByInput, EquipmentTransactionUncheckedCreateWithoutPerformedByInput>
  }

  export type EquipmentTransactionCreateManyPerformedByInputEnvelope = {
    data: EquipmentTransactionCreateManyPerformedByInput | EquipmentTransactionCreateManyPerformedByInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    title?: StringFilter<"Appointment"> | string
    startDate?: DateTimeFilter<"Appointment"> | Date | string
    endDate?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    userId?: IntFilter<"Appointment"> | number
    branchId?: IntFilter<"Appointment"> | number
    isActive?: BoolNullableFilter<"Appointment"> | boolean | null
  }

  export type CampAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: CampAccessWhereUniqueInput
    update: XOR<CampAccessUpdateWithoutUserInput, CampAccessUncheckedUpdateWithoutUserInput>
    create: XOR<CampAccessCreateWithoutUserInput, CampAccessUncheckedCreateWithoutUserInput>
  }

  export type CampAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: CampAccessWhereUniqueInput
    data: XOR<CampAccessUpdateWithoutUserInput, CampAccessUncheckedUpdateWithoutUserInput>
  }

  export type CampAccessUpdateManyWithWhereWithoutUserInput = {
    where: CampAccessScalarWhereInput
    data: XOR<CampAccessUpdateManyMutationInput, CampAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type CampAccessScalarWhereInput = {
    AND?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
    OR?: CampAccessScalarWhereInput[]
    NOT?: CampAccessScalarWhereInput | CampAccessScalarWhereInput[]
    id?: IntFilter<"CampAccess"> | number
    startDate?: DateTimeFilter<"CampAccess"> | Date | string
    endDate?: DateTimeFilter<"CampAccess"> | Date | string
    userId?: IntFilter<"CampAccess"> | number
    sponsorId?: IntFilter<"CampAccess"> | number
    approverId?: IntFilter<"CampAccess"> | number
    campId?: IntFilter<"CampAccess"> | number
  }

  export type CampAccessUpsertWithWhereUniqueWithoutSponsoredByInput = {
    where: CampAccessWhereUniqueInput
    update: XOR<CampAccessUpdateWithoutSponsoredByInput, CampAccessUncheckedUpdateWithoutSponsoredByInput>
    create: XOR<CampAccessCreateWithoutSponsoredByInput, CampAccessUncheckedCreateWithoutSponsoredByInput>
  }

  export type CampAccessUpdateWithWhereUniqueWithoutSponsoredByInput = {
    where: CampAccessWhereUniqueInput
    data: XOR<CampAccessUpdateWithoutSponsoredByInput, CampAccessUncheckedUpdateWithoutSponsoredByInput>
  }

  export type CampAccessUpdateManyWithWhereWithoutSponsoredByInput = {
    where: CampAccessScalarWhereInput
    data: XOR<CampAccessUpdateManyMutationInput, CampAccessUncheckedUpdateManyWithoutSponsoredByInput>
  }

  export type CampAccessUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: CampAccessWhereUniqueInput
    update: XOR<CampAccessUpdateWithoutApprovedByInput, CampAccessUncheckedUpdateWithoutApprovedByInput>
    create: XOR<CampAccessCreateWithoutApprovedByInput, CampAccessUncheckedCreateWithoutApprovedByInput>
  }

  export type CampAccessUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: CampAccessWhereUniqueInput
    data: XOR<CampAccessUpdateWithoutApprovedByInput, CampAccessUncheckedUpdateWithoutApprovedByInput>
  }

  export type CampAccessUpdateManyWithWhereWithoutApprovedByInput = {
    where: CampAccessScalarWhereInput
    data: XOR<CampAccessUpdateManyMutationInput, CampAccessUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type QueryUpsertWithWhereUniqueWithoutUserInput = {
    where: QueryWhereUniqueInput
    update: XOR<QueryUpdateWithoutUserInput, QueryUncheckedUpdateWithoutUserInput>
    create: XOR<QueryCreateWithoutUserInput, QueryUncheckedCreateWithoutUserInput>
  }

  export type QueryUpdateWithWhereUniqueWithoutUserInput = {
    where: QueryWhereUniqueInput
    data: XOR<QueryUpdateWithoutUserInput, QueryUncheckedUpdateWithoutUserInput>
  }

  export type QueryUpdateManyWithWhereWithoutUserInput = {
    where: QueryScalarWhereInput
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyWithoutUserInput>
  }

  export type QueryScalarWhereInput = {
    AND?: QueryScalarWhereInput | QueryScalarWhereInput[]
    OR?: QueryScalarWhereInput[]
    NOT?: QueryScalarWhereInput | QueryScalarWhereInput[]
    id?: IntFilter<"Query"> | number
    userId?: IntFilter<"Query"> | number
    assigneeId?: IntNullableFilter<"Query"> | number | null
    content?: StringFilter<"Query"> | string
    status?: EnumStatusFilter<"Query"> | $Enums.Status
  }

  export type QueryUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: QueryWhereUniqueInput
    update: XOR<QueryUpdateWithoutAssignedToInput, QueryUncheckedUpdateWithoutAssignedToInput>
    create: XOR<QueryCreateWithoutAssignedToInput, QueryUncheckedCreateWithoutAssignedToInput>
  }

  export type QueryUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: QueryWhereUniqueInput
    data: XOR<QueryUpdateWithoutAssignedToInput, QueryUncheckedUpdateWithoutAssignedToInput>
  }

  export type QueryUpdateManyWithWhereWithoutAssignedToInput = {
    where: QueryScalarWhereInput
    data: XOR<QueryUpdateManyMutationInput, QueryUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type EquipmentTransactionUpsertWithWhereUniqueWithoutPerformedByInput = {
    where: EquipmentTransactionWhereUniqueInput
    update: XOR<EquipmentTransactionUpdateWithoutPerformedByInput, EquipmentTransactionUncheckedUpdateWithoutPerformedByInput>
    create: XOR<EquipmentTransactionCreateWithoutPerformedByInput, EquipmentTransactionUncheckedCreateWithoutPerformedByInput>
  }

  export type EquipmentTransactionUpdateWithWhereUniqueWithoutPerformedByInput = {
    where: EquipmentTransactionWhereUniqueInput
    data: XOR<EquipmentTransactionUpdateWithoutPerformedByInput, EquipmentTransactionUncheckedUpdateWithoutPerformedByInput>
  }

  export type EquipmentTransactionUpdateManyWithWhereWithoutPerformedByInput = {
    where: EquipmentTransactionScalarWhereInput
    data: XOR<EquipmentTransactionUpdateManyMutationInput, EquipmentTransactionUncheckedUpdateManyWithoutPerformedByInput>
  }

  export type EquipmentTransactionScalarWhereInput = {
    AND?: EquipmentTransactionScalarWhereInput | EquipmentTransactionScalarWhereInput[]
    OR?: EquipmentTransactionScalarWhereInput[]
    NOT?: EquipmentTransactionScalarWhereInput | EquipmentTransactionScalarWhereInput[]
    id?: IntFilter<"EquipmentTransaction"> | number
    type?: EnumEqTransactionTypeFilter<"EquipmentTransaction"> | $Enums.EqTransactionType
    date?: DateTimeFilter<"EquipmentTransaction"> | Date | string
    equipmentId?: IntFilter<"EquipmentTransaction"> | number
    userId?: IntFilter<"EquipmentTransaction"> | number
  }

  export type UserCreateWithoutAppointmentsInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    campAccesses?: CampAccessCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessCreateNestedManyWithoutApprovedByInput
    queries?: QueryCreateNestedManyWithoutUserInput
    assignedQueries?: QueryCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    campAccesses?: CampAccessUncheckedCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutApprovedByInput
    queries?: QueryUncheckedCreateNestedManyWithoutUserInput
    assignedQueries?: QueryUncheckedCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type BranchCreateWithoutMembersInput = {
    name: string
    isDeleted?: boolean
  }

  export type BranchUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    isDeleted?: boolean
  }

  export type BranchCreateOrConnectWithoutMembersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutMembersInput, BranchUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    campAccesses?: CampAccessUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    campAccesses?: CampAccessUncheckedUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUncheckedUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUncheckedUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type BranchUpsertWithoutMembersInput = {
    update: XOR<BranchUpdateWithoutMembersInput, BranchUncheckedUpdateWithoutMembersInput>
    create: XOR<BranchCreateWithoutMembersInput, BranchUncheckedCreateWithoutMembersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutMembersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutMembersInput, BranchUncheckedUpdateWithoutMembersInput>
  }

  export type BranchUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BranchUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppointmentCreateWithoutBranchInput = {
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    isActive?: boolean | null
    user: UserCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutBranchInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: number
    isActive?: boolean | null
  }

  export type AppointmentCreateOrConnectWithoutBranchInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutBranchInput, AppointmentUncheckedCreateWithoutBranchInput>
  }

  export type AppointmentCreateManyBranchInputEnvelope = {
    data: AppointmentCreateManyBranchInput | AppointmentCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutBranchInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutBranchInput, AppointmentUncheckedUpdateWithoutBranchInput>
    create: XOR<AppointmentCreateWithoutBranchInput, AppointmentUncheckedCreateWithoutBranchInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutBranchInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutBranchInput, AppointmentUncheckedUpdateWithoutBranchInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutBranchInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserCreateWithoutCampAccessesInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessCreateNestedManyWithoutApprovedByInput
    queries?: QueryCreateNestedManyWithoutUserInput
    assignedQueries?: QueryCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutCampAccessesInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutApprovedByInput
    queries?: QueryUncheckedCreateNestedManyWithoutUserInput
    assignedQueries?: QueryUncheckedCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutCampAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampAccessesInput, UserUncheckedCreateWithoutCampAccessesInput>
  }

  export type UserCreateWithoutSponsoredCampAccessesInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessCreateNestedManyWithoutUserInput
    approvedCampAccesses?: CampAccessCreateNestedManyWithoutApprovedByInput
    queries?: QueryCreateNestedManyWithoutUserInput
    assignedQueries?: QueryCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutSponsoredCampAccessesInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessUncheckedCreateNestedManyWithoutUserInput
    approvedCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutApprovedByInput
    queries?: QueryUncheckedCreateNestedManyWithoutUserInput
    assignedQueries?: QueryUncheckedCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutSponsoredCampAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSponsoredCampAccessesInput, UserUncheckedCreateWithoutSponsoredCampAccessesInput>
  }

  export type UserCreateWithoutApprovedCampAccessesInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessCreateNestedManyWithoutSponsoredByInput
    queries?: QueryCreateNestedManyWithoutUserInput
    assignedQueries?: QueryCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutApprovedCampAccessesInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessUncheckedCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput
    queries?: QueryUncheckedCreateNestedManyWithoutUserInput
    assignedQueries?: QueryUncheckedCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutApprovedCampAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedCampAccessesInput, UserUncheckedCreateWithoutApprovedCampAccessesInput>
  }

  export type CampCreateWithoutAccessesInput = {
    name: string
    addressLine1: string
    addressLine2: string
    postalCode: number
    isDeleted?: boolean
  }

  export type CampUncheckedCreateWithoutAccessesInput = {
    id?: number
    name: string
    addressLine1: string
    addressLine2: string
    postalCode: number
    isDeleted?: boolean
  }

  export type CampCreateOrConnectWithoutAccessesInput = {
    where: CampWhereUniqueInput
    create: XOR<CampCreateWithoutAccessesInput, CampUncheckedCreateWithoutAccessesInput>
  }

  export type UserUpsertWithoutCampAccessesInput = {
    update: XOR<UserUpdateWithoutCampAccessesInput, UserUncheckedUpdateWithoutCampAccessesInput>
    create: XOR<UserCreateWithoutCampAccessesInput, UserUncheckedCreateWithoutCampAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampAccessesInput, UserUncheckedUpdateWithoutCampAccessesInput>
  }

  export type UserUpdateWithoutCampAccessesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCampAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUncheckedUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUncheckedUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutSponsoredCampAccessesInput = {
    update: XOR<UserUpdateWithoutSponsoredCampAccessesInput, UserUncheckedUpdateWithoutSponsoredCampAccessesInput>
    create: XOR<UserCreateWithoutSponsoredCampAccessesInput, UserUncheckedCreateWithoutSponsoredCampAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSponsoredCampAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSponsoredCampAccessesInput, UserUncheckedUpdateWithoutSponsoredCampAccessesInput>
  }

  export type UserUpdateWithoutSponsoredCampAccessesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUpdateManyWithoutUserNestedInput
    approvedCampAccesses?: CampAccessUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSponsoredCampAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUncheckedUpdateManyWithoutUserNestedInput
    approvedCampAccesses?: CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUncheckedUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUncheckedUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutApprovedCampAccessesInput = {
    update: XOR<UserUpdateWithoutApprovedCampAccessesInput, UserUncheckedUpdateWithoutApprovedCampAccessesInput>
    create: XOR<UserCreateWithoutApprovedCampAccessesInput, UserUncheckedCreateWithoutApprovedCampAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedCampAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedCampAccessesInput, UserUncheckedUpdateWithoutApprovedCampAccessesInput>
  }

  export type UserUpdateWithoutApprovedCampAccessesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUpdateManyWithoutSponsoredByNestedInput
    queries?: QueryUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedCampAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUncheckedUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput
    queries?: QueryUncheckedUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUncheckedUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type CampUpsertWithoutAccessesInput = {
    update: XOR<CampUpdateWithoutAccessesInput, CampUncheckedUpdateWithoutAccessesInput>
    create: XOR<CampCreateWithoutAccessesInput, CampUncheckedCreateWithoutAccessesInput>
    where?: CampWhereInput
  }

  export type CampUpdateToOneWithWhereWithoutAccessesInput = {
    where?: CampWhereInput
    data: XOR<CampUpdateWithoutAccessesInput, CampUncheckedUpdateWithoutAccessesInput>
  }

  export type CampUpdateWithoutAccessesInput = {
    name?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CampUncheckedUpdateWithoutAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CampAccessCreateWithoutCampInput = {
    startDate: Date | string
    endDate: Date | string
    user: UserCreateNestedOneWithoutCampAccessesInput
    sponsoredBy: UserCreateNestedOneWithoutSponsoredCampAccessesInput
    approvedBy: UserCreateNestedOneWithoutApprovedCampAccessesInput
  }

  export type CampAccessUncheckedCreateWithoutCampInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    sponsorId: number
    approverId: number
  }

  export type CampAccessCreateOrConnectWithoutCampInput = {
    where: CampAccessWhereUniqueInput
    create: XOR<CampAccessCreateWithoutCampInput, CampAccessUncheckedCreateWithoutCampInput>
  }

  export type CampAccessCreateManyCampInputEnvelope = {
    data: CampAccessCreateManyCampInput | CampAccessCreateManyCampInput[]
    skipDuplicates?: boolean
  }

  export type CampAccessUpsertWithWhereUniqueWithoutCampInput = {
    where: CampAccessWhereUniqueInput
    update: XOR<CampAccessUpdateWithoutCampInput, CampAccessUncheckedUpdateWithoutCampInput>
    create: XOR<CampAccessCreateWithoutCampInput, CampAccessUncheckedCreateWithoutCampInput>
  }

  export type CampAccessUpdateWithWhereUniqueWithoutCampInput = {
    where: CampAccessWhereUniqueInput
    data: XOR<CampAccessUpdateWithoutCampInput, CampAccessUncheckedUpdateWithoutCampInput>
  }

  export type CampAccessUpdateManyWithWhereWithoutCampInput = {
    where: CampAccessScalarWhereInput
    data: XOR<CampAccessUpdateManyMutationInput, CampAccessUncheckedUpdateManyWithoutCampInput>
  }

  export type UserCreateWithoutQueriesInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessCreateNestedManyWithoutApprovedByInput
    assignedQueries?: QueryCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutQueriesInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessUncheckedCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutApprovedByInput
    assignedQueries?: QueryUncheckedCreateNestedManyWithoutAssignedToInput
    equipmentTransactions?: EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutQueriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQueriesInput, UserUncheckedCreateWithoutQueriesInput>
  }

  export type UserCreateWithoutAssignedQueriesInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessCreateNestedManyWithoutApprovedByInput
    queries?: QueryCreateNestedManyWithoutUserInput
    equipmentTransactions?: EquipmentTransactionCreateNestedManyWithoutPerformedByInput
  }

  export type UserUncheckedCreateWithoutAssignedQueriesInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessUncheckedCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutApprovedByInput
    queries?: QueryUncheckedCreateNestedManyWithoutUserInput
    equipmentTransactions?: EquipmentTransactionUncheckedCreateNestedManyWithoutPerformedByInput
  }

  export type UserCreateOrConnectWithoutAssignedQueriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedQueriesInput, UserUncheckedCreateWithoutAssignedQueriesInput>
  }

  export type UserUpsertWithoutQueriesInput = {
    update: XOR<UserUpdateWithoutQueriesInput, UserUncheckedUpdateWithoutQueriesInput>
    create: XOR<UserCreateWithoutQueriesInput, UserUncheckedCreateWithoutQueriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQueriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQueriesInput, UserUncheckedUpdateWithoutQueriesInput>
  }

  export type UserUpdateWithoutQueriesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUpdateManyWithoutApprovedByNestedInput
    assignedQueries?: QueryUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutQueriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUncheckedUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput
    assignedQueries?: QueryUncheckedUpdateManyWithoutAssignedToNestedInput
    equipmentTransactions?: EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUpsertWithoutAssignedQueriesInput = {
    update: XOR<UserUpdateWithoutAssignedQueriesInput, UserUncheckedUpdateWithoutAssignedQueriesInput>
    create: XOR<UserCreateWithoutAssignedQueriesInput, UserUncheckedCreateWithoutAssignedQueriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedQueriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedQueriesInput, UserUncheckedUpdateWithoutAssignedQueriesInput>
  }

  export type UserUpdateWithoutAssignedQueriesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUpdateManyWithoutUserNestedInput
    equipmentTransactions?: EquipmentTransactionUpdateManyWithoutPerformedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedQueriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUncheckedUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUncheckedUpdateManyWithoutUserNestedInput
    equipmentTransactions?: EquipmentTransactionUncheckedUpdateManyWithoutPerformedByNestedInput
  }

  export type EquipmentTransactionCreateWithoutBroughtOnChargeForInput = {
    type: $Enums.EqTransactionType
    date: Date | string
    equipment: EquipmentCreateNestedOneWithoutMovementInput
    performedBy: UserCreateNestedOneWithoutEquipmentTransactionsInput
    disposalFor?: EquipmentCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionUncheckedCreateWithoutBroughtOnChargeForInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    equipmentId: number
    userId: number
    disposalFor?: EquipmentUncheckedCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionCreateOrConnectWithoutBroughtOnChargeForInput = {
    where: EquipmentTransactionWhereUniqueInput
    create: XOR<EquipmentTransactionCreateWithoutBroughtOnChargeForInput, EquipmentTransactionUncheckedCreateWithoutBroughtOnChargeForInput>
  }

  export type EquipmentTransactionCreateWithoutEquipmentInput = {
    type: $Enums.EqTransactionType
    date: Date | string
    performedBy: UserCreateNestedOneWithoutEquipmentTransactionsInput
    broughtOnChargeFor?: EquipmentCreateNestedOneWithoutBroughtOnChargeInput
    disposalFor?: EquipmentCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionUncheckedCreateWithoutEquipmentInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    userId: number
    broughtOnChargeFor?: EquipmentUncheckedCreateNestedOneWithoutBroughtOnChargeInput
    disposalFor?: EquipmentUncheckedCreateNestedOneWithoutDisposalInput
  }

  export type EquipmentTransactionCreateOrConnectWithoutEquipmentInput = {
    where: EquipmentTransactionWhereUniqueInput
    create: XOR<EquipmentTransactionCreateWithoutEquipmentInput, EquipmentTransactionUncheckedCreateWithoutEquipmentInput>
  }

  export type EquipmentTransactionCreateManyEquipmentInputEnvelope = {
    data: EquipmentTransactionCreateManyEquipmentInput | EquipmentTransactionCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentTransactionCreateWithoutDisposalForInput = {
    type: $Enums.EqTransactionType
    date: Date | string
    equipment: EquipmentCreateNestedOneWithoutMovementInput
    performedBy: UserCreateNestedOneWithoutEquipmentTransactionsInput
    broughtOnChargeFor?: EquipmentCreateNestedOneWithoutBroughtOnChargeInput
  }

  export type EquipmentTransactionUncheckedCreateWithoutDisposalForInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    equipmentId: number
    userId: number
    broughtOnChargeFor?: EquipmentUncheckedCreateNestedOneWithoutBroughtOnChargeInput
  }

  export type EquipmentTransactionCreateOrConnectWithoutDisposalForInput = {
    where: EquipmentTransactionWhereUniqueInput
    create: XOR<EquipmentTransactionCreateWithoutDisposalForInput, EquipmentTransactionUncheckedCreateWithoutDisposalForInput>
  }

  export type ModelCreateWithoutEquipmentsInput = {
    name: string
    description: string
    manufacturer: string
  }

  export type ModelUncheckedCreateWithoutEquipmentsInput = {
    id?: number
    name: string
    description: string
    manufacturer: string
  }

  export type ModelCreateOrConnectWithoutEquipmentsInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutEquipmentsInput, ModelUncheckedCreateWithoutEquipmentsInput>
  }

  export type EquipmentTransactionUpsertWithoutBroughtOnChargeForInput = {
    update: XOR<EquipmentTransactionUpdateWithoutBroughtOnChargeForInput, EquipmentTransactionUncheckedUpdateWithoutBroughtOnChargeForInput>
    create: XOR<EquipmentTransactionCreateWithoutBroughtOnChargeForInput, EquipmentTransactionUncheckedCreateWithoutBroughtOnChargeForInput>
    where?: EquipmentTransactionWhereInput
  }

  export type EquipmentTransactionUpdateToOneWithWhereWithoutBroughtOnChargeForInput = {
    where?: EquipmentTransactionWhereInput
    data: XOR<EquipmentTransactionUpdateWithoutBroughtOnChargeForInput, EquipmentTransactionUncheckedUpdateWithoutBroughtOnChargeForInput>
  }

  export type EquipmentTransactionUpdateWithoutBroughtOnChargeForInput = {
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutMovementNestedInput
    performedBy?: UserUpdateOneRequiredWithoutEquipmentTransactionsNestedInput
    disposalFor?: EquipmentUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionUncheckedUpdateWithoutBroughtOnChargeForInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    disposalFor?: EquipmentUncheckedUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: EquipmentTransactionWhereUniqueInput
    update: XOR<EquipmentTransactionUpdateWithoutEquipmentInput, EquipmentTransactionUncheckedUpdateWithoutEquipmentInput>
    create: XOR<EquipmentTransactionCreateWithoutEquipmentInput, EquipmentTransactionUncheckedCreateWithoutEquipmentInput>
  }

  export type EquipmentTransactionUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: EquipmentTransactionWhereUniqueInput
    data: XOR<EquipmentTransactionUpdateWithoutEquipmentInput, EquipmentTransactionUncheckedUpdateWithoutEquipmentInput>
  }

  export type EquipmentTransactionUpdateManyWithWhereWithoutEquipmentInput = {
    where: EquipmentTransactionScalarWhereInput
    data: XOR<EquipmentTransactionUpdateManyMutationInput, EquipmentTransactionUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type EquipmentTransactionUpsertWithoutDisposalForInput = {
    update: XOR<EquipmentTransactionUpdateWithoutDisposalForInput, EquipmentTransactionUncheckedUpdateWithoutDisposalForInput>
    create: XOR<EquipmentTransactionCreateWithoutDisposalForInput, EquipmentTransactionUncheckedCreateWithoutDisposalForInput>
    where?: EquipmentTransactionWhereInput
  }

  export type EquipmentTransactionUpdateToOneWithWhereWithoutDisposalForInput = {
    where?: EquipmentTransactionWhereInput
    data: XOR<EquipmentTransactionUpdateWithoutDisposalForInput, EquipmentTransactionUncheckedUpdateWithoutDisposalForInput>
  }

  export type EquipmentTransactionUpdateWithoutDisposalForInput = {
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutMovementNestedInput
    performedBy?: UserUpdateOneRequiredWithoutEquipmentTransactionsNestedInput
    broughtOnChargeFor?: EquipmentUpdateOneWithoutBroughtOnChargeNestedInput
  }

  export type EquipmentTransactionUncheckedUpdateWithoutDisposalForInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    broughtOnChargeFor?: EquipmentUncheckedUpdateOneWithoutBroughtOnChargeNestedInput
  }

  export type ModelUpsertWithoutEquipmentsInput = {
    update: XOR<ModelUpdateWithoutEquipmentsInput, ModelUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<ModelCreateWithoutEquipmentsInput, ModelUncheckedCreateWithoutEquipmentsInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutEquipmentsInput, ModelUncheckedUpdateWithoutEquipmentsInput>
  }

  export type ModelUpdateWithoutEquipmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUncheckedUpdateWithoutEquipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateWithoutMovementInput = {
    broughtOnCharge: EquipmentTransactionCreateNestedOneWithoutBroughtOnChargeForInput
    disposal?: EquipmentTransactionCreateNestedOneWithoutDisposalForInput
    model: ModelCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutMovementInput = {
    id?: number
    broughtOnChargeId: number
    disposalId?: number | null
    modelId: number
  }

  export type EquipmentCreateOrConnectWithoutMovementInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutMovementInput, EquipmentUncheckedCreateWithoutMovementInput>
  }

  export type UserCreateWithoutEquipmentTransactionsInput = {
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessCreateNestedManyWithoutApprovedByInput
    queries?: QueryCreateNestedManyWithoutUserInput
    assignedQueries?: QueryCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutEquipmentTransactionsInput = {
    id?: number
    fullName: string
    contact: string
    email: string
    passwordHash: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    campAccesses?: CampAccessUncheckedCreateNestedManyWithoutUserInput
    sponsoredCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutSponsoredByInput
    approvedCampAccesses?: CampAccessUncheckedCreateNestedManyWithoutApprovedByInput
    queries?: QueryUncheckedCreateNestedManyWithoutUserInput
    assignedQueries?: QueryUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutEquipmentTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEquipmentTransactionsInput, UserUncheckedCreateWithoutEquipmentTransactionsInput>
  }

  export type EquipmentCreateWithoutBroughtOnChargeInput = {
    movement?: EquipmentTransactionCreateNestedManyWithoutEquipmentInput
    disposal?: EquipmentTransactionCreateNestedOneWithoutDisposalForInput
    model: ModelCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutBroughtOnChargeInput = {
    id?: number
    disposalId?: number | null
    modelId: number
    movement?: EquipmentTransactionUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutBroughtOnChargeInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutBroughtOnChargeInput, EquipmentUncheckedCreateWithoutBroughtOnChargeInput>
  }

  export type EquipmentCreateWithoutDisposalInput = {
    broughtOnCharge: EquipmentTransactionCreateNestedOneWithoutBroughtOnChargeForInput
    movement?: EquipmentTransactionCreateNestedManyWithoutEquipmentInput
    model: ModelCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutDisposalInput = {
    id?: number
    broughtOnChargeId: number
    modelId: number
    movement?: EquipmentTransactionUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutDisposalInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutDisposalInput, EquipmentUncheckedCreateWithoutDisposalInput>
  }

  export type EquipmentUpsertWithoutMovementInput = {
    update: XOR<EquipmentUpdateWithoutMovementInput, EquipmentUncheckedUpdateWithoutMovementInput>
    create: XOR<EquipmentCreateWithoutMovementInput, EquipmentUncheckedCreateWithoutMovementInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutMovementInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutMovementInput, EquipmentUncheckedUpdateWithoutMovementInput>
  }

  export type EquipmentUpdateWithoutMovementInput = {
    broughtOnCharge?: EquipmentTransactionUpdateOneRequiredWithoutBroughtOnChargeForNestedInput
    disposal?: EquipmentTransactionUpdateOneWithoutDisposalForNestedInput
    model?: ModelUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutMovementInput = {
    id?: IntFieldUpdateOperationsInput | number
    broughtOnChargeId?: IntFieldUpdateOperationsInput | number
    disposalId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutEquipmentTransactionsInput = {
    update: XOR<UserUpdateWithoutEquipmentTransactionsInput, UserUncheckedUpdateWithoutEquipmentTransactionsInput>
    create: XOR<UserCreateWithoutEquipmentTransactionsInput, UserUncheckedCreateWithoutEquipmentTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEquipmentTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEquipmentTransactionsInput, UserUncheckedUpdateWithoutEquipmentTransactionsInput>
  }

  export type UserUpdateWithoutEquipmentTransactionsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutEquipmentTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    campAccesses?: CampAccessUncheckedUpdateManyWithoutUserNestedInput
    sponsoredCampAccesses?: CampAccessUncheckedUpdateManyWithoutSponsoredByNestedInput
    approvedCampAccesses?: CampAccessUncheckedUpdateManyWithoutApprovedByNestedInput
    queries?: QueryUncheckedUpdateManyWithoutUserNestedInput
    assignedQueries?: QueryUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type EquipmentUpsertWithoutBroughtOnChargeInput = {
    update: XOR<EquipmentUpdateWithoutBroughtOnChargeInput, EquipmentUncheckedUpdateWithoutBroughtOnChargeInput>
    create: XOR<EquipmentCreateWithoutBroughtOnChargeInput, EquipmentUncheckedCreateWithoutBroughtOnChargeInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutBroughtOnChargeInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutBroughtOnChargeInput, EquipmentUncheckedUpdateWithoutBroughtOnChargeInput>
  }

  export type EquipmentUpdateWithoutBroughtOnChargeInput = {
    movement?: EquipmentTransactionUpdateManyWithoutEquipmentNestedInput
    disposal?: EquipmentTransactionUpdateOneWithoutDisposalForNestedInput
    model?: ModelUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutBroughtOnChargeInput = {
    id?: IntFieldUpdateOperationsInput | number
    disposalId?: NullableIntFieldUpdateOperationsInput | number | null
    modelId?: IntFieldUpdateOperationsInput | number
    movement?: EquipmentTransactionUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUpsertWithoutDisposalInput = {
    update: XOR<EquipmentUpdateWithoutDisposalInput, EquipmentUncheckedUpdateWithoutDisposalInput>
    create: XOR<EquipmentCreateWithoutDisposalInput, EquipmentUncheckedCreateWithoutDisposalInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutDisposalInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutDisposalInput, EquipmentUncheckedUpdateWithoutDisposalInput>
  }

  export type EquipmentUpdateWithoutDisposalInput = {
    broughtOnCharge?: EquipmentTransactionUpdateOneRequiredWithoutBroughtOnChargeForNestedInput
    movement?: EquipmentTransactionUpdateManyWithoutEquipmentNestedInput
    model?: ModelUpdateOneRequiredWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutDisposalInput = {
    id?: IntFieldUpdateOperationsInput | number
    broughtOnChargeId?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    movement?: EquipmentTransactionUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateWithoutModelInput = {
    broughtOnCharge: EquipmentTransactionCreateNestedOneWithoutBroughtOnChargeForInput
    movement?: EquipmentTransactionCreateNestedManyWithoutEquipmentInput
    disposal?: EquipmentTransactionCreateNestedOneWithoutDisposalForInput
  }

  export type EquipmentUncheckedCreateWithoutModelInput = {
    id?: number
    broughtOnChargeId: number
    disposalId?: number | null
    movement?: EquipmentTransactionUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutModelInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutModelInput, EquipmentUncheckedCreateWithoutModelInput>
  }

  export type EquipmentCreateManyModelInputEnvelope = {
    data: EquipmentCreateManyModelInput | EquipmentCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentUpsertWithWhereUniqueWithoutModelInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutModelInput, EquipmentUncheckedUpdateWithoutModelInput>
    create: XOR<EquipmentCreateWithoutModelInput, EquipmentUncheckedCreateWithoutModelInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutModelInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutModelInput, EquipmentUncheckedUpdateWithoutModelInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutModelInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutModelInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: IntFilter<"Equipment"> | number
    broughtOnChargeId?: IntFilter<"Equipment"> | number
    disposalId?: IntNullableFilter<"Equipment"> | number | null
    modelId?: IntFilter<"Equipment"> | number
  }

  export type AppointmentCreateManyUserInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    branchId: number
    isActive?: boolean | null
  }

  export type CampAccessCreateManyUserInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    sponsorId: number
    approverId: number
    campId: number
  }

  export type CampAccessCreateManySponsoredByInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    approverId: number
    campId: number
  }

  export type CampAccessCreateManyApprovedByInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    sponsorId: number
    campId: number
  }

  export type QueryCreateManyUserInput = {
    id?: number
    assigneeId?: number | null
    content: string
    status: $Enums.Status
  }

  export type QueryCreateManyAssignedToInput = {
    id?: number
    userId: number
    content: string
    status: $Enums.Status
  }

  export type EquipmentTransactionCreateManyPerformedByInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    equipmentId: number
  }

  export type AppointmentUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    branch?: BranchUpdateOneRequiredWithoutMembersNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branchId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    branchId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CampAccessUpdateWithoutUserInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsoredBy?: UserUpdateOneRequiredWithoutSponsoredCampAccessesNestedInput
    approvedBy?: UserUpdateOneRequiredWithoutApprovedCampAccessesNestedInput
    camp?: CampUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type CampAccessUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsorId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type CampAccessUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsorId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type CampAccessUpdateWithoutSponsoredByInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampAccessesNestedInput
    approvedBy?: UserUpdateOneRequiredWithoutApprovedCampAccessesNestedInput
    camp?: CampUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type CampAccessUncheckedUpdateWithoutSponsoredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type CampAccessUncheckedUpdateManyWithoutSponsoredByInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type CampAccessUpdateWithoutApprovedByInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampAccessesNestedInput
    sponsoredBy?: UserUpdateOneRequiredWithoutSponsoredCampAccessesNestedInput
    camp?: CampUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type CampAccessUncheckedUpdateWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sponsorId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type CampAccessUncheckedUpdateManyWithoutApprovedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sponsorId?: IntFieldUpdateOperationsInput | number
    campId?: IntFieldUpdateOperationsInput | number
  }

  export type QueryUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: UserUpdateOneWithoutAssignedQueriesNestedInput
  }

  export type QueryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type QueryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type QueryUpdateWithoutAssignedToInput = {
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    user?: UserUpdateOneRequiredWithoutQueriesNestedInput
  }

  export type QueryUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type QueryUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EquipmentTransactionUpdateWithoutPerformedByInput = {
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutMovementNestedInput
    broughtOnChargeFor?: EquipmentUpdateOneWithoutBroughtOnChargeNestedInput
    disposalFor?: EquipmentUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionUncheckedUpdateWithoutPerformedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: IntFieldUpdateOperationsInput | number
    broughtOnChargeFor?: EquipmentUncheckedUpdateOneWithoutBroughtOnChargeNestedInput
    disposalFor?: EquipmentUncheckedUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionUncheckedUpdateManyWithoutPerformedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    equipmentId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentCreateManyBranchInput = {
    id?: number
    title: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: number
    isActive?: boolean | null
  }

  export type AppointmentUpdateWithoutBranchInput = {
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AppointmentUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CampAccessCreateManyCampInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    userId: number
    sponsorId: number
    approverId: number
  }

  export type CampAccessUpdateWithoutCampInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCampAccessesNestedInput
    sponsoredBy?: UserUpdateOneRequiredWithoutSponsoredCampAccessesNestedInput
    approvedBy?: UserUpdateOneRequiredWithoutApprovedCampAccessesNestedInput
  }

  export type CampAccessUncheckedUpdateWithoutCampInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sponsorId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
  }

  export type CampAccessUncheckedUpdateManyWithoutCampInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sponsorId?: IntFieldUpdateOperationsInput | number
    approverId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipmentTransactionCreateManyEquipmentInput = {
    id?: number
    type: $Enums.EqTransactionType
    date: Date | string
    userId: number
  }

  export type EquipmentTransactionUpdateWithoutEquipmentInput = {
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    performedBy?: UserUpdateOneRequiredWithoutEquipmentTransactionsNestedInput
    broughtOnChargeFor?: EquipmentUpdateOneWithoutBroughtOnChargeNestedInput
    disposalFor?: EquipmentUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionUncheckedUpdateWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    broughtOnChargeFor?: EquipmentUncheckedUpdateOneWithoutBroughtOnChargeNestedInput
    disposalFor?: EquipmentUncheckedUpdateOneWithoutDisposalNestedInput
  }

  export type EquipmentTransactionUncheckedUpdateManyWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumEqTransactionTypeFieldUpdateOperationsInput | $Enums.EqTransactionType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipmentCreateManyModelInput = {
    id?: number
    broughtOnChargeId: number
    disposalId?: number | null
  }

  export type EquipmentUpdateWithoutModelInput = {
    broughtOnCharge?: EquipmentTransactionUpdateOneRequiredWithoutBroughtOnChargeForNestedInput
    movement?: EquipmentTransactionUpdateManyWithoutEquipmentNestedInput
    disposal?: EquipmentTransactionUpdateOneWithoutDisposalForNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    broughtOnChargeId?: IntFieldUpdateOperationsInput | number
    disposalId?: NullableIntFieldUpdateOperationsInput | number | null
    movement?: EquipmentTransactionUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    broughtOnChargeId?: IntFieldUpdateOperationsInput | number
    disposalId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}