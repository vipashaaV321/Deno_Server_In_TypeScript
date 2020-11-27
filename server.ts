import {serve} from "https://deno.land/std@0.79.0/http/server.ts";
const s=serve({port:4300})

for (const req of s){
    req.respond({body:"Deno server"})
}
