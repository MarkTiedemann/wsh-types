@echo off
cscript //nologo built_tests\wscript.network.js /computername:%computername% /userdomain:%userdomain% /username:%username%
exit /b %errorlevel%
