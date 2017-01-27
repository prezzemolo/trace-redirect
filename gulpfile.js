'use strict';

/* require gulp */
const gulp = require('gulp');

/* require gulp plugins */
const tslint = require('gulp-tslint');
const ts = require('gulp-typescript');
const merge2 = require('merge2');

/* load tsconfig.json */
const tsconfig = require('./tsconfig.json');

/* source directories */
const src = gulp.src(tsconfig.include);

/* tsProject */
const tsProject = ts.createProject('tsconfig.json');

/* [task] lint: run gulp-tslint (tslint) */
gulp.task("lint", () =>
	src.pipe(tslint({
		formatter: "verbose"
	}))
	.pipe(tslint.report())
);

/* [task] build: run typescript build */
gulp.task("build", () => {
	/* before dest */
	const tsResult = tsProject.src().pipe(tsProject());

	/* merge output streams */
	return merge2([
		tsResult.dts.pipe(gulp.dest(tsconfig.compilerOptions.declarationDir)),
		tsResult.js.pipe(gulp.dest(tsconfig.compilerOptions.outDir))
	]);
});

/* [task] test: for jenkins */
gulp.task("test", ["lint", "build"]);
