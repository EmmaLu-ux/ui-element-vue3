import { deleteAsync } from "del";
import { copyFile } from "fs/promises";
import { outputDir, pkgRoot } from "./common.js";

export const deletePkg = async () => {
    await deleteAsync([outputDir], { force: true })
}

// 复制package.json
export const copyPackageJson = async () => {
    await copyFile(`${pkgRoot}/package.json`, `${outputDir}/package.json`)
}
