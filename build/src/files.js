import { deleteAsync } from "del";
import { outputDir } from "./common.js";

export const deletePkg = async () => {
    await deleteAsync([outputDir], { force: true })
}