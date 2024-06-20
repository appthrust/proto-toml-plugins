import { test } from "bun:test";
import { mkdtemp } from "node:fs/promises";
import os from "node:os";
import { dirname } from "node:path";
import { $, Glob } from "bun";

const tomlPattern = new Glob("*/*.toml");
const tomlPaths = await Array.fromAsync(tomlPattern.scan("."));
const dirs = tomlPaths.map(dirname);

test.each(dirs)("proto install %s latest --pin local", async (name) => {
	const dir = await mkdtemp(`${os.tmpdir()}/test-${name}-`);
	const tomlPath = `${import.meta.dir}/${name}/plugin.toml`;
	$.cwd(dir);
	console.log(await $`proto plugin add ${name} source:${tomlPath}`.text());
	console.log(await $`proto install ${name} latest --pin local`.text());
});
