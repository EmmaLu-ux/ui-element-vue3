import gulp from "gulp"
import { umdBuildEntry, moduleBuildEntry, buildStyle, deletePkg, copyPackageJson } from "./src/index.js"

export default gulp.series(deletePkg, umdBuildEntry, moduleBuildEntry, buildStyle, copyPackageJson)