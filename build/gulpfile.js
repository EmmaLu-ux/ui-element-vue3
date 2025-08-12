import gulp from "gulp"
import { umdBuildEntry, modulesBuildEntry, buildStyle, deletePkg } from "./src/index.js"

export default gulp.series(deletePkg, umdBuildEntry, modulesBuildEntry, buildStyle)