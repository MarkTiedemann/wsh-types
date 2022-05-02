@echo off
setlocal enabledelayedexpansion

:: Build tests
if not exist built_tests (
	md built_tests
)
for /f %%f in ('dir /b tests\*.js') do (
	type test_helpers\pre.js > built_tests\%%f
	type tests\%%f >> built_tests\%%f
	type test_helpers\post.js >> built_tests\%%f
)

:: Run tests
echo.
set errors=0
for /f %%f in ('dir /b tests\*.cmd') do (
	call tests\%%f
	if !errorlevel! neq 0 (
		set errors=1
	)
)
echo.
if %errors% neq 0 (
	echo Some tests have failed
) else (
	echo All tests have passed
)
exit /b %errors%
