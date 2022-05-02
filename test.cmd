@echo off
if not exist built_tests (
	md built_tests
)
for /f %%f in ('dir /b tests\*.js') do (
	type test_helpers\pre.js > built_tests\%%f
	type tests\%%f >> built_tests\%%f
	type test_helpers\post.js >> built_tests\%%f
)
for /f %%f in ('dir /b tests\*.cmd') do (
	call tests\%%f
)
