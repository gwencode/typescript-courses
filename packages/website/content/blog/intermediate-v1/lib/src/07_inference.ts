class WebpackCompiler {
  constructor(options: {
    amd?: false | { [index: string]: any }
    bail?: boolean
    cache?:
      | boolean
      | {
          maxGenerations?: number
          type: "memory"
        }
    context?: string
    dependencies?: string[]
    devtool?: string | false
    entry?: string
    chunkLoading?: string | false
    dependOn?: string | string[]
    layer?: null | string
    runtime?: string
    wasmLoading?: string | false
    externalsType?:
      | "var"
      | "module"
      | "assign"
      | "this"
      | "window"
      | "self"
      | "global"
      | "commonjs"
      | "commonjs2"
      | "commonjs-module"
      | "amd"
      | "amd-require"
      | "umd"
      | "umd2"
      | "jsonp"
      | "system"
      | "promise"
      | "import"
      | "script"

    ignoreWarnings?: (
      | RegExp
      | {
          file?: RegExp

          message?: RegExp

          module?: RegExp
        }
    )[]
    loader?: { [index: string]: any }
    mode?: "development" | "production" | "none"
    name?: string
    parallelism?: number
    profile?: boolean
    recordsInputPath?: string | false
    recordsOutputPath?: string | false
    recordsPath?: string | false
    stats?:
      | boolean
      | "none"
      | "summary"
      | "errors-only"
      | "errors-warnings"
      | "minimal"
      | "normal"
      | "detailed"
      | "verbose"
    target?: string | false | string[]
    watch?: boolean
  }) {}
}

const cfg = {
  entry: "src/index.ts",
  // wutch: true, // SPELLING ERROR!! and no error
}

type ConstructorArg<C> = C extends {
  new (arg: infer A, ...args: any[]): any
}        // ^ infer KEYWORD
  ? A
  : never

let webpackCfg: ConstructorArg<typeof WebpackCompiler>
//  ^?
// let webpackCfg: {
//     amd?: false | {
//       [index: string]: any;
//   } | undefined;
//   bail?: boolean | undefined;
//   cache?: boolean | {
//       maxGenerations?: number | undefined;
//       type: "memory";
//   } | undefined;
//   context?: string | undefined;
//   ... 20 more ...;
//   watch?: boolean | undefined;
// }

const cfg2: ConstructorArg<typeof WebpackCompiler> = {
  entry: "src/index.ts",
  // wutch: true, // SPELLING ERROR!! guessing to write it watch
  watch: true,
}
