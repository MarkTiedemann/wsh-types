@echo off
cscript //nologo built_tests\wscript.js /a:b c
exit /b %errorlevel%
