import { compareSync, genSalt, hashSync } from "bcrypt";

export async function getSalt() {
    return await genSalt();
}

export async function hash(value: string) {
    return await hashSync(value, await getSalt());
}

export async function verivy(value: string, hash: string) {
    return await compareSync(value, hash);
}
