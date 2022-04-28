@echo off
cscript //nologo wscript.test.js /a:b c
echo %errorlevel%
