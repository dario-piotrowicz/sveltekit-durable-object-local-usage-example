// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
        interface Platform {
            env: Env
            cf: CfProperties
            ctx: ExecutionContext
        }
    }
}

interface Env {
	MY_DO: DurableObjectNamespace;
    EXAMPLE_KV: KVNamespace;
}

export {};