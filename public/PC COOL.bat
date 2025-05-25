@echo off
color 0A
title ULTIMATE PC CLEAN & NETWORK RESET
echo ====================================================
echo        FULL PC CLEAN + NETWORK + BROWSER RESET
echo ====================================================
echo.

:: Close browsers
echo Closing browsers...
taskkill /F /IM chrome.exe >nul 2>&1
taskkill /F /IM msedge.exe >nul 2>&1

:: Flush DNS, reset IP and Winsock
echo Resetting network settings...
ipconfig /flushdns
netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew

:: Clear temp files
echo Cleaning temp files...
del /q /f /s %TEMP%\*
del /q /f /s C:\Windows\Temp\*
del /q /f /s C:\Windows\Prefetch\*
del /q /f /s "%APPDATA%\Microsoft\Windows\Recent\*"

:: Disk cleanup (automated mode)
echo Running disk cleanup silently...
cleanmgr /sagerun:1

:: Remove Chrome Data
echo Cleaning Google Chrome...
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cache"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Code Cache"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Cookies"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\History"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Web Data"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Login Data"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Autofill*"
rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions"

:: Remove Edge Data
echo Cleaning Microsoft Edge...
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Cache"
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Code Cache"
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Cookies"
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\History"
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Web Data"
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Login Data"
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Autofill*"
rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\Extensions"

:: Optional Full Profile Reset (Uncomment to use)
:: echo FULL browser reset...
:: rd /s /q "%LOCALAPPDATA%\Google\Chrome\User Data"
:: rd /s /q "%LOCALAPPDATA%\Microsoft\Edge\User Data"

echo.
echo ✅ PC CLEANED, NETWORK RESET, BROWSERS REFRESHED!
echo 🔄 You may restart your PC for full effect.
pause
exit
